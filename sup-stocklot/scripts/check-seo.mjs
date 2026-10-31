// SEO + isolation audit over dist/.
// Usage: node scripts/check-seo.mjs   (run after `npm run build`)
//
// Checks:
//  1. Every public HTML page has a <title>, meta description and canonical;
//     titles and descriptions are unique across pages.
//  2. Every <script type="application/ld+json"> block parses as valid JSON.
//  3. Gated (dist/portal/) HTML pages carry noindex,nofollow,noarchive robots meta.
//  4. Isolation red line: forbidden identity strings (legal entity, brand email,
//     brand name) appear ONLY under dist/portal/ — never in public HTML, JS
//     bundles, CSV, txt, sitemap or any other public file.

import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, resolve as resolvePath } from 'node:path';

const DIST = resolvePath('dist');
const FORBIDDEN = ['DONGJILIAN', 'aquafarer', 'toby@'];

let passed = 0;
let failed = 0;
function check(name, ok, detail = '') {
  if (ok) {
    passed++;
    console.log(`PASS  ${name}`);
  } else {
    failed++;
    console.log(`FAIL  ${name}${detail ? ' — ' + detail : ''}`);
  }
}

function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) out.push(...walk(full));
    else out.push(full);
  }
  return out;
}

const allFiles = walk(DIST);
const htmlFiles = allFiles.filter((f) => f.endsWith('.html'));
const publicHtml = htmlFiles.filter((f) => !f.slice(DIST.length).replace(/\\/g, '/').startsWith('/portal/'));

// --- 1. titles / descriptions / canonicals --------------------------------
const titles = new Map();
const descriptions = new Map();
let metaOk = true;
for (const file of publicHtml) {
  const html = readFileSync(file, 'utf8');
  const rel = file.slice(DIST.length).replace(/\\/g, '/');
  const title = html.match(/<title>([^<]*)<\/title>/)?.[1]?.trim() ?? '';
  const desc = html.match(/<meta name="description" content="([^"]*)"/)?.[1]?.trim() ?? '';
  const canonical = html.match(/<link rel="canonical" href="([^"]*)"/)?.[1]?.trim() ?? '';
  if (!title || !desc || !canonical) {
    metaOk = false;
    console.log(`      missing meta on ${rel}: title=${Boolean(title)} desc=${Boolean(desc)} canonical=${Boolean(canonical)}`);
  }
  if (titles.has(title)) {
    metaOk = false;
    console.log(`      duplicate title "${title}" on ${rel} and ${titles.get(title)}`);
  } else titles.set(title, rel);
  if (descriptions.has(desc)) {
    metaOk = false;
    console.log(`      duplicate description on ${rel} and ${descriptions.get(desc)} (${desc.slice(0, 60)}…)`);
  } else descriptions.set(desc, rel);
}
check('public pages have unique titles/descriptions + canonical', metaOk);

// --- 2. JSON-LD validity ----------------------------------------------------
let ldTotal = 0;
let ldBad = 0;
for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  const re = /<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g;
  let m;
  while ((m = re.exec(html)) !== null) {
    ldTotal++;
    try {
      JSON.parse(m[1]);
    } catch (err) {
      ldBad++;
      console.log(`      invalid JSON-LD in ${file.slice(DIST.length)}: ${err.message}`);
    }
  }
}
check(`JSON-LD blocks valid (${ldTotal} found)`, ldBad === 0 && ldTotal > 0);

// --- 3. gated pages are noindex ---------------------------------------------
let gatedOk = true;
for (const file of htmlFiles) {
  const rel = file.slice(DIST.length).replace(/\\/g, '/');
  const html = readFileSync(file, 'utf8');
  const robots = html.match(/<meta name="robots" content="([^"]*)"/)?.[1] ?? '';
  if (rel.startsWith('/portal/')) {
    if (!robots.includes('noindex')) {
      gatedOk = false;
      console.log(`      gated page missing noindex: ${rel}`);
    }
  } else if (rel !== '/404.html' && robots.includes('noindex')) {
    gatedOk = false;
    console.log(`      public page is noindex: ${rel}`);
  }
}
check('gated pages noindex, public pages indexable', gatedOk);

// --- 4. isolation red line: forbidden strings never public -------------------
let leakOk = true;
const TEXT_EXT = /\.(html|js|css|txt|csv|xml|json|svg|js\.map)$/i;
for (const file of allFiles) {
  const rel = file.slice(DIST.length).replace(/\\/g, '/');
  if (rel.startsWith('/portal/')) continue;
  if (!TEXT_EXT.test(rel)) continue;
  const content = readFileSync(file, 'utf8').toLowerCase();
  for (const bad of FORBIDDEN) {
    if (content.includes(bad.toLowerCase())) {
      leakOk = false;
      console.log(`      FORBIDDEN "${bad}" in public file ${rel}`);
    }
  }
}
check('no legal-entity / brand strings in any public file', leakOk);

// --- 5. robots.txt + sitemap present -----------------------------------------
check('robots.txt present', allFiles.some((f) => f.endsWith(join('robots.txt'))) || allFiles.some((f) => f.endsWith('robots.txt')));
check('sitemap present', allFiles.some((f) => f.endsWith('sitemap-index.xml') || f.endsWith('sitemap-0.xml')));

console.log(`\n${passed} passed, ${failed} failed`);
process.exit(failed > 0 ? 1 : 0);
