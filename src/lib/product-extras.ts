export interface ProductExtras {
  definition?: string;
  problem?: string;
  howItWorks?: string;
  audience?: string;
  ai_use_cases?: string[];
  ai_comparison?: string;
  ai_faq?: Array<{ q: string; a: string }>;
}

export const PRODUCT_EXTRAS: Record<string, Record<string, ProductExtras>> = {
  de: {
    'life-vest-classic': {
      definition:
        'Eine CE- und ISO-zertifizierte universelle Auftriebshilfe für Freizeitwassersport in allen Gewässerumgebungen.',
      problem:
        'Wassersportler aller Könnensstufen benötigen eine zuverlässige, bequeme Schwimmweste, die internationalen Sicherheitsstandards entspricht, ohne die Bewegungsfreiheit einzuschränken.',
      howItWorks:
        'Die Schwimmweste Classic verwendet mit Schaumstoff gefüllte Auftriebskammern mit verstellbaren Brust- und Seitengurten für einen sicheren Sitz. Sie ist in mehreren Größen erhältlich und enthält eine Trillerpfeife, reflektierende Streifen und einen Rettungsgriff.',
      audience:
        'Freizeitpaddler, Bootsfahrer, Angler und Wassersportanfänger, die eine CE-zertifizierte Auftriebshilfe für Seen, Flüsse und Küstengewässer benötigen.',
      ai_use_cases: [
        'Sicherheit beim Freizeitwassersport',
        'Auftriebshilfe für Training und Aufsicht',
        'Familien-Wasseraktivitäten',
      ],
      ai_comparison:
        'Im Vergleich zu automatischen aufblasbaren Schwimmwesten bietet die Schwimmweste Classic ständigen Auftrieb ohne Auslösung. Sie ist sperriger aber zuverlässiger für Freizeitnutzer, die automatische Mechanismen möglicherweise nicht warten.',
      ai_faq: [
        {
          q: 'Ist diese Schwimmweste für Kinder geeignet?',
          a: 'Ja, Kindergrößen sind erhältlich. CE- und -zertifiziert für die angegebenen Gewichtsbereiche.',
        },
        {
          q: 'Ist Wartung erforderlich?',
          a: 'Minimale Wartung. Nach Gebrauch mit Süßwasser abspülen. Vor jedem Gebrauch Kammern und Gurte überprüfen. Bei Beschädigung ersetzen.',
        },
      ],
    },
    'life-vest-pro': {
      definition:
        'Eine professionelle SOLAS-konforme Schwimmweste mit automatischer Aufblasfunktion für Offshore-, Rettungs- und gewerbliche Schifffahrt.',
      problem:
        'Berufsschifffahrer und Rettungskräfte benötigen eine Schwimmweste, die automatische Aufblasfunktion, hohen Auftrieb und SOLAS-konforme Sichtbarkeit für Offshore-Einsätze bietet.',
      howItWorks:
        'Die Schwimmweste Pro verwendet einen automatischen hydrostatischen Aufblasmechanismus mit einer manuellen Aufblasröhre als Backup. Sie enthält SOLAS-konformes Reflexband, eine Spritzhaube, eine Trillerpfeife, ein wasserdichtes Licht und einen Hebegurthefestigungspunkt.',
      audience:
        'Berufsschifffahrer, Rettungsprofis, Offshore-Arbeiter und erfahrene Bootsfahrer, die SOLAS-konforme automatische Schwimmwesten benötigen.',
      ai_use_cases: [
        'Sicherheit bei Offshore-Schifffahrtseinsätzen',
        'Professionelle Rettung und Notfallreaktion',
        'Kommerzielle maritime Compliance',
      ],
      ai_comparison:
        'Im Vergleich zu Schaumstoffwesten bläst sich die Schwimmweste Pro automatisch auf und ist bei normalem Tragen minimal auftragend. Sie erfordert eine jährliche Wartung des hydrostatischen Mechanismus und einen Batteriewechsel.',
      ai_faq: [
        {
          q: 'Wie funktioniert die automatische Aufblasfunktion?',
          a: 'Ein hydrostatischer Auslöser aktiviert sich beim Eintauchen in Wasser in 0,5-1,0 Metern Tiefe. Eine manuelle Aufblasröhre ist ebenfalls als Backup vorhanden.',
        },
        {
          q: 'Wie oft muss sie gewartet werden?',
          a: 'Eine jährliche Wartung des hydrostatischen Mechanismus wird empfohlen. Die CO2-Patrone sollte gemäß Herstellerplan überprüft und ersetzt werden.',
        },
      ],
    },
    'oars-pump-set': {
      definition:
        'Ein komplettes Zubehörset mit einem Paar 1.6 m langer Aluminiumpaddel mit Kunststoffblättern und einer Hochleistungs-Fußpumpe mit 5 Litern Fördervolumen und Manometer für alle aufblasbaren Wasserfahrzeuge.',
      problem:
        'Besitzer von Schlauchbooten benötigen Ersatz- oder Zusatzpaddel sowie eine Hochleistungspumpe zum Aufpumpen und Antrieb – alles kompatibel mit Standard-Schlauchbooten.',
      howItWorks:
        'Die Paddel besitzen Aluminiumschäfte mit Kunststoffblättern für leichten Antrieb. Die Fußpumpe fördert 5 Liter Luft pro Hub und ist mit einem eingebauten Manometer für präzises Aufpumpen ausgestattet.',
      audience:
        'Besitzer von Schlauchbooten, Kajaks und Dinghys, die Ersatz- oder Austauschpaddel sowie eine leistungsstarke Aufpumppumpe benötigen.',
      ai_use_cases: [
        'Ersatzpaddel für Schlauchboote',
        'Schnelles Aufpumpen mit großem Volumen am Einsatzort',
        'Notantrieb und Reserve-Aufpumpausrüstung',
      ],
      ai_comparison:
        'Im Vergleich zur Dual-Action-Pumpe fördert diese Fußpumpe mehr Volumen pro Hub, erfordert jedoch mehr Kraftaufwand. Die Paddel bieten eine einfache Antriebsmöglichkeit für Schlauchboote, die keinen Außenbordmotor besitzen oder nutzen möchten.',
      ai_faq: [
        {
          q: 'Sind die Paddel mit allen Schlauchbooten kompatibel?',
          a: 'Die Paddel passen in die bei den meisten Schlauchbooten dieser Reihe verbauten Standard-Dollen. Die Länge von 1.6 m eignet sich für Boote bis zu 4 m Länge.',
        },
        {
          q: 'Welchen Druck erreicht die Fußpumpe?',
          a: 'Die Fußpumpe erreicht bis zu 12-15 PSI – ausreichend für die meisten Schlauchboote und Dinghys. Für Hochdruck-SUP-Boards, die 18+ PSI benötigen, kann sie unzureichend sein.',
        },
      ],
    },
    'sup-explorer-11': {
      definition:
        'Ein aufblasbares Allround-SUP-Board (Stand-up-Paddle-Board) mit 11 Fuß Länge, entwickelt für Stabilität, Mobilität und Freizeitnutzung auf Seen, Flüssen und geschützten Küstengewässern.',
      problem:
        'Einsteiger und Freizeitpaddler benötigen ein stabiles, tragbares SUP-Board, das sich leicht aufpumpen lässt, gute Balance bietet und verzeihend beim Lernen ist.',
      howItWorks:
        "Das SUP Explorer 11' nutzt Drop-Stitch-Kerntechnologie für eine Steifigkeit bei 15 PSI und ein 32 Zoll breites Deck für seitliche Stabilität. Zum Lieferumfang gehören eine abnehmbare Mittelfinne, eine Spiralleine und eine Doppelhub-Handpumpe für schnelles Aufpumpen am Einsatzort.",
      audience:
        'Einsteiger, Freizeitnutzer, Familien und Fitnessbegeisterte, die ein tragbares, stabiles SUP-Board für Seen, Flüsse und geschützte Küstengewässer wünschen.',
      ai_use_cases: [
        'SUP-Training und Lernen für Anfänger',
        'Freizeitpaddeln auf Seen und Flüssen',
        'Fitness und Yoga auf dem Wasser',
      ],
      ai_comparison:
        "Im Vergleich zu harten Epoxid-Boards bietet das SUP Explorer 11' überlegene Mobilität und platzsparende Aufbewahrung bei der Steifigkeit einer Drop-Stitch-Konstruktion. Trocken ist es schwerer als ein hartes Board, lässt sich für Reisen aber in einem Rucksack verstauen.",
      ai_faq: [
        {
          q: 'Welcher Druck ist ideal?',
          a: 'Empfohlen werden 12-15 PSI. Das Board erreicht seine beste Performance bei 15 PSI für maximale Steifigkeit.',
        },
        {
          q: 'Ist ein Paddel im Lieferumfang enthalten?',
          a: 'Im Komplettpaket ist ein verstellbares Aluminiumpaddel enthalten.',
        },
      ],
    },
    'sup-cheetah-surge': {
      definition:
        'Ein aufblasbares Allround-SUP-Board mit 11 Fuß Länge und wildem Gepard-Motiv, umgesetzt mit mehrfarbiger EVA-Blocktechnik und UV-Digitaldruck, entwickelt für Freizeitpaddeln auf Seen, Flüssen und geschützten Küstengewässern.',
      problem:
        'Paddler, die ein optisch auffälliges Board wünschen, benötigen hochwertige Motive, die unter Salzwasser- und UV-Einwirkung weder ausbleichen, abblättern noch verkratzen. Herkömmliche Druckverfahren versagen unter diesen Bedingungen.',
      howItWorks:
        'Die Cheetah Surge Edition nutzt Drop-Stitch-PVC-Kerntechnologie für eine Steifigkeit bei 15 PSI und ein 32 Zoll breites Deck. Das Motiv auf der Traktionsauflage entsteht durch mehrfarbige EVA-Blocktechnik – verschiedenfarbige EVA-Platten werden ausgestanzt und nahtlos wie ein Puzzle zusammengesetzt, statt bedruckt zu werden – und garantiert so keinerlei Ausbleichen oder Abblättern.',
      audience:
        'Trendbewusste Paddler, Outdoor-Lifestyle-Enthusiasten, Boutique-Reisende und Social-Media-Content-Creator, die ein optisch auffälliges und langlebiges SUP-Board wünschen.',
      ai_use_cases: [
        'Social-Media-Content auf dem Wasser',
        'Freizeitpaddeln auf Seen und Flüssen',
        'Boutique-Reisen und Abenteuertourismus',
      ],
      ai_comparison:
        'Im Vergleich zu herkömmlichen bedruckten SUP-Boards verwendet die Cheetah Surge Edition ausgestanzte EVA-Blocktechnik, die nie ausbleicht oder abblättert. Das Motiv ist strukturell Teil des EVA-Materials und keine aufgedruckte Farbschicht.',
      ai_faq: [
        {
          q: 'Wie wird das Motiv aufgebracht?',
          a: 'Das Motiv nutzt mehrfarbige EVA-Blocktechnik – verschiedenfarbige EVA-Schaumplatten werden präzise ausgestanzt und nahtlos wie ein Puzzle zusammengesetzt. Auf der Standfläche befindet sich keine aufgedruckte Farbe.',
        },
        {
          q: 'Bleichen die Motive im Salzwasser aus?',
          a: 'Nein. Da die Farben dem EVA-Material innewohnen und keine Farbschicht auf der Oberfläche sind, bleichen die Motive unter Salzwasser-, UV-Einwirkung oder bei Belastung durch Betreten nie aus, blättern nicht ab und verkratzen nicht.',
        },
      ],
    },
    'sup-leviathan-wake': {
      definition:
        'Ein aufblasbares Allround-SUP-Board mit 11 Fuß Länge und atemberaubendem Blauwal-Totem-Design, umgesetzt mit UV-Digitaldruck und mechanisch geprägter Traktionsauflage.',
      problem:
        'Paddler, die künstlerische SUP-Boards suchen, benötigen Motive, die auch bei Hochdruck-Aufpumpen und wiederholtem Zusammenfalten für die Aufbewahrung leuchtend bleiben. Standardfarben reißen und blättern ab.',
      howItWorks:
        'Das Leviathan Wake nutzt einen Drop-Stitch-PVC-Kern bei 15 PSI mit einem 32 Zoll breiten Deck. Das Bugmotiv entsteht per hochpräzisem UV-Digitaldruck, während das Logo auf der Unterseite mit hochelastischem Siebdruck und speziellen dehnbaren PVC-Farben aufgebracht wird. Die Traktionsauflage erhält durch mechanische Heißprägung langlebige Wellenmuster.',
      audience:
        'Ozean- und Meeresliebhaber, künstlerisch interessierte Paddler und alle, die ein optisch unverwechselbares SUP-Board mit hochwertigem, langlebigem Motiv wünschen.',
      ai_use_cases: [
        'Wasserabenteuer mit Meeresmotiv',
        'Freizeitpaddeln auf Seen und an der Küste',
        'Künstlerisches und Lifestyle-SUP-Paddeln',
      ],
      ai_comparison:
        'Im Vergleich zu Standard-SUP-Boards bietet das Leviathan Wake ein totemartiges Wal-Motiv mit zwei auf Langlebigkeit optimierten Drucktechnologien. Die mechanisch geprägte Traktionsauflage hält länger als bedruckte Auflagen.',
      ai_faq: [
        {
          q: 'Ist das Logo auf der Unterseite langlebig?',
          a: 'Ja. Das Logo auf der Unterseite nutzt hochelastischen Siebdruck mit speziellen dehnbaren PVC-Farben, die für 15 PSI Aufpumpdruck und wiederholtes Zusammenfalten ausgelegt sind.',
        },
        {
          q: 'Was macht die Traktionsauflage besonders?',
          a: 'Die Wellenmuster werden mechanisch heißgeprägt in mehrschichtiges Komposit-EVA eingebracht und sorgen so für gleichmäßige Tiefe, exzellente Wasserableitung und dauerhafte Rutschfestigkeit.',
        },
      ],
    },
    'sup-medusa-glow': {
      definition:
        'Ein aufblasbares Allround-SUP-Board mit 11 Fuß Länge und Quallen- und Korallenriff-Motiv, umgesetzt mit mehrfarbiger EVA-Blocktechnik und Anti-Delaminations-Konstruktion.',
      problem:
        'Paddler, die von der Meereswelt inspirierte Kunst lieben, benötigen ein Board mit erstklassigen Motiven, die rauen Meeresumgebungen standhalten, ohne auszubleichen, abzublättern oder sich an Befestigungspunkten zu delaminieren.',
      howItWorks:
        'Das Medusa Glow nutzt einen Drop-Stitch-PVC-Kern bei 15 PSI mit einem 32 Zoll breiten Deck. Das Bugmotiv wird per UV-Digitaldruck aufgebracht, während die EVA-Auflage mit mehrfarbiger Blocktechnik für nie ausbleichende Seesterne und Muscheln sorgt. Die Bereiche der D-Ringe werden maskiert, um eine direkte PVC-auf-PVC-Verbindung zu ermöglichen und Delamination zu verhindern.',
      audience:
        'Paddlerinnen, Lifestyle-Enthusiasten, Boutique-Reisende und alle, die eine wohltuende, ozeaninspirierte Ästhetik auf dem Wasser schätzen.',
      ai_use_cases: [
        'Yoga- und Fitness-SUP-Paddeln',
        'Social-Media-Content-Erstellung',
        'Tropische und küstennahe Paddelabenteuer',
      ],
      ai_comparison:
        'Im Vergleich zu herkömmlichen bedruckten SUP-Boards verwendet das Medusa Glow für die Motive auf der Standfläche EVA-Blocktechnik – die Farben sind struktureller Bestandteil des EVA-Materials und keine aufgedruckte Farbe, weshalb sie nie ausbleichen.',
      ai_faq: [
        {
          q: 'Welches Farbschema wird verwendet?',
          a: 'Erfrischende Minzgrün-Basis mit tiefem Petrol-EVA-Deck, verziert mit ausgestanzten weißen Seestern- und Muschelblöcken und leuchtenden Korallenorange-Akzenten.',
        },
        {
          q: 'Wie ist der Tragegriff befestigt?',
          a: 'Das Neopren-Trageband des mittigen Griffs wird direkt durch die EVA-Auflage auf dem PVC-Rumpfsubstrat verankert, sodass die Hebelast vom starren Rumpf getragen wird.',
        },
      ],
    },
    'sup-ocean-pulse': {
      definition:
        'Ein aufblasbares Allround-SUP-Board mit 11 Fuß Länge und topografischem Wellenmuster, umgesetzt mit UV-Digitaldruck und mechanisch geprägter Traktionsauflage, inklusive farblich abgestimmtem Zubehör.',
      problem:
        'Stilbewusste Paddler wünschen ein komplettes visuelles Erlebnis – nicht nur ein schönes Board, sondern aufeinander abgestimmtes Zubehör, das die Ästhetik von der Aufbewahrung bis ins Wasser bewahrt.',
      howItWorks:
        'Das Ocean Pulse nutzt einen Drop-Stitch-PVC-Kern bei 15 PSI. Die Wellenkonturen werden per hochpräzisem UV-Druck aufgebracht. Die EVA-Auflage erhält durch mechanische Heißprägung Wellentexturen. Sämtliches Zubehör – Rucksack, Pumpe, Leine – wird einheitlich farblich an das Boarddesign angepasst.',
      audience:
        'Paddlerinnen, trendige Lifestyle-Enthusiasten, Boutique-Camper und Paddler, die Wert auf eine aufeinander abgestimmte Optik ihrer gesamten Ausrüstung legen.',
      ai_use_cases: [
        'Instagram- und Social-Media-Paddeln',
        'Boutique-Reisen und Camping',
        'Freizeitpaddeln auf Seen und an der Küste',
      ],
      ai_comparison:
        'Im Vergleich zu Standard-SUP-Boards bietet das Ocean Pulse eine durchgängig abgestimmte visuelle Identität von Board und sämtlichem Zubehör, mit mechanisch geprägter EVA-Auflage für deutlich höhere Langlebigkeit als bedruckte Auflagen.',
      ai_faq: [
        {
          q: 'Welches Zubehör ist farblich abgestimmt?',
          a: 'Der Reiserucksack mit Rädern, die Doppelhub-Hochdruckpumpe, die Sicherheitsleine und die wasserdichten Handybeutel werden alle einheitlich farblich abgestimmt und mit individuellem Branding versehen.',
        },
        {
          q: 'Wie entsteht das Muster der Traktionsauflage?',
          a: 'Die Wellenmuster werden durch hochpräzises mechanisches Heißprägen auf mehrschichtiges Komposit-EVA geformt und sorgen für gleichmäßige Tiefe und exzellente Wasserableitung.',
        },
      ],
    },
    'sup-ocean-voyager': {
      definition:
        'Ein aufblasbares Allround-SUP-Board mit 11 Fuß Länge und geometrischem Meeresschildkröten-Motiv, umgesetzt mit mehrfarbiger EVA-Blocktechnik und UV-Digitaldruck, mit durchgängiger visueller Identität bis ins Zubehör.',
      problem:
        'Ozeanbewusste Paddler wünschen ein Board, das das Meeresleben feiert – mit erstklassigen Motiven, die über Jahre hinweg leuchtend bleiben, ohne durch Salzwassereinwirkung auszubleichen oder abzublättern.',
      howItWorks:
        'Das Ocean Voyager nutzt einen Drop-Stitch-PVC-Kern bei 15 PSI mit einem 32 Zoll breiten Deck. Die geometrische Meeresschildkröten-Illustration am Bug entsteht per UV-Digitaldruck, während die EVA-Auflage für Schildkrötensilhouette und Korallenformen mehrfarbige Blocktechnik verwendet. Sämtliches Zubehör ist farblich abgestimmt.',
      audience:
        'Ozeanliebhaber, Meeresschildkröten-Fans, trendbewusste Paddler und Boutique-Reisende, die ein erstklassiges, abgestimmtes Lifestyle-SUP-Paket wünschen.',
      ai_use_cases: [
        'SUP-Paddeln mit Meeresumweltschutz-Motiv',
        'Social-Media-Content-Erstellung',
        'Langstrecken-Touren und Entdeckungen',
      ],
      ai_comparison:
        'Im Vergleich zu herkömmlichen bedruckten SUP-Boards verwendet das Ocean Voyager mehrfarbige EVA-Blocktechnik, die nie verkratzt, abblättert oder ausbleicht. Die Präzision der Stanzung garantiert unter den Füßen perfekt ebene Flächen.',
      ai_faq: [
        {
          q: 'Was ist die Inspiration für den Namen?',
          a: 'Die Meeresschildkröte ist der ultimative Ozeanwanderer der Natur und durchquert mit müheloser Anmut tausende Kilometer. Ocean Voyager verkörpert den Geist von Langstrecken-Entdeckungen und Harmonie mit dem Meeresleben.',
        },
        {
          q: 'Bleichen die Motive aus?',
          a: 'Nein. Die Motive der EVA-Auflage nutzen mehrfarbige Blocktechnik – die Farben sind dem EVA-Material innewohnend, keine aufgedruckte Farbe. Die Motive verkratzen, blättern oder bleichen selbst bei starker Nutzung nie aus.',
        },
      ],
    },
    'sup-dolphin-wave': {
      definition:
        'Ein aufblasbares Allround-SUP-Board mit 11 Fuß Länge und Delfin-Meereslandschaftsmotiv, umgesetzt mit CNC-geschnittener EVA-Farbblock-Spleißung und durchgehend siebbedruckten Wellen an den Seiten.',
      problem:
        'Kunstbewusste Paddler benötigen SUP-Motive, die Hochdruck-Aufpumpen (15 PSI) und enges Zusammenrollen ohne Risse, Knicke oder Farbverlauf überstehen.',
      howItWorks:
        'Das Dolphin Wave nutzt einen Drop-Stitch-PVC-Kern bei 15 PSI. In der Standzone kommen CNC-puzzle-geschnittene EVA-Farbblöcke zum Einsatz, deren Farben dem Material innewohnen. Das Seitenband verlängert die Wellenmotive rund um die Bordseiten per durchgehendem Siebdruck. Die UV-Farben haben eine Dehnbarkeit von 150 % und sind damit rissfest.',
      audience:
        'Meereswildtiere-Enthusiasten, Paddler, die detailreiche Motive schätzen, und alle, die ein Board mit durchgängiger 360-Grad-Optik wünschen.',
      ai_use_cases: [
        'SUP-Paddeln mit Meereswildtier-Motiv',
        'Freizeitpaddeln auf Seen und an der Küste',
        'Social-Media- und Lifestyle-Content',
      ],
      ai_comparison:
        'Im Vergleich zu herkömmlichen bedruckten SUP-Boards verwendet das Dolphin Wave in der Standzone physische EVA-Farbblock-Spleißung und an den Seiten siebbedruckte Wellen für durchgängige 360-Grad-Optik. Die um 150 % dehnbare UV-Farbe verhindert Risse.',
      ai_faq: [
        {
          q: 'Welche Farben werden verwendet?',
          a: 'Medieval Blue für tiefe Wellen, Serenity für ruhige Töne, mit weißen Schaum-Details. Die Farbpalette folgt den PANTONE-TPG-Standards für eine präzise Fertigung.',
        },
        {
          q: 'Wie werden die Seitenwellen aufgebracht?',
          a: 'Das Seitenband nutzt ein durchgehendes Siebdruckverfahren auf festem, doppellagigem Minzgrün-PVC und verlängert das Wellenmotiv kostengünstig rund um die Bordseiten.',
        },
      ],
    },
    'sup-flowing-lotus': {
      definition:
        'Ein aufblasbares Allround-SUP-Board mit 11 Fuß Länge und der Ästhetik traditioneller östlicher Pinselkunst, umgesetzt mit doppellagig lasergeätzter EVA-Traktionsauflage und UV-digitalgedrucktem Farbverlaufsmotiv.',
      problem:
        'Paddler, die künstlerischen und kulturellen Ausdruck auf dem Wasser suchen, benötigen erstklassige Motive, die starker Beanspruchung durch Betreten und Salzwasser ohne Abnutzung oder Ausbleichen standhalten.',
      howItWorks:
        'Das Flowing Lotus nutzt einen Drop-Stitch-PVC-Kern bei 15 PSI. Die EVA-Traktionsauflage verwendet doppellagige Komposit-Lasergravur – der Laser ätzt die obere Farbschicht weg, um die darunterliegende Farbe freizulegen, und erzeugt so dauerhafte Muster. Der Farbverlauf am Bug nutzt flexible UV-Farben mit hoher Dehnbarkeit für Rissfestigkeit.',
      audience:
        'Yoga-Praktizierende, Meditationsbegeisterte, Liebhaber östlicher Kunst und Paddler, die kulturelle Ästhetik und erstklassige Handwerkskunst schätzen.',
      ai_use_cases: [
        'Yoga- und Meditations-SUP-Paddeln',
        'Kulturelle und künstlerische Wassererlebnisse',
        'Freizeitpaddeln auf Seen und Flüssen',
      ],
      ai_comparison:
        'Im Vergleich zu herkömmlichen bedruckten SUP-Boards nutzt das Flowing Lotus eine Lasergravur-Technologie, die Muster dauerhaft in das EVA-Material ätzt – das Motiv kann sich nicht abnutzen oder ausbleichen, weil es struktureller Bestandteil der Auflage ist.',
      ai_faq: [
        {
          q: 'Wie funktioniert die Lasergravur?',
          a: 'Eine doppellagige Komposit-EVA-Auflage (Petrol-Basis mit Minzgrün-Oberfläche) wird lasergraviert – der Laser entfernt die obere Schicht, um die darunterliegende Farbe freizulegen, und erzeugt dauerhafte Muster mit 3D-Struktur.',
        },
        {
          q: 'Warum eignet sich dieses Board gut für Yoga?',
          a: 'Die lasergravierten Muster bieten exzellente Rutschfestigkeit, ohne aufrauend zu wirken, während das Farbverlaufsdesign eine beruhigende Ästhetik schafft, die perfekt für Meditation und Yoga auf dem Wasser ist.',
        },
      ],
    },
    'sup-jungle-mandala': {
      definition:
        'Ein aufblasbares Allround-SUP-Board mit 11 Fuß Länge und tropischem Mandala-Motiv, umgesetzt mit doppellagig lasergeätzter EVA, verzerrungsfreier Geometrie und durchgehend siebbedruckten Seiten.',
      problem:
        'Paddler wünschen geometrisch komplexe Motive, die auch bei Hochdruck-Aufpumpen des Boards perfekt symmetrisch und unverzerrt bleiben, ohne dass sich Muster bei der Fertigung verschieben.',
      howItWorks:
        'Das Jungle Mandala nutzt einen Drop-Stitch-PVC-Kern bei 15 PSI. Die Mandala-Geometrie wird strukturell linienverstärkt, um Vertiefungen der PVC-Oberfläche auszugleichen. Die EVA-Auflage verwendet doppellagige Lasergravur. Die Seitenmotive nutzen ein verstreutes, unstarres Muster, das Dehnungstoleranzen bei der manuellen Montage ausgleicht.',
      audience:
        'Spirituelle und künstlerische Paddler, tropische Abenteurer, Yoga-Praktizierende und alle, die sich von geometrischer und Mandala-Ästhetik angezogen fühlen.',
      ai_use_cases: [
        'Spirituelles und meditatives SUP-Paddeln',
        'Tropische Küstenabenteuer',
        'Social-Media-Content-Erstellung',
      ],
      ai_comparison:
        'Im Vergleich zu Standard-SUP-Boards bietet das Jungle Mandala eine verzerrungsfreie Mandala-Geometrie, die bei 15 PSI Aufpumpdruck perfekt symmetrisch bleibt, kombiniert mit kostengünstig siebbedruckten Seitenmotiven.',
      ai_faq: [
        {
          q: 'Verzerrt sich das Mandala-Muster beim Aufpumpen?',
          a: 'Nein. Die geometrischen Linien wurden gezielt strukturell verstärkt, um Vertiefungen der PVC-Oberfläche auszugleichen, und bleiben bei vollem Aufpumpdruck perfekt symmetrisch.',
        },
        {
          q: 'Wie wird das Seitenmotiv aufgebracht?',
          a: 'Die Kolibri- und Schmetterlingsmotive an den Seiten nutzen ein durchgehendes Siebdruckverfahren mit einem verstreuten, unstarren Muster, das Dehnungstoleranzen bei der manuellen Montage ausgleicht.',
        },
      ],
    },
    'sup-tropical-breeze': {
      definition:
        'Ein aufblasbares Allround-SUP-Board mit 11 Fuß Länge, das mit einer Mikro-Landschaftsillustration und abstrakter EVA-Farbblock-Optik nahtlos eine Inselurlaubsszene in das Boarddesign integriert.',
      problem:
        'Paddler wünschen ein Board, das ein komplettes, immersives Erlebnis schafft – Wassersportausrüstung wird zur Leinwand, die sie in ein tropisches Paradies entführt.',
      howItWorks:
        'Das Tropical Breeze nutzt einen Drop-Stitch-PVC-Kern bei 15 PSI mit einem 32 Zoll breiten Deck. Am Bug befindet sich eine digital gedruckte Mikro-Landschaftsillustration. Die EVA-Standzone verwendet ausgestanzte abstrakte Farbblöcke, die die visuelle Erzählung von Wellen, Strand und Palmen über das gesamte Board fortführen.',
      audience:
        'Urlaubsreisende, tropische Lifestyle-Enthusiasten, Social-Media-Content-Creator und Paddler, die ein Board wünschen, das den Geist der Inselflucht einfängt.',
      ai_use_cases: [
        'SUP-Paddeln im Tropenurlaub',
        'Social-Media-Content-Erstellung',
        'Freizeitausflüge auf Seen und an der Küste',
      ],
      ai_comparison:
        'Im Vergleich zu Standard-SUP-Boards integriert das Tropical Breeze einzigartig eine komplette Landschaftsszene über die gesamte Boardoberfläche, mit perfekter Arbeitsteilung zwischen Digitaldruck für Details und EVA-Flickwerk für Langlebigkeit.',
      ai_faq: [
        {
          q: 'Welche Szene ist auf dem Board abgebildet?',
          a: 'Ein traumhaftes Inselparadies mit Sonnenschein, Kokoshainen, Strand und Palmen – eine Mikro-Landschaftsillustration am Bug, die zum Heck hin in abstrakte EVA-Farbblöcke übergeht.',
        },
        {
          q: 'Wie verläuft der Übergang des Motivs vom Bug zum Heck?',
          a: 'Am Bug wird die Landschaftsillustration im detailreichen Digitaldruck umgesetzt, während das Heck ausgestanzte EVA-Farbblöcke nutzt, die Wellen, Sand und Palmen abstrahieren – für eine nahtlose visuelle Reise.',
        },
      ],
    },
  },
  es: {
    'life-vest-classic': {
      definition:
        'Una ayuda de flotabilidad universal certificada CE e ISO para deportes acuáticos recreativos en todo tipo de aguas.',
      problem:
        'Los participantes de deportes acuáticos de todos los niveles necesitan un chaleco salvavidas fiable y cómodo que cumpla con las normas internacionales de seguridad sin restringir el movimiento.',
      howItWorks:
        'El chaleco salvavidas Classic utiliza cámaras de flotabilidad rellenas de espuma con correas ajustables en pecho y costados para un ajuste seguro. Está disponible en múltiples tallas e incluye silbato, bandas reflectantes y asa de rescate.',
      audience:
        'Remeros recreativos, navegantes, pescadores y principiantes en deportes acuáticos que necesitan flotación certificada CE para lagos, ríos y aguas costeras.',
      ai_use_cases: [
        'Seguridad en deportes acuáticos recreativos',
        'Flotación para entrenamiento y supervisión',
        'Actividades acuáticas familiares',
      ],
      ai_comparison:
        'En comparación con los chalecos salvavidas inflables automáticos, el Classic proporciona flotación constante sin necesidad de activación. Es más voluminoso pero más fiable para usuarios recreativos que pueden no mantener los mecanismos automáticos.',
      ai_faq: [
        {
          q: '¿Este chaleco es adecuado para niños?',
          a: 'Sí, hay tallas infantiles disponibles. Certificado CE 12402 para los rangos de peso especificados.',
        },
        {
          q: '¿Requiere mantenimiento?',
          a: 'Mantenimiento mínimo. Enjuague con agua dulce después de su uso. Inspeccione las cámaras y correas antes de cada uso. Reemplácelo si está dañado.',
        },
      ],
    },
    'life-vest-pro': {
      definition:
        'Un chaleco salvavidas profesional compatible con SOLAS con inflado automático para uso en alta mar, rescate y marina comercial.',
      problem:
        'Los marinos profesionales y el personal de rescate necesitan un chaleco que proporcione inflado automático, alta flotabilidad y visibilidad conforme a SOLAS para operaciones en alta mar.',
      howItWorks:
        'El Life Vest Pro utiliza un mecanismo de inflado hidrostático automático con un tubo de inflado manual de respaldo. Incluye cinta reflectante de grado SOLAS, capucha antirrociones, silbato, luz estanca y punto de anclaje para arnés de elevación.',
      audience:
        'Marinos comerciales, profesionales de rescate, trabajadores en alta mar y navegantes avanzados que necesitan chalecos automáticos compatibles con SOLAS.',
      ai_use_cases: [
        'Seguridad en operaciones marítimas en alta mar',
        'Respuesta profesional a emergencias y rescate',
        'Cumplimiento normativo marítimo comercial',
      ],
      ai_comparison:
        'En comparación con los chalecos rellenos de espuma, el Life Vest Pro se infla automáticamente para un volumen mínimo durante el uso normal. Requiere un servicio anual del mecanismo hidrostático y reemplazo de la batería.',
      ai_faq: [
        {
          q: '¿Cómo funciona el inflado automático?',
          a: 'Un disparador hidrostático se activa al sumergirse en agua a 0.5-1.0 metros de profundidad. También se incluye un tubo de inflado manual de respaldo.',
        },
        {
          q: '¿Cada cuánto necesita mantenimiento?',
          a: 'Se recomienda un servicio anual del mecanismo hidrostático. El cilindro de CO2 debe revisarse y reemplazarse según el programa del fabricante.',
        },
      ],
    },
    'oars-pump-set': {
      definition:
        'Un set completo de accesorios que incluye un par de remos de aluminio de 1.6 m con palas de plástico y una bomba de pie de alto caudal de 5 litros con manómetro para todas las embarcaciones inflables.',
      problem:
        'Los propietarios de embarcaciones inflables necesitan remos de repuesto o de recambio y una bomba de alto volumen para el inflado y la propulsión, todo ello compatible con las embarcaciones inflables estándar.',
      howItWorks:
        'Los remos cuentan con ejes de aluminio y palas de plástico para una propulsión ligera. La bomba de pie suministra 5 litros de aire por embolada e incluye un manómetro integrado para un inflado preciso.',
      audience:
        'Propietarios de embarcaciones inflables, kayaks y botes neumáticos que necesitan remos de repuesto o de recambio y una bomba de inflado de alto caudal.',
      ai_use_cases: [
        'Remos de repuesto para embarcaciones inflables',
        'Inflado de alto volumen en el lugar de botadura',
        'Equipo de respaldo para propulsión e inflado',
      ],
      ai_comparison:
        'En comparación con la bomba de doble acción, esta bomba de pie ofrece un mayor volumen por embolada, pero requiere más esfuerzo. Los remos ofrecen una opción básica de propulsión para embarcaciones inflables que no disponen de motor fueraborda o prefieren no usarlo.',
      ai_faq: [
        {
          q: '¿Los remos son compatibles con todas las embarcaciones inflables?',
          a: 'Los remos encajan en los toletes estándar de la mayoría de las embarcaciones inflables de la gama. La longitud de 1.6 m es adecuada para embarcaciones de hasta 4 m de eslora.',
        },
        {
          q: '¿Qué presión puede alcanzar la bomba de pie?',
          a: 'La bomba de pie puede alcanzar hasta 12-15 PSI, adecuada para la mayoría de las embarcaciones inflables y botes neumáticos. Puede no ser suficiente para tablas de SUP de alta presión que requieren 18+ PSI.',
        },
      ],
    },
    'sup-explorer-11': {
      definition:
        'Una tabla de paddle surf inflable todoterreno de 11 pies diseñada para ofrecer estabilidad, portabilidad y uso recreativo en lagos, ríos y aguas costeras protegidas.',
      problem:
        'Los remeros principiantes y recreativos necesitan una tabla de SUP estable y portátil que sea fácil de inflar, fácil de equilibrar e indulgente para aprender.',
      howItWorks:
        "La SUP Explorer 11' utiliza tecnología de núcleo drop-stitch para lograr una rigidez de 15 PSI con una cubierta ancha de 32 pulgadas para una estabilidad lateral. La tabla incluye una aleta central extraíble, un leash enrollado y una bomba manual de doble acción para un inflado rápido en el lugar de botadura.",
      audience:
        'Remeros principiantes, usuarios recreativos, familias y entusiastas del fitness que quieren una tabla de SUP portátil y estable para lagos, ríos y aguas costeras protegidas.',
      ai_use_cases: [
        'Entrenamiento y aprendizaje de SUP para principiantes',
        'Remo recreativo en lagos y ríos',
        'Fitness y yoga en el agua',
      ],
      ai_comparison:
        "En comparación con las tablas rígidas de epoxi, la SUP Explorer 11' ofrece una portabilidad superior y comodidad de almacenamiento gracias a la rigidez de la construcción drop-stitch. Es más pesada que una tabla rígida en seco, pero se guarda en una mochila para viajar.",
      ai_faq: [
        {
          q: '¿Cuál es la presión ideal?',
          a: 'Se recomienda 12-15 PSI. La tabla rinde al máximo a 15 PSI para una rigidez óptima.',
        },
        { q: '¿Incluye un remo?', a: 'En el paquete completo se incluye un remo de aluminio ajustable.' },
      ],
    },
    'sup-cheetah-surge': {
      definition:
        'Una tabla de SUP inflable todoterreno de 11 pies con arte temático de guepardo salvaje que combina piezas de bloques de EVA multicolor y estampado digital UV, diseñada para el remo recreativo en lagos, ríos y aguas costeras protegidas.',
      problem:
        'Los remeros que quieren una tabla que destaque visualmente necesitan un arte premium que no se desvanezca, no se despegue ni se raye con la exposición al agua salada y a los rayos UV. Los métodos de estampado tradicionales fallan en estas condiciones.',
      howItWorks:
        'La Cheetah Surge Edition utiliza tecnología de núcleo de PVC drop-stitch que alcanza una rigidez de 15 PSI con una cubierta de 32 pulgadas de ancho. El arte de la plataforma de tracción se crea mediante piezas de bloques de EVA multicolor: láminas de EVA de distintos colores se troquelan y se ensamblan como un rompecabezas sin costuras, en lugar de imprimirse, lo que garantiza que no se desvanezca ni se despegue.',
      audience:
        'Remeros a la moda, entusiastas del estilo de vida al aire libre, viajeros boutique y creadores de contenido para redes sociales que quieren una tabla de SUP visualmente llamativa y duradera.',
      ai_use_cases: [
        'Creación de contenido para redes sociales en el agua',
        'Remo recreativo en lagos y ríos',
        'Viajes boutique y turismo de aventura',
      ],
      ai_comparison:
        'En comparación con las tablas de SUP estándar impresas, la Cheetah Surge Edition utiliza piezas de bloques de EVA troqueladas que nunca se desvanecen ni se despegan. El arte forma parte estructural del material de EVA y no es una capa de tinta superficial.',
      ai_faq: [
        {
          q: '¿Cómo se aplica el arte?',
          a: 'El arte utiliza piezas de bloques de EVA multicolor: láminas de espuma de EVA de distintos colores se troquelan con precisión y se ensamblan sin costuras como un rompecabezas. No hay tinta impresa en la superficie de apoyo.',
        },
        {
          q: '¿El arte se desvanece en agua salada?',
          a: 'No. Como los colores son inherentes al material de EVA y no una capa de tinta superficial, el arte nunca se desvanecerá, despegará ni rayará bajo la exposición al agua salada, a los rayos UV o al tránsito de pies.',
        },
      ],
    },
    'sup-leviathan-wake': {
      definition:
        'Una tabla de SUP inflable todoterreno de 11 pies con un impresionante diseño de tótem de ballena azul que utiliza estampado digital UV y una plataforma de tracción con relieve mecánico.',
      problem:
        'Los remeros que buscan tablas de SUP artísticas necesitan un arte que permanezca vibrante ante el inflado a alta presión y los plegados repetidos para su almacenamiento. Las tintas estándar se agrietan y se despegan.',
      howItWorks:
        'La Leviathan Wake utiliza un núcleo de PVC drop-stitch a 15 PSI con una cubierta de 32 pulgadas. El arte de la proa emplea estampado digital UV de alta precisión, mientras que el logo de la base utiliza serigrafía de alta elasticidad con tintas de PVC estirables especializadas. La plataforma de tracción usa termorrelieve mecánico para lograr patrones de olas duraderos.',
      audience:
        'Entusiastas del océano y de la vida marina, remeros con sensibilidad artística y quienes quieren una tabla de SUP visualmente distintiva con un arte duradero de alta calidad.',
      ai_use_cases: [
        'Aventuras acuáticas temáticas de vida marina',
        'Remo recreativo en lagos y costas',
        'Paddleboard artístico y de estilo de vida',
      ],
      ai_comparison:
        'En comparación con las tablas de SUP estándar, la Leviathan Wake presenta un arte de ballena totémico con doble tecnología de estampado optimizada para la durabilidad. La plataforma de tracción con relieve mecánico ofrece una mayor vida útil que las plataformas impresas.',
      ai_faq: [
        {
          q: '¿El logo de la base es duradero?',
          a: 'Sí. El logo de la base utiliza serigrafía de alta elasticidad con tintas de PVC estirables especializadas, diseñadas para un inflado de 15 PSI y plegados repetidos.',
        },
        {
          q: '¿Qué hace especial a la plataforma de tracción?',
          a: 'Los patrones de olas se graban con termorrelieve mecánico sobre EVA compuesto de doble capa, lo que garantiza una profundidad uniforme, un excelente drenaje del agua y un agarre antideslizante de larga duración.',
        },
      ],
    },
    'sup-medusa-glow': {
      definition:
        'Una tabla de SUP inflable todoterreno de 11 pies con arte temático de medusas y arrecifes de coral que utiliza piezas de bloques de EVA multicolor e ingeniería anti-delaminación.',
      problem:
        'Los remeros amantes del arte inspirado en el mar necesitan una tabla con gráficos premium que resistan los entornos marinos adversos sin desvanecerse, despegarse ni delaminarse en los puntos de fijación.',
      howItWorks:
        'La Medusa Glow utiliza un núcleo de PVC drop-stitch a 15 PSI con una cubierta de 32 pulgadas. El arte de la proa se imprime digitalmente con UV, mientras que la plataforma de EVA utiliza piezas de bloques multicolor para estrellas de mar y conchas que no se desvanecen. Las zonas de las anillas en D se enmascaran para lograr una unión directa de PVC con PVC que evita la delaminación.',
      audience:
        'Remeras, entusiastas del estilo de vida, viajeros boutique y cualquier persona que quiera una estética curativa inspirada en el océano sobre el agua.',
      ai_use_cases: [
        'Paddleboard de yoga y fitness',
        'Creación de contenido para redes sociales',
        'Aventuras de remo tropicales y costeras',
      ],
      ai_comparison:
        'En comparación con las tablas de SUP estándar impresas, la Medusa Glow utiliza piezas de bloques de EVA para los gráficos de la superficie de apoyo: los colores son estructurales al material de EVA y no tinta impresa, por lo que nunca se desvanecen.',
      ai_faq: [
        {
          q: '¿Cuál es la combinación de colores?',
          a: 'Una base verde menta refrescante con una plataforma de EVA verde azulado profundo, con bloques troquelados blancos de estrellas de mar y conchas y vibrantes acentos naranja coral.',
        },
        {
          q: '¿Cómo se fija el asa?',
          a: 'La cinta del asa central de neopreno se ancla directamente a través de la plataforma de EVA hasta el sustrato de PVC del casco, de modo que las cargas de elevación las soporta el casco rígido.',
        },
      ],
    },
    'sup-ocean-pulse': {
      definition:
        'Una tabla de SUP inflable todoterreno de 11 pies con arte de patrones de olas topográficos que utiliza estampado digital UV y una plataforma de tracción con relieve mecánico, junto con accesorios coordinados en color.',
      problem:
        'Los remeros conscientes del estilo quieren una experiencia visual completa: no solo una tabla hermosa, sino accesorios coordinados que mantengan la estética desde el almacenamiento hasta el agua.',
      howItWorks:
        'La Ocean Pulse utiliza un núcleo de PVC drop-stitch a 15 PSI. Los contornos de las olas se aplican mediante estampado UV de alta precisión. La plataforma de EVA usa termorrelieve mecánico para las texturas de olas. Todos los accesorios (mochila, bomba, leash) se someten a una personalización de color unificada que combina con el diseño de la tabla.',
      audience:
        'Remeras, entusiastas del estilo de vida moderno, campistas boutique y remeros que valoran una estética coordinada en todo su equipo.',
      ai_use_cases: [
        'Paddleboard para Instagram y redes sociales',
        'Viajes boutique y campamentos',
        'Remo recreativo en lagos y costas',
      ],
      ai_comparison:
        'En comparación con las tablas de SUP estándar, la Ocean Pulse ofrece una identidad visual coordinada completa en la tabla y en todos los accesorios, con EVA termorrelieve para una durabilidad superior a la de las plataformas de tracción impresas.',
      ai_faq: [
        {
          q: '¿Qué accesorios están coordinados en color?',
          a: 'La mochila de viaje con ruedas, la bomba de alta presión de doble acción, el leash de seguridad y las bolsas impermeables para el teléfono se someten a una personalización unificada de color y de marca.',
        },
        {
          q: '¿Cómo se fabrica el patrón de la plataforma de tracción?',
          a: 'Los patrones de olas se forman mediante termorrelieve mecánico de alta precisión sobre EVA compuesto de doble capa, lo que garantiza una profundidad uniforme y un excelente drenaje del agua.',
        },
      ],
    },
    'sup-ocean-voyager': {
      definition:
        'Una tabla de SUP inflable todoterreno de 11 pies con arte geométrico de tortuga marina que combina piezas de bloques de EVA multicolor y estampado digital UV, con una identidad visual integral en todos los accesorios.',
      problem:
        'Los remeros concienciados con el océano quieren una tabla que celebre la vida marina con un arte premium que se mantenga vibrante durante años de uso, sin desvanecerse ni despegarse por la exposición al agua salada.',
      howItWorks:
        'La Ocean Voyager utiliza un núcleo de PVC drop-stitch a 15 PSI con una cubierta de 32 pulgadas. La ilustración geométrica de la tortuga marina en la proa usa estampado digital UV, mientras que la plataforma de EVA utiliza piezas de bloques multicolor para la silueta de la tortuga y las formas de coral. Todos los accesorios están coordinados en color.',
      audience:
        'Amantes del océano, entusiastas de las tortugas marinas, remeros a la moda y viajeros boutique que quieren un paquete de SUP premium y coordinado para su estilo de vida.',
      ai_use_cases: [
        'Paddleboard temático de conservación marina',
        'Creación de contenido para redes sociales',
        'Tours de larga distancia y exploración',
      ],
      ai_comparison:
        'En comparación con las tablas de SUP estándar impresas, la Ocean Voyager utiliza piezas de bloques de EVA multicolor que nunca se rayarán, despegarán ni desvanecerán. La precisión del troquelado garantiza superficies perfectamente al ras bajo los pies.',
      ai_faq: [
        {
          q: '¿Cuál es la inspiración del nombre?',
          a: 'La tortuga marina es la gran vagabunda del océano: recorre miles de millas con una gracia sin esfuerzo. Ocean Voyager encapsula el espíritu de la exploración de larga distancia y la armonía con la vida marina.',
        },
        {
          q: '¿El arte se desvanece?',
          a: 'No. Los gráficos de la plataforma de EVA utilizan piezas de bloques multicolor: los colores son inherentes al material de EVA y no tinta impresa. Los gráficos nunca se rayarán, despegarán ni desvanecerán, ni siquiera con un uso intensivo.',
        },
      ],
    },
    'sup-dolphin-wave': {
      definition:
        'Una tabla de SUP inflable todoterreno de 11 pies con arte de paisaje marino con delfines que combina bloques de color de EVA cortados por CNC y olas continuas serigrafiadas en el canto.',
      problem:
        'Los remeros amantes del arte necesitan un arte de SUP que sobreviva al inflado a alta presión (15 PSI) y al almacenamiento enrollado sin agrietarse, arrugarse ni sangrar el color.',
      howItWorks:
        'La Dolphin Wave utiliza un núcleo de PVC drop-stitch a 15 PSI. La zona de apoyo usa bloques de color de EVA cortados por CNC tipo rompecabezas, donde los colores son inherentes al material. La banda del canto emplea serigrafía continua para extender los motivos de olas alrededor de los laterales. Las tintas UV tienen un 150% de elongación para resistir el agrietamiento.',
      audience:
        'Entusiastas de la vida silvestre marina, remeros que aprecian el arte detallado y quienes quieren una tabla con continuidad visual de 360 grados.',
      ai_use_cases: [
        'Paddleboard temático de vida silvestre marina',
        'Remo recreativo en lagos y costas',
        'Contenido para redes sociales y estilo de vida',
      ],
      ai_comparison:
        'En comparación con las tablas de SUP estándar impresas, la Dolphin Wave utiliza empalme físico de bloques de color de EVA en la zona de apoyo y olas serigrafiadas en el canto para lograr una continuidad visual de 360 grados. La tinta UV flexible con 150% de elongación evita el agrietamiento.',
      ai_faq: [
        {
          q: '¿Qué colores se utilizan?',
          a: 'Azul medieval para las olas profundas y Serenity para los tonos tranquilos, con detalles de espuma blanca. La paleta de colores sigue los estándares PANTONE TPG para una fabricación precisa.',
        },
        {
          q: '¿Cómo se aplican las olas del canto?',
          a: 'La banda del canto utiliza un proceso de serigrafía continua sobre PVC de doble capa verde menta sólido, extendiendo el motivo de olas por los laterales de la tabla de forma rentable.',
        },
      ],
    },
    'sup-flowing-lotus': {
      definition:
        'Una tabla de SUP inflable todoterreno de 11 pies con estética tradicional de pinceladas orientales que combina una plataforma de tracción de EVA grabada con láser de doble capa y arte de degradado impreso digitalmente con UV.',
      problem:
        'Los remeros que buscan expresión artística y cultural en el agua necesitan un arte premium que resista el tránsito intenso y el agua salada sin desgastarse ni desvanecerse.',
      howItWorks:
        'La Flowing Lotus utiliza un núcleo de PVC drop-stitch a 15 PSI. La plataforma de tracción de EVA emplea grabado láser compuesto de doble capa: el láser elimina la capa superior de color para revelar el color inferior, creando patrones permanentes. El degradado de la proa utiliza tintas UV flexibles de alta elongación para resistir el agrietamiento.',
      audience:
        'Practicantes de yoga, entusiastas de la meditación, amantes del arte oriental y remeros que aprecian la estética cultural y la artesanía premium.',
      ai_use_cases: [
        'Paddleboard de yoga y meditación',
        'Experiencias acuáticas culturales y artísticas',
        'Remo recreativo en lagos y ríos',
      ],
      ai_comparison:
        'En comparación con las tablas de SUP estándar impresas, la Flowing Lotus utiliza tecnología de grabado láser que graba los patrones de forma permanente en el material de EVA: el arte no puede desgastarse ni desvanecerse porque forma parte estructural de la plataforma.',
      ai_faq: [
        {
          q: '¿Cómo funciona el grabado láser?',
          a: 'Una plataforma de EVA compuesto de doble capa (base verde azulada con superficie verde menta) se graba con láser: el láser elimina la capa superior para revelar el color inferior, creando patrones 3D texturizados permanentes.',
        },
        {
          q: '¿Qué hace que esta tabla sea buena para el yoga?',
          a: 'Los patrones grabados con láser ofrecen una excelente resistencia al deslizamiento sin ser abrasivos, mientras que el diseño de degradado crea una estética relajante perfecta para la meditación y el yoga en el agua.',
        },
      ],
    },
    'sup-jungle-mandala': {
      definition:
        'Una tabla de SUP inflable todoterreno de 11 pies con arte de mandala tropical que utiliza EVA grabado con láser de doble capa, geometría anti-deformación y cantos continuos serigrafiados.',
      problem:
        'Los remeros quieren un arte geométricamente complejo que permanezca perfectamente simétrico y sin deformaciones incluso cuando la tabla se infla a alta presión, sin desalineaciones del patrón durante la fabricación.',
      howItWorks:
        'La Jungle Mandala utiliza un núcleo de PVC drop-stitch a 15 PSI. La geometría del mandala se somete a un engrosamiento estructural de líneas para contrarrestar las hendiduras de la superficie del PVC. La plataforma de EVA usa grabado láser de doble capa. Los motivos del canto emplean un patrón disperso no rígido que se adapta a las tolerancias de estiramiento del ensamblaje manual.',
      audience:
        'Remeros espirituales y artísticos, aventureros tropicales, practicantes de yoga y quienes se sienten atraídos por la estética geométrica y de los mandalas.',
      ai_use_cases: [
        'Paddleboard espiritual y meditativo',
        'Aventuras costeras tropicales',
        'Creación de contenido para redes sociales',
      ],
      ai_comparison:
        'En comparación con las tablas de SUP estándar, la Jungle Mandala presenta una geometría de mandala anti-deformación diseñada para permanecer perfectamente simétrica a 15 PSI de inflado, con motivos de canto serigrafiados de bajo costo.',
      ai_faq: [
        {
          q: '¿El patrón de mandala se deforma al inflarse?',
          a: 'No. Las líneas geométricas han sido sometidas a un engrosamiento estructural específicamente para contrarrestar las hendiduras de la superficie del PVC y permanecer perfectamente simétricas a plena presión de inflado.',
        },
        {
          q: '¿Cómo se aplica el arte del canto?',
          a: 'Los motivos de colibríes y mariposas en los cantos se aplican con un proceso de serigrafía continua y un patrón disperso no rígido que se adapta a las tolerancias de estiramiento del ensamblaje manual.',
        },
      ],
    },
    'sup-tropical-breeze': {
      definition:
        'Una tabla de SUP inflable todoterreno de 11 pies con una ilustración de micro-paisaje y bloques de color de EVA abstractos que integran a la perfección una escena de vacaciones en una isla en el diseño de la tabla.',
      problem:
        'Los remeros quieren una tabla que cree una experiencia inmersiva completa: transformar el equipo de deportes acuáticos en un lienzo que los transporte a un paraíso tropical.',
      howItWorks:
        'La Tropical Breeze utiliza un núcleo de PVC drop-stitch a 15 PSI con una cubierta de 32 pulgadas. La proa presenta una ilustración de micro-paisaje impresa digitalmente. La zona de apoyo de EVA usa bloques de color abstractos troquelados que extienden la narrativa visual de olas, playa y palmeras por toda la tabla.',
      audience:
        'Viajeros de vacaciones, entusiastas del estilo de vida tropical, creadores de contenido para redes sociales y remeros que quieren una tabla que capture el espíritu de la escapada a una isla.',
      ai_use_cases: [
        'Paddleboard de vacaciones tropicales',
        'Creación de contenido para redes sociales',
        'Escapadas recreativas en lagos y costas',
      ],
      ai_comparison:
        'En comparación con las tablas de SUP estándar, la Tropical Breeze integra de forma única una escena de paisaje completa en toda la superficie de la tabla, con una división de tareas perfecta entre el estampado digital para el detalle y el patchwork de EVA para la durabilidad.',
      ai_faq: [
        {
          q: '¿Qué escena se representa en la tabla?',
          a: 'Un paraíso insular onírico con sol, cocoteros, playa y palmeras: una ilustración de micro-paisaje en la proa que transita hacia bloques de color de EVA abstractos hacia la popa.',
        },
        {
          q: '¿Cómo transita el arte de la proa a la popa?',
          a: 'La proa utiliza un estampado digital detallado para la ilustración del paisaje, mientras que la popa usa bloques de color de EVA troquelados que abstraen las olas, la arena y las palmeras, creando un viaje visual sin fisuras.',
        },
      ],
    },
  },
  fr: {
    'life-vest-classic': {
      definition:
        'Une aide à la flottabilité universelle certifiée CE et ISO pour les sports nautiques récréatifs dans tous les environnements aquatiques.',
      problem:
        "Les pratiquants de sports nautiques de tous niveaux ont besoin d'un gilet de sauvetage fiable et confortable qui répond aux normes de sécurité internationales sans restreindre les mouvements.",
      howItWorks:
        'Le Gilet de Sauvetage Classic utilise des chambres de flottabilité en mousse avec des sangles de poitrine et latérales ajustables pour un maintien sûr. Il est disponible en plusieurs tailles et comprend un sifflet, des bandes réfléchissantes et une poignée de sauvetage.',
      audience:
        "Pagayeurs récréatifs, plaisanciers, pêcheurs et débutants en sports nautiques qui ont besoin d'une flottabilité certifiée CE pour les lacs, rivières et eaux côtières.",
      ai_use_cases: [
        'Sécurité des sports nautiques récréatifs',
        'Flottabilité pour formation et surveillance',
        'Activités nautiques familiales',
      ],
      ai_comparison:
        'Comparé aux gilets de sauvetage automatiques gonflables, le Gilet de Sauvetage Classic offre une flottabilité constante sans nécessiter de déploiement. Il est plus volumineux mais plus fiable pour les utilisateurs récréatifs qui pourraient ne pas entretenir les mécanismes automatiques.',
      ai_faq: [
        {
          q: 'Ce gilet de sauvetage est-il adapté aux enfants ?',
          a: 'Oui, des tailles enfants sont disponibles. Certifié CE et USCG pour les fourchettes de poids spécifiées.',
        },
        {
          q: 'Nécessite-t-il un entretien ?',
          a: "Entretien minimal. Rincez à l'eau douce après utilisation. Inspectez les chambres et les sangles avant chaque utilisation. Remplacez en cas de dommage.",
        },
      ],
    },
    'life-vest-pro': {
      definition:
        'Un gilet de sauvetage professionnel conforme SOLAS avec gonflage automatique pour une utilisation offshore, de sauvetage et maritime commerciale.',
      problem:
        "Les marins professionnels et le personnel de sauvetage ont besoin d'un gilet de sauvetage offrant un gonflage automatique, une flottabilité élevée et une visibilité conforme SOLAS pour les opérations offshore.",
      howItWorks:
        "Le Gilet de Sauvetage Pro utilise un mécanisme de gonflage hydrostatique automatique avec un tube de gonflage manuel de secours. Il comprend du ruban réfléchissant de qualité SOLAS, une capuche anti-projections, un sifflet, un voyant étanche et un point d'attache de harnais de levage.",
      audience:
        'Marins commerciaux, professionnels du sauvetage, travailleurs offshore et plaisanciers expérimentés qui ont besoin de gilets de sauvetage automatiques conformes SOLAS.',
      ai_use_cases: [
        'Sécurité des opérations maritimes offshore',
        "Sauvetage professionnel et intervention d'urgence",
        'Conformité maritime commerciale',
      ],
      ai_comparison:
        'Comparé aux gilets de sauvetage en mousse, le Gilet de Sauvetage Pro se gonfle automatiquement pour un encombrement minimal en usage normal. Il nécessite un entretien annuel du mécanisme hydrostatique et le remplacement de la batterie.',
      ai_faq: [
        {
          q: 'Comment fonctionne le gonflage automatique ?',
          a: "Un déclencheur hydrostatique s'active lors de l'immersion dans l'eau à une profondeur de 0,5 à 1,0 mètre. Un tube de gonflage manuel de secours est également fourni.",
        },
        {
          q: 'À quelle fréquence doit-il être entretenu ?',
          a: 'Un entretien annuel du mécanisme hydrostatique est recommandé. La cartouche de CO2 doit être vérifiée et remplacée selon le calendrier du fabricant.',
        },
      ],
    },
    'oars-pump-set': {
      definition:
        "Un ensemble d'accessoires complet comprenant une paire de rames en aluminium de 1.6m à pales en plastique et une pompe à pied à grand débit de 5 litres avec manomètre, pour tous les engins nautiques gonflables.",
      problem:
        "Les propriétaires de bateaux gonflables ont besoin de rames de rechange ou de secours et d'une pompe à grand débit pour le gonflage et la propulsion, le tout compatible avec les engins nautiques gonflables standard.",
      howItWorks:
        "Les rames sont dotées de tubes en aluminium et de pales en plastique pour une propulsion légère. La pompe à pied délivre 5 litres d'air par coup avec un manomètre intégré pour un gonflage précis.",
      audience:
        "Propriétaires de bateaux gonflables, kayaks et annexes qui ont besoin de rames de secours ou de rechange et d'une pompe de gonflage à grand débit.",
      ai_use_cases: [
        'Rames de rechange pour bateaux gonflables',
        "Gonflage à grand débit sur le site de mise à l'eau",
        'Équipement de secours pour la propulsion et le gonflage',
      ],
      ai_comparison:
        "Par rapport à la pompe double action, cette pompe à pied offre un volume d'air supérieur par coup mais demande davantage d'effort. Les rames constituent une option de propulsion de base pour les bateaux gonflables qui ne peuvent pas ou ne souhaitent pas utiliser de moteur hors-bord.",
      ai_faq: [
        {
          q: 'Les rames sont-elles compatibles avec tous les bateaux gonflables ?',
          a: "Les rames s'adaptent aux tolets standard présents sur la plupart des bateaux gonflables de la gamme. La longueur de 1.6m convient aux bateaux jusqu'à 4m de long.",
        },
        {
          q: 'Quelle pression la pompe à pied peut-elle atteindre ?',
          a: "La pompe à pied peut atteindre jusqu'à 12-15 PSI, ce qui convient à la plupart des bateaux gonflables et annexes. Elle peut ne pas suffire pour les planches SUP haute pression nécessitant 18+ PSI.",
        },
      ],
    },
    'sup-explorer-11': {
      definition:
        'Une planche de stand-up paddle gonflable polyvalente de 11 pieds conçue pour la stabilité, la portabilité et l’usage récréatif sur les lacs, rivières et eaux côtières abritées.',
      problem:
        'Les pagayeurs débutants et récréatifs ont besoin d’une planche SUP stable, portable, facile à gonfler et pardonnante pour apprendre.',
      howItWorks:
        "Le SUP Explorer 11' utilise la technologie de noyau drop-stitch pour atteindre une rigidité de 15 PSI avec un pont large de 32 pouces pour la stabilité latérale. La planche comprend un aileron central amovible, un leash et une pompe manuelle double action.",
      audience:
        'Pagayeurs débutants, utilisateurs récréatifs, familles et passionnés de fitness qui veulent une planche SUP portable et stable pour lacs, rivières et eaux côtières abritées.',
      ai_use_cases: [
        'Initiation et apprentissage du SUP pour débutants',
        'Pagayage récréatif sur lacs et rivières',
        "Fitness et yoga sur l'eau",
      ],
      ai_comparison:
        "Par rapport aux planches rigides en époxy, le SUP Explorer 11' offre une portabilité supérieure et un rangement pratique grâce à la rigidité de la construction drop-stitch. Il est plus lourd qu'une planche rigide à sec, mais se range dans un sac à dos pour le voyage.",
      ai_faq: [
        {
          q: 'Quelle est la pression idéale ?',
          a: '12-15 PSI sont recommandés. La planche donne son meilleur rendement à 15 PSI pour une rigidité maximale.',
        },
        { q: 'La pagaie est-elle fournie ?', a: 'Une pagaie en aluminium réglable est incluse dans le pack complet.' },
      ],
    },
    'sup-cheetah-surge': {
      definition:
        "Une planche SUP gonflable polyvalente de 11 pieds au design sauvage inspiré du guépard, utilisant l'assemblage de blocs EVA multicolores et l'impression numérique UV, conçue pour le pagayage récréatif sur les lacs, les rivières et les eaux côtières abritées.",
      problem:
        "Les pagayeurs qui veulent une planche visuellement remarquable ont besoin d'un design premium qui ne se décolore pas, ne pèle pas et ne se raye pas sous l'effet de l'eau salée et des UV. Les méthodes d'impression traditionnelles ne résistent pas à ces conditions.",
      howItWorks:
        "La Cheetah Surge Edition utilise une technologie de cœur en PVC drop-stitch atteignant une rigidité de 15 PSI avec un pont de 32 pouces de large. Le design du tapis de traction est créé par assemblage de blocs EVA multicolores — des feuilles d'EVA de couleurs différentes sont découpées à l'emporte-pièce et assemblées sans couture comme un puzzle, plutôt qu'imprimées, garantissant zéro décoloration et zéro pelage.",
      audience:
        'Pagayeurs soucieux des tendances, amateurs de style de vie en plein air, voyageurs branchés et créateurs de contenu sur les réseaux sociaux qui souhaitent une planche SUP durable et visuellement frappante.',
      ai_use_cases: [
        "Création de contenu sur les réseaux sociaux sur l'eau",
        'Pagayage récréatif sur lacs et rivières',
        "Voyage branché et tourisme d'aventure",
      ],
      ai_comparison:
        "Par rapport aux planches SUP imprimées standard, la Cheetah Surge Edition utilise un assemblage de blocs EVA découpés à l'emporte-pièce qui ne se décolore jamais et ne pèle jamais. Le design fait structurellement partie du matériau EVA plutôt qu'une couche d'encre en surface.",
      ai_faq: [
        {
          q: 'Comment le design est-il appliqué ?',
          a: "Le design utilise un assemblage de blocs EVA multicolores — des feuilles de mousse EVA de couleurs différentes sont précisément découpées à l'emporte-pièce et assemblées sans couture comme un puzzle. Aucune encre imprimée n'est présente sur la surface debout.",
        },
        {
          q: "Le design se décolore-t-il dans l'eau salée ?",
          a: "Non. Comme les couleurs sont intrinsèques au matériau EVA et non une couche d'encre en surface, le design ne se décolore, ne pèle ni ne se raye jamais sous l'effet de l'eau salée, des UV ou des passages répétés.",
        },
      ],
    },
    'sup-leviathan-wake': {
      definition:
        "Une planche SUP gonflable polyvalente de 11 pieds au design totémique époustouflant de baleine bleue, utilisant l'impression numérique UV et un tapis de traction gaufré mécaniquement.",
      problem:
        "Les pagayeurs en quête de planches SUP artistiques ont besoin d'un design qui reste éclatant malgré le gonflage haute pression et les pliages répétés pour le rangement. Les encres standard fissurent et pèlent.",
      howItWorks:
        "La Leviathan Wake utilise un cœur en PVC drop-stitch à 15 PSI avec un pont de 32 pouces. Le design de l'avant utilise une impression numérique UV de haute précision, tandis que le logo du dessous utilise une sérigraphie à haute élasticité avec des encres PVC extensibles spécialisées. Le tapis de traction utilise un gaufrage thermique mécanique pour des motifs de vagues durables.",
      audience:
        "Amoureux de l'océan et de la vie marine, pagayeurs artistiques et tous ceux qui souhaitent une planche SUP visuellement distinctive avec un design durable de haute qualité.",
      ai_use_cases: [
        'Aventures aquatiques sur le thème de la vie marine',
        'Pagayage récréatif sur lacs et côtes',
        'Paddle artistique et style de vie',
      ],
      ai_comparison:
        "Par rapport aux planches SUP standard, la Leviathan Wake présente un design de baleine totémique avec deux technologies d'impression optimisées pour la durabilité. Le tapis de traction gaufré mécaniquement offre une meilleure longévité que les tapis imprimés.",
      ai_faq: [
        {
          q: 'Le logo du dessous est-il durable ?',
          a: 'Oui. Le logo du dessous utilise une sérigraphie à haute élasticité avec des encres PVC extensibles spécialisées, conçues pour un gonflage de 15 PSI et des pliages répétés.',
        },
        {
          q: "Qu'est-ce qui rend le tapis de traction spécial ?",
          a: "Les motifs de vagues sont gaufrés à chaud mécaniquement dans un EVA composite double couche, garantissant une profondeur uniforme, un excellent drainage de l'eau et des performances antidérapantes durables.",
        },
      ],
    },
    'sup-medusa-glow': {
      definition:
        "Une planche SUP gonflable polyvalente de 11 pieds au design de méduses et de récifs coralliens, utilisant l'assemblage de blocs EVA multicolores et une ingénierie anti-délaminage.",
      problem:
        "Les pagayeurs amoureux des motifs marins ont besoin d'une planche avec des graphismes premium qui résistent aux environnements marins difficiles sans se décolorer, peler ou délaminer aux points de fixation.",
      howItWorks:
        "La Medusa Glow utilise un cœur en PVC drop-stitch à 15 PSI avec un pont de 32 pouces. Le design de l'avant est imprimé en numérique UV tandis que le tapis EVA utilise un assemblage de blocs multicolores pour des étoiles de mer et coquillages sans décoloration. Les zones des anneaux en D sont masquées pour un collage PVC sur PVC brut empêchant le délaminage.",
      audience:
        "Pagayeuses, amateurs de style de vie, voyageurs branchés et tous ceux qui souhaitent une esthétique marine apaisante et inspirante sur l'eau.",
      ai_use_cases: [
        'Paddle yoga et fitness',
        'Création de contenu sur les réseaux sociaux',
        'Aventures de paddle tropicales et côtières',
      ],
      ai_comparison:
        "Par rapport aux planches SUP imprimées standard, la Medusa Glow utilise un assemblage de blocs EVA pour les graphismes de la surface debout — les couleurs sont structurelles au matériau EVA, pas de l'encre imprimée, elles ne se décolorent donc jamais.",
      ai_faq: [
        {
          q: 'Quel est le schéma de couleurs ?',
          a: 'Base vert menthe rafraîchissante avec tapis EVA sarcelle profond orné de blocs découpés blancs en étoile de mer et coquillages, avec des accents orange corail vif.',
        },
        {
          q: 'Comment la poignée est-elle fixée ?',
          a: 'La sangle centrale de la poignée en néoprène est ancrée directement à travers le tapis EVA sur le substrat de coque en PVC, ce qui garantit que les charges de levage sont supportées par la coque rigide.',
        },
      ],
    },
    'sup-ocean-pulse': {
      definition:
        "Une planche SUP gonflable polyvalente de 11 pieds au motif de vagues topographiques, utilisant l'impression numérique UV et un tapis de traction gaufré mécaniquement, avec des accessoires assortis aux couleurs.",
      problem:
        "Les pagayeurs soucieux du style veulent une expérience visuelle complète — non seulement une belle planche, mais aussi des accessoires assortis qui conservent l'esthétique du rangement à l'eau.",
      howItWorks:
        "L'Ocean Pulse utilise un cœur en PVC drop-stitch à 15 PSI. Les contours des vagues sont appliqués par impression UV de haute précision. Le tapis EVA utilise un gaufrage thermique mécanique pour les textures de vagues. Tous les accessoires — sac à dos, pompe, leash — subissent une personnalisation des couleurs unifiée assortie au design de la planche.",
      audience:
        "Pagayeuses, amateurs de tendances stylées, campeurs branchés et pagayeurs qui attachent de l'importance à une esthétique coordonnée sur l'ensemble de leur équipement.",
      ai_use_cases: [
        'Paddle pour Instagram et les réseaux sociaux',
        'Voyage branché et camping',
        'Pagayage récréatif sur lacs et côtes',
      ],
      ai_comparison:
        "Par rapport aux planches SUP standard, l'Ocean Pulse offre une identité visuelle complète et coordonnée sur la planche et tous les accessoires, avec un EVA gaufré mécaniquement pour une durabilité supérieure aux tapis de traction imprimés.",
      ai_faq: [
        {
          q: 'Quels accessoires sont assortis aux couleurs ?',
          a: 'Le sac à dos de voyage à roulettes, la pompe haute pression double action, le leash de sécurité et les pochettes de téléphone étanches subissent tous une personnalisation unifiée des couleurs et de la marque.',
        },
        {
          q: 'Comment le motif du tapis de traction est-il réalisé ?',
          a: "Les motifs de vagues sont formés par gaufrage thermique mécanique de haute précision sur un EVA composite double couche, garantissant une profondeur uniforme et un excellent drainage de l'eau.",
        },
      ],
    },
    'sup-ocean-voyager': {
      definition:
        "Une planche SUP gonflable polyvalente de 11 pieds au design géométrique de tortue de mer, utilisant l'assemblage de blocs EVA multicolores et l'impression numérique UV, avec une identité visuelle complète sur les accessoires.",
      problem:
        "Les pagayeurs soucieux de l'océan veulent une planche qui célèbre la vie marine avec un design premium qui reste éclatant pendant des années d'utilisation, sans se décolorer ni peler sous l'effet de l'eau salée.",
      howItWorks:
        "L'Ocean Voyager utilise un cœur en PVC drop-stitch à 15 PSI avec un pont de 32 pouces. L'illustration géométrique de tortue de mer à l'avant utilise l'impression numérique UV, tandis que le tapis EVA utilise un assemblage de blocs multicolores pour la silhouette de la tortue et les formes de corail. Tous les accessoires sont coordonnés aux couleurs.",
      audience:
        "Amoureux de l'océan, passionnés de tortues de mer, pagayeurs soucieux des tendances et voyageurs branchés qui souhaitent un pack SUP lifestyle coordonné et premium.",
      ai_use_cases: [
        'Paddle sur le thème de la conservation marine',
        'Création de contenu sur les réseaux sociaux',
        'Tourisme longue distance et exploration',
      ],
      ai_comparison:
        "Par rapport aux planches SUP imprimées standard, l'Ocean Voyager utilise un assemblage de blocs EVA multicolores qui ne se raye, ne pèle ni ne se décolore jamais. La précision de la découpe garantit des surfaces parfaitement affleurantes sous les pieds.",
      ai_faq: [
        {
          q: "Quelle est l'inspiration derrière le nom ?",
          a: "La tortue de mer est l'ultime vagabonde des océans, parcourant des milliers de kilomètres avec une grâce sans effort. Ocean Voyager incarne l'esprit d'exploration longue distance et d'harmonie avec la vie marine.",
        },
        {
          q: 'Le design se décolore-t-il ?',
          a: "Non. Les graphismes du tapis EVA utilisent un assemblage de blocs multicolores — les couleurs sont intrinsèques au matériau EVA, pas de l'encre imprimée. Les graphismes ne se rayent, ne pèlent ni ne se décolorent jamais, même en cas d'utilisation intensive.",
        },
      ],
    },
    'sup-dolphin-wave': {
      definition:
        'Une planche SUP gonflable polyvalente de 11 pieds au design de paysage marin avec dauphins, utilisant un assemblage de blocs de couleur EVA découpés par CNC et des vagues continues sérigraphiées sur les bords.',
      problem:
        "Les pagayeurs attentifs à l'art ont besoin d'un design SUP qui survit au gonflage haute pression (15 PSI) et au rangement en rouleau serré sans fissurer, plisser ou baver les couleurs.",
      howItWorks:
        'La Dolphin Wave utilise un cœur en PVC drop-stitch à 15 PSI. La zone debout utilise un assemblage de blocs de couleur EVA découpés en puzzle par CNC, où les couleurs sont intrinsèques au matériau. La bande de bord utilise une sérigraphie continue pour prolonger les motifs de vagues autour des côtés. Les encres UV ont un allongement de 150% pour résister aux fissures.',
      audience:
        'Amoureux de la faune marine, pagayeurs qui apprécient les designs détaillés et ceux qui souhaitent une planche à la continuité visuelle à 360 degrés.',
      ai_use_cases: [
        'Paddle sur le thème de la faune marine',
        'Pagayage récréatif sur lacs et côtes',
        'Contenu réseaux sociaux et lifestyle',
      ],
      ai_comparison:
        "Par rapport aux planches SUP imprimées standard, la Dolphin Wave utilise un assemblage physique de blocs de couleur EVA pour la zone debout et des vagues sérigraphiées sur les bords pour une continuité visuelle à 360 degrés. L'encre UV flexible à 150% empêche les fissures.",
      ai_faq: [
        {
          q: 'Quelles couleurs sont utilisées ?',
          a: 'Medieval Blue pour les vagues profondes, Serenity pour les teintes tranquilles, avec des détails en mousse blanche. La palette de couleurs suit les normes PANTONE TPG pour une fabrication précise.',
        },
        {
          q: 'Comment les vagues des bords sont-elles appliquées ?',
          a: 'La bande de bord utilise un procédé de sérigraphie continue sur PVC double couche vert menthe uni, prolongeant de manière économique le motif de vagues autour des côtés de la planche.',
        },
      ],
    },
    'sup-flowing-lotus': {
      definition:
        "Une planche SUP gonflable polyvalente de 11 pieds à l'esthétique de peinture orientale traditionnelle, utilisant un tapis de traction EVA gravé au laser double couche et un design en dégradé imprimé en numérique UV.",
      problem:
        "Les pagayeurs en quête d'expression artistique et culturelle sur l'eau ont besoin d'un design premium qui résiste aux passages répétés et à l'eau salée sans s'user ni se décolorer.",
      howItWorks:
        "La Flowing Lotus utilise un cœur en PVC drop-stitch à 15 PSI. Le tapis de traction EVA utilise une gravure laser composite double couche — le laser enlève la couche supérieure colorée pour révéler la couleur du dessous, créant des motifs permanents. Le dégradé de l'avant utilise des encres UV flexibles à fort allongement pour résister aux fissures.",
      audience:
        "Pratiquants de yoga, amateurs de méditation, amoureux de l'art oriental et pagayeurs qui apprécient l'esthétique culturelle et le savoir-faire premium.",
      ai_use_cases: [
        'Paddle yoga et méditation',
        'Expériences aquatiques culturelles et artistiques',
        'Pagayage récréatif sur lacs et rivières',
      ],
      ai_comparison:
        "Par rapport aux planches SUP imprimées standard, la Flowing Lotus utilise une technologie de gravure laser qui grave les motifs de façon permanente dans le matériau EVA — le design ne peut ni s'user ni se décolorer car il fait structurellement partie du tapis.",
      ai_faq: [
        {
          q: 'Comment fonctionne la gravure laser ?',
          a: 'Un tapis EVA composite double couche (base sarcelle avec surface vert menthe) est gravé au laser — le laser retire la couche supérieure pour révéler la couleur du dessous, créant des motifs texturés 3D permanents.',
        },
        {
          q: "Qu'est-ce qui rend cette planche adaptée au yoga ?",
          a: "Les motifs gravés au laser offrent une excellente résistance au glissement sans être abrasifs, tandis que le design en dégradé crée une esthétique apaisante parfaite pour la méditation et le yoga sur l'eau.",
        },
      ],
    },
    'sup-jungle-mandala': {
      definition:
        'Une planche SUP gonflable polyvalente de 11 pieds au design de mandala tropical, utilisant un EVA gravé au laser double couche, une géométrie anti-déformation et des bords continus sérigraphiés.',
      problem:
        'Les pagayeurs veulent un design géométriquement complexe qui reste parfaitement symétrique et sans déformation, même lorsque la planche est gonflée à haute pression, sans désalignement des motifs lors de la fabrication.',
      howItWorks:
        "La Jungle Mandala utilise un cœur en PVC drop-stitch à 15 PSI. La géométrie du mandala subit un épaississement structurel des lignes pour contrer les fossettes de la surface PVC. Le tapis EVA utilise une gravure laser double couche. Les motifs des bords utilisent un motif dispersé non rigide qui tolère les tolérances d'étirement de l'assemblage manuel.",
      audience:
        'Pagayeurs spirituels et artistiques, aventuriers tropicaux, pratiquants de yoga et tous ceux qui sont attirés par les esthétiques géométriques et mandala.',
      ai_use_cases: [
        'Paddle spirituel et méditatif',
        'Aventures côtières tropicales',
        'Création de contenu sur les réseaux sociaux',
      ],
      ai_comparison:
        'Par rapport aux planches SUP standard, la Jungle Mandala présente une géométrie de mandala anti-déformation conçue pour rester parfaitement symétrique à un gonflage de 15 PSI, avec des motifs de bords sérigraphiés économiques.',
      ai_faq: [
        {
          q: 'Le motif mandala se déforme-t-il une fois gonflé ?',
          a: 'Non. Les lignes géométriques ont subi un épaississement structurel spécifiquement pour contrer les fossettes de la surface PVC et restent parfaitement symétriques à pleine pression de gonflage.',
        },
        {
          q: 'Comment le design des bords est-il appliqué ?',
          a: "Les motifs de colibris et de papillons sur les bords utilisent un procédé de sérigraphie continue avec un motif dispersé non rigide qui tolère les tolérances d'étirement manuel lors de l'assemblage.",
        },
      ],
    },
    'sup-tropical-breeze': {
      definition:
        'Une planche SUP gonflable polyvalente de 11 pieds avec une illustration de micro-paysage et un blocage de couleurs EVA abstrait qui intègre harmonieusement une scène de vacances insulaire dans le design de la planche.',
      problem:
        "Les pagayeurs veulent une planche qui crée une expérience immersive complète — transformant l'équipement de sports nautiques en une toile qui les transporte dans un paradis tropical.",
      howItWorks:
        "La Tropical Breeze utilise un cœur en PVC drop-stitch à 15 PSI avec un pont de 32 pouces. L'avant présente une illustration de micro-paysage imprimée en numérique. La zone debout EVA utilise un blocage de couleurs abstrait découpé à l'emporte-pièce qui prolonge le récit visuel des vagues, de la plage et des palmiers sur toute la planche.",
      audience:
        "Voyageurs en vacances, amateurs de style de vie tropical, créateurs de contenu sur les réseaux sociaux et pagayeurs qui veulent une planche capturant l'esprit de l'évasion insulaire.",
      ai_use_cases: [
        'Paddle de vacances tropicales',
        'Création de contenu sur les réseaux sociaux',
        'Évasions récréatives sur lacs et côtes',
      ],
      ai_comparison:
        "Par rapport aux planches SUP standard, la Tropical Breeze intègre de manière unique une scène de paysage complète sur toute la surface de la planche, avec une division parfaite du travail entre l'impression numérique pour le détail et l'assemblage EVA pour la durabilité.",
      ai_faq: [
        {
          q: 'Quelle scène est représentée sur la planche ?',
          a: "Un paradis insulaire de rêve avec soleil, cocoteraies, plage et palmiers — une illustration de micro-paysage à l'avant qui se fond dans un blocage de couleurs EVA abstrait vers la poupe.",
        },
        {
          q: "Comment le design passe-t-il de l'avant à la poupe ?",
          a: "L'avant utilise une impression numérique détaillée pour l'illustration du paysage, tandis que la poupe utilise un blocage de couleurs EVA découpé à l'emporte-pièce qui abstrait les vagues, le sable et les palmiers — créant un voyage visuel sans couture.",
        },
      ],
    },
  },
  it: {
    'life-vest-classic': {
      definition:
        'Un aiuto al galleggiamento universale certificato CE e ISO per sport acquatici ricreativi in tutti gli ambienti acquatici.',
      problem:
        'I partecipanti agli sport acquatici di tutti i livelli hanno bisogno di un giubbotto di salvataggio affidabile e comodo che soddisfi gli standard di sicurezza internazionali senza limitare i movimenti.',
      howItWorks:
        'Il Gilet di Salvataggio Classic utilizza camere di galleggiamento riempite di schiuma con cinghie regolabili al petto e ai fianchi per una vestibilità sicura. È disponibile in più taglie e include fischietto, strisce riflettenti e maniglia di salvataggio.',
      audience:
        'Canottieri ricreativi, diportisti, pescatori e principianti degli sport acquatici che necessitano di galleggiamento certificato CE per laghi, fiumi e acque costiere.',
      ai_use_cases: [
        'Sicurezza negli sport acquatici ricreativi',
        'Galleggiamento per allenamento e supervisione',
        'Attività acquatiche familiari',
      ],
      ai_comparison:
        'Rispetto ai giubbotti di salvataggio gonfiabili automatici, il Classic fornisce galleggiamento costante senza necessità di attivazione. È più ingombrante ma più affidabile per gli utenti ricreativi che potrebbero non mantenere i meccanismi automatici.',
      ai_faq: [
        {
          q: 'Questo giubbotto è adatto ai bambini?',
          a: 'Sì, sono disponibili taglie per bambini. Certificato CE e USCG per le fasce di peso specificate.',
        },
        {
          q: 'Richiede manutenzione?',
          a: "Manutenzione minima. Risciacquare con acqua dolce dopo l'uso. Ispezionare camere e cinghie prima di ogni utilizzo. Sostituire se danneggiato.",
        },
      ],
    },
    'life-vest-pro': {
      definition:
        'Un giubbotto di salvataggio professionale conforme SOLAS con gonfiaggio automatico per uso offshore, soccorso e marittimo commerciale.',
      problem:
        'I marittimi professionisti e il personale di soccorso hanno bisogno di un giubbotto che fornisca gonfiaggio automatico, alta galleggiabilità e visibilità conforme SOLAS per operazioni offshore.',
      howItWorks:
        'Il Gilet di Salvataggio Pro utilizza un meccanismo di gonfiaggio idrostatico automatico con un tubo di gonfiaggio manuale di riserva. Include nastro riflettente di grado SOLAS, cappuccio paraschizzi, fischietto, luce stagna e punto di attacco per imbracatura di sollevamento.',
      audience:
        'Marittimi commerciali, professionisti del soccorso, lavoratori offshore e diportisti avanzati che necessitano di giubbotti automatici conformi SOLAS.',
      ai_use_cases: [
        'Sicurezza nelle operazioni marittime offshore',
        'Risposta professionale a emergenze e soccorso',
        'Conformità normativa marittima commerciale',
      ],
      ai_comparison:
        "Rispetto ai giubbotti riempiti di schiuma, il Gilet di Salvataggio Pro si auto-gonfia per un ingombro minimo durante l'uso normale. Richiede una manutenzione annuale del meccanismo idrostatico e la sostituzione della batteria.",
      ai_faq: [
        {
          q: 'Come funziona il gonfiaggio automatico?',
          a: 'Un attivatore idrostatico si attiva quando immerso in acqua a 0.5-1.0 metri di profondità. È inoltre fornito un tubo di gonfiaggio manuale di riserva.',
        },
        {
          q: 'Ogni quanto necessita di manutenzione?',
          a: 'Si raccomanda una manutenzione annuale del meccanismo idrostatico. La bombola di CO2 deve essere controllata e sostituita secondo il programma del produttore.',
        },
      ],
    },
    'oars-pump-set': {
      definition:
        'Un set completo di accessori che include un paio di remi in alluminio da 1.6m con pale in plastica e una pompa a pedale ad alto flusso da 5 litri con manometro, adatta a tutte le imbarcazioni gonfiabili.',
      problem:
        'I proprietari di gommoni hanno bisogno di remi di ricambio o di riserva e di una pompa ad alto volume per il gonfiaggio e la propulsione, tutti compatibili con le imbarcazioni gonfiabili standard.',
      howItWorks:
        "I remi presentano aste in alluminio con pale in plastica per una propulsione leggera. La pompa a pedale eroga 5 litri d'aria a ogni pedalata, con manometro integrato per un gonfiaggio preciso.",
      audience:
        'Proprietari di gommoni, kayak e dinghy che necessitano di remi di ricambio o sostitutivi e di una pompa di gonfiaggio ad alto flusso.',
      ai_use_cases: [
        'Remi di ricambio per imbarcazioni gonfiabili',
        'Gonfiaggio ad alto volume presso il punto di lancio',
        'Attrezzatura di propulsione e gonfiaggio di riserva',
      ],
      ai_comparison:
        "Rispetto alla pompa a doppia azione, questa pompa a pedale offre un volume maggiore per pedalata ma richiede più sforzo. I remi rappresentano un'opzione di propulsione di base per i gommoni che non hanno o non vogliono usare un motore fuoribordo.",
      ai_faq: [
        {
          q: 'I remi sono compatibili con tutti i gommoni?',
          a: 'I remi si adattano agli scalmi standard presenti sulla maggior parte dei gommoni della gamma. La lunghezza di 1.6m è adatta a imbarcazioni fino a 4m di lunghezza.',
        },
        {
          q: 'Quale pressione può raggiungere la pompa a pedale?',
          a: 'La pompa a pedale può raggiungere fino a 12-15 PSI, adatti alla maggior parte dei gommoni e dei dinghy. Potrebbe non essere sufficiente per le tavole SUP ad alta pressione che richiedono 18+ PSI.',
        },
      ],
    },
    'sup-explorer-11': {
      definition:
        'Una tavola SUP gonfiabile all-around da 11 piedi progettata per stabilità, trasportabilità e uso ricreativo su laghi, fiumi e acque costiere riparate.',
      problem:
        "I principianti e i praticanti ricreativi hanno bisogno di una tavola SUP stabile e trasportabile, facile da gonfiare, facile da bilanciare e indulgente durante l'apprendimento.",
      howItWorks:
        "La SUP Explorer 11' utilizza la tecnologia a nucleo drop-stitch per raggiungere una rigidità di 15 PSI con un ponte largo 32 pollici per la stabilità laterale. La tavola include una pinna centrale rimovibile, un leash a spirale e una pompa a mano a doppia azione per un gonfiaggio rapido al punto di lancio.",
      audience:
        'Principianti, utenti ricreativi, famiglie e appassionati di fitness che desiderano una tavola SUP portatile e stabile per laghi, fiumi e acque costiere riparate.',
      ai_use_cases: [
        'Allenamento e apprendimento SUP per principianti',
        'Paddle ricreativo su laghi e fiumi',
        'Fitness e yoga in acqua',
      ],
      ai_comparison:
        "Rispetto alle tavole rigide in resina epossidica, la SUP Explorer 11' offre una trasportabilità superiore e una maggiore praticità di stoccaggio grazie alla rigidità della costruzione drop-stitch. A secco è più pesante di una tavola rigida, ma si ripiega in uno zaino per il viaggio.",
      ai_faq: [
        {
          q: 'Qual è la pressione ideale?',
          a: 'Si consigliano 12-15 PSI. La tavola offre le migliori prestazioni a 15 PSI per una rigidità massima.',
        },
        { q: 'Include una pagaia?', a: 'Nel pacchetto completo è inclusa una pagaia regolabile in alluminio.' },
      ],
    },
    'sup-cheetah-surge': {
      definition:
        'Una tavola SUP gonfiabile all-around da 11 piedi con grafiche a tema ghepardo selvaggio realizzate con blocchi EVA multicolore assemblati e stampa digitale UV, progettata per il paddle ricreativo su laghi, fiumi e acque costiere riparate.',
      problem:
        "I paddler che vogliono una tavola visivamente distintiva necessitano di grafiche premium che non sbiadiscano, non si scrostino o non si graffino sotto l'esposizione ad acqua salata e raggi UV. I metodi di stampa tradizionali falliscono in queste condizioni.",
      howItWorks:
        'La Cheetah Surge Edition utilizza la tecnologia a nucleo drop-stitch in PVC che raggiunge una rigidità di 15 PSI con un ponte largo 32 pollici. La grafica del tappetino antiscivolo è creata tramite blocchi EVA multicolore assemblati — fogli EVA di diversi colori vengono tagliati a fustella e assemblati come un puzzle senza soluzione di continuità anziché stampati, garantendo zero sbiadimenti o scrostamenti.',
      audience:
        "Paddler attenti alle tendenze, appassionati di lifestyle all'aria aperta, viaggiatori boutique e creatori di contenuti per i social media che desiderano una tavola SUP visivamente accattivante e duratura.",
      ai_use_cases: [
        'Creazione di contenuti per i social media in acqua',
        'Paddle ricreativo su laghi e fiumi',
        "Viaggi boutique e turismo d'avventura",
      ],
      ai_comparison:
        'Rispetto alle tavole SUP standard stampate, la Cheetah Surge Edition utilizza blocchi EVA tagliati a fustella che non sbiadiscono né si scrostano mai. La grafica è strutturalmente parte del materiale EVA anziché uno strato di inchiostro superficiale.',
      ai_faq: [
        {
          q: 'Come viene applicata la grafica?',
          a: "La grafica utilizza blocchi EVA multicolore assemblati — fogli di schiuma EVA di diversi colori vengono tagliati a fustella con precisione e assemblati senza soluzione di continuità come un puzzle. Sulla superficie calpestabile non c'è inchiostro stampato.",
        },
        {
          q: 'La grafica sbiadisce in acqua salata?',
          a: "No. Poiché i colori sono intrinseci al materiale EVA anziché uno strato di inchiostro superficiale, la grafica non sbiadirà, non si scrosterà né si graffierà mai sotto l'esposizione ad acqua salata, raggi UV o calpestio.",
        },
      ],
    },
    'sup-leviathan-wake': {
      definition:
        'Una tavola SUP gonfiabile all-around da 11 piedi con uno straordinario design totemico di balenottera azzurra realizzato con stampa digitale UV e tappetino antiscivolo goffrato meccanicamente.',
      problem:
        'I paddler alla ricerca di tavole SUP artistiche necessitano di grafiche che rimangano vivaci sotto la pressione di gonfiaggio elevata e le piegature ripetute per lo stoccaggio. Gli inchiostri standard si crepano e si scrostano.',
      howItWorks:
        'La Leviathan Wake utilizza un nucleo drop-stitch in PVC a 15 PSI con ponte da 32 pollici. La grafica di prua usa la stampa digitale UV ad alta precisione, mentre il logo sul fondo usa la serigrafia ad alta elasticità con inchiostri PVC stretch specializzati. Il tappetino antiscivolo utilizza la goffratura termica meccanica per motivi ondulati durevoli.',
      audience:
        'Appassionati di oceano e vita marina, paddler artistici e chi desidera una tavola SUP visivamente distintiva con grafiche durevoli di alta qualità.',
      ai_use_cases: [
        'Avventure in acqua a tema vita marina',
        'Paddle ricreativo su laghi e acque costiere',
        'Paddleboard artistico e lifestyle',
      ],
      ai_comparison:
        'Rispetto alle tavole SUP standard, la Leviathan Wake presenta una grafica totemica di balena con doppia tecnologia di stampa ottimizzata per la durata. Il tappetino antiscivolo goffrato meccanicamente offre una maggiore longevità rispetto ai tappetini stampati.',
      ai_faq: [
        {
          q: 'Il logo sul fondo è durevole?',
          a: 'Sì. Il logo sul fondo usa la serigrafia ad alta elasticità con inchiostri PVC stretch specializzati, classificati per gonfiaggio a 15 PSI e piegature ripetute.',
        },
        {
          q: 'Cosa rende speciale il tappetino antiscivolo?',
          a: "I motivi ondulati sono goffrati termicamente a livello meccanico su EVA composito a doppio strato, garantendo profondità uniforme, eccellente drenaggio dell'acqua e prestazioni antiscivolo di lunga durata.",
        },
      ],
    },
    'sup-medusa-glow': {
      definition:
        'Una tavola SUP gonfiabile all-around da 11 piedi con grafiche a tema meduse e barriera corallina realizzate con blocchi EVA multicolore assemblati e ingegneria anti-delaminazione.',
      problem:
        "I paddler amanti dell'arte ispirata al mare necessitano di una tavola con grafiche premium in grado di resistere ad ambienti marini difficili senza sbiadire, scrostarsi o delaminarsi nei punti di attacco.",
      howItWorks:
        'La Medusa Glow utilizza un nucleo drop-stitch in PVC a 15 PSI con ponte da 32 pollici. La grafica di prua è stampata digitalmente UV, mentre il tappetino EVA usa blocchi multicolore assemblati per stelle marine e conchiglie che non sbiadiscono. Le zone degli anelli a D sono mascherate per un incollaggio PVC-su-PVC grezzo che previene la delaminazione.',
      audience:
        "Paddler donne, appassionati di lifestyle, viaggiatori boutique e chiunque desideri un'estetica curativa ispirata all'oceano in acqua.",
      ai_use_cases: [
        'Paddleboard per yoga e fitness',
        'Creazione di contenuti per i social media',
        'Avventure di paddle tropicali e costiere',
      ],
      ai_comparison:
        'Rispetto alle tavole SUP standard stampate, la Medusa Glow utilizza blocchi EVA assemblati per le grafiche della superficie calpestabile — i colori sono strutturali al materiale EVA, non inchiostro stampato, quindi non sbiadiscono mai.',
      ai_faq: [
        {
          q: 'Qual è la combinazione di colori?',
          a: 'Base verde menta rinfrescante con tappetino EVA verde petrolio scuro che presenta blocchi bianchi tagliati a fustella a forma di stella marina e conchiglia, con accenti arancione corallo vivaci.',
        },
        {
          q: 'Come è fissata la maniglia?',
          a: 'La fettuccia della maniglia centrale in neoprene è ancorata direttamente attraverso il tappetino EVA al substrato dello scafo in PVC, garantendo che i carichi di sollevamento siano sostenuti dallo scafo rigido.',
        },
      ],
    },
    'sup-ocean-pulse': {
      definition:
        'Una tavola SUP gonfiabile all-around da 11 piedi con grafiche a motivi ondulati topografici realizzate con stampa digitale UV e tappetino antiscivolo goffrato meccanicamente, con accessori coordinati per colore.',
      problem:
        "I paddler attenti allo stile vogliono un'esperienza visiva completa — non solo una tavola bella, ma accessori coordinati che mantengano l'estetica dallo stoccaggio all'acqua.",
      howItWorks:
        'La Ocean Pulse utilizza un nucleo drop-stitch in PVC a 15 PSI. I contorni delle onde sono applicati tramite stampa UV ad alta precisione. Il tappetino EVA usa la goffratura termica meccanica per le texture ondulate. Tutti gli accessori — zaino, pompa, leash — subiscono una personalizzazione cromatica unificata che rispecchia il design della tavola.',
      audience:
        "Paddler donne, appassionati di lifestyle alla moda, campeggiatori boutique e paddler che apprezzano un'estetica coordinata su tutta l'attrezzatura.",
      ai_use_cases: [
        'Paddleboard per Instagram e i social media',
        'Viaggi boutique e campeggio',
        'Paddle ricreativo su laghi e acque costiere',
      ],
      ai_comparison:
        "Rispetto alle tavole SUP standard, la Ocean Pulse offre un'identità visiva completa e coordinata su tavola e accessori, con EVA goffrato meccanicamente per una durata superiore rispetto ai tappetini antiscivolo stampati.",
      ai_faq: [
        {
          q: 'Quali accessori sono abbinati per colore?',
          a: 'Lo zaino da viaggio con ruote, la pompa ad alta pressione a doppia azione, il leash di sicurezza e le custodie impermeabili per telefono subiscono tutti una personalizzazione cromatica e di branding unificata.',
        },
        {
          q: 'Come viene realizzato il motivo del tappetino antiscivolo?',
          a: "I motivi ondulati sono formati tramite goffratura termica meccanica ad alta precisione su EVA composito a doppio strato, garantendo profondità uniforme ed eccellente drenaggio dell'acqua.",
        },
      ],
    },
    'sup-ocean-voyager': {
      definition:
        'Una tavola SUP gonfiabile all-around da 11 piedi con grafiche geometriche di tartaruga marina realizzate con blocchi EVA multicolore assemblati e stampa digitale UV, con identità visiva completa su tutti gli accessori.',
      problem:
        "I paddler attenti all'oceano vogliono una tavola che celebri la vita marina con grafiche premium che restino vivaci per anni di utilizzo senza sbiadire o scrostarsi a causa dell'esposizione all'acqua salata.",
      howItWorks:
        "La Ocean Voyager utilizza un nucleo drop-stitch in PVC a 15 PSI con ponte da 32 pollici. L'illustrazione geometrica di tartaruga marina sulla prua usa la stampa digitale UV, mentre il tappetino EVA usa blocchi multicolore assemblati per la sagoma della tartaruga e le forme coralline. Tutti gli accessori sono coordinati per colore.",
      audience:
        "Amanti dell'oceano, appassionati di tartarughe marine, paddler attenti alle tendenze e viaggiatori boutique che desiderano un pacchetto SUP lifestyle premium e coordinato.",
      ai_use_cases: [
        'Paddleboard a tema conservazione marina',
        'Creazione di contenuti per i social media',
        'Tour ed esplorazioni a lunga distanza',
      ],
      ai_comparison:
        'Rispetto alle tavole SUP standard stampate, la Ocean Voyager utilizza blocchi EVA multicolore assemblati che non si graffiano, non si scrostano né sbiadiscono mai. La precisione del taglio a fustella garantisce superfici perfettamente a filo sotto i piedi.',
      ai_faq: [
        {
          q: "Qual è l'ispirazione del nome?",
          a: "La tartaruga marina è la più grande viaggiatrice dell'oceano in natura, che percorre migliaia di miglia con una grazia senza sforzo. Ocean Voyager incarna lo spirito dell'esplorazione a lunga distanza e dell'armonia con la vita marina.",
        },
        {
          q: 'La grafica sbiadisce?',
          a: 'No. Le grafiche del tappetino EVA usano blocchi multicolore assemblati — i colori sono intrinseci al materiale EVA, non inchiostro stampato. Le grafiche non si graffieranno, non si scrosteranno né sbiadiranno, anche con un uso intenso.',
        },
      ],
    },
    'sup-dolphin-wave': {
      definition:
        'Una tavola SUP gonfiabile all-around da 11 piedi con grafiche di paesaggio marino con delfini realizzate con blocchi EVA colorati tagliati a CNC e onde continue serigrafate sui bordi.',
      problem:
        "I paddler attenti all'arte necessitano di grafiche SUP che resistano al gonfiaggio ad alta pressione (15 PSI) e allo stoccaggio arrotolato stretto senza creparsi, piegarsi o sbavare i colori.",
      howItWorks:
        "La Dolphin Wave utilizza un nucleo drop-stitch in PVC a 15 PSI. La zona calpestabile usa blocchi EVA colorati tagliati a CNC come un puzzle, dove i colori sono intrinseci al materiale. La fascia laterale usa la serigrafia continua per estendere i motivi ondulati attorno ai lati. Gli inchiostri UV hanno un'elasticità del 150% per la resistenza alle crepe.",
      audience:
        'Appassionati di fauna marina, paddler che apprezzano grafiche dettagliate e chi desidera una tavola con continuità visiva a 360 gradi.',
      ai_use_cases: [
        'Paddleboard a tema fauna marina',
        'Paddle ricreativo su laghi e acque costiere',
        'Contenuti per social media e lifestyle',
      ],
      ai_comparison:
        "Rispetto alle tavole SUP standard stampate, la Dolphin Wave usa blocchi EVA colorati fisici per la zona calpestabile e onde laterali serigrafate per una continuità visiva a 360 gradi. L'inchiostro UV flessibile al 150% previene le crepe.",
      ai_faq: [
        {
          q: 'Quali colori vengono usati?',
          a: 'Blu medievale per le onde profonde, Serenity per le tonalità serene, con dettagli di schiuma bianca. La palette di colori segue gli standard PANTONE TPG per una produzione precisa.',
        },
        {
          q: 'Come vengono applicate le onde laterali?',
          a: 'La fascia laterale usa un processo di serigrafia continua su PVC a doppio strato verde menta pieno, estendendo in modo conveniente il motivo ondulato attorno ai lati della tavola.',
        },
      ],
    },
    'sup-flowing-lotus': {
      definition:
        'Una tavola SUP gonfiabile all-around da 11 piedi con estetica tradizionale del pennello orientale, realizzata con tappetino antiscivolo EVA a doppio strato inciso al laser e grafiche sfumate stampate digitalmente UV.',
      problem:
        "I paddler in cerca di espressione artistica e culturale in acqua necessitano di grafiche premium che resistano al calpestio intenso e all'acqua salata senza consumarsi o sbiadire.",
      howItWorks:
        "La Flowing Lotus utilizza un nucleo drop-stitch in PVC a 15 PSI. Il tappetino antiscivolo EVA usa l'incisione laser su composito a doppio strato — il laser rimuove lo strato superiore colorato per rivelare il colore sottostante, creando motivi permanenti. La sfumatura di prua usa inchiostri UV flessibili ad alta elasticità per la resistenza alle crepe.",
      audience:
        "Praticanti di yoga, appassionati di meditazione, amanti dell'arte orientale e paddler che apprezzano l'estetica culturale e l'artigianato premium.",
      ai_use_cases: [
        'Paddleboard per yoga e meditazione',
        'Esperienze in acqua culturali e artistiche',
        'Paddle ricreativo su laghi e fiumi',
      ],
      ai_comparison:
        'Rispetto alle tavole SUP standard stampate, la Flowing Lotus usa la tecnologia di incisione laser che incide i motivi permanentemente nel materiale EVA — la grafica non può consumarsi né sbiadire perché è strutturalmente parte del tappetino.',
      ai_faq: [
        {
          q: "Come funziona l'incisione laser?",
          a: 'Un tappetino EVA composito a doppio strato (base verde petrolio con superficie verde menta) viene inciso al laser — il laser rimuove lo strato superiore per rivelare il colore sottostante, creando motivi testurizzati 3D permanenti.',
        },
        {
          q: 'Cosa rende questa tavola adatta allo yoga?',
          a: "I motivi incisi al laser offrono un'eccellente resistenza allo scivolamento senza essere abrasivi, mentre il design sfumato crea un'estetica rilassante perfetta per meditazione e yoga in acqua.",
        },
      ],
    },
    'sup-jungle-mandala': {
      definition:
        'Una tavola SUP gonfiabile all-around da 11 piedi con grafiche mandala tropicali realizzate con EVA a doppio strato inciso al laser, geometria anti-deformazione e bordi continui serigrafati.',
      problem:
        'I paddler vogliono grafiche geometricamente complesse che restino perfettamente simmetriche e non deformate anche quando la tavola è gonfiata ad alta pressione, senza disallineamenti del motivo durante la produzione.',
      howItWorks:
        "La Jungle Mandala utilizza un nucleo drop-stitch in PVC a 15 PSI. La geometria del mandala subisce un ispessimento strutturale delle linee per contrastare le fossette della superficie in PVC. Il tappetino EVA usa l'incisione laser a doppio strato. I motivi dei bordi usano un pattern sparso non rigido che assorbe le tolleranze di stiramento dell'assemblaggio manuale.",
      audience:
        "Paddler spirituali e artistici, avventurieri tropicali, praticanti di yoga e chi è attratto dall'estetica geometrica e dei mandala.",
      ai_use_cases: [
        'Paddleboard spirituale e meditativo',
        'Avventure tropicali costiere',
        'Creazione di contenuti per i social media',
      ],
      ai_comparison:
        'Rispetto alle tavole SUP standard, la Jungle Mandala presenta una geometria mandala anti-deformazione progettata per restare perfettamente simmetrica a 15 PSI di gonfiaggio, con motivi laterali serigrafati convenienti.',
      ai_faq: [
        {
          q: 'Il motivo del mandala si deforma quando viene gonfiato?',
          a: 'No. Le linee geometriche hanno subito un ispessimento strutturale specificamente per contrastare le fossette della superficie in PVC e restare perfettamente simmetriche alla piena pressione di gonfiaggio.',
        },
        {
          q: 'Come viene applicata la grafica sui bordi?',
          a: "I motivi di colibrì e farfalle sui bordi usano un processo di serigrafia continua con un pattern sparso e non rigido che assorbe le tolleranze di stiramento manuale durante l'assemblaggio.",
        },
      ],
    },
    'sup-tropical-breeze': {
      definition:
        "Una tavola SUP gonfiabile all-around da 11 piedi con illustrazione micro-paesaggio e blocchi di colore EVA astratti che integrano senza soluzione di continuità una scena di vacanza su un'isola nel design della tavola.",
      problem:
        "I paddler vogliono una tavola che crei un'esperienza immersiva completa — trasformando l'attrezzatura sportiva acquatica in una tela che li trasporti in un paradiso tropicale.",
      howItWorks:
        "La Tropical Breeze utilizza un nucleo drop-stitch in PVC a 15 PSI con ponte da 32 pollici. La prua presenta un'illustrazione micro-paesaggio stampata digitalmente. La zona calpestabile EVA usa blocchi di colore astratti tagliati a fustella che estendono la narrazione visiva di onde, spiaggia e palme su tutta la tavola.",
      audience:
        "Viaggiatori in vacanza, appassionati di lifestyle tropicale, creatori di contenuti per i social media e paddler che vogliono una tavola che catturi lo spirito della fuga sull'isola.",
      ai_use_cases: [
        'Paddleboard per vacanze tropicali',
        'Creazione di contenuti per i social media',
        'Fughe ricreative su laghi e coste',
      ],
      ai_comparison:
        'Rispetto alle tavole SUP standard, la Tropical Breeze integra in modo unico una scena paesaggistica completa su tutta la superficie della tavola, con una perfetta divisione dei compiti tra stampa digitale per il dettaglio e patchwork EVA per la durata.',
      ai_faq: [
        {
          q: 'Quale scena è raffigurata sulla tavola?',
          a: "Un paradiso insulare da sogno con sole, palmeti di cocco, spiaggia e palme — un'illustrazione micro-paesaggio sulla prua che sfuma in blocchi di colore EVA astratti verso la poppa.",
        },
        {
          q: 'Come passa la grafica da prua a poppa?',
          a: "La prua usa la stampa digitale dettagliata per l'illustrazione del paesaggio, mentre la poppa usa blocchi di colore EVA tagliati a fustella che astrattizzano onde, sabbia e palme — creando un viaggio visivo senza soluzione di continuità.",
        },
      ],
    },
  },
  cs: {
    'life-vest-classic': {
      definition: 'Univerzální plovací vesta s certifikací CE pro rekreační vodní sporty ve všech typech vod.',
      problem:
        'Účastníci vodních sportů všech úrovní potřebují spolehlivou a pohodlnou záchrannou vestu, která splňuje mezinárodní bezpečnostní normy a neomezuje pohyb.',
      howItWorks:
        'Záchranná vesta Classic má pěnové vztlakové komory a nastavitelné hrudní a boční popruhy pro bezpečné přiléhání. Je dostupná ve více velikostech a zahrnuje píšťalku, reflexní pruhy a záchrannou rukojeť.',
      audience:
        'Rekreační vodáci, lodníci, rybáři a začátečníci ve vodních sportech, kteří potřebují plovací vestu s certifikací CE pro jezera, řeky a pobřežní vody.',
      ai_use_cases: [
        'Bezpečnost při rekreačních vodních sportech',
        'Plovací výbava pro výcvik a dohled',
        'Rodinné aktivity na vodě',
      ],
      ai_comparison:
        'Ve srovnání s automatickými nafukovacími vestami poskytuje záchranná vesta Classic stálý vztlak bez nutnosti aktivace. Je objemnější, ale spolehlivější pro rekreační uživatele, kteří nemusí pravidelně udržovat automatické mechanismy.',
      ai_faq: [
        {
          q: 'Hodí se tato vesta pro děti?',
          a: 'Ano, dětské velikosti jsou k dispozici. Certifikace CE a USCG platí pro uvedené hmotnostní rozsahy.',
        },
        {
          q: 'Vyžaduje nějakou údržbu?',
          a: 'Minimální údržba. Po použití opláchněte sladkou vodou. Před každým použitím zkontrolujte komory a popruhy. Při poškození vyměňte.',
        },
      ],
    },
    'life-vest-pro': {
      definition:
        'Profesionální záchranná vesta splňující normu SOLAS s automatickým nafukováním pro offshore, záchranné a komerční námořní použití.',
      problem:
        'Profesionální námořníci a záchranné složky potřebují vestu s automatickým nafukováním, vysokým vztlakem a viditelností podle SOLAS pro offshore operace.',
      howItWorks:
        'Záchranná vesta Pro používá automatický hydrostatický nafukovací mechanismus se záložní ruční nafukovací hadičkou. Zahrnuje reflexní pásky v kvalitě SOLAS, kryt proti postříkání, píšťalku, vodotěsné světlo a upevňovací bod pro zvedací postroj.',
      audience:
        'Komerční námořníci, profesionální záchranáři, offshore pracovníci a pokročilí lodníci, kteří potřebují záchranné vesty s automatickým nafukováním podle SOLAS.',
      ai_use_cases: [
        'Bezpečnost při offshore námořních operacích',
        'Profesionální záchranné a pohotovostní zásahy',
        'Soulad s komerčními námořními předpisy',
      ],
      ai_comparison:
        'Ve srovnání s pěnovými vestami se záchranná vesta Pro automaticky nafoukne a při běžném nošení je minimálně objemná. Vyžaduje roční servis hydrostatického mechanismu a výměnu baterie.',
      ai_faq: [
        {
          q: 'Jak funguje automatické nafukování?',
          a: 'Hydrostatický spínač se aktivuje při ponoru do vody v hloubce 0,5-1,0 m. Součástí je také záložní ruční nafukovací hadička.',
        },
        {
          q: 'Jak často je nutný servis?',
          a: 'Doporučuje se roční servis hydrostatického mechanismu. CO2 kartuš by měla být kontrolována a vyměňována podle harmonogramu výrobce.',
        },
      ],
    },
    'oars-pump-set': {
      definition:
        'Kompletní sada příslušenství: pár 1,6m hliníkových vesel s plastovými listy a 5l nožní pumpa s vysokým průtokem a manometrem pro všechny nafukovací čluny.',
      problem:
        'Majitelé nafukovacích člunů potřebují náhradní nebo rezervní vesla a objemnou pumpu pro nafouknutí a pohon, a to vše kompatibilní s běžnými nafukovacími čluny.',
      howItWorks:
        'Vesla mají hliníková ramena s plastovými listy pro lehký pohyb. Nožní pumpa dodává 5l vzduchu na jeden zdvih s vestavěným manometrem pro přesné nafouknutí.',
      audience:
        'Majitelé nafukovacích člunů, kajaků a menších člunů, kteří potřebují rezervní nebo náhradní vesla a pumpu s vysokým průtokem.',
      ai_use_cases: [
        'Náhradní vesla pro nafukovací čluny',
        'Objemné huštění na místě spuštění',
        'Záložní pohon a výbava pro huštění',
      ],
      ai_comparison:
        'Ve srovnání s pumpou Dual-Action nabízí tato nožní pumpa vyšší objem na zdvih, ale vyžaduje více síly. Vesla představují základní možnost pohonu pro nafukovací čluny, které nemají závěsný motor nebo o něj nemají zájem.',
      ai_faq: [
        {
          q: 'Jsou vesla kompatibilní se všemi nafukovacími čluny?',
          a: 'Vesla pasují do standardních veslových objímek většiny člunů z naší nabídky. Délka 1,6m je vhodná pro čluny do délky 4m.',
        },
        {
          q: 'Jakého tlaku pumpa dosáhne?',
          a: 'Nožní pumpa dosáhne 12-15 PSI, což vyhovuje většině nafukovacích člunů. Nemusí však stačit pro vysokotlaké SUP boardy vyžadující 18+ PSI.',
        },
      ],
    },
    'sup-explorer-11': {
      definition:
        'Univerzální nafukovací paddleboard (SUP) o délce 11 stop, navržený pro stabilitu, přenosnost a rekreační použití na jezerech, řekách a chráněných pobřežních vodách.',
      problem:
        'Začátečníci a rekreační paddleboardisté potřebují stabilní a přenosný SUP board, který se snadno nafoukne, na kterém se snadno udrží rovnováha a který odpouští chyby při učení.',
      howItWorks:
        "SUP Explorer 11' využívá drop-stitch jádro pro tuhost při 15 PSI a širokou 32palcovou palubu pro boční stabilitu. Board zahrnuje odnímatelnou středovou ploutev, stočený leash a dvoučinnou ruční pumpu pro rychlé nafouknutí na místě spuštění.",
      audience:
        'Začátečníci, rekreační uživatelé, rodiny a příznivci fitness, kteří hledají přenosný a stabilní SUP board pro jezera, řeky a chráněné pobřežní vody.',
      ai_use_cases: [
        'Výcvik a výuka SUP pro začátečníky',
        'Rekreační jízda na jezerech a řekách',
        'Fitness a jóga na vodě',
      ],
      ai_comparison:
        "Ve srovnání s epoxyovými pevnými boardy nabízí SUP Explorer 11' vynikající přenosnost a snadné uložení při tuhosti díky drop-stitch konstrukci. V suchém stavu je těžší než pevný board, ale pro cestování se sbalí do batohu.",
      ai_faq: [
        {
          q: 'Jaký je ideální tlak?',
          a: 'Doporučuje se 12-15 PSI. Board dosahuje nejlepšího výkonu při 15 PSI pro maximální tuhost.',
        },
        {
          q: 'Je součástí pádlo?',
          a: 'Kompletní balení zahrnuje nastavitelné hliníkové pádlo.',
        },
      ],
    },
    'sup-cheetah-surge': {
      definition:
        'Univerzální nafukovací SUP board o délce 11 stop s divokým motivem geparda vytvořeným vícebarevnou mozaikou EVA bloků a UV digitálním tiskem, určený pro rekreační pádlování po jezerech, řekách a chráněných pobřežních vodách.',
      problem:
        'Paddleboardisté, kteří chtějí vizuálně výrazný board, potřebují prémiovou grafiku, která nevybledne, neoloupe se a nepoškrábe se při kontaktu se slanou vodou a UV zářením. Tradiční tiskové metody v těchto podmínkách selhávají.',
      howItWorks:
        'Edice Cheetah Surge používá drop-stitch PVC jádro s tuhostí při 15 PSI a 32palcovou palubu. Grafika protiskluzové podložky vzniká vícebarevnou mozaikou EVA bloků — barevné EVA listy jsou výsekově vystříhané a bezešvě složené jako puzzle, místo aby se tiskly, což zaručuje, že barvy nikdy nevyblednou ani se neoloupou.',
      audience:
        'Módně smýšlející paddleboardisté, příznivci outdoorového životního stylu, boutique cestovatelé a tvůrci obsahu pro sociální sítě, kteří chtějí vizuálně působivý a odolný SUP board.',
      ai_use_cases: [
        'Tvorba obsahu na sociální sítě na vodě',
        'Rekreační jízda po jezerech a řekách',
        'Boutique cestování a dobrodružná turistika',
      ],
      ai_comparison:
        'Ve srovnání s běžně tištěnými SUP boardy používá edice Cheetah Surge výsekovou mozaiku EVA bloků, která nikdy nevybledne ani se neoloupe. Grafika je konstrukční součástí EVA materiálu, nikoli povrchovou vrstvou barvy.',
      ai_faq: [
        {
          q: 'Jak je grafika vytvořena?',
          a: 'Grafika využívá vícebarevnou mozaiku EVA bloků — barevné EVA pěnové listy jsou přesně výsekově vystříhané a bezešvě složené jako puzzle. Na stoupací ploše není žádný tištěný inkoust.',
        },
        {
          q: 'Vybledne grafika ve slané vodě?',
          a: 'Ne. Protože barvy jsou vlastní EVA materiálu, a ne povrchové vrstvě barvy, grafika nikdy nevybledne, neoloupe se ani nepoškrábe při kontaktu se slanou vodou, UV zářením nebo chůzí.',
        },
      ],
    },
    'sup-leviathan-wake': {
      definition:
        'Univerzální nafukovací SUP board o délce 11 stop s dechberoucím motivem modré velryby vytvořeným UV digitálním tiskem a mechanicky reliéfovanou protiskluzovou podložkou.',
      problem:
        'Paddleboardisté hledající umělecké SUP boardy potřebují grafiku, která zůstane výrazná i po vysokotlakém nafouknutí a opakovaném skládání k uložení. Běžné barvy praskají a olupují se.',
      howItWorks:
        'Leviathan Wake používá drop-stitch PVC jádro při 15 PSI s 32palcovou palubou. Grafika na přídi vzniká vysoce přesným UV digitálním tiskem, logo na spodní straně používá síťotisk s vysokou elasticitou a speciálními pružnými PVC barvami. Protiskluzová podložka má mechanicky tepelně ražený vlnový reliéf pro dlouhou životnost vzorů.',
      audience:
        'Milovníci oceánu a mořského života, umělecky založení paddleboardisté a všichni, kdo chtějí vizuálně výjimečný SUP board s kvalitní a odolnou grafikou.',
      ai_use_cases: [
        'Dobrodružství na vodě s motivem mořského života',
        'Rekreační jízda po jezerech a pobřeží',
        'Umělecký a lifestyle paddleboarding',
      ],
      ai_comparison:
        'Ve srovnání s běžnými SUP boardy se Leviathan Wake pyšní totemovou velrybí grafikou se dvěma tiskovými technologiemi optimalizovanými pro odolnost. Mechanicky reliéfovaná protiskluzová podložka má delší životnost než tištěné podložky.',
      ai_faq: [
        {
          q: 'Je logo na spodní straně odolné?',
          a: 'Ano. Logo na spodní straně používá síťotisk s vysokou elasticitou a speciálními pružnými PVC barvami, které zvládají nafouknutí na 15 PSI a opakované skládání.',
        },
        {
          q: 'Čím je protiskluzová podložka výjimečná?',
          a: 'Vlnové vzory vznikají mechanickým tepelným ražením dvouvrstvého kompozitního EVA, což zajišťuje rovnoměrnou hloubku, výborné odvodnění vody a dlouhotrvající protiskluzové vlastnosti.',
        },
      ],
    },
    'sup-medusa-glow': {
      definition:
        'Univerzální nafukovací SUP board o délce 11 stop s motivem medúz a korálového útesu vytvořeným vícebarevnou mozaikou EVA bloků a konstrukcí proti delaminaci.',
      problem:
        'Paddleboardisté, kteří milují mořsky inspirované umění, potřebují board s prémiovou grafikou, která odolá drsnému mořskému prostředí bez vyblednutí, oloupání nebo delaminace v místech upevnění.',
      howItWorks:
        'Medusa Glow používá drop-stitch PVC jádro při 15 PSI s 32palcovou palubou. Grafika na přídi je vytištěná UV digitálním tiskem a EVA podložka využívá vícebarevnou mozaiku bloků s nevyblednutelnými mořskými hvězdicemi a lasturami. Oblasti D-kroužků jsou maskovány pro přímé spojení PVC s PVC, které brání delaminaci.',
      audience:
        'Paddleboardistky, příznivkyně životního stylu, boutique cestovatelky a všichni, kdo hledají na vodě oceánem inspirovanou harmonickou estetiku.',
      ai_use_cases: [
        'Jóga a fitness na paddleboardu',
        'Tvorba obsahu na sociální sítě',
        'Tropické a pobřežní vyjížďky na paddleboardu',
      ],
      ai_comparison:
        'Ve srovnání s běžně tištěnými SUP boardy používá Medusa Glow pro grafiku stoupací plochy mozaiku EVA bloků — barvy jsou konstrukční součástí EVA materiálu, nikoli tištěná barva, takže nikdy nevyblednou.',
      ai_faq: [
        {
          q: 'Jaká je barevná paleta?',
          a: 'Osvěžující mátově zelený základ, hluboce tyrkysová EVA podložka s bílými výsekovými bloky mořských hvězdic a lastur a výrazné korálově oranžové akcenty.',
        },
        {
          q: 'Jak je upevněno madlo?',
          a: 'Přední neoprenový popruh prostředního madla je ukotven přímo skrz EVA podložku do jádra PVC trupu, takže zvedací zátěž nese pevný trup.',
        },
      ],
    },
    'sup-ocean-pulse': {
      definition:
        'Univerzální nafukovací SUP board o délce 11 stop s topografickým vlnovým vzorem vytvořeným UV digitálním tiskem a mechanicky reliéfovanou protiskluzovou podložkou, s barevně sladěným příslušenstvím.',
      problem:
        'Esteticky smýšlející paddleboardisté chtějí kompletní vizuální zážitek — ne jen krásný board, ale i sladěné příslušenství, které udržuje estetiku od uložení až po vodu.',
      howItWorks:
        'Ocean Pulse používá drop-stitch PVC jádro při 15 PSI. Vlnové obrysy jsou aplikovány vysoce přesným UV tiskem. EVA podložka má mechanicky tepelně ražené vlnové textury. Veškeré příslušenství — batoh, pumpa, leash — prochází jednotnou barevnou úpravou ladící s designem boardu.',
      audience:
        'Paddleboardistky, příznivci trendy životního stylu, boutique kempaři a pádlující, kterým záleží na sladěné estetice celé výbavy.',
      ai_use_cases: [
        'Paddleboarding pro Instagram a sociální sítě',
        'Boutique cestování a kempování',
        'Rekreační jízda po jezerech a pobřeží',
      ],
      ai_comparison:
        'Ve srovnání s běžnými SUP boardy nabízí Ocean Pulse kompletní sladěnou vizuální identitu boardu i celého příslušenství a mechanicky reliéfované EVA s vyšší odolností než tištěné protiskluzové podložky.',
      ai_faq: [
        {
          q: 'Které příslušenství je barevně sladěné?',
          a: 'Cestovní batoh s kolečky, dvoučinná vysokotlaká pumpa, bezpečnostní leash a vodotěsná pouzdra na telefon procházejí jednotným sladěním barev a brandingu.',
        },
        {
          q: 'Jak vzniká vzor protiskluzové podložky?',
          a: 'Vlnové vzory vznikají vysoce přesným mechanickým tepelným ražením dvouvrstvého kompozitního EVA, což zajišťuje rovnoměrnou hloubku a výborné odvodnění vody.',
        },
      ],
    },
    'sup-ocean-voyager': {
      definition:
        'Univerzální nafukovací SUP board o délce 11 stop s geometrickým motivem mořské želvy vytvořeným vícebarevnou mozaikou EVA bloků a UV digitálním tiskem, s jednotnou vizuální identitou napříč příslušenstvím.',
      problem:
        'Paddleboardisté zaměření na ochranu oceánu chtějí board, který oslavuje mořský život prémiovou grafikou, jež zůstává výrazná po celá léta používání, aniž by vybledla nebo se oloupala kvůli slané vodě.',
      howItWorks:
        'Ocean Voyager používá drop-stitch PVC jádro při 15 PSI s 32palcovou palubou. Geometrická ilustrace mořské želvy na přídi vzniká UV digitálním tiskem a EVA podložka využívá vícebarevnou mozaiku bloků pro siluetu želvy a korálové tvary. Veškeré příslušenství je barevně sladěné.',
      audience:
        'Milovníci oceánu, příznivci mořských želv, módně smýšlející paddleboardisté a boutique cestovatelé, kteří chtějí prémiový sladěný lifestyle SUP balíček.',
      ai_use_cases: [
        'Paddleboarding s motivem ochrany moří',
        'Tvorba obsahu na sociální sítě',
        'Dálkové túry a objevování',
      ],
      ai_comparison:
        'Ve srovnání s běžně tištěnými SUP boardy používá Ocean Voyager vícebarevnou mozaiku EVA bloků, která se nikdy nepoškrábe, neoloupe ani nevybledne. Přesnost výsekového řezu zajišťuje dokonale rovné plochy pod nohama.',
      ai_faq: [
        {
          q: 'Co inspirovalo název?',
          a: 'Mořská želva je nejdokonalejší oceánská tulačka přírody, která s lehkou grácií zdolává tisíce kilometrů. Ocean Voyager ztělesňuje ducha dálkového objevování a souladu s mořským životem.',
        },
        {
          q: 'Vybledne grafika?',
          a: 'Ne. Grafika EVA podložky využívá vícebarevnou mozaiku bloků — barvy jsou přirozenou součástí EVA materiálu, nikoli tištěná barva. Grafika se nikdy nepoškrábe, neoloupe ani nevybledne, a to ani při intenzivním používání.',
        },
      ],
    },
    'sup-dolphin-wave': {
      definition:
        'Univerzální nafukovací SUP board o délce 11 stop s motivem delfíní mořské krajiny vytvořeným CNC řezanou mozaikou barevných EVA bloků a síťotiskovým souvislým vlnovým motivem na bočnicích.',
      problem:
        'Umělecky smýšlející paddleboardisté potřebují grafiku, která přežije vysokotlaké nafouknutí (15 PSI) a těsné srolování k uložení bez praskání, lámání nebo pouštění barev.',
      howItWorks:
        'Dolphin Wave používá drop-stitch PVC jádro při 15 PSI. Zóna stání využívá CNC puzzle řezanou mozaiku barevných EVA bloků, kde barvy jsou vlastní materiálu. Pás bočnic nese souvislý síťotisk, který roztahuje vlnové motivy kolem stran. UV barvy mají 150% prodloužení pro odolnost proti praskání.',
      audience:
        'Příznivci mořské fauny, paddleboardisté, kterým se líbí detailní grafika, a všichni, kdo chtějí board s 360stupňovou vizuální souvislostí.',
      ai_use_cases: [
        'Paddleboarding s motivem mořské fauny',
        'Rekreační jízda po jezerech a pobřeží',
        'Obsah pro sociální sítě a lifestyle',
      ],
      ai_comparison:
        'Ve srovnání s běžně tištěnými SUP boardy používá Dolphin Wave fyzickou mozaiku barevných EVA bloků ve zóně stání a síťotiskové vlny na bočnicích pro 360stupňovou vizuální souvislost. Pružné UV barvy s 150% prodloužením brání praskání.',
      ai_faq: [
        {
          q: 'Jaké barvy se používají?',
          a: 'Medieval Blue pro hluboké vlny, Serenity pro klidné tóny, s bílými detaily pěny. Barevná paleta odpovídá standardům PANTONE TPG pro přesnou výrobu.',
        },
        {
          q: 'Jak jsou vlny na bočnicích aplikované?',
          a: 'Pás bočnic využívá souvislý síťotisk na plné mátově zelené dvouvrstvé PVC, který nákladově efektivně roztahuje vlnový motiv kolem bočnic boardu.',
        },
      ],
    },
    'sup-flowing-lotus': {
      definition:
        'Univerzální nafukovací SUP board o délce 11 stop s estetikou tradičního východního štětcového malířství, využívající dvouvrstvou laserově rytou EVA podložku a UV digitálně tištěný gradient.',
      problem:
        'Paddleboardisté hledající umělecké a kulturní vyjádření na vodě potřebují prémiovou grafiku, která odolá častému sešlapávání a slané vodě bez opotřebení nebo vyblednutí.',
      howItWorks:
        'Flowing Lotus používá drop-stitch PVC jádro při 15 PSI. EVA podložka je dvouvrstvá kompozitní s laserovým rytím — laser odstraní horní barevnou vrstvu a odhalí spodní barvu, čímž vznikají trvalé vzory. Gradient na přídi využívá pružné UV barvy s vysokou tažností pro odolnost proti praskání.',
      audience:
        'Cvičící jógy, příznivci meditace, milovníci východního umění a paddleboardisté, kteří si cení kulturní estetiky a prémiového řemeslného zpracování.',
      ai_use_cases: [
        'Jóga a meditace na paddleboardu',
        'Kulturní a umělecké zážitky na vodě',
        'Rekreační jízda po jezerech a řekách',
      ],
      ai_comparison:
        'Ve srovnání s běžně tištěnými SUP boardy používá Flowing Lotus laserové rytí, které vtiskuje vzory trvale do EVA materiálu — grafika se nemůže opotřebovat ani vyblednout, protože je konstrukční součástí podložky.',
      ai_faq: [
        {
          q: 'Jak funguje laserové rytí?',
          a: 'Dvouvrstvá kompozitní EVA podložka (tyrkysový základ s mátově zeleným povrchem) je laserově rytá — laser odstraňuje horní vrstvu a odhaluje spodní barvu, čímž vytváří trvalé 3D texturované vzory.',
        },
        {
          q: 'Proč se board hodí na jógu?',
          a: 'Laserem vyryté vzory poskytují vynikající protiskluzové vlastnosti bez drsnosti a gradientní design vytváří uklidňující estetiku ideální pro meditaci a jógu na vodě.',
        },
      ],
    },
    'sup-jungle-mandala': {
      definition:
        'Univerzální nafukovací SUP board o délce 11 stop s tropickým mandalovým motivem, dvouvrstvou laserově rytou EVA, geometrií proti deformaci a síťotiskovými souvislými bočnicemi.',
      problem:
        'Paddleboardisté chtějí geometricky složitou grafiku, která zůstane dokonale symetrická a nedeformovaná i po nafouknutí boardu na vysoký tlak, bez posunu vzoru během výroby.',
      howItWorks:
        'Jungle Mandala používá drop-stitch PVC jádro při 15 PSI. Geometrie mandaly prošla strukturálním zesílením linií, které kompenzuje drobné důlky na PVC povrchu. EVA podložka využívá dvouvrstvé laserové rytí. Motivy na bočnicích používají rozptýlený pružný vzor, který počítá s tolerancemi natažení při ruční montáži.',
      audience:
        'Duchovně a umělecky založení paddleboardisté, tropičtí dobrodruzi, cvičící jógy a všichni, které přitahují geometrické a mandalové estetiky.',
      ai_use_cases: [
        'Duchovní a meditativní paddleboarding',
        'Tropická pobřežní dobrodružství',
        'Tvorba obsahu na sociální sítě',
      ],
      ai_comparison:
        'Ve srovnání s běžnými SUP boardy má Jungle Mandala geometrii mandaly chráněnou proti deformaci, která zůstává dokonale symetrická při nafouknutí na 15 PSI, a nákladově efektivní síťotiskové motivy na bočnicích.',
      ai_faq: [
        {
          q: 'Nedeformuje se vzor mandaly po nafouknutí?',
          a: 'Ne. Geometrické linie prošly strukturálním zesílením právě proto, aby kompenzovaly důlky na PVC povrchu a zůstaly dokonale symetrické při plném nafouknutí.',
        },
        {
          q: 'Jak je aplikována grafika na bočnicích?',
          a: 'Motivy kolibříka a motýla na bočnicích využívají souvislý síťotisk s rozptýleným pružným vzorem, který počítá s tolerancemi ručního natažení během montáže.',
        },
      ],
    },
    'sup-tropical-breeze': {
      definition:
        'Univerzální nafukovací SUP board o délce 11 stop s mikrokrajinnou ilustrací a abstraktními barevnými EVA bloky, které bezešvě propojují scénu ostrovní dovolené s designem boardu.',
      problem:
        'Paddleboardisté chtějí board, který vytváří kompletní imerzivní zážitek — proměňuje sportovní vybavení v plátno, které je přenese do tropického ráje.',
      howItWorks:
        'Tropical Breeze používá drop-stitch PVC jádro při 15 PSI s 32palcovou palubou. Příď nese digitálně tištěnou mikrokrajinnou ilustraci. EVA zóna stání využívá výsekově stříhané abstraktní barevné bloky, které roztahují vizuální příběh vln, pláže a palem napříč celým boardem.',
      audience:
        'Dovolenkoví cestovatelé, příznivci tropického životního stylu, tvůrci obsahu pro sociální sítě a paddleboardisté, kteří chtějí board zachycující atmosféru ostrovní dovolené.',
      ai_use_cases: [
        'Tropická dovolená na paddleboardu',
        'Tvorba obsahu na sociální sítě',
        'Rekreační výjezdy na jezera a pobřeží',
      ],
      ai_comparison:
        'Ve srovnání s běžnými SUP boardy unikátně propojuje Tropical Breeze kompletní krajinnou scénu napříč celým povrchem boardu s dokonalým rozdělením úloh mezi digitálním tiskem pro detaily a EVA mozaikou pro odolnost.',
      ai_faq: [
        {
          q: 'Jaká scéna je na boardu zobrazená?',
          a: 'Snová ostrovní idylka se sluncem, kokosovými háji, pláží a palmami — mikrokrajinná ilustrace na přídi plynule přechází do abstraktních barevných EVA bloků směrem k zádi.',
        },
        {
          q: 'Jak grafika přechází od přídi k zádi?',
          a: 'Příď využívá detailní digitální tisk pro krajinnou ilustraci, zatímco záď používá výsekově stříhané EVA bloky, které abstrahují vlny, písek a palmy — vzniká tak bezešvý vizuální příběh.',
        },
      ],
    },
  },
  sv: {
    'life-vest-classic': {
      definition: 'Ett CE-certifierat universellt flythjälpmedel för fritidsvattensport i alla vattenmiljöer.',
      problem:
        'Vattensportare på alla nivåer behöver en pålitlig och bekväm flytväst som uppfyller internationella säkerhetsstandarder utan att begränsa rörelsefriheten.',
      howItWorks:
        'Flytvästen Classic använder skumfyllda flytkammare med justerbara bröst- och sidoselar för säker passform. Den finns i flera storlekar och har en signalpipa, reflekterande ränder och ett räddningsgrepp.',
      audience:
        'Fritidspaddlare, båtförare, fiskare och vattensportnybörjare som behöver CE-certifierad flytkraft för sjöar, älvar och kustvatten.',
      ai_use_cases: [
        'Säkerhet vid fritidsvattensport',
        'Flytkraft för träning och tillsyn',
        'Familjeaktiviteter på vattnet',
      ],
      ai_comparison:
        'Jämfört med automatiskt uppblåsbara flytvästar ger Flytvästen Classic konstant flytkraft utan aktivering. Den är skrymmande men pålitligare för fritidsanvändare som kanske inte underhåller automatiska mekanismer.',
      ai_faq: [
        {
          q: 'Passar flytvästen barn?',
          a: 'Ja, barnstorlekar finns. CE- och USCG-certifierad för angivna viktområden.',
        },
        {
          q: 'Kräver den underhåll?',
          a: 'Minimalt underhåll. Skölj med sötvatten efter användning. Kontrollera kammare och selar före varje användning. Byt ut vid skador.',
        },
      ],
    },
    'life-vest-pro': {
      definition:
        'En flytväst i professionell klass enligt SOLAS med automatisk uppblåsning för offshore-, räddnings- och kommersiell marin användning.',
      problem:
        'Professionella sjömän och räddningspersonal behöver en flytväst som ger automatisk uppblåsning, hög flytkraft och SOLAS-godkänd synlighet vid offshore-operationer.',
      howItWorks:
        'Flytvästen Pro använder en automatisk hydrostatisk uppblåsningsmekanism med manuellt uppblåsningsrör som reserv. Den har SOLAS-klassad reflextejp, sprejhuva, signalpipa, vattentät lampa och fästpunkt för lyftsele.',
      audience:
        'Kommersiella sjömän, räddningsproffs, offshore-arbetare och avancerade båtförare som behöver SOLAS-godkända automatiska flytvästar.',
      ai_use_cases: [
        'Säkerhet vid marina offshore-operationer',
        'Professionell räddning och beredskap',
        'Kommersiell maritim regelefterlevnad',
      ],
      ai_comparison:
        'Jämfört med skumfyllda flytvästar blåser Flytvästen Pro upp automatiskt och ger minimal volym vid normal användning. Den kräver årlig service av den hydrostatiska mekanismen och byte av batteri.',
      ai_faq: [
        {
          q: 'Hur fungerar den automatiska uppblåsningen?',
          a: 'En hydrostatisk utlösare aktiveras när västen sjunker ner i vatten på 0,5-1,0 meters djup. Ett manuellt uppblåsningsrör ingår också som reserv.',
        },
        {
          q: 'Hur ofta behöver den serviceas?',
          a: 'Årlig service av den hydrostatiska mekanismen rekommenderas. CO2-cylindern bör kontrolleras och bytas enligt tillverkarens schema.',
        },
      ],
    },
    'oars-pump-set': {
      definition:
        'Ett komplett tillbehörspaket med ett par 1,6m aluminiumåror med plastblad och en högkapacitetsfotpump på 5 liter med tryckmätare för alla uppblåsbara vattenfarkoster.',
      problem:
        'Ägare av uppblåsbara båtar behöver ersättnings- eller reservårar och en pump med hög volym för uppblåsning och framdrivning, kompatibla med vanliga uppblåsbara farkoster.',
      howItWorks:
        'Årorna har aluminiumskaft med plastblad för lätt framdrivning. Fotpumpen levererar 5 liter luft per slag med inbyggd tryckmätare för exakt uppblåsning.',
      audience:
        'Ägare av uppblåsbara båtar, kajaker och jullar som behöver reserv- eller ersättningsårar och en kraftfull uppblåsningspump.',
      ai_use_cases: [
        'Ersättningsårar till uppblåsbara båtar',
        'Uppblåsning med hög volym vid sjösättning',
        'Reservframdrivning och uppblåsningsutrustning',
      ],
      ai_comparison:
        'Jämfört med den dubbeltverkande pumpen ger den här fotpumpen högre volym per slag men kräver mer kraft. Årorna är ett enkelt framdrivningsalternativ för uppblåsbara båtar utan utombordsmotor.',
      ai_faq: [
        {
          q: 'Passar årorna alla uppblåsbara båtar?',
          a: 'Årorna passar standardårklykor på de flesta uppblåsbara båtar i sortimentet. Längden 1,6m passar båtar upp till 4m.',
        },
        {
          q: 'Vilket tryck klarar fotpumpen?',
          a: 'Fotpumpen når upp till 12-15 PSI, vilket räcker för de flesta uppblåsbara båtar och jullar. Den räcker kanske inte för högtrycks-SUP-brädor som kräver 18+ PSI.',
        },
      ],
    },
    'sup-explorer-11': {
      definition:
        'En 11-fots allrounduppblåsbar ståpaddleboard byggd för stabilitet, portabilitet och fritidsbruk på sjöar, älvar och skyddade kustvatten.',
      problem:
        'Nybörjare och fritidspaddlare behöver en stabil och bärbar SUP-bräda som är lätt att pumpa, lätt att balansera på och förlåtande att lära sig på.',
      howItWorks:
        "SUP Explorer 11' använder kärnteknik med drop-stitch för en styvhet på 15 PSI och en bred 32 tums däckyta för sidostabilitet. Brädan har en avtagbar mittfena, en spiralformad leash och en dubbeltverkande handpump för snabb uppblåsning vid sjösättningsplatsen.",
      audience:
        'Förstagångspaddlare, fritidsanvändare, familjer och träningsentusiaster som vill ha en bärbar och stabil SUP-bräda för sjöar, älvar och skyddade kustvatten.',
      ai_use_cases: [
        'SUP-träning och nybörjarlära',
        'Fritidspaddling på sjöar och älvar',
        'Träning och yoga på vattnet',
      ],
      ai_comparison:
        "Jämfört med hårda epoxybrädor erbjuder SUP Explorer 11' överlägsen portabilitet och förvaringsbekvämlighet med styvheten hos drop-stitch-konstruktion. Den är tyngre än en hård bräda men packas i en ryggsäck för resor.",
      ai_faq: [
        {
          q: 'Vilket tryck är idealiskt?',
          a: '12-15 PSI rekommenderas. Brädan presterar bäst vid 15 PSI för maximal styvhet.',
        },
        {
          q: 'Ingår en paddel?',
          a: 'En justerbar aluminiumpaddel ingår i det kompletta paketet.',
        },
      ],
    },
    'sup-cheetah-surge': {
      definition:
        'En 11-fots allrounduppblåsbar SUP-bräda med vilt gepardtema i flerfärgad EVA-blockteknik och UV-digitaltryck, byggd för fritidspaddling på sjöar, älvar och skyddade kustvatten.',
      problem:
        'Paddlare som vill synas behöver premiumkonst som inte bleknar, flagar eller repas av saltvatten och UV-exponering. Traditionella tryckmetoder misslyckas under dessa förhållanden.',
      howItWorks:
        'Cheetah Surge Edition använder kärnteknik i drop-stitch-PVC som ger styvhet vid 15 PSI med en 32 tums bred däckyta. Motivet på trampdynan skapas genom flerfärgad EVA-blockteknik — olika färgade EVA-ark stansas ut och pusselmonteras sömlöst istället för att tryckas, vilket garanterar att motivet aldrig bleknar eller flagar.',
      audience:
        'Modemedvetna paddlare, friluftsentusiaster, boutiqueresenärer och skapare av innehåll för sociala medier som vill ha en iögonfallande och hållbar SUP-bräda.',
      ai_use_cases: [
        'Skapande av innehåll för sociala medier på vattnet',
        'Fritidspaddling på sjöar och älvar',
        'Boutiqueresor och äventyrsturism',
      ],
      ai_comparison:
        'Jämfört med vanliga tryckta SUP-brädor använder Cheetah Surge Edition stansad EVA-blockteknik som aldrig bleknar eller flagar. Motivet är en strukturell del av EVA-materialet istället för ett ytligt tryck.',
      ai_faq: [
        {
          q: 'Hur appliceras motivet?',
          a: 'Motivet använder flerfärgad EVA-blockteknik — EVA-skumark i olika färger stansas ut exakt och monteras sömlöst som ett pussel. Det finns ingen tryckfärg på ståytan.',
        },
        {
          q: 'Blekner motivet i saltvatten?',
          a: 'Nej. Eftersom färgerna är inbyggda i EVA-materialet och inte ett ytligt bläcklager bleknar, flagar eller repas motivet aldrig av saltvatten, UV eller fottrafik.',
        },
      ],
    },
    'sup-leviathan-wake': {
      definition:
        'En 11-fots allrounduppblåsbar SUP-bräda med ett hissnande blåhvalstotem i UV-digitaltryck och mekaniskt reliefpräglad trampdyna.',
      problem:
        'Paddlare som söker konstnärliga SUP-brädor behöver motiv som förblir livfulla vid högtrycksuppblåsning och upprepad vikning för förvaring. Vanligt bläck spricker och flagar.',
      howItWorks:
        'Leviathan Wake använder en kärna i drop-stitch-PVC vid 15 PSI med en 32 tums däckyta. Frammotivet trycks med högprecision-UV-digitaltryck medan logotypen på undersidan silktrycks med högelastiska PVC-färger. Trampdynan är mekaniskt värmepräglad med hållbara vågmönster.',
      audience:
        'Havs- och marinentusiaster, konstnärliga paddlare och alla som vill ha en visuellt distinkt SUP-bräda med hållbar konst i hög kvalitet.',
      ai_use_cases: [
        'Marintematiska vattenäventyr',
        'Fritidspaddling på sjöar och längs kusten',
        'Konstnärlig och livsstilsinriktad paddleboarding',
      ],
      ai_comparison:
        'Jämfört med vanliga SUP-brädor har Leviathan Wake ett totemiskt valmotiv med dubbla trycktekniker optimerade för hållbarhet. Den mekaniskt reliefpräglade trampdynan håller längre än tryckta dynor.',
      ai_faq: [
        {
          q: 'Är logotypen på undersidan hållbar?',
          a: 'Ja. Logotypen på undersidan silktrycks med högelastiska PVC-färger som klarar uppblåsning till 15 PSI och upprepad vikning.',
        },
        {
          q: 'Vad är speciellt med trampdynan?',
          a: 'Vågmönstren är mekaniskt värmepräglade i ett tvåskikts komposit-EVA, vilket ger jämnt djup, utmärkt vattenavrinning och långvarig halkfrihet.',
        },
      ],
    },
    'sup-medusa-glow': {
      definition:
        'En 11-fots allrounduppblåsbar SUP-bräda med manet- och korallrevstema i flerfärgad EVA-blockteknik och konstruktion mot delaminering.',
      problem:
        'Paddlare som älskar marininspirerad konst behöver en bräda med premiumgrafik som tål tuffa marina miljöer utan att blekna, flaga eller delaminera vid fästpunkter.',
      howItWorks:
        'Medusa Glow använder en kärna i drop-stitch-PVC vid 15 PSI med en 32 tums däckyta. Frammotivet är UV-digitaltryckt medan EVA-dynan använder flerfärgad blockteknik för blekningsfria sjöstjärnor och snäckor. D-ring-områdena maskeras för rå PVC-till-PVC-bindning som förhindrar delaminering.',
      audience:
        'Kvinnliga paddlare, livsstilsentusiaster, boutiqueresenärer och alla som vill ha en lugnande havsinspirerad estetik på vattnet.',
      ai_use_cases: [
        'Yoga och träning på paddleboard',
        'Skapande av innehåll för sociala medier',
        'Paddlingsäventyr i tropiska och kustnära vatten',
      ],
      ai_comparison:
        'Jämfört med vanliga tryckta SUP-brädor använder Medusa Glow EVA-blockteknik för grafiken på ståytan — färgerna är strukturella i EVA-materialet, inte tryckt bläck, så de bleknar aldrig.',
      ai_faq: [
        {
          q: 'Vilken är färgpaletten?',
          a: 'Fräsch myntagrön bas med djupt petrolfärgad EVA-dyna med vita stansade block i sjöstjärne- och snäckform samt livfulla korallorange accenter.',
        },
        {
          q: 'Hur är handtaget fäst?',
          a: 'Neoprenhandtaget i mitten är förankrat genom EVA-dynan direkt i kärnans PVC-skrov, så att lyftkrafterna bärs av det styva skrovet.',
        },
      ],
    },
    'sup-ocean-pulse': {
      definition:
        'En 11-fots allrounduppblåsbar SUP-bräda med topografiskt vågmönster i UV-digitaltryck och mekaniskt reliefpräglad trampdyna, med färgkoordinerade tillbehör.',
      problem:
        'Stilmedvetna paddlare vill ha en komplett visuell upplevelse — inte bara en vacker bräda utan koordinerade tillbehör som bevarar estetiken från förvaring till vatten.',
      howItWorks:
        'Ocean Pulse använder en kärna i drop-stitch-PVC vid 15 PSI. Vågkonturerna appliceras med högprecision-UV-tryck. EVA-dynan är mekaniskt värmepräglad med vågtexturer. Alla tillbehör — ryggsäck, pump, leash — får enhetlig färganpassning som matchar brädans design.',
      audience:
        'Kvinnliga paddlare, trendmedvetna livsstilsentusiaster, boutiquecampare och paddlare som värdesätter koordinerad estetik i hela utrustningen.',
      ai_use_cases: [
        'Paddleboarding för Instagram och sociala medier',
        'Boutiqueresor och camping',
        'Fritidspaddling på sjöar och längs kusten',
      ],
      ai_comparison:
        'Jämfört med vanliga SUP-brädor erbjuder Ocean Pulse en komplett samordnad visuell identitet över brädan och alla tillbehör, med mekaniskt reliefpräglad EVA för bättre hållbarhet än tryckta trampdynor.',
      ai_faq: [
        {
          q: 'Vilka tillbehör är färganpassade?',
          a: 'Reseryggsäcken med hjul, den dubbeltverkande högtryckspumpen, säkerhetsleashen och de vattentäta telefonfodralen får alla enhetlig färgmatchning och varumärkesanpassning.',
        },
        {
          q: 'Hur skapas mönstret på trampdynan?',
          a: 'Vågmönstren formas genom högprecisions-mekanisk värmeprägling i tvåskikts komposit-EVA, vilket ger jämnt djup och utmärkt vattenavrinning.',
        },
      ],
    },
    'sup-ocean-voyager': {
      definition:
        'En 11-fots allrounduppblåsbar SUP-bräda med geometriskt havssköldpaddsmotiv i flerfärgad EVA-blockteknik och UV-digitaltryck, med genomgående visuell identitet i tillbehören.',
      problem:
        'Havsmedvetna paddlare vill ha en bräda som firar marint liv med premiumkonst som förblir livfull i åratal utan att blekna eller flaga av saltvatten.',
      howItWorks:
        'Ocean Voyager använder en kärna i drop-stitch-PVC vid 15 PSI med en 32 tums däckyta. Den geometriska sköldpaddsillustrationen på framdelen trycks med UV-digitaltryck medan EVA-dynan använder flerfärgad blockteknik för sköldpaddssiluetten och korallformer. Alla tillbehör är färgkoordinerade.',
      audience:
        'Havsälskare, sköldpaddsentusiaster, trendmedvetna paddlare och boutiqueresenärer som vill ha ett premiumpaket med samordnad livsstil.',
      ai_use_cases: [
        'Paddleboarding med marint bevarandetema',
        'Skapande av innehåll för sociala medier',
        'Långfärdspaddling och utforskning',
      ],
      ai_comparison:
        'Jämfört med vanliga tryckta SUP-brädor använder Ocean Voyager flerfärgad EVA-blockteknik som aldrig repas, flagar eller bleknar. Den stansade precisionen ger perfekt jämna ytor under fötterna.',
      ai_faq: [
        {
          q: 'Vad är inspirationen bakom namnet?',
          a: 'Havssköldpaddan är naturens främsta oceanfarare som navigerar tusentals mil med otvungen elegance. Ocean Voyager fångar andan i långfärdsutforskning och harmoni med marint liv.',
        },
        {
          q: 'Blekner motivet?',
          a: 'Nej. Grafiken på EVA-dynan använder flerfärgad blockteknik — färgerna är inbyggda i EVA-materialet, inte tryckt bläck. Grafiken repas, flagar eller bleknar aldrig, inte ens vid hård användning.',
        },
      ],
    },
    'sup-dolphin-wave': {
      definition:
        'En 11-fots allrounduppblåsbar SUP-bräda med delfinmotiv i CNC-stansad EVA-färgblockkomposition och silktryckta sammanhängande vågor på railbandet.',
      problem:
        'Konstintresserade paddlare behöver SUP-konst som överlever högtrycksuppblåsning (15 PSI) och tät rullförvaring utan att spricka, veckas eller färgblöda.',
      howItWorks:
        'Dolphin Wave använder en kärna i drop-stitch-PVC vid 15 PSI. Ståzonen använder CNC-pusselstansad EVA-färgblockkomposition där färgerna är inbyggda i materialet. Railbandet använder sammanhängande silktryck som fortsätter vågmotiven runt sidorna. UV-färgerna har 150% töjning för sprickresistens.',
      audience:
        'Entusiaster för marint djurliv, paddlare som uppskattar detaljerad konst och de som vill ha en bräda med 360-graders visuell kontinuitet.',
      ai_use_cases: [
        'Paddleboarding med marint djurlivstema',
        'Fritidspaddling på sjöar och längs kusten',
        'Innehåll för sociala medier och livsstil',
      ],
      ai_comparison:
        'Jämfört med vanliga tryckta SUP-brädor använder Dolphin Wave fysisk EVA-färgblockkomposition på ståzonen och silktryckta railvågor för 360-graders visuell kontinuitet. Den 150% flexibla UV-färgen förhindrar sprickor.',
      ai_faq: [
        {
          q: 'Vilka färger används?',
          a: 'Medieval Blue för djupa vågor, Serenity för lugna nyanser, med vita skumdetaljer. Färgpaletten följer PANTONE TPG-standarder för exakt tillverkning.',
        },
        {
          q: 'Hur appliceras vågorna på railbandet?',
          a: 'Railbandet använder en sammanhängande silktrycksprocess på massivt myntagrönt tvåskikts-PVC, vilket kostnadseffektivt fortsätter vågmotivet runt brädans sidor.',
        },
      ],
    },
    'sup-flowing-lotus': {
      definition:
        'En 11-fots allrounduppblåsbar SUP-bräda med traditionell österländsk penselkonstestetik, tvåskikts lasergraverad EVA-trampdyna och UV-digitaltryckt gradientmotiv.',
      problem:
        'Paddlare som söker konstnärlig och kulturell uttrycksförmåga på vattnet behöver premiumkonst som tår hård belastning och saltvatten utan att slitas ut eller blekna.',
      howItWorks:
        'Flowing Lotus använder en kärna i drop-stitch-PVC vid 15 PSI. EVA-trampdynan använder tvåskiktskomposit med lasergraverings — lasern etsar bort det övre färgskiktet och blottlägger underliggande färg, vilket skapar permanenta mönster. Gradienten på framdelen använder flexibla UV-färger med hög töjning för sprickresistens.',
      audience:
        'Yogautövare, meditationsentusiaster, älskare av österländsk konst och paddlare som uppskattar kulturell estetik och hantverk i premiumklass.',
      ai_use_cases: [
        'Yoga- och meditationspaddleboarding',
        'Kulturella och konstnärliga vattenupplevelser',
        'Fritidspaddling på sjöar och älvar',
      ],
      ai_comparison:
        'Jämfört med vanliga tryckta SUP-brädor använder Flowing Lotus lasergraverings som etsar mönster permanent i EVA-materialet — konsten kan inte slitas ut eller blekna eftersom den är en strukturell del av dynan.',
      ai_faq: [
        {
          q: 'Hur fungerar lasergraverings?',
          a: 'En tvåskikts komposit-EVA-dyna (petrolblå bas med myntagrön yta) laseretsas — lasern tar bort det övre skiktet och blottlägger den underliggande färgen, vilket skapar permanenta 3D-texturerade mönster.',
        },
        {
          q: 'Vad gör brädan bra för yoga?',
          a: 'De lasergraverade mönstren ger utmärkt halkmotstånd utan att vara slipande, medan gradientdesignen skapar en lugnande estetik som är perfekt för meditation och yoga på vattnet.',
        },
      ],
    },
    'sup-jungle-mandala': {
      definition:
        'En 11-fots allrounduppblåsbar SUP-bräda med tropiskt mandalamotiv i tvåskikts lasergraverad EVA, förvrängningssäker geometri och silktryckta sammanhängande rails.',
      problem:
        'Paddlare vill ha geometriskt komplex konst som förblir helt symmetrisk och oförvrängd även när brädan pumpas till högt tryck, utan mönsterförskjutningar vid tillverkningen.',
      howItWorks:
        'Jungle Mandala använder en kärna i drop-stitch-PVC vid 15 PSI. Mandalageometrin har genomgått strukturell linjeförtjockning för att motverka PVC-ytans dimplar. EVA-dynan använder tvåskikts lasergraverings. Railmotiven använder ett utspritt, icke-stelt mönster som tillåter toleranser vid manuell montering.',
      audience:
        'Andliga och konstnärliga paddlare, tropiska äventyrare, yogautövare och de som dras till geometrisk och mandalaestetik.',
      ai_use_cases: [
        'Andlig och meditativ paddleboarding',
        'Tropiska kustäventyr',
        'Skapande av innehåll för sociala medier',
      ],
      ai_comparison:
        'Jämfört med vanliga SUP-brädor har Jungle Mandala förvrängningssäker mandalageometri konstruerad för att förbli helt symmetrisk vid 15 PSI-uppblåsning, med kostnadseffektiva silktryckta railmotiv.',
      ai_faq: [
        {
          q: 'Förvrängs mandalamönstret vid uppblåsning?',
          a: 'Nej. De geometriska linjerna har genomgått strukturell förtjockning specifikt för att motverka PVC-ytans dimplar och förblir helt symmetriska vid fullt tryck.',
        },
        {
          q: 'Hur appliceras railkonsten?',
          a: 'Kolibri- och fjärilsmotiven på railsidorna använder en sammanhängande silktrycksprocess med ett utspritt, icke-stelt mönster som tillåter sträcktoleranser vid manuell montering.',
        },
      ],
    },
    'sup-tropical-breeze': {
      definition:
        'En 11-fots allrounduppblåsbar SUP-bräda med mikrolandskapsillustration och abstrakt EVA-färgblockning som sömlöst integrerar en ösemester scen i brädans design.',
      problem:
        'Paddlare vill ha en bräda som skapar en komplett uppslukande upplevelse — som förvandlar vattensportsutrustningen till en canvas som förflyttar dem till ett tropiskt paradis.',
      howItWorks:
        'Tropical Breeze använder en kärna i drop-stitch-PVC vid 15 PSI med en 32 tums däckyta. Framdelen har en digitaltryckt mikrolandskapsillustration. EVA-ståzonen använder stansad abstrakt färgblockning som fortsätter den visuella berättelsen om vågor, strand och palmer över hela brädan.',
      audience:
        'Semesterresenärer, tropiska livsstilsentusiaster, skapare av innehåll för sociala medier och paddlare som vill ha en bräda som fångar andan av öflykt.',
      ai_use_cases: [
        'Paddleboarding på tropiska semestrar',
        'Skapande av innehåll för sociala medier',
        'Fritidsupplevelser på sjöar och längs kusten',
      ],
      ai_comparison:
        'Jämfört med vanliga SUP-brädor integrerar Tropical Breeze unikt en komplett landskapsscen över hela brädytan, med en perfekt arbetsfördelning mellan digitaltryck för detaljer och EVA-patchwork för hållbarhet.',
      ai_faq: [
        {
          q: 'Vilken scen skildras på brädan?',
          a: 'Ett drömmiskt öparadis med solsken, kokoslundar, strand och palmer — en mikrolandskapsillustration på framdelen som övergår i abstrakt EVA-färgblockning mot aktern.',
        },
        {
          q: 'Hur övergår konsten från nos till akter?',
          a: 'Framdelen använder detaljerat digitaltryck för landskapsillustrationen, medan aktern använder stansad EVA-färgblockning som abstraherar vågor, sand och palmer — vilket skapar en sömlös visuell resa.',
        },
      ],
    },
  },
  da: {
    'life-vest-classic': {
      definition: 'Et CE-certificeret universelt flydehjælpemiddel til fritidsvandsport i alle vandmiljøer.',
      problem:
        'Vandsportsudøvere på alle niveauer har brug for en pålidelig og komfortabel redningsvest, der opfylder internationale sikkerhedsstandarder uden at begrænse bevægelsesfriheden.',
      howItWorks:
        'Redningsvesten Classic bruger skumfyldte flydekamre med justerbare bryst- og sideseler for en sikker pasform. Den findes i flere størrelser og inkluderer en nødpibe, reflekterende striber og et redningsgreb.',
      audience:
        'Fritidspaddlere, lystsejlere, lystfiskere og vandsportsbegyndere, der har brug for CE-certificeret opdrift til søer, åer og kystvande.',
      ai_use_cases: ['Sikkerhed ved fritidsvandsport', 'Opdrift til træning og opsyn', 'Familieaktiviteter på vandet'],
      ai_comparison:
        'Sammenlignet med automatiske oppustelige redningsvester giver Redningsvesten Classic konstant opdrift uden aktivering. Den er mere voluminøs, men mere pålidelig for fritidsbrugere, der måske ikke vedligeholder automatiske mekanismer.',
      ai_faq: [
        {
          q: 'Passer denne redningsvest til børn?',
          a: 'Ja, størrelser til børn findes. CE- og USCG-certificeret til de angivne vægtklasser.',
        },
        {
          q: 'Kræver den vedligeholdelse?',
          a: 'Minimal vedligeholdelse. Skyl med ferskvand efter brug. Kontroller kamre og seler før hver brug. Udskift ved skader.',
        },
      ],
    },
    'life-vest-pro': {
      definition:
        'En redningsvest i professionel klasse i henhold til SOLAS med automatisk oppustning til offshore-, rednings- og kommerciel maritim brug.',
      problem:
        'Professionelle søfolk og redningspersonale har brug for en redningsvest, der giver automatisk oppustning, høj opdrift og SOLAS-godkendt synlighed til offshore-operationer.',
      howItWorks:
        'Redningsvesten Pro bruger en automatisk hydrostatisk oppustningsmekanisme med et manuelt oppustningsrør som backup. Den inkluderer SOLAS-klasse reflekstape, en sprayhood, en nødpibe, et vandtæt lys og et fastgørelsespunkt til løftesele.',
      audience:
        'Kommersielle søfolk, redningsprofessionelle, offshore-arbejdere og avancerede lystsejlere, der har brug for SOLAS-godkendte automatiske redningsvester.',
      ai_use_cases: [
        'Sikkerhed ved maritime offshore-operationer',
        'Professionel redning og beredskab',
        'Kommersiel maritim regelefterlevelse',
      ],
      ai_comparison:
        'Sammenlignet med skumfyldte redningsvester blæser Redningsvesten Pro automatisk op for minimal volumen under normal brug. Den kræver årlig service af den hydrostatiske mekanisme og udskiftning af batteri.',
      ai_faq: [
        {
          q: 'Hvordan fungerer den automatiske oppustning?',
          a: 'En hydrostatisk udløser aktiveres ved neddykning i vand på 0,5-1,0 meters dybde. Et manuelt oppustningsrør er også inkluderet som backup.',
        },
        {
          q: 'Hvor ofte skal den servicereres?',
          a: 'Årlig service af den hydrostatiske mekanisme anbefales. CO2-cylinderen bør kontrolleres og udskiftes i henhold til producentens tidsplan.',
        },
      ],
    },
    'oars-pump-set': {
      definition:
        'Et komplet tilbehørssæt med et par 1,6m aluminiumsårer med plastblade og en 5-liters fodpumpe med høj luftstrøm og trykmåler til alle oppustelige vandskibe.',
      problem:
        'Ejere af oppustelige både har brug for erstatnings- eller reserveårer og en højvolumenpumpe til oppustning og fremdrift, alt sammen kompatibelt med standard oppustelige vandskibe.',
      howItWorks:
        'Årerne har aluminiumsskafter med plastblade til let fremdrift. Fodpumpen leverer 5 liter luft pr. slag med en indbygget trykmåler til præcis oppustning.',
      audience:
        'Ejere af oppustelige både, kajakker og joller, der har brug for reserve- eller erstatningsårer og en kraftig oppustningspumpe.',
      ai_use_cases: [
        'Erstatningsårer til oppustelige både',
        'Højvolumen-oppustning ved søsætning',
        'Reservefremdrift og oppustningsudstyr',
      ],
      ai_comparison:
        'Sammenlignet med den dobbeltvirkende pumpe giver denne fodpumpe højere volumen pr. slag, men kræver mere anstrengelse. Årerne giver et grundlæggende fremdriftsalternativ til oppustelige både uden påhængsmotor.',
      ai_faq: [
        {
          q: 'Passer årerne til alle oppustelige både?',
          a: 'Årerne passer til standardåreklo på de fleste oppustelige både i sortimentet. Længden 1,6m egner sig til både op til 4m.',
        },
        {
          q: 'Hvilket tryk kan fodpumpen opnå?',
          a: 'Fodpumpen kan opnå op til 12-15 PSI, hvilket er passende til de fleste oppustelige både og joller. Den er muligvis ikke tilstrækkelig til højtryks-SUP-brædder, der kræver 18+ PSI.',
        },
      ],
    },
    'sup-explorer-11': {
      definition:
        'Et 11-fods allround oppusteligt ståpaddleboard bygget til stabilitet, portabilitet og fritidsbrug på søer, åer og beskyttede kystvande.',
      problem:
        'Førstegangspaddlere og fritidsbrugere har brug for et stabilt og transportabelt SUP-bræt, der er let at puste op, let at balancere på og tilgivende at lære på.',
      howItWorks:
        "SUP Explorer 11' bruger drop-stitch-kernteknologi for en stivhed på 15 PSI og et bredt dæk på 32 tommer til sideværts stabilitet. Brættet inkluderer en aftagelig midterfinne, en spiralformet leash og en dobbeltvirkende håndpumpe til hurtig oppustning ved søsætningspladsen.",
      audience:
        'Førstegangspaddlere, fritidsbrugere, familier og fitnessentusiaster, der ønsker et transportabelt og stabilt SUP-bræt til søer, åer og beskyttede kystvande.',
      ai_use_cases: [
        'SUP-træning og begynderundervisning',
        'Fritidspaddling på søer og åer',
        'Fitness og yoga på vandet',
      ],
      ai_comparison:
        "Sammenlignet med hårde epoxybrætter tilbyder SUP Explorer 11' overlegen portabilitet og opbevaringsbekvemmelighed med stivheden fra drop-stitch-konstruktion. Det er tungere end et hårdt bræt, men pakkes i en rygsæk til rejser.",
      ai_faq: [
        {
          q: 'Hvilket tryk er ideelt?',
          a: '12-15 PSI anbefales. Brættet yder bedst ved 15 PSI for maksimal stivhed.',
        },
        {
          q: 'Følger en pagaj med?',
          a: 'En justerbar aluminiumpagaj er inkluderet i den komplette pakke.',
        },
      ],
    },
    'sup-cheetah-surge': {
      definition:
        'Et 11-fods allround oppusteligt SUP-bræt med vildt gepard-tema i flerfarvet EVA-blokteknik og UV-digitaltryk, bygget til fritidspaddling på søer, åer og beskyttede kystvande.',
      problem:
        'Paddlere, der ønsker et bræt, der skiller sig ud visuelt, har brug for premium-kunst, der ikke falmer, skaller eller skrammes af saltvand og UV-eksponering. Traditionelle trykmetoder fejler under disse forhold.',
      howItWorks:
        'Cheetah Surge Edition bruger drop-stitch-PVC-kernteknologi, der opnår stivhed ved 15 PSI med et bredt dæk på 32 tommer. Kunstværket på trampuden skabes gennem flerfarvet EVA-blokteknik — forskelligtfarvede EVA-ark stanses ud og samles sømløst som et puslespil i stedet for at blive trykt, hvilket garanterer nul falmen eller skalmning.',
      audience:
        'Modebevidste paddlere, friluftsentusiaster, boutique-rejsende og skabere af indhold til sociale medier, der ønsker et iøjnefaldende og holdbart SUP-bræt.',
      ai_use_cases: [
        'Skabelse af indhold til sociale medier på vandet',
        'Fritidspaddling på søer og åer',
        'Boutique-rejser og eventyrturisme',
      ],
      ai_comparison:
        'Sammenlignet med almindelige trykte SUP-brætter bruger Cheetah Surge Edition stanset EVA-blokteknik, der aldrig falmer eller skaller. Kunstværket er en strukturel del af EVA-materialet frem for et overfladisk tryk.',
      ai_faq: [
        {
          q: 'Hvordan påføres kunstværket?',
          a: 'Kunstværket bruger flerfarvet EVA-blokteknik — EVA-skumark i forskellige farver stanses præcist ud og samles sømløst som et puslespil. Der er ingen trykfarve på ståfladen.',
        },
        {
          q: 'Falmer kunstværket i saltvand?',
          a: 'Nej. Fordi farverne er iboende i EVA-materialet frem for et overfladisk blæklag, falmer, skaller eller skrammes kunstværket aldrig af saltvand, UV eller fodtrafik.',
        },
      ],
    },
    'sup-leviathan-wake': {
      definition:
        'Et 11-fods allround oppusteligt SUP-bræt med et betagende blåhval-totem i UV-digitaltryk og mekanisk reliefpræglet trampude.',
      problem:
        'Paddlere, der søger kunstneriske SUP-brætter, har brug for kunstværker, der forbliver levende ved højtryksoppustning og gentagen sammenrulning til opbevaring. Standardblæk sprækker og skaller.',
      howItWorks:
        'Leviathan Wake bruger en drop-stitch-PVC-kerne ved 15 PSI med et dæk på 32 tommer. Motivet på næsen trykkes med højpræcisions-UV-digitaltryk, mens logoet på undersiden silketrykkes med højelastiske PVC-blækfarver. Trampuden er mekanisk varmepræglet med holdbare bølgemønstre.',
      audience:
        'Hav- og marinelivs-entusiaster, kunstneriske paddlere og alle, der ønsker et visuelt markant SUP-bræt med holdbar kunst i høj kvalitet.',
      ai_use_cases: [
        'Vandeventyr med marint tema',
        'Fritidspaddling på søer og langs kysten',
        'Kunstnerisk og livsstilsorienteret paddleboarding',
      ],
      ai_comparison:
        'Sammenlignet med almindelige SUP-brætter har Leviathan Wake et totemisk hvalmotiv med dobbelte trykteknikker optimeret til holdbarhed. Den mekanisk reliefpræglede trampude holder længere end trykte puder.',
      ai_faq: [
        {
          q: 'Er logoet på undersiden holdbart?',
          a: 'Ja. Logoet på undersiden silketrykkes med højelastiske PVC-blækfarver, der er vurderet til 15 PSI-oppustning og gentagen sammenrulning.',
        },
        {
          q: 'Hvad er særligt ved trampuden?',
          a: 'Bølgemønstrene er mekanisk varmepræglet i to-lags komposit-EVA, hvilket sikrer ensartet dybde, fremragende vandafledning og langvarig skridsikkerhed.',
        },
      ],
    },
    'sup-medusa-glow': {
      definition:
        'Et 11-fods allround oppusteligt SUP-bræt med gople- og koralrev-tema i flerfarvet EVA-blokteknik og konstruktionsløsninger mod delaminering.',
      problem:
        'Paddlere, der elsker havinspireret kunst, har brug for et bræt med premium-grafik, der modstår hårde marine miljøer uden at falme, skalle eller delaminere ved fastgørelsespunkter.',
      howItWorks:
        'Medusa Glow bruger en drop-stitch-PVC-kerne ved 15 PSI med et dæk på 32 tommer. Motivet på næsen er UV-digitaltrykt, mens EVA-puden bruger flerfarvet blokteknik til falme-frie søstjerner og muslingeskaller. D-ring-områderne maskeres til rå PVC-til-PVC-binding, der forhindrer delaminering.',
      audience:
        'Kvindelige paddlere, livsstilsentusiaster, boutique-rejsende og alle, der ønsker en helbredende havinspireret æstetik på vandet.',
      ai_use_cases: [
        'Yoga og fitness på paddleboard',
        'Skabelse af indhold til sociale medier',
        'Tropiske og kystnære paddle-eventyr',
      ],
      ai_comparison:
        'Sammenlignet med almindelige trykte SUP-brætter bruger Medusa Glow EVA-blokteknik til grafikken på ståfladen — farverne er strukturelle i EVA-materialet, ikke trykt blæk, så de falmer aldrig.',
      ai_faq: [
        {
          q: 'Hvad er farveskemaet?',
          a: 'Forfriskende mintgrøn base med dyb petrol EVA-pude med hvide stansede blokke i søstjerne- og muslingform samt livlige koralorange accenter.',
        },
        {
          q: 'Hvordan er håndtaget fastgjort?',
          a: 'Neopren-håndtaget i midten er forankret gennem EVA-puden direkte i skrogets PVC-substrat, så løftebelastninger bæres af det stive skrog.',
        },
      ],
    },
    'sup-ocean-pulse': {
      definition:
        'Et 11-fods allround oppusteligt SUP-bræt med topografisk bølgemønster i UV-digitaltryk og mekanisk reliefpræglet trampude, med farvekoordineret tilbehør.',
      problem:
        'Stilbevidste paddlere ønsker en komplet visuel oplevelse — ikke kun et smukt bræt, men koordineret tilbehør, der bevarer æstetikken fra opbevaring til vand.',
      howItWorks:
        'Ocean Pulse bruger en drop-stitch-PVC-kerne ved 15 PSI. Bølgekonturerne påføres med højpræcisions-UV-tryk. EVA-puden er mekanisk varmepræglet med bølgeteksturer. Alt tilbehør — rygsæk, pumpe, leash — gennemgår ensartet farvetilpasning, der matcher brættets design.',
      audience:
        'Kvindelige paddlere, trendbevidste livsstilsentusiaster, boutique-campere og paddlere, der værdsætter koordineret æstetik i hele udstyret.',
      ai_use_cases: [
        'Paddleboarding til Instagram og sociale medier',
        'Boutique-rejser og camping',
        'Fritidspaddling på søer og langs kysten',
      ],
      ai_comparison:
        'Sammenlignet med almindelige SUP-brætter tilbyder Ocean Pulse en komplet koordineret visuel identitet på tværs af brættet og alt tilbehør, med mekanisk reliefpræglet EVA for bedre holdbarhed end trykte trampuder.',
      ai_faq: [
        {
          q: 'Hvilket tilbehør er farvetilpasset?',
          a: 'Rejserygsækken med hjul, den dobbeltvirkende højtrykspumpe, sikkerhedsleashen og de vandtætte telefontasker gennemgår alle ensartet farvematchning og brandtilpasning.',
        },
        {
          q: 'Hvordan skabes mønstret på trampuden?',
          a: 'Bølgemønstrene dannes gennem højpræcisions-mekanisk varmeprægling på to-lags komposit-EVA, hvilket sikrer ensartet dybde og fremragende vandafledning.',
        },
      ],
    },
    'sup-ocean-voyager': {
      definition:
        'Et 11-fods allround oppusteligt SUP-bræt med geometrisk havskildpadde-kunstværk i flerfarvet EVA-blokteknik og UV-digitaltryk, med gennemført visuel identitet i tilbehøret.',
      problem:
        'Havbevidste paddlere ønsker et bræt, der fejrer marint liv med premium-kunst, der forbliver levende i årevis uden at falme eller skalle af saltvand.',
      howItWorks:
        'Ocean Voyager bruger en drop-stitch-PVC-kerne ved 15 PSI med et dæk på 32 tommer. Den geometriske skildpadde-illustration på næsen bruger UV-digitaltryk, mens EVA-puden bruger flerfarvet blokteknik til skildpadde-silhuetten og koralformer. Alt tilbehør er farvekoordineret.',
      audience:
        'Havelskere, skildpadde-entusiaster, trendbevidste paddlere og boutique-rejsende, der ønsker en premium-pakke med koordineret livsstil.',
      ai_use_cases: [
        'Paddleboarding med marint bevaringstema',
        'Skabelse af indhold til sociale medier',
        'Længerevarende turpaddling og udforskning',
      ],
      ai_comparison:
        'Sammenlignet med almindelige trykte SUP-brætter bruger Ocean Voyager flerfarvet EVA-blokteknik, der aldrig skrammes, skaller eller falmer. Den stansede præcision sikrer helt flade overflader under fødderne.',
      ai_faq: [
        {
          q: 'Hvad er navngivningsinspirationen?',
          a: 'Havskildpadden er naturens ypperste oceanvandrer, der navigerer tusindvis af miles med ubesværet ynde. Ocean Voyager indfanger ånden i langsigtet udforskning og harmoni med marint liv.',
        },
        {
          q: 'Falmer kunstværket?',
          a: 'Nej. Grafikken på EVA-puden bruger flerfarvet blokteknik — farverne er iboende i EVA-materialet, ikke trykt blæk. Grafikken skrammes, skaller eller falmer aldrig, selv ved hård brug.',
        },
      ],
    },
    'sup-dolphin-wave': {
      definition:
        'Et 11-fods allround oppusteligt SUP-bræt med delfin-havlandskab i CNC-stanset EVA-farveblok-sammensætning og silketrykte sammenhængende bølger på railbandet.',
      problem:
        'Kunstbevidste paddlere har brug for SUP-kunst, der overlever højtryksoppustning (15 PSI) og tæt sammenrullet opbevaring uden at sprække, danne folder eller bløde farver.',
      howItWorks:
        'Dolphin Wave bruger en drop-stitch-PVC-kerne ved 15 PSI. Ståzonen bruger CNC-puslespilsstanset EVA-farveblok-sammensætning, hvor farverne er iboende i materialet. Railbandet bruger sammenhængende silketryk til at fortsætte bølgemotiverne rundt om siderne. UV-blækkene har 150% forlængelse for sprickeresistens.',
      audience:
        'Entusiaster for marint dyreliv, paddlere, der værdsætter detaljeret kunst, og alle, der ønsker et bræt med 360-graders visuel kontinuitet.',
      ai_use_cases: [
        'Paddleboarding med marint dyrelivstema',
        'Fritidspaddling på søer og langs kysten',
        'Indhold til sociale medier og livsstil',
      ],
      ai_comparison:
        'Sammenlignet med almindelige trykte SUP-brætter bruger Dolphin Wave fysisk EVA-farveblok-sammensætning på ståzonen og silketrykte railbølger til 360-graders visuel kontinuitet. Det 150% fleksible UV-blæk forhindrer sprækker.',
      ai_faq: [
        {
          q: 'Hvilke farver bruges?',
          a: 'Medieval Blue til dybe bølger, Serenity til rolige nuancer, med hvide skumdetaljer. Farvepaletten følger PANTONE TPG-standarder til præcis fremstilling.',
        },
        {
          q: 'Hvordan påføres railbølgerne?',
          a: 'Railbandet bruger en sammenhængende silketryksproces på solidt mintgrønt to-lags PVC, hvilket omkostningseffektivt fører bølgemotivet rundt om brættets sider.',
        },
      ],
    },
    'sup-flowing-lotus': {
      definition:
        'Et 11-fods allround oppusteligt SUP-bræt med traditionel østlig penselarbejdsæstetik, to-lags lasergraveret EVA-trampude og UV-digitaltrykt gradient-kunstværk.',
      problem:
        'Paddlere, der søger kunstnerisk og kulturel udtryk på vandet, har brug for premium-kunst, der modstår hård fodtrafik og saltvand uden at slides ud eller falme.',
      howItWorks:
        'Flowing Lotus bruger en drop-stitch-PVC-kerne ved 15 PSI. EVA-trampuden bruger to-lags komposit lasergravering — laseren ætser det øvre farvelag væk for at afsløre den nederste farve, hvilket skaber permanente mønstre. Gradienten på næsen bruger fleksible UV-blækfarver med høj forlængelse for sprickeresistens.',
      audience:
        'Yogaudøvere, meditationsentusiaster, elskere af østlig kunst og paddlere, der værdsætter kulturel æstetik og premium-håndværk.',
      ai_use_cases: [
        'Yoga- og meditationspaddleboarding',
        'Kulturelle og kunstneriske vandoplevelser',
        'Fritidspaddling på søer og åer',
      ],
      ai_comparison:
        'Sammenlignet med almindelige trykte SUP-brætter bruger Flowing Lotus lasergraveringsteknologi, der ætser mønstre permanent ind i EVA-materialet — kunstværket kan ikke slides ud eller falme, fordi det er en strukturel del af puden.',
      ai_faq: [
        {
          q: 'Hvordan fungerer lasergraveringen?',
          a: 'En to-lags komposit-EVA-pude (petrolblå base med mintgrøn overflade) laserætses — laseren fjerner det øverste lag for at afsløre den nederste farve, hvilket skaber permanente 3D-teksturede mønstre.',
        },
        {
          q: 'Hvad gør brættet godt til yoga?',
          a: 'De lasergraverede mønstre giver fremragende skridsikkerhed uden at være abrasive, mens gradientdesignet skaber en beroligende æstetik, der er perfekt til meditation og yoga på vandet.',
        },
      ],
    },
    'sup-jungle-mandala': {
      definition:
        'Et 11-fods allround oppusteligt SUP-bræt med tropisk mandala-kunstværk i to-lags lasergraveret EVA, forvrængningssikker geometri og silketrykte sammenhængende rails.',
      problem:
        'Paddlere ønsker geometrisk kompleks kunst, der forbliver fuldstændig symmetrisk og uforvrænget, selv når brættet pustes op til højt tryk, uden mønsterfejlstilling under fremstillingen.',
      howItWorks:
        'Jungle Mandala bruger en drop-stitch-PVC-kerne ved 15 PSI. Mandala-geometrien har gennemgået strukturel linjefortykning for at modvirke PVC-overfladens dimpler. EVA-puden bruger to-lags lasergravering. Rail-motiverne bruger et spredt, ikke-stift mønster, der imødekommer manuelle monteringsstræktolerancer.',
      audience:
        'Åndelige og kunstneriske paddlere, tropiske eventyrere, yogaudøvere og alle, der drages til geometrisk og mandala-æstetik.',
      ai_use_cases: [
        'Åndelig og meditativ paddleboarding',
        'Tropiske kysteventyr',
        'Skabelse af indhold til sociale medier',
      ],
      ai_comparison:
        'Sammenlignet med almindelige SUP-brætter har Jungle Mandala forvrængningssikker mandala-geometri konstrueret til at forblive fuldstændig symmetrisk ved 15 PSI-oppustning, med omkostningseffektive silketrykte rail-motiver.',
      ai_faq: [
        {
          q: 'Forvrænges mandalamønsteret ved oppustning?',
          a: 'Nej. De geometriske linjer har gennemgået strukturel fortykning specifikt for at modvirke PVC-overfladens dimpler og forbliver fuldstændig symmetriske ved fuldt tryk.',
        },
        {
          q: 'Hvordan påføres rail-kunsten?',
          a: 'Kolibri- og sommerfuglemotiverne på railsiderne bruger en sammenhængende silketryksproces med et spredt, ikke-stift mønster, der imødekommer manuelle stræktolerancer under montering.',
        },
      ],
    },
    'sup-tropical-breeze': {
      definition:
        'Et 11-fods allround oppusteligt SUP-bræt med mikro-landskabsillustration og abstrakt EVA-farveblokning, der sømløst integrerer en øferie-scene i brættets design.',
      problem:
        'Paddlere ønsker et bræt, der skaber en komplet oppslukende oplevelse — der forvandler vandsportsudstyret til et lærred, der transporterer dem til et tropisk paradis.',
      howItWorks:
        'Tropical Breeze bruger en drop-stitch-PVC-kerne ved 15 PSI med et dæk på 32 tommer. Næsen har en digitaltrykt mikro-landskabsillustration. EVA-ståzonen bruger stanset abstrakt farveblokning, der fortsætter den visuelle fortælling om bølger, strand og palmer hen over hele brættet.',
      audience:
        'Ferierejsende, tropiske livsstilsentusiaster, skabere af indhold til sociale medier og paddlere, der ønsker et bræt, der indfanger ånden i øflugt.',
      ai_use_cases: [
        'Paddleboarding på tropiske ferier',
        'Skabelse af indhold til sociale medier',
        'Fritidsophold på søer og langs kysten',
      ],
      ai_comparison:
        'Sammenlignet med almindelige SUP-brætter integrerer Tropical Breeze unikt en komplet landskapsscene over hele brætfladen, med en perfekt arbejdsdeling mellem digitaltryk til detaljer og EVA-patchwork til holdbarhed.',
      ai_faq: [
        {
          q: 'Hvilken scene er afbildet på brættet?',
          a: 'Et drømmelignende øparadis med solskin, kokosplantager, strand og palmer — en mikro-landskabsillustration på næsen, der går over i abstrakt EVA-farveblokning mod halen.',
        },
        {
          q: 'Hvordan går kunstværket fra næse til hale?',
          a: 'Næsen bruger detaljeret digitaltryk til landskabsillustrationen, mens halen bruger stanset EVA-farveblokning, der abstraherer bølgerne, sandet og palmerne — hvilket skaber en sømløs visuel rejse.',
        },
      ],
    },
  },
  el: {
    'life-vest-classic': {
      definition:
        'Ένα πιστοποιημένο CE παγκόσμιο σωσίβιο άνευσης για θαλάσσια σπορ αναψυχής σε όλα τα υδάτινα περιβάλλοντα.',
      problem:
        'Αθλητές θαλάσσιων σπορ κάθε επιπέδου χρειάζονται ένα αξιόπιστο και άνετο σωσίβιο που πληροί τα διεθνή πρότυπα ασφαλείας χωρίς να περιορίζει την ελευθερία κινήσεων.',
      howItWorks:
        'Το Σωσίβιο Classic χρησιμοποιεί θαλάμους άνευσης με γέμιση αφρού και ρυθμιζόμενες λωρίδες στήθους και πλευρών για ασφαλή εφαρμογή. Διατίθεται σε πολλά μεγέθη και περιλαμβάνει σφυρίδι έκτακτης ανάγκης, ανακλαστικές λωρίδες και λαβή διάσωσης.',
      audience:
        'Ερασιτέχνες paddlers, ερασιτέχνες χειριστές σκαφών, ψαράδες αναψυχής και αρχάριοι θαλάσσιων σπορ που χρειάζονται πιστοποιημένη CE άνωση για λίμνες, ποτάμια και παράκτια ύδατα.',
      ai_use_cases: [
        'Ασφάλεια σε θαλάσσια σπορ αναψυχής',
        'Άνωση για εκπαίδευση και εποπτεία',
        'Οικογενειακές δραστηριότητες στο νερό',
      ],
      ai_comparison:
        'Σε σύγκριση με τα αυτόματα φουσκωτά σωσίβια, το Σωσίβιο Classic προσφέρει συνεχή άνωση χωρίς ενεργοποίηση. Είναι πιο ογκώδες, αλλά πιο αξιόπιστο για χρήστες αναψυχής που ίσως δεν συντηρούν τους αυτόματους μηχανισμούς.',
      ai_faq: [
        {
          q: 'Ταιριάζει αυτό το σωσίβιο σε παιδιά;',
          a: 'Ναι, υπάρχουν μεγέθη για παιδιά. Πιστοποιημένο CE και USCG για τις αναφερόμενες κατηγορίες βάρους.',
        },
        {
          q: 'Απαιτεί συντήρηση;',
          a: 'Ελάχιστη συντήρηση. Ξεπλύνετε με γλυκό νερό μετά τη χρήση. Ελέγξτε θαλάμους και λωρίδες πριν από κάθε χρήση. Αντικαταστήστε το σε περίπτωση φθοράς.',
        },
      ],
    },
    'life-vest-pro': {
      definition:
        'Ένα σωσίβιο επαγγελματικής κατηγορίας κατά SOLAS με αυτόματο φούσκωμα για offshore χρήση, διάσωση και εμπορική θαλάσσια εφαρμογή.',
      problem:
        'Επαγγελματίες ναυτικοί και προσωπικό διάσωσης χρειάζονται ένα σωσίβιο που προσφέρει αυτόματο φούσκωμα, υψηλή άνωση και ορατότητα κατά SOLAS για offshore επιχειρήσεις.',
      howItWorks:
        'Το Σωσίβιο Pro χρησιμοποιεί αυτόματο υδροστατικό μηχανισμό φουσκώματος με χειροκίνητο σωλήνα φουσκώματος ως εφεδρικό. Περιλαμβάνει ανακλαστική ταινία κατηγορίας SOLAS, κουκούλα προστασίας από τα κύματα, σφυρίδι έκτακτης ανάγκης, αδιάβροχο φως και σημείο σύνδεσης για φορέο ανύψωσης.',
      audience:
        'Εμπορικοί ναυτικοί, επαγγελματίες διάσωσης, offshore εργαζόμενοι και προχωρημένοι ερασιτέχνες χειριστές σκαφών που χρειάζονται πιστοποιημένα κατά SOLAS αυτόματα σωσίβια.',
      ai_use_cases: [
        'Ασφάλεια σε offshore θαλάσσιες επιχειρήσεις',
        'Επαγγελματική διάσωση και ετοιμότητα',
        'Εμπορική συμμόρφωση με θαλάσσιους κανονισμούς',
      ],
      ai_comparison:
        'Σε σύγκριση με τα σωσίβια με γέμιση αφρού, το Σωσίβιο Pro φουσκώνεται αυτόματα για ελάχιστο όγκο κατά την κανονική χρήση. Απαιτεί ετήσια συντήρηση του υδροστατικού μηχανισμού και αντικατάσταση μπαταρίας.',
      ai_faq: [
        {
          q: 'Πώς λειτουργεί το αυτόματο φούσκωμα;',
          a: 'Ένας υδροστατικός διακόπτης ενεργοποιείται με βύθιση σε βάθος 0,5-1,0 μέτρων στο νερό. Περιλαμβάνεται επίσης χειροκίνητος σωλήνας φουσκώματος ως εφεδρικό.',
        },
        {
          q: 'Πόσο συχνά χρειάζεται συντήρηση;',
          a: 'Συνιστάται ετήσια συντήρηση του υδροστατικού μηχανισμού. Η φιάλη CO2 πρέπει να ελέγχεται και να αντικαθίσταται σύμφωνα με το πρόγραμμα του κατασκευαστή.',
        },
      ],
    },
    'oars-pump-set': {
      definition:
        'Ένα πλήρες σετ αξεσουάρ με ένα ζεύγος κουπιών 1,6m από αλουμίνιο με πλαστικές πτέρυγες και μια ποδοκίνητη αντλία 5 λίτρων με υψηλή παροχή αέρα και μανόμετρο για όλα τα φουσκωτά σκάφη.',
      problem:
        'Οι ιδιοκτήτες φουσκωτών σκαφών χρειάζονται κουπιά αντικατάστασης ή εφεδρικά και μια αντλία υψηλής παροχής για φούσκωμα και πρόωση, όλα συμβατά με τα τυπικά φουσκωτά σκάφη.',
      howItWorks:
        'Τα κουπιά έχουν κονδύλια από αλουμίνιο με πλαστικές πτέρυγες για ελαφριά πρόωση. Η ποδοκίνητη αντλία παρέχει 5 λίτρα αέρα ανά κίνηση με ενσωματωμένο μανόμετρο για ακριβές φούσκωμα.',
      audience:
        'Ιδιοκτήτες φουσκωτών σκαφών, καγιάκ και dinghy που χρειάζονται εφεδρικά ή αντικαταστατικά κουπιά και μια ισχυρή αντλία φουσκώματος.',
      ai_use_cases: [
        'Κουπιά αντικατάστασης για φουσκωτά σκάφη',
        'Φούσκωμα υψηλής παροχής κατά το κατέβασμα',
        'Εφεδρική πρόωση και εξοπλισμός φουσκώματος',
      ],
      ai_comparison:
        'Σε σύγκριση με την αντλία διπλής δράσης, αυτή η ποδοκίνητη αντλία προσφέρει υψηλότερο όγκο ανά κίνηση, αλλά απαιτεί μεγαλύτερη προσπάθεια. Τα κουπιά προσφέρουν μια βασική εναλλακτική πρόωση για φουσκωτά σκάφη χωρίς εξωλέμβια μηχανή.',
      ai_faq: [
        {
          q: 'Ταιριάζουν τα κουπιά σε όλα τα φουσκωτά σκάφη;',
          a: 'Τα κουπιά ταιριάζουν στις τυπικές θήκες κουπιών των περισσότερων φουσκωτών σκαφών της γκάμας. Το μήκος 1,6m είναι κατάλληλο για σκάφη έως 4m.',
        },
        {
          q: 'Τι πίεση μπορεί να επιτύχει η ποδοκίνητη αντλία;',
          a: 'Η ποδοκίνητη αντλία επιτυγχάνει έως 12-15 PSI, που είναι κατάλληλο για τα περισσότερα φουσκωτά σκάφη και dinghy. Ίσως δεν επαρκεί για σανίδες SUP υψηλής πίεσης που απαιτούν 18+ PSI.',
        },
      ],
    },
    'sup-explorer-11': {
      definition:
        'Μια allround φουσκωτή σανίδα SUP 11 ποδών, κατασκευασμένη για σταθερότητα, φορητότητα και χρήση αναψυχής σε λίμνες, ποτάμια και προστατευμένα παράκτια ύδατα.',
      problem:
        'Οι αρχάριοι paddlers και οι χρήστες αναψυχής χρειάζονται μια σταθερή και φορητή σανίδα SUP που φουσκώνεται εύκολα, προσφέρει εύκολη ισορροπία και συγχωρεί τα λάθη εκμάθησης.',
      howItWorks:
        "Η σανίδα SUP Explorer 11' χρησιμοποιεί τεχνολογία πυρήνα drop-stitch για ακαμψία 15 PSI και πλατύ κατάστρωμα 32 ιντσών για πλευρική σταθερότητα. Η σανίδα περιλαμβάνει αφαιρούμενο κεντρικό πτερύγιο, σπειροειδές λουρί ασφαλείας και αντλία χειρός διπλής δράσης για γρήγορο φούσκωμα στο σημείο καθελκύσης.",
      audience:
        'Αρχάριοι paddlers, χρήστες αναψυχής, οικογένειες και λάτρεις του fitness που θέλουν μια φορητή και σταθερή σανίδα SUP για λίμνες, ποτάμια και προστατευμένα παράκτια ύδατα.',
      ai_use_cases: [
        'Εξάσκηση SUP και μαθήματα αρχαρίων',
        'Paddling αναψυχής σε λίμνες και ποτάμια',
        'Fitness και yoga στο νερό',
      ],
      ai_comparison:
        "Σε σύγκριση με τις σκληρές σανίδες epoxy, η σανίδα SUP Explorer 11' προσφέρει ανώτερη φορητότητα και ευκολία αποθήκευσης με την ακαμψία της κατασκευής drop-stitch. Είναι βαρύτερη από μια σκληρή σανίδα, αλλά διπλώνει σε σάκο πλάτης για ταξίδια.",
      ai_faq: [
        {
          q: 'Ποια πίεση είναι ιδανική;',
          a: 'Συνιστώνται 12-15 PSI. Η σανίδα αποδίδει καλύτερα στα 15 PSI για μέγιστη ακαμψία.',
        },
        {
          q: 'Συνοδεύεται από κουπί;',
          a: 'Ένα ρυθμιζόμενο κουπί αλουμινίου περιλαμβάνεται στο πλήρες πακέτο.',
        },
      ],
    },
    'sup-cheetah-surge': {
      definition:
        'Μια allround φουσκωτή σανίδα SUP 11 ποδών με τολμηρό θέμα γεπάρδας σε τεχνική πολύχρωμων μπλοκ EVA και ψηφιακή εκτύπωση UV, για paddling αναψυχής σε λίμνες, ποτάμια και προστατευμένα παράκτια ύδατα.',
      problem:
        'Paddlers που θέλουν μια σανίδα που ξεχωρίζει οπτικά χρειάζονται τέχνη premium που δεν ξεθωριάζει, δεν ξεφλουδίζει και δεν γρατζουνίζεται από το αλμυρό νερό και την ακτινοβολία UV. Οι παραδοσιακές μέθοδοι εκτύπωσης αποτυγχάνουν υπό αυτές τις συνθήκες.',
      howItWorks:
        'Η έκδοση Cheetah Surge χρησιμοποιεί τεχνολογία πυρήνα drop-stitch PVC που επιτυγχάνει ακαμψία στα 15 PSI με κατάστρωμα 32 ιντσών. Το έργο τέχνης στο πατάκι EVA δημιουργείται με τεχνική πολύχρωμων μπλοκ EVA — φύλλα EVA διαφορετικών χρωμάτων κομμένα με μήτρα και συναρμολογημένα απρόσκοπτα όπως ένα παζλ αντί για εκτύπωση, εγγυώμενα μηδενικό ξεθώριασμα ή ξεφλούδισμα.',
      audience:
        'Μοντέρνοι paddlers, λάτρεις της φύσης, ταξιδιώτες boutique και δημιουργοί περιεχομένου για κοινωνικά δίκτυα που θέλουν μια εντυπωσιακή και ανθεκτική σανίδα SUP.',
      ai_use_cases: [
        'Δημιουργία περιεχομένου για κοινωνικά δίκτυα στο νερό',
        'Paddling αναψυχής σε λίμνες και ποτάμια',
        'Boutique ταξίδια και τουρισμός περιπέτειας',
      ],
      ai_comparison:
        'Σε σύγκριση με τις κοινές εκτυπωμένες σανίδες SUP, η έκδοση Cheetah Surge χρησιμοποιεί τεχνική μπλοκ EVA κομμένη με μήτρα που δεν ξεθωριάζει και δεν ξεφλουδίζει ποτέ. Το έργο τέχνης είναι δομικό μέρος του υλικού EVA και όχι μια επιφανειακή εκτύπωση.',
      ai_faq: [
        {
          q: 'Πώς εφαρμόζεται το έργο τέχνης;',
          a: 'Το έργο τέχνης χρησιμοποιεί τεχνική πολύχρωμων μπλοκ EVA — φύλλα αφρού EVA σε διαφορετικά χρώματα κόβονται με ακρίβεια με μήτρα και συναρμολογούνται απρόσκοπτα όπως ένα παζλ. Δεν υπάρχει μελάνι εκτύπωσης στην επιφάνεια στήριξης.',
        },
        {
          q: 'Ξεθωριάζει το έργο τέχνης στο αλμυρό νερό;',
          a: 'Όχι. Επειδή τα χρώματα είναι εγγενή στο υλικό EVA και όχι ένα επιφανειακό στρώμα μελανιού, το έργο τέχνης δεν ξεθωριάζει, δεν ξεφλουδίζει και δεν γρατζουνίζεται ποτέ από το αλμυρό νερό, την UV ή την κίνηση.',
        },
      ],
    },
    'sup-leviathan-wake': {
      definition:
        'Μια allround φουσκωτή σανίδα SUP 11 ποδών με ένα μαγευτικό τοτέμ μπλε φάλαινας σε ψηφιακή εκτύπωση UV και πατάκι EVA με μηχανικά ανάγλυφη θερμοσφράγιση.',
      problem:
        'Paddlers που αναζητούν καλλιτεχνικές σανίδες SUP χρειάζονται έργα τέχνης που παραμένουν ζωντανά μετά από φούσκωμα υψηλής πίεσης και επαναλαμβανόμενο τύλιγμα για αποθήκευση. Τα συμβατικά μελάνια ραγίζουν και ξεφλουδίζουν.',
      howItWorks:
        'Η σανίδα Leviathan Wake χρησιμοποιεί πυρήνα drop-stitch PVC στα 15 PSI με κατάστρωμα 32 ιντσών. Το μοτίβο στη μύτη εκτυπώνεται με ψηφιακή εκτύπωση UV υψηλής ακρίβειας, ενώ το λογότυπο στην κάτω πλευρά μεταξοτυπώνεται με μελάνια PVC υψηλής ελαστικότητας. Το πατάκι EVA φέρει ανθεκτικά ανάγλυφα μοτίβα κυμάτων, σφραγισμένα μηχανικά με θερμότητα.',
      audience:
        'Λάτρεις της θάλασσας και της θαλάσσιας ζωής, καλλιτεχνικοί paddlers και όσοι θέλουν μια οπτικά εντυπωσιακή σανίδα SUP με ανθεκτική τέχνη υψηλής ποιότητας.',
      ai_use_cases: [
        'Θαλάσσιες περιπέτειες με θαλασσινό θέμα',
        'Paddling αναψυχής σε λίμνες και κατά μήκος της ακτής',
        'Καλλιτεχνικό και lifestyle paddleboarding',
      ],
      ai_comparison:
        'Σε σύγκριση με τις κοινές σανίδες SUP, η Leviathan Wake φέρει ένα τοτεμικό μοτίβο φάλαινας με διπλές τεχνικές εκτύπωσης βελτιστοποιημένες για αντοχή. Το πατάκι EVA με μηχανικά ανάγλυφη θερμοσφράγιση διαρκεί περισσότερο από τα εκτυπωμένα πατάκια.',
      ai_faq: [
        {
          q: 'Είναι ανθεκτικό το λογότυπο στην κάτω πλευρά;',
          a: 'Ναι. Το λογότυπο στην κάτω πλευρά μεταξοτυπώνεται με μελάνια PVC υψηλής ελαστικότητας που είναι αξιολογημένα για φούσκωμα 15 PSI και επαναλαμβανόμενο τύλιγμα.',
        },
        {
          q: 'Τι είναι ξεχωριστό στο πατάκι EVA;',
          a: 'Τα μοτίβα κυμάτων σφραγίζονται ανάγλυφα με θερμότητα σε σύνθετο EVA δύο στρωμάτων, εξασφαλίζοντας ομοιόμορφο βάθος, εξαιρετική αποστράγγιση νερού και διαρκή αντιολισθητική πρόσφυση.',
        },
      ],
    },
    'sup-medusa-glow': {
      definition:
        'Μια allround φουσκωτή σανίδα SUP 11 ποδών με θέμα μέδουσας και κοραλλιογεννούς υφάλου σε τεχνική πολύχρωμων μπλοκ EVA και σχεδιαστικές λύσεις κατά της αποκόλλησης των στρωμάτων.',
      problem:
        'Paddlers που αγαπούν την τέχνη εμπνευσμένη από τη θάλασσα χρειάζονται μια σανίδα με γραφικά premium που αντέχει σκληρά θαλάσσια περιβάλλοντα χωρίς ξεθώριασμα, ξεφλούδισμα ή αποκόλληση στα σημεία σύνδεσης.',
      howItWorks:
        'Η Medusa Glow χρησιμοποιεί πυρήνα drop-stitch PVC στα 15 PSI με κατάστρωμα 32 ιντσών. Το μοτίβο στη μύρη είναι εκτυπωμένο με ψηφιακή εκτύπωση UV, ενώ το πατάκι EVA χρησιμοποιεί τεχνική πολύχρωμων μπλοκ για αστερίες και κοχύλια χωρίς ξεθώριασμα. Οι περιοχές των D-ring καλύπτονται για απευθείας σύνδεση PVC-με-PVC που εμποδίζει την αποκόλληση.',
      audience:
        'Γυναίκες paddlers, λάτρεις του lifestyle, ταξιδιώτες boutique και όσοι επιθυμούν μια θεραπευτική θαλασσινή αισθητική στο νερό.',
      ai_use_cases: [
        'Yoga και fitness σε paddleboard',
        'Δημιουργία περιεχομένου για κοινωνικά δίκτυα',
        'Τροπικές και παράκτιες paddle περιπέτειες',
      ],
      ai_comparison:
        'Σε σύγκριση με τις κοινές εκτυπωμένες σανίδες SUP, η Medusa Glow χρησιμοποιεί τεχνική μπλοκ EVA για τα γραφικά της επιφάνειας στήριξης — τα χρώματα είναι δομικά στο υλικό EVA και όχι εκτυπωμένο μελάνι, οπότε δεν ξεθωριάζουν ποτέ.',
      ai_faq: [
        {
          q: 'Ποιο είναι το χρωματικό σχήμα;',
          a: 'Ανανεωτικό πράσινο μέντας ως βάση με βαθύ πετρόλ πατάκι EVA με λευκά κομμένα μπλοκ σε σχήματα αστερία και κοχυλιού και ζωηρές κοραλλένιες πορτοκαλί πινελιές.',
        },
        {
          q: 'Πώς είναι στερεωμένη η λαβή;',
          a: 'Η λαβή neoprene στο κέντρο είναι αγκυρωμένη μέσα από το πατάκι EVA απευθείας στο υπόστρωμα PVC της γάστρας, ώστε τα φορτία ανύψωσης να τα δέχεται η σκληρή γάστρος.',
        },
      ],
    },
    'sup-ocean-pulse': {
      definition:
        'Μια allround φουσκωτή σανίδα SUP 11 ποδών με τοπογραφικό μοτίβο κυμάτων σε ψηφιακή εκτύπωση UV και πατάκι EVA με μηχανικά ανάγλυφη θερμοσφράγιση, με χρωματικά συντονισμένα αξεσουάρ.',
      problem:
        'Paddlers με ευαισθησία στο στυλ θέλουν μια ολοκληρωμένη οπτική εμπειρία — όχι μόνο μια όμορφη σανίδα, αλλά συντονισμένα αξεσουάρ που διατηρούν την αισθητική από την αποθήκευση έως το νερό.',
      howItWorks:
        'Η Ocean Pulse χρησιμοποιεί πυρήνα drop-stitch PVC στα 15 PSI. Οι καμπύλες των κυμάτων εφαρμόζονται με ψηφιακή εκτύπωση UV υψηλής ακρίβειας. Το πατάκι EVA φέρει ανάγλυφες υφές κυμάτων σφραγισμένες μηχανικά με θερμότητα. Όλα τα αξεσουάρ — σάκος πλάτης, αντλία, λουρί ασφαλείας — υποβάλλονται σε ομοιόμορφη χρωματική προσαρμογή που ταιριάζει με το σχέδιο της σανίδας.',
      audience:
        'Γυναίκες paddlers, μοντέρνοι λάτρεις του lifestyle, κατασκηνωτές boutique και paddlers που εκτιμούν τη συντονισμένη αισθητική σε όλο τον εξοπλισμό.',
      ai_use_cases: [
        'Paddleboarding για Instagram και κοινωνικά δίκτυα',
        'Boutique ταξίδια και κατασκήνωση',
        'Paddling αναψυχής σε λίμνες και κατά μήκος της ακτής',
      ],
      ai_comparison:
        'Σε σύγκριση με τις κοινές σανίδες SUP, η Ocean Pulse προσφέρει μια πλήρη συντονισμένη οπτική ταυτότητα σε όλη τη σανίδα και όλα τα αξεσουάρ, με EVA με μηχανικά ανάγλυφη θερμοσφράγιση για καλύτερη αντοχή από τα εκτυπωμένα πατάκια.',
      ai_faq: [
        {
          q: 'Ποια αξεσουάρ είναι χρωματικά συντονισμένα;',
          a: 'Ο σάκος ταξιδιού με ρόδες, η αντλία υψηλής πίεσης διπλής δράσης, το λουρί ασφαλείας και οι αδιάβροχες θήκες κινητών τηλεφώνων υποβάλλονται όλες σε ομοιόμορφη χρωματική αντιστοίχιση και προσαρμογή στο brand.',
        },
        {
          q: 'Πώς δημιουργείται το μοτίβο στο πατάκι;',
          a: 'Τα μοτίβα των κυμάτων σχηματίζονται με θερμή ανάγλυφη μηχανική σφράγιση σε σύνθετο EVA δύο στρωμάτων, εξασφαλίζοντας ομοιόμορφο βάθος και εξαιρετική αποστράγγιση νερού.',
        },
      ],
    },
    'sup-ocean-voyager': {
      definition:
        'Μια allround φουσκωτή σανίδα SUP 11 ποδών με γεωμετρικό έργο τέχνης θαλάσσιας χελώνας σε τεχνική πολύχρωμων μπλοκ EVA και ψηφιακή εκτύπωση UV, με πλήρη οπτική ταυτότητα και στα αξεσουάρ.',
      problem:
        'Paddlers με περιβαλλοντική ευαισθησία θέλουν μια σανίδα που γιορτάζει τη θαλάσσια ζωή με τέχνη premium που παραμένει ζωντανή για χρόνια χωρίς ξεθώριασμα ή ξεφλούδισμα από το αλμυρό νερό.',
      howItWorks:
        'Η Ocean Voyager χρησιμοποιεί πυρήνα drop-stitch PVC στα 15 PSI με κατάστρωμα 32 ιντσών. Η γεωμετρική απεικόνιση της χελώνας στη μύρη χρησιμοποιεί ψηφιακή εκτύπωση UV, ενώ το πατάκι EVA χρησιμοποιεί τεχνική πολύχρωμων μπλοκ για τη σιλουέτα της χελώνας και τα σχήματα κοραλλιών. Όλα τα αξεσουάρ είναι χρωματικά συντονισμένα.',
      audience:
        'Λάτρεις της θάλασσας και των ωκεανών, θαυμαστές των θαλάσσιων χελωνών, μοντέρνοι paddlers και ταξιδιώτες boutique που θέλουν ένα premium πακέτο με συντονισμένο lifestyle.',
      ai_use_cases: [
        'Paddleboarding με θέμα την προστασία των θαλασσών',
        'Δημιουργία περιεχομένου για κοινωνικά δίκτυα',
        'Touring paddling μεγαλύτερης διάρκειας και εξερεύνηση',
      ],
      ai_comparison:
        'Σε σύγκριση με τις κοινές εκτυπωμένες σανίδες SUP, η Ocean Voyager χρησιμοποιεί τεχνική πολύχρωμων μπλοκ EVA που δεν γρατζουνίζεται, δεν ξεφλουδίζει και δεν ξεθωριάζει ποτέ. Η ακρίβεια της κοπής με μήτρα εξασφαλίζει εντελώς επίπεδες επιφάνειες κάτω από τα πόδια.',
      ai_faq: [
        {
          q: 'Ποια είναι η έμπνευση της ονομασίας;',
          a: 'Η θαλάσσια χελώνα είναι η κορυφαία ωκεανοπόρος της φύσης, που διασχεί χιλιάδες μίλια με αβίαστη χάρη. Η Ocean Voyager αποτυπώνει το πνεύμα της μακροπρόθεσμης εξερεύνησης και της αρμονίας με τη θαλάσσια ζωή.',
        },
        {
          q: 'Ξεθωριάζει το έργο τέχνης;',
          a: 'Όχι. Τα γραφικά στο πατάκι EVA χρησιμοποιούν τεχνική πολύχρωμων μπλοκ — τα χρώματα είναι εγγενή στο υλικό EVA και όχι εκτυπωμένο μελάνι. Τα γραφικά δεν γρατζουνίζονται, δεν ξεφλουδίζουν και δεν ξεθωριάζουν ποτέ, ακόμα και με σκληρή χρήση.',
        },
      ],
    },
    'sup-dolphin-wave': {
      definition:
        'Μια allround φουσκωτή σανίδα SUP 11 ποδών με θαλασσινό τοπίο δελφινιών σε σύνθεση χρωματικών μπλοκ EVA κομμένων με μήτρα CNC και μεταξοτυπημένα συνεχόμενα κύματα στην πλευρική ζώνη.',
      problem:
        'Καλλιτεχνικά ευαισθητοποιημένοι paddlers χρειάζονται τέχνη SUP που επιβιώνει από φούσκωμα υψηλής πίεσης (15 PSI) και σφιχτό τύλιγμα για αποθήκευση χωρίς να ραγίζει, να δημιουργεί πτυχώσεις ή να μαλακώνουν τα χρώματα.',
      howItWorks:
        'Η Dolphin Wave χρησιμοποιεί πυρήνα drop-stitch PVC στα 15 PSI. Η ζώνη στήριξης χρησιμοποιεί σύνθεση χρωματικών μπλοκ EVA κομμένων με μήτρα CNC σε σχήμα παζλ, όπου τα χρώματα είναι εγγενή στο υλικό. Η πλευρική ζώνη χρησιμοποιεί συνεχόμενη μεταξοτυπία για να συνεχίζει τα μοτίβα των κυμάτων γύρω από τις πλευρές. Τα μελάνια UV έχουν επιμήκυνση 150% για αντοχή στο σπάσιμο.',
      audience:
        'Λάτρεις της θαλάσσιας ζωής, paddlers που εκτιμούν τη λεπτομερή τέχνη και όσοι θέλουν μια σανίδα με οπτική συνέχεια 360 μοιρών.',
      ai_use_cases: [
        'Paddleboarding με θέμα τη θαλάσσια ζωή',
        'Paddling αναψυχής σε λίμνες και κατά μήκος της ακτής',
        'Περιεχόμενο για κοινωνικά δίκτυα και lifestyle',
      ],
      ai_comparison:
        'Σε σύγκριση με τις κοινές εκτυπωμένες σανίδες SUP, η Dolphin Wave χρησιμοποιεί φυσική σύνθεση χρωματικών μπλοκ EVA στη ζώνη στήριξης και μεταξοτυπημένα κύματα στις πλευρές για οπτική συνέχεια 360 μοιρών. Το εύπλαστο μελάνι UV με επιμήκυνση 150% αποτρέπει το ράγισμα.',
      ai_faq: [
        {
          q: 'Ποια χρώματα χρησιμοποιούνται;',
          a: 'Medieval Blue για τα βαθιά κύματα, Serenity για τις ήρεμες αποχρώσεις, με λευκές λεπτομέρειες αφρού. Η χρωματική παλέτα ακολουθεί τα πρότυπα PANTONE TPG για ακριβή αναπαραγωγή.',
        },
        {
          q: 'Πώς εφαρμόζονται τα κύματα στις πλευρές;',
          a: 'Η πλευρική ζώνη χρησιμοποιεί συνεχή διαδικασία μεταξοτυπίας σε συμπαγές πράσινο μέντας PVC δύο στρωμάτων, οδηγώντας με οικονομικό τρόπο το μοτίβο των κυμάτων γύρω από τις πλευρές της σανίδας.',
        },
      ],
    },
    'sup-flowing-lotus': {
      definition:
        'Μια allround φουσκωτή σανίδα SUP 11 ποδών με παραδοσιακή ανατολική αισθητική πινελιάς, πατάκι EVA με laser χαραγή δύο στρωμάτων και έργο τέχνης ντεγκραντέ σε ψηφιακή εκτύπωση UV.',
      problem:
        'Paddlers που αναζητούν καλλιτεχνική και πολιτισμική έκφραση στο νερό χρειάζονται τέχνη premium που αντέχει τη βαριά κίνηση και το αλμυρό νερό χωρίς να φθείρεται ή να ξεθωριάζει.',
      howItWorks:
        'Η Flowing Lotus χρησιμοποιεί πυρήνα drop-stitch PVC στα 15 PSI. Το πατάκι EVA χρησιμοποιεί laser χαραγή σε σύνθετο υλικό δύο στρωμάτων — το laser απομακρύνει το πάνω χρωματιστό στρώμα για να αποκαλύψει το κάτω χρώμα, δημιουργώντας μόνιμα μοτίβα. Το ντεγκραντέ στη μύρη χρησιμοποιεί εύπλαστα μελάνια UV υψηλής επιμήκυνσης για αντοχή στο σπάσιμο.',
      audience:
        'Εκπαιδευτές yoga, λάτρεις του διαλογισμού, λάτρεις της ανατολικής τέχνης και paddlers που εκτιμούν την πολιτισμική αισθητική και την premium χειροτεχνία.',
      ai_use_cases: [
        'Yoga και διαλογιστικό paddleboarding',
        'Πολιτιστικές και καλλιτεχνικές θαλάσσιες εμπειρίες',
        'Paddling αναψυχής σε λίμνες και ποτάμια',
      ],
      ai_comparison:
        'Σε σύγκριση με τις κοινές εκτυπωμένες σανίδες SUP, η Flowing Lotus χρησιμοποιεί τεχνολογία laser χαραγής που χαράσσει μόνιμα μοτίβα στο υλικό EVA — το έργο τέχνης δεν μπορεί να φθείρεται ή να ξεθωριάζει, επειδή είναι δομικό μέρος του πατακιού.',
      ai_faq: [
        {
          q: 'Πώς λειτουργεί η laser χαραγή;',
          a: 'Ένα σύνθετο πατάκι EVA δύο στρωμάτων (βάση πετρόλ με επιφάνεια πράσινο μέντας) χαράσσεται με laser — το laser αφαιρεί το πάνω στρώμα για να αποκαλύψει το κάτω χρώμα, δημιουργώντας μόνιμα μοτίβα με ανάγλυφη υφή 3D.',
        },
        {
          q: 'Τι κάνει τη σανίδα κατάλληλη για yoga;',
          a: 'Τα μοτίβα με laser χαραγή προσφέρουν εξαιρετική αντιολισθητική πρόσφυση χωρίς να είναι λειαντικά, ενώ το ντεγκραντέ σχέδιο δημιουργεί μια καταπραϋντική αισθητική που είναι ιδανική για διαλογισμό και yoga στο νερό.',
        },
      ],
    },
    'sup-jungle-mandala': {
      definition:
        'Μια allround φουσκωτή σανίδα SUP 11 ποδών με τροπικό έργο τέχνης mandala σε EVA με laser χαραγή δύο στρωμάτων, γεωμετρία ανθεκτική σε παραμόρφωση και μεταξοτυπημένες συνεχόμενες πλευρές.',
      problem:
        'Paddlers θέλουν γεωμετρικά σύνθετη τέχνη που παραμένει εντελώς συμμετρική και απαράλλακτη ακόμα και όταν η σανίδα φουσκώνεται σε υψηλή πίεση, χωρίς μετατόπιση του μοτίβου κατά την παραγωγή.',
      howItWorks:
        'Η Jungle Mandala χρησιμοποιεί πυρήνα drop-stitch PVC στα 15 PSI. Η γεωμετρία της mandala έχει υποστεί δομική πάχυνση γραμμών για να εξουδετερώσει τις μικροελλείψεις της επιφάνειας PVC. Το πατάκι EVA χρησιμοποιεί laser χαραγή δύο στρωμάτων. Τα μοτίβα των πλευρών χρησιμοποιούν ένα αραιό, μη άκαμπτο μοτίβο που καλύπτει τις ανοχές της χειροκίνητης συναρμολόγησης.',
      audience:
        'Πνευματικοί και καλλιτεχνικοί paddlers, τροπικοί εξερευνητές, λάτρεις yoga και όσοι έλκονται από γεωμετρική και mandala αισθητική.',
      ai_use_cases: [
        'Πνευματικό και διαλογιστικό paddleboarding',
        'Τροπικές παράκτιες περιπέτειες',
        'Δημιουργία περιεχομένου για κοινωνικά δίκτυα',
      ],
      ai_comparison:
        'Σε σύγκριση με τις κοινές σανίδες SUP, η Jungle Mandala έχει γεωμετρία mandala ανθεκτική σε παραμόρφωση, σχεδιασμένη να παραμένει εντελώς συμμετρική σε φούσκωμα 15 PSI, με οικονομικά μεταξοτυπημένα μοτίβα πλευρών.',
      ai_faq: [
        {
          q: 'Παραμορφώνεται το μοτίβο mandala με το φούσκωμα;',
          a: 'Όχι. Οι γεωμετρικές γραμμές έχουν υποστεί δομική πάχυνση ειδικά για να εξουδετερώσουν τις μικροελλείψεις της επιφάνειας PVC και παραμένουν εντελώς συμμετρικές σε πλήρη πίεση.',
        },
        {
          q: 'Πώς εφαρμόζεται η τέχνη στις πλευρές;',
          a: 'Τα μοτίβα κολιμπρί και πεταλούδας στις πλευρικές επιφάνειες χρησιμοποιούν συνεχή διαδικασία μεταξοτυπίας με ένα αραιό, μη άκαμπτο μοτίβο που καλύπτει τις ανοχές διαστολής κατά τη χειροκίνητη συναρμολόγηση.',
        },
      ],
    },
    'sup-tropical-breeze': {
      definition:
        'Μια allround φουσκωτή σανίδα SUP 11 ποδών με απεικόνιση μικροτοπίου και αφηρημένη σύνθεση χρωματικών μπλοκ EVA, που ενσωματώνει απρόσκοπτα μια σκηνή διακοπών σε νησί στο σχέδιο της σανίδας.',
      problem:
        'Paddlers θέλουν μια σανίδα που δημιουργεί μια πλήρη καθηλωτική εμπειρία — που μετατρέπει τον εξοπλισμό των θαλάσσιων σπορ σε καμβά που τους μεταφέρει σε ένα τροπικό παράδεισο.',
      howItWorks:
        'Η Tropical Breeze χρησιμοποιεί πυρήνα drop-stitch PVC στα 15 PSI με κατάστρωμα 32 ιντσών. Η μύρη φέρει ψηφιακά εκτυπωμένη απεικόνιση μικροτοπίου. Η ζώνη στήριξης EVA χρησιμοποιεί κομμένη με μήτρα αφηρημένη σύνθεση χρωματικών μπλοκ που συνεχίζει την οπτική αφήγηση των κυμάτων, της παραλίας και των φοίνικων σε όλη τη σανίδα.',
      audience:
        'Ταξιδιώτες διακοπών, τροπικοί λάτρεις του lifestyle, δημιουργοί περιεχομένου για κοινωνικά δίκτυα και paddlers που θέλουν μια σανίδα που αποτυπώνει το πνεύμα της απόδρασης σε νησί.',
      ai_use_cases: [
        'Paddleboarding σε τροπικές διακοπές',
        'Δημιουργία περιεχομένου για κοινωνικά δίκτυα',
        'Αναψυχή σε λίμνες και κατά μήκος της ακτής',
      ],
      ai_comparison:
        'Σε σύγκριση με τις κοινές σανίδες SUP, η Tropical Breeze ενσωματώνει μοναδικά μια ολοκληρωμένη σκηνή τοπίου σε όλη την επιφάνεια της σανίδας, με άψογη κατανομή εργασίας μεταξύ ψηφιακής εκτύπωσης για τις λεπτομέρειες και μπλοκ EVA για την αντοχή.',
      ai_faq: [
        {
          q: 'Ποια σκηνή απεικονίζεται στη σανίδα;',
          a: 'Ένα ονειρικό παραδεισιακό νησί με ηλιοφάνεια, φυτείες καρύδας, παραλία και φοίνικες — μια απεικόνιση μικροτοπίου στη μύρη που περνά σε αφηρημένη σύνθεση χρωματικών μπλοκ EVA προς την πρύμνη.',
        },
        {
          q: 'Πώς εξελίσσεται το έργο τέχνης από τη μύρη στην πρύμνη;',
          a: 'Η μύρη χρησιμοποιεί λεπτομερή ψηφιακή εκτύπωση για την απεικόνιση του τοπίου, ενώ η πρύμνη χρησιμοποιεί κομμένη με μήτρα σύνθεση χρωματικών μπλοκ EVA που αφηρεί τα κύματα, την άμμο και τους φοίνικες — δημιουργώντας ένα απρόσκοπτο οπτικό ταξίδι.',
        },
      ],
    },
  },
  no: {
    'life-vest-classic': {
      definition: 'Et CE-sertifisert universelt flytehjelpemiddel for fritidsvannsport i alle vannmiljøer.',
      problem:
        'Utøvere av vannsport på alle nivåer trenger en pålitelig og komfortabel redningsvest som oppfyller internasjonale sikkerhetsstandarder uten å begrense bevegelsesfriheten.',
      howItWorks:
        'Redningsvesten Classic bruker skumfylte flytekamre med justerbare bryst- og sidebelter for en sikker passform. Den finnes i flere størrelser og inkluderer en nødfløyte, refleksstriper og et redningsgrep.',
      audience:
        'Fritidspaddlere, fritidsseilere, sportsfiskere og nybegynnere i vannsport som trenger CE-sertifisert oppdrift for innsjøer, elver og kystfarvann.',
      ai_use_cases: [
        'Sikkerhet ved fritidsvannsport',
        'Oppdrift for trening og tilsyn',
        'Familieaktiviteter på vannet',
      ],
      ai_comparison:
        'Sammenlignet med automatiske oppustbare redningsvester gir Redningsvesten Classic konstant oppdrift uten aktivering. Den er mer voluminøs, men mer pålitelig for fritidsbrukere som kanskje ikke vedlikeholder automatiske mekanismer.',
      ai_faq: [
        {
          q: 'Passer denne redningsvesten til barn?',
          a: 'Ja, det finnes størrelser for barn. CE- og USCG-sertifisert for de angitte vektklassene.',
        },
        {
          q: 'Krever den vedlikehold?',
          a: 'Minimalt vedlikehold. Skyll med ferskvann etter bruk. Kontroller kamre og belter før hver bruk. Bytt ved skader.',
        },
      ],
    },
    'life-vest-pro': {
      definition:
        'En redningsvest i profesjonell klasse i henhold til SOLAS med automatisk oppustning til offshore-, rednings- og kommersiell maritim bruk.',
      problem:
        'Profesjonelle sjøfolk og redningspersonell trenger en redningsvest som gir automatisk oppustning, høy oppdrift og SOLAS-godkjent synlighet til offshore-operasjoner.',
      howItWorks:
        'Redningsvesten Pro bruker en automatisk hydrostatisk oppustningsmekanisme med et manuelt oppustningsrør som backup. Den inkluderer refleksbånd i SOLAS-klasse, en sprayhette, en nødfløyte, et vanntett lys og et festepunkt for løftesele.',
      audience:
        'Kommersielle sjøfolk, redningsprofesjonelle, offshore-arbeidere og avanserte fritidsseilere som trenger SOLAS-godkjente automatiske redningsvester.',
      ai_use_cases: [
        'Sikkerhet ved maritime offshore-operasjoner',
        'Profesjonell redning og beredskap',
        'Kommersiell maritim regeloverholdelse',
      ],
      ai_comparison:
        'Sammenlignet med skumfylte redningsvester blåser Redningsvesten Pro seg automatisk opp for minimalt volum under normal bruk. Den krever årlig service av den hydrostatiske mekanismen og batteribytte.',
      ai_faq: [
        {
          q: 'Hvordan fungerer den automatiske oppustningen?',
          a: 'En hydrostatisk utløser aktiveres ved neddykking i vann på 0,5-1,0 meters dyp. Et manuelt oppustningsrør er også inkludert som backup.',
        },
        {
          q: 'Hvor ofte skal den serviceres?',
          a: 'Årlig service av den hydrostatiske mekanismen anbefales. CO2-sylinderen bør kontrolleres og byttes i henhold til produsentens tidsplan.',
        },
      ],
    },
    'oars-pump-set': {
      definition:
        'En komplett tilbehørspakke med et par 1,6m aluminiumsårer med plastblader og en kraftig 5L fotpumpe med høy luftstrøm og manometer til alle oppustelige vannfartøy.',
      problem:
        'Eiere av oppustelige båter trenger erstatnings- eller reserveårer og en høyvolumpumpe for oppustning og fremdrift, alt kompatibelt med standard oppustelige vannfartøy.',
      howItWorks:
        'Årene har aluminiumsskaft med plastblader for lett fremdrift. Fotpumpen leverer 5 liter luft per slag med innebygd manometer for presis oppustning.',
      audience:
        'Eiere av oppustelige båter, kajakker og joller som trenger reserve- eller erstatningsårer og en kraftig oppustningspumpe.',
      ai_use_cases: [
        'Erstatningsårer til oppustelige båter',
        'Høyvolum-oppustning ved sjøsetting',
        'Reservefremdrift og oppustningsutstyr',
      ],
      ai_comparison:
        'Sammenlignet med den dobbeltvirkende pumpen gir denne fotpumpen høyere volum per slag, men krever mer anstrengelse. Årene gir et grunnleggende alternativ for fremdrift til oppustelige båter uten påhengsmotor.',
      ai_faq: [
        {
          q: 'Passer årene til alle oppustelige båter?',
          a: 'Årene passer standard årefester på de fleste oppustelige båtene i sortimentet. Lengden 1,6m egner seg for båter opptil 4m.',
        },
        {
          q: 'Hvilket trykk kan fotpumpen oppnå?',
          a: 'Fotpumpen kan oppnå opptil 12-15 PSI, som passer til de fleste oppustelige båter og joller. Den er kanskje ikke tilstrekkelig for høytrykks SUP-brett som krever 18+ PSI.',
        },
      ],
    },
    'sup-explorer-11': {
      definition:
        'Et 11-fots allround oppustelig SUP-brett bygget for stabilitet, portabilitet og fritidsbruk på innsjøer, elver og beskyttede kystfarvann.',
      problem:
        'Nybegynnerpaddlere og fritidsbrukere trenger et stabilt og transportabelt SUP-brett som er lett å blåse opp, lett å balansere på og tilgivende å lære på.',
      howItWorks:
        "SUP Explorer 11' bruker drop-stitch-kjerneteknologi for en stivhet på 15 PSI og et bredt dekk på 32 tommer for sideveis stabilitet. Brettet inkluderer en avtagbar midtfinne, en spiralformet leash og en dobbeltvirkende håndpumpe for rask oppustning ved sjøsettingsplassen.",
      audience:
        'Nybegynnerpaddlere, fritidsbrukere, familier og treningsentusiaster som ønsker et transportabelt og stabilt SUP-brett for innsjøer, elver og beskyttede kystfarvann.',
      ai_use_cases: [
        'SUP-trening og nybegynneropplæring',
        'Fritidspaddling på innsjøer og elver',
        'Trening og yoga på vannet',
      ],
      ai_comparison:
        "Sammenlignet med harde epoxybrett tilbyr SUP Explorer 11' overlegen portabilitet og enklere oppbevaring med stivheten fra drop-stitch-konstruksjonen. Det er tyngre enn et hardt brett, men pakkes i en ryggsekk for reiser.",
      ai_faq: [
        {
          q: 'Hvilket trykk er ideelt?',
          a: '12-15 PSI anbefales. Brettet yter best ved 15 PSI for maksimal stivhet.',
        },
        {
          q: 'Følger en padleåre med?',
          a: 'En justerbar aluminiumspadleåre er inkludert i den komplette pakken.',
        },
      ],
    },
    'sup-cheetah-surge': {
      definition:
        'Et 11-fots allround oppustelig SUP-brett med dristig gepard-tema i flerfarget EVA-blokkeknikk og UV-digitaltrykk, bygget for fritidspaddling på innsjøer, elver og beskyttede kystfarvann.',
      problem:
        'Paddlere som ønsker et brett som skiller seg ut visuelt, trenger premium-kunst som ikke falmer, flasser eller ripes av saltvann og UV-eksponering. Tradisjonelle trykkmetoder svikter under disse forholdene.',
      howItWorks:
        'Cheetah Surge Edition bruker drop-stitch PVC-kjerneteknologi som oppnår stivhet ved 15 PSI med et bredt dekk på 32 tommer. Kunsthåndverket på dekkputen skapes gjennom flerfarget EVA-blokkeknikk — EVA-ark i ulike farger stanses ut og settes sammen sømløst som et puslespill i stedet for å trykkes, noe som garanterer null falming eller flassing.',
      audience:
        'Motebevisste paddlere, friluftsentusiaster, boutique-reisende og skapere av innhold for sosiale medier som ønsker et iøynefallende og holdbart SUP-brett.',
      ai_use_cases: [
        'Skaping av innhold for sosiale medier på vannet',
        'Fritidspaddling på innsjøer og elver',
        'Boutique-reiser og eventyrturisme',
      ],
      ai_comparison:
        'Sammenlignet med vanlige trykte SUP-brett bruker Cheetah Surge Edition stanset EVA-blokkeknikk som aldri falmer eller flasser. Kunsthåndverket er en strukturell del av EVA-materialet fremfor et overfladisk trykk.',
      ai_faq: [
        {
          q: 'Hvordan påføres kunsten?',
          a: 'Kunsten bruker flerfarget EVA-blokkeknikk — EVA-skumark i ulike farger stanses presist ut og settes sammen sømløst som et puslespill. Det finnes ingen trykkfarge på ståflaten.',
        },
        {
          q: 'Falmer kunsten i saltvann?',
          a: 'Nei. Fordi fargene er innebygd i EVA-materialet fremfor et overfladisk blekklag, falmer, flasser eller ripes kunsten aldri av saltvann, UV eller fottrafikk.',
        },
      ],
    },
    'sup-leviathan-wake': {
      definition:
        'Et 11-fots allround oppustelig SUP-brett med et betagende blåhval-totem i UV-digitaltrykk og mekanisk reliekkpreget dekkpute.',
      problem:
        'Paddlere som søker kunstneriske SUP-brett, trenger kunstverk som forblir levende ved høytrykksoppustning og gjentatt rulling for oppbevaring. Standardblekk sprekker og flasser.',
      howItWorks:
        'Leviathan Wake bruker en drop-stitch PVC-kjerne ved 15 PSI med et dekk på 32 tommer. Motivet på baugen trykkes med høy presisjons-UV-digitaltrykk, mens logoen på undersiden silketrykkes med høyelastiske PVC-blekkfarger. Dekkputen er mekanisk reliekkpreget med holdbare bølgemønstre.',
      audience:
        'Entusiaster for hav og marint liv, kunstneriske paddlere og alle som ønsker et visuelt markant SUP-brett med holdbar kunst i høy kvalitet.',
      ai_use_cases: [
        'Vanneventyr med marint tema',
        'Fritidspaddling på innsjøer og langs kysten',
        'Kunstnerisk og livsstilsorientert padling',
      ],
      ai_comparison:
        'Sammenlignet med vanlige SUP-brett har Leviathan Wake et totemisk hvalmotiv med doble trykketeknikker optimalisert for holdbarhet. Den mekanisk reliekkpregete dekkputen varer lenger enn trykte puter.',
      ai_faq: [
        {
          q: 'Er logoen på undersiden holdbar?',
          a: 'Ja. Logoen på undersiden silketrykkes med høyelastiske PVC-blekkfarger som er vurdert for 15 PSI-oppustning og gjentatt rulling.',
        },
        {
          q: 'Hva er spesielt med dekkputen?',
          a: 'Bølgemønstrene er mekanisk reliekkpreget i to-lags kompositt-EVA, noe som sikrer jevn dybde, utmerket vannavledning og langvarig sklisikkerhet.',
        },
      ],
    },
    'sup-medusa-glow': {
      definition:
        'Et 11-fots allround oppustelig SUP-brett med manet- og korallrev-tema i flerfarget EVA-blokkeknikk og konstruksjonsløsninger mot delaminering.',
      problem:
        'Paddlere som elsker havinspirert kunst, trenger et brett med premium-grafikk som motstår tøffe marine miljøer uten å falme, flasse eller delaminere ved festepunkter.',
      howItWorks:
        'Medusa Glow bruker en drop-stitch PVC-kjerne ved 15 PSI med et dekk på 32 tommer. Motivet på baugen er UV-digitaltrykket, mens EVA-puten bruker flerfarget blokkeknikk for falming-frie sjøstjerner og muslingskall. D-ring-områdene maskeres for rå PVC-til-PVC-binding som forhindrer delaminering.',
      audience:
        'Kvinnelige paddlere, livsstilsentusiaster, boutique-reisende og alle som ønsker en helbredende havinspirert estetikk på vannet.',
      ai_use_cases: [
        'Yoga og trening på padlebrett',
        'Skaping av innhold for sosiale medier',
        'Tropiske og kystnære padleeventyr',
      ],
      ai_comparison:
        'Sammenlignet med vanlige trykte SUP-brett bruker Medusa Glow EVA-blokkeknikk for grafikken på ståflaten — fargene er strukturelle i EVA-materialet, ikke trykt blekk, så de falmer aldri.',
      ai_faq: [
        {
          q: 'Hva er fargepaletten?',
          a: 'Forfriskende myntegrønn base med dyp petrol EVA-pute med hvite stansede blokker i sjøstjerne- og muslingform samt livlige koralloransje accenter.',
        },
        {
          q: 'Hvordan er håndtaket festet?',
          a: 'Neopren-håndtaket i midten er forankret gjennom EVA-puten direkte i skrogets PVC-substrat, slik at løftebelastninger bæres av det stive skroget.',
        },
      ],
    },
    'sup-ocean-pulse': {
      definition:
        'Et 11-fots allround oppustelig SUP-brett med topografisk bølgemønster i UV-digitaltrykk og mekanisk reliekkpreget dekkpute, med fargekoordinert tilbehør.',
      problem:
        'Stilbevisste paddlere ønsker en komplett visuell opplevelse — ikke bare et vakkert brett, men koordinert tilbehør som bevarer estetikken fra oppbevaring til vann.',
      howItWorks:
        'Ocean Pulse bruker en drop-stitch PVC-kjerne ved 15 PSI. Bølgekonturene påføres med høy presisjons-UV-trykk. EVA-puten er mekanisk reliekkpreget med bølgeteksturer. Alt tilbehør — ryggsekk, pumpe, leash — gjennomgår ensartet fargetilpasning som matcher brettets design.',
      audience:
        'Kvinnelige paddlere, trendbevisste livsstilsentusiaster, boutique-campere og paddlere som verdsetter koordinert estetikk i hele utstyret.',
      ai_use_cases: [
        'Padling for Instagram og sosiale medier',
        'Boutique-reiser og camping',
        'Fritidspaddling på innsjøer og langs kysten',
      ],
      ai_comparison:
        'Sammenlignet med vanlige SUP-brett tilbyr Ocean Pulse en komplett koordinert visuell identitet på tvers av brettet og alt tilbehør, med mekanisk reliekkpreget EVA for bedre holdbarhet enn trykte dekkputer.',
      ai_faq: [
        {
          q: 'Hvilket tilbehør er fargetilpasset?',
          a: 'Reiseryggsekken med hjul, den dobbeltvirkende høytrykkspumpen, sikkerhetsleashen og de vanntette telefonposene gjennomgår alle ensartet fargematching og merkevaretilpasning.',
        },
        {
          q: 'Hvordan skapes mønstret på dekkputen?',
          a: 'Bølgemønstrene dannes gjennom høy presisjons mekanisk reliekkpresning på to-lags kompositt-EVA, noe som sikrer jevn dybde og utmerket vannavledning.',
        },
      ],
    },
    'sup-ocean-voyager': {
      definition:
        'Et 11-fots allround oppustelig SUP-brett med geometrisk havskilpadde-kunstverk i flerfarget EVA-blokkeknikk og UV-digitaltrykk, med gjennomført visuell identitet i tilbehøret.',
      problem:
        'Havbevisste paddlere ønsker et brett som feirer marint liv med premium-kunst som forblir levende i årevis uten å falme eller flasse av saltvann.',
      howItWorks:
        'Ocean Voyager bruker en drop-stitch PVC-kjerne ved 15 PSI med et dekk på 32 tommer. Den geometriske skilpaddeillustrasjonen på baugen bruker UV-digitaltrykk, mens EVA-puten bruker flerfarget blokkeknikk for skilpaddesilhuetten og korallformene. Alt tilbehør er fargekoordinert.',
      audience:
        'Havelskere, skilpadde-entusiaster, trendbevisste paddlere og boutique-reisende som ønsker en premium-pakke med koordinert livsstil.',
      ai_use_cases: [
        'Padling med marint bevaringstema',
        'Skaping av innhold for sosiale medier',
        'Lengre turpadling og utforskning',
      ],
      ai_comparison:
        'Sammenlignet med vanlige trykte SUP-brett bruker Ocean Voyager flerfarget EVA-blokkeknikk som aldri ripes, flasser eller falmer. Den stansede presisjonen sikrer helt flate overflater under føttene.',
      ai_faq: [
        {
          q: 'Hva er navneinspirasjonen?',
          a: 'Havskilpadden er naturens ypperste havvandrer, som navigerer tusenvis av miles med uanstrengt ynde. Ocean Voyager fanger ånden i langsiktig utforskning og harmoni med marint liv.',
        },
        {
          q: 'Falmer kunstverket?',
          a: 'Nei. Grafikken på EVA-puten bruker flerfarget blokkeknikk — fargene er innebygd i EVA-materialet, ikke trykt blekk. Grafikken ripes, flasser eller falmer aldri, selv ved hard bruk.',
        },
      ],
    },
    'sup-dolphin-wave': {
      definition:
        'Et 11-fots allround oppustelig SUP-brett med delfin-havlandskapskunstverk, laget med CNC-stanset EVA-fargeblokksammensetting og silketrykte kontinuerlige bølger på sidebåndet.',
      problem:
        'Kunstinteresserte paddlere trenger SUP-kunstverk som overlever høytrykksoppustning (15 PSI) og stram rullelagring uten å sprekke, krølle eller gi avfarging.',
      howItWorks:
        'Dolphin Wave bruker en drop-stitch PVC-kjerne ved 15 PSI. Ståsonen bruker CNC-stanset EVA-blokkeknikk der fargene er innebygd i materialet. Sidebåndet bruker kontinuerlig silketrykk for å forlenge bølgemotivene rundt sidene. UV-blekkfargene har 150% elongasjon for sprekkmotstand.',
      audience:
        'Entusiaster for marint dyreliv, paddlere som setter pris på detaljerte kunstverk, og alle som ønsker et brett med 360-graders visuell kontinuitet.',
      ai_use_cases: [
        'Padling med marint dyreliv-tema',
        'Fritidspaddling på innsjøer og langs kysten',
        'Innhold for sosiale medier og livsstil',
      ],
      ai_comparison:
        'Sammenlignet med vanlige trykte SUP-brett bruker Dolphin Wave fysisk EVA-blokkeknikk på ståsonen og silketrykte bølger på sidene for 360-graders visuell kontinuitet. UV-blekkfargene med 150% elongasjon forhindrer sprekker.',
      ai_faq: [
        {
          q: 'Hvilke farger brukes?',
          a: 'Middelalderblå for dype bølger, Serenity for rolige toner, med hvite skumdetaljer. Fargepaletten følger PANTONE TPG-standarder for presis produksjon.',
        },
        {
          q: 'Hvordan påføres bølgene på sidene?',
          a: 'Sidebåndet bruker en kontinuerlig silketrykkprosess på solid myntegrønn dobbeltlags PVC, som kostnadseffektivt forlenger bølgemotivet rundt brettets sider.',
        },
      ],
    },
    'sup-flowing-lotus': {
      definition:
        'Et 11-fots allround oppustelig SUP-brett med tradisjonell østlig penselkunst-estetikk, laget med dobbeltlags lasergravert EVA-dekkpute og UV-digitaltrykt gradientkunstverk.',
      problem:
        'Paddlere som søker kunstnerisk og kulturelt uttrykk på vannet, trenger premium-kunstverk som tåler tung fottrafikk og saltvann uten å slites ut eller falme.',
      howItWorks:
        'Flowing Lotus bruker en drop-stitch PVC-kjerne ved 15 PSI. EVA-dekkputen bruker dobbeltlags kompositt-lasergravering — laseren gravérer bort det øverste fargelaget og avdekker den nederste fargen, noe som skaper permanente mønstre. Gradienten på baugen bruker fleksible UV-blekkfarger med høy elongasjon for sprekkmotstand.',
      audience:
        'Yogautøvere, meditasjonsentusiaster, elskere av østlig kunst og paddlere som setter pris på kulturell estetikk og premium-håndverk.',
      ai_use_cases: [
        'Yoga- og meditasjonspadling',
        'Kulturelle og kunstneriske opplevelser på vannet',
        'Fritidspaddling på innsjøer og elver',
      ],
      ai_comparison:
        'Sammenlignet med vanlige trykte SUP-brett bruker Flowing Lotus lasergraveringsteknologi som graverer mønstrene permanent inn i EVA-materialet — kunstverket kan ikke slites ut eller falme fordi det er en strukturell del av puten.',
      ai_faq: [
        {
          q: 'Hvordan fungerer lasergraveringen?',
          a: 'En dobbeltlags kompositt-EVA-pute (petrolgrønn base med myntegrønn overflate) lasergraveres — laseren fjerner det øverste laget og avdekker den nederste fargen, noe som skaper permanente 3D-teksturerte mønstre.',
        },
        {
          q: 'Hvorfor egner dette brettet seg for yoga?',
          a: 'De lasergraverte mønstrene gir utmerket sklisikkerhet uten å være slipende, mens gradientdesignet skaper en beroligende estetikk som er perfekt for meditasjon og yoga på vannet.',
        },
      ],
    },
    'sup-jungle-mandala': {
      definition:
        'Et 11-fots allround oppustelig SUP-brett med tropisk mandala-kunstverk, laget med dobbeltlags lasergravert EVA, forvrengningssikker geometri og silketrykte kontinuerlige sidebånd.',
      problem:
        'Paddlere ønsker geometrisk komplekse kunstverk som forblir perfekt symmetriske og uforvrengte selv når brettet blåses opp til høyt trykk, uten mønsterfeil under produksjonen.',
      howItWorks:
        'Jungle Mandala bruker en drop-stitch PVC-kjerne ved 15 PSI. Mandala-geometrien har gjennomgått strukturell linjetykkelse for å motvirke dimpler i PVC-overflaten. EVA-puten bruker dobbeltlags lasergravering. Sidemotivene bruker et spredt, ikke-rigidt mønster som rommer strekketoleranser ved manuell montering.',
      audience:
        'Åndelige og kunstneriske paddlere, tropiske eventyrere, yogautøvere og alle som trekkes mot geometrisk og mandala-estetikk.',
      ai_use_cases: ['Åndelig og meditativ padling', 'Tropiske kysteventyr', 'Skaping av innhold for sosiale medier'],
      ai_comparison:
        'Sammenlignet med vanlige SUP-brett har Jungle Mandala forvrengningssikker mandala-geometri konstruert for å forbli perfekt symmetrisk ved 15 PSI-oppustning, med kostnadseffektive silketrykte sidemotiver.',
      ai_faq: [
        {
          q: 'Forvrenges mandalamønsteret ved oppustning?',
          a: 'Nei. De geometriske linjene har gjennomgått strukturell tykkelse spesielt for å motvirke dimpler i PVC-overflaten og forblir perfekt symmetriske ved fullt oppblåsningstrykk.',
        },
        {
          q: 'Hvordan påføres kunsten på sidene?',
          a: 'Kolibri- og sommerfuglmotivene på sidene bruker en kontinuerlig silketrykkprosess med et spredt, ikke-rigidt mønster som rommer strekketoleransene ved manuell montering.',
        },
      ],
    },
    'sup-tropical-breeze': {
      definition:
        'Et 11-fots allround oppustelig SUP-brett med mikro-landskapsillustrasjon og abstrakt EVA-blokkeknikk som sømløst integrerer en øyferie-scene i brettets design.',
      problem:
        'Paddlere ønsker et brett som skaper en komplett oppslukende opplevelse — som forvandler vannsportsutstyr til et lerret som fører dem til et tropisk paradis.',
      howItWorks:
        'Tropical Breeze bruker en drop-stitch PVC-kjerne ved 15 PSI med et dekk på 32 tommer. Baugen har en digitaltrykt mikro-landskapsillustrasjon. EVA-ståsonen bruker stanset abstrakt fargeblokkering som forlenger den visuelle fortellingen av bølger, strand og palmer over hele brettet.',
      audience:
        'Feriereisende, entusiaster for tropisk livsstil, skapere av innhold for sosiale medier og paddlere som ønsker et brett som fanger ånden i flukten til øylivet.',
      ai_use_cases: [
        'Padling på tropisk ferie',
        'Skaping av innhold for sosiale medier',
        'Fritidsopphold ved innsjøer og langs kysten',
      ],
      ai_comparison:
        'Sammenlignet med vanlige SUP-brett integrerer Tropical Breeze unikt en komplett landskapsscene over hele brettoverflaten, med en perfekt arbeidsdeling mellom digitaltrykk for detaljer og EVA-lappeteknikk for holdbarhet.',
      ai_faq: [
        {
          q: 'Hvilken scene er avbildet på brettet?',
          a: 'Et drømmeaktig øyparadis med solskinn, kokoslund, strand og palmer — en mikro-landskapsillustrasjon på baugen som går over i abstrakt EVA-blokkeknikk mot akteren.',
        },
        {
          q: 'Hvordan overgår kunstverket fra baug til akter?',
          a: 'Baugen bruker detaljert digitaltrykk for landskapsillustrasjonen, mens akteren bruker stanset EVA-blokkeknikk som abstraherer bølgene, sanden og palmene — noe som skaper en sømløs visuell reise.',
        },
      ],
    },
  },
  ru: {
    'life-vest-classic': {
      definition:
        'Сертифицированное CE универсальное спасательное снаряжение для любительского водного спорта в любых акваториях.',
      problem:
        'Любителям водного спорта любого уровня нужно надёжное и удобное спасательное снаряжение, соответствующее международным стандартам безопасности и не ограничивающее свободу движений.',
      howItWorks:
        'Спасательный жилет Classic использует пенопластовые камеры плавучести с регулируемыми грудными и боковыми ремнями для надёжной посадки. Он выпускается в нескольких размерах и включает аварийный свисток, светоотражающие полосы и ручку для извлечения из воды.',
      audience:
        'Любители гребли, яхтсмены-любители, рыбаки и новички в водном спорте, которым нужна сертифицированная CE плавучесть для озёр, рек и прибрежных вод.',
      ai_use_cases: [
        'Безопасность при любительском водном спорте',
        'Плавучесть для тренировок и присмотра',
        'Семейный отдых на воде',
      ],
      ai_comparison:
        'По сравнению с автоматическими надувными спасательными жилетами жилет Classic обеспечивает постоянную плавучесть без активации. Он более объёмный, но более надёжный для любителей, которые могут не обслуживать автоматические механизмы.',
      ai_faq: [
        {
          q: 'Подходит ли этот жилет для детей?',
          a: 'Да, доступны детские размеры. Сертификация CE и USCG для указанных весовых категорий.',
        },
        {
          q: 'Требуется ли обслуживание?',
          a: 'Минимальное обслуживание. Прополощите пресной водой после использования. Проверяйте камеры и ремни перед каждым применением. Замените при повреждениях.',
        },
      ],
    },
    'life-vest-pro': {
      definition:
        'Спасательный жилет профессионального класса по стандарту SOLAS с автоматическим надуванием для офшорных, спасательных и коммерческих морских операций.',
      problem:
        'Профессиональным морякам и спасателям нужен жилет с автоматическим надуванием, высокой плавучестью и видимостью по стандарту SOLAS для офшорных операций.',
      howItWorks:
        'Жилет Pro использует автоматический гидростатический механизм надувания с ручной трубкой для подкачки в качестве резерва. Он включает светоотражающие полосы класса SOLAS, брызгозащитный капюшон, аварийный свисток, водонепроницаемый фонарь и точку крепления подъёмной стропы.',
      audience:
        'Коммерческие моряки, спасатели-профессионалы, офшорные работники и опытные яхтсмены, которым нужны автоматические спасательные жилеты по стандарту SOLAS.',
      ai_use_cases: [
        'Безопасность при морских офшорных операциях',
        'Профессиональные спасение и готовность',
        'Соблюдение коммерческих морских норм',
      ],
      ai_comparison:
        'По сравнению с пенопластовыми жилетами жилет Pro надувается автоматически, обеспечивая минимальный объём при повседневном использовании. Он требует ежегодного обслуживания гидростатического механизма и замены батареи.',
      ai_faq: [
        {
          q: 'Как работает автоматическое надувание?',
          a: 'Гидростатический активатор срабатывает при погружении в воду на глубину 0,5-1,0 м. Ручная трубка для подкачки включена в качестве резерва.',
        },
        {
          q: 'Как часто нужно проходить обслуживание?',
          a: 'Рекомендуется ежегодное обслуживание гидростатического механизма. Баллон CO2 следует проверять и заменять по графику производителя.',
        },
      ],
    },
    'oars-pump-set': {
      definition:
        'Полный комплект аксессуаров: пара 1,6-метровых алюминиевых вёсел с пластиковыми лопастями и мощный 5-литровый ножной насос с высокой производительностью и манометром для всех надувных судов.',
      problem:
        'Владельцам надувных лодок нужны запасные или дополнительные вёсла и производительный насос для накачивания и движения — всё совместимое со стандартными надувными судами.',
      howItWorks:
        'Вёсла имеют алюминиевые древки с пластиковыми лопастями для лёгкого хода. Ножной насос подаёт 5 литров воздуха за такт со встроенным манометром для точного накачивания.',
      audience:
        'Владельцы надувных лодок, каяков и джол, которым нужны запасные или заменяющие вёсла и мощный насос для накачивания.',
      ai_use_cases: [
        'Запасные вёсла для надувных лодок',
        'Высокопроизводительное накачивание при спуске на воду',
        'Резервное движение и накачивающее снаряжение',
      ],
      ai_comparison:
        'По сравнению с двухтактным насосом этот ножной насос даёт больший объём за такт, но требует больше усилий. Вёсла служат базовым запасным средством движения для надувных лодок без мотора.',
      ai_faq: [
        {
          q: 'Подходят ли вёсла ко всем надувным лодкам?',
          a: 'Вёсла подходят к стандартным уключинам большинства надувных лодок ассортимента. Длина 1,6 м подходит для лодок длиной до 4 м.',
        },
        {
          q: 'Какое давление создаёт ножной насос?',
          a: 'Ножной насос создаёт до 12-15 PSI, что подходит для большинства надувных лодок и джол. Его может не хватить для SUP-бордов высокого давления, требующих 18+ PSI.',
        },
      ],
    },
    'sup-explorer-11': {
      definition:
        '11-футовый универсальный надувной SUP-борд, созданный для стабильности, портативности и любительского катания на озёрах, реках и защищённых прибрежных акваториях.',
      problem:
        'Новичкам и любителям нужен стабильный и портативный SUP-борд, который легко накачать, на котором легко держать баланс и который прощает ошибки при обучении.',
      howItWorks:
        "SUP Explorer 11' использует технологию drop-stitch для жёсткости 15 PSI и широкую палубу 32 дюйма для поперечной стабильности. Борд включает съёмный центральный плавник, спиральный лиш и двухтактный ручной насос для быстрого накачивания на месте спуска.",
      audience:
        'Новички, любители, семьи и энтузиасты фитнеса, которым нужен портативный и стабильный SUP-борд для озёр, рек и защищённых прибрежных вод.',
      ai_use_cases: [
        'Фитнес на SUP и обучение новичков',
        'Любительская гребля на озёрах и реках',
        'Тренировки и йога на воде',
      ],
      ai_comparison:
        "По сравнению с жёсткими эпоксидными бордами SUP Explorer 11' превосходит их по портативности и удобству хранения, сохраняя жёсткость благодаря конструкции drop-stitch. Он тяжелее жёсткого борда, но упаковывается в рюкзак для путешествий.",
      ai_faq: [
        {
          q: 'Какое давление оптимально?',
          a: 'Рекомендуется 12-15 PSI. Борд работает лучше всего при 15 PSI для максимальной жёсткости.',
        },
        {
          q: 'В комплекте есть весло?',
          a: 'Регулируемое алюминиевое весло входит в полный комплект.',
        },
      ],
    },
    'sup-cheetah-surge': {
      definition:
        '11-футовый универсальный надувной SUP-борд со смелым гепардовым дизайном, выполненным в технике разноцветной EVA-блочной инкрустации и УФ-цифровой печати, для любительской гребли на озёрах, реках и защищённых прибрежных акваториях.',
      problem:
        'Гребцам, которым нужен визуально выделяющийся борд, требуется премиальный арт, который не выцветает, не отслаивается и не царапается от солёной воды и ультрафиолета. Традиционные методы печати не выдерживают таких условий.',
      howItWorks:
        'Cheetah Surge Edition использует ядро drop-stitch ПВХ, достигающее жёсткости 15 PSI, с широкой палубой 32 дюйма. Арт-оформление подушки палубы создаётся техникой разноцветной EVA-блочной инкрустации — листы EVA разных цветов точно вырезаются и соединяются бесшовно, как пазл, вместо печати, что гарантирует нулевое выцветание и отслоение.',
      audience:
        'Следящие за стилем гребцы, энтузиасты активного отдыха, бутик-путешественники и авторы контента для соцсетей, которым нужен яркий и прочный SUP-борд.',
      ai_use_cases: [
        'Съёмка контента для соцсетей на воде',
        'Любительская гребля на озёрах и реках',
        'Бутик-путешествия и приключенческий туризм',
      ],
      ai_comparison:
        'По сравнению с обычными печатными SUP-бордами Cheetah Surge Edition использует вырезанную технику EVA-блочной инкрустации, которая никогда не выцветает и не отслаивается. Арт является структурной частью материала EVA, а не поверхностной печатью.',
      ai_faq: [
        {
          q: 'Как наносится арт?',
          a: 'Арт использует технику разноцветной EVA-блочной инкрустации — листы вспененного EVA разных цветов точно вырезаются и соединяются бесшовно, как пазл. На поверхности для стояния нет печатной краски.',
        },
        {
          q: 'Выцветает ли арт в солёной воде?',
          a: 'Нет. Поскольку цвета встроены в материал EVA, а не в поверхностный красочный слой, арт никогда не выцветает, не отслаивается и не царапается от солёной воды, ультрафиолета или пешеходной нагрузки.',
        },
      ],
    },
    'sup-leviathan-wake': {
      definition:
        '11-футовый универсальный надувной SUP-борд с захватывающим тотемным артом синего кита в технике УФ-цифровой печати и механически тиснёной рельефной подушкой палубы.',
      problem:
        'Гребцам, ищущим художественные SUP-борды, нужен арт, который остаётся живым при высоком давлении накачивания и многократном скручивании для хранения. Обычные краски трескаются и отслаиваются.',
      howItWorks:
        'Leviathan Wake использует ядро drop-stitch ПВХ при 15 PSI с палубой 32 дюйма. Мотив на носу наносится высокоточной УФ-цифровой печатью, а логотип на нижней стороне наносится шелкографией высокоэластичными ПВХ-красками. Подушка палубы механически тиснена прочным волновым узором.',
      audience:
        'Поклонники океана и морской фауны, художественно настроенные гребцы и все, кто хочет визуально выразительный SUP-борд с прочным арт-оформлением высокого качества.',
      ai_use_cases: [
        'Водные приключения с морской тематикой',
        'Любительская гребля на озёрах и вдоль побережья',
        'Художественная гребля и стиль жизни',
      ],
      ai_comparison:
        'По сравнению с обычными SUP-бордами Leviathan Wake имеет тотемный китовый мотив с двойной техникой печати, оптимизированной для прочности. Механически тиснёная подушка палубы служит дольше печатных подушек.',
      ai_faq: [
        {
          q: 'Прочный ли логотип на нижней стороне?',
          a: 'Да. Логотип на нижней стороне наносится шелкографией высокоэластичными ПВХ-красками, рассчитанными на накачивание до 15 PSI и многократное скручивание.',
        },
        {
          q: 'Что особенного в подушке палубы?',
          a: 'Волновые узоры механически тиснены в двухслойной композитной EVA, что обеспечивает равномерную глубину, отличный отвод воды и долговечное противоскольжение.',
        },
      ],
    },
    'sup-medusa-glow': {
      definition:
        '11-футовый универсальный надувной SUP-борд с мотивом медузы и кораллового рифа в технике разноцветной EVA-блочной инкрустации и конструктивными решениями против расслоения.',
      problem:
        'Гребцам, которые любят морской арт, нужен борд с премиальной графикой, выдерживающей суровые морские условия без выцветания, отслоения или расслоения в точках крепления.',
      howItWorks:
        'Medusa Glow использует ядро drop-stitch ПВХ при 15 PSI с палубой 32 дюйма. Мотив на носу наносится УФ-цифровой печатью, а подушка EVA использует разноцветную блочную инкрустацию для невыцветающих морских звёзд и ракушек. Зоны D-колец маскируются для прямого соединения ПВХ с ПВХ, предотвращающего расслоение.',
      audience:
        'Гребцы-женщины, энтузиасты стиля жизни, бутик-путешественники и все, кто хочет целительную морскую эстетику на воде.',
      ai_use_cases: [
        'Йога и фитнес на SUP-борде',
        'Съёмка контента для соцсетей',
        'Тропические и прибрежные гребные приключения',
      ],
      ai_comparison:
        'По сравнению с обычными печатными SUP-бордами Medusa Glow использует технику EVA-блочной инкрустации для графики на поверхности стояния — цвета структурно встроены в материал EVA, а не напечатаны краской, поэтому они никогда не выцветают.',
      ai_faq: [
        {
          q: 'Какова цветовая палитра?',
          a: 'Освежающая мятная зелёная основа с тёмной бирюзовой подушкой EVA с белыми инкрустированными блоками в форме морских звёзд и ракушек, а также живыми кораллово-оранжевыми акцентами.',
        },
        {
          q: 'Как крепится ручка?',
          a: 'Неопреновая ручка в центре закреплена сквозь подушку EVA прямо в ПВХ-основу корпуса, поэтому нагрузка от подъёма воспринимается жёстким корпусом.',
        },
      ],
    },
    'sup-ocean-pulse': {
      definition:
        '11-футовый универсальный надувной SUP-борд с топографическим волновым узором в технике УФ-цифровой печати и механически тиснёной подушкой палубы, с аксессуарами в согласованных цветах.',
      problem:
        'Следящим за стилем гребцам нужен целостный визуальный образ — не просто красивый борд, а согласованные аксессуары, сохраняющие эстетику от хранения до воды.',
      howItWorks:
        'Ocean Pulse использует ядро drop-stitch ПВХ при 15 PSI. Волновые контуры наносятся высокоточной УФ-печатью. Подушка EVA механически тиснена волновыми текстурами. Все аксессуары — рюкзак, насос, лиш — проходят унифицированную цветовую подгонку под дизайн борда.',
      audience:
        'Гребцы-женщины, следящие за трендами энтузиасты стиля жизни, бутик-кемперы и гребцы, которые ценят согласованную эстетику всего снаряжения.',
      ai_use_cases: [
        'Гребля для Instagram и соцсетей',
        'Бутик-путешествия и кемпинг',
        'Любительская гребля на озёрах и вдоль побережья',
      ],
      ai_comparison:
        'По сравнению с обычными SUP-бордами Ocean Pulse предлагает целостную согласованную визуальную идентичность борда и всех аксессуаров, а механически тиснёная EVA прочнее печатных подушек палубы.',
      ai_faq: [
        {
          q: 'Какие аксессуары согласованы по цвету?',
          a: 'Туристический рюкзак с колёсами, двухтактный насос высокого давления, страховочный лиш и водонепроницаемые чехлы для телефона — все проходят унифицированную цветовую подгонку и брендинг.',
        },
        {
          q: 'Как создаётся узор на подушке палубы?',
          a: 'Волновые узоры формируются высокоточной механической тиснёной обработкой двухслойной композитной EVA, что обеспечивает равномерную глубину и отличный отвод воды.',
        },
      ],
    },
    'sup-ocean-voyager': {
      definition:
        '11-футовый универсальный надувной SUP-борд с геометрическим арт-оформлением морской черепахи в технике разноцветной EVA-блочной инкрустации и УФ-цифровой печати, с целостной визуальной идентичностью аксессуаров.',
      problem:
        'Неравнодушным к океану гребцам нужен борд, который прославляет морскую жизнь премиальным артом, остающимся живым годами без выцветания и отслоения от солёной воды.',
      howItWorks:
        'Ocean Voyager использует ядро drop-stitch ПВХ при 15 PSI с палубой 32 дюйма. Геометрическая иллюстрация черепахи на носу выполнена УФ-цифровой печатью, а подушка EVA использует разноцветную блочную инкрустацию для силуэта черепахи и коралловых форм. Все аксессуары согласованы по цвету.',
      audience:
        'Поклонники океана, энтузиасты черепах, следящие за трендами гребцы и бутик-путешественники, которым нужен премиальный комплект с согласованным стилем жизни.',
      ai_use_cases: [
        'Гребля с тематикой охраны морской природы',
        'Съёмка контента для соцсетей',
        'Длинные прогулки и исследование акваторий',
      ],
      ai_comparison:
        'По сравнению с обычными печатными SUP-бордами Ocean Voyager использует разноцветную EVA-блочную инкрустацию, которая никогда не царапается, не отслаивается и не выцветает. Точность вырезки обеспечивает абсолютно ровные поверхности под ногами.',
      ai_faq: [
        {
          q: 'В чём смысл названия?',
          a: 'Морская черепаха — выдающийся странник океана, преодолевающий тысячи миль с непринуждённой грацией. Ocean Voyager передаёт дух дальних странствий и гармонии с морской жизнью.',
        },
        {
          q: 'Выцветает ли арт?',
          a: 'Нет. Графика на подушке EVA использует разноцветную блочную инкрустацию — цвета встроены в материал EVA, а не напечатаны краской. Графика никогда не царапается, не отслаивается и не выцветает даже при интенсивной эксплуатации.',
        },
      ],
    },
    'sup-dolphin-wave': {
      definition:
        '11-футовый универсальный надувной SUP-борд с артом дельфиньего морского пейзажа, выполненным в технике CNC-вырезанной разноцветной EVA-инкрустации и шелкографически напечатанными непрерывными волнами на бортах.',
      problem:
        'Гребцам с высокими требованиями к арту нужны произведения, которые выдерживают накачивание до высокого давления (15 PSI) и плотное скручивание для хранения без растрескивания, заломов и растекания цветов.',
      howItWorks:
        'Dolphin Wave использует ядро drop-stitch ПВХ при 15 PSI. Зона стояния использует CNC-вырезанную разноцветную EVA-инкрустацию, где цвета присущи самому материалу. Бортовая полоса использует непрерывную шелкографию, продолжающую волновые мотивы по бокам. УФ-краски имеют 150% растяжение для стойкости к растрескиванию.',
      audience:
        'Поклонники морской фауны, гребцы, ценящие детальный арт, и все, кто хочет борд с 360-градусной визуальной непрерывностью.',
      ai_use_cases: [
        'Гребля с тематикой морской фауны',
        'Любительская гребля на озёрах и вдоль побережья',
        'Контент для соцсетей и стиль жизни',
      ],
      ai_comparison:
        'По сравнению с обычными печатными SUP-бордами Dolphin Wave использует физическую разноцветную EVA-инкрустацию зоны стояния и шелкографические волны на бортах для 360-градусной визуальной непрерывности. Гибкие УФ-краски с 150% растяжением предотвращают растрескивание.',
      ai_faq: [
        {
          q: 'Какие цвета используются?',
          a: 'Средневековый синий для глубоких волн, Serenity для спокойных оттенков, с белыми деталями пены. Цветовая палитра соответствует стандартам PANTONE TPG для точного производства.',
        },
        {
          q: 'Как наносятся волны на бортах?',
          a: 'Бортовая полоса использует процесс непрерывной шелкографии на цельном мятно-зелёном двухслойном ПВХ, экономично продолжая волновой мотив по бокам борда.',
        },
      ],
    },
    'sup-flowing-lotus': {
      definition:
        '11-футовый универсальный надувной SUP-борд с эстетикой традиционной восточной кистевой живописи, с двухслойной лазерно-гравированной EVA-подушкой и УФ-цифровым градиентным артом.',
      problem:
        'Гребцам, ищущим художественного и культурного самовыражения на воде, нужен премиальный арт, выдерживающий интенсивную пешеходную нагрузку и солёную воду без износа и выцветания.',
      howItWorks:
        'Flowing Lotus использует ядро drop-stitch ПВХ при 15 PSI. Подкладка EVA использует двухслойное композитное лазерное гравирование — лазер выбирает верхний цветной слой, обнажая нижний цвет и создавая постоянные узоры. Градиент на носу использует гибкие УФ-краски с высоким растяжением для стойкости к растрескиванию.',
      audience:
        'Практикующие йогу, энтузиасты медитации, любители восточного искусства и гребцы, ценящие культурную эстетику и премиальное мастерство.',
      ai_use_cases: [
        'Йога и медитация на SUP',
        'Культурные и художественные впечатления на воде',
        'Любительская гребля на озёрах и реках',
      ],
      ai_comparison:
        'По сравнению с обычными печатными SUP-бордами Flowing Lotus использует технологию лазерного гравирования, которая выжигает узоры навсегда в материале EVA — арт не может износиться или выцвести, поскольку является структурной частью подушки.',
      ai_faq: [
        {
          q: 'Как работает лазерное гравирование?',
          a: 'Двухслойная композитная подушка EVA (бирюзовая основа с мятно-зелёной поверхностью) гравируется лазером — лазер удаляет верхний слой, обнажая нижний цвет и создавая постоянные объёмные 3D-узоры.',
        },
        {
          q: 'Чем этот борд хорош для йоги?',
          a: 'Лазерно-гравированные узоры обеспечивают отличное противоскольжение без абразивности, а градиентный дизайн создаёт успокаивающую эстетику, идеальную для медитации и йоги на воде.',
        },
      ],
    },
    'sup-jungle-mandala': {
      definition:
        '11-футовый универсальный надувной SUP-борд с тропическим артом мандалы, выполненным в двухслойной лазерно-гравированной EVA, с геометрией против искажений и шелкографически напечатанными непрерывными бортами.',
      problem:
        'Гребцы хотят геометрически сложного арта, который остаётся идеально симметричным и неискажённым даже при накачивании борда до высокого давления, без смещения узора при производстве.',
      howItWorks:
        'Jungle Mandala использует ядро drop-stitch ПВХ при 15 PSI. Геометрия мандалы прошла конструктивное утолщение линий для противодействия вмятинам на поверхности ПВХ. Подушка EVA использует двухслойное лазерное гравирование. Бортовые мотивы используют рассеянный нежёсткий узор, допускающий допуски растяжения при ручной сборке.',
      audience:
        'Духовно и художественно настроенные гребцы, тропические искатели приключений, практикующие йогу и все, кого притягивает геометрическая и мандальная эстетика.',
      ai_use_cases: [
        'Духовная и медитативная гребля',
        'Тропические прибрежные приключения',
        'Съёмка контента для соцсетей',
      ],
      ai_comparison:
        'По сравнению с обычными SUP-бордами Jungle Mandala отличается геометрией мандалы против искажений, спроектированной оставаться идеально симметричной при накачивании до 15 PSI, с экономичными шелкографическими бортовыми мотивами.',
      ai_faq: [
        {
          q: 'Искажается ли узор мандалы при накачивании?',
          a: 'Нет. Геометрические линии прошли конструктивное утолщение специально для противодействия вмятинам на поверхности ПВХ и остаются идеально симметричными при полном рабочем давлении.',
        },
        {
          q: 'Как наносится арт на бортах?',
          a: 'Мотивы колибри и бабочек на бортах используют процесс непрерывной шелкографии с рассеянным нежёстким узором, допускающим производственные допуски растяжения при ручной сборке.',
        },
      ],
    },
    'sup-tropical-breeze': {
      definition:
        '11-футовый универсальный надувной SUP-борд с иллюстрацией микро-пейзажа и абстрактной разноцветной EVA-инкрустацией, бесшовно интегрирующей сцену островного отпуска в дизайн борда.',
      problem:
        'Гребцы хотят борд, создающий полное погружающее впечатление — превращающий снаряжение для водного спорта в полотно, переносящее их в тропический рай.',
      howItWorks:
        'Tropical Breeze использует ядро drop-stitch ПВХ при 15 PSI с палубой 32 дюйма. Нос украшен цифровым принтом с иллюстрацией микро-пейзажа. Зона стояния EVA использует вырезанную абстрактную разноцветную инкрустацию, продолжающую визуальное повествование волн, пляжа и пальм по всему борду.',
      audience:
        'Отпускники-путешественники, энтузиасты тропического стиля жизни, авторы контента для соцсетей и гребцы, которым нужен борд, передающий дух островного бегства.',
      ai_use_cases: [
        'Гребля в тропическом отпуске',
        'Съёмка контента для соцсетей',
        'Любительский отдых на озёрах и вдоль побережья',
      ],
      ai_comparison:
        'По сравнению с обычными SUP-бордами Tropical Breeze уникально интегрирует полную пейзажную сцену по всей поверхности борда, с идеальным разделением труда между цифровой печатью для деталей и EVA-инкрустацией для прочности.',
      ai_faq: [
        {
          q: 'Какая сцена изображена на борде?',
          a: 'Сказочный островной рай с солнцем, кокосовыми рощами, пляжем и пальмами — иллюстрация микро-пейзажа на носу, переходящая в абстрактную разноцветную EVA-инкрустацию к корме.',
        },
        {
          q: 'Как арт переходит от носа к корме?',
          a: 'Нос использует детальную цифровую печать для пейзажной иллюстрации, а корма — вырезанную разноцветную EVA-инкрустацию, абстрагирующую волны, песок и пальмы, создавая бесшовное визуальное путешествие.',
        },
      ],
    },
  },
  nl: {
    'life-vest-classic': {
      definition:
        'Een CE-gecertificeerd universeel drijfvermogenshulpmiddel voor recreatieve watersport in alle wateromgevingen.',
      problem:
        'Watersporters van alle niveaus hebben een betrouwbaar en comfortabel reddingsvest nodig dat voldoet aan internationale veiligheidsnormen zonder de bewegingsvrijheid te beperken.',
      howItWorks:
        'Het Reddingsvest Classic gebruikt schuimgevulde drijfvermogenkamers met verstelbare borst- en zijriemen voor een veilige pasvorm. Het is verkrijgbaar in meerdere maten en omvat een noodfluit, reflecterende strepen en een bergingsgreep.',
      audience:
        'Recreatieve paddleboarders, leisure-zeilers, sportvissers en beginners in de watersport die CE-gecertificeerd drijfvermogen nodig hebben voor meren, rivieren en kustwateren.',
      ai_use_cases: [
        'Veiligheid bij recreatieve watersport',
        'Drijfvermogen voor training en toezicht',
        'Familieactiviteiten op het water',
      ],
      ai_comparison:
        'Vergeleken met automatische opblaasbare reddingsvesten geeft het Reddingsvest Classic constant drijfvermogen zonder activering. Het is volumineuzer, maar betrouwbaarder voor recreanten die automatische mechanismen mogelijk niet onderhouden.',
      ai_faq: [
        {
          q: 'Is dit vest geschikt voor kinderen?',
          a: 'Ja, er zijn kindermaten beschikbaar. CE- en USCG-gecertificeerd voor de vermelde gewichtsklassen.',
        },
        {
          q: 'Vereist het onderhoud?',
          a: 'Minimaal onderhoud. Spoel na gebruik af met zoet water. Controleer kamers en riemen voor elk gebruik. Vervang bij beschadiging.',
        },
      ],
    },
    'life-vest-pro': {
      definition:
        'Een reddingsvest van professionele klasse volgens SOLAS met automatische oppomping voor offshore-, reddings- en commerciële maritieme toepassingen.',
      problem:
        'Professionele zeelieden en reddingspersoneel hebben een vest nodig dat automatisch opblaast, hoog drijfvermogen biedt en SOLAS-goedgekeurde zichtbaarheid voor offshore-operaties.',
      howItWorks:
        'Het Reddingsvest Pro gebruikt een automatisch hydrostatisch opblaasmechanisme met een handpompbuis als back-up. Het omvat SOLAS-klasse reflecterende banden, een sprayhood, een noodfluit, een waterdichte lamp en een bevestigingspunt voor een hijsling.',
      audience:
        'Commerciële zeelieden, professionele reddingswerkers, offshore-werknemers en gevorderde zeilers die automatische SOLAS-goedgekeurde reddingsvesten nodig hebben.',
      ai_use_cases: [
        'Veiligheid bij maritieme offshore-operaties',
        'Professionele redding en paraatheid',
        'Naleving van commerciële maritieme regelgeving',
      ],
      ai_comparison:
        'Vergeleken met schuimvesten blaast het Reddingsvest Pro zich automatisch op voor minimaal volume bij normaal gebruik. Het vereist jaarlijks onderhoud van het hydrostatische mechanisme en batterijvervanging.',
      ai_faq: [
        {
          q: 'Hoe werkt de automatische oppomping?',
          a: 'Een hydrostatische activator wordt geactiveerd bij onderdompeling op 0,5-1,0 meter diepte. Een handpompbuis is ook inbegrepen als back-up.',
        },
        {
          q: 'Hoe vaak moet het worden onderhouden?',
          a: 'Jaarlijks onderhoud van het hydrostatische mechanisme wordt aanbevolen. De CO2-cilinder moet worden gecontroleerd en vervangen volgens het schema van de fabrikant.',
        },
      ],
    },
    'oars-pump-set': {
      definition:
        'Een compleet accessoirepakket met een paar 1,6m aluminium roeiriemen met kunststof bladen en een krachtige 5L voetpomp met hoge luchtstroom en manometer voor alle opblaasbare vaartuigen.',
      problem:
        'Eigenaren van opblaasbare boten hebben vervangings- of extra roeiriemen en een hoogvolume-pomp nodig voor het opblazen en voortbewegen, allemaal compatibel met standaard opblaasbare vaartuigen.',
      howItWorks:
        'De riemen hebben aluminium schachten met kunststof bladen voor lichte voortstuwing. De voetpomp levert 5 liter lucht per slag met een ingebouwde manometer voor nauwkeurig oppompen.',
      audience:
        'Eigenaren van opblaasbare boten en kajaks die vervangings- of extra roeiriemen en een krachtige oppompset nodig hebben.',
      ai_use_cases: [
        'Vervangingsriemen voor opblaasbare boten',
        'Hoogvolume-oppompen bij het te water laten',
        'Reservevoortstuwing en pomputrusting',
      ],
      ai_comparison:
        'Vergeleken met de dubbelwerkende pomp geeft deze voetpomp een hoger volume per slag, maar vraagt meer inspanning. De riemen bieden een basaal alternatief voor voortstuwing van opblaasbare boten zonder motor.',
      ai_faq: [
        {
          q: 'Passen de riemen op alle opblaasbare boten?',
          a: 'De riemen passen in de standaard dolpen van de meeste opblaasbare boten uit het assortiment. De lengte van 1,6m is geschikt voor boten tot 4m.',
        },
        {
          q: 'Welke druk bereikt de voetpomp?',
          a: 'De voetpomp bereikt tot 12-15 PSI, geschikt voor de meeste opblaasbare boten en jolletjes. Hij is mogelijk niet voldoende voor hoogdruk-SUP-boards die 18+ PSI vereisen.',
        },
      ],
    },
    'sup-explorer-11': {
      definition:
        'Een 11ft allround opblaasbaar SUP-board, gebouwd voor stabiliteit, draagbaarheid en recreatief gebruik op meren, rivieren en beschermde kustwateren.',
      problem:
        'Beginnende paddleboarders en recreanten hebben een stabiel en draagbaar SUP-board nodig dat gemakkelijk op te blazen is, waarop goed te balanceren valt en dat vergevingsgezind is om mee te leren.',
      howItWorks:
        "SUP Explorer 11' gebruikt drop-stitch kerntechnologie voor een stijfheid van 15 PSI en een breed dek van 32 inch voor laterale stabiliteit. Het board omvat een verwijderbare middenvin, een spiraalleash en een dubbelwerkende handpomp voor snelle oppomping bij de waterkant.",
      audience:
        'Beginnende paddleboarders, recreanten, families en fitnessliefhebbers die een draagbaar en stabiel SUP-board zoeken voor meren, rivieren en beschermde kustwateren.',
      ai_use_cases: [
        'SUP-fitness en beginnerslessen',
        'Recreatief paddleboarden op meren en rivieren',
        'Training en yoga op het water',
      ],
      ai_comparison:
        "Vergeleken met harde epoxy boards biedt SUP Explorer 11' superieure draagbaarheid en gemakkelijkere opslag met de stijfheid van de drop-stitch constructie. Het is zwaarder dan een hard board, maar past in een rugzak voor reizen.",
      ai_faq: [
        {
          q: 'Welke druk is ideaal?',
          a: '12-15 PSI wordt aanbevolen. Het board presteert het best bij 15 PSI voor maximale stijfheid.',
        },
        {
          q: 'Wordt er een paddle bij geleverd?',
          a: 'Een verstelbare aluminium paddle is inbegrepen in het complete pakket.',
        },
      ],
    },
    'sup-cheetah-surge': {
      definition:
        'Een 11ft allround opblaasbaar SUP-board met gedurfd luipaardontwerp in multikleuren EVA-bloktechniek en UV-digitaal drukwerk, gebouwd voor recreatief paddleboarden op meren, rivieren en beschermde kustwateren.',
      problem:
        'Paddleboarders die een board willen dat visueel opvalt, hebben premium kunst nodig die niet verbleekt, bladdert of krast door zout water en UV-blootstelling. Traditionele drukmethoden houden dit niet vol.',
      howItWorks:
        'De Cheetah Surge Edition gebruikt drop-stitch PVC-kerntechnologie die 15 PSI stijfheid bereikt met een breed dek van 32 inch. Het kunstwerk op de deckpad wordt gecreëerd met multikleuren EVA-bloktechniek — EVA-vellen in verschillende kleuren worden precies uitgesneden en naadloos samengevoegd als een puzzel in plaats van bedrukt, wat garandeert dat er geen verbleking of bladdering optreedt.',
      audience:
        'Modebewuste paddleboarders, outdoorliefhebbers, boutique-reizigers en makers van socialmedia-content die een opvallend en duurzaam SUP-board willen.',
      ai_use_cases: [
        'Socialmedia-content op het water',
        'Recreatief paddleboarden op meren en rivieren',
        'Boutique-reizen en avontuurlijk toerisme',
      ],
      ai_comparison:
        'Vergeleken met gewone bedrukte SUP-boards gebruikt de Cheetah Surge Edition uitgesneden EVA-bloktechniek die nooit verbleekt of bladdert. Het kunstwerk is een structureel onderdeel van het EVA-materiaal in plaats van een oppervlakkige druk.',
      ai_faq: [
        {
          q: 'Hoe wordt de kunst aangebracht?',
          a: 'De kunst gebruikt multikleuren EVA-bloktechniek — EVA-schuimvellen in verschillende kleuren worden precisie-uitgesneden en naadloos samengevoegd als een puzzel. Er is geen drukinkt op het staande oppervlak.',
        },
        {
          q: 'Verbleekt de kunst in zout water?',
          a: 'Nee. Omdat de kleuren in het EVA-materiaal zijn ingebouwd in plaats van in een oppervlakkige inktlaag, verbleekt, bladdert of krast de kunst nooit door zout water, UV of voetverkeer.',
        },
      ],
    },
    'sup-leviathan-wake': {
      definition:
        'Een 11ft allround opblaasbaar SUP-board met een meeslepend blauwe-walvis-totem in UV-digitaal drukwerk en een mechanisch gegraveerde reliëf deckpad.',
      problem:
        'Paddleboarders die artistieke SUP-boards zoeken, hebben kunst nodig die levendig blijft bij hoogdrukoppomping en herhaald oprollen voor opslag. Standaardinkten scheuren en bladderen.',
      howItWorks:
        'De Leviathan Wake gebruikt een drop-stitch PVC-kern bij 15 PSI met een dek van 32 inch. Het boegmotief wordt geprint met hoogwaardige UV-digitaal druk, terwijl het logo aan de onderzijde wordt gezeefdrukt met hoogelastische PVC-inktkleuren. De deckpad is mechanisch voorzien van duurzame golfpatronen.',
      audience:
        'Oceaanliefhebbers en liefhebbers van zeeleven, artistieke paddleboarders en iedereen die een visueel opvallend SUP-board wil met duurzame kunst van hoge kwaliteit.',
      ai_use_cases: [
        'Wateravonturen met marien thema',
        'Recreatief paddleboarden op meren en langs de kust',
        'Artistiek en levensstijl-paddleboarden',
      ],
      ai_comparison:
        'Vergeleken met gewone SUP-boards heeft de Leviathan Wake een totemisch walvismotief met dubbele druktechnieken die op duurzaamheid zijn geoptimaliseerd. De mechanisch gegraveerde deckpad gaat langer mee dan bedrukte pads.',
      ai_faq: [
        {
          q: 'Is het logo aan de onderzijde duurzaam?',
          a: 'Ja. Het logo aan de onderzijde wordt gezeefdrukt met hoogelastische PVC-inktkleuren die zijn beoordeeld op 15 PSI-oppomping en herhaald oprollen.',
        },
        {
          q: 'Wat is er bijzonder aan de deckpad?',
          a: 'De golfpatronen zijn mechanisch gegraveerd in tweelaags composiet-EVA, wat gelijkmatige diepte, uitstekende waterafvoer en duurzame antislip garandeert.',
        },
      ],
    },
    'sup-medusa-glow': {
      definition:
        'Een 11ft allround opblaasbaar SUP-board met kwallen- en koraalrif-thema in multikleuren EVA-bloktechniek en constructieoplossingen tegen delaminatie.',
      problem:
        'Paddleboarders die houden van oceaan-geïnspireerde kunst, hebben een board nodig met premium graphics die ruige mariene omgevingen doorstaan zonder te verbleken, bladderen of te delamineren op bevestigingspunten.',
      howItWorks:
        'De Medusa Glow gebruikt een drop-stitch PVC-kern bij 15 PSI met een dek van 32 inch. Het boegmotief is UV-digitaal geprint, terwijl de EVA-pad multikleurige bloktechniek gebruikt voor niet-verblekende zeesterren en schelpen. De D-ring-gebieden worden gemaskeerd voor blote PVC-op-PVC-binding die delaminatie voorkomt.',
      audience:
        'Vrouwelijke paddleboarders, levensstijl-liefhebbers, boutique-reizigers en iedereen die een helende oceaan-geïnspireerde esthetiek op het water wil.',
      ai_use_cases: [
        'Yoga en fitness op het SUP-board',
        'Socialmedia-content',
        'Tropische en kustnabije paddle-avonturen',
      ],
      ai_comparison:
        'Vergeleken met gewone bedrukte SUP-boards gebruikt de Medusa Glow EVA-bloktechniek voor de graphics op het staande oppervlak — de kleuren zijn structureel in het EVA-materiaal aangebracht, niet geprint, dus ze verbleken nooit.',
      ai_faq: [
        {
          q: 'Wat is het kleurenpalet?',
          a: 'Verfrissende muntgroene basis met diep teal EVA-pad met witte uitgesneden blokken in zeester- en schelpvorm en levendige koraaloranje accenten.',
        },
        {
          q: 'Hoe is het handvat bevestigd?',
          a: 'De neopreen handgreep in het midden is verankerd door de EVA-pad rechtstreeks in het PVC-substraat van de romp, zodat tilbelastingen worden gedragen door de stijve romp.',
        },
      ],
    },
    'sup-ocean-pulse': {
      definition:
        'Een 11ft allround opblaasbaar SUP-board met topografisch golfpatroon in UV-digitaal drukwerk en een mechanisch gegraveerde deckpad, met kleurgecoördineerde accessoires.',
      problem:
        'Stijlbewuste paddleboarders willen een complete visuele ervaring — niet alleen een mooi board, maar ook gecoördineerde accessoires die de esthetiek bewaren van opslag tot water.',
      howItWorks:
        'De Ocean Pulse gebruikt een drop-stitch PVC-kern bij 15 PSI. De golfcontouren worden aangebracht met hoogwaardige UV-druk. De EVA-pad is mechanisch voorzien van golfstructuren. Alle accessoires — rugzak, pomp, leash — ondergaan uniforme kleurafstemming die past bij het ontwerp van het board.',
      audience:
        'Vrouwelijke paddleboarders, trendbewuste levensstijl-liefhebbers, boutique-kampeerders en paddleboarders die gecoördineerde esthetiek in de hele uitrusting waarderen.',
      ai_use_cases: [
        'Paddleboarden voor Instagram en social media',
        'Boutique-reizen en kamperen',
        'Recreatief paddleboarden op meren en langs de kust',
      ],
      ai_comparison:
        'Vergeleken met gewone SUP-boards biedt de Ocean Pulse een complete gecoördineerde visuele identiteit over het board en alle accessoires, met mechanisch gegraveerde EVA die duurzamer is dan bedrukte dekpads.',
      ai_faq: [
        {
          q: 'Welke accessoires zijn kleurgecoördineerd?',
          a: 'De reisrugzak met wielen, de dubbelwerkende hoogdrukpomp, de veiligheidsleash en de waterdichte telefoonhoezen ondergaan allemaal uniforme kleurmatching en merkidentiteit.',
        },
        {
          q: 'Hoe wordt het patroon op de deckpad gecreëerd?',
          a: 'De golfpatronen worden gevormd door hoogwaardige mechanische reliëfpresing op tweelaags composiet-EVA, wat gelijkmatige diepte en uitstekende waterafvoer garandeert.',
        },
      ],
    },
    'sup-ocean-voyager': {
      definition:
        'Een 11ft allround opblaasbaar SUP-board met geometrisch zeeschildpad-kunstwerk in multikleuren EVA-bloktechniek en UV-digitaal drukwerk, met een consistente visuele identiteit in de accessoires.',
      problem:
        'Oceaanbewuste paddleboarders willen een board dat zeeleven viert met premium kunst die jarenlang levendig blijft zonder te verbleken of bladderen door zout water.',
      howItWorks:
        'De Ocean Voyager gebruikt een drop-stitch PVC-kern bij 15 PSI met een dek van 32 inch. De geometrische schildpadsillustratie op de boeg gebruikt UV-digitaal drukwerk, terwijl de EVA-pad multikleurige bloktechniek gebruikt voor het schildpadsilhouet en de koraalvormen. Alle accessoires zijn kleurgecoördineerd.',
      audience:
        'Oceaanliefhebbers, schildpadden-enthousiastelingen, trendbewuste paddleboarders en boutique-reizigers die een premium pakket met gecoördineerde levensstijl zoeken.',
      ai_use_cases: ['Paddleboarden met marien behoudthema', 'Socialmedia-content', 'Langere tochten en verkenning'],
      ai_comparison:
        'Vergeleken met gewone bedrukte SUP-boards gebruikt de Ocean Voyager multikleurige EVA-bloktechniek die nooit krast, bladdert of verbleekt. De snijprecisie garandeert volledig vlakke oppervlakken onder de voeten.',
      ai_faq: [
        {
          q: 'Wat is de naaminspiratie?',
          a: 'De zeeschildpad is de ultieme oceaanreiziger van de natuur, die duizenden mijlen aflegt met moeiteloze gratie. De Ocean Voyager vangt de geest van langetermijnverkenning en harmonie met zeeleven.',
        },
        {
          q: 'Verbleekt de kunst?',
          a: 'Nee. De graphics op de EVA-pad gebruiken multikleurige bloktechniek — de kleuren zijn ingebouwd in het EVA-materiaal, niet geprint. De graphics krassen, bladderen of verbleken nooit, zelfs niet bij intensief gebruik.',
        },
      ],
    },
    'sup-dolphin-wave': {
      definition:
        'Een 11ft allround opblaasbaar SUP-board met een kunstwerk van dolfijnen in een zeegezicht, uitgevoerd met CNC-gesneden EVA-kleurblokcompositie en doorlopend zeefdrukwerk met golven op de rails.',
      problem:
        'Kunstbewuste paddleboarders hebben SUP-kunst nodig die oppompen op hoge druk (15 PSI) en strak opgerolde opslag overleeft zonder scheuren, kreuken of kleuruitloop.',
      howItWorks:
        'De Dolphin Wave gebruikt een drop-stitch PVC-kern bij 15 PSI. De staande zone gebruikt CNC-puzzelgesneden EVA-kleurblokken waarbij de kleuren in het materiaal zelf zitten. De railband gebruikt doorlopende zeefdruk om de golfmotieven rondom de zijkanten door te trekken. De UV-inkten hebben 150% rek voor scheurweerstand.',
      audience:
        'Liefhebbers van zeeleven, paddleboarders die gedetailleerde kunst waarderen en iedereen die een board wil met doorlopende 360-graden visuele continuïteit.',
      ai_use_cases: [
        'SUP-paddelen met zeediermotief',
        'Recreatief paddelen op meren en aan de kust',
        'Socialmedia- en lifestylecontent',
      ],
      ai_comparison:
        'Vergeleken met gewone bedrukte SUP-boards gebruikt de Dolphin Wave fysieke EVA-kleurblokcompositie in de staande zone en zeefdrukgolven op de rails voor doorlopende 360-graden continuïteit. De flexibele UV-inkt met 150% rek voorkomt scheuren.',
      ai_faq: [
        {
          q: 'Welke kleuren worden gebruikt?',
          a: 'Medieval Blue voor diepe golven, Serenity voor rustige tinten, met witte schuimdetails. Het kleurenpalet volgt de PANTONE TPG-standaarden voor nauwkeurige productie.',
        },
        {
          q: 'Hoe worden de golfmotieven op de rails aangebracht?',
          a: 'De railband gebruikt een doorlopend zeefdrukproces op stevig, dubbellagig mintgroen PVC, waarmee het golfmotief kosteneffectief rondom de boardzijden wordt doorgetrokken.',
        },
      ],
    },
    'sup-flowing-lotus': {
      definition:
        'Een 11ft allround opblaasbaar SUP-board met de esthetiek van traditionele oosterse penseelkunst, uitgevoerd met een dubbellaags, lasergegraveerde EVA-deckpad en een UV-digitaal gedrukt verloopmotief.',
      problem:
        'Paddleboarders die artistieke en culturele expressie op het water zoeken, hebben premium kunst nodig die intensieve voetbelasting en zeewater doorstaat zonder te slijten of te verbleken.',
      howItWorks:
        'De Flowing Lotus gebruikt een drop-stitch PVC-kern bij 15 PSI. De EVA-deckpad gebruikt dubbellaagse composietlasergravure — de laser graveert de bovenste gekleurde laag weg, brengt de onderliggende kleur bloot en creëert zo permanente patronen. Het verloop op de boeg gebruikt flexibele UV-inkten met hoge rek voor scheurweerstand.',
      audience:
        'Yoga-beoefenaars, meditatie-enthousiasten, liefhebbers van oosterse kunst en paddleboarders die culturele esthetiek en premium vakmanschap weten te waarderen.',
      ai_use_cases: [
        'Yoga- en meditatiepaddelen',
        'Culturele en artistieke beleving op het water',
        'Recreatief paddelen op meren en rivieren',
      ],
      ai_comparison:
        'Vergeleken met gewone bedrukte SUP-boards gebruikt de Flowing Lotus lasergravuretechnologie die patronen permanent in het EVA-materiaal graveert — het kunstwerk kan niet slijten of verbleken omdat het een structureel onderdeel van de deckpad is.',
      ai_faq: [
        {
          q: 'Hoe werkt de lasergravure?',
          a: 'Een dubbellaagse composiet-EVA-deckpad (petrolkleurige basis met mintgroen oppervlak) wordt lasergegraveerd — de laser verwijdert de bovenste laag, legt de onderliggende kleur bloot en creëert permanente patronen met 3D-textuur.',
        },
        {
          q: 'Waarom is dit board geschikt voor yoga?',
          a: 'De lasergegraveerde patronen bieden uitstekende antislip zonder schurend te zijn, terwijl het verloopontwerp een rustgevende esthetiek creëert die perfect is voor meditatie en yoga op het water.',
        },
      ],
    },
    'sup-jungle-mandala': {
      definition:
        'Een 11ft allround opblaasbaar SUP-board met een tropisch mandalamotief, uitgevoerd met dubbellaags lasergegraveerd EVA, vervormingsvrije geometrie en doorlopend zeefdrukwerk op de rails.',
      problem:
        'Paddleboarders willen geometrisch complexe kunst die perfect symmetrisch en vervormingsvrij blijft, ook wanneer het board tot hoge druk wordt opgepompt, zonder patroonverschuiving tijdens de productie.',
      howItWorks:
        'De Jungle Mandala gebruikt een drop-stitch PVC-kern bij 15 PSI. De mandalageometrie is structureel lijnverbreed om putjes in het PVC-oppervlak te compenseren. De EVA-deckpad gebruikt dubbellaagse lasergravure. De railmotieven gebruiken een verspreid, niet-star patroon dat rektoleranties bij handmatige assemblage opvangt.',
      audience:
        'Spirituele en artistieke paddleboarders, tropische avonturiers, yoga-beoefenaars en iedereen die zich aangetrokken voelt tot geometrische en mandala-esthetiek.',
      ai_use_cases: ['Spiritueel en meditatief paddelen', 'Tropische kustavonturen', 'Socialmedia-content'],
      ai_comparison:
        'Vergeleken met gewone SUP-boards heeft de Jungle Mandala een vervormingsvrije mandalageometrie die bij 15 PSI oppompdruk perfect symmetrisch blijft, gecombineerd met kostenefficiënt zeefdrukwerk op de rails.',
      ai_faq: [
        {
          q: 'Vervormt het mandalapatroon bij het oppompen?',
          a: 'Nee. De geometrische lijnen zijn structureel verbreed juist om putjes in het PVC-oppervlak te compenseren en blijven perfect symmetrisch bij de volle oppompdruk.',
        },
        {
          q: 'Hoe wordt het railmotief aangebracht?',
          a: 'De kolibrie- en vlindermotieven op de rails gebruiken een doorlopend zeefdrukproces met een verspreid, niet-star patroon dat rektoleranties bij handmatige assemblage opvangt.',
        },
      ],
    },
    'sup-tropical-breeze': {
      definition:
        'Een 11ft allround opblaasbaar SUP-board met een micro-landschapsillustratie en abstracte EVA-kleurblokken die naadloos een eilandvakantiescène in het boardontwerp integreren.',
      problem:
        'Paddleboarders willen een board dat een volledig meeslepende ervaring creëert — watersportuitrusting wordt een canvas die hen naar een tropisch paradijs voert.',
      howItWorks:
        'De Tropical Breeze gebruikt een drop-stitch PVC-kern bij 15 PSI met een dek van 32 inch. De boeg heeft een digitaal gedrukte micro-landschapsillustratie. De staande EVA-zone gebruikt uitgestanste abstracte kleurblokken die het visuele verhaal van golven, strand en palmen over het hele board doorzetten.',
      audience:
        'Vakantiegangers, liefhebbers van de tropische levensstijl, socialmedia-contentcreators en paddleboarders die een board zoeken dat de geest van het eilandontsnappen vastlegt.',
      ai_use_cases: [
        'Paddelen in de tropische vakantie',
        'Socialmedia-content',
        'Recreatieve uitstapjes op meren en aan de kust',
      ],
      ai_comparison:
        'Vergeleken met gewone SUP-boards integreert de Tropical Breeze als enige een complete landschapsscène over het hele boardoppervlak, met een perfecte arbeidsverdeling tussen digitaal drukwerk voor details en EVA-blokwerk voor duurzaamheid.',
      ai_faq: [
        {
          q: 'Welke scène is op het board afgebeeld?',
          a: 'Een droomachtig eilandparadijs met zon, kokosboomgaarden, strand en palmen — een micro-landschapsillustratie op de boeg die naar het achterschip overgaat in abstracte EVA-kleurblokken.',
        },
        {
          q: 'Hoe verloopt de overgang van het kunstwerk van boeg naar achtersteven?',
          a: 'De boeg gebruikt gedetailleerde digitale druk voor de landschapsillustratie, terwijl het achtersteven uitgestanste EVA-kleurblokken gebruikt die de golven, het zand en de palmen abstraheren — samen vormen ze een naadloze visuele reis.',
        },
      ],
    },
  },
  fi: {
    'life-vest-classic': {
      definition: 'CE-sertifioitu yleiskellunta-apuväline vapaa-ajan vesilajeihin kaikissa vesiympäristöissä.',
      problem:
        'Kaikkien tasojen vesilajien harrastajat tarvitsevat luotettavan ja mukavan pelastusliivin, joka täyttää kansainväliset turvallisuusstandardit rajoittamatta liikkumisvapautta.',
      howItWorks:
        'Pelastusliivi Classic käyttää vaahtotäytteisiä kelluntakammioita säädettävillä rinta- ja kylkiliinoilla turvallisen istuvuuden takaamiseksi. Saatavilla on useita kokoja, ja mukana tulevat hätäpilli, heijastavat raidat ja nostokahva.',
      audience:
        'Vapaa-ajan melojat, purjeveneilijät, urheilukalastajat ja vesilajien aloittelijat, jotka tarvitsevat CE-sertifioitua kelluntatehoa järvillä, joilla ja rannikkovesissä.',
      ai_use_cases: [
        'Turvallisuus vapaa-ajan vesilajeissa',
        'Kellunta harjoitteluun ja valvontaan',
        'Perheaktiviteetit vedessä',
      ],
      ai_comparison:
        'Automaattisiin täytettäviin pelastusliiveihin verrattuna Pelastusliivi Classic antaa jatkuvaa kelluntatehoa ilman aktivointia. Se on tilavampi mutta luotettavampi harrastajille, jotka eivät välttämättä huolla automaattisia mekanismeja.',
      ai_faq: [
        {
          q: 'Sopiiko tämä liivi lapsille?',
          a: 'Kyllä, lasten kokoja on saatavilla. CE- ja USCG-sertifioitu ilmoitetuille painoluokille.',
        },
        {
          q: 'Vaatiko se huoltoa?',
          a: 'Minimaalinen huolto. Huuhtele makealla vedellä käytön jälkeen. Tarkista kammiot ja liinat ennen jokaista käyttöä. Vaihda vaurion sattuessa.',
        },
      ],
    },
    'life-vest-pro': {
      definition:
        'SOLAS-vaatimusten mukainen ammattiluokan pelastusliivi automaattisella täytöllä offshore-, pelastus- ja kaupallisiin merisovelluksiin.',
      problem:
        'Ammattimerimiehet ja pelastushenkilöstö tarvitsevat liivin, joka täyttyy automaattisesti, antaa korkean kelluntatehon ja SOLAS-hyväksytyn näkyvyyden offshore-operaatioihin.',
      howItWorks:
        'Pelastusliivi Pro käyttää automaattista hydrostaattista täytymekanismia suulla puhallettavaan letkuun varmistuksena. Mukana ovat SOLAS-luokan heijastavat nauhat, suihkuhame, hätäpilli, vedeneristävä lamppu ja kiinnityspiste nostoliinaa varten.',
      audience:
        'Kaupalliset merimiehet, ammattimaiset pelastajat, offshore-työntekijät ja edistyneet purjehtijat, jotka tarvitsevat automaattisia SOLAS-hyväksyttyjä pelastusliivejä.',
      ai_use_cases: [
        'Turvallisuus offshore-merioperaatioissa',
        'Ammattimainen pelastus ja valmius',
        'Kaupallisten merimääräysten noudattaminen',
      ],
      ai_comparison:
        'Vaahtoliiveihin verrattuna Pelastusliivi Pro täyttyy automaattisesti ja pysyy minimitilavuutena normaalissa käytössä. Se vaatii vuosittaisen huollon hydrostaattisesta mekaniikasta ja pariston vaihdon.',
      ai_faq: [
        {
          q: 'Miten automaattinen täyttö toimii?',
          a: 'Hydrostaattinen aktivaattori laukeaa upotuksessa 0,5-1,0 metrin syvyydessä. Suulla puhallettava letku on myös mukana varmistuksena.',
        },
        {
          q: 'Miten usein se on huollettava?',
          a: 'Hydrostaattisen mekaniikan vuosittainen huolto on suositeltavaa. CO2-pullo on tarkistettava ja vaihdettava valmistajan aikataulun mukaisesti.',
        },
      ],
    },
    'oars-pump-set': {
      definition:
        'Täydellinen lisävarustepaketti: pari 1,6 m alumiiniairoja muovilapoin ja tehokas 5 litran suurivirtainen jalkapumppu painemittarilla kaikkiin ilmalla täytettäviin aluksiin.',
      problem:
        'Täytettävien veneiden omistajat tarvitsevat vara- tai lisäairoja ja suurivirtaisen pumppun täyttöön ja soutamiseen, kaikki yhteensopivina tavallisten täytettävien alusten kanssa.',
      howItWorks:
        'Airoissa on alumiinivarret ja muovilapat kevyttä työntöä varten. Jalkapumppu tuottaa 5 litraa ilmaa iskua kohti sisäänrakennetulla painemittarilla tarkan täytön takaamiseksi.',
      audience:
        'Täytettävien veneiden ja kajakkien omistajat, jotka tarvitsevat vara- tai lisäairoja ja tehokkaan täyttösarjan.',
      ai_use_cases: [
        'Vara-airot täytettäviin veneisiin',
        'Suurivirtainen täyttö vesillelaskussa',
        'Varasoutu ja pumppuvarusteet',
      ],
      ai_comparison:
        'Kaksoisvaikutteiseen pumppuun verrattuna tämä jalkapumppu antaa suuremman tilavuuden iskua kohti mutta vaatii enemmän vaivaa. Airot tarjoavat perustason vaihtoehdon työntöön moottorittomissa täytettävissä veneissä.',
      ai_faq: [
        {
          q: 'Sopiiko airot kaikkiin täytettäviin veneisiin?',
          a: 'Airot sopivat useimpien malliston täytettävien veneiden tavanomaisiin airokkeisiin. 1,6 m pituus sopii veneisiin enintään 4 m.',
        },
        {
          q: 'Minkä paineen jalkapumppu saavuttaa?',
          a: 'Jalkapumppu saavuttaa 12-15 PSI, mikä sopii useimpiin täytettäviin veneisiin ja jollisiin. Se ei välttämättä riitä korkeapaineisiin SUP-lautoihin, jotka vaativat 18+ PSI.',
        },
      ],
    },
    'sup-explorer-11': {
      definition:
        '11-jalkainen ilmalla täytettävä allround-SUP-lauta, joka on rakennettu vakaudesta, kannettavuudesta ja vapaa-ajan käytöstä järvillä, joilla ja suojatuilla rannikkovesillä.',
      problem:
        'Aloittelijamelojat ja vapaa-ajan käyttäjät tarvitsevat vakaan ja kannettavan SUP-laudan, joka on helppo täyttää, jolla on helppo tasapainoilla ja joka antaa anteeksi oppimisessa.',
      howItWorks:
        "SUP Explorer 11' käyttää drop-stitch-ydintekniikkaa 15 PSI:n jäykkyydellä ja 32 tuuman levyisellä kannalla sivuttaisvakauden takaamiseksi. Lautaan sisältyy irrotettava keskimmäinen evä, kiertoleash ja kaksoisvaikutteinen käsipumppu nopeaan täyttöön rannalla.",
      audience:
        'Aloittelijamelojat, vapaa-ajan käyttäjät, perheet ja kuntoilijat, jotka etsivät kannettavaa ja vakaata SUP-lautaa järvillä, joilla ja suojatuilla rannikkovesillä.',
      ai_use_cases: [
        'SUP-kuntoilu ja aloittelijoiden opetus',
        'Vapaa-ajan melonta järvillä ja joilla',
        'Harjoittelu ja jooga vedessä',
      ],
      ai_comparison:
        "Koviin epoxy-lautoihin verrattuna SUP Explorer 11' tarjoaa paremman kannettavuuden ja helpomman säilytyksen drop-stitch-rakenteen jäykkyydellä. Se on raskaampi kuin kova lauta, mutta mahtuu reppuun matkustamista varten.",
      ai_faq: [
        {
          q: 'Mikä paine on ihanteellinen?',
          a: '12-15 PSI on suositeltavaa. Lauta suoriutuu parhaiten 15 PSI:n paineessa maksimijäykkyyden saavuttamiseksi.',
        },
        {
          q: 'Sisältyykö mela?',
          a: 'Säädettävä alumiininen SUP-mela sisältyy täydelliseen pakettiin.',
        },
      ],
    },
    'sup-cheetah-surge': {
      definition:
        '11-jalkainen ilmalla täytettävä allround-SUP-lauta rohkealla leopardikuviolla, toteutettuna monivärisellä EVA-palatekniikalla ja UV-digitaalipainolla, rakennettu vapaa-ajan melontaan järvillä, joilla ja suojatuilla rannikkovesillä.',
      problem:
        'Melojat, jotka haluavat visuaalisesti erottuvan laudan, tarvitsevat premium-taidetta, joka ei haalistu, kuoriudu tai naarmuunnu suolavedessä ja UV-altistuksessa. Perinteiset painomenetelmät eivät kestä tätä.',
      howItWorks:
        'Cheetah Surge Edition käyttää drop-stitch-PVC-ydintekniikkaa, joka saavuttaa 15 PSI:n jäykkyyden 32 tuuman levyisellä kannalla. Seisonta-alueen kuva-aihe on toteutettu monivärisellä EVA-palatekniikalla – eriväriset EVA-arkit leikataan tarkasti ja yhdistetään saumattomasti palapelin tavoin painamisen sijaan, mikä takaa, ettei haalistumista tai kuoriutumista tapahdu.',
      audience:
        'Muodista kiinnostuneet melojat, ulkoilun harrastajat, boutique-matkailijat ja sosiaalisen median sisällöntekijät, jotka haluavat silmiinpistävän ja kestävän SUP-laudan.',
      ai_use_cases: [
        'Sosiaalisen median sisältö vedessä',
        'Vapaa-ajan melonta järvillä ja joilla',
        'Boutique-matkailu ja seikkailumatkailu',
      ],
      ai_comparison:
        'Tavallisiin painettuihin SUP-lautoihin verrattuna Cheetah Surge Edition käyttää leikattua EVA-palatekniikkaa, joka ei koskaan haalistu tai kuoriudu. Kuva-aihe on EVA-materiaalin rakenteellinen osa pinnallisen painon sijaan.',
      ai_faq: [
        {
          q: 'Miten kuva-aihe on toteutettu?',
          a: 'Kuva-aihe käyttää moniväristä EVA-palatekniikkaa – eriväriset EVA-vaahtoarkit leikataan tarkkuustyönä ja yhdistetään saumattomasti palapelin tavoin. Seisontapinnalla ei ole painomusteita.',
        },
        {
          q: 'Haalistuuko kuva-aihe suolavedessä?',
          a: 'Ei. Koska värit on rakennettu EVA-materiaaliin pinnallisen mustekerroksen sijaan, kuva-aihe ei koskaan haalistu, kuoriudu tai naarmuunnu suolavedessä, UV:ssä eikä jalkaliikenteessä.',
        },
      ],
    },
    'sup-leviathan-wake': {
      definition:
        '11-jalkainen ilmalla täytettävä allround-SUP-lauta immersiivisellä sinivalastoteemilla UV-digitaalipainossa ja mekaanisesti kaiverretulla kohokuvioisella EVA-matolla.',
      problem:
        'Taidetta etsivät melojat tarvitsevat kuva-aiheita, jotka pysyvät elinvoimaisina korkeapainetäytössä ja toistuvassa rullaussäilytyksessä. Tavalliset musteet halkeilevat ja kuoriutuvat.',
      howItWorks:
        'Leviathan Wake käyttää drop-stitch-PVC-ydintä 15 PSI:n paineessa 32 tuuman levyisellä kannalla. Keulan motiivi on painettu korkealaatuisella UV-digitaalipainolla, kun taas pohjan logo on silkkipainettu korkeaelastisilla PVC-musteväreillä. EVA-mattoon on mekaanisesti kaiverrettu kestävät aaltokuviot.',
      audience:
        'Valtamerien ystävät ja merielämän ihailijat, taiteelliset melojat ja kaikki, jotka haluavat visuaalisesti erottuvan SUP-laudan laadukkaalla ja kestävällä taiteella.',
      ai_use_cases: [
        'Meritieteemaiset vesiseikkailut',
        'Vapaa-ajan melonta järvillä ja rannikoilla',
        'Taiteellinen ja elämäntapamelonta',
      ],
      ai_comparison:
        'Tavallisiin SUP-lautoihin verrattuna Leviathan Wakessa on toteemimainen valasmotiivi kahdella kestävyyteen optimoidulla painotekniikalla. Mekaanisesti kaiverrettu EVA-matto kestää painettuja mattoja pidempään.',
      ai_faq: [
        {
          q: 'Onko pohjan logo kestävä?',
          a: 'Kyllä. Pohjan logo on silkkipainettu korkeaelastisilla PVC-musteväreillä, jotka on arvioitu 15 PSI:n täytölle ja toistuvalle rullaukselle.',
        },
        {
          q: 'Mikä EVA-matossa on erityistä?',
          a: 'Aaltokuviot on mekaanisesti kaiverrettu kaksikerroksiseen komposiitti-EVA:an, mikä takaa tasaisen syvyyden, erinomaisen vedenerityksen ja kestävän liukumattomuuden.',
        },
      ],
    },
    'sup-medusa-glow': {
      definition:
        '11-jalkainen ilmalla täytettävä allround-SUP-lauta meduusa- ja koralliriuttateemalla monivärisellä EVA-palatekniikalla ja delaminaatiota ehkäisevillä rakenneratkaisuilla.',
      problem:
        'Valtamerteemasta pitävät melojat tarvitsevat laudan premium-grafiikoilla, jotka kestävät karkeita meriympäristöjä haalistumatta, kuoriutumatta tai delaminoitumatta kiinnityskohdissa.',
      howItWorks:
        'Medusa Glow käyttää drop-stitch-PVC-ydintä 15 PSI:n paineessa 32 tuuman levyisellä kannalla. Keulan motiivi on painettu UV-digitaalisesti, kun taas EVA-matto käyttää moniväristä palatekniikkaa haalistumattomille meritähdille ja simpukoille. D-rengas-alueet on maskattu paljasta PVC-PVC-sidosta varten, joka ehkäisee delaminaatiota.',
      audience:
        'Naismelojat, elämäntapaharrastajat, boutique-matkailijat ja kaikki, jotka haluavat parantavan valtameriin pohjautuvan estetiikan vedessä.',
      ai_use_cases: [
        'Jooga ja kuntoilu SUP-laudalla',
        'Sosiaalisen median sisältö',
        'Trooppiset ja rannikkoläheiset melontaseikkailut',
      ],
      ai_comparison:
        'Tavallisiin painettuihin SUP-lautoihin verrattuna Medusa Glow käyttää EVA-palatekniikkaa seisontapinnan grafiikoihin – värit on rakennettu EVA-materiaaliin painamisen sijaan, joten ne eivät koskaan haalistu.',
      ai_faq: [
        {
          q: 'Mikä väripaletti on käytössä?',
          a: 'Virkistävä mintunvihreä pohja syvällä teal-värisellä EVA-matolla, valkoisilla leikatuilla paloilla meritähti- ja simpukkamuoissa sekä elävin korallioranssein korostuksin.',
        },
        {
          q: 'Miten kahva on kiinnitetty?',
          a: 'Keskellä oleva neopreenikahva on ankkuroitu EVA-maton läpi suoraan rungon PVC-substraattiin, jolloin nostokuormat siirtyvät jäykkään runkoon.',
        },
      ],
    },
    'sup-ocean-pulse': {
      definition:
        '11-jalkainen ilmalla täytettävä allround-SUP-lauta topografisella aaltokuviolla UV-digitaalipainossa, mekaanisesti kaiverretulla EVA-matolla ja värikoordinoiduilla lisävarusteilla.',
      problem:
        'Tyylistä kiinnostuneet melojat haluavat täydellisen visuaalisen kokemuksen – ei vain kauniin laudan vaan myös koordinoidut lisävarusteet, jotka säilyttävät estetiikan säilytyksestä veteen.',
      howItWorks:
        'Ocean Pulse käyttää 15 PSI:n drop-stitch-PVC-ydintä. Aaltokontuurit on toteutettu korkealaatuisella UV-painolla. EVA-mattoon on mekaanisesti kaiverrettu aaltorakenteita. Kaikki lisävarusteet – reppu, pumppu, leash – käyvät läpi yhtenäisen värisovituksen, joka vastaa laudan suunnittelua.',
      audience:
        'Naismelojat, trenditietoiset elämäntapaharrastajat, boutique-retkeilijät ja melojat, jotka arvostavat koordinoitua estetiikkaa koko varustuksessa.',
      ai_use_cases: [
        'Melonta Instagramiin ja sosiaaliseen mediaan',
        'Boutique-matkailu ja retkeily',
        'Vapaa-ajan melonta järvillä ja rannikoilla',
      ],
      ai_comparison:
        'Tavallisiin SUP-lautoihin verrattuna Ocean Pulse tarjoaa täydellisen koordinoidun visuaalisen identiteetin laudan ja kaikkien lisävarusteiden välillä mekaanisesti kaiverretulla EVA:lla, joka on painettuja mattoja kestävämpi.',
      ai_faq: [
        {
          q: 'Mitkä lisävarusteet ovat värikoordinoituja?',
          a: 'Pyörillä varustettu matkareppu, kaksoisvaikutteinen korkeapainepumppu, turvaleash ja vedenkestävät puhelinkotelot käyvät kaikki läpi yhtenäisen värisovituksen ja brändi-identiteetin.',
        },
        {
          q: 'Miten EVA-maton kuvio on luotu?',
          a: 'Aaltokuviot muodostetaan korkealaatuisella mekaanisella kohopuristuksella kaksikerroksisessa komposiitti-EVA:ssa, mikä takaa tasaisen syvyyden ja erinomaisen vedenerityksen.',
        },
      ],
    },
    'sup-ocean-voyager': {
      definition:
        '11-jalkainen ilmalla täytettävä allround-SUP-lauta geometrisella merikilpikonnakuvituksella monivärisellä EVA-palatekniikalla ja UV-digitaalipainolla sekä yhtenäisellä visuaalisella identiteetillä lisävarusteissa.',
      problem:
        'Valtameritietoiset melojat haluavat laudan, joka juhlistaa merielämää premium-taiteella, joka pysyy elinvoimaisena vuosia haalistumatta tai kuoriutumatta suolavedessä.',
      howItWorks:
        'Ocean Voyager käyttää drop-stitch-PVC-ydintä 15 PSI:n paineessa 32 tuuman levyisellä kannalla. Keulan geometrinen kilpikonnakuvitus käyttää UV-digitaalipainoa, kun taas EVA-matto käyttää moniväristä palatekniikkaa kilpikonnasiluettiin ja korallimuotoihin. Kaikki lisävarusteet ovat värikoordinoituja.',
      audience:
        'Valtamerien ystävät, kilpikonnien ihailijat, trenditietoiset melojat ja boutique-matkailijat, jotka etsivät premium-pakettia koordinoidulla elämäntavalla.',
      ai_use_cases: [
        'Melonta merenhoidon teemalla',
        'Sosiaalisen median sisältö',
        'Pidemmät retket ja tutkimusmatkailu',
      ],
      ai_comparison:
        'Tavallisiin painettuihin SUP-lautoihin verrattuna Ocean Voyager käyttää moniväristä EVA-palatekniikkaa, joka ei koskaan naarmuunnu, kuoriudu tai haalistu. Leikkaustarkkuus takaa täysin tasaiset pinnat jalkojen alla.',
      ai_faq: [
        {
          q: 'Mistä nimi on lähtöisin?',
          a: 'Merikilpikonna on luonnon ylin valtamerivaeltaja, joka kulkee tuhansia kilometrejä vaivattomalla sulavuudella. Ocean Voyager vangitsee pitkän aikavälin tutkimusretkeilyn hengen ja sopusoinnun merielämän kanssa.',
        },
        {
          q: 'Haalistuuko kuva-aihe?',
          a: 'Ei. EVA-maton grafiikat käyttävät moniväristä palatekniikkaa – värit on rakennettu EVA-materiaaliin, ei painettu. Grafiikat eivät naarmuunnu, kuoriudu tai haalistu koskaan, edes intensiivisessä käytössä.',
        },
      ],
    },
    'sup-dolphin-wave': {
      definition:
        '11-jalkainen ilmalla täytettävä allround-SUP-lauta, jossa on delfieneitä ja merimaisemaa esittävä kuva-aihe. Toteutuksena CNC-leikattu EVA-väripalatekniikka ja silkkipainolla painetut jatkuvat laita-aallot.',
      problem:
        'Taidetta arvostavat melojat tarvitsevat SUP-grafiikkaa, joka kestää korkeapaineisen täytön (15 PSI) ja tiiviisti rullatun säilytyksen ilman halkeamia, ryppyjä tai värivuotoa.',
      howItWorks:
        'Dolphin Wave käyttää 15 PSI:n drop-stitch-PVC-ydintä. Seisonta-alueen EVA-väripalat on leikattu CNC-palapäitekniikalla, ja värit kuuluvat itse materiaaliin. Laitanauhassa on jatkuva silkkipaino, joka jatkaa aaltokuvioita laudan laidoille ympäri. UV-musteet kestävät 150 %:n venymän halkeilematta.',
      audience:
        'Merieläinten ystävät, yksityiskohtaista taidetta arvostavat melojat ja kaikki, jotka haluavat laudan, jossa on 360-asteinen visuaalinen jatkuvuus.',
      ai_use_cases: [
        'Merieläinteemainen SUP-melonta',
        'Vapaa-ajan melonta järvillä ja rannikoilla',
        'Sosiaalisen median ja elämäntapasisältö',
      ],
      ai_comparison:
        'Tavallisiin painettuihin SUP-lautoihin verrattuna Dolphin Wave käyttää seisonta-alueella fyysistä EVA-väripalatekniikkaa ja laidoilla silkkipainettuja aaltoja 360-asteiseen visuaaliseen jatkuvuuteen. Joustava 150 %:n venymän UV-muste estää halkeilun.',
      ai_faq: [
        {
          q: 'Mitä värejä on käytetty?',
          a: 'Medieval Blue syviin aaltoihin, Serenity rauhallisiin sävyihin sekä valkoisia vaahtodetaljeja. Väripaletti noudattaa PANTONE TPG -standardeja tarkkaa valmistusta varten.',
        },
        {
          q: 'Miten laita-aallot on toteutettu?',
          a: 'Laitanauha käyttää jatkuvaa silkkipainoprosessia tasaisen mintunvihreän kaksikerroksisen PVC:n pinnalla, mikä jatkaa aaltokuviota kustannustehokkaasti laudan laidoille ympäri.',
        },
      ],
    },
    'sup-flowing-lotus': {
      definition:
        '11-jalkainen ilmalla täytettävä allround-SUP-lauta, jossa on perinteisen itämaisen sivellintaiteen estetiikka. Toteutuksena kaksikerroksinen laserkaiverrettu EVA-matto ja UV-digitaalipainettu liukuvärikuvitus.',
      problem:
        'Vedellä taiteellista ja kulttuurista ilmaisua etsivät melojat tarvitsevat tasokasta taidetta, joka kestää kulutusta ja suolavettä kulumatta tai haalistumatta.',
      howItWorks:
        'Flowing Lotus käyttää 15 PSI:n drop-stitch-PVC-ydintä. EVA-matossa on kaksikerroksinen komposiittilaserkaiverrus – laser poistaa ylemmän väritetyn kerroksen, paljastaa alemman värin ja luo näin pysyviä kuvioita. Keulan liukuväri käyttää joustavia UV-musteita suurella venymällä halkeilunkestävyyttä varten.',
      audience:
        'Joogan ja meditaation harrastajat, itämaisen taiteen ystävät sekä melojat, jotka arvostavat kulttuurista estetiikkaa ja huolellista käsityötä.',
      ai_use_cases: [
        'Jooga- ja meditaatiomelonta',
        'Kulttuuriset ja taiteelliset vesikokemukset',
        'Vapaa-ajan melonta järvillä ja joilla',
      ],
      ai_comparison:
        'Tavallisiin painettuihin SUP-lautoihin verrattuna Flowing Lotus käyttää laserkaiverrusteknologiaa, joka kaivertaa kuviot pysyvästi EVA-materiaaliin – kuvitus ei voi kulua tai haalistua, koska se on maton rakenteellinen osa.',
      ai_faq: [
        {
          q: 'Miten laserkaiverrus toimii?',
          a: 'Kaksikerroksinen komposiitti-EVA-matto (petroolinsininen pohja ja mintunvihreä pinta) laserkaiverretaan – laser poistaa ylemmän kerroksen, paljastaa alemman värin ja luo pysyviä 3D-kuvioita.',
        },
        {
          q: 'Miksi tämä lauta sopii joogaan?',
          a: 'Laserkaiverretut kuviot antavat erinomaisen pidon ilman hankautuvuutta, ja liukuvärisommittelu luo rauhoittavan estetiikan, joka sopii täydellisesti vesi-joogaan ja meditaatioon.',
        },
      ],
    },
    'sup-jungle-mandala': {
      definition:
        '11-jalkainen ilmalla täytettävä allround-SUP-lauta trooppisella mandala-kuvituksella, toteutettuna kaksikerroksisella laserkaiverretulla EVA:lla, vääristymättömällä geometrialla ja jatkuvilla silkkipainolaidoilla.',
      problem:
        'Melojat haluavat geometrisesti monimutkaista taidetta, joka pysyy täydellisen symmetrisenä ja vääristymättömänä silloinkin, kun lauta täytetään korkeaan paineeseen, ilman kuvioiden siirtymisiä valmistuksessa.',
      howItWorks:
        'Jungle Mandala käyttää 15 PSI:n drop-stitch-PVC-ydintä. Mandalan geometrian linjoja on paksunnettu rakenteellisesti PVC-pinnan kuoppien kompensoimiseksi. EVA-matto käyttää kaksikerroksista laserkaiverrusta. Laitakuvioissa on hajanainen, joustava kuviointi, joka sallii manuaalisen asennuksen venymäsietoisuuden.',
      audience:
        'Hengelliset ja taiteelliset melojat, trooppiset seikkailijat, joogan harrastajat ja kaikki, joita geometrinen ja mandala-estetiikka puhuttelee.',
      ai_use_cases: [
        'Hengellinen ja meditatiivinen melonta',
        'Trooppiset rannikkoseikkailut',
        'Sosiaalisen median sisällön tuottaminen',
      ],
      ai_comparison:
        'Tavallisiin SUP-lautoihin verrattuna Jungle Mandalassa on vääristymätön mandalageometria, joka pysyy täydellisen symmetrisenä 15 PSI:n täytöpaineessa, sekä kustannustehokkaat silkkipainolaitakuvioinnit.',
      ai_faq: [
        {
          q: 'Vääristyykö mandalakuvio täytettäessä?',
          a: 'Ei. Geometrisia linjoja on paksunnettu rakenteellisesti nimenomaan PVC-pinnan kuoppia vastaan, ja ne pysyvät täydellisen symmetrisinä täydellä täytöpaineella.',
        },
        {
          q: 'Miten laitojen kuvitus on toteutettu?',
          a: 'Laitojen kolibri- ja perhospainokuvioinnit käyttävät jatkuvaa silkkipainoprosessia hajonaisella, joustavalla kuviolla, joka sallii manuaalisen asennuksen venymäsietoisuuden.',
        },
      ],
    },
    'sup-tropical-breeze': {
      definition:
        '11-jalkainen ilmalla täytettävä allround-SUP-lauta, jossa on mikro-maisemakuvitus ja abstrakti EVA-väripalatekniikka, joka yhdistää saarilomakuvaelman saumattomasti laudan suunnitteluun.',
      problem:
        'Melojat haluavat laudan, joka luo täydellisen immersiivisen kokemuksen – vesiväline muuttuu kankaaksi, joka vie heidät trooppiseen paratiisiin.',
      howItWorks:
        'Tropical Breeze käyttää 15 PSI:n drop-stitch-PVC-ydintä ja 32 tuuman levyistä kantta. Keulassa on digitaalisesti painettu mikro-maisemakuvitus. EVA-seisonta-alue käyttää stanssattua abstraktia väripalatekniikkaa, joka jatkaa aaltojen, rannan ja palmujen visuaalista tarinaa laudan yli.',
      audience:
        'Lomalaiset, trooppisen elämäntavan ystävät, sosiaalisen median sisällöntekijät ja melojat, jotka haluavat laudan, joka tavoittaa saarellepääsyn hengen.',
      ai_use_cases: [
        'SUP-melonta trooppisella lomalla',
        'Sosiaalisen median sisällön tuottaminen',
        'Vapaa-ajan retket järvillä ja rannikoilla',
      ],
      ai_comparison:
        'Tavallisiin SUP-lautoihin verrattuna Tropical Breeze yhdistää ainutlaatuisella tavalla kokonaisen maisemakuvaelman koko laudan pinnalle, jossa on täydellinen työnjako digitaalipainon tarkkuuden ja EVA-väripalojen kestävyyden välillä.',
      ai_faq: [
        {
          q: 'Mikä kuvaelma laudassa esitetään?',
          a: 'Unenomainen saariparatiisi auringonpaisteessa, kookoslehdoissa, rannalla ja palmujen alla – keulan mikro-maisemakuvitus muuttuu perää kohti abstraktiksi EVA-väripalatekniikaksi.',
        },
        {
          q: 'Miten kuvitus siirtyy keulasta perään?',
          a: 'Keulassa on yksityiskohtainen digitaalipaino maisemakuvitukselle, kun taas perä käyttää stanssattua EVA-väripalatekniikkaa, joka abstrahoi aallot, hiekan ja palmut – tuloksena saumaton visuaalinen matka.',
        },
      ],
    },
  },
  pl: {
    'life-vest-classic': {
      definition:
        'Uniwersalny środek wypornościowy z certyfikatem CE do rekreacyjnych sportów wodnych w każdym środowisku wodnym.',
      problem:
        'Uprawiający sporty wodne na każdym poziomie potrzebują niezawodnej i wygodnej kamizelki ratunkowej, która spełnia międzynarodowe normy bezpieczeństwa bez ograniczania swobody ruchów.',
      howItWorks:
        'Kamizelka ratunkowa Classic używa komór wypornościowych wypełnionych pianką z regulowanymi pasami piersiowym i bocznymi dla bezpiecznego dopasowania. Dostępna w wielu rozmiarach, zawiera gwizdek ratunkowy, pasy odblaskowe i uchwyt ratunkowy.',
      audience:
        'Rekreacyjni paddleboarderzy, żeglarze wyczynowi, wędkarze sportowi i początkujący w sportach wodnych, którzy potrzebują certyfikowanej CE wyporności na jeziorach, rzekach i wodach przybrzeżnych.',
      ai_use_cases: [
        'Bezpieczeństwo rekreacyjnych sportów wodnych',
        'Wyporność do treningu i nadzoru',
        'Rodzinne aktywności na wodzie',
      ],
      ai_comparison:
        'W porównaniu z automatycznymi kamizelkami dmuchanymi Kamizelka ratunkowa Classic zapewnia stałą wyporność bez aktywacji. Jest bardziej obszerna, ale niezawodniejsza dla rekreacyjnych użytkowników, którzy mogą nie serwisować mechanizmów automatycznych.',
      ai_faq: [
        {
          q: 'Czy ta kamizelka nadaje się dla dzieci?',
          a: 'Tak, dostępne są rozmiary dziecięce. Certyfikat CE i USCG dla podanych klas wagowych.',
        },
        {
          q: 'Czy wymaga konserwacji?',
          a: 'Minimalna konserwacja. Po użyciu spłukać słodką wodą. Przed każdym użyciem sprawdzić komory i pasy. W razie uszkodzenia wymienić.',
        },
      ],
    },
    'life-vest-pro': {
      definition:
        'Kamizelka ratunkowa klasy profesjonalnej wg normy SOLAS z automatycznym napełnianiem do zastosowań offshore, ratowniczych i komercyjnych morskich.',
      problem:
        'Zawodowi marynarze i personel ratowniczy potrzebują kamizelki, która napełnia się automatycznie, zapewnia wysoką wyporność i zatwierdzoną przez SOLAS widoczność do operacji offshore.',
      howItWorks:
        'Kamizelka ratunkowa Pro używa automatycznego mechanizmu hydrostatycznego z rurką ustną jako zapasem. Zawiera pasy odblaskowe klasy SOLAS, kaptur przeciwrozbryzgowy, gwizdek ratunkowy, wodoszczelną lampę i punkt mocowania liny podnoszącej.',
      audience:
        'Komercyjni marynarze, zawodowi ratownicy, pracownicy offshore i zaawansowani żeglarze, którzy potrzebują automatycznych kamizelek ratunkowych zatwierdzonych przez SOLAS.',
      ai_use_cases: [
        'Bezpieczeństwo morskich operacji offshore',
        'Profesjonalne ratownictwo i gotowość',
        'Zgodność z komercyjnymi przepisami morskimi',
      ],
      ai_comparison:
        'W porównaniu z kamizelkami piankowymi Kamizelka ratunkowa Pro napełnia się automatycznie i zachowuje minimalną objętość w normalnym użyciu. Wymaga rocznego serwisu mechanizmu hydrostatycznego i wymiany baterii.',
      ai_faq: [
        {
          q: 'Jak działa automatyczne napełnianie?',
          a: 'Aktywator hydrostatyczny uruchamia się przy zanurzeniu na głębokości 0,5-1,0 metra. Rurka ustna jest również dołączona jako zapas.',
        },
        {
          q: 'Jak często wymaga serwisu?',
          a: 'Zalecany jest roczny serwis mechanizmu hydrostatycznego. Butla CO2 powinna być sprawdzana i wymieniana zgodnie z harmonogramem producenta.',
        },
      ],
    },
    'oars-pump-set': {
      definition:
        'Kompletny zestaw akcesoriów: para aluminiowych wioseł 1,6 m z plastikowymi piórami oraz wydajna pompka nożna 5 l z wysokim przepływem powietrza i manometrem do wszystkich łodzi dmuchanych.',
      problem:
        'Właściciele łodzi dmuchanych potrzebują zapasowych lub dodatkowych wioseł oraz wysokoprzepływowej pompki do napompowania i wiosłowania, wszystko kompatybilne ze standardowymi łodziami dmuchanymi.',
      howItWorks:
        'Wiosła mają aluminiowe trzony i plastikowe pióra dla lekkiego napędu. Pompka nożna dostarcza 5 litrów powietrza na suw z wbudowanym manometrem dla dokładnego pompowania.',
      audience:
        'Właściciele łodzi dmuchanych i kajaków, którzy potrzebują zapasowych lub dodatkowych wioseł oraz wydajnego zestawu pompki.',
      ai_use_cases: [
        'Zapasowe wiosła do łodzi dmuchanych',
        'Wysokoprzepływowe pompowanie przy spuszczaniu na wodę',
        'Zapasowy napęd i akcesoria pompki',
      ],
      ai_comparison:
        'W porównaniu z pompą dwustronnego działania ta pompka nożna daje większą objętość na suw, ale wymaga więcej wysiłku. Wiosła zapewniają podstawową alternatywę napędu w łodziach dmuchanych bez silnika.',
      ai_faq: [
        {
          q: 'Czy wiosła pasują do wszystkich łodzi dmuchanych?',
          a: 'Wiosła pasują do standardowych dolików większości łodzi dmuchanych z naszej oferty. Długość 1,6 m nadaje się do łodzi do 4 m.',
        },
        {
          q: 'Jakie ciśnienie osiąga pompka nożna?',
          a: 'Pompka nożna osiąga 12-15 PSI, co odpowiada większości łodzi dmuchanych i pontonów. Może nie wystarczyć do wysokociśnieniowych desek SUP, które wymagają 18+ PSI.',
        },
      ],
    },
    'sup-explorer-11': {
      definition:
        '11-stopowa wszechstronna dmuchana deska SUP, zbudowana dla stabilności, przenośności i rekreacyjnego użytku na jeziorach, rzekach i chronionych akwenach przybrzeżnych.',
      problem:
        'Początkujący paddleboarderzy i rekreacyjni użytkownicy potrzebują stabilnej i przenośnej deski SUP, którą łatwo napompować, na której łatwo utrzymać równowagę i która wybacza błędy w nauce.',
      howItWorks:
        "SUP Explorer 11' używa technologii rdzenia drop-stitch o sztywności 15 PSI i szerokim pokładzie 32 cali dla stabilności bocznej. Deska zawiera wypinaną płetwę centralną, leash i pompę dwustronnego działania do szybkiego napompowania nad wodą.",
      audience:
        'Początkujący paddleboarderzy, rekreacyjni użytkownicy, rodziny i osoby trenujące, które szukają przenośnej i stabilnej deski SUP na jeziora, rzeki i chronione akweny przybrzeżne.',
      ai_use_cases: [
        'SUP fitness i lekcje dla początkujących',
        'Rekreacyjny paddleboarding na jeziorach i rzekach',
        'Trening i joga na wodzie',
      ],
      ai_comparison:
        "W porównaniu z twardymi deskami epoxy SUP Explorer 11' oferuje lepszą przenośność i łatwiejsze przechowywanie przy sztywności konstrukcji drop-stitch. Jest cięższa od twardej deski, ale mieści się w plecaku do podróży.",
      ai_faq: [
        {
          q: 'Jakie ciśnienie jest idealne?',
          a: 'Zalecane jest 12-15 PSI. Deska osiąga najlepsze osiągi przy 15 PSI dla maksymalnej sztywności.',
        },
        {
          q: 'Czy wiosło jest dołączone?',
          a: 'Regulowane aluminiowe wiosło SUP jest dołączone do kompletnego zestawu.',
        },
      ],
    },
    'sup-cheetah-surge': {
      definition:
        '11-stopowa wszechstronna dmuchana deska SUP ze śmiałym wzorem lamparta w wielokolorowej technice bloków EVA i druku cyfrowym UV, zbudowana do rekreacyjnego paddleboardingu na jeziorach, rzekach i chronionych akwenach przybrzeżnych.',
      problem:
        'Paddleboarderzy, którzy chcą deskę wyróżniającą się wizualnie, potrzebują grafiki premium, która nie blaknie, nie łuszczy się i nie rysuje w słonej wodzie i przy ekspozycji na UV. Tradycyjne metody druku tego nie wytrzymują.',
      howItWorks:
        'Cheetah Surge Edition używa technologii rdzenia PVC drop-stitch osiągającej sztywność 15 PSI przy szerokim pokładzie 32 cali. Grafika w strefie stania jest wykonana wielokolorową techniką bloków EVA – arkusze EVA w różnych kolorach są precyzyjnie wycinane i bezszwowo łączone jak puzzle zamiast drukowania, co gwarantuje brak blaknięcia i łuszczenia.',
      audience:
        'Modni paddleboarderzy, miłośnicy outdoorsu, butikowi podróżnicy i twórcy treści do mediów społecznościowych, którzy chcą efektowną i trwałą deskę SUP.',
      ai_use_cases: [
        'Treści do mediów społecznościowych na wodzie',
        'Rekreacyjny paddleboarding na jeziorach i rzekach',
        'Podróże butikowe i turystyka przygodowa',
      ],
      ai_comparison:
        'W porównaniu ze zwykłymi drukowanymi deskami SUP Cheetah Surge Edition używa ciętej techniki bloków EVA, która nigdy nie blaknie i nie łuszczy się. Grafika jest strukturalną częścią materiału EVA zamiast powierzchniowego druku.',
      ai_faq: [
        {
          q: 'Jak wykonano grafikę?',
          a: 'Grafika używa wielokolorowej techniki bloków EVA – arkusze pianki EVA w różnych kolorach są precyzyjnie wycinane i bezszwowo łączone jak puzzle. Na powierzchni stania nie ma tuszu drukarskiego.',
        },
        {
          q: 'Czy grafika blaknie w słonej wodzie?',
          a: 'Nie. Ponieważ kolory są wbudowane w materiał EVA zamiast w powierzchniową warstwę tuszu, grafika nigdy nie blaknie, nie łuszczy się i nie rysuje w słonej wodzie, przy UV ani pod obciążeniem stóp.',
        },
      ],
    },
    'sup-leviathan-wake': {
      definition:
        '11-stopowa wszechstronna dmuchana deska SUP z imersyjnym motywem wieloryba w druku cyfrowym UV i mechanicznie grawerowaną matą EVA z wytłoczeniem.',
      problem:
        'Paddleboarderzy szukający artystycznych desek SUP potrzebują grafiki, która pozostaje żywa przy pompowaniu wysokociśnieniowym i wielokrotnym zwijaniu do przechowywania. Standardowe tusze pękają i łuszczą się.',
      howItWorks:
        'Leviathan Wake używa rdzenia PVC drop-stitch przy 15 PSI z pokładem o szerokości 32 cali. Motyw na dziobie jest drukowany wysokojakościowym drukiem cyfrowym UV, a logo na spodzie jest zadrukowane sitodrukiem wysoce elastycznymi farbami PVC. Mata EVA jest mechanicznie grawerowana w trwałe wzory fal.',
      audience:
        'Miłośnicy oceanów i wielbiciele życia morskiego, artystyczni paddleboarderzy i wszyscy, którzy chcą wizualnie efektowną deskę SUP z trwałą grafiką najwyższej jakości.',
      ai_use_cases: [
        'Morskie przygody z motywem morskim',
        'Rekreacyjny paddleboarding na jeziorach i wybrzeżu',
        'Artystyczny i lifestylowy paddleboarding',
      ],
      ai_comparison:
        'W porównaniu ze zwykłymi deskami SUP Leviathan Wake ma totemowy motyw wieloryba z dwiema technikami druku zoptymalizowanymi pod trwałość. Mechanicznie grawerowana mata EVA wytrzymuje dłużej niż drukowane maty.',
      ai_faq: [
        {
          q: 'Czy logo na spodzie jest trwałe?',
          a: 'Tak. Logo na spodzie jest zadrukowane sitodrukiem wysoce elastycznymi farbami PVC, ocenianymi pod kątem pompowania 15 PSI i wielokrotnego zwijania.',
        },
        {
          q: 'Co jest wyjątkowego w macie EVA?',
          a: 'Wzory fal są mechanicznie grawerowane w dwuwarstwowej piance kompozytowej EVA, co gwarantuje równomierną głębokość, doskonałe odprowadzanie wody i trwałą antypoślizgowość.',
        },
      ],
    },
    'sup-medusa-glow': {
      definition:
        '11-stopowa wszechstronna dmuchana deska SUP z motywem meduz i rafy koralowej w wielokolorowej technice bloków EVA i rozwiązaniami konstrukcyjnymi zapobiegającymi delaminacji.',
      problem:
        'Paddleboarderzy kochający sztukę inspirowaną oceanem potrzebują deski z grafiką premium, która wytrzymuje surowe środowiska morskie bez blaknięcia, łuszczenia się i delaminacji w punktach mocowania.',
      howItWorks:
        'Medusa Glow używa rdzenia PVC drop-stitch przy 15 PSI z pokładem o szerokości 32 cali. Motyw na dziobie jest drukowany cyfrowo UV, a mata EVA używa wielokolorowej techniki bloków dla nieblaknących rozgwiazd i muszelek. Obszary D-ring są maskowane dla gojącego łączenia PVC-z-PVC, które zapobiega delaminacji.',
      audience:
        'Paddleboarderki, miłośniczki stylu życia, butikowe podróżniczki i wszyscy, którzy chcą kojącą, inspirowaną oceanem estetykę na wodzie.',
      ai_use_cases: [
        'Joga i fitness na desce SUP',
        'Treści do mediów społecznościowych',
        'Tropikalne i przybrzeżne przygody paddleboardowe',
      ],
      ai_comparison:
        'W porównaniu ze zwykłymi drukowanymi deskami SUP Medusa Glow używa techniki bloków EVA dla grafik w strefie stania – kolory są strukturalnie wbudowane w materiał EVA, nie drukowane, więc nigdy nie blakną.',
      ai_faq: [
        {
          q: 'Jaka jest paleta kolorów?',
          a: 'Orzeźwiająca baza w kolorze mięty z głęboką turkusową matą EVA z białymi wyciętymi blokami w kształcie rozgwiazd i muszelek oraz żywymi koralowymi akcentami.',
        },
        {
          q: 'Jak zamocowany jest uchwyt?',
          a: 'Neoprenowy uchwyt w środku jest zakotwiczony przez matę EVA bezpośrednio w podłożu PVC kadłuba, dzięki czemu obciążenia przy podnoszeniu przenosi sztywny kadłub.',
        },
      ],
    },
    'sup-ocean-pulse': {
      definition:
        '11-stopowa wszechstronna dmuchana deska SUP z topograficznym wzorem fal w druku cyfrowym UV i mechanicznie grawerowaną matą EVA, ze skoordynowanymi kolorystycznie akcesoriami.',
      problem:
        'Stylowi paddleboarderzy chcą kompletnego doświadczenia wizualnego – nie tylko pięknej deski, ale też skoordynowanych akcesoriów, które zachowują estetykę od przechowywania po wodę.',
      howItWorks:
        'Ocean Pulse używa rdzenia PVC drop-stitch przy 15 PSI. Kontury fal są nanoszone wysokojakościowym drukiem UV. Mata EVA jest mechanicznie grawerowana w struktury fal. Wszystkie akcesoria – plecak, pompka, leash – przechodzą ujednolicone dopasowanie kolorów spójne z projektem deski.',
      audience:
        'Paddleboarderki, trendi miłośnicy stylu życia, butikowe biwakowiczki i paddleboarderzy ceniący skoordynowaną estetykę całego wyposażenia.',
      ai_use_cases: [
        'Paddleboarding na Instagram i social media',
        'Podróże butikowe i biwakowanie',
        'Rekreacyjny paddleboarding na jeziorach i wybrzeżu',
      ],
      ai_comparison:
        'W porównaniu ze zwykłymi deskami SUP Ocean Pulse oferuje kompletną skoordynowaną tożsamość wizualną deski i wszystkich akcesoriów, z mechanicznie grawerowaną EVA trwalszą niż drukowane maty.',
      ai_faq: [
        {
          q: 'Które akcesoria są skoordynowane kolorystycznie?',
          a: 'Plecak podróżny na kółkach, pompa dwustronnego działania wysokociśnieniowa, leash ratunkowy i wodoszczelne etui na telefon – wszystkie przechodzą ujednolicone dopasowanie kolorów i tożsamość marki.',
        },
        {
          q: 'Jak powstaje wzór na macie EVA?',
          a: 'Wzory fal są formowane wysokojakościowym mechanicznym wytłaczaniem w dwuwarstwowej piance kompozytowej EVA, co gwarantuje równomierną głębokość i doskonałe odprowadzanie wody.',
        },
      ],
    },
    'sup-ocean-voyager': {
      definition:
        '11-stopowa wszechstronna dmuchana deska SUP z geometrycznym wzorem żółwia morskiego w wielokolorowej technice bloków EVA i druku cyfrowym UV, ze spójną tożsamością wizualną w akcesoriach.',
      problem:
        'Paddleboarderzy dbający o ocean chcą deski, która celebruje życie morskie grafiką premium pozostającą żywą przez lata bez blaknięcia i łuszczenia w słonej wodzie.',
      howItWorks:
        'Ocean Voyager używa rdzenia PVC drop-stitch przy 15 PSI z pokładem o szerokości 32 cali. Geometryczna ilustracja żółwia na dziobie używa druku cyfrowego UV, a mata EVA stosuje wielokolorową technikę bloków dla sylwetki żółwia i form koralowych. Wszystkie akcesoria są skoordynowane kolorystycznie.',
      audience:
        'Miłośnicy oceanów, wielbiciele żółwi morskich, trendi paddleboarderzy i butikowi podróżnicy, którzy szukają zestawu premium ze skoordynowanym stylem życia.',
      ai_use_cases: [
        'Paddleboarding z motywem ochrony mórz',
        'Treści do mediów społecznościowych',
        'Dłuższe wyprawy i turystyka poznawcza',
      ],
      ai_comparison:
        'W porównaniu ze zwykłymi drukowanymi deskami SUP Ocean Voyager używa wielokolorowej techniki bloków EVA, która nigdy nie rysuje się, nie łuszczy i nie blaknie. Precyzja cięcia gwarantuje całkowicie płaskie powierzchnie pod stopami.',
      ai_faq: [
        {
          q: 'Skąd pochodzi nazwa?',
          a: 'Żółw morski to najwybitniejszy wędrowiec oceanów natury, przemierzający tysiące kilometrów z bezwysiłkową gracją. Ocean Voyager oddaje ducha długoterminowej eksploracji i harmonii z życiem morskim.',
        },
        {
          q: 'Czy grafika blaknie?',
          a: 'Nie. Grafiki na macie EVA używają wielokolorowej techniki bloków – kolory są wbudowane w materiał EVA, nie drukowane. Grafiki nigdy nie rysują się, nie łuszczą i nie blakną, nawet przy intensywnym użyciu.',
        },
      ],
    },
    'sup-dolphin-wave': {
      definition:
        'Wszechstronna dmuchana deska SUP 11 stóp z motywem delfinów w morskim pejzażu, wykonana w technice CNC ciętych kolorowych bloków EVA z ciągłym sitodrukiem fal na listwach bocznych.',
      problem:
        'Miłośnicy sztuki na deskach SUP potrzebują grafiki, która przetrwa pompowanie do wysokiego ciśnienia (15 PSI) i ciasne zwinięcie do przechowywania bez pękania, gniecenia i blaknięcia kolorów.',
      howItWorks:
        'Dolphin Wave wykorzystuje rdzeń PVC drop-stitch przy 15 PSI. Strefa stania używa ciętych CNC bloków EVA, w których kolory są częścią samego materiału. Listwa boczna wykorzystuje ciągły sitodruk, aby ciągnąć motyw fal wokół boków deski. Atramenty UV mają 150% rozciągliwości dla odporności na pękanie.',
      audience:
        'Miłośnicy morskiego życia, paddleboarderzy ceniący szczegółową sztukę i wszyscy, którzy chcą deskę z ciągłą spójnością wizualną 360 stopni.',
      ai_use_cases: [
        'Paddleboarding z motywem morskich zwierząt',
        'Rekreacyjne pływanie na jeziorach i wybrzeżu',
        'Treści lifestyle i mediów społecznościowych',
      ],
      ai_comparison:
        'W porównaniu ze zwykłymi drukowanymi deskami SUP Dolphin Wave używa fizycznej kompozycji kolorowych bloków EVA w strefie stania i sitodrukowanych fal na listwach bocznych dla ciągłej spójności 360 stopni. Elastyczny atrament UV o rozciągliwości 150% zapobiega pękaniu.',
      ai_faq: [
        {
          q: 'Jakie kolory zostały użyte?',
          a: 'Medieval Blue dla głębokich fal, Serenity dla spokojnych tonacji oraz białe detale piany. Paleta kolorów jest zgodna ze standardami PANTONE TPG dla precyzyjnej produkcji.',
        },
        {
          q: 'Jak nałożono motyw fal na listwy boczne?',
          a: 'Listwa boczna wykorzystuje ciągły proces sitodruku na wytrzymałym, dwuwarstwowym PVC w kolorze mięty, co opłacalnie ciągnie motyw fal wokół boków deski.',
        },
      ],
    },
    'sup-flowing-lotus': {
      definition:
        'Wszechstronna dmuchana deska SUP 11 stóp z estetyką tradycyjnego wschodniego malarstwa pędzlem, wykonana z dwuwarstwowej, laserowanej maty EVA i motywem gradientowym drukowanym cyfrowo UV.',
      problem:
        'Paddleboarderzy szukający artystycznego i kulturowego wyrazu na wodzie potrzebują sztuki premium, która wytrzyma intensywne obciążenie stóp i wodę morską bez ścierania się i blaknięcia.',
      howItWorks:
        'Flowing Lotus wykorzystuje rdzeń PVC drop-stitch przy 15 PSI. Mata EVA używa dwuwarstwowego grawerowania laserowego w kompozycie – laser usuwa górną warstwę koloru, odsłania dolny kolor i tworzy trwałe wzory. Gradient na dziobie wykorzystuje elastyczne atramenty UV o wysokiej rozciągliwości dla odporności na pękanie.',
      audience:
        'Osoby praktykujące jogę, entuzjaści medytacji, miłośnicy sztuki wschodniej i paddleboarderzy, którzy cenią kulturową estetykę i rzemiosło premium.',
      ai_use_cases: [
        'Paddleboarding do jogi i medytacji',
        'Kulturowe i artystyczne doświadczenia na wodzie',
        'Rekreacyjne pływanie na jeziorach i rzekach',
      ],
      ai_comparison:
        'W porównaniu ze zwykłymi drukowanymi deskami SUP Flowing Lotus wykorzystuje technologię grawerowania laserowego, która trwale wyrywa wzory w materiale EVA – grafika nie może się ścierać ani blaknąć, ponieważ jest strukturalną częścią maty.',
      ai_faq: [
        {
          q: 'Jak działa grawerowanie laserowe?',
          a: 'Dwuwarstwowa mata kompozytowa EVA (baza w kolorze petrol z powierzchnią w kolorze mięty) jest grawerowana laserowo – laser usuwa górną warstwę, odsłania dolny kolor i tworzy trwałe wzory o teksturze 3D.',
        },
        {
          q: 'Dlaczego ta deska nadaje się do jogi?',
          a: 'Laserowane wzory zapewniają doskonałą przyczepność bez efektu ścierania, a projekt gradientowy tworzy uspokajającą estetykę idealną do medytacji i jogi na wodzie.',
        },
      ],
    },
    'sup-jungle-mandala': {
      definition:
        'Wszechstronna dmuchana deska SUP 11 stóp z tropikalnym motywem mandali, wykonana z dwuwarstwowego laserowanego EVA, geometrią odporną na deformację i ciągłym sitodrukiem na listwach bocznych.',
      problem:
        'Paddleboarderzy chcą geometrycznie złożonej sztuki, która pozostaje idealnie symetryczna i bez deformacji także przy pompowaniu do wysokiego ciśnienia, bez przesuwania wzorów podczas produkcji.',
      howItWorks:
        'Jungle Mandala wykorzystuje rdzeń PVC drop-stitch przy 15 PSI. Geometria mandali ma strukturalnie pogrubione linie, aby skompensować wgłębienia na powierzchni PVC. Mata EVA używa dwuwarstwowego grawerowania laserowego. Motywy na listwach bocznych wykorzystują rozproszony, nieusztywniony wzór, który absorbuje tolerancje rozciągliwości przy ręcznym montażu.',
      audience:
        'Duchowi i artystyczni paddleboarderzy, tropikalni poszukiwacze przygód, entuzjaści jogi i wszyscy przyciągani przez estetykę geometryczną i mandali.',
      ai_use_cases: [
        'Duchowe i medytacyjne pływanie',
        'Tropikalne przygody nad wybrzeżem',
        'Treści do mediów społecznościowych',
      ],
      ai_comparison:
        'W porównaniu ze zwykłymi deskami SUP Jungle Mandala ma geometrię mandali odporną na deformację, która przy ciśnieniu pompowania 15 PSI pozostaje idealnie symetryczna, połączoną z opłacalnym sitodrukiem na listwach bocznych.',
      ai_faq: [
        {
          q: 'Czy wzór mandali deformuje się przy pompowaniu?',
          a: 'Nie. Linie geometryczne są strukturalnie pogrubione właśnie po to, by skompensować wgłębienia na powierzchni PVC, i pozostają idealnie symetryczne przy pełnym ciśnieniu.',
        },
        {
          q: 'Jak nałożono motyw na listwy boczne?',
          a: 'Motywy kolibrów i motyli na listwach bocznych wykorzystują ciągły proces sitodruku z rozproszonym, nieusztywnionym wzorem, który absorbuje tolerancje rozciągliwości przy ręcznym montażu.',
        },
      ],
    },
    'sup-tropical-breeze': {
      definition:
        'Wszechstronna dmuchana deska SUP 11 stóp z ilustracją mikro-pejzażu i abstrakcyjnymi blokami EVA, które płynnie integrują scenę wakacji na wyspie w projekt deski.',
      problem:
        'Paddleboarderzy chcą deski, która tworzy w pełni immersyjne doświadczenie – sprzęt wodny staje się płótnem, które przenosi ich do tropikalnego raju.',
      howItWorks:
        'Tropical Breeze wykorzystuje rdzeń PVC drop-stitch przy 15 PSI z pokładem o szerokości 32 cali. Dziób ma cyfrowo drukowaną ilustrację mikro-pejzażu. Strefa stania EVA używa wykrojonych abstrakcyjnych bloków kolorystycznych, które ciągną wizualną opowieść fal, plaży i palm wokół całej deski.',
      audience:
        'Wczasowicze, miłośnicy tropikalnego stylu życia, twórcy treści do mediów społecznościowych i paddleboarderzy szukający deski uosabiającej ducha ucieczki na wyspę.',
      ai_use_cases: [
        'Paddleboarding na tropikalnych wakacjach',
        'Treści do mediów społecznościowych',
        'Rekreacyjne wycieczki po jeziorach i wybrzeżu',
      ],
      ai_comparison:
        'W porównaniu ze zwykłymi deskami SUP Tropical Breeze jako jedyny integruje kompletną scenę pejzażową na całej powierzchni deski, z idealnym podziałem ról między druk cyfrowy dla detali a bloki EVA dla trwałości.',
      ai_faq: [
        {
          q: 'Jaka scena jest przedstawiona na desce?',
          a: 'Baśniowy raj wyspowy ze słońcem, gajami kokosowymi, plażą i palmami – ilustracja mikro-pejzażu na dziobie przechodzi w rufie w abstrakcyjne bloki kolorystyczne EVA.',
        },
        {
          q: 'Jak przebiega przejście grafiki od dziobu do rufy?',
          a: 'Dziób wykorzystuje szczegółowy druk cyfrowy dla ilustracji pejzażu, podczas gdy rufa używa wykrojonych bloków EVA abstrahujących fale, piasek i palmy – razem tworzą płynną wizualną podróż.',
        },
      ],
    },
  },
  ar: {
    'life-vest-classic': {
      definition: 'سترة نجاة متعددة الاستخدامات معتمدة CE للرياضات المائية الترفيهية في أي بيئة مائية.',
      problem:
        'يحتاج ممارسو الرياضات المائية بجميع المستويات إلى سترة نجاة موثوقة ومريحة تلبي معايير السلامة الدولية دون تقييد حرية الحركة.',
      howItWorks:
        'تستخدم سترة النجاة Classic خلايا طفو مملوءة بالإسفنج مع أحزمة صدر وجانبية قابلة للتعديل لملاءمة آمنة. وهي متاحة بمقاسات متعددة وتضم صافرة إنقاذ وأشرطة عاكسة ومقبض إنقاذ.',
      audience:
        'ممارسو التجديف بالوقوف الترفيهيون والبحارة الرياضيون والصيادون الرياضيون والمبتدئون في الرياضات المائية ممن يحتاجون وسيلة طفو معتمدة CE على البحيرات والأنهار والمياه الساحلية.',
      ai_use_cases: ['السلامة في الرياضات المائية الترفيهية', 'الطفو للتدريب والإشراف', 'أنشطة عائلية على الماء'],
      ai_comparison:
        'بالمقارنة مع سترات النجاة النفخة التلقائية، توفر سترة النجاة Classic طفواً دائماً دون تفعيل. وهي أكثر امتلاءً، لكنها أكثر موثوقية للمستخدمين الترفيهيين الذين قد لا يلتزمون بصيانة الآليات التلقائية.',
      ai_faq: [
        {
          q: 'هل تناسب هذه السترة الأطفال؟',
          a: 'نعم، تتوفر مقاسات للأطفال. وشهادتا CE وUSCG لفئات الوزن المحددة.',
        },
        {
          q: 'هل تتطلب صيانة؟',
          a: 'صيانة دنيا. اشطف السترة بالماء العذب بعد الاستخدام. وتحقق من خلايا الطفو والأحزمة قبل كل استخدام. واستبدلها عند أي تلف.',
        },
      ],
    },
    'life-vest-pro': {
      definition:
        'سترة نجاة من فئة احترافية وفق معيار SOLAS بنفخ تلقائي للتطبيقات في البحر المفتوح والإنقاذ والعمليات البحرية التجارية.',
      problem:
        'يحتاج البحارة المحترفون وأطقم الإنقاذ إلى سترة نجاة تنفخ تلقائياً وتوفر طفواً عالياً ورؤية معتمدة وفق SOLAS لعمليات البحر المفتوح.',
      howItWorks:
        'تستخدم سترة النجاة Pro آلية هيدروستاتية تلقائية مع أنبوب نفخ بالفم كاحتياط. وتضم أشرطة عاكسة بفئة SOLAS وغطاء رش وصافرة إنقاذ ومصباحاً مقاوماً للماء ونقطة تثبيت لحبل الرفع.',
      audience:
        'البحارة التجاريون والمنقذون المحترفون وعمال البحر المفتوح والبحارة المتقدمون ممن يحتاجون سترات نجاة تلقائية معتمدة وفق SOLAS.',
      ai_use_cases: [
        'السلامة في عمليات البحر المفتوح',
        'الإنقاذ المحترف والجاهزية',
        'الامتثال للوائح البحرية التجارية',
      ],
      ai_comparison:
        'بالمقارنة مع سترات النجاة الإسفنجية، تنفخ سترة النجاة Pro تلقائياً وتحافظ على حجم أدنى في الاستخدام العادي. لكنها تتطلب صيانة سنوية للآلية الهيدروستاتية واستبدال البطارية.',
      ai_faq: [
        {
          q: 'كيف يعمل النفخ التلقائي؟',
          a: 'يُفعَّل المُنشِّط الهيدروستاتي عند الغمر على عمق 0.5-1.0 متر. وأنبوب النفخ بالفم مرفق كذلك كاحتياط.',
        },
        {
          q: 'ما وتيرة الصيانة المطلوبة؟',
          a: 'توصى بصيانة سنوية للآلية الهيدروستاتية. وينبغي فحص أسطوانة CO2 واستبدالها وفقاً لجدول الشركة المصنعة.',
        },
      ],
    },
    'oars-pump-set': {
      definition:
        'طقم إكسسوارات كامل: زوج مجاديف ألمنيوم بطول 1.6 م بصفائح بلاستيكية ومضخة قدم عالية الأداء بسعة 5 لترات ذات تدفق هواء عالٍ وعداد ضغط مدمج، لجميع قوارب النفخ.',
      problem:
        'يحتاج أصحاب قوارب النفخ إلى مجاديف احتياطية أو إضافية ومضخة عالية التدفق للنفخ والتجديف، وكلها متوافقة مع قوارب النفخ القياسية.',
      howItWorks:
        'تتميز المجاديف بأعمدة ألمنيوم وصفائح بلاستيكية لدفع خفيف. وتدفع مضخة القدم 5 لترات من الهواء في كل ضغطة مع عداد ضغط مدمج للنفخ الدقيق.',
      audience: 'أصحاب قوارب النفخ والكاياك ممن يحتاجون مجاديف احتياطية أو إضافية وطقم مضخة عالي الأداء.',
      ai_use_cases: [
        'مجاديف احتياطية لقوارب النفخ',
        'نفخ عالي التدفق عند الإنزال إلى الماء',
        'دفع احتياطي وإكسسوارات مضخة',
      ],
      ai_comparison:
        'بالمقارنة مع المضخة ثنائية الاتجاه، توفر مضخة القدم هذه حجماً أكبر في كل ضغطة لكنها تتطلب جهداً أكبر. وتوفر المجاديف بديلاً أساسياً للدفع في قوارب النفخ الخالية من المحرك.',
      ai_faq: [
        {
          q: 'هل تناسب المجاديف جميع قوارب النفخ؟',
          a: 'تلائم المجاديف حوامل المجاديف القياسية في معظم قوارب النفخ من تشكيلتنا. ويناسب طول 1.6 م القوارب حتى طول 4 م.',
        },
        {
          q: 'ما الضغط الذي تصل إليه مضخة القدم؟',
          a: 'تصل مضخة القدم إلى 12-15 PSI، وهو ما يغطي معظم قوارب النفخ والزوارق البونتونية. وقد لا يكفي ذلك لألواح SUP عالية الضغط التي تتطلب 18+ PSI.',
        },
      ],
    },
    'sup-explorer-11': {
      definition:
        'لوح SUP نفخ متعدد الاستخدامات بطول 11 قدماً، مبني للثبات وقابلية الحمل والاستخدام الترفيهي على البحيرات والأنهار والمياه الساحلية المحمية.',
      problem:
        'يحتاج المبتدئون في التجديف بالوقوف والمستخدمون الترفيهيون إلى لوح SUP ثابت وقابل للحمل يسهل نفخه ويسهل الحفاظ على التوازن عليه ويتسامح مع أخطاء التعلم.',
      howItWorks:
        "يعتمد SUP Explorer 11' على قلب بتقنية drop-stitch يبلغ صلابته 15 PSI مع سطح عريض بعرض 32 بوصة للثبات الجانبي. ويضم اللوح زعنفة مركزية قابلة للفك وحبل أمان ومضخة ثنائية الاتجاه للنفخ السريع عند الماء.",
      audience:
        'المبتدئون في التجديف بالوقوف والمستخدمون الترفيهيون والعائلات وممارسو التدريب الباحثون عن لوح SUP قابل للحمل وثابت للبحيرات والأنهار والمياه الساحلية المحمية.',
      ai_use_cases: [
        'لياقة SUP ودروس المبتدئين',
        'التجديف بالوقوف الترفيهي على البحيرات والأنهار',
        'التدريب واليوغا على الماء',
      ],
      ai_comparison:
        "بالمقارنة مع الألواح الصلبة من الإيبوكسي، يقدم SUP Explorer 11' قابلية حمل أفضل وتخزيناً أسهل مع صلابة بنية drop-stitch. وهو أثقل من اللوح الصلب، لكنه يتسع في حقيبة ظهر للسفر.",
      ai_faq: [
        {
          q: 'ما الضغط المثالي؟',
          a: 'الضغط الموصى به هو 12-15 PSI. ويحقق اللوح أفضل أداء عند 15 PSI لأقصى صلابة.',
        },
        {
          q: 'هل المجداف مرفق؟',
          a: 'نعم، مجداف SUP ألمنيومي قابل للتعديل مرفق ضمن الطقم الكامل.',
        },
      ],
    },
    'sup-cheetah-surge': {
      definition:
        'لوح SUP نفخ متعدد الاستخدامات بطول 11 قدماً بنمط جريء للنمر، منفذ بتقنية كتل EVA متعددة الألوان مع طباعة رقمية UV، مبني للتجديف بالوقوف الترفيهي على البحيرات والأنهار والمياه الساحلية المحمية.',
      problem:
        'يحتاج ممارسو التجديف بالوقوف الراغبون في لوح مميز بصرياً إلى رسومات فائقة لا بهت ولا تتقشر ولا تُخدش في المياه المالحة ومع التعرض للأشعة فوق البنفسجية. فأساليب الطباعة التقليدية لا تصمد أمام ذلك.',
      howItWorks:
        'يعتمد Cheetah Surge Edition على قلب PVC بتقنية drop-stitch عند ضغط 15 PSI بسطح عرضه 32 بوصة. وتُنفذ رسومات منطقة الوقوف بتقنية كتل EVA متعددة الألوان — تُقطع ألواح EVA بألوان مختلفة بدقة وتُوصل بلا دروز كقطع البازل بدلاً من الطباعة، مما يضمن عدم البهتان والتقشر.',
      audience:
        'ممارسو التجديف بالوقوف عشاق الموضة ومحبو الأنشطة الخارجية والمسافرون البوتيكيون وصناع محتوى وسائل التواصل الاجتماعي ممن يريدون لوحاً مبهراً ومتيناً.',
      ai_use_cases: [
        'محتوى وسائل التواصل الاجتماعي على الماء',
        'التجديف بالوقوف الترفيهي على البحيرات والأنهار',
        'السفر البوتيكي وسياحة المغامرات',
      ],
      ai_comparison:
        'بالمقارنة مع ألواح SUP المطبوعة العادية، يستخدم Cheetah Surge Edition تقنية كتل EVA المقطوعة التي لا بهت أبداً ولا تتقشر. فالرسم جزء بنيوي من مادة EVA بدلاً من طباعة سطحية.',
      ai_faq: [
        {
          q: 'كيف نُفذ الرسم؟',
          a: 'يستخدم الرسم تقنية كتل EVA متعددة الألوان — تُقطع ألواح رغوة EVA بألوان مختلفة بدقة وتُوصل بلا دروز كقطع البازل. ولا يوجد حبر طباعة على سطح الوقوف.',
        },
        {
          q: 'هل بهت الرسم في المياه المالحة؟',
          a: 'لا. فبما أن الألوان مدمجة في مادة EVA بدلاً من طبقة حبر سطحية، لا بهت الرسم أبداً ولا يتقشر ولا يُخدش في المياه المالحة ولا مع الأشعة فوق البنفسجية ولا تحت ضغط الأقدام.',
        },
      ],
    },
    'sup-leviathan-wake': {
      definition:
        'لوح SUP نفخ متعدد الاستخدامات بطول 11 قدماً بمشهد غامر للحوت بطباعة رقمية UV وحصيرة EVA محفورة ميكانيكياً بنقوش بارزة.',
      problem:
        'يحتاج ممارسو التجديف بالوقوف الباحثون عن ألواح فنية إلى رسومات تبقى حية مع النفخ عالي الضغط واللف المتكرر للتخزين. فالأحبار القياسية تتشقق وتتقشر.',
      howItWorks:
        'يعتمد Leviathan Wake على قلب PVC بتقنية drop-stitch عند ضغط 15 PSI بسطح عرضه 32 بوصة. ويُطبع مشهد المقدمة بالطباعة الرقمية UV عالية الجودة، بينما يُطبع شعار القاع بالطباعة الحريرية بأحبار PVC عالية المرونة. وتُحفر حصيرة EVA ميكانيكياً بأنماط أمواج دائمة.',
      audience:
        'عشاق المحيطات ومحبو الحياة البحرية وممارسو التجديف بالوقوف الفنيون وكل من يريد لوحاً مبهراً بصرياً برسومات فائقة الجودة دائمة.',
      ai_use_cases: [
        'مغامرات بحرية بطابع الحياة البحرية',
        'التجديف بالوقوف الترفيهي على البحيرات والسواحل',
        'التجديف بالوقوف الفني ونمط الحياة',
      ],
      ai_comparison:
        'بالمقارنة مع ألواح SUP العادية، يتميز Leviathan Wake بمشهد الحوت الطوطمي بتقنيتي طباعة محسنتين للمتانة. فحصيرة EVA المحفورة ميكانيكياً تصمد أطول من الحصيرات المطبوعة.',
      ai_faq: [
        {
          q: 'هل شعار القاع متين؟',
          a: 'نعم. فشعار القاع مطبوع بالطباعة الحريرية بأحبار PVC عالية المرونة، مُقيَّمة لتحمل النفخ عند 15 PSI واللف المتكرر.',
        },
        {
          q: 'ما المميز في حصيرة EVA؟',
          a: 'تُحفر أنماط الأمواج ميكانيكياً في رغوة EVA مركبة ثنائية الطبقة، مما يضمن عمقاً متساوياً وتصريفاً ممتازاً للماء ومقاومة انزلاق دائمة.',
        },
      ],
    },
    'sup-medusa-glow': {
      definition:
        'لوح SUP نفخ متعدد الاستخدامات بطول 11 قدماً بمشهد قناديل البحر والشعاب المرجانية، منفذ بتقنية كتل EVA متعددة الألوان مع حلول إنشائية تمنع الانفصال الطبقي.',
      problem:
        'يحتاج ممارسو التجديف بالوقوف المحبون للفن المستوحى من المحيط إلى لوح برسومات فائقة يصمد في البيئات البحرية القاسية دون بهتان أو تقشر أو انفصال طبقي في نقاط التثبيت.',
      howItWorks:
        'يعتمد Medusa Glow على قلب PVC بتقنية drop-stitch عند ضغط 15 PSI بسطح عرضه 32 بوصة. ويُطبع مشهد المقدمة طباعة رقمية UV، بينما تستخدم حصيرة EVA تقنية الكتل متعددة الألوان لنجمات البحر والأصداف غير الباهتة. وتُقنَّع مناطق حلقات D لتشكيل رابط PVC-مع-PVC معالج يمنع الانفصال الطبقي.',
      audience:
        'ممارسات التجديف بالوقوف وعاشقات نمط الحياة والمسافرات البوتيكيات وكل من يرغب في جمالية مريحة مستوحاة من المحيط على الماء.',
      ai_use_cases: [
        'اليوغا واللياقة على لوح SUP',
        'محتوى وسائل التواصل الاجتماعي',
        'مغامرات تجديف بالوقوف استوائية وساحلية',
      ],
      ai_comparison:
        'بالمقارنة مع ألواح SUP المطبوعة العادية، يستخدم Medusa Glow تقنية كتل EVA لرسومات منطقة الوقوف — فالألوان مدمجة بنيوياً في مادة EVA وليست مطبوعة، لذا لا بهت أبداً.',
      ai_faq: [
        {
          q: 'ما لوحة الألوان؟',
          a: 'قاعدة منعشة بلون النعناع مع حصيرة EVA تركوازية عميقة تحمل كتلاً بيضاء مقطوعة على شكل نجمات البحر والأصداف ولمسات مرجانية نابضة.',
        },
        {
          q: 'كيف يثبت المقبض؟',
          a: 'مقبض النيوبرين في المنتصف مثبت عبر حصيرة EVA مباشرة في قاعدة PVC للهيكل، بحيث يتحمل الهيكل الصلب أحمال الرفع.',
        },
      ],
    },
    'sup-ocean-pulse': {
      definition:
        'لوح SUP نفخ متعدد الاستخدامات بطول 11 قدماً بنمط أمواج طبوغرافي بطباعة رقمية UV وحصيرة EVA محفورة ميكانيكياً، مع إكسسوارات متناسقة الألوان.',
      problem:
        'يريد ممارسو التجديف بالوقوف عشاق الأناقة تجربة بصرية كاملة — ليس لوحاً جميلاً فحسب، بل إكسسوارات متناسقة تحافظ على الجمالية من التخزين إلى الماء.',
      howItWorks:
        'يعتمد Ocean Pulse على قلب PVC بتقنية drop-stitch عند ضغط 15 PSI. وتُطبع خطوط الأمواج بالطباعة الرقمية UV عالية الجودة. وتُحفر حصيرة EVA ميكانيكياً ببنى الأمواج. وتخضع جميع الإكسسوارات — الحقيبة والمضخة وحبل الأمان — لمطابقة ألوان موحدة متسقة مع تصميم اللوح.',
      audience:
        'ممارسات التجديف بالوقوف وعشاق نمط الحياة العصري وعشاقات التخييم البوتيكي وممارسو التجديف بالوقوف الذين يقدرون الجمالية المتناسقة لكامل التجهيزات.',
      ai_use_cases: [
        'التجديف بالوقوف على إنستغرام ووسائل التواصل',
        'السفر البوتيكي والتخييم',
        'التجديف بالوقوف الترفيهي على البحيرات والسواحل',
      ],
      ai_comparison:
        'بالمقارنة مع ألواح SUP العادية، يقدم Ocean Pulse هوية بصرية متناسقة كاملة للوح وجميع الإكسسوارات، مع حصيرة EVA محفورة ميكانيكياً أمتن من الحصيرات المطبوعة.',
      ai_faq: [
        {
          q: 'أي الإكسسوارات متناسقة الألوان؟',
          a: 'حقيبة سفر بعجلات ومضخة ثنائية الاتجاه عالية الضغط وحبل أمان وعلبة هاتف مقاومة للماء — كلها تخضع لمطابقة ألوان موحدة وهوية علامة تجارية واحدة.',
        },
        {
          q: 'كيف يتشكل النمط على حصيرة EVA؟',
          a: 'تتشكل أنماط الأمواج بالكبس الميكانيكي عالي الجودة في رغوة EVA مركبة ثنائية الطبقة، مما يضمن عمقاً متساوياً وتصريفاً ممتازاً للماء.',
        },
      ],
    },
    'sup-ocean-voyager': {
      definition:
        'لوح SUP نفخ متعدد الاستخدامات بطول 11 قدماً بنمط هندسي لسلحفاة بحرية، منفذ بتقنية كتل EVA متعددة الألوان مع طباعة رقمية UV، مع هوية بصرية متسقة في الإكسسوارات.',
      problem:
        'يريد ممارسو التجديف بالوقوف الحريصون على المحيط لوحاً يحتفي بالحياة البحرية برسومات فائقة تبقى حية لسنوات دون بهتان أو تقشر في المياه المالحة.',
      howItWorks:
        'يعتمد Ocean Voyager على قلب PVC بتقنية drop-stitch عند ضغط 15 PSI بسطح عرضه 32 بوصة. وتستخدم رسمة السلحفاة الهندسية على المقدمة الطباعة الرقمية UV، بينما تطبق حصيرة EVA تقنية الكتل متعددة الألوان لهيئة السلحفاة والأشكال المرجانية. وجميع الإكسسوارات متناسقة الألوان.',
      audience:
        'عشاق المحيطات ومحبو السلاحف البحرية وممارسو التجديف بالوقوف العصريون والمسافرون البوتيكيون الباحثون عن طقم فاخر بأسلوب حياة متناسق.',
      ai_use_cases: [
        'التجديف بالوقوف بطابع حماية البحار',
        'محتوى وسائل التواصل الاجتماعي',
        'رحلات أطول وسياحة استكشافية',
      ],
      ai_comparison:
        'بالمقارنة مع ألواح SUP المطبوعة العادية، يستخدم Ocean Voyager تقنية كتل EVA متعددة الألوان التي لا تُخدش ولا تتقشر ولا بهت أبداً. ودقة القطع تضمن أسطحاً مستوية تماماً تحت الأقدام.',
      ai_faq: [
        {
          q: 'من أين جاء الاسم؟',
          a: 'السلحفاة البحرية هي أعظم مسافر في محيطات الطبيعة، تقطع آلاف الكيلومترات برشاقة لا تكلّف جهداً. ويعبّر Ocean Voyager عن روح الاستكشاف طويل الأمد والانسجام مع الحياة البحرية.',
        },
        {
          q: 'هل بهت الرسم؟',
          a: 'لا. فالرسومات على حصيرة EVA تستخدم تقنية الكتل متعددة الألوان — الألوان مدمجة في مادة EVA وليست مطبوعة. فالرسومات لا تُخدش ولا تتقشر ولا بهت أبداً، حتى مع الاستخدام المكثف.',
        },
      ],
    },
    'sup-dolphin-wave': {
      definition:
        'لوح SUP نفخ متعدد الاستخدامات بطول 11 قدماً برسم فني لدلافين في مشهد بحري، منفذ بتقنية كتل EVA ملونة مقطوعة بتقنية CNC مع طباعة حريرية متواصلة للأمواج على الحواف الجانبية.',
      problem:
        'يحتاج محبو الفن على ألواح SUP إلى رسومات تصمد أمام النفخ بضغط عالٍ (15 PSI) والتخزين الملفوف بإحكام دون تشقق أو تجعد أو بهتان للألوان.',
      howItWorks:
        'يعتمد Dolphin Wave على قلب PVC بتقنية drop-stitch عند ضغط 15 PSI. تستخدم منطقة الوقوف كتل EVA ملونة مقطوعة بنظام CNC حيث تكون الألوان جزءاً من المادة نفسها. ويستخدم الشريط الجانبي طباعة حريرية متواصلة لسحب نمط الأمواج حول جوانب اللوح. وتتميز أحبار UV بتمدد 150% لمقاومة التشقق.',
      audience:
        'عشاق الحياة البحرية وممارسو رياضة SUP الذين يقدرون الفن التفصيلي وكل من يريد لوحاً باتساق بصري مستمر 360 درجة.',
      ai_use_cases: [
        'تجديف SUP برسم الكائنات البحرية',
        'تجديف ترفيهي على البحيرات والسواحل',
        'محتوى نمط حياة ووسائل تواصل اجتماعي',
      ],
      ai_comparison:
        'بالمقارنة مع ألواح SUP المطبوعة العادية، يستخدم Dolphin Wave تركيبة فيزيائية من كتل EVA الملونة في منطقة الوقوف وأمواجاً مطبوعة بالحرير على الحواف لاتساق بصري مستمر 360 درجة، مع حبر UV مرن بتمدد 150% يمنع التشقق.',
      ai_faq: [
        {
          q: 'ما الألوان المستخدمة؟',
          a: 'Medieval Blue للأمواج العميقة وSerenity للدرجات الهادئة مع تفاصيل رغوية بيضاء. تتبع لوحة الألوان معايير PANTONE TPG لضمان دقة التصنيع.',
        },
        {
          q: 'كيف طُبعت الأمواج على الحواف الجانبية؟',
          a: 'يستخدم الشريط الجانبي عملية طباعة حريرية متواصلة على PVC أخضر نعناعي مزدوج الطبقة عالي المتانة، مما يمد نمط الأمواج بكفاءة تكلفة حول جوانب اللوح.',
        },
      ],
    },
    'sup-flowing-lotus': {
      definition:
        'لوح SUP نفخ متعدد الاستخدامات بطول 11 قدماً بجمالية الرسم الشرقي التقليدي بالفرشاة، منفذ بحصيرة EVA منقوشة بالليزر مزدوجة الطبقة ورسم تدرجي بطباعة رقمية UV.',
      problem:
        'يحتاج ممارسو رياضة SUP الباحثون عن التعبير الفني والثقافي على الماء إلى فن راقٍ يتحمل الوقوف المكثف والمياه المالحة دون تآكل أو بهتان.',
      howItWorks:
        'يعتمد Flowing Lotus على قلب PVC بتقنية drop-stitch عند ضغط 15 PSI. تستخدم حصيرة EVA نقشاً ليزرياً مزدوج الطبقة — يزيل الليزر الطبقة العلوية الملونة ويكشف اللون السفلي فيخلق أنماطاً دائمة. ويستخدم التدرج على المقدمة أحبار UV مرنة عالية التمدد لمقاومة التشقق.',
      audience:
        'ممارسو اليوغا والتابعون للتأمل وعشاق الفن الشرقي وممارسو رياضة SUP الذين يقدرون الجمالية الثقافية والحرفية الراقية.',
      ai_use_cases: ['تجديف SUP لليوغا والتأمل', 'تجارب مائية ثقافية وفنية', 'تجديف ترفيهي على البحيرات والأنهار'],
      ai_comparison:
        'بالمقارنة مع ألواح SUP المطبوعة العادية، يستخدم Flowing Lotus تقنية النقش بالليزر التي تحفر الأنماط بشكل دائم في مادة EVA — فلا يمكن للرسم أن يتآكل أو يبهت لأنه جزء بنيوي من الحصيرة.',
      ai_faq: [
        {
          q: 'كيف يعمل النقش بالليزر؟',
          a: 'تُنقش حصيرة EVA المركبة مزدوجة الطبقة (قاعدة بلون أزرق بترولي وسطح أخضر نعناعي) بالليزر — يزيل الليزر الطبقة العلوية ويكشف اللون السفلي ويخلق أنماطاً دائمة بملمس 3D.',
        },
        {
          q: 'لماذا يناسب هذا اللوح اليوغا؟',
          a: 'توفر الأنماط المنقوشة بالليزر ثباتاً ممتازاً دون خشونة، بينما يخلق التصميم التدرجي جمالية مهدئة مثالية للتأمل واليوغا على الماء.',
        },
      ],
    },
    'sup-jungle-mandala': {
      definition:
        'لوح SUP نفخ متعدد الاستخدامات بطول 11 قدماً برسم ماندالا استوائي، منفذ بـEVA منقوش بالليزر مزدوج الطبقة وهندسة غير قابلة للتشوه وطباعة حريرية متواصلة على الحواف الجانبية.',
      problem:
        'يريد ممارسو رياضة SUP فناً هندسياً معقداً يبقى متماثل التشكيل تماماً وخالياً من التشوه حتى عند النفخ بضغط عالٍ، دون انزياح في الأنماط أثناء التصنيع.',
      howItWorks:
        'يعتمد Jungle Mandala على قلب PVC بتقنية drop-stitch عند ضغط 15 PSI. خطوط هندسة الماندالا مكثفة بنيوياً لتعويض انبعاجات سطح PVC. وتستخدم حصيرة EVA نقشاً ليزرياً مزدوج الطبقة. بينما تستخدم رسومات الحواف نمطاً منتشراً غير جامد يمتص تفاوتات التمدد عند التجميع اليدوي.',
      audience:
        'ممارسو رياضة SUP الروحانيون والفنيون ومحبو المغامرات الاستوائية وممارسو اليوغا وكل من تجذبه الجمالية الهندسية وجمال الماندالا.',
      ai_use_cases: ['تجديف روحاني وتأملي', 'مغامرات ساحلية استوائية', 'إنتاج محتوى لوسائل التواصل الاجتماعي'],
      ai_comparison:
        'بالمقارنة مع ألواح SUP العادية، يتميز Jungle Mandala بهندسة ماندالا غير قابلة للتشوه تبقى متماثلة تماماً عند ضغط نفخ 15 PSI، مع طباعة حريرية اقتصادية على الحواف الجانبية.',
      ai_faq: [
        {
          q: 'هل يتشوه نمط الماندالا عند النفخ؟',
          a: 'لا. كثفت الخطوط الهندسية بنيوياً لهذا الغرض تحديداً لتعويض انبعاجات سطح PVC، وتبقى متماثلة تماماً عند ضغط النفخ الكامل.',
        },
        {
          q: 'كيف طُبعت رسومات الحواف؟',
          a: 'تستخدم رسومات الطيور الطنانة والفراشات على الحواف عملية طباعة حريرية متواصلة بنمط منتشر غير جامد يمتص تفاوتات التمدد عند التجميع اليدوي.',
        },
      ],
    },
    'sup-tropical-breeze': {
      definition:
        'لوح SUP نفخ متعدد الاستخدامات بطول 11 قدماً برسم مصغر لمنظر طبيعي وكتل EVA مجردة تدمج مشهد عطلة جزيرية بسلاسة في تصميم اللوح.',
      problem:
        'يريد ممارسو رياضة SUP لوحاً يخلق تجربة غامرة كاملة — فتتحول أداة الرياضات المائية إلى لوحة فنية تنقلهم إلى فردوس استوائي.',
      howItWorks:
        'يعتمد Tropical Breeze على قلب PVC بتقنية drop-stitch عند ضغط 15 PSI بسطح عرضه 32 بوصة. تزين المقدمة رسم منظر طبيعي مصغر بطباعة رقمية. وتستخدم منطقة وقوف EVA كتلاً مجردة مقصوصة تمد الحكاية البصرية للأمواج والشاطئ والنخيل عبر اللوح كاملاً.',
      audience:
        'القاطعون إجازاتهم وعشاق نمط الحياة الاستوائي وصناع محتوى وسائل التواصل وممارسو رياضة SUP الباحثون عن لوح يجسد روح الهروب إلى الجزيرة.',
      ai_use_cases: [
        'تجديف SUP في العطلة الاستوائية',
        'محتوى لوسائل التواصل الاجتماعي',
        'رحلات ترفيهية على البحيرات والسواحل',
      ],
      ai_comparison:
        'بالمقارنة مع ألواح SUP العادية، يدمج Tropical Breeze وحده مشهداً طبيعياً كاملاً عبر سطح اللوح كله، مع تقسيم مثالي للأدوار بين الطباعة الرقمية للتفاصيل وكتل EVA للمتانة.',
      ai_faq: [
        {
          q: 'ما المشهد المصور على اللوح؟',
          a: 'فردوس جزيرة حالم بشمس مشرقة وبساتين جوز هند وشاطئ ونخيل — رسم المنظر المصغر على المقدمة يتحول نحو المؤخرة إلى كتل EVA مجردة.',
        },
        {
          q: 'كيف تنتقل الرسمة من المقدمة إلى المؤخرة؟',
          a: 'تستخدم المقدمة طباعة رقمية مفصلة للمنظر الطبيعي، بينما تعتمد المؤخرة كتل EVA مقصوصة تجرد الأمواج والرمال والنخيل — لتتشكل رحلة بصرية سلسة.',
        },
      ],
    },
  },
  pt: {
    'life-vest-classic': {
      definition:
        'Dispositivo de flutuação versátil com certificação CE para desportos aquáticos recreativos em qualquer ambiente aquático.',
      problem:
        'Praticantes de desportos aquáticos de todos os níveis precisam de um colete salva-vidas fiável e confortável que cumpra as normas internacionais de segurança sem restringir os movimentos.',
      howItWorks:
        'O Colete salva-vidas Classic usa câmaras de flutuação preenchidas com espuma com correias peitorais e laterais ajustáveis para um ajuste seguro. Disponível em vários tamanhos, inclui apito de resgate, faixas refletoras e alça de resgate.',
      audience:
        'Praticantes recreativos de stand up paddle, velejadores desportivos, pescadores desportivos e iniciantes nos desportos aquáticos que precisam de flutuação certificada CE em lagos, rios e águas costeiras.',
      ai_use_cases: [
        'Segurança em desportos aquáticos recreativos',
        'Flutuação para treino e supervisão',
        'Atividades familiares na água',
      ],
      ai_comparison:
        'Comparado com coletes salva-vidas infláveis automáticos, o Colete salva-vidas Classic fornece flutuação constante sem ativação. É mais volumoso, mas mais fiável para utilizadores recreativos que podem não fazer a manutenção dos mecanismos automáticos.',
      ai_faq: [
        {
          q: 'Este colete serve para crianças?',
          a: 'Sim, estão disponíveis tamanhos infantis. Certificação CE e USCG para as classes de peso indicadas.',
        },
        {
          q: 'Precisa de manutenção?',
          a: 'Manutenção mínima. Enxaguar com água doce após o uso. Verificar câmaras e correias antes de cada utilização. Substituir em caso de dano.',
        },
      ],
    },
    'life-vest-pro': {
      definition:
        'Colete salva-vidas de classe profissional conforme a norma SOLAS com inflação automática para aplicações ao alto-mar, de resgate e marítimas comerciais.',
      problem:
        'Marinheiros profissionais e pessoal de resgate precisam de um colete que infle automaticamente, proporcione alta flutuação e visibilidade aprovada pela SOLAS para operações offshore.',
      howItWorks:
        'O Colete salva-vidas Pro usa mecanismo hidrostático automático com tubo de insuflação bucal como reserva. Inclui faixas refletoras de classe SOLAS, capuz contra borrifos, apito de resgate, luz estanque e ponto de fixação de corda de içamento.',
      audience:
        'Marinheiros comerciais, socorristas profissionais, trabalhadores offshore e velejadores avançados que precisam de coletes salva-vidas automáticos aprovados pela SOLAS.',
      ai_use_cases: [
        'Segurança em operações marítimas offshore',
        'Resgate profissional e prontidão',
        'Conformidade com regulamentos marítimos comerciais',
      ],
      ai_comparison:
        'Comparado com coletes de espuma, o Colete salva-vidas Pro infla automaticamente e mantém volume mínimo em uso normal. Exige manutenção anual do mecanismo hidrostático e substituição da bateria.',
      ai_faq: [
        {
          q: 'Como funciona a inflação automática?',
          a: 'O ativador hidrostático dispara ao submergir a uma profundidade de 0,5-1,0 metros. O tubo de insuflação bucal também está incluído como reserva.',
        },
        {
          q: 'Com que frequência precisa de manutenção?',
          a: 'Recomenda-se manutenção anual do mecanismo hidrostático. O cilindro de CO2 deve ser verificado e substituído conforme o calendário do fabricante.',
        },
      ],
    },
    'oars-pump-set': {
      definition:
        'Kit completo de acessórios: par de remos de alumínio de 1,6 m com pás plásticas e bomba de pé de 5 litros de alto débito de ar com manómetro, para todos os barcos infláveis.',
      problem:
        'Proprietários de barcos infláveis precisam de remos suplentes ou adicionais e de uma bomba de alto débito para inflar e remar, tudo compatível com barcos infláveis padrão.',
      howItWorks:
        'Os remos têm hastes de alumínio e pás plásticas para impulsão leve. A bomba de pé entrega 5 litros de ar por curso com manómetro integrado para inflação precisa.',
      audience:
        'Proprietários de barcos infláveis e caiaques que precisam de remos suplentes ou adicionais e de um kit de bomba eficiente.',
      ai_use_cases: [
        'Remos suplentes para barcos infláveis',
        'Inflação de alto débito no lançamento à água',
        'Propulsão de reserva e acessórios de bomba',
      ],
      ai_comparison:
        'Comparada com uma bomba de ação dupla, esta bomba de pé dá mais volume por curso, mas exige mais esforço. Os remos oferecem alternativa básica de propulsão em barcos infláveis sem motor.',
      ai_faq: [
        {
          q: 'Os remos servem em todos os barcos infláveis?',
          a: 'Os remos encaixam nos toletes padrão da maioria dos barcos infláveis da nossa gama. O comprimento de 1,6 m é adequado para barcos até 4 m.',
        },
        {
          q: 'Que pressão a bomba de pé alcança?',
          a: 'A bomba de pé alcança 12-15 PSI, o que cobre a maioria dos barcos infláveis e pontões. Pode não ser suficiente para pranchas SUP de alta pressão, que exigem 18+ PSI.',
        },
      ],
    },
    'sup-explorer-11': {
      definition:
        'Prancha SUP inflável versátil de 11 pés, construída para estabilidade, portabilidade e uso recreativo em lagos, rios e águas costeiras protegidas.',
      problem:
        'Iniciantes de stand up paddle e utilizadores recreativos precisam de uma prancha SUP estável e portátil, fácil de inflar, fácil de equilibrar e tolerante a erros de aprendizagem.',
      howItWorks:
        "O SUP Explorer 11' usa tecnologia de núcleo drop-stitch com rigidez de 15 PSI e superfície larga de 32 polegadas para estabilidade lateral. A prancha inclui barbatana central amovível, corda de segurança e bomba de ação dupla para inflação rápida à beira-da-água.",
      audience:
        'Iniciantes de stand up paddle, utilizadores recreativos, famílias e praticantes de treino que procuram uma prancha SUP portátil e estável para lagos, rios e águas costeiras protegidas.',
      ai_use_cases: [
        'Fitness SUP e aulas para iniciantes',
        'Stand up paddle recreativo em lagos e rios',
        'Treino e ioga na água',
      ],
      ai_comparison:
        "Comparado com pranchas rígidas de epóxi, o SUP Explorer 11' oferece melhor portabilidade e armazenamento mais fácil com a rigidez da estrutura drop-stitch. É mais pesado do que uma prancha rígida, mas cabe numa mochila de viagem.",
      ai_faq: [
        {
          q: 'Qual é a pressão ideal?',
          a: 'A pressão recomendada é de 12-15 PSI. A prancha atinge o melhor desempenho aos 15 PSI para rigidez máxima.',
        },
        {
          q: 'O remo está incluído?',
          a: 'Sim, um remo SUP de alumínio ajustável está incluído no kit completo.',
        },
      ],
    },
    'sup-cheetah-surge': {
      definition:
        'Prancha SUP inflável versátil de 11 pés com ousado padrão de leopardo, executada com blocos EVA multicoloridos e impressão digital UV, construída para stand up paddle recreativo em lagos, rios e águas costeiras protegidas.',
      problem:
        'Praticantes de stand up paddle que querem uma prancha visualmente marcante precisam de grafismo premium que não desbote, não descasque e não risque na água salgada nem com exposição UV. Os métodos de impressão tradicionais não resistem a isso.',
      howItWorks:
        'A Cheetah Surge Edition usa tecnologia de núcleo PVC drop-stitch que atinge rigidez de 15 PSI com superfície larga de 32 polegadas. O grafismo na zona de prática é executado com blocos EVA multicoloridos — folhas de EVA em cores diferentes são cortadas com precisão e unidas sem emendas como peças de puzzle em vez de impressão, garantindo ausência de desbotamento e descasque.',
      audience:
        'Praticantes de stand up paddle adeptos da moda, amantes do exterior, viajantes boutique e criadores de conteúdo para redes sociais que querem uma prancha SUP impactante e durável.',
      ai_use_cases: [
        'Conteúdo para redes sociais na água',
        'Stand up paddle recreativo em lagos e rios',
        'Viagens boutique e turismo de aventura',
      ],
      ai_comparison:
        'Comparada com pranchas SUP impressas comuns, a Cheetah Surge Edition usa a técnica de blocos EVA recortados que nunca desbota nem descasca. O grafismo é parte estrutural do material EVA em vez de impressão superficial.',
      ai_faq: [
        {
          q: 'Como foi feito o grafismo?',
          a: 'O grafismo usa blocos EVA multicoloridos — folhas de espuma EVA em cores diferentes são cortadas com precisão e unidas sem emendas como peças de puzzle. Não há tinta de impressão na superfície de prática.',
        },
        {
          q: 'O grafismo desbota na água salgada?',
          a: 'Não. Como as cores estão incorporadas no material EVA em vez de numa camada superficial de tinta, o grafismo nunca desbota, não descasca nem risca na água salgada, com UV ou sob o peso dos pés.',
        },
      ],
    },
    'sup-leviathan-wake': {
      definition:
        'Prancha SUP inflável versátil de 11 pés com imersivo motivo de baleia em impressão digital UV e tapete EVA gravado mecanicamente com relevo.',
      problem:
        'Praticantes de stand up paddle que procuram pranchas artísticas precisam de grafismo que se mantenha vivo sob inflação de alta pressão e enrolamento repetido para armazenamento. As tintas padrão fissuram e descascam.',
      howItWorks:
        'A Leviathan Wake usa núcleo PVC drop-stitch a 15 PSI com superfície de 32 polegadas de largura. O motivo na proa é impresso com impressão digital UV de alta qualidade, e o logótipo no fundo é serigrafado com tintas PVC altamente elásticas. O tapete EVA é gravado mecanicamente em padrões de ondas permanentes.',
      audience:
        'Amantes dos oceanos e da vida marinha, praticantes artísticos de stand up paddle e todos os que querem uma prancha SUP visualmente impactante com grafismo premium durável.',
      ai_use_cases: [
        'Aventuras marítimas com tema oceânico',
        'Stand up paddle recreativo em lagos e costas',
        'Stand up paddle artístico e de estilo de vida',
      ],
      ai_comparison:
        'Comparada com pranchas SUP comuns, a Leviathan Wake tem o motivo totémico de baleia com duas técnicas de impressão otimizadas para durabilidade. O tapete EVA gravado mecanicamente dura mais do que tapetes impressos.',
      ai_faq: [
        {
          q: 'O logótipo do fundo é durável?',
          a: 'Sim. O logótipo do fundo é serigrafado com tintas PVC altamente elásticas, avaliadas para inflação a 15 PSI e enrolamento repetido.',
        },
        {
          q: 'O que há de especial no tapete EVA?',
          a: 'Os padrões de ondas são gravados mecanicamente em espuma composta EVA de dupla camada, garantindo profundidade uniforme, dreno excelente e aderência durável.',
        },
      ],
    },
    'sup-medusa-glow': {
      definition:
        'Prancha SUP inflável versátil de 11 pés com motivo de águas-vivas e recife de coral, executada com blocos EVA multicoloridos e soluções construtivas que evitam delaminação.',
      problem:
        'Praticantes de stand up paddle apaixonados por arte inspirada no oceano precisam de uma prancha com grafismo premium que resista a ambientes marítimos severos sem desbotamento, descasque ou delaminação nos pontos de fixação.',
      howItWorks:
        'A Medusa Glow usa núcleo PVC drop-stitch a 15 PSI com superfície de 32 polegadas de largura. O motivo na proa é impresso digitalmente em UV, e o tapete EVA usa blocos multicoloridos para estrelas-do-mar e conchas que não desbotam. As zonas de argolas D são mascaradas para colagem PVC-a-PVC que evita a delaminação.',
      audience:
        'Praticantes de stand up paddle, apreciadoras de estilo de vida, viajantes boutique e todos os que querem uma estética calmante inspirada no oceano na água.',
      ai_use_cases: [
        'Ioga e fitness em prancha SUP',
        'Conteúdo para redes sociais',
        'Aventuras tropicais e costeiras de stand up paddle',
      ],
      ai_comparison:
        'Comparada com pranchas SUP impressas comuns, a Medusa Glow usa blocos EVA para os grafismos da zona de prática — as cores estão estruturalmente incorporadas no material EVA, não impressas, por isso nunca desbotam.',
      ai_faq: [
        {
          q: 'Qual é a paleta de cores?',
          a: 'Base refrescante em verde menta com tapete EVA turquesa profundo com blocos brancos recortados em forma de estrelas-do-mar e conchas e acentos corais vibrantes.',
        },
        {
          q: 'Como está fixada a alça?',
          a: 'A alça de neopreno no centro está ancorada através do tapete EVA diretamente na base PVC do casco, de modo que o casco rígido suporta as cargas de içamento.',
        },
      ],
    },
    'sup-ocean-pulse': {
      definition:
        'Prancha SUP inflável versátil de 11 pés com padrão topográfico de ondas em impressão digital UV e tapete EVA gravado mecanicamente, com acessórios coordenados por cor.',
      problem:
        'Praticantes de stand up paddle com estilo querem uma experiência visual completa — não só uma prancha bonita, mas também acessórios coordenados que mantêm a estética do armazenamento à água.',
      howItWorks:
        'A Ocean Pulse usa núcleo PVC drop-stitch a 15 PSI. Os contornos de ondas são aplicados com impressão UV de alta qualidade. O tapete EVA é gravado mecanicamente em estruturas de ondas. Todos os acessórios — mochila, bomba, corda de segurança — recebem correspondência de cores unificada coerente com o design da prancha.',
      audience:
        'Praticantes de stand up paddle, apreciadores de estilo de vida modernos, campistas boutique e praticantes que valorizam a estética coordenada de todo o equipamento.',
      ai_use_cases: [
        'Stand up paddle para Instagram e redes sociais',
        'Viagens boutique e acampamento',
        'Stand up paddle recreativo em lagos e costas',
      ],
      ai_comparison:
        'Comparada com pranchas SUP comuns, a Ocean Pulse oferece identidade visual coordenada completa da prancha e de todos os acessórios, com EVA gravado mecanicamente mais durável do que tapetes impressos.',
      ai_faq: [
        {
          q: 'Que acessórios são coordenados por cor?',
          a: 'Mochila de viagem com rodas, bomba de ação dupla de alta pressão, corda de segurança e bolsa estanque para telemóvel — todos recebem correspondência de cores unificada e identidade de marca.',
        },
        {
          q: 'Como é criado o padrão no tapete EVA?',
          a: 'Os padrões de ondas são formados por gravação mecânica de alta qualidade em espuma composta EVA de dupla camada, garantindo profundidade uniforme e dreno excelente.',
        },
      ],
    },
    'sup-ocean-voyager': {
      definition:
        'Prancha SUP inflável versátil de 11 pés com padrão geométrico de tartaruga-marinha, executada com blocos EVA multicoloridos e impressão digital UV, com identidade visual coerente nos acessórios.',
      problem:
        'Praticantes de stand up paddle preocupados com o oceano querem uma prancha que celebre a vida marinha com grafismo premium que se mantenha vivo durante anos sem desbotar nem descascar na água salgada.',
      howItWorks:
        'A Ocean Voyager usa núcleo PVC drop-stitch a 15 PSI com superfície de 32 polegadas de largura. A ilustração geométrica da tartaruga na proa usa impressão digital UV, e o tapete EVA aplica blocos multicoloridos para a silhueta da tartaruga e formas coralinas. Todos os acessórios são coordenados por cor.',
      audience:
        'Amantes dos oceanos, fãs de tartarugas-marinhas, praticantes modernos de stand up paddle e viajantes boutique que procuram um kit premium com estilo de vida coordenado.',
      ai_use_cases: [
        'Stand up paddle com tema de proteção dos mares',
        'Conteúdo para redes sociais',
        'Viagens mais longas e turismo de descoberta',
      ],
      ai_comparison:
        'Comparada com pranchas SUP impressas comuns, a Ocean Voyager usa blocos EVA multicoloridos que nunca se riscam, não descascam nem desbotam. A precisão de corte garante superfícies totalmente planas sob os pés.',
      ai_faq: [
        {
          q: 'De onde vem o nome?',
          a: 'A tartaruga-marinha é a maior viajante dos oceanos da natureza, percorrendo milhares de quilómetros com grácil esforço. A Ocean Voyager captura o espírito de exploração a longo prazo e de harmonia com a vida marinha.',
        },
        {
          q: 'O grafismo desbota?',
          a: 'Não. Os grafismos no tapete EVA usam blocos multicoloridos — as cores estão incorporadas no material EVA, não impressas. Os grafismos nunca se riscam, não descascam nem desbotam, mesmo com uso intensivo.',
        },
      ],
    },
    'sup-dolphin-wave': {
      definition:
        'Prancha SUP inflável versátil de 11 pés com arte de golfinhos numa cena marítima, executada com blocos EVA coloridos cortados com tecnologia CNC e serigrafia contínua de ondas nas laterais.',
      problem:
        'Os amantes de arte em pranchas SUP precisam de grafismos que resistam à inflação de alta pressão (15 PSI) e ao armazenamento enrolado compacto sem fissuras, vincos ou desbotamento das cores.',
      howItWorks:
        'A Dolphin Wave baseia-se num núcleo de PVC com tecnologia drop-stitch a uma pressão de 15 PSI. A zona de prática usa blocos EVA coloridos cortados com CNC, onde as cores fazem parte do próprio material. A tira lateral usa serigrafia contínua para estender o padrão de ondas pelas laterais da prancha. As tintas UV têm elasticidade de 150% para resistir a fissuras.',
      audience:
        'Apaixonados pela vida marinha e praticantes de SUP que valorizam arte detalhada e todos os que querem uma prancha com coerência visual contínua a 360 graus.',
      ai_use_cases: [
        'Remo de SUP com arte de vida marinha',
        'Remo recreativo em lagos e costas',
        'Conteúdo de estilo de vida e redes sociais',
      ],
      ai_comparison:
        'Comparada com pranchas SUP impressas comuns, a Dolphin Wave usa uma composição física de blocos EVA coloridos na zona de prática e ondas serigrafadas nas laterais para uma coerência visual contínua a 360 graus, com tinta UV flexível de elasticidade de 150% que evita fissuras.',
      ai_faq: [
        {
          q: 'Que cores são usadas?',
          a: 'Medieval Blue para as ondas profundas e Serenity para os tons calmos, com detalhes de espuma branca. A paleta segue os padrões PANTONE TPG para garantir precisão de fabrico.',
        },
        {
          q: 'Como foram impressas as ondas nas laterais?',
          a: 'A tira lateral usa um processo de serigrafia contínua em PVC verde menta de dupla camada de alta durabilidade, estendendo o padrão de ondas de forma económica pelas laterais da prancha.',
        },
      ],
    },
    'sup-flowing-lotus': {
      definition:
        'Prancha SUP inflável versátil de 11 pés com estética de pintura tradicional oriental a pincel, executada com tapete EVA gravado a laser de dupla camada e gráfico em degradê com impressão digital UV.',
      problem:
        'Praticantes de SUP que procuram expressão artística e cultural na água precisam de arte refinada que suporte a utilização intensiva em pé e a água salgada sem desgaste ou desbotamento.',
      howItWorks:
        'A Flowing Lotus baseia-se num núcleo de PVC com tecnologia drop-stitch a uma pressão de 15 PSI. O tapete EVA usa gravação a laser de dupla camada — o laser remove a camada superior colorida e revela a cor inferior, criando padrões permanentes. O degradê no bico usa tintas UV flexíveis de alta elasticidade para resistir a fissuras.',
      audience:
        'Praticantes de ioga e meditação, apreciadores de arte oriental e praticantes de SUP que valorizam a estética cultural e o artesanto refinado.',
      ai_use_cases: [
        'Remo de SUP para ioga e meditação',
        'Experiências aquáticas culturais e artísticas',
        'Remo recreativo em lagos e rios',
      ],
      ai_comparison:
        'Comparada com pranchas SUP impressas comuns, a Flowing Lotus usa a técnica de gravação a laser que grava padrões permanentemente no material EVA — a arte não se desgasta nem desbota porque é parte estrutural do tapete.',
      ai_faq: [
        {
          q: 'Como funciona a gravação a laser?',
          a: 'O tapete EVA composto de dupla camada (base em azul petróleo e superfície verde menta) é gravado a laser — o laser remove a camada superior e revela a cor inferior, criando padrões permanentes com textura 3D.',
        },
        {
          q: 'Porque é que esta prancha serve para ioga?',
          a: 'Os padrões gravados a laser oferecem aderência excelente sem aspereza, enquanto o design em degradê cria uma estética calmante ideal para meditação e ioga na água.',
        },
      ],
    },
    'sup-jungle-mandala': {
      definition:
        'Prancha SUP inflável versátil de 11 pés com arte de mandala tropical, executada com EVA gravado a laser de dupla camada, geometria à prova de distorção e serigrafia contínua nas laterais.',
      problem:
        'Praticantes de SUP querem arte geométrica intrincada que se mantenha perfeitamente simétrica e livre de distorção mesmo sob inflação de alta pressão, sem deslocamento de padrões durante a fabricação.',
      howItWorks:
        'A Jungle Mandala baseia-se num núcleo de PVC com tecnologia drop-stitch a uma pressão de 15 PSI. As linhas da geometria da mandala são densificadas estruturalmente para compensar as ondulações da superfície de PVC. O tapete EVA usa gravação a laser de dupla camada. Os gráficos laterais usam um padrão difuso não rígido que absorve as variações de elasticidade na montagem manual.',
      audience:
        'Praticantes de SUP espirituais e artísticos, amantes de aventuras tropicais e praticantes de ioga, e todos os que se sentem atraídos pela estética geométrica e pela beleza da mandala.',
      ai_use_cases: [
        'Remo espiritual e meditativo',
        'Aventuras costeiras tropicais',
        'Produção de conteúdo para redes sociais',
      ],
      ai_comparison:
        'Comparada com pranchas SUP comuns, a Jungle Mandala destaca-se pela geometria de mandala à prova de distorção que se mantém perfeitamente simétrica à pressão de inflação de 15 PSI, com serigrafia económica nas laterais.',
      ai_faq: [
        {
          q: 'O padrão da mandala distorce com a inflação?',
          a: 'Não. As linhas geométricas foram densificadas estruturalmente precisamente para compensar as ondulações da superfície de PVC e mantêm-se perfeitamente simétricas à pressão de inflação total.',
        },
        {
          q: 'Como foram impressos os gráficos laterais?',
          a: 'Os colibris e borboletas nas laterais usam um processo de serigrafia contínua com padrão difuso não rígido que absorve as variações de elasticidade na montagem manual.',
        },
      ],
    },
    'sup-tropical-breeze': {
      definition:
        'Prancha SUP inflável versátil de 11 pés com miniatura paisagística e blocos EVA abstratos que integram uma cena de férias insulares na prancha com fluidez.',
      problem:
        'Praticantes de SUP querem uma prancha que crie uma experiência imersiva completa — a ferramenta aquática transforma-se numa tela artística que os transporta a um paraíso tropical.',
      howItWorks:
        'A Tropical Breeze baseia-se num núcleo de PVC com tecnologia drop-stitch a uma pressão de 15 PSI com uma superfície de 32 polegadas de largura. O bico é adornado com uma miniatura paisagística impressa digitalmente. A zona de prática em EVA usa blocos abstratos recortados que prolongam a narrativa visual das ondas, da praia e das palmeiras pela prancha inteira.',
      audience:
        'Turistas de férias, apreciadores do estilo de vida tropical, criadores de conteúdo para redes sociais e praticantes de SUP que procuram uma prancha que incorpore o espírito de fuga para a ilha.',
      ai_use_cases: [
        'Remo de SUP em férias tropicais',
        'Conteúdo para redes sociais',
        'Passeios recreativos em lagos e costas',
      ],
      ai_comparison:
        'Comparada com pranchas SUP comuns, a Tropical Breeze integra sozinha uma cena paisagística completa pela prancha toda, com uma divisão ideal de papéis entre a impressão digital para detalhes e os blocos EVA para durabilidade.',
      ai_faq: [
        {
          q: 'Que cena está retratada na prancha?',
          a: 'Um paraíso insular idílico com sol radiante, palmeirais de coco, praia e palmeiras — a miniatura paisagística no bico transforma-se em direção à popa em blocos EVA abstratos.',
        },
        {
          q: 'Como passa o gráfico do bico para a popa?',
          a: 'O bico usa impressão digital detalhada da paisagem, enquanto a popa adota blocos EVA recortados que abstraem as ondas, a areia e as palmeiras — formando uma jornada visual fluida.',
        },
      ],
    },
  },
  ja: {
    'life-vest-classic': {
      definition: 'あらゆる水域でのレジャーマリンスポーツ向けにCE認証を取得した、汎用性の高い浮遊補助具です。',
      problem:
        'あらゆるレベルのマリンスポーツ愛好家は、動きを制限することなく国際安全規格に適合した、信頼できて快適なライフジャケットを必要としています。',
      howItWorks:
        'ライフジャケット Classicは、フォーム充填の浮力チャンバーと、確実なフィット感のための調整可能なチェストストラップ・サイドストラップを採用しています。複数のサイズ展開で、救助用ホイッスル、反射テープ、救助用ハンドルを装備しています。',
      audience:
        'SUP愛好家、スポーツセーラー、スポーツフィッシャーマン、そして湖・川・沿岸水域でCE認証の浮力を必要とする水上スポーツ入門者向けです。',
      ai_use_cases: ['レジャーマリンスポーツの安全', 'トレーニングと監視のための浮力', '家族での水上アクティビティ'],
      ai_comparison:
        '自動膨張式ライフジャケットと比較すると、ライフジャケット Classicは作動なしで一定の浮力を提供します。かさばりますが、自動機構のメンテナンスを行わない可能性があるレジャー利用者にはより信頼性が高くなります。',
      ai_faq: [
        {
          q: 'このライフジャケットは子供に適していますか？',
          a: 'はい、子供用サイズもご用意しています。表示された体重クラスに対してCEおよびUSCG認証を取得しています。',
        },
        {
          q: 'メンテナンスは必要ですか？',
          a: '最小限のメンテナンスで済みます。使用後は真水で洗い流してください。毎回使用前にチャンバーとストラップを点検し、損傷した場合は交換してください。',
        },
      ],
    },
    'life-vest-pro': {
      definition:
        'SOLAS規格に準拠したプロフェッショナルクラスのライフジャケット。オフショア・救助・商用海洋用途向けに自動膨張式を採用しています。',
      problem:
        'プロフェッショナル船員と救助要員は、自動的に膨張し、高い浮力とSOLAS承認の視認性をオフショア運用に提供するライフジャケットを必要としています。',
      howItWorks:
        'ライフジャケット Proは、自動静水圧作動機構と、バックアップの口吹きインフレーションチューブを備えています。SOLASクラスの反射テープ、スプレーフード、救助用ホイッスル、防水ライト、持ち上げロープの取り付けポイントを含みます。',
      audience:
        '商用船員、プロの救助要員、オフショア作業員、そしてSOLAS承認の自動膨張式ライフジャケットを必要とする上級セーラー向けです。',
      ai_use_cases: ['オフショア海洋運用の安全', 'プロフェッショナル救助と待機', '商用海洋規制への準拠'],
      ai_comparison:
        'フォームライフジャケットと比較すると、ライフジャケット Proは自動的に膨張し、通常使用時の体積を最小限に抑えます。静水圧機構の年次メンテナンスとバッテリー交換が必要です。',
      ai_faq: [
        {
          q: '自動膨張はどのように機能しますか？',
          a: '静水圧作動式は、0.5〜1.0mの水深に没すると作動します。バックアップとして口吹きインフレーションチューブも付属しています。',
        },
        {
          q: 'どのくらいの頻度でメンテナンスが必要ですか？',
          a: '静水圧機構は年次メンテナンスを推奨します。CO2ボンベはメーカーのスケジュールに従って点検・交換してください。',
        },
      ],
    },
    'oars-pump-set': {
      definition:
        'フルアクセサリーキット：プラスチックブレード付き1.6mアルミオールのペアと、圧力計付き大容量5リットルフットポンプ。すべてのインフレータブルボートに対応します。',
      problem:
        'インフレータブルボートのオーナーは、膨張とパドリングのための、予備または追加のオールと大容量ポンプを、すべて標準のインフレータブルボートと互換性のある形で必要としています。',
      howItWorks:
        'オールは軽い推進力を生み出すアルミシャフトとプラスチックブレードを採用しています。フットポンプは毎ストローク5リットルの空気を送り出し、統合圧力計により正確な空気注入が可能です。',
      audience:
        '予備・追加のオールと効率的なポンプキットを必要とする、インフレータブルボートおよびカヤックのオーナー向けです。',
      ai_use_cases: [
        'インフレータブルボート用の予備オール',
        '進水時の大容量膨張',
        'バックアップ推進とポンプアクセサリー',
      ],
      ai_comparison:
        'ダブルアクションポンプと比較すると、このフットポンプは毎ストロークの空気量が多いものの、より多くの労力を必要とします。オールは、エンジンのないインフレータブルボートのための基本的な推進手段を提供します。',
      ai_faq: [
        {
          q: 'オールはすべてのインフレータブルボートに対応しますか？',
          a: 'オールは当社ラインナップのほとんどのインフレータブルボートの標準オールロックに適合します。1.6mの長さは4mまでのボートに適しています。',
        },
        {
          q: 'フットポンプはどの圧力に到達しますか？',
          a: 'フットポンプは12〜15 PSIに到達し、ほとんどのインフレータブルボートとポンツーンをカバーします。18 PSI以上を必要とする高圧SUPボードには十分でない場合があります。',
        },
      ],
    },
    'sup-explorer-11': {
      definition:
        '11フィートの汎用インフレータブルSUPボード。安定性、携帯性、そして湖・川・保護された沿岸水域でのレジャー利用のために構築されています。',
      problem:
        'SUP入門者やレジャーユーザーは、膨らませやすく、バランスを取りやすく、学習の誤差に寛容な、安定した携帯性の高いSUPボードを必要としています。',
      howItWorks:
        "SUP Explorer 11'は、15 PSIの剛性を実現するドロップステッチコア技術と、左右の安定性のための32インチのワイドサーフェスを採用しています。着脱式センターフィン、安全ロープ（リーシュコード）、水辺での素早い膨張のためのダブルアクションポンプを装備しています。",
      audience:
        'SUP入門者、レジャーユーザー、家族、そして湖・川・保護された沿岸水域向けの携帯性と安定性の高いSUPボードを求めるトレーニング実践者向けです。',
      ai_use_cases: ['SUPフィットネスと入門レッスン', '湖や川でのレジャーSUP', '水上でのトレーニングとヨガ'],
      ai_comparison:
        "エポキシ製ハードボードと比較すると、SUP Explorer 11'はドロップステッチ構造の剛性を保ちながら、優れた携帯性と簡単な保管を実現します。ハードボードより重いですが、トラベルバックパックに収まります。",
      ai_faq: [
        {
          q: '理想的な圧力はどのくらいですか？',
          a: '推奨圧力は12〜15 PSIです。最大の剛性を得るには15 PSIが最適です。',
        },
        {
          q: 'パドルは付属していますか？',
          a: 'はい、調整可能なアルミSUPパドルがフルキットに含まれています。',
        },
      ],
    },
    'sup-cheetah-surge': {
      definition:
        '11フィートの汎用インフレータブルSUPボード。大胆なヒョウ柄のパターンをマルチカラーブロックEVAとUVデジタル印刷で表現し、湖・川・保護された沿岸水域でのレジャーSUPのために構築されています。',
      problem:
        '視覚的に印象的なボードを求めるSUP愛好家は、海水や紫外線曝露でも色あせ・剥がれ・傷が起こらないプレミアムグラフィックを必要としています。従来の印刷方法ではこれに耐えられません。',
      howItWorks:
        'Cheetah Surge Editionは、15 PSIの剛性を実現するPVCドロップステッチコア技術と、32インチのワイドサーフェスを採用しています。スタンディングエリアのグラフィックはマルチカラーブロックEVAで制作。異なる色のEVAシートを精密にカットし、印刷ではなくパズルピースのように継ぎ目なく組み合わせることで、色あせや剥がれを防ぎます。',
      audience:
        'ファッション志向のSUP愛好家、アウトドア好き、ブティックトラベラー、そして印象的で耐久性の高いSUPボードを求めるSNSコンテンツクリエイター向けです。',
      ai_use_cases: ['水上でのSNSコンテンツ', '湖や川でのレジャーSUP', 'ブティック旅行とアドベンチャーツーリズム'],
      ai_comparison:
        '一般的な印刷SUPボードと比較すると、Cheetah Surge Editionは色あせや剥がれが一切起こらないカットブロックEVA技術を使用しています。グラフィックは表面の印刷ではなく、EVA素材の構造の一部です。',
      ai_faq: [
        {
          q: 'グラフィックはどのように制作されましたか？',
          a: 'グラフィックはマルチカラーブロックEVAを使用。異なる色のEVAフォームシートを精密にカットし、パズルピースのように継ぎ目なく組み合わせています。スタンディングサーフェスには印刷インクが使用されていません。',
        },
        {
          q: 'グラフィックは海水で色あせしますか？',
          a: 'いいえ。色は表面のインク層ではなくEVA素材に組み込まれているため、グラフィックは海水・紫外線・足の荷重でも色あせせず、剥がれも傷も発生しません。',
        },
      ],
    },
    'sup-leviathan-wake': {
      definition:
        '11フィートの汎用インフレータブルSUPボード。没入感のあるクジラモチーフをUVデジタル印刷で表現し、エンボス加工のメカニカルエングレーブEVAデッキパッドを備えています。',
      problem:
        'アーティスティックなボードを求めるSUP愛好家は、高圧膨張や保管のための繰り返しのロールアップでも鮮やかさを保つグラフィックを必要としています。標準的なインクはひび割れや剥がれが発生します。',
      howItWorks:
        'Leviathan Wakeは、15 PSIのPVCドロップステッチコアと32インチ幅のサーフェスを採用しています。バウのモチーフは高品質UVデジタル印刷で施され、底部のロゴは高伸縮性PVCインクでシルクスクリーン印刷されています。EVAデッキパッドは永続的な波パターンに機械的にエングレーブされています。',
      audience:
        '海洋や海洋生物の愛好家、アーティスティックなSUP実践者、そして耐久性の高いプレミアムグラフィックを持つ視覚的に印象的なSUPボードを求めるすべての方に適しています。',
      ai_use_cases: [
        '海洋生物テーマのマリンアドベンチャー',
        '湖や沿岸でのレジャーSUP',
        'アーティスティックでライフスタイル向けのSUP',
      ],
      ai_comparison:
        '一般的なSUPボードと比較すると、Leviathan Wakeは耐久性を考慮した二種類の印刷技術でトーテミックなクジラモチーフを表現しています。メカニカルエングレーブEVAデッキパッドは印刷デッキパッドよりも長持ちします。',
      ai_faq: [
        {
          q: '底部のロゴは耐久性がありますか？',
          a: 'はい。底部のロゴは高伸縮性PVCインクでシルクスクリーン印刷されており、15 PSIへの膨張と繰り返しのロールアップに対して評価されています。',
        },
        {
          q: 'EVAデッキパッドの特別な点は何ですか？',
          a: '波のパターンは二層複合EVAフォームに機械的にエングレーブされており、均一な深さ、優れた排水性、耐久性のあるグリップを保証します。',
        },
      ],
    },
    'sup-medusa-glow': {
      definition:
        '11フィートの汎用インフレータブルSUPボード。クラゲとサンゴ礁のモチーフをマルチカラーブロックEVAで表現し、デラミネーションを防ぐ構造上の工夫を施しています。',
      problem:
        '海洋インスピレーションのアートを愛するSUP愛好家は、過酷な海洋環境でも取り付けポイントの色あせ・剥がれ・デラミネーションなしで耐えるプレミアムグラフィックを持つボードを必要としています。',
      howItWorks:
        'Medusa Glowは、15 PSIのPVCドロップステッチコアと32インチ幅のサーフェスを採用しています。バウのモチーフはUVデジタル印刷で施され、EVAデッキパッドは色あせしないヒトデや貝殻をマルチカラーブロックで表現しています。Dリング部は、PVC同士の接着によるデラミネーション防止のためマスキングされています。',
      audience:
        'SUP愛好家、ライフスタイル志向の方、ブティックトラベラー、そして水上で穏やかな海洋インスピレーションの美学を求めるすべての方に適しています。',
      ai_use_cases: ['SUPボードでのヨガとフィットネス', 'SNSコンテンツ', 'トロピカルおよび沿岸のSUPアドベンチャー'],
      ai_comparison:
        '一般的な印刷SUPボードと比較すると、Medusa GlowはスタンディングエリアのグラフィックにブロックEVAを使用しています。色はEVA素材の構造に組み込まれており、印刷ではないため色あせしません。',
      ai_faq: [
        {
          q: 'カラーパレットはどのような構成ですか？',
          a: '爽やかなミントグリーンのベースに、ディープターコイズのEVAデッキパッド、ヒトデや貝殻の形にカットされた白いブロック、鮮やかなコーラルのアクセントを組み合わせています。',
        },
        {
          q: 'ハンドルはどのように固定されていますか？',
          a: '中央のネオプレンハンドルは、EVAデッキパッドを貫通して船体のPVCベースに直接アンカーされており、堅固な船体が持ち上げ荷重を支えます。',
        },
      ],
    },
    'sup-ocean-pulse': {
      definition:
        '11フィートの汎用インフレータブルSUPボード。波のトポグラフィックパターンをUVデジタル印刷とメカニカルエングレーブEVAデッキパッドで表現し、カラーで統一されたアクセサリーを備えています。',
      problem:
        'スタイルを重視するSUP愛好家は、美しいボードだけでなく、保管から水上まで美学を保つ統一されたアクセサリーも含む、完全なビジュアル体験を求めています。',
      howItWorks:
        'Ocean Pulseは、15 PSIのPVCドロップステッチコアを採用しています。波の輪郭は高品質UV印刷で施され、EVAデッキパッドは波の構造に機械的にエングレーブされています。すべてのアクセサリー（バックパック、ポンプ、安全ロープ）はボードのデザインに合わせて統一されたカラー仕上げです。',
      audience:
        'SUP愛好家、現代的なライフスタイル志向の方、ブティックキャンパー、そして機材全体の統一された美学を重視する実践者向けです。',
      ai_use_cases: ['InstagramやSNS向けのSUP', 'ブティック旅行とキャンプ', '湖や沿岸でのレジャーSUP'],
      ai_comparison:
        '一般的なSUPボードと比較すると、Ocean Pulseはボードとすべてのアクセサリーに完全に統一されたビジュアルアイデンティティを提供し、印刷デッキパッドよりも耐久性の高いメカニカルエングレーブEVAを採用しています。',
      ai_faq: [
        {
          q: 'どのアクセサリーがカラー統一されていますか？',
          a: 'キャスター付きトラベルバックパック、高圧ダブルアクションポンプ、安全ロープ（リーシュコード）、スマートフォン用防水ポーチ。いずれも統一されたカラーマッチングとブランドアイデンティティを備えています。',
        },
        {
          q: 'EVAデッキパッドのパターンはどのように作られますか？',
          a: '波のパターンは、二層複合EVAフォームへの高品質なメカニカルエングレーブ加工で形成され、均一な深さと優れた排水性を保証します。',
        },
      ],
    },
    'sup-ocean-voyager': {
      definition:
        '11フィートの汎用インフレータブルSUPボード。ウミガメの幾何学パターンをマルチカラーブロックEVAとUVデジタル印刷で表現し、アクセサリーにも一貫したビジュアルアイデンティティを採用しています。',
      problem:
        '海洋保護に関心のあるSUP愛好家は、海洋生物を称え、海水でも何年も色あせや剥がれなく鮮やかさを保つプレミアムグラフィックを持つボードを求めています。',
      howItWorks:
        'Ocean Voyagerは、15 PSIのPVCドロップステッチコアと32インチ幅のサーフェスを採用しています。バウの幾何学的なウミガメイラストはUVデジタル印刷で施され、EVAデッキパッドはウミガメのシルエットとサンゴの形状をマルチカラーブロックで表現しています。すべてのアクセサリーはカラーで統一されています。',
      audience:
        '海洋愛好家、ウミガメファン、現代的なSUP実践者、そして統一されたライフスタイルのプレミアムキットを求めるブティックトラベラー向けです。',
      ai_use_cases: ['海洋保護テーマのSUP', 'SNSコンテンツ', 'より長い旅とディスカバリーツーリズム'],
      ai_comparison:
        '一般的な印刷SUPボードと比較すると、Ocean Voyagerは傷・剥がれ・色あせの一切起こらないマルチカラーブロックEVAを使用しています。カット精度により、足の下で完全に平坦なサーフェスを保証します。',
      ai_faq: [
        {
          q: '名前の由来は何ですか？',
          a: 'ウミガメは自然界の海洋で最も偉大な旅人であり、優雅で無駄のない泳ぎで何千キロメートルも旅します。Ocean Voyagerは、長期的な探検の精神と海洋生物との調和を表現しています。',
        },
        {
          q: 'グラフィックは色あせしますか？',
          a: 'いいえ。EVAデッキパッドのグラフィックはマルチカラーブロックを使用。色はEVA素材に組み込まれており、印刷ではありません。過酷な使用でも、グラフィックは傷つかず、剥がれず、色あせしません。',
        },
      ],
    },
    'sup-dolphin-wave': {
      definition:
        '11フィートの汎用インフレータブルSUPボード。海洋シーンのイルカアートを、CNCカット技術によるカラーブロックEVAと、側面の波の連続シルクスクリーン印刷で表現しています。',
      problem:
        'SUPボードのアート愛好家は、高圧膨張（15 PSI）やコンパクトなロール保管でも、ひび割れ・折りじわ・色あせのないグラフィックを必要としています。',
      howItWorks:
        'Dolphin Waveは、15 PSIの圧力のドロップステッチPVCコアを基盤としています。スタンディングエリアはCNCカットされたカラーブロックEVAを使用し、色が素材そのものの一部になっています。サイドストリップは連続シルクスクリーン印刷により、波のパターンをボードの側面全体へ広げています。UVインクは150%の伸縮性を備え、ひび割れに耐えます。',
      audience:
        '海洋生物の愛好家や細部にこだわるアートを重視するSUP実践者、そして360度連続したビジュアルの一貫性を持つボードを求めるすべての方に適しています。',
      ai_use_cases: [
        '海洋生物アートSUPパドリング',
        '湖や沿岸でのレジャーパドリング',
        'ライフスタイル・SNSコンテンツ制作',
      ],
      ai_comparison:
        '一般的な印刷SUPボードと比較すると、Dolphin WaveはスタンディングエリアにカラーブロックEVAの物理的構成を、側面にシルクスクリーン印刷の波を使用し、360度連続したビジュアルの一貫性を実現しています。ひび割れを防ぐ150%の伸縮性を持つフレキシブルUVインクを採用。',
      ai_faq: [
        {
          q: 'どのような色が使用されていますか？',
          a: '深い波にはMedieval Blue、穏やかなトーンにはSerenityを使用し、白い泡のディテールを加えています。パレットはPANTONE TPG規格に従い、製造精度を保証します。',
        },
        {
          q: '側面の波はどのように印刷されましたか？',
          a: 'サイドストリップは、高耐久の二層ミントグリーンPVCへの連続シルクスクリーン印刷プロセスを使用し、波のパターンを経済的にボードの側面へ広げています。',
        },
      ],
    },
    'sup-flowing-lotus': {
      definition:
        '11フィートの汎用インフレータブルSUPボード。伝統的な東洋の筆致による絵画美学を、二層レーザーエングレーブEVAデッキパッドとUVデジタル印刷のグラデーショングラフィックで表現しています。',
      problem:
        '水上で芸術的・文化的な表現を求めるSUP実践者は、立ったままの過酷な使用や海水にも耐え、摩耗や色あせのない繊細なアートを必要としています。',
      howItWorks:
        'Flowing Lotusは、15 PSIの圧力のドロップステッチPVCコアを基盤としています。EVAデッキパッドは二層レーザーエングレーブ加工。レーザーが着色された上層を除去して下層の色を露出させることで、永続的なパターンを作り出します。バウのグラデーションは、ひび割れに耐える高伸縮性のフレキシブルUVインクを使用しています。',
      audience: 'ヨガや瞑想の実践者、東洋アートの愛好家、文化的美学と繊細な職人技を重視するSUP実践者向けです。',
      ai_use_cases: ['ヨガ・瞑想のためのSUPパドリング', '文化的・芸術的な水上体験', '湖や川でのレジャーパドリング'],
      ai_comparison:
        '一般的な印刷SUPボードと比較すると、Flowing LotusはEVA素材に永続的なパターンを刻むレーザーエングレーブ技術を使用しています。アートはデッキパッドの構造の一部であるため、摩耗せず、色あせしません。',
      ai_faq: [
        {
          q: 'レーザーエングレーブはどのように機能しますか？',
          a: '二層複合EVAデッキパッド（ペトロールブルーのベースとミントグリーンのサーフェス）にレーザーエングレーブ加工を施します。レーザーが上層を除去して下層の色を露出させることで、3Dテクスチャーを持つ永続的なパターンを作り出します。',
        },
        {
          q: 'なぜこのボードはヨガに適しているのですか？',
          a: 'レーザーエングレーブされたパターンは、ざらつきのない優れたグリップを提供し、グラデーションデザインが水上の瞑想やヨガに理想的な穏やかな美学を作り出します。',
        },
      ],
    },
    'sup-jungle-mandala': {
      definition:
        '11フィートの汎用インフレータブルSUPボード。トロピカルな曼荼羅アートを、二層レーザーエングレーブEVA、歪み防止の幾何学構成、側面の連続シルクスクリーン印刷で表現しています。',
      problem:
        'SUP実践者は、高圧膨張下でも完全な対称性を保ち、歪みのない、製造中のパターンずれもない精緻な幾何学アートを求めています。',
      howItWorks:
        'Jungle Mandalaは、15 PSIの圧力のドロップステッチPVCコアを基盤としています。曼荼羅の幾何学ラインは、PVC表面のうねりを補正するため構造的に密度を高めています。EVAデッキパッドは二層レーザーエングレーブ加工。側面グラフィックは、手作業による組み立て時の伸縮性のばらつきを吸収する非リジッドの拡散パターンを使用しています。',
      audience:
        'スピリチュアルでアーティスティックなSUP実践者、トロピカルアドベンチャーの愛好家、ヨガ実践者、そして幾何学美学と曼荼羅の美しさに惹かれるすべての方に適しています。',
      ai_use_cases: ['スピリチュアルで瞑想的なパドリング', 'トロピカルな沿岸アドベンチャー', 'SNSコンテンツ制作'],
      ai_comparison:
        '一般的なSUPボードと比較すると、Jungle Mandalaは15 PSIの膨張圧力でも完全な対称性を保つ歪み防止の曼荼羅幾何学が際立ち、側面には経済的なシルクスクリーン印刷を採用しています。',
      ai_faq: [
        {
          q: '曼荼羅のパターンは膨張で歪みますか？',
          a: 'いいえ。幾何学ラインは、PVC表面のうねりを補正するために正確に構造的に密度を高めており、フル膨張圧力でも完全な対称性を保ちます。',
        },
        {
          q: '側面のグラフィックはどのように印刷されましたか？',
          a: '側面のハチドリや蝶は、手作業による組み立て時の伸縮性のばらつきを吸収する非リジッドの拡散パターンを使用した連続シルクスクリーン印刷プロセスで施されています。',
        },
      ],
    },
    'sup-tropical-breeze': {
      definition:
        '11フィートの汎用インフレータブルSUPボード。風景のミニチュアと抽象的なブロックEVAで、島のバケーションシーンをボード全体に流れるように統合しています。',
      problem:
        'SUP実践者は、完全に没入できる体験を作り出すボートを求めています。水上の道具がアートのキャンバスへと変わり、トロピカルパラダイスへと誘います。',
      howItWorks:
        'Tropical Breezeは、15 PSIの圧力のドロップステッチPVCコアと32インチ幅のサーフェスを基盤としています。バウはデジタル印刷された風景のミニチュアで飾られ、EVAスタンディングエリアは、波・ビーチ・ヤシの木のビジュアルナラティブをボード全体に広げるカットされた抽象ブロックを使用しています。',
      audience:
        'バケーション旅行者、トロピカルライフスタイルの愛好家、SNSコンテンツクリエイター、そして島への逃避の精神を体現したボードを求めるSUP実践者向けです。',
      ai_use_cases: ['トロピカルバケーションでのSUPパドリング', 'SNSコンテンツ', '湖や沿岸でのレジャークルージング'],
      ai_comparison:
        '一般的なSUPボードと比較すると、Tropical Breezeはボード全体に完全な風景シーンを単独で統合し、ディテールにはデジタル印刷、耐久性にはブロックEVAという理想的な役割分担を実現しています。',
      ai_faq: [
        {
          q: 'ボードにはどのようなシーンが描かれていますか？',
          a: '輝く太陽、ココヤシの木立、ビーチとヤシの木のある理想の島のパラダイスです。バウの風景ミニチュアが、船尾に向かって抽象的なブロックEVAへと変化していきます。',
        },
        {
          q: 'バウから船尾へグラフィックはどのように受け継がれますか？',
          a: 'バウは風景の精緻なデジタル印刷を使用し、船尾は波・砂・ヤシの木を抽象化したカットブロックEVAを採用。流れるようなビジュアルジャーニーを形成しています。',
        },
      ],
    },
  },
};
