PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS carts (
  id TEXT PRIMARY KEY,
  session_hash TEXT NOT NULL,
  currency TEXT NOT NULL DEFAULT 'usd' CHECK (length(currency) = 3),
  expires_at TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now')),
  updated_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now'))
);

CREATE TABLE IF NOT EXISTS cart_items (
  id TEXT PRIMARY KEY,
  cart_id TEXT NOT NULL REFERENCES carts(id) ON DELETE CASCADE,
  variant_id TEXT NOT NULL REFERENCES product_variants(id) ON DELETE RESTRICT,
  quantity INTEGER NOT NULL CHECK (quantity > 0 AND quantity <= 99),
  UNIQUE(cart_id, variant_id)
);

CREATE TABLE IF NOT EXISTS orders (
  id TEXT PRIMARY KEY,
  order_number TEXT NOT NULL UNIQUE,
  email TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending_payment'
    CHECK (status IN ('pending_shipping_quote','pending_payment','paid','processing','shipped','completed','cancelled','payment_failed','partially_refunded','refunded')),
  currency TEXT NOT NULL CHECK (length(currency) = 3),
  subtotal_cents INTEGER NOT NULL CHECK (subtotal_cents >= 0),
  shipping_cents INTEGER NOT NULL DEFAULT 0 CHECK (shipping_cents >= 0),
  discount_cents INTEGER NOT NULL DEFAULT 0 CHECK (discount_cents >= 0),
  tax_cents INTEGER NOT NULL DEFAULT 0 CHECK (tax_cents >= 0),
  total_cents INTEGER NOT NULL CHECK (total_cents >= 0),
  shipping_status TEXT NOT NULL DEFAULT 'not_set'
    CHECK (shipping_status IN ('not_set','quote_required','quoted','ready','shipped')),
  shipping_address_json TEXT NOT NULL,
  billing_address_json TEXT,
  customer_note TEXT,
  shipping_quote_expires_at TEXT,
  paid_at TEXT,
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now')),
  updated_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now'))
);

CREATE TABLE IF NOT EXISTS order_items (
  id TEXT PRIMARY KEY,
  order_id TEXT NOT NULL REFERENCES orders(id) ON DELETE RESTRICT,
  variant_id TEXT NOT NULL REFERENCES product_variants(id) ON DELETE RESTRICT,
  sku_snapshot TEXT NOT NULL,
  title_snapshot TEXT NOT NULL,
  variant_snapshot TEXT NOT NULL,
  unit_price_cents INTEGER NOT NULL CHECK (unit_price_cents >= 0),
  quantity INTEGER NOT NULL CHECK (quantity > 0),
  line_total_cents INTEGER NOT NULL CHECK (line_total_cents >= 0),
  UNIQUE(order_id, variant_id)
);

CREATE TABLE IF NOT EXISTS inventory_reservations (
  id TEXT PRIMARY KEY,
  order_id TEXT NOT NULL REFERENCES orders(id) ON DELETE RESTRICT,
  variant_id TEXT NOT NULL REFERENCES product_variants(id) ON DELETE RESTRICT,
  quantity INTEGER NOT NULL CHECK (quantity > 0),
  status TEXT NOT NULL DEFAULT 'active'
    CHECK (status IN ('active','consumed','released','expired')),
  expires_at TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now')),
  updated_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now')),
  UNIQUE(order_id, variant_id)
);

CREATE INDEX IF NOT EXISTS idx_orders_status_created ON orders(status, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_orders_email_created ON orders(email, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_reservations_expiry ON inventory_reservations(status, expires_at);
CREATE INDEX IF NOT EXISTS idx_cart_session_expiry ON carts(session_hash, expires_at);
