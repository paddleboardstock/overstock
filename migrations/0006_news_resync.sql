-- P11 (Perplexity SEO/GEO audit, item P0-2): the live /news/ route serves 68
-- off-topic RIB/shipyard articles seeded before the B2C pivot, diluting the
-- site's paddle-board topical focus. Purge the table; deploy.yml re-seeds the
-- current on-topic SUP posts (src/content/news/*.mdx) when the table is empty.
DELETE FROM news;
