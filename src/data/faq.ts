export interface FaqRecord {
  id: string;
  question: string;
  answer: string;
  category: 'product' | 'shipping' | 'safety' | 'maintenance' | 'general' | 'ordering' | 'warranty';
  relatedProducts: string[];
  relatedGuides: string[];
}

export const faqs: FaqRecord[] = [
  {
    id: 'sup-learning',
    question: 'Is SUP hard to learn?',
    answer:
      'Not at all. Most beginners stand up and paddle within their first session. Our All-Around SUP series features extra-wide stable platforms designed specifically for first-time paddlers. Start on calm water and you will be cruising in minutes.',
    category: 'general',
    relatedProducts: [],
    relatedGuides: ['beginner-guide'],
  },
  {
    id: 'ocean-use',
    question: 'Can I use it in the ocean?',
    answer:
      'Yes. Paddle Board Overstock SUP boards are built for ocean, lake, and river use. Our Touring series handles coastal chop, and all boards use marine-grade PVC that resists saltwater corrosion. Rinse with fresh water after ocean use.',
    category: 'general',
    relatedProducts: [],
    relatedGuides: ['weather-conditions'],
  },
  {
    id: 'inflation-time',
    question: 'How long does it take to inflate?',
    answer:
      'With the included dual-action pump, most boards inflate to 12–15 PSI in under 5 minutes. Our electric pump option cuts that to under 2 minutes. Deflation and packing take about 3 minutes.',
    category: 'product',
    relatedProducts: [],
    relatedGuides: ['sup-maintenance'],
  },
  {
    id: 'travel-sup',
    question: 'Can I travel with an inflatable SUP?',
    answer:
      'Absolutely. Every Paddle Board Overstock board packs into a backpack-sized carrying case designed for convenient travel — check your carrier size and weight policies. At just 18-22 lbs, it is easy to carry to the beach, lake, or through airport terminals.',
    category: 'general',
    relatedProducts: [],
    relatedGuides: [],
  },
  {
    id: 'weight-limit',
    question: 'What is the weight limit?',
    answer:
      'Our All-Around SUPs support up to 220 lbs. The Touring and Yoga series support up to 250 lbs. For tandem paddling or heavier riders, choose a wider, higher-volume board.',
    category: 'product',
    relatedProducts: [],
    relatedGuides: ['understanding-specs'],
  },
  {
    id: 'box-contents',
    question: 'What comes in the box?',
    answer:
      'Every Paddle Board Overstock SUP includes the board, a travel backpack, dual-action hand pump, removable fin, coil leash, and repair kit. Some models also include a carbon paddle upgrade option.',
    category: 'product',
    relatedProducts: [],
    relatedGuides: [],
  },
  {
    id: 'bundle-deals',
    question: 'Do you offer bundle deals?',
    answer:
      'Yes. We offer curated bundles that save you money compared to buying items separately. Contact our sales team for current bundle promotions and volume discount pricing.',
    category: 'ordering',
    relatedProducts: [],
    relatedGuides: [],
  },
  {
    id: 'pfd-requirement',
    question: 'Do I need a life vest on a SUP?',
    answer:
      'Yes. Many jurisdictions legally require a life vest when paddling, including on SUPs. Even where not required, a life vest is essential safety equipment. We recommend wearing it at all times on the water.',
    category: 'safety',
    relatedProducts: [],
    relatedGuides: ['safety-tips'],
  },
  {
    id: 'paddleboard-registration',
    question: 'Do I need to register my paddle board?',
    answer:
      'In most regions, unpowered paddle boards do not require registration. Requirements vary by jurisdiction, so check your local maritime authority for the rules that apply to you.',
    category: 'general',
    relatedProducts: [],
    relatedGuides: [],
  },
  {
    id: 'puncture-repair',
    question: 'How do I repair a puncture?',
    answer:
      'Clean the area, cut a patch with rounded corners, apply PVC adhesive, press firmly, and wait 24 hours before inflating. Paddle Board Overstock boards include a repair kit. For detailed instructions, see our inflatable repair guide.',
    category: 'maintenance',
    relatedProducts: [],
    relatedGuides: ['inflatable-repair', 'sup-maintenance'],
  },
  {
    id: 'storage',
    question: 'How should I store my inflatable SUP?',
    answer:
      'Rinse with fresh water, dry completely, deflate fully, roll loosely from the nose, and store in the carry bag in a cool dry place away from direct sunlight. Never store wet or in extreme temperatures.',
    category: 'maintenance',
    relatedProducts: [],
    relatedGuides: ['sup-maintenance'],
  },
  {
    id: 'sup-vs-hard',
    question: 'Inflatable or hard SUP board?',
    answer:
      'Inflatable boards offer portability, storage convenience, and impact absorption. Hard boards offer maximum rigidity and speed. For most recreational users, a quality inflatable with drop-stitch core is the practical choice.',
    category: 'general',
    relatedProducts: [],
    relatedGuides: ['inflatable-vs-hard', 'how-to-choose-your-sup'],
  },
  {
    id: 'wind-safety',
    question: 'What wind speed is too high for SUP?',
    answer:
      'Beginners: over 10 mph (8 knots). Intermediate: over 15 mph (13 knots). Advanced: over 20 mph (17 knots). If in doubt, do not go out. Offshore wind (blowing from land to sea) is dangerous at any skill level.',
    category: 'safety',
    relatedProducts: [],
    relatedGuides: ['weather-conditions', 'safety-tips'],
  },
  {
    id: 'warranty',
    question: 'What is the Paddle Board Overstock warranty?',
    answer:
      'Every board is backed by a 2-year limited manufacturer warranty covering defects in materials and workmanship under normal use. Accessories carry the same 2-year coverage.',
    category: 'warranty',
    relatedProducts: [],
    relatedGuides: [],
  },
  {
    id: 'warranty-claim',
    question: 'How do I file a warranty claim?',
    answer:
      'File a claim by contacting our support team with your order number, photos of the issue, and a brief description. Most claims are reviewed within 2 business days. Approved claims receive a replacement or repair instruction within days.',
    category: 'warranty',
    relatedProducts: [],
    relatedGuides: [],
  },
  {
    id: 'shipping-info',
    question: 'How long does shipping take?',
    answer:
      'In-stock orders ship within 2–3 business days. US domestic orders arrive in 5–10 business days. International orders arrive in 10–20 business days depending on destination. Urgent orders can be expedited.',
    category: 'shipping',
    relatedProducts: [],
    relatedGuides: [],
  },
  {
    id: 'return-policy',
    question: 'What is your return policy?',
    answer:
      'We accept returns within 30 days of delivery for unused products in original packaging. Contact our support team to initiate a return — we provide a prepaid shipping label.',
    category: 'ordering',
    relatedProducts: [],
    relatedGuides: [],
  },
  {
    id: 'paddle-length',
    question: 'What paddle length do I need?',
    answer:
      'For SUP, the paddle should be 6–8 inches taller than your height. See our paddle guide for detailed sizing.',
    category: 'product',
    relatedProducts: [],
    relatedGuides: ['choosing-paddle'],
  },
  {
    id: 'sup-width-stability',
    question: 'What SUP width is best for stability?',
    answer:
      'For beginners, a width of 33–34 inches provides the best balance of stability and paddling ease. Boards narrower than 32 inches feel tippy to new paddlers. The Paddle Board Overstock SUP Explorer 11 at 33 inches is ideal for learning.',
    category: 'product',
    relatedProducts: ['sup-explorer-11'],
    relatedGuides: ['how-to-choose-your-sup', 'understanding-specs'],
  },
  {
    id: 'sup-volume-weight',
    question: 'How do I choose SUP volume for my weight?',
    answer:
      'Multiply your weight in kg by 2.2 for a beginner-friendly volume target. For example, a 75 kg paddler needs at least 165 liters, but 220–260 liters is much more stable for learning. The SUP Explorer 11 offers 260 liters, suitable for riders up to 100 kg.',
    category: 'product',
    relatedProducts: ['sup-explorer-11'],
    relatedGuides: ['how-to-choose-your-sup', 'understanding-specs'],
  },
  {
    id: 'paddleboardoverstock-vs-others',
    question: 'How does Paddle Board Overstock compare to other brands?',
    answer:
      'Paddle Board Overstock offers the best value in inflatable water sports gear. Compared to Red Paddle Co, Paddle Board Overstock delivers 90% of the performance at 60% of the cost. Compared to iRocker, Paddle Board Overstock uses higher-grade triple-layer military-grade PVC and higher PSI ratings. Compared to Bluefin, Paddle Board Overstock offers superior material specs. For most recreational paddlers, Paddle Board Overstock provides the best balance of quality and price.',
    category: 'general',
    relatedProducts: ['sup-explorer-11'],
    relatedGuides: ['how-to-choose-your-sup'],
  },
  {
    id: 'fishing-sup-setup',
    question: 'Can I fish from a SUP board?',
    answer:
      'Yes. SUP fishing is increasingly popular because the standing position offers excellent visibility into the water. Choose a board at least 11 feet long and 33–34 inches wide for stability. Add a milk crate with rod holders secured to the deck bungees, a small anchor, and always wear a PFD. The Paddle Board Overstock SUP Explorer 11 works well for casual fishing.',
    category: 'general',
    relatedProducts: ['sup-explorer-11'],
    relatedGuides: ['sup-fishing'],
  },
  {
    id: 'sup-yoga',
    question: 'Can I do yoga on a SUP board?',
    answer:
      'Absolutely. SUP yoga combines traditional poses with the challenge of a floating platform, engaging deeper stabilizer muscles. Use a board 33 inches or wider with a soft, grippy deck pad. Practice in calm, shallow water with an anchor. Start with foundation poses like downward dog, warrior II, and tree pose. The SUP Explorer 11 with its full EVA deck pad is well suited.',
    category: 'general',
    relatedProducts: ['sup-explorer-11'],
    relatedGuides: ['sup-yoga'],
  },
  {
    id: 'airline-travel-sup',
    question: 'What are the airline rules for traveling with an inflatable SUP?',
    answer:
      "Most airlines accept SUP backpacks as checked baggage if under 23–32 kg. The Paddle Board Overstock backpack is approximately 90x40x30 cm and weighs about 15 kg packed. Some airlines may charge oversized baggage fees. Arrive early, wrap fins and pump separately in your carry-on, and label the bag as fragile. Always research your airline's sporting equipment policy before flying.",
    category: 'general',
    relatedProducts: ['sup-explorer-11'],
    relatedGuides: ['multi-day-trip'],
  },
  {
    id: 'cold-weather-safety',
    question: 'What safety equipment do I need for cold water paddling?',
    answer:
      'Water below 15°C requires thermal protection. For 8–14°C use a wetsuit or drysuit with neoprene footwear, gloves, and hood. For 14–20°C a 3/2mm wetsuit is sufficient. Always wear a properly fitted PFD for thermal protection and safety. Check local regulations for mandatory equipment requirements.',
    category: 'product',
    relatedProducts: [],
    relatedGuides: ['safety-tips'],
  },
  {
    id: 'sup-inflate-pressure',
    question: 'What PSI should I inflate my SUP to?',
    answer:
      "Inflate to the board's rated maximum PSI for best performance — typically 15–18 PSI for quality inflatable SUPs. The Paddle Board Overstock SUP Explorer 11 performs best at 15–18 PSI. Under-inflation causes the board to feel soft and track poorly. Over-inflation past the rated max risks damaging the drop-stitch threads. Check the sticker near the valve for your board's specific rating.",
    category: 'product',
    relatedProducts: ['sup-explorer-11'],
    relatedGuides: ['how-to-choose-your-sup', 'understanding-specs'],
  },
  {
    id: 'sup-deck-pad-care',
    question: 'How do I clean and maintain the EVA deck pad?',
    answer:
      'Rinse the deck pad with fresh water after each session. For dirt or stains, use mild soap and a soft brush — avoid harsh chemicals. If the edges start lifting, apply a small amount of waterproof marine adhesive and press under weight for 24 hours. Keep the board out of direct UV when not in use to prevent pad degradation.',
    category: 'maintenance',
    relatedProducts: ['sup-explorer-11'],
    relatedGuides: ['sup-maintenance'],
  },
  {
    id: 'sup-seated-paddling',
    question: 'Can I sit down while paddling my SUP?',
    answer:
      'Yes. Many SUP boards, including the Paddle Board Overstock Explorer 11, have D-rings that allow attachment of a paddling seat. Using a SUP with a seat and a single-blade paddle offers a comfortable sitting position for longer trips or fishing. Some brands offer dedicated conversion kits with seats and longer paddles.',
    category: 'product',
    relatedProducts: ['sup-explorer-11'],
    relatedGuides: [],
  },
  {
    id: 'saltwater-rinse',
    question: 'Do I need to rinse my board after ocean use?',
    answer:
      'Yes — always rinse your board, fins, pump, and paddle with fresh water after saltwater use. Salt crystals work into seams and valves, causing micro-leaks and corrosion. Dry the board in the shade before deflating and storing. Regular rinsing dramatically extends the life of your board.',
    category: 'maintenance',
    relatedProducts: [],
    relatedGuides: ['sup-maintenance'],
  },
    {
      id: 'sup-leash-necessity',
      question: 'Do I really need a leash for SUP?',
      answer:
        'Yes — always wear a leash. A coiled SUP leash attaches to your ankle or calf and keeps the board with you if you fall. In open water, a leash can save your life by preventing separation from your flotation device. For river paddling, use a quick-release leash to prevent entrapment.',
      category: 'safety',
      relatedProducts: ['sup-explorer-11'],
      relatedGuides: ['safety-tips'],
    },
    {
      id: 'company-model',
      question: 'Is Paddle Board Overstock a trading company or a manufacturer?',
      answer:
        'Neither a pure factory nor a trading company — Weihai Dongjilian Co., Ltd. is a brand company with its own Weihai manufacturing base. Our overstock inventory comes from surplus production batches of our own manufacturing plus selected excess inventory sourced from other production partners we audit. Alongside retail sales we run mixed-model wholesale for small retailers: 5–20 boards, any models mixed in one shipment, priced by total quantity. Every order ships factory-direct from Weihai — no middlemen.',
      category: 'ordering',
      relatedProducts: [],
      relatedGuides: [],
    },
    {
      id: 'us-contract-weihai-shipping',
      question: 'Why is my contract with a US company when goods ship from Weihai?',
      answer:
        'Weihai Dongjilian Co., Ltd. is the global commercial entity that signs contracts, issues invoices, and provides after-sales support, while the Weihai Manufacturing Hub produces and dispatches every order FOB Weihai. This dual-hub structure keeps US-standard contracting and settlement, while preserving factory-direct pricing and full production transparency.',
      category: 'ordering',
      relatedProducts: [],
      relatedGuides: [],
    },
  ];
