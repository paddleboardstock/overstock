#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const PAGES = [
  'authority',
  'guides',
  'solutions-clubs',
  'solutions-rental-business',
  'solutions-resorts',
  'success-stories',
  'testimonials',
];

const LANGS = ['ar', 'de', 'es', 'fr', 'it', 'nl', 'pl', 'pt', 'ru', 'zh'];

function main() {
  let created = 0;
  let skipped = 0;

  for (const page of PAGES) {
    const enPath = path.join(ROOT, 'src/data/pages', `${page}.yaml`);
    if (!fs.existsSync(enPath)) {
      console.log(`SKIP ${page}: EN source not found`);
      continue;
    }
    const enContent = fs.readFileSync(enPath, 'utf8');

    for (const lang of LANGS) {
      const outDir = path.join(ROOT, 'src/data/pages', lang);
      const outPath = path.join(outDir, `${page}.yaml`);
      if (fs.existsSync(outPath)) {
        skipped++;
        continue;
      }
      fs.mkdirSync(outDir, { recursive: true });
      fs.writeFileSync(outPath, enContent, 'utf8');
      created++;
    }
  }

  console.log(`Created: ${created}, Skipped (exists): ${skipped}`);
}

main();
