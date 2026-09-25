import { LANGS, type Lang } from "@/lib/i18n/translations";
import { rooms } from "@/lib/data/rooms";

export type PageKey = "home" | "rooms" | "room" | "house" | "territory" | "contact";

/** URL di ogni pagina in tutte le lingue. IT alla radice, le altre sotto /en, /de, /fr. */
const paths: Record<Exclude<PageKey, "room">, Record<Lang, string>> = {
  home: { it: "/", en: "/en", de: "/de", fr: "/fr" },
  rooms: { it: "/camere", en: "/en/rooms", de: "/de/zimmer", fr: "/fr/chambres" },
  house: { it: "/la-casa", en: "/en/the-house", de: "/de/das-haus", fr: "/fr/la-maison" },
  territory: { it: "/territorio", en: "/en/surroundings", de: "/de/umgebung", fr: "/fr/alentours" },
  contact: { it: "/contatti", en: "/en/contact", de: "/de/kontakt", fr: "/fr/contact" },
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

export const navItems: { key: Exclude<PageKey, "room">; label: Record<Lang, string> }[] = [
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

export const contacts = {
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
  whatsapp: (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "").replace(/[^\d]/g, ""),
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL || "",
  airbnbUrl: process.env.NEXT_PUBLIC_AIRBNB_URL || "",
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "",
  facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || "",
};

/** Stessa pagina in tutte le lingue (per selettore lingua, hreflang e sitemap). */
export function hrefAll(page: PageKey, roomSlugIt?: string): Record<Lang, string> {
  return Object.fromEntries(LANGS.map((l) => [l, href(l, page, roomSlugIt)])) as Record<Lang, string>;
}

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
    },
  };
}
