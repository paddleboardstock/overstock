/**
 * Fix absolute-claim translations in the products.ts mirror layers:
 *  A) src/lib/product-extras.ts — hand-curated: 45 hand-crafted clause replacements
 *     (ai_comparison x27, cheetah howItWorks x9, medusa howItWorks x9)
 *  B) src/data/product-texts.ts — MT layer: positional field-value replacement for the
 *     7 changed EN fields (cheetah problem/howItWorks/ai_comparison/faq1a,
 *     medusa ai_comparison, ocean ai_comparison/faq1a), fresh Bing translations,
 *     cached under `${lang}::${text}` keys compatible with translate-products.mjs.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createEngine } from './lib/translate-lib.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const EXTRAS = path.join(ROOT, 'src/lib/product-extras.ts');
const TEXTS = path.join(ROOT, 'src/data/product-texts.ts');
const DRY = process.argv.includes('--dry-run');

// ---------------- A) extras clause replacements ----------------
// [needle, replacement, scope] — scope = `${lang}/${slug}` for verification only
const EXTRAS_FIXES = [
  // ai_comparison — de
  [
    'die nie ausbleicht oder abblättert',
    'die darauf ausgelegt ist, Verblassen und Abblättern zu widerstehen',
    'de/sup-cheetah-surge',
  ],
  [
    'die nie verkratzt, abblättert oder ausbleicht',
    'die darauf ausgelegt ist, Kratzer, Abblättern und Verblassen zu widerstehen',
    'de/sup-ocean-voyager',
  ],
  ['weshalb sie nie ausbleichen', 'weshalb sie darauf ausgelegt sind, Verblassen zu widerstehen', 'de/sup-medusa-glow'],
  // ai_comparison — es
  [
    'que nunca se desvanecen ni se despegan',
    'diseñadas para resistir el desvanecimiento y el desprendimiento',
    'es/sup-cheetah-surge',
  ],
  [
    'que nunca se rayarán, despegarán ni desvanecerán',
    'diseñadas para resistir los arañazos, el desprendimiento y el desvanecimiento',
    'es/sup-ocean-voyager',
  ],
  [
    'por lo que nunca se desvanecen',
    'por lo que están diseñadas para resistir el desvanecimiento',
    'es/sup-medusa-glow',
  ],
  // ai_comparison — fr
  [
    'qui ne se décolore jamais et ne pèle jamais',
    'conçue pour résister à la décoloration et au décollement',
    'fr/sup-cheetah-surge',
  ],
  [
    'qui ne se raye, ne pèle ni ne se décolore jamais',
    'conçue pour résister aux rayures, au décollement et à la décoloration',
    'fr/sup-ocean-voyager',
  ],
  [
    'elles ne se décolorent donc jamais',
    'elles sont donc conçues pour résister à la décoloration',
    'fr/sup-medusa-glow',
  ],
  // ai_comparison — it
  [
    'che non sbiadiscono né si scrostano mai',
    'progettate per resistere allo sbiadimento e allo scrostamento',
    'it/sup-cheetah-surge',
  ],
  [
    'che non si graffiano, non si scrostano né sbiadiscono mai',
    'progettate per resistere ai graffi, allo scrostamento e allo sbiadimento',
    'it/sup-ocean-voyager',
  ],
  ['quindi non sbiadiscono mai', 'quindi sono progettate per resistere allo sbiadimento', 'it/sup-medusa-glow'],
  // ai_comparison — ru
  [
    'которая никогда не выцветает и не отслаивается',
    'которая рассчитана на устойчивость к выцветанию и отслаиванию',
    'ru/sup-cheetah-surge',
  ],
  [
    'которая никогда не царапается, не отслаивается и не выцветает',
    'которая рассчитана на устойчивость к царапинам, отслаиванию и выцветанию',
    'ru/sup-ocean-voyager',
  ],
  ['поэтому они никогда не выцветают', 'поэтому они рассчитаны на устойчивость к выцветанию', 'ru/sup-medusa-glow'],
  // ai_comparison — pl
  [
    'która nigdy nie blaknie i nie łuszczy się',
    'zaprojektowana tak, aby oprzeć się blaknięciu i łuszczeniu',
    'pl/sup-cheetah-surge',
  ],
  [
    'która nigdy nie rysuje się, nie łuszczy i nie blaknie',
    'zaprojektowana tak, aby oprzeć się zarysowaniom, łuszczeniu i blaknięciu',
    'pl/sup-ocean-voyager',
  ],
  ['więc nigdy nie blakną', 'więc są zaprojektowane tak, aby oprzeć się blaknięciu', 'pl/sup-medusa-glow'],
  // ai_comparison — pt
  ['que nunca desbota nem descasca', 'concebida para resistir ao desbotamento e à descamação', 'pt/sup-cheetah-surge'],
  [
    'que nunca se riscam, não descascam nem desbotam',
    'concebidos para resistir a riscos, à descamação e ao desbotamento',
    'pt/sup-ocean-voyager',
  ],
  ['por isso nunca desbotam', 'por isso são concebidos para resistir ao desbotamento', 'pt/sup-medusa-glow'],
  // ai_comparison — ar
  ['التي لا بهت أبداً ولا تتقشر', 'المصممة لمقاومة البهتان والتقشر', 'ar/sup-cheetah-surge'],
  ['التي لا تُخدش ولا تتقشر ولا بهت أبداً', 'المصممة لمقاومة الخدش والتقشر والبهتان', 'ar/sup-ocean-voyager'],
  ['لذا لا بهت أبداً', 'لذا فهي مصممة لمقاومة البهتان', 'ar/sup-medusa-glow'],
  // ai_comparison — nl
  [
    'die nooit verbleekt of bladdert',
    'die ontworpen is om verbleken en afbladderen te weerstaan',
    'nl/sup-cheetah-surge',
  ],
  [
    'die nooit krast, bladdert of verbleekt',
    'die ontworpen is om krassen, afbladderen en verbleken te weerstaan',
    'nl/sup-ocean-voyager',
  ],
  ['dus ze verbleken nooit', 'dus ze zijn ontworpen om verbleken te weerstaan', 'nl/sup-medusa-glow'],
  // howItWorks — cheetah (guarantee fragment)
  [
    'und garantiert so keinerlei Ausbleichen oder Abblättern.',
    'und ist so auf dauerhaft farbbeständige und abblätterfeste Ausführung ausgelegt.',
    'de/sup-cheetah-surge',
  ],
  [
    'lo que garantiza que no se desvanezca ni se despegue.',
    'lo que la hace resistente al desvanecimiento y al desprendimiento.',
    'es/sup-cheetah-surge',
  ],
  [
    'garantissant zéro décoloration et zéro pelage.',
    'pour une résistance durable à la décoloration et au décollement.',
    'fr/sup-cheetah-surge',
  ],
  [
    'garantendo zero sbiadimenti o scrostamenti.',
    'per una resistenza duratura allo sbiadimento e allo scrostamento.',
    'it/sup-cheetah-surge',
  ],
  [
    'что гарантирует нулевое выцветание и отслоение.',
    'что обеспечивает устойчивость к выцветанию и отслаиванию.',
    'ru/sup-cheetah-surge',
  ],
  [
    'wat garandeert dat er geen verbleking of bladdering optreedt.',
    'wat het ontwerp bestand maakt tegen verbleken en afbladderen.',
    'nl/sup-cheetah-surge',
  ],
  [
    'co gwarantuje brak blaknięcia i łuszczenia.',
    'co zapewnia odporność na blaknięcie i łuszczenie.',
    'pl/sup-cheetah-surge',
  ],
  ['مما يضمن عدم البهتان والتقشر.', 'ما يجعله مقاوماً للبهتان والتقشر.', 'ar/sup-cheetah-surge'],
  [
    'garantindo ausência de desbotamento e descasque.',
    'para uma resistência duradoura ao desbotamento e à descamação.',
    'pt/sup-cheetah-surge',
  ],
  // howItWorks — medusa (never-fading fragment)
  [
    'für nie ausbleichende Seesterne und Muscheln sorgt',
    'für langlebig farbstarke Seesterne und Muscheln sorgt',
    'de/sup-medusa-glow',
  ],
  [
    'para estrellas de mar y conchas que no se desvanecen',
    'para estrellas de mar y conchas de colores duraderos',
    'es/sup-medusa-glow',
  ],
  [
    'pour des étoiles de mer et coquillages sans décoloration',
    'pour des étoiles de mer et coquillages aux couleurs durables',
    'fr/sup-medusa-glow',
  ],
  [
    'per stelle marine e conchiglie che non sbiadiscono',
    'per stelle marine e conchiglie dai colori duraturi',
    'it/sup-medusa-glow',
  ],
  [
    'для невыцветающих морских звёзд и ракушек',
    'для морских звёзд и ракушек с долговечными цветами',
    'ru/sup-medusa-glow',
  ],
  [
    'voor niet-verblekende zeesterren en schelpen',
    'voor zeesterren en schelpen met duurzame kleuren',
    'nl/sup-medusa-glow',
  ],
  ['dla nieblaknących rozgwiazd i muszelek', 'dla rozgwiazd i muszelek o trwałych kolorach', 'pl/sup-medusa-glow'],
  ['لنجمات البحر والأصداف غير الباهتة', 'لنجمات البحر والأصداف ذات الألوان الدائمة', 'ar/sup-medusa-glow'],
  [
    'para estrelas-do-mar e conchas que não desbotam',
    'para estrelas-do-mar e conchas de cores duradouras',
    'pt/sup-medusa-glow',
  ],
];

// ---------------- B) product-texts.ts field replacements ----------------
const NEW_EN = {
  'sup-cheetah-surge': {
    problem:
      'Paddlers who want a board that stands out visually need premium artwork that resists fading, peeling, and scratching under saltwater and UV exposure. Traditional printing methods fall short under these conditions.',
    howItWorks:
      'The Cheetah Surge Edition uses drop-stitch PVC core technology achieving 15 PSI rigidity with a 32-inch wide deck. The traction pad artwork is created through multi-color EVA block piecing — different colored EVA sheets are die-cut and seamlessly puzzle-assembled rather than printed, for long-lasting fade and peel resistance.',
    ai_comparison:
      'Compared to standard printed SUP boards, the Cheetah Surge Edition uses die-cut EVA block piecing designed to resist fading and peeling. The artwork is structurally part of the EVA material rather than a surface ink layer.',
    faq1a:
      'No. Because the colors are inherent to the EVA material rather than a surface ink layer, the artwork is designed to resist fading, peeling, and scratching under saltwater, UV, and foot traffic.',
  },
  'sup-medusa-glow': {
    ai_comparison:
      'Compared to standard printed SUP boards, the Medusa Glow uses EVA block piecing for the standing surface graphics — the colors are structural to the EVA material, not printed ink, so they are designed to resist fading.',
  },
  'sup-ocean-voyager': {
    ai_comparison:
      'Compared to standard printed SUP boards, the Ocean Voyager uses multi-color EVA block piecing designed to resist scratching, peeling, and fading. The die-cut precision ensures perfectly flush surfaces underfoot.',
    faq1a:
      'No. The EVA pad graphics use multi-color block piecing — colors are inherent to the EVA material, not printed ink. The graphics are designed to resist scratching, peeling, and fading even under heavy use.',
  },
};

const engine = createEngine({
  cacheFile: path.join(ROOT, '.cache/product-translate-cache.json'),
  rateMs: 120,
  log: (m) => console.log(m),
});
engine.load();
console.log('Engine cache: ' + engine.cacheSize + ' entries');

function escFor(quote, s) {
  let out = s.replace(/\\/g, '\\\\').replace(/\r?\n/g, ' ');
  if (quote === "'") out = out.replace(/'/g, "\\'");
  else out = out.replace(/"/g, '\\"');
  return out;
}

async function main() {
  if (!DRY) await engine.refreshSession();

  // ---------- A) extras ----------
  let extras = fs.readFileSync(EXTRAS, 'utf8');
  const extrasReport = [];
  for (const [needle, repl, scope] of EXTRAS_FIXES) {
    const n = extras.split(needle).length - 1;
    if (n === 0 && extras.includes(repl)) {
      extrasReport.push(`SKIP ${scope}: already applied`);
      continue;
    }
    if (n !== 1) {
      extrasReport.push(`FAIL ${scope}: needle count=${n} :: ${needle.slice(0, 40)}`);
      continue;
    }
    if (DRY) {
      extrasReport.push(`OK   ${scope} (dry) :: ${needle.slice(0, 40)} -> ${repl.slice(0, 40)}`);
      continue;
    }
    extras = extras.replace(needle, () => repl);
    extrasReport.push(`OK   ${scope} :: ${needle.slice(0, 40)} -> ${repl.slice(0, 40)}`);
  }

  // ---------- B) product-texts.ts ----------
  let texts = fs.readFileSync(TEXTS, 'utf8');
  const textsReport = [];
  const langMarks = [...texts.matchAll(/^ {2}([a-z]{2}): \{$/gm)].map((m) => ({ lang: m[1], start: m.index }));
  const langs = langMarks.map((l) => l.lang);
  for (let li = 0; li < langMarks.length; li++) {
    const lang = langMarks[li].lang;
    const blockStart = texts.indexOf(`\n  ${lang}: {`);
    const nm = texts.slice(blockStart + 1).search(/\n {2}[a-z]{2}: \{/);
    const blockEnd = nm < 0 ? texts.length : blockStart + 1 + nm;
    for (const [slug, fields] of Object.entries(NEW_EN)) {
      const key = `'${slug}': {`;
      const ki = texts.indexOf(key, blockStart);
      if (ki < 0 || ki >= blockEnd) {
        textsReport.push(`MISS ${lang}/${slug}: entry not found`);
        continue;
      }
      const entryProbeEnd = texts.indexOf('\n    },', ki);
      const entryProbe = texts.slice(ki, entryProbeEnd < 0 ? blockEnd : entryProbeEnd);
      if (!entryProbe.includes('definition:')) {
        textsReport.push(`SKIP ${lang}/${slug}: minimal entry (name/desc only) — content fields fall back to EN`);
        continue;
      }
      for (const [field, newEn] of Object.entries(fields)) {
        // recompute the entry window fresh: earlier field replacements shift offsets
        const entryEnd = texts.indexOf('\n    },', ki);
        const oldEntry = texts.slice(ki, entryEnd + '\n    },'.length);
        let entry = oldEntry;
        if (field === 'faq1a') {
          // replace the 2nd `a:` value inside ai_faq
          const faqStart = entry.indexOf('ai_faq:');
          if (faqStart < 0) {
            textsReport.push(`SKIP ${lang}/${slug}/faq1a: no ai_faq in this layer (extras layer owns faq)`);
            continue;
          }
          const answers = [...entry.slice(faqStart).matchAll(/\ba: (['"])((?:\\.|(?!\1).)*)\1/g)];
          if (answers.length < 2) {
            textsReport.push(`MISS ${lang}/${slug}/faq1a: only ${answers.length} answers`);
            continue;
          }
          const m = answers[1];
          const oldVal = m[2];
          const newTr = DRY ? '[DRY]' : escFor(m[1], await engine.translate1(newEn, lang));
          if (DRY) {
            textsReport.push(`OK   ${lang}/${slug}/faq1a (dry): ${oldVal.slice(0, 40)}...`);
            continue;
          }
          const oldFull = `a: ${m[1]}${oldVal}${m[1]}`;
          const newFull = `a: ${m[1]}${newTr}${m[1]}`;
          entry = entry.replace(oldFull, () => newFull);
          textsReport.push(`OK   ${lang}/${slug}/faq1a: ${oldVal.slice(0, 40)}... -> ${newTr.slice(0, 40)}...`);
        } else {
          const re = new RegExp(`(\\b${field}: )(['"])((?:\\\\.|(?!\\2).)*)\\2`);
          const m = entry.match(re);
          if (!m) {
            textsReport.push(`MISS ${lang}/${slug}/${field}: field not found`);
            continue;
          }
          if (DRY) {
            textsReport.push(`OK   ${lang}/${slug}/${field} (dry): ${m[3].slice(0, 40)}...`);
            continue;
          }
          const newTr = escFor(m[2], await engine.translate1(newEn, lang));
          const oldFull = m[0];
          const newFull = `${m[1]}${m[2]}${newTr}${m[2]}`;
          entry = entry.replace(oldFull, () => newFull);
          textsReport.push(`OK   ${lang}/${slug}/${field}: ${m[3].slice(0, 40)}... -> ${newTr.slice(0, 40)}...`);
        }
        if (!DRY && entry !== oldEntry) texts = texts.slice(0, ki) + entry + texts.slice(ki + oldEntry.length);
      }
    }
  }

  console.log('\n--- extras report ---');
  for (const r of extrasReport) console.log(r);
  console.log('\n--- product-texts report ---');
  for (const r of textsReport) console.log(r);

  const extrasFail = extrasReport.filter((r) => r.startsWith('FAIL')).length;
  const textsMiss = textsReport.filter((r) => r.startsWith('MISS')).length;
  console.log(
    `\nextras ok=${extrasReport.filter((r) => r.startsWith('OK')).length}/${EXTRAS_FIXES.length} | texts ok=${textsReport.filter((r) => r.startsWith('OK')).length} miss=${textsMiss} (langs: ${langs.join(',')})`
  );

  if (!DRY) {
    if (extrasFail === 0) fs.writeFileSync(EXTRAS, extras, 'utf8');
    else console.log('extras NOT written (failures)');
    if (textsMiss === 0) fs.writeFileSync(TEXTS, texts, 'utf8');
    else console.log('product-texts NOT written (misses) — review report');
    engine.save();
  } else {
    console.log('(dry run — nothing written)');
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
