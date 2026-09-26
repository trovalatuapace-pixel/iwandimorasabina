import { LANGS, type Lang } from "@/lib/i18n/translations";
import { rooms } from "@/lib/data/rooms";

export type PageKey = "home" | "rooms" | "room" | "house" | "territory" | "contact" | "privacy" | "cookies";

/** URL di ogni pagina in tutte le lingue. IT alla radice, le altre sotto /en, /de, /fr. */
const paths: Record<Exclude<PageKey, "room">, Record<Lang, string>> = {
  home: { it: "/", en: "/en", de: "/de", fr: "/fr" },
  rooms: { it: "/camere", en: "/en/rooms", de: "/de/zimmer", fr: "/fr/chambres" },
  house: { it: "/la-casa", en: "/en/the-house", de: "/de/das-haus", fr: "/fr/la-maison" },
  territory: { it: "/territorio", en: "/en/surroundings", de: "/de/umgebung", fr: "/fr/alentours" },
  contact: { it: "/contatti", en: "/en/contact", de: "/de/kontakt", fr: "/fr/contact" },
  privacy: { it: "/privacy", en: "/en/privacy", de: "/de/datenschutz", fr: "/fr/confidentialite" },
  cookies: { it: "/cookie-policy", en: "/en/cookie-policy", de: "/de/cookie-richtlinie", fr: "/fr/politique-cookies" },
};

export function href(lang: Lang, page: PageKey, roomSlugIt?: string): string {
  if (page === "room") {
    const room = rooms.find((r) => r.slug.it === roomSlugIt) ?? rooms[0];
    return `${paths.rooms[lang]}/${room.slug[lang]}`;
  }
  return paths[page][lang];
}

/** Ancora della sezione prenotazione, usata dal pulsante "Prenota". */
export function bookingHref(lang: Lang) {
  return `${paths.contact[lang]}#prenota`;
}

/** Ancora del modulo "Chiedi un preventivo". */
export function quoteHref(lang: Lang) {
  return `${paths.contact[lang]}#preventivo`;
}

export const navItems: { key: Exclude<PageKey, "room" | "privacy" | "cookies">; label: Record<Lang, string> }[] = [
  { key: "home", label: { it: "Home", en: "Home", de: "Start", fr: "Accueil" } },
  { key: "rooms", label: { it: "Camere", en: "Rooms", de: "Zimmer", fr: "Chambres" } },
  { key: "house", label: { it: "La Casa", en: "The House", de: "Das Haus", fr: "La Maison" } },
  { key: "territory", label: { it: "Territorio", en: "Surroundings", de: "Umgebung", fr: "Alentours" } },
  { key: "contact", label: { it: "Contatti", en: "Contact", de: "Kontakt", fr: "Contact" } },
];

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

/**
 * Dati ufficiali della struttura (attestato CIN — Regione Lazio, 25/06/2026):
 * "Alloggio per uso turistico Donateo Iwan", Montopoli di Sabina (RI), 5 camere, 11 posti letto.
 * Le variabili d'ambiente, se impostate su Vercel, hanno la precedenza.
 */
const DEFAULT_EMAIL = "iwandonateo@hotmail.com";
const DEFAULT_WHATSAPP = "+39 329 267 5324";

export const contacts = {
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || DEFAULT_EMAIL,
  whatsapp: (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || DEFAULT_WHATSAPP).replace(/[^\d]/g, ""),
  /** Numero da chiamare (formato internazionale). Se vuoto si usa il numero WhatsApp. */
  phone: (process.env.NEXT_PUBLIC_PHONE_NUMBER || process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || DEFAULT_WHATSAPP).replace(/[^\d+]/g, ""),
  /** Numero leggibile da mostrare a schermo */
  phoneDisplay: DEFAULT_WHATSAPP,
  /** Codice Identificativo Nazionale (obbligatorio per affitti brevi) */
  cin: process.env.NEXT_PUBLIC_CIN || "IT057044C29W9UI3V2",
  /** Codice Identificativo Regionale (Lazio) */
  cir: process.env.NEXT_PUBLIC_CIR || "057044-LOC-00016",
  /** Capienza ufficiale della struttura */
  rooms: 5,
  beds: 11,
  vat: process.env.NEXT_PUBLIC_VAT_NUMBER || "",
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL || "",
  airbnbUrl: process.env.NEXT_PUBLIC_AIRBNB_URL || "",
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "",
  facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || "",
};

/** Stessa pagina in tutte le lingue (per selettore lingua, hreflang e sitemap). */
export function hrefAll(page: PageKey, roomSlugIt?: string): Record<Lang, string> {
  return Object.fromEntries(LANGS.map((l) => [l, href(l, page, roomSlugIt)])) as Record<Lang, string>;
}

/** Immagine di anteprima (WhatsApp, Facebook, ecc.) usata quando la pagina non ne ha una propria. */
const DEFAULT_OG_IMAGE = "/og/orbis-in-sabina.jpg";

const OG_LOCALE: Record<Lang, string> = { it: "it_IT", en: "en_GB", de: "de_DE", fr: "fr_FR" };

/** Metadati con link hreflang tra le versioni della stessa pagina. */
export function pageMeta(
  lang: Lang,
  page: PageKey,
  title: string,
  description: string,
  roomSlugIt?: string
) {
  const all = hrefAll(page, roomSlugIt);
  const room = page === "room" ? rooms.find((r) => r.slug.it === roomSlugIt) : undefined;
  const image = {
    url: room?.ogImage ?? DEFAULT_OG_IMAGE,
    width: 1200,
    height: 630,
    alt: room ? `${room.name[lang]} — Orbis in Sabina` : "Orbis in Sabina — Montopoli di Sabina",
  };
  return {
    title: page === "home" ? title : `${title} | Orbis in Sabina`,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: all[lang],
      languages: { ...all, "x-default": all.it },
    },
    openGraph: {
      title: page === "home" ? title : `${title} | Orbis in Sabina`,
      description,
      siteName: "Orbis in Sabina",
      locale: OG_LOCALE[lang],
      type: "website" as const,
      images: [image],
    },
    twitter: {
      card: "summary_large_image" as const,
      images: [image.url],
    },
  };
}
