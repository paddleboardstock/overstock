-- 2026-11: the assets.paddleboardoverstock.com R2 custom domain never resolved
-- (NXDOMAIN), so every stored news.image URL pointed at a dead host. Images are
-- now served same-origin from the static Pages deploy; rewrite stored URLs.
-- Idempotent: the WHERE clause matches only rows still on the old domain.
UPDATE news
SET image = REPLACE(image, 'https://assets.paddleboardoverstock.com', 'https://paddleboardoverstock.com')
WHERE image LIKE 'https://assets.paddleboardoverstock.com%';
