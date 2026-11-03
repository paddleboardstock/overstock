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
      'oars-pump-set': 'Ruder- & Pumpen-Set',
      'sup-cheetah-surge': 'Cheetah Surge Edition',
      'sup-dolphin-wave': 'Dolphin Wave Serie',
      'sup-explorer-11': 'SUP Explorer 11',
      'sup-flowing-lotus': 'Flowing Lotus Serie',
      'sup-jungle-mandala': 'Jungle Mandala Serie',
      'sup-leviathan-wake': 'Leviathan Wake Serie (Wal-Edition)',
      'sup-medusa-glow': 'Medusa Glow Serie (Quallen-Edition)',
      'sup-ocean-pulse': 'Ocean Pulse Serie',
      'sup-ocean-voyager': 'Ocean Voyager Serie',
      'sup-tropical-breeze': 'Tropical Breeze Island Escape Serie',
    },
    summaries: {
      'oars-pump-set':
        'Paar 1.6 m Aluminiumruder und 5 L Fußluftpumpe mit hoher Förderleistung. Passt auf alle aufblasbaren Boards der Serie.',
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
      Bottom: 'Boden',
      Buoyancy: 'Auftrieb',
      Capacity: 'Kapazität',
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
      sup: 'SUP-Stehpaddelbretter',
      accessory: 'Zubehör',
      service: 'Dienstleistungen',
    },
  },
  es: {
    titles: {
      'oars-pump-set': 'Juego de remos y bomba',
      'sup-cheetah-surge': 'Edición Cheetah Surge',
      'sup-dolphin-wave': 'Serie Dolphin Wave',
      'sup-explorer-11': 'SUP Explorer 11',
      'sup-flowing-lotus': 'Serie Flowing Lotus',
      'sup-jungle-mandala': 'Serie Jungle Mandala',
      'sup-leviathan-wake': 'Serie Leviathan Wake (edición ballena)',
      'sup-medusa-glow': 'Serie Medusa Glow (edición medusa)',
      'sup-ocean-pulse': 'Serie Ocean Pulse',
      'sup-ocean-voyager': 'Serie Ocean Voyager',
      'sup-tropical-breeze': 'Serie Tropical Breeze Island Escape',
    },
    summaries: {
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
      Bottom: 'Fondo',
      Buoyancy: 'Flotabilidad',
      Capacity: 'Capacidad',
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
      sup: 'Tablas de SUP',
      accessory: 'Accesorios',
      service: 'Servicios',
    },
  },
  fr: {
    titles: {
      'oars-pump-set': 'Ensemble pagaies et pompe',
      'sup-cheetah-surge': 'Cheetah Surge Edition',
      'sup-dolphin-wave': 'Série Dolphin Wave',
      'sup-explorer-11': 'SUP Explorer 11',
      'sup-flowing-lotus': 'Série Flowing Lotus',
      'sup-jungle-mandala': 'Série Jungle Mandala',
      'sup-leviathan-wake': 'Série Leviathan Wake (édition baleine)',
      'sup-medusa-glow': 'Série Medusa Glow (édition méduse)',
      'sup-ocean-pulse': 'Série Ocean Pulse',
      'sup-ocean-voyager': 'Série Ocean Voyager',
      'sup-tropical-breeze': 'Série Tropical Breeze Island Escape',
    },
    summaries: {
      'oars-pump-set':
        'Paire de pagaies en aluminium de 1.6 m et pompe à pied haute performance de 5 L. Compatible avec tous les gonflables de la gamme.',
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
      Bottom: 'Fond',
      Buoyancy: 'Flottabilité',
      Capacity: 'Capacité',
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
      sup: 'Planches de SUP',
      accessory: 'Accessoires',
      service: 'Services',
    },
  },
  it: {
    titles: {
      'oars-pump-set': 'Set pagaie e pompa',
      'sup-cheetah-surge': 'Edizione Cheetah Surge',
      'sup-dolphin-wave': 'Serie Dolphin Wave',
      'sup-explorer-11': 'SUP Explorer 11',
      'sup-flowing-lotus': 'Serie Flowing Lotus',
      'sup-jungle-mandala': 'Serie Jungle Mandala',
      'sup-leviathan-wake': 'Serie Leviathan Wake (Edizione Balena)',
      'sup-medusa-glow': 'Serie Medusa Glow (Edizione Medusa di mare)',
      'sup-ocean-pulse': 'Serie Ocean Pulse',
      'sup-ocean-voyager': 'Serie Ocean Voyager',
      'sup-tropical-breeze': 'Serie Tropical Breeze Island Escape',
    },
    summaries: {
      'oars-pump-set':
        'Coppia di pagaie in alluminio da 1.6 m e pompa a pedale ad alto flusso da 5 L. Adatta a tutti i gonfiabili della gamma.',
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
      Bottom: 'Fondo',
      Buoyancy: 'Galleggiabilità',
      Capacity: 'Capacità',
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
      sup: 'Tavole SUP',
      accessory: 'Accessori',
      service: 'Servizi',
    },
  },
  ru: {
    titles: {
      'oars-pump-set': 'Комплект вёсел и насоса',
      'sup-cheetah-surge': 'Cheetah Surge Edition',
      'sup-dolphin-wave': 'Серия Dolphin Wave',
      'sup-explorer-11': 'SUP Explorer 11',
      'sup-flowing-lotus': 'Серия Flowing Lotus',
      'sup-jungle-mandala': 'Серия Jungle Mandala',
      'sup-leviathan-wake': 'Серия Leviathan Wake (китовое издание)',
      'sup-medusa-glow': 'Серия Medusa Glow (издание медузы)',
      'sup-ocean-pulse': 'Серия Ocean Pulse',
      'sup-ocean-voyager': 'Серия Ocean Voyager',
      'sup-tropical-breeze': 'Серия Tropical Breeze Island Escape',
    },
    summaries: {
      'oars-pump-set':
        'Пара алюминиевых вёсел 1,6 м и мощная ножная помпа 5 л. Подходит для всех надувных досок SUP серии.',
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
      Bottom: 'Дно',
      Buoyancy: 'Плавучесть',
      Capacity: 'Вместимость',
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
      sup: 'SUP-борды',
      accessory: 'Аксессуары',
      service: 'Услуги',
    },
  },
  nl: {
    titles: {
      'oars-pump-set': 'Roeispaan- en pompset',
      'sup-cheetah-surge': 'Cheetah Surge Edition',
      'sup-dolphin-wave': 'Dolphin Wave-serie',
      'sup-explorer-11': 'SUP Explorer 11',
      'sup-flowing-lotus': 'Flowing Lotus-serie',
      'sup-jungle-mandala': 'Jungle Mandala-serie',
      'sup-leviathan-wake': 'Leviathan Wake-serie (wal-editie)',
      'sup-medusa-glow': 'Medusa Glow-serie (kwallen-editie)',
      'sup-ocean-pulse': 'Ocean Pulse-serie',
      'sup-ocean-voyager': 'Ocean Voyager-serie',
      'sup-tropical-breeze': 'Tropical Breeze Island Escape-serie',
    },
    summaries: {
      'oars-pump-set':
        'Een paar aluminium roeispanen van 1,6m en een krachtige 5L voetpomp. Geschikt voor alle opblaasbare boards uit de serie.',
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
      Bottom: 'Bodem',
      Buoyancy: 'Drijfvermogen',
      Capacity: 'Capaciteit',
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
      sup: 'SUP-boards',
      accessory: 'Accessoires',
      service: 'Diensten',
    },
  },
  pl: {
    titles: {
      'oars-pump-set': 'Zestaw wioseł i pompki',
      'sup-cheetah-surge': 'Cheetah Surge Edition',
      'sup-dolphin-wave': 'Seria Dolphin Wave',
      'sup-explorer-11': 'SUP Explorer 11',
      'sup-flowing-lotus': 'Seria Flowing Lotus',
      'sup-jungle-mandala': 'Seria Jungle Mandala',
      'sup-leviathan-wake': 'Seria Leviathan Wake (edycja wielorybia)',
      'sup-medusa-glow': 'Seria Medusa Glow (edycja meduzy)',
      'sup-ocean-pulse': 'Seria Ocean Pulse',
      'sup-ocean-voyager': 'Seria Ocean Voyager',
      'sup-tropical-breeze': 'Seria Tropical Breeze Island Escape',
    },
    summaries: {
      'oars-pump-set':
        'Para aluminiowych wioseł 1,6 m i wydajna pompka nożna 5 l. Pasuje do wszystkich dmuchanych desek serii.',
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
      Bottom: 'Dno',
      Buoyancy: 'Wyporność',
      Capacity: 'Pojemność',
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
      sup: 'Deski SUP',
      accessory: 'Akcesoria',
      service: 'Usługi',
    },
  },
  ar: {
    titles: {
      'oars-pump-set': 'طقم مجاديف ومضخة',
      'sup-cheetah-surge': 'Cheetah Surge Edition',
      'sup-dolphin-wave': 'سلسلة Dolphin Wave',
      'sup-explorer-11': 'SUP Explorer 11',
      'sup-flowing-lotus': 'سلسلة Flowing Lotus',
      'sup-jungle-mandala': 'سلسلة Jungle Mandala',
      'sup-leviathan-wake': 'سلسلة Leviathan Wake (إصدار الحوت)',
      'sup-medusa-glow': 'سلسلة Medusa Glow (إصدار قنديل البحر)',
      'sup-ocean-pulse': 'سلسلة Ocean Pulse',
      'sup-ocean-voyager': 'سلسلة Ocean Voyager',
      'sup-tropical-breeze': 'سلسلة Tropical Breeze Island Escape',
    },
    summaries: {
      'oars-pump-set':
        'زوج من المجاديف الألمنيوم بطول 1.6 م ومضخة قدم قوية بسعة 5 لتر. تناسب جميع الألواح القابلة للنفخ في السلسلة.',
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
      Bottom: 'القاع',
      Buoyancy: 'الطفو',
      Capacity: 'السعة',
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
      sup: 'ألواح SUP',
      accessory: 'الملحقات',
      service: 'الخدمات',
    },
  },
  pt: {
    titles: {
      'oars-pump-set': 'Kit de remos e bomba',
      'sup-cheetah-surge': 'Cheetah Surge Edition',
      'sup-dolphin-wave': 'Série Dolphin Wave',
      'sup-explorer-11': 'SUP Explorer 11',
      'sup-flowing-lotus': 'Série Flowing Lotus',
      'sup-jungle-mandala': 'Série Jungle Mandala',
      'sup-leviathan-wake': 'Série Leviathan Wake (edição baleia)',
      'sup-medusa-glow': 'Série Medusa Glow (edição medusa)',
      'sup-ocean-pulse': 'Série Ocean Pulse',
      'sup-ocean-voyager': 'Série Ocean Voyager',
      'sup-tropical-breeze': 'Série Tropical Breeze Island Escape',
    },
    summaries: {
      'oars-pump-set':
        'Par de remos em alumínio de 1,6m e uma bomba de pé potente de 5L. Compatível com todos os infláveis da série.',
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
      Bottom: 'Fundo',
      Buoyancy: 'Flutuação',
      Capacity: 'Capacidade',
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
      sup: 'Pranchas SUP',
      accessory: 'Acessórios',
      service: 'Serviços',
    },
  },
};

const SKILL_L10N: Record<string, Record<string, string>> = {
  de: { beginner: 'Anfänger', intermediate: 'Fortgeschritten', advanced: 'Experte', professional: 'Profi' },
  es: { beginner: 'Principiante', intermediate: 'Intermedio', advanced: 'Avanzado', professional: 'Profesional' },
  fr: { beginner: 'Débutant', intermediate: 'Intermédiaire', advanced: 'Avancé', professional: 'Professionnel' },
  it: { beginner: 'Principiante', intermediate: 'Intermedio', advanced: 'Avanzato', professional: 'Professionista' },
  nl: { beginner: 'Beginner', intermediate: 'Gemiddeld', advanced: 'Gevorderd', professional: 'Professional' },
  pl: {
    beginner: 'Początkujący',
    intermediate: 'Średniozaawansowany',
    advanced: 'Zaawansowany',
    professional: 'Profesjonalista',
  },
  ar: { beginner: 'مبتدئ', intermediate: 'متوسط', advanced: 'متقدم', professional: 'محترف' },
  pt: { beginner: 'Iniciante', intermediate: 'Intermediário', advanced: 'Avançado', professional: 'Profissional' },
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
