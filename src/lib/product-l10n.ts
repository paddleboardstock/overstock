import { PRODUCT_L10N_MT, SKILL_L10N_MT } from '~/lib/product-l10n-mt';
import { PRODUCT_EXTRAS } from '~/lib/product-extras';

export interface ProductL10n {
  titles: Record<string, string>;
  summaries: Record<string, string>;
  labels: Record<string, string>;
  cats: Record<string, string>;
}

export const PRODUCT_L10N: Record<string, ProductL10n> = {
  de: {
    titles: {
      'life-vest-classic': 'Rettungsweste Classic',
      'life-vest-pro': 'Rettungsweste Pro',
      'oars-pump-set': 'Ruder- & Pumpen-Set',
      'sup-cheetah-surge': 'Cheetah Surge Edition',
      'sup-dolphin-wave': 'Dolphin Wave Serie',
      'sup-explorer-11': "SUP Explorer 11'",
      'sup-flowing-lotus': 'Flowing Lotus Serie',
      'sup-jungle-mandala': 'Jungle Mandala Serie',
      'sup-leviathan-wake': 'Leviathan Wake Serie (Wal-Edition)',
      'sup-medusa-glow': 'Medusa Glow Serie (Quallen-Edition)',
      'sup-ocean-pulse': 'Ocean Pulse Serie',
      'sup-ocean-voyager': 'Ocean Voyager Serie',
      'sup-tropical-breeze': 'Tropical Breeze Island Escape Serie',
    },
    summaries: {
      'life-vest-classic': 'CE-zertifizierte universelle Auftriebshilfe für Freizeitwassersport.',
      'life-vest-pro': 'SOLAS-konforme automatische aufblasbare Rettungsweste für Offshore- und Rettungseinsätze.',
      'oars-pump-set':
        'Paar 1.6 m Aluminiumruder und 5 L Fußluftpumpe mit hoher Förderleistung. Passt auf alle Schlauchboote der Serie.',
      'sup-cheetah-surge':
        'Vom Wildtier inspirierter Allround-SUP-Board mit hochwertiger mehrfarbiger EVA-Blockzusammensetzung und Gepardenmotiv in Pastellrosa, Petrol und Koralle. Perfekt für Flachwasser-Cruisen und Lifestyle-Paddeln.',
      'sup-dolphin-wave':
        'Vom Delfin inspirierter Allround-SUP-Board mit mittelalterlich-blauen Wellen, hochpräziser EVA-Farbblock-Konfektionierung und 360°-Meeresästhetik. Ideal für Flachwasser-Cruisen und Freizeitpaddeln.',
      'sup-explorer-11':
        'Vielseitiges 11 ft aufblasbares Allround-SUP-Board mit breiter Rumpfstabilität für Anfänger und Freizeitpaddler.',
      'sup-flowing-lotus':
        'Von östlicher Kunst inspirierter Allround-SUP-Board mit Lotus-, Koi- und Libellenmotiven, mit lasergraviertem Traktionspad und Verlaufs-Wasserstrom-Artwork. Ideal für entspanntes Paddeln und Yoga.',
      'sup-jungle-mandala':
        'Von tropischem Regenwald und Mandalas inspirierter Allround-SUP-Board mit Hibiskus, Kolibris und symmetrischen geometrischen Totems in Tiffany-Blau und Korallenorange. Perfekt für tropische Reiseziele.',
      'sup-leviathan-wake':
        'Vom Ozean inspirierter Allround-SUP-Board mit majestätischem Blauwal-Totem, geometrischen und Tribal-Mustern sowie minimalistischen schwarz-weißen Dünungslinien. Für Ozean-Enthusiasten.',
      'sup-medusa-glow':
        'Verträumter, von Quallen inspirierter Allround-SUP mit hochwertiger mehrfarbiger EVA-Blockzusammensetzung, Seesternen und Korallenriff-Artwork in erfrischendem Mintgrün. Für tropische und Küstenabenteuer.',
      'sup-ocean-pulse':
        'Von topografischen Wellen inspirierter Allround-SUP-Board mit Tiffany-Blau-Konturen, hochpräziser mechanischer Prägung und ästhetisch einheitlichem Zubehörkit. Für Lifestyle-Paddler und Boutique-Abenteurer.',
      'sup-ocean-voyager':
        'Von Meeresschildkröten inspirierter Allround-SUP-Board mit hochwertiger mehrfarbiger EVA-Blockzusammensetzung in tiefem Petrol, Türkis und Korallenorange. Für Ozeanliebhaber und Tourenpaddler.',
      'sup-tropical-breeze':
        'Von Inselparadiesen inspirierter Allround-SUP-Board mit einer kompletten Inselurlaubsmotiv-Fläche aus Sonnenschein, Kokoshainen und Strandszenen. Für tropische Auszeiten und Lifestyle-Paddeln.',
    },
    labels: {
      'Air chambers': 'Luftkammern',

      'Catamaran beam': 'Katamaran-Breite',

      'Conversion time': 'Umrüstzeit',
      'Cylinder diameter': 'Zylinderdurchmesser',

      'Deck material': 'Deckmaterial',

      'Expected service life': 'Erwartete Lebensdauer',

      'Floor material': 'Bodenmaterial',
      'Floor thickness': 'Bodendicke',

      'Fuel tank': 'Kraftstofftank',

      'Hull material': 'Rumpfmaterial',
      'Hull weight': 'Rumpfgewicht',
      'IR signature': 'IR-Signatur',

      'Inflation pressure': 'Aufblasdruck',
      'Kayak beam': 'Kajak-Breite',

      'Load capacity': 'Tragfähigkeit',

      'Max capacity': 'Max. Kapazität',
      'Max engine': 'Max. Motor',
      'Max engine power': 'Max. Motorleistung',
      'Max load': 'Max. Last',
      'Max occupants': 'Max. Insassen',
      'Max persons': 'Max. Personen',
      'Max power': 'Max. Leistung',
      'Max pressure': 'Max. Druck',
      'Max pressure (deck)': 'Max. Druck (Deck)',
      'Max pressure (tubes)': 'Max. Druck (Schläuche)',
      'Max speed': 'Max. Geschwindigkeit',

      'Net weight': 'Eigengewicht',
      'Oar length': 'Ruderlänge',
      'Oar material': 'Rudermaterial',
      'Operating range': 'Einsatzbereich',
      'Overall length': 'Gesamtlänge',
      'Pack size': 'Packmaß',

      'Pump max pressure': 'Pumpe max. Druck',
      'Pump volume': 'Pumpvolumen',
      'Recommended power': 'Empfohlene Leistung',

      'Setup time': 'Aufbauzeit',
      'Side tube material': 'Seitenrohrmaterial',

      'Standard configuration': 'Standardausstattung',

      'Tube diameter': 'Rohrdurchmesser',
      'Tube material': 'Rohrmaterial',

      'Weight (hull only)': 'Gewicht (nur Rumpf)',

      'Air Chambers': 'Luftkammern',
      Artwork: 'Kunstwerk',
      Backup: 'Backup',
      Beam: 'Breite',
      'Boat Weight': 'Bootsgewicht',
      Bottom: 'Boden',
      Buoyancy: 'Auftrieb',
      Capacity: 'Kapazität',
      Certification: 'Zertifizierung',
      Chambers: 'Kammern',
      Closure: 'Verschluss',
      Compatibility: 'Kompatibilität',
      Deadrise: 'Deadrise',
      Deck: 'Deck',
      Deployment: 'Einsatz',
      'Design Category': 'Entwurfskategorie',
      'Engine Shaft': 'Motorwelle',
      Features: 'Merkmale',
      Floor: 'Boden',
      Frame: 'Rahmen',
      'Fuel Tank': 'Kraftstofftank',
      Height: 'Höhe',
      Included: 'Lieferumfang',
      Inflation: 'Aufblasen',
      'Internal Beam': 'Innere Breite',
      'Internal Length': 'Innere Länge',
      Length: 'Länge',
      Material: 'Material',
      'Max Engine Weight': 'Max. Motorgewicht',
      'Max Load': 'Max. Last',
      'Max Persons': 'Max. Personen',
      'Max Power': 'Max. Leistung',
      Models: 'Modelle',
      Mounting: 'Montage',
      'Overall Length': 'Gesamtlänge',
      Pontoons: 'Pontons',
      Pressure: 'Druck',
      'Recommended Power': 'Empfohlene Leistung',
      Seams: 'Nähte',
      Seats: 'Sitzplätze',
      'Shipping Dimensions': 'Versandmaße',
      Sizes: 'Größen',
      Thickness: 'Dicke',
      'Tube Diameter': 'Schlauchdurchmesser',
      Type: 'Typ',
      Valves: 'Ventile',
      Warranty: 'Garantie',
      Weight: 'Gewicht',
      Width: 'Breite',
    },
    cats: {
      rib: 'RIB-Boote',
      inflatable: 'Schlauchboote',
      sup: 'SUP-Stehpaddelbretter',
      accessory: 'Zubehör',
      kayak: 'Kajaks & Katamarane',
      service: 'Dienstleistungen',
    },
  },
  es: {
    titles: {
      'life-vest-classic': 'Chaleco salvavidas Classic',
      'life-vest-pro': 'Chaleco salvavidas Pro',
      'oars-pump-set': 'Juego de remos y bomba',
      'sup-cheetah-surge': 'Edición Cheetah Surge',
      'sup-dolphin-wave': 'Serie Dolphin Wave',
      'sup-explorer-11': "SUP Explorer 11'",
      'sup-flowing-lotus': 'Serie Flowing Lotus',
      'sup-jungle-mandala': 'Serie Jungle Mandala',
      'sup-leviathan-wake': 'Serie Leviathan Wake (edición ballena)',
      'sup-medusa-glow': 'Serie Medusa Glow (edición medusa)',
      'sup-ocean-pulse': 'Serie Ocean Pulse',
      'sup-ocean-voyager': 'Serie Ocean Voyager',
      'sup-tropical-breeze': 'Serie Tropical Breeze Island Escape',
    },
    summaries: {
      'life-vest-classic': 'Ayuda a la flotación universal certificada CE para deportes acuáticos recreativos.',
      'life-vest-pro':
        'Chaleco salvavidas hinchable automático conforme a SOLAS para operaciones en alta mar y de rescate.',
      'oars-pump-set':
        'Par de remos de aluminio de 1.6 m y bomba de pie de 5 L de alto caudal. Compatible con todos los hinchables de la gama.',
      'sup-cheetah-surge':
        'Tabla de SUP polivalente de inspiración salvaje con ensamblaje premium de bloques de EVA multicolor, con un motivo de guepardo en rosa pastel, verde azulado y coral. Perfecta para navegar en aguas tranquilas y remo de estilo de vida.',
      'sup-dolphin-wave':
        'Tabla de SUP polivalente inspirada en delfines, con olas azul medieval, splicing de bloques de color EVA de alta precisión y estética marina 360. Ideal para navegar en aguas tranquilas y remo recreativo.',
      'sup-explorer-11':
        'Tabla de SUP hinchable polivalente de 11 ft versátil con estabilidad de cuerpo ancho para principiantes y remeros recreativos.',
      'sup-flowing-lotus':
        'Tabla de SUP polivalente inspirada en el arte oriental, con motivos de loto, koi y libélula, pad antideslizante grabado con láser y obra de arte de flujo de agua en degradado. Ideal para remo tranquilo y yoga.',
      'sup-jungle-mandala':
        'Tabla de SUP polivalente inspirada en la selva tropical y los mandalas, con hibiscos, colibríes y tótems geométricos simétricos en azul Tiffany y naranja coral. Perfecta para destinos tropicales.',
      'sup-leviathan-wake':
        'Tabla de SUP polivalente inspirada en el océano, con un majestuoso tótem de ballena azul con patrones geométricos y tribales, combinado con líneas de oleaje minimalistas en blanco y negro. Para los amantes del océano.',
      'sup-medusa-glow':
        'SUP polivalente de ensueño inspirado en las medusas, con ensamblaje premium de bloques de EVA multicolor, estrellas de mar y arte de arrecife de coral en verde menta refrescante. Para aventuras tropicales y costeras.',
      'sup-ocean-pulse':
        'Tabla de SUP polivalente inspirada en las olas topográficas, con contornos azul Tiffany, gofrado mecánico de alta precisión y kit de accesorios de estética unificada. Para remeros de estilo de vida y aventureros boutique.',
      'sup-ocean-voyager':
        'Tabla de SUP polivalente inspirada en las tortugas marinas, con ensamblaje premium de bloques de EVA multicolor en verde azulado profundo, turquesa y naranja coral. Para amantes del océano y remeros de travesía.',
      'sup-tropical-breeze':
        'Tabla de SUP polivalente inspirada en el paraíso insular, con un lienzo completo de vacaciones en la isla: sol, cocoteros y escenas de playa. Para escapadas tropicales y remo de estilo de vida.',
    },
    labels: {
      'Air chambers': 'Cámaras de aire',

      'Catamaran beam': 'Manga en catamarán',

      'Conversion time': 'Tiempo de conversión',
      'Cylinder diameter': 'Diámetro del cilindro',

      'Deck material': 'Material de la cubierta',

      'Expected service life': 'Vida útil prevista',

      'Floor material': 'Material del piso',
      'Floor thickness': 'Grosor del piso',

      'Fuel tank': 'Depósito de combustible',

      'Hull material': 'Material del casco',
      'Hull weight': 'Peso del casco',
      'IR signature': 'Firma IR',

      'Inflation pressure': 'Presión de inflado',
      'Kayak beam': 'Manga en kayak',

      'Load capacity': 'Capacidad de carga',

      'Max capacity': 'Capacidad máxima',
      'Max engine': 'Motor máx.',
      'Max engine power': 'Potencia máx. del motor',
      'Max load': 'Carga máxima',
      'Max occupants': 'Ocupantes máx.',
      'Max persons': 'Personas máx.',
      'Max power': 'Potencia máx.',
      'Max pressure': 'Presión máx.',
      'Max pressure (deck)': 'Presión máx. (cubierta)',
      'Max pressure (tubes)': 'Presión máx. (tubos)',
      'Max speed': 'Velocidad máx.',

      'Net weight': 'Peso neto',
      'Oar length': 'Longitud del remo',
      'Oar material': 'Material del remo',
      'Operating range': 'Rango de funcionamiento',
      'Overall length': 'Eslora total',
      'Pack size': 'Tamaño del paquete',

      'Pump max pressure': 'Presión máx. de la bomba',
      'Pump volume': 'Volumen de la bomba',
      'Recommended power': 'Potencia recomendada',

      'Setup time': 'Tiempo de montaje',
      'Side tube material': 'Material del tubo lateral',

      'Standard configuration': 'Configuración estándar',

      'Tube diameter': 'Diámetro del tubo',
      'Tube material': 'Material del tubo',

      'Weight (hull only)': 'Peso (solo casco)',

      'Air Chambers': 'Cámaras de aire',
      Artwork: 'Diseño artístico',
      Backup: 'Respaldo',
      Beam: 'Manga',
      'Boat Weight': 'Peso del barco',
      Bottom: 'Fondo',
      Buoyancy: 'Flotabilidad',
      Capacity: 'Capacidad',
      Certification: 'Certificación',
      Chambers: 'Cámaras',
      Closure: 'Cierre',
      Compatibility: 'Compatibilidad',
      Deadrise: 'Deadrise',
      Deck: 'Cubierta',
      Deployment: 'Despliegue',
      'Design Category': 'Categoría de diseño',
      'Engine Shaft': 'Eje del motor',
      Features: 'Características',
      Floor: 'Suelo',
      Frame: 'Estructura',
      'Fuel Tank': 'Depósito de combustible',
      Height: 'Altura',
      Included: 'Incluido',
      Inflation: 'Inflado',
      'Internal Beam': 'Manga interior',
      'Internal Length': 'Eslora interior',
      Length: 'Eslora',
      Material: 'Material',
      'Max Engine Weight': 'Peso máx. del motor',
      'Max Load': 'Carga máx.',
      'Max Persons': 'Personas máx.',
      'Max Power': 'Potencia máx.',
      Models: 'Modelos',
      Mounting: 'Montaje',
      'Overall Length': 'Eslora total',
      Pontoons: 'Pantalanes',
      Pressure: 'Presión',
      'Recommended Power': 'Potencia recomendada',
      Seams: 'Costuras',
      Seats: 'Asientos',
      'Shipping Dimensions': 'Dimensiones de envío',
      Sizes: 'Tamaños',
      Thickness: 'Grosor',
      'Tube Diameter': 'Diámetro del tubo',
      Type: 'Tipo',
      Valves: 'Válvulas',
      Warranty: 'Garantía',
      Weight: 'Peso',
      Width: 'Manga',
    },
    cats: {
      rib: 'Barcos RIB',
      inflatable: 'Barcos hinchables',
      sup: 'Tablas de SUP',
      accessory: 'Accesorios',
      kayak: 'Kayaks y catamaranes',
      service: 'Servicios',
    },
  },
  fr: {
    titles: {
      'life-vest-classic': 'Gilet de sauvetage Classic',
      'life-vest-pro': 'Gilet de sauvetage Pro',
      'oars-pump-set': 'Ensemble pagaies et pompe',
      'sup-cheetah-surge': 'Cheetah Surge Edition',
      'sup-dolphin-wave': 'Série Dolphin Wave',
      'sup-explorer-11': "SUP Explorer 11'",
      'sup-flowing-lotus': 'Série Flowing Lotus',
      'sup-jungle-mandala': 'Série Jungle Mandala',
      'sup-leviathan-wake': 'Série Leviathan Wake (édition baleine)',
      'sup-medusa-glow': 'Série Medusa Glow (édition méduse)',
      'sup-ocean-pulse': 'Série Ocean Pulse',
      'sup-ocean-voyager': 'Série Ocean Voyager',
      'sup-tropical-breeze': 'Série Tropical Breeze Island Escape',
    },
    summaries: {
      'life-vest-classic': 'Aide à la flottabilité universelle certifiée CE pour les sports nautiques de loisir.',
      'life-vest-pro':
        'Gilet de sauvetage gonflable automatique conforme SOLAS pour les opérations offshore et de sauvetage.',
      'oars-pump-set':
        'Paire de pagaies en aluminium de 1.6 m et pompe à pied haute performance de 5 L. Compatible avec tous les bateaux gonflables de la gamme.',
      'sup-cheetah-surge':
        'Planche SUP polyvalente inspirée de la faune avec pièces en blocs EVA multicolores premium, arborant un motif de guépard en rose pastel, turquoise et corail. Parfaite pour les croisières en eaux calmes et la navigation lifestyle.',
      'sup-dolphin-wave':
        'Planche SUP polyvalente inspirée du dauphin avec vagues bleu médiéval, assemblage de blocs de couleur EVA haute précision et esthétique marine à 360°. Idéale pour les croisières en eaux calmes et la navigation de loisir.',
      'sup-explorer-11':
        'Planche de SUP gonflable polyvalente de 11 pi avec stabilité à large corps pour les débutants et les pagayeurs de loisir.',
      'sup-flowing-lotus':
        "Planche SUP polyvalente inspirée de l'art oriental avec motifs de lotus, de koi et de libellule, dotée d'un tapis de traction gravé au laser et d'un décor d'eau en dégradé. Idéale pour la navigation paisible et le yoga.",
      'sup-jungle-mandala':
        'Planche SUP polyvalente inspirée de la forêt tropicale et du mandala avec hibiscus, colibris et totems géométriques symétriques en bleu Tiffany et orange corail. Parfaite pour les destinations tropicales.',
      'sup-leviathan-wake':
        "Planche SUP polyvalente inspirée de l'océan avec un majestueux totem de baleine bleue aux motifs géométriques et tribaux, accompagné de lignes de houle noir et blanc minimalistes. Pour les passionnés de l'océan.",
      'sup-medusa-glow':
        'Planche de SUP polyvalente inspirée de la méduse avec pièces en blocs EVA multicolores premium, étoiles de mer et décor de récif corallien en vert menthe rafraîchissant. Pour les aventures tropicales et côtières.',
      'sup-ocean-pulse':
        "Planche SUP polyvalente inspirée des vagues topographiques avec contours bleu Tiffany, gaufrage mécanique haute précision et kit d'accessoires à esthétique unifiée. Pour les pagayeurs lifestyle et les aventuriers boutiques.",
      'sup-ocean-voyager':
        "Planche SUP polyvalente inspirée de la tortue de mer avec pièces en blocs EVA multicolores premium en bleu sarcelle profond, turquoise et orange corail. Pour les amoureux de l'océan et les pagayeurs de randonnée.",
      'sup-tropical-breeze':
        'Planche SUP polyvalente inspirée du paradis insulaire avec une toile de vacances complète comprenant soleil, cocoteraies et scènes de plage. Pour les escapades tropicales et la navigation lifestyle.',
    },
    labels: {
      'Air chambers': 'Chambres à air',

      'Catamaran beam': 'Largeur en catamaran',

      'Conversion time': 'Temps de conversion',
      'Cylinder diameter': 'Diamètre des cylindres',

      'Deck material': 'Matériau du pont',

      'Expected service life': 'Durée de vie prévue',

      'Floor material': 'Matériau du fond',
      'Floor thickness': 'Épaisseur du fond',

      'Fuel tank': 'Réservoir de carburant',

      'Hull material': 'Matériau de coque',
      'Hull weight': 'Poids de la coque',
      'IR signature': 'Signature IR',

      'Inflation pressure': 'Pression de gonflage',
      'Kayak beam': 'Largeur en kayak',

      'Load capacity': 'Capacité de charge',

      'Max capacity': 'Capacité max',
      'Max engine': 'Moteur max',
      'Max engine power': 'Puissance moteur max',
      'Max load': 'Charge max',
      'Max occupants': 'Personnes max',
      'Max persons': 'Personnes max',
      'Max power': 'Puissance max',
      'Max pressure': 'Pression max',
      'Max pressure (deck)': 'Pression max (pont)',
      'Max pressure (tubes)': 'Pression max (tubes)',
      'Max speed': 'Vitesse max',

      'Net weight': 'Poids net',
      'Oar length': 'Longueur des pagaies',
      'Oar material': 'Matériau des pagaies',
      'Operating range': 'Plage de fonctionnement',
      'Overall length': 'Longueur hors tout',
      'Pack size': 'Dimensions pliées',

      'Pump max pressure': 'Pression max de la pompe',
      'Pump volume': 'Volume de la pompe',
      'Recommended power': 'Puissance recommandée',

      'Setup time': 'Temps de montage',
      'Side tube material': 'Matériau des tubes latéraux',

      'Standard configuration': 'Configuration standard',

      'Tube diameter': 'Diamètre des tubes',
      'Tube material': 'Matériau des tubes',

      'Weight (hull only)': 'Poids (coque seule)',

      'Air Chambers': 'Chambres à air',
      Artwork: 'Illustration',
      Backup: 'Secours',
      Beam: 'Largeur',
      'Boat Weight': 'Poids du bateau',
      Bottom: 'Fond',
      Buoyancy: 'Flottabilité',
      Capacity: 'Capacité',
      Certification: 'Certification',
      Chambers: 'Chambres',
      Closure: 'Fermeture',
      Compatibility: 'Compatibilité',
      Deadrise: 'Deadrise',
      Deck: 'Pont',
      Deployment: 'Déploiement',
      'Design Category': 'Catégorie de conception',
      'Engine Shaft': 'Arbre moteur',
      Features: 'Caractéristiques',
      Floor: 'Plancher',
      Frame: 'Cadre',
      'Fuel Tank': 'Réservoir de carburant',
      Height: 'Hauteur',
      Included: 'Inclus',
      Inflation: 'Gonflage',
      'Internal Beam': 'Largeur intérieure',
      'Internal Length': 'Longueur intérieure',
      Length: 'Longueur',
      Material: 'Matériau',
      'Max Engine Weight': 'Poids max. du moteur',
      'Max Load': 'Charge max.',
      'Max Persons': 'Personnes max.',
      'Max Power': 'Puissance max.',
      Models: 'Modèles',
      Mounting: 'Montage',
      'Overall Length': 'Longueur hors tout',
      Pontoons: 'Pontoons',
      Pressure: 'Pression',
      'Recommended Power': 'Puissance recommandée',
      Seams: 'Coutures',
      Seats: 'Sièges',
      'Shipping Dimensions': "Dimensions d'expédition",
      Sizes: 'Tailles',
      Thickness: 'Épaisseur',
      'Tube Diameter': 'Diamètre du tube',
      Type: 'Type',
      Valves: 'Valves',
      Warranty: 'Garantie',
      Weight: 'Poids',
      Width: 'Largeur',
    },
    cats: {
      rib: 'Bateaux RIB',
      inflatable: 'Bateaux gonflables',
      sup: 'Planches de SUP',
      accessory: 'Accessoires',
      kayak: 'Kayaks et catamarans',
      service: 'Services',
    },
  },
  it: {
    titles: {
      'life-vest-classic': 'Gilet salvagente Classic',
      'life-vest-pro': 'Gilet salvagente Pro',
      'oars-pump-set': 'Set pagaie e pompa',
      'sup-cheetah-surge': 'Edizione Cheetah Surge',
      'sup-dolphin-wave': 'Serie Dolphin Wave',
      'sup-explorer-11': "SUP Explorer 11'",
      'sup-flowing-lotus': 'Serie Flowing Lotus',
      'sup-jungle-mandala': 'Serie Jungle Mandala',
      'sup-leviathan-wake': 'Serie Leviathan Wake (Edizione Balena)',
      'sup-medusa-glow': 'Serie Medusa Glow (Edizione Medusa di mare)',
      'sup-ocean-pulse': 'Serie Ocean Pulse',
      'sup-ocean-voyager': 'Serie Ocean Voyager',
      'sup-tropical-breeze': 'Serie Tropical Breeze Island Escape',
    },
    summaries: {
      'life-vest-classic': 'Galleggiante universale certificato CE per sport acquatici ricreativi.',
      'life-vest-pro': 'Gilet salvagente gonfiabile automatico conforme SOLAS per operazioni offshore e di soccorso.',
      'oars-pump-set':
        'Coppia di pagaie in alluminio da 1.6 m e pompa a pedale ad alto flusso da 5 L. Adatta a tutti i gommoni della gamma.',
      'sup-cheetah-surge':
        'Tavola SUP all-around ispirata alla natura selvaggia con piastrellatura EVA multicolore premium, con motivo ghepardo in rosa pastello, verde acqua e corallo. Perfetta per crociere in acque calme e pagaiate lifestyle.',
      'sup-dolphin-wave':
        'Tavola SUP all-around ispirata ai delfini con onde blu medioevo, splicing EVA a blocchi di colore ad alta precisione ed estetica marina a 360 gradi. Ideale per crociere in acque calme e pagaiate ricreative.',
      'sup-explorer-11':
        'Tavola SUP gonfiabile all-around versatile da 11 ft con stabilità a corpo largo per principianti e pagaiatori ricreativi.',
      'sup-flowing-lotus':
        "Tavola SUP all-around ispirata all'arte orientale con motivi di loto, koi e libellule, con pad antiscivolo inciso al laser e grafica a flusso d'acqua sfumato. Ideale per pagaiate tranquille e yoga.",
      'sup-jungle-mandala':
        'Tavola SUP all-around ispirata alla foresta pluviale tropicale e al mandala, con ibisco, colibrì e totem geometrici simmetrici in Tiffany Blue e Coral Orange. Perfetta per destinazioni tropicali.',
      'sup-leviathan-wake':
        "Tavola SUP all-around ispirata all'oceano con un maestoso totem di balena blu dai motivi geometrici e tribali, abbinato a linee minimaliste di onde in bianco e nero. Per gli appassionati dell'oceano.",
      'sup-medusa-glow':
        'SUP all-around da sogno ispirato alle meduse con piastrellatura EVA multicolore premium, stelle marine e grafica di barriera corallina in rinfrescante verde menta. Per avventure tropicali e costiere.',
      'sup-ocean-pulse':
        "Tavola SUP all-around ispirata alle onde topografiche con curve Tiffany Blue, goffratura meccanica ad alta precisione e kit accessori dall'estetica coordinata. Per pagaiatori lifestyle e avventurieri boutique.",
      'sup-ocean-voyager':
        "Tavola SUP all-around ispirata alla tartaruga marina con piastrellatura EVA multicolore premium in verde petrolio intenso, turchese e arancio corallo. Per gli amanti dell'oceano e i pagaiatori da touring.",
      'sup-tropical-breeze':
        "Tavola SUP all-around ispirata al paradiso isolano con un completo scenario di vacanza su un'isola: sole, palme da cocco e scene di spiaggia. Per fughe tropicali e pagaiate lifestyle.",
    },
    labels: {
      'Air chambers': "Camere d'aria",

      'Catamaran beam': 'Larghezza catamarano',

      'Conversion time': 'Tempo di conversione',
      'Cylinder diameter': 'Diametro cilindro',

      'Deck material': 'Materiale ponte',

      'Expected service life': 'Durata prevista',

      'Floor material': 'Materiale pavimento',
      'Floor thickness': 'Spessore pavimento',

      'Fuel tank': 'Serbatoio carburante',

      'Hull material': 'Materiale scafo',
      'Hull weight': 'Peso scafo',
      'IR signature': 'Firma IR',

      'Inflation pressure': 'Pressione di gonfiaggio',
      'Kayak beam': 'Larghezza kayak',

      'Load capacity': 'Portata di carico',

      'Max capacity': 'Capacità max',
      'Max engine': 'Motore max',
      'Max engine power': 'Potenza motore max',
      'Max load': 'Carico max',
      'Max occupants': 'Occupanti max',
      'Max persons': 'Persone max',
      'Max power': 'Potenza max',
      'Max pressure': 'Pressione max',
      'Max pressure (deck)': 'Pressione max (ponte)',
      'Max pressure (tubes)': 'Pressione max (tubi)',
      'Max speed': 'Velocità max',

      'Net weight': 'Peso netto',
      'Oar length': 'Lunghezza pagaia',
      'Oar material': 'Materiale pagaia',
      'Operating range': 'Campo di funzionamento',
      'Overall length': 'Lunghezza totale',
      'Pack size': 'Dimensioni imballo',

      'Pump max pressure': 'Pressione max pompa',
      'Pump volume': 'Volume pompa',
      'Recommended power': 'Potenza consigliata',

      'Setup time': 'Tempo di montaggio',
      'Side tube material': 'Materiale tubi laterali',

      'Standard configuration': 'Configurazione standard',

      'Tube diameter': 'Diametro tubo',
      'Tube material': 'Materiale tubo',

      'Weight (hull only)': 'Peso (solo scafo)',

      'Air Chambers': "Camere d'aria",
      Artwork: 'Grafica',
      Backup: 'Riserva',
      Beam: 'Larghezza',
      'Boat Weight': 'Peso della barca',
      Bottom: 'Fondo',
      Buoyancy: 'Galleggiabilità',
      Capacity: 'Capacità',
      Certification: 'Certificazione',
      Chambers: 'Camere',
      Closure: 'Chiusura',
      Compatibility: 'Compatibilità',
      Deadrise: 'Deadrise',
      Deck: 'Ponte',
      Deployment: 'Impiego',
      'Design Category': 'Categoria di progetto',
      'Engine Shaft': 'Albero motore',
      Features: 'Caratteristiche',
      Floor: 'Pavimento',
      Frame: 'Telaio',
      'Fuel Tank': 'Serbatoio carburante',
      Height: 'Altezza',
      Included: 'Incluso',
      Inflation: 'Gonfiaggio',
      'Internal Beam': 'Larghezza interna',
      'Internal Length': 'Lunghezza interna',
      Length: 'Lunghezza',
      Material: 'Materiale',
      'Max Engine Weight': 'Peso max motore',
      'Max Load': 'Carico max',
      'Max Persons': 'Persone max',
      'Max Power': 'Potenza max',
      Models: 'Modelli',
      Mounting: 'Montaggio',
      'Overall Length': 'Lunghezza fuori tutto',
      Pontoons: 'Ponte galleggianti',
      Pressure: 'Pressione',
      'Recommended Power': 'Potenza consigliata',
      Seams: 'Cuciture',
      Seats: 'Sedili',
      'Shipping Dimensions': 'Dimensioni di spedizione',
      Sizes: 'Taglie',
      Thickness: 'Spessore',
      'Tube Diameter': 'Diametro tubo',
      Type: 'Tipo',
      Valves: 'Valvole',
      Warranty: 'Garanzia',
      Weight: 'Peso',
      Width: 'Larghezza',
    },
    cats: {
      rib: 'Barche RIB',
      inflatable: 'Gommoni',
      sup: 'Tavole SUP',
      accessory: 'Accessori',
      kayak: 'Kayak e catamarani',
      service: 'Servizi',
    },
  },
  cs: {
    titles: {
      'life-vest-classic': 'Záchranná vesta Classic',
      'life-vest-pro': 'Záchranná vesta Pro',
      'oars-pump-set': 'Sada vesel a pumpy',
      'sup-cheetah-surge': 'Cheetah Surge Edition',
      'sup-dolphin-wave': 'Řada Dolphin Wave',
      'sup-explorer-11': "SUP Explorer 11'",
      'sup-flowing-lotus': 'Řada Flowing Lotus',
      'sup-jungle-mandala': 'Řada Jungle Mandala',
      'sup-leviathan-wake': 'Řada Leviathan Wake (edice velryba)',
      'sup-medusa-glow': 'Řada Medusa Glow (edice medúza)',
      'sup-ocean-pulse': 'Řada Ocean Pulse',
      'sup-ocean-voyager': 'Řada Ocean Voyager',
      'sup-tropical-breeze': 'Řada Tropical Breeze Island Escape',
    },
    summaries: {
      'life-vest-classic': 'CE certifikovaná univerzální plovací vesta pro rekreační vodní sporty.',
      'life-vest-pro': 'Automaticky nafukovací záchranná vesta podle SOLAS pro offshore a záchranné operace.',
      'oars-pump-set':
        'Pár 1,6m hliníkových vesel a výkonná 5l nožní pumpa. Kompatibilní se všemi nafukovacími čluny řady.',
      'sup-cheetah-surge':
        'All-around SUP prkno inspirované divokou přírodou s prémiovou vícebarevnou EVA blokovou kompozicí a gepardím motivem v pastelově růžové, tyrkysové a korálové. Perfektní pro jízdu po klidné vodě a lifestyle pádlování.',
      'sup-dolphin-wave':
        'All-around SUP prkno inspirované delfíny s temně modrými středověkými vlnami, vysoce přesným spojováním EVA barevných bloků a 360° mořskou estetikou. Ideální pro klidnou vodu a rekreační pádlování.',
      'sup-explorer-11':
        'Univerzální 11ft nafukovací all-around SUP prkno se širokým stabilním trupem pro začátečníky a rekreační pádlování.',
      'sup-flowing-lotus':
        'All-around SUP prkno inspirované východním uměním s motivy lotosu, kaprů koi a vážky, s laserem gravírovaným protiskluzovým padem a artworkem proudící vody v barevném přechodu. Ideální pro klidné pádlování a jógu.',
      'sup-jungle-mandala':
        'All-around SUP prkno inspirované tropickým deštným pralesem a mandalami, s ibišky, kolibříky a symetrickými geometrickými totemy v tiffany modré a korálové oranžové. Perfektní pro tropické destinace.',
      'sup-leviathan-wake':
        'All-around SUP prkno inspirované oceánem s majestátním motivem plejtváka modřeny, geometrickými a tribálními vzory a minimalistickými černobílými liniemi vln. Pro milovníky oceánu.',
      'sup-medusa-glow':
        'Snové all-around SUP prkno inspirované medúzami s prémiovou vícebarevnou EVA kompozicí, mořskými hvězdami a korálovým artworkem v osvěžující mátové zeleni. Pro tropická a pobřežní dobrodružství.',
      'sup-ocean-pulse':
        'All-around SUP prkno inspirované topografickými vlnami s tyrkysovými konturami, vysoce přesným mechanickým ražením a esteticky jednotným příslušenstvím. Pro lifestyle pádlování a butikové dobrodruhy.',
      'sup-ocean-voyager':
        'All-around SUP prkno inspirované mořskými želvami s prémiovou vícebarevnou EVA kompozicí v hluboké petrolejové, tyrkysové a korálové oranžové. Pro milovníky oceánu a touringové pádlování.',
      'sup-tropical-breeze':
        'All-around SUP prkno inspirované ostrovním rájem s kompletním motivem ostrovní dovolené — slunce, kokosové palmy a plážové scény. Pro tropické úniky a lifestyle pádlování.',
    },
    labels: {
      'Air chambers': 'Vzduchové komory',
      Artwork: 'Motiv',
      Backup: 'Záložní nafouknutí',
      Beam: 'Šířka',
      Bottom: 'Spodek',
      Buoyancy: 'Vztlak',
      Capacity: 'Kapacita',
      'Catamaran beam': 'Šířka katamaránu',
      Certification: 'Certifikace',
      Chambers: 'Komory',
      Closure: 'Uzavření',
      Compatibility: 'Kompatibilita',
      'Conversion time': 'Čas přestavby',
      'Cylinder diameter': 'Průměr válce',
      Deck: 'Paluba',
      'Deck material': 'Materiál paluby',
      Deployment: 'Čas nasazení',
      'Expected service life': 'Předpokládaná životnost',
      Features: 'Vybavení',
      Floor: 'Podlaha',
      'Floor material': 'Materiál podlahy',
      'Floor thickness': 'Tloušťka podlahy',
      Frame: 'Rám',
      'Fuel tank': 'Palivová nádrž',
      Height: 'Výška',
      'Hull material': 'Materiál trupu',
      'Hull weight': 'Hmotnost trupu',
      'IR signature': 'IR signatura',
      Included: 'Součást balení',
      Inflation: 'Nafouknutí',
      'Inflation pressure': 'Husticí tlak',
      'Kayak beam': 'Šířka kajaku',
      Length: 'Délka',
      'Load capacity': 'Nosnost',
      Material: 'Materiál',
      'Max capacity': 'Max. kapacita',
      'Max engine': 'Max. motor',
      'Max engine power': 'Max. výkon motoru',
      'Max load': 'Max. zatížení',
      'Max occupants': 'Max. cestujících',
      'Max persons': 'Max. osob',
      'Max power': 'Max. výkon',
      'Max pressure': 'Max. tlak',
      'Max pressure (deck)': 'Max. tlak (paluba)',
      'Max pressure (tubes)': 'Max. tlak (trubky)',
      'Max speed': 'Max. rychlost',
      Models: 'Modely',
      Mounting: 'Upevnění',
      'Net weight': 'Vlastní hmotnost',
      'Oar length': 'Délka vesla',
      'Oar material': 'Materiál vesla',
      'Operating range': 'Operační dosah',
      'Overall length': 'Celková délka',
      'Pack size': 'Velikost balení',
      Pontoons: 'Pontony',
      Pressure: 'Tlak',
      'Pump max pressure': 'Max. tlak pumpy',
      'Pump volume': 'Objem pumpy',
      'Recommended power': 'Doporučený výkon',
      Seams: 'Švy',
      Seats: 'Sedadla',
      'Setup time': 'Čas sestavení',
      'Side tube material': 'Materiál boční trubky',
      Sizes: 'Velikosti',
      'Standard configuration': 'Standardní konfigurace',
      Thickness: 'Tloušťka',
      'Tube diameter': 'Průměr trubky',
      'Tube material': 'Materiál trubky',
      Type: 'Typ',
      Valves: 'Ventily',
      Warranty: 'Záruka',
      Weight: 'Hmotnost',
      'Weight (hull only)': 'Hmotnost (pouze trup)',
      Width: 'Šířka',

      'Air Chambers': 'Vzduchové komory',
      'Boat Weight': 'Hmotnost lodi',
      Deadrise: 'Deadrise',
      'Design Category': 'Kategorie konstrukce',
      'Engine Shaft': 'Hřídel motoru',
      'Fuel Tank': 'Nádrž na palivo',
      'Internal Beam': 'Vnitřní šířka',
      'Internal Length': 'Vnitřní délka',
      'Max Engine Weight': 'Max. hmotnost motoru',
      'Max Load': 'Max. zátěž',
      'Max Persons': 'Max. osob',
      'Max Power': 'Max. výkon',
      'Overall Length': 'Celková délka',
      'Recommended Power': 'Doporučený výkon',
      'Shipping Dimensions': 'Rozměry při dopravě',
      'Tube Diameter': 'Průměr trubice',
    },
    cats: {
      rib: 'Čluny RIB',
      inflatable: 'Nafukovací čluny',
      sup: 'SUP prkna',
      accessory: 'Příslušenství',
      kayak: 'Kajaky a katamarány',
      service: 'Služby',
    },
  },
  sv: {
    titles: {
      'life-vest-classic': 'Flytväst Classic',
      'life-vest-pro': 'Flytväst Pro',
      'oars-pump-set': 'År- och pumppaket',
      'sup-cheetah-surge': 'Cheetah Surge Edition',
      'sup-dolphin-wave': 'Dolphin Wave-serien',
      'sup-explorer-11': "SUP Explorer 11'",
      'sup-flowing-lotus': 'Flowing Lotus-serien',
      'sup-jungle-mandala': 'Jungle Mandala-serien',
      'sup-leviathan-wake': 'Leviathan Wake-serien (valutgåva)',
      'sup-medusa-glow': 'Medusa Glow-serien (manetutgåva)',
      'sup-ocean-pulse': 'Ocean Pulse-serien',
      'sup-ocean-voyager': 'Ocean Voyager-serien',
      'sup-tropical-breeze': 'Tropical Breeze Island Escape-serien',
    },
    summaries: {
      'life-vest-classic': 'CE-certifierad universell flytväst för fritidsvattensport.',
      'life-vest-pro': 'Automatiskt uppblåsbar flytväst enligt SOLAS för offshore- och räddningsinsatser.',
      'oars-pump-set':
        'Ett par 1,6m aluminiumåror och en kraftfull 5L fotpump. Passar alla uppblåsbara båtar i serien.',
      'sup-cheetah-surge':
        'Allround-SUP-bräda inspirerad av vilda djur med premium flerfärgad EVA-blockkomposition och gepardmotiv i pastellrosa, petrol och korall. Perfekt för plattvattencruising och livsstilspaddling.',
      'sup-dolphin-wave':
        'Delfininspirerad allround-SUP-bräda med medeltidsblå vågor, högprecisions EVA-färgblockskomposition och 360° marin estetik. Idealisk för plattvattencruising och fritidspaddling.',
      'sup-explorer-11':
        'Mångsidig 11ft uppblåsbar allround-SUP-bräda med brett stabilt skrov för nybörjare och fritidspaddlare.',
      'sup-flowing-lotus':
        'Allround-SUP-bräda inspirerad av österländsk konst med lotos-, koi- och trollsländemotiv, lasergraverat trampad och gradient vattenflödeskonst. Idealisk för lugn paddling och yoga.',
      'sup-jungle-mandala':
        'Allround-SUP-bräda inspirerad av tropisk regnskog och mandalor, med hibiskus, kolibrier och symmetriska geometriska totem i tiffanyblått och korallorange. Perfekt för tropiska resmål.',
      'sup-leviathan-wake':
        'Havsinspirerad allround-SUP-bräda med majestätiskt blåvalsotem, geometriska och tribal mönster samt minimalistiska svartvita svallinjer. För oceanälskare.',
      'sup-medusa-glow':
        'Drömsk allround-SUP inspirerad av maneter med premium flerfärgad EVA-blockkomposition, sjöstjärnor och korallrevskonst i uppfriskande mintgrönt. För tropiska och kustnära äventyr.',
      'sup-ocean-pulse':
        'Allround-SUP-bräda inspirerad av topografiska vågor med tiffanyblå konturer, högprecisions mekanisk prägling och estetiskt enhetligt tillbehörskit. För livsstilspaddlare och boutiqueäventyrare.',
      'sup-ocean-voyager':
        'Allround-SUP-bräda inspirerad av havssköldpaddor med premium flerfärgad EVA-blockkomposition i djup petrol, turkos och korallorange. För oceanälskare och turpaddlare.',
      'sup-tropical-breeze':
        'Allround-SUP-bräda inspirerad av öparadis med en komplett ösemestermotivyta av solsken, kokoslundar och strandscener. För tropiska flykter och livsstilspaddling.',
    },
    labels: {
      'Air chambers': 'Luftkammare',

      'Catamaran beam': 'Katamaranbredd',

      'Conversion time': 'Omvandlingstid',
      'Cylinder diameter': 'Cylinderdiameter',

      'Deck material': 'Däckmaterial',

      'Expected service life': 'Förväntad livslängd',

      'Floor material': 'Golvmaterial',
      'Floor thickness': 'Golvtjocklek',

      'Fuel tank': 'Bränsletank',

      'Hull material': 'Skrovmaterial',
      'Hull weight': 'Skrorvikt',
      'IR signature': 'IR-signatur',

      'Inflation pressure': 'Uppblåsningstryck',
      'Kayak beam': 'Kajakbredd',

      'Load capacity': 'Lastförmåga',

      'Max capacity': 'Max. kapacitet',
      'Max engine': 'Max. motor',
      'Max engine power': 'Max. motoreffekt',
      'Max load': 'Max. last',
      'Max occupants': 'Max. passagerare',
      'Max persons': 'Max. personer',
      'Max power': 'Max. effekt',
      'Max pressure': 'Max. tryck',
      'Max pressure (deck)': 'Max. tryck (däck)',
      'Max pressure (tubes)': 'Max. tryck (tuber)',
      'Max speed': 'Max. fart',

      'Net weight': 'Tjänstevikt',
      'Oar length': 'Årlängd',
      'Oar material': 'Årmaterial',
      'Operating range': 'Driftområde',
      'Overall length': 'Total längd',
      'Pack size': 'Paketstorlek',

      'Pump max pressure': 'Pumpens max. tryck',
      'Pump volume': 'Pumpvolym',
      'Recommended power': 'Rekommenderad effekt',

      'Setup time': 'Uppbyggnadstid',
      'Side tube material': 'Sidotubsmaterial',

      'Standard configuration': 'Standardkonfiguration',

      'Tube diameter': 'Tubdiameter',
      'Tube material': 'Tubmaterial',

      'Weight (hull only)': 'Vikt (endast skrov)',

      'Air Chambers': 'Luftkammare',
      Artwork: 'Konstverk',
      Backup: 'Reserv',
      Beam: 'Bredd',
      'Boat Weight': 'Båtvikt',
      Bottom: 'Botten',
      Buoyancy: 'Flytkraft',
      Capacity: 'Kapacitet',
      Certification: 'Certifiering',
      Chambers: 'Kammare',
      Closure: 'Stängning',
      Compatibility: 'Kompatibilitet',
      Deadrise: 'Deadrise',
      Deck: 'Däck',
      Deployment: 'Utrullning',
      'Design Category': 'Designkategori',
      'Engine Shaft': 'Motoraxel',
      Features: 'Funktioner',
      Floor: 'Golv',
      Frame: 'Ram',
      'Fuel Tank': 'Bränsletank',
      Height: 'Höjd',
      Included: 'Inkluderat',
      Inflation: 'Uppumpning',
      'Internal Beam': 'Inre bredd',
      'Internal Length': 'Inre längd',
      Length: 'Längd',
      Material: 'Material',
      'Max Engine Weight': 'Max motorvikt',
      'Max Load': 'Max last',
      'Max Persons': 'Max personer',
      'Max Power': 'Max effekt',
      Models: 'Modeller',
      Mounting: 'Montering',
      'Overall Length': 'Total längd',
      Pontoons: 'Pontoner',
      Pressure: 'Tryck',
      'Recommended Power': 'Rekommenderad effekt',
      Seams: 'Sömmar',
      Seats: 'Säten',
      'Shipping Dimensions': 'Fraktdimensioner',
      Sizes: 'Storlekar',
      Thickness: 'Tjocklek',
      'Tube Diameter': 'Tubdiameter',
      Type: 'Typ',
      Valves: 'Ventiler',
      Warranty: 'Garanti',
      Weight: 'Vikt',
      Width: 'Bredd',
    },
    cats: {
      rib: 'RIB-båtar',
      inflatable: 'Uppblåsbara båtar',
      sup: 'SUP-brädor',
      accessory: 'Tillbehör',
      kayak: 'Kajaker och katamaraner',
      service: 'Tjänster',
    },
  },
  da: {
    titles: {
      'life-vest-classic': 'Redningsvest Classic',
      'life-vest-pro': 'Redningsvest Pro',
      'oars-pump-set': 'Åre- og pumpesæt',
      'sup-cheetah-surge': 'Cheetah Surge Edition',
      'sup-dolphin-wave': 'Dolphin Wave-serien',
      'sup-explorer-11': "SUP Explorer 11'",
      'sup-flowing-lotus': 'Flowing Lotus-serien',
      'sup-jungle-mandala': 'Jungle Mandala-serien',
      'sup-leviathan-wake': 'Leviathan Wake-serien (hvaludgave)',
      'sup-medusa-glow': 'Medusa Glow-serien (gopleudgave)',
      'sup-ocean-pulse': 'Ocean Pulse-serien',
      'sup-ocean-voyager': 'Ocean Voyager-serien',
      'sup-tropical-breeze': 'Tropical Breeze Island Escape-serien',
    },
    summaries: {
      'life-vest-classic': 'CE-certificeret universel flydevest til fritidsvandsport.',
      'life-vest-pro': 'Automatisk oppustelig redningsvest i henhold til SOLAS til offshore- og redningsoperationer.',
      'oars-pump-set':
        'Et par 1,6m aluminiumsårer og en kraftig 5L fodpumpe. Passer til alle oppustelige både i serien.',
      'sup-cheetah-surge':
        'Allround SUP-bræt inspireret af vilde dyr med premium flerfarvet EVA-block-sammensætning og gepardmotiv i pastelrosa, petrol og koral. Perfekt til fladvandscruising og livsstilspadling.',
      'sup-dolphin-wave':
        'Delfininspireret allround SUP-bræt med middelalderblå bølger, højpræcision EVA-farveblok-sammensætning og 360° marin æstetik. Ideel til fladvandscruising og fritidspadling.',
      'sup-explorer-11':
        'Alsidig 11ft oppusteligt allround SUP-bræt med bred skrogstabilitet til nybegyndere og fritidspaddlere.',
      'sup-flowing-lotus':
        'Allround SUP-bræt inspireret af østerlandsk kunst med lotus-, koi- og guldsmedemotiver, lasergraveret trampude og gradient vandstrømskunst. Ideel til rolig padling og yoga.',
      'sup-jungle-mandala':
        'Allround SUP-bræt inspireret af tropisk regnskov og mandalaer, med hibiscus, kolibrier og symmetriske geometriske totemer i tiffanyblå og koralorange. Perfekt til tropiske destinationer.',
      'sup-leviathan-wake':
        'Havsinspireret allround SUP-bræt med majestætisk blåhvals-totem, geometriske og tribal-mønstre samt minimalistiske sort-hvide bølgelinjer. Til haventusiaster.',
      'sup-medusa-glow':
        'Drømmende allround SUP inspireret af gopler med premium flerfarvet EVA-block-sammensætning, søstjerner og koralrevskunst i forfriskende myntegrønt. Til tropiske og kystnære eventyr.',
      'sup-ocean-pulse':
        'Allround SUP-bræt inspireret af topografiske bølger med tiffanyblå konturer, højpræcision mekanisk prægning og æstetisk ensartet tilbehørssæt. Til livsstilspaddlere og boutique-eventyrere.',
      'sup-ocean-voyager':
        'Allround SUP-bræt inspireret af havskildpadder med premium flerfarvet EVA-block-sammensætning i dyb petrol, turkis og koralorange. Til havelskere og touring-paddlere.',
      'sup-tropical-breeze':
        'Allround SUP-bræt inspireret af øparadis med et komplet øferie-motivlandskab af solskin, kokospalmer og strandscener. Til tropiske afstikkere og livsstilspadling.',
    },
    labels: {
      'Air chambers': 'Luftkamre',

      'Catamaran beam': 'Katamaranbredde',

      'Conversion time': 'Ombygningstid',
      'Cylinder diameter': 'Cylinderdiameter',

      'Deck material': 'Dækmateriale',

      'Expected service life': 'Forventet levetid',

      'Floor material': 'Gulvmateriale',
      'Floor thickness': 'Gulvtykkelse',

      'Fuel tank': 'Brændstoftank',

      'Hull material': 'Skrogmateriale',
      'Hull weight': 'Skrogvægt',
      'IR signature': 'IR-signatur',

      'Inflation pressure': 'Oppustningstryk',
      'Kayak beam': 'Kajakbredde',

      'Load capacity': 'Lasteevne',

      'Max capacity': 'Maks. kapacitet',
      'Max engine': 'Maks. motor',
      'Max engine power': 'Maks. motorkraft',
      'Max load': 'Maks. last',
      'Max occupants': 'Maks. passagerer',
      'Max persons': 'Maks. personer',
      'Max power': 'Maks. kraft',
      'Max pressure': 'Maks. tryk',
      'Max pressure (deck)': 'Maks. tryk (dæk)',
      'Max pressure (tubes)': 'Maks. tryk (tuber)',
      'Max speed': 'Maks. fart',

      'Net weight': 'Egenvægt',
      'Oar length': 'Årelængde',
      'Oar material': 'Åremateriale',
      'Operating range': 'Driftsområde',
      'Overall length': 'Samlet længde',
      'Pack size': 'Pakstørrelse',

      'Pump max pressure': 'Pumpens maks. tryk',
      'Pump volume': 'Pumpevolumen',
      'Recommended power': 'Anbefalet kraft',

      'Setup time': 'Opbygningstid',
      'Side tube material': 'Sidetube-materiale',

      'Standard configuration': 'Standardkonfiguration',

      'Tube diameter': 'Tubediameter',
      'Tube material': 'Tubemateriale',

      'Weight (hull only)': 'Vægt (kun skrog)',

      'Air Chambers': 'Luftkamre',
      Artwork: 'Kunstværk',
      Backup: 'Backup',
      Beam: 'Bredde',
      'Boat Weight': 'Bådvægt',
      Bottom: 'Bund',
      Buoyancy: 'Opdrift',
      Capacity: 'Kapacitet',
      Certification: 'Certificering',
      Chambers: 'Kamre',
      Closure: 'Lukning',
      Compatibility: 'Kompatibilitet',
      Deadrise: 'Deadrise',
      Deck: 'Dæk',
      Deployment: 'Indsats',
      'Design Category': 'Designkategori',
      'Engine Shaft': 'Motoraksel',
      Features: 'Funktioner',
      Floor: 'Gulv',
      Frame: 'Ramme',
      'Fuel Tank': 'Brændstoftank',
      Height: 'Højde',
      Included: 'Inkluderet',
      Inflation: 'Oppumpning',
      'Internal Beam': 'Indre bredde',
      'Internal Length': 'Indre længde',
      Length: 'Længde',
      Material: 'Materiale',
      'Max Engine Weight': 'Max motorvægt',
      'Max Load': 'Max last',
      'Max Persons': 'Max personer',
      'Max Power': 'Max effekt',
      Models: 'Modeller',
      Mounting: 'Montering',
      'Overall Length': 'Total længde',
      Pontoons: 'Pontoner',
      Pressure: 'Tryk',
      'Recommended Power': 'Anbefalet effekt',
      Seams: 'Søm',
      Seats: 'Sæder',
      'Shipping Dimensions': 'Fragtdimensioner',
      Sizes: 'Størrelser',
      Thickness: 'Tykkelse',
      'Tube Diameter': 'Tubediameter',
      Type: 'Type',
      Valves: 'Ventiler',
      Warranty: 'Garanti',
      Weight: 'Vægt',
      Width: 'Bredde',
    },
    cats: {
      rib: 'RIB-både',
      inflatable: 'Oppustelige både',
      sup: 'SUP-brætter',
      accessory: 'Tilbehør',
      kayak: 'Kajakker og katamaraner',
      service: 'Ydelser',
    },
  },
  el: {
    titles: {
      'life-vest-classic': 'Σωσίβιο Classic',
      'life-vest-pro': 'Σωσίβιο Pro',
      'oars-pump-set': 'Σετ κουπιών και αντλίας',
      'sup-cheetah-surge': 'Cheetah Surge Edition',
      'sup-dolphin-wave': 'Σειρά Dolphin Wave',
      'sup-explorer-11': "SUP Explorer 11'",
      'sup-flowing-lotus': 'Σειρά Flowing Lotus',
      'sup-jungle-mandala': 'Σειρά Jungle Mandala',
      'sup-leviathan-wake': 'Σειρά Leviathan Wake (έκδοση φάλαινας)',
      'sup-medusa-glow': 'Σειρά Medusa Glow (έκδοση μέδουσας)',
      'sup-ocean-pulse': 'Σειρά Ocean Pulse',
      'sup-ocean-voyager': 'Σειρά Ocean Voyager',
      'sup-tropical-breeze': 'Σειρά Tropical Breeze Island Escape',
    },
    summaries: {
      'life-vest-classic': 'Πιστοποιημένο CE παγκόσμιο σωσίβιο επιπλέουσης για ψυχαγωγικά θαλάσσια σπορ.',
      'life-vest-pro': 'Αυτόματο φουσκωτό σωσίβιο κατά SOLAS για offshore επιχειρήσεις και διάσωση.',
      'oars-pump-set':
        'Ζεύγος κουπιών αλουμινίου 1,6m και ισχυρή αντλία ποδιού 5L. Συμβατό με όλα τα φουσκωτά σκάφη της σειράς.',
      'sup-cheetah-surge':
        'All-around SUP εμπνευσμένο από άγρια ζώα με premium σύνθεση πολύχρωμων μπλοκ EVA και μοτίβο γατόπαρδος σε παστελ ροζ, πετρόλ και κοράλλι. Τέλειο για βόλτες σε ήρεμα νερά και κωπηλασία lifestyle.',
      'sup-dolphin-wave':
        'All-around SUP εμπνευσμένο από δελφίνια με μεσαιωνικά μπλε κύματα, υψηλής ακρίβειας σύνδεση χρωματιστών μπλοκ EVA και θαλασσινή αισθητική 360°. Ιδανικό για ήρεμα νερά και ψυχαγωγική κωπηλασία.',
      'sup-explorer-11':
        'Πολυχρηστικό 11ft φουσκωτό all-around SUP με φαρδύ σταθερό σκάφος για αρχάριους και ψυχαγωγικούς κωπηλάτες.',
      'sup-flowing-lotus':
        'All-around SUP εμπνευσμένο από ανατολική τέχνη με μοτίβα λωτού, koi και λιβελλών, με PAD αντίλαμψης laser και gradient artwork ροής νερού. Ιδανικό για χαλαρή κωπηλασία και yoga.',
      'sup-jungle-mandala':
        'All-around SUP εμπνευσμένο από τροπικό δάσος και μάνταλα, με ιβίσκους, κολιμπρί και συμμετρικά γεωμετρικά τοτέμ σε μπλε Tiffany και κοραλλί πορτοκαλί. Τέλειο για τροπικούς προορισμούς.',
      'sup-leviathan-wake':
        'All-around SUP εμπνευσμένο από τον ωκεανό με μεγαλόπρεπο τοτέμ φάλαινας, γεωμετρικά και tribal μοτίβα και μινιμαλιστικές ασπρόμαυρες γραμμές κυμάτων. Για λάτρεις του ωκεανού.',
      'sup-medusa-glow':
        'Ονειρικό all-around SUP εμπνευσμένο από μέδουσες με premium σύνθεση πολύχρωμων μπλοκ EVA, αστερίες και artwork κοραλλιογενών υφάλων σε δροσερό πράσινο μέντας. Για τροπικές και παράκτιες περιπέτειες.',
      'sup-ocean-pulse':
        'All-around SUP εμπνευσμένο από τοπογραφικά κύματα με περιγράμματα μπλε Tiffany, υψηλής ακρίβειας μηχανική εμφάνιση και αισθητικά ενιαίο σετ αξεσουάρ. Για κωπηλάτες lifestyle και περιπετειώδες boutique.',
      'sup-ocean-voyager':
        'All-around SUP εμπνευσμένο από θαλάσσιες χελώνες με premium σύνθεση πολύχρωμων μπλοκ EVA σε βαθύ πετρόλ, τιρκουάζ και κοραλλί πορτοκαλί. Για λάτρεις του ωκεανού και κωπηλάτες μεγάλων αποστάσεων.',
      'sup-tropical-breeze':
        'All-around SUP εμπνευσμένο από νησιωτικό παράδεισο με πλήρη τοπιογραφία μοτίβων νησιωτικών διακοπών — ήλιος, κοκοφοίνικες και σκηνικές παραλίες. Για τροπικές αποδράσεις και κωπηλασία lifestyle.',
    },
    labels: {
      'Air chambers': 'Θάλαμοι αέρα',

      'Catamaran beam': 'Πλάτος καταμαράν',

      'Conversion time': 'Χρόνος μετατροπής',
      'Cylinder diameter': 'Διάμετρος κυλίνδρου',

      'Deck material': 'Υλικό καταστρώματος',

      'Expected service life': 'Αναμενόμενη διάρκεια ζωής',

      'Floor material': 'Υλικό δαπέδου',
      'Floor thickness': 'Πάχος δαπέδου',

      'Fuel tank': 'Δεξαμενή καυσίμου',

      'Hull material': 'Υλικό σκάφους',
      'Hull weight': 'Βάρος σκάφους',
      'IR signature': 'Υπογραφή IR',

      'Inflation pressure': 'Πίεση φουσκώματος',
      'Kayak beam': 'Πλάτος καγιάκ',

      'Load capacity': 'Χωρητικότητα φορτίου',

      'Max capacity': 'Μέγ. χωρητικότητα',
      'Max engine': 'Μέγ. κινητήρας',
      'Max engine power': 'Μέγ. ισχύς κινητήρα',
      'Max load': 'Μέγ. φορτίο',
      'Max occupants': 'Μέγ. επιβαίνοντες',
      'Max persons': 'Μέγ. άτομα',
      'Max power': 'Μέγ. ισχύς',
      'Max pressure': 'Μέγ. πίεση',
      'Max pressure (deck)': 'Μέγ. πίεση (κατάστρωμα)',
      'Max pressure (tubes)': 'Μέγ. πίεση (σωλήνες)',
      'Max speed': 'Μέγ. ταχύτητα',

      'Net weight': 'Καθαρό βάρος',
      'Oar length': 'Μήκος κουπιού',
      'Oar material': 'Υλικό κουπιού',
      'Operating range': 'Εύρος λειτουργίας',
      'Overall length': 'Συνολικό μήκος',
      'Pack size': 'Μέγεθος συσκευασίας',

      'Pump max pressure': 'Μέγ. πίεση αντλίας',
      'Pump volume': 'Όγκος αντλίας',
      'Recommended power': 'Συνιστώμενη ισχύς',

      'Setup time': 'Χρόνος εγκατάστασης',
      'Side tube material': 'Υλικό πλάγιου σωλήνα',

      'Standard configuration': 'Τυποποιημένη διαμόρφωση',

      'Tube diameter': 'Διάμετρος σωλήνα',
      'Tube material': 'Υλικό σωλήνα',

      'Weight (hull only)': 'Βάρος (μόνο σκάφος)',

      'Air Chambers': 'Αεροθάλαμοι',
      Artwork: 'Καλλιτεχνία',
      Backup: 'Αντλία ανάγκης',
      Beam: 'Πλάτος',
      'Boat Weight': 'Βάρος σκάφους',
      Bottom: 'Κάτω μέρος',
      Buoyancy: 'Ανωτική δύναμη',
      Capacity: 'Χωρητικότητα',
      Certification: 'Πιστοποίηση',
      Chambers: 'Θάλαμοι',
      Closure: 'Κλείσιμο',
      Compatibility: 'Συμβατότητα',
      Deadrise: 'Deadrise',
      Deck: 'Κατάστρωμα',
      Deployment: 'Ανάπτυξη',
      'Design Category': 'Κατηγορία σχεδιασμού',
      'Engine Shaft': 'Άξονας κινητήρα',
      Features: 'Χαρακτηριστικά',
      Floor: 'Πάτωμα',
      Frame: 'Πλαίσιο',
      'Fuel Tank': 'Ρεζερβουάρ καυσίμου',
      Height: 'Ύψος',
      Included: 'Περιλαμβανόμενα',
      Inflation: 'Φούσκωμα',
      'Internal Beam': 'Εσωτερικό πλάτος',
      'Internal Length': 'Εσωτερικό μήκος',
      Length: 'Μήκος',
      Material: 'Υλικό',
      'Max Engine Weight': 'Μέγ. βάρος κινητήρα',
      'Max Load': 'Μέγ. φόρτωση',
      'Max Persons': 'Μέγ. άτομα',
      'Max Power': 'Μέγ. ισχύς',
      Models: 'Μοντέλα',
      Mounting: 'Τοποθέτηση',
      'Overall Length': 'Συνολικό μήκος',
      Pontoons: 'Πόντονες',
      Pressure: 'Πίεση',
      'Recommended Power': 'Συνιστώμενη ισχύς',
      Seams: 'Ραφές',
      Seats: 'Κάθισμα',
      'Shipping Dimensions': 'Διαστάσεις αποστολής',
      Sizes: 'Μέγεθος',
      Thickness: 'Πάχος',
      'Tube Diameter': 'Διάμετρος σωλήνα',
      Type: 'Τύπος',
      Valves: 'Βαλβίδες',
      Warranty: 'Εγγύηση',
      Weight: 'Βάρος',
      Width: 'Πλάτος',
    },
    cats: {
      rib: 'Σκάφη RIB',
      inflatable: 'Φουσκωτά σκάφη',
      sup: 'Σανίδες SUP',
      accessory: 'Αξεσουάρ',
      kayak: 'Καγιάκ και καταμαράν',
      service: 'Υπηρεσίες',
    },
  },
  no: {
    titles: {
      'life-vest-classic': 'Redningsvest Classic',
      'life-vest-pro': 'Redningsvest Pro',
      'oars-pump-set': 'Åre- og pumpepakke',
      'sup-cheetah-surge': 'Cheetah Surge Edition',
      'sup-dolphin-wave': 'Dolphin Wave-serien',
      'sup-explorer-11': "SUP Explorer 11'",
      'sup-flowing-lotus': 'Flowing Lotus-serien',
      'sup-jungle-mandala': 'Jungle Mandala-serien',
      'sup-leviathan-wake': 'Leviathan Wake-serien (hvalutgave)',
      'sup-medusa-glow': 'Medusa Glow-serien (manetutgave)',
      'sup-ocean-pulse': 'Ocean Pulse-serien',
      'sup-ocean-voyager': 'Ocean Voyager-serien',
      'sup-tropical-breeze': 'Tropical Breeze Island Escape-serien',
    },
    summaries: {
      'life-vest-classic': 'CE-sertifisert universell flytevest for fritidsvannsport.',
      'life-vest-pro': 'Automatisk oppustbar redningsvest i henhold til SOLAS for offshore- og redningsoperasjoner.',
      'oars-pump-set': 'Et par 1,6m aluminiumsårer og en kraftig 5L fotpumpe. Passer alle oppustelige båter i serien.',
      'sup-cheetah-surge':
        'Allround SUP-brett inspirert av ville dyr med premium flerfarget EVA-blokksammensetning og gepardmotiv i pastellrosa, petrol og korall. Perfekt for flattvannscruising og livsstilspadling.',
      'sup-dolphin-wave':
        'Delfininspirert allround SUP-brett med middelalderblå bølger, høy presisjon EVA-fargeblokksammensetning og 360° marin estetikk. Ideel for flattvannscruising og fritidspadling.',
      'sup-explorer-11':
        'Allsidig 11ft oppustelig allround SUP-brett med bred skrogstabilitet for nybegynnere og fritidspadlere.',
      'sup-flowing-lotus':
        'Allround SUP-brett inspirert av østlig kunst med lotus-, koi- og libellemotiver, lasergravert tråkkpute og gradient vannstrømskunst. Ideel for rolig padling og yoga.',
      'sup-jungle-mandala':
        'Allround SUP-brett inspirert av tropisk regnskog og mandalaer, med hibiskus, kolibrier og symmetriske geometriske totemer i tiffanyblått og koralloransje. Perfekt for tropiske destinasjoner.',
      'sup-leviathan-wake':
        'Havinspirert allround SUP-brett med majestetisk blåhval-totem, geometriske og stammemønstre samt minimalistiske sort-hvite bølgelinjer. For haventusiaster.',
      'sup-medusa-glow':
        'Drømmeaktig allround SUP inspirert av maneter med premium flerfarget EVA-blokksammensetning, sjøstjerner og korallrevskunst i forfriskende myntegrønt. For tropiske og kystnære eventyr.',
      'sup-ocean-pulse':
        'Allround SUP-brett inspirert av topografiske bølger med tiffanyblå konturer, høy presisjon mekanisk preging og estetisk enhetlig tilbehørspakke. For livsstilspadlere og boutique-eventyrere.',
      'sup-ocean-voyager':
        'Allround SUP-brett inspirert av havskilpadder med premium flerfarget EVA-blokksammensetning i dyp petrol, turkis og koralloransje. For havelskere og turpadlere.',
      'sup-tropical-breeze':
        'Allround SUP-brett inspirert av øyparadis med et komplett øyferie-motivlandskap av solskinn, kokospalmer og strandscener. For tropiske avstikkere og livsstilspadling.',
    },
    labels: {
      'Air chambers': 'Luftkamre',

      'Catamaran beam': 'Katamaranbredde',

      'Conversion time': 'Ombyggingstid',
      'Cylinder diameter': 'Sylinderdiameter',

      'Deck material': 'Dekkmateriale',

      'Expected service life': 'Forventet levetid',

      'Floor material': 'Gulvmateriale',
      'Floor thickness': 'Gulvtykkelse',

      'Fuel tank': 'Drivstofftank',

      'Hull material': 'Skrogmateriale',
      'Hull weight': 'Skrogvekt',
      'IR signature': 'IR-signatur',

      'Inflation pressure': 'Oppustningstrykk',
      'Kayak beam': 'Kajakkbredde',

      'Load capacity': 'Lastekapasitet',

      'Max capacity': 'Maks. kapasitet',
      'Max engine': 'Maks. motor',
      'Max engine power': 'Maks. motorkraft',
      'Max load': 'Maks. last',
      'Max occupants': 'Maks. passasjerer',
      'Max persons': 'Maks. personer',
      'Max power': 'Maks. kraft',
      'Max pressure': 'Maks. trykk',
      'Max pressure (deck)': 'Maks. trykk (dekk)',
      'Max pressure (tubes)': 'Maks. trykk (tuber)',
      'Max speed': 'Maks. fart',

      'Net weight': 'Egenvekt',
      'Oar length': 'Årelengde',
      'Oar material': 'Åremateriale',
      'Operating range': 'Driftsområde',
      'Overall length': 'Total lengde',
      'Pack size': 'Pakkestørrelse',

      'Pump max pressure': 'Pumpens maks. trykk',
      'Pump volume': 'Pumpevolum',
      'Recommended power': 'Anbefalt kraft',

      'Setup time': 'Oppbyggingstid',
      'Side tube material': 'Sidetube-materiale',

      'Standard configuration': 'Standardkonfigurasjon',

      'Tube diameter': 'Tubediameter',
      'Tube material': 'Tubemateriale',

      'Weight (hull only)': 'Vekt (kun skrog)',

      'Air Chambers': 'Luftkamre',
      Artwork: 'Kunstverk',
      Backup: 'Reserve',
      Beam: 'Bredde',
      'Boat Weight': 'Båtvekt',
      Bottom: 'Bunn',
      Buoyancy: 'Oppdrift',
      Capacity: 'Kapasitet',
      Certification: 'Sertifisering',
      Chambers: 'Kamre',
      Closure: 'Lukking',
      Compatibility: 'Kompatibilitet',
      Deadrise: 'Deadrise',
      Deck: 'Dekk',
      Deployment: 'Utrulling',
      'Design Category': 'Designkategori',
      'Engine Shaft': 'Motoraksel',
      Features: 'Funksjoner',
      Floor: 'Gulv',
      Frame: 'Ramme',
      'Fuel Tank': 'Drivstofftank',
      Height: 'Høyde',
      Included: 'Inkludert',
      Inflation: 'Oppumping',
      'Internal Beam': 'Indre bredde',
      'Internal Length': 'Indre lengde',
      Length: 'Lengde',
      Material: 'Materiale',
      'Max Engine Weight': 'Max motorvekt',
      'Max Load': 'Max last',
      'Max Persons': 'Max personer',
      'Max Power': 'Max effekt',
      Models: 'Modeller',
      Mounting: 'Montering',
      'Overall Length': 'Total lengde',
      Pontoons: 'Pontonger',
      Pressure: 'Trykk',
      'Recommended Power': 'Anbefalt effekt',
      Seams: 'Sømmer',
      Seats: 'Seter',
      'Shipping Dimensions': 'Fraktmål',
      Sizes: 'Størrelser',
      Thickness: 'Tykkelse',
      'Tube Diameter': 'Tubdiameter',
      Type: 'Type',
      Valves: 'Ventiler',
      Warranty: 'Garanti',
      Weight: 'Vekt',
      Width: 'Bredde',
    },
    cats: {
      rib: 'RIB-båter',
      inflatable: 'Oppustelige båter',
      sup: 'SUP-brett',
      accessory: 'Tilbehør',
      kayak: 'Kajakker og katamaraner',
      service: 'Tjenester',
    },
  },
  ru: {
    titles: {
      'life-vest-classic': 'Спасательный жилет Classic',
      'life-vest-pro': 'Спасательный жилет Pro',
      'oars-pump-set': 'Комплект вёсел и насоса',
      'sup-cheetah-surge': 'Cheetah Surge Edition',
      'sup-dolphin-wave': 'Серия Dolphin Wave',
      'sup-explorer-11': "SUP Explorer 11'",
      'sup-flowing-lotus': 'Серия Flowing Lotus',
      'sup-jungle-mandala': 'Серия Jungle Mandala',
      'sup-leviathan-wake': 'Серия Leviathan Wake (китовое издание)',
      'sup-medusa-glow': 'Серия Medusa Glow (издание медузы)',
      'sup-ocean-pulse': 'Серия Ocean Pulse',
      'sup-ocean-voyager': 'Серия Ocean Voyager',
      'sup-tropical-breeze': 'Серия Tropical Breeze Island Escape',
    },
    summaries: {
      'life-vest-classic': 'Универсальный спасательный жилет с сертификацией CE для любительского водного спорта.',
      'life-vest-pro':
        'Автоматический надувной спасательный жилет по стандарту SOLAS для морских и спасательных операций.',
      'oars-pump-set':
        'Пара алюминиевых вёсел 1,6 м и мощная ножная помпа 5 л. Подходит для всех надувных лодок серии.',
      'sup-cheetah-surge':
        'Универсальная SUP-доска, вдохновлённая дикими животными, с премиальной многоцветной EVA-сборкой и гепардовым принтом в пастельно-розовом, петрол и коралловом тонах. Идеальна для катания по спокойной воде и лайфстайл-гребли.',
      'sup-dolphin-wave':
        'Вдохновлённая дельфинами универсальная SUP-доска с сине-зелёными волнами, высокоточной EVA-сборкой цветных блоков и морской эстетикой на 360°. Идеальна для прогулок по спокойной воде и любительской гребли.',
      'sup-explorer-11':
        'Универсальная 11-футовая надувная SUP-доска с широкой устойчивой формой для новичков и любителей.',
      'sup-flowing-lotus':
        'Универсальная SUP-доска, вдохновлённая восточным искусством, с мотивами лотоса, кои и стрекоз, лазерно-гравированной площадкой и градиентным рисунком водного потока. Идеальна для спокойной гребли и йоги.',
      'sup-jungle-mandala':
        'Универсальная SUP-доска, вдохновлённая тропическим лесом и мандалами, с гибискусами, колибри и симметричными геометрическими тотемами в цветах тиффани и кораллового апельсина. Идеальна для тропических направлений.',
      'sup-leviathan-wake':
        'Морская универсальная SUP-доска с величественным тотемом синего кита, геометрическими и племенными узорами и минималистичными чёрно-белыми волновыми линиями. Для любителей океана.',
      'sup-medusa-glow':
        'Сказочная универсальная SUP-доска, вдохновлённая медузами, с премиальной многоцветной EVA-сборкой, морскими звёздами и рисунком кораллового рифа в освежающем мятном цвете. Для тропических и прибрежных приключений.',
      'sup-ocean-pulse':
        'Универсальная SUP-доска, вдохновлённая топографическими волнами, с контурами цвета тиффани, высокоточной механической тиснёной текстурой и эстетически единым комплектом аксессуаров. Для лайфстайл-гребцов и бутик-приключений.',
      'sup-ocean-voyager':
        'Универсальная SUP-доска, вдохновлённая морскими черепахами, с премиальной многоцветной EVA-сборкой в глубоких петрол, бирюзовом и кораллово-оранжевом тонах. Для любителей океана и туристической гребли.',
      'sup-tropical-breeze':
        'Универсальная SUP-доска, вдохновлённая островным раем, с полным пейзажем островных каникул: солнце, кокосовые пальмы и пляжные сцены. Для тропических впечатлений и лайфстайл-гребли.',
    },
    labels: {
      'Air chambers': 'Воздушные камеры',

      'Catamaran beam': 'Ширина катамарана',

      'Conversion time': 'Время трансформации',
      'Cylinder diameter': 'Диаметр цилиндра',

      'Deck material': 'Материал палубы',

      'Expected service life': 'Ожидаемый срок службы',

      'Floor material': 'Материал настила',
      'Floor thickness': 'Толщина настила',

      'Fuel tank': 'Топливный бак',

      'Hull material': 'Материал корпуса',
      'Hull weight': 'Вес корпуса',
      'IR signature': 'ИК-сигнатура',

      'Inflation pressure': 'Давление надувания',
      'Kayak beam': 'Ширина каяка',

      'Load capacity': 'Грузоподъёмность',

      'Max capacity': 'Макс. вместимость',
      'Max engine': 'Макс. мотор',
      'Max engine power': 'Макс. мощность мотора',
      'Max load': 'Макс. нагрузка',
      'Max occupants': 'Макс. пассажиров',
      'Max persons': 'Макс. человек',
      'Max power': 'Макс. мощность',
      'Max pressure': 'Макс. давление',
      'Max pressure (deck)': 'Макс. давление (палуба)',
      'Max pressure (tubes)': 'Макс. давление (баллоны)',
      'Max speed': 'Макс. скорость',

      'Net weight': 'Собственный вес',
      'Oar length': 'Длина вёсел',
      'Oar material': 'Материал вёсел',
      'Operating range': 'Область применения',
      'Overall length': 'Общая длина',
      'Pack size': 'Размер в сложенном виде',

      'Pump max pressure': 'Макс. давление помпы',
      'Pump volume': 'Объём помпы',
      'Recommended power': 'Рекомендуемая мощность',

      'Setup time': 'Время сборки',
      'Side tube material': 'Материал бортовых баллонов',

      'Standard configuration': 'Стандартная комплектация',

      'Tube diameter': 'Диаметр баллона',
      'Tube material': 'Материал баллонов',

      'Weight (hull only)': 'Вес (только корпус)',

      'Air Chambers': 'Воздушные камеры',
      Artwork: 'Оформление',
      Backup: 'Резервный',
      Beam: 'Ширина',
      'Boat Weight': 'Вес лодки',
      Bottom: 'Дно',
      Buoyancy: 'Плавучесть',
      Capacity: 'Вместимость',
      Certification: 'Сертификация',
      Chambers: 'Камеры',
      Closure: 'Застёжка',
      Compatibility: 'Совместимость',
      Deadrise: 'Килеватость',
      Deck: 'Палуба',
      Deployment: 'Развёртывание',
      'Design Category': 'Категория проектирования',
      'Engine Shaft': 'Кардан двигателя',
      Features: 'Особенности',
      Floor: 'Пол',
      Frame: 'Рама',
      'Fuel Tank': 'Топливный бак',
      Height: 'Высота',
      Included: 'В комплекте',
      Inflation: 'Накачивание',
      'Internal Beam': 'Внутренняя ширина',
      'Internal Length': 'Внутренняя длина',
      Length: 'Длина',
      Material: 'Материал',
      'Max Engine Weight': 'Макс. вес двигателя',
      'Max Load': 'Макс. нагрузка',
      'Max Persons': 'Макс. человек',
      'Max Power': 'Макс. мощность',
      Models: 'Модели',
      Mounting: 'Монтаж',
      'Overall Length': 'Общая длина',
      Pontoons: 'Понтоны',
      Pressure: 'Давление',
      'Recommended Power': 'Рекоменд. мощность',
      Seams: 'Швы',
      Seats: 'Сиденья',
      'Shipping Dimensions': 'Габариты упаковки',
      Sizes: 'Размеры',
      Thickness: 'Толщина',
      'Tube Diameter': 'Диаметр баллона',
      Type: 'Тип',
      Valves: 'Клапаны',
      Warranty: 'Гарантия',
      Weight: 'Вес',
      Width: 'Ширина',
    },
    cats: {
      rib: 'RIB-лодки',
      inflatable: 'Надувные лодки',
      sup: 'SUP-борды',
      accessory: 'Аксессуары',
      kayak: 'Каяки и катамараны',
      service: 'Услуги',
    },
  },
  nl: {
    titles: {
      'life-vest-classic': 'Reddingsvest Classic',
      'life-vest-pro': 'Reddingsvest Pro',
      'oars-pump-set': 'Roeispaan- en pompset',
      'sup-cheetah-surge': 'Cheetah Surge Edition',
      'sup-dolphin-wave': 'Dolphin Wave-serie',
      'sup-explorer-11': "SUP Explorer 11'",
      'sup-flowing-lotus': 'Flowing Lotus-serie',
      'sup-jungle-mandala': 'Jungle Mandala-serie',
      'sup-leviathan-wake': 'Leviathan Wake-serie (wal-editie)',
      'sup-medusa-glow': 'Medusa Glow-serie (kwallen-editie)',
      'sup-ocean-pulse': 'Ocean Pulse-serie',
      'sup-ocean-voyager': 'Ocean Voyager-serie',
      'sup-tropical-breeze': 'Tropical Breeze Island Escape-serie',
    },
    summaries: {
      'life-vest-classic': 'CE-gecertificeerd universeel zwemvest voor recreatieve watersport.',
      'life-vest-pro': 'Automatisch opblaasbaar reddingsvest volgens SOLAS voor offshore- en reddingsoperaties.',
      'oars-pump-set':
        'Een paar aluminium roeispanen van 1,6m en een krachtige 5L voetpomp. Geschikt voor alle opblaasbare boten uit de serie.',
      'sup-cheetah-surge':
        'Allround SUP-board geïnspireerd door wilde dieren met premium meerbloks-EVA-samenstelling en luipaardprint in pastelroze, petrol en koraal. Perfect voor vlakwatercruises en lifestyle-paddelen.',
      'sup-dolphin-wave':
        'Dolfijn-geïnspireerd allround SUP-board met middeleeuws blauwe golven, hoogwaardige EVA-kleurblok-samenstelling en 360° maritieme esthetiek. Ideaal voor vlakwatercruises en recreatief paddelen.',
      'sup-explorer-11':
        'Veelzijdig 11ft opblaasbaar allround SUP-board met brede rompstabiliteit voor beginners en recreatieve paddelaars.',
      'sup-flowing-lotus':
        'Allround SUP-board geïnspireerd door oosterse kunst met lotus-, koi- en libellemotieven, lasergravierd voetenplatform en gradiënt waterstroom-kunst. Ideaal voor rustig paddelen en yoga.',
      'sup-jungle-mandala':
        "Allround SUP-board geïnspireerd door tropisch regenwoud en mandala's, met hibiscus, kolibries en symmetrische geometrische totems in tiffanyblauw en koraaloranje. Perfect voor tropische bestemmingen.",
      'sup-leviathan-wake':
        'Zee-geïnspireerd allround SUP-board met majestueus blauwe-walvis-totem, geometrische en tribale motieven en minimalistische zwart-witte golvingen. Voor oceaanliefhebbers.',
      'sup-medusa-glow':
        'Droomachtige allround SUP geïnspireerd door kwallen met premium meerbloks-EVA-samenstelling, zeesterren en koraalrif-kunst in verfrissende muntgroene toon. Voor tropische en kustavonturen.',
      'sup-ocean-pulse':
        'Allround SUP-board geïnspireerd door topografische golven met tiffanyblauwe contouren, hoogwaardige mechanische embossing en esthetisch verenigde accessoirelijn. Voor lifestyle-paddelaars en boutique-avonturiers.',
      'sup-ocean-voyager':
        'Allround SUP-board geïnspireerd door zeeschildpadden met premium meerbloks-EVA-samenstelling in diep petrol, turquoise en koraaloranje. Voor oceaanliefhebbers en toerpaddelaars.',
      'sup-tropical-breeze':
        'Allround SUP-board geïnspireerd door eilandparadijs met een compleet eilandvakantie-motieflandschap van zonneschijn, kokospalmen en strandtaferelen. Voor tropische uitstapjes en lifestyle-paddelen.',
    },
    labels: {
      'Air chambers': 'Luchtkamers',

      'Catamaran beam': 'Katamaranbreedte',

      'Conversion time': 'Ombouwtijd',
      'Cylinder diameter': 'Cilinderdiameter',

      'Deck material': 'Dekmateriaal',

      'Expected service life': 'Verwachte levensduur',

      'Floor material': 'Vloermateriaal',
      'Floor thickness': 'Vloerdikte',

      'Fuel tank': 'Brandstoftank',

      'Hull material': 'Rompmateriaal',
      'Hull weight': 'Rompgewicht',
      'IR signature': 'IR-signatuur',

      'Inflation pressure': 'Opblaasdruk',
      'Kayak beam': 'Kajakbreedte',

      'Load capacity': 'Laadvermogen',

      'Max capacity': 'Max. capaciteit',
      'Max engine': 'Max. motor',
      'Max engine power': 'Max. motorvermogen',
      'Max load': 'Max. belasting',
      'Max occupants': 'Max. inzittenden',
      'Max persons': 'Max. personen',
      'Max power': 'Max. vermogen',
      'Max pressure': 'Max. druk',
      'Max pressure (deck)': 'Max. druk (dek)',
      'Max pressure (tubes)': 'Max. druk (tubes)',
      'Max speed': 'Max. snelheid',

      'Net weight': 'Eigen gewicht',
      'Oar length': 'Roeispaanlengte',
      'Oar material': 'Roeispaanmateriaal',
      'Operating range': 'Inzetgebied',
      'Overall length': 'Totale lengde',
      'Pack size': 'Pakmaat',

      'Pump max pressure': 'Pomp max. druk',
      'Pump volume': 'Pompvolume',
      'Recommended power': 'Aanbevolen vermogen',

      'Setup time': 'Opbouwtijd',
      'Side tube material': 'Zijtube-materiaal',

      'Standard configuration': 'Standaarduitrusting',

      'Tube diameter': 'Tubediameter',
      'Tube material': 'Tubemateriaal',

      'Weight (hull only)': 'Gewicht (alleen romp)',

      'Air Chambers': 'Luchtkamers',
      Artwork: 'Artistiek ontwerp',
      Backup: 'Backup',
      Beam: 'Breedte',
      'Boat Weight': 'Bootgewicht',
      Bottom: 'Bodem',
      Buoyancy: 'Drijfvermogen',
      Capacity: 'Capaciteit',
      Certification: 'Certificering',
      Chambers: 'Kamers',
      Closure: 'Sluiting',
      Compatibility: 'Compatibiliteit',
      Deadrise: 'Deadrise',
      Deck: 'Dek',
      Deployment: 'Inzet',
      'Design Category': 'Ontwerpcategorie',
      'Engine Shaft': 'Motoras',
      Features: 'Kenmerken',
      Floor: 'Vloer',
      Frame: 'Frame',
      'Fuel Tank': 'Brandstoftank',
      Height: 'Hoogte',
      Included: 'Inbegrepen',
      Inflation: 'Oppompen',
      'Internal Beam': 'Interne breedte',
      'Internal Length': 'Interne lengte',
      Length: 'Lengte',
      Material: 'Materiaal',
      'Max Engine Weight': 'Max. motorgewicht',
      'Max Load': 'Max. belasting',
      'Max Persons': 'Max. personen',
      'Max Power': 'Max. vermogen',
      Models: 'Modellen',
      Mounting: 'Montage',
      'Overall Length': 'Totale lengte',
      Pontoons: 'Pontons',
      Pressure: 'Druk',
      'Recommended Power': 'Aanbevolen vermogen',
      Seams: 'Naden',
      Seats: 'Zittingen',
      'Shipping Dimensions': 'Verzendafmetingen',
      Sizes: 'Maten',
      Thickness: 'Dikte',
      'Tube Diameter': 'Buisdiameter',
      Type: 'Type',
      Valves: 'Kleppen',
      Warranty: 'Garantie',
      Weight: 'Gewicht',
      Width: 'Breedte',
    },
    cats: {
      rib: 'RIB-boten',
      inflatable: 'Opblaasbare boten',
      sup: 'SUP-boards',
      accessory: 'Accessoires',
      kayak: 'Kajaks en catamarans',
      service: 'Diensten',
    },
  },
  fi: {
    titles: {
      'life-vest-classic': 'Pelastusliivi Classic',
      'life-vest-pro': 'Pelastusliivi Pro',
      'oars-pump-set': 'Airo- ja pumppusarja',
      'sup-cheetah-surge': 'Cheetah Surge Edition',
      'sup-dolphin-wave': 'Dolphin Wave -sarja',
      'sup-explorer-11': "SUP Explorer 11'",
      'sup-flowing-lotus': 'Flowing Lotus -sarja',
      'sup-jungle-mandala': 'Jungle Mandala -sarja',
      'sup-leviathan-wake': 'Leviathan Wake -sarja (valaiden painos)',
      'sup-medusa-glow': 'Medusa Glow -sarja (meduusapainos)',
      'sup-ocean-pulse': 'Ocean Pulse -sarja',
      'sup-ocean-voyager': 'Ocean Voyager -sarja',
      'sup-tropical-breeze': 'Tropical Breeze Island Escape -sarja',
    },
    summaries: {
      'life-vest-classic': 'CE-sertifioitu yleinen pelastusliivi vapaa-ajan vesilajeihin.',
      'life-vest-pro':
        'SOLAS-standardin mukainen automaattisesti täyttyvä pelastusliivi avomeri- ja pelastusoperaatioihin.',
      'oars-pump-set':
        'Pari 1,6 m alumiiniairoja ja tehokas 5 l jalkapumppu. Sopii kaikkiin sarjan ilmalla täytettäviin veneisiin.',
      'sup-cheetah-surge':
        'Villieläinten innoittama monikäyttöinen SUP-lauta premium-monivärisellä EVA-lohkokoostumuksella ja gepardikuviolla pastellinpinkin, petroolin ja korallin sävyillä. Täydellinen tasaisen veden risteilyihin ja lifestyle-melontaan.',
      'sup-dolphin-wave':
        'Delfiinihenkinen monipuolinen SUP-lauta keskiaikaisen sinisillä aallokoilla, suuritarkkuudella katkaistulla EVA-värilohkokoostumuksella ja 360° meriaiheisuudella. Ihanteellinen tasaisen veden risteilyihin ja vapaa-ajan melontaan.',
      'sup-explorer-11':
        'Monipuolinen 11 jalan ilmalla täytettävä allround-SUP-lauta leveällä ja vakaalla rungolla aloittelijoille ja vapaa-ajan melojille.',
      'sup-flowing-lotus':
        'Itämaista taidetta mukaileva monipuolinen SUP-lauta lootus-, koi- ja sudenkorentoaiheilla, laserkaiverretulla tasoitteella ja liukuväreisellä vesivirtauskuviolla. Ihanteellinen rauhalliseen melontaan ja joogaan.',
      'sup-jungle-mandala':
        'Trooppista sademetsää ja mandaloita mukaileva monipuolinen SUP-lauta hibiskuksilla, kolibreilla ja symmetrisillä geometrisilla totemeilla tiffanynsinisessä ja korallinoranssissa. Täydellinen trooppisiin kohteisiin.',
      'sup-leviathan-wake':
        'Merta mukaileva monipuolinen SUP-lauta majesteettisella sinivalas-totemilla, geometrisilla ja heimoaiheilla sekä minimalistisilla mustavalkoisilla aaltoviivoilla. Meriharrastajille.',
      'sup-medusa-glow':
        'Unenomainen monipuolinen meduusahenkinen SUP premium-monivärisellä EVA-lohkokoostumuksella, meritähdillä ja koralliriuttataiteella virkistävässä mintunvihreässä. Trooppisiin ja rannikkoseikkailuihin.',
      'sup-ocean-pulse':
        'Topografisia aaltoja mukaileva monipuolinen SUP-lauta tiffanynsinisillä ääriviivoilla, suuritarkkuudella mekaanisella kohopainannalla ja esteettisesti yhtenäisellä tarvikelinjalla. Lifestyle-melojille ja boutique-seikkailijoille.',
      'sup-ocean-voyager':
        'Merikilpikonnia mukaileva monipuolinen SUP-lauta premium-monivärisellä EVA-lohkokoostumuksella syvässä petroolin, turkoosin ja korallinoranssin sävyissä. Meren ystäville ja retkimelojille.',
      'sup-tropical-breeze':
        'Saarten paratiisia mukaileva monipuolinen SUP-lauta täydellisellä saaristoloma-aihemaisemalla: aurinkoa, kookospalmuja ja rantakohtauksia. Trooppisiin retkiin ja lifestyle-melontaan.',
    },
    labels: {
      'Air chambers': 'Ilmakammiot',

      'Catamaran beam': 'Katamaraanin leveys',

      'Conversion time': 'Muunnosaika',
      'Cylinder diameter': 'Sylinterin halkaisija',

      'Deck material': 'Kannen materiaali',

      'Expected service life': 'Odotettu käyttöikä',

      'Floor material': 'Lattian materiaali',
      'Floor thickness': 'Lattian paksuus',

      'Fuel tank': 'Polttoainetankki',

      'Hull material': 'Rungon materiaali',
      'Hull weight': 'Rungon paino',
      'IR signature': 'IR-signatuuri',

      'Inflation pressure': 'Täyttöpaine',
      'Kayak beam': 'Kajakin leveys',

      'Load capacity': 'Kuormituskyky',

      'Max capacity': 'Max. kapasiteetti',
      'Max engine': 'Max. moottori',
      'Max engine power': 'Max. moottoriteho',
      'Max load': 'Max. kuorma',
      'Max occupants': 'Max. matkustajat',
      'Max persons': 'Max. henkilöä',
      'Max power': 'Max. teho',
      'Max pressure': 'Max. paine',
      'Max pressure (deck)': 'Max. paine (kansi)',
      'Max pressure (tubes)': 'Max. paine (putket)',
      'Max speed': 'Max. nopeus',

      'Net weight': 'Oma paino',
      'Oar length': 'Airon pituus',
      'Oar material': 'Airon materiaali',
      'Operating range': 'Käyttöalue',
      'Overall length': 'Kokonaispituus',
      'Pack size': 'Pakkauskoko',

      'Pump max pressure': 'Pumpun max. paine',
      'Pump volume': 'Pumpun tilavuus',
      'Recommended power': 'Suositeltu teho',

      'Setup time': 'Pystytysaika',
      'Side tube material': 'Sivuputken materiaali',

      'Standard configuration': 'Vakiovarustus',

      'Tube diameter': 'Putken halkaisija',
      'Tube material': 'Putken materiaali',

      'Weight (hull only)': 'Paino (vain runko)',

      'Air Chambers': 'Ilmakammiot',
      Artwork: 'Taidetyö',
      Backup: 'Varapumppu',
      Beam: 'Leveys',
      'Boat Weight': 'Veneen paino',
      Bottom: 'Pohja',
      Buoyancy: 'Kelluvuus',
      Capacity: 'Kapasiteetti',
      Certification: 'Sertifikaatti',
      Chambers: 'Kammiot',
      Closure: 'Suljin',
      Compatibility: 'Yhteensopivuus',
      Deadrise: 'Deadrise',
      Deck: 'Kansi',
      Deployment: 'Käyttöönotto',
      'Design Category': 'Suunnitteluluokka',
      'Engine Shaft': 'Moottoriakseli',
      Features: 'Ominaisuudet',
      Floor: 'Lattia',
      Frame: 'Kehikko',
      'Fuel Tank': 'Polttoainetankki',
      Height: 'Korkeus',
      Included: 'Sisältyy',
      Inflation: 'Pumppaus',
      'Internal Beam': 'Sisäleveys',
      'Internal Length': 'Sisäpituus',
      Length: 'Pituus',
      Material: 'Materiaali',
      'Max Engine Weight': 'Max moottoripaino',
      'Max Load': 'Max kuorma',
      'Max Persons': 'Max henkilöt',
      'Max Power': 'Max teho',
      Models: 'Mallit',
      Mounting: 'Asennus',
      'Overall Length': 'Kokonaispituus',
      Pontoons: 'Ponttonit',
      Pressure: 'Paine',
      'Recommended Power': 'Suositeltu teho',
      Seams: 'Saumat',
      Seats: 'Istuint',
      'Shipping Dimensions': 'Toimitusmitat',
      Sizes: 'Koot',
      Thickness: 'Paksuus',
      'Tube Diameter': 'Putken halkaisija',
      Type: 'Tyyppi',
      Valves: 'Venttiilit',
      Warranty: 'Takuu',
      Weight: 'Paino',
      Width: 'Leveys',
    },
    cats: {
      rib: 'RIB-veneet',
      inflatable: 'Ilmalla täytettävät veneet',
      sup: 'SUP-laudat',
      accessory: 'Tarvikkeet',
      kayak: 'Kajakit ja katamaraanit',
      service: 'Palvelut',
    },
  },
  pl: {
    titles: {
      'life-vest-classic': 'Kamizelka ratunkowa Classic',
      'life-vest-pro': 'Kamizelka ratunkowa Pro',
      'oars-pump-set': 'Zestaw wioseł i pompki',
      'sup-cheetah-surge': 'Cheetah Surge Edition',
      'sup-dolphin-wave': 'Seria Dolphin Wave',
      'sup-explorer-11': "SUP Explorer 11'",
      'sup-flowing-lotus': 'Seria Flowing Lotus',
      'sup-jungle-mandala': 'Seria Jungle Mandala',
      'sup-leviathan-wake': 'Seria Leviathan Wake (edycja wielorybia)',
      'sup-medusa-glow': 'Seria Medusa Glow (edycja meduzy)',
      'sup-ocean-pulse': 'Seria Ocean Pulse',
      'sup-ocean-voyager': 'Seria Ocean Voyager',
      'sup-tropical-breeze': 'Seria Tropical Breeze Island Escape',
    },
    summaries: {
      'life-vest-classic': 'Uniwersalna kamizelka ratunkowa z certyfikatem CE do rekreacyjnych sportów wodnych.',
      'life-vest-pro': 'Automatyczna dmuchana kamizelka ratunkowa wg normy SOLAS do operacji morskich i ratowniczych.',
      'oars-pump-set':
        'Para aluminiowych wioseł 1,6 m i wydajna pompka nożna 5 l. Pasuje do wszystkich dmuchanych łodzi serii.',
      'sup-cheetah-surge':
        'Uniwersalna deska SUP inspirowana dzikimi zwierzętami, z premium wielokolorowym układem EVA i panterowym printem w pastelowym różu, petrolu i koralu. Idealna na spokojne rejsy i wiosłowanie lifestyle.',
      'sup-dolphin-wave':
        'Inspirowana delfinami uniwersalna deska SUP z średniowiecznie niebieskimi falami, precyzyjnym układem kolorowych bloków EVA i morską estetyką 360°. Idealna na spokojne rejsy i rekreacyjne wiosłowanie.',
      'sup-explorer-11':
        'Uniwersalna dmuchana deska allround SUP 11 stóp z szerokim stabilnym kadłubem dla początkujących i rekreacyjnych pływaków.',
      'sup-flowing-lotus':
        'Uniwersalna deska SUP inspirowana sztuką wschodnią z motywami lotosu, koi i ważek, laserowo grawerowanym podestem i gradientową grafiką przepływu wody. Idealna do spokojnego wiosłowania i jogi.',
      'sup-jungle-mandala':
        'Uniwersalna deska SUP inspirowana tropikalną dżunglą i mandalami, z hibiskusami, kolibrami i symetrycznymi geometrycznymi totemami w błękicie tiffany i koralowym pomarańczu. Idealna na tropikalne kierunki.',
      'sup-leviathan-wake':
        'Morska uniwersalna deska SUP z majestatycznym totemem płetwala niebieskiego, geometrycznymi i plemiennymi wzorami oraz minimalistycznymi czarno-białymi liniami fal. Dla miłośników oceanu.',
      'sup-medusa-glow':
        'Oniryczna uniwersalna deska SUP inspirowana meduzami, z premium wielokolorowym układem EVA, rozgwiazdami i grafiką rafy koralowej w orzeźwiającym miętowym kolorze. Na tropikalne i przybrzeżne przygody.',
      'sup-ocean-pulse':
        'Uniwersalna deska SUP inspirowana topograficznymi falami, z konturami w błękicie tiffany, precyzyjną mechaniczną strukturą tłoczoną i estetycznie spójną linią akcesoriów. Dla pływaków lifestyle i poszukiwaczy przygód boutique.',
      'sup-ocean-voyager':
        'Uniwersalna deska SUP inspirowana żółwiami morskimi, z premium wielokolorowym układem EWA w głębokim petrolu, turkusie i koralowym pomarańczu. Dla miłośników oceanu i wiosłowania turystycznego.',
      'sup-tropical-breeze':
        'Uniwersalna deska SUP inspirowana rajem wyspowym, z kompletnym motywem wyspowych wakacji: słońce, palmy kokosowe i plażowe sceny. Na tropikalne eskapady i wiosłowanie lifestyle.',
    },
    labels: {
      'Air chambers': 'Komory powietrzne',

      'Catamaran beam': 'Szerokość katamaranu',

      'Conversion time': 'Czas konwersji',
      'Cylinder diameter': 'Średnica cylindra',

      'Deck material': 'Materiał pokładu',

      'Expected service life': 'Przewidywana żywotność',

      'Floor material': 'Materiał podłogi',
      'Floor thickness': 'Grubość podłogi',

      'Fuel tank': 'Zbiornik paliwa',

      'Hull material': 'Materiał kadłuba',
      'Hull weight': 'Waga kadłuba',
      'IR signature': 'Sygnatura IR',

      'Inflation pressure': 'Ciśnienie pompowania',
      'Kayak beam': 'Szerokość kajaka',

      'Load capacity': 'Nośność',

      'Max capacity': 'Maks. pojemność',
      'Max engine': 'Maks. silnik',
      'Max engine power': 'Maks. moc silnika',
      'Max load': 'Maks. obciążenie',
      'Max occupants': 'Maks. pasażerów',
      'Max persons': 'Maks. osób',
      'Max power': 'Maks. moc',
      'Max pressure': 'Maks. ciśnienie',
      'Max pressure (deck)': 'Maks. ciśnienie (pokład)',
      'Max pressure (tubes)': 'Maks. ciśnienie (balony)',
      'Max speed': 'Maks. prędkość',

      'Net weight': 'Masa własna',
      'Oar length': 'Długość wiosła',
      'Oar material': 'Materiał wiosła',
      'Operating range': 'Zakres stosowania',
      'Overall length': 'Długość całkowita',
      'Pack size': 'Rozmiar po złożeniu',

      'Pump max pressure': 'Maks. ciśnienie pompy',
      'Pump volume': 'Wydajność pompy',
      'Recommended power': 'Zalecana moc',

      'Setup time': 'Czas montażu',
      'Side tube material': 'Materiał balonu bocznego',

      'Standard configuration': 'Konfiguracja standardowa',

      'Tube diameter': 'Średnica balonu',
      'Tube material': 'Materiał balonów',

      'Weight (hull only)': 'Waga (tylko kadłub)',

      'Air Chambers': 'Komory powietrzne',
      Artwork: 'Wzór graficzny',
      Backup: 'Zapasowe',
      Beam: 'Szerokość',
      'Boat Weight': 'Waga łodzi',
      Bottom: 'Dno',
      Buoyancy: 'Wyporność',
      Capacity: 'Pojemność',
      Certification: 'Certyfikacja',
      Chambers: 'Komory',
      Closure: 'Zamknięcie',
      Compatibility: 'Kompatybilność',
      Deadrise: 'Kilowość',
      Deck: 'Pokład',
      Deployment: 'Rozmieszczenie',
      'Design Category': 'Kategoria projektowa',
      'Engine Shaft': 'Wał silnika',
      Features: 'Cechy',
      Floor: 'Podłoga',
      Frame: 'Rama',
      'Fuel Tank': 'Zbiornik paliwa',
      Height: 'Wysokość',
      Included: 'W zestawie',
      Inflation: 'Pompuwanie',
      'Internal Beam': 'Szerokość wewnętrzna',
      'Internal Length': 'Długość wewnętrzna',
      Length: 'Długość',
      Material: 'Materiał',
      'Max Engine Weight': 'Maks. waga silnika',
      'Max Load': 'Maks. ładowność',
      'Max Persons': 'Maks. osób',
      'Max Power': 'Maks. moc',
      Models: 'Modele',
      Mounting: 'Montaż',
      'Overall Length': 'Długość całkowita',
      Pontoons: 'Pontony',
      Pressure: 'Ciśnienie',
      'Recommended Power': 'Zalecana moc',
      Seams: 'Szwy',
      Seats: 'Siedzenia',
      'Shipping Dimensions': 'Wymiary wysyłki',
      Sizes: 'Rozmiary',
      Thickness: 'Grubość',
      'Tube Diameter': 'Średnica tubów',
      Type: 'Typ',
      Valves: 'Zawory',
      Warranty: 'Gwarancja',
      Weight: 'Waga',
      Width: 'Szerokość',
    },
    cats: {
      rib: 'Łodzie RIB',
      inflatable: 'Łodzie dmuchane',
      sup: 'Deski SUP',
      accessory: 'Akcesoria',
      kayak: 'Kajaki i katamarany',
      service: 'Usługi',
    },
  },
  ar: {
    titles: {
      'life-vest-classic': 'سترة نجاة Classic',
      'life-vest-pro': 'سترة نجاة Pro',
      'oars-pump-set': 'طقم مجاديف ومضخة',
      'sup-cheetah-surge': 'Cheetah Surge Edition',
      'sup-dolphin-wave': 'سلسلة Dolphin Wave',
      'sup-explorer-11': "SUP Explorer 11'",
      'sup-flowing-lotus': 'سلسلة Flowing Lotus',
      'sup-jungle-mandala': 'سلسلة Jungle Mandala',
      'sup-leviathan-wake': 'سلسلة Leviathan Wake (إصدار الحوت)',
      'sup-medusa-glow': 'سلسلة Medusa Glow (إصدار قنديل البحر)',
      'sup-ocean-pulse': 'سلسلة Ocean Pulse',
      'sup-ocean-voyager': 'سلسلة Ocean Voyager',
      'sup-tropical-breeze': 'سلسلة Tropical Breeze Island Escape',
    },
    summaries: {
      'life-vest-classic': 'سترة نجاة عالمية معتمدة CE للرياضات المائية الترفيهية.',
      'life-vest-pro': 'سترة نجاة نفخ تلقائية وفق معيار SOLAS لعمليات البحر والإنقاذ.',
      'oars-pump-set':
        'زوج من المجاديف الألمنيوم بطول 1.6 م ومضخة قدم قوية بسعة 5 لتر. تناسب جميع قوارب النفخ في السلسلة.',
      'sup-cheetah-surge':
        'لوح SUP متعدد الاستخدامات مستوحى من الحيوانات البرية مع تركيبة EVA متعددة الألوان من فئة premium وطبقة الفهد بالوردي الباستيلي والبترول والمرجاني. مثالي للتجديف في المياه الهادئة ونمط الحياة.',
      'sup-dolphin-wave':
        'لوح SUP متعدد الاستخدامات مستوحى من الدلافين بأمواج زرقاء وتركيبة كتل EVA ملونة عالية الدقة وجمالية بحرية بزاوية 360°. مثالي للتجديف في المياه الهادئة والتجديف الترفيهي.',
      'sup-explorer-11': 'لوح SUP نفخ متعدد الاستخدامات بطول 11 قدماً بجسم عريض وثابت للمبتدئين والرياضيين الترفيهيين.',
      'sup-flowing-lotus':
        'لوح SUP متعدد الاستخدامات مستوحى من الفن الشرقي بموتيفات اللوتس والكوي ويعسوب، مع منصة محفورة بالليزر ورسم تدرجي لتيار الماء. مثالي للتجديف الهادئ واليوغا.',
      'sup-jungle-mandala':
        'لوح SUP متعدد الاستخدامات مستوحى من الغابة المطيرة والماندالا، مع الكركديه وطيور الطنانة وتوتيمات هندسية متماثلة بأزرق التيفاني والبرتقالي المرجاني. مثالي للوجهات الاستوائية.',
      'sup-leviathan-wake':
        'لوح SUP بحري متعدد الاستخدامات مع توتيم حوت أزرق مهيب وأنماط هندسية وقبلية وخطوط أمواج بالأبيض والأسود بأسلوب بسيط. لعشاق المحيط.',
      'sup-medusa-glow':
        'لوح SUP حالم متعدد الاستخدامات مستوحى من قناديل البحر مع تركيبة EVA متعددة الألوان من فئة premium ونجمات البحر وفن الشعاب المرجانية بأخضر النعناع المنعش. لمغامرات استوائية وساحلية.',
      'sup-ocean-pulse':
        'لوح SUP متعدد الاستخدامات مستوحى من الأمواج الطبوغرافية بخطوط بأزرق التيفاني ونقش ميكانيكي عالي الدقة وطقم ملحقات متناسق جمالياً. للرياضيين بنمط الحياة ومحبي المغامرات الراقية.',
      'sup-ocean-voyager':
        'لوح SUP متعدد الاستخدامات مستوحى من السلاحف البحرية مع تركيبة EVA متعددة الألوان من فئة premium بالبترول العميق والفيروزي والبرتقالي المرجاني. لعشاق المحيط والتجديف السياحي.',
      'sup-tropical-breeze':
        'لوح SUP متعدد الاستخدامات مستوحى من جنة الجزر مع مشهد كامل لعطلة الجزيرة: شمس ونخيل جوز الهند ومشاهد الشاطئ. للرحلات الاستوائية والتجديف بنمط الحياة.',
    },
    labels: {
      'Air chambers': 'غرف الهواء',

      'Catamaran beam': 'عرض الكاتاماران',

      'Conversion time': 'زمن التحويل',
      'Cylinder diameter': 'قطر الأسطوانة',

      'Deck material': 'مادة السطح',

      'Expected service life': 'العمر التشغيلي المتوقع',

      'Floor material': 'مادة الأرضية',
      'Floor thickness': 'سماكة الأرضية',

      'Fuel tank': 'خزان الوقود',

      'Hull material': 'مادة الهيكل',
      'Hull weight': 'وزن الهيكل',
      'IR signature': 'بصمة الأشعة تحت الحمراء',

      'Inflation pressure': 'ضغط النفخ',
      'Kayak beam': 'عرض الكاياك',

      'Load capacity': 'الحمولة',

      'Max capacity': 'الحد الأقصى للسعة',
      'Max engine': 'الحد الأقصى للمحرك',
      'Max engine power': 'الحد الأقصى لقوة المحرك',
      'Max load': 'الحد الأقصى للحمل',
      'Max occupants': 'الحد الأقصى للركاب',
      'Max persons': 'الحد الأقصى للأشخاص',
      'Max power': 'الحد الأقصى للقدرة',
      'Max pressure': 'الحد الأقصى للضغط',
      'Max pressure (deck)': 'الحد الأقصى للضغط (السطح)',
      'Max pressure (tubes)': 'الحد الأقصى للضغط (الأنابيب)',
      'Max speed': 'السرعة القصوى',

      'Net weight': 'الوزن الصافي',
      'Oar length': 'طول المجداف',
      'Oar material': 'مادة المجداف',
      'Operating range': 'نطاق التشغيل',
      'Overall length': 'الطول الكلي',
      'Pack size': 'حجم الحزمة',

      'Pump max pressure': 'الحد الأقصى لضغط المضخة',
      'Pump volume': 'سعة المضخة',
      'Recommended power': 'القدرة الموصى بها',

      'Setup time': 'زمن التجهيز',
      'Side tube material': 'مادة الأنبوب الجانبي',

      'Standard configuration': 'التجهيز القياسي',

      'Tube diameter': 'قطر الأنبوب',
      'Tube material': 'مادة الأنبوب',

      'Weight (hull only)': 'الوزن (الهيكل فقط)',

      'Air Chambers': 'غرف الهواء',
      Artwork: 'التصميم الفني',
      Backup: 'نفخ احتياطي',
      Beam: 'العرض',
      'Boat Weight': 'وزن القارب',
      Bottom: 'القاع',
      Buoyancy: 'الطفو',
      Capacity: 'السعة',
      Certification: 'الشهادة',
      Chambers: 'الغرف',
      Closure: 'الإغلاق',
      Compatibility: 'التوافق',
      Deadrise: 'Deadrise',
      Deck: 'السطح',
      Deployment: 'النشر',
      'Design Category': 'فئة التصميم',
      'Engine Shaft': 'عمود المحرك',
      Features: 'الميزات',
      Floor: 'الأرضية',
      Frame: 'الإطار',
      'Fuel Tank': 'خزان الوقود',
      Height: 'الارتفاع',
      Included: 'المشمولات',
      Inflation: 'النفخ',
      'Internal Beam': 'العرض الداخلي',
      'Internal Length': 'الطول الداخلي',
      Length: 'الطول',
      Material: 'المادة',
      'Max Engine Weight': 'الحد الأقصى لوزن المحرك',
      'Max Load': 'الحد الأقصى للحمولة',
      'Max Persons': 'الحد الأقصى للأشخاص',
      'Max Power': 'الحد الأقصى للقدرة',
      Models: 'الموديلات',
      Mounting: 'التركيب',
      'Overall Length': 'الطول الإجمالي',
      Pontoons: 'العوامات',
      Pressure: 'الضغط',
      'Recommended Power': 'القدرة الموصى بها',
      Seams: 'الدرزات',
      Seats: 'المقاعد',
      'Shipping Dimensions': 'أبعاد الشحن',
      Sizes: 'الأحجام',
      Thickness: 'السُمك',
      'Tube Diameter': 'قطر الأنبوب',
      Type: 'النوع',
      Valves: 'الصمامات',
      Warranty: 'الضمان',
      Weight: 'الوزن',
      Width: 'العرض',
    },
    cats: {
      rib: 'قوارب RIB',
      inflatable: 'قوارب قابلة للنفخ',
      sup: 'ألواح SUP',
      accessory: 'الملحقات',
      kayak: 'كاياك وكاتاماران',
      service: 'الخدمات',
    },
  },
  pt: {
    titles: {
      'life-vest-classic': 'Colete salva-vidas Classic',
      'life-vest-pro': 'Colete salva-vidas Pro',
      'oars-pump-set': 'Kit de remos e bomba',
      'sup-cheetah-surge': 'Cheetah Surge Edition',
      'sup-dolphin-wave': 'Série Dolphin Wave',
      'sup-explorer-11': "SUP Explorer 11'",
      'sup-flowing-lotus': 'Série Flowing Lotus',
      'sup-jungle-mandala': 'Série Jungle Mandala',
      'sup-leviathan-wake': 'Série Leviathan Wake (edição baleia)',
      'sup-medusa-glow': 'Série Medusa Glow (edição medusa)',
      'sup-ocean-pulse': 'Série Ocean Pulse',
      'sup-ocean-voyager': 'Série Ocean Voyager',
      'sup-tropical-breeze': 'Série Tropical Breeze Island Escape',
    },
    summaries: {
      'life-vest-classic': 'Colete salva-vidas universal com certificação CE para desportos aquáticos recreativos.',
      'life-vest-pro': 'Colete salva-vidas inflável automático conforme SOLAS para operações offshore e de resgate.',
      'oars-pump-set':
        'Par de remos em alumínio de 1,6m e uma bomba de pé potente de 5L. Compatível com todos os barcos infláveis da série.',
      'sup-cheetah-surge':
        'Prancha SUP versátil inspirada em animais selvagens com composição EVA multicolor premium e estampa de guepada em rosa pastel, petróleo e coral. Perfeita para cruzeiros em águas calmas e remo lifestyle.',
      'sup-dolphin-wave':
        'Prancha SUP versátil inspirada em golfinhos com ondas azul-medieval, composição de blocos de cor EVA de alta precisão e estética marítima a 360°. Ideal para cruzeiros em águas calmas e remo recreativo.',
      'sup-explorer-11':
        'Prancha SUP allround inflável versátil de 11 pés com casco largo e estável para principiantes e remadores recreativos.',
      'sup-flowing-lotus':
        'Prancha SUP versátil inspirada na arte oriental com motivos de lótus, koi e libélulas, plataforma gravada a laser e arte de fluxo de água em gradiente. Ideal para remo tranquilo e ioga.',
      'sup-jungle-mandala':
        'Prancha SUP versátil inspirada na floresta tropical e mandalas, com hibiscos, colibris e totens geométricos simétricos em azul-tiffany e laranja coral. Perfeita para destinos tropicais.',
      'sup-leviathan-wake':
        'Prancha SUP versátil inspirada no mar com totém majestoso de baleia-azul, padrões geométricos e tribais e linhas de onda minimalistas a preto e branco. Para entusiastas do oceano.',
      'sup-medusa-glow':
        'Prancha SUP versátil onírica inspirada em medusas com composição EVA multicolor premium, estrelas-do-mar e arte de recife de coral em verde menta refrescante. Para aventuras tropicais e costeiras.',
      'sup-ocean-pulse':
        'Prancha SUP versátil inspirada em ondas topográficas com contornos azul-tiffany, texturização mecânica de alta precisão e linha de acessórios esteticamente unificada. Para remadores lifestyle e aventureiros boutique.',
      'sup-ocean-voyager':
        'Prancha SUP versátil inspirada em tartarugas marinhas com composição EVA multicolor premium em petróleo profundo, turquesa e laranja coral. Para amantes do oceano e remo de turismo.',
      'sup-tropical-breeze':
        'Prancha SUP versátil inspirada num paraíso insular com uma paisagem completa de férias na ilha: sol, coqueiros e cenários de praia. Para escapadelas tropicais e remo lifestyle.',
    },
    labels: {
      'Air chambers': 'Câmaras de ar',

      'Catamaran beam': 'Boca do catamaran',

      'Conversion time': 'Tempo de conversão',
      'Cylinder diameter': 'Diâmetro do cilindro',

      'Deck material': 'Material do deck',

      'Expected service life': 'Vida útil esperada',

      'Floor material': 'Material do piso',
      'Floor thickness': 'Espessura do piso',

      'Fuel tank': 'Depósito de combustível',

      'Hull material': 'Material do casco',
      'Hull weight': 'Peso do casco',
      'IR signature': 'Assinatura IR',

      'Inflation pressure': 'Pressão de enchimento',
      'Kayak beam': 'Boca do caiaque',

      'Load capacity': 'Capacidade de carga',

      'Max capacity': 'Capacidade máx.',
      'Max engine': 'Motor máx.',
      'Max engine power': 'Potência máx. do motor',
      'Max load': 'Carga máx.',
      'Max occupants': 'Ocupantes máx.',
      'Max persons': 'Pessoas máx.',
      'Max power': 'Potência máx.',
      'Max pressure': 'Pressão máx.',
      'Max pressure (deck)': 'Pressão máx. (deck)',
      'Max pressure (tubes)': 'Pressão máx. (tubos)',
      'Max speed': 'Velocidade máx.',

      'Net weight': 'Peso próprio',
      'Oar length': 'Comprimento do remo',
      'Oar material': 'Material do remo',
      'Operating range': 'Âmbito de utilização',
      'Overall length': 'Comprimento total',
      'Pack size': 'Tamanho de embalagem',

      'Pump max pressure': 'Pressão máx. da bomba',
      'Pump volume': 'Caudal da bomba',
      'Recommended power': 'Potência recomendada',

      'Setup time': 'Tempo de montagem',
      'Side tube material': 'Material do tubo lateral',

      'Standard configuration': 'Configuração padrão',

      'Tube diameter': 'Diâmetro do tubo',
      'Tube material': 'Material do tubo',

      'Weight (hull only)': 'Peso (apenas casco)',

      'Air Chambers': 'Câmaras de ar',
      Artwork: 'Arte',
      Backup: 'Backup',
      Beam: 'Boca',
      'Boat Weight': 'Peso do barco',
      Bottom: 'Fundo',
      Buoyancy: 'Flutuação',
      Capacity: 'Capacidade',
      Certification: 'Certificação',
      Chambers: 'Câmaras',
      Closure: 'Fecho',
      Compatibility: 'Compatibilidade',
      Deadrise: 'Deadrise',
      Deck: 'Convés',
      Deployment: 'Implantação',
      'Design Category': 'Categoria de projeto',
      'Engine Shaft': 'Eixo do motor',
      Features: 'Características',
      Floor: 'Piso',
      Frame: 'Estrutura',
      'Fuel Tank': 'Tanque de combustível',
      Height: 'Altura',
      Included: 'Incluído',
      Inflation: 'Inflação',
      'Internal Beam': 'Boca interna',
      'Internal Length': 'Comprimento interno',
      Length: 'Comprimento',
      Material: 'Material',
      'Max Engine Weight': 'Peso máx. do motor',
      'Max Load': 'Carga máx.',
      'Max Persons': 'Pessoas máx.',
      'Max Power': 'Potência máx.',
      Models: 'Modelos',
      Mounting: 'Montagem',
      'Overall Length': 'Comprimento total',
      Pontoons: 'Pantoons',
      Pressure: 'Pressão',
      'Recommended Power': 'Potência recomendada',
      Seams: 'Costuras',
      Seats: 'Assentos',
      'Shipping Dimensions': 'Dimensões de envio',
      Sizes: 'Tamanhos',
      Thickness: 'Espessura',
      'Tube Diameter': 'Diâmetro do tubo',
      Type: 'Tipo',
      Valves: 'Válvulas',
      Warranty: 'Garantia',
      Weight: 'Peso',
      Width: 'Boca',
    },
    cats: {
      rib: 'Barcos RIB',
      inflatable: 'Barcos infláveis',
      sup: 'Pranchas SUP',
      accessory: 'Acessórios',
      kayak: 'Caiaques e catamarans',
      service: 'Serviços',
    },
  },
  ja: {
    titles: {
      'life-vest-classic': 'ライフジャケット Classic',
      'life-vest-pro': 'ライフジャケット Pro',
      'oars-pump-set': 'オール・ポンプセット',
      'sup-cheetah-surge': 'Cheetah Surge Edition',
      'sup-dolphin-wave': 'Dolphin Waveシリーズ',
      'sup-explorer-11': "SUP Explorer 11'",
      'sup-flowing-lotus': 'Flowing Lotusシリーズ',
      'sup-jungle-mandala': 'Jungle Mandalaシリーズ',
      'sup-leviathan-wake': 'Leviathan Wakeシリーズ（クジラエディション）',
      'sup-medusa-glow': 'Medusa Glowシリーズ（クラゲエディション）',
      'sup-ocean-pulse': 'Ocean Pulseシリーズ',
      'sup-ocean-voyager': 'Ocean Voyagerシリーズ',
      'sup-tropical-breeze': 'Tropical Breeze Island Escapeシリーズ',
    },
    summaries: {
      'life-vest-classic': 'レジャーマリンスポーツ向けCE認証取得の汎用ライフジャケット。',
      'life-vest-pro': '洋上・救助活動向けSOLAS準拠の自動膨張式ライフジャケット。',
      'oars-pump-set':
        '1.6mアルミオール1組と強力な5Lフットポンプ。シリーズのすべてのインフレータブルボートに対応します。',
      'sup-cheetah-surge':
        'プレミアムマルチカラーエンジニアードEVA構成とパステルピンク・ペトロール・コーラルのチータープリントを施した、野生動物からインスピレーションを得たオールラウンドSUPボード。フラットウォータークルージングとライフスタイルパドリングに最適です。',
      'sup-dolphin-wave':
        'ミディアバルーの波、高精度なEVAカラーブロック構成、360°のマリン美学を備えたイルカからインスピレーションを得たオールラウンドSUPボード。フラットウォータークルージングとレジャーパドリングに最適です。',
      'sup-explorer-11':
        '初心者とレジャーパドラーに最適な広く安定したハル形状を備えた多目的11ftインフレータブルオールラウンドSUPボード。',
      'sup-flowing-lotus':
        '蓮・鯉・トンボのモチーフ、レーザー彫刻スタンディングパッド、グラデーションの水流アートを備えた東洋芸術からインスピレーションを得たオールラウンドSUPボード。静かなパドリングとヨガに最適です。',
      'sup-jungle-mandala':
        'ハイビスカス、ハチドリ、ティファニーブルーとコーラルオレンジのシンメトリック幾何学トーテムを備えた熱帯雨林とマンダラからインスピレーションを得たオールラウンドSUPボード。トロピカルな目的地に最適です。',
      'sup-leviathan-wake':
        '荘厳なシロナガスクジラのトーテム、幾何学・トライバルパターン、ミニマルな白黒の波ラインを備えた海洋インスピレーションのオールラウンドSUPボード。オーシャンラバーのために。',
      'sup-medusa-glow':
        'プレミアムマルチカラーエンジニアードEVA構成、ヒトデ、リフレッシュなミントグリーンのサンゴ礁アートを備えたクラゲからインスピレーションを得たドリーミーなオールラウンドSUP。トロピカル・沿岸アドベンチャーに。',
      'sup-ocean-pulse':
        'ティファニーブルーの輪郭、高精度メカニカルエンボス、美的に統一されたアクセサリーラインを備えた等高線状の波からインスピレーションを得たオールラウンドSUPボード。ライフスタイルパドラーとブティックアドベンチャー向けに。',
      'sup-ocean-voyager':
        'ディープペトロール、ターコイズ、コーラルオレンジのプレミアムマルチカラーエンジニアードEVA構成を備えたウミガメからインスピレーションを得たオールラウンドSUPボード。オーシャンラバーとツーリングパドラーのために。',
      'sup-tropical-breeze':
        '太陽、ココナッツパーム、ビーチシーンの完全な島休暇モチーフランドスケープを備えた島の楽園からインスピレーションを得たオールラウンドSUPボード。トロピカルエスケープとライフスタイルパドリングに。',
    },
    labels: {
      'Air chambers': 'エアチャンバー',
      Artwork: 'アートワーク',
      Backup: '予備膨張',
      Beam: '全幅',
      Bottom: '底部',
      Buoyancy: '浮力',
      Capacity: '容量',
      'Catamaran beam': 'カタマラン全幅',
      Certification: '認証',
      Chambers: '気室',
      Closure: '留め具',
      Compatibility: '互換性',
      'Conversion time': '変換時間',
      'Cylinder diameter': 'シリンダー直径',
      Deck: 'デッキ',
      'Deck material': 'デッキ素材',
      Deployment: '膨張時間',
      'Expected service life': '予想耐用年数',
      Features: '装備',
      Floor: 'フロア',
      'Floor material': 'フロア素材',
      'Floor thickness': 'フロア厚',
      Frame: 'フレーム',
      'Fuel tank': '燃料タンク',
      Height: '高さ',
      'Hull material': '船体素材',
      'Hull weight': '船体重量',
      'IR signature': 'IRシグネチャ',
      Included: '付属品',
      Inflation: '膨張',
      'Inflation pressure': '膨張圧',
      'Kayak beam': 'カヤック全幅',
      Length: '長さ',
      'Load capacity': '積載量',
      Material: '素材',
      'Max capacity': '最大容量',
      'Max engine': '最大エンジン',
      'Max engine power': '最大エンジン出力',
      'Max load': '最大積載量',
      'Max occupants': '最大乗員',
      'Max persons': '最大人数',
      'Max power': '最大出力',
      'Max pressure': '最大圧力',
      'Max pressure (deck)': '最大圧力（デッキ）',
      'Max pressure (tubes)': '最大圧力（チューブ）',
      'Max speed': '最大速度',
      Models: 'モデル',
      Mounting: '取り付け',
      'Net weight': '本体重量',
      'Oar length': 'オール長',
      'Oar material': 'オール素材',
      'Operating range': '使用範囲',
      'Overall length': '全長',
      'Pack size': '収納サイズ',
      Pontoons: 'ポンツーン',
      Pressure: '圧力',
      'Pump max pressure': 'ポンプ最大圧力',
      'Pump volume': 'ポンプ容量',
      'Recommended power': '推奨出力',
      Seams: 'シーム',
      Seats: '座席',
      'Setup time': 'セットアップ時間',
      'Side tube material': 'サイドチューブ素材',
      Sizes: 'サイズ',
      'Standard configuration': '標準構成',
      Thickness: '厚さ',
      'Tube diameter': 'チューブ直径',
      'Tube material': 'チューブ素材',
      Type: 'タイプ',
      Valves: 'バルブ',
      Warranty: '保証',
      Weight: '重量',
      'Weight (hull only)': '重量（船体のみ）',
      Width: '幅',

      'Air Chambers': 'エアチャンバー',
      'Boat Weight': 'ボート重量',
      Deadrise: 'デッドライズ',
      'Design Category': '設計カテゴリー',
      'Engine Shaft': 'エンジンシャフト',
      'Fuel Tank': '燃料タンク',
      'Internal Beam': '内幅',
      'Internal Length': '内寸長',
      'Max Engine Weight': '最大エンジン重量',
      'Max Load': '最大積載量',
      'Max Persons': '最大定員',
      'Max Power': '最大出力',
      'Overall Length': '全長',
      'Recommended Power': '推奨出力',
      'Shipping Dimensions': '配送時寸法',
      'Tube Diameter': 'チューブ直径',
    },
    cats: {
      rib: 'RIBボート',
      inflatable: 'インフレータブルボート',
      sup: 'SUPボード',
      accessory: 'アクセサリー',
      kayak: 'カヤックとカタマラン',
      service: 'サービス',
    },
  },
};

