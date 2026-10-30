import fs from 'node:fs';
import path from 'node:path';
import * as yaml from 'js-yaml';
import { products } from '../src/data/products';
import { productTexts } from '../src/data/product-texts';

const ROOT = path.resolve(import.meta.dirname, '..');
const PUBLIC = path.join(ROOT, 'public');
const LLMS_FULL_TXT = path.join(PUBLIC, 'llms-full.txt');
const LLMS_TXT = path.join(PUBLIC, 'llms.txt');
const PAGES_DIR = path.join(ROOT, 'src', 'data', 'pages');
const WELL_KNOWN_DIR = path.join(PUBLIC, '.well-known');
const ENTITY_JSON = path.join(WELL_KNOWN_DIR, 'entity.json');

const SITE_URL = 'https://paddleboardoverstock.com';

const LANGUAGES: Record<string, string> = {
  en: 'English',
  fr: 'Français',
  de: 'Deutsch',
  es: 'Español',
  pt: 'Português',
  ar: 'العربية',
  it: 'Italiano',
  ru: 'Русский',
  pl: 'Polski',
  nl: 'Nederlands',
  sv: 'Svenska',
  no: 'Norsk',
  el: 'Ελληνικά',
  fi: 'Suomi',
  da: 'Dansk',
  cs: 'Čeština',
  th: 'ไทย',
  hr: 'Hrvatski',
  tl: 'Filipino',
  hu: 'Magyar',
  ro: 'Română',
  sk: 'Slovenčina',
  bg: 'Български',
  sl: 'Slovenščina',
  sr: 'Srpski',
  ja: '日本語',
  ko: '한국어',
  tr: 'Türkçe',
  id: 'Bahasa Indonesia',
  he: 'עברית',
  ms: 'Bahasa Melayu',
  lt: 'Lietuvių',
  lv: 'Latviešu',
  et: 'Eesti',
};

const CATEGORY_LABELS: Record<string, string> = {
  RIB: 'RIB Boats',
  INFLATABLE: 'Inflatable Boats',
  SUP: 'SUP Paddle Boards',
  ACCESSORY: 'Accessories',
};

function readSource(file: string): string | null {
  try {
    return fs.readFileSync(path.join(ROOT, 'src', 'data', 'geo', file), 'utf8');
  } catch {
    return null;
  }
}

function extractPageTitle(content: string): string | null {
  const parsed = yaml.load(content) as Record<string, any>;
  if (!parsed || typeof parsed !== 'object') return null;
  for (const key of Object.keys(parsed)) {
    const val = parsed[key];
    if (val && typeof val === 'object' && val.title) {
      return String(val.title)
        .replace(/<br\s*\/?>/gi, ' ')
        .replace(/\s+/g, ' ')
        .trim();
    }
  }
  return null;
}

function getPageUrls(): string[] {
  const urls: string[] = [];
  const seen = new Set<string>();

  const entries = fs.readdirSync(PAGES_DIR);
  for (const entry of entries) {
    const entryPath = path.join(PAGES_DIR, entry);
    if (fs.statSync(entryPath).isDirectory()) {
      const lang = entry;
      if (!LANGUAGES[lang]) continue;
      const langFiles = fs.readdirSync(entryPath);
      for (const lf of langFiles) {
        if (!lf.endsWith('.yaml')) continue;
        const name = lf.replace(/\.yaml$/, '');
        const url = `${SITE_URL}/${lang}/${name}/`;
        if (seen.has(url)) continue;
        seen.add(url);
        const content = fs.readFileSync(path.join(entryPath, lf), 'utf8');
        const title = extractPageTitle(content);
        urls.push(title ? `- ${url} — ${title}` : `- ${url}`);
      }
    } else if (entry.endsWith('.yaml') && !entry.startsWith('_')) {
      const name = entry.replace(/\.yaml$/, '');
      const url = `${SITE_URL}/${name}/`;
      if (seen.has(url)) continue;
      seen.add(url);
      const content = fs.readFileSync(entryPath, 'utf8');
      const title = extractPageTitle(content);
      urls.push(title ? `- ${url} — ${title}` : `- ${url}`);
    }
  }

  urls.sort();
  return urls;
}

