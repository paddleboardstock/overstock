/*
One-off transform: Paddle Board Overstock -> Paddle Board Overstock (paddleboardoverstock.com)
- keep 13 products (10 SUP + 3 paddle-board accessories), delete the other 87
- rebrand all text, rename all files/dirs containing "paddleboardoverstock"
- delete boat catalog PDFs, trim media.yaml entries
Run: node scripts/transform-to-overstock.mjs
*/
import fs from 'node:fs';
import path from 'node:path';
import { globSync } from 'glob';
import * as yaml from 'js-yaml';

const KEEP = new Set([
  'sup-explorer-11',
  'sup-cheetah-surge',
  'sup-leviathan-wake',
  'sup-medusa-glow',
  'sup-ocean-pulse',
  'sup-ocean-voyager',
  'sup-dolphin-wave',
  'sup-flowing-lotus',
  'sup-jungle-mandala',
  'sup-tropical-breeze',
  'oars-pump-set',
  'life-vest-classic',
  'life-vest-pro',
]);

const log = (...a) => console.log('[transform]', ...a);

function keyOf(raw) {
  const m = raw.match(/^\s*(?:['"]([^'"]+)['"]|([A-Za-z_$][\w$]*))\s*:/);
  return m ? m[1] || m[2] : null;
}

function findContainer(text, marker) {
  const m = text.indexOf(marker);
  if (m < 0) throw new Error('marker not found: ' + marker);
  const eq = text.indexOf('=', m);
  let i = eq;
  while (i < text.length && text[i] !== '[' && text[i] !== '{') i++;
  return i;
}

function scanEntries(text, openIdx) {
  let depth = 0;
  let entryStart = -1;
  const entries = [];
  let i = openIdx;
  while (i < text.length) {
    const c = text[i];
    if (c === "'" || c === '"' || c === '`') {
      if (depth === 1 && entryStart < 0) entryStart = i;
      const q = c;
      i++;
      while (i < text.length && text[i] !== q) {
        if (text[i] === '\\') i++;
        i++;
      }
      i++;
      continue;
    }
    if (c === '/' && text[i + 1] === '/') {
      while (i < text.length && text[i] !== '\n') i++;
      continue;
    }
    if (c === '/' && text[i + 1] === '*') {
      i += 2;
      while (i < text.length && !(text[i] === '*' && text[i + 1] === '/')) i++;
      i += 2;
      continue;
    }
    if (c === '{' || c === '[' || c === '(') {
      if (depth === 1 && entryStart < 0) entryStart = i;
      depth++;
      i++;
      continue;
    }
    if (c === '}' || c === ']' || c === ')') {
      depth--;
      if (depth === 0) {
        if (entryStart >= 0) entries.push({ start: entryStart, end: i });
        return { entries, closeIdx: i };
      }
      i++;
      continue;
    }
    if (depth === 1) {
      if (c === ',') {
        if (entryStart >= 0) {
          entries.push({ start: entryStart, end: i });
          entryStart = -1;
        }
        i++;
        continue;
      }
      if (entryStart < 0 && !/\s/.test(c)) entryStart = i;
    }
    i++;
  }
  throw new Error('unbalanced container at ' + openIdx);
}

// mapEntry(entryText) -> newText | null(drop). Returns new full text.
function trimContainer(text, openIdx, mapEntry) {
  const { entries, closeIdx } = scanEntries(text, openIdx);
  const out = [];
  let dropped = 0;
  for (const e of entries) {
    const raw = text.slice(e.start, e.end);
    const mapped = mapEntry(raw);
    if (mapped === null) {
      dropped++;
      continue;
    }
    out.push(String(mapped).replace(/[\s,]+$/, ''));
  }
  const open = text[openIdx];
  const close = open === '[' ? ']' : '}';
  const body = out.length ? '\n  ' + out.join(',\n  ') + ',\n' : '';
  const rebuilt = open + body + close;
  return {
    text: text.slice(0, openIdx) + rebuilt + text.slice(closeIdx + 1),
    total: entries.length,
    kept: out.length,
    dropped,
  };
}

function trimFile(file, marker, mapEntry) {
  let text = fs.readFileSync(file, 'utf8');
  const openIdx = findContainer(text, marker);
  const res = trimContainer(text, openIdx, mapEntry);
  fs.writeFileSync(file, res.text, 'utf8');
  log(`${file}: kept ${res.kept}/${res.total}, dropped ${res.dropped}`);
  return res;
}

