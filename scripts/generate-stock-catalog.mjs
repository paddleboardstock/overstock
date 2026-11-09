// Generate the wholesale stock catalog from the OneDrive inventory xlsx files.
//
// Usage: node scripts/generate-stock-catalog.mjs [--src="<OneDrive inventory dir>"]
//
// Outputs (committed to the repo; re-run when the supplier sends new prices):
//   public/stock/*.webp                      — compressed product photos (public CDN)
//   workers/admin-worker/stock-catalog.ts    — typed catalog data served behind
//                                              the whitelisted /api/stock-catalog endpoint
//
// The script is self-contained: it reads the xlsx files with a minimal ZIP
// reader (zlib inflateRaw), parses sharedStrings/worksheets/drawings via
// regex (the sheets are simple: No | Image | Dimensions | Price | Qty | Note)
// and compresses images with sharp. No npm dependencies beyond what the
// project already ships.
//
// Merge rules (confirmed with the site owner):
//   - The two sheets of `2026.10.27板new.xlsx` (10.27 / 10.28) are the
//     authoritative prices (USD, bare board excl. freight).
//   - The two legacy English tables contribute the same rows' remarks
//     ("Complete Set") and act as a secondary photo source (attached as
//     extra gallery images when the photo differs from the new table's).
//   - Loose photos in the OneDrive folder are matched back to items by
//     dimensions (+ price when present in the file name); byte-identical
//     duplicates are skipped.

import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync, readdirSync, mkdirSync, rmSync } from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import sharp from 'sharp';

const argSrc = process.argv.find((a) => a.startsWith('--src='));
const SRC_DIR = argSrc ? argSrc.slice(6) : 'E:/group/OneDrive/Cgroup/paddleboard overstock/库存桨板';
const OUT_IMG_DIR = path.resolve('public/stock');
const OUT_TS = path.resolve('workers/admin-worker/stock-catalog.ts');
const WEBP_WIDTH = 900;
const WEBP_QUALITY = 76;

const SECTIONS = [
  {
    id: 'sb',
    sheet: '10.27',
    title: 'Stock SUP Boards',
    priceUpdated: '2026-10-27',
    newFile: '2026.10.27板new.xlsx',
    oldFile: 'AQUAFARER stock paddleboards.xlsx',
    oldSheet: 'stock paddleboards',
    notePrefix: 'sb',
  },
  {
    id: 'cs',
    sheet: '10.28',
    title: 'Complete Sets & Large Boards',
    priceUpdated: '2026-10-28',
    newFile: '2026.10.27板new.xlsx',
    oldFile: 'stock paddleboards and boat.xlsx',
    oldSheet: 'stock paddleboards and boat',
    notePrefix: 'cs',
  },
];

const LOOSE_DIRS = ['stock SUP board/SUP Photos', '新建文件夹'];

// ---------------------------------------------------------------------------
// Minimal ZIP reader (xlsx = zip of xml + media)
// ---------------------------------------------------------------------------

/** @returns {Map<string, Buffer>} path -> inflated content */
function unzip(buffer) {
  const files = new Map();
  // Locate End Of Central Directory record (signature 0x06054b50).
  let eocd = -1;
  for (let i = buffer.length - 22; i >= 0; i--) {
    if (buffer.readUInt32LE(i) === 0x06054b50) {
      eocd = i;
      break;
    }
  }
  if (eocd === -1) throw new Error('Not a ZIP file (EOCD not found)');
  const entryCount = buffer.readUInt16LE(eocd + 10);
  let ptr = buffer.readUInt32LE(eocd + 16);
  for (let n = 0; n < entryCount; n++) {
    if (buffer.readUInt32LE(ptr) !== 0x02014b50) throw new Error('Corrupt central directory');
    const method = buffer.readUInt16LE(ptr + 10);
    const compressedSize = buffer.readUInt32LE(ptr + 20);
    const nameLen = buffer.readUInt16LE(ptr + 28);
    const extraLen = buffer.readUInt16LE(ptr + 30);
    const commentLen = buffer.readUInt16LE(ptr + 32);
    const localOffset = buffer.readUInt32LE(ptr + 42);
    const name = buffer.toString('utf8', ptr + 46, ptr + 46 + nameLen);
    if (!name.endsWith('/')) {
      const lNameLen = buffer.readUInt16LE(localOffset + 26);
      const lExtraLen = buffer.readUInt16LE(localOffset + 28);
      const dataStart = localOffset + 30 + lNameLen + lExtraLen;
      const raw = buffer.subarray(dataStart, dataStart + compressedSize);
      files.set(name, method === 0 ? Buffer.from(raw) : zlib.inflateRawSync(raw));
    }
    ptr += 46 + nameLen + extraLen + commentLen;
  }
  return files;
}

