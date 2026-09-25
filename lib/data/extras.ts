import type { Lang, Localized } from "@/lib/i18n/translations";

/**
 * Sezioni aggiunte dopo l'analisi di un sito di riferimento (casabellariva.com):
 * barra azioni mobile, richiesta preventivo, servizi inclusi/su richiesta,
 * "tutto attorno a te" e distanze dei luoghi.
 *
 * DA CONFERMARE CON IWAN prima della pubblicazione definitiva:
 *  - Wi-Fi e biancheria inclusi, orari check-in/check-out (15:00 / 11:00, come nel welcome book)
 *  - politica animali, parcheggio, eventuali servizi a pagamento
 */

export type ServiceIcon =
  | "checkin" | "wifi" | "linen" | "spa" | "terrace" | "clean" | "taxi" | "pet" | "breakfast";

export type ServiceItem = { icon: ServiceIcon; title: Localized; text: Localized };

export const servicesIncluded: ServiceItem[] = [
  {
    icon: "checkin",
    title: { it: "Check-in e check-out", en: "Check-in and check-out", de: "Check-in und Check-out", fr: "Arrivée et départ" },
    text: {
      it: "Check-in dalle 15:00, check-out entro le 11:00. Orari diversi si possono concordare.",
      en: "Check-in from 3 pm, check-out by 11 am. Different times can be arranged.",
      de: "Check-in ab 15:00 Uhr, Check-out bis 11:00 Uhr. Andere Zeiten nach Absprache.",
      fr: "Arrivée à partir de 15h, départ avant 11h. D'autres horaires sont possibles sur demande.",
    },
  },
  {
    icon: "wifi",
    title: { it: "Wi-Fi", en: "Wi-Fi", de: "WLAN", fr: "Wi-Fi" },
    text: {
      it: "Connessione gratuita in tutta la casa.",
      en: "Free connection throughout the house.",
      de: "Kostenlos im ganzen Haus.",
      fr: "Connexion gratuite dans toute la maison.",
    },
  },
  {
    icon: "linen",
    title: { it: "Biancheria", en: "Linen", de: "Bettwäsche und Handtücher", fr: "Linge de maison" },
    text: {
      it: "Lenzuola e asciugamani inclusi per tutto il soggiorno.",
      en: "Bed linen and towels included for the whole stay.",
      de: "Bettwäsche und Handtücher für den gesamten Aufenthalt inklusive.",
      fr: "Draps et serviettes inclus pour tout le séjour.",
    },
  },
  {
    icon: "spa",
    title: { it: "Area benessere", en: "Wellness area", de: "Wellnessbereich", fr: "Espace bien-être" },
    text: {
      it: "Sauna, palestra e vasca idromassaggio a disposizione degli ospiti.",
      en: "Sauna, gym and hot tub available to guests.",
      de: "Sauna, Fitnessraum und Whirlpool stehen den Gästen zur Verfügung.",
      fr: "Sauna, salle de sport et bain à remous à la disposition des hôtes.",
    },
  },
  {
    icon: "terrace",
    title: { it: "Terrazzo panoramico", en: "Panoramic terrace", de: "Panoramaterrasse", fr: "Terrasse panoramique" },
    text: {
      it: "Con binocolo puntato sulla Cupola di San Pietro.",
      en: "With binoculars pointed at St. Peter's Dome.",
      de: "Mit Fernglas, gerichtet auf die Kuppel des Petersdoms.",
      fr: "Avec des jumelles pointées sur la coupole de Saint-Pierre.",
    },
  },
];

export const servicesOnRequest: ServiceItem[] = [
  {
    icon: "clean",
    title: { it: "Riassetto e cambio biancheria", en: "Extra cleaning and linen change", de: "Zwischenreinigung und Wäschewechsel", fr: "Ménage et changement de linge" },
    text: {
      it: "Durante il soggiorno, su richiesta.",
      en: "During your stay, on request.",
      de: "Während des Aufenthalts auf Anfrage.",
      fr: "Pendant le séjour, sur demande.",
    },
  },
  {
    icon: "taxi",
    title: { it: "Transfer, taxi e NCC", en: "Transfers, taxi and private driver", de: "Transfer, Taxi und Mietwagen mit Fahrer", fr: "Transferts, taxi et VTC" },
    text: {
      it: "Da e per Roma e gli aeroporti: vi mettiamo in contatto con autisti locali.",
      en: "To and from Rome and the airports: we put you in touch with local drivers.",
      de: "Von und nach Rom und zu den Flughäfen: Wir vermitteln lokale Fahrer.",
      fr: "Depuis et vers Rome et les aéroports : nous vous mettons en contact avec des chauffeurs locaux.",
    },
  },
  {
    icon: "pet",
    title: { it: "Animali domestici", en: "Pets", de: "Haustiere", fr: "Animaux de compagnie" },
    text: {
      it: "Ammessi previo accordo con la struttura.",
      en: "Welcome by prior arrangement.",
      de: "Nach vorheriger Absprache willkommen.",
      fr: "Acceptés après accord préalable.",
    },
  },
];

