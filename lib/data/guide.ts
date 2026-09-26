import type { Lang, Localized } from "@/lib/i18n/translations";

/**
 * Guida "Dove andare": luoghi ed esperienze attorno alla casa, raggruppati per distanza/tema.
 * Ogni luogo apre la sua posizione su Google Maps (campo `map`).
 */

export type GuideItem = { name: Localized; text: Localized; map?: string };
export type GuideGroup = {
  id: string;
  when: Localized;
  title: Localized;
  photo?: string;
  items: GuideItem[];
};

const same = (s: string): Localized => ({ it: s, en: s, de: s, fr: s });

export const guideGroups: GuideGroup[] = [
  {
    id: "montopoli",
    when: { it: "Nel borgo della casa", en: "In the village", de: "Im Ort", fr: "Dans le village" },
    title: same("Montopoli di Sabina"),
    photo: "/foto/borgo-vicolo.webp",
    items: [
      {
        name: { it: "Centro storico e Torre Ugonesca", en: "Old town and Torre Ugonesca", de: "Altstadt und Torre Ugonesca", fr: "Centre historique et Torre Ugonesca" },
        map: "Torre Ugonesca Montopoli di Sabina",
        text: {
          it: "Una passeggiata tra i vicoli medievali porta alla Torre Ugonesca (X secolo), simbolo del paese, con una vista spettacolare sulla Valle del Tevere.",
          en: "A stroll through the medieval lanes leads to the Torre Ugonesca (10th century), symbol of the village, with a spectacular view over the Tiber valley.",
          de: "Ein Spaziergang durch die mittelalterlichen Gassen führt zur Torre Ugonesca (10. Jh.), dem Wahrzeichen des Ortes, mit herrlichem Blick über das Tibertal.",
          fr: "Une promenade dans les ruelles médiévales mène à la Torre Ugonesca (Xe siècle), symbole du village, avec une vue spectaculaire sur la vallée du Tibre.",
        },
      },
      {
        name: { it: "Chiesa di San Michele Arcangelo", en: "Church of San Michele Arcangelo", de: "Kirche San Michele Arcangelo", fr: "Église San Michele Arcangelo" },
        map: "Chiesa di San Michele Arcangelo Montopoli di Sabina",
        text: {
          it: "La chiesa parrocchiale nel cuore del borgo, che custodisce pregevoli opere d'arte sacra locale.",
          en: "The parish church in the heart of the village, home to fine works of local sacred art.",
          de: "Die Pfarrkirche im Herzen des Ortes bewahrt wertvolle Werke lokaler sakraler Kunst.",
          fr: "L'église paroissiale au cœur du village, qui abrite de belles œuvres d'art sacré local.",
        },
      },
      {
        name: { it: "Vicoli e scorci fioriti", en: "Flowered lanes and corners", de: "Blühende Gassen und Winkel", fr: "Ruelles et recoins fleuris" },
        map: "Montopoli di Sabina centro storico",
        text: {
          it: "Vicoli curati, piazzette pittoresche e angoli fioriti: il posto ideale per le foto ricordo del vostro soggiorno.",
          en: "Well-kept lanes, picturesque little squares and flowered corners: the perfect setting for photos of your stay.",
          de: "Gepflegte Gassen, malerische Plätze und blühende Ecken: ideal für Erinnerungsfotos Ihres Aufenthalts.",
          fr: "Ruelles soignées, placettes pittoresques et recoins fleuris : le cadre idéal pour les photos souvenirs de votre séjour.",
        },
      },
    ],
  },
  {
    id: "poggio-mirteto",
    when: { it: "A 10 minuti", en: "10 minutes away", de: "10 Minuten entfernt", fr: "À 10 minutes" },
    title: { it: "Poggio Mirteto, il cuore della Sabina", en: "Poggio Mirteto, the heart of Sabina", de: "Poggio Mirteto, das Herz der Sabina", fr: "Poggio Mirteto, le cœur de la Sabine" },
    items: [
      {
        name: same("Piazza Martiri della Libertà"),
        map: "Piazza Martiri della Libertà Poggio Mirteto",
        text: {
          it: "Una delle piazze più grandi e scenografiche della provincia, perfetta per un aperitivo all'aperto davanti alla Chiesa di San Rocco e alla Cattedrale di Santa Maria Assunta.",
          en: "One of the largest and most striking squares in the province, perfect for an open-air aperitivo facing the Church of San Rocco and the Cathedral of Santa Maria Assunta.",
          de: "Einer der größten und eindrucksvollsten Plätze der Provinz, perfekt für einen Aperitif im Freien vor der Kirche San Rocco und der Kathedrale Santa Maria Assunta.",
          fr: "L'une des places les plus grandes et spectaculaires de la province, parfaite pour un apéritif en plein air face à l'église San Rocco et à la cathédrale Santa Maria Assunta.",
        },
      },
      {
        name: { it: "Porta Farnese e il Borgo Vecchio", en: "Porta Farnese and the old town", de: "Porta Farnese und die Altstadt", fr: "Porta Farnese et le vieux bourg" },
        map: "Porta Farnese Poggio Mirteto",
        text: {
          it: "L'antico ingresso monumentale (1576) che introduce al nucleo medievale e ai resti del Palazzo Vescovile.",
          en: "The monumental old gateway (1576) leading into the medieval core and the remains of the Bishop's Palace.",
          de: "Das monumentale alte Stadttor (1576) führt in den mittelalterlichen Kern und zu den Resten des Bischofspalastes.",
          fr: "L'ancienne porte monumentale (1576) qui ouvre sur le noyau médiéval et les vestiges du palais épiscopal.",
        },
      },
      {
        name: { it: "Chiesa di San Paolo", en: "Church of San Paolo", de: "Kirche San Paolo", fr: "Église San Paolo" },
        map: "Chiesa di San Paolo Poggio Mirteto",
        text: {
          it: "Poco fuori dal centro, è una delle chiese più antiche della zona (XIII secolo), con la cripta medievale e affreschi d'epoca.",
          en: "Just outside the centre, one of the oldest churches in the area (13th century), with a medieval crypt and period frescoes.",
          de: "Etwas außerhalb des Zentrums, eine der ältesten Kirchen der Gegend (13. Jh.), mit mittelalterlicher Krypta und Fresken.",
          fr: "Juste à l'extérieur du centre, l'une des plus anciennes églises de la région (XIIIe siècle), avec une crypte médiévale et des fresques d'époque.",
        },
      },
    ],
  },
  {
    id: "cultura",
    when: { it: "Entro 20 minuti", en: "Within 20 minutes", de: "Bis 20 Minuten", fr: "À moins de 20 minutes" },
    title: { it: "Cultura, storia e borghi incantati", en: "Culture, history and enchanting villages", de: "Kultur, Geschichte und zauberhafte Dörfer", fr: "Culture, histoire et villages enchanteurs" },
    items: [
      {
        name: { it: "Abbazia di Farfa", en: "Farfa Abbey", de: "Abtei Farfa", fr: "Abbaye de Farfa" },
        map: "Abbazia di Farfa",
        text: {
          it: "Uno dei monasteri benedettini più famosi d'Europa: un luogo silenzioso e suggestivo, con visite guidate alla biblioteca antica e alla basilica, e il borgo artigiano tutto intorno.",
          en: "One of the most famous Benedictine monasteries in Europe: a quiet, evocative place with guided tours of the old library and the basilica, surrounded by a village of artisan workshops.",
          de: "Eines der berühmtesten Benediktinerklöster Europas: ein stiller, stimmungsvoller Ort mit Führungen durch die alte Bibliothek und die Basilika, umgeben von einem Handwerkerdorf.",
          fr: "L'un des monastères bénédictins les plus célèbres d'Europe : un lieu calme et saisissant, avec des visites guidées de l'ancienne bibliothèque et de la basilique, entouré d'un village d'artisans.",
        },
      },
      {
        name: { it: "Castelnuovo di Farfa e il Museo dell'Olio", en: "Castelnuovo di Farfa and the Olive Oil Museum", de: "Castelnuovo di Farfa und das Olivenölmuseum", fr: "Castelnuovo di Farfa et le musée de l'Huile" },
        map: "Museo dell'Olio della Sabina Castelnuovo di Farfa",
        text: {
          it: "Nel Palazzo Perelli, un museo unico che unisce l'arte contemporanea alla millenaria tradizione dell'olio extravergine DOP della Sabina.",
          en: "In Palazzo Perelli, a unique museum blending contemporary art with the age-old tradition of Sabina PDO extra virgin olive oil.",
          de: "Im Palazzo Perelli verbindet ein einzigartiges Museum zeitgenössische Kunst mit der jahrtausendealten Tradition des nativen Olivenöls extra g.U. der Sabina.",
          fr: "Au Palazzo Perelli, un musée unique qui associe l'art contemporain à la tradition millénaire de l'huile d'olive extra vierge AOP de la Sabine.",
        },
      },
      {
        name: same("Roccantica e Casperia"),
        map: "Casperia RI",
        text: {
          it: "Due borghi medievali perfettamente conservati. Casperia è interamente pedonale, con le sue vie a cerchi concentrici: un vero viaggio indietro nel tempo.",
          en: "Two perfectly preserved medieval villages. Casperia is entirely car-free, with streets laid out in concentric circles: a true journey back in time.",
          de: "Zwei perfekt erhaltene mittelalterliche Dörfer. Casperia ist vollständig autofrei, mit Gassen in konzentrischen Ringen: eine echte Zeitreise.",
          fr: "Deux villages médiévaux parfaitement conservés. Casperia est entièrement piéton, avec ses rues en cercles concentriques : un vrai voyage dans le temps.",
        },
      },
    ],
  },
  {
    id: "natura",
    when: { it: "Entro 20–30 minuti", en: "Within 20–30 minutes", de: "20–30 Minuten", fr: "À 20–30 minutes" },
    title: { it: "Natura, trekking e relax", en: "Nature, hiking and relaxation", de: "Natur, Wandern und Entspannung", fr: "Nature, randonnée et détente" },
    items: [
      {
        name: { it: "Riserva Naturale Nazzano Tevere-Farfa", en: "Nazzano Tevere-Farfa Nature Reserve", de: "Naturschutzgebiet Nazzano Tevere-Farfa", fr: "Réserve naturelle Nazzano Tevere-Farfa" },
        map: "Riserva Naturale Nazzano Tevere-Farfa",
        text: {
          it: "Un paradiso per il birdwatching e le passeggiate: si possono noleggiare canoe, fare escursioni a piedi o prenotare un giro in battello sul Tevere.",
          en: "A paradise for birdwatching and walks: rent a canoe, go hiking or book a boat trip on the Tiber.",
          de: "Ein Paradies für Vogelbeobachtung und Spaziergänge: Kanus mieten, wandern oder eine Bootsfahrt auf dem Tiber buchen.",
          fr: "Un paradis pour l'observation des oiseaux et les balades : location de canoës, randonnées à pied ou promenade en bateau sur le Tibre.",
        },
      },
      {
        name: { it: "Gole del Farfa", en: "Farfa Gorges", de: "Farfa-Schlucht", fr: "Gorges du Farfa" },
        map: "Gole del Farfa",
        text: {
          it: "Un monumento naturale dove il fiume Farfa scorre tra pareti di roccia. In estate è perfetto per escursioni rinfrescanti, trekking in acqua e pic-nic.",
          en: "A natural monument where the Farfa river flows between rock walls. In summer it is perfect for refreshing hikes, river trekking and picnics.",
          de: "Ein Naturdenkmal, in dem der Farfa zwischen Felswänden fließt. Im Sommer ideal für erfrischende Ausflüge, Wasserwandern und Picknicks.",
          fr: "Un monument naturel où le Farfa coule entre des parois rocheuses. En été, idéal pour des randonnées rafraîchissantes, du trekking aquatique et des pique-niques.",
        },
      },
      {
        name: { it: "Dolina del Revotano", en: "Revotano sinkhole", de: "Doline von Revotano", fr: "Doline du Revotano" },
        map: "Revotano Roccantica",
        text: {
          it: "Presso Roccantica, un'enorme conca carsica immersa nei boschi, raggiungibile con un sentiero: ideale per chi ama l'avventura.",
          en: "Near Roccantica, a huge karst basin surrounded by woods and reached on foot along a trail: ideal for adventure lovers.",
          de: "Bei Roccantica liegt eine riesige Karstsenke mitten im Wald, erreichbar über einen Wanderweg: ideal für Abenteuerlustige.",
          fr: "Près de Roccantica, une immense cuvette karstique au milieu des bois, accessible par un sentier : idéale pour les amateurs d'aventure.",
        },
      },
    ],
  },
  {
    id: "esperienze",
    when: { it: "Da vivere", en: "To experience", de: "Zum Erleben", fr: "À vivre" },
    title: { it: "Sapori ed esperienze", en: "Flavours and experiences", de: "Genuss und Erlebnisse", fr: "Saveurs et expériences" },
    items: [
      {
        name: { it: "Degustazione di olio extravergine DOP", en: "PDO extra virgin olive oil tasting", de: "Verkostung von nativem Olivenöl extra g.U.", fr: "Dégustation d'huile d'olive extra vierge AOP" },
        map: "frantoio Sabina",
        text: {
          it: "La Sabina è terra d'olio: molti frantoi storici della zona offrono visite guidate e degustazioni su prenotazione.",
          en: "Sabina is olive oil country: many historic mills in the area offer guided tours and tastings by reservation.",
          de: "Die Sabina ist ein Olivenölland: Viele historische Ölmühlen bieten nach Voranmeldung Führungen und Verkostungen an.",
          fr: "La Sabine est une terre d'huile : de nombreux moulins historiques proposent visites guidées et dégustations sur réservation.",
        },
      },
      {
        name: { it: "Il mercato del venerdì a Poggio Mirteto", en: "Friday market in Poggio Mirteto", de: "Freitagsmarkt in Poggio Mirteto", fr: "Le marché du vendredi à Poggio Mirteto" },
        map: "Poggio Mirteto",
        text: {
          it: "Un appuntamento settimanale tradizionale: prodotti a chilometro zero, formaggi, salumi e la porchetta della Sabina.",
          en: "A traditional weekly event: local produce, cheeses, cured meats and Sabina porchetta.",
          de: "Ein traditioneller Wochenmarkt: regionale Produkte, Käse, Wurstwaren und die Porchetta der Sabina.",
          fr: "Un rendez-vous hebdomadaire traditionnel : produits locaux, fromages, charcuteries et la porchetta de la Sabine.",
        },
      },
    ],
  },
  {
    id: "gite",
    when: { it: "Gite in giornata", en: "Day trips", de: "Tagesausflüge", fr: "Excursions à la journée" },
    title: { it: "Roma e Rieti", en: "Rome and Rieti", de: "Rom und Rieti", fr: "Rome et Rieti" },
    photo: "/foto/vista-cupola-san-pietro.webp",
    items: [
      {
        name: { it: "Roma", en: "Rome", de: "Rom", fr: "Rome" },
        map: "Roma",
        text: {
          it: "Circa 45 minuti in auto, oppure in treno da Poggio Mirteto Scalo. E dal terrazzo della casa, con il binocolo, si scorge la Cupola di San Pietro.",
          en: "About 45 minutes by car, or by train from Poggio Mirteto Scalo. And from the terrace, with the binoculars, you can see St. Peter's Dome.",
          de: "Etwa 45 Minuten mit dem Auto oder mit dem Zug ab Poggio Mirteto Scalo. Und von der Terrasse aus sieht man mit dem Fernglas die Kuppel des Petersdoms.",
          fr: "Environ 45 minutes en voiture, ou en train depuis Poggio Mirteto Scalo. Et depuis la terrasse, avec les jumelles, on aperçoit la coupole de Saint-Pierre.",
        },
      },
      {
        name: same("Rieti"),
        map: "Rieti centro storico",
        text: {
          it: "Il capoluogo della Sabina, con il centro storico, il Palazzo Papale e la piazza che segna l'Umbilicus Italiae, il centro geografico d'Italia.",
          en: "The capital of Sabina, with its old town, the Papal Palace and the square marking the Umbilicus Italiae, the geographical centre of Italy.",
          de: "Die Hauptstadt der Sabina mit Altstadt, Papstpalast und dem Platz des Umbilicus Italiae, des geografischen Mittelpunkts Italiens.",
          fr: "Le chef-lieu de la Sabine, avec son centre historique, le Palais papal et la place qui marque l'Umbilicus Italiae, le centre géographique de l'Italie.",
        },
      },
      {
        name: { it: "Rieti Sotterranea", en: "Underground Rieti", de: "Unterirdisches Rieti", fr: "Rieti souterraine" },
        map: "Rieti Sotterranea",
        text: {
          it: "Un percorso sotto i palazzi del centro storico, lungo l'antico viadotto romano della Via Salaria: si visita con guida, un viaggio affascinante nella Rieti di duemila anni fa.",
          en: "A route beneath the palaces of the old town, along the ancient Roman viaduct of the Via Salaria: guided tours only, a fascinating journey into the Rieti of two thousand years ago.",
          de: "Ein Weg unter den Palästen der Altstadt entlang des antiken römischen Viadukts der Via Salaria: nur mit Führung, eine faszinierende Reise in das Rieti vor zweitausend Jahren.",
          fr: "Un parcours sous les palais du centre historique, le long de l'ancien viaduc romain de la Via Salaria : visite guidée uniquement, un voyage fascinant dans la Rieti d'il y a deux mille ans.",
        },
      },
    ],
  },
  {
    id: "fuori-porta",
    when: { it: "Da 30 minuti a 1 ora e ¼", en: "30 minutes to 1¼ hours away", de: "30 Minuten bis 1¼ Stunden", fr: "De 30 minutes à 1h15" },
    title: { it: "Gite fuori porta: storia, laghi e montagna", en: "Day trips: history, lakes and mountains", de: "Ausflüge: Geschichte, Seen und Berge", fr: "Escapades : histoire, lacs et montagne" },
    items: [
      {
        name: { it: "Bunker del Monte Soratte", en: "Monte Soratte Bunker", de: "Bunker am Monte Soratte", fr: "Bunker du mont Soratte" },
        map: "Bunker Soratte Sant'Oreste",
        text: {
          it: "Chilometri di gallerie scavate nella montagna a Sant'Oreste: rifugio voluto negli anni '30, quartier generale tedesco durante la guerra e poi bunker antiatomico della Guerra Fredda. Visite guidate su prenotazione.",
          en: "Kilometres of tunnels dug into the mountain at Sant'Oreste: a shelter built in the 1930s, German headquarters during the war and later a Cold War nuclear bunker. Guided tours by reservation.",
          de: "Kilometerlange Stollen im Berg bei Sant'Oreste: in den 1930er-Jahren als Schutzraum angelegt, im Krieg deutsches Hauptquartier, später Atombunker des Kalten Krieges. Führungen nach Voranmeldung.",
          fr: "Des kilomètres de galeries creusées dans la montagne à Sant'Oreste : abri construit dans les années 1930, quartier général allemand pendant la guerre puis bunker antiatomique de la guerre froide. Visites guidées sur réservation.",
        },
      },
      {
        name: { it: "Santuario di Greccio", en: "Greccio Sanctuary", de: "Heiligtum von Greccio", fr: "Sanctuaire de Greccio" },
        map: "Santuario di Greccio",
        text: {
          it: "Aggrappato alla roccia sopra la Valle Santa reatina, è il luogo dove San Francesco nel Natale del 1223 allestì il primo presepe della storia.",
          en: "Clinging to the rock above the Holy Valley of Rieti, this is where St Francis created the very first nativity scene at Christmas 1223.",
          de: "Am Felsen über dem Heiligen Tal von Rieti gelegen: Hier gestaltete der heilige Franziskus an Weihnachten 1223 die erste Krippe der Geschichte.",
          fr: "Accroché à la roche au-dessus de la Vallée sainte de Rieti, c'est ici que saint François créa la toute première crèche de l'histoire, à Noël 1223.",
        },
      },
      {
        name: { it: "Lago del Turano", en: "Lake Turano", de: "Turano-See", fr: "Lac du Turano" },
        map: "Lago del Turano Castel di Tora",
        text: {
          it: "Un lago verde smeraldo tra le montagne, con i borghi di Castel di Tora e Colle di Tora affacciati sull'acqua: kayak, SUP, passeggiate e pranzo vista lago.",
          en: "An emerald-green lake among the mountains, with the villages of Castel di Tora and Colle di Tora overlooking the water: kayak, SUP, walks and lunch with a lake view.",
          de: "Ein smaragdgrüner See zwischen den Bergen mit den Dörfern Castel di Tora und Colle di Tora direkt am Wasser: Kajak, SUP, Spaziergänge und Mittagessen mit Seeblick.",
          fr: "Un lac vert émeraude entre les montagnes, avec les villages de Castel di Tora et Colle di Tora au bord de l'eau : kayak, paddle, balades et déjeuner avec vue sur le lac.",
        },
      },
      {
        name: { it: "Cascate delle Marmore", en: "Marmore Falls", de: "Marmore-Wasserfälle", fr: "Cascades des Marmore" },
        map: "Cascata delle Marmore",
        text: {
          it: "Tra le cascate più alte d'Europa (165 metri), create dai Romani più di duemila anni fa. Il salto d'acqua si apre a orari prestabiliti: controllate il calendario prima di partire.",
          en: "Among the highest waterfalls in Europe (165 metres), created by the Romans over two thousand years ago. The water flow is released at set times: check the schedule before you go.",
          de: "Einer der höchsten Wasserfälle Europas (165 Meter), von den Römern vor über zweitausend Jahren geschaffen. Das Wasser wird zu festen Zeiten freigegeben: Prüfen Sie vorher den Kalender.",
          fr: "L'une des plus hautes cascades d'Europe (165 mètres), créée par les Romains il y a plus de deux mille ans. L'eau est lâchée à heures fixes : consultez le calendrier avant de partir.",
        },
      },
      {
        name: same("Monte Terminillo"),
        map: "Monte Terminillo",
        text: {
          it: "La \"montagna di Roma\" (2.217 m): d'inverno piste da sci e neve, d'estate trekking, mountain bike e aria fresca con panorami su tutto l'Appennino.",
          en: "\"Rome's mountain\" (2,217 m): skiing and snow in winter, hiking, mountain biking and fresh air in summer, with views across the Apennines.",
          de: "Der „Hausberg Roms\" (2.217 m): im Winter Skipisten und Schnee, im Sommer Wandern, Mountainbiken und frische Luft mit Blick über den Apennin.",
          fr: "La « montagne de Rome » (2 217 m) : ski et neige en hiver, randonnée, VTT et air frais en été, avec des panoramas sur tout l'Apennin.",
        },
      },
    ],
  },
];

