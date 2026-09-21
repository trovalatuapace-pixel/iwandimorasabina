export type Bilingual = { it: string; en: string };

export type GuideCard = {
  name: string;
  tag: Bilingual;
  note?: Bilingual;
};

export type GuideBlock = {
  title: Bilingual;
  items: string[] | Bilingual[];
};

// Dati verificati via ricerca web (settembre 2026). Nomi, orari e numeri di
// esercizi privati possono cambiare: da ricontrollare con Miriam/Iwan prima
// della pubblicazione definitiva — vedi README.

export const restaurants = {
  breakfast: [
    {
      name: "Bar del centro, Montopoli in Sabina",
      tag: { it: "colazione e caffetteria", en: "breakfast and coffee" },
    },
  ] satisfies GuideCard[],
  local: [
    {
      name: "I Granari",
      tag: { it: "cucina di pesce · vista sulle colline", en: "seafood · hillside view" },
      note: { it: "Montopoli in Sabina — su prenotazione nel weekend", en: "Montopoli in Sabina — booking recommended on weekends" },
    },
    {
      name: "Poggio degli Ulivi",
      tag: { it: "cucina tradizionale sabina · terrazza panoramica", en: "traditional Sabina cuisine · panoramic terrace" },
      note: { it: "Montopoli in Sabina", en: "Montopoli in Sabina" },
    },
    {
      name: "Casale del Farfa",
      tag: { it: "piatti tipici e regionali", en: "regional, traditional dishes" },
      note: { it: "Montopoli in Sabina", en: "Montopoli in Sabina" },
    },
  ] satisfies GuideCard[],
  casual: [
    {
      name: "Pizzeria La Mimosa",
      tag: { it: "pizzeria", en: "pizzeria" },
      note: { it: "Poggio Mirteto, a pochi minuti d'auto", en: "Poggio Mirteto, a few minutes by car" },
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
  },
};

export const activities = {
  village: {
    title: { it: "Il borgo di Montopoli in Sabina", en: "The village of Montopoli in Sabina" },
    items: [
      { it: "Torre Ugonesca, intatta dall'anno Mille", en: "Torre Ugonesca, unchanged since the year 1000" },
      { it: "Piazza Comunale, con la sua fontana ottagonale", en: "Piazza Comunale, with its octagonal fountain" },
      { it: "Chiesa di San Michele Arcangelo e Chiesa di Santa Maria degli Angeli", en: "Church of San Michele Arcangelo and Church of Santa Maria degli Angeli" },
      { it: "Modern Automata Museum, museo privato di automi meccanici", en: "Modern Automata Museum, a private museum of mechanical automata" },
    ] satisfies Bilingual[],
  },
  nearby: {
    title: { it: "Nei dintorni", en: "Nearby" },
    items: [
      { it: "Abbazia di Farfa, tra le più importanti d'Italia: biblioteca, due chiostri e giardino", en: "Farfa Abbey, one of Italy's most important: library, two cloisters and a garden" },
      { it: "Borgo di Castelnuovo di Farfa, con il torrione di Porta Castello", en: "The village of Castelnuovo di Farfa, with its Porta Castello tower" },
      { it: "Centro storico di Poggio Mirteto", en: "The historic centre of Poggio Mirteto" },
      { it: "Una giornata a Roma: il centro è raggiungibile in auto in circa un'ora", en: "A day in Rome: the city centre is about an hour away by car" },
    ] satisfies Bilingual[],
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
  },
};

export const transport = {
  car: {
    title: { it: "In auto", en: "By car" },
    items: [
      { it: "Il modo più comodo per muoversi in Sabina e raggiungere Roma", en: "The easiest way to get around Sabina and reach Rome" },
      { it: "Roma centro: circa 53 km (45–60 minuti)", en: "Rome city centre: about 53 km (45–60 minutes)" },
      { it: "Aeroporto di Fiumicino: circa 60 minuti", en: "Fiumicino airport: about 60 minutes" },
      { it: "Aeroporto di Ciampino: circa 50 minuti", en: "Ciampino airport: about 50 minutes" },
    ] satisfies Bilingual[],
  },
  train: {
    title: { it: "In treno", en: "By train" },
    items: [
      { it: "Stazione di Poggio Mirteto Scalo, la più vicina", en: "Poggio Mirteto Scalo station, the closest one" },
      { it: "In alternativa, Fara Sabina–Passo Corese (collegamento Trenitalia/Cotral con Roma)", en: "Alternatively, Fara Sabina–Passo Corese (Trenitalia/Cotral connection with Rome)" },
    ] satisfies Bilingual[],
  },
  local: {
    title: { it: "Su richiesta", en: "On request" },
    items: [
      { it: "Taxi e NCC locali disponibili su prenotazione: chiedeteci un contatto", en: "Local taxis and chauffeur services available by booking: ask us for a contact" },
    ] satisfies Bilingual[],
  },
};

export const houseRules = {
  checkIn: { it: "Check-in dalle 15:00", en: "Check-in from 3:00 PM" },
  checkOut: { it: "Check-out entro le 11:00", en: "Check-out by 11:00 AM" },
  items: [
    {
      title: { it: "Vietato fumare", en: "No smoking" },
      text: { it: "Non è consentito fumare negli ambienti interni.", en: "Smoking is not allowed indoors." },
    },
    {
      title: { it: "Orari di silenzio", en: "Quiet hours" },
      text: { it: "Vi chiediamo il massimo rispetto del silenzio dalle 22:00 alle 8:00, anche in terrazzo e in giardino.", en: "Please keep noise to a minimum between 10:00 PM and 8:00 AM, including on the terrace and garden." },
    },
    {
      title: { it: "Ospiti e visitatori", en: "Guests and visitors" },
      text: { it: "Possono soggiornare solo gli ospiti indicati in prenotazione. Per eventuali visite, contattateci prima.", en: "Only the guests listed on the booking may stay overnight. Please contact us in advance for any visitors." },
    },
    {
      title: { it: "Animali domestici", en: "Pets" },
      text: { it: "Ammessi solo previo accordo con la struttura.", en: "Allowed only with prior agreement." },
    },
    {
      title: { it: "Prima di uscire", en: "Before you leave" },
      text: { it: "Chiudete porte e finestre e spegnete luci e aria condizionata quando lasciate la struttura.", en: "Close doors and windows and turn off lights and air conditioning when you leave the property." },
    },
    {
      title: { it: "Danni o problemi", en: "Damages or issues" },
      text: { it: "Può succedere: se qualcosa si rompe o smette di funzionare, scriveteci subito su WhatsApp così risolviamo velocemente.", en: "Accidents happen: if something breaks or stops working, message us on WhatsApp right away so we can sort it out quickly." },
    },
  ],
};

export const emergency = {
  numbers: [
    { name: "Numero unico di emergenza", value: "112" },
    { name: "Ambulanza", value: "118" },
    { name: "Vigili del Fuoco", value: "115" },
    { name: "Carabinieri — Poggio Mirteto", value: "0765 24003" },
  ],
  hospital: {
    title: { it: "Pronto Soccorso più vicino", en: "Nearest emergency room" },
    items: [
      { it: "Monterotondo, Viale Bruno Buozzi — circa 23 km — tel. 06 90075881", en: "Monterotondo, Viale Bruno Buozzi — about 23 km — tel. 06 90075881" },
      { it: "Palombara Sabina, Piazzale Salvo D'Acquisto — circa 24 km — tel. 0774 6545496", en: "Palombara Sabina, Piazzale Salvo D'Acquisto — about 24 km — tel. 0774 6545496" },
    ] satisfies Bilingual[],
  },
  pharmacy: {
    title: { it: "Farmacia", en: "Pharmacy" },
    items: [
      { it: "Farmacia di Montopoli, Via Roma 33 — tel. 0765 279055", en: "Farmacia di Montopoli, Via Roma 33 — tel. 0765 279055" },
      { it: "Lun–Gio 8:30–13:00 e 16:00–19:30; per i turni festivi consultare le farmacie di turno della zona", en: "Mon–Thu 8:30am–1pm and 4pm–7:30pm; check local on-duty pharmacies for holidays" },
    ] satisfies Bilingual[],
  },
  supermarket: {
    title: { it: "Supermercato", en: "Supermarket" },
    items: [
      { it: "Conad, Via Ferruti 104, Montopoli in Sabina — tel. 0765 446017", en: "Conad, Via Ferruti 104, Montopoli in Sabina — tel. 0765 446017" },
    ] satisfies Bilingual[],
  },
};
