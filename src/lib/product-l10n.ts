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
      'airdeck-360': 'AirDeck 360',
      'heavy-duty-raft-commercial': 'Kommerzielles Heavy-Duty-Floß',
      'high-speed-catamaran': 'Hochgeschwindigkeits-Rennkatamaran (AQHB)',
      'inflatable-catamaran-kayak': 'Aufblasbares Katamaran-Kajak',
      kaboat: 'KaBoat Katamaran-Kajak (ZB-Serie)',
      'kayak-full-dropstitch': 'Voll-Drop-Stitch-Performance-Kajak',
      'kayak-hybrid': 'Hybrid-Drop-Stitch-Kajak',
      'life-vest-classic': 'Rettungsweste Classic',
      'life-vest-pro': 'Rettungsweste Pro',
      'oars-pump-set': 'Ruder- & Pumpen-Set',
      'premium-dropstitch-seat': 'Premium-Drop-Stitch-Sitz',
      'rib-250': 'RIB250',
      'rib-270': 'RIB270',
      'rib-300': 'RIB300',
      'rib-330': 'RIB 330',
      'rib-330a': 'RIB330A',
      'rib-330b': 'RIB330B',
      'rib-330c': 'RIB330C',
      'rib-360a': 'RIB360A — Vielseitiges 3.6m Familien- & Angel-RIB',
      'rib-360b': 'RIB360B — Premium-3.6m-Touring-RIB mit Kabine & Konsole',
      'rib-390a': 'RIB390A — Sportliches 3.9m-RIB mit überdimensionierten 47cm-Schläuchen',
      'rib-390al': 'RIB390AL — 4-Kammer-Sicherheits-RIB mit Konsole & Premium-Optionen',
      'rib-390b': 'RIB390B — Schwerlast-3.9m-RIB mit 40L-Kraftstofftank & voller Kabinenausstattung',
      'rib-390bl': 'RIB390BL — Flaggschiff-3.9m-RIB mit Überrollbügel, Sonnendeck & 4 Kammern',
      'rib-430a': 'RIB430A — Leichtes 4.3m-Open-Deck-RIB für Küstenbetreuung & Angeln',
      'rib-430b': 'RIB430B — 4.3m-RIB mit Mittelkonsole, 4 Luftkammern & Bilgepumpe',
      'rib-430c': 'RIB430C — 4.3m-Expeditions-RIB mit Überrollbügel, Windschutzscheibe & 50L-Kraftstofftank',
      'rib-450-patrol': 'RIB 450 Patrol',
      'rib-480a': 'RIB480A — Leichtes 4.8m-Open-Deck-RIB mit 5 Luftkammern & 60-PS-Auslegung',
      'rib-480b': 'RIB480B — 4.8m-RIB mit Mittelkonsole, 60L-Kraftstofftank & Targa-Bügel',
      'rib-480c': 'RIB480C — 4.8m-RIB mit Windschutz-Konsole, 4-fach-Schaltpanel & Achterkabinen',
      'rib-480d': 'RIB480D — Premium-4.8m-RIB mit Sonnendeck, Badeleiter & 60L-Kraftstofftank',
      'rib-480w': 'RIB480W — 4.8m-RIB mit großer Breite von 2.35 m & Mittelkonsole',
      'rib-500': 'RIB500 — 5.0m-Offshore-RIB mit 2.10m-Breite, 52cm-Schläuchen & 60-PS-Auslegung',
      'rib-520a': 'RIB520A — Leichtes 5.2m-Open-Deck-RIB für individuelle Umbauten',
      'rib-520b': 'RIB520B — Breitbauchiges 5.2m-RIB mit Mittelkonsole für Patrouille & Charter',
      'rib-520c': 'RIB520C — Breitbauchiges 5.2m-Freizeit-RIB mit Mittelkonsole & Sonnendeck',
      'rib-520e': 'RIB520E — Schwerlast-5.2m-RIB mit 115-PS-Auslegung & Edelstahl-Überrollbügel',
      'rib-520w': 'RIB520W — Breitestes 5.2m-RIB mit 2.35m-Breite für maximale Stabilität',
      'rib-550a': 'RIB550A — Leichtes 5.5m-Patrouillen- & Angel-RIB mit 90-PS-Auslegung',
      'rib-550b': 'RIB550B — Voll ausgestattetes 5.5m-RIB mit Mittelkonsole & 100L-Kraftstofftank',
      'rib-580a': 'RIB580A — Offshore-5.8m-RIB mit Mittelkonsole, 115 PS & 90L-Kraftstofftank',
      'rib-580b': 'RIB580B — 5.8m-RIB für schwere See mit überdimensionierten 58cm-Schläuchen',
      'rib-600': 'RIB600 — Fortschrittliches 6.0m-RIB mit 2.50m-Breite & 6 Luftkammern',
      'rib-680a': 'RIB680A — Großes 6.6m-RIB mit 200 PS, 7 Kammern & Live-Well',
      'rib-680b': 'RIB680B — Vollwertiges 6.8m-Passagier-RIB mit 200 PS & Ski-Bügel',
      'rib-700': 'RIB700',
      'rib-760': 'RIB760',
      'sib-aluminum-floor': 'Sport-Schlauchboot (Aluminiumboden)',
      'sib-dropstitch-floor': 'Sport-Schlauchboot (Drop-Stitch-Boden)',
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
      'tactical-raft': 'Taktisches Expeditions-Floß',
      'whitewater-raft': 'Wildwasser-Floß der nächsten Generation (AQDRB)',
      'zb-mt350': 'AQMT-11\'6"',

      ap330: 'Apex Performance 330 (AP330)',
      ap360: 'Apex Performance 360 (AP360)',
      ap390: 'Apex Performance 390 (AP390)',
      ap420: 'Apex Performance 420 (AP420)',
      ap460: 'Apex Performance 460 (AP460)',
      ap520: 'Apex Performance 520 (AP520)',
      ap560: 'Apex Performance 560 (AP560)',
      ap660: 'Apex Performance 660 (AP660)',
      ap700: 'Apex Performance 700 (AP700)',
      ap760: 'Apex Performance 760 (AP760)',
      ap800: 'Apex Performance 800 (AP800)',
      ap900: 'Apex Performance 900 (AP900)',
      df420: 'Defender 420 (DF420)',
      df460: 'Defender 460 (DF460)',
      df500: 'Defender 500 (DF500)',
      df540: 'Defender 540 (DF540)',
      'df540-coaster': 'Defender 540 Coaster (DF540 Coaster)',
      df600: 'Defender 600 (DF600)',
      df700: 'Defender 700 (DF700)',
      df760: 'Defender 760 (DF760)',
      df860: 'Defender 860 (DF860)',
      ex7: 'Explorer 7 (EX7)',
      ex9: 'Explorer 9 (EX9)',
      sw240: 'Swiftlitee 240 (SW240)',
      sw260: 'Swiftlitee 260 (SW260)',
      sw290: 'Swiftlitee 290 (SW290)',
      sw310: 'Swiftlitee 310 (SW310)',
      sw340: 'Swiftlitee 340 (SW340)',
      vr260: 'Versa 260 (VR260)',
      vr290: 'Versa 290 (VR290)',
      vr310: 'Versa 310 (VR310)',
      vr340: 'Versa 340 (VR340)',
      vr360: 'Versa 360 (VR360)',
      vr380: 'Versa 380 (VR380)',
      vr400: 'Versa 400 (VR400)',
      vr420: 'Versa 420 (VR420)',
      vr460: 'Versa 460 (VR460)',
    },
    summaries: {
      'airdeck-360':
        'Geräumiges 3.6 m Schlauchboot mit verstärktem Air-Deck-Boden — ideal für Familienausflüge und Angeln.',
      'heavy-duty-raft-commercial':
        'Kommerzielles Schlauchfloß für schwere tägliche Beanspruchung im Tourbetrieb, mit verstärkten Böden und industrietauglichem Gewebe.',
      'high-speed-catamaran':
        'Hochgeschwindigkeits-Schlauchkatamaran mit Doppelrümpfen für außergewöhnliche Stabilität, Geschwindigkeit und Manövrierfähigkeit.',
      'inflatable-catamaran-kayak':
        'Einsteiger-Schlauchkatamaran-Kajak mit außergewöhnlicher Stabilität für Anfänger, Angeln und Freizeitpaddeln.',
      kaboat:
        'Hybrid-Katamaran-Kajak, das sich von einer stabilen Zweirumpf-Angelplattform in ein stromlinienförmiges Einhüllen-Tourenkajak verwandeln lässt.',
      'kayak-full-dropstitch':
        'Hochleistungs-Schlauchkajak mit Voll-Drop-Stitch-Rumpf für Hard-Shell-ähnliche Steifigkeit und präzisen Geradeauslauf.',
      'kayak-hybrid':
        'Vielseitiges Schlauchkajak mit teilweisem Drop-Stitch-Boden für ein ausgewogenes Verhältnis von Steifigkeit, Transportabilität und Erschwinglichkeit.',
      'life-vest-classic': 'CE-zertifizierte universelle Auftriebshilfe für Freizeitwassersport.',
      'life-vest-pro': 'SOLAS-konforme automatische aufblasbare Rettungsweste für Offshore- und Rettungseinsätze.',
      'oars-pump-set':
        'Paar 1.6 m Aluminiumruder und 5 L Fußluftpumpe mit hoher Förderleistung. Passt auf alle Schlauchboote der Serie.',
      'premium-dropstitch-seat':
        'Aufblasbarer Hochdruck-Drop-Stitch-Sitz für überlegenen Komfort und Halt an langen Tagen auf dem Wasser.',
      'rib-250':
        'Kompaktes 2.5 m RIB — leichter Aluminiumrumpf, ideal als Yacht-Beiboot, Angelbeiboot oder Seerundboot für bis zu 3 Personen.',
      'rib-270':
        'Mittelgroßes 2.7 m RIB mit 162 cm Breite und 10-PS-Auslegung — stabil, transportabel und perfekt für Seefischen, Yacht-Beiboot-Einsätze und Küstenfahrten.',
      'rib-300':
        'Vielseitiges 3.0 m RIB mit 20-PS-Auslegung, Tief-V-Rumpf und Sitzplätzen für 4 — ein Familienliebling für Seetouren und Küstenabenteuer.',
      'rib-330':
        'Meistverkauftes 3.3 m RIB mit Aluminiumrumpf — davit-aufnahmefähiges Yacht-Beiboot und Familientagesboot für bis zu 5 Personen.',
      'rib-330a':
        'Leichtes 3.3 m RIB mit GFK-Rumpf, 80 kg Gewicht und 20-PS-Auslegung — wendig, erschwinglich und leicht zu trailern.',
      'rib-330b':
        'Komfortorientiertes 3.3 m RIB mit vorderem Kabinenkissen, Ankerablage und 20-PS-Auslegung — ein raffiniertes Tagesboot für 4.',
      'rib-330c':
        'Premium-3.3 m-RIB mit vorderen/hinteren Kabinen, Mittelkonsole und 20 PS — die am vollständigsten ausgestattete 3.3 m-Variante.',
      'rib-360a':
        'Leichtes 3.6 m RIB mit GFK-Rumpf, 1.80 m Breite, 120 kg Eigengewicht und 650 kg Tragfähigkeit. Ideal für Küstenangelausflüge, Familienausflüge und Hafenüberfahrten mit Motoren bis 25 PS.',
      'rib-360b':
        'Ausstattungsreiches 3.6 m RIB mit GFK-Rumpf, 1.80 m Breite, 100 kg Eigengewicht und 650 kg Tragfähigkeit. Ausgestattet mit vorderer und hinterer Kabine, Mittelkonsole und Bilgepumpe für Küstentouren und Familienkreuzfahrten.',
      'rib-390a':
        'Leichtes 3.9 m RIB mit GFK-Rumpf, 1.85 m Breite, 100 kg Eigengewicht und 47 cm Schläuchen. Für 30-PS-Außenbordmotoren ausgelegt, mit 650 kg Tragfähigkeit für 5 Personen. Ideal für Sport, Angeln und Küstenfahrten.',
      'rib-390al':
        'Premium-3.9 m-RIB mit GFK-Rumpf, 4 unabhängigen Luftkammern, 1.85 m Breite, 120 kg Eigengewicht und 650 kg Tragfähigkeit. Inklusive Mittelkonsole, Sitzkasten und Luxusbodenoptionen. Für 30-PS-Außenbordmotoren ausgelegt.',
      'rib-390b':
        'Robustes 3.9 m RIB mit GFK-Rumpf, 1.85 m Breite, 130 kg Eigengewicht und 47 cm Hypalon-Schläuchen. Mit vorderer und hinterer Kabine, Mittelkonsole, Bilgepumpe und 40 L integriertem Kraftstofftank. Für 30-PS-Außenbordmotoren ausgelegt, mit 650 kg Tragfähigkeit.',
      'rib-390bl':
        'Voll ausgestattetes 3.9 m RIB mit GFK-Rumpf, 4 Luftkammern, 1.78 m Breite, 110 kg Eigengewicht und 650 kg Tragfähigkeit. Mittelkonsole mit Lenkung, Überrollbügel mit Beleuchtung, 25 L Kraftstofftank, Sonnendeck und C-förmige Schlauchleiter. Für 30-PS-Außenbordmotoren ausgelegt.',
      'rib-430a':
        'Leichtes 4.3 m GFK-RIB mit 2.00 m Breite, 3 Luftkammern, 170 kg Eigengewicht und 640 kg maximaler Zuladung. Entwickelt für Küstenversorgung, Freizeitangeln und leichte gewerbliche Einsätze.',
      'rib-430b':
        '4.3 m GFK-RIB mit Mittelkonsole, 2.00 m Breite, 4 Luftkammern, 200 kg Eigengewicht und 640 kg maximaler Zuladung. Ausgestattet mit Bilgepumpe, Hecklicht und Skischlaufen für Patrouille, Angeln und Wassersport.',
      'rib-430c':
        'Voll ausgestattetes 4.3 m GFK-RIB mit 1.96 m Breite, 48 cm Schläuchen, 4 Luftkammern, 200 kg Eigengewicht und 640 kg maximaler Zuladung. Mittelkonsole mit Windschutzscheibe, Überrollbügel mit Beleuchtung und integriertem 50 L Kraftstofftank.',
      'rib-450-patrol':
        '4.5 m Patrouillen-RIB mit Aluminiumrumpf. Schwerlast-Konstruktion, geeignet für gewerbliche Betreiber.',
      'rib-480a':
        'Leichtes 4.8 m GFK-RIB mit 2.00 m Breite, 5 Luftkammern, 183 kg Eigengewicht und 680 kg maximaler Zuladung. Entwickelt für Küstentransport, Offshore-Angeln und Tauchbetrieb mit maximaler Motorleistung von 60 PS.',
      'rib-480b':
        '4.8 m GFK-RIB mit Mittelkonsole, 2.00 m Breite, 5 Luftkammern, 260 kg Eigengewicht und 680 kg maximaler Zuladung. Ausgestattet mit Bilgepumpe, 60 L integriertem Kraftstofftank und Targa-Bügel mit Navigationslichtern.',
      'rib-480c':
        'Voll ausgestattetes 4.8 m GFK-RIB mit 2.00 m Breite, 5 Luftkammern, 280 kg Eigengewicht und 680 kg maximaler Zuladung. Mittelkonsole mit integrierter Windschutzscheibe und 4-fach-Schaltpanel, Achterkabinen-Sitzgelegenheiten und 60-PS-Auslegung.',
      'rib-480d':
        'Premium-4.8 m-GFK-RIB mit 2.00 m Breite, 5 Luftkammern, 280 kg Eigengewicht und 680 kg maximaler Zuladung. Mittelkonsole, 60 L integrierter Kraftstofftank, Targa-Bügel, hintere Edelstahlleiter und Sonnendeckpolster für Familien- und Chartereinsätze.',
      'rib-480w':
        'Breitbauchiges 4.8 m GFK-RIB mit 2.35 m Breite, 5 Luftkammern, 280 kg Eigengewicht und 680 kg maximaler Zuladung. Mittelkonsole mit Seitensitz, 60 L Kraftstofftank und Targa-Bügel bieten außergewöhnliche Stabilität und Deckfläche für Charter und Tauchen.',
      'rib-500':
        '5.0 m Offshore-GFK-RIB mit 2.10 m Breite, 52 cm Schläuchen, 5 Luftkammern, 314 kg Eigengewicht und 686 kg maximaler Zuladung. Mittelkonsole, 60 L Kraftstofftank und Targa-Bügel für Expeditionsunterstützung, Offshore-Angeln und gewerblichen Transport.',
      'rib-520a':
        'Leichtes 5.2m Open-Deck-RIB (RIB520A) — 200 kg Rumpf, Kapazität für 8 Personen, max. 85 PS. Ideal für individuelle Umbauten, Offshore-Angeln und Tauchunterstützung.',
      'rib-520b':
        'Breitbauchiges 5.2m RIB mit Mittelkonsole (RIB520B) — 2.28 m Breite, 400 kg Rumpf, 80 L Kraftstofftank, Kapazität für 8 Personen. Gebaut für Küstenpatrouille, Offshore-Angeln und Passagier-Charter.',
      'rib-520c':
        'Breitbauchiges 5.2m Freizeit-RIB (RIB520C) — 2.28 m Breite, 360 kg Rumpf, Mittelkonsole, Sonnendeckpolster, Targa-Bügel mit Beleuchtung. Ideal für Wassersport, Familienkreuzfahrten und Charter.',
      'rib-520e':
        'Schwerlast-5.2m-RIB (RIB520E) — 450 kg Rumpf, max. 115 PS, 80 L Kraftstofftank mit Anzeige, Edelstahl-Überrollbügel, Mittelkonsole. Gebaut für ernsthaftes Offshore-Angeln und Expeditionsunterstützung.',
      'rib-520w':
        'Breitestes 5.2m RIB (RIB520W) — 2.35 m Breite, 230 kg Rumpf, offenes Layout, Kapazität für 8 Personen, max. 85 PS. Außergewöhnliche Stabilität für Tauchbetrieb, geführtes Angeln und Passagiertransport.',
      'rib-550a':
        'Leichtes 5.5m RIB (RIB550A) — 240 kg Rumpf, 2.30 m Breite, 60 L Kraftstofftank, Kapazität für 7 Personen, max. 90 PS. Speziell gebaut für Küstenpatrouille, Transport und ernsthaftes Angeln.',
      'rib-550b':
        'Voll ausgestattetes 5.5m RIB mit Mittelkonsole (RIB550B) — 450 kg Rumpf, 2.30 m Breite, 100 L Kraftstofftank, Überrollbügel, Sonnendeck. Gebaut für ausgedehnte Offshore-Expeditionen und Schwerlast-Transport.',
      'rib-580a':
        'Offshore-5.8m-RIB mit Mittelkonsole (RIB580A) — 450 kg Rumpf, 2.38 m Breite, 90 L Kraftstofftank, Targa-Bügel, Kapazität für 8 Personen, max. 115 PS. Gebaut für Expeditionstransport und Hochseeangeln.',
      'rib-580b':
        '5.8m RIB für schwere See (RIB580B) — 450 kg Rumpf, überdimensionierte 58 cm Schläuche, 2.38 m Breite, 90 L Kraftstofftank, Kapazität für 8 Personen, max. 115 PS. Außergewöhnlicher Auftrieb und Stabilität für anspruchsvolle Offshore-Bedingungen.',
      'rib-600':
        'Fortschrittliches 6.0m RIB (RIB600) — 500 kg Rumpf, 2.50 m Breite, 6 Luftkammern, 120 L Kraftstofftank, Überrollbügel, Kapazität für 8 Personen, max. 115 PS. Die Brücke zwischen mittleren und großen Offshore-RIBs.',
      'rib-680a':
        'Großes 6.6m RIB (RIB680A) — 500 kg Rumpf, 2.52 m Breite, 7 Luftkammern, 150 L Kraftstofftank, Live-Well, Kapazität für 10 Personen, max. 200 PS. Gebaut für Big-Game-Hochseeangeln, gewerbliche Charter und Tauchunterstützung.',
      'rib-680b':
        'Vollwertiges 6.8m Passagier-RIB (RIB680B) — 500 kg Rumpf, 2.52 m Breite, 7 Luftkammern, 100 L Kraftstofftank, Ski-Bügel, Kapazität für 10 Personen, max. 200 PS. Entwickelt für gewerblichen Passagiertransport, Tauchunterstützung und Expeditionsschleppen.',
      'rib-700': 'Hochleistungs-Schlauchboot mit Festrumpf (RIB700) mit 710 cm Länge für Transport und Angeln.',
      'rib-760': 'Hochleistungs-Schlauchboot mit Festrumpf (RIB760) mit 760 cm Länge für Transport und Angeln.',
      'sib-aluminum-floor':
        'Vielseitiges Sport-Schlauchboot mit starrem Aluminiumboden für hervorragende Leistung und Langlebigkeit.',
      'sib-dropstitch-floor':
        'Leichtes Sport-Schlauchboot mit Hochdruck-Drop-Stitch-Boden für überlegene Steifigkeit und Transportabilität.',
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
      'tactical-raft':
        'Mil-Spec-Schlauchfloß, entwickelt für taktische Einsätze, Suche und Rettung sowie extreme Expeditionsnutzung.',
      'whitewater-raft':
        'Schwerlast-Wildwasserfloß mit selbstentleerendem Boden, verstärkter Konstruktion und Schnellaufbau-Funktionen für professionelles Flusspaddeln.',
      'zb-mt350':
        'AQMT-11\'6" — 11.5 ft GFK-RIB für Küstenpatrouille, gewerblichen Transport und Expeditionsunterstützung.',

      ap330: 'Luxus-Konsolentender RIB der Einstiegsklasse in der Apex Performance-Serie.',
      ap360: 'Kleiner bis mittelgroßer Luxus-Mittelkonsolen-Tender RIB mit 40 HP-Kapazität.',
      ap390: 'Mittelgroße Luxuskonsole RIB als Einstieg in die 50 HP-Klasse.',
      ap420: 'Das perfekte erste Familien-Tagesboot mit einer Kapazität von 70 HP und einem Kraftstofftank von 55L.',
      ap460: 'Flaggschiff-Crossover-Modell der 4-Meter-Klasse mit ergonomischem Grundriss und bow locker.',
      ap520: 'Luxusklasse RIB der 5-Meter-Klasse mit 24° Offshore-Rumpf deep V und Kraftstofftank 105L.',
      ap560: 'Kern-Langstreckensportler RIB mit 115 HP, 105L Treibstoff und einer Kapazität für 12 Personen.',
      ap660: 'CE Category B Offshore-Luxus RIB mit 26° deep V und 200 HP.',
      ap700: '7-Meter-Luxus-Offshore-Boot RIB mit 250 HP und 280L Treibstoff.',
      ap760: 'Luxuriöses 7,6 m langes Offshore-Flaggschiff RIB mit 300 HP und 280L Treibstoff.',
      ap800: 'Offshore-Kreuzfahrt-Flaggschiff mit 350 HP, Doppelmotorunterstützung, 300L Kraftstofftank.',
      ap900: 'Das ultimative 9,12 m lange Flaggschiff RIB mit 600 HP Doppelmotoren und 380L Treibstoff.',
      df420: 'Einsteigermodell für kommerzielle/Hochleistungsfahrzeuge RIB für Patrouillen- und Versorgungseinsätze.',
      df460: 'Nutzfahrzeug der 4-Meter-Klasse RIB, das Manövrierfähigkeit und Nutzlastkapazität in Einklang bringt.',
      df500: 'Kommerzielles Kernkraftwerk RIB mit 24° Offshore-Rumpf deep V und integriertem Treibstofftank 90L.',
      df540: 'Mittelgroßes Offshore-Arbeitstier für Patrouillen-, SAR- und kommerzielle Einsätze.',
      'df540-coaster': 'Coaster Edition Patrol RIB mit speziellem modularem Arbeitsdeck.',
      df600: '6-Meter-Offshore-Patrouille RIB mit CE Category B Zertifizierung und 140L Treibstoff.',
      df700: '7 Meter langes kommerzielles SAR-Arbeitstier mit extrem großem 285L-Kraftstofftank.',
      df760: 'Offshore SAR und schwerer Abfangjäger mit 60 cm extragroßen Rohren und 300 HP.',
      df860: '8,6 m langer ultimativer Flaggschiff-Abfangjäger mit 500 HP Doppelmotoren.',
      ex7: '7 m langes Crossover-Boot mit Glasfaserrumpf und erhöhten schlanken Rohren.',
      ex9: '9 m langes Premium-Crossover-Flaggschiff mit Kabine, WC, Wetbar und 450L Treibstoff.',
      sw240: 'Ultraleichter 2,4-m-Tender aus Aluminium mit nur 33 kg – von einer Person tragbar.',
      sw260: 'Tender in Goldgröße bei 35 kg – die perfekte Balance aus Kapazität und Tragbarkeit.',
      sw290: 'Mittelgroßer Tender mit verbessertem 15° deadrise für bessere Leistung.',
      sw310: 'Erweiterter Tender mit 44-cm-Rohren und einer Kapazität für 5 Personen.',
      sw340: 'Flaggschiff Swiftlitee mit einer Kapazität für 6 Personen bei nur 53 kg.',
      vr260: 'Kompaktestes Versa mit Doppeldeck-Komfort und 44-cm-Hochauftriebsschläuchen.',
      vr290: 'Sweet-Spot-Luxus-Tender mit Doppeldeck und 44-cm-Rohren.',
      vr310: 'Milestone Versa mit konsolenkompatiblem Doppeldeck und Platz für 5 Personen.',
      vr340: 'Primärtender mit hervorragender Raumkapazität und konsolenkompatiblem Deck.',
      vr360: 'Hochleistungs-Luxus-Tender, der in die 30 HP-Klasse einsteigt.',
      vr380: 'Mittelgroßer bis großer Luxustender mit drei Konsolenoptionen für Yachten und Katamarane.',
      vr400:
        'Crossover-Flaggschiff mit 20° deep V Rumpf und 50 HP für die Fähigkeit eines mittelgroßen Konsolenkreuzers.',
      vr420: 'Mittelgroßer bis großer Luxus-Konsolenkreuzer mit 60 HP und 800 kg Nutzlast.',
      vr460: 'Größtes Versa-Flaggschiff mit 70 HP, 920 kg Nutzlast und 4mm verstärktem Rumpf.',
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
      'airdeck-360': 'AirDeck 360',
      'heavy-duty-raft-commercial': 'Balsa comercial de servicio pesado',
      'high-speed-catamaran': 'Catamarán de competición de alta velocidad (AQHB)',
      'inflatable-catamaran-kayak': 'Kayak catamarán hinchable',
      kaboat: 'KaBoat Kayak catamarán (serie ZB)',
      'kayak-full-dropstitch': 'Kayak de alto rendimiento Full Drop-Stitch',
      'kayak-hybrid': 'Kayak híbrido Drop-Stitch',
      'life-vest-classic': 'Chaleco salvavidas Classic',
      'life-vest-pro': 'Chaleco salvavidas Pro',
      'oars-pump-set': 'Juego de remos y bomba',
      'premium-dropstitch-seat': 'Asiento Premium Drop-Stitch',
      'rib-250': 'RIB250',
      'rib-270': 'RIB270',
      'rib-300': 'RIB300',
      'rib-330': 'RIB 330',
      'rib-330a': 'RIB330A',
      'rib-330b': 'RIB330B',
      'rib-330c': 'RIB330C',
      'rib-360a': 'RIB360A: RIB versátil de 3.6 m para familia y pesca',
      'rib-360b': 'RIB360B: RIB de travesía premium de 3.6 m con cabina y consola',
      'rib-390a': 'RIB390A: RIB deportivo de 3.9 m con tubos sobredimensionados de 47 cm',
      'rib-390al': 'RIB390AL: RIB de seguridad de 4 cámaras con consola y opciones premium',
      'rib-390b': 'RIB390B: RIB de servicio pesado de 3.9 m con depósito de 40 L y cabinas completas',
      'rib-390bl': 'RIB390BL: RIB insignia de 3.9 m con arco antivuelco, solárium y 4 cámaras',
      'rib-430a': 'RIB430A: RIB ligero de 4.3 m de cubierta abierta para auxiliar costero y pesca',
      'rib-430b': 'RIB430B: RIB de 4.3 m con consola central, 4 cámaras de aire y bomba de achique',
      'rib-430c': 'RIB430C: RIB de expedición de 4.3 m con arco antivuelco, parabrisas y depósito de 50 L',
      'rib-450-patrol': 'RIB 450 Patrol',
      'rib-480a': 'RIB480A: RIB ligero de 4.8 m de cubierta abierta con 5 cámaras de aire y 60 HP',
      'rib-480b': 'RIB480B: RIB de 4.8 m con consola central, depósito de 60 L y arco targa',
      'rib-480c':
        'RIB480C: RIB de 4.8 m con consola con parabrisas, panel de interruptores de 4 puntos y cabinas de popa',
      'rib-480d': 'RIB480D: RIB premium de 4.8 m con solárium, escalera de embarque y depósito de 60 L',
      'rib-480w': 'RIB480W: RIB de 4.8 m de manga ancha con manga de 2.35 m y consola central',
      'rib-500': 'RIB500: RIB de altura de 5.0 m con manga de 2.10 m, tubos de 52 cm y 60 HP',
      'rib-520a': 'RIB520A: RIB ligero de 5.2 m de cubierta abierta para construcciones a medida',
      'rib-520b': 'RIB520B: RIB de 5.2 m de manga ancha con consola central para patrullaje y chárter',
      'rib-520c': 'RIB520C: RIB de ocio de 5.2 m de manga ancha con consola central y solárium',
      'rib-520e': 'RIB520E: RIB de servicio pesado de 5.2 m con 115 HP y arco de acero inoxidable',
      'rib-520w': 'RIB520W: RIB de 5.2 m con la manga más ancha de 2.35 m para máxima estabilidad',
      'rib-550a': 'RIB550A: RIB ligero de 5.5 m para patrullaje y pesca con 90 HP',
      'rib-550b': 'RIB550B: RIB de 5.5 m totalmente equipado con consola central y depósito de 100 L',
      'rib-580a': 'RIB580A: RIB de altura de 5.8 m con consola central, 115 HP y depósito de 90 L',
      'rib-580b': 'RIB580B: RIB de 5.8 m para mares agitados con tubos sobredimensionados de 58 cm',
      'rib-600': 'RIB600: RIB avanzado de 6.0 m con manga de 2.50 m y 6 cámaras de aire',
      'rib-680a': 'RIB680A: RIB grande de 6.6 m con 200 HP, 7 cámaras y vivero',
      'rib-680b': 'RIB680B: RIB de pasajeros de tamaño completo de 6.8 m con 200 HP y barra de esquí',
      'rib-700': 'RIB700',
      'rib-760': 'RIB760',
      'sib-aluminum-floor': 'Bote hinchable deportivo (piso de aluminio)',
      'sib-dropstitch-floor': 'Bote hinchable deportivo (piso Drop-Stitch)',
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
      'tactical-raft': 'Balsa táctica de expedición',
      'whitewater-raft': 'Balsa de aguas bravas de nueva generación (AQDRB)',
      'zb-mt350': 'AQMT-11\'6"',

      ap330: 'Apex Performance 330 (AP330)',
      ap360: 'Apex Performance 360 (AP360)',
      ap390: 'Apex Performance 390 (AP390)',
      ap420: 'Apex Performance 420 (AP420)',
      ap460: 'Apex Performance 460 (AP460)',
      ap520: 'Apex Performance 520 (AP520)',
      ap560: 'Apex Performance 560 (AP560)',
      ap660: 'Apex Performance 660 (AP660)',
      ap700: 'Apex Performance 700 (AP700)',
      ap760: 'Apex Performance 760 (AP760)',
      ap800: 'Apex Performance 800 (AP800)',
      ap900: 'Apex Performance 900 (AP900)',
      df420: 'Defender 420 (DF420)',
      df460: 'Defender 460 (DF460)',
      df500: 'Defender 500 (DF500)',
      df540: 'Defender 540 (DF540)',
      'df540-coaster': 'Defender 540 Coaster (DF540 Coaster)',
      df600: 'Defender 600 (DF600)',
      df700: 'Defender 700 (DF700)',
      df760: 'Defender 760 (DF760)',
      df860: 'Defender 860 (DF860)',
      ex7: 'Explorer 7 (EX7)',
      ex9: 'Explorer 9 (EX9)',
      sw240: 'Swiftlitee 240 (SW240)',
      sw260: 'Swiftlitee 260 (SW260)',
      sw290: 'Swiftlitee 290 (SW290)',
      sw310: 'Swiftlitee 310 (SW310)',
      sw340: 'Swiftlitee 340 (SW340)',
      vr260: 'Versa 260 (VR260)',
      vr290: 'Versa 290 (VR290)',
      vr310: 'Versa 310 (VR310)',
      vr340: 'Versa 340 (VR340)',
      vr360: 'Versa 360 (VR360)',
      vr380: 'Versa 380 (VR380)',
      vr400: 'Versa 400 (VR400)',
      vr420: 'Versa 420 (VR420)',
      vr460: 'Versa 460 (VR460)',
    },
    summaries: {
      'airdeck-360':
        'Bote hinchable espacioso de 3.6 m con cubierta de air-deck reforzada, ideal para recreo familiar y pesca.',
      'heavy-duty-raft-commercial':
        'Balsa hinchable de calidad comercial, construida para un uso diario intensivo en operaciones turísticas, con pisos reforzados y tejido de uso industrial.',
      'high-speed-catamaran':
        'Catamarán hinchable de alta velocidad con doble casco para una estabilidad, velocidad y maniobrabilidad excepcionales.',
      'inflatable-catamaran-kayak':
        'Kayak catamarán hinchable de nivel inicial con estabilidad excepcional para principiantes, pesca y remo recreativo.',
      kaboat:
        'Kayak catamarán híbrido que se convierte de una plataforma de pesca estable de doble casco a un kayak de travesía aerodinámico de casco único.',
      'kayak-full-dropstitch':
        'Kayak hinchable de alto rendimiento con casco full drop-stitch para una rigidez y direccionalidad similares a las de un casco rígido.',
      'kayak-hybrid':
        'Kayak hinchable versátil con piso de drop-stitch parcial para un equilibrio entre rigidez, portabilidad y precio.',
      'life-vest-classic': 'Ayuda a la flotación universal certificada CE para deportes acuáticos recreativos.',
      'life-vest-pro':
        'Chaleco salvavidas hinchable automático conforme a SOLAS para operaciones en alta mar y de rescate.',
      'oars-pump-set':
        'Par de remos de aluminio de 1.6 m y bomba de pie de 5 L de alto caudal. Compatible con todos los hinchables de la gama.',
      'premium-dropstitch-seat':
        'Asiento hinchable drop-stitch de alta presión para un confort y soporte superiores en largas jornadas en el agua.',
      'rib-250':
        'RIB compacto de 2.5 m: casco ligero de aluminio, ideal como auxiliar de yate, bote de pesca o lancha de lago para hasta 3 personas.',
      'rib-270':
        'RIB de tamaño medio de 2.7 m con manga de 162 cm y 10 HP: estable, portátil y perfecto para pesca en lago, uso como auxiliar de yate y navegación costera.',
      'rib-300':
        'RIB versátil de 3.0 m con 20 HP, casco en V profunda y asientos para 4: el favorito de las familias para navegar en lago y aventuras costeras.',
      'rib-330':
        'RIB de casco de aluminio de 3.3 m más vendido: auxiliar de yate izable con pescante y barco familiar de día para hasta 5 personas.',
      'rib-330a':
        'RIB ligero de 3.3 m con casco de fibra de vidrio, peso de 80 kg y 20 HP: ágil, asequible y fácil de remolcar.',
      'rib-330b':
        'RIB de 3.3 m orientado al confort con cojín de cabina delantera, bandeja para ancla y 20 HP: un barco de día refinado para 4.',
      'rib-330c':
        'RIB premium de 3.3 m con cabinas delantera y trasera, consola central y 20 HP: la variante de 3.3 m más completa.',
      'rib-360a':
        'RIB ligero de 3.6 m con casco de fibra de vidrio, manga de 1.80 m, peso neto de 120 kg y capacidad de carga de 650 kg. Ideal para salidas de pesca costera, excursiones familiares y traslados en puerto con motores de hasta 25 HP.',
      'rib-360b':
        'RIB de 3.6 m con casco de fibra de vidrio y gran equipamiento: manga de 1.80 m, peso neto de 100 kg y capacidad de carga de 650 kg. Equipado con cabinas delantera y trasera, consola central y bomba de achique para travesías costeras y cruceros familiares.',
      'rib-390a':
        'RIB ligero de 3.9 m con casco de fibra de vidrio, manga de 1.85 m, peso neto de 100 kg y tubos de 47 cm. Preparado para fueraborda de 30 HP con capacidad de carga de 650 kg para 5 personas. Ideal para deporte, pesca y navegación costera.',
      'rib-390al':
        'RIB premium de 3.9 m con casco de fibra de vidrio, 4 cámaras de aire independientes, manga de 1.85 m, peso neto de 120 kg y capacidad de carga de 650 kg. Incluye consola central, caja de asiento y opciones de suelo de lujo. Preparado para fueraborda de 30 HP.',
      'rib-390b':
        'RIB robusto de 3.9 m con casco de fibra de vidrio, manga de 1.85 m, peso neto de 130 kg y tubos de Hypalon de 47 cm. Incluye cabinas delantera y trasera, consola central, bomba de achique y depósito de combustible integrado de 40 L. Preparado para fueraborda de 30 HP con capacidad de carga de 650 kg.',
      'rib-390bl':
        'RIB de 3.9 m totalmente equipado con casco de fibra de vidrio, 4 cámaras de aire, manga de 1.78 m, peso neto de 110 kg y capacidad de carga de 650 kg. Consola central con dirección, arco antivuelco con luces, depósito de 25 L, solárium y escalera de tubo en forma de C. Preparado para fueraborda de 30 HP.',
      'rib-430a':
        'RIB ligero de 4.3 m con casco de fibra de vidrio, manga de 2.00 m, 3 cámaras de aire, peso neto de 170 kg y carga máxima de 640 kg. Diseñado para servicios de auxiliar costero, pesca de recreo y usos comerciales ligeros.',
      'rib-430b':
        'RIB de 4.3 m con consola central y casco de fibra de vidrio, manga de 2.00 m, 4 cámaras de aire, peso neto de 200 kg y carga máxima de 640 kg. Equipado con bomba de achique, luz trasera y asas de esquí para patrullaje, pesca y deportes acuáticos.',
      'rib-430c':
        'RIB de 4.3 m totalmente equipado con casco de fibra de vidrio, manga de 1.96 m, tubos de 48 cm, 4 cámaras de aire, peso neto de 200 kg y carga máxima de 640 kg. Consola central con parabrisas, arco antivuelco con luces y depósito de combustible integrado de 50 L.',
      'rib-450-patrol':
        'RIB de patrulla de 4.5 m con casco de aluminio. Construcción de servicio pesado, apta para operadores comerciales.',
      'rib-480a':
        'RIB ligero de 4.8 m con casco de fibra de vidrio, manga de 2.00 m, 5 cámaras de aire, peso neto de 183 kg y carga máxima de 680 kg. Diseñado para transporte costero, pesca de altura y operaciones de buceo, con motor máximo de 60 HP.',
      'rib-480b':
        'RIB de 4.8 m con consola central y casco de fibra de vidrio, manga de 2.00 m, 5 cámaras de aire, peso neto de 260 kg y carga máxima de 680 kg. Equipado con bomba de achique, depósito integrado de 60 L y arco targa con luces de navegación.',
      'rib-480c':
        'RIB de 4.8 m totalmente equipado con casco de fibra de vidrio, manga de 2.00 m, 5 cámaras de aire, peso neto de 280 kg y carga máxima de 680 kg. Consola central con parabrisas integrado y panel de interruptores de 4 puntos, asientos de cabina de popa y 60 HP.',
      'rib-480d':
        'RIB premium de 4.8 m con casco de fibra de vidrio, manga de 2.00 m, 5 cámaras de aire, peso neto de 280 kg y carga máxima de 680 kg. Consola central, depósito integrado de 60 L, arco targa, escalera trasera de acero inoxidable y cojín de solárium para uso familiar y de chárter.',
      'rib-480w':
        'RIB de 4.8 m de manga ancha con casco de fibra de vidrio, manga de 2.35 m, 5 cámaras de aire, peso neto de 280 kg y carga máxima de 680 kg. La consola central con asiento lateral, el depósito de 60 L y el arco targa ofrecen una estabilidad y un espacio de cubierta excepcionales para chárter y buceo.',
      'rib-500':
        'RIB de altura de 5.0 m con casco de fibra de vidrio, manga de 2.10 m, tubos de 52 cm, 5 cámaras de aire, peso neto de 314 kg y carga máxima de 686 kg. Consola central, depósito de 60 L y arco targa para apoyo de expediciones, pesca de altura y transporte comercial.',
      'rib-520a':
        'RIB ligero de 5.2 m de cubierta abierta (RIB520A): casco de 200 kg, capacidad para 8 personas, 85 HP máx. Ideal para construcciones a medida, pesca de altura y apoyo al buceo.',
      'rib-520b':
        'RIB de 5.2 m de manga ancha con consola central (RIB520B): manga de 2.28 m, casco de 400 kg, depósito de 80 L, capacidad para 8 personas. Construido para patrullaje costero, pesca de altura y chárter de pasajeros.',
      'rib-520c':
        'RIB de ocio de 5.2 m de manga ancha (RIB520C): manga de 2.28 m, casco de 360 kg, consola central, cojín de solárium, arco targa con luces. Ideal para deportes acuáticos, cruceros familiares y chárter.',
      'rib-520e':
        'RIB de servicio pesado de 5.2 m (RIB520E): casco de 450 kg, 115 HP máx., depósito de 80 L con indicador, arco antivuelco de acero inoxidable, consola central. Construido para la pesca de altura más exigente y el apoyo a expediciones.',
      'rib-520w':
        'RIB de 5.2 m con la manga más ancha (RIB520W): manga de 2.35 m, casco de 230 kg, disposición abierta, capacidad para 8 personas, 85 HP máx. Estabilidad excepcional para operaciones de buceo, pesca guiada y transporte de pasajeros.',
      'rib-550a':
        'RIB ligero de 5.5 m (RIB550A): casco de 240 kg, manga de 2.30 m, depósito de 60 L, capacidad para 7 personas, 90 HP máx. Diseñado específicamente para patrullaje costero, transporte y pesca exigente.',
      'rib-550b':
        'RIB de 5.5 m totalmente equipado con consola central (RIB550B): casco de 450 kg, manga de 2.30 m, depósito de 100 L, arco antivuelco, solárium. Construido para expediciones prolongadas en alta mar y transporte de servicio pesado.',
      'rib-580a':
        'RIB de altura de 5.8 m con consola central (RIB580A): casco de 450 kg, manga de 2.38 m, depósito de 90 L, arco targa, capacidad para 8 personas, 115 HP máx. Construido para transporte de expediciones y pesca de aguas profundas.',
      'rib-580b':
        'RIB de 5.8 m para mares agitados (RIB580B): casco de 450 kg, tubos sobredimensionados de 58 cm, manga de 2.38 m, depósito de 90 L, capacidad para 8 personas, 115 HP máx. Flotabilidad y estabilidad excepcionales para condiciones exigentes en alta mar.',
      'rib-600':
        'RIB avanzado de 6.0 m (RIB600): casco de 500 kg, manga de 2.50 m, 6 cámaras de aire, depósito de 120 L, arco antivuelco, capacidad para 8 personas, 115 HP máx. El puente entre los RIB de altura de clase intermedia y de gran tamaño.',
      'rib-680a':
        'RIB grande de 6.6 m (RIB680A): casco de 500 kg, manga de 2.52 m, 7 cámaras de aire, depósito de 150 L, vivero, capacidad para 10 personas, 200 HP máx. Construido para pesca de grandes piezas, chárter comercial y apoyo al buceo.',
      'rib-680b':
        'RIB de pasajeros de tamaño completo de 6.8 m (RIB680B): casco de 500 kg, manga de 2.52 m, 7 cámaras de aire, depósito de 100 L, barra de esquí, capacidad para 10 personas, 200 HP máx. Diseñado para transporte comercial de pasajeros, apoyo al buceo y remolque de expediciones.',
      'rib-700': 'Bote hinchable de casco rígido de alto rendimiento de 710 cm (RIB700) para transporte y pesca.',
      'rib-760': 'Bote hinchable de casco rígido de alto rendimiento de 760 cm (RIB760) para transporte y pesca.',
      'sib-aluminum-floor':
        'Bote hinchable deportivo versátil con piso rígido de aluminio para un rendimiento y una durabilidad excelentes.',
      'sib-dropstitch-floor':
        'Bote hinchable deportivo ligero con piso drop-stitch de alta presión para una rigidez y portabilidad superiores.',
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
      'tactical-raft':
        'Balsa hinchable de especificación militar diseñada para operaciones tácticas, búsqueda y rescate, y uso en expediciones extremas.',
      'whitewater-raft':
        'Balsa de aguas bravas de servicio pesado con piso autovaciante, construcción reforzada y despliegue rápido para descenso profesional de ríos.',
      'zb-mt350':
        'AQMT-11\'6": RIB de fibra de vidrio de 11.5 ft para patrullaje costero, transporte comercial y apoyo a expediciones.',

      ap330: 'Consola de lujo básica RIB de la serie Apex Performance.',
      ap360: 'Consola central de lujo de tamaño pequeño a mediano RIB con capacidad para 40 HP.',
      ap390: 'La consola de lujo de tamaño mediano RIB ingresa a la clase 50 HP.',
      ap420: 'El primer barco familiar perfecto con capacidad de 70 HP y tanque de combustible 55L.',
      ap460: 'Modelo crossover insignia en la clase de 4 metros con diseño ergonómico y bow locker.',
      ap520: 'Lujo de clase 5 metros RIB con casco offshore de 24° deep V y tanque de combustible 105L.',
      ap560: 'Deportes básicos de largo alcance RIB con 115 HP, 105L de combustible y capacidad para 12 personas.',
      ap660: 'CE Category B offshore de lujo RIB con 26° deep V y 200 HP.',
      ap700: 'RIB de alta mar de lujo de 7 metros con 250 HP y 280L de combustible.',
      ap760: 'Buque insignia de lujo en alta mar de 7,6 m RIB con 300 HP y 280L de combustible.',
      ap800: 'Buque insignia de crucero en alta mar con 350 HP, soporte bimotor, tanque de combustible 300L.',
      ap900: 'El buque insignia definitivo de 9,12 m RIB con 600 motores gemelos HP y combustible 380L.',
      df420: 'RIB comercial/de servicio pesado de nivel básico para operaciones de patrulla y servicios públicos.',
      df460: 'Utilitario de clase de 4 metros RIB que equilibra la maniobrabilidad con la capacidad de carga útil.',
      df500:
        'Utilidad comercial principal RIB con casco deep V costa afuera de 24° y tanque de combustible integrado 90L.',
      df540: 'Caballo de batalla de tamaño mediano para patrullaje, SAR y operaciones comerciales.',
      'df540-coaster': 'Patrulla Coaster Edition RIB con plataforma de trabajo modular dedicada.',
      df600: 'Patrulla offshore de 6 metros RIB con certificación CE Category B y combustible 140L.',
      df700: 'Caballo de batalla comercial SAR de 7 metros con tanque de combustible 285L ultragrande.',
      df760: 'Offshore SAR e interceptor pesado con tubos extragrandes de 60 cm y 300 HP.',
      df860: 'Interceptor insignia definitivo de 8,6 m con motores gemelos 500 HP.',
      ex7: 'Embarcación crossover de 7m con casco de fibra de vidrio y tubos delgados elevados.',
      ex9: 'Insignia crossover premium de 9 m con cabina, aseo, barra húmeda y combustible 450L.',
      sw240: 'Tender de aluminio ultraligero de 2,4 m a solo 33 kg: portátil por una sola persona.',
      sw260: 'Embarcación de tamaño dorado en 35 kg: el equilibrio perfecto entre capacidad y portabilidad.',
      sw290: 'Auxiliar de tamaño mediano con 15° deadrise mejorado para un mejor rendimiento.',
      sw310: 'Tender ampliado con tubos de 44cm y capacidad para 5 personas.',
      sw340: 'Buque insignia Swiftlitee con capacidad para 6 personas a solo 53 kg.',
      vr260: 'El Versa más compacto con comodidad de dos pisos y tubos de alta flotabilidad de 44 cm.',
      vr290: 'Lancha auxiliar de lujo con punto dulce, doble piso y tubos de 44 cm.',
      vr310: 'Milestone Versa con doble piso compatible con consola y capacidad para 5 personas.',
      vr340: 'Auxiliar primario con excelente capacidad espacial y plataforma compatible con consola.',
      vr360: 'El ténder de lujo de alto rendimiento ingresa a la clase 30 HP.',
      vr380: 'Lancha de lujo de tamaño mediano a grande con tres opciones de consola para yates y catamaranes.',
      vr400:
        'Buque insignia crossover con casco de 20° deep V y 50 HP para capacidad de crucero de consola de tamaño mediano.',
      vr420: 'Crucero de consola de lujo de tamaño mediano a grande con carga útil de 60 HP y 800 kg.',
      vr460: 'El buque insignia Versa más grande con 70 HP, 920 kg carga útil y casco reforzado 4mm.',
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
      'airdeck-360': 'AirDeck 360',
      'heavy-duty-raft-commercial': 'Raft commercial robuste',
      'high-speed-catamaran': 'Catamaran de course rapide (AQHB)',
      'inflatable-catamaran-kayak': 'Kayak catamaran gonflable',
      kaboat: 'KaBoat Kayak catamaran (série ZB)',
      'kayak-full-dropstitch': 'Kayak performance tout drop-stitch',
      'kayak-hybrid': 'Kayak hybride drop-stitch',
      'life-vest-classic': 'Gilet de sauvetage Classic',
      'life-vest-pro': 'Gilet de sauvetage Pro',
      'oars-pump-set': 'Ensemble pagaies et pompe',
      'premium-dropstitch-seat': 'Siège premium en drop-stitch',
      'rib-250': 'RIB250',
      'rib-270': 'RIB270',
      'rib-300': 'RIB300',
      'rib-330': 'RIB 330',
      'rib-330a': 'RIB330A',
      'rib-330b': 'RIB330B',
      'rib-330c': 'RIB330C',
      'rib-360a': 'RIB360A — RIB familial et de pêche polyvalent de 3.6m',
      'rib-360b': 'RIB360B — RIB de randonnée premium de 3.6m avec cabine et console',
      'rib-390a': 'RIB390A — RIB sportif de 3.9m avec tubes surdimensionnés de 47 cm',
      'rib-390al': 'RIB390AL — RIB de sécurité à 4 chambres avec console et options premium',
      'rib-390b': 'RIB390B — RIB robuste de 3.9m avec réservoir de 40 L et cabines complètes',
      'rib-390bl': 'RIB390BL — RIB phare de 3.9m avec arceau, plancher soleil et 4 chambres',
      'rib-430a': "RIB430A — RIB léger à pont ouvert de 4.3 m pour l'annexe côtière et la pêche",
      'rib-430b': 'RIB430B — RIB de 4.3 m à console centrale avec 4 chambres à air et pompe de cale',
      'rib-430c': 'RIB430C — RIB expédition de 4.3 m avec arceau, pare-brise et réservoir de 50 L',
      'rib-450-patrol': 'RIB 450 Patrol',
      'rib-480a': 'RIB480A — RIB léger à pont ouvert de 4.8 m avec 5 chambres à air et 60 HP',
      'rib-480b': 'RIB480B — RIB de 4.8 m à console centrale avec réservoir de 60 L et arceau targa',
      'rib-480c': 'RIB480C — RIB de 4.8 m avec console à pare-brise, tableau de commande 4 points et cabines arrière',
      'rib-480d': "RIB480D — RIB premium de 4.8 m avec plancher soleil, échelle d'embarquement et réservoir de 60 L",
      'rib-480w': 'RIB480W — RIB de 4.8 m à large bau de 2.35 m avec console centrale',
      'rib-500': 'RIB500 — RIB offshore de 5.0 m avec largeur de 2.10 m, tubes de 52 cm et 60 HP',
      'rib-520a': 'RIB520A — RIB léger à pont ouvert de 5.2 m pour constructions sur mesure',
      'rib-520b': 'RIB520B — RIB de 5.2 m à large bau et console centrale pour la patrouille et le charter',
      'rib-520c': 'RIB520C — RIB de loisir de 5.2 m à large bau avec console centrale et plancher soleil',
      'rib-520e': 'RIB520E — RIB robuste de 5.2 m avec 115 HP et arceau en acier inoxydable',
      'rib-520w': 'RIB520W — RIB de 5.2 m le plus large avec bau de 2.35 m pour une stabilité maximale',
      'rib-550a': 'RIB550A — RIB léger de 5.5 m pour la patrouille et la pêche avec 90 HP',
      'rib-550b': 'RIB550B — RIB de 5.5 m à console centrale entièrement équipé avec réservoir de 100 L',
      'rib-580a': 'RIB580A — RIB offshore de 5.8 m à console centrale avec 115 HP et 90 L de carburant',
      'rib-580b': 'RIB580B — RIB de 5.8 m pour forte houle avec tubes surdimensionnés de 58 cm',
      'rib-600': 'RIB600 — RIB avancé de 6.0 m avec largeur de 2.50 m et 6 chambres à air',
      'rib-680a': 'RIB680A — Grand RIB de 6.6 m avec 200 HP, 7 chambres et vivier',
      'rib-680b': 'RIB680B — RIB de passagers de 6.8 m taille réelle avec 200 HP et barre de ski',
      'rib-700': 'RIB700',
      'rib-760': 'RIB760',
      'sib-aluminum-floor': 'Bateau gonflable sport (plancher en aluminium)',
      'sib-dropstitch-floor': 'Bateau gonflable sport (plancher drop-stitch)',
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
      'tactical-raft': 'Raft expédition tactique',
      'whitewater-raft': "Raft d'eau vive nouvelle génération (AQDRB)",
      'zb-mt350': 'AQMT-11\'6"',

      ap330: 'Apex Performance 330 (AP330)',
      ap360: 'Apex Performance 360 (AP360)',
      ap390: 'Apex Performance 390 (AP390)',
      ap420: 'Apex Performance 420 (AP420)',
      ap460: 'Apex Performance 460 (AP460)',
      ap520: 'Apex Performance 520 (AP520)',
      ap560: 'Apex Performance 560 (AP560)',
      ap660: 'Apex Performance 660 (AP660)',
      ap700: 'Apex Performance 700 (AP700)',
      ap760: 'Apex Performance 760 (AP760)',
      ap800: 'Apex Performance 800 (AP800)',
      ap900: 'Apex Performance 900 (AP900)',
      df420: 'Defender 420 (DF420)',
      df460: 'Defender 460 (DF460)',
      df500: 'Defender 500 (DF500)',
      df540: 'Defender 540 (DF540)',
      'df540-coaster': 'Defender 540 Coaster (DF540 Coaster)',
      df600: 'Defender 600 (DF600)',
      df700: 'Defender 700 (DF700)',
      df760: 'Defender 760 (DF760)',
      df860: 'Defender 860 (DF860)',
      ex7: 'Explorer 7 (EX7)',
      ex9: 'Explorer 9 (EX9)',
      sw240: 'Swiftlitee 240 (SW240)',
      sw260: 'Swiftlitee 260 (SW260)',
      sw290: 'Swiftlitee 290 (SW290)',
      sw310: 'Swiftlitee 310 (SW310)',
      sw340: 'Swiftlitee 340 (SW340)',
      vr260: 'Versa 260 (VR260)',
      vr290: 'Versa 290 (VR290)',
      vr310: 'Versa 310 (VR310)',
      vr340: 'Versa 340 (VR340)',
      vr360: 'Versa 360 (VR360)',
      vr380: 'Versa 380 (VR380)',
      vr400: 'Versa 400 (VR400)',
      vr420: 'Versa 420 (VR420)',
      vr460: 'Versa 460 (VR460)',
    },
    summaries: {
      'airdeck-360':
        'Bateau gonflable spacieux de 3.6 m avec plancher air-deck renforcé — idéal pour les loisirs en famille et la pêche.',
      'heavy-duty-raft-commercial':
        'Raft gonflable de qualité commerciale conçu pour un usage quotidien intensif dans les opérations touristiques, avec planchers renforcés et tissu de qualité industrielle.',
      'high-speed-catamaran':
        'Catamaran gonflable rapide à double coque pour une stabilité, une vitesse et une maniabilité exceptionnelles.',
      'inflatable-catamaran-kayak':
        "Kayak catamaran gonflable d'entrée de gamme offrant une stabilité exceptionnelle pour les débutants, la pêche et la navigation de loisir.",
      kaboat:
        "Kayak catamaran hybride qui se transforme d'une plateforme de pêche stable à double coque en un kayak de randonnée monocoque profilé.",
      'kayak-full-dropstitch':
        "Kayak gonflable haute performance avec coque entièrement en drop-stitch pour une rigidité et une trajectoire proches de celles d'une coque rigide.",
      'kayak-hybrid':
        'Kayak gonflable polyvalent avec plancher partiel en drop-stitch pour un équilibre entre rigidité, portabilité et prix abordable.',
      'life-vest-classic': 'Aide à la flottabilité universelle certifiée CE pour les sports nautiques de loisir.',
      'life-vest-pro':
        'Gilet de sauvetage gonflable automatique conforme SOLAS pour les opérations offshore et de sauvetage.',
      'oars-pump-set':
        'Paire de pagaies en aluminium de 1.6 m et pompe à pied haute performance de 5 L. Compatible avec tous les bateaux gonflables de la gamme.',
      'premium-dropstitch-seat':
        "Siège gonflable haute pression en drop-stitch pour un confort et un soutien supérieurs lors des longues journées sur l'eau.",
      'rib-250':
        "RIB compact de 2.5 m — coque en aluminium légère, idéale comme annexe de yacht, canot de pêche ou bateau de lac pour jusqu'à 3 personnes.",
      'rib-270':
        "RIB de taille moyenne de 2.7 m avec une largeur de 162 cm et une puissance de 10 HP — stable, portable et parfait pour la pêche en lac, l'utilisation comme annexe de yacht et la navigation côtière.",
      'rib-300':
        'RIB polyvalent de 3.0 m avec une puissance de 20 HP, coque en V profond et places pour 4 — un favori des familles pour la navigation en lac et les aventures côtières.',
      'rib-330':
        "RIB à coque en aluminium de 3.3 m, best-seller — annexe de yacht levable par bossoir et bateau familial pour jusqu'à 5 personnes.",
      'rib-330a':
        'RIB léger de 3.3 m avec coque en fibre de verre, poids de 80 kg et puissance de 20 HP — agile, abordable et facile à remorquer.',
      'rib-330b':
        'RIB de 3.3 m axé sur le confort avec coussin de cabine avant, bac à ancre et puissance de 20 HP — un bateau de jour raffiné pour 4 personnes.',
      'rib-330c':
        'RIB premium de 3.3 m avec cabines avant/arrière, console centrale et 20 HP — la variante 3.3 m la plus complète.',
      'rib-360a':
        "RIB léger de 3.6 m à coque en fibre de verre avec largeur de 1.80 m, poids net de 120 kg et capacité de charge de 650 kg. Idéal pour les sorties de pêche côtière, les sorties en famille et les transferts portuaires avec des moteurs jusqu'à 25 HP.",
      'rib-360b':
        "RIB de 3.6 m à coque en fibre de verre riche en équipements, avec largeur de 1.80 m, poids net de 100 kg et capacité de charge de 650 kg. Équipé de cabines avant et arrière, d'une console centrale et d'une pompe de cale pour la navigation côtière et les croisières en famille.",
      'rib-390a':
        'RIB léger de 3.9 m à coque en fibre de verre avec largeur de 1.85 m, poids net de 100 kg et tubes de 47 cm. Homologué pour des moteurs hors-bord de 30 HP avec une capacité de charge de 650 kg pour 5 personnes. Idéal pour le sport, la pêche et la navigation côtière.',
      'rib-390al':
        'RIB premium de 3.9 m à coque en fibre de verre avec 4 chambres à air indépendantes, largeur de 1.85 m, poids net de 120 kg et capacité de charge de 650 kg. Console centrale, coffre de siège et options de plancher de luxe inclus. Homologué pour des moteurs hors-bord de 30 HP.',
      'rib-390b':
        "RIB robuste de 3.9 m à coque en fibre de verre avec largeur de 1.85 m, poids net de 130 kg et tubes Hypalon de 47 cm. Dispose de cabines avant et arrière, d'une console centrale, d'une pompe de cale et d'un réservoir intégré de 40 L. Homologué pour des moteurs hors-bord de 30 HP avec capacité de charge de 650 kg.",
      'rib-390bl':
        'RIB de 3.9 m à coque en fibre de verre entièrement équipé, avec 4 chambres à air, largeur de 1.78 m, poids net de 110 kg et capacité de charge de 650 kg. Console centrale avec direction, arceau avec feux, réservoir de 25 L, plancher soleil et échelle en tube en C. Homologué pour des moteurs hors-bord de 30 HP.',
      'rib-430a':
        "RIB léger de 4.3 m en fibre de verre avec largeur de 2.00 m, 3 chambres à air, poids net de 170 kg et charge max de 640 kg. Conçu pour l'annexe côtière, la pêche de loisir et les usages commerciaux légers.",
      'rib-430b':
        "RIB de 4.3 m à console centrale en fibre de verre avec largeur de 2.00 m, 4 chambres à air, poids net de 200 kg et charge max de 640 kg. Équipé d'une pompe de cale, d'un feu arrière et d'anneaux de ski pour la patrouille, la pêche et les sports nautiques.",
      'rib-430c':
        'RIB de 4.3 m en fibre de verre entièrement équipé avec largeur de 1.96 m, tubes de 48 cm, 4 chambres à air, poids net de 200 kg et charge max de 640 kg. Console centrale avec pare-brise, arceau avec feux et réservoir intégré de 50 L.',
      'rib-450-patrol':
        'RIB de patrouille de 4.5 m à coque en aluminium. Construction robuste, adapté aux opérateurs commerciaux.',
      'rib-480a':
        'RIB léger de 4.8 m en fibre de verre avec largeur de 2.00 m, 5 chambres à air, poids net de 183 kg et charge max de 680 kg. Conçu pour le transport côtier, la pêche au large et les opérations de plongée avec une puissance moteur max de 60 HP.',
      'rib-480b':
        "RIB de 4.8 m à console centrale en fibre de verre avec largeur de 2.00 m, 5 chambres à air, poids net de 260 kg et charge max de 680 kg. Équipé d'une pompe de cale, d'un réservoir intégré de 60 L et d'un arceau targa avec feux de navigation.",
      'rib-480c':
        'RIB de 4.8 m en fibre de verre entièrement équipé avec largeur de 2.00 m, 5 chambres à air, poids net de 280 kg et charge max de 680 kg. Console centrale avec pare-brise intégré et tableau de commande 4 points, sièges de cabine arrière et puissance de 60 HP.',
      'rib-480d':
        'RIB premium de 4.8 m en fibre de verre avec largeur de 2.00 m, 5 chambres à air, poids net de 280 kg et charge max de 680 kg. Console centrale, réservoir intégré de 60 L, arceau targa, échelle arrière en acier inoxydable et coussin de plancher soleil pour un usage familial et charter.',
      'rib-480w':
        'RIB de 4.8 m à large bau en fibre de verre avec largeur de 2.35 m, 5 chambres à air, poids net de 280 kg et charge max de 680 kg. Console centrale avec siège latéral, réservoir de 60 L et arceau targa offrant une stabilité et un espace de pont exceptionnels pour le charter et la plongée.',
      'rib-500':
        "RIB offshore de 5.0 m en fibre de verre avec largeur de 2.10 m, tubes de 52 cm, 5 chambres à air, poids net de 314 kg et charge max de 686 kg. Console centrale, réservoir de 60 L et arceau targa pour le soutien d'expédition, la pêche au large et le transport commercial.",
      'rib-520a':
        'RIB léger à pont ouvert de 5.2 m (RIB520A) — coque de 200 kg, capacité de 8 personnes, 85 HP max. Idéal pour les constructions sur mesure, la pêche au large et le soutien de plongée.',
      'rib-520b':
        'RIB de 5.2 m à large bau et console centrale (RIB520B) — largeur de 2.28 m, coque de 400 kg, réservoir de 80 L, capacité de 8 personnes. Conçu pour la patrouille côtière, la pêche au large et le charter de passagers.',
      'rib-520c':
        'RIB de loisir de 5.2 m à large bau (RIB520C) — largeur de 2.28 m, coque de 360 kg, console centrale, coussin de plancher soleil, arceau targa avec feux. Idéal pour les sports nautiques, les croisières en famille et le charter.',
      'rib-520e':
        "RIB robuste de 5.2 m (RIB520E) — coque de 450 kg, 115 HP max, réservoir de 80 L avec jauge, arceau en acier inoxydable, console centrale. Conçu pour la pêche au large sérieuse et le soutien d'expédition.",
      'rib-520w':
        'RIB de 5.2 m le plus large (RIB520W) — largeur de 2.35 m, coque de 230 kg, agencement ouvert, capacité de 8 personnes, 85 HP max. Stabilité exceptionnelle pour les opérations de plongée, la pêche guidée et le transport de passagers.',
      'rib-550a':
        'RIB léger de 5.5 m (RIB550A) — coque de 240 kg, largeur de 2.30 m, réservoir de 60 L, capacité de 7 personnes, 90 HP max. Conçu pour la patrouille côtière, le transport et la pêche sérieuse.',
      'rib-550b':
        'RIB de 5.5 m à console centrale entièrement équipé (RIB550B) — coque de 450 kg, largeur de 2.30 m, réservoir de 100 L, arceau, plancher soleil. Conçu pour les expéditions offshore prolongées et le transport intensif.',
      'rib-580a':
        "RIB offshore de 5.8 m à console centrale (RIB580A) — coque de 450 kg, largeur de 2.38 m, réservoir de 90 L, arceau targa, capacité de 8 personnes, 115 HP max. Conçu pour le transport d'expédition et la pêche hauturière.",
      'rib-580b':
        'RIB de 5.8 m pour forte houle (RIB580B) — coque de 450 kg, tubes surdimensionnés de 58 cm, largeur de 2.38 m, réservoir de 90 L, capacité de 8 personnes, 115 HP max. Flottabilité et stabilité exceptionnelles pour les conditions offshore exigeantes.',
      'rib-600':
        'RIB avancé de 6.0 m (RIB600) — coque de 500 kg, largeur de 2.50 m, 6 chambres à air, réservoir de 120 L, arceau, capacité de 8 personnes, 115 HP max. Le pont entre les RIB offshore de classe intermédiaire et grande.',
      'rib-680a':
        'Grand RIB de 6.6 m (RIB680A) — coque de 500 kg, largeur de 2.52 m, 7 chambres à air, réservoir de 150 L, vivier, capacité de 10 personnes, 200 HP max. Conçu pour la pêche au gros, le charter commercial et le soutien de plongée.',
      'rib-680b':
        "RIB de passagers de 6.8 m taille réelle (RIB680B) — coque de 500 kg, largeur de 2.52 m, 7 chambres à air, réservoir de 100 L, barre de ski, capacité de 10 personnes, 200 HP max. Conçu pour le transport commercial de passagers, le soutien de plongée et le remorquage d'expédition.",
      'rib-700': 'Bateau gonflable à coque rigide haute performance de 710 cm (RIB700) pour le transport et la pêche.',
      'rib-760': 'Bateau gonflable à coque rigide haute performance de 760 cm (RIB760) pour le transport et la pêche.',
      'sib-aluminum-floor':
        "Bateau gonflable sport polyvalent avec plancher rigide en aluminium pour d'excellentes performances et une grande durabilité.",
      'sib-dropstitch-floor':
        'Bateau gonflable sport léger avec plancher drop-stitch haute pression pour une rigidité et une portabilité supérieures.',
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
      'tactical-raft':
        'Raft gonflable de spécification militaire conçu pour les opérations tactiques, la recherche et le sauvetage et les expéditions extrêmes.',
      'whitewater-raft':
        "Raft d'eau vive robuste avec plancher autovideur, construction renforcée et caractéristiques de déploiement rapide pour la descente de rivières professionnelle.",
      'zb-mt350':
        "AQMT-11'6\" — RIB en fibre de verre de 11.5 pi pour la patrouille côtière, le transport commercial et le soutien d'expédition.",

      ap330: "Console de luxe d'entrée de gamme RIB annexe de la série Apex Performance.",
      ap360: 'Console centrale de luxe de petite à moyenne taille RIB avec capacité 40 HP.',
      ap390: 'La console de luxe de taille moyenne RIB entre dans la classe 50 HP.',
      ap420: 'Le premier dayboat familial parfait avec une capacité de 70 HP et un réservoir de carburant 55L.',
      ap460: 'Modèle crossover phare de la classe des 4 mètres avec aménagement ergonomique et bow locker.',
      ap520: 'Luxe de classe 5 mètres RIB avec coque offshore deep V à 24° et réservoir de carburant 105L.',
      ap560: 'Sports de base à longue portée RIB avec 115 HP, 105L de carburant et une capacité de 12 personnes.',
      ap660: 'CE Category B luxe offshore RIB avec 26° deep V et 200 HP.',
      ap700: 'RIB offshore de luxe de 7 mètres avec 250 HP et 280L de carburant.',
      ap760: 'Phare offshore de luxe de 7,6 m RIB avec 300 HP et 280L de carburant.',
      ap800: 'Phare de croisière offshore avec 350 HP, support moteur double, réservoir de carburant 300L.',
      ap900: 'Le vaisseau amiral ultime de 9,12 m RIB avec 600 moteurs jumeaux HP et du carburant 380L.',
      df420: "Commercial/lourd d'entrée de gamme RIB pour les opérations de patrouille et de services publics.",
      df460: 'Utilitaire de classe 4 mètres RIB équilibrant la maniabilité et la capacité de charge utile.',
      df500:
        'Utilitaire commercial de base RIB avec coque deep V offshore à 24° et réservoir de carburant intégré 90L.',
      df540: 'Cheval de bataille offshore de taille moyenne pour les opérations de patrouille, SAR et commerciales.',
      'df540-coaster': 'Patrouille Coaster Edition RIB avec plate-forme de travail modulaire dédiée.',
      df600: 'Patrouille offshore de 6 mètres RIB avec certification CE Category B et carburant 140L.',
      df700: 'Cheval de trait commercial SAR de 7 mètres avec réservoir de carburant ultra-large 285L.',
      df760: 'Offshore SAR et intercepteur lourd avec tubes extra-larges de 60 cm et 300 HP.',
      df860: 'Intercepteur phare ultime de 8,6 m avec 500 moteurs jumeaux HP.',
      ex7: 'Bateau crossover de 7 m avec coque en fibre de verre et tubes minces surélevés.',
      ex9: 'Phare multisegment haut de gamme de 9 m avec cabine, tête, barre humide et carburant 450L.',
      sw240: 'Annexe en aluminium ultra-légère de 2,4 m à seulement 33 kg — portable par une seule personne.',
      sw260: "Annexe de taille dorée à 35 kg — l'équilibre parfait entre capacité et portabilité.",
      sw290: 'Annexe de taille moyenne avec deadrise amélioré à 15° pour de meilleures performances.',
      sw310: 'Annexe élargie avec tubes de 44 cm et capacité de 5 personnes.',
      sw340: 'Produit phare Swiftlitee avec une capacité de 6 personnes pour seulement 53 kg.',
      vr260: 'Le Versa le plus compact avec un confort à deux étages et des tubes à haute flottabilité de 44 cm.',
      vr290: 'Annexe de luxe Sweet-spot avec double pont et tubes de 44 cm.',
      vr310: 'Milestone Versa avec double pont compatible avec console et capacité de 5 personnes.',
      vr340: 'Annexe principale avec une excellente capacité spatiale et un pont compatible avec console.',
      vr360: 'Annexe de luxe haute performance entrant dans la classe 30 HP.',
      vr380: 'Annexe de luxe de taille moyenne à grande avec trois options de console pour yachts et catamarans.',
      vr400:
        'Phare crossover avec une coque deep V de 20° et 50 HP pour une capacité de croiseur à console de taille moyenne.',
      vr420: 'Croiseur console de luxe de taille moyenne à grande avec une charge utile de 60 HP et 800 kg.',
      vr460: 'Le plus grand vaisseau amiral Versa avec 70 HP, 920 kg de charge utile et une coque renforcée 4mm.',
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
      'airdeck-360': 'AirDeck 360',
      'heavy-duty-raft-commercial': 'Zattera commerciale per uso intensivo',
      'high-speed-catamaran': 'Catamarano da corsa ad alta velocità (AQHB)',
      'inflatable-catamaran-kayak': 'Kayak catamarano gonfiabile',
      kaboat: 'Kayak catamarano KaBoat (Serie ZB)',
      'kayak-full-dropstitch': 'Kayak full drop-stitch ad alte prestazioni',
      'kayak-hybrid': 'Kayak drop-stitch ibrido',
      'life-vest-classic': 'Gilet salvagente Classic',
      'life-vest-pro': 'Gilet salvagente Pro',
      'oars-pump-set': 'Set pagaie e pompa',
      'premium-dropstitch-seat': 'Sedile drop-stitch Premium',
      'rib-250': 'RIB250',
      'rib-270': 'RIB270',
      'rib-300': 'RIB300',
      'rib-330': 'RIB 330',
      'rib-330a': 'RIB330A',
      'rib-330b': 'RIB330B',
      'rib-330c': 'RIB330C',
      'rib-360a': 'RIB360A — RIB versatile da 3.6 m per famiglia e pesca',
      'rib-360b': 'RIB360B — RIB touring premium da 3.6 m con cabina e console',
      'rib-390a': 'RIB390A — RIB sportivo da 3.9 m con tubi extra-large da 47 cm',
      'rib-390al': 'RIB390AL — RIB di sicurezza a 4 camere con console e opzioni premium',
      'rib-390b': 'RIB390B — RIB heavy-duty da 3.9 m con serbatoio da 40 L e cabine complete',
      'rib-390bl': 'RIB390BL — RIB di punta da 3.9 m con roll bar, prendisole e 4 camere',
      'rib-430a': 'RIB430A — RIB leggero a ponte aperto da 4.3 m per trasferimenti costieri e pesca',
      'rib-430b': "RIB430B — RIB con console centrale da 4.3 m, 4 camere d'aria e pompa di sentina",
      'rib-430c': 'RIB430C — RIB da spedizione da 4.3 m con roll bar, parabrezza e serbatoio da 50 L',
      'rib-450-patrol': 'RIB 450 Patrol',
      'rib-480a': "RIB480A — RIB leggero a ponte aperto da 4.8 m con 5 camere d'aria e potenza 60 HP",
      'rib-480b': 'RIB480B — RIB con console centrale da 4.8 m con serbatoio da 60 L e arco targa',
      'rib-480c':
        'RIB480C — RIB da 4.8 m con console con parabrezza, pannello interruttori a 4 punti e cabine poppiere',
      'rib-480d': 'RIB480D — RIB premium da 4.8 m con prendisole, scaletta di bordo e serbatoio da 60 L',
      'rib-480w': 'RIB480W — RIB a baglio largo da 4.8 m con larghezza 2.35 m e console centrale',
      'rib-500': 'RIB500 — RIB offshore da 5.0 m con larghezza 2.10 m, tubi da 52 cm e potenza 60 HP',
      'rib-520a': 'RIB520A — RIB leggero a ponte aperto da 5.2 m per costruzioni personalizzate',
      'rib-520b': 'RIB520B — RIB a baglio largo con console centrale da 5.2 m per pattugliamento e charter',
      'rib-520c': 'RIB520C — RIB leisure a baglio largo da 5.2 m con console centrale e prendisole',
      'rib-520e': 'RIB520E — RIB heavy-duty da 5.2 m con potenza 115 HP e roll bar in acciaio inox',
      'rib-520w': 'RIB520W — RIB più largo da 5.2 m con larghezza 2.35 m per la massima stabilità',
      'rib-550a': 'RIB550A — RIB leggero da 5.5 m per pattugliamento e pesca con potenza 90 HP',
      'rib-550b': 'RIB550B — RIB completamente attrezzato con console centrale da 5.5 m e serbatoio da 100 L',
      'rib-580a': 'RIB580A — RIB offshore con console centrale da 5.8 m con 115 HP e serbatoio da 90 L',
      'rib-580b': 'RIB580B — RIB per mari agitati da 5.8 m con tubi extra-large da 58 cm',
      'rib-600': "RIB600 — RIB avanzato da 6.0 m con larghezza 2.50 m e 6 camere d'aria",
      'rib-680a': 'RIB680A — RIB grande da 6.6 m con 200 HP, 7 camere e vasca per il pescato',
      'rib-680b': 'RIB680B — RIB passeggeri full-size da 6.8 m con 200 HP e ski bar',
      'rib-700': 'RIB700',
      'rib-760': 'RIB760',
      'sib-aluminum-floor': 'Gommone sportivo (pavimento in alluminio)',
      'sib-dropstitch-floor': 'Gommone sportivo (pavimento drop-stitch)',
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
      'tactical-raft': 'Zattera tattica da spedizione',
      'whitewater-raft': 'Zattera whitewater di nuova generazione (AQDRB)',
      'zb-mt350': 'AQMT-11\'6"',

      ap330: 'Apex Performance 330 (AP330)',
      ap360: 'Apex Performance 360 (AP360)',
      ap390: 'Apex Performance 390 (AP390)',
      ap420: 'Apex Performance 420 (AP420)',
      ap460: 'Apex Performance 460 (AP460)',
      ap520: 'Apex Performance 520 (AP520)',
      ap560: 'Apex Performance 560 (AP560)',
      ap660: 'Apex Performance 660 (AP660)',
      ap700: 'Apex Performance 700 (AP700)',
      ap760: 'Apex Performance 760 (AP760)',
      ap800: 'Apex Performance 800 (AP800)',
      ap900: 'Apex Performance 900 (AP900)',
      df420: 'Defender 420 (DF420)',
      df460: 'Defender 460 (DF460)',
      df500: 'Defender 500 (DF500)',
      df540: 'Defender 540 (DF540)',
      'df540-coaster': 'Defender 540 Coaster (DF540 Coaster)',
      df600: 'Defender 600 (DF600)',
      df700: 'Defender 700 (DF700)',
      df760: 'Defender 760 (DF760)',
      df860: 'Defender 860 (DF860)',
      ex7: 'Explorer 7 (EX7)',
      ex9: 'Explorer 9 (EX9)',
      sw240: 'Swiftlitee 240 (SW240)',
      sw260: 'Swiftlitee 260 (SW260)',
      sw290: 'Swiftlitee 290 (SW290)',
      sw310: 'Swiftlitee 310 (SW310)',
      sw340: 'Swiftlitee 340 (SW340)',
      vr260: 'Versa 260 (VR260)',
      vr290: 'Versa 290 (VR290)',
      vr310: 'Versa 310 (VR310)',
      vr340: 'Versa 340 (VR340)',
      vr360: 'Versa 360 (VR360)',
      vr380: 'Versa 380 (VR380)',
      vr400: 'Versa 400 (VR400)',
      vr420: 'Versa 420 (VR420)',
      vr460: 'Versa 460 (VR460)',
    },
    summaries: {
      'airdeck-360':
        'Gommone spazioso da 3.6 m con pavimento air-deck rinforzato — ideale per ricreazione in famiglia e pesca.',
      'heavy-duty-raft-commercial':
        'Zattera gonfiabile di livello commerciale progettata per un uso quotidiano intenso nelle operazioni turistiche, con pavimenti rinforzati e tessuto per impiego industriale.',
      'high-speed-catamaran':
        'Catamarano gonfiabile ad alta velocità con doppio scafo per stabilità, velocità e manovrabilità eccezionali.',
      'inflatable-catamaran-kayak':
        'Kayak catamarano gonfiabile di livello base con stabilità eccezionale per principianti, pesca e pagaiata ricreativa.',
      kaboat:
        'Kayak catamarano ibrido che si converte da stabile piattaforma da pesca a doppio scafo a kayak da touring a scafo singolo dalle linee aerodinamiche.',
      'kayak-full-dropstitch':
        'Kayak gonfiabile ad alte prestazioni con scafo full drop-stitch per rigidità e direzionalità paragonabili a uno scafo rigido.',
      'kayak-hybrid':
        'Kayak gonfiabile versatile con pavimento drop-stitch parziale per un equilibrio tra rigidità, portabilità e convenienza.',
      'life-vest-classic': 'Galleggiante universale certificato CE per sport acquatici ricreativi.',
      'life-vest-pro': 'Gilet salvagente gonfiabile automatico conforme SOLAS per operazioni offshore e di soccorso.',
      'oars-pump-set':
        'Coppia di pagaie in alluminio da 1.6 m e pompa a pedale ad alto flusso da 5 L. Adatta a tutti i gommoni della gamma.',
      'premium-dropstitch-seat':
        'Sedile gonfiabile drop-stitch ad alta pressione per comfort e supporto superiori durante le lunghe giornate in acqua.',
      'rib-250':
        'RIB compatto da 2.5 m — scafo in alluminio leggero, ideale come tender per yacht, piccola barca da pesca o barca da lago per un massimo di 3 persone.',
      'rib-270':
        "RIB medio da 2.7 m con larghezza di 162 cm e potenza 10 HP — stabile, portatile e perfetto per la pesca in lago, l'uso come tender da yacht e la navigazione costiera.",
      'rib-300':
        "RIB versatile da 3.0 m con potenza 20 HP, scafo a V profondo e posti per 4 — un preferito delle famiglie per la crociera in lago e l'avventura costiera.",
      'rib-330':
        'RIB da 3.3 m con scafo in alluminio, il più venduto — tender da yacht sollevabile con gru e barca da giorno per famiglia fino a 5 persone.',
      'rib-330a':
        'RIB leggero da 3.3 m con scafo in vetroresina, peso di 80 kg e potenza 20 HP — agile, conveniente e facile da trainare.',
      'rib-330b':
        "RIB da 3.3 m incentrato sul comfort con cuscino cabina anteriore, vassoio per ancora e potenza 20 HP — un'elegante barca da giorno per 4.",
      'rib-330c':
        'RIB premium da 3.3 m con cabine anteriore/posteriore, console centrale e 20 HP — la variante da 3.3 m più completa.',
      'rib-360a':
        'RIB leggero da 3.6 m con scafo in vetroresina, larghezza 1.80 m, peso netto 120 kg e portata di 650 kg. Ideale per battute di pesca costiera, gite in famiglia e trasferimenti in porto con motori fino a 25 HP.',
      'rib-360b':
        'RIB da 3.6 m con scafo in vetroresina ricco di dotazioni, con larghezza 1.80 m, peso netto 100 kg e portata di 650 kg. Dotato di cabine anteriore e posteriore, console centrale e pompa di sentina per touring costiero e crociere in famiglia.',
      'rib-390a':
        'RIB leggero da 3.9 m con scafo in vetroresina, larghezza 1.85 m, peso netto 100 kg e tubi da 47 cm. Omologato per fuoribordo da 30 HP con portata di 650 kg per 5 persone. Ideale per sport, pesca e navigazione costiera.',
      'rib-390al':
        "RIB premium da 3.9 m con scafo in vetroresina, 4 camere d'aria indipendenti, larghezza 1.85 m, peso netto 120 kg e portata di 650 kg. Console centrale, box sedile e opzioni pavimentazione di lusso incluse. Omologato per fuoribordo da 30 HP.",
      'rib-390b':
        'RIB robusto da 3.9 m con scafo in vetroresina, larghezza 1.85 m, peso netto 130 kg e tubi Hypalon da 47 cm. Dotato di cabine anteriore e posteriore, console centrale, pompa di sentina e serbatoio carburante incorporato da 40 L. Omologato per fuoribordo da 30 HP con portata di 650 kg.',
      'rib-390bl':
        "RIB da 3.9 m con scafo in vetroresina completamente attrezzato, con 4 camere d'aria, larghezza 1.78 m, peso netto 110 kg e portata di 650 kg. Console centrale con timoneria, roll bar con luci, serbatoio da 25 L, prendisole e scaletta a tubo a forma di C. Omologato per fuoribordo da 30 HP.",
      'rib-430a':
        "RIB leggero da 4.3 m in vetroresina con larghezza 2.00 m, 3 camere d'aria, peso netto 170 kg e carico max di 640 kg. Progettato per servizio di tender costiero, pesca sportiva e impieghi commerciali leggeri.",
      'rib-430b':
        "RIB in vetroresina con console centrale da 4.3 m, larghezza 2.00 m, 4 camere d'aria, peso netto 200 kg e carico max di 640 kg. Dotato di pompa di sentina, luce posteriore e anelli ski per pattugliamento, pesca e sport acquatici.",
      'rib-430c':
        "RIB in vetroresina da 4.3 m completamente attrezzato, con larghezza 1.96 m, tubi da 48 cm, 4 camere d'aria, peso netto 200 kg e carico max di 640 kg. Console centrale con parabrezza, roll bar con luci e serbatoio carburante integrato da 50 L.",
      'rib-450-patrol':
        'RIB da pattugliamento da 4.5 m con scafo in alluminio. Costruzione heavy-duty, adatto agli operatori commerciali.',
      'rib-480a':
        "RIB leggero da 4.8 m in vetroresina con larghezza 2.00 m, 5 camere d'aria, peso netto 183 kg e carico max di 680 kg. Progettato per trasporto costiero, pesca offshore e operazioni subacquee con motore max da 60 HP.",
      'rib-480b':
        "RIB in vetroresina con console centrale da 4.8 m, larghezza 2.00 m, 5 camere d'aria, peso netto 260 kg e carico max di 680 kg. Dotato di pompa di sentina, serbatoio carburante incorporato da 60 L e arco targa con luci di navigazione.",
      'rib-480c':
        "RIB in vetroresina da 4.8 m completamente allestito, con larghezza 2.00 m, 5 camere d'aria, peso netto 280 kg e carico max di 680 kg. Console centrale con parabrezza integrato e pannello interruttori a 4 punti, sedute in cabina poppiera e potenza 60 HP.",
      'rib-480d':
        "RIB premium da 4.8 m in vetroresina con larghezza 2.00 m, 5 camere d'aria, peso netto 280 kg e carico max di 680 kg. Console centrale, serbatoio incorporato da 60 L, arco targa, scaletta posteriore in acciaio inox e cuscino prendisole per uso familiare e charter.",
      'rib-480w':
        "RIB in vetroresina a baglio largo da 4.8 m con larghezza 2.35 m, 5 camere d'aria, peso netto 280 kg e carico max di 680 kg. Console centrale con sedile laterale, serbatoio da 60 L e arco targa offrono stabilità e spazio sul ponte eccezionali per charter e immersioni.",
      'rib-500':
        "RIB offshore da 5.0 m in vetroresina con larghezza 2.10 m, tubi da 52 cm, 5 camere d'aria, peso netto 314 kg e carico max di 686 kg. Console centrale, serbatoio da 60 L e arco targa per supporto a spedizioni, pesca offshore e trasporto commerciale.",
      'rib-520a':
        'RIB leggero a ponte aperto da 5.2 m (RIB520A) — scafo di 200 kg, capacità 8 persone, 85 HP max. Ideale per costruzioni personalizzate, pesca offshore e supporto subacqueo.',
      'rib-520b':
        'RIB a baglio largo con console centrale da 5.2 m (RIB520B) — larghezza 2.28 m, scafo di 400 kg, serbatoio da 80 L, capacità 8 persone. Costruito per pattugliamento costiero, pesca offshore e charter passeggeri.',
      'rib-520c':
        'RIB leisure a baglio largo da 5.2 m (RIB520C) — larghezza 2.28 m, scafo di 360 kg, console centrale, cuscino prendisole, arco targa con luci. Ideale per sport acquatici, crociere in famiglia e charter.',
      'rib-520e':
        'RIB heavy-duty da 5.2 m (RIB520E) — scafo di 450 kg, 115 HP max, serbatoio da 80 L con indicatore, roll bar in acciaio inox, console centrale. Costruito per pesca offshore professionale e supporto a spedizioni.',
      'rib-520w':
        'RIB più largo da 5.2 m (RIB520W) — larghezza 2.35 m, scafo di 230 kg, layout aperto, capacità 8 persone, 85 HP max. Stabilità eccezionale per operazioni subacquee, pesca assistita e trasporto passeggeri.',
      'rib-550a':
        'RIB leggero da 5.5 m (RIB550A) — scafo di 240 kg, larghezza 2.30 m, serbatoio da 60 L, capacità 7 persone, 90 HP max. Progettato su misura per pattugliamento costiero, trasporto e pesca professionale.',
      'rib-550b':
        'RIB con console centrale da 5.5 m completamente attrezzato (RIB550B) — scafo di 450 kg, larghezza 2.30 m, serbatoio da 100 L, roll bar, prendisole. Costruito per spedizioni offshore prolungate e trasporto heavy-duty.',
      'rib-580a':
        "RIB offshore con console centrale da 5.8 m (RIB580A) — scafo di 450 kg, larghezza 2.38 m, serbatoio da 90 L, arco targa, capacità 8 persone, 115 HP max. Costruito per trasporto da spedizione e pesca d'altura.",
      'rib-580b':
        'RIB per mari agitati da 5.8 m (RIB580B) — scafo di 450 kg, tubi extra-large da 58 cm, larghezza 2.38 m, serbatoio da 90 L, capacità 8 persone, 115 HP max. Galleggiabilità e stabilità eccezionali per condizioni offshore impegnative.',
      'rib-600':
        "RIB avanzato da 6.0 m (RIB600) — scafo di 500 kg, larghezza 2.50 m, 6 camere d'aria, serbatoio da 120 L, roll bar, capacità 8 persone, 115 HP max. Il ponte di collegamento tra i RIB offshore di classe intermedia e grande.",
      'rib-680a':
        "RIB grande da 6.6 m (RIB680A) — scafo di 500 kg, larghezza 2.52 m, 7 camere d'aria, serbatoio da 150 L, vasca per il pescato, capacità 10 persone, 200 HP max. Costruito per la pesca dei grossi pesci, charter commerciale e supporto subacqueo.",
      'rib-680b':
        "RIB passeggeri full-size da 6.8 m (RIB680B) — scafo di 500 kg, larghezza 2.52 m, 7 camere d'aria, serbatoio da 100 L, ski bar, capacità 10 persone, 200 HP max. Progettato per trasporto commerciale passeggeri, supporto subacqueo e rimorchio da spedizione.",
      'rib-700': 'Gommone a scafo rigido ad alte prestazioni da 710 cm (RIB700) per trasporto e pesca.',
      'rib-760': 'Gommone a scafo rigido ad alte prestazioni da 760 cm (RIB760) per trasporto e pesca.',
      'sib-aluminum-floor':
        'Gommone sportivo versatile con pavimento rigido in alluminio per prestazioni e durata eccellenti.',
      'sib-dropstitch-floor':
        'Gommone sportivo leggero con pavimento drop-stitch ad alta pressione per rigidità e portabilità superiori.',
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
      'tactical-raft':
        'Zattera gonfiabile secondo specifiche militari progettata per operazioni tattiche, ricerca e soccorso e usi da spedizione estrema.',
      'whitewater-raft':
        'Zattera whitewater heavy-duty con pavimento autosvuotante, costruzione rinforzata e caratteristiche di schieramento rapido per la discesa fluviale professionale.',
      'zb-mt350':
        'AQMT-11\'6" — RIB in vetroresina da 11.5 ft per pattugliamento costiero, trasporto commerciale e supporto a spedizioni.',

      ap330: 'Tender RIB consolle di lusso entry-level della serie Apex Performance.',
      ap360: 'Tender RIB con console centrale di lusso di piccole e medie dimensioni con capacità di 40 HP.',
      ap390: 'Console di lusso di medie dimensioni RIB che entra nella classe 50 HP.',
      ap420: 'La perfetta prima barca da giorno per famiglie con capacità di 70 HP e serbatoio del carburante 55L.',
      ap460: 'Modello crossover di punta nella classe dei 4 metri con layout ergonomico e bow locker.',
      ap520: '5 metri classe lusso RIB con scafo deep V offshore 24° e serbatoio carburante 105L.',
      ap560: 'Principale sport a lungo raggio RIB con 115 HP, carburante 105L e capacità di 12 persone.',
      ap660: 'CE Category B lusso offshore RIB con 26° deep V e 200 HP.',
      ap700: '7 metri di lusso offshore RIB con 250 HP e carburante 280L.',
      ap760: 'Ammiraglia offshore di lusso da 7,6 m RIB con 300 HP e carburante 280L.',
      ap800: 'Ammiraglia da crociera offshore con 350 HP, supporto doppio motore, serbatoio carburante 300L.',
      ap900: "L'ammiraglia definitiva da 9,12 m RIB con 600 motori gemelli HP e carburante 380L.",
      df420: 'Commerciale/per impieghi gravosi entry-level RIB per operazioni di pattugliamento e servizi pubblici.',
      df460: 'Utilità di classe 4 metri RIB che bilancia manovrabilità con capacità di carico utile.',
      df500:
        'Utilità commerciale principale RIB con scafo offshore deep V di 24° e serbatoio del carburante integrato 90L.',
      df540: 'Cavallo da lavoro offshore di medie dimensioni per operazioni di pattugliamento, SAR e commerciali.',
      'df540-coaster': 'Pattuglia Coaster Edition RIB con piattaforma di lavoro modulare dedicata.',
      df600: "Pattugliatore d'altura da 6 metri RIB con certificazione CE Category B e carburante 140L.",
      df700: 'Cavallo da lavoro commerciale SAR da 7 metri con serbatoio del carburante 285L ultra-grande.',
      df760: 'Offshore SAR e intercettore pesante con tubi extra large da 60 cm e 300 HP.',
      df860: 'Interceptor di punta da 8,6 m con 500 motori gemelli HP.',
      ex7: 'Imbarcazione crossover da 7 metri con scafo in vetroresina e tubi sottili rialzati.',
      ex9: 'Ammiraglia crossover premium da 9 metri con cabina, bagno, barra bagnata e carburante 450L.',
      sw240: 'Tender in alluminio ultraleggero da 2,4 m a soli 33 kg: trasportabile da una persona.',
      sw260: 'Tender di dimensioni dorate a 35 kg: il perfetto equilibrio tra capacità e portabilità.',
      sw290: 'Tender di medie dimensioni con 15° potenziato deadrise per prestazioni migliori.',
      sw310: 'Tender ampliato con tubolari da 44 cm e capacità di 5 persone.',
      sw340: 'Ammiraglia Swiftlitee con una capacità di 6 persone a soli 53 kg.',
      vr260: 'Il più compatto Versa con comfort a doppio ponte e tubi ad alta galleggiabilità da 44 cm.',
      vr290: 'Tender di lusso Sweet Spot con doppio ponte e tubolari da 44 cm.',
      vr310: 'Milestone Versa con doppio ponte compatibile con console e capacità di 5 persone.',
      vr340: 'Tender primario con ottima capacità spaziale e ponte compatibile con console.',
      vr360: 'Tender di lusso ad alte prestazioni che entra nella classe 30 HP.',
      vr380: 'Tender di lusso di dimensioni medio-grandi con tre opzioni di console per yacht e catamarani.',
      vr400:
        'Ammiraglia crossover con scafo da 20° deep V e 50 HP per capacità di console cruiser di medie dimensioni.',
      vr420: 'Console da crociera di lusso di dimensioni medio-grandi con carico utile di 60 HP e 800 kg.',
      vr460: 'La più grande ammiraglia Versa con 70 HP, carico utile 920 kg e scafo rinforzato 4mm.',
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
      'airdeck-360': 'AirDeck 360',
      'heavy-duty-raft-commercial': 'Komerční vor pro těžké nasazení',
      'high-speed-catamaran': 'Závodní katamarán vysoké rychlosti (AQHB)',
      'inflatable-catamaran-kayak': 'Nafukovací kajak katamarán',
      kaboat: 'KaBoat kajak katamarán (řada ZB)',
      'kayak-full-dropstitch': 'Výkonnostní kajak s plnou drop-stitch konstrukcí',
      'kayak-hybrid': 'Hybridní drop-stitch kajak',
      'life-vest-classic': 'Záchranná vesta Classic',
      'life-vest-pro': 'Záchranná vesta Pro',
      'oars-pump-set': 'Sada vesel a pumpy',
      'premium-dropstitch-seat': 'Premium sedačka z drop-stitch materiálu',
      'rib-250': 'RIB250',
      'rib-270': 'RIB270',
      'rib-300': 'RIB300',
      'rib-330': 'RIB 330',
      'rib-330a': 'RIB330A',
      'rib-330b': 'RIB330B',
      'rib-330c': 'RIB330C',
      'rib-360a': 'RIB360A — Univerzální 3,6m rodinný a rybářský RIB',
      'rib-360b': 'RIB360B — Premium 3,6m touringový RIB s kabinou a konzolou',
      'rib-390a': 'RIB390A — Sportovní 3,9m RIB s nadrozměrnými 47cm trubkami',
      'rib-390al': 'RIB390AL — Bezpečnostní RIB se 4 komorami, konzolou a prémiovými volbami',
      'rib-390b': 'RIB390B — Robustní 3,9m RIB s 40l nádrží a plnými kabinami',
      'rib-390bl': 'RIB390BL — Vlajková loď 3,9m RIB s obloukem, sluneční palubou a 4 komorami',
      'rib-430a': 'RIB430A — Lehký 4,3m RIB s otevřenou palubou pro pobřežní dopravu a rybolov',
      'rib-430b': 'RIB430B — 4,3m RIB s centrální konzolou, 4 vzduchovými komorami a čerpadlem dna',
      'rib-430c': 'RIB430C — Expediční 4,3m RIB s obloukem, čelním sklem a 50l nádrží',
      'rib-450-patrol': 'RIB 450 Patrol',
      'rib-480a': 'RIB480A — Lehký 4,8m RIB s otevřenou palubou, 5 vzduchovými komorami a 60 HP',
      'rib-480b': 'RIB480B — 4,8m RIB s centrální konzolou, 60l nádrží a targa obloukem',
      'rib-480c': 'RIB480C — 4,8m RIB s konzolou s čelním sklem, 4násobným rozvaděčem a zadními kabinami',
      'rib-480d': 'RIB480D — Premium 4,8m RIB se sluneční palubou, žebříkem a 60l nádrží',
      'rib-480w': 'RIB480W — 4,8m RIB s velkou šířkou 2,35 m a centrální konzolou',
      'rib-500': 'RIB500 — 5,0m offshore RIB s šířkou 2,10 m, 52cm trubkami a 60 HP',
      'rib-520a': 'RIB520A — Lehký 5,2m RIB s otevřenou palubou pro individuální přestavby',
      'rib-520b': 'RIB520B — Široký 5,2m RIB s centrální konzolou pro hlídkování a charter',
      'rib-520c': 'RIB520C — Široký 5,2m rekreační RIB s centrální konzolou a sluneční palubou',
      'rib-520e': 'RIB520E — Robustní 5,2m RIB s 115 HP a nerezovým obloukem',
      'rib-520w': 'RIB520W — Nejširší 5,2m RIB s šířkou 2,35 m pro maximální stabilitu',
      'rib-550a': 'RIB550A — Lehký 5,5m hlídkový a rybářský RIB s 90 HP',
      'rib-550b': 'RIB550B — Plně vybavený 5,5m RIB s centrální konzolou a 100l nádrží',
      'rib-580a': 'RIB580A — Offshore 5,8m RIB s centrální konzolou, 115 HP a 90l nádrží',
      'rib-580b': 'RIB580B — 5,8m RIB pro těžké moře s nadrozměrnými 58cm trubkami',
      'rib-600': 'RIB600 — Pokročilý 6,0m RIB s šířkou 2,50 m a 6 vzduchovými komorami',
      'rib-680a': 'RIB680A — Velký 6,6m RIB s 200 HP, 7 komorami a živou nádrží',
      'rib-680b': 'RIB680B — Plnohodnotný 6,8m osobní RIB s 200 HP a lyžařským obloukem',
      'rib-700': 'RIB700',
      'rib-760': 'RIB760',
      'sib-aluminum-floor': 'Sportovní nafukovací člun (hliníková podlaha)',
      'sib-dropstitch-floor': 'Sportovní nafukovací člun (drop-stitch podlaha)',
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
      'tactical-raft': 'Taktický expediční vor',
      'whitewater-raft': 'Vor na divokou vodu nové generace (AQDRB)',
      'zb-mt350': 'AQMT-11\'6"',

      ap330: 'Apex Performance 330 (AP330)',
      ap360: 'Apex Performance 360 (AP360)',
      ap390: 'Apex Performance 390 (AP390)',
      ap420: 'Apex Performance 420 (AP420)',
      ap460: 'Apex Performance 460 (AP460)',
      ap520: 'Apex Performance 520 (AP520)',
      ap560: 'Apex Performance 560 (AP560)',
      ap660: 'Apex Performance 660 (AP660)',
      ap700: 'Apex Performance 700 (AP700)',
      ap760: 'Apex Performance 760 (AP760)',
      ap800: 'Apex Performance 800 (AP800)',
      ap900: 'Apex Performance 900 (AP900)',
      df420: 'Defender 420 (DF420)',
      df460: 'Defender 460 (DF460)',
      df500: 'Defender 500 (DF500)',
      df540: 'Defender 540 (DF540)',
      'df540-coaster': 'Defender 540 Coaster (DF540 Coaster)',
      df600: 'Defender 600 (DF600)',
      df700: 'Defender 700 (DF700)',
      df760: 'Defender 760 (DF760)',
      df860: 'Defender 860 (DF860)',
      ex7: 'Explorer 7 (EX7)',
      ex9: 'Explorer 9 (EX9)',
      sw240: 'Swiftlitee 240 (SW240)',
      sw260: 'Swiftlitee 260 (SW260)',
      sw290: 'Swiftlitee 290 (SW290)',
      sw310: 'Swiftlitee 310 (SW310)',
      sw340: 'Swiftlitee 340 (SW340)',
      vr260: 'Versa 260 (VR260)',
      vr290: 'Versa 290 (VR290)',
      vr310: 'Versa 310 (VR310)',
      vr340: 'Versa 340 (VR340)',
      vr360: 'Versa 360 (VR360)',
      vr380: 'Versa 380 (VR380)',
      vr400: 'Versa 400 (VR400)',
      vr420: 'Versa 420 (VR420)',
      vr460: 'Versa 460 (VR460)',
    },
    summaries: {
      'airdeck-360':
        'Prostorný 3,6m nafukovací člun se zpevněnou air-deck podlahou — ideální pro rodinné výlety a rybolov.',
      'heavy-duty-raft-commercial':
        'Komerční nafukovací vor pro náročný každodenní provoz v turistice, se zpevněnými podlahami a průmyslovou tkaninou.',
      'high-speed-catamaran':
        'Nafukovací katamarán vysoké rychlosti s dvojitým trupem pro výjimečnou stabilitu, rychlost a manévrovatelnost.',
      'inflatable-catamaran-kayak':
        'Základní nafukovací kajak katamarán s výjimečnou stabilitou pro začátečníky, rybolov a rekreační pádlování.',
      kaboat:
        'Hybridní kajak katamarán, který lze přeměnit ze stabilní dvoutrupové rybářské platformy na aerodynamický jednotrupový touringový kajak.',
      'kayak-full-dropstitch':
        'Výkonný nafukovací kajak s trupem z plného drop-stitch materiálu pro tuhost srovnatelnou s pevným trupem a přesný směr jízdy.',
      'kayak-hybrid':
        'Univerzální nafukovací kajak s částečnou drop-stitch podlahou pro vyvážený poměr tuhosti, přenosnosti a ceny.',
      'life-vest-classic': 'CE certifikovaná univerzální plovací vesta pro rekreační vodní sporty.',
      'life-vest-pro': 'Automaticky nafukovací záchranná vesta podle SOLAS pro offshore a záchranné operace.',
      'oars-pump-set':
        'Pár 1,6m hliníkových vesel a výkonná 5l nožní pumpa. Kompatibilní se všemi nafukovacími čluny řady.',
      'premium-dropstitch-seat':
        'Nafukovací high-pressure drop-stitch sedačka pro nadstandardní pohodlí a oporu při dlouhých dnech na vodě.',
      'rib-250':
        'Kompaktní 2,5m RIB — lehký hliníkový trup, ideální jako palubní člun k jachtě, rybářský člun nebo jezer loď pro až 3 osoby.',
      'rib-270':
        'Střední 2,7m RIB s šířkou 162 cm a 10 HP — stabilní, přenosný a ideální pro rybolov na jezerech, použití jako palubní člun a pobřežní plavbu.',
      'rib-300':
        'Univerzální 3,0m RIB s 20 HP, trupem s hlubokým V a místy pro 4 osoby — oblíbená rodinná loď pro jezerní plavbu a pobřežní dobrodružství.',
      'rib-330':
        'Nejprodávanější 3,3m RIB s hliníkovým trupem — palubní člun zdvihatelný davitem a rodinná denní loď pro až 5 osob.',
      'rib-330a':
        'Lehký 3,3m RIB s laminátovým trupem, hmotností 80 kg a 20 HP — hbitý, cenově dostupný a snadno přepravitelný na přívěsu.',
      'rib-330b':
        '3,3m RIB zaměřený na pohodlí s polštářem přední kabiny, odkládací plochou pro kotvu a 20 HP — rafinovaná denní loď pro 4 osoby.',
      'rib-330c':
        'Premium 3,3m RIB s přední a zadní kabinou, centrální konzolou a 20 HP — nejlépe vybavená varianta 3,3m.',
      'rib-360a':
        'Lehký 3,6m RIB s laminátovým trupem, šířkou 1,80 m, vlastní hmotností 120 kg a nosností 650 kg. Ideální pro pobřežní rybolov, rodinné výlety a přístavní přepravu s motory do 25 HP.',
      'rib-360b':
        'Bohatě vybavený 3,6m RIB s laminátovým trupem, šířkou 1,80 m, vlastní hmotností 100 kg a nosností 650 kg. Vybaven přední a zadní kabinou, centrální konzolou a čerpadlem dna pro pobřežní plavbu a rodinné cruising.',
      'rib-390a':
        'Lehký 3,9m RIB s laminátovým trupem, šířkou 1,85 m, vlastní hmotností 100 kg a 47cm trubkami. Určen pro motory 30 HP s nosností 650 kg pro 5 osob. Ideální pro sport, rybolov a pobřežní plavbu.',
      'rib-390al':
        'Premium 3,9m RIB s laminátovým trupem, 4 nezávislými vzduchovými komorami, šířkou 1,85 m, hmotností 120 kg a nosností 650 kg. Včetně centrální konzoly, sedačky s úložným prostorem a luxusních podlahových variant. Určen pro motory 30 HP.',
      'rib-390b':
        'Robustní 3,9m RIB s laminátovým trupem, šířkou 1,85 m, hmotností 130 kg a 47cm hypalonovými trubkami. S přední a zadní kabinou, centrální konzolou, čerpadlem dna a vestavěnou 40l palivovou nádrží. Určen pro motory 30 HP s nosností 650 kg.',
      'rib-390bl':
        'Plně vybavený 3,9m RIB s laminátovým trupem, 4 vzduchovými komorami, šířkou 1,78 m, hmotností 110 kg a nosností 650 kg. Centrální konzola s řízením, oblouk s osvětlením, 25l nádrž, sluneční paluba a C-schůdky. Určen pro motory 30 HP.',
      'rib-430a':
        'Lehký 4,3m laminátový RIB s šířkou 2,00 m, 3 vzduchovými komorami, hmotností 170 kg a maximálním zatížením 640 kg. Navržen pro pobřežní zásobování, rekreační rybolov a lehké komerční použití.',
      'rib-430b':
        '4,3m laminátový RIB s centrální konzolou, šířkou 2,00 m, 4 vzduchovými komorami, hmotností 200 kg a max. zatížením 640 kg. Vybaven čerpadlem dna, zadním světlem a lyžařskými madly pro hlídkování, rybolov a vodní sporty.',
      'rib-430c':
        'Plně vybavený 4,3m laminátový RIB s šířkou 1,96 m, 48cm trubkami, 4 vzduchovými komorami, hmotností 200 kg a max. zatížením 640 kg. Centrální konzola s čelním sklem, oblouk s osvětlením a vestavěná 50l palivová nádrž.',
      'rib-450-patrol': '4,5m hlídkový RIB s hliníkovým trupem. Robustní konstrukce vhodná pro komerční provozovatele.',
      'rib-480a':
        'Lehký 4,8m laminátový RIB s šířkou 2,00 m, 5 vzduchovými komorami, hmotností 183 kg a max. zatížením 680 kg. Určen pro pobřežní dopravu, offshore rybolov a potápěčské operace s max. výkonem 60 HP.',
      'rib-480b':
        '4,8m laminátový RIB s centrální konzolou, šířkou 2,00 m, 5 vzduchovými komorami, hmotností 260 kg a max. zatížením 680 kg. Vybaven čerpadlem dna, vestavěnou 60l nádrží a targa obloukem s navigačními světly.',
      'rib-480c':
        'Plně vybavený 4,8m laminátový RIB s šířkou 2,00 m, 5 vzduchovými komorami, hmotností 280 kg a max. zatížením 680 kg. Konzola s integrovaným čelním sklem a 4násobným rozvaděčem, sedadla zadní kabiny a 60 HP.',
      'rib-480d':
        'Premium 4,8m laminátový RIB s šířkou 2,00 m, 5 vzduchovými komorami, hmotností 280 kg a max. zatížením 680 kg. Centrální konzola, vestavěná 60l nádrž, targa oblouk, zadní nerezový žebřík a sluneční polštáře pro rodinné a charterové použití.',
      'rib-480w':
        'Široký 4,8m laminátový RIB s šířkou 2,35 m, 5 vzduchovými komorami, hmotností 280 kg a max. zatížením 680 kg. Centrální konzola s bočním sedadlem, 60l nádrž a targa oblouk zajišťují výjimečnou stabilitu a palubní plochu pro charter a potápění.',
      'rib-500':
        '5,0m offshore laminátový RIB s šířkou 2,10 m, 52cm trubkami, 5 vzduchovými komorami, hmotností 314 kg a max. zatížením 686 kg. Centrální konzola, 60l nádrž a targa oblouk pro expediční podporu, offshore rybolov a komerční dopravu.',
      'rib-520a':
        'Lehký 5,2m RIB s otevřenou palubou (RIB520A) — trup 200 kg, kapacita 8 osob, max. 85 HP. Ideální pro individuální přestavby, offshore rybolov a potápěčskou podporu.',
      'rib-520b':
        'Široký 5,2m RIB s centrální konzolou (RIB520B) — šířka 2,28 m, trup 400 kg, 80l nádrž, kapacita 8 osob. Stavěn pro pobřežní hlídkování, offshore rybolov a osobní charter.',
      'rib-520c':
        'Široký 5,2m rekreační RIB (RIB520C) — šířka 2,28 m, trup 360 kg, centrální konzola, sluneční polštáře, targa oblouk s osvětlením. Ideální pro vodní sporty, rodinné cruising a charter.',
      'rib-520e':
        'Robustní 5,2m RIB (RIB520E) — trup 450 kg, max. 115 HP, 80l nádrž s indikátorem, nerezový oblouk, centrální konzola. Stavěn pro náročný offshore rybolov a expediční podporu.',
      'rib-520w':
        'Nejširší 5,2m RIB (RIB520W) — šířka 2,35 m, trup 230 kg, otevřené uspořádání, kapacita 8 osob, max. 85 HP. Výjimečná stabilita pro potápěčské operace, vedený rybolov a osobní dopravu.',
      'rib-550a':
        'Lehký 5,5m RIB (RIB550A) — trup 240 kg, šířka 2,30 m, 60l nádrž, kapacita 7 osob, max. 90 HP. Navržen speciálně pro pobřežní hlídkování, dopravu a náročný rybolov.',
      'rib-550b':
        'Plně vybavený 5,5m RIB s centrální konzolou (RIB550B) — trup 450 kg, šířka 2,30 m, 100l nádrž, oblouk, sluneční paluba. Stavěn pro rozsáhlé offshore expedice a dopravu těžkých nákladů.',
      'rib-580a':
        'Offshore 5,8m RIB s centrální konzolou (RIB580A) — trup 450 kg, šířka 2,38 m, 90l nádrž, targa oblouk, kapacita 8 osob, max. 115 HP. Stavěn pro expediční dopravu a rybolov na hlubokém moři.',
      'rib-580b':
        '5,8m RIB pro těžké moře (RIB580B) — trup 450 kg, nadrozměrné 58cm trubky, šířka 2,38 m, 90l nádrž, kapacita 8 osob, max. 115 HP. Výjimečný vztlak a stabilita pro náročné offshore podmínky.',
      'rib-600':
        'Pokročilý 6,0m RIB (RIB600) — trup 500 kg, šířka 2,50 m, 6 vzduchových komor, 120l nádrž, oblouk, kapacita 8 osob, max. 115 HP. Most mezi středními a velkými offshore RIB.',
      'rib-680a':
        'Velký 6,6m RIB (RIB680A) — trup 500 kg, šířka 2,52 m, 7 vzduchových komor, 150l nádrž, živá nádrž, kapacita 10 osob, max. 200 HP. Stavěn pro big-game rybolov, komerční charter a potápěčskou podporu.',
      'rib-680b':
        'Plnohodnotný 6,8m osobní RIB (RIB680B) — trup 500 kg, šířka 2,52 m, 7 vzduchových komor, 100l nádrž, lyžařský oblouk, kapacita 10 osob, max. 200 HP. Navržen pro komerční osobní dopravu, potápěčskou podporu a vlečení expedic.',
      'rib-700': 'Výkonný RIB s pevným trupem (RIB700) o délce 710 cm pro dopravu a rybolov.',
      'rib-760': 'Výkonný RIB s pevným trupem (RIB760) o délce 760 cm pro dopravu a rybolov.',
      'sib-aluminum-floor':
        'Univerzální sportovní nafukovací člun s pevnou hliníkovou podlahou pro vynikající výkon a životnost.',
      'sib-dropstitch-floor':
        'Lehký sportovní nafukovací člun s high-pressure drop-stitch podlahou pro vynikající tuhost a přenosnost.',
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
      'tactical-raft':
        'Nafukovací vor vojenské specifikace navržený pro taktické operace, pátrání a záchranu a extrémní expedice.',
      'whitewater-raft':
        'Robustní vor na divokou vodu se samočisticím dnem, zpevněnou konstrukcí a funkcemi rychlé přípravy pro profesionální splouvání řek.',
      'zb-mt350': 'AQMT-11\'6" — 11,5ft laminátový RIB pro pobřežní hlídkování, komerční dopravu a expediční podporu.',

      ap330: 'Vstupní luxusní konzole RIB v nabídce řady Apex Performance.',
      ap360: 'Malá až středně velká luxusní středová konzola RIB tendr s kapacitou 40 HP.',
      ap390: 'Luxusní konzole střední velikosti RIB vstupuje do třídy 50 HP.',
      ap420: 'Perfektní první rodinný denní člun s kapacitou 70 HP a palivovou nádrží __ PH1__.',
      ap460: 'Vlajkový model crossoveru ve 4metrové třídě s ergonomickým uspořádáním a bow locker.',
      ap520: '5metrová luxusní třída RIB s 24° trupem deep V a palivovou nádrží 105L.',
      ap560: 'Jádrové dálkové sporty RIB se 115 HP, 105L palivem a kapacitou 12 osob.',
      ap660: 'CE Category B offshore Luxury RIB s 26° deep V a 200 HP.',
      ap700: '7metrový luxusní offshore RIB s 250 HP a 280L palivem.',
      ap760: 'Luxusní 7,6m offshore vlajková loď RIB s 300 HP a 280L palivem.',
      ap800: 'Vlajková loď na moři s 350 HP, podporou dvou motorů, 300L palivovou nádrží.',
      ap900: 'Dokonalá 9,12m vlajková loď RIB s 600 HP dvojitými motory a 380L palivem.',
      df420: 'Entry-level commercial/heavy-duty RIB pro hlídkové a obslužné operace.',
      df460: '4metrová třída utility RIB vyvažovací manévrovatelnost s kapacitou užitečného zatížení.',
      df500: 'Jádro komerční užitkové RIB s 24° trupem deep V a 90L integrovanou palivovou nádrží.',
      df540: 'Středně velký pobřežní pracovní kůň pro hlídkování, SAR a komerční provoz.',
      'df540-coaster': 'Hlídka Coaster Edition RIB s vyhrazeným modulárním pracovním balíčkem.',
      df600: '6metrová pobřežní hlídka RIB s certifikací __PH2 __ Category B a palivem 140L.',
      df700: '7metrový komerční SAR pracovní kůň s mimořádně velkou 285L palivovou nádrží.',
      df760: 'Offshore SAR a těžký stíhač s 60cm extra velkými trubkami a 300 HP.',
      df860: '8,6m vlajkový stíhač s dvojitými motory 500 HP.',
      ex7: '7m crossover loď se sklolaminátovým trupem a vyvýšenými tenkými trubkami.',
      ex9: '9m prémiová crossoverová vlajková loď s kabinou, hlavou, wetbarem a palivem 450L.',
      sw240: 'Ultralehká hliníková slitina 2,4 m za pouhých 33 kg — přenosná jednou osobou.',
      sw260: 'Zlatá nabídka na 35 kg — dokonalá rovnováha mezi kapacitou a přenositelností.',
      sw290: 'Středně velké výběrové řízení s vylepšeným 15° deadrise pro lepší výkon.',
      sw310: 'Rozšířená nabídka se 44cm trubkami a kapacitou pro 5 osob.',
      sw340: 'Vlajková loď Swiftlitee s kapacitou 6 osob za pouhých 53 kg.',
      vr260: 'Nejkompaktnější Versa s dvoupodlažním komfortem a 44cm vysoce vztlakovými trubkami.',
      vr290: 'Sladká luxusní nabídka s dvoupodlažními a 44cm trubkami.',
      vr310: 'Milestone Versa s dvojitým podlažím kompatibilním s konzolí a kapacitou pro 5 osob.',
      vr340: 'Primární nabídka s vynikající prostorovou kapacitou a konzolou kompatibilní palubou.',
      vr360: 'Vysoce výkonný luxusní tendr vstupující do třídy 30 HP.',
      vr380: 'Středně velký až velký luxusní tendr se třemi konzolovými možnostmi pro jachty a katamarány.',
      vr400: 'Vlajková loď crossoveru s trupem 20° deep V a trupem 50 HP pro středně velké konzolové křižníky.',
      vr420: 'Střední až velký luxusní konzolový křižník s 60 HP a 800 kg užitečným zatížením.',
      vr460: 'Největší vlajková loď Versa se 70 HP, užitečné zatížení 920 kg a vyztužený trup 4mm.',
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
      'airdeck-360': 'AirDeck 360',
      'heavy-duty-raft-commercial': 'Kommersiell flotte för tungt bruk',
      'high-speed-catamaran': 'Höghastighets tävlingskatamaran (AQHB)',
      'inflatable-catamaran-kayak': 'Uppblåsbar kajak-katamaran',
      kaboat: 'KaBoat kajak-katamaran (ZB-serien)',
      'kayak-full-dropstitch': 'Högpresterande kajak med full drop-stitch',
      'kayak-hybrid': 'Hybridkajak med drop-stitch',
      'life-vest-classic': 'Flytväst Classic',
      'life-vest-pro': 'Flytväst Pro',
      'oars-pump-set': 'År- och pumppaket',
      'premium-dropstitch-seat': 'Premiumsäte i drop-stitch',
      'rib-250': 'RIB250',
      'rib-270': 'RIB270',
      'rib-300': 'RIB300',
      'rib-330': 'RIB 330',
      'rib-330a': 'RIB330A',
      'rib-330b': 'RIB330B',
      'rib-330c': 'RIB330C',
      'rib-360a': 'RIB360A — Mångsidig 3,6m RIB för familj och fiske',
      'rib-360b': 'RIB360B — Premium 3,6m tur-RIB med kabin och konsol',
      'rib-390a': 'RIB390A — Sportig 3,9m RIB med överdimensionerade 47cm tuber',
      'rib-390al': 'RIB390AL — Säkerhets-RIB med 4 kammare, konsol och premiumalternativ',
      'rib-390b': 'RIB390B — Robust 3,9m RIB med 40L bränsletank och fullständiga kabiner',
      'rib-390bl': 'RIB390BL — Flaggskepps-RIB på 3,9m med rollbar, soldäck och 4 kammare',
      'rib-430a': 'RIB430A — Lätt 4,3m RIB med öppet däck för kusttender och fiske',
      'rib-430b': 'RIB430B — 4,3m RIB med mittkonsol, 4 luftkammare och länspump',
      'rib-430c': 'RIB430C — Expeditions-RIB på 4,3m med rollbar, vindruta och 50L bränsletank',
      'rib-450-patrol': 'RIB 450 Patrol',
      'rib-480a': 'RIB480A — Lätt 4,8m RIB med öppet däck, 5 luftkammare och 60 HP',
      'rib-480b': 'RIB480B — 4,8m RIB med mittkonsol, 60L bränsletank och targa-båge',
      'rib-480c': 'RIB480C — 4,8m RIB med vindrutkonsol, 4-polets manöverpanel och akterkabiner',
      'rib-480d': 'RIB480D — Premium 4,8m RIB med soldäck, badstege och 60L bränsletank',
      'rib-480w': 'RIB480W — 4,8m RIB med stor bredd på 2,35 m och mittkonsol',
      'rib-500': 'RIB500 — 5,0m offshore-RIB med 2,10 m bredd, 52cm tuber och 60 HP',
      'rib-520a': 'RIB520A — Lätt 5,2m RIB med öppet däck för skräddarsydda byggen',
      'rib-520b': 'RIB520B — Bred 5,2m RIB med mittkonsol för patrull och charter',
      'rib-520c': 'RIB520C — Bred 5,2m fritids-RIB med mittkonsol och soldäck',
      'rib-520e': 'RIB520E — Robust 5,2m RIB med 115 HP och rostfri rollbar',
      'rib-520w': 'RIB520W — Bredesta 5,2m RIB med 2,35 m bredd för maximal stabilitet',
      'rib-550a': 'RIB550A — Lätt 5,5m patrull- och fiske-RIB med 90 HP',
      'rib-550b': 'RIB550B — Fullt utrustad 5,5m RIB med mittkonsol och 100L bränsletank',
      'rib-580a': 'RIB580A — Offshore-RIB på 5,8m med mittkonsol, 115 HP och 90L bränsletank',
      'rib-580b': 'RIB580B — 5,8m RIB för hårt hav med överdimensionerade 58cm tuber',
      'rib-600': 'RIB600 — Avancerad 6,0m RIB med 2,50 m bredd och 6 luftkammare',
      'rib-680a': 'RIB680A — Stor 6,6m RIB med 200 HP, 7 kammare och levande brunn',
      'rib-680b': 'RIB680B — Fullstor 6,8m passagerar-RIB med 200 HP och skibåge',
      'rib-700': 'RIB700',
      'rib-760': 'RIB760',
      'sib-aluminum-floor': 'Uppblåsbar sportbåt (aluminiumgolv)',
      'sib-dropstitch-floor': 'Uppblåsbar sportbåt (drop-stitch-golv)',
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
      'tactical-raft': 'Taktisk expeditionsflotte',
      'whitewater-raft': 'Forsflotte av nästa generation (AQDRB)',
      'zb-mt350': 'AQMT-11\'6"',

      ap330: 'Apex Performance 330 (AP330)',
      ap360: 'Apex Performance 360 (AP360)',
      ap390: 'Apex Performance 390 (AP390)',
      ap420: 'Apex Performance 420 (AP420)',
      ap460: 'Apex Performance 460 (AP460)',
      ap520: 'Apex Performance 520 (AP520)',
      ap560: 'Apex Performance 560 (AP560)',
      ap660: 'Apex Performance 660 (AP660)',
      ap700: 'Apex Performance 700 (AP700)',
      ap760: 'Apex Performance 760 (AP760)',
      ap800: 'Apex Performance 800 (AP800)',
      ap900: 'Apex Performance 900 (AP900)',
      df420: 'Defender 420 (DF420)',
      df460: 'Defender 460 (DF460)',
      df500: 'Defender 500 (DF500)',
      df540: 'Defender 540 (DF540)',
      'df540-coaster': 'Defender 540 Coaster (DF540 Coaster)',
      df600: 'Defender 600 (DF600)',
      df700: 'Defender 700 (DF700)',
      df760: 'Defender 760 (DF760)',
      df860: 'Defender 860 (DF860)',
      ex7: 'Explorer 7 (EX7)',
      ex9: 'Explorer 9 (EX9)',
      sw240: 'Swiftlitee 240 (SW240)',
      sw260: 'Swiftlitee 260 (SW260)',
      sw290: 'Swiftlitee 290 (SW290)',
      sw310: 'Swiftlitee 310 (SW310)',
      sw340: 'Swiftlitee 340 (SW340)',
      vr260: 'Versa 260 (VR260)',
      vr290: 'Versa 290 (VR290)',
      vr310: 'Versa 310 (VR310)',
      vr340: 'Versa 340 (VR340)',
      vr360: 'Versa 360 (VR360)',
      vr380: 'Versa 380 (VR380)',
      vr400: 'Versa 400 (VR400)',
      vr420: 'Versa 420 (VR420)',
      vr460: 'Versa 460 (VR460)',
    },
    summaries: {
      'airdeck-360':
        'Rymlig 3,6m uppblåsbar båt med förstärkt air-deck-golv — idealisk för familjeutflykter och fiske.',
      'heavy-duty-raft-commercial':
        'Kommersiell uppblåsbar flotte byggd för tung daglig användning i turistverksamhet, med förstärkta golv och industritextil.',
      'high-speed-catamaran':
        'Uppblåsbar höghastighetskatamaran med dubbla skrov för exceptionell stabilitet, fart och manövrerbarhet.',
      'inflatable-catamaran-kayak':
        'Uppblåsbar kajak-katamaran på instegsnivå med exceptionell stabilitet för nybörjare, fiske och fritidspaddling.',
      kaboat:
        'Hybridkajak-katamaran som förvandlas från en stabil dubbelskrovs fiskeplattform till en strömlinjeformad enskrovs turkajak.',
      'kayak-full-dropstitch':
        'Högpresterande uppblåsbar kajak med skrov i full drop-stitch för hårdskrovsliknande styvhet och spårbunden gång.',
      'kayak-hybrid':
        'Mångsidig uppblåsbar kajak med delvis drop-stitch-golv för en balans mellan styvhet, portabilitet och pris.',
      'life-vest-classic': 'CE-certifierad universell flytväst för fritidsvattensport.',
      'life-vest-pro': 'Automatiskt uppblåsbar flytväst enligt SOLAS för offshore- och räddningsinsatser.',
      'oars-pump-set':
        'Ett par 1,6m aluminiumåror och en kraftfull 5L fotpump. Passar alla uppblåsbara båtar i serien.',
      'premium-dropstitch-seat':
        'Uppblåsbart högtryckssäte i drop-stitch för överlägsen komfort och stöd under långa dagar på vattnet.',
      'rib-250':
        'Kompakt 2,5m RIB — lätt aluminiumskrov, idealisk som yacht tender, fiskebåt eller sjöbåt för upp till 3 personer.',
      'rib-270':
        'Medelstor 2,7m RIB med 162 cm bredd och 10 HP — stabil, portabel och perfekt för sjöfiske, yacht tender och kustfart.',
      'rib-300':
        'Mångsidig 3,0m RIB med 20 HP, djupt V-skrov och platser för 4 — en familjefavorit för sjöfärder och kustäventyr.',
      'rib-330':
        'Bästsäljande 3,3m RIB med aluminiumskrov — davyt-barterbar yacht tender och familjedagsbåt för upp till 5 personer.',
      'rib-330a': 'Lätt 3,3m RIB med glasfiberskrov, 80 kg vikt och 20 HP — kvick, prisvärd och lätt att släpa.',
      'rib-330b':
        'Komfortorienterad 3,3m RIB med kabindyn i fören, ankarfack och 20 HP — en förfinad dagsbåt för 4 personer.',
      'rib-330c':
        'Premium 3,3m RIB med förliggande och akterliggande kabiner, mittkonsol och 20 HP — den mest fullständigt utrustade 3,3m-varianten.',
      'rib-360a':
        'Lätt 3,6m RIB med glasfiberskrov, 1,80 m bredd, 120 kg tjänstevikt och 650 kg lastförmåga. Idealisk för kustfiske, familjeutflykter och hamntransporter med motorer upp till 25 HP.',
      'rib-360b':
        'Välutrustad 3,6m RIB med glasfiberskrov, 1,80 m bredd, 100 kg tjänstevikt och 650 kg lastförmåga. Utrustad med för- och akterkabiner, mittkonsol och länspump för kustfärder och familjekryssningar.',
      'rib-390a':
        'Lätt 3,9m RIB med glasfiberskrov, 1,85 m bredd, 100 kg tjänstevikt och 47cm tuber. Godkänd för 30 HP utombordsmotorer med 650 kg lastförmåga för 5 personer. Idealisk för sport, fiske och kustfart.',
      'rib-390al':
        'Premium 3,9m RIB med glasfiberskrov, 4 oberoende luftkammare, 1,85 m bredd, 120 kg tjänstevikt och 650 kg lastförmåga. Inkluderar mittkonsol, sitslåda och lyxiga golvalternativ. Godkänd för 30 HP utombordsmotorer.',
      'rib-390b':
        'Robust 3,9m RIB med glasfiberskrov, 1,85 m bredd, 130 kg tjänstevikt och 47cm Hypalon-tuber. Med för- och akterkabiner, mittkonsol, länspump och inbyggd 40L bränsletank. Godkänd för 30 HP utombordsmotorer med 650 kg lastförmåga.',
      'rib-390bl':
        'Fullt utrustad 3,9m RIB med glasfiberskrov, 4 luftkammare, 1,78 m bredd, 110 kg tjänstevikt och 650 kg lastförmåga. Mittkonsol med styrning, rollbar med belysning, 25L bränsletank, soldäck och C-formad tubstege. Godkänd för 30 HP utombordsmotorer.',
      'rib-430a':
        'Lätt 4,3m glasfiber-RIB med 2,00 m bredd, 3 luftkammare, 170 kg tjänstevikt och 640 kg maximal last. Utvecklad för kustförsörjning, fritidsfiske och lätt kommersiell användning.',
      'rib-430b':
        '4,3m glasfiber-RIB med mittkonsol, 2,00 m bredd, 4 luftkammare, 200 kg tjänstevikt och 640 kg maximal last. Utrustad med länspump, akterljus och skidhandtag för patrull, fiske och vattensport.',
      'rib-430c':
        'Fullt utrustad 4,3m glasfiber-RIB med 1,96 m bredd, 48cm tuber, 4 luftkammare, 200 kg tjänstevikt och 640 kg maximal last. Mittkonsol med vindruta, rollbar med belysning och inbyggd 50L bränsletank.',
      'rib-450-patrol':
        '4,5m patrull-RIB med aluminiumskrov. Tungt byggd konstruktion, lämplig för kommersiella operatörer.',
      'rib-480a':
        'Lätt 4,8m glasfiber-RIB med 2,00 m bredd, 5 luftkammare, 183 kg tjänstevikt och 680 kg maximal last. Utvecklad för kusttransport, offshore-fiske och dykverksamhet med max motorstyrka 60 HP.',
      'rib-480b':
        '4,8m glasfiber-RIB med mittkonsol, 2,00 m bredd, 5 luftkammare, 260 kg tjänstevikt och 680 kg maximal last. Utrustad med länspump, inbyggd 60L bränsletank och targa-båge med navigeringsljus.',
      'rib-480c':
        'Fullt utrustad 4,8m glasfiber-RIB med 2,00 m bredd, 5 luftkammare, 280 kg tjänstevikt och 680 kg maximal last. Mittkonsol med integrerad vindruta och 4-polets manöverpanel, akterkabinsittplatser och 60 HP.',
      'rib-480d':
        'Premium 4,8m glasfiber-RIB med 2,00 m bredd, 5 luftkammare, 280 kg tjänstevikt och 680 kg maximal last. Mittkonsol, inbyggd 60L bränsletank, targa-båge, akterliggande rostfri stege och soldynor för familje- och charterbruk.',
      'rib-480w':
        'Bred 4,8m glasfiber-RIB med 2,35 m bredd, 5 luftkammare, 280 kg tjänstevikt och 680 kg maximal last. Mittkonsol med sidsäte, 60L bränsletank och targa-båge ger exceptionell stabilitet och däcksyta för charter och dykning.',
      'rib-500':
        '5,0m offshore glasfiber-RIB med 2,10 m bredd, 52cm tuber, 5 luftkammare, 314 kg tjänstevikt och 686 kg maximal last. Mittkonsol, 60L bränsletank och targa-båge för expeditionssupport, offshore-fiske och kommersiell transport.',
      'rib-520a':
        'Lätt 5,2m RIB med öppet däck (RIB520A) — 200 kg skrov, kapacitet för 8 personer, max 85 HP. Idealisk för skräddarsydda ombyggnader, offshore-fiske och dyksupport.',
      'rib-520b':
        'Bred 5,2m RIB med mittkonsol (RIB520B) — 2,28 m bredd, 400 kg skrov, 80L bränsletank, kapacitet för 8 personer. Byggd för kustpatrull, offshore-fiske och passagerarcharter.',
      'rib-520c':
        'Bred 5,2m fritids-RIB (RIB520C) — 2,28 m bredd, 360 kg skrov, mittkonsol, soldynor, targa-båge med belysning. Idealisk för vattensport, familjekryssningar och charter.',
      'rib-520e':
        'Robust 5,2m RIB (RIB520E) — 450 kg skrov, max 115 HP, 80L bränsletank med visare, rostfri rollbar, mittkonsol. Byggd för seriöst offshore-fiske och expeditionssupport.',
      'rib-520w':
        'Bredesta 5,2m RIB (RIB520W) — 2,35 m bredd, 230 kg skrov, öppen layout, kapacitet för 8 personer, max 85 HP. Exceptionell stabilitet för dykverksamhet, guidad fiske och passagerartransport.',
      'rib-550a':
        'Lätt 5,5m RIB (RIB550A) — 240 kg skrov, 2,30 m bredd, 60L bränsletank, kapacitet för 7 personer, max 90 HP. Speciellt byggd för kustpatrull, transport och seriöst fiske.',
      'rib-550b':
        'Fullt utrustad 5,5m RIB med mittkonsol (RIB550B) — 450 kg skrov, 2,30 m bredd, 100L bränsletank, rollbar, soldäck. Byggd för långa offshore-expeditioner och tung transport.',
      'rib-580a':
        'Offshore-RIB på 5,8m med mittkonsol (RIB580A) — 450 kg skrov, 2,38 m bredd, 90L bränsletank, targa-båge, kapacitet för 8 personer, max 115 HP. Byggd för expeditionstransport och djuphavsfiske.',
      'rib-580b':
        '5,8m RIB för hårt hav (RIB580B) — 450 kg skrov, överdimensionerade 58cm tuber, 2,38 m bredd, 90L bränsletank, kapacitet för 8 personer, max 115 HP. Exceptionell flytförmåga och stabilitet för krävande offshore-förhållanden.',
      'rib-600':
        'Avancerad 6,0m RIB (RIB600) — 500 kg skrov, 2,50 m bredd, 6 luftkammare, 120L bränsletank, rollbar, kapacitet för 8 personer, max 115 HP. Bryggan mellan mellanstora och stora offshore-RIB.',
      'rib-680a':
        'Stor 6,6m RIB (RIB680A) — 500 kg skrov, 2,52 m bredd, 7 luftkammare, 150L bränsletank, levande brunn, kapacitet för 10 personer, max 200 HP. Byggd för big game-havsfiske, kommersiell charter och dyksupport.',
      'rib-680b':
        'Fullstor 6,8m passagerar-RIB (RIB680B) — 500 kg skrov, 2,52 m bredd, 7 luftkammare, 100L bränsletank, skibåge, kapacitet för 10 personer, max 200 HP. Utvecklad för kommersiell passagerartransport, dyksupport och expeditionssläpning.',
      'rib-700': 'Högpresterande RIB med fast skrov (RIB700) med 710 cm längd för transport och fiske.',
      'rib-760': 'Högpresterande RIB med fast skrov (RIB760) med 760 cm längd för transport och fiske.',
      'sib-aluminum-floor':
        'Mångsidig uppblåsbar sportbåt med styvt aluminiumgolv för utmärkt prestanda och livslängd.',
      'sib-dropstitch-floor':
        'Lätt uppblåsbar sportbåt med högtrycksgolv i drop-stitch för överlägsen styvhet och portabilitet.',
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
      'tactical-raft':
        'Uppblåsbar flotte i militärspecifikation, byggd för taktiska insatser, sökning och räddning samt extrem expeditionsanvändning.',
      'whitewater-raft':
        'Robust forsflotte med själv tömmande botten, förstärkt konstruktion och snabba uppbyggnadsfunktioner för professionell flodpaddling.',
      'zb-mt350': 'AQMT-11\'6" — 11,5ft glasfiber-RIB för kustpatrull, kommersiell transport och expeditionssupport.',

      ap330: 'Instegslyxkonsol RIB tender i serien Apex Performance.',
      ap360: 'Liten till medelstor, lyxig mittkonsol RIB tender med 40 HP kapacitet.',
      ap390: 'Mellanstor lyxkonsol RIB kliver in i klassen 50 HP.',
      ap420: 'Den perfekta första familjedagbåten med kapacitet på 70 HP och 55L bränsletank.',
      ap460: 'Flaggskeppscrossovermodell i 4-metersklassen med ergonomisk layout och bow locker.',
      ap520: '5-meters klass lyx RIB med 24° offshore deep V skrov och 105L bränsletank.',
      ap560: 'Kärnsport för långdistanssport RIB med 115 HP, 105L bränsle och kapacitet för 12 personer.',
      ap660: 'CE Category B offshorelyx RIB med 26° deep V och 200 HP.',
      ap700: '7-meters lyx offshore RIB med 250 HP och 280L bränsle.',
      ap760: 'Lyxigt 7,6 m offshore flaggskepp RIB med 300 HP och 280L bränsle.',
      ap800: 'Offshore-kryssningsflaggskepp med 350 HP, dubbelmotorstöd, 300L bränsletank.',
      ap900: 'Det ultimata flaggskeppet RIB på 9,12 m med 600 HP dubbelmotorer och 380L bränsle.',
      df420: 'Kommersiell/heavy-duty RIB på nybörjarnivå för patrull- och allmännyttiga operationer.',
      df460: '4-metersklassverktyg RIB balanserande manövrerbarhet med nyttolastkapacitet.',
      df500: 'Kommersiellt kärnverktyg RIB med 24° offshore deep V skrov och 90L integrerad bränsletank.',
      df540: 'Mellanstor offshore-arbetshäst för patrullering, SAR och kommersiell verksamhet.',
      'df540-coaster': 'Coaster Edition patrull RIB med dedikerat modulärt arbetsdäck.',
      df600: '6-meters offshorepatrull RIB med CE Category B certifiering och 140L bränsle.',
      df700: '7-meters kommersiell SAR arbetshäst med ultrastor 285L bränsletank.',
      df760: 'Offshore SAR och tung interceptor med 60 cm extra stora rör och 300 HP.',
      df860: '8,6 m ultimat flaggskeppsinterceptor med 500 HP tvillingmotorer.',
      ex7: '7m crossover-båt med glasfiberskrov och upphöjda smala rör.',
      ex9: '9 m premium crossover flaggskepp med hytt, huvud, våtstång och 450L bränsle.',
      sw240: 'Ultralätt 2,4 m aluminiumtender för bara 33 kg — bärbar av en person.',
      sw260: 'Tender i guldstorlek på 35 kg — den perfekta balansen mellan kapacitet och bärbarhet.',
      sw290: 'Mellanstor tender med uppgraderad 15° deadrise för bättre prestanda.',
      sw310: 'Utökad tender med 44 cm tuber och kapacitet för 5 personer.',
      sw340: 'Flaggskepp Swiftlitee med kapacitet för 6 personer på bara 53 kg.',
      vr260: 'Mest kompakta Versa med dubbeldäckskomfort och 44 cm högflyttningsrör.',
      vr290: 'Sweet-spot lyxtender med dubbeldäck och 44 cm rör.',
      vr310: 'Milestone Versa med konsolkompatibel dubbeldäck och kapacitet för 5 personer.',
      vr340: 'Primärt anbud med utmärkt rumskapacitet och konsolkompatibelt däck.',
      vr360: 'Högpresterande lyxtender som kliver in i klassen 30 HP.',
      vr380: 'Mellanstort lyxigt anbud med tre konsolalternativ för yachter och katamaraner.',
      vr400: 'Crossover flaggskepp med 20° deep V skrov och 50 HP för medelstora konsolkryssare.',
      vr420: 'Mellanstor till stor lyxkonsolkryssare med 60 HP och 800 kg nyttolast.',
      vr460: 'Största flaggskeppet Versa med 70 HP, 920 kg nyttolast och 4mm förstärkt skrov.',
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
      'airdeck-360': 'AirDeck 360',
      'heavy-duty-raft-commercial': 'Kommerciel flåde til hårdt brug',
      'high-speed-catamaran': 'Højhastigheds racerkatamaran (AQHB)',
      'inflatable-catamaran-kayak': 'Oppustelig kajak-katamaran',
      kaboat: 'KaBoat kajak-katamaran (ZB-serien)',
      'kayak-full-dropstitch': 'Højtydende kajak med fuld drop-stitch',
      'kayak-hybrid': 'Hybridkajak med drop-stitch',
      'life-vest-classic': 'Redningsvest Classic',
      'life-vest-pro': 'Redningsvest Pro',
      'oars-pump-set': 'Åre- og pumpesæt',
      'premium-dropstitch-seat': 'Premiumsæde i drop-stitch',
      'rib-250': 'RIB250',
      'rib-270': 'RIB270',
      'rib-300': 'RIB300',
      'rib-330': 'RIB 330',
      'rib-330a': 'RIB330A',
      'rib-330b': 'RIB330B',
      'rib-330c': 'RIB330C',
      'rib-360a': 'RIB360A — Alsidig 3,6m RIB til familie og lystfiskeri',
      'rib-360b': 'RIB360B — Premium 3,6m touring-RIB med kahyt og konsol',
      'rib-390a': 'RIB390A — Sportslig 3,9m RIB med overdimensionerede 47cm tuber',
      'rib-390al': 'RIB390AL — Sikkerheds-RIB med 4 kamre, konsol og premiummuligheder',
      'rib-390b': 'RIB390B — Robust 3,9m RIB med 40L brændstoftank og komplette kahytter',
      'rib-390bl': 'RIB390BL — Flagskibs-RIB på 3,9m med rollbar, soldæk og 4 kamre',
      'rib-430a': 'RIB430A — Let 4,3m RIB med åbent dæk til kysttender og fiskeri',
      'rib-430b': 'RIB430B — 4,3m RIB med midterkonsol, 4 luftkamre og lenspumpe',
      'rib-430c': 'RIB430C — Ekspeditions-RIB på 4,3m med rollbar, vindrude og 50L brændstoftank',
      'rib-450-patrol': 'RIB 450 Patrol',
      'rib-480a': 'RIB480A — Let 4,8m RIB med åbent dæk, 5 luftkamre og 60 HP',
      'rib-480b': 'RIB480B — 4,8m RIB med midterkonsol, 60L brændstoftank og targa-bue',
      'rib-480c': 'RIB480C — 4,8m RIB med vindrudekonsol, 4-polet kontaktpanel og agterkahytter',
      'rib-480d': 'RIB480D — Premium 4,8m RIB med soldæk, badestige og 60L brændstoftank',
      'rib-480w': 'RIB480W — 4,8m RIB med stor bredde på 2,35 m og midterkonsol',
      'rib-500': 'RIB500 — 5,0m offshore-RIB med 2,10 m bredde, 52cm tuber og 60 HP',
      'rib-520a': 'RIB520A — Let 5,2m RIB med åbent dæk til skræddersyede ombygninger',
      'rib-520b': 'RIB520B — Bred 5,2m RIB med midterkonsol til patrulje og charter',
      'rib-520c': 'RIB520C — Bred 5,2m fritids-RIB med midterkonsol og soldæk',
      'rib-520e': 'RIB520E — Robust 5,2m RIB med 115 HP og rustfri rollbar',
      'rib-520w': 'RIB520W — Bredeste 5,2m RIB med 2,35 m bredde for maksimal stabilitet',
      'rib-550a': 'RIB550A — Let 5,5m patrulje- og fiske-RIB med 90 HP',
      'rib-550b': 'RIB550B — Fuld udstyret 5,5m RIB med midterkonsol og 100L brændstoftank',
      'rib-580a': 'RIB580A — Offshore-RIB på 5,8m med midterkonsol, 115 HP og 90L brændstoftank',
      'rib-580b': 'RIB580B — 5,8m RIB til hård sø med overdimensionerede 58cm tuber',
      'rib-600': 'RIB600 — Avanceret 6,0m RIB med 2,50 m bredde og 6 luftkamre',
      'rib-680a': 'RIB680A — Stor 6,6m RIB med 200 HP, 7 kamre og levende brønd',
      'rib-680b': 'RIB680B — Fuldstor 6,8m passager-RIB med 200 HP og skibue',
      'rib-700': 'RIB700',
      'rib-760': 'RIB760',
      'sib-aluminum-floor': 'Oppustelig sportbåd (aluminiumsgulv)',
      'sib-dropstitch-floor': 'Oppustelig sportbåd (drop-stitch-gulv)',
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
      'tactical-raft': 'Taktisk ekspeditionsflåde',
      'whitewater-raft': 'Wildvandsraft af næste generation (AQDRB)',
      'zb-mt350': 'AQMT-11\'6"',

      ap330: 'Apex Performance 330 (AP330)',
      ap360: 'Apex Performance 360 (AP360)',
      ap390: 'Apex Performance 390 (AP390)',
      ap420: 'Apex Performance 420 (AP420)',
      ap460: 'Apex Performance 460 (AP460)',
      ap520: 'Apex Performance 520 (AP520)',
      ap560: 'Apex Performance 560 (AP560)',
      ap660: 'Apex Performance 660 (AP660)',
      ap700: 'Apex Performance 700 (AP700)',
      ap760: 'Apex Performance 760 (AP760)',
      ap800: 'Apex Performance 800 (AP800)',
      ap900: 'Apex Performance 900 (AP900)',
      df420: 'Defender 420 (DF420)',
      df460: 'Defender 460 (DF460)',
      df500: 'Defender 500 (DF500)',
      df540: 'Defender 540 (DF540)',
      'df540-coaster': 'Defender 540 Coaster (DF540 Coaster)',
      df600: 'Defender 600 (DF600)',
      df700: 'Defender 700 (DF700)',
      df760: 'Defender 760 (DF760)',
      df860: 'Defender 860 (DF860)',
      ex7: 'Explorer 7 (EX7)',
      ex9: 'Explorer 9 (EX9)',
      sw240: 'Swiftlitee 240 (SW240)',
      sw260: 'Swiftlitee 260 (SW260)',
      sw290: 'Swiftlitee 290 (SW290)',
      sw310: 'Swiftlitee 310 (SW310)',
      sw340: 'Swiftlitee 340 (SW340)',
      vr260: 'Versa 260 (VR260)',
      vr290: 'Versa 290 (VR290)',
      vr310: 'Versa 310 (VR310)',
      vr340: 'Versa 340 (VR340)',
      vr360: 'Versa 360 (VR360)',
      vr380: 'Versa 380 (VR380)',
      vr400: 'Versa 400 (VR400)',
      vr420: 'Versa 420 (VR420)',
      vr460: 'Versa 460 (VR460)',
    },
    summaries: {
      'airdeck-360':
        'Rummelig 3,6m oppustelig båd med forstærket air-deck-gulv — ideel til familieudflugter og lystfiskeri.',
      'heavy-duty-raft-commercial':
        'Kommersielle oppustelige flåder bygget til hårdt dagligt brug i turistdrift, med forstærkede gulve og industritekstil.',
      'high-speed-catamaran':
        'Oppustelig højhastighedskatamaran med dobbeltskrog til exceptionel stabilitet, fart og manøvredygtighed.',
      'inflatable-catamaran-kayak':
        'Oppustelig kajak-katamaran på begynderniveau med exceptionel stabilitet til nybegyndere, fiskeri og fritidspadling.',
      kaboat:
        'Hybrid kajak-katamaran, der forvandles fra en stabil to-skrovs fiskeplatform til en strømlinet ét-skrovs touring-kajak.',
      'kayak-full-dropstitch':
        'Højtydende oppustelig kajak med skrog i fuld drop-stitch for hårdskrogs-lignende stivhed og præcis kursstabilitet.',
      'kayak-hybrid':
        'Alsidig oppustelig kajak med delvist drop-stitch-gulv for en balance mellem stivhed, portabilitet og pris.',
      'life-vest-classic': 'CE-certificeret universel flydevest til fritidsvandsport.',
      'life-vest-pro': 'Automatisk oppustelig redningsvest i henhold til SOLAS til offshore- og redningsoperationer.',
      'oars-pump-set':
        'Et par 1,6m aluminiumsårer og en kraftig 5L fodpumpe. Passer til alle oppustelige både i serien.',
      'premium-dropstitch-seat':
        'Oppusteligt højt tryk drop-stitch-sæde til overlegen komfort og støtte på lange dage på vandet.',
      'rib-250':
        'Kompakt 2,5m RIB — let aluminumsskrog, ideel som yacht tender, fiskebåd eller søbåd til op til 3 personer.',
      'rib-270':
        'Mellemstor 2,7m RIB med 162 cm bredde og 10 HP — stabil, portabel og perfekt til søfiskeri, yacht tender og kystsejlads.',
      'rib-300':
        'Alsidig 3,0m RIB med 20 HP, dybt V-skrog og siddepladser til 4 — en familiefavorit til søture og kysteventyr.',
      'rib-330':
        'Mest solgte 3,3m RIB med aluminumsskrog — davyt-løftbar yacht tender og familiedagsbåd til op til 5 personer.',
      'rib-330a': 'Let 3,3m RIB med glasfiberskrog, 80 kg vægt og 20 HP — kvik, overkommelig og nem at trailer.',
      'rib-330b':
        'Komfortorienteret 3,3m RIB med kahytpude i stævnen, ankerbrønd og 20 HP — en forfinet dagsbåd til 4 personer.',
      'rib-330c':
        'Premium 3,3m RIB med for- og agterkahytter, midterkonsol og 20 HP — den mest komplet udstyrede 3,3m-variant.',
      'rib-360a':
        'Let 3,6m RIB med glasfiberskrog, 1,80 m bredde, 120 kg egenvægt og 650 kg lasteevne. Ideel til kystfiskeri, familieudflugter og havnetransporter med motorer på op til 25 HP.',
      'rib-360b':
        'Veludstyret 3,6m RIB med glasfiberskrog, 1,80 m bredde, 100 kg egenvægt og 650 kg lasteevne. Udstyret med for- og agterkahytter, midterkonsol og lenspumpe til kystture og familie-krydstogter.',
      'rib-390a':
        'Let 3,9m RIB med glasfiberskrog, 1,85 m bredde, 100 kg egenvægt og 47cm tuber. Godkendt til 30 HP påhængsmotorer med 650 kg lasteevne til 5 personer. Ideel til sport, fiskeri og kystsejlads.',
      'rib-390al':
        'Premium 3,9m RIB med glasfiberskrog, 4 uafhængige luftkamre, 1,85 m bredde, 120 kg egenvægt og 650 kg lasteevne. Inkluderer midterkonsol, sædeboks og luksuriøse gulvvalg. Godkendt til 30 HP påhængsmotorer.',
      'rib-390b':
        'Robust 3,9m RIB med glasfiberskrog, 1,85 m bredde, 130 kg egenvægt og 47cm Hypalon-tuber. Med for- og agterkahytter, midterkonsol, lenspumpe og indbygget 40L brændstoftank. Godkendt til 30 HP påhængsmotorer med 650 kg lasteevne.',
      'rib-390bl':
        'Fuldt udstyret 3,9m RIB med glasfiberskrog, 4 luftkamre, 1,78 m bredde, 110 kg egenvægt og 650 kg lasteevne. Midterkonsol med styring, rollbar med belysning, 25L brændstoftank, soldæk og C-formet tubestige. Godkendt til 30 HP påhængsmotorer.',
      'rib-430a':
        'Let 4,3m glasfiber-RIB med 2,00 m bredde, 3 luftkamre, 170 kg egenvægt og 640 kg maksimal last. Udviklet til kystforsyning, fritidsfiskeri og let kommerciel brug.',
      'rib-430b':
        '4,3m glasfiber-RIB med midterkonsol, 2,00 m bredde, 4 luftkamre, 200 kg egenvægt og 640 kg maksimal last. Udstyret med lenspumpe, agterlys og skihåndtag til patrulje, fiskeri og vandsport.',
      'rib-430c':
        'Fuldt udstyret 4,3m glasfiber-RIB med 1,96 m bredde, 48cm tuber, 4 luftkamre, 200 kg egenvægt og 640 kg maksimal last. Midterkonsol med vindrude, rollbar med belysning og indbygget 50L brændstoftank.',
      'rib-450-patrol':
        '4,5m patrulje-RIB med aluminumsskrog. Kraftig konstruktion, velegnet til kommercielle operatører.',
      'rib-480a':
        'Let 4,8m glasfiber-RIB med 2,00 m bredde, 5 luftkamre, 183 kg egenvægt og 680 kg maksimal last. Udviklet til kysttransport, offshore-fiskeri og dykkeroperationer med maks. motorkraft på 60 HP.',
      'rib-480b':
        '4,8m glasfiber-RIB med midterkonsol, 2,00 m bredde, 5 luftkamre, 260 kg egenvægt og 680 kg maksimal last. Udstyret med lenspumpe, indbygget 60L brændstoftank og targa-bue med navigationslys.',
      'rib-480c':
        'Fuldt udstyret 4,8m glasfiber-RIB med 2,00 m bredde, 5 luftkamre, 280 kg egenvægt og 680 kg maksimal last. Midterkonsol med integreret vindrude og 4-polet kontaktpanel, agterkahytsiddepladser og 60 HP.',
      'rib-480d':
        'Premium 4,8m glasfiber-RIB med 2,00 m bredde, 5 luftkamre, 280 kg egenvægt og 680 kg maksimal last. Midterkonsol, indbygget 60L brændstoftank, targa-bue, agterliggende rustfri stige og solpuder til familie- og charterbrug.',
      'rib-480w':
        'Bred 4,8m glasfiber-RIB med 2,35 m bredde, 5 luftkamre, 280 kg egenvægt og 680 kg maksimal last. Midterkonsol med sidesæde, 60L brændstoftank og targa-bue giver exceptionel stabilitet og dæksareal til charter og dykning.',
      'rib-500':
        '5,0m offshore glasfiber-RIB med 2,10 m bredde, 52cm tuber, 5 luftkamre, 314 kg egenvægt og 686 kg maksimal last. Midterkonsol, 60L brændstoftank og targa-bue til ekspeditionsstøtte, offshore-fiskeri og kommerciel transport.',
      'rib-520a':
        'Let 5,2m RIB med åbent dæk (RIB520A) — 200 kg skrog, kapacitet til 8 personer, maks. 85 HP. Ideel til skræddersyede ombygninger, offshore-fiskeri og dykkerstøtte.',
      'rib-520b':
        'Bred 5,2m RIB med midterkonsol (RIB520B) — 2,28 m bredde, 400 kg skrog, 80L brændstoftank, kapacitet til 8 personer. Bygget til kystpatrulje, offshore-fiskeri og passagercharter.',
      'rib-520c':
        'Bred 5,2m fritids-RIB (RIB520C) — 2,28 m bredde, 360 kg skrog, midterkonsol, solpuder, targa-bue med belysning. Ideel til vandsport, familie-krydstogter og charter.',
      'rib-520e':
        'Robust 5,2m RIB (RIB520E) — 450 kg skrog, maks. 115 HP, 80L brændstoftank med viser, rustfri rollbar, midterkonsol. Bygget til seriøs offshore-fiskeri og ekspeditionsstøtte.',
      'rib-520w':
        'Bredeste 5,2m RIB (RIB520W) — 2,35 m bredde, 230 kg skrog, åben layout, kapacitet til 8 personer, maks. 85 HP. Exceptionel stabilitet til dykkeroperationer, guidet fiskeri og passagertransport.',
      'rib-550a':
        'Let 5,5m RIB (RIB550A) — 240 kg skrog, 2,30 m bredde, 60L brændstoftank, kapacitet til 7 personer, maks. 90 HP. Specifikt bygget til kystpatrulje, transport og seriøst fiskeri.',
      'rib-550b':
        'Fuldt udstyret 5,5m RIB med midterkonsol (RIB550B) — 450 kg skrog, 2,30 m bredde, 100L brændstoftank, rollbar, soldæk. Bygget til lange offshore-ekspeditioner og tung transport.',
      'rib-580a':
        'Offshore-RIB på 5,8m med midterkonsol (RIB580A) — 450 kg skrog, 2,38 m bredde, 90L brændstoftank, targa-bue, kapacitet til 8 personer, maks. 115 HP. Bygget til ekspeditionstransport og dybhavsfiskeri.',
      'rib-580b':
        '5,8m RIB til hård sø (RIB580B) — 450 kg skrog, overdimensionerede 58cm tuber, 2,38 m bredde, 90L brændstoftank, kapacitet til 8 personer, maks. 115 HP. Exceptionel opdrift og stabilitet til krævende offshore-forhold.',
      'rib-600':
        'Avanceret 6,0m RIB (RIB600) — 500 kg skrog, 2,50 m bredde, 6 luftkamre, 120L brændstoftank, rollbar, kapacitet til 8 personer, maks. 115 HP. Broen mellem mellemstore og store offshore-RIB.',
      'rib-680a':
        'Stor 6,6m RIB (RIB680A) — 500 kg skrog, 2,52 m bredde, 7 luftkamre, 150L brændstoftank, levende brønd, kapacitet til 10 personer, maks. 200 HP. Bygget til big game-havsfiskeri, kommerciel charter og dykkerstøtte.',
      'rib-680b':
        'Fuldstor 6,8m passager-RIB (RIB680B) — 500 kg skrog, 2,52 m bredde, 7 luftkamre, 100L brændstoftank, skibue, kapacitet til 10 personer, maks. 200 HP. Udviklet til kommerciel passagertransport, dykkerstøtte og ekspeditionsslæbning.',
      'rib-700': 'Højtydende RIB med fast skrog (RIB700) med 710 cm længde til transport og fiskeri.',
      'rib-760': 'Højtydende RIB med fast skrog (RIB760) med 760 cm længde til transport og fiskeri.',
      'sib-aluminum-floor':
        'Alsidig oppustelig sportbåd med stift aluminiumsgulv for fremragende ydeevne og holdbarhed.',
      'sib-dropstitch-floor':
        'Let oppustelig sportbåd med højt tryk drop-stitch-gulv for overlegen stivhed og portabilitet.',
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
      'tactical-raft':
        'Oppustelig flåde i militærspecifikation, bygget til taktiske operationer, søgning og redning samt ekstrem ekspeditionsbrug.',
      'whitewater-raft':
        'Robust wildvandsraft med selvdrænende bund, forstærket konstruktion og hurtige opbygningsfunktioner til professionel flodpadling.',
      'zb-mt350': 'AQMT-11\'6" — 11,5ft glasfiber-RIB til kystpatrulje, kommerciel transport og ekspeditionsstøtte.',

      ap330: 'Entry-level luksus konsol RIB tender i Apex Performance serien.',
      ap360: 'Lille til mellemstor luksus midterkonsol RIB tender med 40 HP kapacitet.',
      ap390: 'Mellemstørrelse luksuskonsol RIB træder ind i 50 HP-klassen.',
      ap420: 'Den perfekte første familiedagbåd med kapacitet på 70 HP og 55L brændstoftank.',
      ap460: 'Flagskibs crossover-model i 4-meter klassen med ergonomisk layout og bow locker.',
      ap520: '5-meter klasse luksus RIB med 24° offshore deep V skrog og 105L brændstoftank.',
      ap560: 'Kerne langdistancesport RIB med 115 HP, 105L brændstof og kapacitet til 12 personer.',
      ap660: 'CE Category B offshore luksus RIB med 26° deep V og 200 HP.',
      ap700: '7-meter luksus offshore RIB med 250 HP og 280L brændstof.',
      ap760: 'Luksus 7,6 m offshore flagskib RIB med 300 HP og 280L brændstof.',
      ap800: 'Offshore krydstogtsflagskib med 350 HP, dobbeltmotorstøtte, 300L brændstoftank.',
      ap900: 'Det ultimative 9,12 m flagskib RIB med 600 HP dobbeltmotorer og 380L brændstof.',
      df420: 'Entry-level kommerciel/heavy-duty RIB til patrulje- og forsyningsoperationer.',
      df460: '4-meter klasse værktøj RIB balancerende manøvredygtighed med nyttelastkapacitet.',
      df500: 'Kerne kommercielt værktøj RIB med 24° offshore deep V skrog og 90L integreret brændstoftank.',
      df540: 'Mellemstørrelse offshore arbejdshest til patrulje, SAR og kommercielle operationer.',
      'df540-coaster': 'Coaster Edition patrulje RIB med dedikeret modulært arbejdsdæk.',
      df600: '6-meter offshore patrulje RIB med CE Category B certificering og 140L brændstof.',
      df700: '7 meter kommerciel SAR arbejdshest med ultra-stor 285L brændstoftank.',
      df760: 'Offshore SAR og tung interceptor med 60 cm ekstra store rør og 300 HP.',
      df860: '8,6 m ultimativ flagskibsinterceptor med 500 HP tvillingemotorer.',
      ex7: '7m crossover-båd med glasfiberskrog og hævede slanke rør.',
      ex9: '9 m premium crossover flagskib med kabine, hoved, wetbar og 450L brændstof.',
      sw240: 'Ultralet 2,4 m aluminiumsmøbel til kun 33 kg — bærbar af én person.',
      sw260: 'Tender i gylden størrelse hos 35 kg — den perfekte balance mellem kapacitet og bærbarhed.',
      sw290: 'Mellemstørrelse tender med opgraderet 15° deadrise for bedre ydeevne.',
      sw310: 'Udvidet tender med 44 cm rør og kapacitet til 5 personer.',
      sw340: 'Flagskib Swiftlitee med kapacitet til 6 personer på kun 53 kg.',
      vr260: 'Mest kompakte Versa med dobbeltdækskomfort og 44 cm rør med høj opdrift.',
      vr290: 'Sweet-spot luksus tender med dobbeltdæk og 44 cm rør.',
      vr310: 'Milestone Versa med konsolkompatibel dobbeltdæk og kapacitet til 5 personer.',
      vr340: 'Primært bud med fremragende rumkapacitet og konsolkompatibelt dæk.',
      vr360: 'Højtydende luksustender, der træder ind i 30 HP klassen.',
      vr380: 'Mellem til stor luksustender med tre konsolmuligheder til yachter og katamaraner.',
      vr400: 'Crossover-flagskib med 20° deep V skrog og 50 HP for mellemstørrelse konsolcruiser-kapacitet.',
      vr420: 'Mellem til stor luksus konsolcruiser med 60 HP og 800 kg nyttelast.',
      vr460: 'Største Versa flagskib med 70 HP, 920 kg nyttelast og 4mm forstærket skrog.',
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
      'airdeck-360': 'AirDeck 360',
      'heavy-duty-raft-commercial': 'Εμπορικός σχεδιασμός βαρέως τύπου',
      'high-speed-catamaran': 'Καταμαράν αγώνων υψηλής ταχύτητας (AQHB)',
      'inflatable-catamaran-kayak': 'Φουσκωτό καγιάκ-καταμαράν',
      kaboat: 'KaBoat καγιάκ-καταμαράν (σειρά ZB)',
      'kayak-full-dropstitch': 'Καγιάκ υψηλών επιδόσεων με πλήρες drop-stitch',
      'kayak-hybrid': 'Υβριδικό καγιάκ drop-stitch',
      'life-vest-classic': 'Σωσίβιο Classic',
      'life-vest-pro': 'Σωσίβιο Pro',
      'oars-pump-set': 'Σετ κουπιών και αντλίας',
      'premium-dropstitch-seat': 'Premium κάθισμα drop-stitch',
      'rib-250': 'RIB250',
      'rib-270': 'RIB270',
      'rib-300': 'RIB300',
      'rib-330': 'RIB 330',
      'rib-330a': 'RIB330A',
      'rib-330b': 'RIB330B',
      'rib-330c': 'RIB330C',
      'rib-360a': 'RIB360A — Πολυχρηστικό 3,6m RIB για οικογένεια και ψάρεμα',
      'rib-360b': 'RIB360B — Premium 3,6m τουριστικό RIB με καμπίνα και κονσόλα',
      'rib-390a': 'RIB390A — Αθλητικό 3,9m RIB με υπερμεγέθεις σωλήνες 47cm',
      'rib-390al': 'RIB390AL — RIB ασφαλείας με 4 θαλάμους, κονσόλα και premium επιλογές',
      'rib-390b': 'RIB390B — Ανθεκτικό 3,9m RIB με δεξαμενή 40L και πλήρεις καμπίνες',
      'rib-390bl': 'RIB390BL — Ναυαρχίδα 3,9m RIB με roll bar, ηλιακή εξέδρα και 4 θαλάμους',
      'rib-430a': 'RIB430A — Ελαφρύ 4,3m RIB με ανοιχτό κατάστρωμα για παράκτιο tender και ψάρεμα',
      'rib-430b': 'RIB430B — 4,3m RIB με κεντρική κονσόλα, 4 θαλάμους αέρα και αντλία στυππίου',
      'rib-430c': 'RIB430C — Αναβαθμισμένο RIB εξερεύνησης 4,3m με roll bar, παρμπρίζ και δεξαμενή 50L',
      'rib-450-patrol': 'RIB 450 Patrol',
      'rib-480a': 'RIB480A — Ελαφρύ 4,8m RIB με ανοιχτό κατάστρωμα, 5 θαλάμους αέρα και 60 HP',
      'rib-480b': 'RIB480B — 4,8m RIB με κεντρική κονσόλα, δεξαμενή 60L και τόξο targa',
      'rib-480c': 'RIB480C — 4,8m RIB με κονσόλα παρμπρίζ, πίνακα 4 διακοπτών και πρύμνιες καμπίνες',
      'rib-480d': 'RIB480D — Premium 4,8m RIB με ηλιακή εξέδρα, σκάλα μπάνιου και δεξαμενή 60L',
      'rib-480w': 'RIB480W — 4,8m RIB με μεγάλο πλάτος 2,35 m και κεντρική κονσόλα',
      'rib-500': 'RIB500 — 5,0m offshore RIB με πλάτος 2,10 m, σωλήνες 52cm και 60 HP',
      'rib-520a': 'RIB520A — Ελαφρύ 5,2m RIB με ανοιχτό κατάστρωμα για εξατομικευμένες κατασκευές',
      'rib-520b': 'RIB520B — Εύρους πλάτους 5,2m RIB με κεντρική κονσόλα για περιπολία και ναύλωση',
      'rib-520c': 'RIB520C — Εύρους πλάτους 5,2m RIB αναψυχής με κεντρική κονσόλα και ηλιακή εξέδρα',
      'rib-520e': 'RIB520E — Ανθεκτικό 5,2m RIB με 115 HP και ανοξείδωτο roll bar',
      'rib-520w': 'RIB520W — Το πλατύτερο 5,2m RIB με πλάτος 2,35 m για μέγιστη ευστάθεια',
      'rib-550a': 'RIB550A — Ελαφρύ 5,5m RIB περιπολίας και ψαρέματος με 90 HP',
      'rib-550b': 'RIB550B — Πλήρως εξοπλισμένο 5,5m RIB με κεντρική κονσόλα και δεξαμενή 100L',
      'rib-580a': 'RIB580A — Offshore 5,8m RIB με κεντρική κονσόλα, 115 HP και δεξαμενή 90L',
      'rib-580b': 'RIB580B — 5,8m RIB για τραχιά θάλασσα με υπερμεγέθεις σωλήνες 58cm',
      'rib-600': 'RIB600 — Προηγμένο 6,0m RIB με πλάτος 2,50 m και 6 θαλάμους αέρα',
      'rib-680a': 'RIB680A — Μεγάλο 6,6m RIB με 200 HP, 7 θαλάμους και δεξαμενή ζωντανών ψαριών',
      'rib-680b': 'RIB680B — Πλήρους μεγέθους 6,8m επιβατικό RIB με 200 HP και σκάλα σκι',
      'rib-700': 'RIB700',
      'rib-760': 'RIB760',
      'sib-aluminum-floor': 'Αθλητικό φουσκωτό σκάφος (δάπεδο αλουμινίου)',
      'sib-dropstitch-floor': 'Αθλητικό φουσκωτό σκάφος (δάπεδο drop-stitch)',
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
      'tactical-raft': 'Τακτική σχεδία αποστολής',
      'whitewater-raft': 'Σχεδία για άγρια νερά νέας γενιάς (AQDRB)',
      'zb-mt350': 'AQMT-11\'6"',

      ap330: 'Apex Performance 330 (AP330)',
      ap360: 'Apex Performance 360 (AP360)',
      ap390: 'Apex Performance 390 (AP390)',
      ap420: 'Apex Performance 420 (AP420)',
      ap460: 'Apex Performance 460 (AP460)',
      ap520: 'Apex Performance 520 (AP520)',
      ap560: 'Apex Performance 560 (AP560)',
      ap660: 'Apex Performance 660 (AP660)',
      ap700: 'Apex Performance 700 (AP700)',
      ap760: 'Apex Performance 760 (AP760)',
      ap800: 'Apex Performance 800 (AP800)',
      ap900: 'Apex Performance 900 (AP900)',
      df420: 'Defender 420 (DF420)',
      df460: 'Defender 460 (DF460)',
      df500: 'Defender 500 (DF500)',
      df540: 'Defender 540 (DF540)',
      'df540-coaster': 'Defender 540 Coaster (DF540 Coaster)',
      df600: 'Defender 600 (DF600)',
      df700: 'Defender 700 (DF700)',
      df760: 'Defender 760 (DF760)',
      df860: 'Defender 860 (DF860)',
      ex7: 'Explorer 7 (EX7)',
      ex9: 'Explorer 9 (EX9)',
      sw240: 'Swiftlitee 240 (SW240)',
      sw260: 'Swiftlitee 260 (SW260)',
      sw290: 'Swiftlitee 290 (SW290)',
      sw310: 'Swiftlitee 310 (SW310)',
      sw340: 'Swiftlitee 340 (SW340)',
      vr260: 'Versa 260 (VR260)',
      vr290: 'Versa 290 (VR290)',
      vr310: 'Versa 310 (VR310)',
      vr340: 'Versa 340 (VR340)',
      vr360: 'Versa 360 (VR360)',
      vr380: 'Versa 380 (VR380)',
      vr400: 'Versa 400 (VR400)',
      vr420: 'Versa 420 (VR420)',
      vr460: 'Versa 460 (VR460)',
    },
    summaries: {
      'airdeck-360':
        'Εύχωρο 3,6m φουσκωτό σκάφος με ενισχυμένο δάπεδο air-deck — ιδανικό για οικογενειακές εξορμήσεις και ψάρεμα.',
      'heavy-duty-raft-commercial':
        'Εμπορική φουσκωτή σχεδία για απαιτητική καθημερινή χρήση σε τουριστικές επιχειρήσεις, με ενισχυμένα δάπεδα και βιομηχανικό ύφασμα.',
      'high-speed-catamaran':
        'Φουσκωτό καταμαράν υψηλής ταχύτητας με διπλό σκάφος για εξαιρετική ευστάθεια, ταχύτητα και ελιγμούς.',
      'inflatable-catamaran-kayak':
        'Φουσκωτό καγιάκ-καταμαράν εισαγωγικού επιπέδου με εξαιρετική ευστάθεια για αρχάριους, ψάρεμα και ψυχαγωγική κωπηλασία.',
      kaboat:
        'Υβριδικό καγιάκ-καταμαράν που μετατρέπεται από σταθερή διπλού σκάφους πλατφόρμα ψαρέματος σε αεροδυναμικό μονού σκάφους τουριστικό καγιάκ.',
      'kayak-full-dropstitch':
        'Καγιάκ φουσκωτό υψηλών επιδόσεων με σκάφος από πλήρες drop-stitch για ακαμψία αντίστοιχη σκληρού σκάφους και ευθεία πορεία.',
      'kayak-hybrid':
        'Πολυχρηστικό φουσκωτό καγιάκ με μερικό δάπεδο drop-stitch για ισορροπία μεταξύ ακαμψίας, φορητότητας και τιμής.',
      'life-vest-classic': 'Πιστοποιημένο CE παγκόσμιο σωσίβιο επιπλέουσης για ψυχαγωγικά θαλάσσια σπορ.',
      'life-vest-pro': 'Αυτόματο φουσκωτό σωσίβιο κατά SOLAS για offshore επιχειρήσεις και διάσωση.',
      'oars-pump-set':
        'Ζεύγος κουπιών αλουμινίου 1,6m και ισχυρή αντλία ποδιού 5L. Συμβατό με όλα τα φουσκωτά σκάφη της σειράς.',
      'premium-dropstitch-seat':
        'Φουσκωτό κάθισμα υψηλής πίεσης drop-stitch για ανώτερη άνεση και στήριξη σε μεγάλες μέρες στο νερό.',
      'rib-250':
        'Συμπαγές 2,5m RIB — ελαφρύ σκάφος αλουμινίου, ιδανικό ως tender σκάφους, βαρκάδα ψαρέματος ή λίμνης για έως 3 άτομα.',
      'rib-270':
        'Μεσαίου μεγέθους 2,7m RIB με πλάτος 162 cm και 10 HP — σταθερό, φορητό και τέλειο για ψάρεμα σε λίμνη, χρήση ως tender και παράκτιο πλου.',
      'rib-300':
        'Πολυχρηστικό 3,0m RIB με 20 HP, σκάφος βαθύ V και θέσεις για 4 — αγαπημένο των οικογενειών για πλου στη λίμνη και παράκτιες περιπέτειες.',
      'rib-330':
        'Το πιο εμπορικό 3,3m RIB με σκάφος αλουμινίου — tender σκάφους για ανύψωση με davit και οικογενειακή βαρκάδα για έως 5 άτομα.',
      'rib-330a':
        'Ελαφρύ 3,3m RIB με σκάφος fiberglass, βάρος 80 kg και 20 HP — ευκίνητο, προσιτό και εύκολο σε ρυμούλκηση.',
      'rib-330b':
        '3,3m RIB προσανατολισμένο στην άνεση με μαξιλάρι καμπίνας στην πλώρη, θέση άγκυρας και 20 HP — μια εκλεπτυσμένη βαρκάδα ημέρας για 4 άτομα.',
      'rib-330c':
        'Premium 3,3m RIB με μπροστινή και πρύμνια καμπίνα, κεντρική κονσόλα και 20 HP — η πληρέστερα εξοπλισμένη παραλλαγή 3,3m.',
      'rib-360a':
        'Ελαφρύ 3,6m RIB με σκάφος fiberglass, πλάτος 1,80 m, καθαρό βάρος 120 kg και χωρητικότητα φορτίου 650 kg. Ιδανικό για παράκτιο ψάρεμα, οικογενειακές εξορμήσεις και μεταφορές λιμανιού με κινητήρες έως 25 HP.',
      'rib-360b':
        'Πλούσια εξοπλισμένο 3,6m RIB με σκάφος fiberglass, πλάτος 1,80 m, καθαρό βάρος 100 kg και φορτίο 650 kg. Εξοπλισμένο με μπροστινή και πρύμνια καμπίνα, κεντρική κονσόλα και αντλία στυππίου για παράκτιους πλους και οικογενειακά ταξίδια.',
      'rib-390a':
        'Ελαφρύ 3,9m RIB με σκάφος fiberglass, πλάτος 1,85 m, καθαρό βάρος 100 kg και σωλήνες 47cm. Πιστοποιημένο για εξώληρες 30 HP με φορτίο 650 kg για 5 άτομα. Ιδανικό για σπορ, ψάρεμα και παράκτιο πλου.',
      'rib-390al':
        'Premium 3,9m RIB με σκάφος fiberglass, 4 ανεξάρτητους θαλάμους αέρα, πλάτος 1,85 m, βάρος 120 kg και φορτίο 650 kg. Περιλαμβάνει κεντρική κονσόλα, θήκη καθίσματος και πολυτελείς επιλογές δαπέδου. Για εξώληρες 30 HP.',
      'rib-390b':
        'Ανθεκτικό 3,9m RIB με σκάφος fiberglass, πλάτος 1,85 m, βάρος 130 kg και σωλήνες Hypalon 47cm. Με μπροστινή και πρύμνια καμπίνα, κεντρική κονσόλα, αντλία στυππίου και ενσωματωμένη δεξαμενή καυσίμου 40L. Για εξώληρες 30 HP με φορτίο 650 kg.',
      'rib-390bl':
        'Πλήρως εξοπλισμένο 3,9m RIB με σκάφος fiberglass, 4 θαλάμους αέρα, πλάτος 1,78 m, βάρος 110 kg και φορτίο 650 kg. Κεντρική κονσόλα με τιμόνι, roll bar με φώτα, δεξαμενή 25L, ηλιακή εξέδρα και σκάλα σωλήνα σχήματος C. Για εξώληρες 30 HP.',
      'rib-430a':
        'Ελαφρύ 4,3m RIB fiberglass με πλάτος 2,00 m, 3 θαλάμους αέρα, βάρος 170 kg και μέγιστο φορτίο 640 kg. Σχεδιασμένο για παράκτια τροφοδοσία, ψυχαγωγικό ψάρεμα και ελαφρά εμπορική χρήση.',
      'rib-430b':
        '4,3m RIB fiberglass με κεντρική κονσόλα, πλάτος 2,00 m, 4 θαλάμους αέρα, βάρος 200 kg και μέγιστο φορτίο 640 kg. Εξοπλισμένο με αντλία στυππίου, πρύμνιο φωτάκι και χειρολαβές σκι για περιπολία, ψάρεμα και θαλάσσια σπορ.',
      'rib-430c':
        'Πλήρως εξοπλισμένο 4,3m RIB fiberglass με πλάτος 1,96 m, σωλήνες 48cm, 4 θαλάμους αέρα, βάρος 200 kg και μέγιστο φορτίο 640 kg. Κεντρική κονσόλα με παρμπρίζ, roll bar με φώτα και ενσωματωμένη δεξαμενή καυσίμου 50L.',
      'rib-450-patrol':
        '4,5m RIB περιπολίας με σκάφος αλουμινίου. Κατασκευή βαρέως τύπου, κατάλληλη για εμπορικούς χειριστές.',
      'rib-480a':
        'Ελαφρύ 4,8m RIB fiberglass με πλάτος 2,00 m, 5 θαλάμους αέρα, βάρος 183 kg και μέγιστο φορτίο 680 kg. Για παράκτιες μεταφορές, offshore ψάρεμα και καταδύσεις με μέγιστη ισχύ 60 HP.',
      'rib-480b':
        '4,8m RIB fiberglass με κεντρική κονσόλα, πλάτος 2,00 m, 5 θαλάμους αέρα, βάρος 260 kg και μέγιστο φορτίο 680 kg. Εξοπλισμένο με αντλία στυππίου, ενσωματωμένη δεξαμενή 60L και τόξο targa με φώτα ναυσιπλοΐας.',
      'rib-480c':
        'Πλήρως εξοπλισμένο 4,8m RIB fiberglass με πλάτος 2,00 m, 5 θαλάμους αέρα, βάρος 280 kg και μέγιστο φορτίο 680 kg. Κονσόλα με ενσωματωμένο παρμπρίζ και πίνακα 4 διακοπτών, καθίσματα πρύμνιας καμπίνας και 60 HP.',
      'rib-480d':
        'Premium 4,8m RIB fiberglass με πλάτος 2,00 m, 5 θαλάμους αέρα, βάρος 280 kg και μέγιστο φορτίο 680 kg. Κεντρική κονσόλα, ενσωματωμένη δεξαμενή 60L, τόξο targa, πρύμνια ανοξείδωτη σκάλα και μαξιλάρια ηλιακής εξέδρας για οικογενειακή χρήση και ναύλωση.',
      'rib-480w':
        'Εύρους πλάτους 4,8m RIB fiberglass με πλάτος 2,35 m, 5 θαλάμους αέρα, βάρος 280 kg και μέγιστο φορτίο 680 kg. Κεντρική κονσόλα με πλάγιο κάθισμα, δεξαμενή 60L και τόξο targa προσφέρουν εξαιρετική ευστάθεια και χώρο καταστρώματος για ναύλωση και καταδύσεις.',
      'rib-500':
        '5,0m offshore RIB fiberglass με πλάτος 2,10 m, σωλήνες 52cm, 5 θαλάμους αέρα, βάρος 314 kg και μέγιστο φορτίο 686 kg. Κεντρική κονσόλα, δεξαμενή 60L και τόξο targa για υποστήριξη αποστολών, offshore ψάρεμα και εμπορικές μεταφορές.',
      'rib-520a':
        'Ελαφρύ 5,2m RIB με ανοιχτό κατάστρωμα (RIB520A) — σκάφος 200 kg, χωρητικότητα 8 ατόμων, μέγιστα 85 HP. Ιδανικό για εξατομικευμένες μετατροπές, offshore ψάρεμα και υποστήριξη καταδύσεων.',
      'rib-520b':
        'Εύρους πλάτους 5,2m RIB με κεντρική κονσόλα (RIB520B) — πλάτος 2,28 m, σκάφος 400 kg, δεξαμενή 80L, χωρητικότητα 8 ατόμων. Κατασκευασμένο για παράκτια περιπολία, offshore ψάρεμα και ναύλωση επιβατών.',
      'rib-520c':
        'Εύρους πλάτους 5,2m RIB αναψυχής (RIB520C) — πλάτος 2,28 m, σκάφος 360 kg, κεντρική κονσόλα, μαξιλάρια ηλιακής εξέδρας, τόξο targa με φώτα. Ιδανικό για θαλάσσια σπορ, οικογενειακά ταξίδια και ναύλωση.',
      'rib-520e':
        'Ανθεκτικό 5,2m RIB (RIB520E) — σκάφος 450 kg, μέγιστα 115 HP, δεξαμενή 80L με δείκτη, ανοξείδωτο roll bar, κεντρική κονσόλα. Κατασκευασμένο για απαιτητικό offshore ψάρεμα και υποστήριξη αποστολών.',
      'rib-520w':
        'Το πλατύτερο 5,2m RIB (RIB520W) — πλάτος 2,35 m, σκάφος 230 kg, ανοιχτή διάταξη, χωρητικότητα 8 ατόμων, μέγιστα 85 HP. Εξαιρετική ευστάθεια για καταδύσεις, καθοδηγούμενο ψάρεμα και μεταφορά επιβατών.',
      'rib-550a':
        'Ελαφρύ 5,5m RIB (RIB550A) — σκάφος 240 kg, πλάτος 2,30 m, δεξαμενή 60L, χωρητικότητα 7 ατόμων, μέγιστα 90 HP. Σχεδιασμένο ειδικά για παράκτια περιπολία, μεταφορές και σοβαρό ψάρεμα.',
      'rib-550b':
        'Πλήρως εξοπλισμένο 5,5m RIB με κεντρική κονσόλα (RIB550B) — σκάφος 450 kg, πλάτος 2,30 m, δεξαμενή 100L, roll bar, ηλιακή εξέδρα. Κατασκευασμένο για μεγάλες offshore αποστολές και μεταφορά βαρέων φορτίων.',
      'rib-580a':
        'Offshore 5,8m RIB με κεντρική κονσόλα (RIB580A) — σκάφος 450 kg, πλάτος 2,38 m, δεξαμενή 90L, τόξο targa, χωρητικότητα 8 ατόμων, μέγιστα 115 HP. Κατασκευασμένο για μεταφορές αποστολών και ψάρεμα βαθιάς θάλασσας.',
      'rib-580b':
        '5,8m RIB για τραχιά θάλασσα (RIB580B) — σκάφος 450 kg, υπερμεγέθεις σωλήνες 58cm, πλάτος 2,38 m, δεξαμενή 90L, χωρητικότητα 8 ατόμων, μέγιστα 115 HP. Εξαιρετική άνωση και ευστάθεια για απαιτητικές offshore συνθήκες.',
      'rib-600':
        'Προηγμένο 6,0m RIB (RIB600) — σκάφος 500 kg, πλάτος 2,50 m, 6 θαλάμους αέρα, δεξαμενή 120L, roll bar, χωρητικότητα 8 ατόμων, μέγιστα 115 HP. Η γέφυρα μεταξύ μεσαίων και μεγάλων offshore RIB.',
      'rib-680a':
        'Μεγάλο 6,6m RIB (RIB680A) — σκάφος 500 kg, πλάτος 2,52 m, 7 θαλάμους αέρα, δεξαμενή 150L, δεξαμενή ζωντανών ψαριών, χωρητικότητα 10 ατόμων, μέγιστα 200 HP. Κατασκευασμένο για big game ψάρεμα ανοιχτής θάλασσας, εμπορική ναύλωση και υποστήριξη καταδύσεων.',
      'rib-680b':
        'Πλήρους μεγέθους 6,8m επιβατικό RIB (RIB680B) — σκάφος 500 kg, πλάτος 2,52 m, 7 θαλάμους αέρα, δεξαμενή 100L, σκάλα σκι, χωρητικότητα 10 ατόμων, μέγιστα 200 HP. Σχεδιασμένο για εμπορική μεταφορά επιβατών, υποστήριξη καταδύσεων και ρυμούλκηση αποστολών.',
      'rib-700': 'Υψηλών επιδόσεων RIB με σκληρό σκάφος (RIB700) μήκους 710 cm για μεταφορές και ψάρεμα.',
      'rib-760': 'Υψηλών επιδόσεων RIB με σκληρό σκάφος (RIB760) μήκους 760 cm για μεταφορές και ψάρεμα.',
      'sib-aluminum-floor':
        'Πολυχρηστικό αθλητικό φουσκωτό σκάφος με άκαμπτο δάπεδο αλουμινίου για εξαιρετικές επιδόσεις και μακροζωία.',
      'sib-dropstitch-floor':
        'Ελαφρύ αθλητικό φουσκωτό σκάφος με δάπεδο drop-stitch υψηλής πίεσης για ανώτερη ακαμψία και φορητότητα.',
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
      'tactical-raft':
        'Φουσκωτή σχεδία στρατιωτικών προδιαγραφών σχεδιασμένη για τακτικές επιχειρήσεις, αναζήτηση και διάσωση και ακραίες αποστολές.',
      'whitewater-raft':
        'Ανθεκτική σχεδία για άγρια νερά με αυτο-στεγνό δάπεδο, ενισχυμένη κατασκευή και λειτουργίες γρήγορης εγκατάστασης για επαγγελματική κατάβαση ποταμών.',
      'zb-mt350':
        'AQMT-11\'6" — 11,5ft RIB fiberglass για παράκτια περιπολία, εμπορικές μεταφορές και υποστήριξη αποστολών.',

      ap330: 'Πολυτελής κονσόλα αρχικού επιπέδου RIB προσφορά στη σειρά Apex Performance.',
      ap360: 'Μικρή έως μεσαία πολυτελής κεντρική κονσόλα RIB tender με δυνατότητα 40 HP.',
      ap390: 'Πολυτελής κονσόλα μεσαίου μεγέθους RIB που μπαίνει στην κατηγορία 50 HP.',
      ap420: 'Το τέλειο πρώτο οικογενειακό καθημερινό σκάφος με ικανότητα 70 HP και 55L ρεζερβουάρ καυσίμου.',
      ap460: 'Εμβληματικό μοντέλο crossover στην κατηγορία των 4 μέτρων με εργονομική διάταξη και bow locker.',
      ap520: 'Πολυτελής κατηγορίας 5 μέτρων RIB με κύτος deep V υπεράκτιας 24° και δεξαμενή καυσίμου 105L.',
      ap560: 'Βασικά αθλήματα μεγάλης εμβέλειας RIB με 115 HP, 105L καύσιμο και χωρητικότητα 12 ατόμων.',
      ap660: 'CE Category B υπεράκτια πολυτέλεια RIB με 26° deep V και 200 ​​HP.',
      ap700: '7 μέτρα υπεράκτια πολυτελείας RIB με καύσιμα 250 HP και 280L.',
      ap760: 'Πολυτελής ναυαρχίδα υπεράκτιων 7,6 μέτρων RIB με καύσιμα 300 HP και 280L.',
      ap800: 'Ναυαρχίδα κρουαζιέρας ανοικτής θαλάσσης με 350 HP, υποστήριξη διπλού κινητήρα, 300L δεξαμενή καυσίμου.',
      ap900: 'Η απόλυτη ναυαρχίδα 9,12 μέτρων RIB με 600 HP διπλούς κινητήρες και καύσιμο 380L.',
      df420: 'Εμπορική/βαρέως τύπου αρχικού επιπέδου RIB για περιπολίες και επιχειρήσεις κοινής ωφέλειας.',
      df460: 'Ευχρηστία κατηγορίας 4 μέτρων RIB εξισορρόπηση ελιγμών με χωρητικότητα ωφέλιμου φορτίου.',
      df500: 'Βασική εμπορική χρησιμότητα RIB με 24° υπεράκτια deep V κύτος και 90L ενσωματωμένη δεξαμενή καυσίμου.',
      df540: 'Υπεράκτια άλογα εργασίας μεσαίου μεγέθους για περιπολίες, SAR και εμπορικές δραστηριότητες.',
      'df540-coaster': 'Coaster Edition περιπολικό RIB με αποκλειστικό αρθρωτό κατάστρωμα εργασίας.',
      df600: 'Περίπολο ανοικτής θάλασσας 6 μέτρων RIB με πιστοποίηση CE Category B και καύσιμο 140L.',
      df700: 'Εμπορικό άλογο εργασίας 7 μέτρων SAR με εξαιρετικά μεγάλο ρεζερβουάρ καυσίμου 285L.',
      df760: 'Offshore SAR και βαρύ αναχαιτιστή με πολύ μεγάλους σωλήνες 60 cm και 300 HP.',
      df860: 'Ο απόλυτος ναυαρχίδα αναχαίτισης 8,6 μέτρων με 500 HP διπλούς κινητήρες.',
      ex7: 'Σκάφος crossover 7 μέτρων με γάστρα από fiberglass και υπερυψωμένους λεπτούς σωλήνες.',
      ex9: '9m premium crossover ναυαρχίδα με καμπίνα, κεφάλι, wetbar και 450L καύσιμο.',
      sw240: 'Εξαιρετικά ελαφρύ τρυφερό αλουμίνιο 2,4 μέτρων με μόλις 33 kg — φορητό από ένα άτομο.',
      sw260: 'Προσφορά χρυσού μεγέθους σε 35 kg — η τέλεια ισορροπία χωρητικότητας και φορητότητας.',
      sw290: 'Προσφορά μεσαίου μεγέθους με αναβαθμισμένες 15° deadrise για καλύτερη απόδοση.',
      sw310: 'Διευρυμένη προσφορά με σωλήνες 44 cm και χωρητικότητα 5 ατόμων.',
      sw340: 'Εμβληματική Swiftlitee με χωρητικότητα 6 ατόμων σε μόλις 53 kg.',
      vr260: 'Το πιο συμπαγές Versa με άνεση διπλού ορόφου και σωλήνες υψηλής άνωσης 44 cm.',
      vr290: 'Sweet-spot πολυτελές τρυφερό με διπλό κατάστρωμα και σωλήνες 44 εκ.',
      vr310: 'Milestone Versa με διπλό πάτωμα συμβατό με κονσόλα και χωρητικότητα 5 ατόμων.',
      vr340: 'Πρωτογενής προσφορά με εξαιρετική χωρητικότητα και deck συμβατό με κονσόλα.',
      vr360: 'Προσφορά πολυτελείας υψηλής απόδοσης που μπαίνει στην κατηγορία 30 HP.',
      vr380: 'Μεσαία προς μεγάλη προσφορά πολυτελείας με τρεις επιλογές κονσόλας για γιοτ και καταμαράν.',
      vr400: 'Crossover ναυαρχίδα με κύτος 20° deep V και 50 HP για ικανότητα cruiser κονσόλας μεσαίου μεγέθους.',
      vr420: 'Πολυτελής κονσόλα cruiser από μεσαία έως μεγάλη με ωφέλιμο φορτίο 60 HP και 800 kg.',
      vr460: 'Το μεγαλύτερο Versa ναυαρχίδα με 70 HP, 920 kg ωφέλιμο φορτίο και 4mm ενισχυμένο κύτος.',
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
      'airdeck-360': 'AirDeck 360',
      'heavy-duty-raft-commercial': 'Kommersiell flåte for tung bruk',
      'high-speed-catamaran': 'Høyhastighets racerkatamaran (AQHB)',
      'inflatable-catamaran-kayak': 'Oppustelig kajakk-katamaran',
      kaboat: 'KaBoat kajakk-katamaran (ZB-serien)',
      'kayak-full-dropstitch': 'Høyytelsende kajakk med full drop-stitch',
      'kayak-hybrid': 'Hybridkajakk med drop-stitch',
      'life-vest-classic': 'Redningsvest Classic',
      'life-vest-pro': 'Redningsvest Pro',
      'oars-pump-set': 'Åre- og pumpepakke',
      'premium-dropstitch-seat': 'Premium sete i drop-stitch',
      'rib-250': 'RIB250',
      'rib-270': 'RIB270',
      'rib-300': 'RIB300',
      'rib-330': 'RIB 330',
      'rib-330a': 'RIB330A',
      'rib-330b': 'RIB330B',
      'rib-330c': 'RIB330C',
      'rib-360a': 'RIB360A — Allsidig 3,6m RIB for familie og fiske',
      'rib-360b': 'RIB360B — Premium 3,6m tur-RIB med kahytt og konsoll',
      'rib-390a': 'RIB390A — Sportslig 3,9m RIB med overdimensjonerte 47cm tuber',
      'rib-390al': 'RIB390AL — Sikkerhets-RIB med 4 kamre, konsoll og premiumvalg',
      'rib-390b': 'RIB390B — Robust 3,9m RIB med 40L drivstofftank og komplette kahytter',
      'rib-390bl': 'RIB390BL — Flaggskip-RIB på 3,9m med rollbar, soldekk og 4 kamre',
      'rib-430a': 'RIB430A — Lett 4,3m RIB med åpent dekk for kysttender og fiske',
      'rib-430b': 'RIB430B — 4,3m RIB med midtkonsoll, 4 luftkamre og lenspumpe',
      'rib-430c': 'RIB430C — Ekspedisjons-RIB på 4,3m med rollbar, vindrute og 50L drivstofftank',
      'rib-450-patrol': 'RIB 450 Patrol',
      'rib-480a': 'RIB480A — Lett 4,8m RIB med åpent dekk, 5 luftkamre og 60 HP',
      'rib-480b': 'RIB480B — 4,8m RIB med midtkonsoll, 60L drivstofftank og targa-bue',
      'rib-480c': 'RIB480C — 4,8m RIB med vindrutekonsoll, 4-pols bryterpanel og akterkahytter',
      'rib-480d': 'RIB480D — Premium 4,8m RIB med soldekk, bade stige og 60L drivstofftank',
      'rib-480w': 'RIB480W — 4,8m RIB med stor bredde på 2,35 m og midtkonsoll',
      'rib-500': 'RIB500 — 5,0m offshore-RIB med 2,10 m bredde, 52cm tuber og 60 HP',
      'rib-520a': 'RIB520A — Lett 5,2m RIB med åpent dekk for skreddersydde ombygginger',
      'rib-520b': 'RIB520B — Bred 5,2m RIB med midtkonsoll for patrulje og charter',
      'rib-520c': 'RIB520C — Bred 5,2m fritids-RIB med midtkonsoll og soldekk',
      'rib-520e': 'RIB520E — Robust 5,2m RIB med 115 HP og rustfri rollbar',
      'rib-520w': 'RIB520W — Bredeste 5,2m RIB med 2,35 m bredde for maksimal stabilitet',
      'rib-550a': 'RIB550A — Lett 5,5m patrulje- og fiske-RIB med 90 HP',
      'rib-550b': 'RIB550B — Fullt utstyrt 5,5m RIB med midtkonsoll og 100L drivstofftank',
      'rib-580a': 'RIB580A — Offshore-RIB på 5,8m med midtkonsoll, 115 HP og 90L drivstofftank',
      'rib-580b': 'RIB580B — 5,8m RIB for hard sjø med overdimensjonerte 58cm tuber',
      'rib-600': 'RIB600 — Avansert 6,0m RIB med 2,50 m bredde og 6 luftkamre',
      'rib-680a': 'RIB680A — Stor 6,6m RIB med 200 HP, 7 kamre og live-brønn',
      'rib-680b': 'RIB680B — Fullstørrelses 6,8m passasjer-RIB med 200 HP og skibøyle',
      'rib-700': 'RIB700',
      'rib-760': 'RIB760',
      'sib-aluminum-floor': 'Oppustelig sportsbåt (aluminiumsgulv)',
      'sib-dropstitch-floor': 'Oppustelig sportsbåt (drop-stitch-gulv)',
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
      'tactical-raft': 'Taktisk ekspedisjonsflåte',
      'whitewater-raft': 'Stryk-raft av neste generasjon (AQDRB)',
      'zb-mt350': 'AQMT-11\'6"',

      ap330: 'Apex Performance 330 (AP330)',
      ap360: 'Apex Performance 360 (AP360)',
      ap390: 'Apex Performance 390 (AP390)',
      ap420: 'Apex Performance 420 (AP420)',
      ap460: 'Apex Performance 460 (AP460)',
      ap520: 'Apex Performance 520 (AP520)',
      ap560: 'Apex Performance 560 (AP560)',
      ap660: 'Apex Performance 660 (AP660)',
      ap700: 'Apex Performance 700 (AP700)',
      ap760: 'Apex Performance 760 (AP760)',
      ap800: 'Apex Performance 800 (AP800)',
      ap900: 'Apex Performance 900 (AP900)',
      df420: 'Defender 420 (DF420)',
      df460: 'Defender 460 (DF460)',
      df500: 'Defender 500 (DF500)',
      df540: 'Defender 540 (DF540)',
      'df540-coaster': 'Defender 540 Coaster (DF540 Coaster)',
      df600: 'Defender 600 (DF600)',
      df700: 'Defender 700 (DF700)',
      df760: 'Defender 760 (DF760)',
      df860: 'Defender 860 (DF860)',
      ex7: 'Explorer 7 (EX7)',
      ex9: 'Explorer 9 (EX9)',
      sw240: 'Swiftlitee 240 (SW240)',
      sw260: 'Swiftlitee 260 (SW260)',
      sw290: 'Swiftlitee 290 (SW290)',
      sw310: 'Swiftlitee 310 (SW310)',
      sw340: 'Swiftlitee 340 (SW340)',
      vr260: 'Versa 260 (VR260)',
      vr290: 'Versa 290 (VR290)',
      vr310: 'Versa 310 (VR310)',
      vr340: 'Versa 340 (VR340)',
      vr360: 'Versa 360 (VR360)',
      vr380: 'Versa 380 (VR380)',
      vr400: 'Versa 400 (VR400)',
      vr420: 'Versa 420 (VR420)',
      vr460: 'Versa 460 (VR460)',
    },
    summaries: {
      'airdeck-360': 'Romslig 3,6m oppustelig båt med forsterket air-dekk-gulv — ideel for familieutflukter og fiske.',
      'heavy-duty-raft-commercial':
        'Kommersiell oppustelig flåte bygget for tung daglig bruk i turistdrift, med forsterkede gulv og industritekstil.',
      'high-speed-catamaran':
        'Oppustelig høyhastighetskatamaran med dobbelt skrog for usedvanlig stabilitet, fart og manøvreringsevne.',
      'inflatable-catamaran-kayak':
        'Oppustelig kajakk-katamaran på nybegynnernivå med usedvanlig stabilitet for nybegynnere, fiske og fritidspadling.',
      kaboat:
        'Hybrid kajakk-katamaran som forvandles fra en stabil to-skrogs fiskeplattform til en strømlinjeformet én-skrogs turkajakk.',
      'kayak-full-dropstitch':
        'Høyytelsende oppustelig kajakk med skrog i full drop-stitch for stivhet som et hardt skrog og presis kursstabilitet.',
      'kayak-hybrid':
        'Allsidig oppustelig kajakk med delvis drop-stitch-gulv for balanse mellom stivhet, portabilitet og pris.',
      'life-vest-classic': 'CE-sertifisert universell flytevest for fritidsvannsport.',
      'life-vest-pro': 'Automatisk oppustbar redningsvest i henhold til SOLAS for offshore- og redningsoperasjoner.',
      'oars-pump-set': 'Et par 1,6m aluminiumsårer og en kraftig 5L fotpumpe. Passer alle oppustelige båter i serien.',
      'premium-dropstitch-seat':
        'Oppustbart høyt trykk drop-stitch-sete for overlegen komfort og støtte på lange dager på vannet.',
      'rib-250':
        'Kompakt 2,5m RIB — lett aluminiumsskrog, ideel som yacht tender, fiskebåt eller sjøbåt for opptil 3 personer.',
      'rib-270':
        'Mellomstor 2,7m RIB med 162 cm bredde og 10 HP — stabil, portabel og perfekt for sjøfiske, yacht tender og kystfart.',
      'rib-300':
        'Allsidig 3,0m RIB med 20 HP, dyp-V skrog og seter for 4 — en familiefavoritt for sjøturer og kysteventyr.',
      'rib-330':
        'Mest solgte 3,3m RIB med aluminiumsskrog — davyt-løftbar yacht tender og familiedagsbåt for opptil 5 personer.',
      'rib-330a': 'Lett 3,3m RIB med glassfiberskrog, 80 kg vekt og 20 HP — kvikk, rimelig og enkel å trailer.',
      'rib-330b':
        'Komfortorientert 3,3m RIB med kahytmadrass i baugen, ankerbrønn og 20 HP — en forfinet dagsbåt for 4 personer.',
      'rib-330c':
        'Premium 3,3m RIB med for- og akterkahytt, midtkonsoll og 20 HP — den mest fullstendig utstyrte 3,3m-varianten.',
      'rib-360a':
        'Lett 3,6m RIB med glassfiberskrog, 1,80 m bredde, 120 kg egenvekt og 650 kg lastekapasitet. Ideel for kystfiske, familieutflukter og havnetransporter med motorer på opptil 25 HP.',
      'rib-360b':
        'Godt utstyrt 3,6m RIB med glassfiberskrog, 1,80 m bredde, 100 kg egenvekt og 650 kg lastekapasitet. Utstyrt med for- og akterkahytt, midtkonsoll og lenspumpe for kystturer og familiecruise.',
      'rib-390a':
        'Lett 3,9m RIB med glassfiberskrog, 1,85 m bredde, 100 kg egenvekt og 47cm tuber. Godkjent for 30 HK påhengsmotorer med 650 kg lastekapasitet for 5 personer. Ideel for sport, fiske og kystfart.',
      'rib-390al':
        'Premium 3,9m RIB med glassfiberskrog, 4 uavhengige luftkamre, 1,85 m bredde, 120 kg egenvekt og 650 kg lastekapasitet. Inkluderer midtkonsoll, seteboks og luksuriøse gulvvalg. Godkjent for 30 HK påhengsmotorer.',
      'rib-390b':
        'Robust 3,9m RIB med glassfiberskrog, 1,85 m bredde, 130 kg egenvekt og 47cm Hypalon-tuber. Med for- og akterkahytt, midtkonsoll, lenspumpe og innebygd 40L drivstofftank. Godkjent for 30 HK påhengsmotorer med 650 kg lastekapasitet.',
      'rib-390bl':
        'Fullt utstyrt 3,9m RIB med glassfiberskrog, 4 luftkamre, 1,78 m bredde, 110 kg egenvekt og 650 kg lastekapasitet. Midtkonsoll med styring, rollbar med lys, 25L drivstofftank, soldekk og C-formet tubestige. Godkjent for 30 HK påhengsmotorer.',
      'rib-430a':
        'Lett 4,3m glassfiber-RIB med 2,00 m bredde, 3 luftkamre, 170 kg egenvekt og 640 kg maksimal last. Utviklet for kystforsyning, fritidsfiske og lett kommersiell bruk.',
      'rib-430b':
        '4,3m glassfiber-RIB med midtkonsoll, 2,00 m bredde, 4 luftkamre, 200 kg egenvekt og 640 kg maksimal last. Utstyrt med lenspumpe, akterlys og skihåndtak for patrulje, fiske og vannsport.',
      'rib-430c':
        'Fullt utstyrt 4,3m glassfiber-RIB med 1,96 m bredde, 48cm tuber, 4 luftkamre, 200 kg egenvekt og 640 kg maksimal last. Midtkonsoll med vindrute, rollbar med lys og innebygd 50L drivstofftank.',
      'rib-450-patrol': '4,5m patrulje-RIB med aluminiumsskrog. Tunge konstruksjon, egnet for kommersielle operatører.',
      'rib-480a':
        'Lett 4,8m glassfiber-RIB med 2,00 m bredde, 5 luftkamre, 183 kg egenvekt og 680 kg maksimal last. Utviklet for kysttransport, offshore-fiske og dykkeroperasjoner med maks. motorkraft på 60 HP.',
      'rib-480b':
        '4,8m glassfiber-RIB med midtkonsoll, 2,00 m bredde, 5 luftkamre, 260 kg egenvekt og 680 kg maksimal last. Utstyrt med lenspumpe, innebygd 60L drivstofftank og targa-bue med navigasjonslys.',
      'rib-480c':
        'Fullt utstyrt 4,8m glassfiber-RIB med 2,00 m bredde, 5 luftkamre, 280 kg egenvekt og 680 kg maksimal last. Midtkonsoll med integrert vindrute og 4-pols bryterpanel, akterkahyttseter og 60 HP.',
      'rib-480d':
        'Premium 4,8m glassfiber-RIB med 2,00 m bredde, 5 luftkamre, 280 kg egenvekt og 680 kg maksimal last. Midtkonsoll, innebygd 60L drivstofftank, targa-bue, akterliggende rustfri stige og solmadrasser for familie- og charterbruk.',
      'rib-480w':
        'Bred 4,8m glassfiber-RIB med 2,35 m bredde, 5 luftkamre, 280 kg egenvekt og 680 kg maksimal last. Midtkonsoll med sidesete, 60L drivstofftank og targa-bue gir usedvanlig stabilitet og dekkflate for charter og dykking.',
      'rib-500':
        '5,0m offshore glassfiber-RIB med 2,10 m bredde, 52cm tuber, 5 luftkamre, 314 kg egenvekt og 686 kg maksimal last. Midtkonsoll, 60L drivstofftank og targa-bue for ekspedisjonsstøtte, offshore-fiske og kommersiell transport.',
      'rib-520a':
        'Lett 5,2m RIB med åpent dekk (RIB520A) — 200 kg skrog, kapasitet for 8 personer, maks. 85 HP. Ideel for skreddersydde ombygginger, offshore-fiske og dykkerstøtte.',
      'rib-520b':
        'Bred 5,2m RIB med midtkonsoll (RIB520B) — 2,28 m bredde, 400 kg skrog, 80L drivstofftank, kapasitet for 8 personer. Bygget for kystpatrulje, offshore-fiske og passasjercharter.',
      'rib-520c':
        'Bred 5,2m fritids-RIB (RIB520C) — 2,28 m bredde, 360 kg skrog, midtkonsoll, solmadrasser, targa-bue med lys. Ideel for vannsport, familiecruise og charter.',
      'rib-520e':
        'Robust 5,2m RIB (RIB520E) — 450 kg skrog, maks. 115 HP, 80L drivstofftank med viser, rustfri rollbar, midtkonsoll. Bygget for seriøst offshore-fiske og ekspedisjonsstøtte.',
      'rib-520w':
        'Bredeste 5,2m RIB (RIB520W) — 2,35 m bredde, 230 kg skrog, åpen layout, kapasitet for 8 personer, maks. 85 HP. Usedvanlig stabilitet for dykkeroperasjoner, guidet fiske og passasjertransport.',
      'rib-550a':
        'Lett 5,5m RIB (RIB550A) — 240 kg skrog, 2,30 m bredde, 60L drivstofftank, kapasitet for 7 personer, maks. 90 HP. Spesielt bygget for kystpatrulje, transport og seriøst fiske.',
      'rib-550b':
        'Fullt utstyrt 5,5m RIB med midtkonsoll (RIB550B) — 450 kg skrog, 2,30 m bredde, 100L drivstofftank, rollbar, soldekk. Bygget for lange offshore-ekspedisjoner og tung transport.',
      'rib-580a':
        'Offshore-RIB på 5,8m med midtkonsoll (RIB580A) — 450 kg skrog, 2,38 m bredde, 90L drivstofftank, targa-bue, kapasitet for 8 personer, maks. 115 HP. Bygget for ekspedisjonstransport og dypvannsfiske.',
      'rib-580b':
        '5,8m RIB for hard sjø (RIB580B) — 450 kg skrog, overdimensjonerte 58cm tuber, 2,38 m bredde, 90L drivstofftank, kapasitet for 8 personer, maks. 115 HP. Usedvanlig oppdrift og stabilitet for krevende offshore-forhold.',
      'rib-600':
        'Avansert 6,0m RIB (RIB600) — 500 kg skrog, 2,50 m bredde, 6 luftkamre, 120L drivstofftank, rollbar, kapasitet for 8 personer, maks. 115 HP. Broen mellom mellomstore og store offshore-RIB.',
      'rib-680a':
        'Stor 6,6m RIB (RIB680A) — 500 kg skrog, 2,52 m bredde, 7 luftkamre, 150L drivstofftank, live-brønn, kapasitet for 10 personer, maks. 200 HP. Bygget for big game-havfiske, kommersiell charter og dykkerstøtte.',
      'rib-680b':
        'Fullstørrelses 6,8m passasjer-RIB (RIB680B) — 500 kg skrog, 2,52 m bredde, 7 luftkamre, 100L drivstofftank, skibøyle, kapasitet for 10 personer, maks. 200 HP. Utviklet for kommersiell passasjertransport, dykkerstøtte og ekspedisjonsslep.',
      'rib-700': 'Høyytelsende RIB med fast skrog (RIB700) med 710 cm lengde for transport og fiske.',
      'rib-760': 'Høyytelsende RIB med fast skrog (RIB760) med 760 cm lengde for transport og fiske.',
      'sib-aluminum-floor': 'Allsidig oppustelig sportsbåt med stivt aluminiumsgulv for fremragende ytelse og levetid.',
      'sib-dropstitch-floor':
        'Lett oppustelig sportsbåt med høyt trykk drop-stitch-gulv for overlegen stivhet og portabilitet.',
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
      'tactical-raft':
        'Oppustelig flåte i militærspecifikasjon, bygget for taktiske operasjoner, søk og redning samt ekstrem ekspedisjonsbruk.',
      'whitewater-raft':
        'Robust stryk-raft med selv drenerende bunn, forsterket konstruksjon og raske oppbyggingsfunksjoner for profesjonell elvepadling.',
      'zb-mt350': 'AQMT-11\'6" — 11,5ft glassfiber-RIB for kystpatrulje, kommersiell transport og ekspedisjonsstøtte.',

      ap330: 'Entry-level luksus konsoll RIB tender i Apex Performance serien.',
      ap360: 'Liten til mellomstor luksus midtkonsoll RIB tender med 40 HP kapasitet.',
      ap390: 'Mellomstor luksuskonsoll RIB går inn i 50 HP-klassen.',
      ap420: 'Den perfekte første familiedagbåten med kapasitet på 70 HP og 55L drivstofftank.',
      ap460: 'Flaggskip crossover-modell i 4-metersklassen med ergonomisk layout og bow locker.',
      ap520: '5-meters klasse luksus RIB med 24° offshore deep V skrog og 105L drivstofftank.',
      ap560: 'Kjernesport RIB med 115 HP, 105L drivstoff og kapasitet på 12 personer.',
      ap660: 'CE Category B offshore luksus RIB med 26° deep V og 200 HP.',
      ap700: '7-meters luksus offshore RIB med 250 HP og 280L drivstoff.',
      ap760: 'Luksus 7,6 m offshore flaggskip RIB med 300 HP og 280L drivstoff.',
      ap800: 'Offshore cruiseflaggskip med 350 HP, dobbelmotorstøtte, 300L drivstofftank.',
      ap900: 'Det ultimate flaggskipet RIB på 9,12 meter med 600 HP doble motorer og 380L drivstoff.',
      df420: 'Nykommersiell/tung RIB for patrulje- og forsyningsoperasjoner.',
      df460: '4-metersklassen RIB som balanserer manøvrerbarhet med nyttelastkapasitet.',
      df500: 'Kjerne kommersiell forsyningsenhet RIB med 24° offshore deep V skrog og 90L integrert drivstofftank.',
      df540: 'Mellomstor offshore arbeidshest for patrulje, SAR og kommersielle operasjoner.',
      'df540-coaster': 'Coaster Edition patrulje RIB med dedikert modulært arbeidsdekk.',
      df600: '6-meters offshorepatrulje RIB med CE Category B-sertifisering og 140L drivstoff.',
      df700: '7 meter kommersiell SAR arbeidshest med ultrastor 285L drivstofftank.',
      df760: 'Offshore SAR og tung avskjæringsjager med 60 cm ekstra store rør og 300 HP.',
      df860: '8,6 meter ultimat flaggskip-interceptor med 500 HP doble motorer.',
      ex7: '7m crossoverbåt med glassfiberskrog og hevede smale rør.',
      ex9: '9m premium crossover-flaggskip med kupé, toalett, våtbar og 450L drivstoff.',
      sw240: 'Ultralett 2,4 m aluminiumsmøbel til kun 33 kg — bærbar av én person.',
      sw260: 'Anbud i gylden størrelse på 35 kg — den perfekte balansen mellom kapasitet og portabilitet.',
      sw290: 'Middels anbud med oppgradert 15° deadrise for bedre ytelse.',
      sw310: 'Utvidet anbud med 44 cm rør og kapasitet på 5 personer.',
      sw340: 'Flaggskip Swiftlitee med kapasitet for 6 personer på bare 53 kg.',
      vr260: 'Mest kompakt Versa med dobbel-dekks komfort og 44 cm høyoppdriftsrør.',
      vr290: 'Sweet-spot luksus tender med dobbeltdekk og 44 cm rør.',
      vr310: 'Milestone Versa med konsollkompatibel dobbeltdekk og kapasitet på 5 personer.',
      vr340: 'Primært anbud med utmerket romkapasitet og konsollkompatibelt dekk.',
      vr360: 'Høyytelses luksustender som går inn i 30 HP-klassen.',
      vr380: 'Middels til stort luksustender med tre konsollalternativer for yachter og katamaraner.',
      vr400: 'Crossover flaggskip med 20° deep V skrog og 50 HP for mellomstore konsollcruiser-kapasitet.',
      vr420: 'Middels til stor luksus konsollcruiser med 60 HP og 800 kg nyttelast.',
      vr460: 'Største Versa flaggskip med 70 HP, 920 kg nyttelast og 4mm forsterket skrog.',
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
      'airdeck-360': 'AirDeck 360',
      'heavy-duty-raft-commercial': 'Коммерческий плот для интенсивной эксплуатации',
      'high-speed-catamaran': 'Скоростной гоночный катамаран (AQHB)',
      'inflatable-catamaran-kayak': 'Надувной каяк-катамаран',
      kaboat: 'Каяк-катамаран KaBoat (серия ZB)',
      'kayak-full-dropstitch': 'Высокопроизводительный каяк с полным drop-stitch корпусом',
      'kayak-hybrid': 'Гибридный каяк с drop-stitch',
      'life-vest-classic': 'Спасательный жилет Classic',
      'life-vest-pro': 'Спасательный жилет Pro',
      'oars-pump-set': 'Комплект вёсел и насоса',
      'premium-dropstitch-seat': 'Премиальное сиденье drop-stitch',
      'rib-250': 'RIB250',
      'rib-270': 'RIB270',
      'rib-300': 'RIB300',
      'rib-330': 'RIB 330',
      'rib-330a': 'RIB330A',
      'rib-330b': 'RIB330B',
      'rib-330c': 'RIB330C',
      'rib-360a': 'RIB360A — Универсальная 3,6 м RIB-лодка для семьи и рыбалки',
      'rib-360b': 'RIB360B — Премиальная 3,6 м туристическая RIB-лодка с каютой и консолью',
      'rib-390a': 'RIB390A — Спортивная 3,9 м RIB-лодка с увеличенными баллонами 47 см',
      'rib-390al': 'RIB390AL — Спасательная RIB-лодка с 4 камерами, консолью и премиальными опциями',
      'rib-390b': 'RIB390B — Надёжная 3,9 м RIB-лодка с баком 40 л и полными каютами',
      'rib-390bl': 'RIB390BL — Флагманская 3,9 м RIB-лодка с рамой, солнечной палубой и 4 камерами',
      'rib-430a': 'RIB430A — Лёгкая 4,3 м RIB-лодка с открытой палубой для тендера и рыбалки',
      'rib-430b': 'RIB430B — 4,3 м RIB-лодка с центральной консолью, 4 воздушными камерами и трюмной помпой',
      'rib-430c': 'RIB430C — Экспедиционная 4,3 м RIB-лодка с рамой, ветровым стеклом и баком 50 л',
      'rib-450-patrol': 'RIB 450 Patrol',
      'rib-480a': 'RIB480A — Лёгкая 4,8 м RIB-лодка с открытой палубой, 5 воздушными камерами и 60 л.с.',
      'rib-480b': 'RIB480B — 4,8 м RIB-лодка с центральной консолью, баком 60 л и тарга-дугой',
      'rib-480c':
        'RIB480C — 4,8 м RIB-лодка с консолью и ветровым стеклом, панелью на 4 выключателя и кормовыми каютами',
      'rib-480d': 'RIB480D — Премиальная 4,8 м RIB-лодка с солнечной палубой, купальной лестницей и баком 60 л',
      'rib-480w': 'RIB480W — 4,8 м RIB-лодка с увеличенной шириной 2,35 м и центральной консолью',
      'rib-500': 'RIB500 — 5,0 м морская RIB-лодка с шириной 2,10 м, баллонами 52 см и 60 л.с.',
      'rib-520a': 'RIB520A — Лёгкая 5,2 м RIB-лодка с открытой палубой для индивидуальной модернизации',
      'rib-520b': 'RIB520B — Широкая 5,2 м RIB-лодка с центральной консолью для патрулирования и чартера',
      'rib-520c': 'RIB520C — Широкая 5,2 м прогулочная RIB-лодка с центральной консолью и солнечной палубой',
      'rib-520e': 'RIB520E — Надёжная 5,2 м RIB-лодка с мотором 115 л.с. и нержавеющей рамой',
      'rib-520w': 'RIB520W — Самая широкая 5,2 м RIB-лодка с шириной 2,35 м для максимальной остойчивости',
      'rib-550a': 'RIB550A — Лёгкая 5,5 м RIB-лодка для патрулирования и рыбалки с мотором 90 л.с.',
      'rib-550b': 'RIB550B — Полностью укомплектованная 5,5 м RIB-лодка с центральной консолью и баком 100 л',
      'rib-580a': 'RIB580A — Морская 5,8 м RIB-лодка с центральной консолью, 115 л.с. и баком 90 л',
      'rib-580b': 'RIB580B — 5,8 м RIB-лодка для сложного моря с увеличенными баллонами 58 см',
      'rib-600': 'RIB600 — Совершенная 6,0 м RIB-лодка с шириной 2,50 м и 6 воздушными камерами',
      'rib-680a': 'RIB680A — Большая 6,6 м RIB-лодка с 200 л.с., 7 камерами и живорыбным отсеком',
      'rib-680b': 'RIB680B — Полноразмерная 6,8 м пассажирская RIB-лодка с 200 л.с. и дугой для водных лыж',
      'rib-700': 'RIB700',
      'rib-760': 'RIB760',
      'sib-aluminum-floor': 'Надувная спортивная лодка (алюминиевый настил)',
      'sib-dropstitch-floor': 'Надувная спортивная лодка (настил drop-stitch)',
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
      'tactical-raft': 'Тактический экспедиционный плот',
      'whitewater-raft': 'Сплавной плот нового поколения (AQDRB)',
      'zb-mt350': 'AQMT-11\'6"',

      ap330: 'Apex Performance 330 (AP330)',
      ap360: 'Apex Performance 360 (AP360)',
      ap390: 'Apex Performance 390 (AP390)',
      ap420: 'Apex Performance 420 (AP420)',
      ap460: 'Apex Performance 460 (AP460)',
      ap520: 'Apex Performance 520 (AP520)',
      ap560: 'Apex Performance 560 (AP560)',
      ap660: 'Apex Performance 660 (AP660)',
      ap700: 'Apex Performance 700 (AP700)',
      ap760: 'Apex Performance 760 (AP760)',
      ap800: 'Apex Performance 800 (AP800)',
      ap900: 'Apex Performance 900 (AP900)',
      df420: 'Defender 420 (DF420)',
      df460: 'Defender 460 (DF460)',
      df500: 'Defender 500 (DF500)',
      df540: 'Defender 540 (DF540)',
      'df540-coaster': 'Defender 540 Coaster (DF540 Coaster)',
      df600: 'Defender 600 (DF600)',
      df700: 'Defender 700 (DF700)',
      df760: 'Defender 760 (DF760)',
      df860: 'Defender 860 (DF860)',
      ex7: 'Explorer 7 (EX7)',
      ex9: 'Explorer 9 (EX9)',
      sw240: 'Swiftlitee 240 (SW240)',
      sw260: 'Swiftlitee 260 (SW260)',
      sw290: 'Swiftlitee 290 (SW290)',
      sw310: 'Swiftlitee 310 (SW310)',
      sw340: 'Swiftlitee 340 (SW340)',
      vr260: 'Versa 260 (VR260)',
      vr290: 'Versa 290 (VR290)',
      vr310: 'Versa 310 (VR310)',
      vr340: 'Versa 340 (VR340)',
      vr360: 'Versa 360 (VR360)',
      vr380: 'Versa 380 (VR380)',
      vr400: 'Versa 400 (VR400)',
      vr420: 'Versa 420 (VR420)',
      vr460: 'Versa 460 (VR460)',
    },
    summaries: {
      'airdeck-360':
        'Просторная 3,6 м надувная лодка с усиленным настилом AirDeck — идеальна для семейных прогулок и рыбалки.',
      'heavy-duty-raft-commercial':
        'Коммерческий надувной плот для интенсивной ежедневной эксплуатации в туристическом бизнесе, с усиленным дном и промышленными материалами.',
      'high-speed-catamaran':
        'Надувной скоростной катамаран с двойным корпусом для исключительной остойчивости, скорости и манёвренности.',
      'inflatable-catamaran-kayak':
        'Надувной каяк-катамаран начального уровня с исключительной остойчивостью для новичков, рыбалки и прогулочной гребли.',
      kaboat:
        'Гибрид каяка и катамарана, трансформирующийся из стабильной двухкорпусной рыболовной платформы в обтекаемый однокорпусный туристический каяк.',
      'kayak-full-dropstitch':
        'Высокопроизводительный надувной каяк с полностью drop-stitch корпусом: жёсткость жёсткой лодки и точная курсовая устойчивость.',
      'kayak-hybrid':
        'Универсальный надувной каяк с частичным drop-stitch настилом — баланс жёсткости, портативности и цены.',
      'life-vest-classic': 'Универсальный спасательный жилет с сертификацией CE для любительского водного спорта.',
      'life-vest-pro':
        'Автоматический надувной спасательный жилет по стандарту SOLAS для морских и спасательных операций.',
      'oars-pump-set':
        'Пара алюминиевых вёсел 1,6 м и мощная ножная помпа 5 л. Подходит для всех надувных лодок серии.',
      'premium-dropstitch-seat':
        'Надувное высоконапорное сиденье drop-stitch для превосходного комфорта и поддержки в долгие дни на воде.',
      'rib-250':
        'Компактная 2,5 м RIB-лодка с лёгким алюминиевым корпусом — идеальный тендер для яхты, рыболовная лодка или мореходная лодка на 3 человек.',
      'rib-270':
        'Среднеразмерная 2,7 м RIB-лодка с шириной 162 см и мотором 10 л.с. — стабильная, портативная и идеальная для морской рыбалки, тендера и прибрежных походов.',
      'rib-300':
        'Универсальная 3,0 м RIB-лодка с мотором 20 л.с., корпусом с глубокой V-образной формой и сиденьями на 4 человек — семейный фаворит для морских прогулок и прибрежных приключений.',
      'rib-330':
        'Лучшая по продажам 3,3 м RIB-лодка с алюминиевым корпусом — поднимаемая краном тендерная лодка для яхты и семейная прогулочная лодка на 5 человек.',
      'rib-330a':
        'Лёгкая 3,3 м RIB-лодка с корпусом из стекловолокна, весом 80 кг и мотором 20 л.с. — быстрая, доступная и простая в транспортировке.',
      'rib-330b':
        'Ориентированная на комфорт 3,3 м RIB-лодка с носовым лежаком, якорным ящиком и мотором 20 л.с. — утончённая прогулочная лодка на 4 человек.',
      'rib-330c':
        'Премиальная 3,3 м RIB-лодка с носовой и кормовой каютами, центральной консолью и мотором 20 л.с. — самая полноукомплектованная версия 3,3 м.',
      'rib-360a':
        'Лёгкая 3,6 м RIB-лодка с корпусом из стекловолокна, шириной 1,80 м, собственным весом 120 кг и грузоподъёмностью 650 кг. Идеальна для прибрежной рыбалки, семейных прогулок и портовых перевозок с моторами до 25 л.с.',
      'rib-360b':
        'Хорошо укомплектованная 3,6 м RIB-лодка с корпусом из стекловолокна, шириной 1,80 м, собственным весом 100 кг и грузоподъёмностью 650 кг. Оснащена носовой и кормовой каютами, центральной консолью и трюмной помпой для прибрежных походов и семейных круизов.',
      'rib-390a':
        'Лёгкая 3,9 м RIB-лодка с корпусом из стекловолокна, шириной 1,85 м, собственным весом 100 кг и баллонами 47 см. Допускает подвесные моторы до 30 л.с. при грузоподъёмности 650 кг на 5 человек. Идеальна для спорта, рыбалки и прибрежных походов.',
      'rib-390al':
        'Премиальная 3,9 м RIB-лодка с корпусом из стекловолокна, 4 независимыми воздушными камерами, шириной 1,85 м, собственным весом 120 кг и грузоподъёмностью 650 кг. Включает центральную консоль, сиденье-ящик и роскошные варианты настила. Допускает моторы до 30 л.с.',
      'rib-390b':
        'Надёжная 3,9 м RIB-лодка с корпусом из стекловолокна, шириной 1,85 м, собственным весом 130 кг и баллонами 47 см из Hypalon. С носовой и кормовой каютами, центральной консолью, трюмной помпой и встроенным баком 40 л. Допускает моторы до 30 л.с. при грузоподъёмности 650 кг.',
      'rib-390bl':
        'Полностью укомплектованная 3,9 м RIB-лодка с корпусом из стекловолокна, 4 воздушными камерами, шириной 1,78 м, собственным весом 110 кг и грузоподъёмностью 650 кг. Центральная консоль с рулевым управлением, рама с огнями, бак 25 л, солнечная палуба и C-образная лестница на баллон. Допускает моторы до 30 л.с.',
      'rib-430a':
        'Лёгкая 4,3 м RIB-лодка из стекловолокна с шириной 2,00 м, 3 воздушными камерами, собственным весом 170 кг и максимальной нагрузкой 640 кг. Создана для прибрежного снабжения, любительской рыбалки и лёгкого коммерческого использования.',
      'rib-430b':
        '4,3 м RIB-лодка из стекловолокна с центральной консолью, шириной 2,00 м, 4 воздушными камерами, собственным весом 200 кг и максимальной нагрузкой 640 кг. Оснащена трюмной помпой, кормовым огнём и ручками для лыж — для патрулирования, рыбалки и водного спорта.',
      'rib-430c':
        'Полностью укомплектованная 4,3 м RIB-лодка из стекловолокна с шириной 1,96 м, баллонами 48 см, 4 воздушными камерами, собственным весом 200 кг и максимальной нагрузкой 640 кг. Центральная консоль с ветровым стеклом, рама с огнями и встроенный бак 50 л.',
      'rib-450-patrol':
        '4,5 м патрульная RIB-лодка с алюминиевым корпусом. Усиленная конструкция для коммерческих операторов.',
      'rib-480a':
        'Лёгкая 4,8 м RIB-лодка из стекловолокна с шириной 2,00 м, 5 воздушными камерами, собственным весом 183 кг и максимальной нагрузкой 680 кг. Создана для прибрежных перевозок, морской рыбалки и дайвинга с максимальной мощностью 60 л.с.',
      'rib-480b':
        '4,8 м RIB-лодка из стекловолокна с центральной консолью, шириной 2,00 м, 5 воздушными камерами, собственным весом 260 кг и максимальной нагрузкой 680 кг. Оснащена трюмной помпой, встроенным баком 60 л и тарга-дугой с навигационными огнями.',
      'rib-480c':
        'Полностью укомплектованная 4,8 м RIB-лодка из стекловолокна с шириной 2,00 м, 5 воздушными камерами, собственным весом 280 кг и максимальной нагрузкой 680 кг. Центральная консоль с интегрированным ветровым стеклом и панелью на 4 выключателя, кормовые каютные сиденья и мотор 60 л.с.',
      'rib-480d':
        'Премиальная 4,8 м RIB-лодка из стекловолокна с шириной 2,00 м, 5 воздушными камерами, собственным весом 280 кг и максимальной нагрузкой 680 кг. Центральная консоль, встроенный бак 60 л, тарга-дуга, кормовая лестница из нержавеющей стали и солнечные лежаки для семейного и чартерного использования.',
      'rib-480w':
        'Широкая 4,8 м RIB-лодка из стекловолокна с шириной 2,35 м, 5 воздушными камерами, собственным весом 280 кг и максимальной нагрузкой 680 кг. Центральная консоль с боковым сиденьем, бак 60 л и тарга-дуга обеспечивают исключительную остойчивость и площадь палубы для чартера и дайвинга.',
      'rib-500':
        '5,0 м морская RIB-лодка из стекловолокна с шириной 2,10 м, баллонами 52 см, 5 воздушными камерами, собственным весом 314 кг и максимальной нагрузкой 686 кг. Центральная консоль, бак 60 л и тарга-дуга для экспедиционного обеспечения, морской рыбалки и коммерческих перевозок.',
      'rib-520a':
        'Лёгкая 5,2 м RIB-лодка с открытой палубой (RIB520A) — корпус 200 кг, вместимость 8 человек, макс. 85 л.с. Идеальна для индивидуальной модернизации, морской рыбалки и дайвинг-поддержки.',
      'rib-520b':
        'Широкая 5,2 м RIB-лодка с центральной консолью (RIB520B) — ширина 2,28 м, корпус 400 кг, бак 80 л, вместимость 8 человек. Создана для прибрежного патрулирования, морской рыбалки и пассажирского чартера.',
      'rib-520c':
        'Широкая 5,2 м прогулочная RIB-лодка (RIB520C) — ширина 2,28 м, корпус 360 кг, центральная консоль, солнечные лежаки, тарга-дуга с огнями. Идеальна для водного спорта, семейных круизов и чартера.',
      'rib-520e':
        'Надёжная 5,2 м RIB-лодка (RIB520E) — корпус 450 кг, макс. 115 л.с., бак 80 л с указателем уровня, нержавеющая рама, центральная консоль. Создана для серьёзной морской рыбалки и экспедиционного обеспечения.',
      'rib-520w':
        'Самая широкая 5,2 м RIB-лодка (RIB520W) — ширина 2,35 м, корпус 230 кг, открытая планировка, вместимость 8 человек, макс. 85 л.с. Исключительная остойчивость для дайвинга, рыбалки с гидом и пассажирских перевозок.',
      'rib-550a':
        'Лёгкая 5,5 м RIB-лодка (RIB550A) — корпус 240 кг, ширина 2,30 м, бак 60 л, вместимость 7 человек, макс. 90 л.с. Специально построена для прибрежного патрулирования, перевозок и серьёзной рыбалки.',
      'rib-550b':
        'Полностью укомплектованная 5,5 м RIB-лодка с центральной консолью (RIB550B) — корпус 450 кг, ширина 2,30 м, бак 100 л, рама, солнечная палуба. Создана для дальних морских экспедиций и тяжёлых перевозок.',
      'rib-580a':
        'Морская 5,8 м RIB-лодка с центральной консолью (RIB580A) — корпус 450 кг, ширина 2,38 м, бак 90 л, тарга-дуга, вместимость 8 человек, макс. 115 л.с. Создана для экспедиционных перевозок и глубокой морской рыбалки.',
      'rib-580b':
        '5,8 м RIB-лодка для сложного моря (RIB580B) — корпус 450 кг, увеличенные баллоны 58 см, ширина 2,38 м, бак 90 л, вместимость 8 человек, макс. 115 л.с. Исключительная плавучесть и остойчивость в сложных морских условиях.',
      'rib-600':
        'Совершенная 6,0 м RIB-лодка (RIB600) — корпус 500 кг, ширина 2,50 м, 6 воздушных камер, бак 120 л, рама, вместимость 8 человек, макс. 115 л.с. Связующее звено между среднеразмерными и большими морскими RIB.',
      'rib-680a':
        'Большая 6,6 м RIB-лодка (RIB680A) — корпус 500 кг, ширина 2,52 м, 7 воздушных камер, бак 150 л, живорыбный отсек, вместимость 10 человек, макс. 200 л.с. Создана для морской рыбалки на крупную рыбу, коммерческого чартера и дайвинг-поддержки.',
      'rib-680b':
        'Полноразмерная 6,8 м пассажирская RIB-лодка (RIB680B) — корпус 500 кг, ширина 2,52 м, 7 воздушных камер, бак 100 л, дуга для водных лыж, вместимость 10 человек, макс. 200 л.с. Разработана для коммерческих пассажирских перевозок, дайвинг-поддержки и экспедиционных буксировок.',
      'rib-700': 'Высокопроизводительная RIB-лодка с жёстким корпусом (RIB700) длиной 710 см для перевозок и рыбалки.',
      'rib-760': 'Высокопроизводительная RIB-лодка с жёстким корпусом (RIB760) длиной 760 см для перевозок и рыбалки.',
      'sib-aluminum-floor':
        'Универсальная надувная спортивная лодка с жёстким алюминиевым настилом для отличных характеристик и долговечности.',
      'sib-dropstitch-floor':
        'Лёгкая надувная спортивная лодка с высоконапорным drop-stitch настилом для превосходной жёсткости и портативности.',
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
      'tactical-raft':
        'Надувной плот военного стандарта, созданный для тактических операций, поиска и спасения и экстремальных экспедиций.',
      'whitewater-raft':
        'Прочный сплавной плот с самоосушающимся дном, усиленной конструкцией и быстрой сборкой для профессионального сплава.',
      'zb-mt350':
        'AQMT-11\'6" — 11,5-футовая RIB-лодка из стекловолокна для прибрежного патрулирования, коммерческих перевозок и экспедиционного обеспечения.',

      ap330: 'Роскошная консоль начального уровня RIB из серии Apex Performance.',
      ap360: 'Роскошный тендер RIB с центральной консолью малого и среднего размера, вмещающий 40 HP.',
      ap390: 'Роскошная консоль среднего размера RIB переходит в класс 50 HP.',
      ap420: 'Идеальная первая семейная дневная лодка с вместимостью 70 HP и топливным баком 55L.',
      ap460: 'Флагманская модель кроссовера в 4-метровом классе с эргономичной компоновкой и bow locker.',
      ap520: '5-метровое судно класса люкс RIB с корпусом deep V, углом наклона моря 24° и топливным баком 105L.',
      ap560: 'Базовый дальнобойный спортивный RIB со 115 топливными баками HP, 105L и вместимостью 12 человек.',
      ap660: 'CE Category B оффшор класса люкс RIB с 26° deep V и 200 HP.',
      ap700: '7-метровая роскошная морская RIB с топливом 250 HP и 280L.',
      ap760: 'Роскошный морской флагман RIB длиной 7,6 м с 300 топливом HP и 280L.',
      ap800: 'Флагман морского круиза с 350 HP, двумя двигателями, топливным баком 300L.',
      ap900: 'Флагманский корабль RIB длиной 9,12 м с 600 сдвоенными двигателями HP и топливом 380L.',
      df420: 'Коммерческий/тяжелый RIB начального уровня для патрульных и коммунальных служб.',
      df460: 'Утилита RIB 4-метрового класса, сочетающая маневренность и грузоподъемность.',
      df500:
        'Основное коммерческое предприятие RIB с корпусом deep V, расположенным под углом 24° к морю, и встроенным топливным баком 90L.',
      df540: 'Морская рабочая лошадка среднего размера для патрулирования, SAR и коммерческих операций.',
      'df540-coaster': 'Патруль Coaster Edition RIB со специальной модульной рабочей площадкой.',
      df600: 'Шестиметровый морской патруль RIB с сертификатом CE Category B и топливом 140L.',
      df700: '7-метровая коммерческая рабочая лошадка SAR со сверхбольшим топливным баком 285L.',
      df760: 'Морской SAR и тяжелый перехватчик с очень большими трубами длиной 60 см и 300 HP.',
      df860: '8,6-метровый флагманский перехватчик с 500 сдвоенными двигателями HP.',
      ex7: '7-метровый кроссовер с корпусом из стекловолокна и тонкими приподнятыми трубами.',
      ex9: 'Флагманский кроссовер премиум-класса длиной 9 м с кабиной, головкой, мокрым баром и топливом 450L.',
      sw240: 'Сверхлегкий алюминиевый тендер длиной 2,4 м всего за 33 kg — его переносит один человек.',
      sw260: 'Тендер золотого размера на 35 kg — идеальный баланс вместительности и портативности.',
      sw290: 'Тендер среднего размера с улучшенным углом наклона 15° deadrise для повышения производительности.',
      sw310: 'Расширенный тендер с трубами диаметром 44 см и вместимостью 5 человек.',
      sw340: 'Флагманский Swiftlitee на 6 человек всего за 53 kg.',
      vr260: 'Самый компактный Versa с двухпалубным комфортом и трубами высокой плавучести длиной 44 см.',
      vr290: 'Роскошный тендер с двумя палубами и трубами длиной 44 см.',
      vr310: 'Milestone Versa с двойной консолью и вместимостью 5 человек.',
      vr340: 'Основной тендер с превосходной пространственной вместимостью и палубой, совместимой с консолью.',
      vr360: 'Высокопроизводительный тендер класса люкс, входящий в класс 30 HP.',
      vr380: 'Роскошный тендер среднего и большого размера с тремя вариантами консолей для яхт и катамаранов.',
      vr400: 'Флагманский кроссовер с корпусом deep V 20° и HP 50° для среднеразмерного консольного крейсера.',
      vr420: 'Роскошный консольный круизер среднего и большого размера с полезной нагрузкой 60 HP и 800 kg.',
      vr460: 'Самый большой флагман Versa с 70 HP, полезной нагрузкой 920 kg и усиленным корпусом 4mm.',
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
      'airdeck-360': 'AirDeck 360',
      'heavy-duty-raft-commercial': 'Commercieel vlot voor zwaar gebruik',
      'high-speed-catamaran': 'Snelle racekatamaran (AQHB)',
      'inflatable-catamaran-kayak': 'Opblaasbare kajak-katamaran',
      kaboat: 'KaBoat kajak-katamaran (ZB-serie)',
      'kayak-full-dropstitch': 'Hoogwaardige kajak met volledig drop-stitch',
      'kayak-hybrid': 'Hybride kajak met drop-stitch',
      'life-vest-classic': 'Reddingsvest Classic',
      'life-vest-pro': 'Reddingsvest Pro',
      'oars-pump-set': 'Roeispaan- en pompset',
      'premium-dropstitch-seat': 'Premium drop-stitch zitting',
      'rib-250': 'RIB250',
      'rib-270': 'RIB270',
      'rib-300': 'RIB300',
      'rib-330': 'RIB 330',
      'rib-330a': 'RIB330A',
      'rib-330b': 'RIB330B',
      'rib-330c': 'RIB330C',
      'rib-360a': 'RIB360A — Veelzijdige 3,6m RIB voor gezin en visserij',
      'rib-360b': 'RIB360B — Premium 3,6m toer-RIB met kajuit en console',
      'rib-390a': 'RIB390A — Sportieve 3,9m RIB met extra grote 47cm tubes',
      'rib-390al': 'RIB390AL — Reddings-RIB met 4 kamers, console en premium opties',
      'rib-390b': 'RIB390B — Robuuste 3,9m RIB met 40L brandstoftank en complete kajuiten',
      'rib-390bl': 'RIB390BL — Topmodel 3,9m RIB met rollbar, ligdek en 4 kamers',
      'rib-430a': 'RIB430A — Lichte 4,3m RIB met open dek voor tender en visserij',
      'rib-430b': 'RIB430B — 4,3m RIB met middenconsole, 4 luchtkamers en bilgepomp',
      'rib-430c': 'RIB430C — Expeditie-RIB van 4,3m met rollbar, windscherm en 50L tank',
      'rib-450-patrol': 'RIB 450 Patrol',
      'rib-480a': 'RIB480A — Lichte 4,8m RIB met open dek, 5 luchtkamers en 60 HP',
      'rib-480b': 'RIB480B — 4,8m RIB met middenconsole, 60L brandstoftank en targa-boog',
      'rib-480c': 'RIB480C — 4,8m RIB met console met windscherm, schakelpaneel met 4 schakelaars en hekkajuiten',
      'rib-480d': 'RIB480D — Premium 4,8m RIB met ligdek, zwemtrap en 60L brandstoftank',
      'rib-480w': 'RIB480W — 4,8m RIB met extra grote breedte van 2,35 m en middenconsole',
      'rib-500': 'RIB500 — 5,0m offshore-RIB met 2,10 m breedte, 52cm tubes en 60 HP',
      'rib-520a': 'RIB520A — Lichte 5,2m RIB met open dek voor maatwerk',
      'rib-520b': 'RIB520B — Brede 5,2m RIB met middenconsole voor patrouille en charter',
      'rib-520c': 'RIB520C — Brede 5,2m recreatie-RIB met middenconsole en ligdek',
      'rib-520e': 'RIB520E — Robuuste 5,2m RIB met 115 HP en roestvrije rollbar',
      'rib-520w': 'RIB520W — Breedste 5,2m RIB met 2,35 m breedte voor maximale stabiliteit',
      'rib-550a': 'RIB550A — Lichte 5,5m RIB voor patrouille en visserij met 90 HP',
      'rib-550b': 'RIB550B — Volledig uitgeruste 5,5m RIB met middenconsole en 100L tank',
      'rib-580a': 'RIB580A — Offshore-RIB van 5,8m met middenconsole, 115 HP en 90L tank',
      'rib-580b': 'RIB580B — 5,8m RIB voor ruige zee met extra grote 58cm tubes',
      'rib-600': 'RIB600 — Geavanceerde 6,0m RIB met 2,50 m breedte en 6 luchtkamers',
      'rib-680a': 'RIB680A — Grote 6,6m RIB met 200 HP, 7 kamers en livewell',
      'rib-680b': 'RIB680B — Passagiers-RIB van 6,8m met 200 HP en skibar',
      'rib-700': 'RIB700',
      'rib-760': 'RIB760',
      'sib-aluminum-floor': 'Opblaasbare sportboot (aluminium vloer)',
      'sib-dropstitch-floor': 'Opblaasbare sportboot (drop-stitch vloer)',
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
      'tactical-raft': 'Tactisch expeditievlot',
      'whitewater-raft': 'Wildwatervlot van de nieuwe generatie (AQDRB)',
      'zb-mt350': 'AQMT-11\'6"',

      ap330: 'Apex Performance 330 (AP330)',
      ap360: 'Apex Performance 360 (AP360)',
      ap390: 'Apex Performance 390 (AP390)',
      ap420: 'Apex Performance 420 (AP420)',
      ap460: 'Apex Performance 460 (AP460)',
      ap520: 'Apex Performance 520 (AP520)',
      ap560: 'Apex Performance 560 (AP560)',
      ap660: 'Apex Performance 660 (AP660)',
      ap700: 'Apex Performance 700 (AP700)',
      ap760: 'Apex Performance 760 (AP760)',
      ap800: 'Apex Performance 800 (AP800)',
      ap900: 'Apex Performance 900 (AP900)',
      df420: 'Defender 420 (DF420)',
      df460: 'Defender 460 (DF460)',
      df500: 'Defender 500 (DF500)',
      df540: 'Defender 540 (DF540)',
      'df540-coaster': 'Defender 540 Coaster (DF540 Coaster)',
      df600: 'Defender 600 (DF600)',
      df700: 'Defender 700 (DF700)',
      df760: 'Defender 760 (DF760)',
      df860: 'Defender 860 (DF860)',
      ex7: 'Explorer 7 (EX7)',
      ex9: 'Explorer 9 (EX9)',
      sw240: 'Swiftlitee 240 (SW240)',
      sw260: 'Swiftlitee 260 (SW260)',
      sw290: 'Swiftlitee 290 (SW290)',
      sw310: 'Swiftlitee 310 (SW310)',
      sw340: 'Swiftlitee 340 (SW340)',
      vr260: 'Versa 260 (VR260)',
      vr290: 'Versa 290 (VR290)',
      vr310: 'Versa 310 (VR310)',
      vr340: 'Versa 340 (VR340)',
      vr360: 'Versa 360 (VR360)',
      vr380: 'Versa 380 (VR380)',
      vr400: 'Versa 400 (VR400)',
      vr420: 'Versa 420 (VR420)',
      vr460: 'Versa 460 (VR460)',
    },
    summaries: {
      'airdeck-360': 'Ruime 3,6m opblaasbare boot met versterkt AirDeck-vloer — ideaal voor gezinsuitjes en visserij.',
      'heavy-duty-raft-commercial':
        'Commercieel opblaasbaar vlot gebouwd voor zwaar dagelijks gebruik in het toerisme, met versterkte vloeren en industrieel textiel.',
      'high-speed-catamaran':
        'Opblaasbare snelle katamaran met dubbele romp voor uitzonderlijke stabiliteit, snelheid en wendbaarheid.',
      'inflatable-catamaran-kayak':
        'Opblaasbare kajak-katamaran voor beginners met uitzonderlijke stabiliteit voor starters, visserij en recreatief varen.',
      kaboat:
        'Hybride kajak-katamaran die verandert van een stabiel vissersplatform met twee rompen in een gestroomlijnde toerkajak met één romp.',
      'kayak-full-dropstitch':
        'Hoogwaardige opblaasbare kajak met volledig drop-stitch romp voor de stijfheid van een harde romp en nauwkeurige koersstabiliteit.',
      'kayak-hybrid':
        'Veelzijdige opblaasbare kajak met gedeeltelijk drop-stitch vloer voor balans tussen stijfheid, draagbaarheid en prijs.',
      'life-vest-classic': 'CE-gecertificeerd universeel zwemvest voor recreatieve watersport.',
      'life-vest-pro': 'Automatisch opblaasbaar reddingsvest volgens SOLAS voor offshore- en reddingsoperaties.',
      'oars-pump-set':
        'Een paar aluminium roeispanen van 1,6m en een krachtige 5L voetpomp. Geschikt voor alle opblaasbare boten uit de serie.',
      'premium-dropstitch-seat':
        'Opblaasbare hogedruk drop-stitch zitting voor superieur comfort en steun tijdens lange dagen op het water.',
      'rib-250':
        'Compacte 2,5m RIB met lichte aluminium romp — ideaal als yacht tender, visboot of zeewaardige boot voor maximaal 3 personen.',
      'rib-270':
        'Midsize 2,7m RIB met 162 cm breedte en 10 HP — stabiel, draagbaar en perfect voor zeevisserij, yacht tender en kustvaart.',
      'rib-300':
        'Veelzijdige 3,0m RIB met 20 HP, diep-V romp en zitplaatsen voor 4 — favoriet bij gezinnen voor zeereizen en kustavonturen.',
      'rib-330':
        'Bestverkochte 3,3m RIB met aluminium romp — met davits hijsbare yacht tender en gezinsdagboot voor maximaal 5 personen.',
      'rib-330a':
        'Lichte 3,3m RIB met polyester romp, 80 kg gewicht en 20 HP — vlot, betaalbaar en eenvoudig te traileren.',
      'rib-330b':
        'Comfortgerichte 3,3m RIB met voorplecht-matras, ankerbak en 20 HP — een verfijnde dagboot voor 4 personen.',
      'rib-330c':
        'Premium 3,3m RIB met voor- en hekkajuit, middenconsole en 20 HP — de meest complete 3,3m uitvoering.',
      'rib-360a':
        'Lichte 3,6m RIB met polyester romp, 1,80 m breedte, 120 kg eigen gewicht en 650 kg laadvermogen. Ideaal voor kustvisserij, gezinsuitjes en haventransporten met motoren tot 25 HP.',
      'rib-360b':
        'Goed uitgeruste 3,6m RIB met polyester romp, 1,80 m breedte, 100 kg eigen gewicht en 650 kg laadvermogen. Uitgerust met voor- en hekkajuit, middenconsole en bilgepomp voor kusttochten en familiecruises.',
      'rib-390a':
        'Lichte 3,9m RIB met polyester romp, 1,85 m breedte, 100 kg eigen gewicht en 47cm tubes. Goedgekeurd voor 30 HP-buitenboordmotoren met 650 kg laadvermogen voor 5 personen. Ideaal voor sport, visserij en kustvaart.',
      'rib-390al':
        'Premium 3,9m RIB met polyester romp, 4 onafhankelijke luchtkamers, 1,85 m breedte, 120 kg eigen gewicht en 650 kg laadvermogen. Inclusief middenconsole, zitbank en luxueuze vloeropties. Goedgekeurd voor 30 HP-buitenboordmotoren.',
      'rib-390b':
        'Robuuste 3,9m RIB met polyester romp, 1,85 m breedte, 130 kg eigen gewicht en 47cm Hypalon tubes. Met voor- en hekkajuit, middenconsole, bilgepomp en ingebouwde 40L brandstoftank. Goedgekeurd voor 30 HP-buitenboordmotoren met 650 kg laadvermogen.',
      'rib-390bl':
        'Volledig uitgeruste 3,9m RIB met polyester romp, 4 luchtkamers, 1,78 m breedte, 110 kg eigen gewicht en 650 kg laadvermogen. Middenconsole met besturing, rollbar met verlichting, 25L brandstoftank, ligdek en C-vormige tubetrap. Goedgekeurd voor 30 HP-buitenboordmotoren.',
      'rib-430a':
        'Lichte 4,3m polyester RIB met 2,00 m breedte, 3 luchtkamers, 170 kg eigen gewicht en 640 kg maximale belasting. Ontwikkeld voor kustbevoorrading, recreatieve visserij en licht commercieel gebruik.',
      'rib-430b':
        '4,3m polyester RIB met middenconsole, 2,00 m breedte, 4 luchtkamers, 200 kg eigen gewicht en 640 kg maximale belasting. Uitgerust met bilgepomp, heklicht en skihandgrepen voor patrouille, visserij en watersport.',
      'rib-430c':
        'Volledig uitgeruste 4,3m polyester RIB met 1,96 m breedte, 48cm tubes, 4 luchtkamers, 200 kg eigen gewicht en 640 kg maximale belasting. Middenconsole met windscherm, rollbar met verlichting en ingebouwde 50L brandstoftank.',
      'rib-450-patrol':
        '4,5m patrouille-RIB met aluminium romp. Zware constructie, geschikt voor commerciële gebruikers.',
      'rib-480a':
        'Lichte 4,8m polyester RIB met 2,00 m breedte, 5 luchtkamers, 183 kg eigen gewicht en 680 kg maximale belasting. Ontwikkeld voor kusttransport, offshore-visserij en duikoperaties met max. motorvermogen van 60 HP.',
      'rib-480b':
        '4,8m polyester RIB met middenconsole, 2,00 m breedte, 5 luchtkamers, 260 kg eigen gewicht en 680 kg maximale belasting. Uitgerust met bilgepomp, ingebouwde 60L brandstoftank en targa-boog met navigatieverlichting.',
      'rib-480c':
        'Volledig uitgeruste 4,8m polyester RIB met 2,00 m breedte, 5 luchtkamers, 280 kg eigen gewicht en 680 kg maximale belasting. Middenconsole met geïntegreerd windscherm en schakelpaneel met 4 schakelaars, hekkajuitbanken en 60 HP.',
      'rib-480d':
        'Premium 4,8m polyester RIB met 2,00 m breedte, 5 luchtkamers, 280 kg eigen gewicht en 680 kg maximale belasting. Middenconsole, ingebouwde 60L brandstoftank, targa-boog, roestvrije hektrap en ligkussens voor gezins- en chartergebruik.',
      'rib-480w':
        'Brede 4,8m polyester RIB met 2,35 m breedte, 5 luchtkamers, 280 kg eigen gewicht en 680 kg maximale belasting. Middenconsole met zijbank, 60L brandstoftank en targa-boog bieden uitzonderlijke stabiliteit en dekruimte voor charter en duiken.',
      'rib-500':
        '5,0m offshore polyester RIB met 2,10 m breedte, 52cm tubes, 5 luchtkamers, 314 kg eigen gewicht en 686 kg maximale belasting. Middenconsole, 60L brandstoftank en targa-boog voor expeditieondersteuning, offshore-visserij en commercieel transport.',
      'rib-520a':
        'Lichte 5,2m RIB met open dek (RIB520A) — 200 kg romp, capaciteit voor 8 personen, max. 85 HP. Ideaal voor maatwerk, offshore-visserij en duikondersteuning.',
      'rib-520b':
        'Brede 5,2m RIB met middenconsole (RIB520B) — 2,28 m breedte, 400 kg romp, 80L brandstoftank, capaciteit voor 8 personen. Gebouwd voor kustpatrouille, offshore-visserij en passagierscharter.',
      'rib-520c':
        'Brede 5,2m recreatie-RIB (RIB520C) — 2,28 m breedte, 360 kg romp, middenconsole, ligkussens, targa-boog met verlichting. Ideaal voor watersport, familiecruises en charter.',
      'rib-520e':
        'Robuuste 5,2m RIB (RIB520E) — 450 kg romp, max. 115 HP, 80L brandstoftank met peilglas, roestvrije rollbar, middenconsole. Gebouwd voor serieuze offshore-visserij en expeditieondersteuning.',
      'rib-520w':
        'Breedste 5,2m RIB (RIB520W) — 2,35 m breedte, 230 kg romp, open indeling, capaciteit voor 8 personen, max. 85 HP. Uitzonderlijke stabiliteit voor duikoperaties, begeleide visserij en passagierstransport.',
      'rib-550a':
        'Lichte 5,5m RIB (RIB550A) — 240 kg romp, 2,30 m breedte, 60L brandstoftank, capaciteit voor 7 personen, max. 90 HP. Speciaal gebouwd voor kustpatrouille, transport en serieuze visserij.',
      'rib-550b':
        'Volledig uitgeruste 5,5m RIB met middenconsole (RIB550B) — 450 kg romp, 2,30 m breedte, 100L brandstoftank, rollbar, ligdek. Gebouwd voor lange offshore-expedities en zwaar transport.',
      'rib-580a':
        'Offshore-RIB van 5,8m met middenconsole (RIB580A) — 450 kg romp, 2,38 m breedte, 90L brandstoftank, targa-boog, capaciteit voor 8 personen, max. 115 HP. Gebouwd voor expeditietransport en diepzeevisserij.',
      'rib-580b':
        '5,8m RIB voor ruige zee (RIB580B) — 450 kg romp, extra grote 58cm tubes, 2,38 m breedte, 90L brandstoftank, capaciteit voor 8 personen, max. 115 HP. Uitzonderlijk drijfvermogen en stabiliteit in veeleisende offshore-omstandigheden.',
      'rib-600':
        'Geavanceerde 6,0m RIB (RIB600) — 500 kg romp, 2,50 m breedte, 6 luchtkamers, 120L brandstoftank, rollbar, capaciteit voor 8 personen, max. 115 HP. De brug tussen middelgrote en grote offshore-RIBs.',
      'rib-680a':
        'Grote 6,6m RIB (RIB680A) — 500 kg romp, 2,52 m breedte, 7 luchtkamers, 150L brandstoftank, livewell, capaciteit voor 10 personen, max. 200 HP. Gebouwd voor big game-zeevisserij, commercieel charter en duikondersteuning.',
      'rib-680b':
        'Passagiers-RIB van 6,8m (RIB680B) — 500 kg romp, 2,52 m breedte, 7 luchtkamers, 100L brandstoftank, skibar, capaciteit voor 10 personen, max. 200 HP. Ontwikkeld voor commercieel passagierstransport, duikondersteuning en expeditie-sleepwerk.',
      'rib-700': 'Hoogwaardige RIB met harde romp (RIB700) met 710 cm lengte voor transport en visserij.',
      'rib-760': 'Hoogwaardige RIB met harde romp (RIB760) met 760 cm lengte voor transport en visserij.',
      'sib-aluminum-floor':
        'Veelzijdige opblaasbare sportboot met stijve aluminium vloer voor uitstekende prestaties en levensduur.',
      'sib-dropstitch-floor':
        'Lichte opblaasbare sportboot met hogedruk drop-stitch vloer voor superieure stijfheid en draagbaarheid.',
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
      'tactical-raft':
        'Opblaasbaar vlot in militaire specificatie, gebouwd voor tactische operaties, zoek- en reddingsacties en extreem expeditiegebruik.',
      'whitewater-raft':
        'Robuust wildwatervlot met zelflozend bodem, versterkte constructie en snelle opbouwfuncties voor professioneel rivierpaddelen.',
      'zb-mt350':
        'AQMT-11\'6" — 11,5ft polyester RIB voor kustpatrouille, commercieel transport en expeditieondersteuning.',

      ap330: 'Instapmodel luxe console RIB tender in de serie Apex Performance.',
      ap360: 'Kleine tot middelgrote luxe middenconsole RIB tender met 40 HP capaciteit.',
      ap390: 'Middelgrote luxe console RIB die in de 50 HP klasse stapt.',
      ap420: 'De perfecte eerste gezinsdagboot met een capaciteit van 70 HP en een brandstoftank van 55L.',
      ap460: 'Vlaggenschip crossover-model in de 4-meterklasse met ergonomische indeling en bow locker.',
      ap520: '5 meter klasse luxe RIB met 24° offshore deep V romp en 105L brandstoftank.',
      ap560: 'Kernsporten voor lange afstanden RIB met 115 HP, 105L brandstof en een capaciteit voor 12 personen.',
      ap660: 'CE Category B offshore luxe RIB met 26° deep V en 200 HP.',
      ap700: '7 meter luxe offshore RIB met 250 HP en 280L brandstof.',
      ap760: 'Luxe 7,6 meter offshore vlaggenschip RIB met 300 HP en 280L brandstof.',
      ap800: 'Vlaggenschip voor offshore-cruises met 350 HP, ondersteuning voor twee motoren, 300L brandstoftank.',
      ap900: 'Het ultieme vlaggenschip van 9,12 m, RIB, met 600 HP dubbele motoren en 380L brandstof.',
      df420: 'Instapmodel commerciële/zware RIB voor patrouille- en nutsbedrijven.',
      df460: 'Nutsvoorziening van de klasse 4 meter RIB balanceert manoeuvreerbaarheid met laadvermogen.',
      df500: 'Commercieel kernbedrijf RIB met 24° offshore deep V romp en 90L geïntegreerde brandstoftank.',
      df540: 'Middelgroot offshore-werkpaard voor patrouille-, SAR- en commerciële activiteiten.',
      'df540-coaster': 'Coaster Edition-patrouille RIB met speciaal modulair werkdek.',
      df600: '6 meter lange offshore patrouille RIB met CE Category B certificering en 140L brandstof.',
      df700: 'Commercieel SAR werkpaard van 7 meter met ultragrote 285L brandstoftank.',
      df760: 'Offshore SAR en zware interceptor met extra grote buizen van 60 cm en 300 HP.',
      df860: 'Ultieme vlaggenschip-interceptor van 8,6 meter met 500 HP dubbele motoren.',
      ex7: 'Crossoverboot van 7 meter met glasvezelromp en verhoogde slanke buizen.',
      ex9: 'Premium crossover-vlaggenschip van 9 meter met cabine, kop, wetbar en 450L brandstof.',
      sw240: 'Ultra-lightweight 2.4m aluminum tender at just 33 kg — portable by one person.',
      sw260: 'Gouden tender op 35 kg — de perfecte balans tussen capaciteit en draagbaarheid.',
      sw290: 'Middelgrote tender met verbeterde 15° deadrise voor betere prestaties.',
      sw310: 'Uitgebreide tender met buizen van 44 cm en een capaciteit voor 5 personen.',
      sw340: 'Vlaggenschip Swiftlitee met een capaciteit van 6 personen voor slechts 53 kg.',
      vr260: 'Meest compacte Versa met dubbeldekscomfort en buizen met een hoog drijfvermogen van 44 cm.',
      vr290: 'Sweet-spot luxe tender met dubbeldeks en 44cm buizen.',
      vr310: 'Milestone Versa met console-compatibel dubbeldek en capaciteit voor 5 personen.',
      vr340: 'Primaire tender met uitstekende ruimtelijke capaciteit en console-compatibel dek.',
      vr360: 'Hoogwaardige luxe tender die in de klasse 30 HP stapt.',
      vr380: 'Middelgrote tot grote luxe tender met drie consoleopties voor jachten en catamarans.',
      vr400: 'Crossover-vlaggenschip met 20° deep V romp en 50 HP voor middelgrote consolecruisers.',
      vr420: 'Middelgrote tot grote luxe consolecruiser met een laadvermogen van 60 HP en 800 kg.',
      vr460: 'Grootste Versa vlaggenschip met 70 HP, 920 kg laadvermogen en 4mm versterkte romp.',
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
      'airdeck-360': 'AirDeck 360',
      'heavy-duty-raft-commercial': 'Kaupallinen lautta raskaaseen käyttöön',
      'high-speed-catamaran': 'Suurnopeuksinen kilpailukatamaraani (AQHB)',
      'inflatable-catamaran-kayak': 'Ilmalla täytettävä kajakkikatamaraani',
      kaboat: 'KaBoat-kajakkikatamaraani (ZB-sarja)',
      'kayak-full-dropstitch': 'Suorituskykyinen kajakki täydellä drop-stitch-rungolla',
      'kayak-hybrid': 'Hybridikajakki drop-stitch-rakenteella',
      'life-vest-classic': 'Pelastusliivi Classic',
      'life-vest-pro': 'Pelastusliivi Pro',
      'oars-pump-set': 'Airo- ja pumppusarja',
      'premium-dropstitch-seat': 'Premium-drop-stitch-istuin',
      'rib-250': 'RIB250',
      'rib-270': 'RIB270',
      'rib-300': 'RIB300',
      'rib-330': 'RIB 330',
      'rib-330a': 'RIB330A',
      'rib-330b': 'RIB330B',
      'rib-330c': 'RIB330C',
      'rib-360a': 'RIB360A — Monipuolinen 3,6 m RIB perheelle ja kalastukseen',
      'rib-360b': 'RIB360B — Premium-tason 3,6 m retki-RIB hytillä ja konsolilla',
      'rib-390a': 'RIB390A — Sportainen 3,9 m RIB suurilla 47 cm putkilla',
      'rib-390al': 'RIB390AL — Pelastus-RIB 4 kammiolla, konsolilla ja premium-valinnoilla',
      'rib-390b': 'RIB390B — Vankka 3,9 m RIB 40 l polttoainetankilla ja täydellisillä hyteillä',
      'rib-390bl': 'RIB390BL — Lippulaiva-RIB 3,9 m turvakaarella, aurinkokannella ja 4 kammiolla',
      'rib-430a': 'RIB430A — Kevyt 4,3 m RIB avoimella kannella tender- ja kalastuskäyttöön',
      'rib-430b': 'RIB430B — 4,3 m RIB keskikonsolilla, 4 ilmakammiolla ja bilgepumpulla',
      'rib-430c': 'RIB430C — Retki-RIB 4,3 m turvakaarella, tuulilasilla ja 50 l tankilla',
      'rib-450-patrol': 'RIB 450 Patrol',
      'rib-480a': 'RIB480A — Kevyt 4,8 m RIB avoimella kannella ja 5 ilmakammiolla, max. 60 HP',
      'rib-480b': 'RIB480B — 4,8 m RIB keskikonsolilla, 60 l polttoainetankilla ja targakaarilla',
      'rib-480c': 'RIB480C — 4,8 m RIB tuulilasikonsolilla, 4 kytkimen paneelilla ja perähyteillä',
      'rib-480d': 'RIB480D — Premium-tason 4,8 m RIB aurinkokannella, uimatrellerillä ja 60 l tankilla',
      'rib-480w': 'RIB480W — 4,8 m RIB suurella 2,35 m leveydellä ja keskikonsolilla',
      'rib-500': 'RIB500 — 5,0 m avomeri-RIB: 2,10 m leveys, 52 cm putket ja 60 HP',
      'rib-520a': 'RIB520A — Kevyt 5,2 m RIB avoimella kannella räätälöinteihin',
      'rib-520b': 'RIB520B — Leveä 5,2 m RIB keskikonsolilla partio- ja charterkäyttöön',
      'rib-520c': 'RIB520C — Leveä 5,2 m vapaa-ajan RIB keskikonsolilla ja aurinkokannella',
      'rib-520e': 'RIB520E — Vankka 5,2 m RIB: 115 HP ja ruostumaton turvakaari',
      'rib-520w': 'RIB520W — Levein 5,2 m RIB 2,35 m leveydellä maksimaaliseen vakauteen',
      'rib-550a': 'RIB550A — Kevyt 5,5 m RIB partio- ja kalastuskäyttöön, 90 HP',
      'rib-550b': 'RIB550B — Täysvarusteltu 5,5 m RIB keskikonsolilla ja 100 l tankilla',
      'rib-580a': 'RIB580A — 5,8 m avomeri-RIB keskikonsolilla, 115 HP ja 90 l tankilla',
      'rib-580b': 'RIB580B — 5,8 m RIB raskaaseen mereen suurilla 58 cm putkilla',
      'rib-600': 'RIB600 — Kehittynyt 6,0 m RIB: 2,50 m leveys ja 6 ilmakammiota',
      'rib-680a': 'RIB680A — Suuri 6,6 m RIB: 200 HP, 7 kammiota ja livewell',
      'rib-680b': 'RIB680B — Täysikokoinen 6,8 m matkustaja-RIB 200 HP:lla ja vesihiihtotangolla',
      'rib-700': 'RIB700',
      'rib-760': 'RIB760',
      'sib-aluminum-floor': 'Ilmalla täytettävä urheiluvene (alumiinilattia)',
      'sib-dropstitch-floor': 'Ilmalla täytettävä urheiluvene (drop-stitch-lattia)',
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
      'tactical-raft': 'Taktinen retkilautta',
      'whitewater-raft': 'Uuden sukupolven koskilautta (AQDRB)',
      'zb-mt350': 'AQMT-11\'6"',

      ap330: 'Apex Performance 330 (AP330)',
      ap360: 'Apex Performance 360 (AP360)',
      ap390: 'Apex Performance 390 (AP390)',
      ap420: 'Apex Performance 420 (AP420)',
      ap460: 'Apex Performance 460 (AP460)',
      ap520: 'Apex Performance 520 (AP520)',
      ap560: 'Apex Performance 560 (AP560)',
      ap660: 'Apex Performance 660 (AP660)',
      ap700: 'Apex Performance 700 (AP700)',
      ap760: 'Apex Performance 760 (AP760)',
      ap800: 'Apex Performance 800 (AP800)',
      ap900: 'Apex Performance 900 (AP900)',
      df420: 'Defender 420 (DF420)',
      df460: 'Defender 460 (DF460)',
      df500: 'Defender 500 (DF500)',
      df540: 'Defender 540 (DF540)',
      'df540-coaster': 'Defender 540 Coaster (DF540 Coaster)',
      df600: 'Defender 600 (DF600)',
      df700: 'Defender 700 (DF700)',
      df760: 'Defender 760 (DF760)',
      df860: 'Defender 860 (DF860)',
      ex7: 'Explorer 7 (EX7)',
      ex9: 'Explorer 9 (EX9)',
      sw240: 'Swiftlitee 240 (SW240)',
      sw260: 'Swiftlitee 260 (SW260)',
      sw290: 'Swiftlitee 290 (SW290)',
      sw310: 'Swiftlitee 310 (SW310)',
      sw340: 'Swiftlitee 340 (SW340)',
      vr260: 'Versa 260 (VR260)',
      vr290: 'Versa 290 (VR290)',
      vr310: 'Versa 310 (VR310)',
      vr340: 'Versa 340 (VR340)',
      vr360: 'Versa 360 (VR360)',
      vr380: 'Versa 380 (VR380)',
      vr400: 'Versa 400 (VR400)',
      vr420: 'Versa 420 (VR420)',
      vr460: 'Versa 460 (VR460)',
    },
    summaries: {
      'airdeck-360':
        'Tilava 3,6 m ilmalla täytettävä vene vahvistetulla AirDeck-lattialla — ihanteellinen perheretkille ja kalastukseen.',
      'heavy-duty-raft-commercial':
        'Kaupallinen ilmalautta, joka on rakennettu kestämään raskasta päivittäistä käyttöä matkailuliiketoiminnassa — vahvistetuilla lattioilla ja teollisuustekstiileillä.',
      'high-speed-catamaran':
        'Ilmalla täytettävä suurnopeuksinen katamaraani kaksoisrungolla poikkeuksellisen vakauden, nopeuden ja ketteryyden takaamiseksi.',
      'inflatable-catamaran-kayak':
        'Aloittelijatason ilmalla täytettävä kajakkikatamaraani poikkeuksellisella vakaudella aloittelijoille, kalastukseen ja vapaa-ajan melontaan.',
      kaboat:
        'Kajakin ja katamaraanin hybridi, joka muuntuu vakaasta kaksirunkoisesta kalastusalustasta virtaviivaksi yksirunkoiseksi retkikajakiksi.',
      'kayak-full-dropstitch':
        'Suorituskykyinen ilmalla täytettävä kajakki täydellä drop-stitch-rungolla — kovaa runkoa vastaava jäykkyys ja tarkka kurssipito.',
      'kayak-hybrid':
        'Monipuolinen ilmalla täytettävä kajakki osittaisella drop-stitch-lattialla — tasapaino jäykkyyden, kannettavuuden ja hinnan välillä.',
      'life-vest-classic': 'CE-sertifioitu yleinen pelastusliivi vapaa-ajan vesilajeihin.',
      'life-vest-pro':
        'SOLAS-standardin mukainen automaattisesti täyttyvä pelastusliivi avomeri- ja pelastusoperaatioihin.',
      'oars-pump-set':
        'Pari 1,6 m alumiiniairoja ja tehokas 5 l jalkapumppu. Sopii kaikkiin sarjan ilmalla täytettäviin veneisiin.',
      'premium-dropstitch-seat':
        'Ilmalla täytettävä korkeapaineinen drop-stitch-istuin ylivoimaiseen mukavuuteen ja tukeen pitkinä päivinä vesillä.',
      'rib-250':
        'Kompakti 2,5 m RIB kevyellä alumiinirungolla — ihanteellinen venetenderi, kalastusvene tai merikelpoinen vene 3 hengelle.',
      'rib-270':
        'Keskikokoinen 2,7 m RIB 162 cm leveydellä ja 10 HP:lla — vakaa, kannettava ja täydellinen merikalastukseen, tenderikäyttöön ja rannikkopurjehduksiin.',
      'rib-300':
        'Monipuolinen 3,0 m RIB 20 HP:lla, syvä-V-rungolla ja istuimet 4 hengelle — perheiden suosikki meriretkille ja rannikkoseikkailuihin.',
      'rib-330':
        'Myydyin 3,3 m RIB alumiinirungolla — davits-nostettava venetenderi ja perheen päivävene enintään 5 hengelle.',
      'rib-330a':
        'Kevyt 3,3 m RIB lasikuiturungolla, 80 kg painolla ja 20 HP:lla — nopea, edullinen ja helppo kuljettaa trailerissa.',
      'rib-330b':
        'Mukavuuteen keskittyvä 3,3 m RIB keulapatjalla, ankkurilaatikolla ja 20 HP:lla — hienostunut päivävene 4 hengelle.',
      'rib-330c':
        'Premium-tason 3,3 m RIB keula- ja perähytillä, keskikonsolilla ja 20 HP:lla — täydellisimmin varusteltu 3,3 m versio.',
      'rib-360a':
        'Kevyt 3,6 m RIB lasikuiturungolla, 1,80 m leveydellä, 120 kg omalla painolla ja 650 kg kuormituskyvyllä. Ihanteellinen rannikkokalastukseen, perheretkille ja satamakuljetuksiin jopa 25 HP:n moottoreilla.',
      'rib-360b':
        'Hyvin varusteltu 3,6 m RIB lasikuiturungolla, 1,80 m leveydellä, 100 kg omalla painolla ja 650 kg kuormituskyvyllä. Keula- ja perähytti, keskikonsoli ja bilgepumppu rannikkoretkiin ja perheristeilyihin.',
      'rib-390a':
        'Kevyt 3,9 m RIB lasikuiturungolla, 1,85 m leveydellä, 100 kg omalla painolla ja 47 cm putkilla. Hyväksytty 30 HP:n perämoottoreille 650 kg kuormituskyvyllä 5 hengelle. Ihanteellinen urheiluun, kalastukseen ja rannikkopurjehdukseen.',
      'rib-390al':
        'Premium-tason 3,9 m RIB lasikuiturungolla, 4 itsenäisellä ilmakammiolla, 1,85 m leveydellä, 120 kg omalla painolla ja 650 kg kuormituskyvyllä. Sisältää keskikonsolin, istuinlaatikon ja ylelliset lattiavaihtoehdot. Hyväksytty 30 HP:n perämoottoreille.',
      'rib-390b':
        'Vankka 3,9 m RIB lasikuiturungolla, 1,85 m leveydellä, 130 kg omalla painolla ja 47 cm Hypalon-putkilla. Keula- ja perähytti, keskikonsoli, bilgepumppu ja sisäänrakennettu 40 l polttoainetankki. Hyväksytty 30 HP:n perämoottoreille 650 kg kuormituskyvyllä.',
      'rib-390bl':
        'Täysin varusteltu 3,9 m RIB lasikuiturungolla, 4 ilmakammiolla, 1,78 m leveydellä, 110 kg omalla painolla ja 650 kg kuormituskyvyllä. Keskikonsoli ohjauksella, valaistu turvakaari, 25 l polttoainetankki, aurinkokansi ja C-muotoinen putkitikas. Hyväksytty 30 HP:n perämoottoreille.',
      'rib-430a':
        'Kevyt 4,3 m lasikuitu-RIB 2,00 m leveydellä, 3 ilmakammiolla, 170 kg omalla painolla ja 640 kg enimmäiskuormalla. Kehitetty rannikkohuoltoon, vapaa-ajan kalastukseen ja kevyyttä vaativaan kaupalliseen käyttöön.',
      'rib-430b':
        '4,3 m lasikuitu-RIB keskikonsolilla, 2,00 m leveydellä, 4 ilmakammiolla, 200 kg omalla painolla ja 640 kg enimmäiskuormalla. Bilgepumppu, perävalo ja hiihtokahvat partiointiin, kalastukseen ja vesilajeihin.',
      'rib-430c':
        'Täysin varusteltu 4,3 m lasikuitu-RIB 1,96 m leveydellä, 48 cm putkilla, 4 ilmakammiolla, 200 kg omalla painolla ja 640 kg enimmäiskuormalla. Keskikonsoli tuulilasilla, valaistu turvakaari ja sisäänrakennettu 50 l polttoainetankki.',
      'rib-450-patrol': '4,5 m partio-RIB alumiinirungolla. Raskas rakennus kaupallisille käyttäjille.',
      'rib-480a':
        'Kevyt 4,8 m lasikuitu-RIB 2,00 m leveydellä, 5 ilmakammiolla, 183 kg omalla painolla ja 680 kg enimmäiskuormalla. Kehitetty rannikkokuljetuksiin, avomerikalastukseen ja sukellusoperaatioihin, max. moottoriteho 60 HP.',
      'rib-480b':
        '4,8 m lasikuitu-RIB keskikonsolilla, 2,00 m leveydellä, 5 ilmakammiolla, 260 kg omalla painolla ja 680 kg enimmäiskuormalla. Bilgepumppu, sisäänrakennettu 60 l polttoainetankki ja navigointivaloilla varustettu targakaari.',
      'rib-480c':
        'Täysin varusteltu 4,8 m lasikuitu-RIB 2,00 m leveydellä, 5 ilmakammiolla, 280 kg omalla painolla ja 680 kg enimmäiskuormalla. Tuulilasilla ja 4 kytkimen paneelilla varustettu keskikonsoli, perähyttien istuimet ja 60 HP.',
      'rib-480d':
        'Premium-tason 4,8 m lasikuitu-RIB 2,00 m leveydellä, 5 ilmakammiolla, 280 kg omalla painolla ja 680 kg enimmäiskuormalla. Keskikonsoli, sisäänrakennettu 60 l polttoainetankki, targakaari, ruostumaton perätikkas ja aurinkopetit perhe- ja charterkäyttöön.',
      'rib-480w':
        'Leveä 4,8 m lasikuitu-RIB 2,35 m leveydellä, 5 ilmakammiolla, 280 kg omalla painolla ja 680 kg enimmäiskuormalla. Sivuistuimella varustettu keskikonsoli, 60 l polttoainetankki ja targakaari tuovat poikkeuksellisen vakauden ja runsaan kansitilan charter- ja sukelluskäyttöön.',
      'rib-500':
        '5,0 m avomeri-lasikuitu-RIB 2,10 m leveydellä, 52 cm putkilla, 5 ilmakammiolla, 314 kg omalla painolla ja 686 kg enimmäiskuormalla. Keskikonsoli, 60 l polttoainetankki ja targakaari retkitukeen, avomerikalastukseen ja kaupallisiin kuljetuksiin.',
      'rib-520a':
        'Kevyt 5,2 m RIB avoimella kannella (RIB520A) — 200 kg runko, 8 hengen kapasiteetti, max. 85 HP. Ihanteellinen räätälöinteihin, avomerikalastukseen ja sukellustukeen.',
      'rib-520b':
        'Leveä 5,2 m RIB keskikonsolilla (RIB520B) — 2,28 m leveys, 400 kg runko, 80 l polttoainetankki, 8 hengen kapasiteetti. Rakennettu rannikkopartioon, avomerikalastukseen ja matkustajacharteriin.',
      'rib-520c':
        'Leveä 5,2 m vapaa-ajan RIB (RIB520C) — 2,28 m leveys, 360 kg runko, keskikonsoli, aurinkopetit, valaistu targakaari. Ihanteellinen vesilajeihin, perheristeilyihin ja charteriin.',
      'rib-520e':
        'Vankka 5,2 m RIB (RIB520E) — 450 kg runko, max. 115 HP, 80 l polttoainetankki mittarilla, ruostumaton turvakaari, keskikonsoli. Rakennettu vakavaan avomerikalastukseen ja retkitukeen.',
      'rib-520w':
        'Levein 5,2 m RIB (RIB520W) — 2,35 m leveys, 230 kg runko, avoin layout, 8 hengen kapasiteetti, max. 85 HP. Poikkeuksellinen vakaus sukellusoperaatioihin, opastettuun kalastukseen ja matkustajakuljetuksiin.',
      'rib-550a':
        'Kevyt 5,5 m RIB (RIB550A) — 240 kg runko, 2,30 m leveys, 60 l polttoainetankki, 7 hengen kapasiteetti, max. 90 HP. Rakennettu erityisesti rannikkopartioon, kuljetuksiin ja vakavaan kalastukseen.',
      'rib-550b':
        'Täysin varusteltu 5,5 m RIB keskikonsolilla (RIB550B) — 450 kg runko, 2,30 m leveys, 100 l polttoainetankki, turvakaari, aurinkokansi. Rakennettu pitkiin avomeriretkiin ja raskaisiin kuljetuksiin.',
      'rib-580a':
        '5,8 m avomeri-RIB keskikonsolilla (RIB580A) — 450 kg runko, 2,38 m leveys, 90 l polttoainetankki, targakaari, 8 hengen kapasiteetti, max. 115 HP. Rakennettu retkuljetuksiin ja syvämerikalastukseen.',
      'rib-580b':
        '5,8 m RIB raskaaseen mereen (RIB580B) — 450 kg runko, suuret 58 cm putket, 2,38 m leveys, 90 l polttoainetankki, 8 hengen kapasiteetti, max. 115 HP. Poikkeuksellinen kellunta ja vakaus vaativissa avameriolosuhteissa.',
      'rib-600':
        'Kehittynyt 6,0 m RIB (RIB600) — 500 kg runko, 2,50 m leveys, 6 ilmakammiota, 120 l polttoainetankki, turvakaari, 8 hengen kapasiteetti, max. 115 HP. Silta keskisuurten ja suurten avomeri-RIB:ien välillä.',
      'rib-680a':
        'Suuri 6,6 m RIB (RIB680A) — 500 kg runko, 2,52 m leveys, 7 ilmakammiota, 150 l polttoainetankki, livewell, 10 hengen kapasiteetti, max. 200 HP. Rakennettu suurriistan merikalastukseen, kaupalliseen charteriin ja sukellustukeen.',
      'rib-680b':
        'Täysikokoinen 6,8 m matkustaja-RIB (RIB680B) — 500 kg runko, 2,52 m leveys, 7 ilmakammiota, 100 l polttoainetankki, vesihiihtotanko, 10 hengen kapasiteetti, max. 200 HP. Kehitetty kaupallisiin matkustajakuljetuksiin, sukellustukeen ja hinaukseen.',
      'rib-700': 'Suorituskykyinen kovarunkoinen RIB (RIB700) 710 cm pituudella kuljetuksiin ja kalastukseen.',
      'rib-760': 'Suorituskykyinen kovarunkoinen RIB (RIB760) 760 cm pituudella kuljetuksiin ja kalastukseen.',
      'sib-aluminum-floor':
        'Monipuolinen ilmalla täytettävä urheiluvene jäykällä alumiinilattialla erinomaiseen suorituskykyyn ja käyttöikään.',
      'sib-dropstitch-floor':
        'Kevyt ilmalla täytettävä urheiluvene korkeapaineisella drop-stitch-lattialla ylivoimaiseen jäykkyyteen ja kannettavuuteen.',
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
      'tactical-raft':
        'Sotilasluokan ilmalautta, joka on rakennettu taktisiin operaatioihin, etsintä- ja pelastustehtäviin ja äärimmäiseen retkeilyyn.',
      'whitewater-raft':
        'Vankka koskilautta itsestään tyhjenevällä pohjalla, vahvistetuilla saumoilla ja nopeilla käyttöönotto-ominaisuuksilla ammattimaiseen koskimelontaan.',
      'zb-mt350': 'AQMT-11\'6" — 11,5 jalan lasikuitu-RIB rannikkopartioon, kaupallisiin kuljetuksiin ja retkitukeen.',

      ap330: 'Aloitustason luksuskonsoli RIB tarjous sarjassa Apex Performance.',
      ap360: 'Pienen ja keskikokoisen luksuskeskikonsoli RIB tarjous 40 HP kapasiteetilla.',
      ap390: 'Keskikokoinen luksuskonsoli RIB astuu 50 HP -luokkaan.',
      ap420: 'Täydellinen ensimmäinen perhepäivävene 70 HP kapasiteetilla ja 55L polttoainesäiliöllä.',
      ap460: 'Lippulaiva crossover-malli 4 metrin luokassa ergonomisella asettelulla ja bow locker.',
      ap520: '5 metrin luokan luksusta RIB 24° offshore deep V rungolla ja 105L polttoainesäiliöllä.',
      ap560: 'Pitkän matkan ydinurheilulajit RIB, 115 HP, 105L polttoainetta ja 12 hengen kapasiteetti.',
      ap660: 'CE Category B offshore-ylellisyyttä RIB, 26° deep V ja 200 HP.',
      ap700: '7 metrin luksus offshore RIB 250 HP ja 280L polttoaineella.',
      ap760: 'Ylellinen 7,6 metrin offshore-lippulaiva RIB 300 HP ja 280L polttoaineella.',
      ap800: 'Offshore-risteilyn lippulaiva 350 HP, tuen kaksoismoottori, 300L polttoainesäiliö.',
      ap900: 'Lopullinen 9,12 metrin lippulaiva RIB 600 HP -kaksoismoottorilla ja 380L polttoaineella.',
      df420: 'Aloitustason kaupallinen/raskaaseen käyttöön tarkoitettu RIB partio- ja yleishyödyllisiin toimintoihin.',
      df460: '4 metrin luokan apuohjelma RIB tasapainottaa ohjattavuutta hyötykuorman kanssa.',
      df500: 'Kaupallinen ydinlaitos RIB, jossa on 24° offshore deep V runko ja 90L integroitu polttoainesäiliö.',
      df540: 'Keskikokoinen offshore-työhevonen partiointiin, SAR- ja kaupallisiin toimintoihin.',
      'df540-coaster': 'Coaster Edition -partio RIB erillisellä modulaarisella työtasolla.',
      df600: '6 metrin offshore-partio RIB CE Category B -sertifikaatilla ja 140L polttoaineella.',
      df700: '7 metrin kaupallinen SAR työhevonen erittäin suurella 285L polttoainesäiliöllä.',
      df760: 'Offshore SAR ja raskas sieppaaja 60 cm:n erittäin suurilla putkilla ja 300 HP.',
      df860: '8,6 metrin huippuluokan lippulaivahävittäjä 500 HP kaksoismoottorilla.',
      ex7: '7 m crossover-vene lasikuiturunkolla ja korotetuilla ohuilla putkilla.',
      ex9: '9 metrin huippuluokan crossover-lippulaiva ohjaamon, pään, märkäpalkin ja 450L polttoaineen kanssa.',
      sw240: 'Ultrakevyt 2,4 metrin alumiinitarra vain 33 kg – kannettavan yhden henkilön kanssa.',
      sw260: 'Kultaisen kokoinen tarjous 35 kg – täydellinen tasapaino kapasiteetin ja siirrettävyyden välillä.',
      sw290: 'Keskikokoinen tarjous, jossa on päivitetty 15° deadrise parempaa suorituskykyä varten.',
      sw310: 'Laajennettu tarjous 44cm putkilla ja 5 hengen kapasiteetilla.',
      sw340: 'Lippulaiva Swiftlitee, 6 hengen kapasiteetti vain 53 kg.',
      vr260: 'Kompaktein Versa, jossa kaksikerroksinen mukavuus ja 44 cm korkean kelluvuuden putket.',
      vr290: 'Sweet-spot luksustarjous kaksikerroksisella ja 44 cm putkella.',
      vr310: 'Milestone Versa, jossa on konsoliyhteensopiva kaksikerroksinen kapasiteetti ja 5 hengen kapasiteetti.',
      vr340: 'Ensisijainen tarjous, jolla on erinomainen tilakapasiteetti ja konsoliyhteensopiva kansi.',
      vr360: 'Tehokas luksustarra, joka astuu luokkaan 30 HP.',
      vr380: 'Keskikokoinen ja suuri luksustarjous, jossa on kolme konsolivaihtoehtoa huviveneille ja katamaraaneille.',
      vr400: 'Crossoverin lippulaiva, jossa 20° deep V runko ja 50 HP keskikokoiseen konsoliin.',
      vr420: 'Keskikokoinen ja suuri luksuskonsoliristeilijä, 60 HP ja 800 kg hyötykuorma.',
      vr460: 'Suurin Versa lippulaiva, jossa on 70 HP, 920 kg hyötykuorma ja 4mm vahvistettu runko.',
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
      'airdeck-360': 'AirDeck 360',
      'heavy-duty-raft-commercial': 'Tratwa komercyjna do ciężkiej eksploatacji',
      'high-speed-catamaran': 'Szybki katamaran wyścigowy (AQHB)',
      'inflatable-catamaran-kayak': 'Dmuchany kajak-katamaran',
      kaboat: 'Kajak-katamaran KaBoat (seria ZB)',
      'kayak-full-dropstitch': 'Wydajny kajak z pełną konstrukcją drop-stitch',
      'kayak-hybrid': 'Kajak hybrydowy z drop-stitch',
      'life-vest-classic': 'Kamizelka ratunkowa Classic',
      'life-vest-pro': 'Kamizelka ratunkowa Pro',
      'oars-pump-set': 'Zestaw wioseł i pompki',
      'premium-dropstitch-seat': 'Siedzisko premium drop-stitch',
      'rib-250': 'RIB250',
      'rib-270': 'RIB270',
      'rib-300': 'RIB300',
      'rib-330': 'RIB 330',
      'rib-330a': 'RIB330A',
      'rib-330b': 'RIB330B',
      'rib-330c': 'RIB330C',
      'rib-360a': 'RIB360A — Uniwersalna łódź RIB 3,6 m dla rodziny i wędkarstwa',
      'rib-360b': 'RIB360B — Premium łódź turystyczna RIB 3,6 m z kabiną i konsolą',
      'rib-390a': 'RIB390A — Sportowa łódź RIB 3,9 m z powiększonymi balonami 47 cm',
      'rib-390al': 'RIB390AL — Ratownicza łódź RIB z 4 komorami, konsolą i opcjami premium',
      'rib-390b': 'RIB390B — Solidna łódź RIB 3,9 m ze zbiornikiem 40 l i pełnymi kabinami',
      'rib-390bl': 'RIB390BL — Flagowa łódź RIB 3,9 m z barierą ochronną, pokładem słonecznym i 4 komorami',
      'rib-430a': 'RIB430A — Lekka łódź RIB 4,3 m z otwartym pokładem do tendera i wędkarstwa',
      'rib-430b': 'RIB430B — Łódź RIB 4,3 m z konsolą środkową, 4 komorami powietrznymi i pompą zęzową',
      'rib-430c': 'RIB430C — Ekspedycyjna łódź RIB 4,3 m z barierą, szybą wiatrową i zbiornikiem 50 l',
      'rib-450-patrol': 'RIB 450 Patrol',
      'rib-480a': 'RIB480A — Lekka łódź RIB 4,8 m z otwartym pokładem, 5 komorami i 60 HP',
      'rib-480b': 'RIB480B — Łódź RIB 4,8 m z konsolą środkową, zbiornikiem 60 l i łukiem targa',
      'rib-480c': 'RIB480C — Łódź RIB 4,8 m z konsolą z szybą, panelem 4 przełączników i kabinami rufowymi',
      'rib-480d': 'RIB480D — Premium łódź RIB 4,8 m z pokładem słonecznym, drabinką kąpielową i zbiornikiem 60 l',
      'rib-480w': 'RIB480W — Łódź RIB 4,8 m o zwiększonej szerokości 2,35 m z konsolą środkową',
      'rib-500': 'RIB500 — Morska łódź RIB 5,0 m o szerokości 2,10 m, balonach 52 cm i 60 HP',
      'rib-520a': 'RIB520A — Lekka łódź RIB 5,2 m z otwartym pokładem do modyfikacji',
      'rib-520b': 'RIB520B — Szeroka łódź RIB 5,2 m z konsolą środkową do patroli i czarteru',
      'rib-520c': 'RIB520C — Szeroka rekreacyjna łódź RIB 5,2 m z konsolą środkową i pokładem słonecznym',
      'rib-520e': 'RIB520E — Solidna łódź RIB 5,2 m z silnikiem 115 HP i nierdzewną barierą',
      'rib-520w': 'RIB520W — Najszersza łódź RIB 5,2 m o szerokości 2,35 m dla maksymalnej stabilności',
      'rib-550a': 'RIB550A — Lekka łódź RIB 5,5 m do patroli i wędkarstwa z silnikiem 90 HP',
      'rib-550b': 'RIB550B — W pełni wyposażona łódź RIB 5,5 m z konsolą środkową i zbiornikiem 100 l',
      'rib-580a': 'RIB580A — Morska łódź RIB 5,8 m z konsolą środkową, 115 HP i zbiornikiem 90 l',
      'rib-580b': 'RIB580B — Łódź RIB 5,8 m do wzburzonego morza z powiększonymi balonami 58 cm',
      'rib-600': 'RIB600 — Zaawansowana łódź RIB 6,0 m o szerokości 2,50 m i 6 komorach powietrznych',
      'rib-680a': 'RIB680A — Duża łódź RIB 6,6 m z 200 HP, 7 komorami i zbiornikiem na żywą przynętę',
      'rib-680b': 'RIB680B — Pełnowymiarowa łódź pasażerska RIB 6,8 m z 200 HP i skibarem',
      'rib-700': 'RIB700',
      'rib-760': 'RIB760',
      'sib-aluminum-floor': 'Dmuchana łódź sportowa (podłoga aluminiowa)',
      'sib-dropstitch-floor': 'Dmuchana łódź sportowa (podłoga drop-stitch)',
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
      'tactical-raft': 'Taktyczna tratwa ekspedycyjna',
      'whitewater-raft': 'Tratwa spływowa nowej generacji (AQDRB)',
      'zb-mt350': 'AQMT-11\'6"',

      ap330: 'Apex Performance 330 (AP330)',
      ap360: 'Apex Performance 360 (AP360)',
      ap390: 'Apex Performance 390 (AP390)',
      ap420: 'Apex Performance 420 (AP420)',
      ap460: 'Apex Performance 460 (AP460)',
      ap520: 'Apex Performance 520 (AP520)',
      ap560: 'Apex Performance 560 (AP560)',
      ap660: 'Apex Performance 660 (AP660)',
      ap700: 'Apex Performance 700 (AP700)',
      ap760: 'Apex Performance 760 (AP760)',
      ap800: 'Apex Performance 800 (AP800)',
      ap900: 'Apex Performance 900 (AP900)',
      df420: 'Defender 420 (DF420)',
      df460: 'Defender 460 (DF460)',
      df500: 'Defender 500 (DF500)',
      df540: 'Defender 540 (DF540)',
      'df540-coaster': 'Defender 540 Coaster (DF540 Coaster)',
      df600: 'Defender 600 (DF600)',
      df700: 'Defender 700 (DF700)',
      df760: 'Defender 760 (DF760)',
      df860: 'Defender 860 (DF860)',
      ex7: 'Explorer 7 (EX7)',
      ex9: 'Explorer 9 (EX9)',
      sw240: 'Swiftlitee 240 (SW240)',
      sw260: 'Swiftlitee 260 (SW260)',
      sw290: 'Swiftlitee 290 (SW290)',
      sw310: 'Swiftlitee 310 (SW310)',
      sw340: 'Swiftlitee 340 (SW340)',
      vr260: 'Versa 260 (VR260)',
      vr290: 'Versa 290 (VR290)',
      vr310: 'Versa 310 (VR310)',
      vr340: 'Versa 340 (VR340)',
      vr360: 'Versa 360 (VR360)',
      vr380: 'Versa 380 (VR380)',
      vr400: 'Versa 400 (VR400)',
      vr420: 'Versa 420 (VR420)',
      vr460: 'Versa 460 (VR460)',
    },
    summaries: {
      'airdeck-360':
        'Przestronna dmuchana łódź 3,6 m ze wzmocnioną podłogą AirDeck — idealna na rodzinne wyprawy i wędkarstwo.',
      'heavy-duty-raft-commercial':
        'Komercyjna tratwa dmuchana zbudowana do ciężkiej codziennej eksploatacji w branży turystycznej, ze wzmocnionymi dnami i tkaniną przemysłową.',
      'high-speed-catamaran':
        'Dmuchany szybki katamaran z podwójnym kadłubem zapewniający wyjątkową stabilność, prędkość i zwrotność.',
      'inflatable-catamaran-kayak':
        'Dmuchany kajak-katamaran klasy początkującej z wyjątkową stabilnością dla początkujących, wędkarstwa i rekreacyjnego wiosłowania.',
      kaboat:
        'Hybryda kajaka i katamaranu, przekształcająca się ze stabilnej dwukadłubowej platformy wędkarskiej w opływowy jednokadłubowy kajak turystyczny.',
      'kayak-full-dropstitch':
        'Wydajny dmuchany kajak z kadłubem w pełnej konstrukcji drop-stitch: sztywność twardego kadłuba i precyzyjne utrzymanie kursu.',
      'kayak-hybrid':
        'Uniwersalny dmuchany kajak z częściową podłogą drop-stitch — balans między sztywnością, przenośnością i ceną.',
      'life-vest-classic': 'Uniwersalna kamizelka ratunkowa z certyfikatem CE do rekreacyjnych sportów wodnych.',
      'life-vest-pro': 'Automatyczna dmuchana kamizelka ratunkowa wg normy SOLAS do operacji morskich i ratowniczych.',
      'oars-pump-set':
        'Para aluminiowych wioseł 1,6 m i wydajna pompka nożna 5 l. Pasuje do wszystkich dmuchanych łodzi serii.',
      'premium-dropstitch-seat':
        'Dmuchane siedzisko wysokociśnieniowe drop-stitch zapewniające doskonały komfort i podparcie podczas długich dni na wodzie.',
      'rib-250':
        'Kompaktowa łódź RIB 2,5 m z lekkim kadłubem aluminiowym — idealny tender jachtowy, łódź wędkarska lub morska łódź dla maksymalnie 3 osób.',
      'rib-270':
        'Średniej wielkości łódź RIB 2,7 m o szerokości 162 cm i mocy 10 HP — stabilna, przenośna i idealna do morskiego wędkarstwa, tendera i rejsów przybrzeżnych.',
      'rib-300':
        'Uniwersalna łódź RIB 3,0 m z silnikiem 20 HP, kadłubem głębokie V i siedziskami dla 4 osób — rodzinny faworyt na morskie rejsy i przybrzeżne przygody.',
      'rib-330':
        'Bestsellerowa łódź RIB 3,3 m z kadłubem aluminiowym — tender jachtowy podnoszony na davits i rodzinna łódź dzienna dla maksymalnie 5 osób.',
      'rib-330a':
        'Lekka łódź RIB 3,3 m z kadłubem z włókna szklanego, wagą 80 kg i silnikiem 20 HP — szybka, przystępna cenowo i łatwa do przewozu.',
      'rib-330b':
        'Skoncentrowana na komforcie łódź RIB 3,3 m z materacem w fordeku, skrzynią kotwiczną i silnikiem 20 HP — dopracowana łódź dzienna dla 4 osób.',
      'rib-330c':
        'Premium łódź RIB 3,3 m z kabiną dziobową i rufową, konsolą środkową i silnikiem 20 HP — najpełniej wyposażona wersja 3,3 m.',
      'rib-360a':
        'Lekka łódź RIB 3,6 m z kadłubem z włókna szklanego, szerokością 1,80 m, masą własną 120 kg i nośnością 650 kg. Idealna do wędkarstwa przybrzeżnego, rodzinnych wypraw i transportów portowych z silnikami do 25 HP.',
      'rib-360b':
        'Dobrze wyposażona łódź RIB 3,6 m z kadłubem z włókna szklanego, szerokością 1,80 m, masą własną 100 kg i nośnością 650 kg. Wyposażona w kabinę dziobową i rufową, konsolę środkową i pompę zęzową na rejsy przybrzeżne i rodzinne.',
      'rib-390a':
        'Lekka łódź RIB 3,9 m z kadłubem z włókna szklanego, szerokością 1,85 m, masą własną 100 kg i balonami 47 cm. Zatwierdzona dla silników zaburtowych 30 HP przy nośności 650 kg dla 5 osób. Idealna do sportu, wędkarstwa i żeglugi przybrzeżnej.',
      'rib-390al':
        'Premium łódź RIB 3,9 m z kadłubem z włókna szklanego, 4 niezależnymi komorami powietrznymi, szerokością 1,85 m, masą własną 120 kg i nośnością 650 kg. Z konsolą środkową, skrzynią siedziska i luksusowymi opcjami podłóg. Zatwierdzona dla silników 30 HP.',
      'rib-390b':
        'Solidna łódź RIB 3,9 m z kadłubem z włókna szklanego, szerokością 1,85 m, masą własną 130 kg i balonami Hypalon 47 cm. Z kabiną dziobową i rufową, konsolą środkową, pompą zęzową i wbudowanym zbiornikiem 40 l. Zatwierdzona dla silników 30 HP przy nośności 650 kg.',
      'rib-390bl':
        'W pełni wyposażona łódź RIB 3,9 m z kadłubem z włókna szklanego, 4 komorami powietrznymi, szerokością 1,78 m, masą własną 110 kg i nośnością 650 kg. Konsola środkowa ze sterownicą, bariera ochronna z oświetleniem, zbiornik 25 l, pokład słoneczny i drabinka C na balon. Zatwierdzona dla silników 30 HP.',
      'rib-430a':
        'Lekka łódź RIB 4,3 m z włókna szklanego o szerokości 2,00 m, 3 komorach powietrznych, masie własnej 170 kg i maksymalnym obciążeniu 640 kg. Zaprojektowana do zaopatrzenia przybrzeżnego, wędkarstwa rekreacyjnego i lekkiego użytku komercyjnego.',
      'rib-430b':
        'Łódź RIB 4,3 m z włókna szklanego z konsolą środkową, szerokością 2,00 m, 4 komorami powietrznymi, masą własną 200 kg i maksymalnym obciążeniem 640 kg. Wyposażona w pompę zęzową, światło rufowe i uchwyty narciarskie do patroli, wędkarstwa i sportów wodnych.',
      'rib-430c':
        'W pełni wyposażona łódź RIB 4,3 m z włókna szklanego o szerokości 1,96 m, balonach 48 cm, 4 komorach powietrznych, masie własnej 200 kg i maksymalnym obciążeniu 640 kg. Konsola środkowa z szybą wiatrową, bariera z oświetleniem i wbudowany zbiornik 50 l.',
      'rib-450-patrol':
        'Patrolowa łódź RIB 4,5 m z kadłubem aluminiowym. Wzmocniona konstrukcja dla użytkowników komercyjnych.',
      'rib-480a':
        'Lekka łódź RIB 4,8 m z włókna szklanego o szerokości 2,00 m, 5 komorach powietrznych, masie własnej 183 kg i maksymalnym obciążeniu 680 kg. Zaprojektowana do transportu przybrzeżnego, morskiego wędkarstwa i nurkowania z maks. mocą silnika 60 HP.',
      'rib-480b':
        'Łódź RIB 4,8 m z włókna szklanego z konsolą środkową, szerokością 2,00 m, 5 komorami powietrznymi, masą własną 260 kg i maksymalnym obciążeniem 680 kg. Wyposażona w pompę zęzową, wbudowany zbiornik 60 l i łuk targa ze światłami nawigacyjnymi.',
      'rib-480c':
        'W pełni wyposażona łódź RIB 4,8 m z włókna szklanego o szerokości 2,00 m, 5 komorach powietrznych, masie własnej 280 kg i maksymalnym obciążeniu 680 kg. Konsola środkowa z zintegrowaną szybą wiatrową i panelem 4 przełączników, siedziska kabinowe na rufie i silnik 60 HP.',
      'rib-480d':
        'Premium łódź RIB 4,8 m z włókna szklanego o szerokości 2,00 m, 5 komorach powietrznych, masie własnej 280 kg i maksymalnym obciążeniu 680 kg. Konsola środkowa, wbudowany zbiornik 60 l, łuk targa, nierdzewna drabinka rufowa i materace słoneczne do użytku rodzinnego i czarterowego.',
      'rib-480w':
        'Szeroka łódź RIB 4,8 m z włókna szklanego o szerokości 2,35 m, 5 komorach powietrznych, masie własnej 280 kg i maksymalnym obciążeniu 680 kg. Konsola środkowa z siedziskiem bocznym, zbiornik 60 l i łuk targa zapewniają wyjątkową stabilność i przestrzeń pokładową do czarteru i nurkowania.',
      'rib-500':
        'Morska łódź RIB 5,0 m z włókna szklanego o szerokości 2,10 m, balonach 52 cm, 5 komorach powietrznych, masie własnej 314 kg i maksymalnym obciążeniu 686 kg. Konsola środkowa, zbiornik 60 l i łuk targa do wsparcia ekspedycji, morskiego wędkarstwa i transportu komercyjnego.',
      'rib-520a':
        'Lekka łódź RIB 5,2 m z otwartym pokładem (RIB520A) — kadłub 200 kg, pojemność 8 osób, maks. 85 HP. Idealna do modyfikacji, morskiego wędkarstwa i wsparcia nurkowania.',
      'rib-520b':
        'Szeroka łódź RIB 5,2 m z konsolą środkową (RIB520B) — szerokość 2,28 m, kadłub 400 kg, zbiornik 80 l, pojemność 8 osób. Zbudowana do patroli przybrzeżnych, morskiego wędkarstwa i czarteru pasażerskiego.',
      'rib-520c':
        'Szeroka rekreacyjna łódź RIB 5,2 m (RIB520C) — szerokość 2,28 m, kadłub 360 kg, konsola środkowa, materace słoneczne, łuk targa z oświetleniem. Idealna do sportów wodnych, rodzinnych rejsów i czarteru.',
      'rib-520e':
        'Solidna łódź RIB 5,2 m (RIB520E) — kadłub 450 kg, maks. 115 HP, zbiornik 80 l ze wskaźnikiem, nierdzewna bariera ochronna, konsola środkowa. Zbudowana do poważnego morskiego wędkarstwa i wsparcia ekspedycji.',
      'rib-520w':
        'Najszersza łódź RIB 5,2 m (RIB520W) — szerokość 2,35 m, kadłub 230 kg, otwarty układ, pojemność 8 osób, maks. 85 HP. Wyjątkowa stabilność do operacji nurkowych, wędkarstwa z przewodnikiem i transportu pasażerskiego.',
      'rib-550a':
        'Lekka łódź RIB 5,5 m (RIB550A) — kadłub 240 kg, szerokość 2,30 m, zbiornik 60 l, pojemność 7 osób, maks. 90 HP. Zbudowana specjalnie do patroli przybrzeżnych, transportu i poważnego wędkarstwa.',
      'rib-550b':
        'W pełni wyposażona łódź RIB 5,5 m z konsolą środkową (RIB550B) — kadłub 450 kg, szerokość 2,30 m, zbiornik 100 l, bariera ochronna, pokład słoneczny. Zbudowana do dalekich ekspedycji morskich i ciężkiego transportu.',
      'rib-580a':
        'Morska łódź RIB 5,8 m z konsolą środkową (RIB580A) — kadłub 450 kg, szerokość 2,38 m, zbiornik 90 l, łuk targa, pojemność 8 osób, maks. 115 HP. Zbudowana do transportu ekspedycyjnego i wędkarstwa głębinowego.',
      'rib-580b':
        'Łódź RIB 5,8 m do wzburzonego morza (RIB580B) — kadłub 450 kg, powiększone balony 58 cm, szerokość 2,38 m, zbiornik 90 l, pojemność 8 osób, maks. 115 HP. Wyjątkowa wyporność i stabilność w wymagających warunkach morskich.',
      'rib-600':
        'Zaawansowana łódź RIB 6,0 m (RIB600) — kadłub 500 kg, szerokość 2,50 m, 6 komór powietrznych, zbiornik 120 l, bariera ochronna, pojemność 8 osób, maks. 115 HP. Pomost między średnimi i dużymi morskimi łodziami RIB.',
      'rib-680a':
        'Duża łódź RIB 6,6 m (RIB680A) — kadłub 500 kg, szerokość 2,52 m, 7 komór powietrznych, zbiornik 150 l, zbiornik na żywą przynętę, pojemność 10 osób, maks. 200 HP. Zbudowana do morskiego wędkarstwa big game, czarteru komercyjnego i wsparcia nurkowania.',
      'rib-680b':
        'Pełnowymiarowa łódź pasażerska RIB 6,8 m (RIB680B) — kadłub 500 kg, szerokość 2,52 m, 7 komór powietrznych, zbiornik 100 l, skibar, pojemność 10 osób, maks. 200 HP. Opracowana do komercyjnego transportu pasażerskiego, wsparcia nurkowania i holowania ekspedycyjnego.',
      'rib-700': 'Wydajna łódź RIB z twardym kadłubem (RIB700) o długości 710 cm do transportu i wędkarstwa.',
      'rib-760': 'Wydajna łódź RIB z twardym kadłubem (RIB760) o długości 760 cm do transportu i wędkarstwa.',
      'sib-aluminum-floor':
        'Uniwersalna dmuchana łódź sportowa ze sztywną podłogą aluminiową zapewniającą doskonałe osiągi i trwałość.',
      'sib-dropstitch-floor':
        'Lekka dmuchana łódź sportowa z wysokociśnieniową podłogą drop-stitch zapewniającą doskonałą sztywność i przenośność.',
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
      'tactical-raft':
        'Dmuchana tratwa w specyfikacji wojskowej, zbudowana do operacji taktycznych, poszukiwań i ratownictwa oraz ekstremalnych ekspedycji.',
      'whitewater-raft':
        'Solidna tratwa spływowa z samoodpływowym dnem, wzmocnioną konstrukcją i szybkim montażem do profesjonalnego spływu rzekznego.',
      'zb-mt350':
        'AQMT-11\'6" — łódź RIB 11,5 stóp z włókna szklanego do patroli przybrzeżnych, transportu komercyjnego i wsparcia ekspedycji.',

      ap330: 'Luksusowa konsola klasy podstawowej RIB przetarg z serii Apex Performance.',
      ap360: 'Luksusowa konsola środkowa małej i średniej wielkości RIB z możliwością obsługi 40 HP.',
      ap390: 'Luksusowa konsola średniej wielkości RIB wkraczająca do klasy 50 HP.',
      ap420: 'Idealna pierwsza łódź rodzinna o pojemności 70 HP i zbiorniku paliwa 55L.',
      ap460: 'Flagowy model crossovera w klasie 4-metrowej z ergonomicznym układem i bow locker.',
      ap520:
        'Luksusowy 5-metrowy statek klasy RIB z kadłubem deep V nachylonym pod kątem 24° i zbiornikiem paliwa 105L.',
      ap560: 'Podstawowe sporty dalekiego zasięgu RIB z paliwem 115 HP, 105L i pojemnością 12 osób.',
      ap660: 'CE Category B luksusowy offshore RIB z 26° deep V i 200 HP.',
      ap700: '7-metrowy luksusowy offshore RIB z 250 HP i 280L paliwem.',
      ap760: 'Luksusowy okręt flagowy offshore o długości 7,6 m RIB z 300 HP i 280L paliwem.',
      ap800: 'Flagowy statek wycieczkowy offshore z 350 HP, obsługą dwóch silników, zbiornikiem paliwa 300L.',
      ap900: 'Najlepszy okręt flagowy RIB o długości 9,12 m, wyposażony w 600 bliźniaczych silników HP i paliwo 380L.',
      df420: 'Podstawowy pojazd komercyjny/ciężki RIB do działań patrolowych i użyteczności publicznej.',
      df460: '4-metrowy pojazd użytkowy klasy RIB równoważący zwrotność z udźwigiem.',
      df500:
        'Podstawowe narzędzie komercyjne RIB z kadłubem deep V nachylonym pod kątem 24° i zintegrowanym zbiornikiem paliwa 90L.',
      df540: 'Średniej wielkości morski koń pociągowy do patroli, SAR i operacji komercyjnych.',
      'df540-coaster': 'Patrol Coaster Edition RIB z dedykowaną modułową platformą roboczą.',
      df600: '6-metrowy patrol morski RIB z certyfikatem CE Category B i paliwem 140L.',
      df700: '7-metrowy komercyjny pojazd pociągowy SAR z bardzo dużym zbiornikiem paliwa 285L.',
      df760: 'Offshore SAR i ciężki przechwytywacz z bardzo dużymi wyrzutniami o średnicy 60 cm i 300 HP.',
      df860: 'Flagowy myśliwiec przechwytujący o długości 8,6 m z 500 bliźniaczymi silnikami HP.',
      ex7: 'Łódź crossover o długości 7 m z kadłubem z włókna szklanego i podwyższonymi wąskimi rurami.',
      ex9: 'Flagowy crossover klasy premium o długości 9 m z kabiną, przednią szybą, kierownicą i paliwem 450L.',
      sw240: 'Ultralekki aluminiowy model o długości 2,4 m i wadze zaledwie 33 kg — przenośny przez jedną osobę.',
      sw260: 'Złoty rozmiar w 35 kg — idealna równowaga pojemności i przenośności.',
      sw290: 'Średniej wielkości przetarg z ulepszonym kątem 15° deadrise dla lepszej wydajności.',
      sw310: 'Rozbudowany przetarg z tubami o średnicy 44 cm i pojemnością 5 osób.',
      sw340: 'Flagowy Swiftlitee o pojemności 6 osób za jedyne 53 kg.',
      vr260: 'Najbardziej kompaktowy Versa z komfortem podwójnego pokładu i rurkami o dużej wyporności 44 cm.',
      vr290: 'Luksusowy tendr typu „sweet spot” z podwójnym pokładem i rurami o długości 44 cm.',
      vr310: 'Kamień milowy Versa z podwójnym pokładem kompatybilnym z konsolą i miejscem dla 5 osób.',
      vr340: 'Podstawowy przetarg o doskonałej pojemności przestrzennej i pokładzie kompatybilnym z konsolą.',
      vr360: 'Wysokowydajny, luksusowy przetarg wkraczający w klasę 30 HP.',
      vr380: 'Średni i duży luksusowy przetarg z trzema opcjami konsoli dla jachtów i katamaranów.',
      vr400: 'Flagowy crossover z kadłubem 20° deep V i 50 HP dla średniej wielkości krążownika konsolowego.',
      vr420: 'Średni i duży luksusowy krążownik konsolowy o ładowności 60 HP i 800 kg.',
      vr460: 'Największy okręt flagowy Versa z 70 HP, 920 kg ładunkiem i wzmocnionym kadłubem 4mm.',
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
      'airdeck-360': 'AirDeck 360',
      'heavy-duty-raft-commercial': 'قارب تجاري للاستخدام الشاق',
      'high-speed-catamaran': 'كاتاماران سباقي عالي السرعة (AQHB)',
      'inflatable-catamaran-kayak': 'كاياك-كاتاماران قابل للنفخ',
      kaboat: 'كاياك-كاتاماران KaBoat (سلسلة ZB)',
      'kayak-full-dropstitch': 'كاياك عالي الأداء بجسم drop-stitch كامل',
      'kayak-hybrid': 'كاياك هجين مع drop-stitch',
      'life-vest-classic': 'سترة نجاة Classic',
      'life-vest-pro': 'سترة نجاة Pro',
      'oars-pump-set': 'طقم مجاديف ومضخة',
      'premium-dropstitch-seat': 'مقعد premium من drop-stitch',
      'rib-250': 'RIB250',
      'rib-270': 'RIB270',
      'rib-300': 'RIB300',
      'rib-330': 'RIB 330',
      'rib-330a': 'RIB330A',
      'rib-330b': 'RIB330B',
      'rib-330c': 'RIB330C',
      'rib-360a': 'RIB360A — قارب RIB متعدد الاستخدامات بطول 3.6 م للعائلة والصيد',
      'rib-360b': 'RIB360B — قارب RIB سياحي فاخر بطول 3.6 م مع كابينة ووحدة تحكم',
      'rib-390a': 'RIB390A — قارب RIB رياضي بطول 3.9 م مع أنابيب موسعة 47 سم',
      'rib-390al': 'RIB390AL — قارب RIB للإنقاذ مع 4 غرف ووحدة تحكم وخيارات premium',
      'rib-390b': 'RIB390B — قارب RIB متين بطول 3.9 م مع خزان 40 لتر وكابينات كاملة',
      'rib-390bl': 'RIB390BL — قارب RIB رائد بطول 3.9 م مع قوس حماية وسطح شمسي و4 غرف',
      'rib-430a': 'RIB430A — قارب RIB خفيف بطول 4.3 م بسطح مفتوح للقطر والصيد',
      'rib-430b': 'RIB430B — قارب RIB بطول 4.3 م مع وحدة تحكم وسطية و4 غرف هواء ومضخة تصريف',
      'rib-430c': 'RIB430C — قارب RIB للبعثات بطول 4.3 م مع قوس حماية وزجاج أمامي وخزان 50 لتر',
      'rib-450-patrol': 'RIB 450 Patrol',
      'rib-480a': 'RIB480A — قارب RIB خفيف بطول 4.8 م بسطح مفتوح و5 غرف هواء و60 HP',
      'rib-480b': 'RIB480B — قارب RIB بطول 4.8 م مع وحدة تحكم وسطية وخزان 60 لتر وقوس targa',
      'rib-480c': 'RIB480C — قارب RIB بطول 4.8 م مع وحدة تحكم بزجاج أمامي ولوحة 4 مفاتيح وكابينات خلفية',
      'rib-480d': 'RIB480D — قارب RIB فاخر بطول 4.8 م مع سطح شمسي وسلم سباحة وخزان 60 لتر',
      'rib-480w': 'RIB480W — قارب RIB بطول 4.8 م بعرض موسع 2.35 م مع وحدة تحكم وسطية',
      'rib-500': 'RIB500 — قارب RIB بحري بطول 5.0 م بعرض 2.10 م وأنابيب 52 سم و60 HP',
      'rib-520a': 'RIB520A — قارب RIB خفيف بطول 5.2 م بسطح مفتوح للتعديلات المخصصة',
      'rib-520b': 'RIB520B — قارب RIB عريض بطول 5.2 م مع وحدة تحكم وسطية للدوريات والإيجار',
      'rib-520c': 'RIB520C — قارب RIB ترفيهي عريض بطول 5.2 م مع وحدة تحكم وسطية وسطح شمسي',
      'rib-520e': 'RIB520E — قارب RIB متين بطول 5.2 م بمحرك 115 HP وقوس حماية من الستانلس',
      'rib-520w': 'RIB520W — أعرض قارب RIB بطول 5.2 م بعرض 2.35 م لأقصى ثبات',
      'rib-550a': 'RIB550A — قارب RIB خفيف بطول 5.5 م للدوريات والصيد بمحرك 90 HP',
      'rib-550b': 'RIB550B — قارب RIB بطول 5.5 م مجهز بالكامل مع وحدة تحكم وسطية وخزان 100 لتر',
      'rib-580a': 'RIB580A — قارب RIB بحري بطول 5.8 م مع وحدة تحكم وسطية و115 HP وخزان 90 لتر',
      'rib-580b': 'RIB580B — قارب RIB بطول 5.8 م للبحار الهائجة مع أنابيب موسعة 58 سم',
      'rib-600': 'RIB600 — قارب RIB متقدم بطول 6.0 م بعرض 2.50 م و6 غرف هواء',
      'rib-680a': 'RIB680A — قارب RIB كبير بطول 6.6 م مع 200 HP و7 غرف وحوض للطعم الحي',
      'rib-680b': 'RIB680B — قارب RIB ركاب كامل الحجم بطول 6.8 م مع 200 HP وقوس للتزلج المائي',
      'rib-700': 'RIB700',
      'rib-760': 'RIB760',
      'sib-aluminum-floor': 'قارب رياضي قابل للنفخ (أرضية ألمنيوم)',
      'sib-dropstitch-floor': 'قارب رياضي قابل للنفخ (أرضية drop-stitch)',
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
      'tactical-raft': 'قارب تكتيكي للبعثات',
      'whitewater-raft': 'قارب مياه بيضاء من الجيل الجديد (AQDRB)',
      'zb-mt350': 'AQMT-11\'6"',

      ap330: 'Apex Performance 330 (AP330)',
      ap360: 'Apex Performance 360 (AP360)',
      ap390: 'Apex Performance 390 (AP390)',
      ap420: 'Apex Performance 420 (AP420)',
      ap460: 'Apex Performance 460 (AP460)',
      ap520: 'Apex Performance 520 (AP520)',
      ap560: 'Apex Performance 560 (AP560)',
      ap660: 'Apex Performance 660 (AP660)',
      ap700: 'Apex Performance 700 (AP700)',
      ap760: 'Apex Performance 760 (AP760)',
      ap800: 'Apex Performance 800 (AP800)',
      ap900: 'Apex Performance 900 (AP900)',
      df420: 'Defender 420 (DF420)',
      df460: 'Defender 460 (DF460)',
      df500: 'Defender 500 (DF500)',
      df540: 'Defender 540 (DF540)',
      'df540-coaster': 'Defender 540 Coaster (DF540 Coaster)',
      df600: 'Defender 600 (DF600)',
      df700: 'Defender 700 (DF700)',
      df760: 'Defender 760 (DF760)',
      df860: 'Defender 860 (DF860)',
      ex7: 'Explorer 7 (EX7)',
      ex9: 'Explorer 9 (EX9)',
      sw240: 'Swiftlitee 240 (SW240)',
      sw260: 'Swiftlitee 260 (SW260)',
      sw290: 'Swiftlitee 290 (SW290)',
      sw310: 'Swiftlitee 310 (SW310)',
      sw340: 'Swiftlitee 340 (SW340)',
      vr260: 'Versa 260 (VR260)',
      vr290: 'Versa 290 (VR290)',
      vr310: 'Versa 310 (VR310)',
      vr340: 'Versa 340 (VR340)',
      vr360: 'Versa 360 (VR360)',
      vr380: 'Versa 380 (VR380)',
      vr400: 'Versa 400 (VR400)',
      vr420: 'Versa 420 (VR420)',
      vr460: 'Versa 460 (VR460)',
    },
    summaries: {
      'airdeck-360': 'قارب قابل للنفخ واسع بطول 3.6 م بأرضية AirDeck معززة — مثالي للرحلات العائلية والصيد.',
      'heavy-duty-raft-commercial':
        'قارب نفخ تجاري مبني للاستخدام اليومي الشاق في قطاع السياحة، بأرضيات معززة وقماش صناعي.',
      'high-speed-catamaran': 'كاتاماران نفخ عالي السرعة بهيكل مزدوج لثبات واستجابة وسرعة استثنائية.',
      'inflatable-catamaran-kayak':
        'كاياك-كاتاماران قابل للنفخ بمستوى المبتدئين مع ثبات استثنائي للمبتدئين والصيد والتجديف الترفيهي.',
      kaboat: 'هاجين من الكاياك والكاتاماران يتحول من منصة صيد مستقرة بهيكلين إلى كاياك سياحي انسيابي بهيكل واحد.',
      'kayak-full-dropstitch':
        'كاياك نفخ عالي الأداء بجسم drop-stitch كامل: صلابة القارب الصلب مع ثبات دقيق على المسار.',
      'kayak-hybrid': 'كاياك نفخ متعدد الاستخدامات بأرضية drop-stitch جزئية — توازن بين الصلابة وقابلية الحمل والسعر.',
      'life-vest-classic': 'سترة نجاة عالمية معتمدة CE للرياضات المائية الترفيهية.',
      'life-vest-pro': 'سترة نجاة نفخ تلقائية وفق معيار SOLAS لعمليات البحر والإنقاذ.',
      'oars-pump-set':
        'زوج من المجاديف الألمنيوم بطول 1.6 م ومضخة قدم قوية بسعة 5 لتر. تناسب جميع قوارب النفخ في السلسلة.',
      'premium-dropstitch-seat': 'مقعد نفخ ضغط عالٍ من drop-stitch لراحة ودعم فائقين في الأيام الطويلة على الماء.',
      'rib-250':
        'قارب RIB مدمج بطول 2.5 م بهيكل ألمنيوم خفيف — مثالي كقارب قطر لليخوت أو قارب صيد أو قارب بحري لـ3 أشخاص كحد أقصى.',
      'rib-270':
        'قارب RIB متوسط بطول 2.7 م بعرض 162 سم وقوة 10 HP — ثابت وقابل للحمل ومثالي للصيد البحري وجر اليخوت والإبحار الساحلي.',
      'rib-300':
        'قارب RIB متعدد الاستخدامات بطول 3.0 م بقوة 20 HP وهيكل على شكل V عميق ومقاعد لـ4 أشخاص — المفضل العائلي للرحلات البحرية ومغامرات الساحل.',
      'rib-330':
        'قارب RIB الأكثر مبيعاً بطول 3.3 م بهيكل ألمنيوم — قارب قطر يُرفع بالرافعات وقارب نهاري عائلي لـ5 أشخاص كحد أقصى.',
      'rib-330a':
        'قارب RIB خفيف بطول 3.3 م بهيكل من الألياف الزجاجية ووزن 80 وقوة 20 HP — سريع واقتصادي وسهل النقل بالمقطورة.',
      'rib-330b':
        'قارب RIB يركز على الراحة بطول 3.3 م مع مرتبة مقدمة وصندوق مرساة وقوة 20 HP — قارب نهاري راقٍ لـ4 أشخاص.',
      'rib-330c':
        'قارب RIB فاخر بطول 3.3 م مع كابينة أمامية وخلفية ووحدة تحكم وسطية وقوة 20 HP — النسخة الأكمل تجهيزاً بطول 3.3 م.',
      'rib-360a':
        'قارب RIB خفيف بطول 3.6 م بهيكل من الألياف الزجاجية وعرض 1.80 م ووزن ذاتي 120 كجم وحمولة 650 كجم. مثالي للصيد الساحلي والرحلات العائلية والنقل المينائي بمحركات حتى 25 HP.',
      'rib-360b':
        'قارب RIB جيد التجهيز بطول 3.6 م بهيكل من الألياف الزجاجية وعرض 1.80 م ووزن ذاتي 100 كجم وحمولة 650 كجم. مزود بكابينة أمامية وخلفية ووحدة تحكم وسطية ومضخة تصريف للرحلات الساحلية والرحلات العائلية.',
      'rib-390a':
        'قارب RIB خفيف بطول 3.9 م بهيكل من الألياف الزجاجية وعرض 1.85 م ووزن ذاتي 100 كجم وأنابيب 47 سم. معتمد لمحركات خارجية بقوة 30 HP مع حمولة 650 كجم لـ5 أشخاص. مثالي للرياضة والصيد والإبحار الساحلي.',
      'rib-390al':
        'قارب RIB فاخر بطول 3.9 م بهيكل من الألياف الزجاجية و4 غرف هواء مستقلة وعرض 1.85 م ووزن ذاتي 120 كجم وحمولة 650 كجم. يشمل وحدة تحكم وسطية وصندوق مقعد وخيارات أرضيات فاخرة. معتمد لمحركات بقوة 30 HP.',
      'rib-390b':
        'قارب RIB متين بطول 3.9 م بهيكل من الألياف الزجاجية وعرض 1.85 م ووزن ذاتي 130 كجم وأنابيب Hypalon بقطر 47 سم. مع كابينة أمامية وخلفية ووحدة تحكم وسطية ومضخة تصريف وخزان مدمج بسعة 40 لتر. معتمد لمحركات بقوة 30 HP مع حمولة 650 كجم.',
      'rib-390bl':
        'قارب RIB مجهز بالكامل بطول 3.9 م بهيكل من الألياف الزجاجية و4 غرف هواء وعرض 1.78 م ووزن ذاتي 110 كجم وحمولة 650 كجم. وحدة تحكم وسطية بجهاز توجيه وقوس حماية بإضاءة وخزان 25 لتر وسطح شمسي وسلم على شكل C. معتمد لمحركات بقوة 30 HP.',
      'rib-430a':
        'قارب RIB خفيف بطول 4.3 م من الألياف الزجاجية بعرض 2.00 م و3 غرف هواء ووزن ذاتي 170 كجم وحمل أقصى 640 كجم. مصمم للتزويد الساحلي والصيد الترفيهي والاستخدام التجاري الخفيف.',
      'rib-430b':
        'قارب RIB بطول 4.3 م من الألياف الزجاجية مع وحدة تحكم وسطية وعرض 2.00 م و4 غرف هواء ووزن ذاتي 200 كجم وحمل أقصى 640 كجم. مزود بمضخة تصريف وضوء خلفي ومقابض تزلج للدوريات والصيد والرياضات المائية.',
      'rib-430c':
        'قارب RIB مجهز بالكامل بطول 4.3 م من الألياف الزجاجية بعرض 1.96 م وأنابيب 48 سم و4 غرف هواء ووزن ذاتي 200 كجم وحمل أقصى 640 كجم. وحدة تحكم وسطية بزجاج أمامي وقوس حماية بإضاءة وخزان مدمج بسعة 50 لتر.',
      'rib-450-patrol': 'قارب RIB دوريات بطول 4.5 م بهيكل ألمنيوم. بناء متين يناسب المشغلين التجاريين.',
      'rib-480a':
        'قارب RIB خفيف بطول 4.8 م من الألياف الزجاجية بعرض 2.00 م و5 غرف هواء ووزن ذاتي 183 كجم وحمل أقصى 680 كجم. مصمم للنقل الساحلي والصيد البحري وعمليات الغوص بقوة محرك قصوى 60 HP.',
      'rib-480b':
        'قارب RIB بطول 4.8 م من الألياف الزجاجية مع وحدة تحكم وسطية وعرض 2.00 م و5 غرف هواء ووزن ذاتي 260 كجم وحمل أقصى 680 كجم. مزود بمضخة تصريف وخزان مدمج بسعة 60 لتر وقوس targa بأضواء ملاحية.',
      'rib-480c':
        'قارب RIB مجهز بالكامل بطول 4.8 م من الألياف الزجاجية بعرض 2.00 م و5 غرف هواء ووزن ذاتي 280 كجم وحمل أقصى 680 كجم. وحدة تحكم وسطية بزجاج أمامي مدمج ولوحة 4 مفاتيح ومقاعد كابينة خلفية وقوة 60 HP.',
      'rib-480d':
        'قارب RIB فاخر بطول 4.8 م من الألياف الزجاجية بعرض 2.00 م و5 غرف هواء ووزن ذاتي 280 كجم وحمل أقصى 680 كجم. وحدة تحكم وسطية وخزان مدمج بسعة 60 لتر وقوس targa وسلم خلفي من الستانلس ومراتب شمسية للاستخدام العائلي والإيجار.',
      'rib-480w':
        'قارب RIB عريض بطول 4.8 م من الألياف الزجاجية بعرض 2.35 م و5 غرف هواء ووزن ذاتي 280 كجم وحمل أقصى 680 كجم. وحدة تحكم وسطية بمقعد جانبي وخزان 60 لتر وقوس targa تمنح ثباتاً استثنائياً ومساحة سطح للإيجار والغوص.',
      'rib-500':
        'قارب RIB بحري بطول 5.0 م من الألياف الزجاجية بعرض 2.10 م وأنابيب 52 سم و5 غرف هواء ووزن ذاتي 314 كجم وحمل أقصى 686 كجم. وحدة تحكم وسطية وخزان 60 لتر وقوس targa لدعم البعثات والصيد البحري والنقل التجاري.',
      'rib-520a':
        'قارب RIB خفيف بطول 5.2 م بسطح مفتوح (RIB520A) — هيكل 200 كجم وسعة 8 أشخاص وقوة قصوى 85 HP. مثالي للتعديلات المخصصة والصيد البحري ودعم الغوص.',
      'rib-520b':
        'قارب RIB عريض بطول 5.2 م مع وحدة تحكم وسطية (RIB520B) — عرض 2.28 م وهيكل 400 كجم وخزان 80 لتر وسعة 8 أشخاص. مبني للدوريات الساحلية والصيد البحري وإيجار الركاب.',
      'rib-520c':
        'قارب RIB ترفيهي عريض بطول 5.2 م (RIB520C) — عرض 2.28 م وهيكل 360 كجم ووحدة تحكم وسطية ومراتب شمسية وقوس targa بإضاءة. مثالي للرياضات المائية والرحلات العائلية والإيجار.',
      'rib-520e':
        'قارب RIB متين بطول 5.2 م (RIB520E) — هيكل 450 كجم وقوة قصوى 115 HP وخزان 80 لتر بمؤشر وقوس حماية من الستانلس ووحدة تحكم وسطية. مبني للصيد البحري الجاد ودعم البعثات.',
      'rib-520w':
        'أعرض قارب RIB بطول 5.2 م (RIB520W) — عرض 2.35 م وهيكل 230 كجم وتخطيط مفتوح وسعة 8 أشخاص وقوة قصوى 85 HP. ثبات استثنائي لعمليات الغوص والصيد المرشد ونقل الركاب.',
      'rib-550a':
        'قارب RIB خفيف بطول 5.5 م (RIB550A) — هيكل 240 كجم وعرض 2.30 م وخزان 60 لتر وسعة 7 أشخاص وقوة قصوى 90 HP. مبني خصيصاً للدوريات الساحلية والنقل والصيد الجاد.',
      'rib-550b':
        'قارب RIB بطول 5.5 م مجهز بالكامل مع وحدة تحكم وسطية (RIB550B) — هيكل 450 كجم وعرض 2.30 م وخزان 100 لتر وقوس حماية وسطح شمسي. مبني للبعثات البحرية الطويلة والنقل الثقيل.',
      'rib-580a':
        'قارب RIB بحري بطول 5.8 م مع وحدة تحكم وسطية (RIB580A) — هيكل 450 كجم وعرض 2.38 م وخزان 90 لتر وقوس targa وسعة 8 أشخاص وقوة قصوى 115 HP. مبني لنقل البعثات والصيد في الأعماق.',
      'rib-580b':
        'قارب RIB بطول 5.8 م للبحار الهائجة (RIB580B) — هيكل 450 كجم وأنابيب موسعة 58 سم وعرض 2.38 م وخزان 90 لتر وسعة 8 أشخاص وقوة قصوى 115 HP. طفو وثبات استثنائيان في الظروف البحرية القاسية.',
      'rib-600':
        'قارب RIB متقدم بطول 6.0 م (RIB600) — هيكل 500 كجم وعرض 2.50 م و6 غرف هواء وخزان 120 لتر وقوس حماية وسعة 8 أشخاص وقوة قصوى 115 HP. الجسر بين قوارب RIB البحرية المتوسطة والكبيرة.',
      'rib-680a':
        'قارب RIB كبير بطول 6.6 م (RIB680A) — هيكل 500 كجم وعرض 2.52 م و7 غرف هواء وخزان 150 لتر وحوض للطعم الحي وسعة 10 أشخاص وقوة قصوى 200 HP. مبني للصيد البحري الكبير والإيجار التجاري ودعم الغوص.',
      'rib-680b':
        'قارب RIB ركاب كامل الحجم بطول 6.8 م (RIB680B) — هيكل 500 كجم وعرض 2.52 م و7 غرف هواء وخزان 100 لتر وقوس للتزلج المائي وسعة 10 أشخاص وقوة قصوى 200 HP. مصمم لنقل الركاب التجاري ودعم الغوص وجر البعثات.',
      'rib-700': 'قارب RIB عالي الأداء بهيكل صلب (RIB700) بطول 710 سم للنقل والصيد.',
      'rib-760': 'قارب RIB عالي الأداء بهيكل صلب (RIB760) بطول 760 سم للنقل والصيد.',
      'sib-aluminum-floor': 'قارب رياضي قابل للنفخ متعدد الاستخدامات بأرضية ألمنيوم صلبة لأداء ومتانة ممتازين.',
      'sib-dropstitch-floor': 'قارب رياضي قابل للنفخ خفيف بأرضية drop-stitch ضغط عالٍ لصلابة وقابلية حمل فائقتين.',
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
      'tactical-raft': 'قارب نفخ بمواصفات عسكرية مبني للعمليات التكتيكية والبحث والإنقاذ والبعثات القصوى.',
      'whitewater-raft':
        'قارب مياه بيضاء متين بقاع ذاتي التصريف وبناء معزز ومزايا تجهيز سريعة للتجديف الاحترافي في الأنهار.',
      'zb-mt350':
        'AQMT-11\'6" — قارب RIB من الألياف الزجاجية بطول 11.5 قدم للدوريات الساحلية والنقل التجاري ودعم البعثات.',

      ap330: 'وحدة تحكم فاخرة للمبتدئين RIB العطاء في سلسلة Apex Performance.',
      ap360: 'وحدة تحكم مركزية فاخرة صغيرة إلى متوسطة الحجم RIB مع قدرة 40 HP.',
      ap390: 'وحدة تحكم فاخرة متوسطة الحجم RIB تدخل إلى فئة 50 HP.',
      ap420: 'القارب النهاري المثالي للعائلة بسعة 70 HP وخزان الوقود 55L.',
      ap460: 'نموذج كروس أوفر رائد في فئة 4 أمتار بتصميم مريح وbow locker.',
      ap520: 'فئة فاخرة بطول 5 أمتار RIB مع هيكل deep V بحري بزاوية 24 درجة وخزان وقود 105L.',
      ap560: 'الرياضات الأساسية بعيدة المدى RIB مع 115 HP، 105L وقود، وسعة 12 شخصًا.',
      ap660: 'CE Category B البحرية الفاخرة RIB مع 26 درجة deep V و 200 HP.',
      ap700: 'عرض بحري فاخر بطول 7 أمتار RIB مزود بوقود 250 HP و280L.',
      ap760: 'الرائد البحري الفاخر بطول 7.6 متر RIB مع 300 وقود HP و280L.',
      ap800: 'سفينة الرحلات البحرية الرائدة مع 350 HP، دعم المحرك المزدوج، 300L خزان الوقود.',
      ap900: 'الرائد النهائي 9.12 م RIB مع 600 محرك HP مزدوج ووقود 380L.',
      df420: 'مستوى الدخول التجاري/الخدمة الشاقة RIB لعمليات الدوريات والمرافق.',
      df460: 'فائدة فئة 4 أمتار RIB موازنة القدرة على المناورة مع سعة الحمولة.',
      df500: 'المرافق التجارية الأساسية RIB مع هيكل deep V البحري بزاوية 24 درجة وخزان الوقود المتكامل 90L.',
      df540: 'العمود الفقري البحري متوسط ​​الحجم للدوريات، SAR، والعمليات التجارية.',
      'df540-coaster': 'دورية Coaster Edition RIB مع سطح عمل معياري مخصص.',
      df600: 'دورية بحرية بطول 6 أمتار RIB مع شهادة CE Category B ووقود 140L.',
      df700: 'العمود الفقري التجاري SAR بطول 7 أمتار مع خزان وقود 285L كبير جدًا.',
      df760: 'بحري SAR ومعترض ثقيل بأنابيب كبيرة جدًا مقاس 60 سم و300 HP.',
      df860: 'معترض رئيسي بطول 8.6 متر مع 500 محرك مزدوج HP.',
      ex7: 'قارب كروس بطول 7 أمتار بهيكل من الألياف الزجاجية وأنابيب رفيعة مرتفعة.',
      ex9: 'سيارة كروس أوفر فاخرة بطول 9 أمتار مزودة بمقصورة ورأس وقضيب رطب ووقود 450L.',
      sw240: 'عطاء ألومنيوم خفيف الوزن للغاية يبلغ 2.4 مترًا بسعر 33 kg فقط - يمكن حمله بواسطة شخص واحد.',
      sw260: 'العطاء ذو ​​الحجم الذهبي في 35 kg - التوازن المثالي بين السعة وقابلية النقل.',
      sw290: 'مناقصة متوسطة الحجم مع ترقية 15° deadrise للحصول على أداء أفضل.',
      sw310: 'مناقصة موسعة بأنابيب مقاس 44 سم وتتسع لـ 5 أشخاص.',
      sw340: 'الرائد Swiftlitee بسعة 6 أشخاص بسعر 53 kg فقط.',
      vr260: 'الأكثر إحكاما Versa مع راحة ذات طابقين وأنابيب عالية الطفو مقاس 44 سم.',
      vr290: 'سفينة فاخرة رائعة ذات سطح مزدوج وأنابيب مقاس 44 سم.',
      vr310: 'معلم رئيسي Versa مع سطح مزدوج متوافق مع وحدة التحكم وسعة 5 أشخاص.',
      vr340: 'العطاء الأساسي بسعة مكانية ممتازة وسطح متوافق مع وحدة التحكم.',
      vr360: 'عطاء فاخر عالي الأداء يدخل إلى فئة 30 HP.',
      vr380: 'سفينة فاخرة متوسطة إلى كبيرة مع ثلاثة خيارات لوحدة التحكم لليخوت والقوارب.',
      vr400: 'كروس أوفر رائدة بهيكل 20 درجة deep V و50 HP لقدرات وحدة التحكم متوسطة الحجم.',
      vr420: 'وحدة تحكم فاخرة متوسطة إلى كبيرة الحجم بحمولة 60 HP و800 kg.',
      vr460: 'أكبر سفينة رائدة Versa بحمولة 70 HP و920 kg وهيكل معزز 4mm.',
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
      'airdeck-360': 'AirDeck 360',
      'heavy-duty-raft-commercial': 'Jangada comercial para utilização intensiva',
      'high-speed-catamaran': 'Catamaran de corrida de alta velocidade (AQHB)',
      'inflatable-catamaran-kayak': 'Caiaque-catamaran inflável',
      kaboat: 'Caiaque-catamaran KaBoat (série ZB)',
      'kayak-full-dropstitch': 'Caiaque de alta performance com drop-stitch total',
      'kayak-hybrid': 'Caiaque híbrido com drop-stitch',
      'life-vest-classic': 'Colete salva-vidas Classic',
      'life-vest-pro': 'Colete salva-vidas Pro',
      'oars-pump-set': 'Kit de remos e bomba',
      'premium-dropstitch-seat': 'Assento premium em drop-stitch',
      'rib-250': 'RIB250',
      'rib-270': 'RIB270',
      'rib-300': 'RIB300',
      'rib-330': 'RIB 330',
      'rib-330a': 'RIB330A',
      'rib-330b': 'RIB330B',
      'rib-330c': 'RIB330C',
      'rib-360a': 'RIB360A — RIB versátil de 3,6m para família e pesca',
      'rib-360b': 'RIB360B — RIB de cruzeiro premium de 3,6m com cabine e consola',
      'rib-390a': 'RIB390A — RIB desportivo de 3,9m com tubos extra grandes de 47cm',
      'rib-390al': 'RIB390AL — RIB de salvamento com 4 câmaras, consola e opções premium',
      'rib-390b': 'RIB390B — RIB robusto de 3,9m com depósito de 40L e cabines completas',
      'rib-390bl': 'RIB390BL — RIB topo de gama de 3,9m com arco de proteção, deck de sol e 4 câmaras',
      'rib-430a': 'RIB430A — RIB leve de 4,3m com deck aberto para tender e pesca',
      'rib-430b': 'RIB430B — RIB de 4,3m com consola central, 4 câmaras de ar e bomba de porão',
      'rib-430c': 'RIB430C — RIB de expedição de 4,3m com arco de proteção, para-brisas e depósito de 50L',
      'rib-450-patrol': 'RIB 450 Patrol',
      'rib-480a': 'RIB480A — RIB leve de 4,8m com deck aberto, 5 câmaras de ar e 60 HP',
      'rib-480b': 'RIB480B — RIB de 4,8m com consola central, depósito de 60L e arco targa',
      'rib-480c': 'RIB480C — RIB de 4,8m com consola com para-brisas, painel de 4 interruptores e cabines de popa',
      'rib-480d': 'RIB480D — RIB premium de 4,8m com deck de sol, escada de banho e depósito de 60L',
      'rib-480w': 'RIB480W — RIB de 4,8m com largura extra de 2,35 m e consola central',
      'rib-500': 'RIB500 — RIB offshore de 5,0m com 2,10 m de largura, tubos de 52cm e 60 HP',
      'rib-520a': 'RIB520A — RIB leve de 5,2m com deck aberto para personalizações',
      'rib-520b': 'RIB520B — RIB largo de 5,2m com consola central para patrulha e charter',
      'rib-520c': 'RIB520C — RIB de lazer largo de 5,2m com consola central e deck de sol',
      'rib-520e': 'RIB520E — RIB robusto de 5,2m com 115 HP e arco em inox',
      'rib-520w': 'RIB520W — RIB mais largo de 5,2m com 2,35 m de largura para estabilidade máxima',
      'rib-550a': 'RIB550A — RIB leve de 5,5m para patrulha e pesca com 90 HP',
      'rib-550b': 'RIB550B — RIB de 5,5m totalmente equipado com consola central e depósito de 100L',
      'rib-580a': 'RIB580A — RIB offshore de 5,8m com consola central, 115 HP e depósito de 90L',
      'rib-580b': 'RIB580B — RIB de 5,8m para mar agitado com tubos extra grandes de 58cm',
      'rib-600': 'RIB600 — RIB avançado de 6,0m com 2,50 m de largura e 6 câmaras de ar',
      'rib-680a': 'RIB680A — Grande RIB de 6,6m com 200 HP, 7 câmaras e tanque de isco vivo',
      'rib-680b': 'RIB680B — RIB de passageiros de 6,8m em tamanho total com 200 HP e barra de esqui',
      'rib-700': 'RIB700',
      'rib-760': 'RIB760',
      'sib-aluminum-floor': 'Barco desportivo inflável (piso em alumínio)',
      'sib-dropstitch-floor': 'Barco desportivo inflável (piso drop-stitch)',
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
      'tactical-raft': 'Jangada tática de expedição',
      'whitewater-raft': 'Jangada de águas bravas de nova geração (AQDRB)',
      'zb-mt350': 'AQMT-11\'6"',

      ap330: 'Apex Performance 330 (AP330)',
      ap360: 'Apex Performance 360 (AP360)',
      ap390: 'Apex Performance 390 (AP390)',
      ap420: 'Apex Performance 420 (AP420)',
      ap460: 'Apex Performance 460 (AP460)',
      ap520: 'Apex Performance 520 (AP520)',
      ap560: 'Apex Performance 560 (AP560)',
      ap660: 'Apex Performance 660 (AP660)',
      ap700: 'Apex Performance 700 (AP700)',
      ap760: 'Apex Performance 760 (AP760)',
      ap800: 'Apex Performance 800 (AP800)',
      ap900: 'Apex Performance 900 (AP900)',
      df420: 'Defender 420 (DF420)',
      df460: 'Defender 460 (DF460)',
      df500: 'Defender 500 (DF500)',
      df540: 'Defender 540 (DF540)',
      'df540-coaster': 'Defender 540 Coaster (DF540 Coaster)',
      df600: 'Defender 600 (DF600)',
      df700: 'Defender 700 (DF700)',
      df760: 'Defender 760 (DF760)',
      df860: 'Defender 860 (DF860)',
      ex7: 'Explorer 7 (EX7)',
      ex9: 'Explorer 9 (EX9)',
      sw240: 'Swiftlitee 240 (SW240)',
      sw260: 'Swiftlitee 260 (SW260)',
      sw290: 'Swiftlitee 290 (SW290)',
      sw310: 'Swiftlitee 310 (SW310)',
      sw340: 'Swiftlitee 340 (SW340)',
      vr260: 'Versa 260 (VR260)',
      vr290: 'Versa 290 (VR290)',
      vr310: 'Versa 310 (VR310)',
      vr340: 'Versa 340 (VR340)',
      vr360: 'Versa 360 (VR360)',
      vr380: 'Versa 380 (VR380)',
      vr400: 'Versa 400 (VR400)',
      vr420: 'Versa 420 (VR420)',
      vr460: 'Versa 460 (VR460)',
    },
    summaries: {
      'airdeck-360':
        'Barco inflável espaçoso de 3,6m com piso AirDeck reforçado — ideal para passeios em família e pesca.',
      'heavy-duty-raft-commercial':
        'Jangada inflável comercial construída para utilização diária intensiva no turismo, com pisos reforçados e tecido industrial.',
      'high-speed-catamaran':
        'Catamaran inflável de alta velocidade com casco duplo para estabilidade, velocidade e manobrabilidade excecionais.',
      'inflatable-catamaran-kayak':
        'Caiaque-catamaran inflável de nível iniciante com estabilidade excepcional para principiantes, pesca e remo recreativo.',
      kaboat:
        'Híbrido de caiaque e catamaran que se transforma de uma plataforma de pesca estável de dois cascos num caiaque de cruzeiro hidrodinâmico de casco único.',
      'kayak-full-dropstitch':
        'Caiaque inflável de alta performance com casco drop-stitch total: rigidez de casco rígido e manutenção precisa do rumo.',
      'kayak-hybrid':
        'Caiaque inflável versátil com piso drop-stitch parcial — equilíbrio entre rigidez, portabilidade e preço.',
      'life-vest-classic': 'Colete salva-vidas universal com certificação CE para desportos aquáticos recreativos.',
      'life-vest-pro': 'Colete salva-vidas inflável automático conforme SOLAS para operações offshore e de resgate.',
      'oars-pump-set':
        'Par de remos em alumínio de 1,6m e uma bomba de pé potente de 5L. Compatível com todos os barcos infláveis da série.',
      'premium-dropstitch-seat':
        'Assento inflável de alta pressão em drop-stitch para conforto e suporte superiores em longos dias na água.',
      'rib-250':
        'RIB compacto de 2,5m com casco de alumínio leve — ideal como tender de iate, barco de pesca ou embarcação costeira para até 3 pessoas.',
      'rib-270':
        'RIB de tamanho médio de 2,7m com 162 cm de largura e 10 HP — estável, portátil e perfeito para pesca marítima, tender e navegação costeira.',
      'rib-300':
        'RIB versátil de 3,0m com 20 HP, casco em V profundo e lugares para 4 — favorito das famílias para passeios marítimos e aventuras costeiras.',
      'rib-330':
        'RIB mais vendido de 3,3m com casco de alumínio — tender de iate içável por davits e barco de dia familiar para até 5 pessoas.',
      'rib-330a':
        'RIB leve de 3,3m com casco em fibra de vidro, 80 kg de peso e 20 HP — rápido, acessível e fácil de transportar em reboque.',
      'rib-330b':
        'RIB orientado ao conforto de 3,3m com colchão de proa, poço de âncora e 20 HP — um barco de dia refinado para 4 pessoas.',
      'rib-330c':
        'RIB premium de 3,3m com cabines de proa e popa, consola central e 20 HP — a versão de 3,3m mais completa.',
      'rib-360a':
        'RIB leve de 3,6m com casco em fibra de vidro, 1,80 m de largura, 120 kg de peso próprio e 650 kg de capacidade de carga. Ideal para pesca costeira, passeios em família e transportes portuários com motores até 25 HP.',
      'rib-360b':
        'RIB bem equipado de 3,6m com casco em fibra de vidro, 1,80 m de largura, 100 kg de peso próprio e 650 kg de capacidade de carga. Equipado com cabines de proa e popa, consola central e bomba de porão para navegação costeira e cruzeiros em família.',
      'rib-390a':
        'RIB leve de 3,9m com casco em fibra de vidro, 1,85 m de largura, 100 kg de peso próprio e tubos de 47cm. Homologado para motores fora de borda de 30 HP com 650 kg de capacidade de carga para 5 pessoas. Ideal para desporto, pesca e navegação costeira.',
      'rib-390al':
        'RIB premium de 3,9m com casco em fibra de vidro, 4 câmaras de ar independentes, 1,85 m de largura, 120 kg de peso próprio e 650 kg de capacidade de carga. Inclui consola central, banco-baú e opções de piso de luxo. Homologado para motores de 30 HP.',
      'rib-390b':
        'RIB robusto de 3,9m com casco em fibra de vidro, 1,85 m de largura, 130 kg de peso próprio e tubos Hypalon de 47cm. Com cabines de proa e popa, consola central, bomba de porão e depósito integrado de 40L. Homologado para motores de 30 HP com 650 kg de capacidade de carga.',
      'rib-390bl':
        'RIB totalmente equipado de 3,9m com casco em fibra de vidro, 4 câmaras de ar, 1,78 m de largura, 110 kg de peso próprio e 650 kg de capacidade de carga. Consola central com direção, arco de proteção iluminado, depósito de 25L, deck de sol e escada em C no tubo. Homologado para motores de 30 HP.',
      'rib-430a':
        'RIB leve de 4,3m em fibra de vidro com 2,00 m de largura, 3 câmaras de ar, 170 kg de peso próprio e 640 kg de carga máxima. Desenvolvido para abastecimento costeiro, pesca recreativa e uso comercial ligeiro.',
      'rib-430b':
        'RIB de 4,3m em fibra de vidro com consola central, 2,00 m de largura, 4 câmaras de ar, 200 kg de peso próprio e 640 kg de carga máxima. Equipado com bomba de porão, luz de popa e pegas de esqui para patrulha, pesca e desportos aquáticos.',
      'rib-430c':
        'RIB totalmente equipado de 4,3m em fibra de vidro com 1,96 m de largura, tubos de 48cm, 4 câmaras de ar, 200 kg de peso próprio e 640 kg de carga máxima. Consola central com para-brisas, arco de proteção iluminado e depósito integrado de 50L.',
      'rib-450-patrol':
        'RIB de patrulha de 4,5m com casco de alumínio. Construção reforçada, adequada para operadores comerciais.',
      'rib-480a':
        'RIB leve de 4,8m em fibra de vidro com 2,00 m de largura, 5 câmaras de ar, 183 kg de peso próprio e 680 kg de carga máxima. Desenvolvido para transporte costeiro, pesca offshore e operações de mergulho com potência máxima de 60 HP.',
      'rib-480b':
        'RIB de 4,8m em fibra de vidro com consola central, 2,00 m de largura, 5 câmaras de ar, 260 kg de peso próprio e 680 kg de carga máxima. Equipado com bomba de porão, depósito integrado de 60L e arco targa com luzes de navegação.',
      'rib-480c':
        'RIB totalmente equipado de 4,8m em fibra de vidro com 2,00 m de largura, 5 câmaras de ar, 280 kg de peso próprio e 680 kg de carga máxima. Consola central com para-brisas integrado e painel de 4 interruptores, bancos com cabine de popa e 60 HP.',
      'rib-480d':
        'RIB premium de 4,8m em fibra de vidro com 2,00 m de largura, 5 câmaras de ar, 280 kg de peso próprio e 680 kg de carga máxima. Consola central, depósito integrado de 60L, arco targa, escada de popa em inox e colchões de sol para uso familiar e charter.',
      'rib-480w':
        'RIB largo de 4,8m em fibra de vidro com 2,35 m de largura, 5 câmaras de ar, 280 kg de peso próprio e 680 kg de carga máxima. Consola central com banco lateral, depósito de 60L e arco targa oferecem estabilidade excepcional e área de deck para charter e mergulho.',
      'rib-500':
        'RIB offshore de 5,0m em fibra de vidro com 2,10 m de largura, tubos de 52cm, 5 câmaras de ar, 314 kg de peso próprio e 686 kg de carga máxima. Consola central, depósito de 60L e arco targa para apoio a expedições, pesca offshore e transporte comercial.',
      'rib-520a':
        'RIB leve de 5,2m com deck aberto (RIB520A) — casco de 200 kg, capacidade para 8 pessoas, máx. 85 HP. Ideal para personalizações, pesca offshore e apoio a mergulho.',
      'rib-520b':
        'RIB largo de 5,2m com consola central (RIB520B) — 2,28 m de largura, casco de 400 kg, depósito de 80L, capacidade para 8 pessoas. Construído para patrulha costeira, pesca offshore e charter de passageiros.',
      'rib-520c':
        'RIB de lazer largo de 5,2m (RIB520C) — 2,28 m de largura, casco de 360 kg, consola central, colchões de sol, arco targa iluminado. Ideal para desportos aquáticos, cruzeiros em família e charter.',
      'rib-520e':
        'RIB robusto de 5,2m (RIB520E) — casco de 450 kg, máx. 115 HP, depósito de 80L com indicador, arco de proteção em inox, consola central. Construído para pesca offshore séria e apoio a expedições.',
      'rib-520w':
        'RIB mais largo de 5,2m (RIB520W) — 2,35 m de largura, casco de 230 kg, layout aberto, capacidade para 8 pessoas, máx. 85 HP. Estabilidade excepcional para operações de mergulho, pesca guiada e transporte de passageiros.',
      'rib-550a':
        'RIB leve de 5,5m (RIB550A) — casco de 240 kg, 2,30 m de largura, depósito de 60L, capacidade para 7 pessoas, máx. 90 HP. Construído especificamente para patrulha costeira, transporte e pesca séria.',
      'rib-550b':
        'RIB de 5,5m totalmente equipado com consola central (RIB550B) — casco de 450 kg, 2,30 m de largura, depósito de 100L, arco de proteção, deck de sol. Construído para longas expedições offshore e transporte pesado.',
      'rib-580a':
        'RIB offshore de 5,8m com consola central (RIB580A) — casco de 450 kg, 2,38 m de largura, depósito de 90L, arco targa, capacidade para 8 pessoas, máx. 115 HP. Construído para transporte de expedições e pesca de alto mar.',
      'rib-580b':
        'RIB de 5,8m para mar agitado (RIB580B) — casco de 450 kg, tubos extra grandes de 58cm, 2,38 m de largura, depósito de 90L, capacidade para 8 pessoas, máx. 115 HP. Flutuação e estabilidade excecionais em condições offshore exigentes.',
      'rib-600':
        'RIB avançado de 6,0m (RIB600) — casco de 500 kg, 2,50 m de largura, 6 câmaras de ar, depósito de 120L, arco de proteção, capacidade para 8 pessoas, máx. 115 HP. A ponte entre RIBs offshore médios e grandes.',
      'rib-680a':
        'Grande RIB de 6,6m (RIB680A) — casco de 500 kg, 2,52 m de largura, 7 câmaras de ar, depósito de 150L, tanque de isco vivo, capacidade para 10 pessoas, máx. 200 HP. Construído para pesca oceanica de grande porte, charter comercial e apoio a mergulho.',
      'rib-680b':
        'RIB de passageiros de 6,8m em tamanho total (RIB680B) — casco de 500 kg, 2,52 m de largura, 7 câmaras de ar, depósito de 100L, barra de esqui, capacidade para 10 pessoas, máx. 200 HP. Desenvolvido para transporte comercial de passageiros, apoio a mergulho e reboque de expedições.',
      'rib-700': 'RIB de alta performance com casco rígido (RIB700) com 710 cm de comprimento para transporte e pesca.',
      'rib-760': 'RIB de alta performance com casco rígido (RIB760) com 760 cm de comprimento para transporte e pesca.',
      'sib-aluminum-floor':
        'Barco desportivo inflável versátil com piso rígido em alumínio para excelente desempenho e durabilidade.',
      'sib-dropstitch-floor':
        'Barco desportivo inflável leve com piso drop-stitch de alta pressão para rigidez e portabilidade superiores.',
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
      'tactical-raft':
        'Jangada inflável de especificação militar, construída para operações táticas, busca e resgate e uso expedicionário extremo.',
      'whitewater-raft':
        'Jangada de águas bravas robusta com fundo de autodrenagem, construção reforçada e funcionalidades de montagem rápida para remo fluvial profissional.',
      'zb-mt350':
        'AQMT-11\'6" — RIB de 11,5 pés em fibra de vidro para patrulha costeira, transporte comercial e apoio a expedições.',

      ap330: 'Concurso de console de luxo básico RIB na série Apex Performance.',
      ap360: 'Console central de luxo de pequeno a médio porte RIB tender com capacidade para 40 HP.',
      ap390: 'Console de luxo de tamanho médio RIB entrando na classe 50 HP.',
      ap420: 'O primeiro barco familiar perfeito com capacidade de 70 HP e tanque de combustível 55L.',
      ap460: 'Modelo crossover carro-chefe na classe de 4 metros com layout ergonômico e bow locker.',
      ap520: 'Classe luxo RIB de 5 metros com casco deep V offshore de 24° e tanque de combustível 105L.',
      ap560: 'Esportes principais de longo alcance RIB com combustível 115 HP, 105L e capacidade para 12 pessoas.',
      ap660: 'CE Category B luxo offshore RIB com 26° deep V e 200 HP.',
      ap700: 'RIB offshore de luxo de 7 metros com combustível 250 HP e 280L.',
      ap760: 'Carro-chefe offshore de luxo de 7,6 m RIB com 300 HP e 280L de combustível.',
      ap800: 'Carro-chefe de cruzeiro offshore com 350 HP, suporte de motor duplo, tanque de combustível 300L.',
      ap900: 'O carro-chefe RIB de 9,12 m com 600 motores duplos HP e combustível 380L.',
      df420: 'RIB comercial/pesado de nível básico para operações de patrulha e serviços públicos.',
      df460: 'Utilitário de classe de 4 metros RIB equilibrando manobrabilidade com capacidade de carga útil.',
      df500:
        'Utilitário comercial principal RIB com casco deep V offshore de 24° e tanque de combustível integrado 90L.',
      df540: 'Cavalo de carga offshore de médio porte para patrulha, SAR e operações comerciais.',
      'df540-coaster': 'Patrulha Coaster Edition RIB com plataforma de trabalho modular dedicada.',
      df600: 'Patrulha offshore de 6 metros RIB com certificação CE Category B e combustível 140L.',
      df700: 'Cavalo de carga comercial SAR de 7 metros com tanque de combustível 285L ultragrande.',
      df760: 'Offshore SAR e interceptor pesado com tubos extragrandes de 60 cm e 300 HP.',
      df860: 'Interceptador carro-chefe de 8,6 m com 500 motores duplos HP.',
      ex7: 'Barco crossover de 7m com casco de fibra de vidro e tubos finos elevados.',
      ex9: 'Carro-chefe do crossover premium de 9 m com cabine, cabeçote, barra molhada e combustível 450L.',
      sw240: 'Tenda de alumínio ultraleve de 2,4 m com apenas 33 kg — portátil por uma pessoa.',
      sw260: 'Proposta de tamanho dourado em 35 kg – o equilíbrio perfeito entre capacidade e portabilidade.',
      sw290: 'Tender de tamanho médio com deadrise de 15° atualizado para melhor desempenho.',
      sw310: 'Tenda ampliada com tubos de 44cm e capacidade para 5 pessoas.',
      sw340: 'Carro-chefe Swiftlitee com capacidade para 6 pessoas por apenas 53 kg.',
      vr260: 'Mais compacto Versa com conforto de dois andares e tubos de alta flutuabilidade de 44 cm.',
      vr290: 'Tender de luxo sweet-spot com deck duplo e tubos de 44cm.',
      vr310: 'Milestone Versa com deck duplo compatível com console e capacidade para 5 pessoas.',
      vr340: 'Tender primário com excelente capacidade espacial e deck compatível com console.',
      vr360: 'Concurso de luxo de alto desempenho entrando na classe 30 HP.',
      vr380: 'Tenda de luxo de médio a grande porte com três opções de console para iates e catamarãs.',
      vr400:
        'Carro-chefe crossover com casco de 20° deep V e 50 HP para capacidade de cruzeiro de console de tamanho médio.',
      vr420: 'Cruzador de console de luxo de médio a grande porte com carga útil de 60 HP e 800 kg.',
      vr460: 'O maior carro-chefe Versa com carga útil de 70 HP, 920 kg e casco reforçado 4mm.',
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
      'airdeck-360': 'AirDeck 360',
      'heavy-duty-raft-commercial': '商用ヘビーデューティーラフト',
      'high-speed-catamaran': '高速レーシングカタマラン（AQHB）',
      'inflatable-catamaran-kayak': 'インフレータブルカヤックカタマラン',
      kaboat: 'KaBoat カヤックカタマラン（ZBシリーズ）',
      'kayak-full-dropstitch': 'フルドロップステッチ高性能カヤック',
      'kayak-hybrid': 'ドロップステッチハイブリッドカヤック',
      'life-vest-classic': 'ライフジャケット Classic',
      'life-vest-pro': 'ライフジャケット Pro',
      'oars-pump-set': 'オール・ポンプセット',
      'premium-dropstitch-seat': 'プレミアムドロップステッチシート',
      'rib-250': 'RIB250',
      'rib-270': 'RIB270',
      'rib-300': 'RIB300',
      'rib-330': 'RIB 330',
      'rib-330a': 'RIB330A',
      'rib-330b': 'RIB330B',
      'rib-330c': 'RIB330C',
      'rib-360a': 'RIB360A — ファミリーと釣りに最適な多目的3.6m RIB',
      'rib-360b': 'RIB360B — キャビンとコンソールを備えたプレミアム3.6mクルージングRIB',
      'rib-390a': 'RIB390A — 大型47cmチューブを備えたスポーティーな3.9m RIB',
      'rib-390al': 'RIB390AL — 4気室・コンソール・プレミアムオプション搭載の救助RIB',
      'rib-390b': 'RIB390B — 40L燃料タンクと完全キャビンを備えた堅牢な3.9m RIB',
      'rib-390bl': 'RIB390BL — ロールバー・サンデッキ・4気室を備えたフラッグシップ3.9m RIB',
      'rib-430a': 'RIB430A — テンダーと釣りに最適なオープンデッキの軽量4.3m RIB',
      'rib-430b': 'RIB430B — センターコンソール・4気室・ビルジポンプ搭載の4.3m RIB',
      'rib-430c': 'RIB430C — ロールバー・ウインドシールド・50Lタンクを備えた遠征用4.3m RIB',
      'rib-450-patrol': 'RIB 450 Patrol',
      'rib-480a': 'RIB480A — オープンデッキ・5気室・60 HP搭載の軽量4.8m RIB',
      'rib-480b': 'RIB480B — センターコンソール・60L燃料タンク・ターガアーチ搭載の4.8m RIB',
      'rib-480c': 'RIB480C — ウインドシールドコンソール・4スイッチパネル・リアキャビン搭載の4.8m RIB',
      'rib-480d': 'RIB480D — サンデッキ・スイムラダー・60L燃料タンクを備えたプレミアム4.8m RIB',
      'rib-480w': 'RIB480W — 2.35mの拡大幅とセンターコンソールを備えた4.8m RIB',
      'rib-500': 'RIB500 — 2.10m幅・52cmチューブ・60 HPを備えた5.0mオフショアRIB',
      'rib-520a': 'RIB520A — カスタマイズに最適なオープンデッキの軽量5.2m RIB',
      'rib-520b': 'RIB520B — 巡回とチャーターに最適なセンターコンソール広幅5.2m RIB',
      'rib-520c': 'RIB520C — センターコンソールとサンデッキを備えた広幅レジャー5.2m RIB',
      'rib-520e': 'RIB520E — 115 HPとステンレスロールバーを備えた堅牢な5.2m RIB',
      'rib-520w': 'RIB520W — 最大の安定性を実現する2.35m幅の最広幅5.2m RIB',
      'rib-550a': 'RIB550A — 90 HP搭載、巡回・釣り向け軽量5.5m RIB',
      'rib-550b': 'RIB550B — センターコンソールと100Lタンクを備えた完全装備5.5m RIB',
      'rib-580a': 'RIB580A — センターコンソール・115 HP・90Lタンク搭載の5.8mオフショアRIB',
      'rib-580b': 'RIB580B — 大型58cmチューブを備えた荒天対応5.8m RIB',
      'rib-600': 'RIB600 — 2.50m幅と6気室を備えた先進的な6.0m RIB',
      'rib-680a': 'RIB680A — 200 HP・7気室・生け簀を備えた大型6.6m RIB',
      'rib-680b': 'RIB680B — 200 HPとスキーバーを備えたフルサイズ6.8m乗客RIB',
      'rib-700': 'RIB700',
      'rib-760': 'RIB760',
      'sib-aluminum-floor': 'インフレータブルスポーツボート（アルミフロア）',
      'sib-dropstitch-floor': 'インフレータブルスポーツボート（ドロップステッチフロア）',
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
      'tactical-raft': '戦術遠征ラフト',
      'whitewater-raft': '次世代急流ラフト（AQDRB）',
      'zb-mt350': 'AQMT-11\'6"',

      ap330: 'Apex Performance 330 (AP330)',
      ap360: 'Apex Performance 360 (AP360)',
      ap390: 'Apex Performance 390 (AP390)',
      ap420: 'Apex Performance 420 (AP420)',
      ap460: 'Apex Performance 460 (AP460)',
      ap520: 'Apex Performance 520 (AP520)',
      ap560: 'Apex Performance 560 (AP560)',
      ap660: 'Apex Performance 660 (AP660)',
      ap700: 'Apex Performance 700 (AP700)',
      ap760: 'Apex Performance 760 (AP760)',
      ap800: 'Apex Performance 800 (AP800)',
      ap900: 'Apex Performance 900 (AP900)',
      df420: 'Defender 420 (DF420)',
      df460: 'Defender 460 (DF460)',
      df500: 'Defender 500 (DF500)',
      df540: 'Defender 540 (DF540)',
      'df540-coaster': 'Defender 540 Coaster (DF540 Coaster)',
      df600: 'Defender 600 (DF600)',
      df700: 'Defender 700 (DF700)',
      df760: 'Defender 760 (DF760)',
      df860: 'Defender 860 (DF860)',
      ex7: 'Explorer 7 (EX7)',
      ex9: 'Explorer 9 (EX9)',
      sw240: 'Swiftlitee 240 (SW240)',
      sw260: 'Swiftlitee 260 (SW260)',
      sw290: 'Swiftlitee 290 (SW290)',
      sw310: 'Swiftlitee 310 (SW310)',
      sw340: 'Swiftlitee 340 (SW340)',
      vr260: 'Versa 260 (VR260)',
      vr290: 'Versa 290 (VR290)',
      vr310: 'Versa 310 (VR310)',
      vr340: 'Versa 340 (VR340)',
      vr360: 'Versa 360 (VR360)',
      vr380: 'Versa 380 (VR380)',
      vr400: 'Versa 400 (VR400)',
      vr420: 'Versa 420 (VR420)',
      vr460: 'Versa 460 (VR460)',
    },
    summaries: {
      'airdeck-360':
        '強化エアデッキフロアを備えた広々とした3.6mインフレータブルボート — ファミリークルージングと釣りに最適です。',
      'heavy-duty-raft-commercial':
        '観光業における過酷な日常使用に向けて構築された商用インフレータブルラフト。強化フロアと工業用ファブリックを採用。',
      'high-speed-catamaran': '双胴構造により卓越した安定性・速度・機動性を実現するインフレータブル高速カタマラン。',
      'inflatable-catamaran-kayak':
        '初級者・釣り・レジャーパドリングに最適な卓越した安定性を備えた初心者向けインフレータブルカヤックカタマラン。',
      kaboat:
        '安定した双胴フィッシングプラットフォームから流線型の単胴ツーリングカヤックへと変身するカヤックとカタマランのハイブリッド。',
      'kayak-full-dropstitch':
        'フルドロップステッチ船体によるハードシート並みの剛性と精密な直進性を実現した高性能インフレータブルカヤック。',
      'kayak-hybrid':
        '剛性・携帯性・価格のバランスを取る部分ドロップステッチフロアを備えた多目的インフレータブルカヤック。',
      'life-vest-classic': 'レジャーマリンスポーツ向けCE認証取得の汎用ライフジャケット。',
      'life-vest-pro': '洋上・救助活動向けSOLAS準拠の自動膨張式ライフジャケット。',
      'oars-pump-set':
        '1.6mアルミオール1組と強力な5Lフットポンプ。シリーズのすべてのインフレータブルボートに対応します。',
      'premium-dropstitch-seat':
        '水上での長い一日に卓越した快適性とサポートを提供する高圧ドロップステッチインフレータブルシート。',
      'rib-250':
        '軽量アルミ船体を備えたコンパクトな2.5m RIB — ヨットテンダー、釣りボート、最大3人乗りの海洋艇として理想的です。',
      'rib-270':
        '162cm幅と10 HPを備えた中堅サイズの2.7m RIB — 安定性と携帯性を兼ね備え、海釣り・テンダー・沿岸クルージングに最適です。',
      'rib-300':
        '20 HP、ディープV船体、4人掛けシートを備えた多目的3.0m RIB — 海洋クルージングと沿岸アドベンチャーで家族に人気の一台です。',
      'rib-330':
        'アルミ船体を備えたベストセラーの3.3m RIB — ダビットで吊り下げ可能なヨットテンダーであり、最大5人乗りのファミリーデイボートです。',
      'rib-330a':
        'グラスファイバー船体、80kgの重量、20 HPを備えた軽量3.3m RIB — 俊敏で手頃な価格、トレーラー輸送も簡単です。',
      'rib-330b': 'バウマット、アンカーウェル、20 HPを備えた快適性重視の3.3m RIB — 4人乗りの洗練されたデイボートです。',
      'rib-330c':
        '前後キャビン、センターコンソール、20 HPを備えたプレミアム3.3m RIB — 最も完全に装備された3.3m仕様です。',
      'rib-360a':
        'グラスファイバー船体、1.80m幅、120kgの本体重量、650kgの積載能力を備えた軽量3.6m RIB。25 HPまでのエンジンで沿岸釣り・ファミリークルージング・港湾輸送に最適です。',
      'rib-360b':
        'グラスファイバー船体、1.80m幅、100kgの本体重量、650kgの積載能力を備えた充実装備の3.6m RIB。前後キャビン、センターコンソール、ビルジポンプを装備し、沿岸クルージングとファミリー航行に対応します。',
      'rib-390a':
        'グラスファイバー船体、1.85m幅、100kgの本体重量、47cmチューブを備えた軽量3.9m RIB。5人乗り・積載650kgで30 HP船外機の認定を取得。スポーツ・釣り・沿岸航行に最適です。',
      'rib-390al':
        'グラスファイバー船体、4つの独立エアチャンバー、1.85m幅、120kgの本体重量、650kgの積載能力を備えたプレミアム3.9m RIB。センターコンソール、シートボックス、高級フロアオプションを含みます。30 HP船外機の認定を取得。',
      'rib-390b':
        'グラスファイバー船体、1.85m幅、130kgの本体重量、47cmハイパロンチューブを備えた堅牢な3.9m RIB。前後キャビン、センターコンソール、ビルジポンプ、内蔵40L燃料タンクを装備。積載650kgで30 HP船外機の認定を取得。',
      'rib-390bl':
        'グラスファイバー船体、4気室、1.78m幅、110kgの本体重量、650kgの積載能力を備えた完全装備3.9m RIB。ステアリング付きセンターコンソール、照明付きロールバー、25L燃料タンク、サンデッキ、C字型チューブラダーを装備。30 HP船外機の認定を取得。',
      'rib-430a':
        '2.00m幅、3気室、170kgの本体重量、640kgの最大積載量を備えた軽量4.3mグラスファイバーRIB。沿岸補給、レジャー釣り、軽商用向けに開発されました。',
      'rib-430b':
        'センターコンソール、2.00m幅、4気室、200kgの本体重量、640kgの最大積載量を備えた4.3mグラスファイバーRIB。ビルジポンプ、船尾灯、スキーグリップを装備し、巡回・釣り・マリンスポーツに対応します。',
      'rib-430c':
        '1.96m幅、48cmチューブ、4気室、200kgの本体重量、640kgの最大積載量を備えた完全装備4.3mグラスファイバーRIB。ウインドシールド付きセンターコンソール、照明付きロールバー、内蔵50L燃料タンクを装備。',
      'rib-450-patrol': 'アルミ船体を備えた4.5mパトロールRIB。事業者向けの頑丈な構造です。',
      'rib-480a':
        '2.00m幅、5気室、183kgの本体重量、680kgの最大積載量を備えた軽量4.8mグラスファイバーRIB。最大エンジン出力60 HPで沿岸輸送・沖釣り・ダイビング業務向けに開発されました。',
      'rib-480b':
        'センターコンソール、2.00m幅、5気室、260kgの本体重量、680kgの最大積載量を備えた4.8mグラスファイバーRIB。ビルジポンプ、内蔵60L燃料タンク、航法灯付きターガアーチを装備。',
      'rib-480c':
        '2.00m幅、5気室、280kgの本体重量、680kgの最大積載量を備えた完全装備4.8mグラスファイバーRIB。ウインドシールドと4スイッチパネルを統合したセンターコンソール、リアキャビンシート、60 HPを装備。',
      'rib-480d':
        '2.00m幅、5気室、280kgの本体重量、680kgの最大積載量を備えたプレミアム4.8mグラスファイバーRIB。センターコンソール、内蔵60L燃料タンク、ターガアーチ、ステンレス製リアラダー、サンマットを装備し、ファミリー・チャーター利用に対応します。',
      'rib-480w':
        '2.35m幅、5気室、280kgの本体重量、680kgの最大積載量を備えた広幅4.8mグラスファイバーRIB。サイドシート付きセンターコンソール、60L燃料タンク、ターガアーチにより、チャーターとダイビングに卓越した安定性とデッキ面積を提供します。',
      'rib-500':
        '2.10m幅、52cmチューブ、5気室、314kgの本体重量、686kgの最大積載量を備えた5.0mオフショアグラスファイバーRIB。センターコンソール、60L燃料タンク、ターガアーチを装備し、遠征支援・沖釣り・商用輸送に対応します。',
      'rib-520a':
        'オープンデッキの軽量5.2m RIB（RIB520A）— 200kg船体、8人乗り、最大85 HP。カスタマイズ、沖釣り、ダイビング支援に最適です。',
      'rib-520b':
        'センターコンソール付き広幅5.2m RIB（RIB520B）— 2.28m幅、400kg船体、80L燃料タンク、8人乗り。沿岸巡回、沖釣り、乗客チャーター向けに構築されました。',
      'rib-520c':
        '広幅レジャー5.2m RIB（RIB520C）— 2.28m幅、360kg船体、センターコンソール、サンマット、照明付きターガアーチ。マリンスポーツ、ファミリークルージング、チャーターに最適です。',
      'rib-520e':
        '堅牢な5.2m RIB（RIB520E）— 450kg船体、最大115 HP、ゲージ付き80L燃料タンク、ステンレスロールバー、センターコンソール。本格的な沖釣りと遠征支援向けに構築されました。',
      'rib-520w':
        '最広幅の5.2m RIB（RIB520W）— 2.35m幅、230kg船体、オープンレイアウト、8人乗り、最大85 HP。ダイビング業務、ガイド釣り、乗客輸送に卓越した安定性を発揮します。',
      'rib-550a':
        '軽量5.5m RIB（RIB550A）— 240kg船体、2.30m幅、60L燃料タンク、7人乗り、最大90 HP。沿岸巡回・輸送・本格釣りのために特別に構築されました。',
      'rib-550b':
        'センターコンソール付き完全装備5.5m RIB（RIB550B）— 450kg船体、2.30m幅、100L燃料タンク、ロールバー、サンデッキ。長距離オフショア遠征と重輸送向けに構築されました。',
      'rib-580a':
        'センターコンソール付き5.8mオフショアRIB（RIB580A）— 450kg船体、2.38m幅、90L燃料タンク、ターガアーチ、8人乗り、最大115 HP。遠征輸送と深海釣り向けに構築されました。',
      'rib-580b':
        '荒天対応5.8m RIB（RIB580B）— 450kg船体、大型58cmチューブ、2.38m幅、90L燃料タンク、8人乗り、最大115 HP。過酷なオフショア条件で卓越した浮力と安定性を発揮します。',
      'rib-600':
        '先進的な6.0m RIB（RIB600）— 500kg船体、2.50m幅、6気室、120L燃料タンク、ロールバー、8人乗り、最大115 HP。中型と大型オフショアRIBの架け橋となる一台です。',
      'rib-680a':
        '大型6.6m RIB（RIB680A）— 500kg船体、2.52m幅、7気室、150L燃料タンク、生け簀、10人乗り、最大200 HP。ビッグゲームの海釣り、商用チャーター、ダイビング支援向けに構築されました。',
      'rib-680b':
        'フルサイズ6.8m乗客RIB（RIB680B）— 500kg船体、2.52m幅、7気室、100L燃料タンク、スキーバー、10人乗り、最大200 HP。商用乗客輸送、ダイビング支援、遠征曳航向けに開発されました。',
      'rib-700': '輸送と釣りに対応する710cmの長さを持つ高性能ハルRIB（RIB700）。',
      'rib-760': '輸送と釣りに対応する760cmの長さを持つ高性能ハルRIB（RIB760）。',
      'sib-aluminum-floor':
        '優れた性能と耐久性を実現する剛性アルミフロアを備えた多目的インフレータブルスポーツボート。',
      'sib-dropstitch-floor':
        '卓越した剛性と携帯性を提供する高圧ドロップステッチフロアを備えた軽量インフレータブルスポーツボート。',
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
      'tactical-raft': '戦術作戦、捜索救助、極限遠征使用のために構築された軍用規格のインフレータブルラフト。',
      'whitewater-raft':
        '自己排水式ボトム、強化構造、プロ向け川下りのための迅速なセットアップ機能を備えた堅牢な急流ラフト。',
      'zb-mt350': 'AQMT-11\'6" — 沿岸巡回、商用輸送、遠征支援に対応する11.5ftグラスファイバーRIB。',

      ap330: 'Apex Performance シリーズのエントリーレベルの高級コンソール RIB です。',
      ap360: '40 HP 機能を備えた中小規模の高級センター コンソール RIB テンダー。',
      ap390: '50 HP クラスに入る中型高級コンソール RIB。',
      ap420: '70 HP 容量と 55L 燃料タンクを備えた、初めてのファミリー デイボートに最適です。',
      ap460: '人間工学に基づいたレイアウトとbow lockerを採用した4mクラスのフラッグシップクロスオーバーモデル。',
      ap520: '24°沖合のdeep V船体と105L燃料タンクを備えた5メートルクラスの豪華なRIB。',
      ap560: '115 HP、105L 燃料を搭載し、定員 12 人を備えたコア長距離スポーツ RIB。',
      ap660: 'CE Category B オフショア高級 RIB、26° deep V および 200 HP。',
      ap700: '250 HP および 280L 燃料を搭載した 7 メートルの豪華なオフショア RIB。',
      ap760: '300 個の HP および 280L 燃料を搭載した、7.6 メートルの豪華な沖合旗艦 RIB。',
      ap800: '350 HP、ツイン エンジン サポート、300L 燃料タンクを備えたオフショア クルーズの旗艦。',
      ap900: '600 基の HP ツイン エンジンと 380L 燃料を搭載した全長 9.12 m の究極の旗艦 RIB。',
      df420: 'パトロールおよびユーティリティ業務向けのエントリーレベルの商用/大型 RIB。',
      df460: '機動性と積載量のバランスをとった4メートルクラスのユーティリティRIB。',
      df500: '24°洋上 deep V 船体と 90L 統合燃料タンクを備えた中核商用施設 RIB。',
      df540: 'パトロール、SAR、商業活動用の中型洋上主力艦。',
      'df540-coaster': 'Coaster Edition パトロール RIB には専用のモジュラー作業デッキが付いています。',
      df600: 'CE Category B 認定と 140L 燃料を備えた 6 メートルの洋上パトロール RIB。',
      df700: '超大型の 285L 燃料タンクを備えた、7 メートルの商用 SAR の主力製品。',
      df760: '沖合のSARと、60cmの特大チューブと300のHPを備えた重迎撃機。',
      df860: '500 HP 双発エンジンを搭載した全長 8.6 m の究極の主力迎撃機。',
      ex7: 'グラスファイバー製の船体と隆起したスリムなチューブを備えた 7 メートルのクロスオーバー ボート。',
      ex9: 'キャビン、ヘッド、ウェットバー、450L 燃料を備えた全長 9m のプレミアム クロスオーバー フラッグシップ。',
      sw240: 'わずか 33 kg の超軽量 2.4 m アルミニウム製テンダー - 1 人で持ち運び可能。',
      sw260: '35 kg のゴールデンサイズのテンダー — 容量と携帯性の完璧なバランス。',
      sw290: 'パフォーマンスを向上させるためにアップグレードされた 15° deadrise を備えた中型テンダー。',
      sw310: '44cmチューブで5人乗りの拡張テンダー。',
      sw340: 'わずか 53 kg で 6 人乗りのフラッグシップ Swiftlitee。',
      vr260: 'ダブルデッキの快適さと 44 cm の高浮力チューブを備えた最もコンパクトな Versa。',
      vr290: 'ダブルデッキと44cmチューブを備えたスイートスポットの豪華なテンダー。',
      vr310: 'マイルストーン Versa は、コンソール互換のダブルデッキ、定員 5 名を備えています。',
      vr340: '優れた空間容量とコンソール互換デッキを備えたプライマリーテンダー。',
      vr360: '30 HP クラスに参入した高性能高級テンダー。',
      vr380: 'ヨットとカタマラン用の 3 つのコンソール オプションを備えた中型から大型の豪華な入札船。',
      vr400: '20° deep V 船体と 50 HP を備えた中型コンソール クルーザー機能を備えたクロスオーバー フラッグシップ。',
      vr420: '60 HP および 800 kg ペイロードを備えた中型から大型の高級コンソール クルーザー。',
      vr460: 'HP、920 kg ペイロード、4mm 強化船体を備えた最大の Versa 旗艦。',
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
