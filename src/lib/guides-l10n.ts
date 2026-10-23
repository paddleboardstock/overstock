export interface GuideL10n {
  title?: string;
  description?: string;
  tldr?: string;
  problem?: string;
  solution?: string;
  audience?: string;
  steps?: string[];
  faq?: Array<{ q: string; a: string }>;
}

export const GUIDE_L10N: Record<string, Record<string, GuideL10n>> = {
  de: {
    'how-to-choose-your-sup': {
      title: 'So wählen Sie Ihr SUP-Board',
      description:
        'Ein vollständiger Leitfaden zur Auswahl des richtigen Stand-up-Paddle-Boards basierend auf Ihrem Könnensniveau, den Wasserbedingungen und dem geplanten Einsatzzweck.',
      tldr: 'Wählen Sie Ihr SUP anhand von Könnensniveau, Gewässertyp und Hauptverwendungszweck. Allround-Boards eignen sich für Anfänger und ruhiges Wasser. Touring-Boards sind für längere Strecken gedacht. Yoga-Boards bieten zusätzliche Breite für Stabilität. Performance-Boards sind für erfahrene Paddler unter wechselnden Bedingungen geeignet.',
      problem:
        'Die meisten Erstkäufer wählen ein SUP-Board nach Preis oder Aussehen statt danach, wie und wo sie tatsächlich paddeln werden. Das führt zu mangelnder Stabilität, unzureichender Performance und einem frustrierenden Erlebnis.',
      solution:
        'Passen Sie Boardform, Volumen und Konstruktion an Ihr Könnensniveau und Ihre primäre Wasserumgebung an. Breitere Boards (32-34") bieten Anfängern Stabilität. Längere Boards (12-14") laufen beim Touren besser geradeaus. Drop-Stitch-Konstruktion mit 12-15 PSI bietet eine Steifigkeit, die mit Hartschalen-Boards vergleichbar ist.',
      audience: 'SUP-Erstkäufer, Freizeitpaddler und alle, die von einem Basismodell aufrüsten möchten.',
      steps: [
        'Bestimmen Sie Ihre primäre Paddelumgebung — See, Meer, Fluss oder gemischt',
        'Passen Sie die Boardbreite an Ihr Könnensniveau an: 32-34" für Anfänger, 30-32" für Fortgeschrittene, 28-30" für Geübte',
        'Wählen Sie die Boardlänge nach Verwendungszweck: kürzer für Wendigkeit, länger für Geradeauslauf und Geschwindigkeit',
        'Wählen Sie die Konstruktion: aufblasbares Drop-Stitch-Board für Mobilität, Hartschalen-Board für maximale Performance',
        'Prüfen Sie die Gewichtskapazität — Ihr Gewicht plus Ausrüstung sollte 80 % der Board-Grenze nicht überschreiten',
        'Kontrollieren Sie das Zubehör: Pumpe, Leash, Finne, Rucksack und Reparaturset',
      ],
      faq: [
        {
          q: 'Welche SUP-Breite ist für Anfänger am besten?',
          a: 'Eine Breite von 32 bis 34 Zoll bietet die stabilste Plattform zum Lernen. Das SUP Explorer 11 mit 33" Breite ist ideal für Erstpaddler auf ruhigem Wasser.',
        },
        {
          q: 'Aufblasbares oder hartes SUP-Board?',
          a: 'Aufblasbare Boards bieten Mobilität, platzsparende Aufbewahrung und Stoßdämpfung. Harte Boards bieten maximale Steifigkeit und Geschwindigkeit. Für die meisten Freizeitnutzer ist ein hochwertiges aufblasbares Board mit Drop-Stitch-Kern die praktische Wahl.',
        },
        {
          q: 'Mit welchem PSI sollte ich aufpumpen?',
          a: 'Aquafarer-Boards empfehlen 12-15 PSI. Bei 15 PSI erreicht das Board eine maximale Steifigkeit, die mit einem Hartschalen-Board vergleichbar ist. Bleiben Sie stets innerhalb des auf dem Board angegebenen Nenndruckbereichs.',
        },
      ],
    },
    'beginner-guide': {
      title: 'Anfängerleitfaden für Stand-up-Paddling',
      description:
        'Alles, was Sie vor Ihrer ersten Paddelsession wissen müssen — vom Aufbau der Ausrüstung bis zu grundlegenden Paddeltechniken.',
      tldr: 'Beginnen Sie auf ruhigem, flachem Wasser mit einem breiten, stabilen Board. Pumpen Sie auf 12-15 PSI auf, befestigen Sie die Leash und verwenden Sie die richtige Paddellänge (6-8" größer als Ihre Körpergröße). Halten Sie Ihren Stand schulterbreit, die Knie leicht gebeugt, und blicken Sie zum Horizont.',
      problem:
        'Neue Paddler überspringen oft die grundlegende Vorbereitung — falsche Paddellänge, schlechter Stand oder die Wahl rauen Wassers — was zu Stürzen, Frustration und Demotivation führt.',
      solution:
        'Folgen Sie einem strukturierten Plan für die erste Session: Wählen Sie ruhiges Wasser, richten Sie Ihre Ausrüstung richtig ein, üben Sie das Knien vor dem Aufstehen und meistern Sie den Vorwärtsschlag, bevor Sie Wendungen versuchen.',
      audience: 'Absolute Anfänger, die noch nie gepaddelt sind.',
      steps: [
        'Wählen Sie flaches, ruhiges Wasser ohne Bootsverkehr — ein kleiner See oder eine geschützte Bucht ist ideal',
        'Pumpen Sie Ihr Board mit der Doppelhubpumpe auf 12-15 PSI auf',
        'Befestigen Sie die Spiralleash an Knöchel oder Wade, niemals am Boardgriff',
        'Setzen Sie die Finne ein und ziehen Sie die Schraube fest',
        'Stellen Sie die Paddellänge ein — sie sollte 6-8 Zoll größer als Ihre Körpergröße sein',
        'Knien Sie zunächst auf dem Board und paddeln Sie ein paar Schläge, um das Gleichgewicht zu spüren',
        'Stehen Sie einen Fuß nach dem anderen auf, Füße schulterbreit, Knie weich',
        'Blicken Sie zum Horizont, nicht auf Ihre Füße — Ihr Board fährt dorthin, wohin Sie schauen',
      ],
      faq: [
        {
          q: 'Was sollte ich beim Stand-up-Paddling tragen?',
          a: 'Schnell trocknende Sportkleidung, eine Schwimmweste, Sonnenschutz und einen Hut. In kaltem Wasser tragen Sie einen Neoprenanzug. Tragen Sie immer eine Leash und führen Sie Ihr Handy in einer wasserdichten Hülle mit.',
        },
        {
          q: 'Wie komme ich wieder auf das Board, wenn ich hineinfalle?',
          a: 'Bleiben Sie ruhig. Schwimmen Sie zum Board, greifen Sie den mittleren Griff und strampeln Sie mit den Beinen, während Sie sich in einer Bewegung auf das Board ziehen. Kehren Sie zuerst in die kniende Position zurück, dann stehen Sie auf.',
        },
        {
          q: 'Welche Windbedingungen sind sicher?',
          a: 'Für Anfänger: Wind unter 10 mph (5 Knoten). Wenn der Wind vom Ufer wegbläst, gehen Sie nicht raus. Prüfen Sie die Vorhersage und bedenken Sie: Landwind ist gefährlich.',
        },
      ],
    },
    'safety-tips': {
      title: 'Sicherheitstipps für Wassersport',
      description:
        'Wesentliche Sicherheitsrichtlinien für Stand-up-Paddling, Kajakfahren und Bootfahren — von Geräteprüfungen bis zur Wetterbeobachtung.',
      tldr: 'Tragen Sie immer eine CE-zertifizierte Schwimmweste, prüfen Sie Wetter- und Wasserbedingungen vor dem Ablegen, führen Sie Kommunikationsmittel mit, paddeln Sie in unbekannten Gewässern nie allein und kennen Sie die Nennwerte Ihrer Ausrüstung.',
      problem:
        'Die meisten Wassersportunfälle sind die Folge unzureichender Vorbereitung — keine Schwimmweste, ignorierte Wetterwarnungen oder Nutzung von Ausrüstung jenseits ihrer Auslegungsgrenzen.',
      solution:
        'Führen Sie eine Sicherheitscheckliste vor dem Ablegen ein: Prüfen Sie den Zustand der Ausrüstung, kontrollieren Sie Wetter und Wassertemperatur, informieren Sie jemanden über Ihre Route und tragen Sie immer geeignete Schwimmhilfen.',
      audience: 'Alle Wassersportler — SUP-, Kajak-, Dingi- und RIB-Nutzer.',
      steps: [
        'Prüfen Sie die Wettervorhersage — vermeiden Sie Wind über 15 mph und Gewitter',
        'Kontrollieren Sie die Wassertemperatur — kaltes Wasser (<60°F/15°C) erfordert Neopren- oder Trockenanzug',
        'Inspizieren Sie die Ausrüstung — prüfen Sie auf Lecks, Risse und korrekten Druck',
        'Tragen Sie jederzeit eine CE-zertifizierte Schwimmweste',
        'Befestigen Sie die Leash (SUP) oder sichern Sie lose Ausrüstung (Kajak/Boot)',
        'Melden Sie Ihren Plan — teilen Sie jemandem mit, wohin Sie fahren und wann Sie zurückkehren',
        'Führen Sie Kommunikationsmittel mit — wasserdichte Handyhülle oder VHF-Funkgerät',
        'Kennen Sie Ihre Grenzen — bleiben Sie innerhalb Ihres Könnensniveaus und der Ausrüstungsgrenzen',
      ],
      faq: [
        {
          q: 'Brauche ich auf einem SUP eine Schwimmweste?',
          a: 'Ja. In vielen Rechtsgebieten ist eine Schwimmweste auf jedem Wasserfahrzeug gesetzlich vorgeschrieben, auch auf SUPs. Selbst wo sie nicht vorgeschrieben ist, ist eine CE-zertifizierte Schwimmweste eine unverzichtbare Sicherheitsausrüstung.',
        },
        {
          q: 'Was ist die häufigste Wassersportverletzung?',
          a: 'Kaltwasser-Unterkühlung und Erschöpfung sind die häufigsten ernsten Risiken. Kleiden Sie sich immer für die Wassertemperatur, nicht für die Lufttemperatur.',
        },
        {
          q: 'Wie prüfe ich, ob die Bedingungen sicher sind?',
          a: 'Nutzen Sie maritime Wettervorhersagen. Prüfen Sie Windgeschwindigkeit, Wellenhöhe und Wassertemperatur. Anfänger sollten bei Wind unter 10 mph und Wellen unter 1 Fuß bleiben.',
        },
      ],
    },
    'inflatable-vs-hard': {
      title: 'Aufblasbare vs. harte SUP-Boards: Welches sollten Sie wählen?',
      description:
        'Ein objektiver Vergleich von aufblasbaren und starren SUP-Boards zu Performance, Mobilität, Haltbarkeit und Preis-Leistung.',
      tldr: 'Aufblasbare Boards gewinnen bei Mobilität, Aufbewahrung und Stoßfestigkeit. Harte Boards gewinnen bei maximaler Steifigkeit und Geschwindigkeit. Moderne Drop-Stitch-Aufblasboards schließen bei 15 PSI etwa 90 % der Leistungslücke.',
      problem:
        'Käufer stehen zwischen dem Komfort aufblasbarer Boards und dem Performance-Ruf harter Boards, ohne belastbare Daten zum tatsächlichen Vergleich.',
      solution:
        'Vergleichen Sie konkrete Kriterien — Steifigkeit, Gewicht, Packmaß, Haltbarkeit, Reparatur und Kosten — mit Ihrem tatsächlichen Nutzungsmuster. Für die meisten Freizeitpaddler ist ein hochwertiges aufblasbares Board die bessere Wahl.',
      audience: 'SUP-Käufer, die zwischen aufblasbarer und starrer Konstruktion entscheiden.',
      steps: [
        'Bewerten Sie Ihre Mobilitätsbedürfnisse — aufblasbar passt in einen Rucksack, ein hartes Board benötigt einen Dachträger',
        'Vergleichen Sie die Steifigkeit — ein aufblasbares Board hat bei 15 PSI minimales Nachgeben, ein hartes Board gar keins',
        'Prüfen Sie die Aufbewahrung — aufblasbar lagert im Schrank, ein hartes Board benötigt Garage oder Regalplatz',
        'Berücksichtigen Sie die Haltbarkeit — aufblasbar absorbiert Stöße, harte Boards können Dellen und Risse bekommen',
        'Beachten Sie die Reparatur — Flicken auf aufblasbaren Boards sind einfach, Reparaturen an harten Boards erfordern Facharbeit',
        'Prüfen Sie die Performance — harte Boards haben einen leichten Geschwindigkeitsvorteil, aufblasbare bieten bessere Stoßdämpfung',
      ],
      faq: [
        {
          q: 'Sind aufblasbare SUPs so steif wie harte Boards?',
          a: 'Bei 15 PSI mit Drop-Stitch-Konstruktion ist der Unterschied in der Steifigkeit für den Freizeitgebrauch minimal. Nur Wettkampfpaddler und Surfer werden den Unterschied bemerken.',
        },
        {
          q: 'Wie lange hält ein aufblasbares SUP?',
          a: 'Bei richtiger Pflege 5-10 Jahre. PVC in Marinequalität widersteht UV-Strahlung und Abrieb. Lagern Sie es außerhalb direkter Sonneneinstrahlung und spülen Sie es nach Salzwassergebrauch mit Süßwasser ab.',
        },
        {
          q: 'Kann ich ein aufblasbares SUP zum Surfen nutzen?',
          a: 'Ja, aber aufblasbare Boards eignen sich am besten für kleinen bis mittleren Wellengang (unter 3 Fuß). Für gezieltes Surfen bietet ein hartes Board besseres Ansprechverhalten und Kantengriff.',
        },
      ],
    },
    'weather-conditions': {
      title: 'Wetterbedingungen beim Stand-up-Paddling verstehen',
      description:
        'Lernen Sie, Wind, Wellen, Gezeiten und Wettermuster zu lesen, um sichere Entscheidungen auf dem Wasser zu treffen.',
      tldr: 'Prüfen Sie vor jedem Start drei Dinge: Windgeschwindigkeit (unter 10 mph für Anfänger), Wellenhöhe (unter 1 Fuß für Anfänger) und Wassertemperatur (Kleidung fürs Wasser, nicht für die Luft wählen). Landwind ist auf jedem Könnensniveau gefährlich.',
      problem:
        'Die meisten wetterbedingten Unfälle passieren, weil Paddler Bedingungen falsch einschätzen — sie prüfen die Lufttemperatur, aber nicht die Wassertemperatur, oder verstehen nicht, dass Landwind sie aufs offene Meer treiben kann.',
      solution:
        'Nutzen Sie eine strukturierte Wetterbewertung vor dem Start: Windrichtung und -geschwindigkeit, Wellenperiode und -höhe, Gezeitenstand und Wassertemperatur. Verstehen Sie, wie jeder Faktor Ihre Sicherheit beeinflusst.',
      audience: 'Alle Paddler, die auf offenes Wasser gehen — Seen, Buchten, Flüsse und Meer.',
      steps: [
        'Prüfen Sie Windgeschwindigkeit und -richtung — Landwind (vom Land zum Meer blasend) ist am gefährlichsten',
        'Bewerten Sie die Wellenbedingungen — die Wellenperiode ist ebenso wichtig wie die Wellenhöhe',
        'Kennen Sie die Gezeiten — Gezeitenströmungen können stärker sein als Ihre Paddelgeschwindigkeit',
        'Messen Sie die Wassertemperatur — unter 60°F/15°C ist Thermalschutz erforderlich',
        'Prüfen Sie die Sicht — Nebel und starker Regen verringern die Sicht und erhöhen das Kollisionsrisiko',
        'Kennen Sie lokale Gefahren — unter Wasser liegende Felsen, starke Strömungen, Bootsverkehrszonen',
      ],
      faq: [
        {
          q: 'Welche Windgeschwindigkeit ist für SUP zu hoch?',
          a: 'Für Anfänger: über 10 mph (8 Knoten). Für Fortgeschrittene: über 15 mph (13 Knoten). Für Geübte: über 20 mph (17 Knoten). Im Zweifel nicht rausgehen.',
        },
        {
          q: 'Was bedeutet die Wellenperiode?',
          a: 'Die Wellenperiode ist die Zeit zwischen aufeinanderfolgenden Wellen. Kurze Perioden (unter 8 Sekunden) bedeuten steile, kabbelige Wellen. Lange Perioden (über 12 Sekunden) bedeuten ruhigere, vorhersehbarere Dünungen.',
        },
        {
          q: 'Kann ich im Regen paddeln?',
          a: 'Leichter Regen ist meist unbedenklich. Starker Regen verringert die Sicht und kann auf wechselnde Windverhältnisse hindeuten. Bei Gewittern müssen Sie das Wasser sofort verlassen.',
        },
      ],
    },
    'understanding-specs': {
      title: 'So lesen Sie SUP-Board-Spezifikationen',
      description:
        'Ein technischer Leitfaden zum Verständnis von SUP-Board-Spezifikationen — Volumen, Maße, Konstruktion und was sie für die Performance bedeuten.',
      tldr: 'Wichtige Kennzahlen: Das Volumen (Liter) bestimmt Auftrieb und Gewichtskapazität, die Breite bestimmt die Stabilität, die Länge bestimmt Geradeauslauf und Geschwindigkeit, die Dicke bestimmt die Steifigkeit und die PSI-Angabe bestimmt den Aufpumpdruck für optimale Performance.',
      problem:
        'Produktspezifikationen listen Zahlen ohne Kontext, sodass Käufer unsicher sind, welche Angaben für ihren Einsatzzweck wirklich zählen.',
      solution:
        'Übersetzen Sie jede Spezifikation in reale Performance: Volumen für Auftrieb, Breite für Stabilität, Länge für Gleiten, Dicke für Steifigkeit und Konstruktion für Haltbarkeit.',
      audience:
        'Fortgeschrittene Paddler und technisch interessierte Käufer, die datenbasierte Entscheidungen treffen möchten.',
      steps: [
        'Prüfen Sie das Volumen (Liter) — Ihr Gewicht plus Ausrüstung sollte 80 % der Volumenangabe des Boards nicht überschreiten',
        'Prüfen Sie die Breite — breiter (32-34") = mehr Stabilität, schmaler (28-30") = mehr Geschwindigkeit',
        'Prüfen Sie die Länge — länger (12-14") = besserer Geradeauslauf, kürzer (10-11") = bessere Wendigkeit',
        'Prüfen Sie die Dicke — 6" ist Standard, 8" bietet mehr Steifigkeit und Gewichtskapazität',
        'Prüfen Sie die PSI-Angabe — pumpen Sie auf den maximalen Nenndruck für optimale Steifigkeit auf',
        'Prüfen Sie die Konstruktionsmaterialien — Drop-Stitch-Dichte, PVC-Schichten, Schienenverstärkung',
      ],
      faq: [
        {
          q: 'Was bedeutet Drop-Stitch?',
          a: 'Drop-Stitch ist eine Konstruktionsmethode, bei der tausende Fäden die obere und untere Schicht des Boards verbinden. Dadurch ist Hochdruck-Aufpumpen (12-15 PSI) für extreme Steifigkeit möglich.',
        },
        {
          q: 'Was ist das ideale Gewichts-Volumen-Verhältnis?',
          a: 'Ein guter Richtwert ist etwa 5-6 Pfund Paddlergewicht pro Liter Boardvolumen. Ein 220-Pfund-Paddler sollte nach Boards mit 180+ Litern Volumen suchen.',
        },
        {
          q: 'Spielt das Boardgewicht eine Rolle?',
          a: 'Ja. Leichtere Boards (unter 20 lbs) sind einfacher zu tragen und zu transportieren. Schwerere Boards (25+ lbs) deuten oft auf eine haltbarere mehrschichtige PVC-Konstruktion hin.',
        },
      ],
    },
    'sup-maintenance': {
      title: 'So reinigen und lagern Sie Ihr aufblasbares SUP',
      description:
        'Schritt-für-Schritt-Wartungsleitfaden zur Verlängerung der Lebensdauer Ihres aufblasbaren SUP-Boards.',
      tldr: 'Spülen Sie das Board nach jeder Nutzung mit Süßwasser ab, trocknen Sie es vor der Lagerung vollständig, lassen Sie es ab und rollen Sie es locker (nicht militärisch straff), lagern Sie es kühl und trocken ohne direkte Sonneneinstrahlung und prüfen Sie die Nähte monatlich.',
      problem:
        'Unsachgemäße Lagerung und Reinigung sind die häufigsten Ursachen für vorzeitige Schäden an aufblasbaren SUPs — Schimmel, UV-Schäden und Nahtablösung.',
      solution:
        'Folgen Sie einer konsequenten Routine nach jeder Session: abspülen, trocknen, prüfen, ablassen und lagern. Verwenden Sie für hartnäckigen Schmutz milde Seife. Lagern Sie das Board niemals nass oder in direkter Sonneneinstrahlung.',
      audience: 'Alle Besitzer aufblasbarer SUPs, die ihr Board länger als 5 Jahre nutzen möchten.',
      steps: [
        'Spülen Sie das Board direkt nach dem Gebrauch mit Süßwasser ab, besonders nach Salzwasser',
        'Reinigen Sie es mit milder Seife und einem weichen Schwamm — vermeiden Sie aggressive Chemikalien und Hochdruckreiniger',
        'Trocknen Sie das Board vollständig — öffnen Sie das Ventil, damit eingeschlossenes Wasser entweichen kann',
        'Prüfen Sie auf Schäden — kontrollieren Sie Nähte, Ventil und Oberfläche auf Einstiche',
        'Lassen Sie vollständig ab — entfernen Sie den Ventilkern für die vollständige Entlüftung',
        'Rollen Sie das Board locker — beginnen Sie an der Nase, vermeiden Sie scharfe Knicke',
        'Lagern Sie es im Tragebeutel an einem kühlen, trockenen Ort ohne direkte Sonneneinstrahlung',
      ],
      faq: [
        {
          q: 'Kann ich mein SUP die ganze Saison aufgepumpt lassen?',
          a: 'Ja, aber halten Sie es bei Nichtgebrauch aus direkter Sonneneinstrahlung heraus. Bei längerer Lagerung wird ein teilweises Ablassen (8-10 PSI) empfohlen.',
        },
        {
          q: 'Wie repariere ich einen Einstich?',
          a: 'Reinigen Sie die Stelle, schneiden Sie einen Flicken mit abgerundeten Ecken zu, tragen Sie Kleber auf, drücken Sie fest an und warten Sie 24 Stunden, bevor Sie aufpumpen. Aquafarer-Boards enthalten ein Reparaturset.',
        },
        {
          q: 'Wie oft sollte ich das Ventil prüfen?',
          a: 'Monatlich. Das Ventil ist die häufigste Fehlerquelle. Prüfen Sie, ob sich der Ventilstift frei bewegt und der O-Ring intakt ist.',
        },
      ],
    },
    'paddling-techniques': {
      title: 'Essentielle SUP-Paddeltechniken',
      description:
        'Meistern Sie Vorwärtsschlag, Ziehschlag und Kreuzbogenwende, um unter allen Bedingungen effizient zu paddeln.',
      tldr: 'Der Vorwärtsschlag nutzt die Körpermitte, nicht die Arme. Der Ziehschlag dreht das Board. Die Kreuzbogenwende ist die effizienteste Drehung. Halten Sie das Paddel vertikal und tauchen Sie das Blatt vollständig ein, um die Kraftübertragung zu maximieren.',
      problem:
        'Die meisten Paddler verwenden armdominierte Schläge, die Energie verschwenden und Schulterermüdung verursachen. Schlechte Technik macht das Board bei Wind und Kabbelwasser zudem schwer kontrollierbar.',
      solution:
        'Lernen Sie drei wesentliche Schläge — Vorwärts-, Ziehschlag und Kreuzbogenwende — mit korrekter Körpermechanik. Üben Sie jeden auf ruhigem Wasser, bevor Sie zu anspruchsvolleren Bedingungen übergehen.',
      audience: 'Paddler, die länger, schneller und mit weniger Ermüdung paddeln möchten.',
      steps: [
        'Vorwärtsschlag: nach vorn greifen, das Blatt vollständig einstechen, mit Rumpfrotation (nicht den Armen) zurückziehen, am Knöchel austreten',
        'Ziehschlag: am Schienenrand nach vorn greifen, das Blatt in weitem Bogen zum Heck führen, das Board von der Paddelseite wegdrehen',
        'Kreuzbogenwende: das Paddel ohne Handwechsel auf die gegenüberliegende Boardseite legen und zum Heck ziehen',
        'Stützen: bei Kabbelwasser eine tiefe Stütze für Stabilität nutzen — das Blatt flach auf die Wasseroberfläche schlagen',
        'Zugschlag: seitlich ausgreifen und das Board seitlich zum Paddel ziehen',
      ],
      faq: [
        {
          q: 'Wie paddle ich geradeaus?',
          a: 'Verwenden Sie auf beiden Seiten gleich lange Schläge. Wechseln Sie alle 5-10 Schläge die Seite. Fixieren Sie einen Punkt am Horizont als Referenz.',
        },
        {
          q: 'Sollte ich die Knie beugen?',
          a: 'Ja. Halten Sie die Knie leicht gebeugt als Stoßdämpfer. Gestreckte Knie übertragen jede Welle auf die Körpermitte und verringern die Stabilität.',
        },
        {
          q: 'Wie paddle ich gegen den Wind?',
          a: 'Gehen Sie tiefer in die Knie, verwenden Sie kürzere, schnellere Schläge und bleiben Sie näher am Ufer, wo der Wind oft schwächer ist. Ist der Wind zu stark, gehen Sie nicht raus.',
        },
      ],
    },
    'sup-fitness': {
      title: 'SUP-Fitness: Ganzkörpertraining auf dem Wasser',
      description: 'Wie Stand-up-Paddling Rumpfkraft, Gleichgewicht und Herz-Kreislauf-Fitness aufbaut.',
      tldr: 'SUP beansprucht bei jedem Schlag Körpermitte, Beine, Rücken und Schultern. Eine einstündige Session verbrennt 300-500 Kalorien. Paddeln gegen Wind oder Strömung verdoppelt die Intensität. SUP-Yoga ergänzt Flexibilitäts- und Gleichgewichtstraining.',
      problem:
        'Viele betrachten Paddeln als Freizeitbeschäftigung statt als ernsthaftes Fitnesswerkzeug und verpassen sein Potenzial für das Ganzkörpertraining.',
      solution:
        'Strukturieren Sie SUP-Sessions mit konkreten Fitnesszielen: Ausdauerpaddeln für Cardio, Intervallsprints für Kraft, SUP-Yoga für Flexibilität und Distanzpaddeln für muskuläre Ausdauer.',
      audience: 'Fitnessbegeisterte, die ein gelenkschonendes, hochmotivierendes Ganzkörpertraining suchen.',
      steps: [
        'Wärmen Sie sich an Land auf — Armkreisen, Rumpfdrehungen und Beinschwünge für 5 Minuten',
        'Beginnen Sie mit 10 Minuten gleichmäßigem Paddeln bei moderater Intensität',
        'Steigern Sie zu Intervalltraining — 2 Minuten kräftiges Paddeln, 2 Minuten leichte Erholung',
        'Integrieren Sie SUP-Yoga-Posen — herabschauender Hund, Krieger II und Baum auf dem Board',
        'Cooldown mit sanftem Paddeln und statischen Dehnungen auf dem Board',
      ],
      faq: [
        {
          q: 'Ist SUP für die Fitness besser als Laufen?',
          a: 'SUP bietet vergleichbare kardiovaskuläre Vorteile bei geringerer Gelenkbelastung. Zudem beansprucht es Oberkörper und Körpermitte stärker als Laufen.',
        },
        {
          q: 'Wie viele Kalorien verbrennt SUP?',
          a: 'Ungefähr 300-500 Kalorien pro Stunde bei moderater Intensität. Rennen oder Paddeln gegen den Wind kann 600-800 Kalorien pro Stunde verbrennen.',
        },
        {
          q: 'Kann ich mit SUP Muskeln aufbauen?',
          a: 'Ja. Paddeln baut Schulter-, Rücken- und Rumpfmuskulatur auf. Balancieren beansprucht Beine und Stabilisatormuskulatur. Es ist ein Ganzkörper-Krafttraining.',
        },
      ],
    },
    'sup-yoga': {
      title: 'SUP-Yoga: Ein vollständiger Leitfaden zu Paddeln und Yoga',
      description:
        'Kombinieren Sie Stand-up-Paddling mit Yoga für besseres Gleichgewicht, Kraft und Achtsamkeit auf dem Wasser.',
      tldr: 'SUP-Yoga fügt ein Instabilitätselement hinzu, das die Rumpfaktivierung im Vergleich zu Yoga an Land dramatisch erhöht. Beginnen Sie mit einfachen Posen auf einem breiten, stabilen Board in ruhigem Wasser. Nutzen Sie eine rutschfeste Deckauflage. Üben Sie SUP-Yoga niemals allein.',
      problem:
        'Traditionelle Yogamatten bieten eine perfekt stabile Fläche und nehmen die Gleichgewichtsherausforderung, die SUP-Yoga für Rumpfkraft und Konzentration so wirksam macht.',
      solution:
        'Verwenden Sie ein extra breites SUP-Board (34"+) mit Traktionsauflage über die volle Deckfläche. Üben Sie in ruhigem, flachem Wasser. Beginnen Sie mit Grundposen, bevor Sie Umkehrhaltungen versuchen.',
      audience: 'Yogapraktizierende und Paddler, die Gleichgewichtstraining mit Achtsamkeit verbinden möchten.',
      steps: [
        'Verankern Sie das Board in flachem, ruhigem Wasser — mit einem Sandanker oder festgemacht an einem Steg',
        'Beginnen Sie mit Sitzposen — leichter Sitz, Bootspose, sitzende Drehung',
        'Steigern Sie zu Knieposen — Tisch, Katze-Kuh, Donnerkeil',
        'Gehen Sie zu Stehposen über — Berg, Krieger I, Krieger II, Baum',
        'Üben Sie Gleichgewichtsposen — halber Mond, Adler, Tänzer',
        'Beenden Sie mit Savasana — liegen Sie flach auf dem Board und spüren Sie die Wasserbewegung',
      ],
      faq: [
        {
          q: 'Welches Board ist am besten für SUP-Yoga?',
          a: 'Ein breites Board (34"+) mit durchgehender Traktionsauflage bietet die stabilste Plattform. Das SUP Tour 12 bietet eine gute Balance aus Stabilität und Gleitverhalten.',
        },
        {
          q: 'Ist SUP-Yoga gefährlich?',
          a: 'Bei sicherer Ausübung nicht mehr als Yoga an Land. Nutzen Sie ruhiges, flaches Wasser. Tragen Sie eine Leash. Üben Sie mit einem Partner. Meiden Sie für Ihre ersten Sessions tiefes Wasser.',
        },
        {
          q: 'Brauche ich spezielle Ausrüstung?',
          a: 'Ein breites, stabiles Board, Traktionsauflage über die volle Deckfläche, Leash und PFD. Manche Praktizierende verwenden für zusätzlichen Halt eine wasserdichte Matte.',
        },
      ],
    },
    'sup-fishing': {
      title: 'SUP-Angelleitfaden: So angeln Sie vom Paddle-Board',
      description:
        'Alles, was Sie über das Angeln vom Paddle-Board wissen müssen — Ausrüstungsaufbau, Stabilitätstipps und Techniken.',
      tldr: 'SUP-Angeln bietet lautlose Annäherung, Zugang zu flachem Wasser und 360-Grad-Wurf. Nutzen Sie ein breites, stabiles Board (34"+), montieren Sie Rutenhalter und verwenden Sie eine Kühlbox oder Kiste als Ausrüstungsdeck. Verankern Sie bei Wind. Tragen Sie immer einen PFD.',
      problem:
        'Standardanglerboote sind teuer in der Wartung und können flaches Wasser nicht erreichen. Kajaks schränken die Beweglichkeit ein. SUP-Angeln löst beide Probleme, erfordert aber spezifische Ausrüstungsanpassungen.',
      solution:
        'Rüsten Sie ein stabiles SUP mit Rutenhaltern, einer Ausrüstungskiste und einem Ankersystem aus. Nutzen Sie die Mobilität des Boards, um abgelegene Angelplätze zu erreichen, die Boote nicht anfahren können.',
      audience:
        'Angler, die in flachen Gewässern und abgelegenen Lagen fischen möchten oder eine leichte, tragbare Angelplattform bevorzugen.',
      steps: [
        'Wählen Sie ein breites Board (34"+) mit hoher Gewichtskapazität für die Ausrüstung',
        'Montieren Sie Rutenhalter am Deck — mit Schienen- oder Riemensystemen',
        'Verwenden Sie eine wasserdichte Kiste oder Kühlbox, die auf dem vorderen Deck festgezurrt wird, für das Tackle',
        'Bringen Sie einen kleinen Anker oder eine Ankerstange für windige Bedingungen mit',
        'Tragen Sie einen PFD mit Taschen für Werkzeug und Handy',
        'Üben Sie das Werfen zunächst aus kniender Position, bevor Sie aufstehen',
      ],
      faq: [
        {
          q: 'Kann ich auf einem SUP stehen und angeln?',
          a: 'Ja. Ein Board mit 34"+ Breite bietet ausreichend Stabilität zum Stehen und Werfen. Üben Sie zuerst auf ruhigem Wasser.',
        },
        {
          q: 'Welche Fische kann ich von einem SUP aus befischen?',
          a: 'SUPs sind hervorragend für Barsch in Seen, Rotbarsch auf Flats, Forellen in Flüssen und Küstenarten in Buchten und Flussmündungen geeignet.',
        },
        {
          q: 'Wie lande ich einen Fisch vom SUP aus?',
          a: 'Gehen Sie für die Stabilität in die Knie. Verwenden Sie einen Kescher oder Lippengreifer. Halten Sie den Fisch tief, um Stürze zu vermeiden. Freilassen oder in der Kühlbox sichern.',
        },
      ],
    },
    'inflatable-repair': {
      title: 'So reparieren Sie Ihr aufblasbares Boot oder SUP',
      description:
        'Schritt-für-Schritt-Anleitung zur Reparatur von Einstichen, Ventilproblemen und Nahtschäden an aufblasbaren Wasserfahrzeugen.',
      tldr: 'Kleine Einstiche (unter 1/4") lassen sich mit dem mitgelieferten Flickenset reparieren. Reinigen Sie die Stelle, tragen Sie PVC-Kleber auf, drücken Sie den Flicken an und warten Sie 24 Stunden. Ventillecks erfordern meist einen O-Ring-Tausch. Große Risse oder Nahtablösungen brauchen Fachservice.',
      problem:
        'Kleine Einstiche und Ventilprobleme sind häufig, aber leicht zu beheben. Ohne richtige Reparaturtechnik bezahlt man entweder zu viel für Fachservice oder macht den Schaden schlimmer.',
      solution:
        'Bestimmen Sie die Schadensart — Einstich, Ventilleck oder Nahtproblem — und wenden Sie die passende Reparaturmethode an. Die meisten Reparaturen dauern 30 Minuten plus Trocknungszeit.',
      audience: 'Besitzer aufblasbarer SUPs, Kajaks und Boote, die einfache Reparaturen selbst durchführen möchten.',
      steps: [
        'Lokalisieren Sie das Leck — vollständig aufpumpen, auf Luftgeräusche hören, mit der Hand fühlen oder Seifenwasser verwenden',
        'Markieren Sie das Leck mit Stift oder Klebeband',
        'Reinigen Sie die Umgebung des Lecks mit Isopropylalkohol — mindestens 5 cm rund um den Schaden',
        'Rauen Sie die Oberfläche mit feinem Schleifpapier an, um die Klebeverbindung zu verbessern',
        'Tragen Sie PVC-Kleber sowohl auf den Flicken als auch auf die Boardoberfläche auf',
        'Warten Sie 5 Minuten, bis der Kleber klebrig wird',
        'Drücken Sie den Flicken fest an und rollen Sie Luftblasen mit einer Rolle oder Kreditkarte heraus',
        'Lassen Sie 24 Stunden aushärten, bevor Sie auf vollen Druck aufpumpen',
      ],
      faq: [
        {
          q: 'Kann ich einen Einstich auf dem Wasser reparieren?',
          a: 'Notreparaturen mit Flicken und Klebeband bringen Sie zurück ans Ufer. Vollständige Reparaturen erfordern trockene Bedingungen und 24 Stunden Aushärtezeit.',
        },
        {
          q: 'Wie behebe ich ein leckendes Ventil?',
          a: 'Entfernen Sie den Ventilkern mit dem mitgelieferten Werkzeug, prüfen Sie den O-Ring auf Schäden, tauschen Sie ihn bei Bedarf aus und setzen Sie den Kern wieder fest ein.',
        },
        {
          q: 'Welchen Kleber sollte ich für PVC-Reparaturen verwenden?',
          a: 'Verwenden Sie PVC-spezifischen Kleber wie HH-66 oder Clifton. Normaler Sekundenkleber verbindet sich nicht gut mit aufblasbaren PVC-Materialien.',
        },
      ],
    },
    'kayak-techniques': {
      title: 'Essentielle Kajak-Paddeltechniken',
      description:
        'Meistern Sie das Kajakpaddeln — Vorwärtsschlag, Ziehschlag, Kanten und Stützen für effizientes und sicheres Kajakfahren.',
      tldr: 'Der Vorwärtsschlag im Kajak nutzt Rumpfrotation, nicht die Arme. Der Ziehschlag dreht das Kajak. Kanten verbessert die Wendigkeit. Die tiefe Stütze verhindert Kenterungen bei Wellen. Halten Sie den Paddelschaft vertikal und das Blatt vollständig untergetaucht.',
      problem:
        'Ineffiziente Paddeltechnik verursacht Schulterermüdung, langsamen Fortschritt und Schwierigkeiten, das Kajak bei Wind und Strömung zu kontrollieren.',
      solution:
        'Lernen Sie eine saubere, rumpfgetriebene Paddeltechnik mit vier wesentlichen Schlägen — Vorwärts-, Rückwärts-, Ziehschlag und Stütze.',
      audience:
        'Anfänger und fortgeschrittene Kajakfahrer, die mit weniger Anstrengung und mehr Kontrolle paddeln möchten.',
      steps: [
        'Vorwärtsschlag: Rumpf rotieren, das Blatt nahe den Füßen einstechen, an der Hüfte vorbeiziehen, an der Hüfte austreten',
        'Rückwärtsschlag: das Blatt hinter sich einstechen und nach vorn drücken, um zu bremsen oder rückwärts zu fahren',
        'Ziehschlag: nach vorn greifen, das Blatt in weitem Bogen zum Heck führen, das Kajak drehen',
        'Tiefe Stütze: das Blatt flach auf die Wasseroberfläche schlagen, um bei Wellen stabil zu bleiben',
        'Kanten: das Kajak leicht auf die Kante kippen, um Kurven zu ziehen',
      ],
      faq: [
        {
          q: 'Wie halte ich mein Kajak geradeaus?',
          a: 'Verwenden Sie gleichmäßige Schläge auf abwechselnden Seiten. Lernen Sie den J-Schlag (ein leichter Haken am Ende des Vorwärtsschlags) zur Kurskorrektur ohne Seitenwechsel.',
        },
        {
          q: 'Was ist die häufigste Kajakverletzung?',
          a: 'Schulterbelastung durch armdominiertes Paddeln. Nutzen Sie Rumpfrotation, um die großen Rückenmuskeln zu aktivieren und die Schulter zu entlasten.',
        },
        {
          q: 'Wie paddle ich bei Wind?',
          a: 'Halten Sie den Bug in den Wind. Verwenden Sie kürzere, kräftigere Schläge. Bei Seitenwind kanten Sie das Kajak leicht in den Wind.',
        },
      ],
    },
    'multi-day-trip': {
      title: 'Planung einer mehrtägigen Kajak- oder SUP-Tour',
      description:
        'So planen und durchführen Sie eine mehrtägige Paddeltour — Routenplanung, Ausrüstungspacken, Camping und Sicherheit.',
      tldr: 'Planen Sie 10-15 Meilen pro Tag. Packen Sie die Ausrüstung in wasserdichte Drybags, verteilen Sie das Gewicht gleichmäßig und üben Sie das Beladen Ihres Boards oder Kajaks vor der Tour. Melden Sie Ihren Plan. Führen Sie Wasser, Essen, Unterkunft, Navigation und Kommunikation mit.',
      problem:
        'Mehrtägige Touren scheitern an Überpacken, schlechter Routenplanung oder Unterschätzung von Wetter und Strömung — mit Erschöpfung, Ausrüstungsversagen oder Sicherheitsvorfällen als Folge.',
      solution:
        'Nutzen Sie einen systematischen Planungsansatz: Routenauswahl, Ausrüstungscheckliste, Essensplanung, Sicherheitsbriefing und Notfallplanung.',
      audience: 'Erfahrene Paddler, die ihre erste mehrtägige Expedition planen.',
      steps: [
        'Wählen Sie eine Route mit etablierten Campingplätzen und Ausstiegspunkten',
        'Planen Sie 10-15 Meilen pro Tag unter Berücksichtigung von Wind und Strömung',
        'Prüfen Sie Gezeitentabellen und Wettervorhersagen für das gesamte Tourenfenster',
        'Packen Sie die Ausrüstung in wasserdichte Drybags — insgesamt 20-30 lbs Ausrüstungsgewicht',
        'Verteilen Sie das Gewicht gleichmäßig — die schwersten Gegenstände in die Mitte',
        'Melden Sie jemandem am Ufer einen detaillierten Tourplan',
        'Bringen Sie Navigation mit — Papierkarte, Kompass und GPS als Backup',
        'Packen Sie Notunterkunft, zusätzliche Verpflegung und ein Erste-Hilfe-Set ein',
      ],
      faq: [
        {
          q: 'Was ist die ideale Tagesdistanz?',
          a: '10-15 Meilen pro Tag für erfahrene Paddler. Anfänger sollten 5-8 Meilen einplanen. Bauen Sie immer Zeitpuffer für das Wetter ein.',
        },
        {
          q: 'Wie viel Wasser sollte ich mitführen?',
          a: '1 Gallone pro Person und Tag. Bei Hitze 1,5 Gallonen. Führen Sie für Auffüllungen einen Wasserfilter oder Reinigungstabletten mit.',
        },
        {
          q: 'Was ist der wichtigste Sicherheitsgegenstand?',
          a: 'Kommunikation. Ein VHF-Funkgerät oder Satelliten-Messenger kann im Notfall Leben retten. Handys sind in abgelegenen Gebieten unzuverlässig.',
        },
      ],
    },
    'choosing-paddle': {
      title: 'So wählen Sie das richtige Paddel für SUP und Kajak',
      description: 'Ein Leitfaden zu Paddelmaterialien, Blattformen, Schafttypen und Größen für SUP und Kajakfahren.',
      tldr: 'Paddellänge: SUP-Paddel sollten 6-8" größer als Ihre Körpergröße sein. Kajakpaddel hängen von Bootsbreite und Rumpflänge ab. Blattform: Dihedral-Blätter laufen gerade, flache Blätter bieten mehr Wasserfassung. Schaftmaterial: Carbon ist am leichtesten, Fiberglas hat das beste Preis-Leistungs-Verhältnis, Aluminium ist das Budgetmodell.',
      problem:
        'Falsche Paddelgröße oder falsches Material verursachen unnötige Ermüdung, schlechte Schlageffizienz und Gelenkbelastung.',
      solution:
        'Passen Sie Paddellänge, Blattform, Schaftmaterial und Flex an Ihren Paddelstil, Ihre Körpergröße und Ihr Budget an.',
      audience: 'SUP- und Kajakpaddler, die ihr erstes oder nächstes Paddel wählen.',
      steps: [
        'Für SUP: Paddelhöhe messen — 6-8" größer als Ihre Körpergröße für allgemeines Paddeln',
        'Für Kajak: Rumpflänge und Bootsbreite messen — schmalere Boote benötigen kürzere Paddel',
        'Blattmaterial wählen — Nylon fürs Budget, Fiberglas fürs Preis-Leistungs-Verhältnis, Carbon für Performance',
        'Blattform wählen — Dihedral für sauberen Geradeauslauf, flach für Kraft, Löffelform fürs Rennen',
        'Schafttyp wählen — gerade für SUP, gebogen für Renn-SUP, Standard für Kajak',
        'Flex prüfen — steifere Schäfte übertragen mehr Kraft, flexible Schäfte reduzieren die Gelenkbelastung',
      ],
      faq: [
        {
          q: 'Was ist das beste Paddelmaterial?',
          a: 'Fiberglas bietet die beste Balance aus Gewicht, Haltbarkeit und Kosten. Carbon ist leichter, aber teurer und spröder. Nylon ist schwer, aber praktisch unzerstörbar.',
        },
        {
          q: 'Woher weiß ich, ob mein Paddel die richtige Länge hat?',
          a: 'Für SUP: Stellen Sie das Paddel senkrecht neben sich — der Griff sollte Ihr Handgelenk erreichen, wenn der Arm über den Kopf gehoben ist. Für Kajak: Das Blatt sollte ohne Überstrecken in bequemem Winkel ins Wasser eintauchen.',
        },
        {
          q: 'Sollte ich ein einteiliges oder ein verstellbares Paddel nehmen?',
          a: 'Verstellbare Paddel eignen sich für gemeinsame Nutzung und Reisen. Einteilige Paddel sind leichter, steifer und für den eigenen Dauereinsatz effizienter.',
        },
      ],
    },
    'sup-with-kids': {
      title: 'SUP mit Kindern: Ein kompletter Familienleitfaden',
      description:
        'So nehmen Sie Kinder sicher zum Stand-up-Paddling mit — Altersempfehlungen, Ausrüstung und Aktivitäten.',
      tldr: 'Kinder ab 6 Jahren können mit einem Erwachsenen auf einem SUP mitfahren. Kinder ab 10 Jahren können mit Aufsicht ein eigenes Board paddeln. Nutzen Sie ein breites, stabiles Board, tragen Sie immer PFDs, bleiben Sie in flachem ruhigem Wasser und halten Sie die Sessions kurz (maximal 30-45 Minuten).',
      problem:
        'Eltern möchten Wassersport mit ihren Kindern teilen, sorgen sich aber um Sicherheit, passende Ausrüstung und darum, die Kinder bei Laune zu halten.',
      solution:
        'Nutzen Sie die richtige Boardgröße für das Tandempaddeln, stellen Sie sicher, dass jedes Kind eine richtig sitzende Schwimmweste trägt, beginnen Sie in flachem warmem Wasser und sorgen Sie mit Spielen und kurzen Sessions für Spaß.',
      audience: 'Eltern, die ihre Kinder an das Stand-up-Paddling heranführen möchten.',
      steps: [
        'Alter 4-6: als Passagier auf dem Board eines Erwachsenen mitfahren — vorn sitzen und den mittleren Griff festhalten',
        'Alter 6-10: auf dem eigenen Board knien oder sitzen, mit Aufsicht eines Erwachsenen und Leash',
        'Alter 10+: das eigene Board paddeln, mit Erwachsenenaufsicht in der Nähe',
        'Immer einen PFD tragen — Kinder müssen jederzeit eine richtig sitzende Schwimmweste tragen',
        'In flachem Wasser bleiben (hüfttief für den Erwachsenen)',
        'Sessions kurz halten — maximal 30-45 Minuten für Kinder unter 10',
        'Für Spaß sorgen — Spiele spielen, nach Fischen Ausschau halten, Aufstehen üben',
      ],
      faq: [
        {
          q: 'Ab welchem Alter kann ein Kind allein SUP fahren?',
          a: 'Etwa ab 10-12 Jahren mit Aufsicht, abhängig von Schwimmfähigkeit und Sicherheitsgefühl des Kindes im Wasser. Immer bei ruhigen, flachen Bedingungen.',
        },
        {
          q: 'Welches Board ist am besten für SUP mit Kindern?',
          a: 'Ein breites Board (34"+) mit hoher Gewichtskapazität fürs Tandempaddeln. Das SUP Explorer 11 mit 33" Breite und 220 lbs Kapazität eignet sich gut für Elternteil plus Kind.',
        },
        {
          q: 'Welche Sicherheitsausrüstung brauchen Kinder?',
          a: 'Eine richtig sitzende, CE-zertifizierte Schwimmweste, eine Leash (beim Tandempaddeln am Board des Erwachsenen befestigt), Sonnenschutz und einen Hut.',
        },
      ],
    },
  },
  es: {
    'how-to-choose-your-sup': {
      title: 'Cómo elegir tu tabla de SUP',
      description:
        'Una guía completa para elegir la tabla de paddle surf (SUP) adecuada según tu nivel de habilidad, las condiciones del agua y el uso previsto.',
      tldr: 'Elige tu SUP según tu nivel de habilidad, el tipo de agua y el uso principal. Las tablas todo terreno (All-Around) son adecuadas para principiantes y aguas tranquilas. Las tablas de travesía (Touring) sirven para remar largas distancias. Las tablas de yoga ofrecen mayor anchura para la estabilidad. Las tablas de rendimiento funcionan para remeros experimentados en condiciones variadas.',
      problem:
        'La mayoría de los compradores primerizos eligen una tabla de SUP por el precio o la apariencia en lugar de por cómo y dónde van a remar realmente. Esto provoca poca estabilidad, un rendimiento insuficiente y una experiencia frustrante.',
      solution:
        'Ajusta la forma, el volumen y la construcción de la tabla a tu nivel de habilidad y a tu entorno acuático principal. Las tablas más anchas (32-34") ofrecen estabilidad para principiantes. Las tablas más largas (12-14") mantienen mejor el rumbo para la travesía. La construcción drop-stitch a 12-15 PSI proporciona una rigidez comparable a la de una tabla rígida.',
      audience:
        'Compradores primerizos de SUP, remeros recreativos y cualquier persona que quiera mejorar su tabla básica.',
      steps: [
        'Identifica tu entorno acuático principal: lago, océano, río o mixto',
        'Ajusta la anchura de la tabla a tu nivel: 32-34" para principiantes, 30-32" para intermedios, 28-30" para avanzados',
        'Elige la longitud de la tabla según el uso: más corta para maniobrabilidad, más larga para mantener el rumbo y la velocidad',
        'Selecciona la construcción: inflable drop-stitch para portabilidad, tabla rígida para máximo rendimiento',
        'Comprueba la capacidad de peso: tu peso más el equipo no debe superar el 80% del límite de la tabla',
        'Revisa los accesorios incluidos: bomba, leash (correa), aleta, mochila y kit de reparación',
      ],
      faq: [
        {
          q: '¿Qué anchura de SUP es la mejor para principiantes?',
          a: 'De 32 a 34 pulgadas de ancho proporciona la plataforma más estable para aprender. La SUP Explorer 11, con 33" de anchura, es ideal para quienes se inician en aguas tranquilas.',
        },
        {
          q: '¿Tabla de SUP inflable o rígida?',
          a: 'Las tablas inflables ofrecen portabilidad, facilidad de almacenamiento y absorción de impactos. Las tablas rígidas ofrecen máxima rigidez y velocidad. Para la mayoría de los usuarios recreativos, una inflable de calidad con núcleo drop-stitch es la opción práctica.',
        },
        {
          q: '¿A cuántos PSI debo inflar?',
          a: 'Las tablas Aquafarer recomiendan 12-15 PSI. A 15 PSI la tabla alcanza la máxima rigidez, comparable a una tabla rígida. Mantente siempre dentro del rango de presión indicado impreso en la tabla.',
        },
      ],
    },
    'beginner-guide': {
      title: 'Guía para principiantes del paddle surf',
      description:
        'Todo lo que necesitas saber antes de tu primera sesión de paddle surf: desde el montaje del equipo hasta las técnicas básicas de remada.',
      tldr: 'Comienza en aguas tranquilas y planas con una tabla ancha y estable. Infla a 12-15 PSI, coloca el leash y usa la longitud correcta de pala (6-8" más alta que tu estatura). Mantén los pies a la anchura de los hombros, las rodillas ligeramente flexionadas y la mirada en el horizonte.',
      problem:
        'Los principiantes suelen saltarse la preparación básica (longitud incorrecta de la pala, mala postura o elegir aguas agitadas), lo que provoca caídas, frustración y desánimo.',
      solution:
        'Sigue un plan estructurado para la primera sesión: elige aguas tranquilas, monta el equipo correctamente, practica arrodillado antes de ponerte de pie y domina la remada de avance antes de intentar giros.',
      audience: 'Principiantes absolutos que nunca han hecho paddle surf.',
      steps: [
        'Elige agua plana y tranquila sin tráfico de embarcaciones: un lago pequeño o una bahía resguardada es ideal',
        'Infla tu tabla a 12-15 PSI con la bomba de doble acción',
        'Coloca el leash de espiral en el tobillo o la pantorrilla, nunca en el asa de la tabla',
        'Inserta la aleta y aprieta el tornillo',
        'Ajusta la longitud de la pala: debe ser de 6 a 8 pulgadas más alta que tu estatura',
        'Empieza arrodillado en la tabla y rema unas cuantas paladas para sentir el equilibrio',
        'Ponte de pie de un pie a la vez, con los pies a la anchura de los hombros y las rodillas flexibles',
        'Mira el horizonte, no tus pies: la tabla va hacia donde miras',
      ],
      faq: [
        {
          q: '¿Qué debo llevar para hacer paddle surf?',
          a: 'Ropa deportiva de secado rápido, chaleco salvavidas, protector solar y sombrero. En agua fría, usa traje de neopreno. Lleva siempre el leash y un teléfono en funda impermeable.',
        },
        {
          q: '¿Cómo vuelvo a subir a la tabla si me caigo?',
          a: 'Mantén la calma. Nada hasta la tabla, agarra el asa central y patalea mientras te impulsas hacia arriba sobre la tabla en un solo movimiento. Vuelve primero a la posición de rodillas y luego ponte de pie.',
        },
        {
          q: '¿Qué condiciones de viento son seguras?',
          a: 'Para principiantes: vientos inferiores a 10 mph (5 nudos). Si el viento sopla desde la orilla hacia el mar, no salgas. Consulta el pronóstico y entiende que el viento de tierra es peligroso.',
        },
      ],
    },
    'safety-tips': {
      title: 'Consejos de seguridad para deportes acuáticos',
      description:
        'Pautas de seguridad esenciales para el paddle surf, el kayak y la navegación: desde la revisión del equipo hasta la atención al clima.',
      tldr: 'Lleva siempre un chaleco salvavidas certificado CE, comprueba el clima y las condiciones del agua antes de salir, lleva dispositivos de comunicación, nunca remes solo en aguas desconocidas y conoce los límites de tu equipo.',
      problem:
        'La mayoría de los accidentes en deportes acuáticos se deben a una preparación insuficiente: no llevar chaleco salvavidas, ignorar las alertas meteorológicas o usar el equipo más allá de sus límites de diseño.',
      solution:
        'Adopta una lista de verificación de seguridad antes de salir: revisa el estado del equipo, comprueba el clima y la temperatura del agua, informa a alguien de tu ruta y lleva siempre la flotación adecuada.',
      audience: 'Todos los participantes en deportes acuáticos: usuarios de SUP, kayak, botes y lanchas RIB.',
      steps: [
        'Consulta el pronóstico del tiempo: evita vientos superiores a 15 mph y tormentas eléctricas',
        'Comprueba la temperatura del agua: en agua fría (<60°F/15°C) se necesita traje de neopreno o traje seco',
        'Inspecciona el equipo: revisa fugas, grietas y el inflado correcto',
        'Lleva siempre un chaleco salvavidas certificado CE',
        'Coloca el leash (SUP) o asegura todo el equipo suelto (kayak/barco)',
        'Comunica tu plan de navegación: di a alguien a dónde vas y cuándo volverás',
        'Lleva comunicación: funda impermeable para el teléfono o radio VHF',
        'Conoce tus límites: quédate dentro de tu nivel de habilidad y de las clasificaciones de tu equipo',
      ],
      faq: [
        {
          q: '¿Necesito chaleco salvavidas en un SUP?',
          a: 'Sí. Muchas jurisdicciones exigen legalmente un chaleco salvavidas en cualquier embarcación, incluidos los SUP. Aunque no sea obligatorio, un chaleco certificado CE es un equipo de seguridad esencial.',
        },
        {
          q: '¿Cuál es la lesión más común en los deportes acuáticos?',
          a: 'La inmersión en agua fría y el agotamiento son los riesgos graves más comunes. Vístete siempre para la temperatura del agua, no para la del aire.',
        },
        {
          q: '¿Cómo compruebo si las condiciones son seguras?',
          a: 'Usa los pronósticos meteorológicos marinos. Comprueba la velocidad del viento, la altura de las olas y la temperatura del agua. Los principiantes deben permanecer con vientos inferiores a 10 mph y olas de menos de 1 pie.',
        },
      ],
    },
    'inflatable-vs-hard': {
      title: 'Tablas SUP inflables vs rígidas: ¿cuál deberías elegir?',
      description:
        'Una comparación objetiva entre tablas SUP inflables y rígidas que abarca rendimiento, portabilidad, durabilidad y relación calidad-precio.',
      tldr: 'Las tablas inflables ganan en portabilidad, almacenamiento y resistencia a los impactos. Las rígidas ganan en máxima rigidez y velocidad. Las inflables modernas drop-stitch a 15 PSI cubren el 90% de la diferencia de rendimiento.',
      problem:
        'Los compradores dudan entre la comodidad de las tablas inflables y la reputación de rendimiento de las rígidas, sin datos claros sobre cómo se comparan realmente.',
      solution:
        'Compara criterios concretos (rigidez, peso, tamaño plegado, durabilidad, reparación y coste) según tu patrón de uso real. Para la mayoría de los remeros recreativos, una inflable de calidad es la mejor opción.',
      audience: 'Compradores de SUP que deciden entre construcción inflable y rígida.',
      steps: [
        'Evalúa tus necesidades de portabilidad: la inflable se pliega al tamaño de una mochila, la rígida requiere baca en el techo',
        'Compara la rigidez: la inflable a 15 PSI tiene flexión mínima, la rígida no tiene ninguna',
        'Valora el almacenamiento: la inflable se guarda en un armario, la rígida requiere garaje o espacio en un soporte',
        'Considera la durabilidad: la inflable absorbe los impactos, la rígida puede abollarse y agrietarse',
        'Ten en cuenta la reparación: los parches en las inflables son sencillos, las reparaciones de las rígidas requieren trabajo profesional',
        'Comprueba el rendimiento: las rígidas tienen una ligera ventaja de velocidad, las inflables ofrecen mejor absorción de impactos',
      ],
      faq: [
        {
          q: '¿Son las SUP inflables tan rígidas como las tablas duras?',
          a: 'A 15 PSI con construcción drop-stitch, la diferencia de rigidez es mínima para uso recreativo. Solo los remeros de competición y los surfistas notarán la diferencia.',
        },
        {
          q: '¿Cuánto dura una SUP inflable?',
          a: 'Con los cuidados adecuados, de 5 a 10 años. El PVC de grado náutico resiste los rayos UV y la abrasión. Guárdala fuera de la luz solar directa cuando no la uses y aclárala con agua dulce después del uso en agua salada.',
        },
        {
          q: '¿Puedo usar una SUP inflable para surfear?',
          a: 'Sí, pero las inflables son mejores para olas pequeñas o moderadas (menos de 3 pies). Para surfear en serio, una tabla rígida ofrece mejor respuesta y apoyo del canto (rail).',
        },
      ],
    },
    'weather-conditions': {
      title: 'Comprender las condiciones meteorológicas para el paddle surf',
      description:
        'Aprende a leer el viento, las olas, las mareas y los patrones meteorológicos para tomar decisiones seguras en el agua.',
      tldr: 'Comprueba tres cosas antes de cada salida: la velocidad del viento (menos de 10 mph para principiantes), la altura de las olas (menos de 1 pie para principiantes) y la temperatura del agua (vístete para el agua, no para el aire). El viento de tierra es peligroso a cualquier nivel.',
      problem:
        'La mayoría de los accidentes relacionados con el clima ocurren porque los remeros juzgan mal las condiciones: comprueban la temperatura del aire pero no la del agua, o no entienden que el viento de tierra puede arrastrarlos mar adentro.',
      solution:
        'Usa una evaluación meteorológica estructurada antes de salir: dirección y velocidad del viento, período y altura de las olas, estado de la marea y temperatura del agua. Entiende cómo afecta cada factor a tu seguridad.',
      audience: 'Todos los remeros que salen a aguas abiertas: lagos, bahías, ríos y océano.',
      steps: [
        'Comprueba la velocidad y dirección del viento: el viento de tierra (que sopla de la costa al mar) es el más peligroso',
        'Evalúa las condiciones de las olas: el período de la ola importa tanto como su altura',
        'Conoce la marea: las corrientes de marea pueden ser más fuertes que tu velocidad de remada',
        'Mide la temperatura del agua: por debajo de 60°F/15°C se requiere protección térmica',
        'Comprueba la visibilidad: la niebla y la lluvia intensa reducen la visibilidad y aumentan el riesgo de colisión',
        'Conoce los peligros locales: rocas sumergidas, corrientes fuertes y zonas de tráfico de embarcaciones',
      ],
      faq: [
        {
          q: '¿Qué velocidad de viento es demasiado alta para el SUP?',
          a: 'Principiantes: más de 10 mph (8 nudos). Intermedios: más de 15 mph (13 nudos). Avanzados: más de 20 mph (17 nudos). Ante la duda, no salgas.',
        },
        {
          q: '¿Qué significa el período de la ola?',
          a: 'El período de la ola es el tiempo entre olas sucesivas. Períodos cortos (menos de 8 segundos) significan olas empinadas y cortas. Períodos largos (más de 12 segundos) significan oleaje más suave y predecible.',
        },
        {
          q: '¿Puedo remar bajo la lluvia?',
          a: 'La lluvia ligera suele ser segura. La lluvia intensa reduce la visibilidad y puede indicar cambios en el viento. Las tormentas eléctricas requieren salir del agua de inmediato.',
        },
      ],
    },
    'understanding-specs': {
      title: 'Cómo leer las especificaciones de una tabla de SUP',
      description:
        'Una guía técnica para entender las especificaciones de las tablas SUP: volumen, dimensiones, construcción y su significado para el rendimiento.',
      tldr: 'Especificaciones clave: el volumen (litros) determina la flotabilidad y la capacidad de peso, la anchura determina la estabilidad, la longitud determina el rumbo y la velocidad, el grosor determina la rigidez y la clasificación PSI determina la presión de inflado para un rendimiento óptimo.',
      problem:
        'Las fichas técnicas listan números sin contexto, dejando a los compradores sin saber qué especificaciones importan realmente para su caso de uso.',
      solution:
        'Traduce cada especificación a rendimiento real: el volumen para la flotación, la anchura para la estabilidad, la longitud para el deslizamiento, el grosor para la rigidez y la construcción para la durabilidad.',
      audience: 'Remeros intermedios y compradores técnicos que quieren tomar decisiones basadas en datos.',
      steps: [
        'Comprueba el volumen (litros): tu peso más el equipo no debe superar el 80% de la clasificación de volumen de la tabla',
        'Comprueba la anchura: más ancha (32-34") = más estabilidad, más estrecha (28-30") = más velocidad',
        'Comprueba la longitud: más larga (12-14") = mejor rumbo, más corta (10-11") = mejor maniobrabilidad',
        'Comprueba el grosor: 6" es estándar, 8" ofrece más rigidez y capacidad de peso',
        'Comprueba la clasificación PSI: infla al PSI máximo indicado para una rigidez óptima',
        'Comprueba los materiales de construcción: densidad del drop-stitch, capas de PVC y refuerzo de los raíles',
      ],
      faq: [
        {
          q: '¿Qué significa drop-stitch?',
          a: 'Drop-stitch es un método de construcción en el que miles de hilos conectan las capas superior e inferior de la tabla. Esto permite un inflado a alta presión (12-15 PSI) para una rigidez extrema.',
        },
        {
          q: '¿Cuál es la relación peso-volumen ideal?',
          a: 'Un buen objetivo es aproximadamente 5-6 libras de peso del remero por litro de volumen de la tabla. Un remero de 220 libras debe buscar tablas con 180+ litros de volumen.',
        },
        {
          q: '¿Importa el peso de la tabla?',
          a: 'Sí. Las tablas más ligeras (menos de 20 libras) son más fáciles de cargar y transportar. Las más pesadas (25+ libras) suelen indicar una construcción de PVC multicapa más duradera.',
        },
      ],
    },
    'sup-maintenance': {
      title: 'Cómo limpiar y guardar tu SUP inflable',
      description: 'Guía de mantenimiento paso a paso para maximizar la vida útil de tu tabla de SUP inflable.',
      tldr: 'Aclara con agua dulce después de cada uso, seca completamente antes de guardarla, desinfla y enrolla sin apretar demasiado (no tipo militar), guárdala en un lugar fresco y seco alejado de la luz solar directa y revisa las costuras cada mes.',
      problem:
        'El almacenamiento y la limpieza inadecuados son las principales causas de fallos prematuros en los SUP inflables: moho, daños por rayos UV y deslaminación de las costuras.',
      solution:
        'Sigue una rutina constante después de cada sesión: aclarar, secar, inspeccionar, desinflar y guardar. Usa jabón suave para la suciedad difícil. Nunca guardes la tabla mojada o bajo la luz solar directa.',
      audience: 'Todos los propietarios de SUP inflables que quieren que su tabla dure 5 años o más.',
      steps: [
        'Aclara la tabla con agua dulce inmediatamente después del uso, especialmente tras el agua salada',
        'Limpia con jabón suave y una esponja blanda: evita productos químicos agresivos y las hidrolavadoras',
        'Seca la tabla por completo: abre la válvula para que escape el agua atrapada',
        'Inspecciona si hay daños: revisa costuras, válvula y superficie en busca de pinchazos',
        'Desinfla por completo: retira el núcleo de la válvula para un desinflado total',
        'Enrolla la tabla sin apretar: empieza por la proa y evita los pliegues marcados',
        'Guárdala en la bolsa de transporte, en un lugar fresco y seco, alejada de la luz solar directa',
      ],
      faq: [
        {
          q: '¿Puedo dejar mi SUP inflado toda la temporada?',
          a: 'Sí, pero mantenla fuera de la luz solar directa cuando no la uses. Se recomienda un desinflado parcial (8-10 PSI) para el almacenamiento prolongado.',
        },
        {
          q: '¿Cómo reparo un pinchazo?',
          a: 'Limpia la zona, corta un parche con esquinas redondeadas, aplica el adhesivo, presiona con firmeza y espera 24 horas antes de inflar. Las tablas Aquafarer incluyen un kit de reparación.',
        },
        {
          q: '¿Con qué frecuencia debo revisar la válvula?',
          a: 'Cada mes. La válvula es el punto de fallo más común. Comprueba que el pasador de la válvula se mueve con libertad y que la junta tórica (O-ring) está intacta.',
        },
      ],
    },
    'paddling-techniques': {
      title: 'Técnicas esenciales de remada en SUP',
      description:
        'Domina la remada de avance, la remada en barrido y el giro cruzado (cross-bow turn) para remar con eficiencia en cualquier condición.',
      tldr: 'La remada de avance usa el core, no los brazos. La remada en barrido gira la tabla. El giro cruzado es el pivote más eficiente. Mantén la pala vertical y sumerge la pala por completo para una máxima transferencia de potencia.',
      problem:
        'La mayoría de los remeros usan remadas dominadas por los brazos que desperdician energía y provocan fatiga en los hombros. La mala técnica también hace difícil controlar la tabla con viento y mar de fondo.',
      solution:
        'Aprende tres remadas esenciales (avance, barrido y giro cruzado) con la mecánica corporal correcta. Practica cada una en aguas tranquilas antes de pasar a condiciones exigentes.',
      audience: 'Remeros que quieren remar más tiempo, más rápido y con menos fatiga.',
      steps: [
        'Remada de avance: estira el brazo hacia delante, planta la pala por completo, tira hacia atrás con la rotación del torso (no con los brazos) y saca la pala a la altura del tobillo',
        'Remada en barrido: estira hacia delante por el raíl, barre la pala en un arco amplio hacia la popa y gira la tabla en dirección opuesta al lado de la pala',
        'Giro cruzado (cross-bow turn): coloca la pala en el lado contrario de la tabla sin cambiar de mano y tira hacia la popa',
        'Apoyo (brace): usa un apoyo bajo para estabilidad con mar de fondo: golpea la pala plana contra la superficie del agua',
        'Remada de tracción lateral (draw stroke): estira el brazo hacia un lado y desplaza la tabla lateralmente hacia la pala',
      ],
      faq: [
        {
          q: '¿Cómo remo en línea recta?',
          a: 'Usa una longitud de remada constante en ambos lados. Cambia de lado cada 5-10 paladas. Fija la vista en un punto del horizonte como referencia.',
        },
        {
          q: '¿Debo flexionar las rodillas?',
          a: 'Sí. Mantén las rodillas ligeramente flexionadas como amortiguadores. Con las rodillas bloqueadas, cada onda se transfiere a tu core y reduce la estabilidad.',
        },
        {
          q: '¿Cómo remo contra el viento?',
          a: 'Baja tu postura, usa remadas más cortas y rápidas, y mantente más cerca de la costa, donde el viento suele ser menor. Si el viento es demasiado fuerte, no salgas.',
        },
      ],
    },
    'sup-fitness': {
      title: 'Fitness con SUP: entrenamiento de cuerpo completo en el agua',
      description: 'Cómo el paddle surf desarrolla la fuerza del core, el equilibrio y la condición cardiovascular.',
      tldr: 'El SUP activa el core, las piernas, la espalda y los hombros en cada palada. Una sesión de una hora quema entre 300 y 500 calorías. Remar contra el viento o la corriente duplica la intensidad. El yoga SUP añade trabajo de flexibilidad y equilibrio.',
      problem:
        'Muchas personas ven el paddle surf como una actividad informal en lugar de una herramienta de fitness legítima, y pierden su potencial para el acondicionamiento de todo el cuerpo.',
      solution:
        'Estructura las sesiones de SUP con objetivos de fitness concretos: remada de resistencia para cardio, sprints a intervalos para potencia, yoga SUP para flexibilidad y remada de larga distancia para la resistencia muscular.',
      audience:
        'Entusiastas del fitness que buscan un entrenamiento de cuerpo completo de bajo impacto y alta implicación.',
      steps: [
        'Calienta en tierra: círculos de brazos, giros de torso y balanceos de piernas durante 5 minutos',
        'Empieza con 10 minutos de remada constante a intensidad moderada',
        'Pasa al entrenamiento por intervalos: 2 minutos de remada intensa y 2 minutos de recuperación suave',
        'Incorpora posturas de yoga SUP: perro boca abajo, guerrero II y postura del árbol sobre la tabla',
        'Enfría con remada suave y estiramientos estáticos sobre la tabla',
      ],
      faq: [
        {
          q: '¿Es el SUP mejor que correr para el fitness?',
          a: 'El SUP proporciona beneficios cardiovasculares comparables con menor impacto en las articulaciones. Además, activa más la parte superior del cuerpo y el core que correr.',
        },
        {
          q: '¿Cuántas calorías quema el SUP?',
          a: 'Aproximadamente 300-500 calorías por hora a intensidad moderada. Competir o remar contra el viento puede quemar entre 600 y 800 calorías por hora.',
        },
        {
          q: '¿Puedo ganar músculo con el SUP?',
          a: 'Sí. La remada desarrolla los hombros, la espalda y el core. El equilibrio activa las piernas y los músculos estabilizadores. Es un entrenamiento de resistencia de todo el cuerpo.',
        },
      ],
    },
    'sup-yoga': {
      title: 'Yoga SUP: guía completa para remar y hacer yoga',
      description:
        'Combina el paddle surf con el yoga para mejorar el equilibrio, la fuerza y la atención plena en el agua.',
      tldr: 'El yoga SUP añade un elemento de inestabilidad que aumenta drásticamente la activación del core en comparación con el yoga en tierra. Empieza con posturas básicas en una tabla ancha y estable en aguas tranquilas. Usa una cubierta antideslizante. Nunca practiques yoga SUP en solitario.',
      problem:
        'Las esterillas de yoga tradicionales ofrecen una superficie perfectamente estable, eliminando el desafío de equilibrio que hace que el yoga SUP sea especialmente eficaz para el core y la concentración.',
      solution:
        'Usa una tabla de SUP extra ancha (34"+) con una cubierta de agarre completa. Practica en aguas tranquilas y poco profundas. Empieza con posturas básicas antes de intentar las invertidas.',
      audience:
        'Practicantes de yoga y remeros que quieren combinar el entrenamiento de equilibrio con la atención plena.',
      steps: [
        'Ancla la tabla en aguas poco profundas y tranquilas: usa un ancla de arena o átala a un embarcadero',
        'Empieza con posturas sentadas: asiento fácil (sukhasana), postura del barco y torsión sentada',
        'Pasa a posturas de rodillas: mesa, gato-vaca y rayo',
        'Continúa con posturas de pie: montaña, guerrero I, guerrero II y postura del árbol',
        'Practica posturas de equilibrio: media luna, águila y bailarina',
        'Termina con savasana: túmbate en la tabla y siente el movimiento del agua',
      ],
      faq: [
        {
          q: '¿Qué tabla es la mejor para el yoga SUP?',
          a: 'Una tabla ancha (34"+) con una cubierta de agarre de longitud completa proporciona la plataforma más estable. La SUP Tour 12 ofrece un buen equilibrio entre estabilidad y deslizamiento.',
        },
        {
          q: '¿Es peligroso el yoga SUP?',
          a: 'No más que el yoga en tierra si se practica con seguridad. Usa aguas tranquilas y poco profundas. Lleva el leash. Practica acompañado. Evita las aguas profundas en tus primeras sesiones.',
        },
        {
          q: '¿Necesito equipo especial?',
          a: 'Una tabla ancha y estable, cubierta de agarre completa, leash y chaleco salvavidas (PFD). Algunos practicantes usan una esterilla impermeable para mayor agarre.',
        },
      ],
    },
    'sup-fishing': {
      title: 'Guía de pesca en SUP: cómo pescar desde una tabla de paddle surf',
      description:
        'Todo lo que necesitas saber sobre pescar desde una tabla de paddle surf: montaje del equipo, consejos de estabilidad y técnicas.',
      tldr: 'La pesca en SUP ofrece un acercamiento silencioso, acceso a aguas poco profundas y lanzado a 360 grados. Usa una tabla ancha y estable (34"+), instala portacañas y usa un refrigerador o caja como plataforma de equipo. Ancla con viento. Lleva siempre un PFD.',
      problem:
        'Las embarcaciones de pesca estándar son caras de mantener y no pueden acceder a aguas poco profundas. Los kayaks limitan la movilidad. La pesca en SUP resuelve ambos problemas, pero requiere adaptaciones de equipo específicas.',
      solution:
        'Equipa un SUP estable con portacañas, una caja para el equipo y un sistema de anclaje. Usa la portabilidad de la tabla para acceder a zonas de pesca remotas que las embarcaciones no alcanzan.',
      audience:
        'Pescadores que quieren pescar en aguas poco profundas y zonas remotas, o que prefieren una plataforma de pesca ligera y portátil.',
      steps: [
        'Elige una tabla ancha (34"+) con alta capacidad de peso para el equipo',
        'Instala portacañas en la cubierta con sistemas de montaje en raíl o correas',
        'Usa una caja o refrigerador impermeable atado a la cubierta delantera para los señuelos',
        'Lleva un ancla pequeña o una pértiga de anclaje para condiciones de viento',
        'Lleva un PFD con bolsillos para herramientas y teléfono',
        'Practica el lanzado desde la posición de rodillas antes de hacerlo de pie',
      ],
      faq: [
        {
          q: '¿Puedo pescar de pie en un SUP?',
          a: 'Sí. Una tabla ancha de 34"+ proporciona la estabilidad suficiente para estar de pie y lanzar. Practica primero en aguas tranquilas.',
        },
        {
          q: '¿Qué peces puedo pescar desde un SUP?',
          a: 'Los SUP son excelentes para la lubina en lagos, el redfish en planicies, la trucha en ríos y las especies costeras en bahías y estuarios.',
        },
        {
          q: '¿Cómo saco un pez del agua desde un SUP?',
          a: 'Arrodíllate para tener estabilidad. Usa un salabardo o un agarrador de labios. Mantén el pez cerca del agua para evitar caerte. Suéltalo o guárdalo en un refrigerador.',
        },
      ],
    },
    'inflatable-repair': {
      title: 'Cómo reparar tu embarcación o SUP inflable',
      description:
        'Guía paso a paso para reparar pinchazos, problemas de válvula y daños en las costuras de embarcaciones inflables.',
      tldr: 'Los pinchazos pequeños (menos de 1/4") se reparan con el kit de parches incluido. Limpia la zona, aplica adhesivo de PVC, presiona el parche y espera 24 horas. Las fugas de válvula suelen requerir sustituir la junta tórica. Los desgarros grandes o la deslaminación de costuras requieren servicio profesional.',
      problem:
        'Los pinchazos pequeños y los problemas de válvula son comunes pero fáciles de arreglar. Sin la técnica de reparación adecuada, los usuarios o pagan de más por el servicio profesional o empeoran el daño.',
      solution:
        'Identifica el tipo de daño (pinchazo, fuga de válvula o problema de costura) y aplica el método de reparación adecuado. La mayoría de las reparaciones tardan 30 minutos más el tiempo de curado.',
      audience:
        'Propietarios de SUP, kayaks y embarcaciones inflables que quieren hacer reparaciones básicas ellos mismos.',
      steps: [
        'Localiza la fuga: infla por completo, escucha si sale aire, pasa la mano o usa agua jabonosa',
        'Marca la fuga con un bolígrafo o cinta',
        'Limpia la zona alrededor de la fuga con alcohol isopropílico: al menos 2 pulgadas alrededor del daño',
        'Lija la superficie con lija fina para una mejor adhesión del pegamento',
        'Aplica adhesivo de PVC tanto al parche como a la superficie de la tabla',
        'Espera 5 minutos a que el adhesivo se vuelva pegajoso',
        'Presiona el parche con firmeza y saca las burbujas de aire con un rodillo o una tarjeta',
        'Deja curar 24 horas antes de inflar a la presión completa',
      ],
      faq: [
        {
          q: '¿Puedo reparar un pinchazo en el agua?',
          a: 'Las reparaciones de emergencia con un parche y cinta pueden llevarte de vuelta a la costa. Las reparaciones completas requieren condiciones secas y 24 horas de curado.',
        },
        {
          q: '¿Cómo arreglo una válvula que pierde aire?',
          a: 'Retira el núcleo de la válvula con la herramienta incluida, comprueba si la junta tórica está dañada, sustitúyela si es necesario y vuelve a insertar el núcleo firmemente.',
        },
        {
          q: '¿Qué pegamento debo usar para reparaciones de PVC?',
          a: 'Usa adhesivo específico para PVC como HH-66 o Clifton. El superpegamento estándar no se adhiere bien a los materiales de PVC inflable.',
        },
      ],
    },
    'kayak-techniques': {
      title: 'Técnicas esenciales de remada en kayak',
      description:
        'Domina la remada en kayak: palada de avance, barrido, edging e inclinación de apoyo para un kayak eficiente y seguro.',
      tldr: 'La palada de avance en kayak usa la rotación del torso, no los brazos. La palada de barrido gira el kayak. El edging mejora los giros. El apoyo bajo evita el vuelco con olas. Mantén el eje de la pala vertical y la pala completamente sumergida.',
      problem:
        'Una técnica de remada ineficiente causa fatiga en los hombros, avance lento y dificultad para controlar el kayak con viento y corriente.',
      solution:
        'Aprende la técnica de remada correcta impulsada por el torso con cuatro paladas esenciales: avance, reversa, barrido y apoyo.',
      audience: 'Kayakistas principiantes e intermedios que quieren remar con menos esfuerzo y más control.',
      steps: [
        'Palada de avance: rota el torso, planta la pala cerca de tus pies, tira hacia atrás pasando la cadera y sácala a la altura de la cadera',
        'Palada de reversa: planta la pala detrás de ti y empuja hacia delante para frenar o retroceder',
        'Palada de barrido: estira hacia delante, barre la pala en un arco amplio hacia la popa y gira el kayak',
        'Apoyo bajo: golpea la pala plana contra la superficie del agua para estabilizarte en las olas',
        'Edging: inclina ligeramente el kayak sobre su canto para trazar giros',
      ],
      faq: [
        {
          q: '¿Cómo mantengo el kayak en línea recta?',
          a: 'Usa paladas constantes en lados alternos. Aprende la palada en J (un pequeño gancho al final de la palada de avance) para corregir el rumbo sin cambiar de lado.',
        },
        {
          q: '¿Cuál es la lesión más común en kayak?',
          a: 'La tensión en los hombros por remadas dominadas por los brazos. Usa la rotación del torso para activar los músculos grandes de la espalda y reducir la carga sobre los hombros.',
        },
        {
          q: '¿Cómo remo con viento?',
          a: 'Mantén la proa apuntando al viento. Usa paladas más cortas y potentes. Con viento lateral, inclina ligeramente el kayak hacia el viento.',
        },
      ],
    },
    'multi-day-trip': {
      title: 'Planificar una travesía de varios días en kayak o SUP',
      description:
        'Cómo planificar y ejecutar una travesía de varios días: planificación de la ruta, empaque del equipo, acampada y seguridad.',
      tldr: 'Planifica de 10 a 15 millas al día. Empaca el equipo en bolsas secas impermeables, distribuye el peso de forma uniforme y practica la carga de tu tabla o kayak antes del viaje. Comunica tu plan de navegación. Lleva agua, comida, refugio, navegación y comunicación.',
      problem:
        'Las travesías de varios días fracasan por exceso de equipaje, mala planificación de la ruta o por subestimar el clima y las corrientes, lo que provoca agotamiento, fallos del equipo o incidentes de seguridad.',
      solution:
        'Usa un enfoque de planificación sistemático: selección de la ruta, lista de verificación del equipo, plan de comidas, sesión informativa de seguridad y plan de contingencias.',
      audience: 'Remeros experimentados que planifican su primera expedición de varios días.',
      steps: [
        'Selecciona una ruta con campamentos establecidos y puntos de evacuación',
        'Planifica de 10 a 15 millas al día teniendo en cuenta el viento y la corriente',
        'Consulta las tablas de mareas y los pronósticos meteorológicos para toda la ventana del viaje',
        'Empaca el equipo en bolsas secas impermeables: 20-30 libras de equipo en total',
        'Distribuye el peso de forma uniforme: los objetos más pesados en el centro',
        'Comunica un plan de navegación detallado a alguien en tierra',
        'Lleva navegación: carta en papel, brújula y GPS de respaldo',
        'Empaca refugio de emergencia, comida extra y botiquín de primeros auxilios',
      ],
      faq: [
        {
          q: '¿Cuál es la distancia diaria ideal?',
          a: 'De 10 a 15 millas al día para remeros experimentados. Los principiantes deben planificar de 5 a 8 millas. Siempre incluye tiempo de margen para el clima.',
        },
        {
          q: '¿Cuánta agua debo llevar?',
          a: '1 galón por persona al día. En condiciones de calor, 1,5 galones. Lleva un filtro de agua o pastillas potabilizadoras para rellenar.',
        },
        {
          q: '¿Cuál es el artículo de seguridad más importante?',
          a: 'La comunicación. Una radio VHF o un mensajero por satélite pueden salvar vidas en una emergencia. Los teléfonos móviles no son fiables en zonas remotas.',
        },
      ],
    },
    'choosing-paddle': {
      title: 'Cómo elegir la pala adecuada para SUP y kayak',
      description: 'Una guía sobre materiales de pala, formas de hoja, tipos de eje y tallas para SUP y kayak.',
      tldr: 'Longitud de la pala: las palas de SUP deben ser 6-8" más altas que tu estatura. Las palas de kayak dependen de la anchura de la embarcación y de la longitud del torso. Forma de la hoja: las hojas diédricas mantienen el rumbo recto, las planas ofrecen más agarre. Material del eje: el carbono es el más ligero, la fibra de vidrio es la mejor relación calidad-precio y el aluminio es la opción económica.',
      problem:
        'Usar una pala de talla o material incorrecto causa fatiga innecesaria, mala eficiencia de la remada y tensión en las articulaciones.',
      solution:
        'Ajusta la longitud de la pala, la forma de la hoja, el material del eje y la flexibilidad a tu estilo de remada, tu tamaño corporal y tu presupuesto.',
      audience: 'Remeros de SUP y kayak que eligen su primera o próxima pala.',
      steps: [
        'Para SUP: mide la altura de la pala: 6-8" más alta que tu estatura para remada general',
        'Para kayak: mide la longitud de tu torso y la anchura de la embarcación: las embarcaciones más estrechas necesitan palas más cortas',
        'Elige el material de la hoja: nailon para presupuesto, fibra de vidrio para la mejor relación calidad-precio, carbono para rendimiento',
        'Elige la forma de la hoja: diédrica para un rumbo suave, plana para potencia, cuchara para competición',
        'Elige el tipo de eje: recto para SUP, curvado para SUP de competición, estándar para kayak',
        'Comprueba la flexibilidad: los ejes más rígidos transfieren más potencia, los flexibles reducen la tensión en las articulaciones',
      ],
      faq: [
        {
          q: '¿Cuál es el mejor material para una pala?',
          a: 'La fibra de vidrio ofrece el mejor equilibrio entre peso, durabilidad y coste. El carbono es más ligero pero más caro y frágil. El nailon es pesado pero prácticamente indestructible.',
        },
        {
          q: '¿Cómo sé si mi pala tiene la longitud correcta?',
          a: 'Para SUP: coloca la pala verticalmente junto a ti: el mango debe llegar a tu muñeca cuando levantas el brazo por encima de la cabeza. Para kayak: la hoja debe entrar en el agua en un ángulo cómodo sin que tengas que estirarte demasiado.',
        },
        {
          q: '¿Debo elegir una pala de una pieza o ajustable?',
          a: 'Las palas ajustables son buenas para uso compartido y viajes. Las de una pieza son más ligeras, más rígidas y más eficientes para un uso dedicado.',
        },
      ],
    },
    'sup-with-kids': {
      title: 'SUP con niños: guía familiar completa',
      description:
        'Cómo llevar a los niños a hacer paddle surf de forma segura: recomendaciones de edad, equipo y actividades.',
      tldr: 'Los niños de 6+ años pueden ir en un SUP con un adulto. Los niños de 10+ pueden remar en su propia tabla con supervisión. Usa una tabla ancha y estable, lleva siempre chalecos salvavidas, mantente en aguas tranquilas y poco profundas, y haz sesiones cortas (30-45 minutos como máximo).',
      problem:
        'Los padres quieren compartir los deportes acuáticos con sus hijos, pero les preocupa la seguridad, el ajuste del equipo y mantener a los niños entretenidos.',
      solution:
        'Usa la talla de tabla adecuada para remar en pareja, asegúrate de que cada niño lleva un chaleco salvavidas bien ajustado, empieza en aguas cálidas y poco profundas, y hazlo divertido con juegos y sesiones cortas.',
      audience: 'Padres que quieren introducir a sus hijos en el paddle surf.',
      steps: [
        'De 4 a 6 años: ir como pasajero en la tabla de un adulto: sentarse delante y agarrarse al asa central',
        'De 6 a 10 años: arrodillarse o sentarse en su propia tabla con supervisión de un adulto y leash',
        'A partir de 10 años: remar en su propia tabla con un adulto supervisando cerca',
        'Llevar siempre un PFD: los niños deben usar un chaleco salvavidas bien ajustado en todo momento',
        'Permanecer en aguas poco profundas (hasta la cintura para el adulto)',
        'Hacer sesiones cortas: 30-45 minutos como máximo para menores de 10 años',
        'Hazlo divertido: juega, busca peces y practica ponerse de pie',
      ],
      faq: [
        {
          q: '¿A qué edad puede un niño hacer SUP solo?',
          a: 'Alrededor de los 10-12 años con supervisión, según la capacidad de natación del niño y su comodidad en el agua. Siempre en condiciones tranquilas y poco profundas.',
        },
        {
          q: '¿Qué tabla es la mejor para el SUP con niños?',
          a: 'Una tabla ancha (34"+) con alta capacidad de peso para remar en pareja. La anchura de 33" y la capacidad de 220 libras de la SUP Explorer 11 funcionan bien para padre más hijo.',
        },
        {
          q: '¿Qué equipo de seguridad necesitan los niños?',
          a: 'Un chaleco salvavidas certificado CE bien ajustado, un leash (colocado en la tabla del adulto para remar en pareja), protector solar y un sombrero.',
        },
      ],
    },
  },
  fr: {
    'how-to-choose-your-sup': {
      title: 'Comment choisir votre planche de SUP',
      description:
        "Un guide complet pour choisir la bonne planche de stand-up paddle selon votre niveau, les conditions d'eau et votre usage prévu.",
      tldr: "Choisissez votre SUP selon votre niveau, le type d'eau et l'usage principal. Les planches All-Around conviennent aux débutants et aux eaux calmes. Les planches Touring sont faites pour les longues distances. Les planches Yoga offrent une largeur supplémentaire pour la stabilité. Les planches Performance conviennent aux pagayeurs expérimentés dans des conditions variées.",
      problem:
        "La plupart des premiers acheteurs choisissent une planche de SUP sur le prix ou l'apparence plutôt que sur la manière et l'endroit où ils pagayeront réellement. Cela entraîne une mauvaise stabilité, des performances insuffisantes et une expérience frustrante.",
      solution:
        'Adaptez la forme, le volume et la construction de votre planche à votre niveau et à votre environnement aquatique principal. Les planches plus larges (32-34") offrent de la stabilité aux débutants. Les planches plus longues (12-14") tiennent mieux le cap pour la randonnée. La construction drop-stitch à 12-15 PSI offre une rigidité comparable à celle des planches rigides.',
      audience:
        "Acheteurs d'un premier SUP, pagayeurs récréatifs et tous ceux qui passent à une planche plus performante.",
      steps: [
        'Identifiez votre environnement de pagayage principal — lac, océan, rivière ou mixte',
        'Adaptez la largeur de la planche à votre niveau : 32-34" pour les débutants, 30-32" pour les intermédiaires, 28-30" pour les avancés',
        "Choisissez la longueur selon l'usage : plus courte pour la maniabilité, plus longue pour le cap et la vitesse",
        'Choisissez la construction : gonflable drop-stitch pour la portabilité, planche rigide pour des performances maximales',
        "Vérifiez la capacité de charge — votre poids plus l'équipement ne doit pas dépasser 80 % de la limite de la planche",
        'Vérifiez les accessoires inclus : pompe, leash, aileron, sac à dos et kit de réparation',
      ],
      faq: [
        {
          q: 'Quelle largeur de SUP convient le mieux aux débutants ?',
          a: 'Une largeur de 32 à 34 pouces offre la plateforme la plus stable pour apprendre. Le SUP Explorer 11, avec sa largeur de 33", est idéal pour les premiers pagayages en eau calme.',
        },
        {
          q: 'Planche gonflable ou rigide ?',
          a: 'Les planches gonflables offrent portabilité, facilité de rangement et absorption des chocs. Les planches rigides offrent une rigidité et une vitesse maximales. Pour la plupart des utilisateurs récréatifs, un bon gonflable à âme drop-stitch est le choix le plus pratique.',
        },
        {
          q: 'À quel PSI dois-je gonfler ?',
          a: "Les planches Aquafarer recommandent 12-15 PSI. À 15 PSI, la planche atteint une rigidité maximale comparable à celle d'une planche rigide. Respectez toujours la plage de pression indiquée sur la planche.",
        },
      ],
    },
    'beginner-guide': {
      title: 'Guide du débutant en paddle boarding',
      description:
        "Tout ce qu'il faut savoir avant votre première séance de paddle — de l'équipement aux techniques de base.",
      tldr: 'Commencez sur une eau calme et plate avec une planche large et stable. Gonflez à 12-15 PSI, attachez le leash et utilisez la bonne longueur de pagaie (6-8" de plus que votre taille). Gardez les pieds écartés à la largeur des épaules, les genoux légèrement fléchis, et regardez l\'horizon.',
      problem:
        "Les nouveaux pagayeurs négligent souvent la préparation de base — mauvaise longueur de pagaie, mauvaise position ou choix d'une eau agitée — ce qui entraîne des chutes, de la frustration et du découragement.",
      solution:
        'Suivez un plan structuré pour la première séance : choisissez une eau calme, réglez votre équipement correctement, entraînez-vous à genoux avant de vous lever et maîtrisez la traction avant avant de tenter les virages.',
      audience: "Débutants absolus qui n'ont jamais fait de paddle boarding.",
      steps: [
        'Choisissez une eau plate et calme, sans circulation de bateaux — un petit lac ou une baie abritée est idéal',
        "Gonflez votre planche à 12-15 PSI à l'aide de la pompe double action",
        'Attachez le leash hélicoïdal à votre cheville ou à votre mollet, jamais à la poignée de la planche',
        "Insérez l'aileron et serrez la vis",
        'Réglez la longueur de la pagaie — elle doit être 6-8 pouces plus haute que votre taille',
        "Commencez à genoux sur la planche, pagayez quelques coups pour sentir l'équilibre",
        "Levez-vous un pied après l'autre, pieds écartés à la largeur des épaules, genoux souples",
        "Regardez l'horizon, pas vos pieds — votre planche va là où vous regardez",
      ],
      faq: [
        {
          q: 'Que dois-je porter pour le paddle boarding ?',
          a: 'Des vêtements de sport à séchage rapide, un gilet de sauvetage, de la crème solaire et un chapeau. En eau froide, portez une combinaison. Portez toujours un leash et un téléphone dans un étui étanche.',
        },
        {
          q: 'Comment remonter sur la planche après une chute ?',
          a: "Restez calme. Nagez jusqu'à la planche, attrapez la poignée centrale et donnez des coups de pied tout en vous hissant sur la planche en un seul mouvement. Revenez d'abord à genoux, puis levez-vous.",
        },
        {
          q: 'Quelles conditions de vent sont sûres ?',
          a: 'Débutant : vent inférieur à 10 mph (5 nœuds). Si le vent souffle du rivage vers le large, ne sortez pas. Consultez les prévisions et comprenez que le vent de terre est dangereux.',
        },
      ],
    },
    'safety-tips': {
      title: 'Conseils de sécurité pour les sports nautiques',
      description:
        'Règles de sécurité essentielles pour le paddle boarding, le kayak et la navigation — de la vérification du matériel à la météo.',
      tldr: "Portez toujours un gilet de sauvetage certifié CE, vérifiez la météo et les conditions de l'eau avant de partir, emportez des moyens de communication, ne pagayez jamais seul en eau inconnue et respectez les limites nominales de votre matériel.",
      problem:
        "La plupart des accidents de sports nautiques résultent d'une préparation insuffisante — pas de gilet de sauvetage, avertissements météo ignorés ou matériel utilisé au-delà de ses limites de conception.",
      solution:
        "Adoptez une check-list de sécurité avant le départ : vérifiez l'état du matériel, consultez la météo et la température de l'eau, informez quelqu'un de votre itinéraire et portez toujours un équipement de flottabilité adapté.",
      audience: 'Tous les pratiquants de sports nautiques — utilisateurs de SUP, kayak, annexe et RIB.',
      steps: [
        'Vérifiez les prévisions météo — évitez les vents de plus de 15 mph et les orages',
        "Vérifiez la température de l'eau — l'eau froide (<60°F/15°C) exige une combinaison ou un vêtement étanche",
        'Inspectez le matériel — vérifiez les fuites, les fissures et le gonflage correct',
        'Portez un gilet de sauvetage certifié CE en permanence',
        "Attachez le leash (SUP) ou sécurisez tout l'équipement non attaché (kayak/bateau)",
        "Déposez un plan de navigation — dites à quelqu'un où vous allez et quand vous reviendrez",
        'Emportez un moyen de communication — étui téléphone étanche ou radio VHF',
        'Connaissez vos limites — restez dans les limites de votre niveau et des spécifications de votre matériel',
      ],
      faq: [
        {
          q: 'Faut-il un gilet de sauvetage sur un SUP ?',
          a: "Oui. De nombreuses juridictions exigent légalement un gilet de sauvetage sur toute embarcation, y compris les SUPs. Même là où ce n'est pas exigé, un gilet certifié CE est un équipement de sécurité essentiel.",
        },
        {
          q: 'Quelle est la blessure la plus courante en sports nautiques ?',
          a: "L'immersion en eau froide et l'épuisement sont les risques graves les plus courants. Habillez-vous toujours en fonction de la température de l'eau, pas de celle de l'air.",
        },
        {
          q: 'Comment vérifier que les conditions sont sûres ?',
          a: "Utilisez les prévisions météo marines. Vérifiez la vitesse du vent, la hauteur des vagues et la température de l'eau. Les débutants doivent rester dans des conditions de vent inférieur à 10 mph et de vagues inférieures à 1 pied.",
        },
      ],
    },
    'inflatable-vs-hard': {
      title: 'SUP gonflable ou rigide : lequel choisir ?',
      description:
        'Une comparaison objective des planches de SUP gonflables et rigides : performances, portabilité, durabilité et rapport qualité-prix.',
      tldr: "Les planches gonflables gagnent en portabilité, en rangement et en résistance aux chocs. Les planches rigides gagnent en rigidité et en vitesse maximales. Les planches gonflables modernes à drop-stitch à 15 PSI comblent 90 % de l'écart de performance.",
      problem:
        'Les acheteurs sont partagés entre le côté pratique des planches gonflables et la réputation de performance des planches rigides, sans données claires sur leur comparaison réelle.',
      solution:
        'Comparez des critères précis — rigidité, poids, taille une fois pliée, durabilité, réparation et coût — en fonction de votre usage réel. Pour la plupart des pagayeurs récréatifs, un bon gonflable est le meilleur choix.',
      audience: 'Acheteurs de SUP qui hésitent entre une construction gonflable et rigide.',
      steps: [
        "Évaluez vos besoins de portabilité — le gonflable se plie à la taille d'un sac à dos, la planche rigide exige un porte-velo sur le toit",
        "Comparez la rigidité — le gonflable à 15 PSI a une flexion minimale, la planche rigide n'en a aucune",
        'Évaluez le rangement — le gonflable se range dans un placard, la planche rigide exige un garage ou un rack',
        'Considérez la durabilité — le gonflable absorbe les chocs, la planche rigide peut se bosseler et se fissurer',
        "Prenez en compte la réparation — les rustines sur gonflable sont simples, les réparations d'une planche rigide exigent un professionnel",
        'Vérifiez les performances — les planches rigides ont un léger avantage en vitesse, les gonflables offrent une meilleure absorption des chocs',
      ],
      faq: [
        {
          q: 'Les SUP gonflables sont-ils aussi rigides que les planches rigides ?',
          a: 'À 15 PSI avec une construction drop-stitch, la différence de rigidité est minime pour un usage récréatif. Seuls les compétiteurs et surfeurs remarqueront la différence.',
        },
        {
          q: "Quelle est la durée de vie d'un SUP gonflable ?",
          a: "Avec un entretien correct, 5 à 10 ans. Le PVC de qualité marine résiste aux UV et à l'abrasion. Rangez-le à l'abri du soleil direct quand vous ne l'utilisez pas et rincez-le à l'eau douce après usage en eau salée.",
        },
        {
          q: 'Puis-je utiliser un SUP gonflable pour surfer ?',
          a: 'Oui, mais les planches gonflables conviennent mieux aux petites et moyennes vagues (moins de 3 pieds). Pour le surf dédié, une planche rigide offre une meilleure réactivité et une meilleure prise de carre.',
        },
      ],
    },
    'weather-conditions': {
      title: 'Comprendre les conditions météo pour le paddle boarding',
      description:
        "Apprenez à lire le vent, les vagues, les marées et les régimes météo pour prendre des décisions sûres sur l'eau.",
      tldr: "Vérifiez trois choses avant chaque départ : la vitesse du vent (moins de 10 mph pour les débutants), la hauteur des vagues (moins de 1 pied pour les débutants) et la température de l'eau (habillez-vous pour l'eau, pas pour l'air). Le vent de terre est dangereux quel que soit le niveau.",
      problem:
        "La plupart des accidents liés à la météo surviennent parce que les pagayeurs évaluent mal les conditions — ils vérifient la température de l'air mais pas celle de l'eau, ou ne comprennent pas que le vent de terre peut les pousser vers le large.",
      solution:
        "Utilisez une évaluation météo structurée avant le départ : direction et vitesse du vent, période et hauteur des vagues, état de la marée et température de l'eau. Comprenez comment chaque facteur affecte votre sécurité.",
      audience: 'Tous les pagayeurs qui naviguent en eau libre — lacs, baies, rivières et océan.',
      steps: [
        'Vérifiez la vitesse et la direction du vent — le vent de terre (qui souffle de la terre vers la mer) est le plus dangereux',
        "Évaluez l'état des vagues — la période des vagues compte autant que leur hauteur",
        'Connaissez la marée — les courants de marée peuvent être plus forts que votre vitesse de pagayage',
        "Mesurez la température de l'eau — en dessous de 60°F/15°C, une protection thermique est requise",
        'Vérifiez la visibilité — le brouillard et les fortes pluies réduisent la visibilité et augmentent le risque de collision',
        'Comprenez les dangers locaux — rochers submergés, forts courants, zones de circulation de bateaux',
      ],
      faq: [
        {
          q: 'Quelle vitesse de vent est trop élevée pour le SUP ?',
          a: 'Débutants : plus de 10 mph (8 nœuds). Intermédiaires : plus de 15 mph (13 nœuds). Avancés : plus de 20 mph (17 nœuds). En cas de doute, ne sortez pas.',
        },
        {
          q: 'Que signifie la période des vagues ?',
          a: 'La période des vagues est le temps entre deux vagues successives. Les périodes courtes (moins de 8 secondes) signifient des vagues raides et hachées. Les périodes longues (plus de 12 secondes) signifient des houles plus lisses et plus prévisibles.',
        },
        {
          q: 'Puis-je pagayer sous la pluie ?',
          a: "Une pluie légère est généralement sans danger. Une forte pluie réduit la visibilité et peut indiquer un changement de vent. Les orages exigent une évacuation immédiate de l'eau.",
        },
      ],
    },
    'understanding-specs': {
      title: "Comment lire les spécifications d'une planche de SUP",
      description:
        "Un guide technique pour comprendre les specs d'une planche de SUP — volume, dimensions, construction et leur impact sur les performances.",
      tldr: "Spécifications clés : le volume (en litres) détermine la flottabilité et la capacité de charge, la largeur détermine la stabilité, la longueur détermine le cap et la vitesse, l'épaisseur détermine la rigidité et la pression PSI détermine la pression de gonflage pour des performances optimales.",
      problem:
        'Les fiches techniques listent des chiffres sans contexte, laissant les acheteurs incertains de savoir quelles spécifications comptent vraiment pour leur usage.',
      solution:
        "Traduisez chaque spécification en performance réelle : le volume pour la flottabilité, la largeur pour la stabilité, la longueur pour le glisse, l'épaisseur pour la rigidité et la construction pour la durabilité.",
      audience:
        'Pagayeurs intermédiaires et acheteurs techniques qui veulent prendre des décisions basées sur les données.',
      steps: [
        "Vérifiez le volume (en litres) — votre poids plus l'équipement ne doit pas dépasser 80 % du volume nominal de la planche",
        'Vérifiez la largeur — plus large (32-34") = plus de stabilité, plus étroite (28-30") = plus de vitesse',
        'Vérifiez la longueur — plus longue (12-14") = meilleur cap, plus courte (10-11") = meilleure maniabilité',
        'Vérifiez l\'épaisseur — 6" est standard, 8" offre plus de rigidité et de capacité de charge',
        'Vérifiez le PSI nominal — gonflez à la pression maximale indiquée pour une rigidité optimale',
        'Vérifiez les matériaux de construction — densité du drop-stitch, couches de PVC, renforts de liseré',
      ],
      faq: [
        {
          q: 'Que signifie drop-stitch ?',
          a: 'Le drop-stitch est une méthode de construction où des milliers de fils relient les couches supérieure et inférieure de la planche. Cela permet un gonflage haute pression (12-15 PSI) pour une rigidité extrême.',
        },
        {
          q: 'Quel est le rapport poids/volume idéal ?',
          a: "Un bon objectif est d'environ 5-6 livres de poids de pagayeur par litre de volume de planche. Un pagayeur de 220 livres devrait chercher des planches d'au moins 180 litres de volume.",
        },
        {
          q: 'Le poids de la planche est-il important ?',
          a: 'Oui. Les planches plus légères (moins de 20 lbs) sont plus faciles à porter et à transporter. Les planches plus lourdes (25+ lbs) indiquent souvent une construction en PVC multicouche plus durable.',
        },
      ],
    },
    'sup-maintenance': {
      title: 'Comment nettoyer et ranger votre SUP gonflable',
      description:
        "Guide d'entretien étape par étape pour maximiser la durée de vie de votre planche de SUP gonflable.",
      tldr: "Rincez à l'eau douce après chaque utilisation, séchez complètement avant le rangement, dégonflez et roulez sans serrer (pas au maximum), rangez dans un endroit frais et sec à l'abri du soleil direct et inspectez les coutures chaque mois.",
      problem:
        'Un rangement et un nettoyage inappropriés sont les principales causes de défaillance prématurée des SUP gonflables — moisissures, dégâts des UV et délamination des coutures.',
      solution:
        'Suivez une routine cohérente après chaque séance : rincez, séchez, inspectez, dégonflez et rangez. Utilisez un savon doux pour la saleté tenace. Ne rangez jamais la planche mouillée ou en plein soleil.',
      audience: 'Tous les propriétaires de SUP gonflable qui veulent que leur planche dure 5 ans et plus.',
      steps: [
        "Rincez la planche à l'eau douce immédiatement après utilisation, surtout après l'eau salée",
        'Nettoyez avec un savon doux et une éponge souple — évitez les produits chimiques agressifs et les nettoyeurs haute pression',
        "Séchez la planche complètement — ouvrez la valve pour laisser l'eau piégée s'échapper",
        'Inspectez les dommages — vérifiez les coutures, la valve et la surface pour les perforations',
        'Dégonflez complètement — retirez le noyau de la valve pour un dégonflage total',
        'Roulez la planche sans la serrer — commencez par le nez, évitez les plis marqués',
        "Rangez-la dans le sac de transport, dans un endroit frais et sec à l'abri du soleil direct",
      ],
      faq: [
        {
          q: 'Puis-je laisser mon SUP gonflé toute la saison ?',
          a: "Oui, mais gardez-le à l'abri du soleil direct quand il n'est pas utilisé. Un dégonflage partiel (8-10 PSI) est recommandé pour un stockage prolongé.",
        },
        {
          q: 'Comment réparer une perforation ?',
          a: "Nettoyez la zone, découpez une rustine aux coins arrondis, appliquez l'adhésif, pressez fermement et attendez 24 heures avant de regonfler. Les planches Aquafarer incluent un kit de réparation.",
        },
        {
          q: 'À quelle fréquence dois-je vérifier la valve ?',
          a: 'Chaque mois. La valve est le point de défaillance le plus courant. Vérifiez que la goupille de la valve se déplace librement et que le joint torique est intact.',
        },
      ],
    },
    'paddling-techniques': {
      title: 'Techniques essentielles de pagayage en SUP',
      description:
        'Maîtrisez la traction avant, la godille et le virage en cross-bow pour pagayer efficacement dans toutes les conditions.',
      tldr: 'La traction avant utilise le corps, pas les bras. La godille fait tourner la planche. Le virage cross-bow est la rotation la plus efficace. Gardez la pagaie verticale et immergez complètement la pale pour un transfert de puissance maximal.',
      problem:
        "La plupart des pagayeurs utilisent des coups dominés par les bras qui gaspillent de l'énergie et provoquent une fatigue des épaules. Une mauvaise technique rend aussi la planche difficile à contrôler dans le vent et le clapot.",
      solution:
        'Apprenez trois coups essentiels — traction avant, godille et virage cross-bow — avec une mécanique corporelle correcte. Entraînez-vous sur eau calme avant de passer à des conditions difficiles.',
      audience: 'Pagayeurs qui veulent pagayer plus longtemps, plus vite et avec moins de fatigue.',
      steps: [
        "Traction avant : tendez le bras vers l'avant, plantez la pale complètement, tirez en utilisant la rotation du buste (pas les bras), sortez la pale au niveau de la cheville",
        "Godille : tendez le bras vers l'avant au niveau du liseré, balayez la pale en un large arc vers la poupe, faites tourner la planche du côté opposé à la pagaie",
        'Virage cross-bow : placez la pagaie du côté opposé de la planche sans changer les mains, tirez vers la poupe',
        "Appui : utilisez un appui bas pour la stabilité dans le clapot — claquez la pale à plat sur la surface de l'eau",
        'Traction latérale : tendez le bras sur le côté, tirez la planche latéralement vers la pagaie',
      ],
      faq: [
        {
          q: 'Comment pagayer en ligne droite ?',
          a: "Utilisez une longueur de coup constante des deux côtés. Changez de côté toutes les 5-10 coups. Regardez un point fixe à l'horizon comme repère.",
        },
        {
          q: 'Dois-je fléchir les genoux ?',
          a: 'Oui. Gardez une légère flexion des genoux comme amortisseurs. Les genoux verrouillés transmettent chaque ondulation à votre corps et réduisent la stabilité.',
        },
        {
          q: 'Comment pagayer contre le vent ?',
          a: 'Baissez votre position, utilisez des coups plus courts et plus rapides, et restez près du rivage où le vent est souvent réduit. Si le vent est trop fort, ne sortez pas.',
        },
      ],
    },
    'sup-fitness': {
      title: "SUP Fitness : un entraînement complet du corps sur l'eau",
      description: "Comment le stand-up paddle renforce le tronc, l'équilibre et la condition cardiovasculaire.",
      tldr: "Le SUP sollicite le tronc, les jambes, le dos et les épaules à chaque coup. Une séance d'une heure brûle 300-500 calories. Pagayer contre le vent ou le courant double l'intensité. Le SUP yoga ajoute un travail de souplesse et d'équilibre.",
      problem:
        "Beaucoup considèrent le paddle boarding comme une activité décontractée plutôt qu'un véritable outil de fitness, passant à côté de son potentiel pour une condition physique complète.",
      solution:
        "Structurez les séances de SUP avec des objectifs précis : pagayage d'endurance pour le cardio, sprints en intervalles pour la puissance, SUP yoga pour la souplesse et pagayage longue distance pour l'endurance musculaire.",
      audience: 'Amateurs de fitness qui recherchent un entraînement complet, à faible impact et très engageant.',
      steps: [
        'Échauffez-vous à terre — cercles de bras, torsions du buste et balancements de jambes pendant 5 minutes',
        'Commencez par 10 minutes de pagayage régulier à intensité modérée',
        "Passez à l'entraînement par intervalles — 2 minutes de pagayage intense, 2 minutes de récupération facile",
        "Intégrez des postures de SUP yoga — chien tête en bas, guerrier II et posture de l'arbre sur la planche",
        'Terminez par un retour au calme avec un pagayage doux et des étirements statiques sur la planche',
      ],
      faq: [
        {
          q: 'Le SUP est-il meilleur que la course à pied pour le fitness ?',
          a: 'Le SUP offre des bénéfices cardiovasculaires comparables avec un impact articulaire moindre. Il sollicite aussi davantage le haut du corps et le tronc que la course à pied.',
        },
        {
          q: 'Combien de calories le SUP fait-il brûler ?',
          a: 'Environ 300-500 calories par heure à intensité modérée. La course ou le pagayage contre le vent peut brûler 600-800 calories par heure.',
        },
        {
          q: 'Peut-on développer du muscle avec le SUP ?',
          a: "Oui. Le pagayage renforce les épaules, le dos et le tronc. L'équilibre sollicite les jambes et les muscles stabilisateurs. C'est un entraînement de résistance complet du corps.",
        },
      ],
    },
    'sup-yoga': {
      title: 'SUP Yoga : le guide complet du pagayage et du yoga',
      description: "Combinez paddle boarding et yoga pour améliorer équilibre, force et pleine conscience sur l'eau.",
      tldr: "Le SUP yoga ajoute un élément d'instabilité qui augmente considérablement l'activation du tronc par rapport au yoga à terre. Commencez par des postures de base sur une planche large et stable en eau calme. Utilisez un tapis antidérapant. Ne pratiquez jamais le SUP yoga seul.",
      problem:
        "Les tapis de yoga traditionnels offrent une surface parfaitement stable, supprimant le défi d'équilibre qui rend le SUP yoga particulièrement efficace pour la force du tronc et la concentration.",
      solution:
        'Utilisez une planche de SUP extra-large (34"+) avec un tapis antidérapant couvrant tout le pont. Pratiquez en eau calme et peu profonde. Commencez par des postures de base avant de tenter les inversions.',
      audience:
        "Pratiquants de yoga et pagayeurs qui veulent combiner entraînement de l'équilibre et pleine conscience.",
      steps: [
        'Ancrez la planche en eau peu profonde et calme — utilisez une ancre de sable ou attachez-la à un ponton',
        'Commencez par des postures assises — posture facile, posture du bateau, torsion assise',
        'Passez aux postures à genoux — table, chat-vache, foudre',
        "Enchaînez avec les postures debout — montagne, guerrier I, guerrier II, posture de l'arbre",
        "Pratiquez les postures d'équilibre — demi-lune, aigle, danseur",
        "Terminez par le savasana — allongez-vous à plat sur la planche, ressentez le mouvement de l'eau",
      ],
      faq: [
        {
          q: 'Quelle planche est la meilleure pour le SUP yoga ?',
          a: 'Une planche large (34"+) avec un tapis antidérapant pleine longueur offre la plateforme la plus stable. Le SUP Tour 12 offre un bon équilibre entre stabilité et glisse.',
        },
        {
          q: 'Le SUP yoga est-il dangereux ?',
          a: "Pas plus que le yoga à terre lorsqu'il est pratiqué en sécurité. Utilisez une eau calme et peu profonde. Portez un leash. Pratiquez à deux. Évitez l'eau profonde lors de vos premières séances.",
        },
        {
          q: 'Faut-il un équipement spécial ?',
          a: 'Une planche large et stable, un tapis antidérapant pleine longueur, un leash et un PFD. Certains pratiquants utilisent un tapis imperméable pour une meilleure adhérence.',
        },
      ],
    },
    'sup-fishing': {
      title: 'Guide de pêche en SUP : comment pêcher depuis une planche',
      description:
        "Tout ce qu'il faut savoir pour pêcher depuis une planche de paddle — installation du matériel, conseils de stabilité et techniques.",
      tldr: 'La pêche en SUP offre une approche silencieuse, un accès aux eaux peu profondes et un lancer à 360 degrés. Utilisez une planche large et stable (34"+), fixez des supports de canne et utilisez une glacière ou un bac comme pont de rangement. Ancrez-vous par vent fort. Portez toujours un PFD.',
      problem:
        'Les bateaux de pêche standard coûtent cher à entretenir et ne peuvent pas accéder aux eaux peu profondes. Les kayaks limitent la mobilité. La pêche en SUP résout ces deux problèmes mais exige des adaptations spécifiques du matériel.',
      solution:
        "Équipez un SUP stable de supports de canne, d'un bac de rangement et d'un système d'ancre. Utilisez la portabilité de la planche pour accéder à des spots de pêche isolés que les bateaux ne peuvent pas atteindre.",
      audience:
        'Pêcheurs qui veulent pêcher en eaux peu profondes, dans des endroits reculés, ou qui préfèrent une plateforme de pêche légère et portable.',
      steps: [
        'Choisissez une planche large (34"+) avec une capacité de charge élevée pour l\'équipement',
        "Installez des supports de canne sur le pont à l'aide de systèmes fixés au rail ou par sangles",
        'Utilisez un bac ou une glacière étanche sanglé sur le pont avant pour le matériel',
        "Apportez une petite ancre ou une perche d'amarrage pour les conditions venteuses",
        'Portez un PFD avec poches pour les outils et le téléphone',
        'Entraînez-vous à lancer à genoux avant de vous lever',
      ],
      faq: [
        {
          q: 'Puis-je me tenir debout et pêcher sur un SUP ?',
          a: 'Oui. Une planche de 34"+ de large offre une stabilité suffisante pour se tenir debout et lancer. Entraînez-vous d\'abord sur eau calme.',
        },
        {
          q: 'Quels poissons puis-je viser depuis un SUP ?',
          a: 'Les SUPs sont excellents pour le bar dans les lacs, le redfish dans les platiers, la truite dans les rivières et les espèces côtières dans les baies et les estuaires.',
        },
        {
          q: 'Comment ferrer un poisson depuis un SUP ?',
          a: 'Mettez-vous à genoux pour la stabilité. Utilisez une épuisette ou une pince à lèvres. Gardez le poisson bas pour éviter de tomber. Relâchez-le ou placez-le dans une glacière.',
        },
      ],
    },
    'inflatable-repair': {
      title: 'Comment réparer votre bateau ou SUP gonflable',
      description:
        'Guide étape par étape pour réparer les perforations, les problèmes de valve et les dégâts de couture sur les embarcations gonflables.',
      tldr: 'Les petites perforations (moins de 1/4") se réparent avec le kit de rustines fourni. Nettoyez la zone, appliquez l\'adhésif PVC, pressez la rustine et attendez 24 heures. Les fuites de valve nécessitent généralement le remplacement du joint torique. Les grandes déchirures ou la délamination des coutures exigent un service professionnel.',
      problem:
        'Les petites perforations et les problèmes de valve sont courants mais faciles à corriger. Sans une technique de réparation correcte, les utilisateurs paient trop cher un service professionnel ou aggravent les dégâts.',
      solution:
        'Identifiez le type de dommage — perforation, fuite de valve ou problème de couture — et appliquez la méthode de réparation adaptée. La plupart des réparations prennent 30 minutes plus le temps de séchage.',
      audience:
        'Propriétaires de SUP, kayaks et bateaux gonflables qui veulent gérer eux-mêmes les réparations de base.',
      steps: [
        "Localisez la fuite — gonflez complètement, écoutez l'air s'échapper, sentez-le avec la main ou utilisez de l'eau savonneuse",
        'Marquez la fuite avec un stylo ou du ruban adhésif',
        "Nettoyez la zone autour de la fuite avec de l'alcool isopropylique — au moins 2 pouces autour du dommage",
        "Poncez la surface avec du papier de verre fin pour une meilleure adhérence de l'adhésif",
        "Appliquez l'adhésif PVC sur la rustine et sur la surface de la planche",
        "Attendez 5 minutes que l'adhésif devienne collant",
        "Pressez la rustine fermement, chassez les bulles d'air avec un rouleau ou une carte bancaire",
        'Laissez sécher 24 heures avant de regonfler à pleine pression',
      ],
      faq: [
        {
          q: "Puis-je réparer une perforation sur l'eau ?",
          a: "Les réparations d'urgence avec une rustine et du ruban adhésif peuvent vous ramener au rivage. Les réparations complètes exigent des conditions sèches et un séchage de 24 heures.",
        },
        {
          q: 'Comment réparer une valve qui fuit ?',
          a: "Retirez le noyau de la valve avec l'outil fourni, vérifiez que le joint torique n'est pas endommagé, remplacez-le si nécessaire et réinsérez le noyau bien serré.",
        },
        {
          q: 'Quelle colle utiliser pour les réparations PVC ?',
          a: "Utilisez un adhésif spécifique au PVC comme le HH-66 ou le Clifton. La super glue standard n'adhère pas bien aux matériaux PVC des gonflables.",
        },
      ],
    },
    'kayak-techniques': {
      title: 'Techniques essentielles de pagayage en kayak',
      description:
        'Maîtrisez le pagayage en kayak — traction avant, godille, inclinaison et appui pour un kayaking efficace et sûr.',
      tldr: "La traction avant en kayak utilise la rotation du buste, pas les bras. La godille fait tourner le kayak. L'inclinaison améliore les virages. L'appui bas empêche le chavirement dans les vagues. Gardez le fût de la pagaie vertical et la pale complètement immergée.",
      problem:
        'Une technique de pagayage inefficace provoque une fatigue des épaules, une progression lente et des difficultés à contrôler le kayak dans le vent et le courant.',
      solution:
        'Apprenez une technique de pagayage correcte pilotée par le buste avec quatre coups essentiels — avant, arrière, godille et appui.',
      audience: "Kayakistes débutants et intermédiaires qui veulent pagayer avec moins d'effort et plus de contrôle.",
      steps: [
        'Traction avant : faites pivoter votre buste, plantez la pale près de vos pieds, tirez en passant votre hanche, sortez la pale au niveau de la hanche',
        "Coup arrière : plantez la pale derrière vous, poussez vers l'avant pour ralentir ou reculer",
        "Godille : tendez le bras vers l'avant, balayez la pale en un large arc vers la poupe, faites tourner le kayak",
        "Appui bas : claquez la pale à plat sur la surface de l'eau pour la stabilité dans les vagues",
        'Inclinaison : inclinez légèrement le kayak sur sa carre pour carver les virages',
      ],
      faq: [
        {
          q: 'Comment garder mon kayak en ligne droite ?',
          a: 'Utilisez des coups réguliers en alternant les côtés. Apprenez le coup en J (un léger crochet à la fin de la traction avant) pour corriger la trajectoire sans changer de côté.',
        },
        {
          q: 'Quelle est la blessure de kayak la plus courante ?',
          a: "La tension à l'épaule due à un pagayage dominé par les bras. Utilisez la rotation du buste pour solliciter les grands muscles du dos et réduire la charge sur les épaules.",
        },
        {
          q: 'Comment pagayer dans le vent ?',
          a: 'Gardez la proue face au vent. Utilisez des coups plus courts et plus puissants. Par vent latéral, inclinez légèrement le kayak face au vent.',
        },
      ],
    },
    'multi-day-trip': {
      title: 'Organiser une expédition de plusieurs jours en kayak ou en SUP',
      description:
        "Comment planifier et mener une expédition de pagayage de plusieurs jours — planification de l'itinéraire, équipement, camping et sécurité.",
      tldr: "Prévoyez 10-15 miles par jour. Emballez l'équipement dans des sacs étanches, répartissez le poids uniformément et entraînez-vous à charger votre planche ou votre kayak avant le départ. Déposez un plan de navigation. Emportez de l'eau, de la nourriture, un abri, de la navigation et de la communication.",
      problem:
        "Les expéditions de plusieurs jours échouent à cause du suréquipement, d'une mauvaise planification de l'itinéraire ou de la sous-estimation de la météo et du courant — entraînant épuisement, pannes de matériel ou incidents de sécurité.",
      solution:
        "Utilisez une approche de planification systématique : choix de l'itinéraire, check-list de l'équipement, planification des repas, briefing sécurité et plan de contingence.",
      audience: 'Pagayeurs expérimentés qui préparent leur première expédition de plusieurs jours.',
      steps: [
        'Choisissez un itinéraire avec des campings établis et des points de repli',
        'Prévoyez 10-15 miles par jour en tenant compte du vent et du courant',
        "Vérifiez les tables de marées et les prévisions météo pour toute la durée de l'expédition",
        "Emballez l'équipement dans des sacs étanches — 20-30 lbs de poids total",
        'Répartissez le poids uniformément — les objets les plus lourds au centre',
        "Déposez un plan de navigation détaillé auprès de quelqu'un à terre",
        'Emportez de la navigation — carte papier, boussole et GPS de secours',
        'Emportez un abri de secours, des vivres supplémentaires et une trousse de premiers soins',
      ],
      faq: [
        {
          q: 'Quelle est la distance quotidienne idéale ?',
          a: '10-15 miles par jour pour les pagayeurs expérimentés. Les débutants devraient prévoir 5-8 miles. Prévoyez toujours une marge de temps pour la météo.',
        },
        {
          q: "Combien d'eau dois-je emporter ?",
          a: '1 gallon par personne et par jour. Par temps chaud, 1,5 gallon. Emportez un filtre à eau ou des pastilles de purification pour les recharges.',
        },
        {
          q: "Quel est l'élément de sécurité le plus important ?",
          a: "La communication. Une radio VHF ou un messager satellite peut sauver des vies en cas d'urgence. Les téléphones portables ne sont pas fiables dans les zones reculées.",
        },
      ],
    },
    'choosing-paddle': {
      title: 'Comment choisir la bonne pagaie pour le SUP et le kayak',
      description:
        'Un guide sur les matériaux de pagaie, les formes de pale, les types de fût et les tailles pour le SUP et le kayak.',
      tldr: 'Longueur de pagaie : les pagaies de SUP doivent être 6-8" plus hautes que votre taille. Les pagaies de kayak dépendent de la largeur du bateau et de la longueur du buste. Forme de pale : les pales dièdres tiennent le cap, les pales plates offrent plus de prise. Matériau du fût : le carbone est le plus léger, la fibre de verre est le meilleur rapport qualité-prix, l\'aluminium est économique.',
      problem:
        'Utiliser la mauvaise taille ou le mauvais matériau de pagaie provoque une fatigue inutile, une mauvaise efficacité du coup et des tensions articulaires.',
      solution:
        'Adaptez la longueur, la forme de pale, le matériau du fût et la flexibilité à votre style de pagayage, votre gabarit et votre budget.',
      audience: 'Pagayeurs de SUP et de kayak qui choisissent leur première pagaie ou la suivante.',
      steps: [
        'Pour le SUP : mesurez la hauteur de la pagaie — 6-8" de plus que votre taille pour un pagayage général',
        'Pour le kayak : mesurez la longueur du buste et la largeur du bateau — les bateaux étroits nécessitent des pagaies plus courtes',
        'Choisissez le matériau de la pale — nylon pour le budget, fibre de verre pour le rapport qualité-prix, carbone pour la performance',
        'Choisissez la forme de pale — dièdre pour un cap régulier, plate pour la puissance, cuillère pour la course',
        'Choisissez le type de fût — droit pour le SUP, coudé pour le SUP de course, standard pour le kayak',
        'Vérifiez la flexibilité — les fûts plus rigides transmettent plus de puissance, les fûts flexibles réduisent les tensions articulaires',
      ],
      faq: [
        {
          q: 'Quel est le meilleur matériau de pagaie ?',
          a: 'La fibre de verre offre le meilleur équilibre entre poids, durabilité et coût. Le carbone est plus léger mais plus cher et plus fragile. Le nylon est lourd mais pratiquement indestructible.',
        },
        {
          q: 'Comment savoir si ma pagaie a la bonne longueur ?',
          a: "Pour le SUP : tenez la pagaie verticalement à côté de vous — la poignée doit atteindre votre poignet lorsque votre bras est levé au-dessus de la tête. Pour le kayak : la pale doit entrer dans l'eau à un angle confortable sans extension excessive.",
        },
        {
          q: 'Dois-je prendre une pagaie monobloc ou réglable ?',
          a: 'Les pagaies réglables conviennent au partage et aux voyages. Les pagaies monoblocs sont plus légères, plus rigides et plus efficaces pour un usage dédié.',
        },
      ],
    },
    'sup-with-kids': {
      title: 'SUP avec enfants : le guide complet de la famille',
      description:
        'Comment emmener les enfants en paddle en toute sécurité — âges recommandés, équipement et activités.',
      tldr: 'Les enfants de 6 ans et plus peuvent monter sur un SUP avec un adulte. Les enfants de 10 ans et plus peuvent pagayer sur leur propre planche sous surveillance. Utilisez une planche large et stable, portez toujours des PFD, restez en eau peu profonde et calme et gardez des séances courtes (30-45 minutes maximum).',
      problem:
        "Les parents veulent partager les sports nautiques avec leurs enfants mais s'inquiètent de la sécurité, de l'équipement adapté et de maintenir l'attention des enfants.",
      solution:
        "Utilisez la bonne taille de planche pour le tandem, assurez-vous que chaque enfant porte un PFD bien ajusté, commencez en eau peu profonde et chaude et rendez l'expérience amusante avec des jeux et des séances courtes.",
      audience: 'Parents qui veulent initier leurs enfants au paddle boarding.',
      steps: [
        "De 4 à 6 ans : montez comme passager sur la planche d'un adulte — assis devant, en tenant la poignée centrale",
        "De 6 à 10 ans : à genoux ou assis sur leur propre planche avec surveillance d'un adulte et un leash",
        '10 ans et plus : pagayent sur leur propre planche avec un adulte qui surveille à proximité',
        'Portez toujours un PFD — les enfants doivent porter un gilet de sauvetage bien ajusté en permanence',
        "Restez en eau peu profonde (à hauteur de taille pour l'adulte)",
        'Gardez des séances courtes — 30-45 minutes maximum pour les enfants de moins de 10 ans',
        'Amusez-vous — jouez à des jeux, cherchez des poissons, entraînez-vous à vous lever',
      ],
      faq: [
        {
          q: 'À quel âge un enfant peut-il faire du SUP seul ?',
          a: "Vers 10-12 ans avec surveillance, selon la capacité de nage de l'enfant et son aisance dans l'eau. Toujours dans des conditions calmes et peu profondes.",
        },
        {
          q: 'Quelle planche est la meilleure pour le SUP avec enfants ?',
          a: 'Une planche large (34"+) avec une capacité de charge élevée pour la pratique en tandem. Le SUP Explorer 11, avec sa largeur de 33" et sa capacité de 220 lbs, convient bien au duo parent-enfant.',
        },
        {
          q: 'Quel équipement de sécurité les enfants doivent-ils avoir ?',
          a: "Un gilet de sauvetage certifié CE bien ajusté, un leash (attaché à la planche de l'adulte en tandem), de la crème solaire et un chapeau.",
        },
      ],
    },
  },
  it: {
    'how-to-choose-your-sup': {
      title: 'Come Scegliere la Tua Tavola SUP',
      description:
        "Una guida completa per scegliere il paddleboard giusto in base al tuo livello di abilità, alle condizioni dell'acqua e all'uso previsto.",
      tldr: "Scegli il tuo SUP in base al livello di abilità, al tipo di acqua e all'uso principale. Le tavole All-Around si adattano ai principianti e alle acque calme. Le tavole da touring sono ideali per la pagaiata su lunghe distanze. Le tavole da yoga offrono una larghezza extra per la stabilità. Le tavole da performance sono pensate per i pagaiatori esperti in condizioni varie.",
      problem:
        "La maggior parte dei nuovi acquirenti sceglie una tavola SUP in base al prezzo o all'aspetto piuttosto che a come e dove andrà realmente a pagaiare. Questo porta a una stabilità scadente, a prestazioni inadeguate e a un'esperienza frustrante.",
      solution:
        'Abbina forma, volume e costruzione della tavola al tuo livello di abilità e al principale ambiente acquatico. Le tavole più larghe (32-34") offrono stabilità ai principianti. Le tavole più lunghe (12-14") tengono meglio la rotta per il touring. La costruzione drop-stitch a 12-15 PSI offre una rigidità paragonabile alle tavole rigide.',
      audience: 'Nuovi acquirenti di SUP, pagaiatori ricreativi e chiunque voglia passare a una tavola migliore.',
      steps: [
        'Identifica il tuo ambiente di pagaiata principale: lago, mare, fiume o misto',
        'Abbina la larghezza della tavola al tuo livello di abilità: 32-34" per i principianti, 30-32" per il livello intermedio, 28-30" per il livello avanzato',
        "Scegli la lunghezza della tavola in base all'uso: più corta per la manovrabilità, più lunga per la tenuta di rotta e la velocità",
        'Scegli la costruzione: drop-stitch gonfiabile per la portabilità, tavola rigida per le massime prestazioni',
        "Verifica la capacità di peso: il tuo peso più l'attrezzatura non deve superare l'80% del limite della tavola",
        'Controlla gli accessori inclusi: pompa, leash, pinna, zaino e kit di riparazione',
      ],
      faq: [
        {
          q: 'Quale larghezza di SUP è migliore per i principianti?',
          a: 'Da 32 a 34 pollici di larghezza offre la piattaforma più stabile per imparare. Il SUP Explorer 11, con i suoi 33" di larghezza, è ideale per i principianti su acque calme.',
        },
        {
          q: 'SUP gonfiabile o rigido?',
          a: 'Le tavole gonfiabili offrono portabilità, praticità di stoccaggio e assorbimento degli impatti. Le tavole rigide offrono la massima rigidità e velocità. Per la maggior parte degli utenti ricreativi, un gonfiabile di qualità con nucleo drop-stitch è la scelta pratica.',
        },
        {
          q: 'A quale PSI devo gonfiarla?',
          a: "Le tavole Aquafarer consigliano 12-15 PSI. A 15 PSI la tavola raggiunge la massima rigidità, paragonabile a una tavola rigida. Resta sempre entro l'intervallo di pressione indicato stampato sulla tavola.",
        },
      ],
    },
    'beginner-guide': {
      title: 'Guida per Principianti al Paddle Boarding',
      description:
        "Tutto quello che devi sapere prima della tua prima sessione di paddle boarding: dalla preparazione dell'attrezzatura alle tecniche di pagaiata di base.",
      tldr: 'Inizia su acque calme e piatte con una tavola larga e stabile. Gonfia a 12-15 PSI, aggancia il leash e usa la lunghezza corretta della pagaia (6-8" più alta della tua altezza). Tieni i piedi alla larghezza delle spalle, le ginocchia leggermente flesse e guarda l\'orizzonte.',
      problem:
        'I nuovi pagaiatori spesso saltano la preparazione fondamentale — lunghezza della pagaia sbagliata, postura scorretta o scelta di acque mosse — e questo porta a cadute, frustrazione e scoraggiamento.',
      solution:
        "Segui un piano strutturato per la prima sessione: scegli acque calme, prepara correttamente l'attrezzatura, esercitati in ginocchio prima di alzarti in piedi e padroneggia la pagaiata in avanti prima di provare le virate.",
      audience: 'Principianti assoluti che non hanno mai fatto paddle boarding.',
      steps: [
        'Scegli acque piatte e calme senza traffico di barche: un piccolo lago o una baia riparata sono ideali',
        'Gonfia la tavola a 12-15 PSI con la pompa a doppia azione',
        "Aggancia il leash a spirale alla caviglia o al polpaccio, mai all'impugnatura della tavola",
        'Inserisci la pinna e stringi la vite',
        'Regola la lunghezza della pagaia: deve essere 6-8 pollici più alta della tua altezza',
        "Inizia in ginocchio sulla tavola, pagaiando qualche colpo per sentire l'equilibrio",
        'Alzati in piedi un piede alla volta, piedi alla larghezza delle spalle, ginocchia morbide',
        "Guarda l'orizzonte, non i tuoi piedi: la tavola va dove guardi",
      ],
      faq: [
        {
          q: 'Cosa devo indossare per il paddle boarding?',
          a: 'Abbigliamento sportivo ad asciugatura rapida, giubbotto di salvataggio, crema solare e cappello. In acqua fredda, indossa una muta. Indossa sempre il leash e porta un telefono in custodia impermeabile.',
        },
        {
          q: 'Come risalgo sulla tavola se cado?',
          a: "Resta calmo. Nuota fino alla tavola, afferra l'impugnatura centrale e dai calci con le gambe mentre ti tiri su sulla tavola in un unico movimento. Torna prima in posizione inginocchiata, poi alzati.",
        },
        {
          q: 'Quali condizioni di vento sono sicure?',
          a: 'Principianti: venti sotto i 10 mph (5 nodi). Se il vento soffia verso il largo, non uscire. Controlla le previsioni e ricorda che il vento offshore è pericoloso.',
        },
      ],
    },
    'safety-tips': {
      title: 'Consigli di Sicurezza per gli Sport Acquatici',
      description:
        "Linee guida di sicurezza essenziali per paddle boarding, kayak e nautica: dai controlli dell'attrezzatura alla consapevolezza meteorologica.",
      tldr: "Indossa sempre un giubbotto di salvataggio certificato CE, controlla meteo e condizioni dell'acqua prima della partenza, porta con te dispositivi di comunicazione, non pagaiare mai da solo in acque sconosciute e conosci i limiti nominali della tua attrezzatura.",
      problem:
        "La maggior parte degli incidenti negli sport acquatici deriva da una preparazione inadeguata: niente giubbotto di salvataggio, meteo ignorato o uso dell'attrezzatura oltre i limiti di progetto.",
      solution:
        "Adotta una checklist di sicurezza pre-partenza: verifica le condizioni dell'attrezzatura, controlla meteo e temperatura dell'acqua, informa qualcuno del tuo itinerario e indossa sempre un galleggiamento adeguato.",
      audience: 'Tutti i praticanti di sport acquatici: utenti di SUP, kayak, gommoni e RIB.',
      steps: [
        'Controlla le previsioni del tempo: evita venti oltre i 15 mph e temporali',
        "Verifica la temperatura dell'acqua: acqua fredda (<60°F/15°C) richiede una muta o una tuta stagna",
        "Ispeziona l'attrezzatura: controlla perdite, crepe e gonfiaggio corretto",
        'Indossa sempre un giubbotto di salvataggio certificato CE',
        "Aggancia il leash (SUP) o assicura tutta l'attrezzatura sciolta (kayak/barca)",
        "Compila un piano di navigazione: di' a qualcuno dove vai e quando torni",
        'Porta mezzi di comunicazione: custodia impermeabile per il telefono o radio VHF',
        "Conosci i tuoi limiti: resta entro il tuo livello di abilità e i limiti nominali dell'attrezzatura",
      ],
      faq: [
        {
          q: 'Devo indossare il giubbotto di salvataggio su un SUP?',
          a: 'Sì. Molte giurisdizioni richiedono legalmente un giubbotto di salvataggio su qualsiasi imbarcazione, compresi i SUP. Anche dove non è obbligatorio, un giubbotto certificato CE è un dispositivo di sicurezza essenziale.',
        },
        {
          q: "Qual è l'infortunio più comune negli sport acquatici?",
          a: "L'immersione in acqua fredda e l'esaurimento sono i rischi gravi più comuni. Vesti sempre in base alla temperatura dell'acqua, non dell'aria.",
        },
        {
          q: 'Come faccio a verificare che le condizioni siano sicure?',
          a: "Usa le previsioni meteo marine. Controlla velocità del vento, altezza delle onde e temperatura dell'acqua. I principianti dovrebbero restare in condizioni con vento sotto i 10 mph e onde sotto 1 ft.",
        },
      ],
    },
    'inflatable-vs-hard': {
      title: 'SUP Gonfiabile vs Rigido: Quale Scegliere?',
      description:
        'Un confronto obiettivo tra tavole SUP gonfiabili e rigide su prestazioni, portabilità, durata e rapporto qualità-prezzo.',
      tldr: 'Le tavole gonfiabili vincono per portabilità, stoccaggio e resistenza agli urti. Le tavole rigide vincono per la massima rigidità e velocità. Le moderne tavole gonfiabili drop-stitch a 15 PSI colmano il 90% del divario prestazionale.',
      problem:
        'Gli acquirenti sono indecisi tra la comodità delle tavole gonfiabili e la reputazione prestazionale delle tavole rigide, senza dati chiari su come si confrontano realmente.',
      solution:
        'Confronta criteri specifici — rigidità, peso, ingombro da ripiegata, durata, riparabilità e costo — con il tuo reale modello di utilizzo. Per la maggior parte dei pagaiatori ricreativi, un gonfiabile di qualità è la scelta migliore.',
      audience: 'Acquirenti di SUP indecisi tra costruzione gonfiabile e rigida.',
      steps: [
        'Valuta le esigenze di portabilità: il gonfiabile si piega a misura di zaino, la tavola rigida richiede il portapacchi',
        'Confronta la rigidità: il gonfiabile a 15 PSI ha una flessione minima, la tavola rigida ha flessione zero',
        'Valuta lo stoccaggio: il gonfiabile si ripone in un armadio, la tavola rigida richiede garage o rastrelliera',
        'Considera la durata: il gonfiabile assorbe gli urti, la tavola rigida può ammaccarsi e rompersi',
        'Valuta la riparabilità: le toppe sui gonfiabili sono semplici, le riparazioni delle tavole rigide richiedono un professionista',
        'Controlla le prestazioni: le tavole rigide hanno un leggero vantaggio di velocità, i gonfiabili offrono un migliore assorbimento degli urti',
      ],
      faq: [
        {
          q: 'I SUP gonfiabili sono rigidi come le tavole rigide?',
          a: "A 15 PSI con costruzione drop-stitch, la differenza di rigidità è minima per l'uso ricreativo. Solo i racer competitivi e i surfisti noteranno la differenza.",
        },
        {
          q: 'Quanto dura un SUP gonfiabile?',
          a: "Con la giusta cura, 5-10 anni. Il PVC di qualità marina resiste ai raggi UV e all'abrasione. Conservala lontano dalla luce solare diretta quando non la usi e risciacqua con acqua dolce dopo l'uso in acqua salata.",
        },
        {
          q: 'Posso usare un SUP gonfiabile per il surf?',
          a: 'Sì, ma le tavole gonfiabili sono migliori per surf da piccolo a moderato (sotto 3 ft). Per il surf dedicato, una tavola rigida offre migliore reattività e controllo del rail.',
        },
      ],
    },
    'weather-conditions': {
      title: 'Capire le Condizioni Meteo per il Paddle Boarding',
      description:
        'Impara a leggere vento, onde, maree e modelli meteorologici per prendere decisioni sicure in acqua.',
      tldr: "Controlla tre cose prima di ogni partenza: velocità del vento (sotto 10 mph per i principianti), altezza delle onde (sotto 1 ft per i principianti) e temperatura dell'acqua (vesti per l'acqua, non per l'aria). Il vento offshore è pericoloso a qualsiasi livello di abilità.",
      problem:
        "La maggior parte degli incidenti legati al meteo avviene perché i pagaiatori valutano male le condizioni: controllano la temperatura dell'aria ma non quella dell'acqua, o non capiscono che il vento offshore può spingerli al largo.",
      solution:
        "Usa una valutazione meteo strutturata pre-partenza: direzione e velocità del vento, periodo e altezza delle onde, stato della marea e temperatura dell'acqua. Comprendi come ogni fattore influisce sulla tua sicurezza.",
      audience: 'Tutti i pagaiatori che vanno in acque aperte: laghi, baie, fiumi e oceano.',
      steps: [
        'Controlla velocità e direzione del vento: il vento offshore (che soffia da terra verso il mare) è il più pericoloso',
        "Valuta le condizioni delle onde: il periodo delle onde conta quanto l'altezza",
        'Conosci la marea: le correnti di marea possono essere più forti della tua velocità di pagaiata',
        "Misura la temperatura dell'acqua: sotto 60°F/15°C serve una protezione termica",
        'Controlla la visibilità: nebbia e pioggia intensa riducono la visibilità e aumentano il rischio di collisioni',
        'Conosci i pericoli locali: rocce sommerse, correnti forti, zone di traffico nautico',
      ],
      faq: [
        {
          q: 'Quale velocità del vento è troppo alta per il SUP?',
          a: 'Principianti: oltre 10 mph (8 nodi). Intermedi: oltre 15 mph (13 nodi). Avanzati: oltre 20 mph (17 nodi). In caso di dubbio, non uscire.',
        },
        {
          q: 'Cosa significa periodo delle onde?',
          a: 'Il periodo delle onde è il tempo tra onde successive. Periodi corti (sotto 8 secondi) significano onde ripide e increspate. Periodi lunghi (oltre 12 secondi) significano mareggiate più lisce e prevedibili.',
        },
        {
          q: 'Posso pagaiare sotto la pioggia?',
          a: "La pioggia leggera di solito è sicura. La pioggia intensa riduce la visibilità e può indicare cambiamenti del vento. I temporali richiedono l'evacuazione immediata dall'acqua.",
        },
      ],
    },
    'understanding-specs': {
      title: 'Come Leggere le Specifiche di una Tavola SUP',
      description:
        'Una guida tecnica per capire le specifiche delle tavole SUP: volume, dimensioni, costruzione e cosa significano per le prestazioni.',
      tldr: 'Specifiche chiave: il volume (litri) determina galleggiabilità e capacità di peso, la larghezza determina la stabilità, la lunghezza determina tenuta di rotta e velocità, lo spessore determina la rigidità e la pressione nominale PSI determina la pressione di gonfiaggio per prestazioni ottimali.',
      problem:
        'Le schede prodotto elencano numeri senza contesto, lasciando gli acquirenti incerti su quali specifiche contano davvero per il loro utilizzo.',
      solution:
        'Traduci ogni specifica in prestazioni reali: volume per il galleggiamento, larghezza per la stabilità, lunghezza per lo scivolamento, spessore per la rigidità e costruzione per la durata.',
      audience: 'Pagaiatori intermedi e acquirenti tecnici che vogliono prendere decisioni basate sui dati.',
      steps: [
        "Controlla il volume (litri): il tuo peso più l'attrezzatura non deve superare l'80% del volume nominale della tavola",
        'Controlla la larghezza: più larga (32-34") = più stabilità, più stretta (28-30") = più velocità',
        'Controlla la lunghezza: più lunga (12-14") = migliore tenuta di rotta, più corta (10-11") = migliore manovrabilità',
        'Controlla lo spessore: 6" è lo standard, 8" offre più rigidità e capacità di peso',
        'Controlla la pressione nominale PSI: gonfia al PSI massimo nominale per una rigidità ottimale',
        'Controlla i materiali di costruzione: densità del drop-stitch, strati di PVC, rinforzo dei rail',
      ],
      faq: [
        {
          q: 'Cosa significa drop-stitch?',
          a: 'Il drop-stitch è un metodo di costruzione in cui migliaia di fili collegano lo strato superiore e quello inferiore della tavola. Questo consente il gonfiaggio ad alta pressione (12-15 PSI) per una rigidità estrema.',
        },
        {
          q: 'Qual è il rapporto ideale peso-volume?',
          a: 'Un buon obiettivo è circa 5-6 libbre di peso del pagaiatore per litro di volume della tavola. Un pagaiatore di 220 libbre dovrebbe cercare tavole con 180+ litri di volume.',
        },
        {
          q: 'Il peso della tavola conta?',
          a: 'Sì. Le tavole più leggere (sotto 20 libbre) sono più facili da sollevare e trasportare. Le tavole più pesanti (25+ libbre) spesso indicano una costruzione in PVC multistrato più durevole.',
        },
      ],
    },
    'sup-maintenance': {
      title: 'Come Pulire e Riporre il Tuo SUP Gonfiabile',
      description:
        'Guida alla manutenzione passo dopo passo per massimizzare la durata della tua tavola SUP gonfiabile.',
      tldr: 'Risciacqua con acqua dolce dopo ogni utilizzo, asciuga completamente prima di riporre, sgonfia e arrotola in modo morbido (senza tendere al massimo), conserva in un luogo fresco e asciutto lontano dalla luce solare diretta e controlla le cuciture ogni mese.',
      problem:
        'Stoccaggio e pulizia impropri sono le principali cause di guasto prematuro nei SUP gonfiabili: muffa, danni UV e delaminazione delle cuciture.',
      solution:
        'Segui una routine costante post-sessione: risciacqua, asciuga, ispeziona, sgonfia e riponi. Usa un sapone delicato per lo sporco ostinato. Non riporre mai la tavola bagnata o alla luce solare diretta.',
      audience: 'Tutti i possessori di SUP gonfiabile che vogliono far durare la tavola 5+ anni.',
      steps: [
        "Risciacqua la tavola con acqua dolce subito dopo l'uso, soprattutto dopo l'acqua salata",
        'Pulisci con sapone delicato e una spugna morbida: evita prodotti chimici aggressivi o idropulitrici',
        "Asciuga completamente la tavola: apri la valvola per far uscire l'acqua intrappolata",
        'Ispeziona per individuare danni: controlla cuciture, valvola e superficie per forature',
        'Sgonfia completamente: rimuovi il nucleo della valvola per uno sgonfiaggio totale',
        'Arrotola la tavola in modo morbido: parti dalla punta, evita pieghe marcate',
        'Conserva nella borsa da trasporto in un luogo fresco e asciutto, lontano dalla luce solare diretta',
      ],
      faq: [
        {
          q: 'Posso lasciare il mio SUP gonfio per tutta la stagione?',
          a: 'Sì, ma tienilo lontano dalla luce solare diretta quando non lo usi. Per lo stoccaggio prolungato si consiglia uno sgonfiaggio parziale (8-10 PSI).',
        },
        {
          q: 'Come riparo una foratura?',
          a: 'Pulisci la zona, taglia una toppa con angoli arrotondati, applica la colla, premi con fermezza e attendi 24 ore prima di gonfiare. Le tavole Aquafarer includono un kit di riparazione.',
        },
        {
          q: 'Ogni quanto devo controllare la valvola?',
          a: "Mensilmente. La valvola è il punto di guasto più comune. Controlla che il perno della valvola si muova liberamente e che l'O-ring sia integro.",
        },
      ],
    },
    'paddling-techniques': {
      title: 'Tecniche Essenziali di Pagaiata SUP',
      description:
        'Padroneggia la pagaiata in avanti, la pagaiata a ventaglio e la virata cross-bow per pagaiare in modo efficiente in qualsiasi condizione.',
      tldr: 'La pagaiata in avanti usa il core, non le braccia. La pagaiata a ventaglio fa girare la tavola. La virata cross-bow è il perno più efficiente. Tieni la pagaia verticale e immergi completamente la pala per un trasferimento di potenza massimo.',
      problem:
        'La maggior parte dei pagaiatori usa colpi dominati dalle braccia che sprecano energia e causano affaticamento alle spalle. Una tecnica scadente rende inoltre la tavola difficile da controllare con vento e onde corte.',
      solution:
        'Impara tre colpi essenziali — avanti, a ventaglio e virata cross-bow — con la corretta meccanica del corpo. Esercitati su acque calme prima di passare a condizioni impegnative.',
      audience: 'Pagaiatori che vogliono pagaiare più a lungo, più velocemente e con meno affaticamento.',
      steps: [
        "Pagaiata in avanti: spingiti in avanti, pianta la pala completamente, tira indietro con la rotazione del busto (non con le braccia), esci all'altezza della caviglia",
        'Pagaiata a ventaglio: allunga il braccio al rail, spazza la pala in un ampio arco verso la poppa, fai girare la tavola dal lato opposto alla pagaia',
        'Virata cross-bow: posiziona la pagaia sul lato opposto della tavola senza cambiare mano, tira verso la poppa',
        "Brace basso: usa un brace basso per la stabilità tra le onde corte: appoggia la pala in piano sulla superficie dell'acqua",
        'Pagaiata di trazione: allungati lateralmente e tira la tavola orizzontalmente verso la pagaia',
      ],
      faq: [
        {
          q: 'Come faccio a pagaiare in linea retta?',
          a: "Usa una lunghezza di colpo costante su entrambi i lati. Cambia lato ogni 5-10 colpi. Guarda un punto fisso all'orizzonte come riferimento.",
        },
        {
          q: 'Devo piegare le ginocchia?',
          a: 'Sì. Tieni una leggera flessione delle ginocchia come ammortizzatori. Le ginocchia bloccate trasmettono ogni increspatura al core e riducono la stabilità.',
        },
        {
          q: 'Come pagaio contro vento?',
          a: 'Abbassa la postura, usa colpi più corti e rapidi e resta più vicino alla riva, dove il vento è spesso ridotto. Se il vento è troppo forte, non uscire.',
        },
      ],
    },
    'sup-fitness': {
      title: 'SUP Fitness: Allenamento Full Body in Acqua',
      description: 'Come il paddle boarding sviluppa forza del core, equilibrio e forma cardiovascolare.',
      tldr: "Il SUP coinvolge core, gambe, schiena e spalle in ogni colpo. Una sessione di un'ora brucia 300-500 calorie. Pagaiare contro vento o corrente raddoppia l'intensità. Lo yoga SUP aggiunge flessibilità e lavoro sull'equilibrio.",
      problem:
        "Molte persone vedono il paddle boarding come un'attività occasionale piuttosto che come un vero strumento di fitness, perdendo il suo potenziale per un condizionamento completo del corpo.",
      solution:
        'Struttura le sessioni SUP con obiettivi fitness specifici: pagaiata di resistenza per il cardio, sprint a intervalli per la potenza, yoga SUP per la flessibilità e pagaiata su distanza per la resistenza muscolare.',
      audience:
        'Appassionati di fitness alla ricerca di un allenamento full body a basso impatto e ad alto coinvolgimento.',
      steps: [
        'Riscaldati a terra: circonduzioni delle braccia, torsioni del busto e oscillazioni delle gambe per 5 minuti',
        'Inizia con 10 minuti di pagaiata costante a intensità moderata',
        "Passa all'allenamento a intervalli: 2 minuti di pagaiata intensa, 2 minuti di recupero facile",
        "Inserisci posizioni di yoga SUP: cane a testa in giù, guerriero II e posizione dell'albero sulla tavola",
        'Termina con una pagaiata leggera e stretching statico sulla tavola',
      ],
      faq: [
        {
          q: 'Il SUP è meglio della corsa per il fitness?',
          a: 'Il SUP offre benefici cardiovascolari paragonabili con un impatto articolare minore. Coinvolge inoltre la parte superiore del corpo e il core più della corsa.',
        },
        {
          q: 'Quante calorie brucia il SUP?',
          a: "Circa 300-500 calorie all'ora a intensità moderata. Le gare o la pagaiata contro vento possono bruciare 600-800 calorie all'ora.",
        },
        {
          q: 'Posso costruire muscoli con il SUP?',
          a: "Sì. La pagaiata sviluppa spalle, schiena e muscoli del core. L'equilibrio coinvolge gambe e muscoli stabilizzatori. È un allenamento di forza che coinvolge tutto il corpo.",
        },
      ],
    },
    'sup-yoga': {
      title: 'SUP Yoga: Guida Completa a Pagaiata e Yoga',
      description: 'Combina paddle boarding e yoga per migliorare equilibrio, forza e consapevolezza in acqua.',
      tldr: "Lo yoga SUP aggiunge un elemento di instabilità che aumenta notevolmente l'attivazione del core rispetto allo yoga a terra. Inizia con le posizioni di base su una tavola larga e stabile in acque calme. Usa un deck pad antiscivolo. Non praticare mai lo yoga SUP da solo.",
      problem:
        "I tappetini yoga tradizionali offrono una superficie perfettamente stabile, eliminando la sfida dell'equilibrio che rende lo yoga SUP particolarmente efficace per la forza del core e la concentrazione.",
      solution:
        'Usa una tavola SUP extra larga (34"+) con un pad di trazione full-deck. Pratica in acque calme e poco profonde. Inizia con le posizioni fondamentali prima di tentare le inversioni.',
      audience:
        "Praticanti di yoga e pagaiatori che vogliono combinare l'allenamento dell'equilibrio con la consapevolezza.",
      steps: [
        "Ancora la tavola in acque poco profonde e calme: usa un'ancora da sabbia o legala a un pontile",
        'Inizia con le posizioni da seduti: seduta facile, posizione della barca, torsione da seduti',
        'Passa alle posizioni in ginocchio: tavolo, gatto-mucca, fulmine',
        "Passa alle posizioni in piedi: montagna, guerriero I, guerriero II, posizione dell'albero",
        'Esercita le posizioni di equilibrio: mezza luna, aquila, danzatore',
        "Termina con savasana: sdraiati sulla tavola e percepisci il movimento dell'acqua",
      ],
      faq: [
        {
          q: 'Quale tavola è migliore per lo yoga SUP?',
          a: 'Una tavola larga (34"+) con un pad di trazione a tutta lunghezza offre la piattaforma più stabile. Il SUP Tour 12 offre un buon equilibrio tra stabilità e scivolamento.',
        },
        {
          q: 'Lo yoga SUP è pericoloso?',
          a: 'Non più dello yoga a terra se praticato in sicurezza. Usa acque calme e poco profonde. Indossa il leash. Pratica con un partner. Evita le acque profonde nelle prime sessioni.',
        },
        {
          q: 'Ho bisogno di attrezzatura speciale?',
          a: 'Una tavola larga e stabile, un pad di trazione full-deck, il leash e un PFD. Alcuni praticanti usano un tappetino impermeabile per una presa maggiore.',
        },
      ],
    },
    'sup-fishing': {
      title: 'Guida alla Pesca con SUP: Come Pescare dal Paddle Board',
      description:
        "Tutto quello che devi sapere sulla pesca dal paddle board: preparazione dell'attrezzatura, consigli di stabilità e tecniche.",
      tldr: 'La pesca con SUP offre un approccio silenzioso, l\'accesso alle acque basse e il lancio a 360 gradi. Usa una tavola larga e stabile (34"+), installa i portacanne e usa un frigorifero portatile o una cassa come piano attrezzatura. Ancora in condizioni di vento. Indossa sempre un PFD.',
      problem:
        "Le barche da pesca standard sono costose da mantenere e non possono accedere alle acque basse. I kayak limitano la mobilità. La pesca con SUP risolve entrambi i problemi ma richiede adattamenti specifici dell'attrezzatura.",
      solution:
        "Allestisci un SUP stabile con portacanne, una cassa per l'attrezzatura e un sistema di ancoraggio. Usa la portabilità della tavola per raggiungere punti di pesca remoti che le barche non possono raggiungere.",
      audience:
        'Pescatori che vogliono pescare in acque basse o luoghi remoti, o che preferiscono una piattaforma di pesca leggera e portatile.',
      steps: [
        "Scegli una tavola larga (34\"+) con un'elevata capacità di peso per l'attrezzatura",
        'Installa i portacanne sul deck con sistemi a binario o a cinghie',
        'Usa una cassa o un frigorifero portatile impermeabile fissato al deck anteriore per il materiale',
        'Porta una piccola ancora o un paletto di ancoraggio per le condizioni ventose',
        'Indossa un PFD con tasche per attrezzi e telefono',
        'Esercitati a lanciare da posizione inginocchiata prima di alzarti in piedi',
      ],
      faq: [
        {
          q: 'Posso stare in piedi e pescare su un SUP?',
          a: 'Sì. Una tavola larga 34"+ offre una stabilità sufficiente per stare in piedi e lanciare. Esercitati prima su acque calme.',
        },
        {
          q: 'Quali pesci posso insidiare da un SUP?',
          a: 'I SUP sono eccellenti per il bass nei laghi, il redfish nelle acque basse, la trota nei fiumi e le specie costiere in baie ed estuari.',
        },
        {
          q: 'Come sbarcare un pesce da un SUP?',
          a: 'Inginocchiati per la stabilità. Usa un guadino o una pinza per le labbra. Tieni il pesce basso per evitare cadute. Rilascialo o sistemalo in un frigorifero portatile.',
        },
      ],
    },
    'inflatable-repair': {
      title: 'Come Riparare il Tuo Battello o SUP Gonfiabile',
      description:
        'Guida passo dopo passo alla riparazione di forature, problemi alla valvola e danni alle cuciture su imbarcazioni gonfiabili.',
      tldr: "Le piccole forature (sotto 1/4\") sono riparabili con il kit di toppe incluso. Pulisci la zona, applica l'adesivo per PVC, premi la toppa e attendi 24 ore. Le perdite alla valvola richiedono di solito la sostituzione dell'O-ring. Strappi grandi o delaminazione delle cuciture richiedono un intervento professionale.",
      problem:
        'Le piccole forature e i problemi alla valvola sono comuni ma facili da risolvere. Senza una tecnica di riparazione corretta, gli utenti o pagano troppo per un servizio professionale o peggiorano il danno.',
      solution:
        'Identifica il tipo di danno — foratura, perdita alla valvola o problema alle cuciture — e applica il metodo di riparazione appropriato. La maggior parte delle riparazioni richiede 30 minuti più il tempo di polimerizzazione.',
      audience: 'Proprietari di SUP, kayak e battelli gonfiabili che vogliono gestire da soli le riparazioni di base.',
      steps: [
        "Individua la perdita: gonfia completamente, ascolta l'aria, passa la mano o usa acqua saponata",
        'Segna la perdita con una penna o del nastro',
        'Pulisci la zona intorno alla perdita con alcol isopropilico: almeno 2 pollici attorno al danno',
        'Ruvida la superficie con carta vetrata fine per una migliore adesione della colla',
        "Applica l'adesivo per PVC sia sulla toppa sia sulla superficie della tavola",
        "Attendi 5 minuti finché l'adesivo non diventa appiccicoso",
        "Premi la toppa con fermezza e spiana le bolle d'aria con un rullo o una carta di credito",
        'Lascia polimerizzare per 24 ore prima di gonfiare a piena pressione',
      ],
      faq: [
        {
          q: 'Posso riparare una foratura in acqua?',
          a: 'Le riparazioni di emergenza con toppa e nastro ti permettono di tornare a riva. Le riparazioni complete richiedono condizioni asciutte e 24 ore di polimerizzazione.',
        },
        {
          q: 'Come sistemo una valvola che perde?',
          a: "Rimuovi il nucleo della valvola con l'attrezzo incluso, controlla che l'O-ring non sia danneggiato, sostituiscilo se necessario e reinserisci il nucleo ben stretto.",
        },
        {
          q: 'Quale colla devo usare per le riparazioni in PVC?',
          a: 'Usa un adesivo specifico per PVC come HH-66 o Clifton. La super colla standard non aderisce bene ai materiali in PVC gonfiabile.',
        },
      ],
    },
    'kayak-techniques': {
      title: 'Tecniche Essenziali di Pagaiata in Kayak',
      description:
        'Padroneggia la pagaiata in kayak: colpo in avanti, colpo a ventaglio, edging e brace per un kayaking efficiente e sicuro.',
      tldr: "Il colpo in avanti del kayak usa la rotazione del busto, non le braccia. Il colpo a ventaglio fa girare il kayak. L'edging migliora le virate. Il brace basso previene il capovolgimento tra le onde. Tieni l'asta della pagaia verticale e la pala completamente immersa.",
      problem:
        'Una tecnica di pagaiata inefficiente causa affaticamento alle spalle, avanzamento lento e difficoltà di controllo del kayak con vento e corrente.',
      solution:
        'Impara la corretta tecnica di pagaiata guidata dal busto con quattro colpi essenziali: avanti, indietro, a ventaglio e brace.',
      audience: 'Kayaker principianti e intermedi che vogliono pagaiare con meno sforzo e più controllo.',
      steps: [
        "Colpo in avanti: ruota il busto, pianta la pala vicino ai piedi, tira oltre l'anca, esci all'altezza dell'anca",
        'Colpo indietro: pianta la pala dietro di te e spingi in avanti per rallentare o invertire la marcia',
        'Colpo a ventaglio: allunga il braccio, spazza la pala in un ampio arco verso la poppa per far girare il kayak',
        "Brace basso: appoggia la pala in piano sulla superficie dell'acqua per la stabilità tra le onde",
        'Edging: inclina leggermente il kayak sul bordo per intagliare le virate',
      ],
      faq: [
        {
          q: 'Come faccio a mantenere il kayak dritto?',
          a: 'Usa colpi costanti su lati alternati. Impara il colpo a J (un leggero gancio alla fine del colpo in avanti) per correggere la rotta senza cambiare lato.',
        },
        {
          q: "Qual è l'infortunio più comune nel kayak?",
          a: 'Lo sforzo alla spalla causato da una pagaiata dominata dalle braccia. Usa la rotazione del busto per coinvolgere i muscoli dorsali più grandi e ridurre il carico sulle spalle.',
        },
        {
          q: 'Come pagaio con il vento?',
          a: 'Tieni la prua puntata controvento. Usa colpi più corti e potenti. Se il vento è laterale, inclina leggermente il kayak controvento.',
        },
      ],
    },
    'multi-day-trip': {
      title: 'Organizzare un Viaggio di Più Giorni in Kayak o SUP',
      description:
        "Come pianificare e realizzare un viaggio di pagaiata di più giorni: pianificazione del percorso, imballaggio dell'attrezzatura, campeggio e sicurezza.",
      tldr: "Pianifica 10-15 miglia al giorno. Imballa l'attrezzatura in sacche stagne impermeabili, distribuisci il peso in modo uniforme ed esercitati a caricare la tavola o il kayak prima del viaggio. Compila un piano di navigazione. Porta acqua, cibo, riparo, navigazione e comunicazione.",
      problem:
        "I viaggi di più giorni falliscono per eccesso di bagaglio, scarsa pianificazione del percorso o sottovalutazione di meteo e corrente: ne derivano esaurimento, guasti all'attrezzatura o incidenti.",
      solution:
        "Usa un approccio di pianificazione sistematico: scelta del percorso, checklist dell'attrezzatura, pianificazione del cibo, briefing sulla sicurezza e piano di emergenza.",
      audience: 'Pagaiatori esperti che organizzano la loro prima spedizione di più giorni.',
      steps: [
        'Scegli un percorso con campeggi attrezzati e punti di uscita',
        'Pianifica 10-15 miglia al giorno tenendo conto di vento e corrente',
        "Controlla le tabelle delle maree e le previsioni del tempo per l'intera finestra del viaggio",
        "Imballa l'attrezzatura in sacche stagne impermeabili: 20-30 libbre di peso totale dell'attrezzatura",
        'Distribuisci il peso in modo uniforme: gli oggetti più pesanti al centro',
        'Compila un piano di navigazione dettagliato con qualcuno a terra',
        'Porta la navigazione: carta nautica cartacea, bussola e GPS di riserva',
        "Prepara riparo d'emergenza, cibo extra e kit di primo soccorso",
      ],
      faq: [
        {
          q: 'Qual è la distanza giornaliera ideale?',
          a: '10-15 miglia al giorno per pagaiatori esperti. I principianti dovrebbero pianificare 5-8 miglia. Prevedi sempre un margine di tempo per il meteo.',
        },
        {
          q: 'Quanta acqua devo portare?',
          a: "1 gallone a persona al giorno. In condizioni di caldo, 1,5 galloni. Porta un filtro per l'acqua o pastiglie depuranti per i rifornimenti.",
        },
        {
          q: "Qual è l'articolo di sicurezza più importante?",
          a: 'Le comunicazioni. Una radio VHF o un messaggero satellitare possono salvare la vita in caso di emergenza. I telefoni cellulari non sono affidabili nelle aree remote.',
        },
      ],
    },
    'choosing-paddle': {
      title: 'Come Scegliere la Pagaia Giusta per SUP e Kayak',
      description:
        'Una guida a materiali delle pagaiate, forme delle pale, tipi di asta e dimensionamento per SUP e kayak.',
      tldr: "Lunghezza della pagaia: le pagaiate da SUP devono essere 6-8\" più alte della tua altezza. Le pagaiate da kayak dipendono dalla larghezza dell'imbarcazione e dalla lunghezza del busto. Forma della pala: le pale diedrali tengono meglio la rotta, le pale piatte offrono più presa. Materiale dell'asta: il carbonio è il più leggero, la fibra di vetro è il miglior rapporto qualità-prezzo, l'alluminio è l'opzione economica.",
      problem:
        'Usare la pagaia della misura o del materiale sbagliato causa affaticamento inutile, scarsa efficienza del colpo e stress alle articolazioni.',
      solution:
        "Abbina lunghezza della pagaia, forma della pala, materiale dell'asta e flessibilità al tuo stile di pagaiata, alla tua corporatura e al tuo budget.",
      audience: 'Pagaiatori di SUP e kayak che scelgono la loro prima o prossima pagaia.',
      steps: [
        'Per il SUP: misura l\'altezza della pagaia: 6-8" più alta della tua altezza per la pagaiata generica',
        "Per il kayak: misura la lunghezza del busto e la larghezza dell'imbarcazione: le imbarcazioni più strette richiedono pagaiate più corte",
        'Scegli il materiale della pala: nylon per il budget, fibra di vetro per il rapporto qualità-prezzo, carbonio per le prestazioni',
        'Scegli la forma della pala: diedrale per un tracking fluido, piatta per la potenza, a cucchiaio per le gare',
        'Scegli il tipo di asta: dritta per il SUP, curva per il SUP da gara, standard per il kayak',
        'Controlla la flessibilità: le aste più rigide trasferiscono più potenza, le aste flessibili riducono lo stress alle articolazioni',
      ],
      faq: [
        {
          q: 'Qual è il miglior materiale per una pagaia?',
          a: 'La fibra di vetro offre il miglior equilibrio tra peso, durata e costo. Il carbonio è più leggero ma più costoso e fragile. Il nylon è pesante ma praticamente indistruttibile.',
        },
        {
          q: 'Come faccio a sapere se la mia pagaia ha la lunghezza giusta?',
          a: "Per il SUP: tieni la pagaia verticale accanto a te: l'impugnatura deve arrivare al polso quando alzi il braccio sopra la testa. Per il kayak: la pala deve entrare in acqua con un angolo comodo senza doverti allungare troppo.",
        },
        {
          q: 'Devo prendere una pagaia in un unico pezzo o regolabile?',
          a: "Le pagaiate regolabili sono adatte all'uso condiviso e ai viaggi. Le pagaiate in un unico pezzo sono più leggere, più rigide e più efficienti per un uso dedicato.",
        },
      ],
    },
    'sup-with-kids': {
      title: 'SUP con Bambini: Guida Completa per le Famiglie',
      description: 'Come portare i bambini al paddle boarding in sicurezza: età consigliate, attrezzatura e attività.',
      tldr: 'I bambini dai 6 anni in su possono stare su un SUP con un adulto. I bambini dai 10 anni in su possono pagaiare sulla loro tavola sotto supervisione. Usa una tavola larga e stabile, indossate sempre i PFD, restate in acque basse e calme e mantenete sessioni brevi (massimo 30-45 minuti).',
      problem:
        "I genitori vogliono condividere gli sport acquatici con i loro figli ma temono per la sicurezza, la misura dell'attrezzatura e la capacità di coinvolgere i bambini.",
      solution:
        'Usa la misura giusta della tavola per la navigazione a due, assicurati che ogni bambino indossi un PFD ben adattato, inizia in acque basse e calde e rendi il tutto divertente con giochi e sessioni brevi.',
      audience: 'Genitori che vogliono avvicinare i loro figli al paddle boarding.',
      steps: [
        "Età 4-6: viaggiano come passeggeri sulla tavola di un adulto: si siedono davanti e tengono l'impugnatura centrale",
        'Età 6-10: si inginocchiano o si siedono sulla loro tavola con supervisione di un adulto e leash',
        'Età 10+: pagaiare sulla propria tavola con supervisione di un adulto nelle vicinanze',
        'Indossate sempre un PFD: i bambini devono indossare sempre un giubbotto di salvataggio ben adattato',
        "Restate in acque basse (all'altezza della vita per l'adulto)",
        'Mantieni sessioni brevi: massimo 30-45 minuti per i bambini sotto i 10 anni',
        'Rendilo divertente: giocate, cercate pesci, esercitatevi ad alzarvi in piedi',
      ],
      faq: [
        {
          q: 'A quale età un bambino può fare SUP da solo?',
          a: "Intorno ai 10-12 anni con supervisione, a seconda dell'abilità di nuoto del bambino e della sua sicurezza in acqua. Sempre in condizioni calme e di acque basse.",
        },
        {
          q: 'Quale tavola è migliore per il SUP con bambini?',
          a: 'Una tavola larga (34"+) con un\'elevata capacità di peso per la navigazione a due. Il SUP Explorer 11, con i suoi 33" di larghezza e 220 libbre di capacità, funziona bene per genitore più bambino.',
        },
        {
          q: 'Quale attrezzatura di sicurezza serve ai bambini?',
          a: "Un giubbotto di salvataggio certificato CE ben adattato, un leash (agganciato alla tavola dell'adulto per la navigazione a due), crema solare e cappello.",
        },
      ],
    },
  },
};