// ---------------------------------------------------------------------------
// XML helpers (regex-based; the sheets are small and simple)
// ---------------------------------------------------------------------------

function decodeEntities(s) {
  return s
    .replace(/&#x([0-9a-fA-F]+);/g, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(parseInt(d, 10)))
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, '&');
}

function xmlText(zip, entry) {
  const buf = zip.get(entry);
  return buf ? buf.toString('utf8') : '';
}

function parseSharedStrings(zip) {
  const xml = xmlText(zip, 'xl/sharedStrings.xml');
  const out = [];
  const siRe = /<si>([\s\S]*?)<\/si>/g;
  let m;
  while ((m = siRe.exec(xml))) {
    let text = '';
    const tRe = /<t[^>]*>([\s\S]*?)<\/t>/g;
    let t;
    while ((t = tRe.exec(m[1]))) text += decodeEntities(t[1]);
    out.push(text);
  }
  return out;
}

/** @returns {Map<string, string>} rId -> target (normalized, relative to xl/) */
function parseRels(zip, entry) {
  const xml = xmlText(zip, entry);
  const rels = new Map();
  const re = /<Relationship\b([^>]*)\/?>/g;
  let m;
  while ((m = re.exec(xml))) {
    const id = /Id="([^"]+)"/.exec(m[1])?.[1];
    const target = /Target="([^"]+)"/.exec(m[1])?.[1];
    if (id && target) rels.set(id, target.replace(/^\//, '').replace(/^(\.\.\/)+/, ''));
  }
  return rels;
}

/** @returns {Array<{name: string, sheetPath: string}>} in workbook order */
function parseWorkbook(zip) {
  const wb = xmlText(zip, 'xl/workbook.xml');
  const rels = parseRels(zip, 'xl/_rels/workbook.xml.rels');
  const sheets = [];
  const re = /<sheet\b([^>]*)\/?>/g;
  let m;
  while ((m = re.exec(wb))) {
    const name = /name="([^"]+)"/.exec(m[1])?.[1];
    const rid = /r:id="([^"]+)"/.exec(m[1])?.[1];
    if (name && rid) {
      const target = rels.get(rid) || '';
      const sheetPath = target.startsWith('xl/') ? target : `xl/${target.replace(/^worksheets\//, 'worksheets/')}`;
      sheets.push({ name: decodeEntities(name), sheetPath });
    }
  }
  return sheets;
}

/**
 * Parse one worksheet into rows. Columns are positional (A=1, B=2, ...).
 * @returns {Map<number, Map<number, string|number>>}
 */
function parseSheetRows(zip, sheetPath, shared) {
  const xml = xmlText(zip, sheetPath);
  const rows = new Map();
  const rowRe = /<row\b[^>]*\br="(\d+)"[^>]*>([\s\S]*?)<\/row>/g;
  let rm;
  while ((rm = rowRe.exec(xml))) {
    const rowNum = parseInt(rm[1], 10);
    const cells = new Map();
    const cellRe = /<c\b([^>]*?)(?:\/>|>([\s\S]*?)<\/c>)/g;
    let cm;
    while ((cm = cellRe.exec(rm[2]))) {
      const attrs = cm[1];
      const ref = /r="([A-Z]+)\d+"/.exec(attrs)?.[1];
      const type = /t="(\w+)"/.exec(attrs)?.[1];
      if (!ref) continue;
      let col = 0;
      for (const ch of ref) col = col * 26 + (ch.charCodeAt(0) - 64);
      const body = cm[2] || '';
      let value;
      if (type === 'inlineStr') {
        value = decodeEntities(/<t[^>]*>([\s\S]*?)<\/t>/.exec(body)?.[1] || '');
      } else {
        const raw = /<v>([\s\S]*?)<\/v>/.exec(body)?.[1];
        if (raw === undefined) continue;
        if (type === 's') value = shared[parseInt(raw, 10)] ?? '';
        else if (type === 'str') value = decodeEntities(raw);
        else {
          const num = Number(raw);
          value = Number.isFinite(num) ? num : decodeEntities(raw);
        }
      }
      cells.set(col, value);
    }
    rows.set(rowNum, cells);
  }
  return rows;
}