function getProductLines(): string[] {
  const lines: string[] = [];

  const allLangs = Object.keys(LANGUAGES);
  // English first, then alphabetical
  const sortedLangs = ['en', ...allLangs.filter((l) => l !== 'en').sort()];

  for (const lang of sortedLangs) {
    const langName = LANGUAGES[lang];
    const prefix = lang === 'en' ? '' : ` (${lang})`;
    const heading = lang === 'en' ? 'English' : `${langName}${prefix}`;
    lines.push(`\n### ${heading}\n`);

    const categories = ['RIB', 'INFLATABLE', 'SUP', 'ACCESSORY'];
    for (const cat of categories) {
      const catProducts = products.filter((p) => p.category === cat);
      if (catProducts.length === 0) continue;

      lines.push(`#### ${CATEGORY_LABELS[cat]}\n`);

      for (const p of catProducts) {
        const localizedName = productTexts[lang]?.[p.id]?.name || p.name;
        const url = `${SITE_URL}/products/${p.id}/`;
        lines.push(`- ${url} — ${localizedName}`);
      }
      lines.push('');
    }
  }

  return lines;
}

function readGeoFacts(): string[] {
  const lines: string[] = [];
  const geoDir = path.join(ROOT, 'src', 'data', 'geo');
  try {
    const files = fs.readdirSync(geoDir);
    for (const file of files.sort()) {
      if (!file.endsWith('.json') || file === 'entity.json') continue;
      const content = fs.readFileSync(path.join(geoDir, file), 'utf8');
      const parsed = JSON.parse(content);
      lines.push(
        `### ${file
          .replace('.json', '')
          .replace(/-/g, ' ')
          .replace(/\b\w/g, (c) => c.toUpperCase())}`
      );
      lines.push('');
      lines.push('```json');
      lines.push(JSON.stringify(parsed, null, 2));
      lines.push('```');
      lines.push('');
    }
  } catch {
    // geo dir not found
  }
  return lines;
}

function main(): void {
  fs.mkdirSync(WELL_KNOWN_DIR, { recursive: true });

  // Ensure llms.txt exists
  if (!fs.existsSync(LLMS_TXT)) {
    fs.writeFileSync(
      LLMS_TXT,
      `# Paddle Board Overstock\n\nPaddle Board Overstock is a professional OEM/ODM manufacturer of inflatable water sports equipment.\n`
    );
    console.log('[geo] Created default llms.txt');
  }

  // Build llms-full.txt from scratch (idempotent)
  const baseParts: string[] = [];

  // Static base content — read existing file up to the auto-generated sections
  if (fs.existsSync(LLMS_FULL_TXT)) {
    const existing = fs.readFileSync(LLMS_FULL_TXT, 'utf8');
    // Cut at the first auto-generated section (## Company Facts) so repeated
    // runs stay idempotent; older runs' appended sections are discarded here
    const autoIdx = existing.indexOf('\n## Company Facts');
    if (autoIdx !== -1) {
      baseParts.push(existing.slice(0, autoIdx).trim());
    } else {
      baseParts.push(existing.trim());
    }
  } else {
    // Default base
    baseParts.push(
      `# Paddle Board Overstock Knowledge Base\n\nPaddle Board Overstock is a water sports equipment manufacturer specializing in inflatable watercraft.`
    );
  }

  // Generate structured GEO facts section
  console.log('[geo] Reading structured GEO data...');
  const geoFacts = readGeoFacts();
  if (geoFacts.length > 0) {
    baseParts.push('\n\n## Company Facts\n');
    baseParts.push(geoFacts.join('\n'));
  }

  // Generate site pages
  console.log('[geo] Gathering site pages...');
  const pageUrls = getPageUrls();
  if (pageUrls.length > 0) {
    baseParts.push('\n\n## Site Pages\n');
    baseParts.push(pageUrls.join('\n'));
  }
  console.log(`[geo]   ${pageUrls.length} pages found`);

  // Generate product catalog — all LANGUAGES, all products
  console.log('[geo] Generating product catalog...');
  const productLines = getProductLines();
  if (productLines.length > 0) {
    baseParts.push('\n\n## Product Catalog\n');
    baseParts.push(productLines.join('\n'));
  }

  const productCount = products.length;
  const langCount = Object.keys(LANGUAGES).length;
  console.log(`[geo]   ${productCount} products x ${langCount} LANGUAGES`);

  const output =
    baseParts
      .join('')
      .replace(/\n{3,}/g, '\n\n')
      .trim() + '\n';
  fs.writeFileSync(LLMS_FULL_TXT, output);
  console.log('[geo] Wrote llms-full.txt');

  // Generate entity.json
  const entitySource = readSource('entity.json');
  if (entitySource) {
    try {
      JSON.parse(entitySource);
      fs.writeFileSync(ENTITY_JSON, entitySource);
      console.log('[geo] Wrote .well-known/entity.json from source data');
    } catch {
      console.warn('[geo] Invalid entity.json source, keeping existing');
    }
  }

  console.log('[generate-geo-files] Done');
}

main();
