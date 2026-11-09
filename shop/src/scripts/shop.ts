// Shared client-side helpers for the storefront: API access, cart storage,
// money formatting. Prices shown here are display-only — the API always
// recomputes totals at checkout.

export const API_BASE: string = import.meta.env.PUBLIC_API_BASE ?? '';

export interface CartItem {
  variantId: string;
  slug: string;
  sku: string;
  title: string;
  variantName: string;
  priceCents: number;
  currency: string;
  image: string;
  quantity: number;
}

const CART_KEY = 'pbo-shop-cart';

export function getCart(): CartItem[] {
  try {
    const raw = localStorage.getItem(CART_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? (parsed as CartItem[]) : [];
  } catch {
    return [];
  }
}

export function saveCart(items: CartItem[]): void {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
  window.dispatchEvent(new CustomEvent('pbo-cart-changed'));
}

export function addToCart(item: CartItem): void {
  const items = getCart();
  const existing = items.find((i) => i.variantId === item.variantId);
  if (existing) {
    existing.quantity = Math.min(99, existing.quantity + item.quantity);
  } else {
    items.push(item);
  }
  saveCart(items);
}

export function cartCount(): number {
  return getCart().reduce((n, i) => n + i.quantity, 0);
}

export function money(cents: number, currency: string): string {
  const symbol = currency.toLowerCase() === 'usd' ? '$' : currency.toUpperCase() + ' ';
  return `${symbol}${(cents / 100).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

export async function apiGet<T>(path: string): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`);
  const data = (await res.json()) as T & { error?: { message?: string } };
  if (!res.ok) throw new Error(data.error?.message ?? `Request failed (${res.status})`);
  return data;
}

export interface ApiErrorBody {
  error?: { code?: string; message?: string; requestId?: string };
}

export async function apiPost<T>(path: string, body: unknown, method = 'POST'): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  const data = (await res.json()) as T & ApiErrorBody;
  if (!res.ok) throw new Error(data.error?.message ?? `Request failed (${res.status})`);
  return data;
}

export function idempotencyKey(): string {
  if (!crypto.randomUUID) return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  return crypto.randomUUID();
}

export function updateCartBadge(): void {
  const el = document.getElementById('cart-badge');
  if (el) {
    const n = cartCount();
    el.textContent = String(n);
    el.classList.toggle('hidden', n === 0);
  }
}
