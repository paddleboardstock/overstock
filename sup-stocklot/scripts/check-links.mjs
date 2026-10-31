// Static link integrity + orphan-page check over dist/.
// Usage: node scripts/check-links.mjs
// - crawls every .html file in dist/
// - verifies each internal href resolves to a file (or a known dynamic endpoint)
// - reports public pages that no other page links to (orphans)

import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { join, resolve as resolvePath } from 'node:path';

const DIST = resolvePath('dist');

// Non-static endpoints handled by the Pages Function / API routes.
const DYNAMIC_OK = new Set([
  '/portal/login',
  '/portal/logout',
  '/portal/session.json',
  '/manifest.csv',
  '/portal/manifest.csv',
]);

function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) out.push(...walk(full));
    else if (entry.endsWith('.html')) out.push(full);
  }
  return out;
}

function hrefTargetExists(href) {
  if (DYNAMIC_OK.has(href)) return true;
  const clean = href.split('#')[0].split('?')[0];
  if (clean.length === 0) return true; // pure anchor / query
  let candidate = join(DIST, clean);
  try {
    if (statSync(candidate).isDirectory()) candidate = join(candidate, 'index.html');
  } catch {
    /* not a directory; fall through */
  }
  return existsSync(candidate);
}

const htmlFiles = walk(DIST);
const broken = [];
const referenced = new Set();
const HREF_RE = /href="(\/[^"]*)"/g;

for (const file of htmlFiles) {
  const rel = file.slice(DIST.length).replace(/\\/g, '/').replace(/\/index\.html$/, '/') || '/';
  const html = readFileSync(file, 'utf8');
  let m;
  while ((m = HREF_RE.exec(html)) !== null) {
    const href = m[1];
    referenced.add(href.split('#')[0].split('?')[0].replace(/\/$/, '') || '/');
    if (!hrefTargetExists(href)) {
      broken.push({ page: rel, href });
    }
  }
}

// Orphan detection: public HTML pages never referenced by any internal link.
const orphans = [];
for (const file of htmlFiles) {
  const rel = file.slice(DIST.length).replace(/\\/g, '/');
  const url = rel.replace(/index\.html$/, '').replace(/\.html$/, '') || '/';
  if (url.startsWith('/portal/')) continue; // gated: intentionally unlinked publicly
  if (url === '/404') continue;
  const key = (url.endsWith('/') ? url.slice(0, -1) : url) || '/';
  if (!referenced.has(key)) orphans.push(url);
}

let failed = 0;
if (broken.length > 0) {
  failed += broken.length;
  console.log('BROKEN LINKS:');
  for (const b of broken) console.log(`  ${b.page} -> ${b.href}`);
} else {
  console.log('No broken internal links.');
}
if (orphans.length > 0) {
  failed += orphans.length;
  console.log('ORPHAN PAGES (no internal link points here):');
  for (const o of orphans) console.log(`  ${o}`);
} else {
  console.log('No orphan public pages.');
}
console.log(`\n${htmlFiles.length} HTML files checked, ${broken.length} broken, ${orphans.length} orphans`);
process.exit(failed > 0 ? 1 : 0);
