PRAGMA foreign_keys = ON;

-- Product-level country visibility control.
-- visibility_mode:
--   'all'   — visible to every visitor (default; visibility_countries stays NULL)
--   'allow' — visible ONLY to visitors / shipping addresses in the listed countries
--   'block' — visible everywhere EXCEPT the listed countries
-- visibility_countries: JSON array of ISO 3166-1 alpha-2 codes, e.g. ["US","CA"].
ALTER TABLE products ADD COLUMN visibility_mode TEXT NOT NULL DEFAULT 'all';
ALTER TABLE products ADD COLUMN visibility_countries TEXT;
