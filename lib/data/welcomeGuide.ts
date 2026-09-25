import type { Localized } from "@/lib/i18n/translations";

/** @deprecated usa Localized — mantenuto per compatibilità */
export type Bilingual = Localized;

export type GuideCard = {
  name: string;
  tag: Localized;
  note?: Localized;
};

export type GuideBlock = {
  title: Localized;
  items: string[] | Localized[];
};

// Dati verificati via ricerca web (settembre 2026). Nomi, orari e numeri di
// esercizi privati possono cambiare: da ricontrollare con Miriam/Iwan prima
// della pubblicazione definitiva — vedi README.

export const restaurants = {
  breakfast: [
    {
      name: "Bar del centro, Montopoli in Sabina",
      tag: {
        it: "colazione e caffetteria",
        en: "breakfast and coffee",
        de: "Frühstück und Kaffee",
        fr: "petit-déjeuner et café",
      },
    },
  ] satisfies GuideCard[],
  local: [
    {
      name: "I Granari",
      tag: {
        it: "cucina di pesce · vista sulle colline",
        en: "seafood · hillside view",
        de: "Fischküche · Blick auf die Hügel",
        fr: "cuisine de la mer · vue sur les collines",
      },
      note: {
        it: "Montopoli in Sabina — su prenotazione nel weekend",
        en: "Montopoli in Sabina — booking recommended on weekends",
        de: "Montopoli in Sabina — am Wochenende Reservierung empfohlen",
        fr: "Montopoli in Sabina — réservation conseillée le week-end",
      },
    },
    {
      name: "Poggio degli Ulivi",
      tag: {
        it: "cucina tradizionale sabina · terrazza panoramica",
        en: "traditional Sabina cuisine · panoramic terrace",
        de: "traditionelle Küche der Sabina · Panoramaterrasse",
        fr: "cuisine traditionnelle de la Sabine · terrasse panoramique",
      },
      note: {
        it: "Montopoli in Sabina",
        en: "Montopoli in Sabina",
        de: "Montopoli in Sabina",
        fr: "Montopoli in Sabina",
      },
    },
    {
      name: "Casale del Farfa",
      tag: {
        it: "piatti tipici e regionali",
        en: "regional, traditional dishes",
        de: "typische und regionale Gerichte",
        fr: "plats typiques et régionaux",
      },
      note: {
        it: "Montopoli in Sabina",
        en: "Montopoli in Sabina",
        de: "Montopoli in Sabina",
        fr: "Montopoli in Sabina",
      },
    },
  ] satisfies GuideCard[],
  casual: [
    {
      name: "Pizzeria La Mimosa",
      tag: { it: "pizzeria", en: "pizzeria", de: "Pizzeria", fr: "pizzeria" },
      note: {
        it: "Poggio Mirteto, a pochi minuti d'auto",
        en: "Poggio Mirteto, a few minutes by car",
        de: "Poggio Mirteto, wenige Autominuten entfernt",
        fr: "Poggio Mirteto, à quelques minutes en voiture",
      },
    },
  ] satisfies GuideCard[],
  tips: {
    it: [
      "Nel weekend meglio prenotare, soprattutto per cena",
      "Chiedeteci pure consigli su misura per i vostri gusti",
      "Controllate sempre gli orari di apertura prima di partire: nei piccoli borghi molti locali chiudono un giorno a settimana",
    ],
    en: [
      "Book ahead on weekends, especially for dinner",
      "Feel free to ask us for tailored suggestions",
      "Always check opening hours before heading out: in small villages many places close one day a week",
    ],
    de: [
      "Am Wochenende besser reservieren, vor allem zum Abendessen",
      "Fragen Sie uns gern nach Empfehlungen ganz nach Ihrem Geschmack",
      "Prüfen Sie vorher immer die Öffnungszeiten: In kleinen Dörfern haben viele Lokale einen Ruhetag pro Woche",
    ],
    fr: [
      "Le week-end, mieux vaut réserver, surtout pour le dîner",
      "N'hésitez pas à nous demander des conseils selon vos goûts",
      "Vérifiez toujours les horaires avant de partir : dans les petits villages, beaucoup d'établissements ferment un jour par semaine",
    ],
  } satisfies Localized<string[]>,
};

