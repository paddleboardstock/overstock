export function nowIso(): string {
  return new Date().toISOString();
}

export function isoPlusMs(ms: number): string {
  return new Date(Date.now() + ms).toISOString();
}

export function uuid(): string {
  return crypto.randomUUID();
}

export async function sha256Hex(input: string): Promise<string> {
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(input));
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

export function orderNumber(): string {
  const date = new Date();
  const ymd = `${date.getUTCFullYear()}${String(date.getUTCMonth() + 1).padStart(2, '0')}${String(
    date.getUTCDate(),
  ).padStart(2, '0')}`;
  const rand = [...crypto.getRandomValues(new Uint8Array(6))]
    .map((b) => b.toString(36))
    .join('')
    .toUpperCase()
    .padEnd(8, '0')
    .slice(0, 8);
  return `PBO-${ymd}-${rand}`;
}

/** Constant-time string comparison (over the SHA-256 digests of both values). */
export async function timingSafeEqual(a: string, b: string): Promise<boolean> {
  const [da, db] = await Promise.all([sha256Hex(a), sha256Hex(b)]);
  if (da.length !== db.length) return false;
  let diff = 0;
  for (let i = 0; i < da.length; i++) diff |= da.charCodeAt(i) ^ db.charCodeAt(i);
  return diff === 0;
}
