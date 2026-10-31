/*
 * Minimal Stripe client over REST (no SDK dependency).
 *
 * - createCheckoutSession: POST /v1/checkout/sessions with form-encoded params.
 * - verifyWebhookSignature: manual `t=..,v1=..` HMAC-SHA256 verification using
 *   Web Crypto, against the RAW request body (never parse JSON first).
 */

const DEFAULT_API_BASE = 'https://api.stripe.com';

export interface StripeCheckoutSession {
  id: string;
  url: string;
  amount_total: number;
  currency: string;
  payment_intent: string | null;
  payment_status: string;
}

export interface CreateSessionParams {
  orderId: string;
  orderNumber: string;
  email: string;
  currency: string;
  totalCents: number;
  successUrl: string;
  cancelUrl: string;
  idempotencyKey: string;
}

export class StripeError extends Error {
  readonly status: number;
  readonly code: string;
  constructor(status: number, code: string, message: string) {
    super(message);
    this.name = 'StripeError';
    this.status = status;
    this.code = code;
  }
}

export async function createCheckoutSession(
  apiKey: string,
  apiBase: string | undefined,
  params: CreateSessionParams,
): Promise<StripeCheckoutSession> {
  const base = apiBase || DEFAULT_API_BASE;
  const form = new URLSearchParams();
  form.set('mode', 'payment');
  form.set('customer_email', params.email);
  form.set('success_url', params.successUrl);
  form.set('cancel_url', params.cancelUrl);
  form.set('client_reference_id', params.orderId);
  form.set('metadata[order_id]', params.orderId);
  form.set('metadata[order_number]', params.orderNumber);
  form.set('line_items[0][quantity]', '1');
  form.set('line_items[0][price_data][currency]', params.currency);
  form.set('line_items[0][price_data][unit_amount]', String(params.totalCents));
  form.set(
    'line_items[0][price_data][product_data][name]',
    `Order ${params.orderNumber}`,
  );

  const response = await fetch(`${base}/v1/checkout/sessions`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/x-www-form-urlencoded',
      'Idempotency-Key': params.idempotencyKey,
      'Stripe-Version': '2025-08-27.basil',
    },
    body: form.toString(),
  });

  if (!response.ok) {
    let code = `http_${response.status}`;
    let message = `Stripe session creation failed with HTTP ${response.status}`;
    try {
      const errJson = (await response.json()) as { error?: { code?: string; message?: string } };
      if (errJson.error?.code) code = errJson.error.code;
      if (errJson.error?.message) message = `Stripe: ${errJson.error.message}`;
    } catch {
      // keep HTTP-level message
    }
    throw new StripeError(response.status, code, message);
  }
  return (await response.json()) as StripeCheckoutSession;
}

const SIGNATURE_TOLERANCE_SECONDS = 300;

export async function verifyWebhookSignature(
  rawBody: string,
  signatureHeader: string,
  secret: string,
): Promise<boolean> {
  let timestamp = '';
  const signatures: string[] = [];
  for (const part of signatureHeader.split(',')) {
    const trimmed = part.trim();
    const eq = trimmed.indexOf('=');
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq);
    const value = trimmed.slice(eq + 1);
    if (key === 't') timestamp = value;
    else if (key === 'v1') signatures.push(value);
  }
  if (!timestamp || signatures.length === 0) return false;

  const tsNumber = Number(timestamp);
  if (!Number.isFinite(tsNumber)) return false;
  const drift = Math.abs(Math.floor(Date.now() / 1000) - tsNumber);
  if (drift > SIGNATURE_TOLERANCE_SECONDS) return false;

  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  const mac = await crypto.subtle.sign(
    'HMAC',
    key,
    new TextEncoder().encode(`${timestamp}.${rawBody}`),
  );
  const expected = [...new Uint8Array(mac)]
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
  return signatures.some((s) => s.length === expected.length && timingSafeEqualStr(s, expected));
}

function timingSafeEqualStr(a: string, b: string): boolean {
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}