export const activities = {
  village: {
    title: {
      it: "Il borgo di Montopoli in Sabina",
      en: "The village of Montopoli in Sabina",
      de: "Das Dorf Montopoli in Sabina",
      fr: "Le village de Montopoli in Sabina",
    },
    items: [
      {
        it: "Torre Ugonesca, intatta dall'anno Mille",
        en: "Torre Ugonesca, unchanged since the year 1000",
        de: "Torre Ugonesca, seit dem Jahr 1000 unverändert erhalten",
        fr: "La Torre Ugonesca, intacte depuis l'an mil",
      },
      {
        it: "Piazza Comunale, con la sua fontana ottagonale",
        en: "Piazza Comunale, with its octagonal fountain",
        de: "Piazza Comunale mit ihrem achteckigen Brunnen",
        fr: "La Piazza Comunale et sa fontaine octogonale",
      },
      {
        it: "Chiesa di San Michele Arcangelo e Chiesa di Santa Maria degli Angeli",
        en: "Church of San Michele Arcangelo and Church of Santa Maria degli Angeli",
        de: "Kirche San Michele Arcangelo und Kirche Santa Maria degli Angeli",
        fr: "L'église San Michele Arcangelo et l'église Santa Maria degli Angeli",
      },
      {
        it: "Modern Automata Museum, museo privato di automi meccanici",
        en: "Modern Automata Museum, a private museum of mechanical automata",
        de: "Modern Automata Museum, ein privates Museum für mechanische Automaten",
        fr: "Le Modern Automata Museum, musée privé d'automates mécaniques",
      },
    ] satisfies Localized[],
  },
  nearby: {
    title: { it: "Nei dintorni", en: "Nearby", de: "In der Umgebung", fr: "Aux alentours" },
    items: [
      {
        it: "Abbazia di Farfa, tra le più importanti d'Italia: biblioteca, due chiostri e giardino",
        en: "Farfa Abbey, one of Italy's most important: library, two cloisters and a garden",
        de: "Abtei Farfa, eine der bedeutendsten Italiens: Bibliothek, zwei Kreuzgänge und Garten",
        fr: "L'abbaye de Farfa, l'une des plus importantes d'Italie : bibliothèque, deux cloîtres et jardin",
      },
      {
        it: "Borgo di Castelnuovo di Farfa, con il torrione di Porta Castello",
        en: "The village of Castelnuovo di Farfa, with its Porta Castello tower",
        de: "Das Dorf Castelnuovo di Farfa mit dem Turm der Porta Castello",
        fr: "Le village de Castelnuovo di Farfa et sa tour de la Porta Castello",
      },
      {
        it: "Centro storico di Poggio Mirteto",
        en: "The historic centre of Poggio Mirteto",
        de: "Die Altstadt von Poggio Mirteto",
        fr: "Le centre historique de Poggio Mirteto",
      },
      {
        it: "Una giornata a Roma: il centro è raggiungibile in auto in circa un'ora",
        en: "A day in Rome: the city centre is about an hour away by car",
        de: "Ein Tag in Rom: Das Zentrum ist mit dem Auto in etwa einer Stunde erreichbar",
        fr: "Une journée à Rome : le centre est à environ une heure en voiture",
      },
    ] satisfies Localized[],
  },
  tips: {
    it: [
      "La zona si visita meglio in auto: le distanze tra i borghi sono brevi ma i mezzi pubblici sono limitati",
      "Verificate gli orari di apertura dell'Abbazia di Farfa e del Museo prima di andare",
      "Chiedeteci un itinerario su misura in base al tempo che avete a disposizione",
    ],
    en: [
      "The area is best explored by car: villages are close together but public transport is limited",
      "Check opening hours for Farfa Abbey and the museum before you go",
      "Ask us for a tailored itinerary based on the time you have",
    ],
    de: [
      "Die Gegend erkundet man am besten mit dem Auto: Die Dörfer liegen nah beieinander, aber der Nahverkehr ist begrenzt",
      "Prüfen Sie vor dem Besuch die Öffnungszeiten der Abtei Farfa und des Museums",
      "Fragen Sie uns nach einer individuellen Route – passend zu der Zeit, die Sie haben",
    ],
    fr: [
      "La région se visite mieux en voiture : les villages sont proches mais les transports en commun sont limités",
      "Vérifiez les horaires de l'abbaye de Farfa et du musée avant d'y aller",
      "Demandez-nous un itinéraire sur mesure selon le temps dont vous disposez",
    ],
  } satisfies Localized<string[]>,
};

