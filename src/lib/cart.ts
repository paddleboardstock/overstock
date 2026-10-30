/**
 * Client-side shopping cart (localStorage-backed).
 * Shared by ProductCard, QuickViewModal, product pages, /cart, /checkout
 * and the Header cart badge via the `pbo-cart-change` event.
 */

export interface CartItem {
  slug: string;
  title: string;
  priceCents: number;
  currency: string;
  image: string;
  qty: number;
}

const CART_KEY = 'pbo-cart';
export const CART_EVENT = 'pbo-cart-change';

export function getCart(): CartItem[] {
  if (typeof localStorage === 'undefined') return [];
  try {
    const raw = localStorage.getItem(CART_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as CartItem[];
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((i) => i && typeof i.slug === 'string' && typeof i.priceCents === 'number');
  } catch {
    return [];
  }
}

export function saveCart(items: CartItem[]): void {
  if (typeof localStorage === 'undefined') return;
  localStorage.setItem(CART_KEY, JSON.stringify(items));
  if (typeof document !== 'undefined') {
    document.dispatchEvent(new CustomEvent(CART_EVENT, { detail: { count: cartCount(items) } }));
  }
}

export function addItem(item: Omit<CartItem, 'qty'>, qty = 1): void {
  const items = getCart();
  const existing = items.find((i) => i.slug === item.slug);
  if (existing) {
    existing.qty = Math.min(99, existing.qty + qty);
  } else {
    items.push({ ...item, qty: Math.min(99, Math.max(1, qty)) });
  }
  saveCart(items);
}

export function removeItem(slug: string): void {
  saveCart(getCart().filter((i) => i.slug !== slug));
}

export function setQty(slug: string, qty: number): void {
  if (qty <= 0) {
    removeItem(slug);
    return;
  }
  const items = getCart();
  const existing = items.find((i) => i.slug === slug);
  if (existing) {
    existing.qty = Math.min(99, qty);
    saveCart(items);
  }
}

export function clearCart(): void {
  saveCart([]);
}

export function cartCount(items?: CartItem[]): number {
  return (items ?? getCart()).reduce((sum, i) => sum + i.qty, 0);
}

export function cartTotalCents(items?: CartItem[]): number {
  return (items ?? getCart()).reduce((sum, i) => sum + i.priceCents * i.qty, 0);
}

export function formatPrice(cents: number, currency = 'USD'): string {
  const amount = cents / 100;
  try {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(amount);
  } catch {
    return `$${amount.toFixed(2)}`;
  }
}
