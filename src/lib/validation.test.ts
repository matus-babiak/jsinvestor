import { describe, expect, it } from "vitest";

import { leadSchema, leadWebhookPayloadSchema } from "./validation";

const minimalWebhookPayload = {
  firstName: "Ján",
  lastName: "Novák",
  name: "Ján Novák",
  email: "jan@example.com",
  phone: "+421900123456",
  totalPoints: 42,
  resultCategory: 2,
  submittedAt: "2026-04-10T12:00:00Z",
  q1_points: 1,
  q2_points: 2,
  q3_points: 3,
  q4_points: 4,
};

describe("leadSchema", () => {
  it("parses minimal valid lead", () => {
    const out = leadSchema.parse({ email: "a@b.co" });
    expect(out.email).toBe("a@b.co");
  });

  it("rejects invalid email", () => {
    const r = leadSchema.safeParse({ email: "not-an-email" });
    expect(r.success).toBe(false);
  });

  it("rejects invalid phone when present", () => {
    const r = leadSchema.safeParse({ email: "ok@example.com", phone: "!!!" });
    expect(r.success).toBe(false);
  });
});

describe("leadWebhookPayloadSchema", () => {
  it("accepts valid dotazník payload", () => {
    const out = leadWebhookPayloadSchema.parse(minimalWebhookPayload);
    expect(out.email).toBe("jan@example.com");
    expect(out.totalPoints).toBe(42);
  });

  it("rejects when required field missing", () => {
    const bad = { ...minimalWebhookPayload };
    delete (bad as Record<string, unknown>).email;
    const r = leadWebhookPayloadSchema.safeParse(bad);
    expect(r.success).toBe(false);
  });
});