export const GUIDE_META_L10N: Record<string, Record<string, Record<string, string>>> = {
  de: {
    category: {
      'buying-guide': 'Kaufberatung',
      tutorial: 'Anleitung',
      safety: 'Sicherheit',
      technical: 'Technik',
      maintenance: 'Wartung',
      lifestyle: 'Lifestyle',
      planning: 'Planung',
    },
    difficulty: { beginner: 'Anfänger', intermediate: 'Fortgeschritten', advanced: 'Experte' },
    waterType: { lake: 'See', sea: 'Meer', river: 'Fluss' },
  },
  es: {
    category: {
      'buying-guide': 'Guía de compra',
      tutorial: 'Tutorial',
      safety: 'Seguridad',
      technical: 'Técnica',
      maintenance: 'Mantenimiento',
      lifestyle: 'Estilo de vida',
      planning: 'Planificación',
    },
    difficulty: { beginner: 'Principiante', intermediate: 'Intermedio', advanced: 'Avanzado' },
    waterType: { lake: 'Lago', sea: 'Mar', river: 'Río' },
  },
  fr: {
    category: {
      'buying-guide': "Guide d'achat",
      tutorial: 'Tutoriel',
      safety: 'Sécurité',
      technical: 'Technique',
      maintenance: 'Entretien',
      lifestyle: 'Lifestyle',
      planning: 'Planification',
    },
    difficulty: { beginner: 'Débutant', intermediate: 'Intermédiaire', advanced: 'Avancé' },
    waterType: { lake: 'Lac', sea: 'Mer', river: 'Rivière' },
  },
  it: {
    category: {
      'buying-guide': "Guida all'acquisto",
      tutorial: 'Tutorial',
      safety: 'Sicurezza',
      technical: 'Tecnica',
      maintenance: 'Manutenzione',
      lifestyle: 'Stile di vita',
      planning: 'Pianificazione',
    },
    difficulty: { beginner: 'Principiante', intermediate: 'Intermedio', advanced: 'Avanzato' },
    waterType: { lake: 'Lago', sea: 'Mare', river: 'Fiume' },
  },
};

export const GUIDE_HEADINGS: Record<string, Record<string, string>> = {
  de: {
    problem: 'Die Herausforderung',
    solution: 'Die Lösung',
    steps: 'Schritte',
    faq: 'FAQ',
    audience: 'Zielgruppe',
    related: 'Verwandte Themen',
    nav: 'Ratgeber',
  },
  es: {
    problem: 'El desafío',
    solution: 'La solución',
    steps: 'Pasos',
    faq: 'Preguntas frecuentes',
    audience: 'Público',
    related: 'Relacionados',
    nav: 'Guías',
  },
  fr: {
    problem: 'Le défi',
    solution: 'La solution',
    steps: 'Étapes',
    faq: 'FAQ',
    audience: 'Public',
    related: 'Articles connexes',
    nav: 'Guides',
  },
  it: {
    problem: 'La sfida',
    solution: 'La soluzione',
    steps: 'Passaggi',
    faq: 'FAQ',
    audience: 'Destinatari',
    related: 'Correlati',
    nav: 'Guide',
  },
};
