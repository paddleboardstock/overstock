PRAGMA foreign_keys = ON;

-- Idempotency record for customer checkout creation requests.
-- Store a hash of the key, not the raw browser-provided key.
CREATE TABLE IF NOT EXISTS checkout_requests (
  id TEXT PRIMARY KEY,
  idempotency_key_hash TEXT NOT NULL UNIQUE,
  request_fingerprint TEXT NOT NULL,
  order_id TEXT REFERENCES orders(id) ON DELETE RESTRICT,
  status TEXT NOT NULL DEFAULT 'started'
    CHECK (status IN ('started','order_created','session_created','failed')),
  response_json TEXT,
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now')),
  updated_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now'))
);

-- Immutable quote shown to the customer; payment is blocked until accepted.
CREATE TABLE IF NOT EXISTS shipping_quotes (
  id TEXT PRIMARY KEY,
  order_id TEXT NOT NULL REFERENCES orders(id) ON DELETE RESTRICT,
  currency TEXT NOT NULL CHECK (length(currency) = 3),
  amount_cents INTEGER NOT NULL CHECK (amount_cents >= 0),
  carrier_name TEXT,
  service_name TEXT,
  notes TEXT,
  status TEXT NOT NULL DEFAULT 'proposed'
    CHECK (status IN ('proposed','accepted','rejected','expired','superseded')),
  expires_at TEXT NOT NULL,
  accepted_at TEXT,
  created_by_admin_id TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now'))
);

-- Store the exact tax basis/rate/amount used for each order.
-- Manual tax configuration must be reviewed for each supported jurisdiction.
CREATE TABLE IF NOT EXISTS order_tax_lines (
  id TEXT PRIMARY KEY,
  order_id TEXT NOT NULL REFERENCES orders(id) ON DELETE RESTRICT,
  jurisdiction_code TEXT NOT NULL,
  tax_name TEXT NOT NULL,
  taxable_amount_cents INTEGER NOT NULL CHECK (taxable_amount_cents >= 0),
  rate_basis_points INTEGER NOT NULL CHECK (rate_basis_points >= 0 AND rate_basis_points <= 10000),
  tax_amount_cents INTEGER NOT NULL CHECK (tax_amount_cents >= 0),
  applies_to_shipping INTEGER NOT NULL DEFAULT 0 CHECK (applies_to_shipping IN (0,1)),
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now'))
);

CREATE TABLE IF NOT EXISTS refunds (
  id TEXT PRIMARY KEY,
  order_id TEXT NOT NULL REFERENCES orders(id) ON DELETE RESTRICT,
  payment_id TEXT NOT NULL REFERENCES payments(id) ON DELETE RESTRICT,
  stripe_refund_id TEXT NOT NULL UNIQUE,
  amount_cents INTEGER NOT NULL CHECK (amount_cents > 0),
  currency TEXT NOT NULL CHECK (length(currency) = 3),
  status TEXT NOT NULL CHECK (status IN ('pending','succeeded','failed','canceled')),
  reason TEXT,
  created_by_admin_id TEXT,
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now')),
  updated_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now'))
);

CREATE INDEX IF NOT EXISTS idx_checkout_requests_order ON checkout_requests(order_id);
CREATE INDEX IF NOT EXISTS idx_shipping_quotes_order ON shipping_quotes(order_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_order_tax_lines_order ON order_tax_lines(order_id);
CREATE INDEX IF NOT EXISTS idx_refunds_order ON refunds(order_id, created_at DESC);
