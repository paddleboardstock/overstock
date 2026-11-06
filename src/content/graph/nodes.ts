export interface GraphNode {
  id: string;
  type: 'product-category' | 'technology' | 'material' | 'use-case' | 'component' | 'concept';
  name: Record<string, string>;
  description: Record<string, string>;
  features?: Record<string, string[]>;
  useCases?: Record<string, string[]>;
  faq?: Record<string, Array<{ q: string; a: string }>>;
  related: string[];
  slug: Record<string, string>;
}

export const nodes: GraphNode[] = [
  {
    id: 'inflatable-sup',
    type: 'product-category',
    name: {
      en: 'Inflatable SUP Board',
      zh: '充气站立式桨板',
      fr: 'Planche SUP Gonflable',
      de: 'Aufblasbares SUP-Board',
      tr: 'Şişme SUP Tahtası',
      ro: 'Tablă SUP Gonflabilă',
      th: 'บอร์ด SUP เป่าลม',
      es: 'Tabla SUP Hinchable',
      pt: 'Tábua SUP Inflável',
      it: 'SUP Gonfiabile',
      ru: 'Надувная SUP-доска',
      pl: 'Deska SUP Pompowana',
      ar: 'Inflatable SUP Board',
      nl: 'Opblaasbare SUP-plank',
      tl: 'Inflatable na SUP board',
      hu: 'Felfújható SUP tábla',
      bg: 'Надуваема SUP дъска',
      id: 'Papan SUP Tiup',
      ms: 'Papan SUP Titiup',
    },
    description: {
      en: 'Portable air-filled paddle board designed for surfing, touring, and recreation on flat water and small waves.',
    },
    features: {
      en: [
        'Drop-stitch core for rigidity',
        'EVA foam deck pad for traction',
        'Removable fin system',
        'High-pressure inflation up to 15 PSI',
        'Packs into backpack for storage',
      ],
    },
    useCases: {
      en: [
        'Flat water paddling',
        'Touring and distance paddling',
        'Small wave surfing',
        'Fishing from inflatable craft',
        'Fitness and SUP yoga',
      ],
    },
    faq: {
      en: [
        {
          q: 'Is an inflatable SUP as rigid as a hard board?',
          a: 'At proper inflation (12-15 PSI), modern drop-stitch SUPs achieve comparable rigidity for recreational paddling.',
        },
        {
          q: 'How long does it take to inflate?',
          a: 'With a dual-action pump, most boards reach 12-15 PSI in 3-5 minutes.',
        },
        {
          q: 'Can I take an inflatable SUP on an airplane?',
          a: 'Yes. When deflated and rolled, most SUPs fit into a backpack within typical checked baggage size guidelines — check your carrier policies.',
        },
      ],
    },
    related: ['drop-stitch-core', 'eva-deck', 'paddle', 'touring', 'beginner'],
    slug: {
      en: 'inflatable-sup',
      zh: 'inflatable-sup',
      ar: 'inflatable-sup',
      ru: 'inflatable-sup',
      fr: 'inflatable-sup-board',
      de: 'inflatable-sup-board',
      es: 'inflatable-sup-board',
      pt: 'inflatable-sup-board',
      it: 'inflatable-sup-board',
      pl: 'inflatable-sup-board',
    },
  },

  {
    id: 'safety-equipment',
    type: 'product-category',
    name: {
      en: 'Safety Equipment',
      zh: '安全装备',
      fr: 'Équipement de Sécurité',
      de: 'Sicherheitsausrüstung',
      tr: 'Güvenlik Ekipmanı',
      ro: 'Echipament de Siguranță',
      th: 'อุปกรณ์นิรภัย',
      es: 'Equipo de Seguridad',
      pt: 'Equipamento de Segurança',
      it: 'Attrezzatura di Sicurezza',
      ru: 'Спасательное оборудование',
      pl: 'Sprzęt Bezpieczeństwa',
      ar: 'Safety Equipment',
      nl: 'Veiligheidsuitrusting',
      tl: 'Kagamitan sa kaligtasan',
      hu: 'Biztonsági felszerelés',
      bg: 'Спасително оборудване',
      id: 'Peralatan Keselamatan',
      ms: 'Peralatan Keselamatan',
    },
    description: {
      en: 'Life vests, leashes, throw bags, and safety accessories for recreational paddle boarding.',
    },
    features: {
      en: ['Reliable foam flotation', 'Marine-grade buoyancy foam', 'Adjustable fit', 'Reflective trim for visibility'],
    },
    useCases: {
      en: ['All water activities', 'Beginner paddle boarding', 'Family recreation', 'Paddle boarding with kids'],
    },
    faq: {
      en: [
        {
          q: 'What safety equipment do I need for paddle boarding?',
          a: 'Wear a life vest and attach your leash; carry a whistle, and use a navigation light if you paddle after dark.',
        },
        {
          q: 'How often should I replace my life vest?',
          a: 'Foam life vests should be replaced every 5-7 years or immediately if the fabric shows signs of wear, tears, or the foam has become waterlogged.',
        },
      ],
    },
    related: ['buoyancy-foam', 'beginner', 'family-recreation'],
    slug: {
      en: 'safety-equipment',
      zh: 'safety-equipment',
      ar: 'safety-equipment',
      ru: 'safety-equipment',
      fr: 'safety-equipment',
      de: 'safety-equipment',
      es: 'safety-equipment',
      pt: 'safety-equipment',
      it: 'safety-equipment',
      pl: 'safety-equipment',
    },
  },

  {
    id: 'accessory',
    type: 'product-category',
    name: {
      en: 'Accessories',
      zh: '配件',
      fr: 'Accessoires',
      de: 'Zubehör',
      tr: 'Aksesuarlar',
      ro: 'Accesorii',
      th: 'อุปกรณ์เสริม',
      es: 'Accesorios',
      pt: 'Acessórios',
      it: 'Accessori',
      ru: 'Аксессуары',
      pl: 'Akcesoria',
      ar: 'Accessories',
      nl: 'Accessoires',
      tl: 'Mga aksesorya',
      hu: 'Kiegészítők',
      bg: 'Аксесоари',
      id: 'Aksesori',
      ms: 'Aksesori',
    },
    description: {
      en: 'Pumps, paddles, fins, repair kits, and carrying bags that complete the inflatable SUP setup.',
    },
    features: {
      en: [
        'Dual-action hand pumps',
        'Adjustable aluminum and carbon paddles',
        'Slide-in and snap-in fin systems',
        'Repair kits with PVC patches and valve tools',
      ],
    },
    useCases: {
      en: ['SUP board setup and maintenance', 'Board inflation and transport', 'Field repair and emergency fixes'],
    },
    faq: {
      en: [
        {
          q: 'What accessories do I need to get started with an inflatable SUP?',
          a: 'At minimum you need a pump, paddle, leash, and life vest. A repair kit and carrying bag are also highly recommended.',
        },
        {
          q: 'Can I use any pump with any inflatable board?',
          a: 'Most boards and pumps use compatible valve systems. However, high-pressure drop-stitch boards require a pump capable of reaching 15 PSI.',
        },
      ],
    },
    related: ['paddle', 'dual-action-pump', 'eva-deck'],
    slug: {
      en: 'accessory',
      zh: 'accessory',
      ar: 'accessory',
      ru: 'accessory',
      fr: 'accessories',
      de: 'accessories',
      es: 'accessories',
      pt: 'accessories',
      it: 'accessories',
      pl: 'accessories',
    },
  },

  {
    id: 'paddle',
    type: 'component',
    name: {
      en: 'Paddle',
      zh: '桨',
      fr: 'Pagaie',
      de: 'Paddel',
      tr: 'Kürek',
      ro: 'Vâslă',
      th: 'ไม้พาย',
      es: 'Remo',
      pt: 'Remo',
      it: 'Pagaia',
      ru: 'Весло',
      pl: 'Wiosło',
      ar: 'Paddle',
      nl: 'Peddel',
      tl: 'Sagwan',
      hu: 'Lapát',
      bg: 'Гребло',
      id: 'Dayung',
      ms: 'Kayuh',
    },
    description: {
      en: 'Manual propulsion tool used with inflatable SUP boards. Available in adjustable aluminum and lightweight carbon fiber.',
    },
    features: {
      en: [
        'Adjustable shaft length',
        'Aluminum or carbon fiber shaft',
        'Nylon or carbon blade',
        'Ergonomic handle grip',
      ],
    },
    useCases: {
      en: ['SUP paddling', 'Touring and distance paddling', 'Beginner-friendly adjustable length'],
    },
    faq: {
      en: [
        {
          q: 'What length paddle do I need?',
          a: 'For SUP, a paddle should be 8-10 inches taller than your height for efficient paddling.',
        },
        {
          q: 'Are adjustable paddles good for beginners?',
          a: 'Yes. Adjustable paddles allow beginners to experiment with different lengths to find their optimal fit before investing in a fixed-length paddle.',
        },
      ],
    },
    related: ['inflatable-sup', 'carbon-fiber', 'touring'],
    slug: {
      en: 'paddle',
      zh: 'paddle',
      ar: 'paddle',
      ru: 'paddle',
      fr: 'paddle',
      de: 'paddle',
      es: 'paddle',
      pt: 'paddle',
      it: 'paddle',
      pl: 'paddle',
    },
  },

  {
    id: 'carbon-paddle',
    type: 'component',
    name: {
      en: 'Carbon Fiber Paddle',
      zh: '碳纤维桨',
      fr: 'Pagaie en Fibre de Carbone',
      de: 'Kohlefaser-Paddel',
      tr: 'Karbon Fiber Kürek',
      ro: 'Vâslă din Fibră de Carbon',
      th: 'ไม้พายคาร์บอนไฟเบอร์',
      es: 'Remo de Fibra de Carbono',
      pt: 'Remo de Fibra de Carbono',
      it: 'Pagaia in Fibra di Carbonio',
      ru: 'Весло из углеродного волокна',
      pl: 'Wiosło z Włókna Węglowego',
      ar: 'Carbon Fiber Paddle',
      nl: 'Koolstofvezelpeddel',
      tl: 'Sagwan na carbon fiber',
      hu: 'Karbonszálas lapát',
      bg: 'Въглеродно гребло',
      id: 'Dayung Serat Karbon',
      ms: 'Kayuh Serat Karbon',
    },
    description: {
      en: 'Lightweight, high-performance paddle made from carbon fiber composite for reduced fatigue during long sessions.',
    },
    features: {
      en: [
        'Ultra-lightweight carbon shaft',
        'Stiff blade for maximum power transfer',
        'Reduced arm fatigue',
        'Premium finish',
      ],
    },
    useCases: {
      en: ['Touring and distance paddling', 'Racing performance', 'Professional use'],
    },
    faq: {
      en: [
        {
          q: 'How much lighter is a carbon paddle than aluminum?',
          a: 'Carbon fiber paddles typically weigh 12-18 oz compared to 25-35 oz for aluminum, reducing fatigue significantly during long paddling sessions.',
        },
        {
          q: 'Is a carbon paddle worth the investment?',
          a: 'For regular paddlers and touring enthusiasts, the weight reduction and improved performance of a carbon paddle justify the higher cost.',
        },
      ],
    },
    related: ['paddle', 'touring', 'carbon-fiber'],
    slug: {
      en: 'carbon-paddle',
      zh: 'carbon-paddle',
      ar: 'carbon-paddle',
      ru: 'carbon-paddle',
      fr: 'carbon-fiber-paddle',
      de: 'carbon-fiber-paddle',
      es: 'carbon-fiber-paddle',
      pt: 'carbon-fiber-paddle',
      it: 'carbon-fiber-paddle',
      pl: 'carbon-fiber-paddle',
    },
  },

  {
    id: 'drop-stitch-core',
    type: 'technology',
    name: {
      en: 'Drop-Stitch Core',
      zh: '拉丝气垫技术',
      fr: 'Noyau Drop-Stitch',
      de: 'Drop-Stitch-Kern',
      tr: 'Drop-Stitch Çekirdek',
      ro: 'Nucleu Drop-Stitch',
      th: 'แกน Drop-Stitch',
      es: 'Núcleo Drop-Stitch',
      pt: 'Núcleo Drop-Stitch',
      it: 'Nucleo Drop-Stitch',
      ru: 'Сердцевина Drop-Stitch',
      pl: 'Rdzeń Drop-Stitch',
      ar: 'Drop-Stitch Core',
      nl: 'Drop-stitch-kern',
      tl: 'Drop-stitch na core',
      hu: 'Drop-stitch mag',
      bg: 'Drop-stitch сърцевина',
      id: 'Inti Drop-Stitch',
      ms: 'Teras Drop-Stitch',
    },
    description: {
      en: 'Connects thousands of polyester threads between top and bottom layers to achieve rigid platform shape under high inflation pressure.',
    },
    features: {
      en: [
        'Thousands of polyester threads',
        'Fused or woven construction',
        'Withstands 12-15 PSI pressure',
        'Creates rigid flat platform',
      ],
    },
    useCases: {
      en: ['Stand-up paddle boarding', 'Touring and distance paddling', 'SUP yoga and fitness', 'Fishing platforms'],
    },
    faq: {
      en: [
        {
          q: 'How does drop-stitch construction work?',
          a: 'Thousands of polyester threads connect the top and bottom layers, allowing high-pressure inflation that creates a rigid, stable platform.',
        },
        {
          q: 'What PSI should I use for drop-stitch boards?',
          a: 'Most drop-stitch inflatable boards perform best at 12-15 PSI for optimal rigidity.',
        },
      ],
    },
    related: ['inflatable-sup', 'military-grade-pvc', 'high-pressure'],
    slug: {
      en: 'drop-stitch-core',
      zh: 'drop-stitch-core',
      ar: 'drop-stitch-core',
      ru: 'drop-stitch-core',
      fr: 'drop-stitch-core',
      de: 'drop-stitch-core',
      es: 'drop-stitch-core',
      pt: 'drop-stitch-core',
      it: 'drop-stitch-core',
      pl: 'drop-stitch-core',
    },
  },

  {
    id: 'dual-action-pump',
    type: 'component',
    name: {
      en: 'Dual-Action Pump',
      zh: '双向气泵',
      fr: 'Pompe Double Action',
      de: 'Doppelwirkende Pumpe',
      tr: 'Çift Yönlü Pompa',
      ro: 'Pompă cu Acțiune Dublă',
      th: 'ปั๊มสองจังหวะ',
      es: 'Bomba de Doble Acción',
      pt: 'Bomba de Dupla Ação',
      it: 'Pompa a Doppia Azione',
      ru: 'Насос двойного действия',
      pl: 'Pompa Dwustronnego Działania',
      ar: 'Dual-Action Pump',
      nl: 'Dubbelwerkende pomp',
      tl: 'Bomba na dual-action',
      hu: 'Kétirányú pumpa',
      bg: 'Помпа с двойно действие',
      id: 'Pompa Aksi Ganda',
      ms: 'Pam Tindakan Berkembar',
    },
    description: {
      en: 'Hand pump that inflates on both up and down strokes for faster, more efficient inflation of inflatable SUP boards.',
    },
    features: {
      en: [
        'Pumps on both up and down strokes',
        'Pressure gauge included',
        'Hose and valve adapters',
        'Ergonomic handle',
      ],
    },
    useCases: {
      en: ['SUP board inflation', 'Pressure-checked top-ups', 'Compact travel inflation'],
    },
    faq: {
      en: [
        {
          q: 'How long does it take to inflate a SUP board with a dual-action pump?',
          a: 'Most dual-action pumps can inflate a standard SUP board from flat to 15 PSI in 3-5 minutes, roughly half the time of a single-action pump.',
        },
        {
          q: 'Do I need a pump with a pressure gauge?',
          a: 'Yes. A pressure gauge is essential for achieving the optimal 12-15 PSI range without over-inflating or under-inflating your board.',
        },
      ],
    },
    related: ['inflatable-sup', 'high-pressure', 'accessory'],
    slug: {
      en: 'dual-action-pump',
      zh: 'dual-action-pump',
      ar: 'dual-action-pump',
      ru: 'dual-action-pump',
      fr: 'dual-action-pump',
      de: 'dual-action-pump',
      es: 'dual-action-pump',
      pt: 'dual-action-pump',
      it: 'dual-action-pump',
      pl: 'dual-action-pump',
    },
  },

  {
    id: 'high-pressure',
    type: 'concept',
    name: {
      en: 'High Pressure (12-15 PSI)',
      zh: '高压（12-15 PSI）',
      fr: 'Haute Pression (12-15 PSI)',
      de: 'Hochdruck (12-15 PSI)',
      tr: 'Yüksek Basınç (12-15 PSI)',
      ro: 'Presiune Înaltă (12-15 PSI)',
      th: 'แรงดันสูง (12-15 PSI)',
      es: 'Alta Presión (12-15 PSI)',
      pt: 'Alta Pressão (12-15 PSI)',
      it: 'Alta Pressione (12-15 PSI)',
      ru: 'Высокое давление (12-15 PSI)',
      pl: 'Wysokie Ciśnienie (12-15 PSI)',
      ar: 'High Pressure (12-15 PSI)',
      nl: 'Hoge druk (12-15 PSI)',
      tl: 'Mataas na presyon (12-15 PSI)',
      hu: 'Magas nyomás (12-15 PSI)',
      bg: 'Високо налягане (12-15 PSI)',
      id: 'Tekanan Tinggi (12-15 PSI)',
      ms: 'Tekanan Tinggi (12-15 PSI)',
    },
    description: {
      en: 'Optimal inflation range that maximizes board rigidity while remaining within safe operating limits for drop-stitch construction.',
    },
    features: {
      en: ['Optimal 12-15 PSI range', 'Maximizes board rigidity', 'Drop-stitch compatible', 'Requires compatible pump'],
    },
    useCases: {
      en: ['SUP board inflation', 'Drop-stitch core performance', 'Rigid platform for stand-up paddling'],
    },
    faq: {
      en: [
        {
          q: 'Why is 12-15 PSI the ideal range?',
          a: 'Below 12 PSI the board flexes excessively; above 15 PSI risks damaging the drop-stitch threads. 12-15 PSI provides the best balance of rigidity and safety.',
        },
        {
          q: 'Can I use any pump for high-pressure inflation?',
          a: 'A dual-action pump with a pressure gauge is recommended. Most standard SUP pumps are rated for up to 15 PSI.',
        },
      ],
    },
    related: ['drop-stitch-core', 'dual-action-pump', 'inflatable-sup'],
    slug: {
      en: 'high-pressure',
      zh: 'high-pressure',
      ar: 'high-pressure',
      ru: 'high-pressure',
      fr: 'high-pressure-12-15-psi',
      de: 'high-pressure-12-15-psi',
      es: 'high-pressure-12-15-psi',
      pt: 'high-pressure-12-15-psi',
      it: 'high-pressure-12-15-psi',
      pl: 'high-pressure-12-15-psi',
    },
  },

  {
    id: 'military-grade-pvc',
    type: 'material',
    name: {
      en: 'Marine-Grade PVC',
      zh: '船用级PVC',
      fr: 'PVC de Qualité Marine',
      de: 'PVC in Marinequalität',
      tr: 'Deniz Sınıfı PVC',
      ro: 'PVC de Clasă Marină',
      th: 'PVC เกรดทะเล',
      es: 'PVC Marine-Grade',
      pt: 'PVC de Grau Marinho',
      it: 'PVC di Grado Marino',
      ru: 'ПВХ морского класса',
      pl: 'PVC Klasa Morska',
      ar: 'PVC Marine-Grade',
      nl: 'Maritiem PVC',
      tl: 'Marine-grade na PVC',
      hu: 'Tengeri minőségű PVC',
      bg: 'PVC за морска употреба',
      id: 'PVC Kelas Kelautan',
      ms: 'PVC Gred Marin',
    },
    description: {
      en: 'High-density PVC fabric with UV-resistant coating used for durable inflatable SUP board construction.',
    },
    features: {
      en: ['High-density PVC fabric', 'UV resistant coating', 'Abrasion resistant surface', 'Salt water resistant'],
    },
    useCases: {
      en: [
        'Inflatable SUP board construction',
        'Rail and seam reinforcement',
        'Repair patch material',
        'Heavy-duty recreational use',
      ],
    },
    faq: {
      en: [
        {
          q: 'How durable is marine-grade PVC?',
          a: 'Marine-grade PVC is highly resistant to punctures, abrasion, and UV damage, making it suitable for prolonged marine use.',
        },
        {
          q: 'How does marine-grade PVC compare to standard PVC?',
          a: 'Marine-grade PVC uses higher-density fabric and additional UV stabilizers, offering 2-3x better durability than standard PVC.',
        },
      ],
    },
    related: ['drop-stitch-core', 'inflatable-sup', 'eva-deck'],
    slug: {
      en: 'military-grade-pvc',
      zh: 'military-grade-pvc',
      ar: 'military-grade-pvc',
      ru: 'military-grade-pvc',
      fr: 'military-grade-pvc',
      de: 'military-grade-pvc',
      es: 'military-grade-pvc',
      pt: 'military-grade-pvc',
      it: 'military-grade-pvc',
      pl: 'military-grade-pvc',
    },
  },

  {
    id: 'eva-deck',
    type: 'material',
    name: {
      en: 'EVA Foam Deck Pad',
      zh: 'EVA甲板垫',
      fr: 'Tapis de Pont en Mousse EVA',
      de: 'EVA-Schaumdeckbelag',
      tr: 'EVA Köpük Güverte Pedi',
      ro: 'Pardoseală din Spumă EVA',
      th: 'แผ่นดาดฟ้าโฟม EVA',
      es: 'Cubierta de Espuma EVA',
      pt: 'Revestimento de Espuma EVA',
      it: 'Tappetino in Schiuma EVA',
      ru: 'Накладка из пены EVA',
      pl: 'Pokład z Pianki EVA',
      ar: 'EVA Foam Deck Pad',
      nl: 'EVA-schuimdekpad',
      tl: 'EVA foam na pantakip ng palapag',
      hu: 'EVA hab fedélzeti lap',
      bg: 'EVA подложка за палуба от пяна',
      id: 'Bantalan Dek Busa EVA',
      ms: 'Pad Dek Busa EVA',
    },
    description: {
      en: 'Non-slip, shock-absorbing foam deck covering that provides traction and comfort for stand-up paddle boards.',
    },
    features: {
      en: ['Non-slip textured surface', 'Shock absorbing foam', 'UV stable', 'Full-length deck coverage'],
    },
    useCases: {
      en: [
        'SUP board traction pad',
        'SUP yoga and fitness grip',
        'Padded kneeling area',
        'Dock and swim platform surface',
      ],
    },
    faq: {
      en: [
        {
          q: 'Is EVA foam deck pad slippery when wet?',
          a: 'No. EVA foam is designed to provide excellent traction even when wet, with a textured surface that grips bare feet and water shoes.',
        },
        {
          q: 'How do I clean EVA foam deck pads?',
          a: 'Mild soap and water with a soft brush is sufficient. Avoid harsh chemicals that can degrade the foam over time.',
        },
      ],
    },
    related: ['inflatable-sup', 'accessory', 'drop-stitch-core'],
    slug: {
      en: 'eva-deck',
      zh: 'eva-deck',
      ar: 'eva-deck',
      ru: 'eva-deck',
      fr: 'eva-foam-deck-pad',
      de: 'eva-foam-deck-pad',
      es: 'eva-foam-deck-pad',
      pt: 'eva-foam-deck-pad',
      it: 'eva-foam-deck-pad',
      pl: 'eva-foam-deck-pad',
    },
  },

  {
    id: 'carbon-fiber',
    type: 'material',
    name: {
      en: 'Carbon Fiber',
      zh: '碳纤维',
      fr: 'Fibre de Carbone',
      de: 'Kohlefaser',
      tr: 'Karbon Fiber',
      ro: 'Fibră de Carbon',
      th: 'คาร์บอนไฟเบอร์',
      es: 'Fibra de Carbono',
      pt: 'Fibra de Carbono',
      it: 'Fibra di Carbonio',
      ru: 'Углеродное волокно',
      pl: 'Włókno Węglowe',
      ar: 'Carbon Fiber',
      nl: 'Koolstofvezel',
      tl: 'Carbon fiber',
      hu: 'Karbon szál',
      bg: 'Въглеродно влакно',
      id: 'Serat Karbon',
      ms: 'Serat Karbon',
    },
    description: {
      en: 'Lightweight, high-strength composite material used in paddles and performance paddle boarding equipment.',
    },
    features: {
      en: ['High strength-to-weight ratio', 'Stiff and responsive', 'Fatigue resistant', 'Premium appearance'],
    },
    useCases: {
      en: [
        'Paddle shaft construction',
        'Paddle blade reinforcement',
        'High-performance equipment',
        'Lightweight structural components',
      ],
    },
    faq: {
      en: [
        {
          q: 'Is carbon fiber worth the extra cost?',
          a: 'For serious paddlers, carbon fiber paddles reduce fatigue significantly during long sessions. The weight savings of 30-40% over aluminum justify the premium.',
        },
        {
          q: 'Is carbon fiber durable?',
          a: 'Carbon fiber composites are extremely strong for their weight, but can be brittle under sharp impact. Proper care and storage will ensure longevity.',
        },
      ],
    },
    related: ['paddle', 'carbon-paddle', 'touring'],
    slug: {
      en: 'carbon-fiber',
      zh: 'carbon-fiber',
      ar: 'carbon-fiber',
      ru: 'carbon-fiber',
      fr: 'carbon-fiber',
      de: 'carbon-fiber',
      es: 'carbon-fiber',
      pt: 'carbon-fiber',
      it: 'carbon-fiber',
      pl: 'carbon-fiber',
    },
  },

  {
    id: 'buoyancy-foam',
    type: 'material',
    name: {
      en: 'Marine Buoyancy Foam',
      zh: '船用浮力泡沫',
      fr: 'Mousse de Flottabilité Marine',
      de: 'Meerestauglicher Auftriebsschaum',
      tr: 'Deniz Yüzdürme Köpüğü',
      ro: 'Spumă de Flotabilitate Marină',
      th: 'โฟมลอยตัวเกรดทะเล',
      es: 'Espuma de Flotabilidad Marina',
      pt: 'Espuma de Flutuabilidade Marinha',
      it: 'Schiuma di Galleggiamento Marina',
      ru: 'Морская плавучая пена',
      pl: 'Pianka Wypornościowa Morska',
      ar: 'Marine Buoyancy Foam',
      nl: 'Maritiem drijfschuim',
      tl: 'Foam na panlutang sa dagat',
      hu: 'Tengeri úszóhab',
      bg: 'Морска плавателна пяна',
      id: 'Busa Pelampung Kelautan',
      ms: 'Busa Keapungan Marin',
    },
    description: {
      en: 'Closed-cell foam that provides permanent flotation for life vests and safety equipment in fresh and salt water.',
    },
    features: {
      en: [
        'Closed-cell construction',
        'Fresh and salt water rated',
        'Lightweight and durable',
        'Does not absorb water',
      ],
    },
    useCases: {
      en: ['Life vest flotation', 'Safety equipment buoyancy', 'Marine cushioning', 'Emergency flotation devices'],
    },
    faq: {
      en: [
        {
          q: 'What is the difference between closed-cell and open-cell foam?',
          a: 'Closed-cell foam does not absorb water, making it ideal for flotation devices. Open-cell foam absorbs water and is used for cushioning.',
        },
        {
          q: 'How much buoyancy does marine-grade foam provide?',
          a: 'Marine-grade closed-cell foam provides approximately 60 kg of buoyancy per cubic meter, sufficient to keep an adult afloat in any water conditions.',
        },
      ],
    },
    related: ['safety-equipment'],
    slug: {
      en: 'buoyancy-foam',
      zh: 'buoyancy-foam',
      ar: 'buoyancy-foam',
      ru: 'buoyancy-foam',
      fr: 'marine-buoyancy-foam',
      de: 'marine-buoyancy-foam',
      es: 'marine-buoyancy-foam',
      pt: 'marine-buoyancy-foam',
      it: 'marine-buoyancy-foam',
      pl: 'marine-buoyancy-foam',
    },
  },

  {
    id: 'touring',
    type: 'use-case',
    name: {
      en: 'Touring & Distance Paddling',
      zh: '旅行与长途划桨',
      fr: 'Pagination de Distance et Tourisme',
      de: 'Touren- & Distanzpaddeln',
      tr: 'Tur ve Uzun Mesafe Kürek',
      ro: 'Turism și Vâslit pe Distanță',
      th: 'พายทัวร์ริ่งและระยะไกล',
      es: 'Remo de Turismo y Larga Distancia',
      pt: 'Remo de Turismo e Longa Distância',
      it: 'Pagaia da Turismo e Lunga Distanza',
      ru: 'Туристическая гребля и гребля на длинные дистанции',
      pl: 'Wiosłowanie Turystyczne i Długodystansowe',
      ar: 'الجولات والتجديف لمسافات طويلة',
      nl: 'Toeren en afstandspeddelen',
      tl: 'Pagtourtour at mahabang pagsasagwan',
      hu: 'Túra- és távolsági evezés',
      bg: 'Туризъм и дальночно гребане',
      id: 'Touring dan Dayung Jarak Jauh',
      ms: 'Touring dan Kayuh Jarak Jauh',
    },
    description: {
      it: 'Uscite prolungate che coprono distanze considerevoli su laghi, fiumi e acque costiere.',
      fr: 'Sorties prolongées couvrant de longues distances sur lacs, rivières et eaux côtières.',
      es: 'Trazados prolongados que cubren distancias considerables en lagos, ríos y aguas costeras.',
      de: 'Ausgedehnte Paddeltouren über weite Strecken auf Seen, Flüssen und Küstengewässern.',
      en: 'Extended paddling trips covering significant distance on lakes, rivers, and coastal waters.',
    },
    features: {
      it: [
        'Tavola progettata per le lunghe distanze',
        'Carena efficiente',
        'Pagaia leggera',
        "Spazio per l'attrezzatura",
      ],
      fr: [
        'Planche conçue pour les longues distances',
        'Coque efficace',
        'Pagaie légère',
        "Rangement pour l'équipement",
      ],
      es: ['Tabla de diseño de larga distancia', 'Casco eficiente', 'Pala ligera', 'Almacenamiento para equipo'],
      de: ['Rumpf für lange Distanzen', 'Effiziente Rumpfform', 'Leichtes Paddel', 'Stauraum für Ausrüstung'],
      en: ['Long-distance board design', 'Efficient hull shape', 'Lightweight paddle', 'Storage for gear'],
    },
    useCases: {
      it: ['Spedizioni lacustri di più giorni', 'Esplorazione costiera', 'Discese fluviali', 'Allenamento fitness'],
      fr: [
        'Expéditions lacustres de plusieurs jours',
        'Exploration côtière',
        'Descentes de rivières',
        'Entraînement fitness',
      ],
      es: ['Expediciones de varios días en lago', 'Exploración costera', 'Rutas fluviales', 'Entrenamiento físico'],
      de: ['Mehrtägige See-Expeditionen', 'Küstenerkundung', 'Flussfahrten', 'Fitnesstraining'],
      en: ['Multi-day lake expeditions', 'Coastal exploration', 'River journeys', 'Fitness training'],
    },
    faq: {
      it: [
        {
          q: 'Quale tavola è migliore per il touring?',
          a: 'Le tavole più lunghe e strette con carene efficienti sono ideali per il touring. I SUP gonfiabili con costruzione drop-stitch offrono la rigidità necessaria per pagaiare efficacemente su lunghe distanze.',
        },
        {
          q: 'Quanto si può pagaiare in un giorno?',
          a: 'Con una buona forma fisica e condizioni favorevoli, i pagaiatori esperti percorrono 15-25 miglia (24-40 km) in una giornata di touring.',
        },
      ],
      fr: [
        {
          q: 'Quelle planche convient le mieux au touring ?',
          a: 'Les planches plus longues et plus étroites à coque efficace sont idéales. Les SUP gonflables en construction drop-stitch offrent la rigidité nécessaire pour pagayer efficacement sur de longues distances.',
        },
        {
          q: 'Quelle distance peut-on pagayer en une journée ?',
          a: 'Avec une bonne condition physique et des conditions favorables, les pagayeurs expérimentés couvrent 15-25 miles (24-40 km) par jour de touring.',
        },
      ],
      es: [
        {
          q: '¿Qué tabla es mejor para el turismo?',
          a: 'Las tablas más largas y estrechas con cascos eficientes son ideales para el turismo. Las SUP hinchables con construcción drop-stitch ofrecen la rigidez necesaria para remar largas distancias con eficiencia.',
        },
        {
          q: '¿Cuánto se puede remar en un día?',
          a: 'Con buena forma física y condiciones adecuadas, los palistas experimentados pueden cubrir 15-25 millas (24-40 km) en un día de turismo.',
        },
      ],
      de: [
        {
          q: 'Welches Board eignet sich am besten für Touren?',
          a: 'Längere, schmalere Boards mit effizienter Rumpfform sind ideal für Touren. Aufblasbare SUPs mit Drop-Stitch-Konstruktion bieten die nötige Steifigkeit für effizientes Langstrecken-Paddeln.',
        },
        {
          q: 'Wie weit kann man an einem Tag paddeln?',
          a: 'Bei guter Kondition und Bedingungen schaffen erfahrene Paddler 15-25 Meilen (24-40 km) an einem Tourentag.',
        },
      ],
      en: [
        {
          q: 'What board is best for touring?',
          a: 'Longer, narrower boards with efficient hull shapes are ideal for touring. Inflatable SUPs with drop-stitch construction provide the rigidity needed for efficient long-distance paddling.',
        },
        {
          q: 'How far can you paddle in a day?',
          a: 'With proper fitness and conditions, experienced paddlers can cover 15-25 miles (24-40 km) in a day of touring.',
        },
      ],
    },
    related: ['inflatable-sup', 'paddle', 'carbon-paddle', 'drop-stitch-core'],
    slug: {
      en: 'touring',
      zh: 'touring',
      ar: 'touring',
      ru: 'touring',
      fr: 'touring-distance-paddling',
      de: 'touring-distance-paddling',
      es: 'touring-distance-paddling',
      pt: 'touring-distance-paddling',
      it: 'touring-distance-paddling',
      pl: 'touring-distance-paddling',
    },
  },

  {
    id: 'beginner',
    type: 'use-case',
    name: {
      en: 'Beginner',
      zh: '初学者',
      fr: 'Débutant',
      de: 'Anfänger',
      tr: 'Başlangıç',
      ro: 'Începător',
      th: 'ผู้เริ่มต้น',
      es: 'Principiante',
      pt: 'Iniciante',
      it: 'Principiante',
      ru: 'Новичок',
      pl: 'Początkujący',
      ar: 'المبتدئون',
      nl: 'Beginners',
      tl: 'Baguhan',
      hu: 'Kezdő',
      bg: 'Начинаещ',
      id: 'Pemula',
      ms: 'Pemula',
    },
    description: {
      it: 'First-time paddlers learning the basics of inflatable SUP boards, safety, and water navigation.',
      fr: 'First-time paddlers learning the basics of inflatable SUP boards, safety, and water navigation.',
      es: 'First-time paddlers learning the basics of inflatable SUP boards, safety, and water navigation.',
      de: 'First-time paddlers learning the basics of inflatable SUP boards, safety, and water navigation.',
      en: 'First-time paddlers learning the basics of inflatable SUP boards, safety, and water navigation.',
    },
    features: {
      it: [
        'Piattaforma stabile',
        'Gonfiaggio e montaggio facili',
        'Manovrabilità permissiva',
        'Kit all-in-one disponibile',
      ],
      fr: [
        'Plateforme stable',
        'Gonflage et installation faciles',
        'Comportement tolérant',
        'Kit tout-en-un disponible',
      ],
      es: ['Plataforma estable', 'Inflado y montaje fáciles', 'Manejo indulgente', 'Kit todo en uno disponible'],
      de: [
        'Stabile Plattform',
        'Einfaches Aufpumpen und Aufbau',
        'Verzeihendes Fahrverhalten',
        'Komplettset erhältlich',
      ],
      en: ['Stable platform', 'Easy inflate and setup', 'Forgiving handling', 'All-in-one kit available'],
    },
    useCases: {
      it: [
        'Prima pagaiata',
        'Imparare le pagaiate di base',
        'Capire la sicurezza in acqua',
        'Acquisire sicurezza in acqua',
      ],
      fr: [
        'Première sortie en pagayage',
        'Apprentissage des coups de pagaie de base',
        "Comprendre la sécurité sur l'eau",
        "Gagner en confiance sur l'eau",
      ],
      es: [
        'Primera vez remando',
        'Aprender las paladas básicas',
        'Entender la seguridad en el agua',
        'Ganar confianza en el agua',
      ],
      de: [
        'Zum ersten Mal paddeln',
        'Grundlegende Paddelschläge lernen',
        'Wassersicherheit verstehen',
        'Selbstvertrauen auf dem Wasser aufbauen',
      ],
      en: [
        'First time paddling',
        'Learning basic strokes',
        'Understanding water safety',
        'Building confidence on water',
      ],
    },
    faq: {
      it: [
        {
          q: 'Un SUP gonfiabile è adatto ai principianti?',
          a: 'Sì. I SUP gonfiabili sono stabili, indulgenti e più facili da trasportare e riporre rispetto alle tavole rigide, il che li rende eccellenti per i principianti.',
        },
        {
          q: 'Quanto tempo ci vuole per imparare lo stand-up paddleboarding?',
          a: "La maggior parte dei principianti riesce a stare in piedi e a pagaiare in acque calme già alla prima sessione. L'equilibrio migliora rapidamente con la pratica.",
        },
      ],
      fr: [
        {
          q: 'Un SUP gonflable est-il adapté aux débutants ?',
          a: 'Oui. Les SUP gonflables sont stables, tolérants et plus faciles à transporter et à ranger que les planches rigides, ce qui en fait un excellent choix pour les débutants.',
        },
        {
          q: 'Combien de temps faut-il pour apprendre le stand-up paddle ?',
          a: "La plupart des débutants arrivent à se lever et à pagayer sur eau calme dès leur première séance. L'équilibre s'améliore rapidement avec la pratique.",
        },
      ],
      es: [
        {
          q: '¿Es una SUP hinchable buena para principiantes?',
          a: 'Sí. Las SUP hinchables son estables, indulgentes y más fáciles de transportar y almacenar que las tablas rígidas, lo que las hace excelentes para principiantes.',
        },
        {
          q: '¿Cuánto tiempo se tarda en aprender paddle surf?',
          a: 'La mayoría de los principiantes pueden ponerse de pie y remar en aguas tranquilas en su primera sesión. El equilibrio mejora rápidamente con la práctica.',
        },
      ],
      de: [
        {
          q: 'Ist ein aufblasbares SUP für Anfänger geeignet?',
          a: 'Ja. Aufblasbare SUPs sind stabil, verzeihend und einfacher zu transportieren und zu lagern als feste Boards – ideal für Anfänger.',
        },
        {
          q: 'Wie lange dauert es, Stehpaddeln zu lernen?',
          a: 'Die meisten Anfänger können bereits in ihrer ersten Übungseinheit auf ruhigem Wasser stehen und paddeln. Mit Übung verbessert sich das Gleichgewicht schnell.',
        },
      ],
      en: [
        {
          q: 'Is an inflatable SUP good for beginners?',
          a: 'Yes. Inflatable SUPs are stable, forgiving, and easier to transport and store than hard boards, making them excellent for beginners.',
        },
        {
          q: 'How long does it take to learn stand-up paddleboarding?',
          a: 'Most beginners can stand up and paddle on flat water within their first session. Balance improves quickly with practice.',
        },
      ],
    },
    related: ['inflatable-sup', 'fishing', 'family-recreation', 'touring'],
    slug: {
      en: 'beginner',
      zh: 'beginner',
      ar: 'beginner',
      ru: 'beginner',
      fr: 'beginner',
      de: 'beginner',
      es: 'beginner',
      pt: 'beginner',
      it: 'beginner',
      pl: 'beginner',
    },
  },

  {
    id: 'fishing',
    type: 'use-case',
    name: {
      en: 'SUP Fishing',
      zh: 'SUP 钓鱼',
      fr: 'Pêche en SUP',
      de: 'SUP-Angeln',
      tr: 'SUP Balıkçılığı',
      ro: 'Pescuit pe SUP',
      th: 'ตกปลาด้วย SUP',
      es: 'Pesca en SUP',
      pt: 'Pesca em SUP',
      it: 'Pesca in SUP',
      ru: 'Рыбалка на SUP',
      pl: 'Wędkowanie na SUP',
      ar: 'صيد الأسماك بالـ SUP',
      nl: 'SUP-vissen',
      tl: 'Pangingisda gamit ang SUP',
      hu: 'SUP-horgászat',
      bg: 'Риболов със SUP',
      id: 'Memancing dengan SUP',
      ms: 'Memancing dengan SUP',
    },
    description: {
      it: 'Using a stable inflatable SUP as a portable casting platform for lake, river, and inshore fishing.',
      fr: 'Using a stable inflatable SUP as a portable casting platform for lake, river, and inshore fishing.',
      es: 'Using a stable inflatable SUP as a portable casting platform for lake, river, and inshore fishing.',
      de: 'Using a stable inflatable SUP as a portable casting platform for lake, river, and inshore fishing.',
      en: 'Using a stable inflatable SUP as a portable casting platform for lake, river, and inshore fishing.',
    },
    features: {
      it: [
        'Piattaforma di pesca stabile',
        'Avvicinamento silenzioso',
        'Accesso in acque basse',
        'Trolling a mani libere',
      ],
      fr: [
        'Plateforme de pêche stable',
        'Approche silencieuse',
        'Accès aux eaux peu profondes',
        'Trolling mains libres',
      ],
      es: [
        'Plataforma de pesca estable',
        'Aproximación silenciosa',
        'Acceso a aguas poco profundas',
        'Curricán sin usar las manos',
      ],
      de: ['Stabile Angelplattform', 'Leise Annäherung', 'Zugang zu flachen Gewässern', 'Freihändiges Schleppangeln'],
      en: ['Stable fishing platform', 'Quiet approach', 'Shallow water access', 'Hands-free trolling'],
    },
    useCases: {
      it: ['Pesca in lago', 'Pesca costiera', 'Pesca in fiume', 'Pesca a mosca da SUP'],
      fr: ['Pêche en lac', 'Pêche côtière', 'Pêche en rivière', 'Pêche à la mouche depuis un SUP'],
      es: ['Pesca en lago', 'Pesca costera', 'Pesca en río', 'Pesca con mosca desde SUP'],
      de: ['Angeln auf Seen', 'Küstenangeln', 'Flussangeln', 'Fliegenfischen vom SUP'],
      en: ['Lake fishing', 'Coastal fishing', 'River fishing', 'Fly fishing from SUP'],
    },
    faq: {
      it: [
        {
          q: 'Si può pescare da un SUP gonfiabile?',
          a: 'Sì. Molti pescatori pescano da SUP gonfiabili, usando il ponte stabile come piattaforma di lancio nelle acque basse dove le barche a motore non possono andare.',
        },
        {
          q: 'What makes a good SUP fishing board?',
          a: 'A wide, stable inflatable SUP with high weight capacity works well. Features like rod holders, anchor points, and gear mounts enhance the experience.',
        },
      ],
      fr: [
        {
          q: 'Peut-on pêcher depuis un SUP gonflable ?',
          a: 'Oui. De nombreux pêcheurs pêchent depuis des SUP gonflables, la plateforme stable servant de poste de lancer dans les eaux peu profondes inaccessibles aux bateaux à moteur.',
        },
        {
          q: 'What makes a good SUP fishing board?',
          a: 'A wide, stable inflatable SUP with high weight capacity works well. Features like rod holders, anchor points, and gear mounts enhance the experience.',
        },
      ],
      es: [
        {
          q: '¿Se puede pescar desde una SUP hinchable?',
          a: 'Sí. Muchos pescadores pescan desde SUP hinchables, usando la cubierta estable como plataforma de lanzamiento en aguas poco profundas adonde los botes a motor no pueden llegar.',
        },
        {
          q: 'What makes a good SUP fishing board?',
          a: 'A wide, stable inflatable SUP with high weight capacity works well. Features like rod holders, anchor points, and gear mounts enhance the experience.',
        },
      ],
      de: [
        {
          q: 'Kann man von einem aufblasbaren SUP angeln?',
          a: 'Ja. Viele Angler fischen von aufblasbaren SUPs und nutzen das stabile Deck als Wurfplattform in flachen Gewässern, in die größere Wasserfahrzeuge nicht gelangen.',
        },
        {
          q: 'What makes a good SUP fishing board?',
          a: 'A wide, stable inflatable SUP with high weight capacity works well. Features like rod holders, anchor points, and gear mounts enhance the experience.',
        },
      ],
      en: [
        {
          q: 'Can you fish from an inflatable SUP?',
          a: 'Yes. Many anglers fish from inflatable SUPs, using the stable deck as a casting platform in shallow waters where larger vessels cannot go.',
        },
        {
          q: 'What makes a good SUP fishing board?',
          a: 'A wide, stable inflatable SUP with high weight capacity works well. Features like rod holders, anchor points, and gear mounts enhance the experience.',
        },
      ],
    },
    related: ['inflatable-sup', 'beginner', 'family-recreation', 'river-touring'],
    slug: {
      en: 'fishing',
      zh: 'fishing',
      ar: 'fishing',
      ru: 'fishing',
      fr: 'fishing-from-inflatable-craft',
      de: 'fishing-from-inflatable-craft',
      es: 'fishing-from-inflatable-craft',
      pt: 'fishing-from-inflatable-craft',
      it: 'fishing-from-inflatable-craft',
      pl: 'fishing-from-inflatable-craft',
    },
  },

  {
    id: 'family-recreation',
    type: 'use-case',
    name: {
      en: 'Family Recreation',
      zh: '家庭休闲',
      fr: 'Loisirs Familiaux',
      de: 'Familienfreizeit',
      tr: 'Aile Eğlencesi',
      ro: 'Recreere Familială',
      th: 'สันทนาการครอบครัว',
      es: 'Recreación Familiar',
      pt: 'Recreação em Família',
      it: 'Ricreazione Familiare',
      ru: 'Семейный отдых',
      pl: 'Rodzinna Rekreacja',
      ar: 'الترفيه العائلي',
      nl: 'Familieplezier',
      tl: 'Pampamilyang libangan',
      hu: 'Családi kikapcsolódás',
      bg: 'Семеен отдих',
      id: 'Rekreasi Keluarga',
      ms: 'Rekreasi Keluarga',
    },
    description: {
      it: 'Inflatable SUP boards used for casual family outings on lakes, gentle rivers, and protected coastal waters.',
      fr: 'Inflatable SUP boards used for casual family outings on lakes, gentle rivers, and protected coastal waters.',
      es: 'Inflatable SUP boards used for casual family outings on lakes, gentle rivers, and protected coastal waters.',
      de: 'Inflatable SUP boards used for casual family outings on lakes, gentle rivers, and protected coastal waters.',
      en: 'Inflatable SUP boards used for casual family outings on lakes, gentle rivers, and protected coastal waters.',
    },
    features: {
      it: [
        'Elevata capacità di carico',
        'Design stabile per più persone',
        'Trasporto facile',
        "Camere d'aria multiple per la sicurezza",
      ],
      fr: [
        'Grande capacité de charge',
        'Design stable multi-places',
        'Transport facile',
        'Chambres à air multiples pour la sécurité',
      ],
      es: [
        'Gran capacidad de peso',
        'Diseño estable para varias personas',
        'Transporte fácil',
        'Múltiples cámaras de aire para seguridad',
      ],
      de: [
        'Große Zuladung',
        'Stabiles Mehrpersonen-Design',
        'Einfacher Transport',
        'Mehrere Luftkammern für Sicherheit',
      ],
      en: ['Large weight capacity', 'Stable multi-person design', 'Easy transport', 'Multiple air chambers for safety'],
    },
    useCases: {
      it: ['Gite in lago', 'Giornate in spiaggia', 'Discese su fiumi tranquilli', "Picnic sull'acqua"],
      fr: [
        'Sorties au lac',
        'Journées à la plage',
        'Descentes de rivières tranquilles',
        "Sorties pique-nique sur l'eau",
      ],
      es: ['Salidas al lago', 'Días de playa', 'Flotadas escénicas por el río', 'Excursiones de picnic por el agua'],
      de: ['Ausflüge auf Seen', 'Badetage', 'Gemütliche Flussfahrten', 'Picknicktouren auf dem Wasser'],
      en: ['Lake outings', 'Beach days', 'Gentle river floats', 'Picnic trips by water'],
    },
    faq: {
      it: [
        {
          q: 'Which SUP board is best for a family?',
          a: 'A wide, stable inflatable SUP with high weight capacity is ideal for family recreation. Look for models with multiple air chambers for safety and enough capacity for riders and gear.',
        },
        {
          q: 'Is an inflatable SUP safe for children?',
          a: 'Yes, with proper supervision and life vests. Inflatable SUPs are inherently stable and soft-sided, making them forgiving for families.',
        },
      ],
      fr: [
        {
          q: 'Which SUP board is best for a family?',
          a: 'A wide, stable inflatable SUP with high weight capacity is ideal for family recreation. Look for models with multiple air chambers for safety and enough capacity for riders and gear.',
        },
        {
          q: 'Is an inflatable SUP safe for children?',
          a: 'Yes, with proper supervision and life vests. Inflatable SUPs are inherently stable and soft-sided, making them forgiving for families.',
        },
      ],
      es: [
        {
          q: 'Which SUP board is best for a family?',
          a: 'A wide, stable inflatable SUP with high weight capacity is ideal for family recreation. Look for models with multiple air chambers for safety and enough capacity for riders and gear.',
        },
        {
          q: 'Is an inflatable SUP safe for children?',
          a: 'Yes, with proper supervision and life vests. Inflatable SUPs are inherently stable and soft-sided, making them forgiving for families.',
        },
      ],
      de: [
        {
          q: 'Which SUP board is best for a family?',
          a: 'A wide, stable inflatable SUP with high weight capacity is ideal for family recreation. Look for models with multiple air chambers for safety and enough capacity for riders and gear.',
        },
        {
          q: 'Is an inflatable SUP safe for children?',
          a: 'Yes, with proper supervision and life vests. Inflatable SUPs are inherently stable and soft-sided, making them forgiving for families.',
        },
      ],
      en: [
        {
          q: 'Which SUP board is best for a family?',
          a: 'A wide, stable inflatable SUP with high weight capacity is ideal for family recreation. Look for models with multiple air chambers for safety and enough capacity for riders and gear.',
        },
        {
          q: 'Is an inflatable SUP safe for children?',
          a: 'Yes, with proper supervision and life vests. Inflatable SUPs are inherently stable and soft-sided, making them forgiving for families.',
        },
      ],
    },
    related: ['inflatable-sup', 'beginner', 'fishing', 'safety-equipment'],
    slug: {
      en: 'family-recreation',
      zh: 'family-recreation',
      ar: 'family-recreation',
      ru: 'family-recreation',
      fr: 'family-recreation',
      de: 'family-recreation',
      es: 'family-recreation',
      pt: 'family-recreation',
      it: 'family-recreation',
      pl: 'family-recreation',
    },
  },

  {
    id: 'river-touring',
    type: 'use-case',
    name: {
      en: 'River Touring',
      zh: '河流旅行',
      fr: 'Pagination en Rivière',
      de: 'Flusstouren',
      tr: 'Nehir Turu',
      ro: 'Tur Fluvial',
      th: 'ทัวร์แม่น้ำ',
      es: 'Turismo Fluvial',
      pt: 'Turismo Fluvial',
      it: 'Turismo Fluviale',
      ru: 'Речной туризм',
      pl: 'Turystyka Rzeczna',
      ar: 'الجولات النهرية',
      nl: 'Riviertoeren',
      tl: 'Touring sa ilog',
      hu: 'Folyótúrázás',
      bg: 'Речен туризъм',
      id: 'Touring Sungai',
      ms: 'Touring Sungai',
    },
    description: {
      it: 'Navigare fiumi con corrente, da tratti facili di Classe I a rapide più impegnative di Classe II.',
      fr: 'Navigation sur des rivières à courant, des sections calmes de classe I aux rapides plus techniques de classe II.',
      es: 'Navegar ríos con corriente, desde tramos suaves de Clase I hasta rápidos más exigentes de Clase II.',
      de: 'Befahren von Flüssen mit Strömung, von sanften Class-I-Abschnitten bis zu anspruchsvolleren Class-II-Schnellen.',
      en: 'Navigating rivers with current, from gentle Class I stretches to more challenging Class II rapids.',
    },
    features: {
      it: ['Scafo manovrabile', 'Resistente agli urti', 'Drenaggio rapido', 'Adatto alle acque bianche'],
      fr: ['Coque manœuvrable', 'Résistant aux chocs', "Évacuation rapide de l'eau", 'Adapté aux eaux vives'],
      es: ['Casco maniobrable', 'Resistente a impactos', 'Drenaje rápido', 'Apto para aguas bravas'],
      de: ['Manövrierfähiger Rumpf', 'Schlagfest', 'Schnelle Entwässerung', 'Für Wildwasser geeignet'],
      en: ['Maneuverable hull', 'Impact resistant', 'Quick drainage', 'Whitewater capable'],
    },
    useCases: {
      it: [
        'Discese fluviali di Classe I-II',
        'Gite panoramiche sul fiume',
        'Escursioni fluviali di più giorni',
        'Gioco nelle acque bianche',
      ],
      fr: [
        'Descentes de rivières classe I-II',
        'Descentes de rivières panoramiques',
        'Descentes de rivières sur plusieurs jours',
        'Jeux en eaux vives',
      ],
      es: [
        'Descenso de ríos de clase I-II',
        'Flotadas escénicas por el río',
        'Viajes fluviales de varios días',
        'Juego en aguas bravas',
      ],
      de: [
        'Befahren von Flüssen der Klasse I-II',
        'Malerische Flussfahrten',
        'Mehrtägige Flusstouren',
        'Wildwasserspiel',
      ],
      en: ['Class I-II river running', 'Scenic river floats', 'Multi-day river trips', 'Whitewater play'],
    },
    faq: {
      it: [
        {
          q: 'Are inflatable SUPs good for river touring?',
          a: 'Yes. Inflatable SUPs are durable and maneuverable, and they handle impacts with rocks better than hard boards, making them a great choice for river touring.',
        },
        {
          q: 'What rapids can an inflatable SUP handle?',
          a: 'Quality inflatable SUPs are well suited to class I-II water, with some models capable of class III in experienced hands.',
        },
      ],
      fr: [
        {
          q: 'Are inflatable SUPs good for river touring?',
          a: 'Yes. Inflatable SUPs are durable and maneuverable, and they handle impacts with rocks better than hard boards, making them a great choice for river touring.',
        },
        {
          q: 'What rapids can an inflatable SUP handle?',
          a: 'Quality inflatable SUPs are well suited to class I-II water, with some models capable of class III in experienced hands.',
        },
      ],
      es: [
        {
          q: 'Are inflatable SUPs good for river touring?',
          a: 'Yes. Inflatable SUPs are durable and maneuverable, and they handle impacts with rocks better than hard boards, making them a great choice for river touring.',
        },
        {
          q: 'What rapids can an inflatable SUP handle?',
          a: 'Quality inflatable SUPs are well suited to class I-II water, with some models capable of class III in experienced hands.',
        },
      ],
      de: [
        {
          q: 'Are inflatable SUPs good for river touring?',
          a: 'Yes. Inflatable SUPs are durable and maneuverable, and they handle impacts with rocks better than hard boards, making them a great choice for river touring.',
        },
        {
          q: 'What rapids can an inflatable SUP handle?',
          a: 'Quality inflatable SUPs are well suited to class I-II water, with some models capable of class III in experienced hands.',
        },
      ],
      en: [
        {
          q: 'Are inflatable SUPs good for river touring?',
          a: 'Yes. Inflatable SUPs are durable and maneuverable, and they handle impacts with rocks better than hard boards, making them a great choice for river touring.',
        },
        {
          q: 'What rapids can an inflatable SUP handle?',
          a: 'Quality inflatable SUPs are well suited to class I-II water, with some models capable of class III in experienced hands.',
        },
      ],
    },
    related: ['inflatable-sup', 'paddle', 'touring', 'beginner'],
    slug: {
      en: 'river-touring',
      zh: 'river-touring',
      ar: 'river-touring',
      ru: 'river-touring',
      fr: 'river-touring',
      de: 'river-touring',
      es: 'river-touring',
      pt: 'river-touring',
      it: 'river-touring',
      pl: 'river-touring',
    },
  },
];
