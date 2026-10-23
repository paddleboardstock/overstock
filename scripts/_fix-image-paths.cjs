const fs = require('fs');
const path = require('path');
const glob = require('glob');
const ROOT = process.cwd();

const REPLACEMENTS = {
  'https://assets.aquafarer.com/images/aquafarer/factory/Aquafarer factory.webp':
    'https://assets.aquafarer.com/images/aquafarer/factory/aquafarer-factory-building.webp',
  'https://assets.aquafarer.com/images/aquafarer/factory/design discuss2.jpeg':
    'https://assets.aquafarer.com/images/aquafarer/factory/aquafarer-design-discussion-2.webp',
  'https://assets.aquafarer.com/images/aquafarer/factory/design discuss original.jpeg':
    'https://assets.aquafarer.com/images/aquafarer/factory/aquafarer-design-discussion-original.webp',
  'https://assets.aquafarer.com/images/aquafarer/factory/PVC material.jpeg':
    'https://assets.aquafarer.com/images/aquafarer/factory/aquafarer-pvc-material-testing.webp',
  'https://assets.aquafarer.com/images/aquafarer/factory/Pressure Testing.jpeg':
    'https://assets.aquafarer.com/images/aquafarer/factory/aquafarer-pressure-testing.webp',
  'https://assets.aquafarer.com/images/aquafarer/factory/Stock Boat.webp':
    'https://assets.aquafarer.com/images/aquafarer/factory/aquafarer-stock-boat-inventory.webp',
  'https://assets.aquafarer.com/images/aquafarer/factory/UV Resistance Testing.jpeg':
    'https://assets.aquafarer.com/images/aquafarer/factory/aquafarer-uv-resistance-testing.webp',
  'https://assets.aquafarer.com/images/aquafarer/factory/sup making.jpeg':
    'https://assets.aquafarer.com/images/aquafarer/factory/aquafarer-sup-manufacturing.webp',
  'https://assets.aquafarer.com/images/aquafarer/factory/sup making3.jpeg':
    'https://assets.aquafarer.com/images/aquafarer/factory/aquafarer-sup-manufacturing-3.webp',
  'https://assets.aquafarer.com/images/aquafarer/factory/producing department.jpeg':
    'https://assets.aquafarer.com/images/aquafarer/factory/aquafarer-production-department.webp',
  'https://assets.aquafarer.com/images/aquafarer/factory/producing department2.jpeg':
    'https://assets.aquafarer.com/images/aquafarer/factory/aquafarer-production-department-2.webp',
  'https://assets.aquafarer.com/images/aquafarer/hero/about-banner.webp':
    'https://assets.aquafarer.com/images/aquafarer/hero/production-dept.webp',
  'https://assets.aquafarer.com/images/aquafarer/hero/academy-banner.webp':
    'https://assets.aquafarer.com/images/aquafarer/hero/tech-meeting-small.webp',
  'https://assets.aquafarer.com/images/aquafarer/hero/contact-banner.webp':
    'https://assets.aquafarer.com/images/aquafarer/hero/factory-gate.webp',
  'https://assets.aquafarer.com/images/aquafarer/hero/custom-banner.webp':
    'https://assets.aquafarer.com/images/aquafarer/hero/aquafarer-hero-design-concept.webp',
  'https://assets.aquafarer.com/images/aquafarer/products/fishing-banner.webp':
    'https://assets.aquafarer.com/images/aquafarer/hero/production-dept.webp',
  'https://assets.aquafarer.com/images/aquafarer/factory/factory-banner.webp':
    'https://assets.aquafarer.com/images/aquafarer/hero/factory-gate.webp',
  'https://assets.aquafarer.com/images/aquafarer/factory/process-banner.webp':
    'https://assets.aquafarer.com/images/aquafarer/hero/production-dept.webp',
  'https://assets.aquafarer.com/images/aquafarer/factory/production-workshop.webp':
    'https://assets.aquafarer.com/images/aquafarer/factory/aquafarer-production-department.webp',
  'https://assets.aquafarer.com/images/aquafarer/factory/quality-workshop.webp':
    'https://assets.aquafarer.com/images/aquafarer/factory/aquafarer-pvc-material-testing.webp',
  'https://assets.aquafarer.com/images/aquafarer/factory/rib-workshop.webp':
    'https://assets.aquafarer.com/images/aquafarer/products/rib/aquafarer-rib-330-boat.webp',
  'https://assets.aquafarer.com/images/aquafarer/factory/welding-workshop.webp':
    'https://assets.aquafarer.com/images/aquafarer/factory/producting department3.webp',
  'https://assets.aquafarer.com/images/aquafarer/hero/hero-5.webp':
    'https://assets.aquafarer.com/images/aquafarer/hero/factory-gate.webp',
  'https://assets.aquafarer.com/images/aquafarer/hero/hero-image.webp':
    'https://assets.aquafarer.com/images/aquafarer/hero/aquafarer-hero-design-concept.webp',
  'https://assets.aquafarer.com/images/aquafarer/hero/hero-scenic.webp':
    'https://assets.aquafarer.com/images/aquafarer/hero/tech-meeting-small.webp',
  'https://assets.aquafarer.com/images/aquafarer/hero/boat man Aquafarer-min.jpeg':
    'https://assets.aquafarer.com/images/aquafarer/hero/aquafarer-hero-design-concept.webp',
  'https://assets.aquafarer.com/images/aquafarer/hero/production-workshop.webp':
    'https://assets.aquafarer.com/images/aquafarer/factory/aquafarer-production-department.webp',
  'https://assets.aquafarer.com/images/aquafarer/hero/trust-hero.webp':
    'https://assets.aquafarer.com/images/aquafarer/hero/tech-meeting-small.webp',
  'https://assets.aquafarer.com/images/aquafarer/products/rib-330.webp':
    'https://assets.aquafarer.com/images/aquafarer/products/rib/aquafarer-rib-330-boat.webp',
};

const yamlFiles = glob.sync('src/data/pages/**/*.yaml').map((f) => path.join(ROOT, f));
let totalReplaced = 0;
let totalFiles = 0;

for (const filePath of yamlFiles) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;
  for (const [oldUrl, newUrl] of Object.entries(REPLACEMENTS)) {
    const re = new RegExp(oldUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    const count = (content.match(re) || []).length;
    if (count > 0) {
      content = content.split(oldUrl).join(newUrl);
      totalReplaced += count;
      changed = true;
    }
  }
  if (changed) {
    fs.writeFileSync(filePath, content);
    totalFiles++;
  }
}

// Summary per replacement
console.log('Replacement summary:');
for (const [oldUrl, newUrl] of Object.entries(REPLACEMENTS)) {
  const oldName = oldUrl.split('/').pop();
  const newName = newUrl.split('/').pop();
  // Count by scanning files
  let c = 0;
  for (const filePath of yamlFiles) {
    const content = fs.readFileSync(filePath, 'utf8');
    if (content.includes(newUrl)) c++;
  }
  if (c > 0) console.log('  ' + oldName + ' -> ' + newName + ' (' + c + ' files)');
}

console.log('---');
console.log('Total replacements: ' + totalReplaced);
console.log('Total files changed: ' + totalFiles);

// Verify
let missingCount = 0;
for (const f of yamlFiles) {
  const content = fs.readFileSync(f, 'utf8');
  for (const oldUrl of Object.keys(REPLACEMENTS)) {
    if (content.includes(oldUrl)) {
      console.error('STILL MISSING in ' + f.replace(ROOT + path.sep, '').replace(/\\/g, '/'));
      missingCount++;
    }
  }
}
if (missingCount === 0) console.log('All references updated successfully!');
