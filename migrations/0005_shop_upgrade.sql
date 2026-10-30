-- Shop upgrade: SKU inventory + reservations (anti-oversell), checkout
-- idempotency, Stripe webhook idempotency, shipment tracking, admin audit
-- logs and discount codes.
-- Reference architecture: pbo-shop-starter migrations (inventory guarded by
-- `on_hand - reserved >= qty` conditional updates, webhook event claims,
-- idempotency-key replay protection, audit trail on every admin write).
-- Timestamps in the new tables are INTEGER milliseconds (matches the news
-- table convention and the drizzle timestamp_ms columns in workers/shared/schema.ts).

-- ---------------------------------------------------------------------------
-- 1. Inventory (one row per catalog slug; reserved = held by unpaid checkouts)
-- ---------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS inventory (
  slug TEXT PRIMARY KEY,
  on_hand INTEGER NOT NULL DEFAULT 0 CHECK (on_hand >= 0),
  reserved INTEGER NOT NULL DEFAULT 0 CHECK (reserved >= 0),
  updated_at INTEGER NOT NULL DEFAULT (cast(unixepoch('subsecond') * 1000 as integer))
);

-- Append-only ledger of every stock change (audit + debugging).
CREATE TABLE IF NOT EXISTS inventory_movements (
  id TEXT PRIMARY KEY,
  slug TEXT NOT NULL,
  on_hand_delta INTEGER NOT NULL DEFAULT 0, -- signed change applied to on_hand
  reserved_delta INTEGER NOT NULL DEFAULT 0, -- signed change applied to reserved
  reason TEXT NOT NULL, -- seed | reserve | release | expire | consume | adjust | backorder
  order_id TEXT,
  created_at INTEGER NOT NULL DEFAULT (cast(unixepoch('subsecond') * 1000 as integer))
);
CREATE INDEX IF NOT EXISTS idx_inventory_movements_slug ON inventory_movements (slug);
CREATE INDEX IF NOT EXISTS idx_inventory_movements_order ON inventory_movements (order_id);
CREATE INDEX IF NOT EXISTS idx_inventory_movements_created ON inventory_movements (created_at);

-- ---------------------------------------------------------------------------
-- 2. Reservations (stock held between checkout start and payment/expiry)
-- ---------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS inventory_reservations (
  id TEXT PRIMARY KEY,
  order_id TEXT NOT NULL,
  slug TEXT NOT NULL,
  qty INTEGER NOT NULL CHECK (qty > 0),
  status TEXT NOT NULL DEFAULT 'active', -- active | consumed | released | expired
  expires_at INTEGER NOT NULL, -- ms epoch; lazy-released once passed
  created_at INTEGER NOT NULL DEFAULT (cast(unixepoch('subsecond') * 1000 as integer)),
  updated_at INTEGER NOT NULL DEFAULT (cast(unixepoch('subsecond') * 1000 as integer)),
  UNIQUE (order_id, slug)
);
CREATE INDEX IF NOT EXISTS idx_inventory_reservations_status ON inventory_reservations (status);
CREATE INDEX IF NOT EXISTS idx_inventory_reservations_expiry ON inventory_reservations (status, expires_at);
CREATE INDEX IF NOT EXISTS idx_inventory_reservations_order ON inventory_reservations (order_id);

-- ---------------------------------------------------------------------------
-- 3. Stripe webhook event claims (exactly-once processing per event id)
-- ---------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS stripe_events (
  event_id TEXT PRIMARY KEY,
  event_type TEXT,
  object_id TEXT,
  processing_status TEXT NOT NULL DEFAULT 'received', -- received | processed | error
  error_code TEXT,
  received_at INTEGER NOT NULL DEFAULT (cast(unixepoch('subsecond') * 1000 as integer)),
  processed_at INTEGER
);
CREATE INDEX IF NOT EXISTS idx_stripe_events_object ON stripe_events (object_id);
CREATE INDEX IF NOT EXISTS idx_stripe_events_received ON stripe_events (received_at);

-- ---------------------------------------------------------------------------
-- 4. Checkout request idempotency (replay returns the stored response)
-- ---------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS checkout_requests (
  id TEXT PRIMARY KEY,
  idempotency_key_hash TEXT NOT NULL UNIQUE,
  request_fingerprint TEXT NOT NULL,
  order_id TEXT,
  status TEXT NOT NULL DEFAULT 'created', -- created | completed | failed
  response_json TEXT,
  created_at INTEGER NOT NULL DEFAULT (cast(unixepoch('subsecond') * 1000 as integer)),
  updated_at INTEGER NOT NULL DEFAULT (cast(unixepoch('subsecond') * 1000 as integer))
);
CREATE INDEX IF NOT EXISTS idx_checkout_requests_order ON checkout_requests (order_id);

