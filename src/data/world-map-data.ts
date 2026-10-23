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
      description: 'Major market with US distribution center and Canadian dealer network',
      countries: ['United States', 'Canada', 'Mexico', 'Costa Rica'],
    },
    {
      name: 'Asia',
      count: 14,
      description: 'Regional headquarters in Qingdao with partners across East and Southeast Asia',
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
      description: 'Growing dealer network serving Australia and Pacific island markets',
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
    "description": "Regionaler Hauptsitz in Qingdao mit Partnern in Ost- und Südostasien",
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
    "description": "Sede regional en Qingdao con socios en Asia Oriental y el Sudeste Asiático",
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
    "description": "Siège régional à Qingdao avec des partenaires en Asie de l'Est et du Sud-Est",
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
    "description": "Sede regionale a Qingdao con partner in Asia orientale e sudorientale",
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
  cs: {
 "regions": [
    {
    "name": "Evropa",
    "count": 15,
    "description": "Silné zastoupení na evropských trzích vodních sportů se sklady v Německu a Nizozemsku",
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
    "name": "Severní Amerika",
    "count": 4,
    "description": "Hlavní trh s distribučním centrem v USA a sítí dealerů v Kanadě",
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
    "description": "Regionální sídlo v Qingdau s partnery ve východní a jihovýchodní Asii",
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
    "name": "Oceánie",
    "count": 3,
    "description": "Rostoucí dealerská síť obsluhující Austrálii a trhy tichomořských ostrovů",
    "countries": [
    "Australia",
    "New Zealand",
    "Fiji"
    ]
    },
    {
    "name": "Blízký východ",
    "count": 7,
    "description": "Dodávky pro luxusní resorty a námořní provozovatele v celém regionu Perského zálivu",
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
    "description": "Rozvíjející se trh obsluhující pobřežní turistiku a rybaření",
    "countries": [
    "South Africa",
    "Egypt",
    "Morocco",
    "Kenya",
    "Mauritius"
    ]
    },
    {
    "name": "Jižní Amerika",
    "count": 4,
    "description": "Rozšiřující se distribuční síť ve Střední a Jižní Americe",
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
    "region": "Severní Amerika",
    "countries": [
    "US West Coast (CA, OR, WA)",
    "US East Coast (FL, NY)",
    "Great Lakes Region",
    "Canadian Coastal Provinces"
    ]
    },
    {
    "region": "Evropa",
    "countries": [
    "Mediterranean Coast",
    "North Sea/Baltic",
    "UK & Ireland",
    "Alpine Lakes Region"
    ]
    },
    {
    "region": "Asie a Tichomoří",
    "countries": [
    "Coastal China",
    "Southeast Asia Islands",
    "Japan/Korea Peninsula",
    "Australia East Coast"
    ]
    }
 ]
},
  sv: {
 "regions": [
    {
    "name": "Europa",
    "count": 15,
    "description": "Stark närvaro på europeiska vattensportmarknader med lager i Tyskland och Nederländerna",
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
    "description": "Stor marknad med distributionscenter i USA och återförsäljarnätverk i Kanada",
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
    "description": "Regionalt huvudkontor i Qingdao med partners i hela östra och sydöstra Asien",
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
    "name": "Oceanien",
    "count": 3,
    "description": "Växande återförsäljarnätverk som betjänar Australien och marknader på Stillahavsöarna",
    "countries": [
    "Australia",
    "New Zealand",
    "Fiji"
    ]
    },
    {
    "name": "Mellanöstern",
    "count": 7,
    "description": "Leveranser till lyxresorter och marina operatörer i hela Gulfregionen",
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
    "description": "Växande marknad som betjänar kustturism och fiskeverksamhet",
    "countries": [
    "South Africa",
    "Egypt",
    "Morocco",
    "Kenya",
    "Mauritius"
    ]
    },
    {
    "name": "Sydamerika",
    "count": 4,
    "description": "Expanderande distributionsnätverk i Central- och Sydamerika",
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
    "region": "Asien och Stillahavsregionen",
    "countries": [
    "Coastal China",
    "Southeast Asia Islands",
    "Japan/Korea Peninsula",
    "Australia East Coast"
    ]
    }
 ]
},
  da: {
 "regions": [
    {
    "name": "Europa",
    "count": 15,
    "description": "Stærk tilstedeværelse på europæiske vandsportsmarkeder med lagre i Tyskland og Holland",
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
    "description": "Stort marked med distributionscenter i USA og forhandlernetværk i Canada",
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
    "description": "Regionalt hovedkontor i Qingdao med partnere i hele Øst- og Sydøstasien",
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
    "name": "Oceanien",
    "count": 3,
    "description": "Voksende forhandlernetværk, der betjener Australien og markeder på Stillehavsøerne",
    "countries": [
    "Australia",
    "New Zealand",
    "Fiji"
    ]
    },
    {
    "name": "Mellemøsten",
    "count": 7,
    "description": "Leverancer til luksusresorts og maritime operatører i hele Golfregionen",
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
    "description": "Emergerende marked, der betjener kystturisme og fiskeri",
    "countries": [
    "South Africa",
    "Egypt",
    "Morocco",
    "Kenya",
    "Mauritius"
    ]
    },
    {
    "name": "Sydamerika",
    "count": 4,
    "description": "Ekspanderende distributionsnetværk i Central- og Sydamerika",
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
    "region": "Asien og Stillehavsregionen",
    "countries": [
    "Coastal China",
    "Southeast Asia Islands",
    "Japan/Korea Peninsula",
    "Australia East Coast"
    ]
    }
 ]
},
  no: {
 "regions": [
    {
    "name": "Europa",
    "count": 15,
    "description": "Sterk tilstedeværelse i europeiske vannsportsmarkeder med lagre i Tyskland og Nederland",
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
    "description": "Stort marked med distribusjonssenter i USA og forhandlernettverk i Canada",
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
    "description": "Regionalt hovedkontor i Qingdao med partnere i hele Øst- og Sørøst-Asia",
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
    "name": "Oseania",
    "count": 3,
    "description": "Voksende forhandlernettverk som betjener Australia og markeder på Stillehavsøyene",
    "countries": [
    "Australia",
    "New Zealand",
    "Fiji"
    ]
    },
    {
    "name": "Midtøsten",
    "count": 7,
    "description": "Leveranser til luksusresorter og marine operatører i hele Gulf-regionen",
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
    "description": "Emergerende marked som betjener kystturisme og fiskevirksomhet",
    "countries": [
    "South Africa",
    "Egypt",
    "Morocco",
    "Kenya",
    "Mauritius"
    ]
    },
    {
    "name": "Sør-Amerika",
    "count": 4,
    "description": "Ekspanderende distribusjonsnettverk i Mellom- og Sør-Amerika",
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
    "region": "Asia og Stillehavsregionen",
    "countries": [
    "Coastal China",
    "Southeast Asia Islands",
    "Japan/Korea Peninsula",
    "Australia East Coast"
    ]
    }
 ]
},
  el: {
 "regions": [
    {
    "name": "Ευρώπη",
    "count": 15,
    "description": "Ισχυρή παρουσία στις ευρωπαϊκές αγορές θαλάσσιων σπορ με αποθήκες στη Γερμανία και την Ολλανδία",
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
    "name": "Βόρεια Αμερική",
    "count": 4,
    "description": "Μεγάλη αγορά με κέντρο διανομής στις ΗΠΑ και δίκτυο αντιπροσώπων στον Καναδά",
    "countries": [
    "United States",
    "Canada",
    "Mexico",
    "Costa Rica"
    ]
    },
    {
    "name": "Ασία",
    "count": 14,
    "description": "Περιφερειακή έδρα στο Qingdao με συνεργάτες σε όλη την Ανατολική και Νοτιοανατολική Ασία",
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
    "name": "Ωκεανία",
    "count": 3,
    "description": "Αναπτυσσόμενο δίκτυο αντιπροσώπων που εξυπηρετεί την Αυστραλία και τις αγορές των νησιών του Ειρηνικού",
    "countries": [
    "Australia",
    "New Zealand",
    "Fiji"
    ]
    },
    {
    "name": "Μέση Ανατολή",
    "count": 7,
    "description": "Προμήθειες σε πολυτελή θέρετρα και θαλάσσιους παρόχους σε όλη την περιοχή του Κόλπου",
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
    "name": "Αφρική",
    "count": 5,
    "description": "Αναδυόμενη αγορά που εξυπηρετεί τον παράκτιο τουρισμό και την αλιεία",
    "countries": [
    "South Africa",
    "Egypt",
    "Morocco",
    "Kenya",
    "Mauritius"
    ]
    },
    {
    "name": "Νότια Αμερική",
    "count": 4,
    "description": "Επεκτεινόμενο δίκτυο διανομής στην Κεντρική και Νότια Αμερική",
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
    "region": "Βόρεια Αμερική",
    "countries": [
    "US West Coast (CA, OR, WA)",
    "US East Coast (FL, NY)",
    "Great Lakes Region",
    "Canadian Coastal Provinces"
    ]
    },
    {
    "region": "Ευρώπη",
    "countries": [
    "Mediterranean Coast",
    "North Sea/Baltic",
    "UK & Ireland",
    "Alpine Lakes Region"
    ]
    },
    {
    "region": "Ασία και Ειρηνικός",
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
    "description": "Региональная штаб-квартира в Циндао с партнёрами по всей Восточной и Юго-Восточной Азии",
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
    "description": "Belangrijke markt met distributiecentrum in de VS en dealernetwerk in Canada",
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
    "description": "Regionaal hoofdkantoor in Qingdao met partners in heel Oost- en Zuidoost-Azië",
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
    "description": "Groeiend dealernetwerk voor Australië en de markten op de eilanden in de Stille Oceaan",
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
  fi: {
 "regions": [
    {
    "name": "Eurooppa",
    "count": 15,
    "description": "Vahva läsnäolo Euroopan vesiurheilumarkkinoilla varastojen ollessa Saksassa ja Alankomaissa",
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
    "name": "Pohjois-Amerikka",
    "count": 4,
    "description": "Suuri markkina-alue, jossa on jakelukeskus Yhdysvalloissa ja jälleenmyyjäverkosto Kanadassa",
    "countries": [
    "United States",
    "Canada",
    "Mexico",
    "Costa Rica"
    ]
    },
    {
    "name": "Aasia",
    "count": 14,
    "description": "Alueellinen pääkonttori Qingdaossa kumppaneineen Itä- ja Kaakkois-Aasiassa",
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
    "name": "Oseania",
    "count": 3,
    "description": "Kasvava jälleenmyyjäverkosto, joka palvelee Australiaa ja Tyynenmeren saarten markkinoita",
    "countries": [
    "Australia",
    "New Zealand",
    "Fiji"
    ]
    },
    {
    "name": "Lähi-itä",
    "count": 7,
    "description": "Toimitukset luksuslomakeskuksille ja merenkulun toimijoille koko Persianlahden alueella",
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
    "name": "Afrikka",
    "count": 5,
    "description": "Nouseva markkina, joka palvelee rannikkoturismia ja kalastusta",
    "countries": [
    "South Africa",
    "Egypt",
    "Morocco",
    "Kenya",
    "Mauritius"
    ]
    },
    {
    "name": "Etelä-Amerikka",
    "count": 4,
    "description": "Laajeneva jakeluverkosto Keski- ja Etelä-Amerikassa",
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
    "region": "Pohjois-Amerikka",
    "countries": [
    "US West Coast (CA, OR, WA)",
    "US East Coast (FL, NY)",
    "Great Lakes Region",
    "Canadian Coastal Provinces"
    ]
    },
    {
    "region": "Eurooppa",
    "countries": [
    "Mediterranean Coast",
    "North Sea/Baltic",
    "UK & Ireland",
    "Alpine Lakes Region"
    ]
    },
    {
    "region": "Aasia ja Tyynenmeren alue",
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
    "description": "Główny rynek z centrum dystrybucji w USA i siecią dealerów w Kanadzie",
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
    "description": "Regionalna siedziba w Qingdao z partnerami w całej Azji Wschodniej i Południowo-Wschodniej",
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
    "description": "Rosnąca sieć dealerów obsługująca Australię i rynki wysp Pacyfiku",
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
    "description": "المقر الإقليمي في تشينغداو مع شركاء في جميع أنحاء شرق آسيا وجنوب شرقها",
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
    "description": "Sede regional em Qingdao com parceiros em toda a Ásia Oriental e Sudeste Asiático",
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
  ja: {
 "regions": [
    {
    "name": "ヨーロッパ",
    "count": 15,
    "description": "ドイツとオランダに倉庫を構え、ヨーロッパのウォータースポーツ市場で強い存在感",
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
    "name": "北アメリカ",
    "count": 4,
    "description": "米国に流通センターを構え、カナダにディーラーネットワークを持つ主要市場",
    "countries": [
    "United States",
    "Canada",
    "Mexico",
    "Costa Rica"
    ]
    },
    {
    "name": "アジア",
    "count": 14,
    "description": "青島に地域本部を置き、東アジア・東南アジア全域にパートナー",
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
    "name": "オセアニア",
    "count": 3,
    "description": "オーストラリアと太平洋の島々の市場に対応する成長中のディーラーネットワーク",
    "countries": [
    "Australia",
    "New Zealand",
    "Fiji"
    ]
    },
    {
    "name": "中東",
    "count": 7,
    "description": "湾岸地域全体の高級リゾートや海洋事業者への供給",
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
    "name": "アフリカ",
    "count": 5,
    "description": "沿岸観光と漁業に対応する新興市場",
    "countries": [
    "South Africa",
    "Egypt",
    "Morocco",
    "Kenya",
    "Mauritius"
    ]
    },
    {
    "name": "南アメリカ",
    "count": 4,
    "description": "中南米で拡大する流通ネットワーク",
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
    "region": "北アメリカ",
    "countries": [
    "US West Coast (CA, OR, WA)",
    "US East Coast (FL, NY)",
    "Great Lakes Region",
    "Canadian Coastal Provinces"
    ]
    },
    {
    "region": "ヨーロッパ",
    "countries": [
    "Mediterranean Coast",
    "North Sea/Baltic",
    "UK & Ireland",
    "Alpine Lakes Region"
    ]
    },
    {
    "region": "アジア太平洋",
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
 "subtitle": "Von Resorts auf den Malediven bis zu SUP-Clubs in Kalifornien – Aquafarer-Ausrüstung treibt Wasserabenteuer in {total}+ Ländern auf {n} Kontinenten an.",
 "keyMarketsTitle": "Schlüsselmärkte nach Region"
},
  es: {
 "title": "Mapa Global de Clientes",
 "countriesServed": "Países Atendidos",
 "subtitle": "Desde resorts en las Maldivas hasta clubes de SUP en California, el equipo de Aquafarer impulsa aventuras acuáticas en más de {total} países en {n} continentes.",
 "keyMarketsTitle": "Mercados Clave por Región"
},
  fr: {
 "title": "Carte Mondiale des Clients",
 "countriesServed": "Pays Desservis",
 "subtitle": "Des resorts des Maldives aux clubs de SUP de Californie, l'équipement Aquafarer propulse les aventures nautiques dans plus de {total} pays sur {n} continents.",
 "keyMarketsTitle": "Marchés Clés par Région"
},
  it: {
 "title": "Mappa Globale dei Clienti",
 "countriesServed": "Paesi Serviti",
 "subtitle": "Dai resort alle Maldive ai club SUP in California, le attrezzature Aquafarer alimentano avventure acquatiche in più di {total} paesi su {n} continenti.",
 "keyMarketsTitle": "Mercati Chiave per Regione"
},
  cs: {
 "title": "Globální mapa zákazníků",
 "countriesServed": "Obsluhované země",
 "subtitle": "Od resortů na Maledivách po kluby SUP v Kalifornii — vybavení Aquafarer pohání vodní dobrodružství ve více než {total} zemích na {n} kontinentech.",
 "keyMarketsTitle": "Klíčové trhy podle regionu"
},
  sv: {
 "title": "Global kundkarta",
 "countriesServed": "Länder vi betjänar",
 "subtitle": "Från resorter på Maldiverna till SUP-klubbar i Kalifornien — Aquafarer-utrustning driver vattenäventyr i {total}+ länder på {n} kontinenter.",
 "keyMarketsTitle": "Nyckelmarknader per region"
},
  da: {
 "title": "Globalt kundekort",
 "countriesServed": "Betjente lande",
 "subtitle": "Fra resorts på Maldiverne til SUP-klubber i Californien — Aquafarer-udstyr driver vandeventyr i {total}+ lande på {n} kontinenter.",
 "keyMarketsTitle": "Nøglemarkeder pr. region"
},
  no: {
 "title": "Globalt kundekart",
 "countriesServed": "Land vi betjener",
 "subtitle": "Fra resorter på Maldivene til SUP-klubber i California — Aquafarer-utstyr driver vanneventyr i {total}+ land på {n} kontinenter.",
 "keyMarketsTitle": "Nøkkelmarkeder per region"
},
  el: {
 "title": "Παγκόσμιος χάρτης πελατών",
 "countriesServed": "Χώρες που εξυπηρετούμε",
 "subtitle": "Από θέρετρα στις Μαλδίβες έως σύλλογους SUP στην Καλιφόρνια — ο εξοπλισμός Aquafarer τροφοδοτεί θαλάσσιες περιπέτειες σε {total}+ χώρες σε {n} ηπείρους.",
 "keyMarketsTitle": "Βασικές αγορές ανά περιοχή"
},
  ru: {
 "title": "Карта клиентов по всему миру",
 "countriesServed": "Обслуживаемые страны",
 "subtitle": "От курортов на Мальдивах до клубов сапсёрфинга в Калифорнии — оборудование Aquafarer открывает приключения на воде в {total}+ странах на {n} континентах.",
 "keyMarketsTitle": "Ключевые рынки по регионам"
},
  nl: {
 "title": "Wereldwijde klantkaart",
 "countriesServed": "Bediende landen",
 "subtitle": "Van resorts op de Malediven tot SUP-clubs in Californië — Aquafarer-uitrusting drijft wateravonturen in {total}+ landen op {n} continenten.",
 "keyMarketsTitle": "Belangrijkste markten per regio"
},
  fi: {
 "title": "Maailmanlaajuinen asiakaskartta",
 "countriesServed": "Palvelemamme maat",
 "subtitle": "Malediivien lomakeskuksista Kalifornian SUP-klubeihin — Aquafarerin varusteet mahdollistavat vesiseikkailut yli {total} maassa {n} mantereella.",
 "keyMarketsTitle": "Avainmarkkinat alueittain"
},
  pl: {
 "title": "Światowa mapa klientów",
 "countriesServed": "Obsługiwane kraje",
 "subtitle": "Od kurortów na Malediwach po kluby SUP w Kalifornii — sprzęt Aquafarer napędza przygody na wodzie w ponad {total} krajach na {n} kontynentach.",
 "keyMarketsTitle": "Kluczowe rynki według regionu"
},
  ar: {
 "title": "خريطة العملاء العالمية",
 "countriesServed": "الدول التي نخدمها",
 "subtitle": "من المنتجعات في جزر المالديف إلى نوادي SUP في كاليفورنيا — تجهيزات Aquafarer تدعم مغامرات مائية في أكثر من {total} دولة عبر {n} قارات.",
 "keyMarketsTitle": "الأسواق الرئيسية حسب المنطقة"
},
  pt: {
 "title": "Mapa Global de Clientes",
 "countriesServed": "Países Servidos",
 "subtitle": "Dos resorts nas Maldivas aos clubes de SUP na Califórnia — o equipamento Aquafarer impulsiona aventuras aquáticas em mais de {total} países em {n} continentes.",
 "keyMarketsTitle": "Mercados-Chave por Região"
},
  ja: {
 "title": "グローバル顧客マップ",
 "countriesServed": "対応国",
 "subtitle": "モルディブのリゾートからカリフォルニアの SUP クラブまで — Aquafarer の器材が {total} カ国以上、{n} 大陸のウォーターアドベンチャーを支えています。",
 "keyMarketsTitle": "地域別主要市場"
},
};
