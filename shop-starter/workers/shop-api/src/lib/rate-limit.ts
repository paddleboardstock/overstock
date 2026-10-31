/*
 * Per-isolate token bucket rate limiter.
 *
 * LIMITATION (documented): this is a best-effort, per-isolate limiter only.
 * Cloudflare may run many isolates per Worker, so real limits are approximate.
 * For hard limits, move the counter into a Durable Object or the shared D1
 * `rate_limit` table pattern used by the main site's contact worker.
 */

interface Bucket {
  tokens: number;
  updatedAt: number;
}

const buckets = new Map<string, Bucket>();

export interface RateLimitResult {
  ok: boolean;
  retryAfterSeconds: number;
}

export function rateLimit(key: string, limit: number, windowMs: number): RateLimitResult {
  const now = Date.now();
  let bucket = buckets.get(key);
  if (!bucket) {
    bucket = { tokens: limit, updatedAt: now };
    buckets.set(key, bucket);
  }
  const elapsed = now - bucket.updatedAt;
  const refill = (elapsed / windowMs) * limit;
  bucket.tokens = Math.min(limit, bucket.tokens + refill);
  bucket.updatedAt = now;
  if (bucket.tokens >= 1) {
    bucket.tokens -= 1;
    return { ok: true, retryAfterSeconds: 0 };
  }
  const secondsUntilToken = Math.ceil(((1 - bucket.tokens) * windowMs) / limit / 1000);
  return { ok: false, retryAfterSeconds: Math.max(1, secondsUntilToken) };
}

// Prevent unbounded memory growth in long-lived isolates.
export function sweepRateLimits(now: number): void {
  for (const [key, bucket] of buckets) {
    if (now - bucket.updatedAt > 10 * 60 * 1000) buckets.delete(key);
  }
}