// ---------- 1. delete non-keep product MDX ----------
let removedMdx = 0;
for (const f of globSync('src/content/products/*.mdx')) {
  const id = path.basename(f, '.mdx');
  if (!KEEP.has(id)) {
    fs.rmSync(f);
    removedMdx++;
  }
}
log('deleted product MDX files:', removedMdx);

// ---------- 2. collect ALL product ids (before trimming products.ts) ----------
{
  const text = fs.readFileSync('src/data/products.ts', 'utf8');
  const openIdx = findContainer(text, 'export const products');
  const { entries } = scanEntries(text, openIdx);
  const ids = entries.map((e) => (text.slice(e.start, e.end).match(/\bid:\s*'([^']+)'/) || [])[1]);
  log('total product records found:', ids.length);
  const missing = [...KEEP].filter((k) => !ids.includes(k));
  if (missing.length) throw new Error('KEEP ids missing from products.ts: ' + missing.join(', '));
}

// ---------- 3. trim data files ----------
// products.ts array
trimFile('src/data/products.ts', 'export const products', (raw) => {
  const m = raw.match(/\bid:\s*'([^']+)'/);
  return m && KEEP.has(m[1]) ? raw : null;
});

// product-business-data.ts (id -> info)
trimFile('src/data/product-business-data.ts', 'export const productBusinessData', (raw) =>
  KEEP.has(keyOf(raw)) ? raw : null
);

// product-compliance.ts (category -> info): keep sup/accessory
trimFile('src/data/product-compliance.ts', 'const complianceByCategory', (raw) => {
  const k = keyOf(raw);
  return k === 'sup' || k === 'accessory' ? raw : null;
});

// lang -> { titles, summaries, labels, cats }
const filterL10nLangEntry = (raw) => {
  const braceIdx = raw.indexOf('{');
  if (braceIdx < 0) return raw;
  const res = trimContainer(raw, braceIdx, (fieldRaw) => {
    const fname = keyOf(fieldRaw);
    if (fname === 'titles' || fname === 'summaries') {
      const b = fieldRaw.indexOf('{');
      return trimContainer(fieldRaw, b, (idEntry) => (KEEP.has(keyOf(idEntry)) ? idEntry : null)).text;
    }
    return fieldRaw;
  });
  return res.text;
};

// lang -> { id: markdown/body }
const filterLangIdEntry = (raw) => {
  const braceIdx = raw.indexOf('{');
  if (braceIdx < 0) return raw;
  const res = trimContainer(raw, braceIdx, (idEntry) => (KEEP.has(keyOf(idEntry)) ? idEntry : null));
  return res.text;
};

trimFile('src/lib/product-l10n.ts', 'export const PRODUCT_L10N', filterL10nLangEntry);
trimFile('src/lib/product-l10n-mt.ts', 'export const PRODUCT_L10N_MT', filterL10nLangEntry);
trimFile('src/lib/product-content-l10n.ts', 'export const PRODUCT_CONTENT_L10N', filterLangIdEntry);
trimFile('src/lib/product-content-l10n-mt.ts', 'export const PRODUCT_CONTENT_L10N_MT', filterLangIdEntry);
trimFile('src/lib/product-extras.ts', 'export const PRODUCT_EXTRAS', filterLangIdEntry);
trimFile('src/data/product-texts.ts', 'export const productTexts', filterLangIdEntry);

// ---------- 4. YAML: product-visuals / categories ----------
{
  const file = 'src/data/site/product-visuals.yaml';
  const doc = yaml.load(fs.readFileSync(file, 'utf8'));
  doc.visuals = (doc.visuals || []).filter((v) => KEEP.has(v.id));
  fs.writeFileSync(file, yaml.dump(doc, { lineWidth: -1 }), 'utf8');
  log(`${file}: kept ${doc.visuals.length} visuals`);
}
{
  const file = 'src/data/site/categories.yaml';
  const doc = yaml.load(fs.readFileSync(file, 'utf8'));
  for (const k of Object.keys(doc)) {
    if (k !== 'SUP' && k !== 'ACCESSORY') delete doc[k];
  }
  fs.writeFileSync(file, yaml.dump(doc, { lineWidth: -1 }), 'utf8');
  log(`${file}: kept ${Object.keys(doc).join(', ')}`);
}

