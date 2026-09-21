export type Lang = "it" | "en";

export type TranslationDict = {
  nav: {
    rooms: string;
    wellness: string;
    booking: string;
    location: string;
    contacts: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    claim: string;
    cta: string;
    ctaSecondary: string;
    photoNote: string;
  };
  rooms: {
    eyebrow: string;
    title: string;
    intro: string;
    amenitiesTitle: string;
    close: string;
    photoNote: string;
  };
  wellness: {
    eyebrow: string;
    title: string;
    intro: string;
    photoNote: string;
  };
  booking: {
    eyebrow: string;
    title: string;
    intro: string;
    bookOnBooking: string;
    bookOnAirbnb: string;
    calendarLegendFree: string;
    calendarLegendBusy: string;
    loading: string;
    notConfigured: string;
    error: string;
  };
  location: {
    eyebrow: string;
    title: string;
    intro: string;
    distanceRome: string;
    distanceAirport: string;
    pointsOfInterestTitle: string;
    pointsOfInterest: string[];
  };
  footer: {
    title: string;
    address: string;
    contactsTitle: string;
    whatsapp: string;
    followUs: string;
    rights: string;
  };
  common: {
    langSwitch: string;
  };
};

export const translations: Record<Lang, TranslationDict> = {
  it: {
    nav: {
      rooms: "Le camere",
      wellness: "Wellness",
      booking: "Disponibilità",
      location: "Dove siamo",
      contacts: "Contatti",
    },
    hero: {
      eyebrow: "Montopoli in Sabina · a un passo da Roma",
      title: "Orbis in Sabina",
      claim:
        "Una casa vacanze che racchiude il mondo in cinque camere, tra le colline della Sabina.",
      cta: "Scopri le camere",
      ctaSecondary: "Disponibilità",
      photoNote: "Foto della struttura in arrivo",
    },
    rooms: {
      eyebrow: "Cinque continenti, una sola casa",
      title: "Le camere",
      intro:
        "Ogni camera è un viaggio: materiali, colori e dettagli raccontano un continente diverso, con lo stesso livello di cura e comfort.",
      amenitiesTitle: "Dotazioni",
      close: "Chiudi",
      photoNote: "Foto in arrivo",
    },
    wellness: {
      eyebrow: "La parte più intima della struttura",
      title: "Wellness & Relax",
      intro:
        "Uno spazio pensato per rallentare: sauna, palestra privata, terrazzo panoramico e vasca idromassaggio, per ritrovare il proprio tempo.",
      photoNote: "Foto in arrivo",
    },
    booking: {
      eyebrow: "Prenota il tuo soggiorno",
      title: "Disponibilità e prenotazione",
      intro:
        "Il calendario mostra le date già occupate sulle nostre piattaforme. Per prenotare, scegli il canale che preferisci.",
      bookOnBooking: "Prenota su Booking.com",
      bookOnAirbnb: "Prenota su Airbnb",
      calendarLegendFree: "Disponibile",
      calendarLegendBusy: "Occupato",
      loading: "Caricamento disponibilità…",
      notConfigured:
        "Il calendario sarà attivo appena riceviamo i link iCal delle inserzioni Booking.com e Airbnb.",
      error: "Non è stato possibile caricare il calendario in questo momento.",
    },
    location: {
      eyebrow: "Sabina, a un passo da Roma",
      title: "Dove siamo",
      intro:
        "Orbis in Sabina si trova a Montopoli in Sabina, in provincia di Rieti: la quiete della campagna romana a meno di un'ora dal centro di Roma, tra uliveti, borghi storici e la Via Salaria.",
      distanceRome: "~45 minuti da Roma centro",
      distanceAirport: "~55 minuti dall'aeroporto di Fiumicino",
      pointsOfInterestTitle: "Nei dintorni",
      pointsOfInterest: [
        "Borgo storico di Montopoli in Sabina",
        "Abbazia di Farfa",
        "Riserva Naturale Tevere-Farfa",
        "Roma e la Cupola di San Pietro, visibile dal terrazzo",
      ],
    },
    footer: {
      title: "Orbis in Sabina",
      address: "Montopoli in Sabina (RI), Italia",
      contactsTitle: "Contatti",
      whatsapp: "Scrivici su WhatsApp",
      followUs: "Seguici",
      rights: "Tutti i diritti riservati.",
    },
    common: {
      langSwitch: "EN",
    },
  },
  en: {
    nav: {
      rooms: "Rooms",
      wellness: "Wellness",
      booking: "Availability",
      location: "Location",
      contacts: "Contacts",
    },
    hero: {
      eyebrow: "Montopoli in Sabina · a step from Rome",
      title: "Orbis in Sabina",
      claim:
        "A vacation home that holds the whole world in five rooms, among the hills of Sabina.",
      cta: "Discover the rooms",
      ctaSecondary: "Availability",
      photoNote: "Photos of the property coming soon",
    },
    rooms: {
      eyebrow: "Five continents, one house",
      title: "The rooms",
      intro:
        "Each room is a journey: materials, colors and details tell the story of a different continent, with the same level of care and comfort.",
      amenitiesTitle: "Amenities",
      close: "Close",
      photoNote: "Photos coming soon",
    },
    wellness: {
      eyebrow: "The most intimate part of the house",
      title: "Wellness & Relax",
      intro:
        "A space designed to slow down: sauna, private gym, panoramic terrace and hot tub, to find your own time again.",
      photoNote: "Photos coming soon",
    },
    booking: {
      eyebrow: "Book your stay",
      title: "Availability & booking",
      intro:
        "The calendar shows the dates already booked on our platforms. To book, choose the channel you prefer.",
      bookOnBooking: "Book on Booking.com",
      bookOnAirbnb: "Book on Airbnb",
      calendarLegendFree: "Available",
      calendarLegendBusy: "Booked",
      loading: "Loading availability…",
      notConfigured:
        "The calendar will go live as soon as we receive the iCal links for the Booking.com and Airbnb listings.",
      error: "The calendar could not be loaded right now.",
    },
    location: {
      eyebrow: "Sabina, a step from Rome",
      title: "Location",
      intro:
        "Orbis in Sabina is located in Montopoli in Sabina, in the province of Rieti: the quiet of the Roman countryside less than an hour from central Rome, among olive groves, historic villages and the ancient Via Salaria.",
      distanceRome: "~45 minutes from central Rome",
      distanceAirport: "~55 minutes from Fiumicino airport",
      pointsOfInterestTitle: "Nearby",
      pointsOfInterest: [
        "Historic village of Montopoli in Sabina",
        "Farfa Abbey",
        "Tevere-Farfa Nature Reserve",
        "Rome and St. Peter's Dome, visible from the terrace",
      ],
    },
    footer: {
      title: "Orbis in Sabina",
      address: "Montopoli in Sabina (RI), Italy",
      contactsTitle: "Contacts",
      whatsapp: "Message us on WhatsApp",
      followUs: "Follow us",
      rights: "All rights reserved.",
    },
    common: {
      langSwitch: "IT",
    },
  },
};