export const transport = {
  car: {
    title: { it: "In auto", en: "By car", de: "Mit dem Auto", fr: "En voiture" },
    items: [
      {
        it: "Il modo più comodo per muoversi in Sabina e raggiungere Roma",
        en: "The easiest way to get around Sabina and reach Rome",
        de: "Die bequemste Art, sich in der Sabina zu bewegen und nach Rom zu fahren",
        fr: "Le moyen le plus pratique pour circuler en Sabine et rejoindre Rome",
      },
      {
        it: "Roma centro: circa 53 km (45–60 minuti)",
        en: "Rome city centre: about 53 km (45–60 minutes)",
        de: "Zentrum von Rom: ca. 53 km (45–60 Minuten)",
        fr: "Centre de Rome : environ 53 km (45–60 minutes)",
      },
      {
        it: "Aeroporto di Fiumicino: circa 60 minuti",
        en: "Fiumicino airport: about 60 minutes",
        de: "Flughafen Fiumicino: ca. 60 Minuten",
        fr: "Aéroport de Fiumicino : environ 60 minutes",
      },
      {
        it: "Aeroporto di Ciampino: circa 50 minuti",
        en: "Ciampino airport: about 50 minutes",
        de: "Flughafen Ciampino: ca. 50 Minuten",
        fr: "Aéroport de Ciampino : environ 50 minutes",
      },
    ] satisfies Localized[],
  },
  train: {
    title: { it: "In treno", en: "By train", de: "Mit dem Zug", fr: "En train" },
    items: [
      {
        it: "Stazione di Poggio Mirteto Scalo, la più vicina",
        en: "Poggio Mirteto Scalo station, the closest one",
        de: "Bahnhof Poggio Mirteto Scalo, der nächstgelegene",
        fr: "Gare de Poggio Mirteto Scalo, la plus proche",
      },
      {
        it: "In alternativa, Fara Sabina–Passo Corese (collegamento Trenitalia/Cotral con Roma)",
        en: "Alternatively, Fara Sabina–Passo Corese (Trenitalia/Cotral connection with Rome)",
        de: "Alternativ Fara Sabina–Passo Corese (Trenitalia/Cotral-Verbindung nach Rom)",
        fr: "Sinon, Fara Sabina–Passo Corese (liaison Trenitalia/Cotral avec Rome)",
      },
    ] satisfies Localized[],
  },
  local: {
    title: { it: "Su richiesta", en: "On request", de: "Auf Anfrage", fr: "Sur demande" },
    items: [
      {
        it: "Taxi e NCC locali disponibili su prenotazione: chiedeteci un contatto",
        en: "Local taxis and chauffeur services available by booking: ask us for a contact",
        de: "Lokale Taxis und Fahrdienste auf Vorbestellung: Fragen Sie uns nach einem Kontakt",
        fr: "Taxis et VTC locaux sur réservation : demandez-nous un contact",
      },
    ] satisfies Localized[],
  },
};

