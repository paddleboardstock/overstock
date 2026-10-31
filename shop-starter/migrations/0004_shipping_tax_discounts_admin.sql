PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS shipping_rules (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  country_code TEXT NOT NULL,
  region_code TEXT,
  postal_prefix TEXT,
  currency TEXT NOT NULL DEFAULT 'usd' CHECK (length(currency) = 3),
  amount_cents INTEGER CHECK (amount_cents IS NULL OR amount_cents >= 0),
  mode TEXT NOT NULL CHECK (mode IN ('flat','manual_quote')),
  active INTEGER NOT NULL DEFAULT 1 CHECK (active IN (0,1)),
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now')),
  updated_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now'))
);

CREATE TABLE IF NOT EXISTS tax_rules (
  id TEXT PRIMARY KEY,
  country_code TEXT NOT NULL,
  region_code TEXT,
  postal_prefix TEXT,
  rate_basis_points INTEGER NOT NULL CHECK (rate_basis_points >= 0 AND rate_basis_points <= 10000),
  applies_to_shipping INTEGER NOT NULL DEFAULT 0 CHECK (applies_to_shipping IN (0,1)),
  active INTEGER NOT NULL DEFAULT 1 CHECK (active IN (0,1)),
  effective_from TEXT,
  effective_until TEXT,
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now'))
);

CREATE TABLE IF NOT EXISTS discounts (
  id TEXT PRIMARY KEY,
  code TEXT NOT NULL UNIQUE COLLATE NOCASE,
  discount_type TEXT NOT NULL CHECK (discount_type IN ('percent','fixed')),
  value INTEGER NOT NULL CHECK (value > 0),
  currency TEXT CHECK (currency IS NULL OR length(currency) = 3),
  starts_at TEXT,
  expires_at TEXT,
  usage_limit INTEGER CHECK (usage_limit IS NULL OR usage_limit > 0),
  usage_count INTEGER NOT NULL DEFAULT 0 CHECK (usage_count >= 0),
  active INTEGER NOT NULL DEFAULT 1 CHECK (active IN (0,1)),
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now'))
);

CREATE TABLE IF NOT EXISTS discount_redemptions (
  discount_id TEXT NOT NULL REFERENCES discounts(id) ON DELETE RESTRICT,
  order_id TEXT NOT NULL REFERENCES orders(id) ON DELETE RESTRICT,
  customer_email TEXT NOT NULL,
  redeemed_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now')),
  PRIMARY KEY (discount_id, order_id)
);

CREATE TABLE IF NOT EXISTS shipments (
  id TEXT PRIMARY KEY,
  order_id TEXT NOT NULL REFERENCES orders(id) ON DELETE RESTRICT,
  carrier TEXT,
  tracking_number TEXT,
  tracking_url TEXT,
  status TEXT NOT NULL DEFAULT 'pending'
    CHECK (status IN ('pending','label_created','shipped','in_transit','delivered','exception','returned')),
  shipped_at TEXT,
  delivered_at TEXT,
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now')),
  updated_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now'))
);

CREATE TABLE IF NOT EXISTS admin_audit_logs (
  id TEXT PRIMARY KEY,
  admin_id TEXT NOT NULL,
  action TEXT NOT NULL,
  target_type TEXT NOT NULL,
  target_id TEXT,
  metadata_json TEXT,
  request_id TEXT,
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now'))
);

CREATE INDEX IF NOT EXISTS idx_shipping_rules_lookup ON shipping_rules(country_code, region_code, active);
CREATE INDEX IF NOT EXISTS idx_tax_rules_lookup ON tax_rules(country_code, region_code, active);
CREATE INDEX IF NOT EXISTS idx_shipments_order ON shipments(order_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_audit_admin_time ON admin_audit_logs(admin_id, created_at DESC);