/**
 * Map spreadsheet row number -> array of image buffers anchored on that row
 * (drawing anchors: xdr:from row is 0-based, +1 = sheet row).
 */
function parseDrawingImages(zip, sheetPath) {
  const result = new Map();
  const sheetName = sheetPath.split('/').pop();
  const rels = parseRels(zip, `xl/worksheets/_rels/${sheetName}.rels`);
  let drawingTarget = null;
  for (const t of rels.values()) {
    if (t.includes('drawings/')) {
      drawingTarget = t.startsWith('xl/') ? t : `xl/${t}`;
      break;
    }
  }
  if (!drawingTarget) return result;
  const drawingRels = parseRels(zip, `${path.dirname(drawingTarget)}/_rels/${path.basename(drawingTarget)}.rels`);
  const xml = xmlText(zip, drawingTarget);
  const anchorRe = /<xdr:(?:twoCellAnchor|oneCellAnchor)\b[^>]*>([\s\S]*?)<\/xdr:(?:twoCellAnchor|oneCellAnchor)>/g;
  let am;
  while ((am = anchorRe.exec(xml))) {
    const row = /<xdr:from>[\s\S]*?<xdr:row>(\d+)<\/xdr:row>/.exec(am[1])?.[1];
    const rid = /<a:blip[^>]*r:embed="(rId\d+)"/.exec(am[1])?.[1];
    if (row === undefined || !rid) continue;
    const target = drawingRels.get(rid) || '';
    const mediaPath = target.startsWith('xl/') ? target : `xl/${target}`;
    const buf = zip.get(mediaPath);
    if (!buf) continue;
    const rowNum = parseInt(row, 10) + 1;
    const list = result.get(rowNum) || [];
    list.push(buf);
    result.set(rowNum, list);
  }
  return result;
}

// ---------------------------------------------------------------------------
// Table model
// ---------------------------------------------------------------------------

const NOTE_MAP = new Map([
  ['整套', 'Complete set'],
  ['Complete Set', 'Complete set'],
  ['complete set', 'Complete set'],
]);

function normalizeDims(raw) {
  const s = String(raw || '')
    .trim()
    .replace(/×/g, 'x')
    .replace(/X/g, 'x');
  const m = /(\d+(?:\.\d+)?)x(\d+(?:\.\d+)?)(?:x(\d+(?:\.\d+)?))?/.exec(s);
  if (!m) return null;
  const dims = [Number(m[1]), Number(m[2])];
  if (m[3] !== undefined) dims.push(Number(m[3]));
  return { key: s, dims };
}

function readTable(zip, sheetName) {
  const shared = parseSharedStrings(zip);
  const sheets = parseWorkbook(zip);
  const sheet = sheets.find((s) => s.name === sheetName);
  if (!sheet) throw new Error(`Sheet "${sheetName}" not found (have: ${sheets.map((s) => s.name).join(', ')})`);
  const rows = parseSheetRows(zip, sheet.sheetPath, shared);
  const images = parseDrawingImages(zip, sheet.sheetPath);
  const items = [];
  for (const [rowNum, cells] of rows) {
    const no = Number(cells.get(1));
    if (!Number.isInteger(no) || no < 1) continue; // header / stray rows
    const dimsRaw = String(cells.get(3) ?? '');
    const norm = normalizeDims(dimsRaw);
    const price = Number(cells.get(4));
    const qty = Number(cells.get(5));
    if (!norm || !Number.isFinite(price) || !Number.isFinite(qty)) {
      throw new Error(`Row ${rowNum} of "${sheetName}": unexpected cells ${JSON.stringify([...cells.entries()])}`);
    }
    items.push({
      no,
      dimsKey: norm.key,
      dims: norm.dims,
      priceUsd: price,
      quantity: qty,
      note: NOTE_MAP.get(String(cells.get(6) ?? '').trim()) || String(cells.get(6) ?? '').trim(),
      images: images.get(rowNum) || [],
    });
  }
  items.sort((a, b) => a.no - b.no);
  return items;
}

