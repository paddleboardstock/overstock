import { localized } from '../src/lib/geo-v4/i18n.js';
import { nodes } from '../src/content/graph/nodes.js';
import { relations } from '../src/content/graph/relations.js';
import { analyzeAll } from '../src/lib/geo-v5/semanticEngine.js';
import { scoreAllNodes, systemHealth } from '../src/lib/geo-v5/scoring.js';
import { clusterTopics } from '../src/lib/geo-v5/topicCluster.js';
import { detectContentGaps, gapsBySeverity } from '../src/lib/geo-v5/gapDetector.js';
import fs from 'fs';
import path from 'path';
import * as yaml from 'js-yaml';

const dir = import.meta.dirname;
const root = path.resolve(dir, '..');
const publicDir = path.join(root, 'public');

function readSiteUrl(): string {
  try {
    const configPath = path.join(root, 'src', 'config.yaml');
    const raw = fs.readFileSync(configPath, 'utf8');
    const config = yaml.load(raw) as any;
    return config?.site?.site || 'https://paddleboardoverstock.com';
  } catch {
    return 'https://paddleboardoverstock.com';
  }
}

const allLangs = [
  'en',
  'fr',
  'de',
  'es',
  'pt',
  'ar',
  'it',
  'ru',
  'pl',
  'nl',
  'th',
  'tl',
  'hu',
  'ro',
  'bg',
  'tr',
  'id',
  'ms',
];

// --- v5 AI Semantic Analysis (run once in English for diagnostics) ---
const analysis = analyzeAll(nodes);
const scores = scoreAllNodes(analysis.map((a) => ({ id: a.id, score: a.score })));
const health = systemHealth(scores);
const clusters = clusterTopics(nodes);
const gaps = detectContentGaps(nodes);
const gapGroups = gapsBySeverity(gaps);

console.log(`\n[GEO v5] AI Semantic Analysis:`);
console.log(`  System Health: ${health.averageTotal}/100`);
console.log(`  Grade Distribution: A=${health.aCount} B=${health.bCount} C=${health.cCount}`);
console.log(`  Weakest Node: ${health.weakest?.id} (${health.weakest?.total})`);
console.log(`  Strongest Node: ${health.strongest?.id} (${health.strongest?.total})`);
console.log(`  Content Gaps: ${gaps.length} high=${gapGroups.high.length} medium=${gapGroups.medium.length}`);
console.log(
  `  Topic Clusters: ${Object.entries(clusters)
    .map(([k, v]) => `${k}=${v.length}`)
    .join(', ')}`
);

if (gapGroups.high.length > 0) {
  console.log(`\n  \u26a0 High Severity Gaps:`);
  for (const g of gapGroups.high) {
    console.log(`    - ${g.node}: ${g.issue}`);
  }
}

// --- llms.txt content (llmstxt.org spec) ---

const SITE_TITLE = 'Paddle Board Overstock';

// Single source of truth for numbers and facts (see src/config/facts.json)
interface SiteFacts {
  brand: { foundingYear: number; legalName: string };
  factory: {
    areaSqm: number;
    city: string;
    prefecture: string;
    productionLines: number;
    workforceMin: number;
    workforceMax: number;
    annualCapacityUnits: number;
  };
  reach: { countriesServed: string };
  catalog: Record<string, never>;
  quality: {
    defectFreeRate: string;
    pressureTest: { multiplier: string; holdHours: string; full: string };
  };
  commercial: {
    moqSup: string;
  };
}

const facts = JSON.parse(fs.readFileSync(path.join(root, 'src', 'config', 'facts.json'), 'utf8')) as SiteFacts;

const operator = facts.brand.legalName;
const fmt = (n: number) => n.toLocaleString('en-US');

const tagline: Record<string, string> = {
  en: `Paddle Board Overstock designs and manufactures professional-grade inflatable SUP boards and paddling accessories in its own ${fmt(facts.factory.areaSqm)} m2 factory in ${facts.factory.prefecture}, China.`,
  fr: 'Paddle Board Overstock conçoit des planches SUP gonflables de qualité professionnelle et des accessoires de pagaïe.',
  de: 'Paddle Board Overstock entwickelt professionelle aufblasbare SUP-Boards und Paddel-Zubehör.',
  es: 'Paddle Board Overstock diseña tablas SUP inflables de grado profesional y accesorios de remo.',
  pt: 'Paddle Board Overstock concebe pranchas SUP insufláveis de qualidade profissional e acessórios de remo.',
  ar: 'Paddle Board Overstock تصمم ألواح SUP قابلة للنفخ بمعايير احترافية وملحقات التجديف.',
  it: 'Paddle Board Overstock progetta tavole SUP gonfiabili di qualità professionale e accessori per il SUP.',
  ru: 'Paddle Board Overstock проектирует профессиональные надувные SUP-доски и аксессуары для гребли.',
  pl: 'Paddle Board Overstock projektuje profesjonalne nadmuchiwane deski SUP i akcesoria do wiosłowania.',
  nl: 'Paddle Board Overstock ontwerpt professionele opblaasbare SUP-boards en paddle-accessoires.',
};

