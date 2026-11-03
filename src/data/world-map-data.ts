export interface RegionData {
  name: string;
  countries: string[];
  count: number;
  description: string;
}

export interface MarketPresence {
  totalCountries: number;
  servingSince: number;
  regions: RegionData[];
  keyMarkets: { region: string; countries: string[] }[];
}

export const marketPresence: MarketPresence = {
  totalCountries: 50,
  servingSince: 2012,
  regions: [
    {
      name: 'Europe',
      count: 15,
      description: 'Strong presence in EU watersports markets with warehouses in Germany and Netherlands',
      countries: [
        'United Kingdom',
        'Germany',
        'France',
        'Netherlands',
        'Italy',
        'Spain',
        'Poland',
        'Sweden',
        'Norway',
        'Denmark',
        'Finland',
        'Belgium',
        'Austria',
        'Switzerland',
        'Ireland',
      ],
    },
    {
      name: 'North America',
      count: 4,
      description: 'Major market with US distribution center and Canadian service network',
      countries: ['United States', 'Canada', 'Mexico', 'Costa Rica'],
    },
    {
      name: 'Asia',
      count: 14,
      description: 'Regional headquarters in Weihai with partners across East and Southeast Asia',
      countries: [
        'China',
        'Japan',
        'South Korea',
        'Taiwan',
        'Thailand',
        'Vietnam',
        'Indonesia',
        'Malaysia',
        'Philippines',
        'Singapore',
        'India',
        'Sri Lanka',
        'Bangladesh',
        'Pakistan',
      ],
    },
    {
      name: 'Oceania',
      count: 3,
      description: 'Growing service network serving Australia and Pacific island markets',
      countries: ['Australia', 'New Zealand', 'Fiji'],
    },
    {
      name: 'Middle East',
      count: 7,
      description: 'Supplying luxury resorts and marine operators across the Gulf region',
      countries: ['UAE', 'Saudi Arabia', 'Qatar', 'Oman', 'Bahrain', 'Kuwait', 'Turkey'],
    },
    {
      name: 'Africa',
      count: 5,
      description: 'Emerging market serving coastal tourism and fishing operations',
      countries: ['South Africa', 'Egypt', 'Morocco', 'Kenya', 'Mauritius'],
    },
    {
      name: 'South America',
      count: 4,
      description: 'Expanding distribution network across Central and South America',
      countries: ['Brazil', 'Chile', 'Argentina', 'Panama'],
    },
  ],
  keyMarkets: [
    {
      region: 'North America',
      countries: [
        'US West Coast (CA, OR, WA)',
        'US East Coast (FL, NY)',
        'Great Lakes Region',
        'Canadian Coastal Provinces',
      ],
    },
    { region: 'Europe', countries: ['Mediterranean Coast', 'North Sea/Baltic', 'UK & Ireland', 'Alpine Lakes Region'] },
    {
      region: 'Asia Pacific',
      countries: ['Coastal China', 'Southeast Asia Islands', 'Japan/Korea Peninsula', 'Australia East Coast'],
    },
  ],
};