const SKILL_L10N: Record<string, Record<string, string>> = {
  de: { beginner: 'Anfänger', intermediate: 'Fortgeschritten', advanced: 'Experte', professional: 'Profi' },
  es: { beginner: 'Principiante', intermediate: 'Intermedio', advanced: 'Avanzado', professional: 'Profesional' },
  fr: { beginner: 'Débutant', intermediate: 'Intermédiaire', advanced: 'Avancé', professional: 'Professionnel' },
  it: { beginner: 'Principiante', intermediate: 'Intermedio', advanced: 'Avanzato', professional: 'Professionista' },
  ja: { beginner: '初心者', intermediate: '中級者', advanced: '上級者', professional: 'プロフェッショナル' },
  nl: { beginner: 'Beginner', intermediate: 'Gemiddeld', advanced: 'Gevorderd', professional: 'Professional' },
  fi: { beginner: 'Aloittelija', intermediate: 'Keskitaso', advanced: 'Edistynyt', professional: 'Ammattilainen' },
  pl: {
    beginner: 'Początkujący',
    intermediate: 'Średniozaawansowany',
    advanced: 'Zaawansowany',
    professional: 'Profesjonalista',
  },
  ar: { beginner: 'مبتدئ', intermediate: 'متوسط', advanced: 'متقدم', professional: 'محترف' },
  pt: { beginner: 'Iniciante', intermediate: 'Intermediário', advanced: 'Avançado', professional: 'Profissional' },
  cs: { beginner: 'Začátečník', intermediate: 'Středně pokročilý', advanced: 'Pokročilý', professional: 'Profesionál' },
  sv: { beginner: 'Nybörjare', intermediate: 'Medel', advanced: 'Avancerad', professional: 'Professionell' },
  da: { beginner: 'Begynder', intermediate: 'Øvet', advanced: 'Avanceret', professional: 'Professionel' },
  el: { beginner: 'Αρχάριος', intermediate: 'Ενδιάμεσος', advanced: 'Προχωρημένος', professional: 'Επαγγελματίας' },
  no: { beginner: 'Nybegynner', intermediate: 'Øvet', advanced: 'Avansert', professional: 'Profesjonell' },
  ru: { beginner: 'Начинающий', intermediate: 'Средний', advanced: 'Продвинутый', professional: 'Профессионал' },
};

