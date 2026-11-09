// Shared helpers: responses, ids, hashing, rate limiting, validation.
// No external dependencies — Workers runtime + WebCrypto only.

import type { Env } from './types';

export const SECURITY_HEADERS: Record<string, string> = {
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
};

export function json(data: unknown, status = 200, extraHeaders: Record<string, string> = {}): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
      ...SECURITY_HEADERS,
      ...extraHeaders,
    },
  });
}

export function apiError(
  status: number,
  code: string,
  message: string,
  requestId: string
): Response {
  return json({ error: { code, message, requestId } }, status);
}

export function nowIso(): string {
  return new Date().toISOString();
}

export function genId(): string {
  return crypto.randomUUID();
}

/** Human-friendly unique order number, e.g. PBO-LX2K4F-7Q3D. */
export function orderNumber(): string {
  const ts = Date.now().toString(36).toUpperCase();
  const rand = Array.from(crypto.getRandomValues(new Uint8Array(6)))
    .map((b) => 'ABCDEFGHJKMNPQRSTUVWXYZ23456789'[b % 31])
    .join('');
  return `PBO-${ts}-${rand}`;
}

export async function sha256Hex(input: string): Promise<string> {
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(input));
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

export async function hmacSha256Hex(secret: string, payload: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(payload));
  return [...new Uint8Array(sig)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

/** Constant-time string comparison (defends admin token / signature checks). */
export function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

// ---------------------------------------------------------------------------
// Rate limiting (D1-backed, fixed window)
// ---------------------------------------------------------------------------

export async function rateLimit(
  db: D1Database,
  key: string,
  limit: number,
  windowSeconds: number
): Promise<boolean> {
  const cutoff = Math.floor(Date.now() / 1000) - windowSeconds;
  await db
    .prepare(
      `INSERT INTO rate_limit (key, count, updated_at) VALUES (?1, 1, unixepoch())
       ON CONFLICT(key) DO UPDATE SET
         count = CASE WHEN updated_at < ?2 THEN 1 ELSE count + 1 END,
         updated_at = unixepoch()`
    )
    .bind(key, cutoff)
    .run();
  const row = (await db.prepare('SELECT count FROM rate_limit WHERE key = ?1').bind(key).first()) as {
    count: number;
  } | null;
  return (row?.count ?? 0) <= limit;
}

export function clientKey(request: Request, scope: string): string {
  const ip =
    request.headers.get('CF-Connecting-IP') ??
    request.headers.get('X-Forwarded-For')?.split(',')[0]?.trim() ??
    'unknown';
  return `rl:${scope}:${ip}`;
}

// ---------------------------------------------------------------------------
// Validation helpers (never trust client JSON)
// ---------------------------------------------------------------------------

export function isEmail(value: unknown): value is string {
  return typeof value === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value) && value.length <= 254;
}

export function isNonEmptyString(value: unknown, maxLen = 500): value is string {
  return typeof value === 'string' && value.trim().length > 0 && value.length <= maxLen;
}

export function isOptionalString(value: unknown, maxLen = 500): value is string | undefined {
  return value === undefined || (typeof value === 'string' && value.length <= maxLen);
}

export function isCountryCode(value: unknown): value is string {
  return typeof value === 'string' && /^[A-Za-z]{2}$/.test(value);
}

export function isCurrency(value: unknown): value is string {
  return typeof value === 'string' && /^[a-z]{3}$/.test(value);
}

export function isPositiveInt(value: unknown, max: number): value is number {
  return typeof value === 'number' && Number.isInteger(value) && value > 0 && value <= max;
}

export function isNonNegativeInt(value: unknown, max: number): value is number {
  return typeof value === 'number' && Number.isInteger(value) && value >= 0 && value <= max;
}

export function isSlug(value: unknown): value is string {
  return typeof value === 'string' && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value) && value.length <= 120;
}

export function isUuid(value: unknown): value is string {
  return (
    typeof value === 'string' &&
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(value)
  );
}

export function clampInt(value: unknown, min: number, max: number, fallback: number): number {
  const n = typeof value === 'number' ? Math.round(value) : Number.parseInt(String(value ?? ''), 10);
  if (!Number.isFinite(n)) return fallback;
  return Math.min(max, Math.max(min, n));
}

// ---------------------------------------------------------------------------
// Misc
// ---------------------------------------------------------------------------

export function reservationTtlMinutes(env: Env): number {
  const n = Number.parseInt(env.RESERVATION_TTL_MINUTES ?? '30', 10);
  return Number.isFinite(n) && n > 0 && n <= 1440 ? n : 30;
}

export function escapeLike(value: string): string {
  return value.replace(/[\\%_]/g, (c) => `\\${c}`);
}

/** CORS handling for same-origin-in-prod, cross-origin-in-dev storefront calls. */
export function corsHeaders(request: Request, env: Env): Record<string, string> {
  const origin = request.headers.get('Origin');
  const allowed = new Set([
    env.APP_ORIGIN,
    env.API_ORIGIN,
    'http://localhost:4321',
    'http://127.0.0.1:4321',
    'http://localhost:4322',
  ]);
  if (origin && allowed.has(origin)) {
    return {
      'Access-Control-Allow-Origin': origin,
      'Access-Control-Allow-Methods': 'GET,POST,PATCH,DELETE,OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type,Authorization',
      'Access-Control-Max-Age': '86400',
      Vary: 'Origin',
    };
  }
  return { Vary: 'Origin' };
}