/** Categorie di servizi vicini: aprono una ricerca su Google Maps attorno a Montopoli. */
export const nearbyCategories: { query: string; title: Localized; text: Localized }[] = [
  {
    query: "ristoranti",
    title: { it: "Ristoranti e trattorie", en: "Restaurants and trattorias", de: "Restaurants und Trattorien", fr: "Restaurants et trattorias" },
    text: { it: "Cucina sabina e piatti tipici", en: "Sabine cuisine and local dishes", de: "Sabinische Küche und typische Gerichte", fr: "Cuisine de la Sabine et plats typiques" },
  },
  {
    query: "pizzeria",
    title: { it: "Pizzerie", en: "Pizzerias", de: "Pizzerien", fr: "Pizzerias" },
    text: { it: "Per una cena informale", en: "For a casual dinner", de: "Für ein zwangloses Abendessen", fr: "Pour un dîner décontracté" },
  },
  {
    query: "bar caffè",
    title: { it: "Bar e colazioni", en: "Cafés and breakfast", de: "Bars und Frühstück", fr: "Cafés et petit-déjeuner" },
    text: { it: "Caffè, cornetti e aperitivi", en: "Coffee, pastries and aperitifs", de: "Kaffee, Gebäck und Aperitif", fr: "Café, viennoiseries et apéritifs" },
  },
  {
    query: "frantoio olio",
    title: { it: "Frantoi e olio Sabina DOP", en: "Olive mills and Sabina PDO oil", de: "Ölmühlen und Olivenöl Sabina g.U.", fr: "Moulins et huile Sabina AOP" },
    text: { it: "Il prodotto simbolo del territorio", en: "The area's signature product", de: "Das Aushängeschild der Region", fr: "Le produit phare du territoire" },
  },
  {
    query: "supermercato",
    title: { it: "Supermercati e alimentari", en: "Supermarkets and groceries", de: "Supermärkte und Lebensmittel", fr: "Supermarchés et épiceries" },
    text: { it: "Conad in Via Ferruti, Montopoli", en: "Conad in Via Ferruti, Montopoli", de: "Conad in der Via Ferruti, Montopoli", fr: "Conad, Via Ferruti, Montopoli" },
  },
  {
    query: "farmacia",
    title: { it: "Farmacia", en: "Pharmacy", de: "Apotheke", fr: "Pharmacie" },
    text: { it: "Farmacia di Montopoli, Via Roma 33", en: "Montopoli pharmacy, Via Roma 33", de: "Apotheke Montopoli, Via Roma 33", fr: "Pharmacie de Montopoli, Via Roma 33" },
  },
  {
    query: "bancomat",
    title: { it: "Banca e bancomat", en: "Bank and ATM", de: "Bank und Geldautomat", fr: "Banque et distributeur" },
    text: { it: "Prelievi e servizi bancari", en: "Cash and banking services", de: "Bargeld und Bankdienste", fr: "Retraits et services bancaires" },
  },
  {
    query: "stazione Poggio Mirteto Scalo",
    title: { it: "Stazione ferroviaria", en: "Train station", de: "Bahnhof", fr: "Gare" },
    text: { it: "Poggio Mirteto Scalo, treni per Roma", en: "Poggio Mirteto Scalo, trains to Rome", de: "Poggio Mirteto Scalo, Züge nach Rom", fr: "Poggio Mirteto Scalo, trains pour Rome" },
  },
];

export function nearbyMapsUrl(query: string) {
  return `https://www.google.com/maps/search/${encodeURIComponent(`${query} vicino a Montopoli di Sabina RI`)}`;
}