export const guideUi: Record<Lang, { eyebrow: string; title: string; lead: string; map: string }> = {
  it: {
    eyebrow: "Dove andare",
    title: "Cosa vedere attorno alla casa",
    lead: "Dal borgo di Montopoli alle abbazie, dai borghi medievali alle gole del Farfa, fino al Lago del Turano, al Terminillo e alle Cascate delle Marmore: la nostra selezione di luoghi ed esperienze, ordinati per distanza. Toccate un luogo per aprirlo sulla mappa.",
    map: "Apri sulla mappa",
  },
  en: {
    eyebrow: "Where to go",
    title: "What to see around the house",
    lead: "From the village of Montopoli to abbeys, medieval villages and the Farfa gorges, all the way to Lake Turano, Mount Terminillo and the Marmore Falls: our selection of places and experiences, ordered by distance. Tap a place to open it on the map.",
    map: "Open on the map",
  },
  de: {
    eyebrow: "Ausflugsziele",
    title: "Sehenswertes rund um das Haus",
    lead: "Vom Ort Montopoli bis zu Abteien, mittelalterlichen Dörfern und der Farfa-Schlucht bis zum Turano-See, zum Terminillo und zu den Marmore-Wasserfällen: unsere Auswahl an Orten und Erlebnissen, nach Entfernung geordnet. Tippen Sie auf einen Ort, um ihn auf der Karte zu öffnen.",
    map: "Auf der Karte öffnen",
  },
  fr: {
    eyebrow: "Où aller",
    title: "À voir autour de la maison",
    lead: "Du village de Montopoli aux abbayes, des villages médiévaux aux gorges du Farfa, jusqu'au lac du Turano, au Terminillo et aux cascades des Marmore : notre sélection de lieux et d'expériences, classés par distance. Touchez un lieu pour l'ouvrir sur la carte.",
    map: "Ouvrir sur la carte",
  },
};

export function guideMapsUrl(query: string) {
  return `https://www.google.com/maps/search/${encodeURIComponent(query)}`;
}
