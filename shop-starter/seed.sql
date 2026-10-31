-- Local seed data for smoke tests. Run after migrations:
--   npm run db:migrate:local && npm run db:seed:local

-- Products -----------------------------------------------------------------
INSERT INTO products (id, slug, status, title, description) VALUES
  ('prod-sup-explorer', 'sup-explorer-11', 'active', 'SUP Explorer 11''', 'Best-selling all-round inflatable SUP for beginners and families.'),
  ('prod-ocean-voyager', 'ocean-voyager-11', 'active', 'Ocean Voyager Series 11''', 'Touring inflatable SUP for long-distance paddling.'),
  ('prod-life-vest', 'life-vest-classic', 'active', 'Life Vest Classic', 'CE-approved buoyancy aid for paddle sports.');

-- Variants -----------------------------------------------------------------
INSERT INTO product_variants (id, product_id, sku, variant_name, currency, price_cents, compare_at_cents, active) VALUES
  ('var-sup-explorer', 'prod-sup-explorer', 'SUP-EXP-11', 'Complete package (board + paddle + pump)', 'usd', 49900, 69900, 1),
  ('var-ocean-voyager', 'prod-ocean-voyager', 'OCN-VOY-11', 'Complete package (board + paddle + pump)', 'usd', 64900, 84900, 1),
  ('var-life-vest', 'prod-life-vest', 'LVS-CLS-01', 'Universal size', 'usd', 5900, 7900, 1);

-- Stock: life-vest intentionally has exactly ONE unit (concurrency test) ----
INSERT INTO inventory (variant_id, on_hand, reserved) VALUES
  ('var-sup-explorer', 25, 0),
  ('var-ocean-voyager', 10, 0),
  ('var-life-vest', 1, 0);

INSERT INTO inventory_movements (id, variant_id, change_qty, reason, note) VALUES
  ('mov-seed-1', 'var-sup-explorer', 25, 'opening_stock', 'seed'),
  ('mov-seed-2', 'var-ocean-voyager', 10, 'opening_stock', 'seed'),
  ('mov-seed-3', 'var-life-vest', 1, 'opening_stock', 'seed');

-- Shipping: US flat rate, AU manual quote ----------------------------------
INSERT INTO shipping_rules (id, name, country_code, currency, amount_cents, mode, active) VALUES
  ('ship-us-flat', 'US flat rate', 'US', 'usd', 2900, 'flat', 1),
  ('ship-au-quote', 'AU freight quote', 'AU', 'usd', NULL, 'manual_quote', 1);

-- Tax: US 0% (defers to Stripe/state rules), DE 19% (manual example) -------
INSERT INTO tax_rules (id, country_code, rate_basis_points, applies_to_shipping, active) VALUES
  ('tax-us-zero', 'US', 0, 0, 1),
  ('tax-de-vat', 'DE', 1900, 1, 1);

-- Discounts ------------------------------------------------------------------
INSERT INTO discounts (id, code, discount_type, value, currency, usage_limit, active) VALUES
  ('disc-welcome10', 'WELCOME10', 'percent', 10, 'usd', 1000, 1);