-- ---------------------------------------------------------------------------
-- 5. Shipments (tracking info attached to an order)
-- ---------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS shipments (
  id TEXT PRIMARY KEY,
  order_id TEXT NOT NULL UNIQUE,
  carrier TEXT NOT NULL DEFAULT '',
  tracking_number TEXT NOT NULL DEFAULT '',
  tracking_url TEXT NOT NULL DEFAULT '',
  status TEXT NOT NULL DEFAULT 'pending', -- pending | shipped | in_transit | delivered | failed
  shipped_at INTEGER,
  created_at INTEGER NOT NULL DEFAULT (cast(unixepoch('subsecond') * 1000 as integer)),
  updated_at INTEGER NOT NULL DEFAULT (cast(unixepoch('subsecond') * 1000 as integer))
);
CREATE INDEX IF NOT EXISTS idx_shipments_order ON shipments (order_id);

-- ---------------------------------------------------------------------------
-- 6. Admin audit log (every admin mutation writes a row)
-- ---------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS admin_audit_logs (
  id TEXT PRIMARY KEY,
  admin_id TEXT NOT NULL,
  admin_email TEXT NOT NULL DEFAULT '',
  action TEXT NOT NULL, -- e.g. order.status_update, inventory.adjust, discount.create
  target_type TEXT NOT NULL DEFAULT '',
  target_id TEXT NOT NULL DEFAULT '',
  metadata TEXT NOT NULL DEFAULT '{}', -- JSON
  request_id TEXT,
  created_at INTEGER NOT NULL DEFAULT (cast(unixepoch('subsecond') * 1000 as integer))
);
CREATE INDEX IF NOT EXISTS idx_admin_audit_logs_created ON admin_audit_logs (created_at);
CREATE INDEX IF NOT EXISTS idx_admin_audit_logs_target ON admin_audit_logs (target_type, target_id);

-- ---------------------------------------------------------------------------
-- 7. Discount codes (server-side validation only; client prices never trusted)
-- ---------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS discounts (
  id TEXT PRIMARY KEY,
  code TEXT NOT NULL UNIQUE COLLATE NOCASE,
  kind TEXT NOT NULL DEFAULT 'percent' CHECK (kind IN ('percent', 'fixed')), -- percent (1-100) | fixed (cents)
  value INTEGER NOT NULL CHECK (value > 0),
  currency TEXT NOT NULL DEFAULT 'USD',
  active INTEGER NOT NULL DEFAULT 1,
  starts_at INTEGER, -- ms epoch; NULL = starts immediately
  expires_at INTEGER, -- ms epoch; NULL = never expires
  usage_limit INTEGER, -- NULL = unlimited
  usage_count INTEGER NOT NULL DEFAULT 0,
  created_at INTEGER NOT NULL DEFAULT (cast(unixepoch('subsecond') * 1000 as integer)),
  updated_at INTEGER NOT NULL DEFAULT (cast(unixepoch('subsecond') * 1000 as integer))
);
CREATE INDEX IF NOT EXISTS idx_discounts_active ON discounts (active);

CREATE TABLE IF NOT EXISTS discount_redemptions (
  id TEXT PRIMARY KEY,
  discount_id TEXT NOT NULL REFERENCES discounts (id) ON DELETE CASCADE,
  order_id TEXT NOT NULL,
  code TEXT NOT NULL DEFAULT '',
  amount_cents INTEGER NOT NULL DEFAULT 0,
  created_at INTEGER NOT NULL DEFAULT (cast(unixepoch('subsecond') * 1000 as integer)),
  UNIQUE (discount_id, order_id)
);
CREATE INDEX IF NOT EXISTS idx_discount_redemptions_order ON discount_redemptions (order_id);

-- ---------------------------------------------------------------------------
-- 8. Order table: record the applied discount on each order
-- ---------------------------------------------------------------------------
ALTER TABLE `order` ADD COLUMN discount_cents INTEGER NOT NULL DEFAULT 0;
ALTER TABLE `order` ADD COLUMN discount_code TEXT NOT NULL DEFAULT '';

-- ---------------------------------------------------------------------------
-- 9. Seed inventory rows for every catalog slug (placeholder stock — adjust
--    via the admin inventory page). New slugs require a new seed row.
-- ---------------------------------------------------------------------------
INSERT OR IGNORE INTO inventory (slug, on_hand, reserved) VALUES
  ('life-vest-classic', 25, 0),
  ('life-vest-pro', 25, 0),
  ('oars-pump-set', 25, 0),
  ('sup-cheetah-surge', 25, 0),
  ('sup-dolphin-wave', 25, 0),
  ('sup-explorer-11', 25, 0),
  ('sup-flowing-lotus', 25, 0),
  ('sup-jungle-mandala', 25, 0),
  ('sup-leviathan-wake', 25, 0),
  ('sup-medusa-glow', 25, 0),
  ('sup-ocean-pulse', 25, 0),
  ('sup-ocean-voyager', 25, 0),
  ('sup-tropical-breeze', 25, 0);

INSERT INTO inventory_movements (id, slug, on_hand_delta, reserved_delta, reason)
SELECT lower(hex(randomblob(16))), slug, on_hand, 0, 'seed' FROM inventory;
