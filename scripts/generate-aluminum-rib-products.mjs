import XLSX from 'xlsx';
import fs from 'fs';
import path from 'path';

const EXCEL_PATH =
  'D:\\PADDLE BOARD OVERSTOCK Aluminum Hull RIB boat图片\\PADDLE BOARD OVERSTOCK Aluminum Hull RIB boat 规格表.xlsx';
const IMG_ROOT = 'D:\\PADDLE BOARD OVERSTOCK Aluminum Hull RIB boat图片';
const OUTPUT_DIR = 'src/content/products';
const MANIFEST_PATH = 'scripts/product-image-manifest.json';
const SW240_TEXT =
  'D:\\PADDLE BOARD OVERSTOCK Aluminum Hull RIB boat图片\\Swiftlitee\\Swiftlitee 240 (SW240)\\UL240和UL240LT.txt';

const R2_BASE = 'https://assets.paddleboardoverstock.com/images/paddleboardoverstock/products/rib';

function kebabCase(s) {
  return s
    .replace(/[^a-zA-Z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .toLowerCase();
}

function slugifyFilename(name, slug) {
  const base = name.replace(/\.(jpe?g|png|txt)$/i, '').trim();
  if (base.match(new RegExp('^' + slug.toUpperCase().replace(/-/g, '[\\s-]?') + '\\s', 'i'))) {
    const rest = base.replace(new RegExp('^' + slug.toUpperCase().replace(/-/g, '[\\s-]?') + '\\s*', 'i'), '');
    if (rest) return slug + '-' + kebabCase(rest);
    return slug;
  }
  if (base.match(/^PADDLE BOARD OVERSTOCK\s/i)) {
    const rest = base.replace(/^PADDLE BOARD OVERSTOCK\s+/i, '');
    return slug + '-' + kebabCase(rest);
  }
  return slug + '-' + kebabCase(base);
}

function scanImages() {
  const manifest = {};
  const seriesDirs = {
    'Apex Performance': 'ap',
    Defender: 'df',
    Explorer: 'ex',
    Swiftlitee: 'sw',
    Versa: 'vr',
  };

  for (const [seriesName, prefix] of Object.entries(seriesDirs)) {
    const seriesPath = path.join(IMG_ROOT, seriesName);
    if (!fs.existsSync(seriesPath)) {
      console.log(`  WARNING: ${seriesPath} not found, skipping`);
      continue;
    }
    const modelDirs = fs
      .readdirSync(seriesPath, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .sort();

    for (const modelDir of modelDirs) {
      let dirName = modelDir.name;
      let modelSlug;
      if (dirName === 'Swiftlitee 240 (SW240)' || dirName === 'Swiftlitee 240 (SW240)') {
        modelSlug = 'sw240';
      } else if (dirName === 'Swiftlitee 260 (SW260)') {
        modelSlug = 'sw260';
      } else if (dirName === 'VR260)') {
        modelSlug = 'vr260';
      } else if (dirName === 'DF540 Coaster-style Console') {
        modelSlug = 'df540-coaster';
      } else if (dirName === 'EX7') {
        modelSlug = 'ex7';
      } else if (dirName === 'EX9') {
        modelSlug = 'ex9';
      } else {
        const match = dirName.match(/^([A-Z]{1,2})(\d{2,3})/);
        if (match) {
          const code = (match[1] + match[2]).toLowerCase();
          modelSlug = prefix === 'df' && dirName.includes('Coaster') ? 'df540-coaster' : code;
        } else {
          console.log(`  WARNING: Cannot parse model from dir "${dirName}"`);
          continue;
        }
      }

      const modelPath = path.join(seriesPath, dirName);
      const files = fs
        .readdirSync(modelPath)
        .filter((f) => /\.(jpe?g|png)$/i.test(f))
        .sort();

      const images = [];
      let mainImage = '';
      let mainAlt = '';

      const colorPriority = ['grey', 'gray', 'deep-grey', 'deepgrey', 'deep-grey', 'white', 'black', 'light-grey'];
      let colorImage = '';

      for (const file of files) {
        const urlName = slugifyFilename(file, modelSlug) + '.webp';
        const url = `${R2_BASE}/${modelSlug}/${urlName}`;
        const altBase = modelSlug.toUpperCase().replace('-', ' ');
        const altDetail = file.replace(/\.(jpe?g|png)$/i, '').trim();
        const alt = `${altBase} ${altDetail}`;
        images.push({ url, alt });

        const lowerFile = file.toLowerCase();
        if (lowerFile.includes('grey') && !lowerFile.includes('deep')) {
          if (!colorImage || colorPriority.indexOf('grey') < colorPriority.indexOf(colorImage.split('-').pop())) {
            colorImage = url;
            mainImage = url;
            mainAlt = alt;
          }
        } else if (!mainImage && lowerFile.includes('white')) {
          mainImage = url;
          mainAlt = alt;
        } else if (!mainImage && lowerFile.includes('black')) {
          mainImage = url;
          mainAlt = alt;
        }
      }

      if (!mainImage && images.length > 0) {
        mainImage = images[0].url;
        mainAlt = images[0].alt;
      }

      const gallery = images.slice(0, 12);

      manifest[modelSlug] = {
        series: seriesName,
        mainImage,
        mainAlt,
        gallery,
        totalImages: files.length,
      };
    }
  }
  return manifest;
}

function parseSheet(ws) {
  const rows = XLSX.utils.sheet_to_json(ws, { header: 1, defval: '' });
  const data = {
    productName: '',
    positioning: '',
    features: '',
    specs: [],
    keyFeatures: [],
    colorSchemes: [],
    standardFeatures: [],
    optionalEquipment: [],
    notes: '',
    usPrice: '',
  };

  let section = '';
  let specHeaderFound = false;

  for (let i = 0; i < rows.length; i++) {
    const row = rows[i].map((c) => String(c).trim());
    const col0 = row[0] || '';
    const col1 = row[1] || '';

    if (/^[IVX]+[.\s]+Product Overview/i.test(col0) || /^1[.\s]+Product Overview/i.test(col0)) {
      section = 'overview';
      continue;
    }
    if (/^[IVX]+[.\s]+(Detailed\s+)?Specifications/i.test(col0) || /^2[.\s]+(Detailed\s+)?Specifications/i.test(col0)) {
      section = 'specs';
      continue;
    }
    if (
      /^[IVX]+[.\s]+Key Features/i.test(col0) ||
      /^[IVX]+[.\s]+Console Options/i.test(col0) ||
      /^[IVX]+[.\s]+Luxury/i.test(col0) ||
      /^3[.\s]+Key Features/i.test(col0) ||
      /^3[.\s]+Console Options/i.test(col0) ||
      /^3[.\s]+/i.test(col0)
    ) {
      section = 'features';
      continue;
    }
    if (/^[IVX]+[.\s]+Standard/i.test(col0) || /^4[.\s]+Standard/i.test(col0)) {
      section = 'equipment';
      continue;
    }

    if (section === 'overview') {
      if (/Product Name/i.test(col0)) {
        data.productName = col0.replace(/^Product Name\s*:\s*/i, '').trim() || col1;
      } else if (/Positioning/i.test(col0)) {
        data.positioning = col0.replace(/^Positioning\s*:\s*/i, '').trim() || col1;
      } else if (/Features|Core Upgrade|Performance|Revolutionary/i.test(col0) && col0.length > 20) {
        data.features =
          (data.features ? data.features + ' ' : '') +
          col0
            .replace(/^(Features|Core Upgrade|Performance & Capacity|Revolutionary Breakthrough Design)\s*:\s*/i, '')
            .trim();
      } else if (/US Market/i.test(col0) || /Price/i.test(col0)) {
        data.usPrice = col0.replace(/^.*Price\s*:\s*/i, '').trim() || col1;
      } else if (/^Note:/i.test(col0)) {
        data.notes = col0.replace(/^Note:\s*/i, '').trim();
      }
    }

    if (section === 'specs') {
      if (/Specification|Parameter/i.test(col0) && /Value/i.test(col1)) {
        specHeaderFound = true;
        continue;
      }
      if (/Specification|Parameter/i.test(col0) && col1 === '' && /Value/i.test(row[2] || '')) {
        specHeaderFound = true;
        continue;
      }
      if (specHeaderFound && col0 && col1) {
        const label = col0.replace(/\s*\(.*\)\s*$/, '').trim();
        const value = col1.trim();
        if (label && value && !/^Note/i.test(label) && label.length < 60) {
          data.specs.push({ label, value });
        }
      }
      if (/^Note:/i.test(col0)) {
        data.notes = col0.replace(/^Note:\s*/i, '').trim();
      }
    }

    if (section === 'features') {
      if (/^\d+\.\s/.test(col0) && col0.length > 20) {
        const featureText = col0.replace(/^\d+\.\s*/, '').trim();
        data.keyFeatures.push(featureText);
      }
      if (/Colour|Color/i.test(col0)) {
        section = 'colors';
        continue;
      }
      if (/Tube Fabric|Tube Material|Appearance/i.test(col0)) {
        section = 'colors';
        continue;
      }
    }

    if (section === 'colors') {
      if (/Tube Fabric/i.test(col0)) {
        data.colorSchemes.push('Fabric: ' + (col1 || col0.replace(/^.*?:\s*/, '')));
      } else if (/Commercial Paint|Commercial Color|Colour Scheme|Color Scheme/i.test(col0)) {
        data.colorSchemes.push(col0.replace(/^.*?:\s*/, '').trim() + (col1 ? ' ' + col1 : ''));
      } else if (
        /^(White|Light Grey|Dark Grey|Black|B-B-B|DG-|LG-|W-W|I-B-|O-G-|R-B-)/i.test(col0) &&
        col0.length < 80
      ) {
        data.colorSchemes.push(col0.trim());
      }
    }

    if (section === 'equipment') {
      if (/^\d+\.\s*Standard/i.test(col0)) {
        section = 'standard';
        continue;
      }
      if (/^\d+\.\s*Optional/i.test(col0)) {
        section = 'optional';
        continue;
      }
      if (/Included.*Accessories|Complimentary.*Tool|Onboard Tool/i.test(col0)) {
        section = 'accessories';
        continue;
      }
    }

    if (section === 'standard') {
      if (
        /Tube Fabric|Hull Structure|Complete Electrical|Hull Protection|Rigging|Deck.*Protection|Console|Craftsmanship/i.test(
          col0
        )
      ) {
        data.standardFeatures.push(col0.replace(/^.*?:\s*/, '').trim() || col0);
      } else if (/^\d+\.\s/.test(col0) && col0.length > 20) {
        data.standardFeatures.push(col0.replace(/^\d+\.\s*/, '').trim());
      }
      if (/Included.*Accessories|Complimentary.*Tool|Onboard Tool/i.test(col0)) {
        section = 'accessories';
        continue;
      }
      if (/^\d+\.\s*Optional/i.test(col0)) {
        section = 'optional';
        continue;
      }
    }

    if (section === 'accessories') {
      if (/foot pump|oars|dry bag|repair kit|seat|under seat/i.test(col0) && col0.length < 120) {
        data.standardFeatures.push(col0.trim());
      }
    }

    if (section === 'optional') {
      if (col0.length > 3 && col0.length < 120 && !/^\d+\.\s/.test(col0)) {
        data.optionalEquipment.push(col0.trim());
      }
    }
  }

  return data;
}

function getSeriesInfo(slug) {
  if (slug.startsWith('ap')) return { series: 'Apex Performance', tag: 'apex-performance', seriesDesc: 'luxury RIB' };
  if (slug.startsWith('df')) return { series: 'Defender', tag: 'defender', seriesDesc: 'commercial RIB' };
  if (slug.startsWith('ex')) return { series: 'Explorer', tag: 'explorer', seriesDesc: 'crossover boat' };
  if (slug.startsWith('sw')) return { series: 'Swiftlitee', tag: 'swiftlitee', seriesDesc: 'lightweight tender' };
  if (slug.startsWith('vr')) return { series: 'Versa', tag: 'versa', seriesDesc: 'deluxe tender' };
  return { series: 'RIB', tag: 'rib', seriesDesc: 'RIB' };
}

function getAdditionalTags(slug, specs) {
  const tags = ['rib'];
  const info = getSeriesInfo(slug);
  tags.push(info.tag);

  const designCat = specs.find((s) => /design category/i.test(s.label));
  if (designCat && /category b/i.test(designCat.value)) tags.push('offshore');
  if (designCat && /category c/i.test(designCat.value)) tags.push('inshore');

  const deadrise = specs.find((s) => /dead rise|deadrise/i.test(s.label));
  if (deadrise && /26/i.test(deadrise.value)) tags.push('deep-v');
  if (deadrise && /20/i.test(deadrise.value)) tags.push('deep-v');
  if (deadrise && /15|10\.5/i.test(deadrise.value)) tags.push('moderate-v');

  const maxHp = specs.find((s) => /max power|max hp/i.test(s.label));
  if (maxHp) {
    const hp = parseInt(maxHp.value);
    if (hp >= 200) tags.push('high-performance');
    if (hp >= 100 && hp < 200) tags.push('mid-range');
    if (hp < 100) tags.push('compact');
  }

  if (info.tag === 'defender') tags.push('commercial', 'patrol', 'sar');
  if (info.tag === 'apex-performance') tags.push('luxury', 'tender', 'console-rib');
  if (info.tag === 'explorer') tags.push('crossover', 'fiberglass');
  if (info.tag === 'swiftlitee') tags.push('tender', 'lightweight');
  if (info.tag === 'versa') tags.push('tender', 'double-deck');

  const maxPeople = specs.find((s) => /max person/i.test(s.label));
  if (maxPeople && parseInt(maxPeople.value) >= 12) tags.push('high-capacity');

  return [...new Set(tags)];
}

function mapSpecLabel(label) {
  const map = {
    'Overall Length': 'Overall Length',
    'Internal Length': 'Internal Length',
    'Overall Width': 'Beam',
    'Internal Width': 'Internal Beam',
    'Dead Rise': 'Deadrise',
    Deadrise: 'Deadrise',
    'Tube Diameter': 'Tube Diameter',
    '# of Air Chambers': 'Air Chambers',
    'Air Chambers': 'Air Chambers',
    'Fuel Tank': 'Fuel Tank',
    'Fuel Tank System': 'Fuel Tank',
    'Maximum Load': 'Max Load',
    'Maximum People': 'Max Persons',
    'Boat Weight': 'Boat Weight',
    'Boat Weight (Boat + Console)': 'Boat Weight',
    'Boat Weight (Hull + Console)': 'Boat Weight',
    'Boat Only Weight': 'Boat Weight',
    'Max Engine Weight': 'Max Engine Weight',
    'Max Engine Wt': 'Max Engine Weight',
    'Max HP': 'Max Power',
    'Max Hp': 'Max Power',
    'Rec HP': 'Recommended Power',
    'Rec Hp': 'Recommended Power',
    'Engine Shaft': 'Engine Shaft',
    'Design Category': 'Design Category',
    'Packing Dimensions': 'Shipping Dimensions',
    'Packed Shipping Dimensions': 'Shipping Dimensions',
    'Packing / Shipping Dimensions': 'Shipping Dimensions',
  };
  return map[label] || label;
}

function generateMDX(slug, productData, imageManifest) {
  const info = getSeriesInfo(slug);
  const img = imageManifest[slug] || { mainImage: '', gallery: [], mainAlt: '' };
  const tags = getAdditionalTags(slug, productData.specs);

  const title =
    productData.productName ||
    `Paddle Board Overstock ${info.series} ${slug
      .replace(/^[a-z]+/, '')
      .replace('-', ' ')
      .toUpperCase()}`;

  const summary = productData.positioning || `${info.series} series aluminum hull RIB.`;

  const description = productData.features ? `${summary} ${productData.features}` : summary;

  const mappedSpecs = productData.specs.map((s) => ({
    label: mapSpecLabel(s.label),
    value: s.value,
  }));

  const specYaml = mappedSpecs
    .map((s) => `  - label: "${s.label.replace(/"/g, "'")}"\n    value: "${s.value.replace(/"/g, "'")}"`)
    .join('\n');

  const galleryYaml =
    img.gallery && img.gallery.length > 0
      ? img.gallery.map((g) => `  - url: ${g.url}\n    alt: "${g.alt.replace(/"/g, "'")}"`).join('\n')
      : '  - url: https://assets.paddleboardoverstock.com/images/paddleboardoverstock/products/rib/paddleboardoverstock-rib-generic.webp\n    alt: "Paddle Board Overstock RIB"';

  const tagsYaml = tags.map((t) => `  - ${t}`).join('\n');

  const imageLine = img.mainImage ? `image: ${img.mainImage}` : '# image: placeholder — awaiting R2 upload';

  const sku = slug.toUpperCase().replace('-', '');

  const metadataTitle = `${title} | Paddle Board Overstock ${info.series}`;
  const metadataDesc = description.substring(0, 160);

  let body = '';

  body += `## ${title}\n\n`;
  body += `${productData.positioning || summary}\n\n`;
  if (productData.features) {
    body += `${productData.features}\n\n`;
  }

  if (productData.keyFeatures.length > 0) {
    body += `## Key Features\n\n`;
    for (const feat of productData.keyFeatures) {
      body += `- ${feat}\n`;
    }
    body += '\n';
  }

  if (productData.colorSchemes.length > 0) {
    body += `## Available Colors & Materials\n\n`;
    for (const c of productData.colorSchemes) {
      body += `- ${c}\n`;
    }
    body += '\n';
  }

  if (productData.standardFeatures.length > 0) {
    body += `## Standard Features\n\n`;
    for (const feat of productData.standardFeatures) {
      body += `- ${feat}\n`;
    }
    body += '\n';
  }

  if (productData.optionalEquipment.length > 0) {
    body += `## Optional Equipment\n\n`;
    for (const opt of productData.optionalEquipment) {
      body += `- ${opt}\n`;
    }
    body += '\n';
  }

  if (productData.notes) {
    body += `> ${productData.notes}\n\n`;
  }

  if (slug === 'sw240') {
    try {
      fs.readFileSync(SW240_TEXT, 'utf-8');
      body += `## UL240 vs UL240LT Variants\n\n`;
      body += `The Swiftlitee 240 is available in two transom height variants to suit different mothership and usage requirements:\n\n`;
      body += `### UL240 (Short Shaft)\n\n`;
      body += `- Transom height: 380mm — paired with short shaft (S) outboard engines\n`;
      body += `- Ideal for: Small yachts/sailboats (30-40 ft) with limited davit space\n`;
      body += `- Lighter at 33 kg for easier single-person handling\n`;
      body += `- Best for calm water recreation, lake fishing, and portable tender use\n\n`;
      body += `### UL240LT (Long Shaft)\n\n`;
      body += `- Transom height: 440mm — paired with long shaft (L) outboard engines\n`;
      body += `- Ideal for: Large yachts, catamarans, and vessels with higher freeboard\n`;
      body += `- Reuse existing long shaft engine from mothership — no need to buy a separate short shaft motor\n`;
      body += `- Higher transom prevents following seas from swamping the stern in rougher conditions\n`;
      body += `- Slightly wider beam (1570 mm vs 1540 mm) for marginally better stability\n\n`;
      body += `| Feature | UL240 | UL240LT |\n`;
      body += `|---------|-------|----------|\n`;
      body += `| Transom Height | 380 mm | 440 mm |\n`;
      body += `| Engine Shaft | Short (S) | Long (L) |\n`;
      body += `| Boat Weight | 33 kg | 34 kg |\n`;
      body += `| Beam | 1540 mm | 1570 mm |\n`;
      body += `| Best For | Calm water, portable use | Rough water, large yacht tender |\n\n`;
    } catch {
      console.log('  WARNING: Could not read SW240 variant text file');
    }
  }

  const frontmatter = `---
publishDate: 2025-06-15
title: "${title.replace(/"/g, "'")}"
sku: ${sku}
summary: "${summary.replace(/"/g, "'").substring(0, 200)}"
description: "${description.replace(/"/g, "'").substring(0, 300)}"
${imageLine}
gallery:
${galleryYaml}
category: rib
tags:
${tagsYaml}
specs:
${specYaml}
price:
  amount: ""
  currency: USD
  note: Contact factory for quote
inStock: true
featured: ${tags.includes('offshore') || slug === 'ap560' || slug === 'df540' || slug === 'vr380' ? 'true' : 'false'}
metadata:
  title: "${metadataTitle.replace(/"/g, "'")}"
  description: "${metadataDesc.replace(/"/g, "'")}"
---`;

  return frontmatter + '\n\n' + body;
}

function main() {
  console.log('=== Paddle Board Overstock Aluminum Hull RIB Product Generator ===\n');

  console.log('Step 1: Scanning image folders...');
  const imageManifest = scanImages();
  console.log(`  Found images for ${Object.keys(imageManifest).length} models\n`);

  fs.writeFileSync(MANIFEST_PATH, JSON.stringify(imageManifest, null, 2));
  console.log(`  Image manifest saved to ${MANIFEST_PATH}\n`);

  console.log('Step 2: Parsing Excel spec sheets...');
  const wb = XLSX.readFile(EXCEL_PATH);
  console.log(`  Found ${wb.SheetNames.length} sheets\n`);

  const sheetSlugMap = {};
  for (const name of wb.SheetNames) {
    if (/Paddle Board Overstock$/i.test(name.trim())) continue;

    let slug = '';
    let match;
    if ((match = /Apex Performance\s+(\d+)/i.exec(name))) {
      slug = 'ap' + match[1];
    } else if (/Defender\s+540\s+Coaster/i.test(name)) {
      slug = 'df540-coaster';
    } else if ((match = /Defender\s+(\d+)/i.exec(name))) {
      slug = 'df' + match[1];
    } else if ((match = /EX\s+(\d+)/i.exec(name))) {
      slug = 'ex' + match[1];
    } else if ((match = /Swiftlitee\s+(\d+)/i.exec(name))) {
      slug = 'sw' + match[1];
    } else if ((match = /Versa\s+(\d+)/i.exec(name))) {
      slug = 'vr' + match[1];
    }

    if (slug) {
      sheetSlugMap[name] = slug;
    }
  }

  console.log(`  Mapped ${Object.keys(sheetSlugMap).length} sheets to slugs\n`);

  console.log('Step 3: Generating MDX files...');
  let generated = 0;

  for (const [sheetName, slug] of Object.entries(sheetSlugMap)) {
    const ws = wb.Sheets[sheetName];
    const productData = parseSheet(ws);

    const mdx = generateMDX(slug, productData, imageManifest);
    const outputPath = path.join(OUTPUT_DIR, slug + '.mdx');

    fs.writeFileSync(outputPath, mdx, 'utf-8');
    generated++;
    console.log(`  ✓ ${slug}.mdx (${productData.specs.length} specs, ${productData.keyFeatures.length} features)`);
  }

  console.log(`\n  Generated ${generated} MDX files in ${OUTPUT_DIR}\n`);
  console.log('=== Done ===');
}

main();
