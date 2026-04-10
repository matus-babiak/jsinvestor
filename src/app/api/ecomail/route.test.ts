import { NextRequest } from "next/server";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { POST } from "./route";

function makeRequest(body: unknown) {
  return new NextRequest("http://localhost/api/ecomail", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body),
  });
}

describe("POST /api/ecomail", () => {
  beforeEach(() => {
    process.env.ECOMAIL_API_KEY = "test-key";
    process.env.ECOMAIL_LIST_ID = "list-1";
  });

  afterEach(() => {
    vi.restoreAllMocks();
    delete process.env.ECOMAIL_API_KEY;
    delete process.env.ECOMAIL_LIST_ID;
  });

  it("returns 400 when body fails Zod validation", async () => {
    const res = await POST(makeRequest({ email: "not-valid" }));
    expect(res.status).toBe(400);
    const json = (await res.json()) as { error: string };
    expect(json.error).toBe("Validation failed");
  });

  it("returns 500 when Ecomail env is not configured", async () => {
    delete process.env.ECOMAIL_API_KEY;
    delete process.env.ECOMAIL_LIST_ID;
    const res = await POST(makeRequest({ email: "valid@example.com" }));
    expect(res.status).toBe(500);
    const json = (await res.json()) as { error: string };
    expect(json.error).toBe("Ecomail not configured");
  });

  it("subscribes via Ecomail when env and upstream succeed", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
    });
    vi.stubGlobal("fetch", fetchMock);

    const res = await POST(
      makeRequest({
        email: "client@example.com",
        firstName: "A",
        lastName: "B",
      }),
    );

    expect(res.status).toBe(200);
    expect(fetchMock).toHaveBeenCalledTimes(1);
    const [url, init] = fetchMock.mock.calls[0] as [string, RequestInit];
    expect(url).toContain("/lists/list-1/subscribe");
    expect(init.method).toBe("POST");
    const upstreamBody = JSON.parse(init.body as string) as {
      subscriber_data: { email: string };
    };
    expect(upstreamBody.subscriber_data.email).toBe("client@example.com");
  });
});