export const marketPresenceByLang: Record<string, any> = {
  de: {
 "regions": [
    {
    "name": "Europa",
    "count": 15,
    "description": "Starke Präsenz in den EU-Wassersportmärkten mit Lagerhäusern in Deutschland und den Niederlanden",
    "countries": [
    "United Kingdom",
    "Germany",
    "France",
    "Netherlands",
    "Italy",
    "Spain",
    "Poland",
    "Sweden",
    "Norway",
    "Denmark",
    "Finland",
    "Belgium",
    "Austria",
    "Switzerland",
    "Ireland"
    ]
    },
    {
    "name": "Nordamerika",
    "count": 4,
    "description": "Wichtiger Markt mit US-Vertriebszentrum und kanadischem Händlernetz",
    "countries": [
    "United States",
    "Canada",
    "Mexico",
    "Costa Rica"
    ]
    },
    {
    "name": "Asien",
    "count": 14,
    "description": "Regionaler Hauptsitz in Weihai mit Partnern in Ost- und Südostasien",
    "countries": [
    "China",
    "Japan",
    "South Korea",
    "Taiwan",
    "Thailand",
    "Vietnam",
    "Indonesia",
    "Malaysia",
    "Philippines",
    "Singapore",
    "India",
    "Sri Lanka",
    "Bangladesh",
    "Pakistan"
    ]
    },
    {
    "name": "Ozeanien",
    "count": 3,
    "description": "Wachsendes Händlernetz für Australien und die Märkte der pazifischen Inseln",
    "countries": [
    "Australia",
    "New Zealand",
    "Fiji"
    ]
    },
    {
    "name": "Naher Osten",
    "count": 7,
    "description": "Belieferung von Luxusresorts und maritimen Betreibern in der gesamten Golfregion",
    "countries": [
    "UAE",
    "Saudi Arabia",
    "Qatar",
    "Oman",
    "Bahrain",
    "Kuwait",
    "Turkey"
    ]
    },
    {
    "name": "Afrika",
    "count": 5,
    "description": "Wachstumsmarkt für Küstentourismus und Fischereibetriebe",
    "countries": [
    "South Africa",
    "Egypt",
    "Morocco",
    "Kenya",
    "Mauritius"
    ]
    },
    {
    "name": "Südamerika",
    "count": 4,
    "description": "Ausbau des Vertriebsnetzes in Mittel- und Südamerika",
    "countries": [
    "Brazil",
    "Chile",
    "Argentina",
    "Panama"
    ]
    }
 ],
 "keyMarkets": [
    {
    "region": "Nordamerika",
    "countries": [
    "US West Coast (CA, OR, WA)",
    "US East Coast (FL, NY)",
    "Great Lakes Region",
    "Canadian Coastal Provinces"
    ]
    },
    {
    "region": "Europa",
    "countries": [
    "Mediterranean Coast",
    "North Sea/Baltic",
    "UK & Ireland",
    "Alpine Lakes Region"
    ]
    },
    {
    "region": "Asien-Pazifik",
    "countries": [
    "Coastal China",
    "Southeast Asia Islands",
    "Japan/Korea Peninsula",
    "Australia East Coast"
    ]
    }
 ]
},
  es: {
 "regions": [
    {
    "name": "Europa",
    "count": 15,
    "description": "Fuerte presencia en los mercados europeos de deportes acuáticos con almacenes en Alemania y Países Bajos",
    "countries": [
    "United Kingdom",
    "Germany",
    "France",
    "Netherlands",
    "Italy",
    "Spain",
    "Poland",
    "Sweden",
    "Norway",
    "Denmark",
    "Finland",
    "Belgium",
    "Austria",
    "Switzerland",
    "Ireland"
    ]
    },
    {
    "name": "América del Norte",
    "count": 4,
    "description": "Mercado principal con centro de distribución en EE. UU. y red de concesionarios en Canadá",
    "countries": [
    "United States",
    "Canada",
    "Mexico",
    "Costa Rica"
    ]
    },
    {
    "name": "Asia",
    "count": 14,
    "description": "Sede regional en Weihai con socios en Asia Oriental y el Sudeste Asiático",
    "countries": [
    "China",
    "Japan",
    "South Korea",
    "Taiwan",
    "Thailand",
    "Vietnam",
    "Indonesia",
    "Malaysia",
    "Philippines",
    "Singapore",
    "India",
    "Sri Lanka",
    "Bangladesh",
    "Pakistan"
    ]
    },
    {
    "name": "Oceanía",
    "count": 3,
    "description": "Red de distribuidores en crecimiento que atiende a Australia y los mercados de las islas del Pacífico",
    "countries": [
    "Australia",
    "New Zealand",
    "Fiji"
    ]
    },
    {
    "name": "Oriente Medio",
    "count": 7,
    "description": "Suministro a resorts de lujo y operadores marinos en toda la región del Golfo",
    "countries": [
    "UAE",
    "Saudi Arabia",
    "Qatar",
    "Oman",
    "Bahrain",
    "Kuwait",
    "Turkey"
    ]
    },
    {
    "name": "África",
    "count": 5,
    "description": "Mercado emergente que atiende al turismo costero y las operaciones pesqueras",
    "countries": [
    "South Africa",
    "Egypt",
    "Morocco",
    "Kenya",
    "Mauritius"
    ]
    },
    {
    "name": "Sudamérica",
    "count": 4,
    "description": "Red de distribución en expansión por América Central y Sudamérica",
    "countries": [
    "Brazil",
    "Chile",
    "Argentina",
    "Panama"
    ]
    }
 ],
 "keyMarkets": [
    {
    "region": "América del Norte",
    "countries": [
    "US West Coast (CA, OR, WA)",
    "US East Coast (FL, NY)",
    "Great Lakes Region",
    "Canadian Coastal Provinces"
    ]
    },
    {
    "region": "Europa",
    "countries": [
    "Mediterranean Coast",
    "North Sea/Baltic",
    "UK & Ireland",
    "Alpine Lakes Region"
    ]
    },
    {
    "region": "Asia-Pacífico",
    "countries": [
    "Coastal China",
    "Southeast Asia Islands",
    "Japan/Korea Peninsula",
    "Australia East Coast"
    ]
    }
 ]
},
  fr: {
 "regions": [
    {
    "name": "Europe",
    "count": 15,
    "description": "Forte présence sur les marchés européens du sport nautique avec des entrepôts en Allemagne et aux Pays-Bas",
    "countries": [
    "United Kingdom",
    "Germany",
    "France",
    "Netherlands",
    "Italy",
    "Spain",
    "Poland",
    "Sweden",
    "Norway",
    "Denmark",
    "Finland",
    "Belgium",
    "Austria",
    "Switzerland",
    "Ireland"
    ]
    },
    {
    "name": "Amérique du Nord",
    "count": 4,
    "description": "Marché majeur avec un centre de distribution aux États-Unis et un réseau de revendeurs au Canada",
    "countries": [
    "United States",
    "Canada",
    "Mexico",
    "Costa Rica"
    ]
    },
    {
    "name": "Asie",
    "count": 14,
    "description": "Siège régional à Weihai avec des partenaires en Asie de l'Est et du Sud-Est",
    "countries": [
    "China",
    "Japan",
    "South Korea",
    "Taiwan",
    "Thailand",
    "Vietnam",
    "Indonesia",
    "Malaysia",
    "Philippines",
    "Singapore",
    "India",
    "Sri Lanka",
    "Bangladesh",
    "Pakistan"
    ]
    },
    {
    "name": "Océanie",
    "count": 3,
    "description": "Réseau de revendeurs en croissance desservant l'Australie et les marchés des îles du Pacifique",
    "countries": [
    "Australia",
    "New Zealand",
    "Fiji"
    ]
    },
    {
    "name": "Moyen-Orient",
    "count": 7,
    "description": "Fourniture de resorts de luxe et d'opérateurs maritimes dans toute la région du Golfe",
    "countries": [
    "UAE",
    "Saudi Arabia",
    "Qatar",
    "Oman",
    "Bahrain",
    "Kuwait",
    "Turkey"
    ]
    },
    {
    "name": "Afrique",
    "count": 5,
    "description": "Marché émergent desservant le tourisme côtier et les opérations de pêche",
    "countries": [
    "South Africa",
    "Egypt",
    "Morocco",
    "Kenya",
    "Mauritius"
    ]
    },
    {
    "name": "Amérique du Sud",
    "count": 4,
    "description": "Expansion du réseau de distribution en Amérique centrale et du Sud",
    "countries": [
    "Brazil",
    "Chile",
    "Argentina",
    "Panama"
    ]
    }
 ],
 "keyMarkets": [
    {
    "region": "Amérique du Nord",
    "countries": [
    "US West Coast (CA, OR, WA)",
    "US East Coast (FL, NY)",
    "Great Lakes Region",
    "Canadian Coastal Provinces"
    ]
    },
    {
    "region": "Europe",
    "countries": [
    "Mediterranean Coast",
    "North Sea/Baltic",
    "UK & Ireland",
    "Alpine Lakes Region"
    ]
    },
    {
    "region": "Asie-Pacifique",
    "countries": [
    "Coastal China",
    "Southeast Asia Islands",
    "Japan/Korea Peninsula",
    "Australia East Coast"
    ]
    }
 ]
},
  it: {
 "regions": [
    {
    "name": "Europa",
    "count": 15,
    "description": "Forte presenza nei mercati europei degli sport acquatici con magazzini in Germania e Paesi Bassi",
    "countries": [
    "United Kingdom",
    "Germany",
    "France",
    "Netherlands",
    "Italy",
    "Spain",
    "Poland",
    "Sweden",
    "Norway",
    "Denmark",
    "Finland",
    "Belgium",
    "Austria",
    "Switzerland",
    "Ireland"
    ]
    },
    {
    "name": "Nordamerica",
    "count": 4,
    "description": "Mercato principale con centro di distribuzione negli Stati Uniti e rete di rivenditori in Canada",
    "countries": [
    "United States",
    "Canada",
    "Mexico",
    "Costa Rica"
    ]
    },
    {
    "name": "Asia",
    "count": 14,
    "description": "Sede regionale a Weihai con partner in Asia orientale e sudorientale",
    "countries": [
    "China",
    "Japan",
    "South Korea",
    "Taiwan",
    "Thailand",
    "Vietnam",
    "Indonesia",
    "Malaysia",
    "Philippines",
    "Singapore",
    "India",
    "Sri Lanka",
    "Bangladesh",
    "Pakistan"
    ]
    },
    {
    "name": "Oceania",
    "count": 3,
    "description": "Rete di rivenditori in crescita che serve l'Australia e i mercati delle isole del Pacifico",
    "countries": [
    "Australia",
    "New Zealand",
    "Fiji"
    ]
    },
    {
    "name": "Medio Oriente",
    "count": 7,
    "description": "Fornitura a resort di lusso e operatori marittimi in tutta la regione del Golfo",
    "countries": [
    "UAE",
    "Saudi Arabia",
    "Qatar",
    "Oman",
    "Bahrain",
    "Kuwait",
    "Turkey"
    ]
    },
    {
    "name": "Africa",
    "count": 5,
    "description": "Mercato emergente che serve il turismo costiero e le attività di pesca",
    "countries": [
    "South Africa",
    "Egypt",
    "Morocco",
    "Kenya",
    "Mauritius"
    ]
    },
    {
    "name": "Sudamerica",
    "count": 4,
    "description": "Espansione della rete di distribuzione in America centrale e Sudamerica",
    "countries": [
    "Brazil",
    "Chile",
    "Argentina",
    "Panama"
    ]
    }
 ],
 "keyMarkets": [
    {
    "region": "Nordamerica",
    "countries": [
    "US West Coast (CA, OR, WA)",
    "US East Coast (FL, NY)",
    "Great Lakes Region",
    "Canadian Coastal Provinces"
    ]
    },
    {
    "region": "Europa",
    "countries": [
    "Mediterranean Coast",
    "North Sea/Baltic",
    "UK & Ireland",
    "Alpine Lakes Region"
    ]
    },
    {
    "region": "Asia-Pacifico",
    "countries": [
    "Coastal China",
    "Southeast Asia Islands",
    "Japan/Korea Peninsula",
    "Australia East Coast"
    ]
    }
  ]
},
            ru: {
 "regions": [
    {
    "name": "Европа",
    "count": 15,
    "description": "Сильное присутствие на европейских рынках водного спорта со складами в Германии и Нидерландах",
    "countries": [
    "United Kingdom",
    "Germany",
    "France",
    "Netherlands",
    "Italy",
    "Spain",
    "Poland",
    "Sweden",
    "Norway",
    "Denmark",
    "Finland",
    "Belgium",
    "Austria",
    "Switzerland",
    "Ireland"
    ]
    },
    {
    "name": "Северная Америка",
    "count": 4,
    "description": "Крупный рынок с центром дистрибуции в США и дилерской сетью в Канаде",
    "countries": [
    "United States",
    "Canada",
    "Mexico",
    "Costa Rica"
    ]
    },
    {
    "name": "Азия",
    "count": 14,
    "description": "Региональная штаб-квартира в Вэйхай с партнёрами по всей Восточной и Юго-Восточной Азии",
    "countries": [
    "China",
    "Japan",
    "South Korea",
    "Taiwan",
    "Thailand",
    "Vietnam",
    "Indonesia",
    "Malaysia",
    "Philippines",
    "Singapore",
    "India",
    "Sri Lanka",
    "Bangladesh",
    "Pakistan"
    ]
    },
    {
    "name": "Океания",
    "count": 3,
    "description": "Растущая дилерская сеть, обслуживающая Австралию и рынки тихоокеанских островов",
    "countries": [
    "Australia",
    "New Zealand",
    "Fiji"
    ]
    },
    {
    "name": "Ближний Восток",
    "count": 7,
    "description": "Поставки для роскошных курортов и морских операторов по всему региону Персидского залива",
    "countries": [
    "UAE",
    "Saudi Arabia",
    "Qatar",
    "Oman",
    "Bahrain",
    "Kuwait",
    "Turkey"
    ]
    },
    {
    "name": "Африка",
    "count": 5,
    "description": "Растущий рынок, обслуживающий прибрежный туризм и рыболовство",
    "countries": [
    "South Africa",
    "Egypt",
    "Morocco",
    "Kenya",
    "Mauritius"
    ]
    },
    {
    "name": "Южная Америка",
    "count": 4,
    "description": "Расширяющаяся дистрибьюторская сеть в Центральной и Южной Америке",
    "countries": [
    "Brazil",
    "Chile",
    "Argentina",
    "Panama"
    ]
    }
 ],
 "keyMarkets": [
    {
    "region": "Северная Америка",
    "countries": [
    "US West Coast (CA, OR, WA)",
    "US East Coast (FL, NY)",
    "Great Lakes Region",
    "Canadian Coastal Provinces"
    ]
    },
    {
    "region": "Европа",
    "countries": [
    "Mediterranean Coast",
    "North Sea/Baltic",
    "UK & Ireland",
    "Alpine Lakes Region"
    ]
    },
    {
    "region": "Азия и Тихоокеанский регион",
    "countries": [
    "Coastal China",
    "Southeast Asia Islands",
    "Japan/Korea Peninsula",
    "Australia East Coast"
    ]
    }
 ]
},
  nl: {
 "regions": [
    {
    "name": "Europa",
    "count": 15,
    "description": "Sterke aanwezigheid op de Europese watersportmarkten met magazijnen in Duitsland en Nederland",
    "countries": [
    "United Kingdom",
    "Germany",
    "France",
    "Netherlands",
    "Italy",
    "Spain",
    "Poland",
    "Sweden",
    "Norway",
    "Denmark",
    "Finland",
    "Belgium",
    "Austria",
    "Switzerland",
    "Ireland"
    ]
    },
    {
    "name": "Noord-Amerika",
    "count": 4,
    "description": "Belangrijke markt met distributiecentrum in de VS en servicenetwerk in Canada",
    "countries": [
    "United States",
    "Canada",
    "Mexico",
    "Costa Rica"
    ]
    },
    {
    "name": "Azië",
    "count": 14,
    "description": "Regionaal hoofdkantoor in Weihai met partners in heel Oost- en Zuidoost-Azië",
    "countries": [
    "China",
    "Japan",
    "South Korea",
    "Taiwan",
    "Thailand",
    "Vietnam",
    "Indonesia",
    "Malaysia",
    "Philippines",
    "Singapore",
    "India",
    "Sri Lanka",
    "Bangladesh",
    "Pakistan"
    ]
    },
    {
    "name": "Oceanië",
    "count": 3,
    "description": "Groeiend servicenetwerk voor Australië en de markten op de eilanden in de Stille Oceaan",
    "countries": [
    "Australia",
    "New Zealand",
    "Fiji"
    ]
    },
    {
    "name": "Midden-Oosten",
    "count": 7,
    "description": "Leveringen aan luxe resorts en maritieme bedrijven in de hele Golfregio",
    "countries": [
    "UAE",
    "Saudi Arabia",
    "Qatar",
    "Oman",
    "Bahrain",
    "Kuwait",
    "Turkey"
    ]
    },
    {
    "name": "Afrika",
    "count": 5,
    "description": "Opkomende markt voor kusttoerisme en visserij",
    "countries": [
    "South Africa",
    "Egypt",
    "Morocco",
    "Kenya",
    "Mauritius"
    ]
    },
    {
    "name": "Zuid-Amerika",
    "count": 4,
    "description": "Uitbreidend distributienetwerk in Midden- en Zuid-Amerika",
    "countries": [
    "Brazil",
    "Chile",
    "Argentina",
    "Panama"
    ]
    }
  ],
  "keyMarkets": [
    {
    "region": "Noord-Amerika",
    "countries": [
    "US West Coast (CA, OR, WA)",
    "US East Coast (FL, NY)",
    "Great Lakes Region",
    "Canadian Coastal Provinces"
    ]
    },
    {
    "region": "Europa",
    "countries": [
    "Mediterranean Coast",
    "North Sea/Baltic",
    "UK & Ireland",
    "Alpine Lakes Region"
    ]
    },
    {
    "region": "Azië en de Stille Oceaan",
    "countries": [
    "Coastal China",
    "Southeast Asia Islands",
    "Japan/Korea Peninsula",
    "Australia East Coast"
    ]
    }
  ]
},
    pl: {
 "regions": [
    {
    "name": "Europa",
    "count": 15,
    "description": "Silna obecność na europejskich rynkach sportów wodnych z magazynami w Niemczech i Holandii",
    "countries": [
    "United Kingdom",
    "Germany",
    "France",
    "Netherlands",
    "Italy",
    "Spain",
    "Poland",
    "Sweden",
    "Norway",
    "Denmark",
    "Finland",
    "Belgium",
    "Austria",
    "Switzerland",
    "Ireland"
    ]
    },
    {
    "name": "Ameryka Północna",
    "count": 4,
    "description": "Główny rynek z centrum dystrybucji w USA i siecią serwisów w Kanadzie",
    "countries": [
    "United States",
    "Canada",
    "Mexico",
    "Costa Rica"
    ]
    },
    {
    "name": "Azja",
    "count": 14,
    "description": "Regionalna siedziba w Weihai z partnerami w całej Azji Wschodniej i Południowo-Wschodniej",
    "countries": [
    "China",
    "Japan",
    "South Korea",
    "Taiwan",
    "Thailand",
    "Vietnam",
    "Indonesia",
    "Malaysia",
    "Philippines",
    "Singapore",
    "India",
    "Sri Lanka",
    "Bangladesh",
    "Pakistan"
    ]
    },
    {
    "name": "Oceania",
    "count": 3,
    "description": "Rosnąca sieć serwisów obsługująca Australię i rynki wysp Pacyfiku",
    "countries": [
    "Australia",
    "New Zealand",
    "Fiji"
    ]
    },
    {
    "name": "Bliski Wschód",
    "count": 7,
    "description": "Dostawy dla luksusowych kurortów i operatorów morskich w całym regionie Zatoki",
    "countries": [
    "UAE",
    "Saudi Arabia",
    "Qatar",
    "Oman",
    "Bahrain",
    "Kuwait",
    "Turkey"
    ]
    },
    {
    "name": "Afryka",
    "count": 5,
    "description": "Wschodzący rynek obsługujący turystykę nadbrzeżną i rybołówstwo",
    "countries": [
    "South Africa",
    "Egypt",
    "Morocco",
    "Kenya",
    "Mauritius"
    ]
    },
    {
    "name": "Ameryka Południowa",
    "count": 4,
    "description": "Rozwijająca się sieć dystrybucyjna w Ameryce Środkowej i Południowej",
    "countries": [
    "Brazil",
    "Chile",
    "Argentina",
    "Panama"
    ]
    }
  ],
  "keyMarkets": [
    {
    "region": "Ameryka Północna",
    "countries": [
    "US West Coast (CA, OR, WA)",
    "US East Coast (FL, NY)",
    "Great Lakes Region",
    "Canadian Coastal Provinces"
    ]
    },
    {
    "region": "Europa",
    "countries": [
    "Mediterranean Coast",
    "North Sea/Baltic",
    "UK & Ireland",
    "Alpine Lakes Region"
    ]
    },
    {
    "region": "Azja i Pacyfik",
    "countries": [
    "Coastal China",
    "Southeast Asia Islands",
    "Japan/Korea Peninsula",
    "Australia East Coast"
    ]
    }
  ]
},
  ar: {
 "regions": [
    {
    "name": "أوروبا",
    "count": 15,
    "description": "حضور قوي في أسواق الرياضات المائية الأوروبية مع مستودعات في ألمانيا وهولندا",
    "countries": [
    "United Kingdom",
    "Germany",
    "France",
    "Netherlands",
    "Italy",
    "Spain",
    "Poland",
    "Sweden",
    "Norway",
    "Denmark",
    "Finland",
    "Belgium",
    "Austria",
    "Switzerland",
    "Ireland"
    ]
    },
    {
    "name": "أمريكا الشمالية",
    "count": 4,
    "description": "سوق رئيسي مع مركز توزيع في الولايات المتحدة وشبكة وكلاء في كندا",
    "countries": [
    "United States",
    "Canada",
    "Mexico",
    "Costa Rica"
    ]
    },
    {
    "name": "آسيا",
    "count": 14,
    "description": "المقر الإقليمي في ويهاي مع شركاء في جميع أنحاء شرق آسيا وجنوب شرقها",
    "countries": [
    "China",
    "Japan",
    "South Korea",
    "Taiwan",
    "Thailand",
    "Vietnam",
    "Indonesia",
    "Malaysia",
    "Philippines",
    "Singapore",
    "India",
    "Sri Lanka",
    "Bangladesh",
    "Pakistan"
    ]
    },
    {
    "name": "أوقيانوسيا",
    "count": 3,
    "description": "شبكة وكلاء متنامية تخدم أستراليا وأسواق جزر المحيط الهادئ",
    "countries": [
    "Australia",
    "New Zealand",
    "Fiji"
    ]
    },
    {
    "name": "الشرق الأوسط",
    "count": 7,
    "description": "توريدات لمنتجعات فاخرة ومشغلين بحريين في جميع أنحاء منطقة الخليج",
    "countries": [
    "UAE",
    "Saudi Arabia",
    "Qatar",
    "Oman",
    "Bahrain",
    "Kuwait",
    "Turkey"
    ]
    },
    {
    "name": "أفريقيا",
    "count": 5,
    "description": "سوق ناشئ يخدم السياحة الساحلية وعمليات الصيد",
    "countries": [
    "South Africa",
    "Egypt",
    "Morocco",
    "Kenya",
    "Mauritius"
    ]
    },
    {
    "name": "أمريكا الجنوبية",
    "count": 4,
    "description": "شبكة توزيع متنامية في جميع أنحاء أمريكا الوسطى والجنوبية",
    "countries": [
    "Brazil",
    "Chile",
    "Argentina",
    "Panama"
    ]
    }
  ],
  "keyMarkets": [
    {
    "region": "أمريكا الشمالية",
    "countries": [
    "US West Coast (CA, OR, WA)",
    "US East Coast (FL, NY)",
    "Great Lakes Region",
    "Canadian Coastal Provinces"
    ]
    },
    {
    "region": "أوروبا",
    "countries": [
    "Mediterranean Coast",
    "North Sea/Baltic",
    "UK & Ireland",
    "Alpine Lakes Region"
    ]
    },
    {
    "region": "آسيا والمحيط الهادئ",
    "countries": [
    "Coastal China",
    "Southeast Asia Islands",
    "Japan/Korea Peninsula",
    "Australia East Coast"
    ]
    }
  ]
},
  pt: {
 "regions": [
    {
    "name": "Europa",
    "count": 15,
    "description": "Forte presença nos mercados europeus de desportos aquáticos com armazéns na Alemanha e nos Países Baixos",
    "countries": [
    "United Kingdom",
    "Germany",
    "France",
    "Netherlands",
    "Italy",
    "Spain",
    "Poland",
    "Sweden",
    "Norway",
    "Denmark",
    "Finland",
    "Belgium",
    "Austria",
    "Switzerland",
    "Ireland"
    ]
    },
    {
    "name": "América do Norte",
    "count": 4,
    "description": "Mercado principal com centro de distribuição nos EUA e rede de concessionários no Canadá",
    "countries": [
    "United States",
    "Canada",
    "Mexico",
    "Costa Rica"
    ]
    },
    {
    "name": "Ásia",
    "count": 14,
    "description": "Sede regional em Weihai com parceiros em toda a Ásia Oriental e Sudeste Asiático",
    "countries": [
    "China",
    "Japan",
    "South Korea",
    "Taiwan",
    "Thailand",
    "Vietnam",
    "Indonesia",
    "Malaysia",
    "Philippines",
    "Singapore",
    "India",
    "Sri Lanka",
    "Bangladesh",
    "Pakistan"
    ]
    },
    {
    "name": "Oceânia",
    "count": 3,
    "description": "Rede de distribuidores em crescimento que serve a Austrália e os mercados das ilhas do Pacífico",
    "countries": [
    "Australia",
    "New Zealand",
    "Fiji"
    ]
    },
    {
    "name": "Médio Oriente",
    "count": 7,
    "description": "Fornecimento a resorts de luxo e operadores marítimos em toda a região do Golfo",
    "countries": [
    "UAE",
    "Saudi Arabia",
    "Qatar",
    "Oman",
    "Bahrain",
    "Kuwait",
    "Turkey"
    ]
    },
    {
    "name": "África",
    "count": 5,
    "description": "Mercado emergente que serve o turismo costeiro e as operações de pesca",
    "countries": [
    "South Africa",
    "Egypt",
    "Morocco",
    "Kenya",
    "Mauritius"
    ]
    },
    {
    "name": "América do Sul",
    "count": 4,
    "description": "Rede de distribuição em expansão na América Central e do Sul",
    "countries": [
    "Brazil",
    "Chile",
    "Argentina",
    "Panama"
    ]
    }
  ],
  "keyMarkets": [
    {
    "region": "América do Norte",
    "countries": [
    "US West Coast (CA, OR, WA)",
    "US East Coast (FL, NY)",
    "Great Lakes Region",
    "Canadian Coastal Provinces"
    ]
    },
    {
    "region": "Europa",
    "countries": [
    "Mediterranean Coast",
    "North Sea/Baltic",
    "UK & Ireland",
    "Alpine Lakes Region"
    ]
    },
    {
    "region": "Ásia-Pacífico",
    "countries": [
    "Coastal China",
    "Southeast Asia Islands",
    "Japan/Korea Peninsula",
    "Australia East Coast"
    ]
    }
  ]
},
  };

