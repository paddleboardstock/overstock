import fs from 'node:fs';
const s = fs.readFileSync('src/data/product-texts.ts', 'utf8');
console.log('--- product-texts head ---');
console.log(s.slice(0, 900));
const l = fs.readFileSync('src/lib/product-l10n.ts', 'utf8');
const i = l.indexOf('de: {');
const k = l.indexOf('labels:', i);
console.log('--- l10n de labels/cats ---');
console.log(l.slice(k, k + 600));
