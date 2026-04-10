import { NextRequest, NextResponse } from "next/server";

import { getClientIp } from "@/lib/get-client-ip";
import { logError } from "@/lib/log-error";
import { RateLimitExceededError, enforceRateLimit } from "@/lib/rate-limit";
import { leadSchema } from "@/lib/validation";

const ECOMail_BASE = "https://api2.ecomailapp.cz";

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);

  try {
    await enforceRateLimit(ip);
  } catch (e) {
    if (e instanceof RateLimitExceededError) {
      return NextResponse.json({ error: "Too many requests" }, { status: 429 });
    }
    throw e;
  }

  const apiKey = process.env.ECOMAIL_API_KEY;
  const listId = process.env.ECOMAIL_LIST_ID;

  if (!apiKey || !listId) {
    return NextResponse.json({ error: "Ecomail not configured" }, { status: 500 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", details: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const { firstName, lastName, email, phone } = parsed.data;

  try {
    const response = await fetch(`${ECOMail_BASE}/lists/${listId}/subscribe`, {
      method: "POST",
      headers: {
        key: apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        subscriber_data: {
          name: (firstName ?? "").trim(),
          surname: (lastName ?? "").trim(),
          email: email.trim(),
          phone: (phone ?? "").trim(),
        },
        trigger_autoresponders: false,
        update_existing: true,
        resubscribe: false,
      }),
    });

    if (!response.ok) {
      const status = response.status;
      logError("ecomail-api", new Error(`Ecomail HTTP ${status}`));
      return NextResponse.json({ error: "Ecomail request failed" }, { status });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    logError("ecomail", e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
