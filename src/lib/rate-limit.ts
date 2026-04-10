import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const WINDOW = "1 m" as const;
const MAX_REQUESTS = 10;

let ratelimit: Ratelimit | null | undefined;

function getRatelimit(): Ratelimit | null {
  if (ratelimit !== undefined) return ratelimit;

  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) {
    ratelimit = null;
    if (process.env.NODE_ENV === "production") {
      console.warn(
        "[rate-limit] UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN nie sú nastavené — rate limiting je vypnutý. Nastavte Upstash Redis."
      );
    }
    return null;
  }

  const redis = new Redis({ url, token });
  ratelimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(MAX_REQUESTS, WINDOW),
    prefix: "rl:jsinvestor",
    analytics: true,
  });
  return ratelimit;
}

export class RateLimitExceededError extends Error {
  constructor() {
    super("Too many requests");
    this.name = "RateLimitExceededError";
  }
}

/** Max. 10 požiadaviek / minúta / IP (ak je Upstash nakonfigurovaný). */
export async function enforceRateLimit(ip: string): Promise<void> {
  const rl = getRatelimit();
  if (!rl) return;

  const { success } = await rl.limit(`ip:${ip}`);
  if (!success) {
    throw new RateLimitExceededError();
  }
}
