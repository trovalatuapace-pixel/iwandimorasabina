import type { Localized } from "@/lib/i18n/translations";

/**
 * Testi del modello di soggiorno: cinque camere prenotabili una per una
 * (spazi comuni condivisi con gli altri ospiti) oppure l'intera casa in esclusiva.
 */

/** Identificativo dell'opzione "casa intera" nel calendario e nei moduli. */
export const WHOLE_HOUSE_ID = "casa";

export const wholeHouse = {
  name: { it: "Casa intera", en: "Whole house", de: "Das ganze Haus", fr: "Maison entière" } as Localized,
  tagline: {
    it: "Tutta la casa in esclusiva, per il vostro gruppo",
    en: "The whole house to yourselves, for your group",
    de: "Das ganze Haus exklusiv für Ihre Gruppe",
    fr: "Toute la maison en exclusivité pour votre groupe",
  } as Localized,
  text: {
    it: "Cinque camere, sala, cucina, palestra, sauna e terrazzo con idromassaggio solo per voi: da 2 a 11 ospiti, senza altri ospiti in casa. Il prezzo dipende da date e numero di persone: scriveteci per un preventivo.",
    en: "Five rooms, living room, kitchen, gym, sauna and a terrace with hot tub just for you: from 2 to 11 guests, with no other guests in the house. The price depends on dates and group size: write to us for a quote.",
    de: "Fünf Zimmer, Wohnbereich, Küche, Fitnessraum, Sauna und Terrasse mit Whirlpool nur für Sie: von 2 bis 11 Gäste, ohne andere Gäste im Haus. Der Preis hängt von Datum und Personenzahl ab: Fragen Sie uns nach einem Angebot.",
    fr: "Cinq chambres, salon, cuisine, salle de sport, sauna et terrasse avec jacuzzi rien que pour vous : de 2 à 11 personnes, sans autres hôtes dans la maison. Le tarif dépend des dates et du nombre de personnes : écrivez-nous pour un devis.",
  } as Localized,
  guests: "2-11",
  priceOnRequest: {
    it: "Prezzo su richiesta",
    en: "Price on request",
    de: "Preis auf Anfrage",
    fr: "Tarif sur demande",
  } as Localized,
  button: {
    it: "Chiedi la casa intera",
    en: "Ask about the whole house",
    de: "Ganzes Haus anfragen",
    fr: "Demander la maison entière",
  } as Localized,
};