// ---------------------------------------------------------------------------
// Loose photo matching (filename: dims [+ price] [+ color words])
// ---------------------------------------------------------------------------

function parseLooseName(filename) {
  const base = filename.replace(/\.(png|jpe?g|webp)$/i, '');
  const dimRe = /(\d{2,3})\s*[x×X]\s*(\d{2,3})(?:\s*[x×X]\s*(\d{2}))?/;
  const dm = dimRe.exec(base);
  if (!dm) return null;
  const dims = [Number(dm[1]), Number(dm[2])];
  if (dm[3] !== undefined) dims.push(Number(dm[3]));
  const rest = base.slice(0, dm.index) + ' ' + base.slice(dm.index + dm[0].length);
  const pm = /(?<!\d)(\d{3,4})(?!\d)/.exec(rest);
  return { dims, price: pm ? Number(pm[1]) : undefined };
}

function findItemForLoose(allItems, parsed) {
  const candidates = allItems.filter(
    (it) =>
      it.dimsCm[0] === parsed.dims[0] &&
      it.dimsCm[1] === parsed.dims[1] &&
      (parsed.dims[2] === undefined || it.dimsCm[2] === parsed.dims[2]) &&
      (parsed.price === undefined || it.priceUsd === parsed.price)
  );
  return candidates[0] || null;
}

