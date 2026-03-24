import { NextRequest, NextResponse } from "next/server";

const ECOMail_BASE = "https://api2.ecomailapp.cz";

export async function POST(request: NextRequest) {
  const apiKey = process.env.ECOMAIL_API_KEY;
  const listId = process.env.ECOMAIL_LIST_ID;

  if (!apiKey || !listId) {
    return NextResponse.json({ error: "Ecomail not configured" }, { status: 500 });
  }

  let body: {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
  };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { firstName, lastName, email, phone } = body;

  if (!email?.trim()) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

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
      const errText = await response.text();
      console.error("Ecomail API error:", response.status, errText);
      return NextResponse.json(
        { error: "Ecomail request failed" },
        { status: response.status }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Ecomail error:", e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
