export const LANGS = ["it", "en", "de", "fr"] as const;
export type Lang = (typeof LANGS)[number];

/** Testo disponibile in tutte le lingue del sito. */
export type Localized<T = string> = Record<Lang, T>;

export const LANG_META: Record<Lang, { label: string; locale: string }> = {
  it: { label: "Italiano", locale: "it-IT" },
  en: { label: "English", locale: "en-GB" },
  de: { label: "Deutsch", locale: "de-DE" },
  fr: { label: "Français", locale: "fr-FR" },
};

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
    discover: string;
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
    language: string;
  };
  welcome: {
    backToSite: string;
    eyebrow: string;
    title: string;
    intro: string;
    hostNote: string;
    houseRules: { eyebrow: string; title: string; thanks: string };
    restaurants: {
      eyebrow: string;
      title: string;
      intro: string;
      breakfastTitle: string;
      localTitle: string;
      casualTitle: string;
      tipsTitle: string;
    };
    activities: { eyebrow: string; title: string; intro: string; tipsTitle: string };
    transport: { eyebrow: string; title: string; intro: string };
    emergency: {
      eyebrow: string;
      title: string;
      intro: string;
      numbersTitle: string;
    };
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
      eyebrow: "Montopoli di Sabina · a un passo da Roma",
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
      discover: "Scopri di più",
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
        "Orbis in Sabina si trova a Montopoli di Sabina, in provincia di Rieti: la quiete della campagna romana a meno di un'ora dal centro di Roma, tra uliveti, borghi storici e la Via Salaria.",
      distanceRome: "~45 minuti da Roma centro",
      distanceAirport: "~55 minuti dall'aeroporto di Fiumicino",
      pointsOfInterestTitle: "Nei dintorni",
      pointsOfInterest: [
        "Borgo storico di Montopoli di Sabina",
        "Abbazia di Farfa",
        "Riserva Naturale Tevere-Farfa",
        "Roma e la Cupola di San Pietro, visibile dal terrazzo",
      ],
    },
    footer: {
      title: "Orbis in Sabina",
      address: "Montopoli di Sabina (RI), Italia",
      contactsTitle: "Contatti",
      whatsapp: "Scrivici su WhatsApp",
      followUs: "Seguici",
      rights: "Tutti i diritti riservati.",
    },
    common: {
      language: "Lingua",
    },
    welcome: {
      backToSite: "Torna al sito",
      eyebrow: "Il vostro soggiorno inizia qui",
      title: "Benvenuti a Orbis in Sabina",
      intro:
        "Questa guida raccoglie tutto quello che serve per godersi il soggiorno: regole della casa, dove mangiare, cosa fare nei dintorni, come muoversi e a chi rivolgersi in caso di emergenza.",
      hostNote: "Per qualsiasi necessità scriveteci pure su WhatsApp, in qualsiasi momento.",
      houseRules: {
        eyebrow: "Comfort, cura e vita tranquilla",
        title: "Regole della casa",
        thanks: "Grazie per il rispetto che dimostrate verso la casa e i nostri vicini.",
      },
      restaurants: {
        eyebrow: "Mangiare bene in Sabina",
        title: "Ristoranti",
        intro:
          "Una selezione di indirizzi vicino a Montopoli di Sabina, dalla colazione alla cena.",
        breakfastTitle: "Colazione",
        localTitle: "Cucina locale",
        casualTitle: "Pizza e informale",
        tipsTitle: "Consigli",
      },
      activities: {
        eyebrow: "Crea ricordi, un momento alla volta",
        title: "Cosa fare nei dintorni",
        intro:
          "Che siate qui per rilassarvi o per esplorare la Sabina, ecco qualche idea per il vostro soggiorno.",
        tipsTitle: "Consigli",
      },
      transport: {
        eyebrow: "Ovunque tu vada, viaggia con facilità",
        title: "Come muoversi",
        intro:
          "I modi più semplici per spostarsi durante il soggiorno, che si voglia raggiungere Roma o esplorare i borghi vicini.",
      },
      emergency: {
        eyebrow: "Mantenete la calma, i soccorsi sono vicini",
        title: "Emergenza",
        intro:
          "Numeri e indirizzi utili in caso di necessità. In un'emergenza reale chiamate sempre il 112.",
        numbersTitle: "Numeri di emergenza",
      },
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
      eyebrow: "Montopoli di Sabina · a step from Rome",
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
      discover: "Discover more",
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
        "Orbis in Sabina is located in Montopoli di Sabina, in the province of Rieti: the quiet of the Roman countryside less than an hour from central Rome, among olive groves, historic villages and the ancient Via Salaria.",
      distanceRome: "~45 minutes from central Rome",
      distanceAirport: "~55 minutes from Fiumicino airport",
      pointsOfInterestTitle: "Nearby",
      pointsOfInterest: [
        "Historic village of Montopoli di Sabina",
        "Farfa Abbey",
        "Tevere-Farfa Nature Reserve",
        "Rome and St. Peter's Dome, visible from the terrace",
      ],
    },
    footer: {
      title: "Orbis in Sabina",
      address: "Montopoli di Sabina (RI), Italy",
      contactsTitle: "Contacts",
      whatsapp: "Message us on WhatsApp",
      followUs: "Follow us",
      rights: "All rights reserved.",
    },
    common: {
      language: "Language",
    },
    welcome: {
      backToSite: "Back to the site",
      eyebrow: "Your stay starts here",
      title: "Welcome to Orbis in Sabina",
      intro:
        "This guide has everything you need for your stay: house rules, where to eat, what to do nearby, how to get around and who to contact in an emergency.",
      hostNote: "For anything you need, just message us on WhatsApp, any time.",
      houseRules: {
        eyebrow: "Comfort, care and a quiet stay",
        title: "House rules",
        thanks: "Thank you for the care you show for the house and our neighbours.",
      },
      restaurants: {
        eyebrow: "Eating well in Sabina",
        title: "Restaurants",
        intro:
          "A selection of places near Montopoli di Sabina, from breakfast to dinner.",
        breakfastTitle: "Breakfast",
        localTitle: "Local cuisine",
        casualTitle: "Pizza and casual",
        tipsTitle: "Tips",
      },
      activities: {
        eyebrow: "Make memories, one moment at a time",
        title: "What to do nearby",
        intro:
          "Whether you're here to relax or to explore Sabina, here are a few ideas for your stay.",
        tipsTitle: "Tips",
      },
      transport: {
        eyebrow: "Wherever you're headed, travel with ease",
        title: "Getting around",
        intro:
          "The easiest ways to get around during your stay, whether you're heading to Rome or exploring nearby villages.",
      },
      emergency: {
        eyebrow: "Stay calm, help is close by",
        title: "Emergency",
        intro:
          "Useful numbers and addresses if you need them. In a real emergency, always call 112.",
        numbersTitle: "Emergency numbers",
      },
    },
  },
  de: {
    nav: {
      rooms: "Zimmer",
      wellness: "Wellness",
      booking: "Verfügbarkeit",
      location: "Lage",
      contacts: "Kontakt",
    },
    hero: {
      eyebrow: "Montopoli di Sabina · nur einen Schritt von Rom",
      title: "Orbis in Sabina",
      claim:
        "Ein Ferienhaus, das die ganze Welt in fünf Zimmern vereint – inmitten der Hügel der Sabina.",
      cta: "Die Zimmer entdecken",
      ctaSecondary: "Verfügbarkeit",
      photoNote: "Fotos der Unterkunft folgen in Kürze",
    },
    rooms: {
      eyebrow: "Fünf Kontinente, ein Haus",
      title: "Die Zimmer",
      intro:
        "Jedes Zimmer ist eine Reise: Materialien, Farben und Details erzählen von einem anderen Kontinent – mit derselben Sorgfalt und demselben Komfort.",
      amenitiesTitle: "Ausstattung",
      close: "Schließen",
      discover: "Mehr erfahren",
      photoNote: "Fotos folgen in Kürze",
    },
    wellness: {
      eyebrow: "Der privateste Teil des Hauses",
      title: "Wellness & Entspannung",
      intro:
        "Ein Ort zum Entschleunigen: Sauna, privater Fitnessraum, Panoramaterrasse und Whirlpool – um wieder Zeit für sich selbst zu finden.",
      photoNote: "Fotos folgen in Kürze",
    },
    booking: {
      eyebrow: "Buchen Sie Ihren Aufenthalt",
      title: "Verfügbarkeit & Buchung",
      intro:
        "Der Kalender zeigt die bereits belegten Tage auf unseren Plattformen. Wählen Sie zum Buchen einfach den Kanal, den Sie bevorzugen.",
      bookOnBooking: "Auf Booking.com buchen",
      bookOnAirbnb: "Auf Airbnb buchen",
      calendarLegendFree: "Verfügbar",
      calendarLegendBusy: "Belegt",
      loading: "Verfügbarkeit wird geladen…",
      notConfigured:
        "Der Kalender wird aktiviert, sobald wir die iCal-Links der Inserate auf Booking.com und Airbnb erhalten haben.",
      error: "Der Kalender konnte gerade nicht geladen werden.",
    },
    location: {
      eyebrow: "Sabina, nur einen Schritt von Rom",
      title: "Lage",
      intro:
        "Orbis in Sabina liegt in Montopoli di Sabina in der Provinz Rieti: die Ruhe der römischen Landschaft, weniger als eine Stunde vom Zentrum Roms entfernt, zwischen Olivenhainen, historischen Dörfern und der antiken Via Salaria.",
      distanceRome: "~45 Minuten bis ins Zentrum von Rom",
      distanceAirport: "~55 Minuten zum Flughafen Fiumicino",
      pointsOfInterestTitle: "In der Umgebung",
      pointsOfInterest: [
        "Historischer Ortskern von Montopoli di Sabina",
        "Abtei Farfa",
        "Naturschutzgebiet Tevere-Farfa",
        "Rom und die Kuppel des Petersdoms – sichtbar von der Terrasse",
      ],
    },
    footer: {
      title: "Orbis in Sabina",
      address: "Montopoli di Sabina (RI), Italien",
      contactsTitle: "Kontakt",
      whatsapp: "Schreiben Sie uns auf WhatsApp",
      followUs: "Folgen Sie uns",
      rights: "Alle Rechte vorbehalten.",
    },
    common: {
      language: "Sprache",
    },
    welcome: {
      backToSite: "Zurück zur Website",
      eyebrow: "Ihr Aufenthalt beginnt hier",
      title: "Willkommen im Orbis in Sabina",
      intro:
        "Dieser Leitfaden enthält alles, was Sie für Ihren Aufenthalt brauchen: Hausregeln, Restaurants, Ausflugsziele in der Umgebung, Anreise und Mobilität sowie Ansprechpartner im Notfall.",
      hostNote: "Wenn Sie etwas brauchen, schreiben Sie uns jederzeit auf WhatsApp.",
      houseRules: {
        eyebrow: "Komfort, Sorgfalt und ein ruhiger Aufenthalt",
        title: "Hausregeln",
        thanks: "Vielen Dank für Ihre Rücksicht auf das Haus und unsere Nachbarn.",
      },
      restaurants: {
        eyebrow: "Gut essen in der Sabina",
        title: "Restaurants",
        intro:
          "Eine Auswahl an Adressen rund um Montopoli di Sabina – vom Frühstück bis zum Abendessen.",
        breakfastTitle: "Frühstück",
        localTitle: "Regionale Küche",
        casualTitle: "Pizza & Ungezwungenes",
        tipsTitle: "Tipps",
      },
      activities: {
        eyebrow: "Erinnerungen schaffen, Moment für Moment",
        title: "Ausflüge in der Umgebung",
        intro:
          "Ob Sie sich erholen oder die Sabina erkunden möchten – hier ein paar Ideen für Ihren Aufenthalt.",
        tipsTitle: "Tipps",
      },
      transport: {
        eyebrow: "Wohin Sie auch wollen – bequem unterwegs",
        title: "Unterwegs",
        intro:
          "Die einfachsten Möglichkeiten, sich während Ihres Aufenthalts fortzubewegen – ob nach Rom oder in die umliegenden Dörfer.",
      },
      emergency: {
        eyebrow: "Ruhe bewahren, Hilfe ist nah",
        title: "Notfall",
        intro:
          "Nützliche Nummern und Adressen für den Fall der Fälle. Im echten Notfall wählen Sie immer die 112.",
        numbersTitle: "Notrufnummern",
      },
    },
  },
  fr: {
    nav: {
      rooms: "Chambres",
      wellness: "Bien-être",
      booking: "Disponibilités",
      location: "Accès",
      contacts: "Contact",
    },
    hero: {
      eyebrow: "Montopoli di Sabina · à deux pas de Rome",
      title: "Orbis in Sabina",
      claim:
        "Une maison de vacances qui réunit le monde entier en cinq chambres, au cœur des collines de la Sabine.",
      cta: "Découvrir les chambres",
      ctaSecondary: "Disponibilités",
      photoNote: "Photos de la maison bientôt disponibles",
    },
    rooms: {
      eyebrow: "Cinq continents, une seule maison",
      title: "Les chambres",
      intro:
        "Chaque chambre est un voyage : matières, couleurs et détails racontent un continent différent, avec le même soin et le même confort.",
      amenitiesTitle: "Équipements",
      close: "Fermer",
      discover: "En savoir plus",
      photoNote: "Photos bientôt disponibles",
    },
    wellness: {
      eyebrow: "L'espace le plus intime de la maison",
      title: "Bien-être & Détente",
      intro:
        "Un lieu pensé pour ralentir : sauna, salle de sport privée, terrasse panoramique et jacuzzi, pour retrouver votre propre rythme.",
      photoNote: "Photos bientôt disponibles",
    },
    booking: {
      eyebrow: "Réservez votre séjour",
      title: "Disponibilités et réservation",
      intro:
        "Le calendrier indique les dates déjà réservées sur nos plateformes. Pour réserver, choisissez le canal que vous préférez.",
      bookOnBooking: "Réserver sur Booking.com",
      bookOnAirbnb: "Réserver sur Airbnb",
      calendarLegendFree: "Disponible",
      calendarLegendBusy: "Réservé",
      loading: "Chargement des disponibilités…",
      notConfigured:
        "Le calendrier sera actif dès que nous aurons reçu les liens iCal des annonces Booking.com et Airbnb.",
      error: "Le calendrier n'a pas pu être chargé pour le moment.",
    },
    location: {
      eyebrow: "La Sabine, à deux pas de Rome",
      title: "Accès",
      intro:
        "Orbis in Sabina se trouve à Montopoli di Sabina, dans la province de Rieti : le calme de la campagne romaine à moins d'une heure du centre de Rome, entre oliveraies, villages historiques et l'antique Via Salaria.",
      distanceRome: "~45 minutes du centre de Rome",
      distanceAirport: "~55 minutes de l'aéroport de Fiumicino",
      pointsOfInterestTitle: "Aux alentours",
      pointsOfInterest: [
        "Le village historique de Montopoli di Sabina",
        "L'abbaye de Farfa",
        "La réserve naturelle Tevere-Farfa",
        "Rome et la coupole de Saint-Pierre, visible depuis la terrasse",
      ],
    },
    footer: {
      title: "Orbis in Sabina",
      address: "Montopoli di Sabina (RI), Italie",
      contactsTitle: "Contact",
      whatsapp: "Écrivez-nous sur WhatsApp",
      followUs: "Suivez-nous",
      rights: "Tous droits réservés.",
    },
    common: {
      language: "Langue",
    },
    welcome: {
      backToSite: "Retour au site",
      eyebrow: "Votre séjour commence ici",
      title: "Bienvenue à Orbis in Sabina",
      intro:
        "Ce guide réunit tout ce qu'il faut pour profiter de votre séjour : règles de la maison, où manger, que faire aux alentours, comment se déplacer et qui contacter en cas d'urgence.",
      hostNote: "Pour toute demande, écrivez-nous sur WhatsApp, à tout moment.",
      houseRules: {
        eyebrow: "Confort, attention et séjour paisible",
        title: "Règles de la maison",
        thanks: "Merci pour le respect que vous portez à la maison et à nos voisins.",
      },
      restaurants: {
        eyebrow: "Bien manger en Sabine",
        title: "Restaurants",
        intro:
          "Une sélection d'adresses près de Montopoli di Sabina, du petit-déjeuner au dîner.",
        breakfastTitle: "Petit-déjeuner",
        localTitle: "Cuisine locale",
        casualTitle: "Pizza et décontracté",
        tipsTitle: "Conseils",
      },
      activities: {
        eyebrow: "Créer des souvenirs, un moment à la fois",
        title: "Que faire aux alentours",
        intro:
          "Que vous veniez pour vous détendre ou pour explorer la Sabine, voici quelques idées pour votre séjour.",
        tipsTitle: "Conseils",
      },
      transport: {
        eyebrow: "Où que vous alliez, voyagez en toute simplicité",
        title: "Se déplacer",
        intro:
          "Les moyens les plus simples de se déplacer pendant votre séjour, pour rejoindre Rome ou explorer les villages voisins.",
      },
      emergency: {
        eyebrow: "Gardez votre calme, les secours sont proches",
        title: "Urgences",
        intro:
          "Numéros et adresses utiles en cas de besoin. En cas d'urgence réelle, appelez toujours le 112.",
        numbersTitle: "Numéros d'urgence",
      },
    },
  },
};