const INTRO_EN =
  `Founded in ${facts.brand.foundingYear} in ${facts.factory.prefecture}, China, Paddle Board Overstock operates ${facts.factory.productionLines} production lines with ${facts.factory.workforceMin}-${facts.factory.workforceMax} staff and an annual capacity of ${fmt(facts.factory.annualCapacityUnits)} units. ` +
  `Every unit passes a ${facts.quality.pressureTest.full}, and outgoing shipments achieve a ${facts.quality.defectFreeRate} defect-free rate. ` +
  `Paddle Board Overstock ships to ${facts.reach.countriesServed} countries. ${facts.commercial.moqSup}. ` +
  `Since September 2026 the brand has been operated by ${operator}, with R&D and production at the Paddle Board Overstock Weihai Manufacturing Hub.`;

interface LlmsLink {
  label: string;
  path: string;
  desc: string;
}

const LINK_GROUPS: Array<{ title: string; links: LlmsLink[] }> = [
  {
    title: 'Company',
    links: [
      {
        label: 'Products',
        path: '/products/',
        desc: 'Catalog of inflatable SUP boards and paddling accessories',
      },
      {
        label: 'Factory',
        path: '/factory/',
        desc: `${fmt(facts.factory.areaSqm)} m2 vertically integrated factory in ${facts.factory.city}, ${facts.factory.prefecture} — ${facts.factory.productionLines} production lines, ${fmt(facts.factory.annualCapacityUnits)} units annual capacity`,
      },
      {
        label: 'Quality Control',
        path: '/quality/',
        desc: `${facts.quality.pressureTest.full}, ${facts.quality.defectFreeRate} defect-free rate`,
      },
      {
        label: 'Technology',
        path: '/technology/',
        desc: 'Drop-stitch, welding, and hull technologies used in production',
      },
      {
        label: 'Safety',
        path: '/safety/',
        desc: 'Safety equipment and safety gear',
      },
      {
        label: 'Engineering Team',
        path: '/engineering-team/',
        desc: 'In-house engineering and R&D capabilities',
      },
      {
        label: 'About',
        path: '/about/',
        desc: `Company background — established ${facts.brand.foundingYear}, operated by ${operator} since September 2026, exports to ${facts.reach.countriesServed} countries`,
      },
      {
        label: 'FAQ',
        path: '/faq/',
        desc: 'Answers to common paddler questions',
      },
      {
        label: 'Contact',
        path: '/contact/',
        desc: 'Contact the customer support team',
      },
    ],
  },
  {
    title: 'Use Cases',
    links: [
      {
        label: 'Use Cases',
        path: '/use-cases/',
        desc: 'Paddle boarding use cases and product recommendations',
      },
      {
        label: 'Touring',
        path: '/use-cases/touring/',
        desc: 'Long-distance touring paddle boards',
      },
      {
        label: 'Beginner',
        path: '/use-cases/beginner/',
        desc: 'Boards for beginner paddlers',
      },
      {
        label: 'SUP Fishing',
        path: '/use-cases/fishing/',
        desc: 'Stable platforms for paddle board fishing',
      },
      {
        label: 'Family Recreation',
        path: '/use-cases/family-recreation/',
        desc: 'Family-friendly boards for casual paddling',
      },
      {
        label: 'River Touring',
        path: '/use-cases/river-touring/',
        desc: 'Maneuverable boards for river paddling',
      },
    ],
  },
  {
    title: 'Guides',
    links: [
      { label: 'Guides', path: '/guides/', desc: 'Paddle boarding guides and tutorials' },
      {
        label: 'Learn SUP',
        path: '/learn/sup/',
        desc: 'Beginner stand-up paddleboarding fundamentals',
      },
      {
        label: 'SUP Size Guide',
        path: '/size-guide/',
        desc: 'Board length, width, and volume by rider weight and skill',
      },
      {
        label: 'Materials Reference',
        path: '/learn/materials/',
        desc: 'Inflatable SUP materials explained',
      },
      {
        label: 'Water Safety',
        path: '/learn/water-safety/',
        desc: 'Water safety guidance for paddlers',
      },
    ],
  },
  {
    title: 'Comparisons',
    links: [
      {
        label: 'Inflatable vs Hardboard',
        path: '/compare/inflatable-vs-hardboard/',
        desc: 'Inflatable and hardboard SUP compared',
      },
      {
        label: 'SUP vs Kayak',
        path: '/compare/sup-vs-kayak/',
        desc: 'Stability, speed, and storage compared',
      },
    ],
  },
];