export const worldMapUi: Record<string, { title: string; countriesServed: string; subtitle: string; keyMarketsTitle: string }> = {
  de: {
 "title": "Globale Kundenkarte",
 "countriesServed": "Belieferte Länder",
 "subtitle": "Von Resorts auf den Malediven bis zu SUP-Clubs in Kalifornien – Paddle Board Overstock-Ausrüstung treibt Wasserabenteuer in {total}+ Ländern auf {n} Kontinenten an.",
 "keyMarketsTitle": "Schlüsselmärkte nach Region"
},
  es: {
 "title": "Mapa Global de Clientes",
 "countriesServed": "Países Atendidos",
 "subtitle": "Desde resorts en las Maldivas hasta clubes de SUP en California, el equipo de Paddle Board Overstock impulsa aventuras acuáticas en más de {total} países en {n} continentes.",
 "keyMarketsTitle": "Mercados Clave por Región"
},
  fr: {
 "title": "Carte Mondiale des Clients",
 "countriesServed": "Pays Desservis",
 "subtitle": "Des resorts des Maldives aux clubs de SUP de Californie, l'équipement Paddle Board Overstock propulse les aventures nautiques dans plus de {total} pays sur {n} continents.",
 "keyMarketsTitle": "Marchés Clés par Région"
},
  it: {
 "title": "Mappa Globale dei Clienti",
 "countriesServed": "Paesi Serviti",
 "subtitle": "Dai resort alle Maldive ai club SUP in California, le attrezzature Paddle Board Overstock alimentano avventure acquatiche in più di {total} paesi su {n} continenti.",
 "keyMarketsTitle": "Mercati Chiave per Regione"
},
            ru: {
 "title": "Карта клиентов по всему миру",
 "countriesServed": "Обслуживаемые страны",
 "subtitle": "От курортов на Мальдивах до клубов сапсёрфинга в Калифорнии — оборудование Paddle Board Overstock открывает приключения на воде в {total}+ странах на {n} континентах.",
 "keyMarketsTitle": "Ключевые рынки по регионам"
},
  nl: {
 "title": "Wereldwijde klantkaart",
 "countriesServed": "Bediende landen",
 "subtitle": "Van resorts op de Malediven tot SUP-clubs in Californië — Paddle Board Overstock-uitrusting drijft wateravonturen in {total}+ landen op {n} continenten.",
 "keyMarketsTitle": "Belangrijkste markten per regio"
},
    pl: {
 "title": "Światowa mapa klientów",
 "countriesServed": "Obsługiwane kraje",
 "subtitle": "Od kurortów na Malediwach po kluby SUP w Kalifornii — sprzęt Paddle Board Overstock napędza przygody na wodzie w ponad {total} krajach na {n} kontynentach.",
 "keyMarketsTitle": "Kluczowe rynki według regionu"
},
  ar: {
 "title": "خريطة العملاء العالمية",
 "countriesServed": "الدول التي نخدمها",
 "subtitle": "من المنتجعات في جزر المالديف إلى نوادي SUP في كاليفورنيا — تجهيزات Paddle Board Overstock تدعم مغامرات مائية في أكثر من {total} دولة عبر {n} قارات.",
 "keyMarketsTitle": "الأسواق الرئيسية حسب المنطقة"
},
  pt: {
 "title": "Mapa Global de Clientes",
 "countriesServed": "Países Servidos",
 "subtitle": "Dos resorts nas Maldivas aos clubes de SUP na Califórnia — o equipamento Paddle Board Overstock impulsiona aventuras aquáticas em mais de {total} países em {n} continentes.",
 "keyMarketsTitle": "Mercados-Chave por Região"
},
  };