export function localizeProductData<
  T extends {
    slug: string;
    title: string;
    summary?: string;
    category?: string;
    categoryLabel?: string;
    specs?: Array<{ label: string; value: string }>;
    skill?: string;
    metadata?: { title?: string; description?: string };
  },
>(p: T, lang: string): T {
  if (lang === 'en') return p;
  // Hand-maintained maps win; PRODUCT_L10N_MT carries machine translations for the
  // remaining locales so their product pages are not left in English.
  const l = PRODUCT_L10N[lang] ?? PRODUCT_L10N_MT[lang];
  if (!l) return p;
  const out: T = { ...p };
  const o = out as T & {
    definition?: string;
    problem?: string;
    howItWorks?: string;
    audience?: string;
    ai_use_cases?: string[];
    ai_comparison?: string;
    ai_faq?: Array<{ q: string; a: string }>;
  };
  if (l.titles[out.slug]) {
    out.title = l.titles[out.slug];
  }
  if (out.metadata) {
    out.metadata = { ...out.metadata, description: undefined };
    if (l.titles[out.slug]) {
      out.metadata = { ...out.metadata, title: undefined };
    }
  }
  if (l.summaries[out.slug]) out.summary = l.summaries[out.slug];
  if (out.category && l.cats[out.category]) out.categoryLabel = l.cats[out.category];
  if (Array.isArray(out.specs)) {
    out.specs = out.specs.map((sp) => ({ ...sp, label: l.labels[sp.label] ?? sp.label }));
  }
  if (out.skill) {
    const sk = SKILL_L10N[lang]?.[out.skill] ?? SKILL_L10N_MT[lang]?.[out.skill];
    if (sk) out.skill = sk;
  }
  const x = PRODUCT_EXTRAS[lang]?.[out.slug];
  if (x) {
    if (x.definition) o.definition = x.definition;
    if (x.problem) o.problem = x.problem;
    if (x.howItWorks) o.howItWorks = x.howItWorks;
    if (x.audience) o.audience = x.audience;
    if (x.ai_use_cases) o.ai_use_cases = x.ai_use_cases;
    if (x.ai_comparison) o.ai_comparison = x.ai_comparison;
    if (x.ai_faq) o.ai_faq = x.ai_faq;
  }
  return out;
}