const OPTIONAL_LINKS: LlmsLink[] = [
  { label: 'Paddle Board Overstock Story', path: '/paddleboardoverstock-story/', desc: 'Brand history and milestones' },
  { label: 'Size Guide', path: '/size-guide/', desc: 'Sizing help for SUP boards and paddles' },
  { label: 'Warranty', path: '/warranty/', desc: 'Warranty coverage and claims' },
  { label: 'Gallery', path: '/gallery/', desc: 'Product and factory photography' },
  { label: 'Academy', path: '/academy/', desc: 'Training and education resources' },
  { label: 'Media Center', path: '/media/', desc: 'Press materials and brand assets' },
  { label: 'Journal', path: '/journal/', desc: 'Articles and company updates' },
  { label: 'Design & Innovation', path: '/design-powerhouse/', desc: 'Design capabilities and innovation process' },
  { label: 'Engineering Perfection', path: '/engineering-perfection/', desc: 'Engineering standards and methods' },
];

const AI_REFERENCE_LINKS: LlmsLink[] = [
  {
    label: 'Paddle Board Overstock Brand Profile',
    path: '/llms/brand/paddleboardoverstock',
    desc: 'Machine-readable brand entity profile',
  },
  { label: 'SUP Types Reference', path: '/llms/compare/sup-types', desc: 'Machine-readable SUP type comparison' },
  {
    label: 'Drop-Stitch Technology Reference',
    path: '/llms/technology/drop-stitch',
    desc: 'Machine-readable drop-stitch technology data',
  },
  {
    label: 'Inflatable Water Sports Reference',
    path: '/llms/industry/inflatable-water-sports',
    desc: 'Machine-readable water sports overview',
  },
];

function renderLinks(links: LlmsLink[], base: string, prefix: string): string[] {
  return links.map((l) => `- [${l.label}](${base}${prefix}${l.path}): ${l.desc}`);
}

function generateLlmsTxt() {
  const base = readSiteUrl();
  for (const lang of allLangs) {
    const prefix = lang === 'en' ? '' : `/${lang}`;
    const sections: string[] = [];
    for (const group of LINK_GROUPS) {
      sections.push(`## ${group.title}`);
      sections.push(renderLinks(group.links, base, prefix).join('\n'));
    }
    const optional = [...OPTIONAL_LINKS, ...(lang === 'en' ? AI_REFERENCE_LINKS : [])];
    sections.push('## Optional');
    sections.push(renderLinks(optional, base, prefix).join('\n'));

    const content = [
      '# ' + SITE_TITLE,
      '',
      `> ${tagline[lang] || tagline.en}`,
      '',
      INTRO_EN,
      '',
      sections.join('\n\n'),
      '',
    ].join('\n');

    const langDir = path.join(publicDir, lang);
    if (!fs.existsSync(langDir)) fs.mkdirSync(langDir, { recursive: true });
    fs.writeFileSync(path.join(langDir, 'llms.txt'), content, 'utf-8');
    if (lang === 'en') {
      fs.writeFileSync(path.join(publicDir, 'llms.txt'), content, 'utf-8');
    }
  }
  console.log(
    `[llms.txt] written for ${allLangs.length} languages per llmstxt.org spec (${nodes.length} nodes, ${relations.length} relations)`
  );
}

// --- llms-full.txt knowledge graph section (idempotent) ---

const KG_MARKER = '\n## Knowledge Graph';
const KG_NEXT_MARKER = '\n## Company Facts';

function knowledgeGraphSection(): string {
  const conceptLines = nodes.map((n) => {
    const name = localized(n.name, 'en') || n.id;
    const desc = localized(n.description, 'en') || '';
    return `- ${name}: ${desc.split('.')[0]}`;
  });
  const relationLines = relations.map((r) => `- ${localized(r.label, 'en') || r.type}`);
  return [
    '## Knowledge Graph',
    '',
    'The Paddle Board Overstock knowledge graph organizes water sports equipment as an ontology of categories, technologies, and use cases.',
    '',
    '### Core Concepts',
    '',
    ...conceptLines,
    '',
    '### Relations',
    '',
    ...relationLines,
  ].join('\n');
}

function generateLlmsFullKnowledgeGraph() {
  const file = path.join(publicDir, 'llms-full.txt');
  let existing = fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : '';

  // Strip the previously generated section so repeated runs stay idempotent
  const kgIdx = existing.indexOf(KG_MARKER);
  if (kgIdx !== -1) {
    const nextIdx = existing.indexOf(KG_NEXT_MARKER, kgIdx);
    existing = nextIdx !== -1 ? existing.slice(0, kgIdx) + existing.slice(nextIdx) : existing.slice(0, kgIdx);
  }

  const section = knowledgeGraphSection();
  const cfIdx = existing.indexOf(KG_NEXT_MARKER);
  const output =
    cfIdx !== -1
      ? existing.slice(0, cfIdx).trimEnd() + '\n\n' + section + '\n' + existing.slice(cfIdx)
      : existing.trimEnd() + '\n\n' + section + '\n';
  fs.writeFileSync(file, output, 'utf-8');
  console.log('[llms-full.txt] knowledge graph section refreshed');
}

console.log('=== GEO v4 + v5 Build Pipeline ===');
generateLlmsTxt();
generateLlmsFullKnowledgeGraph();
console.log('\n=== GEO v4 + v5 Build Complete ===');