/** 3-4 digit standalone numbers in a file name (without extension). */
function* baseNameNumbers(filename) {
  const base = filename.replace(/\.(png|jpe?g|webp)$/i, '');
  const re = /(?<!\d)(\d{3,4})(?!\d)/g;
  let m;
  while ((m = re.exec(base))) yield Number(m[1]);
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function hashBuf(buf) {
  return createHash('md5').update(buf).digest('hex');
}

const catalogSections = [];
const seenHashes = new Map(); // md5 -> output webp path
let writtenCount = 0;
let skippedDupCount = 0;
const unmatchedLoose = [];

async function writeWebp(buf, outName) {
  const outPath = path.join(OUT_IMG_DIR, outName);
  await sharp(buf)
    .rotate()
    .resize({ width: WEBP_WIDTH, withoutEnlargement: true })
    .webp({ quality: WEBP_QUALITY })
    .toFile(outPath);
  writtenCount++;
  return `/stock/${outName}`;
}

async function main() {
  rmSync(OUT_IMG_DIR, { recursive: true, force: true });
  mkdirSync(OUT_IMG_DIR, { recursive: true });

  const zipCache = new Map(); // file name -> zip Map
  const getZip = (file) => {
    if (!zipCache.has(file)) {
      const full = path.join(SRC_DIR, file);
      zipCache.set(file, unzip(readFileSync(full)));
    }
    return zipCache.get(file);
  };

  for (const section of SECTIONS) {
    const newItems = readTable(getZip(section.newFile), section.sheet);
    if (newItems.length === 0) throw new Error(`No items parsed from ${section.newFile}::${section.sheet}`);
    const oldItems = readTable(getZip(section.oldFile), section.oldSheet);

    const items = [];
    for (const item of newItems) {
      const id = `${section.id}-${String(item.no).padStart(2, '0')}`;
      const images = [];
      // New-table row photos are primary; the legacy table's same-row photos
      // only join the gallery when they are a different picture.
      const old = oldItems.find((o) => o.no === item.no);
      const sources = [
        ...item.images.map((buf) => ({ buf, primary: true })),
        ...(old?.images || []).map((buf) => ({ buf, primary: false })),
      ];
      // Legacy English remark fills an empty note (e.g. "Complete Set").
      let note = item.note;
      if (!note && old?.note) note = old.note;

      for (const src of sources) {
        const h = hashBuf(src.buf);
        if (seenHashes.has(h)) {
          const existing = seenHashes.get(h);
          if (src.primary) {
            if (!images.includes(existing)) images.push(existing);
          } else {
            skippedDupCount++;
          }
          continue;
        }
        const outName = `${id}-${images.length + 1}.webp`;
        const url = await writeWebp(src.buf, outName);
        seenHashes.set(h, url);
        images.push(url);
      }
      items.push({
        id,
        dimensions: item.dimsKey,
        dimsCm: item.dims,
        priceUsd: item.priceUsd,
        quantity: item.quantity,
        note,
        images,
      });
    }

    catalogSections.push({
      id: section.id,
      title: section.title,
      priceUpdated: section.priceUpdated,
      items,
    });
  }

  // Loose photos: dedupe against everything already included, then attach to
  // the first item matching the parsed dimensions (+ price).
  const allItems = catalogSections.flatMap((s) => s.items);
  const knownPrices = new Set(allItems.map((it) => it.priceUsd));
  for (const dir of LOOSE_DIRS) {
    const fullDir = path.join(SRC_DIR, dir);
    let names;
    try {
      names = readdirSync(fullDir);
    } catch {
      console.warn(`[warn] loose photo dir not found: ${fullDir}`);
      continue;
    }
    for (const name of names) {
      if (!/\.(png|jpe?g|webp)$/i.test(name)) continue;
      const parsed = parseLooseName(name);
      // Fallback for price-only names (e.g. "410.jpg", "320-300.jpg"): the
      // only catalog price present in the file name identifies the item.
      let priceOnly = null;
      if (!parsed) {
        const nums = [...baseNameNumbers(name)];
        const price = nums.filter((n) => knownPrices.has(n)).pop();
        if (price !== undefined) priceOnly = price;
      }
      if (!parsed && priceOnly === null) {
        unmatchedLoose.push(`${dir}/${name} (no dims/price in name)`);
        continue;
      }
      const buf = readFileSync(path.join(fullDir, name));
      const h = hashBuf(buf);
      if (seenHashes.has(h)) {
        skippedDupCount++;
        continue;
      }
      const target = parsed
        ? findItemForLoose(allItems, parsed)
        : allItems.find((it) => it.priceUsd === priceOnly) || null;
      if (!target) {
        unmatchedLoose.push(
          `${dir}/${name} (dims ${parsed ? parsed.dims.join('x') : '—'} price ${parsed?.price ?? priceOnly ?? '—'} matched nothing)`
        );
        continue;
      }
      const outName = `${target.id}-${target.images.length + 1}.webp`;
      const url = await writeWebp(buf, outName);
      seenHashes.set(h, url);
      target.images.push(url);
    }
  }

  // Emit the typed catalog module consumed by admin-worker.
  const catalog = {
    currency: 'USD',
    updatedAt: '2026-10-28',
    sections: catalogSections,
  };
  const ts =
    `// GENERATED by scripts/generate-stock-catalog.mjs — DO NOT EDIT BY HAND.\n` +
    `// Source: OneDrive 库存桨板 xlsx (prices: 2026.10.27板new.xlsx, merged with the\n` +
    `// legacy English tables for remarks/photos). Served by /api/stock-catalog\n` +
    `// to stock-access whitelisted, authenticated users only.\n\n` +
    `export interface StockCatalogItem {\n` +
    `  id: string;\n  dimensions: string;\n  dimsCm: number[];\n  priceUsd: number;\n  quantity: number;\n  note: string;\n  images: string[];\n}\n\n` +
    `export interface StockCatalogSection {\n  id: string;\n  title: string;\n  priceUpdated: string;\n  items: StockCatalogItem[];\n}\n\n` +
    `export interface StockCatalog {\n  currency: string;\n  updatedAt: string;\n  sections: StockCatalogSection[];\n}\n\n` +
    `export const STOCK_CATALOG: StockCatalog = ${JSON.stringify(catalog, null, 2)};\n`;
  writeFileSync(OUT_TS, ts, 'utf8');

  const itemCount = catalogSections.reduce((n, s) => n + s.items.length, 0);
  const imageRefCount = allItems.reduce((n, it) => n + it.images.length, 0);
  console.log(`Stock catalog generated:`);
  for (const s of catalogSections) console.log(`  ${s.id}: ${s.items.length} items (${s.title})`);
  console.log(
    `  items: ${itemCount}, image refs: ${imageRefCount}, webp files written: ${writtenCount}, duplicate photos skipped: ${skippedDupCount}`
  );
  if (unmatchedLoose.length) {
    console.log(`  UNMATCHED loose photos (${unmatchedLoose.length}):`);
    for (const u of unmatchedLoose) console.log(`    - ${u}`);
  }
}

await main();
