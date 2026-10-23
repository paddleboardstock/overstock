export interface BusinessProductInfo {
  bestFor: ('clubs' | 'resorts' | 'entrepreneurs')[];
  recommendation: string;
  useCase: string;
  operatingCost: string;
  whyBusinessesChooseIt: string;
  lifespan: string;
}

export const productBusinessData: Record<string, BusinessProductInfo> = {
  'sup-explorer-11': {
    bestFor: ['clubs', 'resorts'],
    recommendation:
      'Ideal rental board for SUP clubs and resort programs. The 11\' length and 32" width provide exceptional stability for first-time renters. Commercial-grade 1.2mm PVC withstands daily use. Packs flat for storage.',
    useCase: 'Daily rental fleet, beginner lessons, group tours',
    operatingCost: 'Low — minimal maintenance, no fuel costs, easy to repair with patch kit',
    whyBusinessesChooseIt:
      'Proven rental workhorse with high guest satisfaction. Wide stable platform reduces falls and damage. Inflatable design eliminates storage space requirements. Quick turnaround between rentals.',
    lifespan: '3-5 years with regular use in rental fleet',
  },
  'sup-ocean-voyager': {
    bestFor: ['clubs', 'resorts'],
    recommendation:
      'Touring-oriented SUP for club excursions and resort guided tours. Sleeker profile handles moderate chop while maintaining stability. Great for experienced renters and guided paddle experiences.',
    useCase: 'Guided tours, excursion programs, intermediate rental fleet',
    operatingCost: 'Low — minimal upkeep, no fuel, occasional fin replacement',
    whyBusinessesChooseIt:
      'Better performance in open water opens up more touring routes for guests. Higher guest satisfaction from smoother glide. Versatile enough for both rental and guided programs.',
    lifespan: '3-5 years with regular use',
  },
  'sup-cheetah-surge': {
    bestFor: ['clubs', 'resorts'],
    recommendation:
      'Performance board for club racing programs and advanced resort guests. Sportier shape appeals to experienced paddlers. Suitable for fitness-focused rental programs.',
    useCase: 'Racing programs, fitness classes, advanced guest experiences',
    operatingCost: 'Low-maintenance, no fuel, replace tracking fin as needed',
    whyBusinessesChooseIt:
      'Differentiates your offering from standard rental boards. Attracts experienced paddlers and fitness enthusiasts. Creates upsell opportunity for premium rental experience.',
    lifespan: '3-4 years with regular use',
  },
  'sup-ocean-pulse': {
    bestFor: ['clubs', 'resorts'],
    recommendation:
      'Versatile all-around rental SUP. Balanced dimensions suit a wide range of guest skill levels. Good choice for clubs and resorts with mixed-use fleets.',
    useCase: 'Mixed-skill rental fleet, introductory lessons, leisure paddling',
    operatingCost: 'Low — durable PVC construction, easy field repairs',
    whyBusinessesChooseIt:
      'One board serves most guest needs, simplifying fleet management. Good stability for beginners while still responsive enough for intermediate users.',
    lifespan: '3-5 years with regular use',
  },
  'sup-dolphin-wave': {
    bestFor: ['clubs', 'resorts'],
    recommendation:
      'Compact board ideal for youth programs and smaller guests. Lighter weight makes it easy for kids and teens to handle. Great for club junior programs and family resort activities.',
    useCase: 'Youth programs, kids rental, family activities, lightweight carry programs',
    operatingCost: 'Very low — smaller board uses less material, easy storage',
    whyBusinessesChooseIt:
      'Opens up children and youth market segment. Lower weight reduces injury risk for young users. Perfect for resort kids club and family programming.',
    lifespan: '3-5 years with regular use',
  },
  'sup-leviathan-wake': {
    bestFor: ['clubs'],
    recommendation:
      'Performance-oriented SUP for wake surfing and advanced paddle sports. Designed for clubs offering specialized water sports programs beyond standard paddling.',
    useCase: 'Wake surfing, advanced paddle sports, club competition training',
    operatingCost: 'Low — inflatable construction, simple maintenance routine',
    whyBusinessesChooseIt:
      'Enables clubs to offer wake surfing without a boat. Differentiates club programming from competitors. Attracts younger, action-sports oriented members.',
    lifespan: '3-4 years with regular use',
  },
  'sup-medusa-glow': {
    bestFor: ['resorts', 'clubs'],
    recommendation:
      'Unique glow-in-the-dark SUP for evening and night paddling experiences. Creates a premium after-dark activity for resorts and clubs looking to extend operating hours.',
    useCase: 'Night paddling events, sunset tours, evening resort activities',
    operatingCost: 'Low — LED components sealed, standard SUP maintenance',
    whyBusinessesChooseIt:
      'Creates a signature guest experience that generates social media buzz. Extends revenue hours into evening. Highly photogenic activity drives organic marketing.',
    lifespan: '2-3 years (LED battery dependent)',
  },
  'sup-flowing-lotus': {
    bestFor: ['resorts', 'clubs'],
    recommendation:
      'Wide SUP platform ideal for yoga and fitness programs. Extra width provides unmatched stability for on-board exercises. Perfect for resort wellness programs and club fitness classes.',
    useCase: 'SUP yoga classes, wellness retreats, fitness programs',
    operatingCost: 'Low — standard SUP care, non-slip deck minimizes wear',
    whyBusinessesChooseIt:
      'Supports premium wellness programming with higher per-guest revenue. Wide platform accommodates various body types and skill levels. Pairs well with resort spa and wellness offerings.',
    lifespan: '3-5 years with regular use',
  },
  'sup-jungle-mandala': {
    bestFor: ['resorts'],
    recommendation:
      'Designer-print SUP for resort flagship experiences and retail resale. Eye-catching pattern creates memorable guest photos and drives social media exposure for your brand.',
    useCase: 'Premium rental fleet, retail resale, brand flagship experiences',
    operatingCost: 'Low — same as standard SUP, print is UV-protected',
    whyBusinessesChooseIt:
      'Visual appeal drives guest preference and social sharing. Resale potential creates additional revenue stream. Enhances resort brand image with premium aesthetics.',
    lifespan: '3-5 years with regular use',
  },
  'sup-tropical-breeze': {
    bestFor: ['resorts'],
    recommendation:
      'Vibrant tropical-print SUP for resort rental fleets and retail. The colorful design appeals to vacation guests and creates Instagram-worthy moments that market your resort.',
    useCase: 'Resort rental fleet, retail merchandise, guest photography experiences',
    operatingCost: 'Low — durable print layer, standard SUP maintenance',
    whyBusinessesChooseIt:
      'Guests consistently choose visually distinctive boards. Print acts as floating advertising for your brand. Retail version creates merchandise revenue opportunity.',
    lifespan: '3-5 years with regular use',
  },
  'airdeck-360': {
    bestFor: ['resorts', 'clubs'],
    recommendation:
      'Perfect for resort guest activities and club rental programs. Spacious 4-5 person capacity suits family outings. Inflatable design packs flat for storage. Small outboard capability adds variety to rental offerings.',
    useCase: 'Family rentals, group excursions, resort guest activities, fishing trips',
    operatingCost: 'Low — no trailer needed, inflates in minutes, small outboard fuel cost only',
    whyBusinessesChooseIt:
      'Multi-person capacity increases per-rental revenue. Inflatable design eliminates trailer and mooring costs. Versatile platform supports multiple activity types. Easy storage when not in use.',
    lifespan: '3-5 years with regular use',
  },
  'zb-mt350': {
    bestFor: ['resorts', 'clubs'],
    recommendation:
      'Versatile tender boat for resort waterfront operations. Stable platform for guest shuttles and equipment transport. Fits resort storage rooms when deflated.',
    useCase: 'Guest shuttles, equipment transport, waterfront operations support',
    operatingCost: 'Low — inflatable, no trailer needed, small outboard fuel',
    whyBusinessesChooseIt:
      'Multi-purpose utility reduces need for multiple boats. Deflatable storage maximizes limited space. Stable and safe for guest transport.',
    lifespan: '3-5 years with regular use',
  },
  'life-vest-classic': {
    bestFor: ['clubs', 'resorts', 'entrepreneurs'],
    recommendation:
      'Essential safety equipment for any rental fleet or club program. Universal fit suits most guests. Affordable bulk pricing enables commercial use. CE certified per applicable EU directives.',
    useCase: 'Mandatory safety gear for all rental and club operations',
    operatingCost: 'Very low — rinse with fresh water, inspect straps, replace every 3-5 years',
    whyBusinessesChooseIt:
      'Regulatory compliance for commercial operations. Universal adult fit simplifies inventory management. Bulk pricing significantly reduces per-unit cost. Trusted brand for guest safety.',
    lifespan: '3-5 years in commercial use',
  },
  'life-vest-pro': {
    bestFor: ['clubs', 'resorts', 'entrepreneurs'],
    recommendation:
      'Premium PFD for guided tours and professional operations. Enhanced features suit higher-end resort programs and commercial guiding operations.',
    useCase: 'Guided tours, premium experiences, professional instruction',
    operatingCost: 'Very low — minimal maintenance, replace every 3-5 years',
    whyBusinessesChooseIt:
      'Enhanced features justify premium rental pricing. Higher guest comfort leads to better reviews. Professional appearance reinforces brand quality.',
    lifespan: '3-5 years in commercial use',
  },
  'oars-pump-set': {
    bestFor: ['clubs', 'resorts', 'entrepreneurs'],
    recommendation:
      'Essential operations accessory for any rental fleet. High-output pump reduces turnaround time between rentals. Durable construction withstands commercial use.',
    useCase: 'Daily fleet inflation/deflation, maintenance operations',
    operatingCost: 'Very low — replace pump valve seals every 1-2 years, oars last 3-5 years',
    whyBusinessesChooseIt:
      'High-volume pump cuts inflation time by 50% vs consumer pumps. Reduces staff labor cost per rental. Commercial-grade oars withstand daily guest use without breaking.',
    lifespan: '2-3 years pump, 3-5 years oars',
  },
  'rib-250': {
    bestFor: ['resorts', 'clubs'],
    recommendation:
      'Compact tender for resort waterfront operations. Easy to launch and retrieve. Suitable for guest shuttles and equipment support in protected waters.',
    useCase: 'Guest shuttles, equipment support, safety standby, small group excursions',
    operatingCost: 'Medium — outboard fuel, annual maintenance, trailer or dock storage',
    whyBusinessesChooseIt:
      'Compact size stores easily when not in use. Versatile enough for shuttles, safety, and excursions. Lower fuel cost than larger RIBs. Professional appearance for guest transport.',
    lifespan: '5-7 years with proper maintenance',
  },
  'rib-330': {
    bestFor: ['resorts', 'clubs'],
    recommendation:
      'Versatile RIB for resort watersports centers. Supports dive activities, guest excursions, and safety patrol. Fiberglass hull provides stability for guest transport.',
    useCase: 'Dive support, guest excursions, safety patrol, watersports center operations',
    operatingCost: 'Medium — outboard fuel, annual hull and engine maintenance',
    whyBusinessesChooseIt:
      'Fiberglass V-hull handles moderate chop for all-weather operation. Spacious deck accommodates dive gear and guest groups. Professional-grade build for daily commercial use.',
    lifespan: '5-8 years with proper maintenance',
  },
  'rib-270': {
    bestFor: ['resorts', 'clubs'],
    recommendation:
      'Ultra-compact RIB for small resort waterfronts and club operations. Extremely portable with easy trailering. Best for protected water guest transport and light duty support.',
    useCase: 'Short-distance guest shuttles, light equipment transport, safety standby',
    operatingCost: 'Low — small outboard, minimal fuel consumption, easy maintenance',
    whyBusinessesChooseIt:
      'Smallest footprint in the RIB range for tight storage spaces. Easy single-person launching and recovery. Lowest operating cost of any RIB option.',
    lifespan: '5-7 years with proper maintenance',
  },
  'rib-300': {
    bestFor: ['resorts', 'clubs'],
    recommendation:
      'Compact RIB bridging tender duties with excursion capability. Extra length over the 270 provides better stability for guest comfort while maintaining easy handling.',
    useCase: 'Guest shuttles, equipment runs, small group excursions, safety patrol',
    operatingCost: 'Low-medium — small outboard, modest fuel cost',
    whyBusinessesChooseIt:
      'Sweet spot between portability and capability. More stable than 270 for guest confidence. Fits standard trailer for easy seasonal storage.',
    lifespan: '5-8 years with proper maintenance',
  },
  'rib-330a': {
    bestFor: ['resorts', 'clubs'],
    recommendation:
      'Lightweight 3.3m RIB (80kg) ideal for resort guest shuttles and light support duties. Easy to trailer and launch without heavy equipment. Beginner-friendly handling suits rental programs.',
    useCase: 'Guest shuttles, equipment transport, rental programs, safety standby',
    operatingCost: 'Low — 20HP outboard fuel, easy DIY maintenance',
    whyBusinessesChooseIt:
      'Lightest 3.3m variant at 80kg enables single-person launching. Low power requirement keeps fuel costs minimal. Perfect introductory RIB for resort watersports programs.',
    lifespan: '5-7 years with proper maintenance',
  },
  'rib-330b': {
    bestFor: ['resorts', 'clubs'],
    recommendation:
      'Mid-weight 3.3m RIB (90kg) for resort fleets requiring a balance of durability and portability. Suitable for guest shuttles and fishing excursions.',
    useCase: 'Guest shuttles, fishing excursions, equipment transport',
    operatingCost: 'Low — 20HP outboard, standard maintenance schedule',
    whyBusinessesChooseIt:
      'Heavier material build adds durability for daily commercial use. Still light enough for single-trailer transport. Ideal for mixed-use resort fleets.',
    lifespan: '5-7 years with proper maintenance',
  },
  'rib-330c': {
    bestFor: ['resorts', 'clubs'],
    recommendation:
      'Heavy-duty 3.3m RIB (95kg) for high-utilization rental environments. Extra material thickness withstands frequent guest use and rough handling.',
    useCase: 'High-volume rental fleets, guest shuttles, fishing trips',
    operatingCost: 'Low — 20HP outboard, robust build reduces repair frequency',
    whyBusinessesChooseIt:
      'Durable construction minimizes downtime in busy commercial operations. Handles rough guest treatment better than lighter variants. Best value for high-turnover rental scenarios.',
    lifespan: '6-8 years with proper maintenance',
  },
  'rib-360a': {
    bestFor: ['resorts', 'clubs'],
    recommendation:
      '3.6m RIB with 180cm beam (120kg) for stable guest excursions. 5-person capacity suits small group tours and family rentals. Wider beam improves comfort in moderate chop.',
    useCase: 'Small group excursions, family rentals, guided tours, dive support',
    operatingCost: 'Medium — 25HP outboard, annual service, trailer storage',
    whyBusinessesChooseIt:
      'Wider beam (180cm) provides superior stability for guest confidence and comfort. 5-person capacity enables group pricing premiums. Versatile enough to replace multiple smaller craft.',
    lifespan: '5-8 years with proper maintenance',
  },
  'rib-360b': {
    bestFor: ['resorts', 'clubs'],
    recommendation:
      'Lightweight 3.6m RIB (100kg) for programs prioritizing easy handling. Same 5-person capacity as 360a in a lighter package. Great for seasonal setups requiring frequent launch and recovery.',
    useCase: 'Seasonal rental programs, guest shuttles, light excursion operations',
    operatingCost: 'Low-medium — 25HP outboard, lighter weight reduces wear on trailer and tow vehicle',
    whyBusinessesChooseIt:
      '100kg hull reduces fuel consumption vs heavier 360a while maintaining same capacity. Easier to launch and recover for seasonal operations. Ideal for resorts with limited staff.',
    lifespan: '5-7 years with proper maintenance',
  },
  'rib-390a': {
    bestFor: ['resorts', 'clubs'],
    recommendation:
      '3.9m RIB (100kg) for resort excursion programs. 47cm tubes provide extra buoyancy for guest safety. Excellent balance of size, weight, and capacity for daily rental use.',
    useCase: 'Guest excursions, dive trips, fishing charters, safety patrol',
    operatingCost: 'Medium — 30HP outboard, tube maintenance every 2-3 years',
    whyBusinessesChooseIt:
      'Larger tubes (47cm) provide extra freeboard for safer guest experiences. Lighter than comparable models at 100kg. Versatile enough to support multiple program types.',
    lifespan: '5-8 years with proper maintenance',
  },
  'rib-390al': {
    bestFor: ['resorts', 'clubs'],
    recommendation:
      '3.9m RIB with 4-chamber safety redundancy for commercial operations. Additional chamber provides extra buoyancy safety margin for guest-carrying operations.',
    useCase: 'Guest transport, commercial diving support, safety-critical operations',
    operatingCost: 'Medium — 30HP outboard, 4 chambers require balanced inflation checks',
    whyBusinessesChooseIt:
      '4-chamber design adds safety redundancy for commercial guest operations. Meets stricter safety requirements for passenger-carrying vessels. Peace of mind for resort liability management.',
    lifespan: '5-8 years with proper maintenance',
  },
  'rib-390b': {
    bestFor: ['resorts', 'clubs'],
    recommendation:
      'Heavy-duty 3.9m RIB (130kg) for high-utilization commercial settings. Reinforced build withstands daily guest use in demanding conditions. 47cm tubes provide excellent seaworthiness.',
    useCase: 'High-volume guest excursions, commercial fishing, resort operations',
    operatingCost: 'Medium — 30HP outboard, durable build reduces long-term maintenance',
    whyBusinessesChooseIt:
      'Robust construction delivers lowest total cost of ownership in heavy use. 130kg build quality withstands years of commercial service. Superior tube performance in varied conditions.',
    lifespan: '6-9 years with proper maintenance',
  },
  'rib-390bl': {
    bestFor: ['resorts', 'clubs'],
    recommendation:
      '3.9m RIB with 178cm beam and 4 chambers. Slightly narrower beam improves towing efficiency while maintaining 5-person capacity. Enhanced safety from 4-chamber configuration.',
    useCase: 'Guest transport, safety operations, towed excursion programs',
    operatingCost: 'Medium — 30HP outboard, 4-chamber maintenance, easier trailering',
    whyBusinessesChooseIt:
      'Narrower beam reduces trailering width and wind resistance. 4 chambers provide commercial-grade safety. Efficient to tow between resort locations or seasonal storage.',
    lifespan: '5-8 years with proper maintenance',
  },
  'rib-430a': {
    bestFor: ['resorts', 'clubs'],
    recommendation:
      '4.3m RIB (170kg) for comprehensive resort watersports operations. 200cm beam delivers exceptional stability. 6-person capacity enables larger group excursions.',
    useCase: 'Group excursions, dive operations, watersports center lead boat',
    operatingCost: 'Medium — 40HP outboard, annual professional service recommended',
    whyBusinessesChooseIt:
      '200cm beam provides the stability guests expect for comfort and safety. 6-person capacity maximizes per-trip revenue. Professional-grade platform for flagship resort operations.',
    lifespan: '6-9 years with proper maintenance',
  },
  'rib-430b': {
    bestFor: ['resorts', 'clubs'],
    recommendation:
      '4.3m RIB (200kg) with 4-chamber configuration for extended offshore capability. Heavier build provides durability for daily commercial use in rougher conditions.',
    useCase: 'Coastal excursions, commercial operations, offshore support',
    operatingCost: 'Medium — 40HP outboard, 4-chamber tube maintenance, hull service',
    whyBusinessesChooseIt:
      '4-chamber design extends operational range and safety margin. Heavier construction dampens vibration for smoother guest ride. Suitable for exposed coastal resort locations.',
    lifespan: '6-9 years with proper maintenance',
  },
  'rib-430c': {
    bestFor: ['resorts', 'clubs'],
    recommendation:
      '4.3m RIB (200kg) with 48mm tubes for maximum buoyancy. Largest tube diameter in the 4.3m range provides exceptional load capacity and guest safety margin.',
    useCase: 'Heavy-load excursions, dive support, equipment-heavy operations',
    operatingCost: 'Medium — 40HP outboard, larger tubes require more inflation time',
    whyBusinessesChooseIt:
      '48mm tubes maximize buoyancy for heavy guest loads and equipment. Superior freeboard keeps guests dry and comfortable. Best choice for resorts in choppy coastal waters.',
    lifespan: '6-9 years with proper maintenance',
  },
  'rib-450-patrol': {
    bestFor: ['clubs', 'resorts'],
    recommendation:
      'Reinforced deep-V RIB for club safety programs and resort patrol operations. Self-bailing deck and high-speed hull designed for professional use. Ideal for lifeguard and safety fleet roles.',
    useCase: 'Safety patrol, rescue operations, law enforcement support, event security',
    operatingCost: 'Medium-high — 60HP outboard, reinforced hull needs specialized service',
    whyBusinessesChooseIt:
      'Purpose-built for safety operations with deep-V hull for rough water capability. Self-bailing deck ensures safe operation in any conditions. Professional-grade reliability for mission-critical roles.',
    lifespan: '7-10 years with professional maintenance',
  },
  'rib-480a': {
    bestFor: ['resorts', 'clubs'],
    recommendation:
      '4.8m RIB (183kg) with 5 chambers for premium resort excursion programs. Excellent stability and capacity for up to 6 guests. 60HP capability provides speed for longer excursions.',
    useCase: 'Premium guest excursions, long-range tours, dive operations',
    operatingCost: 'Medium — 60HP outboard, 5-chamber system, annual professional service',
    whyBusinessesChooseIt:
      '5-chamber design provides exceptional safety redundancy for guest programs. Speed capability enables longer excursion radius and more activity options. Professional-grade build impresses premium guests.',
    lifespan: '7-10 years with proper maintenance',
  },
  'rib-480b': {
    bestFor: ['resorts', 'clubs'],
    recommendation:
      'Heavy-duty 4.8m RIB (260kg) for high-utilization commercial fleets. Robust construction withstands continuous daily operation. 5 chambers ensure safety in all conditions.',
    useCase: 'Commercial fleet operations, high-volume guest transport, fishing charters',
    operatingCost: 'Medium — 60HP outboard, heavier build increases fuel slightly',
    whyBusinessesChooseIt:
      '260kg build quality ensures longevity in demanding commercial environments. Enhanced durability reduces replacement cycle costs. Proven platform for daily rental operations.',
    lifespan: '7-10 years with proper maintenance',
  },
  'rib-480c': {
    bestFor: ['resorts', 'clubs'],
    recommendation:
      'Ultra-durable 4.8m RIB (280kg) for the most demanding commercial applications. Maximum material thickness and reinforcement for extreme conditions.',
    useCase: 'Heavy commercial use, rough water operations, maximum load transport',
    operatingCost: 'Medium — 60HP outboard, heavy build requires more power at cruising speed',
    whyBusinessesChooseIt:
      'Maximum durability for extended commercial lifespan. Handles rougher conditions and heavier loads than lighter variants. Lowest per-day ownership cost over 10-year horizon.',
    lifespan: '8-12 years with proper maintenance',
  },
  'rib-480d': {
    bestFor: ['resorts', 'clubs'],
    recommendation:
      'Heavy-duty 4.8m RIB (280kg) optimized for continuous fleet operations. Identical robust build to 480c with differentiated configuration for fleet standardization.',
    useCase: 'Fleet standardization, heavy commercial use, multi-boat operations',
    operatingCost: 'Medium — 60HP outboard, fleet maintenance programs reduce per-unit cost',
    whyBusinessesChooseIt:
      'Ideal for multi-boat fleet operations requiring identical vessel characteristics. Standardized maintenance and parts inventory. Consistent guest experience across all fleet vessels.',
    lifespan: '8-12 years with proper maintenance',
  },
  'rib-480w': {
    bestFor: ['resorts', 'clubs'],
    recommendation:
      'Wide-beam 4.8m RIB (235cm beam) for maximum guest comfort and stability. Widest 4.8m variant provides exceptional deck space for group activities and equipment.',
    useCase: 'Group excursions, dive operations, premium guest experiences',
    operatingCost: 'Medium — 60HP outboard, wider beam slightly increases fuel at planing',
    whyBusinessesChooseIt:
      '235cm beam offers class-leading stability for guest comfort and confidence. Extra deck space enables premium amenities like seating and shade. Best-in-class experience for discerning guests.',
    lifespan: '7-10 years with proper maintenance',
  },
  'rib-500': {
    bestFor: ['resorts', 'clubs'],
    recommendation:
      '5.0m RIB (314kg) with 210cm beam and 52mm tubes for flagship resort programs. Full-size vessel capable of serious offshore excursions. Premium guest experience platform.',
    useCase: 'Offshore excursions, premium guest programs, commercial fishing',
    operatingCost: 'Medium — 60HP outboard, larger tubes and hull require professional maintenance',
    whyBusinessesChooseIt:
      '52mm tubes and 210cm beam deliver big-boat feel in a manageable 5m package. Offshore capability enables whale watching and coastal touring programs. Premium positioning supports higher rental pricing.',
    lifespan: '7-10 years with proper maintenance',
  },
  'rib-520a': {
    bestFor: ['resorts', 'entrepreneurs'],
    recommendation:
      '5.2m RIB (200kg) for resort premium fleets and emerging commercial operators. 8-person capacity enables group tour economics. 85HP capability delivers speed for efficient operations.',
    useCase: 'Group tours, commercial charter operations, premium resort programs',
    operatingCost: 'Medium-high — 85HP outboard, professional crew recommended, marina storage',
    whyBusinessesChooseIt:
      '8-person capacity maximizes per-trip revenue for tour operations. Professional-grade performance impresses commercial clients. Lightweight 200kg build at this size is exceptional for fuel efficiency.',
    lifespan: '7-10 years with proper maintenance',
  },
  'rib-520b': {
    bestFor: ['resorts', 'entrepreneurs'],
    recommendation:
      'Heavy-duty 5.2m RIB (400kg) for serious commercial charter operations. Maximum material build ensures longevity in daily professional use. 228cm beam provides luxurious deck space.',
    useCase: 'Professional charter operations, high-end resort fleets, commercial transport',
    operatingCost: 'Medium-high — 85HP outboard, full commercial maintenance program required',
    whyBusinessesChooseIt:
      '400kg build quality means exceptional durability for charter fleet use. 228cm beam offers best-in-class passenger comfort. Long-term ownership costs minimized through robust construction.',
    lifespan: '8-12 years with professional maintenance',
  },
  'rib-520c': {
    bestFor: ['resorts', 'entrepreneurs'],
    recommendation:
      '5.2m RIB (360kg) balancing weight savings with durability for commercial operators. 228cm beam maintains passenger comfort while 360kg build reduces fuel costs vs 520b.',
    useCase: 'Charter services, resort guest transport, commercial dive operations',
    operatingCost: 'Medium-high — 85HP outboard, lighter than 520b reduces fuel consumption',
    whyBusinessesChooseIt:
      'Optimized weight-to-durability ratio delivers best fuel economy in the 5.2m class. Full beam width (228cm) ensures no compromise on guest comfort. Ideal for fuel-conscious commercial operators.',
    lifespan: '8-11 years with professional maintenance',
  },
  'rib-520e': {
    bestFor: ['resorts', 'entrepreneurs'],
    recommendation:
      'High-performance 5.2m RIB (450kg) with 115HP capability for demanding commercial routes. Maximum power enables fast transit to distant excursion destinations. Premium touring platform.',
    useCase: 'Long-range excursions, high-speed transport, premium charter experiences',
    operatingCost: 'High — 115HP outboard fuel, higher-speed engine maintenance, professional crew',
    whyBusinessesChooseIt:
      '115HP engine delivers speed for longer excursion radius and faster guest transit. Opens premium high-speed tour packages commanding higher prices. Heavy build ensures stability at speed.',
    lifespan: '8-12 years with professional maintenance',
  },
  'rib-520w': {
    bestFor: ['resorts', 'entrepreneurs'],
    recommendation:
      'Wide-beam 5.2m RIB (235cm) for maximum passenger comfort. Widest hull in the 5.2m series provides exceptional stability. Optimal platform for premium resort guest experiences.',
    useCase: 'Premium guest transport, luxury excursions, resort flagship vessel',
    operatingCost: 'Medium-high — 85HP outboard, wider beam stable at rest for guest boarding',
    whyBusinessesChooseIt:
      '235cm beam delivers the most stable passenger experience in its class. Exceptional stability simplifies guest boarding from docks and beaches. Premium perception supports luxury pricing.',
    lifespan: '7-10 years with professional maintenance',
  },
  'rib-550a': {
    bestFor: ['resorts', 'entrepreneurs'],
    recommendation:
      '5.5m RIB (240kg) for serious commercial excursion operators. 230cm beam and 1000kg capacity provide generous passenger space. 90HP capability enables all-weather operations.',
    useCase: 'All-weather excursions, commercial charter, coastal touring',
    operatingCost: 'Medium-high — 90HP outboard, full commercial maintenance program',
    whyBusinessesChooseIt:
      '1000kg load capacity supports heavy passenger loads plus safety gear for regulatory compliance. All-weather capability ensures operations continue in varied conditions. Professional-grade reliability.',
    lifespan: '8-12 years with professional maintenance',
  },
  'rib-550b': {
    bestFor: ['resorts', 'entrepreneurs'],
    recommendation:
      'Heavy-duty 5.5m RIB (450kg) for maximum durability in commercial charter fleets. Built for daily operation in demanding coastal environments. Premium construction ensures years of reliable service.',
    useCase: 'High-utilization charter fleets, demanding coastal operations, long-term commercial use',
    operatingCost: 'Medium-high — 90HP outboard, 450kg build provides exceptional longevity',
    whyBusinessesChooseIt:
      '450kg build is overbuilt for commercial durability. Lowest total cost of ownership for high-utilization operators. Handles tough coastal conditions that would degrade lighter vessels.',
    lifespan: '10-14 years with professional maintenance',
  },
  'rib-580a': {
    bestFor: ['resorts', 'entrepreneurs'],
    recommendation:
      '5.8m RIB (450kg) for large-scale commercial operations. 238cm beam and 1200kg capacity accommodate 8 guests with full safety equipment. 115HP enables serious offshore capability.',
    useCase: 'Large group charters, offshore excursions, commercial passenger operations',
    operatingCost: 'High — 115HP outboard, professional crew, commercial-grade maintenance',
    whyBusinessesChooseIt:
      '1200kg capacity and 8-person seating enable profitable group charter economics. Offshore capability opens ocean touring routes. Vessel size commands premium charter pricing.',
    lifespan: '8-12 years with professional maintenance',
  },
  'rib-580b': {
    bestFor: ['resorts', 'entrepreneurs'],
    recommendation:
      '5.8m RIB with 58mm tubes for maximum freeboard and dry ride. Largest tube diameter provides exceptional buoyancy and safety margin. Premium choice for exposed offshore operations.',
    useCase: 'Offshore passenger transport, exposed coastal operations, premium charter',
    operatingCost: 'High — 115HP outboard, 58mm tubes require specialized maintenance',
    whyBusinessesChooseIt:
      '58mm tubes deliver the driest, most comfortable ride for guests in challenging conditions. Maximum freeboard enhances guest confidence and safety perception. Best-in-class offshore capability.',
    lifespan: '8-12 years with professional maintenance',
  },
  'rib-600': {
    bestFor: ['resorts', 'entrepreneurs'],
    recommendation:
      '6.0m RIB (500kg) with 6 chambers for maximum safety in commercial passenger operations. 250cm beam offers spacious deck for 8 guests. Professional-grade vessel for serious operators.',
    useCase: 'Premium charter operations, large group excursions, commercial passenger service',
    operatingCost: 'High — 115HP outboard, 6-chamber system, professional crew, marina berth',
    whyBusinessesChooseIt:
      '6-chamber configuration meets highest commercial safety standards. 250cm beam provides exceptional passenger comfort and deck space. Professional-grade vessel supports premium tour pricing.',
    lifespan: '8-12 years with professional maintenance',
  },
  'rib-680a': {
    bestFor: ['entrepreneurs', 'resorts'],
    recommendation:
      'Professional 6.6m RIB (500kg) for advanced commercial operations. 10-person capacity with 7-chamber safety system. 200HP capability for high-speed offshore operations.',
    useCase: 'Advanced commercial charters, offshore patrol, large group transport, emergency services',
    operatingCost: 'High — 200HP outboard, full commercial crew, professional marina, insurance',
    whyBusinessesChooseIt:
      '200HP and deep-V hull deliver serious offshore performance for professional operators. 7-chamber system provides ultimate safety for passenger-carrying operations. Vessel commands top-tier charter rates.',
    lifespan: '10-14 years with professional maintenance',
  },
  'rib-680b': {
    bestFor: ['entrepreneurs', 'resorts'],
    recommendation:
      '6.8m RIB for commercial operators requiring maximum deck length. Extended hull provides better rough-water performance. Same 10-person capacity and 200HP capability as 680a.',
    useCase: 'Extended offshore operations, professional charter, patrol and rescue',
    operatingCost: 'High — 200HP outboard, professional maintenance, extended hull increases slip fees',
    whyBusinessesChooseIt:
      'Longer 6.8m hull improves rough-water ride quality for guest comfort and safety. Extended waterline length enhances fuel efficiency at cruising speed. Ideal for exposed offshore routes.',
    lifespan: '10-14 years with professional maintenance',
  },
  'rib-700': {
    bestFor: ['entrepreneurs', 'resorts'],
    recommendation:
      'Full-size 7.1m RIB (920kg) for flagship commercial operations. 286cm beam and 1960kg capacity handle 12 passengers plus crew. 250HP delivers true offshore capability.',
    useCase: 'Large-scale charter operations, offshore passenger service, commercial transport',
    operatingCost: 'High — 250HP outboard, professional crew, commercial marina, comprehensive insurance',
    whyBusinessesChooseIt:
      '1960kg capacity and 12-person seating enable fleet-scale operational economics. 286cm beam delivers vessel stability that rivals much larger craft. Flagship presence commands premium market positioning.',
    lifespan: '10-14 years with professional maintenance',
  },
  'rib-760': {
    bestFor: ['entrepreneurs', 'resorts'],
    recommendation:
      'Maximum-size 7.6m RIB (1000kg) for the most demanding commercial applications. 270cm beam, 13-person capacity, and 250HP capability make it a true offshore workhorse.',
    useCase: 'Maximum-capacity charters, offshore transport, commercial fleet flagship',
    operatingCost: 'High — 250HP outboard, full commercial infrastructure, professional crew team',
    whyBusinessesChooseIt:
      '13-person capacity delivers maximum revenue potential per trip for charter operators. 7.6m hull provides best-in-class rough-water capability. Ultimate commercial platform for ambitious water business entrepreneurs.',
    lifespan: '10-15 years with professional maintenance',
  },  'ap330': {
    bestFor: ['clubs', 'resorts'],
    recommendation: 'Entry-level luxury console RIB tender in the Apex Performance series.',
    useCase: 'Luxury tender, day cruising, watersports',
    operatingCost: 'Moderate — annual hull maintenance, engine servicing, tube cleaning',
    whyBusinessesChooseIt: 'The Apex Performance 330 (AP330) delivers premium luxury finish with aluminum durability — a step above standard tenders with integrated console, EVA deck, and built-in fuel tank.',
    lifespan: '10-15 years with proper maintenance',
  },
  'ap360': {
    bestFor: ['clubs', 'resorts'],
    recommendation: 'Small-to-midsize luxury center console RIB tender with 40 HP capability.',
    useCase: 'Luxury tender, day cruising, watersports',
    operatingCost: 'Moderate — annual hull maintenance, engine servicing, tube cleaning',
    whyBusinessesChooseIt: 'The Apex Performance 360 (AP360) delivers premium luxury finish with aluminum durability — a step above standard tenders with integrated console, EVA deck, and built-in fuel tank.',
    lifespan: '10-15 years with proper maintenance',
  },
  'ap390': {
    bestFor: ['clubs', 'resorts'],
    recommendation: 'Mid-size luxury console RIB stepping into the 50 HP class.',
    useCase: 'Luxury tender, day cruising, watersports',
    operatingCost: 'Moderate — annual hull maintenance, engine servicing, tube cleaning',
    whyBusinessesChooseIt: 'The Apex Performance 390 (AP390) delivers premium luxury finish with aluminum durability — a step above standard tenders with integrated console, EVA deck, and built-in fuel tank.',
    lifespan: '10-15 years with proper maintenance',
  },
  'ap420': {
    bestFor: ['clubs', 'resorts'],
    recommendation: 'The perfect first family dayboat with 70 HP capability and 55L fuel tank.',
    useCase: 'Luxury tender, day cruising, watersports',
    operatingCost: 'Moderate — annual hull maintenance, engine servicing, tube cleaning',
    whyBusinessesChooseIt: 'The Apex Performance 420 (AP420) delivers premium luxury finish with aluminum durability — a step above standard tenders with integrated console, EVA deck, and built-in fuel tank.',
    lifespan: '10-15 years with proper maintenance',
  },
  'ap460': {
    bestFor: ['clubs', 'resorts'],
    recommendation: 'Flagship crossover model in the 4-meter class with ergonomic layout and bow locker.',
    useCase: 'Luxury tender, day cruising, watersports',
    operatingCost: 'Moderate — annual hull maintenance, engine servicing, tube cleaning',
    whyBusinessesChooseIt: 'The Apex Performance 460 (AP460) delivers premium luxury finish with aluminum durability — a step above standard tenders with integrated console, EVA deck, and built-in fuel tank.',
    lifespan: '10-15 years with proper maintenance',
  },
  'ap520': {
    bestFor: ['clubs', 'resorts'],
    recommendation: '5-meter class luxury RIB with 24° offshore deep V hull and 105L fuel tank.',
    useCase: 'Luxury tender, day cruising, watersports',
    operatingCost: 'Moderate — annual hull maintenance, engine servicing, tube cleaning',
    whyBusinessesChooseIt: 'The Apex Performance 520 (AP520) delivers premium luxury finish with aluminum durability — a step above standard tenders with integrated console, EVA deck, and built-in fuel tank.',
    lifespan: '10-15 years with proper maintenance',
  },
  'ap560': {
    bestFor: ['clubs', 'resorts'],
    recommendation: 'Core long-range sports RIB with 115 HP, 105L fuel, and 12-person capacity.',
    useCase: 'Luxury tender, day cruising, watersports',
    operatingCost: 'Moderate — annual hull maintenance, engine servicing, tube cleaning',
    whyBusinessesChooseIt: 'The Apex Performance 560 (AP560) delivers premium luxury finish with aluminum durability — a step above standard tenders with integrated console, EVA deck, and built-in fuel tank.',
    lifespan: '10-15 years with proper maintenance',
  },
  'ap660': {
    bestFor: ['clubs', 'resorts'],
    recommendation: 'CE Category B offshore luxury RIB with 26° deep V and 200 HP.',
    useCase: 'Luxury tender, day cruising, watersports',
    operatingCost: 'Moderate — annual hull maintenance, engine servicing, tube cleaning',
    whyBusinessesChooseIt: 'The Apex Performance 660 (AP660) delivers premium luxury finish with aluminum durability — a step above standard tenders with integrated console, EVA deck, and built-in fuel tank.',
    lifespan: '10-15 years with proper maintenance',
  },
  'ap700': {
    bestFor: ['clubs', 'resorts'],
    recommendation: '7-meter luxury offshore RIB with 250 HP and 280L fuel.',
    useCase: 'Luxury tender, day cruising, watersports',
    operatingCost: 'Moderate — annual hull maintenance, engine servicing, tube cleaning',
    whyBusinessesChooseIt: 'The Apex Performance 700 (AP700) delivers premium luxury finish with aluminum durability — a step above standard tenders with integrated console, EVA deck, and built-in fuel tank.',
    lifespan: '10-15 years with proper maintenance',
  },
  'ap760': {
    bestFor: ['clubs', 'resorts'],
    recommendation: 'Luxury 7.6m offshore flagship RIB with 300 HP and 280L fuel.',
    useCase: 'Luxury tender, day cruising, watersports',
    operatingCost: 'Moderate — annual hull maintenance, engine servicing, tube cleaning',
    whyBusinessesChooseIt: 'The Apex Performance 760 (AP760) delivers premium luxury finish with aluminum durability — a step above standard tenders with integrated console, EVA deck, and built-in fuel tank.',
    lifespan: '10-15 years with proper maintenance',
  },
  'ap800': {
    bestFor: ['clubs', 'resorts'],
    recommendation: 'Offshore cruise flagship with 350 HP, twin engine support, 300L fuel tank.',
    useCase: 'Luxury tender, day cruising, watersports',
    operatingCost: 'Moderate — annual hull maintenance, engine servicing, tube cleaning',
    whyBusinessesChooseIt: 'The Apex Performance 800 (AP800) delivers premium luxury finish with aluminum durability — a step above standard tenders with integrated console, EVA deck, and built-in fuel tank.',
    lifespan: '10-15 years with proper maintenance',
  },
  'ap900': {
    bestFor: ['clubs', 'resorts'],
    recommendation: 'The ultimate 9.12m flagship RIB with 600 HP twin engines and 380L fuel.',
    useCase: 'Luxury tender, day cruising, watersports',
    operatingCost: 'Moderate — annual hull maintenance, engine servicing, tube cleaning',
    whyBusinessesChooseIt: 'The Apex Performance 900 (AP900) delivers premium luxury finish with aluminum durability — a step above standard tenders with integrated console, EVA deck, and built-in fuel tank.',
    lifespan: '10-15 years with proper maintenance',
  },
  'df420': {
    bestFor: ['clubs'],
    recommendation: 'Entry-level commercial/heavy-duty RIB for patrol and utility operations.',
    useCase: 'Patrol, SAR, commercial operations, dive support',
    operatingCost: 'Low-moderate — commercial-duty components for daily operation, minimal cosmetic maintenance',
    whyBusinessesChooseIt: 'The Defender 420 (DF420) is built for professional duty cycles — heavy-duty protection, commercial paint, and reinforced structure withstand daily commercial use.',
    lifespan: '10-20 years in commercial service',
  },
  'df460': {
    bestFor: ['clubs'],
    recommendation: '4-meter class utility RIB balancing maneuverability with payload capacity.',
    useCase: 'Patrol, SAR, commercial operations, dive support',
    operatingCost: 'Low-moderate — commercial-duty components for daily operation, minimal cosmetic maintenance',
    whyBusinessesChooseIt: 'The Defender 460 (DF460) is built for professional duty cycles — heavy-duty protection, commercial paint, and reinforced structure withstand daily commercial use.',
    lifespan: '10-20 years in commercial service',
  },
  'df500': {
    bestFor: ['clubs'],
    recommendation: 'Core commercial utility RIB with 24° offshore deep V hull and 90L integrated fuel tank.',
    useCase: 'Patrol, SAR, commercial operations, dive support',
    operatingCost: 'Low-moderate — commercial-duty components for daily operation, minimal cosmetic maintenance',
    whyBusinessesChooseIt: 'The Defender 500 (DF500) is built for professional duty cycles — heavy-duty protection, commercial paint, and reinforced structure withstand daily commercial use.',
    lifespan: '10-20 years in commercial service',
  },
  'df540': {
    bestFor: ['clubs'],
    recommendation: 'Mid-size offshore workhorse for patrol, SAR, and commercial operations.',
    useCase: 'Patrol, SAR, commercial operations, dive support',
    operatingCost: 'Low-moderate — commercial-duty components for daily operation, minimal cosmetic maintenance',
    whyBusinessesChooseIt: 'The Defender 540 (DF540) is built for professional duty cycles — heavy-duty protection, commercial paint, and reinforced structure withstand daily commercial use.',
    lifespan: '10-20 years in commercial service',
  },
  'df540-coaster': {
    bestFor: ['clubs'],
    recommendation: 'Coaster Edition patrol RIB with dedicated modular work deck.',
    useCase: 'Patrol, SAR, commercial operations, dive support',
    operatingCost: 'Low-moderate — commercial-duty components for daily operation, minimal cosmetic maintenance',
    whyBusinessesChooseIt: 'The Defender 540 Coaster (DF540 Coaster) is built for professional duty cycles — heavy-duty protection, commercial paint, and reinforced structure withstand daily commercial use.',
    lifespan: '10-20 years in commercial service',
  },
  'df600': {
    bestFor: ['clubs'],
    recommendation: '6-meter offshore patrol RIB with CE Category B certification and 140L fuel.',
    useCase: 'Patrol, SAR, commercial operations, dive support',
    operatingCost: 'Low-moderate — commercial-duty components for daily operation, minimal cosmetic maintenance',
    whyBusinessesChooseIt: 'The Defender 600 (DF600) is built for professional duty cycles — heavy-duty protection, commercial paint, and reinforced structure withstand daily commercial use.',
    lifespan: '10-20 years in commercial service',
  },
  'df700': {
    bestFor: ['clubs'],
    recommendation: '7-meter commercial SAR workhorse with ultra-large 285L fuel tank.',
    useCase: 'Patrol, SAR, commercial operations, dive support',
    operatingCost: 'Low-moderate — commercial-duty components for daily operation, minimal cosmetic maintenance',
    whyBusinessesChooseIt: 'The Defender 700 (DF700) is built for professional duty cycles — heavy-duty protection, commercial paint, and reinforced structure withstand daily commercial use.',
    lifespan: '10-20 years in commercial service',
  },
  'df760': {
    bestFor: ['clubs'],
    recommendation: 'Offshore SAR and heavy interceptor with 60cm extra-large tubes and 300 HP.',
    useCase: 'Patrol, SAR, commercial operations, dive support',
    operatingCost: 'Low-moderate — commercial-duty components for daily operation, minimal cosmetic maintenance',
    whyBusinessesChooseIt: 'The Defender 760 (DF760) is built for professional duty cycles — heavy-duty protection, commercial paint, and reinforced structure withstand daily commercial use.',
    lifespan: '10-20 years in commercial service',
  },
  'df860': {
    bestFor: ['clubs'],
    recommendation: '8.6m ultimate flagship interceptor with 500 HP twin engines.',
    useCase: 'Patrol, SAR, commercial operations, dive support',
    operatingCost: 'Low-moderate — commercial-duty components for daily operation, minimal cosmetic maintenance',
    whyBusinessesChooseIt: 'The Defender 860 (DF860) is built for professional duty cycles — heavy-duty protection, commercial paint, and reinforced structure withstand daily commercial use.',
    lifespan: '10-20 years in commercial service',
  },
  'ex7': {
    bestFor: ['resorts'],
    recommendation: '7m crossover boat with fiberglass hull and raised slim tubes.',
    useCase: 'Luxury cruising, charter, overnight trips, guest transport',
    operatingCost: 'Moderate — fiberglass hull maintenance, premium system upkeep, annual anti-fouling',
    whyBusinessesChooseIt: 'The Explorer 7 (EX7) offers superyacht-tender-level comfort in a crossover platform — cabin, wetbar, and dual sundecks set it apart from any RIB.',
    lifespan: '10-15 years with proper care',
  },
  'ex9': {
    bestFor: ['resorts'],
    recommendation: '9m premium crossover flagship with cabin, head, wetbar, and 450L fuel.',
    useCase: 'Luxury cruising, charter, overnight trips, guest transport',
    operatingCost: 'Moderate — fiberglass hull maintenance, premium system upkeep, annual anti-fouling',
    whyBusinessesChooseIt: 'The Explorer 9 (EX9) offers superyacht-tender-level comfort in a crossover platform — cabin, wetbar, and dual sundecks set it apart from any RIB.',
    lifespan: '10-15 years with proper care',
  },
  'sw240': {
    bestFor: ['resorts', 'entrepreneurs'],
    recommendation: 'Ultra-lightweight 2.4m aluminum tender at just 33 kg — portable by one person.',
    useCase: 'Yacht tender, portable recreation, fishing',
    operatingCost: 'Very low — minimal maintenance, no fuel system (portable tank), easy hull cleaning',
    whyBusinessesChooseIt: 'The Swiftlitee 240 (SW240) is the lightest boat in the Aquafarer range — one-person portable with aluminum durability at minimal operating cost.',
    lifespan: '8-12 years with proper care',
  },
  'sw260': {
    bestFor: ['resorts', 'entrepreneurs'],
    recommendation: 'Golden-size tender at 35 kg — the perfect balance of capacity and portability.',
    useCase: 'Yacht tender, portable recreation, fishing',
    operatingCost: 'Very low — minimal maintenance, no fuel system (portable tank), easy hull cleaning',
    whyBusinessesChooseIt: 'The Swiftlitee 260 (SW260) is the lightest boat in the Aquafarer range — one-person portable with aluminum durability at minimal operating cost.',
    lifespan: '8-12 years with proper care',
  },
  'sw290': {
    bestFor: ['resorts', 'entrepreneurs'],
    recommendation: 'Mid-size tender with upgraded 15° deadrise for better performance.',
    useCase: 'Yacht tender, portable recreation, fishing',
    operatingCost: 'Very low — minimal maintenance, no fuel system (portable tank), easy hull cleaning',
    whyBusinessesChooseIt: 'The Swiftlitee 290 (SW290) is the lightest boat in the Aquafarer range — one-person portable with aluminum durability at minimal operating cost.',
    lifespan: '8-12 years with proper care',
  },
  'sw310': {
    bestFor: ['resorts', 'entrepreneurs'],
    recommendation: 'Expanded tender with 44cm tubes and 5-person capacity.',
    useCase: 'Yacht tender, portable recreation, fishing',
    operatingCost: 'Very low — minimal maintenance, no fuel system (portable tank), easy hull cleaning',
    whyBusinessesChooseIt: 'The Swiftlitee 310 (SW310) is the lightest boat in the Aquafarer range — one-person portable with aluminum durability at minimal operating cost.',
    lifespan: '8-12 years with proper care',
  },
  'sw340': {
    bestFor: ['resorts', 'entrepreneurs'],
    recommendation: 'Flagship Swiftlitee with 6-person capacity at just 53 kg.',
    useCase: 'Yacht tender, portable recreation, fishing',
    operatingCost: 'Very low — minimal maintenance, no fuel system (portable tank), easy hull cleaning',
    whyBusinessesChooseIt: 'The Swiftlitee 340 (SW340) is the lightest boat in the Aquafarer range — one-person portable with aluminum durability at minimal operating cost.',
    lifespan: '8-12 years with proper care',
  },
  'vr260': {
    bestFor: ['clubs', 'resorts'],
    recommendation: 'Most compact Versa with double-deck comfort and 44cm high-buoyancy tubes.',
    useCase: 'Yacht tender, day cruising, console RIB',
    operatingCost: 'Low — double-deck design protects hull, standard components, easy maintenance',
    whyBusinessesChooseIt: 'The Versa 260 (VR260) offers the dry comfort of a double-deck design with console upgrade options — more comfort and versatility than single-deck tenders.',
    lifespan: '10-15 years with proper maintenance',
  },
  'vr290': {
    bestFor: ['clubs', 'resorts'],
    recommendation: 'Sweet-spot luxury tender with double deck and 44cm tubes.',
    useCase: 'Yacht tender, day cruising, console RIB',
    operatingCost: 'Low — double-deck design protects hull, standard components, easy maintenance',
    whyBusinessesChooseIt: 'The Versa 290 (VR290) offers the dry comfort of a double-deck design with console upgrade options — more comfort and versatility than single-deck tenders.',
    lifespan: '10-15 years with proper maintenance',
  },
  'vr310': {
    bestFor: ['clubs', 'resorts'],
    recommendation: 'Milestone Versa with console-compatible double deck and 5-person capacity.',
    useCase: 'Yacht tender, day cruising, console RIB',
    operatingCost: 'Low — double-deck design protects hull, standard components, easy maintenance',
    whyBusinessesChooseIt: 'The Versa 310 (VR310) offers the dry comfort of a double-deck design with console upgrade options — more comfort and versatility than single-deck tenders.',
    lifespan: '10-15 years with proper maintenance',
  },
  'vr340': {
    bestFor: ['clubs', 'resorts'],
    recommendation: 'Primary tender with excellent spatial capacity and console-compatible deck.',
    useCase: 'Yacht tender, day cruising, console RIB',
    operatingCost: 'Low — double-deck design protects hull, standard components, easy maintenance',
    whyBusinessesChooseIt: 'The Versa 340 (VR340) offers the dry comfort of a double-deck design with console upgrade options — more comfort and versatility than single-deck tenders.',
    lifespan: '10-15 years with proper maintenance',
  },
  'vr360': {
    bestFor: ['clubs', 'resorts'],
    recommendation: 'High-performance luxury tender stepping into the 30 HP class.',
    useCase: 'Yacht tender, day cruising, console RIB',
    operatingCost: 'Low — double-deck design protects hull, standard components, easy maintenance',
    whyBusinessesChooseIt: 'The Versa 360 (VR360) offers the dry comfort of a double-deck design with console upgrade options — more comfort and versatility than single-deck tenders.',
    lifespan: '10-15 years with proper maintenance',
  },
  'vr380': {
    bestFor: ['clubs', 'resorts'],
    recommendation: 'Mid-to-large luxury tender with three console options for yachts and catamarans.',
    useCase: 'Yacht tender, day cruising, console RIB',
    operatingCost: 'Low — double-deck design protects hull, standard components, easy maintenance',
    whyBusinessesChooseIt: 'The Versa 380 (VR380) offers the dry comfort of a double-deck design with console upgrade options — more comfort and versatility than single-deck tenders.',
    lifespan: '10-15 years with proper maintenance',
  },
  'vr400': {
    bestFor: ['clubs', 'resorts'],
    recommendation: 'Crossover flagship with 20° deep V hull and 50 HP for mid-size console cruiser capability.',
    useCase: 'Yacht tender, day cruising, console RIB',
    operatingCost: 'Low — double-deck design protects hull, standard components, easy maintenance',
    whyBusinessesChooseIt: 'The Versa 400 (VR400) offers the dry comfort of a double-deck design with console upgrade options — more comfort and versatility than single-deck tenders.',
    lifespan: '10-15 years with proper maintenance',
  },
  'vr420': {
    bestFor: ['clubs', 'resorts'],
    recommendation: 'Mid-to-large luxury console cruiser with 60 HP and 800 kg payload.',
    useCase: 'Yacht tender, day cruising, console RIB',
    operatingCost: 'Low — double-deck design protects hull, standard components, easy maintenance',
    whyBusinessesChooseIt: 'The Versa 420 (VR420) offers the dry comfort of a double-deck design with console upgrade options — more comfort and versatility than single-deck tenders.',
    lifespan: '10-15 years with proper maintenance',
  },
  'vr460': {
    bestFor: ['clubs', 'resorts'],
    recommendation: 'Largest Versa flagship with 70 HP, 920 kg payload, and 4mm reinforced hull.',
    useCase: 'Yacht tender, day cruising, console RIB',
    operatingCost: 'Low — double-deck design protects hull, standard components, easy maintenance',
    whyBusinessesChooseIt: 'The Versa 460 (VR460) offers the dry comfort of a double-deck design with console upgrade options — more comfort and versatility than single-deck tenders.',
    lifespan: '10-15 years with proper maintenance',
  },

};
