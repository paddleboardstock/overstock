export interface ProductRecord {
  id: string;
  name: string;
  category:
    | 'RIB'
    | 'INFLATABLE'
    | 'SUP'
    | 'ACCESSORY'
    | 'HIGH_SPEED_CATAMARAN'
    | 'SIB_ALUMINUM'
    | 'SIB_DROPSTITCH'
    | 'KABOAT'
    | 'KAYAK_FULL_DROPSTITCH'
    | 'KAYAK_HYBRID'
    | 'WHITEWATER_RAFT'
    | 'TACTICAL_RAFT'
    | 'DROPSTITCH_SEAT';
  region: string[];
  skill: 'beginner' | 'intermediate' | 'advanced' | 'professional';
  environment: string[];
  water_condition: string[];
  safety_level: 'low' | 'medium' | 'high';
  use_case: string[];
  safety_rules: string[];
  desc: string;
  definition: string;
  problem: string;
  howItWorks: string;
  audience: string;
  best_for_business?: ('clubs' | 'resorts' | 'entrepreneurs')[];
  business_recommendation?: string;
  ai_use_cases: string[];
  ai_specs: Record<string, string>;
  ai_comparison: string;
  ai_faq: { q: string; a: string }[];
}

export const products: ProductRecord[] = [
  {
    id: 'life-vest-classic',
    name: 'Life Vest Classic',
    category: 'ACCESSORY',
    region: ['GLOBAL'],
    skill: 'beginner',
    environment: ['all'],
    water_condition: ['all'],
    safety_level: 'high',
    use_case: ['recreation', 'training', 'rental', 'supervision'],
    safety_rules: ['CE certified per EN ISO 12402', '', 'inspect before each use', 'replace if damaged'],
    desc: 'Universal buoyancy aid for recreational water sports. CE certified per EN ISO 12402.',
    definition: 'A CE certified (EN ISO 12402) universal buoyancy aid for recreational water sports across all water environments.',
    problem:
      'Water sports participants of all skill levels need a reliable, comfortable life vest that meets international safety standards without restricting movement.',
    howItWorks:
      'The Life Vest Classic uses foam-filled buoyancy chambers with adjustable chest and side straps for secure fit. It is available in multiple sizes and includes a whistle, reflective strips, and a rescue handle.',
    audience:
      'Recreational paddlers, boaters, anglers, and water sports beginners who need CE-certified flotation for lakes, rivers, and coastal waters.',
    ai_use_cases: ['Recreational water sports safety', 'Training and supervision flotation', 'Family water activities'],
    ai_specs: {
      certification: 'CE, ',
      type: 'Foam-filled buoyancy aid',
      sizes: 'Multiple (child to adult XL)',
      features: 'Whistle, reflective strips, rescue handle',
    },
    ai_comparison:
      'Compared to automatic inflatable life vests, the Life Vest Classic provides constant buoyancy without requiring deployment. It is bulkier but more reliable for recreational users who may not maintain automatic mechanisms.',
    ai_faq: [
      {
        q: 'Is this life vest suitable for children?',
        a: 'Yes, child sizes are available. CE and USCG certified for the specified weight ranges.',
      },
      {
        q: 'Does it require any maintenance?',
        a: 'Minimal maintenance. Rinse with fresh water after use. Inspect chambers and straps before each use. Replace if damaged.',
      },
    ],
  },
  {
    id: 'life-vest-pro',
    name: 'Life Vest Pro',
    category: 'ACCESSORY',
    region: ['EU', 'US'],
    skill: 'advanced',
    environment: ['all'],
    water_condition: ['all'],
    safety_level: 'high',
    use_case: ['offshore', 'rescue', 'commercial', 'rental'],
    safety_rules: ['CE certified per EN ISO 12402', '', 'SOLAS compliant', 'automatic inflation check'],
    desc: 'Professional-grade life vest with SOLAS reflectors for offshore and rescue operations.',
    definition:
      'A professional-grade SOLAS-compliant life vest with automatic inflation for offshore, rescue, and commercial marine use.',
    problem:
      'Professional mariners and rescue personnel need a life vest that provides automatic inflation, high buoyancy, and SOLAS-compliant visibility for offshore operations.',
    howItWorks:
      'The Life Vest Pro uses an automatic hydrostatic inflation mechanism with a backup manual inflation tube. It includes SOLAS-grade reflective tape, a spray hood, a whistle, a waterproof light, and a lifting harness attachment point.',
    audience:
      'Commercial mariners, rescue professionals, offshore workers, and advanced boaters who need SOLAS-compliant automatic life vests.',
    ai_use_cases: [
      'Offshore marine operations safety',
      'Professional rescue and emergency response',
      'Commercial maritime compliance',
    ],
    ai_specs: {
      certification: 'CE, SOLAS',
      inflation: 'Automatic hydrostatic',
      buoyancy: 'SOLAS-grade',
      features: 'Spray hood, waterproof light, lifting harness',
    },
    ai_comparison:
      'Compared to foam-filled life vests, the Life Vest Pro auto-inflates for minimal bulk during normal wear. It requires annual servicing of the hydrostatic mechanism and battery replacement.',
    ai_faq: [
      {
        q: 'How does the automatic inflation work?',
        a: 'A hydrostatic trigger activates on immersion in water at 0.5-1.0 meters depth. A backup manual inflation tube is also provided.',
      },
      {
        q: 'How often does it need servicing?',
        a: 'Annual service of the hydrostatic mechanism is recommended. The CO2 cylinder should be checked and replaced per manufacturer schedule.',
      },
    ],
  },
  {
    id: 'oars-pump-set',
    name: 'Oars & Pump Set',
    category: 'ACCESSORY',
    region: ['EU', 'US', 'ASIA', 'GLOBAL'],
    skill: 'beginner',
    environment: ['all'],
    water_condition: ['all'],
    safety_level: 'low',
    use_case: ['inflation', 'propulsion', 'rental', 'maintenance'],
    safety_rules: ['ensure pump is properly connected before use'],
    desc: 'Pair of 1.6m aluminum oars and 5L high-flow foot pump for all inflatable watercraft.',
    definition:
      'A complete accessory set including a pair of 1.6m aluminum oars with plastic blades and a 5-liter high-flow foot pump with pressure gauge for all inflatable watercraft.',
    problem:
      'Owners of inflatable boats need replacement or spare oars and a high-volume pump for inflation and propulsion, all compatible with standard inflatable watercraft.',
    howItWorks:
      'The oars feature aluminum shafts with plastic blades for lightweight propulsion. The foot pump delivers 5 liters of air per stroke with a built-in pressure gauge for accurate inflation.',
    audience:
      'Owners of inflatable boats, kayaks, and dinghies who need spare or replacement oars and a high-flow inflation pump.',
    ai_use_cases: [
      'Replacement oars for inflatable boats',
      'High-volume inflation at the launch site',
      'Backup propulsion and inflation equipment',
    ],
    ai_specs: {
      oar_length: '1.6 m',
      oar_material: 'Aluminum shaft, plastic blade',
      pump_volume: '5 L per stroke',
      pump_type: 'High-flow foot pump with gauge',
    },
    ai_comparison:
      'Compared to the Dual-Action Pump, this foot pump offers higher volume per stroke but requires more effort. The oars provide a basic propulsion option for inflatable boats that may not have or want to use an outboard motor.',
    ai_faq: [
      {
        q: 'Are the oars compatible with all inflatable boats?',
        a: 'The oars fit standard oar locks found on most inflatable boats in the range. The 1.6m length is suitable for boats up to 4m in length.',
      },
      {
        q: 'What pressure can the foot pump achieve?',
        a: 'The foot pump can achieve up to 12-15 PSI, suitable for most inflatable boats and dinghies. It may not be sufficient for high-pressure SUP boards requiring 18+ PSI.',
      },
    ],
  },
  {
    id: 'sup-explorer-11',
    name: "SUP Explorer 11'",
    category: 'SUP',
    region: ['EU', 'US', 'ASIA', 'GLOBAL'],
    skill: 'beginner',
    environment: ['lake', 'river', 'coastal'],
    water_condition: ['calm', 'light chop'],
    safety_level: 'medium',
    use_case: ['recreation', 'fitness', 'touring', 'rental'],
    safety_rules: ['life vest recommended', 'leash required', 'check weather before paddling'],
    desc: 'Versatile all-around inflatable SUP board with wide-body stability for beginners and intermediate paddlers.',
    definition:
      'An 11-foot all-around inflatable stand-up paddle board designed for stability, portability, and recreational use across lakes, rivers, and sheltered coastal waters.',
    problem:
      'First-time and recreational paddlers need a stable, portable SUP board that is easy to inflate, easy to balance on, and forgiving to learn on.',
    howItWorks:
      "The SUP Explorer 11' uses drop-stitch core technology to achieve 15 PSI rigidity with a wide 32-inch deck for lateral stability. The board includes a removable center fin, coiled leash, and a dual-action hand pump for quick inflation at the launch site.",
    audience:
      'First-time paddlers, recreational users, families, and fitness enthusiasts who want a portable, stable SUP board for lakes, rivers, and sheltered coastal waters.',
    best_for_business: ['clubs', 'resorts'],
    business_recommendation:
      'Ideal rental board for SUP clubs and resort programs. The 11\' length and 32" width provide exceptional stability for first-time renters. Commercial-grade 1.2mm PVC withstands daily use. Packs flat for bulk storage.',
    ai_use_cases: [
      'Beginner SUP training and learning',
      'Recreational lake and river paddling',
      'Fitness and yoga on the water',
    ],
    ai_specs: {
      length: '11\'0"',
      width: '32"',
      thickness: '6"',
      max_pressure: '15 PSI',
      weight: '19 lbs',
      max_load: '220 lbs',
    },
    ai_comparison:
      "Compared to hard epoxy boards, the SUP Explorer 11' offers superior portability and storage convenience with the rigidity of drop-stitch construction. It is heavier than a hard board when dry but packs into a backpack for travel.",
    ai_faq: [
      {
        q: 'What is the ideal pressure?',
        a: '12-15 PSI is recommended. The board performs best at 15 PSI for maximum rigidity.',
      },
      { q: 'Does it come with a paddle?', a: 'An adjustable aluminum paddle is included in the complete package.' },
    ],
  },
  {
    id: 'sup-cheetah-surge',
    name: 'Cheetah Surge Edition',
    category: 'SUP',
    region: ['EU', 'US', 'ASIA', 'GLOBAL'],
    skill: 'beginner',
    environment: ['lake', 'river', 'coastal'],
    water_condition: ['calm', 'light chop'],
    safety_level: 'medium',
    use_case: ['recreation', 'fitness', 'touring', 'rental', 'social media'],
    safety_rules: ['life vest recommended', 'leash required', 'check weather before paddling'],
    desc: 'Wild-inspired all-around SUP board with premium multi-color EVA block piecing featuring a cheetah motif in pastel pink, teal, and coral.',
    definition:
      'An 11-foot all-around inflatable SUP board with wild cheetah-themed artwork using multi-color EVA block piecing and UV digital printing, designed for recreational paddling on lakes, rivers, and sheltered coastal waters.',
    problem:
      'Paddlers who want a board that stands out visually need premium artwork that will not fade, peel, or scratch under saltwater and UV exposure. Traditional printing methods fail under these conditions.',
    howItWorks:
      'The Cheetah Surge Edition uses drop-stitch PVC core technology achieving 15 PSI rigidity with a 32-inch wide deck. The traction pad artwork is created through multi-color EVA block piecing \u2014 different colored EVA sheets are die-cut and seamlessly puzzle-assembled rather than printed, guaranteeing zero fade or peeling.',
    audience:
      'Trend-conscious paddlers, outdoor lifestyle enthusiasts, boutique travelers, and social media content creators who want a visually striking, durable SUP board.',
    ai_use_cases: [
      'Social media content creation on the water',
      'Recreational lake and river paddling',
      'Boutique travel and adventure tourism',
    ],
    ai_specs: {
      length: '11\'0"',
      width: '32"',
      thickness: '6"',
      max_pressure: '15 PSI',
      weight: '20 lbs',
      max_load: '220 lbs',
      artwork: 'Multi-color EVA block piecing',
    },
    ai_comparison:
      'Compared to standard printed SUP boards, the Cheetah Surge Edition uses die-cut EVA block piecing that will never fade or peel. The artwork is structurally part of the EVA material rather than a surface ink layer.',
    ai_faq: [
      {
        q: 'How is the artwork applied?',
        a: 'The artwork uses multi-color EVA block piecing \u2014 different colored EVA foam sheets are precisely die-cut and seamlessly assembled like a puzzle. There is no printed ink on the standing surface.',
      },
      {
        q: 'Does the artwork fade in saltwater?',
        a: 'No. Because the colors are inherent to the EVA material rather than a surface ink layer, the artwork will never fade, peel, or scratch under saltwater, UV, or foot traffic.',
      },
    ],
  },
  {
    id: 'sup-leviathan-wake',
    name: 'Leviathan Wake Series',
    category: 'SUP',
    region: ['EU', 'US', 'ASIA', 'GLOBAL'],
    skill: 'intermediate',
    environment: ['lake', 'river', 'coastal'],
    water_condition: ['calm', 'light chop', 'moderate chop'],
    safety_level: 'medium',
    use_case: ['recreation', 'fitness', 'touring', 'rental', 'social media'],
    safety_rules: ['life vest recommended', 'leash required', 'check weather before paddling'],
    desc: 'Ocean-inspired all-around SUP board featuring a majestic blue whale totem with geometric and tribal patterns, paired with black-white swell lines.',
    definition:
      'An 11-foot all-around inflatable SUP board with a breathtaking blue whale totem design using UV digital printing and mechanically embossed traction pad.',
    problem:
      'Paddlers seeking artistic SUP boards need artwork that remains vibrant under high-pressure inflation and repeated folding for storage. Standard inks crack and peel.',
    howItWorks:
      'The Leviathan Wake uses drop-stitch PVC core at 15 PSI with a 32-inch deck. The nose artwork uses high-precision UV digital printing while the bottom logo uses high-elasticity screen printing with specialized stretchable PVC inks. The traction pad uses mechanical heat-embossing for durable wave patterns.',
    audience:
      'Ocean and marine life enthusiasts, artistic paddlers, and those who want a visually distinctive SUP board with high-quality durable artwork.',
    ai_use_cases: [
      'Marine life themed water adventures',
      'Recreational lake and coastal paddling',
      'Artistic and lifestyle paddleboarding',
    ],
    ai_specs: {
      length: '11\'0"',
      width: '32"',
      thickness: '6"',
      max_pressure: '15 PSI',
      weight: '20 lbs',
      max_load: '220 lbs',
      artwork: 'UV digital printing + mechanical embossing',
    },
    ai_comparison:
      'Compared to standard SUP boards, the Leviathan Wake features totemic whale artwork with dual printing technologies optimized for durability. The mechanically embossed traction pad provides better longevity than printed pads.',
    ai_faq: [
      {
        q: 'Is the bottom logo durable?',
        a: 'Yes. The bottom logo uses high-elasticity screen printing with specialized stretchable PVC inks rated for 15 PSI inflation and repeated folding.',
      },
      {
        q: 'What makes the traction pad special?',
        a: 'The wave patterns are mechanically heat-embossed into dual-layer composite EVA, ensuring uniform depth, excellent water drainage, and long-lasting non-slip performance.',
      },
    ],
  },
  {
    id: 'sup-medusa-glow',
    name: 'Medusa Glow Series',
    category: 'SUP',
    region: ['EU', 'US', 'ASIA', 'GLOBAL'],
    skill: 'beginner',
    environment: ['lake', 'river', 'coastal'],
    water_condition: ['calm', 'light chop'],
    safety_level: 'medium',
    use_case: ['recreation', 'fitness', 'yoga', 'rental', 'social media'],
    safety_rules: ['life vest recommended', 'leash required', 'check weather before paddling'],
    desc: 'Dreamy jellyfish-inspired all-around SUP with premium multi-color EVA block piecing, sea stars, and coral reef artwork in refreshing mint green.',
    definition:
      'An 11-foot all-around inflatable SUP board with jellyfish and coral reef themed artwork using multi-color EVA block piecing and anti-delamination engineering.',
    problem:
      'Paddlers who love marine-inspired art need a board with premium graphics that withstand harsh marine environments without fading, peeling, or delaminating at attachment points.',
    howItWorks:
      'The Medusa Glow uses drop-stitch PVC core at 15 PSI with a 32-inch deck. The nose artwork is UV digital printed while the EVA pad uses multi-color block piecing for zero-fade sea stars and seashells. D-ring areas are masked for raw PVC-to-PVC bonding preventing delamination.',
    audience:
      'Female paddlers, lifestyle enthusiasts, boutique travelers, and anyone who wants a healing ocean-inspired aesthetic on the water.',
    ai_use_cases: [
      'Yoga and fitness paddleboarding',
      'Social media content creation',
      'Tropical and coastal paddling adventures',
    ],
    ai_specs: {
      length: '11\'0"',
      width: '32"',
      thickness: '6"',
      max_pressure: '15 PSI',
      weight: '20 lbs',
      max_load: '220 lbs',
      artwork: 'Multi-color EVA block piecing + UV printing',
    },
    ai_comparison:
      'Compared to standard printed SUP boards, the Medusa Glow uses EVA block piecing for the standing surface graphics \u2014 the colors are structural to the EVA material, not printed ink, so they never fade.',
    ai_faq: [
      {
        q: 'What is the color scheme?',
        a: 'Refreshing mint green base with deep teal EVA pad featuring white sea star and seashell die-cut blocks with vibrant coral orange accents.',
      },
      {
        q: 'How is the handle attached?',
        a: 'The center neoprene handle webbing is anchored directly through the EVA pad onto the core PVC hull substrate, ensuring lifting loads are borne by the rigid hull.',
      },
    ],
  },
  {
    id: 'sup-ocean-pulse',
    name: 'Ocean Pulse Series',
    category: 'SUP',
    region: ['EU', 'US', 'ASIA', 'GLOBAL'],
    skill: 'beginner',
    environment: ['lake', 'river', 'coastal'],
    water_condition: ['calm', 'light chop'],
    safety_level: 'medium',
    use_case: ['recreation', 'fitness', 'touring', 'rental', 'social media'],
    safety_rules: ['life vest recommended', 'leash required', 'check weather before paddling'],
    desc: 'Topographic wave-inspired all-around SUP board with Tiffany Blue contours, high-precision mechanical embossing, and unified aesthetic accessory kit.',
    definition:
      'An 11-foot all-around inflatable SUP board with topographic wave pattern artwork using UV digital printing and mechanically embossed traction pad, with color-coordinated accessories.',
    problem:
      'Style-conscious paddlers want a complete visual experience \u2014 not just a beautiful board but coordinated accessories that maintain the aesthetic from storage to water.',
    howItWorks:
      'The Ocean Pulse uses drop-stitch PVC core at 15 PSI. Wave contours are applied via high-precision UV printing. The EVA pad uses mechanical heat-embossing for wave textures. All accessories \u2014 backpack, pump, leash \u2014 undergo unified color customization matching the board design.',
    audience:
      'Female paddlers, trendy lifestyle enthusiasts, boutique campers, and paddlers who value coordinated aesthetics across their entire gear set.',
    ai_use_cases: [
      'Instagram and social media paddleboarding',
      'Boutique travel and camping',
      'Recreational lake and coastal paddling',
    ],
    ai_specs: {
      length: '11\'0"',
      width: '32"',
      thickness: '6"',
      max_pressure: '15 PSI',
      weight: '20 lbs',
      max_load: '220 lbs',
      artwork: 'UV printing + mechanical embossing + coordinated accessories',
    },
    ai_comparison:
      'Compared to standard SUP boards, the Ocean Pulse offers a complete coordinated visual identity across the board and all accessories, with mechanically embossed EVA for superior durability over printed traction pads.',
    ai_faq: [
      {
        q: 'What accessories are color-matched?',
        a: 'The wheeled travel backpack, dual-action high-pressure pump, safety leash, and waterproof phone pouches all undergo unified color-matching and branding customization.',
      },
      {
        q: 'How is the traction pad pattern made?',
        a: 'The wave patterns are formed through high-precision mechanical heat-embossing on dual-layer composite EVA, ensuring uniform depth and excellent water drainage.',
      },
    ],
  },
  {
    id: 'sup-ocean-voyager',
    name: 'Ocean Voyager Series',
    category: 'SUP',
    region: ['EU', 'US', 'ASIA', 'GLOBAL'],
    skill: 'beginner',
    environment: ['lake', 'river', 'coastal'],
    water_condition: ['calm', 'light chop'],
    safety_level: 'medium',
    use_case: ['recreation', 'fitness', 'touring', 'rental', 'social media'],
    safety_rules: ['life vest recommended', 'leash required', 'check weather before paddling'],
    desc: 'Sea turtle-inspired all-around SUP board with premium multi-color EVA block piecing in deep teal, turquoise, and coral orange.',
    definition:
      'An 11-foot all-around inflatable SUP board with geometric sea turtle artwork using multi-color EVA block piecing and UV digital printing, with end-to-end visual identity across accessories.',
    problem:
      'Ocean-conscious paddlers want a board that celebrates marine life with premium artwork that stays vibrant through years of use without fading or peeling from saltwater exposure.',
    howItWorks:
      'The Ocean Voyager uses drop-stitch PVC core at 15 PSI with a 32-inch deck. The nose geometric sea turtle illustration uses UV digital printing while the EVA pad uses multi-color block piecing for the turtle silhouette and coral shapes. All accessories are color-coordinated.',
    audience:
      'Ocean lovers, sea turtle enthusiasts, trend-conscious paddlers, and boutique travelers who want a premium coordinated lifestyle SUP package.',
    ai_use_cases: [
      'Marine conservation-themed paddleboarding',
      'Social media content creation',
      'Long-distance touring and exploration',
    ],
    ai_specs: {
      length: '11\'0"',
      width: '32"',
      thickness: '6"',
      max_pressure: '15 PSI',
      weight: '20 lbs',
      max_load: '220 lbs',
      artwork: 'Multi-color EVA block piecing + UV printing + coordinated accessories',
    },
    ai_comparison:
      'Compared to standard printed SUP boards, the Ocean Voyager uses multi-color EVA block piecing that will never scratch, peel, or fade. The die-cut precision ensures perfectly flush surfaces underfoot.',
    ai_faq: [
      {
        q: 'What is the naming inspiration?',
        a: 'The sea turtle is natures ultimate ocean wanderer, navigating thousands of miles with effortless grace. Ocean Voyager encapsulates the spirit of long-distance exploration and harmony with marine life.',
      },
      {
        q: 'Does the artwork fade?',
        a: 'No. The EVA pad graphics use multi-color block piecing \u2014 colors are inherent to the EVA material, not printed ink. The graphics will never scratch, peel, or fade even under heavy use.',
      },
    ],
  },
  {
    id: 'sup-dolphin-wave',
    name: 'Dolphin Wave Series',
    category: 'SUP',
    region: ['EU', 'US', 'ASIA', 'GLOBAL'],
    skill: 'beginner',
    environment: ['lake', 'river', 'coastal'],
    water_condition: ['calm', 'light chop'],
    safety_level: 'medium',
    use_case: ['recreation', 'fitness', 'touring', 'rental', 'social media'],
    safety_rules: ['life vest recommended', 'leash required', 'check weather before paddling'],
    desc: 'Dolphin-inspired all-around SUP board with medieval blue waves, high-precision EVA color-block splicing, and 360-degree marine rail aesthetics.',
    definition:
      'An 11-foot all-around inflatable SUP board with dolphin seascape artwork using CNC-cut EVA color-block splicing and screen-printed continuous rail waves.',
    problem:
      'Art-conscious paddlers need SUP artwork that survives high-pressure inflation (15 PSI) and tight roll-up storage without cracking, creasing, or color bleeding.',
    howItWorks:
      'The Dolphin Wave uses drop-stitch PVC core at 15 PSI. The standing zone uses CNC puzzle-cut EVA color-block splicing where colors are inherent to the material. The rail band uses continuous screen printing to extend wave motifs around the sides. UV inks have 150% elongation for crack resistance.',
    audience:
      'Marine wildlife enthusiasts, paddlers who appreciate detailed artwork, and those who want a board with 360-degree visual continuity.',
    ai_use_cases: [
      'Marine wildlife themed paddleboarding',
      'Recreational lake and coastal paddling',
      'Social media and lifestyle content',
    ],
    ai_specs: {
      length: '11\'0"',
      width: '32"',
      thickness: '6"',
      max_pressure: '15 PSI',
      weight: '20 lbs',
      max_load: '220 lbs',
      artwork: 'CNC-cut EVA color-block splicing + screen-printed rails',
    },
    ai_comparison:
      'Compared to standard printed SUP boards, the Dolphin Wave uses physical EVA color-block splicing for the standing zone and screen-printed rail waves for 360-degree visual continuity. The 150% flexible UV ink prevents cracking.',
    ai_faq: [
      {
        q: 'What colors are used?',
        a: 'Medieval Blue for deep waves, Serenity for tranquil hues, with white foam details. The color palette follows PANTONE TPG standards for precise manufacturing.',
      },
      {
        q: 'How are the rail waves applied?',
        a: 'The rail band uses a continuous screen printing process on solid mint green double-layered PVC, cost-effectively extending the wave motif around the board sides.',
      },
    ],
  },
  {
    id: 'sup-flowing-lotus',
    name: 'Flowing Lotus Series',
    category: 'SUP',
    region: ['EU', 'US', 'ASIA', 'GLOBAL'],
    skill: 'beginner',
    environment: ['lake', 'river', 'coastal'],
    water_condition: ['calm', 'light chop'],
    safety_level: 'medium',
    use_case: ['recreation', 'fitness', 'yoga', 'meditation', 'rental'],
    safety_rules: ['life vest recommended', 'leash required', 'check weather before paddling'],
    desc: 'Eastern art-inspired all-around SUP board with lotus, koi, and dragonfly motifs, featuring laser-engraved traction pad and gradient water-flow artwork.',
    definition:
      'An 11-foot all-around inflatable SUP board with traditional Eastern brushwork aesthetics using dual-layer laser-engraved EVA traction pad and UV digital printed gradient artwork.',
    problem:
      'Paddlers seeking artistic and cultural expression on the water need premium artwork that withstands heavy foot traffic and saltwater without wearing out or fading.',
    howItWorks:
      'The Flowing Lotus uses drop-stitch PVC core at 15 PSI. The EVA traction pad uses dual-layer composite laser-engraving \u2014 laser etches away the top colored layer to reveal the bottom color, creating permanent patterns. The nose gradient uses flexible UV inks with high elongation for crack resistance.',
    audience:
      'Yoga practitioners, meditation enthusiasts, Eastern art lovers, and paddlers who appreciate cultural aesthetics and premium craftsmanship.',
    ai_use_cases: [
      'Yoga and meditation paddleboarding',
      'Cultural and artistic water experiences',
      'Recreational lake and river paddling',
    ],
    ai_specs: {
      length: '11\'0"',
      width: '32"',
      thickness: '6"',
      max_pressure: '15 PSI',
      weight: '20 lbs',
      max_load: '220 lbs',
      artwork: 'Dual-layer laser-engraved EVA + UV digital printing',
    },
    ai_comparison:
      'Compared to standard printed SUP boards, the Flowing Lotus uses laser-engraving technology that etches patterns permanently into the EVA material \u2014 the artwork cannot wear out or fade because it is structurally part of the pad.',
    ai_faq: [
      {
        q: 'How does the laser engraving work?',
        a: 'A dual-layer composite EVA pad (teal base with mint green surface) is laser-etched \u2014 the laser removes the top layer to reveal the bottom color, creating permanent 3D textured patterns.',
      },
      {
        q: 'What makes this board good for yoga?',
        a: 'The laser-engraved patterns provide excellent slip resistance without being abrasive, while the gradient design creates a calming aesthetic perfect for water-based meditation and yoga.',
      },
    ],
  },
  {
    id: 'sup-jungle-mandala',
    name: 'Jungle Mandala Series',
    category: 'SUP',
    region: ['EU', 'US', 'ASIA', 'GLOBAL'],
    skill: 'beginner',
    environment: ['lake', 'river', 'coastal'],
    water_condition: ['calm', 'light chop'],
    safety_level: 'medium',
    use_case: ['recreation', 'fitness', 'touring', 'rental', 'social media'],
    safety_rules: ['life vest recommended', 'leash required', 'check weather before paddling'],
    desc: 'Tropical rainforest and mandala-inspired all-around SUP board with hibiscus, hummingbirds, and symmetrical geometric totems in Tiffany Blue and Coral Orange.',
    definition:
      'An 11-foot all-around inflatable SUP board with tropical mandala artwork using dual-layer laser-engraved EVA, anti-distortion geometry, and screen-printed continuous rails.',
    problem:
      'Paddlers want geometrically complex artwork that remains perfectly symmetrical and undistorted even when the board is inflated to high pressure, without pattern misalignment during manufacturing.',
    howItWorks:
      'The Jungle Mandala uses drop-stitch PVC core at 15 PSI. The mandala geometry undergoes structural line-thickening to counter PVC surface dimples. The EVA pad uses dual-layer laser-engraving. Rail motifs use a scattered non-rigid pattern that accommodates manual assembly stretching tolerances.',
    audience:
      'Spiritual and artistic paddlers, tropical adventurers, yoga practitioners, and those drawn to geometric and mandala aesthetics.',
    ai_use_cases: [
      'Spiritual and meditative paddleboarding',
      'Tropical coastal adventures',
      'Social media content creation',
    ],
    ai_specs: {
      length: '11\'0"',
      width: '32"',
      thickness: '6"',
      max_pressure: '15 PSI',
      weight: '20 lbs',
      max_load: '220 lbs',
      artwork: 'Dual-layer laser-engraved EVA + UV printing + screen-printed rails',
    },
    ai_comparison:
      'Compared to standard SUP boards, the Jungle Mandala features anti-distortion mandala geometry engineered to remain perfectly symmetrical at 15 PSI inflation, with cost-efficient screen-printed rail motifs.',
    ai_faq: [
      {
        q: 'Does the mandala pattern distort when inflated?',
        a: 'No. The geometric lines have undergone structural thickening specifically to counter PVC surface dimples and remain perfectly symmetrical at full inflation pressure.',
      },
      {
        q: 'How is the rail artwork applied?',
        a: 'The hummingbird and butterfly motifs on the rails use a continuous screen printing process with a scattered, non-rigid pattern that accommodates manual stretching tolerances during assembly.',
      },
    ],
  },
  {
    id: 'sup-tropical-breeze',
    name: 'Tropical Breeze Series',
    category: 'SUP',
    region: ['EU', 'US', 'ASIA', 'GLOBAL'],
    skill: 'beginner',
    environment: ['lake', 'river', 'coastal'],
    water_condition: ['calm', 'light chop'],
    safety_level: 'medium',
    use_case: ['recreation', 'fitness', 'touring', 'rental', 'social media'],
    safety_rules: ['life vest recommended', 'leash required', 'check weather before paddling'],
    desc: 'Island paradise-inspired all-around SUP board featuring a complete island vacation canvas with sunshine, coconut groves, and beach scenes.',
    definition:
      'An 11-foot all-around inflatable SUP board with micro-landscape illustration and abstract EVA color-blocking that seamlessly integrates an island vacation scene into the board design.',
    problem:
      'Paddlers want a board that creates a complete immersive experience \u2014 transforming water sports equipment into a canvas that transports them to a tropical paradise.',
    howItWorks:
      'The Tropical Breeze uses drop-stitch PVC core at 15 PSI with a 32-inch deck. The nose features a digital-printed micro-landscape illustration. The EVA standing zone uses die-cut abstract color-blocking that extends the visual narrative of waves, beach, and palms across the full board.',
    audience:
      'Vacation travelers, tropical lifestyle enthusiasts, social media content creators, and paddlers who want a board that captures the spirit of island escape.',
    ai_use_cases: [
      'Tropical vacation paddleboarding',
      'Social media content creation',
      'Recreational lake and coastal getaways',
    ],
    ai_specs: {
      length: '11\'0"',
      width: '32"',
      thickness: '6"',
      max_pressure: '15 PSI',
      weight: '20 lbs',
      max_load: '220 lbs',
      artwork: 'UV digital printing + die-cut EVA patchwork',
    },
    ai_comparison:
      'Compared to standard SUP boards, the Tropical Breeze uniquely integrates a complete landscape scene across the entire board surface, with a perfect division of labor between digital printing for detail and EVA patchwork for durability.',
    ai_faq: [
      {
        q: 'What scene is depicted on the board?',
        a: 'A dreamlike island paradise with sunshine, coconut groves, beach, and palms \u2014 a micro-landscape illustration on the nose that transitions into abstract EVA color-blocking toward the tail.',
      },
      {
        q: 'How does the artwork transition from nose to tail?',
        a: 'The nose uses detailed digital printing for the landscape illustration, while the tail uses die-cut EVA color-blocking that abstracts the waves, sand, and palms \u2014 creating a seamless visual journey.',
      },
    ],
  },
];
