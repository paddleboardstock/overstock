// Stripe REST access (no SDK) + webhook signature verification via WebCrypto.
// Card data never touches this Worker: Stripe Checkout hosts payment collection.

import type { Env } from './types';
import { hmacSha256Hex, timingSafeEqual } from './util';

const STRIPE_API = 'https://api.stripe.com/v1';

export interface StripeResult<T = Record<string, unknown>> {
  ok: boolean;
  status: number;
  body: T & { error?: { message?: string; type?: string } };
}

/** Call the Stripe REST API with a form-encoded body. */
export async function stripeRequest<T = Record<string, unknown>>(
  env: Env,
  method: 'GET' | 'POST',
  path: string,
  params: Record<string, string> = {},
  idempotencyKey?: string
): Promise<StripeResult<T>> {
  const headers: Record<string, string> = {
    Authorization: `Bearer ${env.STRIPE_SECRET_KEY}`,
    'Content-Type': 'application/x-www-form-urlencoded',
  };
  if (idempotencyKey) headers['Idempotency-Key'] = idempotencyKey;
  const body = method === 'POST' ? new URLSearchParams(params).toString() : undefined;
  const query = method === 'GET' && Object.keys(params).length > 0 ? `?${new URLSearchParams(params)}` : '';
  const res = await fetch(`${STRIPE_API}${path}${query}`, { method, headers, body });
  const data = (await res.json().catch(() => ({}))) as T & { error?: { message?: string; type?: string } };
  return { ok: res.ok, status: res.status, body: data };
}

/**
 * Verify the Stripe-Signature header against the exact raw request body.
 * Scheme: `t=timestamp,v1=hex HMAC-SHA256(secret, `${t}.${rawBody}`)`.
 * Reject stale timestamps beyond tolerance (default 5 minutes).
 */
export async function verifyStripeSignature(
  rawBody: string,
  signatureHeader: string,
  secret: string,
  toleranceSeconds = 300
): Promise<boolean> {
  let timestamp = '';
  const signatures: string[] = [];
  for (const part of signatureHeader.split(',')) {
    const [k, v] = part.split('=', 2).map((s) => s.trim());
    if (k === 't') timestamp = v;
    else if (k === 'v1' && v) signatures.push(v);
  }
  if (!timestamp || signatures.length === 0) return false;
  const age = Math.abs(Math.floor(Date.now() / 1000) - Number.parseInt(timestamp, 10));
  if (!Number.isFinite(age) || age > toleranceSeconds) return false;
  const expected = await hmacSha256Hex(secret, `${timestamp}.${rawBody}`);
  return signatures.some((sig) => timingSafeEqual(sig.toLowerCase(), expected));
}