export const houseRules = {
  checkIn: {
    it: "Check-in dalle 15:00",
    en: "Check-in from 3:00 PM",
    de: "Check-in ab 15:00 Uhr",
    fr: "Arrivée à partir de 15h00",
  } satisfies Localized,
  checkOut: {
    it: "Check-out entro le 11:00",
    en: "Check-out by 11:00 AM",
    de: "Check-out bis 11:00 Uhr",
    fr: "Départ avant 11h00",
  } satisfies Localized,
  items: [
    {
      title: { it: "Vietato fumare", en: "No smoking", de: "Rauchen verboten", fr: "Interdit de fumer" },
      text: {
        it: "Non è consentito fumare negli ambienti interni.",
        en: "Smoking is not allowed indoors.",
        de: "Das Rauchen ist in allen Innenräumen nicht gestattet.",
        fr: "Il est interdit de fumer à l'intérieur.",
      },
    },
    {
      title: { it: "Orari di silenzio", en: "Quiet hours", de: "Ruhezeiten", fr: "Heures de silence" },
      text: {
        it: "Vi chiediamo il massimo rispetto del silenzio dalle 22:00 alle 8:00, anche in terrazzo e in giardino.",
        en: "Please keep noise to a minimum between 10:00 PM and 8:00 AM, including on the terrace and garden.",
        de: "Bitte halten Sie zwischen 22:00 und 8:00 Uhr Ruhe ein – auch auf der Terrasse und im Garten.",
        fr: "Merci de respecter le silence entre 22h00 et 8h00, y compris sur la terrasse et dans le jardin.",
      },
    },
    {
      title: { it: "Ospiti e visitatori", en: "Guests and visitors", de: "Gäste und Besucher", fr: "Hôtes et visiteurs" },
      text: {
        it: "Possono soggiornare solo gli ospiti indicati in prenotazione. Per eventuali visite, contattateci prima.",
        en: "Only the guests listed on the booking may stay overnight. Please contact us in advance for any visitors.",
        de: "Übernachten dürfen nur die in der Buchung angegebenen Gäste. Für Besuch kontaktieren Sie uns bitte vorher.",
        fr: "Seuls les hôtes indiqués dans la réservation peuvent séjourner. Pour toute visite, contactez-nous au préalable.",
      },
    },
    {
      title: { it: "Animali domestici", en: "Pets", de: "Haustiere", fr: "Animaux de compagnie" },
      text: {
        it: "Ammessi solo previo accordo con la struttura.",
        en: "Allowed only with prior agreement.",
        de: "Nur nach vorheriger Absprache erlaubt.",
        fr: "Acceptés uniquement après accord préalable.",
      },
    },
    {
      title: { it: "Prima di uscire", en: "Before you leave", de: "Bevor Sie gehen", fr: "Avant de sortir" },
      text: {
        it: "Chiudete porte e finestre e spegnete luci e aria condizionata quando lasciate la struttura.",
        en: "Close doors and windows and turn off lights and air conditioning when you leave the property.",
        de: "Schließen Sie Türen und Fenster und schalten Sie Licht und Klimaanlage aus, wenn Sie das Haus verlassen.",
        fr: "Fermez portes et fenêtres et éteignez lumières et climatisation lorsque vous quittez la maison.",
      },
    },
    {
      title: { it: "Danni o problemi", en: "Damages or issues", de: "Schäden oder Probleme", fr: "Dégâts ou problèmes" },
      text: {
        it: "Può succedere: se qualcosa si rompe o smette di funzionare, scriveteci subito su WhatsApp così risolviamo velocemente.",
        en: "Accidents happen: if something breaks or stops working, message us on WhatsApp right away so we can sort it out quickly.",
        de: "Das kann passieren: Wenn etwas kaputtgeht oder nicht funktioniert, schreiben Sie uns sofort auf WhatsApp, damit wir es schnell lösen können.",
        fr: "Ça peut arriver : si quelque chose se casse ou ne fonctionne plus, écrivez-nous tout de suite sur WhatsApp pour que nous réglions cela rapidement.",
      },
    },
  ] satisfies { title: Localized; text: Localized }[],
};

