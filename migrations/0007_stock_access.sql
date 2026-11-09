-- Wholesale stock catalog access whitelist (migration 0007).
-- The /api/stock-catalog endpoint (admin-worker) serves the overstock price
-- list only to authenticated better-auth users whose email is whitelisted
-- here. Admins manage entries from /keystatic/stock-users.

CREATE TABLE IF NOT EXISTS stock_access (
  email TEXT PRIMARY KEY COLLATE NOCASE,
  note TEXT NOT NULL DEFAULT '',
  added_by TEXT NOT NULL DEFAULT '',
  created_at INTEGER NOT NULL DEFAULT (cast(unixepoch('subsecond') * 1000 as integer))
);