type Ui = {
  servicesEyebrow: string;
  servicesTitle: string;
  included: string;
  onRequest: string;
  nearbyEyebrow: string;
  nearbyTitle: string;
  nearbyLead: string;
  openMap: string;
  distance: string;
  guests: (n: string) => string;
  bar: { call: string; whatsapp: string; quote: string };
  quote: {
    eyebrow: string;
    title: string;
    lead: string;
    arrival: string;
    departure: string;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    roomLabel: (n: number) => string;
    roomType: string;
    anyRoom: string;
    adults: string;
    children: string;
    none: string;
    addRoom: string;
    removeRoom: string;
    message: string;
    consent: string;
    sendWhatsapp: string;
    sendEmail: string;
    note: string;
    subject: string;
    intro: string;
  };
  legal: { cin: string; cir: string; vat: string; codes: string; capacityLabel: string; capacity: (rooms: number, beds: number) => string };
};

export const ui: Record<Lang, Ui> = {
  it: {
    servicesEyebrow: "Servizi",
    servicesTitle: "Cosa è compreso nel soggiorno",
    included: "Inclusi",
    onRequest: "Su richiesta",
    nearbyEyebrow: "A portata di mano",
    nearbyTitle: "Tutto quello che serve, attorno a voi",
    nearbyLead: "Ristoranti, alimentari, farmacia, bancomat e stazione: a Montopoli e nei paesi vicini trovate tutto per il soggiorno. Toccate una voce per vederla sulla mappa.",
    openMap: "Apri sulla mappa",
    distance: "Distanza",
    guests: (n) => `${n} ospiti`,
    bar: { call: "Chiama", whatsapp: "WhatsApp", quote: "Preventivo" },
    quote: {
      eyebrow: "Richiesta",
      title: "Chiedi un preventivo",
      lead: "Indicate date e ospiti: vi rispondiamo al più presto con disponibilità e prezzo.",
      arrival: "Data di arrivo",
      departure: "Data di partenza",
      firstName: "Nome",
      lastName: "Cognome",
      phone: "Telefono",
      email: "Email",
      roomLabel: (n) => `Camera ${n}`,
      roomType: "Camera",
      anyRoom: "Indifferente",
      adults: "Adulti",
      children: "Bambini",
      none: "Nessuno",
      addRoom: "Aggiungi camera",
      removeRoom: "Rimuovi",
      message: "Messaggio (facoltativo)",
      consent: "Acconsento all'uso dei miei dati solo per ricevere risposta a questa richiesta.",
      sendWhatsapp: "Invia la richiesta su WhatsApp",
      sendEmail: "Invia la richiesta via email",
      note: "La richiesta non è vincolante.",
      subject: "Richiesta preventivo",
      intro: "Buongiorno, vorrei un preventivo per Orbis in Sabina.",
    },
    legal: { cin: "CIN", cir: "CIR", vat: "P. IVA", codes: "Codici struttura", capacityLabel: "La struttura", capacity: (r, b) => `${r} camere · ${b} posti letto` },
  },
  en: {
    servicesEyebrow: "Services",
    servicesTitle: "What your stay includes",
    included: "Included",
    onRequest: "On request",
    nearbyEyebrow: "Close at hand",
    nearbyTitle: "Everything you need, all around you",
    nearbyLead: "Restaurants, groceries, a pharmacy, ATMs and the train station: Montopoli and the nearby villages have everything for your stay. Tap an item to see it on the map.",
    openMap: "Open map",
    distance: "Distance",
    guests: (n) => `${n} guests`,
    bar: { call: "Call", whatsapp: "WhatsApp", quote: "Quote" },
    quote: {
      eyebrow: "Enquiry",
      title: "Request a quote",
      lead: "Tell us your dates and guests: we will reply as soon as possible with availability and price.",
      arrival: "Arrival date",
      departure: "Departure date",
      firstName: "First name",
      lastName: "Last name",
      phone: "Phone",
      email: "Email",
      roomLabel: (n) => `Room ${n}`,
      roomType: "Room",
      anyRoom: "No preference",
      adults: "Adults",
      children: "Children",
      none: "None",
      addRoom: "Add a room",
      removeRoom: "Remove",
      message: "Message (optional)",
      consent: "I agree to my data being used only to reply to this request.",
      sendWhatsapp: "Send request via WhatsApp",
      sendEmail: "Send request by email",
      note: "The request is not binding.",
      subject: "Quote request",
      intro: "Hello, I would like a quote for Orbis in Sabina.",
    },
    legal: { cin: "CIN", cir: "CIR", vat: "VAT no.", codes: "Registration codes", capacityLabel: "The house", capacity: (r, b) => `${r} bedrooms · sleeps ${b}` },
  },
  de: {
    servicesEyebrow: "Leistungen",
    servicesTitle: "Was im Aufenthalt enthalten ist",
    included: "Inklusive",
    onRequest: "Auf Anfrage",
    nearbyEyebrow: "In der Nähe",
    nearbyTitle: "Alles, was Sie brauchen, ganz in der Nähe",
    nearbyLead: "Restaurants, Lebensmittel, Apotheke, Geldautomat und Bahnhof: In Montopoli und den Nachbarorten finden Sie alles für Ihren Aufenthalt. Tippen Sie auf einen Eintrag für die Karte.",
    openMap: "Karte öffnen",
    distance: "Entfernung",
    guests: (n) => `${n} Gäste`,
    bar: { call: "Anrufen", whatsapp: "WhatsApp", quote: "Angebot" },
    quote: {
      eyebrow: "Anfrage",
      title: "Angebot anfordern",
      lead: "Nennen Sie uns Reisedaten und Gäste: Wir antworten so schnell wie möglich mit Verfügbarkeit und Preis.",
      arrival: "Anreise",
      departure: "Abreise",
      firstName: "Vorname",
      lastName: "Nachname",
      phone: "Telefon",
      email: "E-Mail",
      roomLabel: (n) => `Zimmer ${n}`,
      roomType: "Zimmer",
      anyRoom: "Egal",
      adults: "Erwachsene",
      children: "Kinder",
      none: "Keine",
      addRoom: "Zimmer hinzufügen",
      removeRoom: "Entfernen",
      message: "Nachricht (optional)",
      consent: "Ich bin einverstanden, dass meine Daten nur zur Beantwortung dieser Anfrage verwendet werden.",
      sendWhatsapp: "Anfrage per WhatsApp senden",
      sendEmail: "Anfrage per E-Mail senden",
      note: "Die Anfrage ist unverbindlich.",
      subject: "Angebotsanfrage",
      intro: "Guten Tag, ich möchte ein Angebot für Orbis in Sabina.",
    },
    legal: { cin: "CIN", cir: "CIR", vat: "USt-IdNr.", codes: "Registrierungsnummern", capacityLabel: "Das Haus", capacity: (r, b) => `${r} Zimmer · ${b} Schlafplätze` },
  },
  fr: {
    servicesEyebrow: "Services",
    servicesTitle: "Ce que comprend le séjour",
    included: "Inclus",
    onRequest: "Sur demande",
    nearbyEyebrow: "À portée de main",
    nearbyTitle: "Tout ce qu'il vous faut, autour de vous",
    nearbyLead: "Restaurants, épiceries, pharmacie, distributeurs et gare : à Montopoli et dans les villages voisins, vous trouvez tout pour votre séjour. Touchez un élément pour le voir sur la carte.",
    openMap: "Ouvrir la carte",
    distance: "Distance",
    guests: (n) => `${n} personnes`,
    bar: { call: "Appeler", whatsapp: "WhatsApp", quote: "Devis" },
    quote: {
      eyebrow: "Demande",
      title: "Demander un devis",
      lead: "Indiquez vos dates et le nombre de personnes : nous vous répondons au plus vite avec disponibilités et tarif.",
      arrival: "Date d'arrivée",
      departure: "Date de départ",
      firstName: "Prénom",
      lastName: "Nom",
      phone: "Téléphone",
      email: "E-mail",
      roomLabel: (n) => `Chambre ${n}`,
      roomType: "Chambre",
      anyRoom: "Indifférent",
      adults: "Adultes",
      children: "Enfants",
      none: "Aucun",
      addRoom: "Ajouter une chambre",
      removeRoom: "Retirer",
      message: "Message (facultatif)",
      consent: "J'accepte que mes données soient utilisées uniquement pour répondre à cette demande.",
      sendWhatsapp: "Envoyer la demande sur WhatsApp",
      sendEmail: "Envoyer la demande par e-mail",
      note: "La demande est sans engagement.",
      subject: "Demande de devis",
      intro: "Bonjour, je souhaiterais un devis pour Orbis in Sabina.",
    },
    legal: { cin: "CIN", cir: "CIR", vat: "N° TVA", codes: "Codes d'enregistrement", capacityLabel: "La maison", capacity: (r, b) => `${r} chambres · ${b} couchages` },
  },
};
