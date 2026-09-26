import type { Lang } from "@/lib/i18n/translations";
import { content } from "@/lib/content";
import { SITE_URL, contacts, href } from "@/lib/site";

/**
 * Dati strutturati (schema.org) per Google: dicono che il sito è una struttura
 * ricettiva, dove si trova, come contattarla e quali servizi offre.
 * Mostrati nelle home di tutte le lingue.
 */
export default function StructuredData({ lang }: { lang: Lang }) {
  const t = content[lang].home;
  const amenities = ["Sauna", "Fitness center", "Hot tub", "Panoramic terrace", "Free Wi-Fi", "Bed linen and towels"];
  const sameAs = [contacts.instagram, contacts.facebook, contacts.bookingUrl, contacts.airbnbUrl].filter(Boolean);

  const data = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "@id": `${SITE_URL}/#struttura`,
    name: "Orbis in Sabina",
    description: t.metaDescription,
    url: `${SITE_URL}${href(lang, "home")}`,
    image: [
      `${SITE_URL}/og/orbis-in-sabina.jpg`,
      `${SITE_URL}/foto/vista-cupola-san-pietro.webp`,
      `${SITE_URL}/foto/idromassaggio-tramonto.webp`,
      `${SITE_URL}/foto/camera-oceania.webp`,
    ],
    logo: `${SITE_URL}/icon.png`,
    telephone: `+${contacts.whatsapp}`,
    email: contacts.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Montopoli di Sabina",
      addressRegion: "RI",
      addressCountry: "IT",
    },
    numberOfRooms: contacts.rooms,
    checkinTime: "15:00",
    checkoutTime: "11:00",
    petsAllowed: true,
    availableLanguage: ["Italian", "English", "German", "French"],
    amenityFeature: amenities.map((name) => ({ "@type": "LocationFeatureSpecification", name, value: true })),
    identifier: [
      { "@type": "PropertyValue", propertyID: "CIN", value: contacts.cin },
      { "@type": "PropertyValue", propertyID: "CIR", value: contacts.cir },
    ],
    ...(sameAs.length ? { sameAs } : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
