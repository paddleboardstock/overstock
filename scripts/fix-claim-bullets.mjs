/**
 * Fix absolute-claim bullets changed in 3 product MDX files across:
 *  - src/lib/product-content-l10n.ts     (hand, 9 langs: keep label, retranslate body)
 *  - src/lib/product-content-l10n-mt.ts  (MT, 8 langs: retranslate whole line, cache under
 *                                         the same `${lang}::${line}` keys the official
 *                                         translate-product-pages.mjs uses)
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createEngine } from './lib/translate-lib.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const HAND = path.join(ROOT, 'src/lib/product-content-l10n.ts');
const MT = path.join(ROOT, 'src/lib/product-content-l10n-mt.ts');
const PRODUCT_DIR = path.join(ROOT, 'src/content/products');
const DRY = process.argv.includes('--dry-run');

const PRODUCTS = ['sup-cheetah-surge', 'sup-ocean-voyager', 'sup-medusa-glow'];
const HAND_LANGS = ['de', 'es', 'fr', 'it', 'pt', 'pl', 'ar', 'nl', 'ru'];
const MT_LANGS = ['bg', 'hu', 'id', 'ms', 'ro', 'th', 'tl', 'tr'];

// 1. new EN bullet lines from the MDX sources
const enLines = {};
for (const slug of PRODUCTS) {
  const raw = fs.readFileSync(path.join(PRODUCT_DIR, slug + '.mdx'), 'utf8');
  const line = raw.split('\n').find((l) => l.includes('Multi-Color EVA Block Piecing'));
  if (!line) throw new Error('EN line not found for ' + slug);
  enLines[slug] = line.trim();
  console.log('EN ' + slug + ': ' + enLines[slug].slice(0, 110) + '...');
}

const engine = createEngine({
  cacheFile: path.join(ROOT, '.cache/product-pages-cache.json'),
  rateMs: 120,
  log: (m) => console.log(m),
});
engine.load();
console.log('Cache: ' + engine.cacheSize + ' entries');

const escSingle = (s) => s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
const escDouble = (s) => s.replace(/\\/g, '\\\\').replace(/"/g, '\\"');

/** Parse a TS object-literal file into lang blocks; return raw text + block ranges. */
function langRanges(text) {
  const ranges = {};
  const re = /^ {2}([a-z]{2}): \{$/gm;
  let m;
  while ((m = re.exec(text)) !== null) {
    const lang = m[1];
    const start = m.index;
    const rest = text.slice(m.index + m[0].length);
    const next = rest.search(/^ {2}[a-z]{2}: \{$|^};$/m);
    ranges[lang] = [start, start + m[0].length + (next < 0 ? rest.length : next)];
  }
  return ranges;
}

async function main() {
  if (!DRY) await engine.refreshSession();

  // ---------- HAND file ----------
  let hand = fs.readFileSync(HAND, 'utf8');
  const handRanges = langRanges(hand);
  const handReport = [];
  for (const lang of HAND_LANGS) {
    const range = handRanges[lang];
    if (!range) {
      console.log('HAND ' + lang + ': BLOCK MISSING');
      continue;
    }
    for (const slug of PRODUCTS) {
      const block = hand.slice(range[0], range[1]);
      const key = `'${slug}':`;
      const ki = block.indexOf(key);
      if (ki < 0) {
        handReport.push(`MISS ${lang}/${slug}: slug key`);
        continue;
      }
      // value on following physical line
      const afterKey = block.slice(ki);
      const nl = afterKey.indexOf('\n');
      const lineEnd = afterKey.indexOf('\n', nl + 1);
      const valueLine = afterKey.slice(nl + 1, lineEnd < 0 ? undefined : lineEnd);
      const t = valueLine.trim();
      const q = t[0];
      if (q !== "'" && q !== '"') {
        handReport.push(`MISS ${lang}/${slug}: no value line`);
        continue;
      }
      const innerEnd = t.lastIndexOf(q);
      const inner = t.slice(1, innerEnd);
      // segments are separated by the literal two-char sequence `\n` in the raw text
      const segs = inner.split('\\n');
      const unesc = (s) =>
        q === "'" ? s.replace(/\\'/g, "'").replace(/\\\\/g, '\\') : s.replace(/\\"/g, '"').replace(/\\\\/g, '\\');
      const esc = (s) => (q === "'" ? escSingle(s) : escDouble(s));
      let idx = segs[10] && unesc(segs[10]).includes('EVA') && unesc(segs[10]).includes(': ') ? 10 : -1;
      if (idx < 0) {
        const cands = segs
          .map((s, i) => ({ s, i }))
          .filter((x) => unesc(x.s).includes('EVA') && unesc(x.s).includes(': '));
        if (cands.length === 1) idx = cands[0].i;
      }
      if (idx < 0) {
        handReport.push(`MISS ${lang}/${slug}: bullet segment not found`);
        continue;
      }
      const oldSeg = unesc(segs[idx]);
      if (oldSeg.split('\n').length > 1) {
        handReport.push(`MISS ${lang}/${slug}: segment contains newline`);
        continue;
      }
      const ci = oldSeg.indexOf(': ');
      const prefix = oldSeg.slice(0, ci);
      const enBody = enLines[slug].slice(enLines[slug].indexOf(': ') + 2);
      let trBody;
      if (DRY) trBody = '[DRY] ' + enBody.slice(0, 30);
      else trBody = await engine.translate1(enBody, lang);
      if (!trBody || trBody.length < 10) {
        handReport.push(`FAIL ${lang}/${slug}: translation empty`);
        continue;
      }
      if (trBody.includes('\n')) trBody = trBody.replace(/\s*\n\s*/g, ' ');
      segs[idx] = esc(prefix + ': ' + trBody);
      const newInner = segs.join('\\n');
      const newValueLine = valueLine.replace(inner, () => newInner);
      const newBlock = block.replace(valueLine, () => newValueLine);
      hand = hand.slice(0, range[0]) + newBlock + hand.slice(range[1]);
      // recompute ranges (lengths changed)
      const rr = langRanges(hand);
      for (const l of Object.keys(rr)) handRanges[l] = rr[l];
      handReport.push(
        `OK   ${lang}/${slug} seg[${idx}]: ${oldSeg.slice(0, 50).trim()}... -> ${trBody.slice(0, 50)}...`
      );
    }
  }

  // ---------- MT file ----------
  let mt = fs.readFileSync(MT, 'utf8');
  const mtRanges = langRanges(mt);
  const mtReport = [];
  for (const lang of MT_LANGS) {
    const range = mtRanges[lang];
    if (!range) {
      console.log('MT ' + lang + ': BLOCK MISSING');
      continue;
    }
    for (const slug of PRODUCTS) {
      const block = mt.slice(range[0], range[1]);
      const key = `'${slug}':`;
      const ki = block.indexOf(key);
      if (ki < 0) {
        mtReport.push(`MISS ${lang}/${slug}: slug key`);
        continue;
      }
      const afterKey = block.slice(ki);
      const nl = afterKey.indexOf('\n');
      const lineEnd = afterKey.indexOf('\n', nl + 1);
      const valueLine = afterKey.slice(nl + 1, lineEnd < 0 ? undefined : lineEnd);
      const t = valueLine.trim();
      if (t[0] !== "'") {
        mtReport.push(`MISS ${lang}/${slug}: no value line`);
        continue;
      }
      const innerEnd = t.lastIndexOf("'");
      const inner = t.slice(1, innerEnd);
      const segs = inner.split('\\n');
      const unesc = (s) => s.replace(/\\'/g, "'").replace(/\\\\/g, '\\');
      let idx = segs[10] && unesc(segs[10]).includes('EVA') ? 10 : -1;
      if (idx < 0) {
        const cands = segs.map((s, i) => ({ s, i })).filter((x) => unesc(x.s).includes('EVA'));
        if (cands.length === 1) idx = cands[0].i;
      }
      if (idx < 0) {
        mtReport.push(`MISS ${lang}/${slug}: bullet segment not found`);
        continue;
      }
      const oldSeg = unesc(segs[idx]);
      if (oldSeg.split('\n').length > 1) {
        mtReport.push(`MISS ${lang}/${slug}: segment contains newline`);
        continue;
      }
      const lineText = enLines[slug].replace(/^- /, '');
      let trLine;
      if (DRY) trLine = '[DRY] ' + lineText.slice(0, 30);
      else trLine = await engine.translate1(lineText, lang);
      if (!trLine || trLine.length < 10) {
        mtReport.push(`FAIL ${lang}/${slug}: translation empty`);
        continue;
      }
      if (trLine.includes('\n')) trLine = trLine.replace(/\s*\n\s*/g, ' ');
      const stars = (trLine.match(/\*\*/g) || []).length;
      if (stars < 2) mtReport.push(`WARN ${lang}/${slug}: ** markers lost (${stars})`);
      segs[idx] = escSingle('- ' + trLine);
      const newInner = segs.join('\\n');
      const newValueLine = valueLine.replace(inner, () => newInner);
      const newBlock = block.replace(valueLine, () => newValueLine);
      mt = mt.slice(0, range[0]) + newBlock + mt.slice(range[1]);
      const rr = langRanges(mt);
      for (const l of Object.keys(rr)) mtRanges[l] = rr[l];
      mtReport.push(`OK   ${lang}/${slug} seg[${idx}] -> ${trLine.slice(0, 60)}...`);
    }
  }

  console.log('\n--- HAND report ---');
  for (const r of handReport) console.log(r);
  console.log('\n--- MT report ---');
  for (const r of mtReport) console.log(r);

  const handFail = handReport.filter((r) => r.startsWith('MISS') || r.startsWith('FAIL')).length;
  const mtFail = mtReport.filter((r) => r.startsWith('MISS') || r.startsWith('FAIL')).length;
  console.log(
    `\nhand ok=${handReport.filter((r) => r.startsWith('OK')).length} fail=${handFail} | mt ok=${mtReport.filter((r) => r.startsWith('OK')).length} fail=${mtFail}`
  );

  if (!DRY) {
    if (handFail === 0) fs.writeFileSync(HAND, hand, 'utf8');
    else console.log('HAND file NOT written (has failures)');
    if (mtFail === 0) fs.writeFileSync(MT, mt, 'utf8');
    else console.log('MT file NOT written (has failures)');
    engine.save();
  } else {
    console.log('(dry run — nothing written)');
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
