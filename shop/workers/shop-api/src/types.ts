// Domain types for the shop-api Worker.
// The runtime interfaces (D1Database etc.) come from @cloudflare/workers-types.

export interface Env {
  SHOP_DB: D1Database;
  APP_ORIGIN: string;
  API_ORIGIN: string;
  STRIPE_SECRET_KEY: string;
  STRIPE_WEBHOOK_SECRET: string;
  SHOP_SESSION_SECRET: string;
  /** Bearer token guarding every /api/admin/* route (v0 bootstrap auth). */
  SHOP_ADMIN_TOKEN: string;
  RESERVATION_TTL_MINUTES?: string;
  /** Optional R2 assets bucket for future image storage. */
  SHOP_ASSETS?: R2Bucket;
}

// ---------------------------------------------------------------------------
// D1 row shapes (mirror migrations/*.sql exactly)
// ---------------------------------------------------------------------------

export interface ProductRow {
  id: string;
  slug: string;
  status: 'draft' | 'active' | 'archived';
  brand: string | null;
  title: string;
  description: string | null;
  created_at: string;
  updated_at: string;
}

export interface ProductImageRow {
  id: string;
  product_id: string;
  r2_key: string | null;
  external_url: string | null;
  alt_text: string | null;
  sort_order: number;
  created_at: string;
}

export interface VariantRow {
  id: string;
  product_id: string;
  sku: string;
  variant_name: string;
  currency: string;
  price_cents: number;
  compare_at_cents: number | null;
  weight_oz: number | null;
  active: 0 | 1;
  created_at: string;
  updated_at: string;
}

export interface InventoryRow {
  variant_id: string;
  on_hand: number;
  reserved: number;
  updated_at: string;
}

export interface OrderRow {
  id: string;
  order_number: string;
  email: string;
  status: OrderStatus;
  currency: string;
  subtotal_cents: number;
  shipping_cents: number;
  discount_cents: number;
  tax_cents: number;
  total_cents: number;
  shipping_status: ShippingStatus;
  shipping_address_json: string;
  billing_address_json: string | null;
  customer_note: string | null;
  shipping_quote_expires_at: string | null;
  paid_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface OrderItemRow {
  id: string;
  order_id: string;
  variant_id: string;
  sku_snapshot: string;
  title_snapshot: string;
  variant_snapshot: string;
  unit_price_cents: number;
  quantity: number;
  line_total_cents: number;
}

export interface ReservationRow {
  id: string;
  order_id: string;
  variant_id: string;
  quantity: number;
  status: 'active' | 'consumed' | 'released' | 'expired';
  expires_at: string;
  created_at: string;
  updated_at: string;
}

export interface PaymentRow {
  id: string;
  order_id: string;
  provider: 'stripe';
  stripe_session_id: string | null;
  stripe_payment_intent_id: string | null;
  amount_cents: number;
  currency: string;
  status: 'pending' | 'processing' | 'succeeded' | 'failed' | 'partially_refunded' | 'refunded';
  refunded_cents: number;
  created_at: string;
  updated_at: string;
}

export interface ShippingQuoteRow {
  id: string;
  order_id: string;
  currency: string;
  amount_cents: number;
  carrier_name: string | null;
  service_name: string | null;
  notes: string | null;
  status: 'proposed' | 'accepted' | 'rejected' | 'expired' | 'superseded';
  expires_at: string;
  accepted_at: string | null;
  created_by_admin_id: string;
  created_at: string;
}

export interface ShipmentRow {
  id: string;
  order_id: string;
  carrier: string | null;
  tracking_number: string | null;
  tracking_url: string | null;
  status: 'pending' | 'label_created' | 'shipped' | 'in_transit' | 'delivered' | 'exception' | 'returned';
  shipped_at: string | null;
  delivered_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface ShippingRuleRow {
  id: string;
  name: string;
  country_code: string;
  region_code: string | null;
  postal_prefix: string | null;
  currency: string;
  amount_cents: number | null;
  mode: 'flat' | 'manual_quote';
  active: 0 | 1;
  created_at: string;
  updated_at: string;
}

export interface TaxRuleRow {
  id: string;
  country_code: string;
  region_code: string | null;
  postal_prefix: string | null;
  rate_basis_points: number;
  applies_to_shipping: 0 | 1;
  active: 0 | 1;
  effective_from: string | null;
  effective_until: string | null;
  created_at: string;
}

export interface DiscountRow {
  id: string;
  code: string;
  discount_type: 'percent' | 'fixed';
  value: number;
  currency: string | null;
  starts_at: string | null;
  expires_at: string | null;
  usage_limit: number | null;
  usage_count: number;
  active: 0 | 1;
  created_at: string;
}

// ---------------------------------------------------------------------------
// Shared value types
// ---------------------------------------------------------------------------

export type OrderStatus =
  | 'pending_shipping_quote'
  | 'pending_payment'
  | 'paid'
  | 'processing'
  | 'shipped'
  | 'completed'
  | 'cancelled'
  | 'payment_failed'
  | 'partially_refunded'
  | 'refunded';

export type ShippingStatus = 'not_set' | 'quote_required' | 'quoted' | 'ready' | 'shipped';

export interface ShippingAddress {
  name: string;
  line1: string;
  line2?: string;
  city: string;
  region?: string;
  postalCode: string;
  countryCode: string; // ISO 3166-1 alpha-2, upper-cased
}

export interface CheckoutRequestBody {
  items: Array<{ variantId: string; quantity: number }>;
  email: string;
  shippingAddress: ShippingAddress;
  currency: string;
  discountCode?: string;
  idempotencyKey: string;
  note?: string;
}

export interface PublicVariant {
  id: string;
  sku: string;
  name: string;
  currency: string;
  priceCents: number;
  compareAtCents: number | null;
  availableQuantity: number;
}

export interface PublicImage {
  url: string;
  alt: string | null;
}

export interface PublicProduct {
  id: string;
  slug: string;
  title: string;
  description: string | null;
  images: PublicImage[];
  variants: PublicVariant[];
}