// ---------- 5. media.yaml: remove inflatable-boat-catalog entries ----------
{
  const files = globSync('src/data/pages/**/media.yaml');
  let touched = 0;
  for (const file of files) {
    const lines = fs.readFileSync(file, 'utf8').split('\n');
    const drop = new Set();
    lines.forEach((line, idx) => {
      if (line.includes('paddleboardoverstock-inflatable-boat-catalog')) {
        drop.add(idx);
        for (let j = idx - 1; j >= Math.max(0, idx - 5); j--) {
          if (/^\s*-\s+name:/.test(lines[j])) {
            drop.add(j);
            break;
          }
        }
      }
    });
    if (drop.size) {
      fs.writeFileSync(file, lines.filter((_, idx) => !drop.has(idx)).join('\n'), 'utf8');
      touched++;
    }
  }
  log('media.yaml files trimmed of boat-catalog entries:', touched);
}

// ---------- 6. delete boat catalog PDFs ----------
{
  const files = globSync('public/catalogs/*inflatable-boat-catalog*.pdf');
  for (const f of files) fs.rmSync(f);
  log('deleted boat catalog PDFs:', files.length);
}

// ---------- 7. delete generated i18n data (regenerated at build) ----------
fs.rmSync('src/i18n/generated', { recursive: true, force: true });
log('removed src/i18n/generated (regenerated on build)');

// ---------- 8. product-image-manifest.json -> only kept ids ----------
{
  const file = 'scripts/product-image-manifest.json';
  if (fs.existsSync(file)) {
    const doc = JSON.parse(fs.readFileSync(file, 'utf8'));
    for (const k of Object.keys(doc)) {
      if (!KEEP.has(k)) delete doc[k];
    }
    fs.writeFileSync(file, JSON.stringify(doc, null, 2) + '\n', 'utf8');
    log('product-image-manifest.json keys left:', Object.keys(doc).length);
  }
}

// ---------- 9. delete non-keep product image dirs ----------
{
  const dir = 'public/images/paddleboardoverstock/products';
  let n = 0;
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    if (fs.statSync(p).isDirectory() && name !== 'sup-series') {
      fs.rmSync(p, { recursive: true });
      n++;
    }
  }
  log('deleted product image dirs:', n);
}

// ---------- 10. delete unreferenced top-level product webp files ----------
{
  const TEXT_EXT = new Set([
    '.astro',
    '.ts',
    '.mjs',
    '.cjs',
    '.js',
    '.json',
    '.yaml',
    '.yml',
    '.md',
    '.mdx',
    '.txt',
    '.html',
    '.css',
    '.toml',
    '.svg',
    '.xml',
    '.mts',
    '.cts',
  ]);
  const referenced = new Set();
  for (const f of globSync('src/**/*.*', { ignore: ['src/i18n/generated/**'] })) {
    if (!TEXT_EXT.has(path.extname(f))) continue;
    const s = fs.readFileSync(f, 'utf8');
    const re = /products\/([A-Za-z0-9._-]+)\.(webp|png|jpg|jpeg|gif|svg)/g;
    let m;
    while ((m = re.exec(s))) referenced.add(m[1] + '.' + m[2]);
  }
  for (const f of globSync('public/**/*.*', { ignore: ['public/catalogs/**'] })) {
    if (!TEXT_EXT.has(path.extname(f)) || f.includes('images/paddleboardoverstock')) continue;
    const s = fs.readFileSync(f, 'utf8');
    const re = /products\/([A-Za-z0-9._-]+)\.(webp|png|jpg|jpeg|gif|svg)/g;
    let m;
    while ((m = re.exec(s))) referenced.add(m[1] + '.' + m[2]);
  }
  const dir = 'public/images/paddleboardoverstock/products';
  let n = 0;
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    if (fs.statSync(p).isFile() && !referenced.has(name)) {
      fs.rmSync(p);
      n++;
      console.log('   deleted unreferenced:', name);
    }
  }
  log('deleted unreferenced top-level product images:', n);
}

