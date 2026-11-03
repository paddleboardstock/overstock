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
    'oars-pump-set': {
      definition:
        'Ein komplettes Zubehörset mit einem Paar 1.6 m langer Aluminiumpaddel mit Kunststoffblättern und einer Hochleistungs-Fußpumpe mit 5 Litern Fördervolumen und Manometer für alle aufblasbaren SUP Boards.',
      problem:
        'Besitzer aufblasbarer SUP Boards benötigen Ersatz- oder Zusatzpaddel sowie eine Hochleistungspumpe zum Aufpumpen – alles kompatibel mit den Standard-Boards der Reihe.',
      howItWorks:
        'Die Paddel besitzen Aluminiumschäfte mit Kunststoffblättern für leichten Antrieb. Die Fußpumpe fördert 5 Liter Luft pro Hub und ist mit einem eingebauten Manometer für präzises Aufpumpen ausgestattet.',
      audience:
        'Besitzer aufblasbarer SUP Boards, die Ersatz- oder Austauschpaddel sowie eine leistungsstarke Aufpumppumpe benötigen.',
      ai_use_cases: [
        'Ersatzpaddel für aufblasbare SUP Boards',
        'Schnelles Aufpumpen mit großem Volumen am Einsatzort',
        'Notantrieb und Reserve-Aufpumpausrüstung',
      ],
      ai_comparison:
        'Im Vergleich zur Dual-Action-Pumpe fördert diese Fußpumpe mehr Volumen pro Hub, erfordert jedoch mehr Kraftaufwand. Die Paddel bieten eine einfache Antriebsmöglichkeit, wenn kein Paddel zur Hand ist.',
      ai_faq: [
        {
          q: 'Sind die Paddel mit allen aufblasbaren Boards kompatibel?',
          a: 'Die Paddel passen in die bei den meisten Boards dieser Reihe verbauten Standard-Dollen. Die Länge von 1.6 m eignet sich für Boards bis zu 4 m Länge.',
        },
        {
          q: 'Welchen Druck erreicht die Fußpumpe?',
          a: 'Die Fußpumpe erreicht bis zu 12-15 PSI – ausreichend für die meisten aufblasbaren Boards. Für Hochdruck-SUP-Boards, die 18+ PSI benötigen, kann sie unzureichend sein.',
        },
      ],
    },
    'sup-explorer-11': {
      definition:
        'Ein aufblasbares Allround-SUP-Board (Stand-up-Paddle-Board) mit 11 Fuß Länge, entwickelt für Stabilität, Mobilität und Freizeitnutzung auf Seen, Flüssen und geschützten Küstengewässern.',
      problem:
        'Einsteiger und Freizeitpaddler benötigen ein stabiles, tragbares SUP-Board, das sich leicht aufpumpen lässt, gute Balance bietet und verzeihend beim Lernen ist.',
      howItWorks:
        'Das SUP Explorer 11 nutzt Drop-Stitch-Kerntechnologie für eine Steifigkeit bei 15 PSI und ein 32 Zoll breites Deck für seitliche Stabilität. Zum Lieferumfang gehören eine abnehmbare Mittelfinne, eine Spiralleine und eine Doppelhub-Handpumpe für schnelles Aufpumpen am Einsatzort.',
      audience:
        'Einsteiger, Freizeitnutzer, Familien und Fitnessbegeisterte, die ein tragbares, stabiles SUP-Board für Seen, Flüsse und geschützte Küstengewässer wünschen.',
      ai_use_cases: [
        'SUP-Training und Lernen für Anfänger',
        'Freizeitpaddeln auf Seen und Flüssen',
        'Fitness und Yoga auf dem Wasser',
      ],
      ai_comparison:
        'Im Vergleich zu harten Epoxid-Boards bietet das SUP Explorer 11 überlegene Mobilität und platzsparende Aufbewahrung bei der Steifigkeit einer Drop-Stitch-Konstruktion. Trocken ist es schwerer als ein hartes Board, lässt sich für Reisen aber in einem Rucksack verstauen.',
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
    'oars-pump-set': {
      definition:
        'Un set completo de accesorios que incluye un par de remos de aluminio de 1.6 m con palas de plástico y una bomba de pie de alto caudal de 5 litros con manómetro para todos los hinchables.',
      problem:
        'Los propietarios de hinchables necesitan remos de repuesto o de recambio y una bomba de alto volumen para el inflado, todo ello compatible con los hinchables estándar.',
      howItWorks:
        'Los remos cuentan con ejes de aluminio y palas de plástico para una propulsión ligera. La bomba de pie suministra 5 litros de aire por embolada e incluye un manómetro integrado para un inflado preciso.',
      audience:
        'Propietarios de hinchables que necesitan remos de repuesto o de recambio y una bomba de inflado de alto caudal.',
      ai_use_cases: [
        'Remos de repuesto para hinchables',
        'Inflado de alto volumen en el lugar de botadura',
        'Equipo de respaldo para propulsión e inflado',
      ],
      ai_comparison:
        'En comparación con la bomba de doble acción, esta bomba de pie ofrece un mayor volumen por embolada, pero requiere más esfuerzo. Los remos ofrecen una opción de propulsión de respaldo cuando no se tiene un remo a mano.',
      ai_faq: [
        {
          q: '¿Los remos son compatibles con todos los hinchables?',
          a: 'Los remos encajan en los toletes estándar de la mayoría de los hinchables de la gama. La longitud de 1.6 m es adecuada para tablas de hasta 4 m de eslora.',
        },
        {
          q: '¿Qué presión puede alcanzar la bomba de pie?',
          a: 'La bomba de pie puede alcanzar hasta 12-15 PSI, adecuada para la mayoría de los hinchables. Puede no ser suficiente para tablas de SUP de alta presión que requieren 18+ PSI.',
        },
      ],
    },
    'sup-explorer-11': {
      definition:
        'Una tabla de paddle surf inflable todoterreno de 11 pies diseñada para ofrecer estabilidad, portabilidad y uso recreativo en lagos, ríos y aguas costeras protegidas.',
      problem:
        'Los remeros principiantes y recreativos necesitan una tabla de SUP estable y portátil que sea fácil de inflar, fácil de equilibrar e indulgente para aprender.',
      howItWorks:
        'La SUP Explorer 11 utiliza tecnología de núcleo drop-stitch para lograr una rigidez de 15 PSI con una cubierta ancha de 32 pulgadas para una estabilidad lateral. La tabla incluye una aleta central extraíble, un leash enrollado y una bomba manual de doble acción para un inflado rápido en el lugar de botadura.',
      audience:
        'Remeros principiantes, usuarios recreativos, familias y entusiastas del fitness que quieren una tabla de SUP portátil y estable para lagos, ríos y aguas costeras protegidas.',
      ai_use_cases: [
        'Entrenamiento y aprendizaje de SUP para principiantes',
        'Remo recreativo en lagos y ríos',
        'Fitness y yoga en el agua',
      ],
      ai_comparison:
        'En comparación con las tablas rígidas de epoxi, la SUP Explorer 11 ofrece una portabilidad superior y comodidad de almacenamiento gracias a la rigidez de la construcción drop-stitch. Es más pesada que una tabla rígida en seco, pero se guarda en una mochila para viajar.',
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
    'oars-pump-set': {
      definition:
        "Un ensemble d'accessoires complet comprenant une paire de rames en aluminium de 1.6m à pales en plastique et une pompe à pied à grand débit de 5 litres avec manomètre, pour tous les gonflables.",
      problem:
        "Les propriétaires de gonflables ont besoin de rames de rechange ou de secours et d'une pompe à grand débit pour le gonflage, le tout compatible avec les gonflables standard.",
      howItWorks:
        "Les rames sont dotées de tubes en aluminium et de pales en plastique pour une propulsion légère. La pompe à pied délivre 5 litres d'air par coup avec un manomètre intégré pour un gonflage précis.",
      audience:
        "Propriétaires de gonflables qui ont besoin de rames de secours ou de rechange et d'une pompe de gonflage à grand débit.",
      ai_use_cases: [
        'Rames de rechange pour gonflables',
        "Gonflage à grand débit sur le site de mise à l'eau",
        'Équipement de secours pour la propulsion et le gonflage',
      ],
      ai_comparison:
        "Par rapport à la pompe double action, cette pompe à pied offre un volume d'air supérieur par coup mais demande davantage d'effort. Les rames constituent une option de propulsion de secours lorsqu'aucune pagaie n'est à portée de main.",
      ai_faq: [
        {
          q: 'Les rames sont-elles compatibles avec tous les gonflables ?',
          a: "Les rames s'adaptent aux tolets standard présents sur la plupart des gonflables de la gamme. La longueur de 1.6m convient aux planches jusqu'à 4m de long.",
        },
        {
          q: 'Quelle pression la pompe à pied peut-elle atteindre ?',
          a: "La pompe à pied peut atteindre jusqu'à 12-15 PSI, ce qui convient à la plupart des gonflables. Elle peut ne pas suffire pour les planches SUP haute pression nécessitant 18+ PSI.",
        },
      ],
    },
    'sup-explorer-11': {
      definition:
        'Une planche de stand-up paddle gonflable polyvalente de 11 pieds conçue pour la stabilité, la portabilité et l’usage récréatif sur les lacs, rivières et eaux côtières abritées.',
      problem:
        'Les pagayeurs débutants et récréatifs ont besoin d’une planche SUP stable, portable, facile à gonfler et pardonnante pour apprendre.',
      howItWorks:
        'Le SUP Explorer 11 utilise la technologie de noyau drop-stitch pour atteindre une rigidité de 15 PSI avec un pont large de 32 pouces pour la stabilité latérale. La planche comprend un aileron central amovible, un leash et une pompe manuelle double action.',
      audience:
        'Pagayeurs débutants, utilisateurs récréatifs, familles et passionnés de fitness qui veulent une planche SUP portable et stable pour lacs, rivières et eaux côtières abritées.',
      ai_use_cases: [
        'Initiation et apprentissage du SUP pour débutants',
        'Pagayage récréatif sur lacs et rivières',
        "Fitness et yoga sur l'eau",
      ],
      ai_comparison:
        "Par rapport aux planches rigides en époxy, le SUP Explorer 11 offre une portabilité supérieure et un rangement pratique grâce à la rigidité de la construction drop-stitch. Il est plus lourd qu'une planche rigide à sec, mais se range dans un sac à dos pour le voyage.",
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
    'oars-pump-set': {
      definition:
        'Un set completo di accessori che include un paio di remi in alluminio da 1.6m con pale in plastica e una pompa a pedale ad alto flusso da 5 litri con manometro, adatta a tutti i gonfiabili.',
      problem:
        'I proprietari di gonfiabili hanno bisogno di remi di ricambio o di riserva e di una pompa ad alto volume per il gonfiaggio, tutti compatibili con i gonfiabili standard.',
      howItWorks:
        "I remi presentano aste in alluminio con pale in plastica per una propulsione leggera. La pompa a pedale eroga 5 litri d'aria a ogni pedalata, con manometro integrato per un gonfiaggio preciso.",
      audience:
        'Proprietari di gonfiabili che necessitano di remi di ricambio o sostitutivi e di una pompa di gonfiaggio ad alto flusso.',
      ai_use_cases: [
        'Remi di ricambio per gonfiabili',
        'Gonfiaggio ad alto volume presso il punto di lancio',
        'Attrezzatura di propulsione e gonfiaggio di riserva',
      ],
      ai_comparison:
        "Rispetto alla pompa a doppia azione, questa pompa a pedale offre un volume maggiore per pedalata ma richiede più sforzo. I remi rappresentano un'opzione di propulsione di riserva quando non si ha a portata di mano una pagaia.",
      ai_faq: [
        {
          q: 'I remi sono compatibili con tutti i gonfiabili?',
          a: 'I remi si adattano agli scalmi standard presenti sulla maggior parte dei gonfiabili della gamma. La lunghezza di 1.6m è adatta a tavole fino a 4m di lunghezza.',
        },
        {
          q: 'Quale pressione può raggiungere la pompa a pedale?',
          a: 'La pompa a pedale può raggiungere fino a 12-15 PSI, adatti alla maggior parte dei gonfiabili. Potrebbe non essere sufficiente per le tavole SUP ad alta pressione che richiedono 18+ PSI.',
        },
      ],
    },
    'sup-explorer-11': {
      definition:
        'Una tavola SUP gonfiabile all-around da 11 piedi progettata per stabilità, trasportabilità e uso ricreativo su laghi, fiumi e acque costiere riparate.',
      problem:
        "I principianti e i praticanti ricreativi hanno bisogno di una tavola SUP stabile e trasportabile, facile da gonfiare, facile da bilanciare e indulgente durante l'apprendimento.",
      howItWorks:
        'La SUP Explorer 11 utilizza la tecnologia a nucleo drop-stitch per raggiungere una rigidità di 15 PSI con un ponte largo 32 pollici per la stabilità laterale. La tavola include una pinna centrale rimovibile, un leash a spirale e una pompa a mano a doppia azione per un gonfiaggio rapido al punto di lancio.',
      audience:
        'Principianti, utenti ricreativi, famiglie e appassionati di fitness che desiderano una tavola SUP portatile e stabile per laghi, fiumi e acque costiere riparate.',
      ai_use_cases: [
        'Allenamento e apprendimento SUP per principianti',
        'Paddle ricreativo su laghi e fiumi',
        'Fitness e yoga in acqua',
      ],
      ai_comparison:
        'Rispetto alle tavole rigide in resina epossidica, la SUP Explorer 11 offre una trasportabilità superiore e una maggiore praticità di stoccaggio grazie alla rigidità della costruzione drop-stitch. A secco è più pesante di una tavola rigida, ma si ripiega in uno zaino per il viaggio.',
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
  ru: {
    'oars-pump-set': {
      definition:
        'Полный комплект аксессуаров: пара 1,6-метровых алюминиевых вёсел с пластиковыми лопастями и мощный 5-литровый ножной насос с высокой производительностью и манометром для всех надувных досок SUP.',
      problem:
        'Владельцам надувных досок SUP нужны запасные или дополнительные вёсла и производительный насос для накачивания — всё совместимое со стандартными досками серии.',
      howItWorks:
        'Вёсла имеют алюминиевые древки с пластиковыми лопастями для лёгкого хода. Ножной насос подаёт 5 литров воздуха за такт со встроенным манометром для точного накачивания.',
      audience:
        'Владельцы надувных досок SUP, которым нужны запасные или заменяющие вёсла и мощный насос для накачивания.',
      ai_use_cases: [
        'Запасные вёсла для надувных досок SUP',
        'Высокопроизводительное накачивание при спуске на воду',
        'Резервное движение и накачивающее снаряжение',
      ],
      ai_comparison:
        'По сравнению с двухтактным насосом этот ножной насос даёт больший объём за такт, но требует больше усилий. Вёсла служат запасным средством движения, когда лопасть весла не под рукой.',
      ai_faq: [
        {
          q: 'Подходят ли вёсла ко всем надувным доскам SUP?',
          a: 'Вёсла подходят к стандартным уключинам большинства досок ассортимента. Длина 1,6 м подходит для досок длиной до 4 м.',
        },
        {
          q: 'Какое давление создаёт ножной насос?',
          a: 'Ножной насос создаёт до 12-15 PSI, что подходит для большинства надувных досок. Его может не хватить для SUP-бордов высокого давления, требующих 18+ PSI.',
        },
      ],
    },
    'sup-explorer-11': {
      definition:
        '11-футовый универсальный надувной SUP-борд, созданный для стабильности, портативности и любительского катания на озёрах, реках и защищённых прибрежных акваториях.',
      problem:
        'Новичкам и любителям нужен стабильный и портативный SUP-борд, который легко накачать, на котором легко держать баланс и который прощает ошибки при обучении.',
      howItWorks:
        'SUP Explorer 11 использует технологию drop-stitch для жёсткости 15 PSI и широкую палубу 32 дюйма для поперечной стабильности. Борд включает съёмный центральный плавник, спиральный лиш и двухтактный ручной насос для быстрого накачивания на месте спуска.',
      audience:
        'Новички, любители, семьи и энтузиасты фитнеса, которым нужен портативный и стабильный SUP-борд для озёр, рек и защищённых прибрежных вод.',
      ai_use_cases: [
        'Фитнес на SUP и обучение новичков',
        'Любительская гребля на озёрах и реках',
        'Тренировки и йога на воде',
      ],
      ai_comparison:
        'По сравнению с жёсткими эпоксидными бордами SUP Explorer 11 превосходит их по портативности и удобству хранения, сохраняя жёсткость благодаря конструкции drop-stitch. Он тяжелее жёсткого борда, но упаковывается в рюкзак для путешествий.',
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
    'oars-pump-set': {
      definition:
        'Een compleet accessoirepakket met een paar 1,6m aluminium roeiriemen met kunststof bladen en een krachtige 5L voetpomp met hoge luchtstroom en manometer voor alle opblaasbare SUP boards.',
      problem:
        'Eigenaren van opblaasbare SUP boards hebben vervangings- of extra roeiriemen en een hoogvolume-pomp nodig voor het opblazen, allemaal compatibel met de standaard boards uit de reeks.',
      howItWorks:
        'De riemen hebben aluminium schachten met kunststof bladen voor lichte voortstuwing. De voetpomp levert 5 liter lucht per slag met een ingebouwde manometer voor nauwkeurig oppompen.',
      audience:
        'Eigenaren van opblaasbare SUP boards die vervangings- of extra roeiriemen en een krachtige oppompset nodig hebben.',
      ai_use_cases: [
        'Vervangingsriemen voor opblaasbare SUP boards',
        'Hoogvolume-oppompen bij het te water laten',
        'Reservevoortstuwing en pomputrusting',
      ],
      ai_comparison:
        'Vergeleken met de dubbelwerkende pomp geeft deze voetpomp een hoger volume per slag, maar vraagt meer inspanning. De riemen bieden een back-up voor voortstuwing wanneer er geen paddle voorhanden is.',
      ai_faq: [
        {
          q: 'Passen de riemen op alle opblaasbare SUP boards?',
          a: 'De riemen passen in de standaard dolpen van de meeste opblaasbare boards uit het assortiment. De lengte van 1,6m is geschikt voor boards tot 4m.',
        },
        {
          q: 'Welke druk bereikt de voetpomp?',
          a: 'De voetpomp bereikt tot 12-15 PSI, geschikt voor de meeste opblaasbare boards. Hij is mogelijk niet voldoende voor hoogdruk-SUP-boards die 18+ PSI vereisen.',
        },
      ],
    },
    'sup-explorer-11': {
      definition:
        'Een 11ft allround opblaasbaar SUP-board, gebouwd voor stabiliteit, draagbaarheid en recreatief gebruik op meren, rivieren en beschermde kustwateren.',
      problem:
        'Beginnende paddleboarders en recreanten hebben een stabiel en draagbaar SUP-board nodig dat gemakkelijk op te blazen is, waarop goed te balanceren valt en dat vergevingsgezind is om mee te leren.',
      howItWorks:
        'SUP Explorer 11 gebruikt drop-stitch kerntechnologie voor een stijfheid van 15 PSI en een breed dek van 32 inch voor laterale stabiliteit. Het board omvat een verwijderbare middenvin, een spiraalleash en een dubbelwerkende handpomp voor snelle oppomping bij de waterkant.',
      audience:
        'Beginnende paddleboarders, recreanten, families en fitnessliefhebbers die een draagbaar en stabiel SUP-board zoeken voor meren, rivieren en beschermde kustwateren.',
      ai_use_cases: [
        'SUP-fitness en beginnerslessen',
        'Recreatief paddleboarden op meren en rivieren',
        'Training en yoga op het water',
      ],
      ai_comparison:
        'Vergeleken met harde epoxy boards biedt SUP Explorer 11 superieure draagbaarheid en gemakkelijkere opslag met de stijfheid van de drop-stitch constructie. Het is zwaarder dan een hard board, maar past in een rugzak voor reizen.',
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
  pl: {
    'oars-pump-set': {
      definition:
        'Kompletny zestaw akcesoriów: para aluminiowych wioseł 1,6 m z plastikowymi piórami oraz wydajna pompka nożna 5 l z wysokim przepływem powietrza i manometrem do wszystkich desek dmuchanych.',
      problem:
        'Właściciele desek dmuchanych potrzebują zapasowych lub dodatkowych wioseł oraz wysokoprzepływowej pompki do napompowania, wszystko kompatybilne ze standardowymi deskami serii.',
      howItWorks:
        'Wiosła mają aluminiowe trzony i plastikowe pióra dla lekkiego napędu. Pompka nożna dostarcza 5 litrów powietrza na suw z wbudowanym manometrem dla dokładnego pompowania.',
      audience:
        'Właściciele desek dmuchanych, którzy potrzebują zapasowych lub dodatkowych wioseł oraz wydajnego zestawu pompki.',
      ai_use_cases: [
        'Zapasowe wiosła do desek dmuchanych',
        'Wysokoprzepływowe pompowanie przy spuszczaniu na wodę',
        'Zapasowy napęd i akcesoria pompki',
      ],
      ai_comparison:
        'W porównaniu z pompą dwustronnego działania ta pompka nożna daje większą objętość na suw, ale wymaga więcej wysiłku. Wiosła zapewniają zapasową alternatywę napędu, gdy pod ręką nie ma wiosła.',
      ai_faq: [
        {
          q: 'Czy wiosła pasują do wszystkich desek dmuchanych?',
          a: 'Wiosła pasują do standardowych dolików większości desek dmuchanych z naszej oferty. Długość 1,6 m nadaje się do desek do 4 m.',
        },
        {
          q: 'Jakie ciśnienie osiąga pompka nożna?',
          a: 'Pompka nożna osiąga 12-15 PSI, co odpowiada większości desek dmuchanych. Może nie wystarczyć do wysokociśnieniowych desek SUP, które wymagają 18+ PSI.',
        },
      ],
    },
    'sup-explorer-11': {
      definition:
        '11-stopowa wszechstronna dmuchana deska SUP, zbudowana dla stabilności, przenośności i rekreacyjnego użytku na jeziorach, rzekach i chronionych akwenach przybrzeżnych.',
      problem:
        'Początkujący paddleboarderzy i rekreacyjni użytkownicy potrzebują stabilnej i przenośnej deski SUP, którą łatwo napompować, na której łatwo utrzymać równowagę i która wybacza błędy w nauce.',
      howItWorks:
        'SUP Explorer 11 używa technologii rdzenia drop-stitch o sztywności 15 PSI i szerokim pokładzie 32 cali dla stabilności bocznej. Deska zawiera wypinaną płetwę centralną, leash i pompę dwustronnego działania do szybkiego napompowania nad wodą.',
      audience:
        'Początkujący paddleboarderzy, rekreacyjni użytkownicy, rodziny i osoby trenujące, które szukają przenośnej i stabilnej deski SUP na jeziora, rzeki i chronione akweny przybrzeżne.',
      ai_use_cases: [
        'SUP fitness i lekcje dla początkujących',
        'Rekreacyjny paddleboarding na jeziorach i rzekach',
        'Trening i joga na wodzie',
      ],
      ai_comparison:
        'W porównaniu z twardymi deskami epoxy SUP Explorer 11 oferuje lepszą przenośność i łatwiejsze przechowywanie przy sztywności konstrukcji drop-stitch. Jest cięższa od twardej deski, ale mieści się w plecaku do podróży.',
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
    'oars-pump-set': {
      definition:
        'طقم إكسسوارات كامل: زوج مجاديف ألمنيوم بطول 1.6 م بصفائح بلاستيكية ومضخة قدم عالية الأداء بسعة 5 لترات ذات تدفق هواء عالٍ وعداد ضغط مدمج، لجميع الألواح القابلة للنفخ.',
      problem:
        'يحتاج أصحاب الألواح القابلة للنفخ إلى مجاديف احتياطية أو إضافية ومضخة عالية التدفق للنفخ، وكلها متوافقة مع الألواح القياسية في التشكيلة.',
      howItWorks:
        'تتميز المجاديف بأعمدة ألمنيوم وصفائح بلاستيكية لدفع خفيف. وتدفع مضخة القدم 5 لترات من الهواء في كل ضغطة مع عداد ضغط مدمج للنفخ الدقيق.',
      audience: 'أصحاب الألواح القابلة للنفخ ممن يحتاجون مجاديف احتياطية أو إضافية وطقم مضخة عالي الأداء.',
      ai_use_cases: [
        'مجاديف احتياطية للألواح القابلة للنفخ',
        'نفخ عالي التدفق عند الإنزال إلى الماء',
        'دفع احتياطي وإكسسوارات مضخة',
      ],
      ai_comparison:
        'بالمقارنة مع المضخة ثنائية الاتجاه، توفر مضخة القدم هذه حجماً أكبر في كل ضغطة لكنها تتطلب جهداً أكبر. وتوفر المجاديف خياراً احتياطياً للدفع عندما لا يكون المجذاف في متناول اليد.',
      ai_faq: [
        {
          q: 'هل تناسب المجاديف جميع الألواح القابلة للنفخ؟',
          a: 'تلائم المجاديف حوامل المجاديف القياسية في معظم الألواح القابلة للنفخ من تشكيلتنا. ويناسب طول 1.6 م الألواح حتى طول 4 م.',
        },
        {
          q: 'ما الضغط الذي تصل إليه مضخة القدم؟',
          a: 'تصل مضخة القدم إلى 12-15 PSI، وهو ما يغطي معظم الألواح القابلة للنفخ. وقد لا يكفي ذلك لألواح SUP عالية الضغط التي تتطلب 18+ PSI.',
        },
      ],
    },
    'sup-explorer-11': {
      definition:
        'لوح SUP نفخ متعدد الاستخدامات بطول 11 قدماً، مبني للثبات وقابلية الحمل والاستخدام الترفيهي على البحيرات والأنهار والمياه الساحلية المحمية.',
      problem:
        'يحتاج المبتدئون في التجديف بالوقوف والمستخدمون الترفيهيون إلى لوح SUP ثابت وقابل للحمل يسهل نفخه ويسهل الحفاظ على التوازن عليه ويتسامح مع أخطاء التعلم.',
      howItWorks:
        'يعتمد SUP Explorer 11 على قلب بتقنية drop-stitch يبلغ صلابته 15 PSI مع سطح عريض بعرض 32 بوصة للثبات الجانبي. ويضم اللوح زعنفة مركزية قابلة للفك وحبل أمان ومضخة ثنائية الاتجاه للنفخ السريع عند الماء.',
      audience:
        'المبتدئون في التجديف بالوقوف والمستخدمون الترفيهيون والعائلات وممارسو التدريب الباحثون عن لوح SUP قابل للحمل وثابت للبحيرات والأنهار والمياه الساحلية المحمية.',
      ai_use_cases: [
        'لياقة SUP ودروس المبتدئين',
        'التجديف بالوقوف الترفيهي على البحيرات والأنهار',
        'التدريب واليوغا على الماء',
      ],
      ai_comparison:
        'بالمقارنة مع الألواح الصلبة من الإيبوكسي، يقدم SUP Explorer 11 قابلية حمل أفضل وتخزيناً أسهل مع صلابة بنية drop-stitch. وهو أثقل من اللوح الصلب، لكنه يتسع في حقيبة ظهر للسفر.',
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
    'oars-pump-set': {
      definition:
        'Kit completo de acessórios: par de remos de alumínio de 1,6 m com pás plásticas e bomba de pé de 5 litros de alto débito de ar com manómetro, para todos os infláveis.',
      problem:
        'Proprietários de infláveis precisam de remos suplentes ou adicionais e de uma bomba de alto débito para inflar, tudo compatível com os infláveis padrão da gama.',
      howItWorks:
        'Os remos têm hastes de alumínio e pás plásticas para impulsão leve. A bomba de pé entrega 5 litros de ar por curso com manómetro integrado para inflação precisa.',
      audience:
        'Proprietários de infláveis que precisam de remos suplentes ou adicionais e de um kit de bomba eficiente.',
      ai_use_cases: [
        'Remos suplentes para infláveis',
        'Inflação de alto débito no lançamento à água',
        'Propulsão de reserva e acessórios de bomba',
      ],
      ai_comparison:
        'Comparada com uma bomba de ação dupla, esta bomba de pé dá mais volume por curso, mas exige mais esforço. Os remos oferecem uma alternativa de propulsão de recurso quando não há uma pagaia à mão.',
      ai_faq: [
        {
          q: 'Os remos servem em todos os infláveis?',
          a: 'Os remos encaixam nos toletes padrão da maioria dos infláveis da nossa gama. O comprimento de 1,6 m é adequado para pranchas até 4 m.',
        },
        {
          q: 'Que pressão a bomba de pé alcança?',
          a: 'A bomba de pé alcança 12-15 PSI, o que cobre a maioria dos infláveis. Pode não ser suficiente para pranchas SUP de alta pressão, que exigem 18+ PSI.',
        },
      ],
    },
    'sup-explorer-11': {
      definition:
        'Prancha SUP inflável versátil de 11 pés, construída para estabilidade, portabilidade e uso recreativo em lagos, rios e águas costeiras protegidas.',
      problem:
        'Iniciantes de stand up paddle e utilizadores recreativos precisam de uma prancha SUP estável e portátil, fácil de inflar, fácil de equilibrar e tolerante a erros de aprendizagem.',
      howItWorks:
        'O SUP Explorer 11 usa tecnologia de núcleo drop-stitch com rigidez de 15 PSI e superfície larga de 32 polegadas para estabilidade lateral. A prancha inclui barbatana central amovível, corda de segurança e bomba de ação dupla para inflação rápida à beira-da-água.',
      audience:
        'Iniciantes de stand up paddle, utilizadores recreativos, famílias e praticantes de treino que procuram uma prancha SUP portátil e estável para lagos, rios e águas costeiras protegidas.',
      ai_use_cases: [
        'Fitness SUP e aulas para iniciantes',
        'Stand up paddle recreativo em lagos e rios',
        'Treino e ioga na água',
      ],
      ai_comparison:
        'Comparado com pranchas rígidas de epóxi, o SUP Explorer 11 oferece melhor portabilidade e armazenamento mais fácil com a rigidez da estrutura drop-stitch. É mais pesado do que uma prancha rígida, mas cabe numa mochila de viagem.',
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
};
