const fs = require('fs');
const path = require('path');
const glob = require('glob');
const ROOT = process.cwd();

const REPLACEMENTS = {
  'https://assets.paddleboardoverstock.com/images/paddleboardoverstock/factory/Paddle Board Overstock factory.webp':
    'https://assets.paddleboardoverstock.com/images/paddleboardoverstock/factory/paddleboardoverstock-factory-building.webp',
  'https://assets.paddleboardoverstock.com/images/paddleboardoverstock/factory/design discuss2.jpeg':
    'https://assets.paddleboardoverstock.com/images/paddleboardoverstock/factory/paddleboardoverstock-design-discussion-2.webp',
  'https://assets.paddleboardoverstock.com/images/paddleboardoverstock/factory/design discuss original.jpeg':
    'https://assets.paddleboardoverstock.com/images/paddleboardoverstock/factory/paddleboardoverstock-design-discussion-original.webp',
  'https://assets.paddleboardoverstock.com/images/paddleboardoverstock/factory/PVC material.jpeg':
    'https://assets.paddleboardoverstock.com/images/paddleboardoverstock/factory/paddleboardoverstock-pvc-material-testing.webp',
  'https://assets.paddleboardoverstock.com/images/paddleboardoverstock/factory/Pressure Testing.jpeg':
    'https://assets.paddleboardoverstock.com/images/paddleboardoverstock/factory/paddleboardoverstock-pressure-testing.webp',
  'https://assets.paddleboardoverstock.com/images/paddleboardoverstock/factory/Stock Boat.webp':
    'https://assets.paddleboardoverstock.com/images/paddleboardoverstock/factory/paddleboardoverstock-stock-boat-inventory.webp',
  'https://assets.paddleboardoverstock.com/images/paddleboardoverstock/factory/UV Resistance Testing.jpeg':
    'https://assets.paddleboardoverstock.com/images/paddleboardoverstock/factory/paddleboardoverstock-uv-resistance-testing.webp',
  'https://assets.paddleboardoverstock.com/images/paddleboardoverstock/factory/sup making.jpeg':
    'https://assets.paddleboardoverstock.com/images/paddleboardoverstock/factory/paddleboardoverstock-sup-manufacturing.webp',
  'https://assets.paddleboardoverstock.com/images/paddleboardoverstock/factory/sup making3.jpeg':
    'https://assets.paddleboardoverstock.com/images/paddleboardoverstock/factory/paddleboardoverstock-sup-manufacturing-3.webp',
  'https://assets.paddleboardoverstock.com/images/paddleboardoverstock/factory/producing department.jpeg':
    'https://assets.paddleboardoverstock.com/images/paddleboardoverstock/factory/paddleboardoverstock-production-department.webp',
  'https://assets.paddleboardoverstock.com/images/paddleboardoverstock/factory/producing department2.jpeg':
    'https://assets.paddleboardoverstock.com/images/paddleboardoverstock/factory/paddleboardoverstock-production-department-2.webp',
  'https://assets.paddleboardoverstock.com/images/paddleboardoverstock/hero/about-banner.webp':
    'https://assets.paddleboardoverstock.com/images/paddleboardoverstock/hero/production-dept.webp',
  'https://assets.paddleboardoverstock.com/images/paddleboardoverstock/hero/academy-banner.webp':
    'https://assets.paddleboardoverstock.com/images/paddleboardoverstock/hero/tech-meeting-small.webp',
  'https://assets.paddleboardoverstock.com/images/paddleboardoverstock/hero/contact-banner.webp':
    'https://assets.paddleboardoverstock.com/images/paddleboardoverstock/hero/factory-gate.webp',
  'https://assets.paddleboardoverstock.com/images/paddleboardoverstock/hero/custom-banner.webp':
    'https://assets.paddleboardoverstock.com/images/paddleboardoverstock/hero/paddleboardoverstock-hero-design-concept.webp',
  'https://assets.paddleboardoverstock.com/images/paddleboardoverstock/products/fishing-banner.webp':
    'https://assets.paddleboardoverstock.com/images/paddleboardoverstock/hero/production-dept.webp',
  'https://assets.paddleboardoverstock.com/images/paddleboardoverstock/factory/factory-banner.webp':
    'https://assets.paddleboardoverstock.com/images/paddleboardoverstock/hero/factory-gate.webp',
  'https://assets.paddleboardoverstock.com/images/paddleboardoverstock/factory/process-banner.webp':
    'https://assets.paddleboardoverstock.com/images/paddleboardoverstock/hero/production-dept.webp',
  'https://assets.paddleboardoverstock.com/images/paddleboardoverstock/factory/production-workshop.webp':
    'https://assets.paddleboardoverstock.com/images/paddleboardoverstock/factory/paddleboardoverstock-production-department.webp',
  'https://assets.paddleboardoverstock.com/images/paddleboardoverstock/factory/quality-workshop.webp':
    'https://assets.paddleboardoverstock.com/images/paddleboardoverstock/factory/paddleboardoverstock-pvc-material-testing.webp',
  'https://assets.paddleboardoverstock.com/images/paddleboardoverstock/factory/rib-workshop.webp':
    'https://assets.paddleboardoverstock.com/images/paddleboardoverstock/products/rib/paddleboardoverstock-rib-330-boat.webp',
  'https://assets.paddleboardoverstock.com/images/paddleboardoverstock/factory/welding-workshop.webp':
    'https://assets.paddleboardoverstock.com/images/paddleboardoverstock/factory/producting department3.webp',
  'https://assets.paddleboardoverstock.com/images/paddleboardoverstock/hero/hero-5.webp':
    'https://assets.paddleboardoverstock.com/images/paddleboardoverstock/hero/factory-gate.webp',
  'https://assets.paddleboardoverstock.com/images/paddleboardoverstock/hero/hero-image.webp':
    'https://assets.paddleboardoverstock.com/images/paddleboardoverstock/hero/paddleboardoverstock-hero-design-concept.webp',
  'https://assets.paddleboardoverstock.com/images/paddleboardoverstock/hero/hero-scenic.webp':
    'https://assets.paddleboardoverstock.com/images/paddleboardoverstock/hero/tech-meeting-small.webp',
  'https://assets.paddleboardoverstock.com/images/paddleboardoverstock/hero/boat man Paddle Board Overstock-min.jpeg':
    'https://assets.paddleboardoverstock.com/images/paddleboardoverstock/hero/paddleboardoverstock-hero-design-concept.webp',
  'https://assets.paddleboardoverstock.com/images/paddleboardoverstock/hero/production-workshop.webp':
    'https://assets.paddleboardoverstock.com/images/paddleboardoverstock/factory/paddleboardoverstock-production-department.webp',
  'https://assets.paddleboardoverstock.com/images/paddleboardoverstock/hero/trust-hero.webp':
    'https://assets.paddleboardoverstock.com/images/paddleboardoverstock/hero/tech-meeting-small.webp',
  'https://assets.paddleboardoverstock.com/images/paddleboardoverstock/products/rib-330.webp':
    'https://assets.paddleboardoverstock.com/images/paddleboardoverstock/products/rib/paddleboardoverstock-rib-330-boat.webp',
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
