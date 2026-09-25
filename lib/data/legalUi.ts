import type { Lang } from "@/lib/i18n/translations";

/** Testi brevi usati da footer, mappa e pulsante di consenso. */
export const legalUi: Record<
  Lang,
  {
    privacy: string;
    cookies: string;
    mapNotice: string;
    mapButton: string;
    mapMore: string;
    consentOn: string;
    consentOff: string;
    grant: string;
    revoke: string;
  }
> = {
  it: {
    privacy: "Privacy",
    cookies: "Cookie policy",
    mapNotice: "La mappa è fornita da Google Maps. Caricandola, Google può raccogliere dati e usare cookie.",
    mapButton: "Mostra la mappa",
    mapMore: "Cookie policy",
    consentOn: "Mappa Google: consenso dato.",
    consentOff: "Mappa Google: consenso non dato (la mappa non viene caricata).",
    grant: "Consenti la mappa",
    revoke: "Revoca il consenso",
  },
  en: {
    privacy: "Privacy",
    cookies: "Cookie policy",
    mapNotice: "This map is provided by Google Maps. If you load it, Google may collect data and use cookies.",
    mapButton: "Show map",
    mapMore: "Cookie policy",
    consentOn: "Google map: consent given.",
    consentOff: "Google map: no consent (the map is not loaded).",
    grant: "Allow the map",
    revoke: "Withdraw consent",
  },
  de: {
    privacy: "Datenschutz",
    cookies: "Cookie-Richtlinie",
    mapNotice: "Die Karte wird von Google Maps bereitgestellt. Beim Laden kann Google Daten erfassen und Cookies setzen.",
    mapButton: "Karte anzeigen",
    mapMore: "Cookie-Richtlinie",
    consentOn: "Google-Karte: Einwilligung erteilt.",
    consentOff: "Google-Karte: keine Einwilligung (die Karte wird nicht geladen).",
    grant: "Karte erlauben",
    revoke: "Einwilligung widerrufen",
  },
  fr: {
    privacy: "Confidentialité",
    cookies: "Politique cookies",
    mapNotice: "La carte est fournie par Google Maps. En la chargeant, Google peut collecter des données et utiliser des cookies.",
    mapButton: "Afficher la carte",
    mapMore: "Politique cookies",
    consentOn: "Carte Google : consentement donné.",
    consentOff: "Carte Google : pas de consentement (la carte n'est pas chargée).",
    grant: "Autoriser la carte",
    revoke: "Retirer le consentement",
  },
};