// ---------- 11. rename dirs/files containing "paddleboardoverstock" ----------
{
  const renamePath = (p) => p.split('paddleboardoverstock').join('paddleboardoverstock');
  const walkFiles = (dir) => {
    let entries;
    try {
      entries = fs.readdirSync(dir, { withFileTypes: true });
    } catch {
      return;
    }
    for (const e of entries) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) {
        if (e.name === '.git' || e.name === 'node_modules') continue;
        walkFiles(p);
      } else if (e.isFile() && e.name.includes('paddleboardoverstock')) {
        fs.renameSync(p, path.join(dir, renamePath(e.name)));
      }
    }
  };
  // files first (inside old dirs), then dirs bottom-up
  walkFiles('.');
  const dirs = globSync('**/paddleboardoverstock*/', { ignore: ['node_modules/**', '.git/**'] });
  for (const d of dirs.sort().reverse()) {
    const p = d.replace(/\/$/, '');
    if (fs.existsSync(p)) {
      fs.renameSync(p, renamePath(p));
    }
  }
  log('renamed paddleboardoverstock paths done');
}

// ---------- 12. global text replacement ----------
{
  const TEXT_EXT = new Set([
    '.astro',
    '.ts',
    '.mjs',
    '.cjs',
    '.js',
    '.json',
    '.jsonc',
    '.yaml',
    '.yml',
    '.md',
    '.mdx',
    '.txt',
    '.html',
    '.css',
    '.toml',
    '.svg',
    '.xml',
    '.mts',
    '.cts',
    '.map',
    '.yarnrc',
  ]);
  const REPLACEMENTS = [
    ['@paddleboardoverstock', '@paddleboardoverstock'],
    ['company/paddleboardoverstock', 'company/paddleboardoverstock'],
    ['assets.paddleboardoverstock.com', 'assets.paddleboardoverstock.com'],
    ['paddleboardoverstock.com', 'paddleboardoverstock.com'],
    ['Weihai Dongjilian Co., Ltd.', 'Weihai Dongjilian Co., Ltd.'],
    ['Weihai Dongjilian Co., Ltd.', 'Weihai Dongjilian Co., Ltd.'],
    ['PADDLE BOARD OVERSTOCK', 'PADDLE BOARD OVERSTOCK'],
    ['Paddle Board Overstock', 'Paddle Board Overstock'],
    ['paddleboardoverstock', 'paddleboardoverstock'],
  ];
  const files = globSync('**/*', {
    ignore: ['node_modules/**', '.git/**', 'dist/**', '.cache/**', '.astro/**', 'public/catalogs/**'],
  });
  let fileCount = 0;
  for (const f of files) {
    let st;
    try {
      st = fs.lstatSync(f);
    } catch {
      continue;
    }
    if (!st.isFile()) continue;
    const ext = path.extname(f).toLowerCase();
    if (!TEXT_EXT.has(ext)) continue;
    let s;
    try {
      s = fs.readFileSync(f, 'utf8');
    } catch {
      continue;
    }
    let t = s;
    for (const [from, to] of REPLACEMENTS) t = t.split(from).join(to);
    if (t !== s) {
      fs.writeFileSync(f, t, 'utf8');
      fileCount++;
    }
  }
  log('text files rewritten:', fileCount);
}

// ---------- 13. final leftover report ----------
{
  const files = globSync('**/*', {
    ignore: ['node_modules/**', '.git/**', 'dist/**', '.cache/**', '.astro/**', 'public/catalogs/**'],
  });
  const leftovers = [];
  for (const f of files) {
    let st;
    try {
      st = fs.lstatSync(f);
    } catch {
      continue;
    }
    if (!st.isFile()) continue;
    if (/paddleboardoverstock/i.test(f)) {
      leftovers.push('PATH: ' + f);
      continue;
    }
    const ext = path.extname(f).toLowerCase();
    if (
      ![
        '.astro',
        '.ts',
        '.mjs',
        '.cjs',
        '.js',
        '.json',
        '.yaml',
        '.yml',
        '.md',
        '.mdx',
        '.txt',
        '.html',
        '.css',
        '.toml',
        '.svg',
        '.xml',
      ].includes(ext)
    )
      continue;
    let s;
    try {
      s = fs.readFileSync(f, 'utf8');
    } catch {
      continue;
    }
    if (/paddleboardoverstock/i.test(s)) leftovers.push('TEXT: ' + f);
  }
  log('leftover paddleboardoverstock references:', leftovers.length);
  for (const l of leftovers.slice(0, 40)) console.log('   ', l);
}

log('DONE');