export const emergency = {
  numbers: [
    {
      name: {
        it: "Numero unico di emergenza",
        en: "European emergency number",
        de: "Europäische Notrufnummer",
        fr: "Numéro d'urgence européen",
      },
      value: "112",
    },
    { name: { it: "Ambulanza", en: "Ambulance", de: "Rettungsdienst", fr: "Ambulance" }, value: "118" },
    { name: { it: "Vigili del Fuoco", en: "Fire brigade", de: "Feuerwehr", fr: "Pompiers" }, value: "115" },
    {
      name: {
        it: "Carabinieri — Poggio Mirteto",
        en: "Carabinieri (police) — Poggio Mirteto",
        de: "Carabinieri (Polizei) — Poggio Mirteto",
        fr: "Carabinieri (gendarmerie) — Poggio Mirteto",
      },
      value: "0765 24003",
    },
  ] satisfies { name: Localized; value: string }[],
  hospital: {
    title: {
      it: "Pronto Soccorso più vicino",
      en: "Nearest emergency room",
      de: "Nächstgelegene Notaufnahme",
      fr: "Urgences les plus proches",
    },
    items: [
      {
        it: "Monterotondo, Viale Bruno Buozzi — circa 23 km — tel. 06 90075881",
        en: "Monterotondo, Viale Bruno Buozzi — about 23 km — tel. 06 90075881",
        de: "Monterotondo, Viale Bruno Buozzi — ca. 23 km — Tel. 06 90075881",
        fr: "Monterotondo, Viale Bruno Buozzi — environ 23 km — tél. 06 90075881",
      },
      {
        it: "Palombara Sabina, Piazzale Salvo D'Acquisto — circa 24 km — tel. 0774 6545496",
        en: "Palombara Sabina, Piazzale Salvo D'Acquisto — about 24 km — tel. 0774 6545496",
        de: "Palombara Sabina, Piazzale Salvo D'Acquisto — ca. 24 km — Tel. 0774 6545496",
        fr: "Palombara Sabina, Piazzale Salvo D'Acquisto — environ 24 km — tél. 0774 6545496",
      },
    ] satisfies Localized[],
  },
  pharmacy: {
    title: { it: "Farmacia", en: "Pharmacy", de: "Apotheke", fr: "Pharmacie" },
    items: [
      {
        it: "Farmacia di Montopoli, Via Roma 33 — tel. 0765 279055",
        en: "Farmacia di Montopoli, Via Roma 33 — tel. 0765 279055",
        de: "Farmacia di Montopoli, Via Roma 33 — Tel. 0765 279055",
        fr: "Farmacia di Montopoli, Via Roma 33 — tél. 0765 279055",
      },
      {
        it: "Lun–Gio 8:30–13:00 e 16:00–19:30; per i turni festivi consultare le farmacie di turno della zona",
        en: "Mon–Thu 8:30am–1pm and 4pm–7:30pm; check local on-duty pharmacies for holidays",
        de: "Mo–Do 8:30–13:00 und 16:00–19:30 Uhr; an Feiertagen die Notdienst-Apotheken der Umgebung prüfen",
        fr: "Lun–Jeu 8h30–13h00 et 16h00–19h30 ; les jours fériés, consulter les pharmacies de garde de la région",
      },
    ] satisfies Localized[],
  },
  supermarket: {
    title: { it: "Supermercato", en: "Supermarket", de: "Supermarkt", fr: "Supermarché" },
    items: [
      {
        it: "Conad, Via Ferruti 104, Montopoli in Sabina — tel. 0765 446017",
        en: "Conad, Via Ferruti 104, Montopoli in Sabina — tel. 0765 446017",
        de: "Conad, Via Ferruti 104, Montopoli in Sabina — Tel. 0765 446017",
        fr: "Conad, Via Ferruti 104, Montopoli in Sabina — tél. 0765 446017",
      },
    ] satisfies Localized[],
  },
};
