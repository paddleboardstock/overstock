-- Shop orders (Stripe Checkout + PayPal Orders). All money amounts are
-- stored as INTEGER cents in the order currency.
CREATE TABLE IF NOT EXISTS `order` (
  id TEXT PRIMARY KEY,
  provider TEXT NOT NULL, -- 'stripe' | 'paypal'
  provider_ref TEXT, -- Stripe session id / PayPal order id
  email TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending', -- pending | paid | failed | refunded | cancelled
  currency TEXT NOT NULL DEFAULT 'USD',
  subtotal INTEGER NOT NULL,
  shipping_cost INTEGER NOT NULL DEFAULT 0,
  total INTEGER NOT NULL,
  shipping_name TEXT NOT NULL DEFAULT '',
  shipping_address TEXT NOT NULL DEFAULT '',
  shipping_city TEXT NOT NULL DEFAULT '',
  shipping_postal TEXT NOT NULL DEFAULT '',
  shipping_country TEXT NOT NULL DEFAULT '',
  ip TEXT,
  user_agent TEXT,
  created_at INTEGER NOT NULL DEFAULT (unixepoch()),
  updated_at INTEGER NOT NULL DEFAULT (unixepoch()),
  paid_at INTEGER
);

CREATE INDEX IF NOT EXISTS idx_order_provider_ref ON `order` (provider_ref);
CREATE INDEX IF NOT EXISTS idx_order_status ON `order` (status);
CREATE INDEX IF NOT EXISTS idx_order_created_at ON `order` (created_at);

CREATE TABLE IF NOT EXISTS order_item (
  id TEXT PRIMARY KEY,
  order_id TEXT NOT NULL REFERENCES `order` (id) ON DELETE CASCADE,
  slug TEXT NOT NULL,
  title TEXT NOT NULL,
  unit_price INTEGER NOT NULL, -- cents
  qty INTEGER NOT NULL DEFAULT 1,
  line_total INTEGER NOT NULL -- cents
);

CREATE INDEX IF NOT EXISTS idx_order_item_order ON order_item (order_id);
