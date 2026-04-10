import { NextRequest, NextResponse } from "next/server";

import { getClientIp } from "@/lib/get-client-ip";
import { logError } from "@/lib/log-error";
import { RateLimitExceededError, enforceRateLimit } from "@/lib/rate-limit";
import { leadWebhookPayloadSchema } from "@/lib/validation";

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

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = leadWebhookPayloadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", details: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const webhookUrl = process.env.WEBHOOK_URL;
  if (!webhookUrl) {
    logError("webhook", new Error("WEBHOOK_URL is not configured"));
    return NextResponse.json({ error: "Webhook not configured" }, { status: 503 });
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(parsed.data),
    });

    if (!response.ok) {
      logError("webhook-upstream", new Error(`HTTP ${response.status}`));
      return NextResponse.json({ error: "Webhook request failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    logError("webhook-fetch", e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
