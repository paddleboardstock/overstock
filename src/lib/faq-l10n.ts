import type { FaqRecord } from '~/data/faq';

export const FAQS_BY_LANG: Record<string, FaqRecord[]> = {
  en: [
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
        'Our All-Around SUPs support up to 220 lbs. The Touring and Yoga series support up to 250 lbs. RIB boats typically support 600–1500 lbs depending on model. For tandem use or heavier loads, our inflatable boats offer higher capacity options.',
      category: 'product',
      relatedProducts: [],
      relatedGuides: ['understanding-specs'],
    },
    {
      id: 'box-contents',
      question: 'What comes in the box?',
      answer:
        'Every Paddle Board Overstock SUP includes the board, a travel backpack, dual-action hand pump, removable fin, coil leash, and repair kit. Some models also include a carbon paddle upgrade option. Inflatable boats include the boat, pump, repair kit, and oars.',
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
        'Yes. Many jurisdictions legally require a life vest on any watercraft, including SUPs. Even where not required, a CE-certified life vest is essential safety equipment. We recommend wearing it at all times on the water.',
      category: 'safety',
      relatedProducts: ['life-vest-classic', 'life-vest-pro'],
      relatedGuides: ['safety-tips'],
    },
    {
      id: 'boat-registration',
      question: 'Do I need to register my inflatable boat?',
      answer:
        'Requirements vary by jurisdiction. In most regions, inflatable boats with engines over a certain horsepower require registration. Unpowered SUPs and small dinghies typically do not. Check your local maritime authority for specific rules.',
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
        'All Paddle Board Overstock products are backed by a comprehensive manufacturer warranty. Inflatable boat tube fabric, seams, and hull are covered by a 5-year limited warranty; SUP boards and accessories carry a 2-year limited warranty. The warranty covers defects in materials and workmanship under normal use.',
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
        'We accept returns within 30 days of delivery for unused products in original packaging. Custom/OEM orders are non-returnable. Contact our support team to initiate a return — we provide a prepaid shipping label.',
      category: 'ordering',
      relatedProducts: [],
      relatedGuides: [],
    },
    {
      id: 'oem-odm',
      question: 'Do you offer OEM/ODM services?',
      answer:
        'Yes. We offer private label and custom design services for businesses. From custom branding on existing models to fully custom hull designs, our engineering team can develop products under your brand. Minimum order quantities apply.',
      category: 'ordering',
      relatedProducts: [],
      relatedGuides: [],
    },
    {
      id: 'paddle-length',
      question: 'What paddle length do I need?',
      answer:
        'For SUP: the paddle should be 6–8 inches taller than your height. For kayak: paddle length depends on boat width and torso length. See our paddle guide for detailed sizing.',
      category: 'product',
      relatedProducts: [],
      relatedGuides: ['choosing-paddle'],
    },
    {
      id: 'rib-engine',
      question: 'What size engine do I need for a RIB?',
      answer:
        'Engine size depends on boat length and weight. A 3m RIB typically handles 15–25 HP, a 4.5m RIB handles 40–60 HP, and a 6m RIB handles 90–150 HP. Always follow the max HP rating plate on your boat.',
      category: 'product',
      relatedProducts: [],
      relatedGuides: [],
    },
    {
      id: 'material-difference',
      question: 'What is the difference between PVC and Hypalon?',
      answer:
        'PVC is lighter, more affordable, and easier to repair — ideal for recreational use. Hypalon (CSM) offers superior UV and chemical resistance with a longer lifespan, preferred for commercial and military applications. Paddle Board Overstock uses both depending on the product tier.',
      category: 'product',
      relatedProducts: [],
      relatedGuides: [],
    },
    {
      id: 'sup-width-stability',
      question: 'What SUP width is best for stability?',
      answer:
        'For beginners, a width of 33–34 inches provides the best balance of stability and paddling ease. Boards narrower than 32 inches feel tippy to new paddlers. The Paddle Board Overstock SUP Explorer 11 at 33 inches is ideal for learning.',
      category: 'product',
      relatedProducts: ['sup-explorer-11'],
      relatedGuides: ['sup-size-guide', 'paddle-board-size-guide'],
    },
    {
      id: 'sup-volume-weight',
      question: 'How do I choose SUP volume for my weight?',
      answer:
        'Multiply your weight in kg by 2.2 for a beginner-friendly volume target. For example, a 75 kg paddler needs at least 165 liters, but 220–260 liters is much more stable for learning. The SUP Explorer 11 offers 260 liters, suitable for riders up to 100 kg.',
      category: 'product',
      relatedProducts: ['sup-explorer-11'],
      relatedGuides: ['sup-size-guide', 'paddle-board-size-guide'],
    },
    {
      id: 'inflatable-boat-engine',
      question: 'What size engine do I need for my inflatable boat?',
      answer:
        'For the AirDeck 270, use up to 6 HP. For the AirDeck 360, up to 15 HP. For the RIB 330, up to 40 HP. For the RIB 450 Patrol, up to 60 HP. Always check the max HP rating plate on your boat and never exceed it.',
      category: 'product',
      relatedProducts: ['airdeck-360', 'rib-330', 'rib-450-patrol'],
      relatedGuides: ['inflatable-boat-buying-guide'],
    },
    {
      id: 'inflatable-boat-floor-types',
      question: 'What floor type is best for an inflatable boat?',
      answer:
        'Aluminum slat floors provide the best performance — rigid, planing capable, and stable for standing. Air decks are lighter and pack smaller but flex more. Roll-up floors are the simplest and most affordable but offer the least rigidity. Choose based on your primary use: fishing and speed favor slat floors; portability favors air decks.',
      category: 'product',
      relatedProducts: ['rib-330', 'airdeck-360'],
      relatedGuides: ['inflatable-boat-buying-guide'],
    },
    {
      id: 'paddleboardoverstock-vs-others',
      question: 'How does Paddle Board Overstock compare to other brands?',
      answer:
        'Paddle Board Overstock offers the best value in inflatable water sports gear. Compared to Red Paddle Co, Paddle Board Overstock delivers 90% of the performance at 60% of the cost. Compared to iRocker, Paddle Board Overstock uses higher-grade triple-layer military-grade PVC and higher PSI ratings. Compared to Bluefin, Paddle Board Overstock offers superior material specs. For most recreational paddlers, Paddle Board Overstock provides the best balance of quality and price.',
      category: 'general',
      relatedProducts: ['sup-explorer-11'],
      relatedGuides: [
        'best-surf-gear-brands-compared',
        'paddleboardoverstock-vs-red-paddle',
        'paddleboardoverstock-vs-irocker',
        'paddleboardoverstock-vs-bluefin',
      ],
    },
    {
      id: 'fishing-sup-setup',
      question: 'Can I fish from a SUP board?',
      answer:
        'Yes. SUP fishing is increasingly popular because the standing position offers excellent visibility into the water. Choose a board at least 11 feet long and 33–34 inches wide for stability. Add a milk crate with rod holders secured to the deck bungees, a small anchor, and always wear a PFD. The Paddle Board Overstock SUP Explorer 11 works well for casual fishing.',
      category: 'general',
      relatedProducts: ['sup-explorer-11'],
      relatedGuides: ['fishing-sup-guide', 'sup-anchor-guide'],
    },
    {
      id: 'sup-yoga',
      question: 'Can I do yoga on a SUP board?',
      answer:
        'Absolutely. SUP yoga combines traditional poses with the challenge of a floating platform, engaging deeper stabilizer muscles. Use a board 33 inches or wider with a soft, grippy deck pad. Practice in calm, shallow water with an anchor. Start with foundation poses like downward dog, warrior II, and tree pose. The SUP Explorer 11 with its full EVA deck pad is well suited.',
      category: 'general',
      relatedProducts: ['sup-explorer-11'],
      relatedGuides: ['yoga-sup-guide'],
    },
    {
      id: 'airline-travel-sup',
      question: 'What are the airline rules for traveling with an inflatable SUP?',
      answer:
        "Most airlines accept SUP backpacks as checked baggage if under 23–32 kg. The Paddle Board Overstock backpack is approximately 90x40x30 cm and weighs about 15 kg packed. Some airlines may charge oversized baggage fees. Arrive early, wrap fins and pump separately in your carry-on, and label the bag as fragile. Always research your airline's sporting equipment policy before flying.",
      category: 'general',
      relatedProducts: ['sup-explorer-11'],
      relatedGuides: ['sup-travel-guide'],
    },
    {
      id: 'cold-weather-safety',
      question: 'What safety equipment do I need for cold water paddling?',
      answer:
        'Water below 15°C requires thermal protection. For 8–14°C use a wetsuit or drysuit with boots, gloves, and hood. For 14–20°C a 3/2mm wetsuit is sufficient. Always wear a properly fitted PFD for thermal protection and safety. Check local regulations for mandatory equipment requirements.',
      category: 'product',
      relatedProducts: ['life-vest-pro'],
      relatedGuides: ['sup-safety-guide', 'inflatable-boat-quality-certifications'],
    },
    {
      id: 'oem-odm-details',
      question: 'What are the minimum order quantities for OEM/ODM?',
      answer:
        'Minimum order quantities (MOQs) vary by product type and complexity. Custom branding on existing models typically requires 5–10 units. Fully custom hull designs require higher MOQs. Contact our sales team with your requirements for a detailed quote. We handle everything from custom colors and logos to entirely original mold designs.',
      category: 'ordering',
      relatedProducts: [],
      relatedGuides: [],
    },
    {
      id: 'oem-custom-branding',
      question: 'Can I put my own logo on Paddle Board Overstock products?',
      answer:
        'Yes. Our OEM service includes custom logo placement, custom color schemes, and custom packaging. We offer pad printing, heat transfer, and embroidery options depending on the product type. Send your artwork and specifications to our sales team for a quote and lead time estimate.',
      category: 'ordering',
      relatedProducts: [],
      relatedGuides: [],
    },
    {
      id: 'sup-inflate-pressure',
      question: 'What PSI should I inflate my SUP to?',
      answer:
        "Inflate to the board's rated maximum PSI for best performance — typically 15–18 PSI for quality inflatable SUPs. The Paddle Board Overstock SUP Explorer 11 performs best at 15–18 PSI. Under-inflation causes the board to feel soft and track poorly. Over-inflation past the rated max risks damaging the drop-stitch threads. Check the sticker near the valve for your board's specific rating.",
      category: 'product',
      relatedProducts: ['sup-explorer-11'],
      relatedGuides: ['how-to-choose-inflatable-sup', 'sup-pump-guide'],
    },
    {
      id: 'sup-deck-pad-care',
      question: 'How do I clean and maintain the EVA deck pad?',
      answer:
        'Rinse the deck pad with fresh water after each session. For dirt or stains, use mild soap and a soft brush — avoid harsh chemicals. If the edges start lifting, apply a small amount of waterproof marine adhesive and press under weight for 24 hours. Keep the board out of direct UV when not in use to prevent pad degradation.',
      category: 'maintenance',
      relatedProducts: ['sup-explorer-11'],
      relatedGuides: ['inflatable-sup-maintenance'],
    },
    {
      id: 'rib-trailer-required',
      question: 'Do I need a trailer for a RIB?',
      answer:
        'Yes. RIBs with rigid fiberglass or aluminum hulls require a small boat trailer for transport. The inflatable tubes can be deflated for compact storage, but the rigid hull needs a trailer. The AirDeck series (fully inflatable) does not require a trailer and can be transported in a car trunk.',
      category: 'general',
      relatedProducts: ['rib-330', 'rib-450-patrol', 'airdeck-360'],
      relatedGuides: ['inflatable-boat-buying-guide'],
    },
    {
      id: 'sup-kayak-conversion',
      question: 'Can I use a SUP board as a kayak?',
      answer:
        'Yes. Many SUP boards, including the Paddle Board Overstock Explorer 11, have D-rings that allow attachment of a kayak seat. Using a SUP with a kayak seat and a single-blade paddle offers a comfortable sitting position for longer trips or fishing. Some brands offer dedicated kayak conversion kits with seats and longer paddles.',
      category: 'product',
      relatedProducts: ['sup-explorer-11'],
      relatedGuides: ['kayak-vs-sup'],
    },
    {
      id: 'saltwater-rinse',
      question: 'Do I need to rinse my inflatable board after ocean use?',
      answer:
        'Yes — always rinse your board, fins, pump, and paddle with fresh water after saltwater use. Salt crystals work into seams and valves, causing micro-leaks and corrosion. Dry the board in the shade before deflating and storing. Regular rinsing dramatically extends the life of your inflatable watercraft.',
      category: 'maintenance',
      relatedProducts: [],
      relatedGuides: ['inflatable-sup-maintenance', 'inflatable-boat-maintenance'],
    },
    {
      id: 'sup-leash-necessity',
      question: 'Do I really need a leash for SUP?',
      answer:
        'Yes — always wear a leash. A coiled SUP leash attaches to your ankle or calf and keeps the board with you if you fall. In open water, a leash can save your life by preventing separation from your flotation device. For river paddling, use a quick-release leash to prevent entrapment.',
      category: 'safety',
      relatedProducts: ['sup-explorer-11'],
      relatedGuides: ['sup-safety-guide', 'sup-leash-guide'],
    },
    {
      id: 'company-model',
      question: 'Is Paddle Board Overstock a trading company or a manufacturer?',
      answer:
        'Neither a pure factory nor a trading company — Weihai Dongjilian Co., Ltd. is a brand company with its own manufacturing base. Weihai Dongjilian Co., Ltd. (New Mexico, USA) handles global distribution, contracts, billing, and after-sales, while the Paddle Board Overstock Qingdao Manufacturing Hub runs R&D, production, and quality control in our own 12,000 m² facility. No middlemen: every order ships factory-direct.',
      category: 'ordering',
      relatedProducts: [],
      relatedGuides: [],
    },
    {
      id: 'us-contract-qingdao-shipping',
      question: 'Why is my contract with a US company when goods ship from Qingdao?',
      answer:
        'Weihai Dongjilian Co., Ltd. (New Mexico, USA) is the global commercial entity that signs contracts, issues invoices, and provides after-sales support, while the Qingdao Manufacturing Hub produces and dispatches every order FOB Qingdao. This dual-hub structure keeps US-standard contracting and settlement, while preserving factory-direct pricing and full production transparency.',
      category: 'ordering',
      relatedProducts: [],
      relatedGuides: [],
    },
  ],
  de: [
    {
      id: 'sup-learning',
      question: 'Ist SUP schwer zu lernen?',
      answer:
        'Überhaupt nicht. Die meisten Anfänger stehen in ihrer ersten Session auf dem Board und paddeln los. Unsere All-Around SUP-Serie bietet extra breite, stabile Plattformen, die speziell für Paddel-Einsteiger entwickelt wurden. Starten Sie auf ruhigem Wasser und schon nach wenigen Minuten gleiten Sie dahin.',
      category: 'general',
      relatedProducts: [],
      relatedGuides: ['beginner-guide'],
    },
    {
      id: 'ocean-use',
      question: 'Kann ich das Board im Meer benutzen?',
      answer:
        'Ja. Paddle Board Overstock SUP-Boards sind für den Einsatz im Meer, im See und im Fluss gebaut. Unsere Touring-Serie kommt mit Küstenwellen gut zurecht, und alle Boards verwenden PVC in Marinequalität, das gegen Salzwasserkorrosion beständig ist. Spülen Sie das Board nach dem Einsatz im Meer mit Süßwasser ab.',
      category: 'general',
      relatedProducts: [],
      relatedGuides: ['weather-conditions'],
    },
    {
      id: 'inflation-time',
      question: 'Wie lange dauert das Aufpumpen?',
      answer:
        'Mit der mitgelieferten Doppelhubpumpe sind die meisten Boards in unter 5 Minuten auf 12–15 PSI aufgepumpt. Mit unserer optionalen elektrischen Pumpe dauert das weniger als 2 Minuten. Entlüften und Verpacken dauert etwa 3 Minuten.',
      category: 'product',
      relatedProducts: [],
      relatedGuides: ['sup-maintenance'],
    },
    {
      id: 'travel-sup',
      question: 'Kann ich mit einem aufblasbaren SUP verreisen?',
      answer:
        'Absolut. Jedes Paddle Board Overstock-Board passt in eine Transporttasche in Rucksackgröße, die den Anforderungen der Fluggesellschaften für aufgegebenes Gepäck entspricht. Mit nur 18–22 lbs lässt es sich bequem zum Strand, zum See oder durch Flughafenterminals tragen.',
      category: 'general',
      relatedProducts: [],
      relatedGuides: [],
    },
    {
      id: 'weight-limit',
      question: 'Wie hoch ist die maximale Belastung?',
      answer:
        'Unsere All-Around SUPs tragen bis zu 220 lbs. Die Touring- und Yoga-Serien tragen bis zu 250 lbs. RIB-Boote tragen je nach Modell 600–1500 lbs. Für Tandembetrieb oder schwerere Lasten bieten unsere Schlauchboote Optionen mit höherer Kapazität.',
      category: 'product',
      relatedProducts: [],
      relatedGuides: ['understanding-specs'],
    },
    {
      id: 'box-contents',
      question: 'Was ist im Lieferumfang enthalten?',
      answer:
        'Jedes Paddle Board Overstock SUP enthält das Board, einen Reiserucksack, eine Doppelhub-Handpumpe, eine abnehmbare Finne, eine Spiralleine und ein Reparaturset. Einige Modelle bieten zusätzlich die Option eines Paddels mit Kohlefaser-Upgrade. Schlauchboote enthalten das Boot, die Pumpe, ein Reparaturset und Paddel.',
      category: 'product',
      relatedProducts: [],
      relatedGuides: [],
    },
    {
      id: 'bundle-deals',
      question: 'Bieten Sie Paketangebote an?',
      answer:
        'Ja. Wir bieten kuratierte Pakete an, mit denen Sie im Vergleich zum Einzelkauf Geld sparen. Kontaktieren Sie unser Vertriebsteam für aktuelle Paketaktionen und Mengenrabatte.',
      category: 'ordering',
      relatedProducts: [],
      relatedGuides: [],
    },
    {
      id: 'pfd-requirement',
      question: 'Brauche ich auf einem SUP eine Schwimmweste?',
      answer:
        'Ja. In vielen Rechtsgebieten schreibt das Gesetz eine Schwimmweste auf jedem Wasserfahrzeug vor, auch auf SUPs. Selbst wo sie nicht vorgeschrieben ist, ist eine CE-zertifizierte Rettungsweste eine unverzichtbare Sicherheitsausrüstung. Wir empfehlen, sie auf dem Wasser jederzeit zu tragen.',
      category: 'safety',
      relatedProducts: ['life-vest-classic', 'life-vest-pro'],
      relatedGuides: ['safety-tips'],
    },
    {
      id: 'boat-registration',
      question: 'Muss ich mein Schlauchboot registrieren?',
      answer:
        'Die Anforderungen variieren je nach Rechtsgebiet. In den meisten Regionen müssen Schlauchboote mit Motoren über einer bestimmten Leistung registriert werden. Unmotorisierte SUPs und kleine Dinghys normalerweise nicht. Erkundigen Sie sich bei Ihrer örtlichen Schifffahrtsbehörde nach den genauen Regeln.',
      category: 'general',
      relatedProducts: [],
      relatedGuides: [],
    },
    {
      id: 'puncture-repair',
      question: 'Wie repariere ich einen Riss?',
      answer:
        'Reinigen Sie die Stelle, schneiden Sie einen Flicken mit abgerundeten Ecken zu, tragen Sie PVC-Kleber auf, drücken Sie fest und warten Sie 24 Stunden, bevor Sie aufpumpen. Paddle Board Overstock-Boards enthalten ein Reparaturset. Detaillierte Anweisungen finden Sie in unserem Leitfaden zur Reparatur aufblasbarer Boote.',
      category: 'maintenance',
      relatedProducts: [],
      relatedGuides: ['inflatable-repair', 'sup-maintenance'],
    },
    {
      id: 'storage',
      question: 'Wie sollte ich mein aufblasbares SUP lagern?',
      answer:
        'Spülen Sie es mit Süßwasser ab, trocknen Sie es vollständig, entlüften Sie es vollständig, rollen Sie es vom Bug her locker auf und bewahren Sie es in der Transporttasche an einem kühlen, trockenen Ort ohne direkte Sonneneinstrahlung auf. Lagern Sie es niemals nass oder bei extremen Temperaturen.',
      category: 'maintenance',
      relatedProducts: [],
      relatedGuides: ['sup-maintenance'],
    },
    {
      id: 'sup-vs-hard',
      question: 'Aufblasbares oder hartes SUP-Board?',
      answer:
        'Aufblasbare Boards bieten Mobilität, einfache Lagerung und Stoßdämpfung. Harte Boards bieten maximale Steifigkeit und Geschwindigkeit. Für die meisten Freizeitnutzer ist ein hochwertiges aufblasbares Board mit Drop-Stitch-Kern die praktische Wahl.',
      category: 'general',
      relatedProducts: [],
      relatedGuides: ['inflatable-vs-hard', 'how-to-choose-your-sup'],
    },
    {
      id: 'wind-safety',
      question: 'Welche Windgeschwindigkeit ist für SUP zu hoch?',
      answer:
        'Anfänger: über 10 mph (8 Knoten). Fortgeschrittene: über 15 mph (13 Knoten). Fortgeschrittene Paddler: über 20 mph (17 Knoten). Im Zweifelsfall nicht hinausfahren. Landwind (vom Land zum Meer wehend) ist bei jedem Könnensstand gefährlich.',
      category: 'safety',
      relatedProducts: [],
      relatedGuides: ['weather-conditions', 'safety-tips'],
    },
    {
      id: 'warranty',
      question: 'Wie lautet die Paddle Board Overstock-Garantie?',
      answer:
        'Alle Paddle Board Overstock-Produkte sind durch eine umfassende Herstellergarantie abgesichert. Schlauchboote sind lebenslang gegen Herstellungsfehler geschützt; SUP-Boards sind für über 2 Jahre abgedeckt. Die Garantie deckt Material- und Verarbeitungsfehler bei normalem Gebrauch ab.',
      category: 'warranty',
      relatedProducts: [],
      relatedGuides: [],
    },
    {
      id: 'warranty-claim',
      question: 'Wie reiche ich einen Garantieanspruch ein?',
      answer:
        'Reichen Sie einen Anspruch ein, indem Sie unser Support-Team mit Ihrer Bestellnummer, Fotos des Problems und einer kurzen Beschreibung kontaktieren. Die meisten Ansprüche werden innerhalb von 2 Werktagen geprüft. Genehmigte Ansprüche erhalten innerhalb weniger Tage Ersatz oder eine Reparaturanweisung.',
      category: 'warranty',
      relatedProducts: [],
      relatedGuides: [],
    },
    {
      id: 'shipping-info',
      question: 'Wie lange dauert der Versand?',
      answer:
        'Lagerhaltige Bestellungen werden innerhalb von 2–3 Werktagen versendet. Inlandsbestellungen in den USA treffen in 5–10 Werktagen ein. Internationale Bestellungen treffen je nach Zielort in 10–20 Werktagen ein. Eilbestellungen können beschleunigt werden.',
      category: 'shipping',
      relatedProducts: [],
      relatedGuides: [],
    },
    {
      id: 'return-policy',
      question: 'Wie lautet Ihre Rückgabepolitik?',
      answer:
        'Wir akzeptieren Rückgaben innerhalb von 30 Tagen nach Lieferung für unbenutzte Produkte in der Originalverpackung. Maßgefertigte/OEM-Bestellungen sind von der Rückgabe ausgeschlossen. Kontaktieren Sie unser Support-Team, um eine Rückgabe einzuleiten — wir stellen ein vorausbezahltes Versandlabel bereit.',
      category: 'ordering',
      relatedProducts: [],
      relatedGuides: [],
    },
    {
      id: 'oem-odm',
      question: 'Bieten Sie OEM/ODM-Dienstleistungen an?',
      answer:
        'Ja. Wir bieten Private-Label- und individuelle Designdienstleistungen für Unternehmen an. Von individuellem Branding auf bestehenden Modellen bis hin zu vollständig maßgeschneiderten Rumpfdesigns kann unser Ingenieurteam Produkte unter Ihrer Marke entwickeln. Es gelten Mindestbestellmengen.',
      category: 'ordering',
      relatedProducts: [],
      relatedGuides: [],
    },
    {
      id: 'paddle-length',
      question: 'Welche Paddellänge brauche ich?',
      answer:
        'Für SUP: Das Paddel sollte 6–8 Zoll höher sein als Ihre Körpergröße. Beim Kajak hängt die Paddellänge von der Bootsbreite und der Oberkörperlänge ab. Detaillierte Größenempfehlungen finden Sie in unserem Paddel-Leitfaden.',
      category: 'product',
      relatedProducts: [],
      relatedGuides: ['choosing-paddle'],
    },
    {
      id: 'rib-engine',
      question: 'Welche Motorleistung brauche ich für ein RIB?',
      answer:
        'Die Motorleistung hängt von Länge und Gewicht des Bootes ab. Ein 3m-RIB benötigt typischerweise 15–25 PS, ein 4.5m-RIB 40–60 PS und ein 6m-RIB 90–150 PS. Beachten Sie immer die maximale PS-Leistung auf dem Typenschild Ihres Bootes.',
      category: 'product',
      relatedProducts: [],
      relatedGuides: [],
    },
    {
      id: 'material-difference',
      question: 'Was ist der Unterschied zwischen PVC und Hypalon?',
      answer:
        'PVC ist leichter, günstiger und einfacher zu reparieren — ideal für Freizeitnutzung. Hypalon (CSM) bietet überlegene UV- und Chemikalienbeständigkeit mit einer längeren Lebensdauer und wird für gewerbliche und militärische Anwendungen bevorzugt. Paddle Board Overstock verwendet je nach Produktstufe beide Materialien.',
      category: 'product',
      relatedProducts: [],
      relatedGuides: [],
    },
    {
      id: 'sup-width-stability',
      question: 'Welche SUP-Breite ist am besten für die Stabilität?',
      answer:
        'Für Anfänger bietet eine Breite von 33–34 Zoll die beste Balance zwischen Stabilität und Paddelkomfort. Boards, die schmaler als 32 Zoll sind, wirken auf neue Paddler wackelig. Das Paddle Board Overstock SUP Explorer 11 mit 33 Zoll ist ideal zum Lernen.',
      category: 'product',
      relatedProducts: ['sup-explorer-11'],
      relatedGuides: ['sup-size-guide', 'paddle-board-size-guide'],
    },
    {
      id: 'sup-volume-weight',
      question: 'Wie wähle ich das SUP-Volumen für mein Gewicht?',
      answer:
        'Multiplizieren Sie Ihr Gewicht in kg mit 2.2, um ein anfängerfreundliches Volumenziel zu erhalten. Ein 75-kg-Paddler benötigt beispielsweise mindestens 165 Liter, aber 220–260 Liter sind zum Lernen deutlich stabiler. Das SUP Explorer 11 bietet 260 Liter und ist für Fahrer bis 100 kg geeignet.',
      category: 'product',
      relatedProducts: ['sup-explorer-11'],
      relatedGuides: ['sup-size-guide', 'paddle-board-size-guide'],
    },
    {
      id: 'inflatable-boat-engine',
      question: 'Welche Motorleistung brauche ich für mein Schlauchboot?',
      answer:
        'Für das AirDeck 270 verwenden Sie bis zu 6 PS. Für das AirDeck 360 bis zu 15 PS. Für das RIB 330 bis zu 40 PS. Für das RIB 450 Patrol bis zu 60 PS. Überprüfen Sie immer die maximale PS-Leistung auf dem Typenschild Ihres Bootes und überschreiten Sie sie niemals.',
      category: 'product',
      relatedProducts: ['airdeck-360', 'rib-330', 'rib-450-patrol'],
      relatedGuides: ['inflatable-boat-buying-guide'],
    },
    {
      id: 'inflatable-boat-floor-types',
      question: 'Welcher Bodentyp ist am besten für ein Schlauchboot?',
      answer:
        'Aluminium-Lattenböden bieten die beste Leistung — starr, gleitfähig und stabil zum Stehen. Luftdecks sind leichter und packen kleiner, biegen sich aber stärker durch. Rollböden sind am einfachsten und günstigsten, bieten aber die geringste Steifigkeit. Wählen Sie je nach Hauptverwendungszweck: Angeln und Geschwindigkeit sprechen für Lattenböden; Mobilität spricht für Luftdecks.',
      category: 'product',
      relatedProducts: ['rib-330', 'airdeck-360'],
      relatedGuides: ['inflatable-boat-buying-guide'],
    },
    {
      id: 'paddleboardoverstock-vs-others',
      question: 'Wie schneidet Paddle Board Overstock im Vergleich zu anderen Marken ab?',
      answer:
        'Paddle Board Overstock bietet das beste Preis-Leistungs-Verhältnis bei aufblasbarer Wassersportausrüstung. Im Vergleich zu Red Paddle Co liefert Paddle Board Overstock 90 % der Leistung zu 60 % der Kosten. Im Vergleich zu iRocker verwendet Paddle Board Overstock höherwertiges dreilagiges PVC in Militärqualität und höhere PSI-Werte. Im Vergleich zu Bluefin bietet Paddle Board Overstock überlegene Materialspezifikationen. Für die meisten Freizeitpaddler bietet Paddle Board Overstock die beste Balance zwischen Qualität und Preis.',
      category: 'general',
      relatedProducts: ['sup-explorer-11'],
      relatedGuides: [
        'best-surf-gear-brands-compared',
        'paddleboardoverstock-vs-red-paddle',
        'paddleboardoverstock-vs-irocker',
        'paddleboardoverstock-vs-bluefin',
      ],
    },
    {
      id: 'fishing-sup-setup',
      question: 'Kann ich von einem SUP-Board aus angeln?',
      answer:
        'Ja. Das Angeln vom SUP wird immer beliebter, weil die stehende Position eine hervorragende Sicht ins Wasser bietet. Wählen Sie ein Board von mindestens 11 Fuß Länge und 33–34 Zoll Breite für Stabilität. Befestigen Sie eine Milchkiste mit Rutenhaltern an den Bungees des Decks und einen kleinen Anker, und tragen Sie immer eine Rettungsweste (PFD). Das Paddle Board Overstock SUP Explorer 11 eignet sich gut zum gelegentlichen Angeln.',
      category: 'general',
      relatedProducts: ['sup-explorer-11'],
      relatedGuides: ['fishing-sup-guide', 'sup-anchor-guide'],
    },
    {
      id: 'sup-yoga',
      question: 'Kann ich auf einem SUP-Board Yoga machen?',
      answer:
        'Absolut. SUP-Yoga verbindet traditionelle Posen mit der Herausforderung einer schwimmenden Plattform und beansprucht tiefere Stabilisatormuskeln. Verwenden Sie ein Board mit 33 Zoll Breite oder mehr und einem weichen, griffigen Deck-Pad. Üben Sie auf ruhigem, flachem Wasser mit einem Anker. Beginnen Sie mit Grundpositionen wie dem herabschauenden Hund, Krieger II und der Baumhaltung. Das SUP Explorer 11 mit seinem vollflächigen EVA-Deck-Pad ist gut geeignet.',
      category: 'general',
      relatedProducts: ['sup-explorer-11'],
      relatedGuides: ['yoga-sup-guide'],
    },
    {
      id: 'airline-travel-sup',
      question: 'Welche Fluglinienregeln gelten für das Reisen mit einem aufblasbaren SUP?',
      answer:
        'Die meisten Fluggesellschaften akzeptieren SUP-Rucksäcke als aufgegebenes Gepäck, wenn sie unter 23–32 kg liegen. Der Paddle Board Overstock-Rucksack ist etwa 90x40x30 cm groß und wiegt gepackt etwa 15 kg. Einige Fluggesellschaften erheben möglicherweise Gebühren für Übergepäck. Kommen Sie früh, packen Sie Finnen und Pumpe separat ins Handgepäck und kennzeichnen Sie die Tasche als zerbrechlich. Informieren Sie sich immer vor dem Flug über die Sportausrüstungsrichtlinie Ihrer Fluggesellschaft.',
      category: 'general',
      relatedProducts: ['sup-explorer-11'],
      relatedGuides: ['sup-travel-guide'],
    },
    {
      id: 'cold-weather-safety',
      question: 'Welche Sicherheitsausrüstung brauche ich beim Paddeln in kaltem Wasser?',
      answer:
        'Wasser unter 15 °C erfordert Thermalschutz. Für 8–14 °C verwenden Sie einen Neoprenanzug oder Trockenanzug mit Stiefeln, Handschuhen und Haube. Für 14–20 °C reicht ein 3/2-mm-Neoprenanzug. Tragen Sie immer eine richtig sitzende Rettungsweste (PFD) für Thermalschutz und Sicherheit. Prüfen Sie die örtlichen Vorschriften auf vorgeschriebene Ausrüstung.',
      category: 'product',
      relatedProducts: ['life-vest-pro'],
      relatedGuides: ['sup-safety-guide', 'inflatable-boat-quality-certifications'],
    },
    {
      id: 'oem-odm-details',
      question: 'Wie hoch sind die Mindestbestellmengen für OEM/ODM?',
      answer:
        'Die Mindestbestellmengen (MOQs) variieren je nach Produkttyp und Komplexität. Individuelles Branding auf bestehenden Modellen erfordert in der Regel 5–10 Einheiten. Vollständig maßgeschneiderte Rumpfdesigns erfordern höhere MOQs. Kontaktieren Sie unser Vertriebsteam mit Ihren Anforderungen für ein detailliertes Angebot. Wir kümmern uns um alles — von individuellen Farben und Logos bis hin zu vollständig originellen Formenentwürfen.',
      category: 'ordering',
      relatedProducts: [],
      relatedGuides: [],
    },
    {
      id: 'oem-custom-branding',
      question: 'Kann ich mein eigenes Logo auf Paddle Board Overstock-Produkte setzen?',
      answer:
        'Ja. Unser OEM-Service umfasst individuelle Logo-Platzierung, individuelle Farbschemata und individuelle Verpackung. Wir bieten Tampondruck, Transferdruck und Stickerei je nach Produkttyp an. Senden Sie Ihre Gestaltungsvorlagen und Spezifikationen an unser Vertriebsteam für ein Angebot und eine Lieferzeitschätzung.',
      category: 'ordering',
      relatedProducts: [],
      relatedGuides: [],
    },
    {
      id: 'sup-inflate-pressure',
      question: 'Auf welchen PSI-Wert sollte ich mein SUP aufpumpen?',
      answer:
        'Pumpen Sie auf den angegebenen maximalen PSI-Wert des Boards auf, um die beste Leistung zu erzielen — bei hochwertigen aufblasbaren SUPs typischerweise 15–18 PSI. Das Paddle Board Overstock SUP Explorer 11 zeigt bei 15–18 PSI die beste Leistung. Zu geringer Luftdruck macht das Board weich und schlecht spurstabil. Zu hoher Luftdruck über dem angegebenen Maximum riskiert Schäden an den Drop-Stitch-Fäden. Prüfen Sie den Aufkleber am Ventil für den spezifischen Wert Ihres Boards.',
      category: 'product',
      relatedProducts: ['sup-explorer-11'],
      relatedGuides: ['how-to-choose-inflatable-sup', 'sup-pump-guide'],
    },
    {
      id: 'sup-deck-pad-care',
      question: 'Wie reinige und pflege ich das EVA-Deck-Pad?',
      answer:
        'Spülen Sie das Deck-Pad nach jeder Session mit Süßwasser ab. Bei Schmutz oder Flecken verwenden Sie milde Seife und eine weiche Bürste — vermeiden Sie aggressive Chemikalien. Wenn sich die Kanten lösen, tragen Sie eine kleine Menge wasserfesten Marinekleber auf und pressen Sie die Stelle 24 Stunden lang mit Gewicht. Bewahren Sie das Board bei Nichtgebrauch vor direkter UV-Strahlung geschützt auf, um eine Zersetzung des Pads zu verhindern.',
      category: 'maintenance',
      relatedProducts: ['sup-explorer-11'],
      relatedGuides: ['inflatable-sup-maintenance'],
    },
    {
      id: 'rib-trailer-required',
      question: 'Brauche ich einen Trailer für ein RIB?',
      answer:
        'Ja. RIBS mit starrem Glasfaser- oder Aluminiumrumpf benötigen für den Transport einen kleinen Bootstrailer. Die aufblasbaren Schläuche können zur platzsparenden Lagerung entlüftet werden, aber der starre Rumpf braucht einen Trailer. Die AirDeck-Serie (voll aufblasbar) benötigt keinen Trailer und kann im Kofferraum eines Autos transportiert werden.',
      category: 'general',
      relatedProducts: ['rib-330', 'rib-450-patrol', 'airdeck-360'],
      relatedGuides: ['inflatable-boat-buying-guide'],
    },
    {
      id: 'sup-kayak-conversion',
      question: 'Kann ich ein SUP-Board als Kajak benutzen?',
      answer:
        'Ja. Viele SUP-Boards, einschließlich des Paddle Board Overstock Explorer 11, haben D-Ringe, die die Befestigung eines Kajaksitzes ermöglichen. Ein SUP mit Kajaksitz und Einzelblattpaddel bietet eine bequeme Sitzposition für längere Touren oder zum Angeln. Einige Marken bieten spezielle Kajak-Umbausätze mit Sitzen und längeren Paddeln an.',
      category: 'product',
      relatedProducts: ['sup-explorer-11'],
      relatedGuides: ['kayak-vs-sup'],
    },
    {
      id: 'saltwater-rinse',
      question: 'Muss ich mein aufblasbares Board nach dem Einsatz im Meer abspülen?',
      answer:
        'Ja — spülen Sie Ihr Board, die Finnen, die Pumpe und das Paddel nach dem Einsatz im Salzwasser immer mit Süßwasser ab. Salzkristalle setzen sich in Nähten und Ventilen fest und verursachen Mikrolecks und Korrosion. Trocknen Sie das Board im Schatten, bevor Sie es entlüften und lagern. Regelmäßiges Abspülen verlängert die Lebensdauer Ihres aufblasbaren Wasserfahrzeugs erheblich.',
      category: 'maintenance',
      relatedProducts: [],
      relatedGuides: ['inflatable-sup-maintenance', 'inflatable-boat-maintenance'],
    },
    {
      id: 'sup-leash-necessity',
      question: 'Brauche ich für SUP wirklich eine Leine?',
      answer:
        'Ja — tragen Sie immer eine Leine. Eine Spiralleine wird am Knöchel oder an der Wade befestigt und hält das Board bei Ihnen, wenn Sie ins Wasser fallen. Im offenen Wasser kann eine Leine Ihr Leben retten, indem sie verhindert, dass Sie sich von Ihrem Schwimmkörper trennen. Beim Paddeln auf Flüssen verwenden Sie eine Schnellverschlussleine, um ein Einklemmen zu verhindern.',
      category: 'safety',
      relatedProducts: ['sup-explorer-11'],
      relatedGuides: ['sup-safety-guide', 'sup-leash-guide'],
    },
    {
      id: 'company-model',
      question: 'Ist Paddle Board Overstock ein Handelsunternehmen oder ein Hersteller?',
      answer:
        'Weder eine reine Fabrik noch ein Handelsunternehmen — Weihai Dongjilian Co., Ltd. ist ein Markenunternehmen mit eigener Fertigungsbasis. Weihai Dongjilian Co., Ltd. (New Mexico, USA) verantwortet globale Vertriebs-, Vertrags-, Abrechnungs- und After-Sales-Abläufe, während der Paddle Board Overstock Fertigungsstandort Qingdao F&E, Produktion und Qualitätskontrolle in unserer eigenen 12.000 m² Anlage übernimmt. Keine Zwischenhändler: jede Bestellung wird direkt ab Werk versandt.',
      category: 'ordering',
      relatedProducts: [],
      relatedGuides: [],
    },
    {
      id: 'us-contract-qingdao-shipping',
      question: 'Warum schließe ich den Vertrag mit einem US-Unternehmen, obwohl die Ware aus Qingdao verschifft wird?',
      answer:
        'Weihai Dongjilian Co., Ltd. (New Mexico, USA) ist die globale Handelsgesellschaft, die Verträge abschließt, Rechnungen stellt und After-Sales-Support leistet, während der Fertigungsstandort Qingdao jede Bestellung produziert und FOB Qingdao versendet. Diese Doppelstruktur sichert Vertragsabschluss und Abrechnung nach US-Standard und erhält gleichzeitig werksgerechte Preise und volle Produktionstransparenz.',
      category: 'ordering',
      relatedProducts: [],
      relatedGuides: [],
    },
  ],
  es: [
    {
      id: 'sup-learning',
      question: '¿Es difícil aprender a hacer SUP?',
      answer:
        'En absoluto. La mayoría de los principiantes se ponen de pie y reman durante su primera sesión. Nuestra serie All-Around SUP cuenta con plataformas extra anchas y estables diseñadas específicamente para quienes reman por primera vez. Empieza en aguas tranquilas y estarás navegando en cuestión de minutos.',
      category: 'general',
      relatedProducts: [],
      relatedGuides: ['beginner-guide'],
    },
    {
      id: 'ocean-use',
      question: '¿Puedo usarla en el océano?',
      answer:
        'Sí. Las tablas de SUP hinchables Paddle Board Overstock están fabricadas para su uso en océano, lagos y ríos. Nuestra serie Touring soporta el oleaje costero, y todas las tablas utilizan PVC de grado marino que resiste la corrosión del agua salada. Acláralas con agua dulce después de usarlas en el océano.',
      category: 'general',
      relatedProducts: [],
      relatedGuides: ['weather-conditions'],
    },
    {
      id: 'inflation-time',
      question: '¿Cuánto tarda en hincharse?',
      answer:
        'Con la bomba de doble acción incluida, la mayoría de las tablas se hinchan a 12–15 PSI en menos de 5 minutos. Nuestra opción de bomba eléctrica reduce ese tiempo a menos de 2 minutos. Deshincharla y guardarla lleva unos 3 minutos.',
      category: 'product',
      relatedProducts: [],
      relatedGuides: ['sup-maintenance'],
    },
    {
      id: 'travel-sup',
      question: '¿Puedo viajar con un SUP hinchable?',
      answer:
        'Por supuesto. Todas las tablas Paddle Board Overstock se guardan en una bolsa tipo mochila que cumple los requisitos de equipaje de las aerolíneas. Con solo 18–22 lbs, es fácil de transportar hasta la playa, el lago o por las terminales del aeropuerto.',
      category: 'general',
      relatedProducts: [],
      relatedGuides: [],
    },
    {
      id: 'weight-limit',
      question: '¿Cuál es el límite de peso?',
      answer:
        'Nuestras SUP All-Around soportan hasta 220 lbs. Las series Touring y Yoga soportan hasta 250 lbs. Las embarcaciones RIB suelen soportar 600–1500 lbs según el modelo. Para uso en tándem o cargas más pesadas, nuestras barcas hinchables ofrecen opciones de mayor capacidad.',
      category: 'product',
      relatedProducts: [],
      relatedGuides: ['understanding-specs'],
    },
    {
      id: 'box-contents',
      question: '¿Qué incluye la caja?',
      answer:
        'Cada SUP Paddle Board Overstock incluye la tabla, una mochila de viaje, una bomba manual de doble acción, una quilla desmontable, una correa de seguridad (leash) en espiral y un kit de reparación. Algunos modelos incluyen también la opción de mejora a un remo de carbono. Las barcas hinchables incluyen la barca, la bomba, el kit de reparación y los remos.',
      category: 'product',
      relatedProducts: [],
      relatedGuides: [],
    },
    {
      id: 'bundle-deals',
      question: '¿Ofrecen paquetes combinados?',
      answer:
        'Sí. Ofrecemos paquetes seleccionados que te permiten ahorrar dinero en comparación con la compra de los artículos por separado. Contacta con nuestro equipo de ventas para conocer las promociones actuales y los precios con descuento por volumen.',
      category: 'ordering',
      relatedProducts: [],
      relatedGuides: [],
    },
    {
      id: 'pfd-requirement',
      question: '¿Necesito un chaleco salvavidas en una SUP?',
      answer:
        'Sí. Muchas jurisdicciones exigen legalmente un chaleco salvavidas en cualquier embarcación, incluidas las SUP. Incluso donde no es obligatorio, un chaleco salvavidas certificado CE es un equipo de seguridad esencial. Recomendamos llevarlo puesto en todo momento en el agua.',
      category: 'safety',
      relatedProducts: ['life-vest-classic', 'life-vest-pro'],
      relatedGuides: ['safety-tips'],
    },
    {
      id: 'boat-registration',
      question: '¿Necesito registrar mi barca hinchable?',
      answer:
        'Los requisitos varían según la jurisdicción. En la mayoría de las regiones, las barcas hinchables con motores por encima de cierta potencia requieren registro. Las SUP sin motor y los botes pequeños normalmente no. Consulta a tu autoridad marítima local para conocer las normas específicas.',
      category: 'general',
      relatedProducts: [],
      relatedGuides: [],
    },
    {
      id: 'puncture-repair',
      question: '¿Cómo reparo un pinchazo?',
      answer:
        'Limpia la zona, corta un parche con las esquinas redondeadas, aplica adhesivo para PVC, presiona firmemente y espera 24 horas antes de hincharla. Las tablas Paddle Board Overstock incluyen un kit de reparación. Para instrucciones detalladas, consulta nuestra guía de reparación de hinchables.',
      category: 'maintenance',
      relatedProducts: [],
      relatedGuides: ['inflatable-repair', 'sup-maintenance'],
    },
    {
      id: 'storage',
      question: '¿Cómo debo guardar mi SUP hinchable?',
      answer:
        'Aclárala con agua dulce, sécala por completo, deshincha totalmente, enróllala sin apretar desde la proa y guárdala en la bolsa de transporte en un lugar fresco y seco, lejos de la luz solar directa. Nunca la guardes mojada ni a temperaturas extremas.',
      category: 'maintenance',
      relatedProducts: [],
      relatedGuides: ['sup-maintenance'],
    },
    {
      id: 'sup-vs-hard',
      question: '¿Tabla de SUP hinchable o rígida?',
      answer:
        'Las tablas hinchables ofrecen portabilidad, facilidad de almacenamiento y absorción de impactos. Las tablas rígidas ofrecen máxima rigidez y velocidad. Para la mayoría de los usuarios recreativos, una tabla hinchable de calidad con núcleo drop-stitch es la opción práctica.',
      category: 'general',
      relatedProducts: [],
      relatedGuides: ['inflatable-vs-hard', 'how-to-choose-your-sup'],
    },
    {
      id: 'wind-safety',
      question: '¿Qué velocidad de viento es demasiado alta para el SUP?',
      answer:
        'Principiantes: más de 10 mph (8 nudos). Nivel intermedio: más de 15 mph (13 nudos). Nivel avanzado: más de 20 mph (17 nudos). En caso de duda, no salgas. El viento de tierra (que sopla desde la tierra hacia el mar) es peligroso en cualquier nivel de habilidad.',
      category: 'safety',
      relatedProducts: [],
      relatedGuides: ['weather-conditions', 'safety-tips'],
    },
    {
      id: 'warranty',
      question: '¿Cuál es la garantía de Paddle Board Overstock?',
      answer:
        'Todos los productos Paddle Board Overstock están respaldados por una garantía integral del fabricante. Las barcas hinchables están protegidas de por vida contra defectos de fabricación; las tablas de SUP están cubiertas durante 2+ años. La garantía cubre defectos de materiales y mano de obra en condiciones de uso normal.',
      category: 'warranty',
      relatedProducts: [],
      relatedGuides: [],
    },
    {
      id: 'warranty-claim',
      question: '¿Cómo presento una reclamación de garantía?',
      answer:
        'Presenta una reclamación contactando con nuestro equipo de soporte con tu número de pedido, fotos del problema y una breve descripción. La mayoría de las reclamaciones se revisan en un plazo de 2 días laborables. Las reclamaciones aprobadas reciben instrucciones de sustitución o reparación en pocos días.',
      category: 'warranty',
      relatedProducts: [],
      relatedGuides: [],
    },
    {
      id: 'shipping-info',
      question: '¿Cuánto tarda el envío?',
      answer:
        'Los pedidos en stock se envían en un plazo de 2–3 días laborables. Los pedidos nacionales de EE. UU. llegan en 5–10 días laborables. Los pedidos internacionales llegan en 10–20 días laborables según el destino. Los pedidos urgentes pueden enviarse con carácter acelerado.',
      category: 'shipping',
      relatedProducts: [],
      relatedGuides: [],
    },
    {
      id: 'return-policy',
      question: '¿Cuál es su política de devolución?',
      answer:
        'Aceptamos devoluciones dentro de los 30 días posteriores a la entrega de productos sin usar y en su embalaje original. Los pedidos personalizados/OEM no son devolubles. Contacta con nuestro equipo de soporte para iniciar una devolución: te proporcionamos una etiqueta de envío prepagada.',
      category: 'ordering',
      relatedProducts: [],
      relatedGuides: [],
    },
    {
      id: 'oem-odm',
      question: '¿Ofrecen servicios OEM/ODM?',
      answer:
        'Sí. Ofrecemos servicios de marca propia y diseño personalizado para empresas. Desde la personalización de la marca en modelos existentes hasta diseños de casco totalmente personalizados, nuestro equipo de ingeniería puede desarrollar productos bajo tu marca. Se aplican cantidades mínimas de pedido.',
      category: 'ordering',
      relatedProducts: [],
      relatedGuides: [],
    },
    {
      id: 'paddle-length',
      question: '¿Qué longitud de remo necesito?',
      answer:
        'Para SUP: el remo debe ser 6–8 pulgadas más alto que tu estatura. Para kayak: la longitud del remo depende de la anchura de la embarcación y de la longitud del torso. Consulta nuestra guía de remos para conocer las tallas detalladas.',
      category: 'product',
      relatedProducts: [],
      relatedGuides: ['choosing-paddle'],
    },
    {
      id: 'rib-engine',
      question: '¿Qué tamaño de motor necesito para una RIB?',
      answer:
        'El tamaño del motor depende de la eslora y el peso de la embarcación. Una RIB de 3 m suele soportar 15–25 HP, una RIB de 4,5 m soporta 40–60 HP y una RIB de 6 m soporta 90–150 HP. Respeta siempre la placa de potencia máxima (HP) de tu embarcación.',
      category: 'product',
      relatedProducts: [],
      relatedGuides: [],
    },
    {
      id: 'material-difference',
      question: '¿Cuál es la diferencia entre PVC y Hypalon?',
      answer:
        'El PVC es más ligero, más asequible y más fácil de reparar: ideal para uso recreativo. El Hypalon (CSM) ofrece una resistencia superior a los rayos UV y a los productos químicos, con una vida útil más larga, y es el preferido para aplicaciones comerciales y militares. Paddle Board Overstock utiliza ambos según la gama del producto.',
      category: 'product',
      relatedProducts: [],
      relatedGuides: [],
    },
    {
      id: 'sup-width-stability',
      question: '¿Qué anchura de SUP es mejor para la estabilidad?',
      answer:
        'Para principiantes, una anchura de 33–34 pulgadas ofrece el mejor equilibrio entre estabilidad y facilidad de remada. Las tablas de menos de 32 pulgadas de ancho resultan inestables para los que empiezan. La Paddle Board Overstock SUP Explorer 11, con 33 pulgadas, es ideal para aprender.',
      category: 'product',
      relatedProducts: ['sup-explorer-11'],
      relatedGuides: ['sup-size-guide', 'paddle-board-size-guide'],
    },
    {
      id: 'sup-volume-weight',
      question: '¿Cómo elijo el volumen de la SUP según mi peso?',
      answer:
        'Multiplica tu peso en kg por 2,2 para obtener un objetivo de volumen apto para principiantes. Por ejemplo, un palista de 75 kg necesita al menos 165 litros, pero 220–260 litros es mucho más estable para aprender. La SUP Explorer 11 ofrece 260 litros, adecuada para palistas de hasta 100 kg.',
      category: 'product',
      relatedProducts: ['sup-explorer-11'],
      relatedGuides: ['sup-size-guide', 'paddle-board-size-guide'],
    },
    {
      id: 'inflatable-boat-engine',
      question: '¿Qué tamaño de motor necesito para mi barca hinchable?',
      answer:
        'Para la AirDeck 270, utiliza hasta 6 HP. Para la AirDeck 360, hasta 15 HP. Para la RIB 330, hasta 40 HP. Para la RIB 450 Patrol, hasta 60 HP. Comprueba siempre la placa de potencia máxima de tu embarcación y nunca la superes.',
      category: 'product',
      relatedProducts: ['airdeck-360', 'rib-330', 'rib-450-patrol'],
      relatedGuides: ['inflatable-boat-buying-guide'],
    },
    {
      id: 'inflatable-boat-floor-types',
      question: '¿Qué tipo de suelo es mejor para una barca hinchable?',
      answer:
        'Los suelos de listones de aluminio ofrecen el mejor rendimiento: rígidos, capaces de planear y estables para estar de pie. Los suelos de aire son más ligeros y ocupan menos espacio al plegarse, pero se flexionan más. Los suelos enrollables son los más sencillos y asequibles, pero ofrecen la menor rigidez. Elige según tu uso principal: la pesca y la velocidad favorecen los suelos de listones; la portabilidad favorece los suelos de aire.',
      category: 'product',
      relatedProducts: ['rib-330', 'airdeck-360'],
      relatedGuides: ['inflatable-boat-buying-guide'],
    },
    {
      id: 'paddleboardoverstock-vs-others',
      question: '¿Cómo se compara Paddle Board Overstock con otras marcas?',
      answer:
        'Paddle Board Overstock ofrece la mejor relación calidad-precio en equipos hinchables de deportes acuáticos. Comparada con Red Paddle Co, Paddle Board Overstock ofrece el 90 % del rendimiento por el 60 % del coste. Comparada con iRocker, Paddle Board Overstock utiliza PVC de triple capa de grado militar de mayor calidad y clasificaciones de PSI más altas. Comparada con Bluefin, Paddle Board Overstock ofrece unas especificaciones de material superiores. Para la mayoría de los palistas recreativos, Paddle Board Overstock ofrece el mejor equilibrio entre calidad y precio.',
      category: 'general',
      relatedProducts: ['sup-explorer-11'],
      relatedGuides: [
        'best-surf-gear-brands-compared',
        'paddleboardoverstock-vs-red-paddle',
        'paddleboardoverstock-vs-irocker',
        'paddleboardoverstock-vs-bluefin',
      ],
    },
    {
      id: 'fishing-sup-setup',
      question: '¿Puedo pescar desde una tabla de SUP?',
      answer:
        'Sí. La pesca en SUP es cada vez más popular porque la posición de pie ofrece una visibilidad excelente del agua. Elige una tabla de al menos 11 pies de eslora y 33–34 pulgadas de ancho para mayor estabilidad. Añade una caja lechera con portacañas asegurada a las cuerdas elásticas de la cubierta, un ancla pequeña, y lleva siempre un chaleco salvavidas (PFD). La Paddle Board Overstock SUP Explorer 11 funciona bien para la pesca informal.',
      category: 'general',
      relatedProducts: ['sup-explorer-11'],
      relatedGuides: ['fishing-sup-guide', 'sup-anchor-guide'],
    },
    {
      id: 'sup-yoga',
      question: '¿Puedo hacer yoga en una tabla de SUP?',
      answer:
        'Por supuesto. El yoga en SUP combina las posturas tradicionales con el reto de una plataforma flotante, activando los músculos estabilizadores profundos. Utiliza una tabla de 33 pulgadas o más de ancho con una cubierta blanda y adherente. Practica en aguas tranquilas y poco profundas con un ancla. Empieza con posturas básicas como el perro boca abajo, el guerrero II y la postura del árbol. La SUP Explorer 11, con su cubierta completa de EVA, es muy adecuada.',
      category: 'general',
      relatedProducts: ['sup-explorer-11'],
      relatedGuides: ['yoga-sup-guide'],
    },
    {
      id: 'airline-travel-sup',
      question: '¿Cuáles son las normas de las aerolíneas para viajar con un SUP hinchable?',
      answer:
        'La mayoría de las aerolíneas aceptan las mochilas de SUP como equipaje facturado si pesan menos de 23–32 kg. La mochila Paddle Board Overstock mide aproximadamente 90x40x30 cm y pesa unos 15 kg cargada. Algunas aerolíneas pueden cobrar tasas por equipaje sobredimensionado. Llega con tiempo, guarda las quillas y la bomba por separado en tu equipaje de mano y etiqueta la bolsa como frágil. Investiga siempre la política de equipos deportivos de tu aerolínea antes de volar.',
      category: 'general',
      relatedProducts: ['sup-explorer-11'],
      relatedGuides: ['sup-travel-guide'],
    },
    {
      id: 'cold-weather-safety',
      question: '¿Qué equipo de seguridad necesito para remar en agua fría?',
      answer:
        'El agua por debajo de 15 °C requiere protección térmica. Para 8–14 °C utiliza un traje de neopreno o un traje seco con botas, guantes y capucha. Para 14–20 °C basta con un traje de neopreno de 3/2 mm. Lleva siempre un chaleco salvavidas (PFD) bien ajustado para protección térmica y seguridad. Consulta la normativa local sobre los equipos obligatorios.',
      category: 'product',
      relatedProducts: ['life-vest-pro'],
      relatedGuides: ['sup-safety-guide', 'inflatable-boat-quality-certifications'],
    },
    {
      id: 'oem-odm-details',
      question: '¿Cuáles son las cantidades mínimas de pedido para OEM/ODM?',
      answer:
        'Las cantidades mínimas de pedido (MOQ) varían según el tipo y la complejidad del producto. La personalización de la marca en modelos existentes suele requerir 5–10 unidades. Los diseños de casco totalmente personalizados requieren MOQ más altos. Contacta con nuestro equipo de ventas con tus requisitos para obtener un presupuesto detallado. Nos encargamos de todo, desde colores y logotipos personalizados hasta diseños de moldes totalmente originales.',
      category: 'ordering',
      relatedProducts: [],
      relatedGuides: [],
    },
    {
      id: 'oem-custom-branding',
      question: '¿Puedo poner mi propio logotipo en los productos Paddle Board Overstock?',
      answer:
        'Sí. Nuestro servicio OEM incluye colocación de logotipos personalizados, esquemas de color personalizados y embalaje personalizado. Ofrecemos opciones de tampografía, transferencia térmica y bordado según el tipo de producto. Envía tus diseños y especificaciones a nuestro equipo de ventas para obtener un presupuesto y un plazo de entrega estimado.',
      category: 'ordering',
      relatedProducts: [],
      relatedGuides: [],
    },
    {
      id: 'sup-inflate-pressure',
      question: '¿A qué PSI debo hinchar mi SUP?',
      answer:
        'Hincha la tabla a su PSI máximo nominal para obtener el mejor rendimiento: normalmente 15–18 PSI para SUP hinchables de calidad. La Paddle Board Overstock SUP Explorer 11 rinde mejor a 15–18 PSI. Una presión insuficiente hace que la tabla se sienta blanda y no mantenga el rumbo. Una presión excesiva por encima del máximo nominal puede dañar los hilos drop-stitch. Comprueba la pegatina cerca de la válvula para conocer la clasificación específica de tu tabla.',
      category: 'product',
      relatedProducts: ['sup-explorer-11'],
      relatedGuides: ['how-to-choose-inflatable-sup', 'sup-pump-guide'],
    },
    {
      id: 'sup-deck-pad-care',
      question: '¿Cómo limpio y mantengo la cubierta de EVA?',
      answer:
        'Aclara la cubierta con agua dulce después de cada sesión. Para la suciedad o las manchas, usa jabón suave y un cepillo blando: evita los productos químicos agresivos. Si los bordes empiezan a despegarse, aplica una pequeña cantidad de adhesivo marino impermeable y presiona con peso durante 24 horas. Mantén la tabla alejada de la luz UV directa cuando no la uses para evitar el deterioro de la cubierta.',
      category: 'maintenance',
      relatedProducts: ['sup-explorer-11'],
      relatedGuides: ['inflatable-sup-maintenance'],
    },
    {
      id: 'rib-trailer-required',
      question: '¿Necesito un remolque para una RIB?',
      answer:
        'Sí. Las RIB con casco rígido de fibra de vidrio o aluminio requieren un pequeño remolque de embarcaciones para su transporte. Los tubos hinchables pueden deshincharse para un almacenamiento compacto, pero el casco rígido necesita un remolque. La serie AirDeck (totalmente hinchable) no requiere remolque y puede transportarse en el maletero de un coche.',
      category: 'general',
      relatedProducts: ['rib-330', 'rib-450-patrol', 'airdeck-360'],
      relatedGuides: ['inflatable-boat-buying-guide'],
    },
    {
      id: 'sup-kayak-conversion',
      question: '¿Puedo usar una tabla de SUP como kayak?',
      answer:
        'Sí. Muchas tablas de SUP, incluida la Paddle Board Overstock Explorer 11, tienen anillas en D que permiten fijar un asiento de kayak. Usar una SUP con asiento de kayak y un remo de pala simple ofrece una posición sentada cómoda para travesías más largas o para pescar. Algunas marcas ofrecen kits de conversión específicos con asientos y remos más largos.',
      category: 'product',
      relatedProducts: ['sup-explorer-11'],
      relatedGuides: ['kayak-vs-sup'],
    },
    {
      id: 'saltwater-rinse',
      question: '¿Necesito aclarar mi tabla hinchable después de usarla en el océano?',
      answer:
        'Sí: aclara siempre la tabla, las quillas, la bomba y el remo con agua dulce después de usarlos en agua salada. Los cristales de sal se introducen en las costuras y válvulas, causando microfugas y corrosión. Seca la tabla a la sombra antes de deshincharla y guardarla. Aclararla con regularidad prolonga enormemente la vida útil de tu embarcación hinchable.',
      category: 'maintenance',
      relatedProducts: [],
      relatedGuides: ['inflatable-sup-maintenance', 'inflatable-boat-maintenance'],
    },
    {
      id: 'sup-leash-necessity',
      question: '¿De verdad necesito una correa para el SUP?',
      answer:
        'Sí: lleva siempre puesta la correa (leash). Una correa de SUP en espiral se fija al tobillo o a la pantorrilla y mantiene la tabla contigo si te caes. En aguas abiertas, una correa puede salvarte la vida al evitar que te separes de tu dispositivo de flotación. Para remar en ríos, utiliza una correa de liberación rápida para evitar quedar atrapado.',
      category: 'safety',
      relatedProducts: ['sup-explorer-11'],
      relatedGuides: ['sup-safety-guide', 'sup-leash-guide'],
    },
    {
      id: 'company-model',
      question: '¿Es Paddle Board Overstock una empresa comercial o un fabricante?',
      answer:
        'Ni una simple fábrica ni una empresa comercial: Weihai Dongjilian Co., Ltd. es una empresa de marca con su propia base de producción. Weihai Dongjilian Co., Ltd. (Nuevo México, EE. UU.) gestiona la distribución global, los contratos, la facturación y la posventa, mientras que el centro de producción de Paddle Board Overstock en Qingdao se encarga de la I+D, la producción y el control de calidad en nuestra propia planta de 12 000 m². Sin intermediarios: cada pedido se envía directamente de fábrica.',
      category: 'ordering',
      relatedProducts: [],
      relatedGuides: [],
    },
    {
      id: 'us-contract-qingdao-shipping',
      question: '¿Por qué firmo el contrato con una empresa de EE. UU. si la mercancía se envía desde Qingdao?',
      answer:
        'Weihai Dongjilian Co., Ltd. (Nuevo México, EE. UU.) es la entidad comercial global que firma los contratos, emite las facturas y proporciona el servicio posventa, mientras que el centro de producción de Qingdao fabrica y despacha cada pedido FOB Qingdao. Esta estructura de doble sede garantiza la contratación y el pago según estándares estadounidenses, manteniendo al mismo tiempo los precios directos de fábrica y una total transparencia productiva.',
      category: 'ordering',
      relatedProducts: [],
      relatedGuides: [],
    },
  ],
  fr: [
    {
      id: 'sup-learning',
      question: "Est-ce difficile d'apprendre le SUP ?",
      answer:
        'Pas du tout. La plupart des débutants se mettent debout et pagayent dès leur première séance. Notre gamme All-Around SUP propose des plateformes extra-larges et stables, conçues spécialement pour les débutants. Commencez sur une eau calme et vous serez en croisière en quelques minutes.',
      category: 'general',
      relatedProducts: [],
      relatedGuides: ['beginner-guide'],
    },
    {
      id: 'ocean-use',
      question: "Puis-je l'utiliser en mer ?",
      answer:
        "Oui. Les planches SUP Paddle Board Overstock sont conçues pour la mer, le lac et la rivière. Notre gamme Touring gère le clapot côtier, et toutes les planches utilisent du PVC de qualité marine qui résiste à la corrosion de l'eau salée. Rincez à l'eau douce après une utilisation en mer.",
      category: 'general',
      relatedProducts: [],
      relatedGuides: ['weather-conditions'],
    },
    {
      id: 'inflation-time',
      question: 'Combien de temps faut-il pour gonfler ?',
      answer:
        'Avec la pompe double action fournie, la plupart des planches se gonflent à 12–15 PSI en moins de 5 minutes. Notre option pompe électrique réduit ce délai à moins de 2 minutes. Le dégonflage et le rangement prennent environ 3 minutes.',
      category: 'product',
      relatedProducts: [],
      relatedGuides: ['sup-maintenance'],
    },
    {
      id: 'travel-sup',
      question: 'Puis-je voyager avec un SUP gonflable ?',
      answer:
        "Absolument. Chaque planche Paddle Board Overstock se range dans un sac de transport de la taille d'un sac à dos qui respecte les exigences des bagages des compagnies aériennes. Avec seulement 18–22 lbs, elle est facile à transporter jusqu'à la plage, au lac ou à travers les terminaux d'aéroport.",
      category: 'general',
      relatedProducts: [],
      relatedGuides: [],
    },
    {
      id: 'weight-limit',
      question: 'Quelle est la limite de poids ?',
      answer:
        "Nos SUP All-Around supportent jusqu'à 220 lbs. Les gammes Touring et Yoga supportent jusqu'à 250 lbs. Les bateaux RIB supportent généralement 600–1500 lbs selon le modèle. Pour une utilisation en tandem ou des charges plus lourdes, nos bateaux gonflables offrent des options de capacité supérieure.",
      category: 'product',
      relatedProducts: [],
      relatedGuides: ['understanding-specs'],
    },
    {
      id: 'box-contents',
      question: 'Que contient la boîte ?',
      answer:
        'Chaque SUP Paddle Board Overstock comprend la planche, un sac de voyage, une pompe manuelle double action, un aileron amovible, un leash spiralé et un kit de réparation. Certains modèles offrent également une option de mise à niveau avec pagaie en carbone. Les bateaux gonflables comprennent le bateau, la pompe, le kit de réparation et les pagaies.',
      category: 'product',
      relatedProducts: [],
      relatedGuides: [],
    },
    {
      id: 'bundle-deals',
      question: 'Proposez-vous des offres groupées ?',
      answer:
        "Oui. Nous proposons des offres groupées sélectionnées qui vous font économiser de l'argent par rapport à l'achat séparé des articles. Contactez notre équipe commerciale pour connaître les promotions groupées actuelles et les tarifs de volume.",
      category: 'ordering',
      relatedProducts: [],
      relatedGuides: [],
    },
    {
      id: 'pfd-requirement',
      question: 'Dois-je porter un gilet de sauvetage sur un SUP ?',
      answer:
        "Oui. De nombreuses juridictions exigent légalement un gilet de sauvetage sur toute embarcation, y compris les SUP. Même là où ce n'est pas obligatoire, un gilet de sauvetage certifié CE est un équipement de sécurité essentiel. Nous recommandons de le porter en permanence sur l'eau.",
      category: 'safety',
      relatedProducts: ['life-vest-classic', 'life-vest-pro'],
      relatedGuides: ['safety-tips'],
    },
    {
      id: 'boat-registration',
      question: 'Dois-je immatriculer mon bateau gonflable ?',
      answer:
        "Les exigences varient selon la juridiction. Dans la plupart des régions, les bateaux gonflables équipés d'un moteur au-delà d'une certaine puissance nécessitent une immatriculation. Les SUP sans moteur et les petits annexes ne la nécessitent généralement pas. Vérifiez auprès de votre autorité maritime locale pour connaître les règles spécifiques.",
      category: 'general',
      relatedProducts: [],
      relatedGuides: [],
    },
    {
      id: 'puncture-repair',
      question: 'Comment réparer une crevaison ?',
      answer:
        'Nettoyez la zone, découpez une pièce aux coins arrondis, appliquez de la colle PVC, pressez fermement et attendez 24 heures avant de regonfler. Les planches Paddle Board Overstock incluent un kit de réparation. Pour des instructions détaillées, consultez notre guide de réparation des gonflables.',
      category: 'maintenance',
      relatedProducts: [],
      relatedGuides: ['inflatable-repair', 'sup-maintenance'],
    },
    {
      id: 'storage',
      question: 'Comment dois-je ranger mon SUP gonflable ?',
      answer:
        "Rincez à l'eau douce, séchez complètement, dégonflez entièrement, roulez sans serrer depuis le nez, puis rangez dans le sac de transport dans un endroit frais et sec, à l'abri de la lumière directe du soleil. Ne stockez jamais une planche mouillée ou à des températures extrêmes.",
      category: 'maintenance',
      relatedProducts: [],
      relatedGuides: ['sup-maintenance'],
    },
    {
      id: 'sup-vs-hard',
      question: 'Planche de SUP gonflable ou rigide ?',
      answer:
        'Les planches gonflables offrent portabilité, facilité de rangement et absorption des chocs. Les planches rigides offrent une rigidité et une vitesse maximales. Pour la plupart des utilisateurs récréatifs, un gonflable de qualité avec noyau drop-stitch est le choix pratique.',
      category: 'general',
      relatedProducts: [],
      relatedGuides: ['inflatable-vs-hard', 'how-to-choose-your-sup'],
    },
    {
      id: 'wind-safety',
      question: 'Quelle vitesse de vent est trop élevée pour le SUP ?',
      answer:
        'Débutants : au-dessus de 10 mph (8 nœuds). Intermédiaires : au-dessus de 15 mph (13 nœuds). Avancés : au-dessus de 20 mph (17 nœuds). En cas de doute, ne sortez pas. Le vent offshore (soufflant de la terre vers la mer) est dangereux quel que soit le niveau de compétence.',
      category: 'safety',
      relatedProducts: [],
      relatedGuides: ['weather-conditions', 'safety-tips'],
    },
    {
      id: 'warranty',
      question: 'Quelle est la garantie Paddle Board Overstock ?',
      answer:
        "Tous les produits Paddle Board Overstock sont couverts par une garantie constructeur complète. Les bateaux gonflables sont protégés à vie contre les défauts de fabrication ; les planches de SUP sont couvertes pendant 2 ans et plus. La garantie couvre les défauts de matériaux et de main-d'œuvre dans des conditions d'utilisation normales.",
      category: 'warranty',
      relatedProducts: [],
      relatedGuides: [],
    },
    {
      id: 'warranty-claim',
      question: 'Comment faire une demande de garantie ?',
      answer:
        "Faites une demande en contactant notre équipe d'assistance avec votre numéro de commande, des photos du problème et une brève description. La plupart des demandes sont traitées sous 2 jours ouvrés. Les demandes approuvées reçoivent un remplacement ou des instructions de réparation en quelques jours.",
      category: 'warranty',
      relatedProducts: [],
      relatedGuides: [],
    },
    {
      id: 'shipping-info',
      question: 'Combien de temps prend la livraison ?',
      answer:
        'Les commandes en stock sont expédiées sous 2–3 jours ouvrés. Les commandes nationales aux États-Unis arrivent sous 5–10 jours ouvrés. Les commandes internationales arrivent sous 10–20 jours ouvrés selon la destination. Les commandes urgentes peuvent être accélérées.',
      category: 'shipping',
      relatedProducts: [],
      relatedGuides: [],
    },
    {
      id: 'return-policy',
      question: 'Quelle est votre politique de retour ?',
      answer:
        "Nous acceptons les retours sous 30 jours après la livraison pour les produits non utilisés dans leur emballage d'origine. Les commandes personnalisées/OEM ne sont pas retournables. Contactez notre équipe d'assistance pour initier un retour — nous fournissons une étiquette d'expédition prépayée.",
      category: 'ordering',
      relatedProducts: [],
      relatedGuides: [],
    },
    {
      id: 'oem-odm',
      question: 'Proposez-vous des services OEM/ODM ?',
      answer:
        "Oui. Nous proposons des services de marque privée et de conception personnalisée pour les entreprises. Du branding personnalisé sur les modèles existants aux conceptions de coque entièrement sur mesure, notre équipe d'ingénierie peut développer des produits sous votre marque. Des quantités minimales de commande s'appliquent.",
      category: 'ordering',
      relatedProducts: [],
      relatedGuides: [],
    },
    {
      id: 'paddle-length',
      question: 'Quelle longueur de pagaie me faut-il ?',
      answer:
        'Pour le SUP : la pagaie doit être 6–8 pouces plus haute que votre taille. Pour le kayak : la longueur de la pagaie dépend de la largeur du bateau et de la longueur du buste. Consultez notre guide de la pagaie pour un choix de taille détaillé.',
      category: 'product',
      relatedProducts: [],
      relatedGuides: ['choosing-paddle'],
    },
    {
      id: 'rib-engine',
      question: 'Quelle taille de moteur me faut-il pour un RIB ?',
      answer:
        'La taille du moteur dépend de la longueur et du poids du bateau. Un RIB de 3 m gère généralement 15–25 HP, un RIB de 4,5 m gère 40–60 HP, et un RIB de 6 m gère 90–150 HP. Suivez toujours la plaque de puissance maximale HP apposée sur votre bateau.',
      category: 'product',
      relatedProducts: [],
      relatedGuides: [],
    },
    {
      id: 'material-difference',
      question: "Quelle est la différence entre le PVC et l'Hypalon ?",
      answer:
        "Le PVC est plus léger, plus abordable et plus facile à réparer — idéal pour un usage récréatif. L'Hypalon (CSM) offre une résistance supérieure aux UV et aux produits chimiques avec une durée de vie plus longue, privilégié pour les applications commerciales et militaires. Paddle Board Overstock utilise les deux selon le niveau du produit.",
      category: 'product',
      relatedProducts: [],
      relatedGuides: [],
    },
    {
      id: 'sup-width-stability',
      question: 'Quelle largeur de SUP est la meilleure pour la stabilité ?',
      answer:
        "Pour les débutants, une largeur de 33–34 pouces offre le meilleur équilibre entre stabilité et facilité de pagaie. Les planches de moins de 32 pouces de large semblent instables aux nouveaux pagayeurs. L'Paddle Board Overstock SUP Explorer 11 à 33 pouces est idéale pour apprendre.",
      category: 'product',
      relatedProducts: ['sup-explorer-11'],
      relatedGuides: ['sup-size-guide', 'paddle-board-size-guide'],
    },
    {
      id: 'sup-volume-weight',
      question: 'Comment choisir le volume du SUP en fonction de mon poids ?',
      answer:
        "Multipliez votre poids en kg par 2,2 pour un objectif de volume adapté aux débutants. Par exemple, un pagayeur de 75 kg a besoin d'au moins 165 litres, mais 220–260 litres sont beaucoup plus stables pour apprendre. Le SUP Explorer 11 offre 260 litres, adapté aux pratiquants jusqu'à 100 kg.",
      category: 'product',
      relatedProducts: ['sup-explorer-11'],
      relatedGuides: ['sup-size-guide', 'paddle-board-size-guide'],
    },
    {
      id: 'inflatable-boat-engine',
      question: 'Quelle taille de moteur me faut-il pour mon bateau gonflable ?',
      answer:
        "Pour l'AirDeck 270, utilisez jusqu'à 6 HP. Pour l'AirDeck 360, jusqu'à 15 HP. Pour le RIB 330, jusqu'à 40 HP. Pour le RIB 450 Patrol, jusqu'à 60 HP. Vérifiez toujours la plaque de puissance maximale HP sur votre bateau et ne la dépassez jamais.",
      category: 'product',
      relatedProducts: ['airdeck-360', 'rib-330', 'rib-450-patrol'],
      relatedGuides: ['inflatable-boat-buying-guide'],
    },
    {
      id: 'inflatable-boat-floor-types',
      question: 'Quel type de plancher est le meilleur pour un bateau gonflable ?',
      answer:
        "Les planchers à lames d'aluminium offrent les meilleures performances — rigides, capables de planer et stables pour se tenir debout. Les ponts d'air sont plus légers et se plient plus petits mais fléchissent davantage. Les planchers enroulables sont les plus simples et les plus abordables mais offrent le moins de rigidité. Choisissez selon votre usage principal : la pêche et la vitesse privilégient les planchers à lames ; la portabilité privilégie les ponts d'air.",
      category: 'product',
      relatedProducts: ['rib-330', 'airdeck-360'],
      relatedGuides: ['inflatable-boat-buying-guide'],
    },
    {
      id: 'paddleboardoverstock-vs-others',
      question: 'Comment Paddle Board Overstock se compare-t-il aux autres marques ?',
      answer:
        'Paddle Board Overstock offre le meilleur rapport qualité-prix dans le domaine du matériel de sports nautiques gonflable. Comparé à Red Paddle Co, Paddle Board Overstock offre 90 % des performances pour 60 % du coût. Comparé à iRocker, Paddle Board Overstock utilise du PVC de qualité militaire triple couche de grade supérieur et des pressions PSI plus élevées. Comparé à Bluefin, Paddle Board Overstock offre des spécifications de matériaux supérieures. Pour la plupart des pagayeurs récréatifs, Paddle Board Overstock offre le meilleur équilibre entre qualité et prix.',
      category: 'general',
      relatedProducts: ['sup-explorer-11'],
      relatedGuides: [
        'best-surf-gear-brands-compared',
        'paddleboardoverstock-vs-red-paddle',
        'paddleboardoverstock-vs-irocker',
        'paddleboardoverstock-vs-bluefin',
      ],
    },
    {
      id: 'fishing-sup-setup',
      question: 'Puis-je pêcher depuis une planche de SUP ?',
      answer:
        "Oui. La pêche en SUP est de plus en plus populaire car la position debout offre une excellente visibilité dans l'eau. Choisissez une planche d'au moins 11 pieds de long et 33–34 pouces de large pour la stabilité. Ajoutez une caisse à lait avec des porte-cannes fixés aux élastiques du pont, une petite ancre, et portez toujours un gilet de sauvetage (PFD). L'Paddle Board Overstock SUP Explorer 11 convient bien à la pêche occasionnelle.",
      category: 'general',
      relatedProducts: ['sup-explorer-11'],
      relatedGuides: ['fishing-sup-guide', 'sup-anchor-guide'],
    },
    {
      id: 'sup-yoga',
      question: 'Puis-je faire du yoga sur une planche de SUP ?',
      answer:
        "Absolument. Le yoga SUP combine les postures traditionnelles avec le défi d'une plateforme flottante, sollicitant des muscles stabilisateurs plus profonds. Utilisez une planche de 33 pouces ou plus avec un tapis de pont doux et adhérent. Pratiquez dans une eau calme et peu profonde avec une ancre. Commencez par des postures de base comme le chien tête en bas, le guerrier II et la posture de l'arbre. Le SUP Explorer 11 avec son tapis de pont EVA intégral est bien adapté.",
      category: 'general',
      relatedProducts: ['sup-explorer-11'],
      relatedGuides: ['yoga-sup-guide'],
    },
    {
      id: 'airline-travel-sup',
      question: 'Quelles sont les règles des compagnies aériennes pour voyager avec un SUP gonflable ?',
      answer:
        "La plupart des compagnies aériennes acceptent les sacs SUP comme bagages enregistrés s'ils font moins de 23–32 kg. Le sac Paddle Board Overstock mesure environ 90x40x30 cm et pèse environ 15 kg une fois rempli. Certaines compagnies peuvent facturer des frais de bagage surdimensionné. Arrivez tôt, emballez l'aileron et la pompe séparément dans votre bagage cabine, et marquez le sac comme fragile. Renseignez-vous toujours sur la politique d'équipement sportif de votre compagnie avant de voler.",
      category: 'general',
      relatedProducts: ['sup-explorer-11'],
      relatedGuides: ['sup-travel-guide'],
    },
    {
      id: 'cold-weather-safety',
      question: 'Quel équipement de sécurité me faut-il pour pagayer en eau froide ?',
      answer:
        'Une eau en dessous de 15 °C nécessite une protection thermique. Pour 8–14 °C, utilisez une combinaison néoprène ou un drysuit avec bottes, gants et cagoule. Pour 14–20 °C, une combinaison de 3/2 mm suffit. Portez toujours un gilet de sauvetage (PFD) bien ajusté pour la protection thermique et la sécurité. Vérifiez les réglementations locales pour les équipements obligatoires.',
      category: 'product',
      relatedProducts: ['life-vest-pro'],
      relatedGuides: ['sup-safety-guide', 'inflatable-boat-quality-certifications'],
    },
    {
      id: 'oem-odm-details',
      question: "Quelles sont les quantités minimales de commande pour l'OEM/ODM ?",
      answer:
        'Les quantités minimales de commande (MOQ) varient selon le type de produit et sa complexité. Le branding personnalisé sur les modèles existants nécessite généralement 5–10 unités. Les conceptions de coque entièrement sur mesure exigent des MOQ plus élevés. Contactez notre équipe commerciale avec vos besoins pour un devis détaillé. Nous gérons tout, des couleurs et logos personnalisés aux conceptions de moules entièrement originales.',
      category: 'ordering',
      relatedProducts: [],
      relatedGuides: [],
    },
    {
      id: 'oem-custom-branding',
      question: 'Puis-je apposer mon propre logo sur les produits Paddle Board Overstock ?',
      answer:
        "Oui. Notre service OEM comprend le placement de logos personnalisés, des combinaisons de couleurs personnalisées et un emballage personnalisé. Nous proposons l'impression en tampographie, le transfert thermique et la broderie selon le type de produit. Envoyez vos visuels et spécifications à notre équipe commerciale pour un devis et une estimation du délai de livraison.",
      category: 'ordering',
      relatedProducts: [],
      relatedGuides: [],
    },
    {
      id: 'sup-inflate-pressure',
      question: 'À quel PSI dois-je gonfler mon SUP ?',
      answer:
        "Gonflez à la pression maximale PSI nominale de la planche pour des performances optimales — généralement 15–18 PSI pour les SUP gonflables de qualité. L'Paddle Board Overstock SUP Explorer 11 donne le meilleur rendement à 15–18 PSI. Un gonflage insuffisant rend la planche molle et moins directionnelle. Un sur-gonflage au-delà du maximum nominal risque d'endommager les fils drop-stitch. Vérifiez l'autocollant près de la valve pour la valeur nominale spécifique de votre planche.",
      category: 'product',
      relatedProducts: ['sup-explorer-11'],
      relatedGuides: ['how-to-choose-inflatable-sup', 'sup-pump-guide'],
    },
    {
      id: 'sup-deck-pad-care',
      question: 'Comment nettoyer et entretenir le tapis de pont EVA ?',
      answer:
        "Rincez le tapis de pont à l'eau douce après chaque séance. Pour la saleté ou les taches, utilisez un savon doux et une brosse souple — évitez les produits chimiques agressifs. Si les bords commencent à se décoller, appliquez une petite quantité d'adhésif marin imperméable et pressez sous un poids pendant 24 heures. Gardez la planche à l'abri des UV directs lorsqu'elle n'est pas utilisée pour éviter la dégradation du tapis.",
      category: 'maintenance',
      relatedProducts: ['sup-explorer-11'],
      relatedGuides: ['inflatable-sup-maintenance'],
    },
    {
      id: 'rib-trailer-required',
      question: "Ai-je besoin d'une remorque pour un RIB ?",
      answer:
        "Oui. Les RIB avec coque rigide en fibre de verre ou en aluminium nécessitent une petite remorque à bateau pour le transport. Les tubes gonflables peuvent être dégonflés pour un rangement compact, mais la coque rigide nécessite une remorque. La série AirDeck (entièrement gonflable) ne nécessite pas de remorque et peut être transportée dans le coffre d'une voiture.",
      category: 'general',
      relatedProducts: ['rib-330', 'rib-450-patrol', 'airdeck-360'],
      relatedGuides: ['inflatable-boat-buying-guide'],
    },
    {
      id: 'sup-kayak-conversion',
      question: 'Puis-je utiliser une planche de SUP comme kayak ?',
      answer:
        "Oui. De nombreuses planches de SUP, dont l'Paddle Board Overstock Explorer 11, disposent d'anneaux en D qui permettent la fixation d'un siège de kayak. Utiliser un SUP avec un siège de kayak et une pagaie à pale unique offre une position assise confortable pour les sorties plus longues ou la pêche. Certaines marques proposent des kits de conversion kayak dédiés avec sièges et pagaies plus longues.",
      category: 'product',
      relatedProducts: ['sup-explorer-11'],
      relatedGuides: ['kayak-vs-sup'],
    },
    {
      id: 'saltwater-rinse',
      question: 'Dois-je rincer ma planche gonflable après une utilisation en mer ?',
      answer:
        "Oui — rincez toujours votre planche, vos ailerons, votre pompe et votre pagaie à l'eau douce après une utilisation en eau salée. Les cristaux de sel s'infiltrent dans les coutures et les valves, provoquant des micro-fuites et de la corrosion. Séchez la planche à l'ombre avant de la dégonfler et de la ranger. Un rinçage régulier prolonge considérablement la durée de vie de votre embarcation gonflable.",
      category: 'maintenance',
      relatedProducts: [],
      relatedGuides: ['inflatable-sup-maintenance', 'inflatable-boat-maintenance'],
    },
    {
      id: 'sup-leash-necessity',
      question: "Ai-je vraiment besoin d'un leash pour le SUP ?",
      answer:
        "Oui — portez toujours un leash. Un leash de SUP spiralé s'attache à votre cheville ou à votre mollet et garde la planche près de vous si vous tombez. En eau libre, un leash peut vous sauver la vie en empêchant la séparation d'avec votre dispositif de flottaison. Pour la pratique en rivière, utilisez un leash à dégagement rapide pour éviter toute entrave.",
      category: 'safety',
      relatedProducts: ['sup-explorer-11'],
      relatedGuides: ['sup-safety-guide', 'sup-leash-guide'],
    },
    {
      id: 'company-model',
      question: 'Paddle Board Overstock est-il une société de négoce ou un fabricant ?',
      answer:
        'Ni une simple usine, ni une société de négoce — Weihai Dongjilian Co., Ltd. est une société de marque disposant de sa propre base de production. Weihai Dongjilian Co., Ltd. (Nouveau-Mexique, États-Unis) gère la distribution mondiale, les contrats, la facturation et le service après-vente, tandis que le centre de production Paddle Board Overstock de Qingdao assure la R&D, la production et le contrôle qualité dans notre propre site de 12 000 m². Aucun intermédiaire : chaque commande est expédiée directement depuis l’usine.',
      category: 'ordering',
      relatedProducts: [],
      relatedGuides: [],
    },
    {
      id: 'us-contract-qingdao-shipping',
      question:
        'Pourquoi mon contrat est-il signé avec une société américaine alors que la marchandise part de Qingdao ?',
      answer:
        'Weihai Dongjilian Co., Ltd. (Nouveau-Mexique, États-Unis) est l’entité commerciale mondiale qui signe les contrats, émet les factures et assure le service après-vente, tandis que le centre de production de Qingdao fabrique et expédie chaque commande FOB Qingdao. Cette structure à double pôle garantit la contractualisation et le règlement aux normes américaines, tout en conservant les prix directs usine et une transparence totale sur la production.',
      category: 'ordering',
      relatedProducts: [],
      relatedGuides: [],
    },
  ],
  it: [
    {
      id: 'sup-learning',
      question: 'È difficile imparare a usare un SUP?',
      answer:
        'Per niente. La maggior parte dei principianti riesce a mettersi in piedi e a pagaiare già durante la prima sessione. La nostra serie All-Around SUP offre piattaforme extra larghe e stabili, progettate appositamente per chi pagai per la prima volta. Inizia su acque calme e in pochi minuti sarai già a tuo agio.',
      category: 'general',
      relatedProducts: [],
      relatedGuides: ['beginner-guide'],
    },
    {
      id: 'ocean-use',
      question: 'Posso usarla in mare?',
      answer:
        "Sì. Le tavole Paddle Board Overstock SUP sono costruite per l'uso in mare, lago e fiume. La nostra serie Touring gestisce bene il moto ondoso costiero e tutte le tavole utilizzano PVC di grado nautico che resiste alla corrosione dell'acqua salata. Dopo l'uso in mare, risciacqua con acqua dolce.",
      category: 'general',
      relatedProducts: [],
      relatedGuides: ['weather-conditions'],
    },
    {
      id: 'inflation-time',
      question: 'Quanto tempo ci vuole per gonfiare?',
      answer:
        'Con la pompa a doppia azione inclusa, la maggior parte delle tavole raggiunge 12–15 PSI in meno di 5 minuti. Con la nostra pompa elettrica opzionale il tempo scende sotto i 2 minuti. Sgonfiaggio e ripiegamento richiedono circa 3 minuti.',
      category: 'product',
      relatedProducts: [],
      relatedGuides: ['sup-maintenance'],
    },
    {
      id: 'travel-sup',
      question: 'Posso viaggiare con un SUP gonfiabile?',
      answer:
        'Assolutamente sì. Ogni tavola Paddle Board Overstock si ripiega in una borsa da trasporto delle dimensioni di uno zaino, conforme ai requisiti bagaglio delle compagnie aeree. Con appena 18–22 lbs, è facile da portare in spiaggia, al lago o attraverso i terminal aeroportuali.',
      category: 'general',
      relatedProducts: [],
      relatedGuides: [],
    },
    {
      id: 'weight-limit',
      question: 'Qual è il limite di peso?',
      answer:
        "Le nostre tavole All-Around SUP supportano fino a 220 lbs. Le serie Touring e Yoga supportano fino a 250 lbs. I gommoni RIB supportano in genere 600–1500 lbs a seconda del modello. Per l'uso tandem o carichi più pesanti, i nostri gommoni gonfiabili offrono opzioni a capacità superiore.",
      category: 'product',
      relatedProducts: [],
      relatedGuides: ['understanding-specs'],
    },
    {
      id: 'box-contents',
      question: "Cosa c'è nella confezione?",
      answer:
        "Ogni SUP Paddle Board Overstock include la tavola, uno zaino da viaggio, una pompa a mano a doppia azione, pinna rimovibile, leash a spirale e kit di riparazione. Alcuni modelli offrono anche l'opzione di aggiornamento con pagaia in carbonio. I gommoni gonfiabili includono il gommone, la pompa, il kit di riparazione e i remi.",
      category: 'product',
      relatedProducts: [],
      relatedGuides: [],
    },
    {
      id: 'bundle-deals',
      question: 'Offrite pacchetti combinati?',
      answer:
        "Sì. Offriamo pacchetti curati che ti fanno risparmiare rispetto all'acquisto separato dei singoli articoli. Contatta il nostro team vendite per le promozioni attuali e le tariffe scontate sui volumi.",
      category: 'ordering',
      relatedProducts: [],
      relatedGuides: [],
    },
    {
      id: 'pfd-requirement',
      question: 'Devo indossare un giubbotto di salvataggio su un SUP?',
      answer:
        'Sì. Molte giurisdizioni richiedono per legge un giubbotto di salvataggio su qualsiasi imbarcazione, inclusi i SUP. Anche dove non è obbligatorio, un giubbotto di salvataggio certificato CE è un equipaggiamento di sicurezza essenziale. Consigliamo di indossarlo sempre in acqua.',
      category: 'safety',
      relatedProducts: ['life-vest-classic', 'life-vest-pro'],
      relatedGuides: ['safety-tips'],
    },
    {
      id: 'boat-registration',
      question: 'Devo registrare il mio gommone gonfiabile?',
      answer:
        "I requisiti variano in base alla giurisdizione. Nella maggior parte delle regioni, i gommoni gonfiabili con motori oltre una certa potenza richiedono la registrazione. I SUP senza motore e i piccoli tender in genere non la richiedono. Controlla l'autorità marittima locale per le regole specifiche.",
      category: 'general',
      relatedProducts: [],
      relatedGuides: [],
    },
    {
      id: 'puncture-repair',
      question: 'Come riparo una foratura?',
      answer:
        "Pulisci l'area, ritaglia una toppa con angoli arrotondati, applica l'adesivo per PVC, premi con fermezza e attendi 24 ore prima di gonfiare. Le tavole Paddle Board Overstock includono un kit di riparazione. Per istruzioni dettagliate, consulta la nostra guida alla riparazione dei gonfiabili.",
      category: 'maintenance',
      relatedProducts: [],
      relatedGuides: ['inflatable-repair', 'sup-maintenance'],
    },
    {
      id: 'storage',
      question: 'Come devo riporre il mio SUP gonfiabile?',
      answer:
        'Risciacqua con acqua dolce, asciuga completamente, sgonfia del tutto, arrotola in modo morbido partendo dalla prua e riponi nella borsa di trasporto in un luogo fresco e asciutto, lontano dalla luce solare diretta. Non riporlo mai bagnato o a temperature estreme.',
      category: 'maintenance',
      relatedProducts: [],
      relatedGuides: ['sup-maintenance'],
    },
    {
      id: 'sup-vs-hard',
      question: 'SUP gonfiabile o rigido?',
      answer:
        'Le tavole gonfiabili offrono portabilità, comodità di stoccaggio e assorbimento degli urti. Le tavole rigide offrono la massima rigidità e velocità. Per la maggior parte degli utilizzatori ricreativi, un gonfiabile di qualità con nucleo drop-stitch è la scelta pratica.',
      category: 'general',
      relatedProducts: [],
      relatedGuides: ['inflatable-vs-hard', 'how-to-choose-your-sup'],
    },
    {
      id: 'wind-safety',
      question: 'Quale velocità del vento è troppo alta per il SUP?',
      answer:
        'Principianti: oltre 10 mph (8 nodi). Intermedi: oltre 15 mph (13 nodi). Avanzati: oltre 20 mph (17 nodi). In caso di dubbio, non uscire. Il vento di terra (che spira dalla terra verso il mare) è pericoloso a qualsiasi livello di abilità.',
      category: 'safety',
      relatedProducts: [],
      relatedGuides: ['weather-conditions', 'safety-tips'],
    },
    {
      id: 'warranty',
      question: 'Qual è la garanzia Paddle Board Overstock?',
      answer:
        'Tutti i prodotti Paddle Board Overstock sono coperti da una garanzia completa del produttore. I gommoni gonfiabili sono protetti a vita contro i difetti di fabbricazione; le tavole SUP sono coperte per 2+ anni. La garanzia copre i difetti di materiali e lavorazione in condizioni di uso normale.',
      category: 'warranty',
      relatedProducts: [],
      relatedGuides: [],
    },
    {
      id: 'warranty-claim',
      question: 'Come presento una richiesta di garanzia?',
      answer:
        "Presenta la richiesta contattando il nostro team di supporto con il numero dell'ordine, le foto del problema e una breve descrizione. La maggior parte delle richieste viene esaminata entro 2 giorni lavorativi. Le richieste approvate ricevono istruzioni di sostituzione o riparazione entro pochi giorni.",
      category: 'warranty',
      relatedProducts: [],
      relatedGuides: [],
    },
    {
      id: 'shipping-info',
      question: 'Quanto tempo richiede la spedizione?',
      answer:
        'Gli ordini disponibili a magazzino vengono spediti entro 2–3 giorni lavorativi. Gli ordini nazionali USA arrivano in 5–10 giorni lavorativi. Gli ordini internazionali arrivano in 10–20 giorni lavorativi a seconda della destinazione. Gli ordini urgenti possono essere accelerati.',
      category: 'shipping',
      relatedProducts: [],
      relatedGuides: [],
    },
    {
      id: 'return-policy',
      question: 'Qual è la vostra politica di reso?',
      answer:
        "Accettiamo resi entro 30 giorni dalla consegna per prodotti non usati nella confezione originale. Gli ordini personalizzati/OEM non sono rimborsabili. Contatta il nostro team di supporto per avviare un reso: forniamo un'etichetta di spedizione prepagata.",
      category: 'ordering',
      relatedProducts: [],
      relatedGuides: [],
    },
    {
      id: 'oem-odm',
      question: 'Offrite servizi OEM/ODM?',
      answer:
        "Sì. Offriamo servizi private label e di design personalizzato per le aziende. Dal branding personalizzato sui modelli esistenti ai design di carena completamente personalizzati, il nostro team di ingegneria può sviluppare prodotti con il tuo marchio. Si applicano quantità minime d'ordine.",
      category: 'ordering',
      relatedProducts: [],
      relatedGuides: [],
    },
    {
      id: 'paddle-length',
      question: 'Quale lunghezza di pagaia mi serve?',
      answer:
        'Per il SUP: la pagaia dovrebbe essere 6–8 pollici più alta della tua statura. Per il kayak: la lunghezza della pagaia dipende dalla larghezza della barca e dalla lunghezza del busto. Consulta la nostra guida alle pagaie per il dimensionamento dettagliato.',
      category: 'product',
      relatedProducts: [],
      relatedGuides: ['choosing-paddle'],
    },
    {
      id: 'rib-engine',
      question: 'Quale motore mi serve per un RIB?',
      answer:
        'La dimensione del motore dipende da lunghezza e peso della barca. Un RIB di 3 m gestisce in genere 15–25 HP, un RIB di 4,5 m gestisce 40–60 HP e un RIB di 6 m gestisce 90–150 HP. Segui sempre la targhetta della potenza massima HP sulla tua barca.',
      category: 'product',
      relatedProducts: [],
      relatedGuides: [],
    },
    {
      id: 'material-difference',
      question: 'Qual è la differenza tra PVC e Hypalon?',
      answer:
        "Il PVC è più leggero, più economico e più facile da riparare: ideale per l'uso ricreativo. L'Hypalon (CSM) offre una resistenza superiore ai raggi UV e agli agenti chimici con una durata maggiore, preferito per applicazioni commerciali e militari. Paddle Board Overstock utilizza entrambi a seconda del livello del prodotto.",
      category: 'product',
      relatedProducts: [],
      relatedGuides: [],
    },
    {
      id: 'sup-width-stability',
      question: 'Quale larghezza del SUP è migliore per la stabilità?',
      answer:
        "Per i principianti, una larghezza di 33–34 pollici offre il miglior equilibrio tra stabilità e facilità di pagaiata. Le tavole più strette di 32 pollici risultano instabili per i nuovi pagaiatori. L'Paddle Board Overstock SUP Explorer 11, con i suoi 33 pollici, è ideale per imparare.",
      category: 'product',
      relatedProducts: ['sup-explorer-11'],
      relatedGuides: ['sup-size-guide', 'paddle-board-size-guide'],
    },
    {
      id: 'sup-volume-weight',
      question: 'Come scelgo il volume del SUP in base al mio peso?',
      answer:
        'Moltiplica il tuo peso in kg per 2,2 per ottenere un volume target adatto ai principianti. Ad esempio, un pagaiatore di 75 kg ha bisogno di almeno 165 litri, ma 220–260 litri è molto più stabile per imparare. Il SUP Explorer 11 offre 260 litri, adatto a pagaiatori fino a 100 kg.',
      category: 'product',
      relatedProducts: ['sup-explorer-11'],
      relatedGuides: ['sup-size-guide', 'paddle-board-size-guide'],
    },
    {
      id: 'inflatable-boat-engine',
      question: 'Quale motore mi serve per il mio gommone gonfiabile?',
      answer:
        "Per l'AirDeck 270, usa fino a 6 HP. Per l'AirDeck 360, fino a 15 HP. Per il RIB 330, fino a 40 HP. Per il RIB 450 Patrol, fino a 60 HP. Controlla sempre la targhetta della potenza massima HP sulla tua barca e non superarla mai.",
      category: 'product',
      relatedProducts: ['airdeck-360', 'rib-330', 'rib-450-patrol'],
      relatedGuides: ['inflatable-boat-buying-guide'],
    },
    {
      id: 'inflatable-boat-floor-types',
      question: 'Quale tipo di fondo è migliore per un gommone gonfiabile?',
      answer:
        "I fondi con listelli in alluminio offrono le migliori prestazioni: rigidi, capaci di planare e stabili per stare in piedi. I ponti ad aria (air deck) sono più leggeri e si piegano in dimensioni minori, ma flettono di più. I fondi arrotolabili sono i più semplici ed economici, ma offrono la minor rigidità. Scegli in base all'uso principale: pesca e velocità favoriscono i listelli; la portabilità favorisce i ponti ad aria.",
      category: 'product',
      relatedProducts: ['rib-330', 'airdeck-360'],
      relatedGuides: ['inflatable-boat-buying-guide'],
    },
    {
      id: 'paddleboardoverstock-vs-others',
      question: 'Come si confronta Paddle Board Overstock con altri marchi?',
      answer:
        "Paddle Board Overstock offre il miglior rapporto qualità-prezzo nel settore dell'attrezzatura gonfiabile per sport acquatici. Rispetto a Red Paddle Co, Paddle Board Overstock offre il 90% delle prestazioni al 60% del costo. Rispetto a iRocker, Paddle Board Overstock utilizza PVC triplo strato di grado militare superiore e valori di PSI più alti. Rispetto a Bluefin, Paddle Board Overstock offre specifiche dei materiali superiori. Per la maggior parte dei pagaiatori ricreativi, Paddle Board Overstock offre il miglior equilibrio tra qualità e prezzo.",
      category: 'general',
      relatedProducts: ['sup-explorer-11'],
      relatedGuides: [
        'best-surf-gear-brands-compared',
        'paddleboardoverstock-vs-red-paddle',
        'paddleboardoverstock-vs-irocker',
        'paddleboardoverstock-vs-bluefin',
      ],
    },
    {
      id: 'fishing-sup-setup',
      question: 'Posso pescare da una tavola SUP?',
      answer:
        "Sì. La pesca con il SUP è sempre più popolare perché la posizione in piedi offre un'ottima visuale sull'acqua. Scegli una tavola di almeno 11 piedi di lunghezza e 33–34 pollici di larghezza per la stabilità. Aggiungi una cassetta con portacanne fissata agli elastici del ponte, una piccola ancora e indossa sempre un giubbotto di salvataggio (PFD). L'Paddle Board Overstock SUP Explorer 11 funziona bene per la pesca occasionale.",
      category: 'general',
      relatedProducts: ['sup-explorer-11'],
      relatedGuides: ['fishing-sup-guide', 'sup-anchor-guide'],
    },
    {
      id: 'sup-yoga',
      question: 'Posso fare yoga su una tavola SUP?',
      answer:
        "Assolutamente sì. Lo yoga SUP combina le posizioni tradizionali con la sfida di una piattaforma galleggiante, coinvolgendo i muscoli stabilizzatori più profondi. Usa una tavola larga 33 pollici o più, con un deck pad morbido e antiscivolo. Allenati in acque calme e basse con un'ancora. Inizia con posizioni base come cane a testa in giù, guerriero II e albero. Il SUP Explorer 11, con il suo deck pad EVA integrale, è particolarmente adatto.",
      category: 'general',
      relatedProducts: ['sup-explorer-11'],
      relatedGuides: ['yoga-sup-guide'],
    },
    {
      id: 'airline-travel-sup',
      question: 'Quali sono le regole delle compagnie aeree per viaggiare con un SUP gonfiabile?',
      answer:
        "La maggior parte delle compagnie aeree accetta gli zaini per SUP come bagaglio da stiva se sotto i 23–32 kg. Lo zaino Paddle Board Overstock misura circa 90x40x30 cm e pesa circa 15 kg una volta imballato. Alcune compagnie possono addebitare una tariffa per bagagli oversize. Arriva in anticipo, avvolgi pinna e pompa separatamente nel bagaglio a mano ed etichetta la borsa come fragile. Informati sempre sulla politica dell'attrezzatura sportiva della tua compagnia prima di volare.",
      category: 'general',
      relatedProducts: ['sup-explorer-11'],
      relatedGuides: ['sup-travel-guide'],
    },
    {
      id: 'cold-weather-safety',
      question: 'Quale equipaggiamento di sicurezza serve per pagaiare in acque fredde?',
      answer:
        'Acqua sotto i 15°C richiede protezione termica. Per 8–14°C usa una muta o una tuta stagna con stivali, guanti e cappuccio. Per 14–20°C è sufficiente una muta da 3/2 mm. Indossa sempre un giubbotto di salvataggio (PFD) ben regolato per la protezione termica e la sicurezza. Controlla le normative locali per i requisiti di equipaggiamento obbligatorio.',
      category: 'product',
      relatedProducts: ['life-vest-pro'],
      relatedGuides: ['sup-safety-guide', 'inflatable-boat-quality-certifications'],
    },
    {
      id: 'oem-odm-details',
      question: "Quali sono le quantità minime d'ordine per OEM/ODM?",
      answer:
        "Le quantità minime d'ordine (MOQ) variano in base al tipo di prodotto e alla complessità. Il branding personalizzato sui modelli esistenti richiede in genere 5–10 unità. I design di carena completamente personalizzati richiedono MOQ più elevate. Contatta il nostro team vendite con le tue esigenze per un preventivo dettagliato. Gestiamo tutto, dai colori e loghi personalizzati ai design di stampo completamente originali.",
      category: 'ordering',
      relatedProducts: [],
      relatedGuides: [],
    },
    {
      id: 'oem-custom-branding',
      question: 'Posso mettere il mio logo sui prodotti Paddle Board Overstock?',
      answer:
        'Sì. Il nostro servizio OEM include posizionamento del logo personalizzato, combinazioni di colori personalizzate e packaging personalizzato. Offriamo opzioni di stampa a tampone, transfer termico e ricamo a seconda del tipo di prodotto. Invia le tue grafiche e specifiche al nostro team vendite per un preventivo e una stima dei tempi di consegna.',
      category: 'ordering',
      relatedProducts: [],
      relatedGuides: [],
    },
    {
      id: 'sup-inflate-pressure',
      question: 'A quale PSI devo gonfiare il mio SUP?',
      answer:
        "Gonfia al PSI massimo nominale della tavola per le migliori prestazioni: in genere 15–18 PSI per i SUP gonfiabili di qualità. L'Paddle Board Overstock SUP Explorer 11 funziona al meglio a 15–18 PSI. Una pressione insufficiente rende la tavola morbida e con scarsa tenuta di rotta. Una sovrappressione oltre il massimo nominale rischia di danneggiare i fili drop-stitch. Controlla l'etichetta vicino alla valvola per il valore specifico della tua tavola.",
      category: 'product',
      relatedProducts: ['sup-explorer-11'],
      relatedGuides: ['how-to-choose-inflatable-sup', 'sup-pump-guide'],
    },
    {
      id: 'sup-deck-pad-care',
      question: 'Come pulisco e mantengo il deck pad in EVA?',
      answer:
        "Risciacqua il deck pad con acqua dolce dopo ogni sessione. Per sporco o macchie, usa sapone delicato e una spazzola morbida: evita prodotti chimici aggressivi. Se i bordi iniziano a sollevarsi, applica una piccola quantità di adesivo nautico impermeabile e premi sotto peso per 24 ore. Tieni la tavola lontana dall'esposizione diretta ai raggi UV quando non la usi per prevenire il degrado del pad.",
      category: 'maintenance',
      relatedProducts: ['sup-explorer-11'],
      relatedGuides: ['inflatable-sup-maintenance'],
    },
    {
      id: 'rib-trailer-required',
      question: 'Serve un rimorchio per un RIB?',
      answer:
        "Sì. I RIB con carena rigida in vetroresina o alluminio richiedono un piccolo rimorchio per barche per il trasporto. I tubolari gonfiabili possono essere sgonfiati per uno stoccaggio compatto, ma la carena rigida necessita di un rimorchio. La serie AirDeck (completamente gonfiabile) non richiede rimorchio e può essere trasportata nel bagagliaio dell'auto.",
      category: 'general',
      relatedProducts: ['rib-330', 'rib-450-patrol', 'airdeck-360'],
      relatedGuides: ['inflatable-boat-buying-guide'],
    },
    {
      id: 'sup-kayak-conversion',
      question: 'Posso usare una tavola SUP come kayak?',
      answer:
        "Sì. Molte tavole SUP, inclusa l'Paddle Board Overstock Explorer 11, hanno anelli a D che consentono di agganciare un sedile da kayak. Usare un SUP con sedile da kayak e pagaia a pala singola offre una posizione seduta comoda per uscite lunghe o pesca. Alcuni marchi offrono kit di conversione dedicati con sedili e pagaie più lunghe.",
      category: 'product',
      relatedProducts: ['sup-explorer-11'],
      relatedGuides: ['kayak-vs-sup'],
    },
    {
      id: 'saltwater-rinse',
      question: "Devo risciacquare la mia tavola gonfiabile dopo l'uso in acqua salata?",
      answer:
        "Sì: risciacqua sempre tavola, pinne, pompa e pagaia con acqua dolce dopo l'uso in acqua salata. I cristalli di sale penetrano nelle cuciture e nelle valvole, causando micro-perdite e corrosione. Asciuga la tavola all'ombra prima di sgonfiarla e riporla. Il risciacquo regolare prolunga notevolmente la vita del tuo natante gonfiabile.",
      category: 'maintenance',
      relatedProducts: [],
      relatedGuides: ['inflatable-sup-maintenance', 'inflatable-boat-maintenance'],
    },
    {
      id: 'sup-leash-necessity',
      question: 'Mi serve davvero il leash per il SUP?',
      answer:
        'Sì: indossa sempre il leash. Un leash per SUP a spirale si fissa alla caviglia o al polpaccio e tiene la tavola vicino a te in caso di caduta. In acque aperte, un leash può salvarti la vita evitando che tu ti separi dal tuo dispositivo di galleggiamento. Per la pagaiata in fiume, usa un leash a sgancio rapido per evitare impigliamenti.',
      category: 'safety',
      relatedProducts: ['sup-explorer-11'],
      relatedGuides: ['sup-safety-guide', 'sup-leash-guide'],
    },
    {
      id: 'company-model',
      question: 'Paddle Board Overstock è una società commerciale o un produttore?',
      answer:
        'Né una semplice fabbrica né una società commerciale: Weihai Dongjilian Co., Ltd. è un’azienda di marca con una propria base produttiva. Weihai Dongjilian Co., Ltd. (Nuovo Messico, USA) gestisce la distribuzione globale, i contratti, la fatturazione e l’assistenza post-vendita, mentre l’hub produttivo Paddle Board Overstock di Qingdao si occupa di R&S, produzione e controllo qualità nel nostro stabilimento di 12.000 m². Nessun intermediario: ogni ordine viene spedito direttamente dallo stabilimento.',
      category: 'ordering',
      relatedProducts: [],
      relatedGuides: [],
    },
    {
      id: 'us-contract-qingdao-shipping',
      question: 'Perché stipulo il contratto con un’azienda statunitense se la merce viene spedita da Qingdao?',
      answer:
        'Weihai Dongjilian Co., Ltd. (Nuovo Messico, USA) è l’entità commerciale globale che stipula i contratti, emette le fatture e fornisce l’assistenza post-vendita, mentre l’hub produttivo di Qingdao produce e spedisce ogni ordine FOB Qingdao. Questa struttura a doppio polo garantisce contrattazione e pagamenti secondo gli standard USA, conservando al tempo stesso i prezzi diretti di fabbrica e la piena trasparenza produttiva.',
      category: 'ordering',
      relatedProducts: [],
      relatedGuides: [],
    },
  ],
};