export const stayUi = {
  from: { it: "da", en: "from", de: "ab", fr: "dès" } as Localized,
  perNight: { it: "a notte", en: "per night", de: "pro Nacht", fr: "par nuit" } as Localized,
  forTwo: { it: "per 2 ospiti", en: "for 2 guests", de: "für 2 Gäste", fr: "pour 2 personnes" } as Localized,
  forThree: { it: "per 3 ospiti", en: "for 3 guests", de: "für 3 Gäste", fr: "pour 3 personnes" } as Localized,
  privateBath: { it: "Bagno privato", en: "Private bathroom", de: "Eigenes Bad", fr: "Salle de bain privée" } as Localized,
  total: { it: "Totale indicativo", en: "Estimated total", de: "Voraussichtlicher Gesamtpreis", fr: "Total indicatif" } as Localized,
  totalNote: {
    it: "Il prezzo definitivo viene confermato in fase di prenotazione.",
    en: "The final price is confirmed when you book.",
    de: "Der endgültige Preis wird bei der Buchung bestätigt.",
    fr: "Le tarif définitif est confirmé lors de la réservation.",
  } as Localized,
  chooseStay: { it: "Cosa volete prenotare?", en: "What would you like to book?", de: "Was möchten Sie buchen?", fr: "Que souhaitez-vous réserver ?" } as Localized,
  /** Sezione "due modi di soggiornare" in home e nella pagina camere. */
  modes: {
    eyebrow: { it: "Due modi di soggiornare", en: "Two ways to stay", de: "Zwei Arten zu wohnen", fr: "Deux façons de séjourner" } as Localized,
    title: { it: "Una camera, o tutta la casa", en: "One room, or the whole house", de: "Ein Zimmer oder das ganze Haus", fr: "Une chambre, ou toute la maison" } as Localized,
    lead: {
      it: "Ogni camera si prenota da sola, con bagno privato e serratura elettronica sulla porta, e gli spazi comuni sono da vivere insieme agli altri ospiti. Chi viaggia in gruppo può invece avere tutta la casa in esclusiva.",
      en: "Each room can be booked on its own, with a private bathroom and an electronic lock on the door, and the shared spaces are enjoyed together with the other guests. Groups can instead have the whole house to themselves.",
      de: "Jedes Zimmer lässt sich einzeln buchen, mit eigenem Bad und elektronischem Schloss an der Tür; die Gemeinschaftsbereiche teilen Sie mit den anderen Gästen. Gruppen können stattdessen das ganze Haus exklusiv mieten.",
      fr: "Chaque chambre se réserve séparément, avec salle de bain privée et serrure électronique sur la porte, et les espaces communs se partagent avec les autres hôtes. Les groupes peuvent au contraire avoir toute la maison en exclusivité.",
    } as Localized,
    roomTitle: { it: "Una camera", en: "A single room", de: "Ein Zimmer", fr: "Une chambre" } as Localized,
    roomText: {
      it: "Cinque camere, una per continente, a 180 € a notte per 2 ospiti. Bagno privato in ogni camera e porta con serratura elettronica.",
      en: "Five rooms, one per continent, at €180 per night for 2 guests. Private bathroom in every room and a door with an electronic lock.",
      de: "Fünf Zimmer, eines pro Kontinent, für 180 € pro Nacht und 2 Gäste. Eigenes Bad in jedem Zimmer und Tür mit elektronischem Schloss.",
      fr: "Cinq chambres, une par continent, à 180 € la nuit pour 2 personnes. Salle de bain privée dans chaque chambre et porte à serrure électronique.",
    } as Localized,
    roomButton: { it: "Scegli la camera", en: "Choose a room", de: "Zimmer wählen", fr: "Choisir une chambre" } as Localized,
    houseTitle: { it: "Tutta la casa", en: "The whole house", de: "Das ganze Haus", fr: "Toute la maison" } as Localized,
    houseText: {
      it: "Per famiglie e gruppi da 2 a 11 ospiti: tutte le camere e tutti gli spazi solo per voi.",
      en: "For families and groups of 2 to 11 guests: all the rooms and all the spaces just for you.",
      de: "Für Familien und Gruppen von 2 bis 11 Gästen: alle Zimmer und alle Räume nur für Sie.",
      fr: "Pour les familles et les groupes de 2 à 11 personnes : toutes les chambres et tous les espaces rien que pour vous.",
    } as Localized,
  },
  /** Avviso sugli spazi comuni, nella pagina camere e nella pagina di ogni camera. */
  shared: {
    title: { it: "Spazi comuni condivisi", en: "Shared spaces", de: "Gemeinsam genutzte Bereiche", fr: "Espaces partagés" } as Localized,
    text: {
      it: "Sala, cucina, palestra, sauna e il terrazzo con idromassaggio sono a disposizione di tutti gli ospiti della casa; il bagno comune si trova negli spazi comuni.",
      en: "The living room, kitchen, gym, sauna and the terrace with hot tub are shared by all guests in the house; the shared bathroom is in the common areas.",
      de: "Wohnbereich, Küche, Fitnessraum, Sauna und die Terrasse mit Whirlpool stehen allen Gästen des Hauses zur Verfügung; das Gästebad befindet sich in den Gemeinschaftsbereichen.",
      fr: "Le salon, la cuisine, la salle de sport, le sauna et la terrasse avec jacuzzi sont à la disposition de tous les hôtes de la maison ; la salle de bain commune se trouve dans les espaces communs.",
    } as Localized,
  },
};
