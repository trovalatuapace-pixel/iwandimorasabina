import type { Lang } from "@/lib/i18n/translations";
import { content } from "@/lib/content";
import { SITE_URL, contacts, href } from "@/lib/site";
import { rooms, ROOM_PRICE, roomMaxGuests } from "@/lib/data/rooms";

/**
 * Dati strutturati (schema.org) per Google: dicono che il sito è una struttura
 * ricettiva, dove si trova, come contattarla e quali servizi offre.
 * Mostrati nelle home di tutte le lingue.
 */
export default function StructuredData({ lang }: { lang: Lang }) {
  const t = content[lang].home;
  const amenities = ["Sauna", "Fitness center", "Hot tub", "Panoramic terrace", "Billiards", "Coffee machine", "Free Wi-Fi", "Bed linen and towels"];
  const sameAs = [contacts.instagram, contacts.facebook, contacts.bookingUrl, contacts.airbnbUrl].filter(Boolean);

  const data = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "@id": `${SITE_URL}/#struttura`,
    name: "Dimora Pangea",
    description: t.metaDescription,
    url: `${SITE_URL}${href(lang, "home")}`,
    image: [
      `${SITE_URL}/og/dimora-pangea.jpg`,
      `${SITE_URL}/foto/vista-cupola-san-pietro.webp`,
      `${SITE_URL}/foto/idromassaggio-tramonto.webp`,
      `${SITE_URL}/foto/camera-oceania.webp`,
    ],
    logo: `${SITE_URL}/icon.png`,
    telephone: `+${contacts.whatsapp}`,
    email: contacts.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Via Roma 33A",
      postalCode: "02034",
      addressLocality: "Montopoli di Sabina",
      addressRegion: "RI",
      addressCountry: "IT",
    },
    hasMap: "https://www.google.com/maps/search/?api=1&query=Via+Roma+33,+02034+Montopoli+di+Sabina+RI",
    containedInPlace: { "@type": "Place", name: "Sabina, Lazio" },
    numberOfRooms: contacts.rooms,
    priceRange: "€180+",
    containsPlace: rooms.map((r) => ({
      "@type": "HotelRoom",
      name: r.name[lang],
      description: r.tagline[lang],
      url: `${SITE_URL}${href(lang, "room", r.slug.it)}`,
      image: `${SITE_URL}${r.photo ?? "/og/dimora-pangea.jpg"}`,
      occupancy: { "@type": "QuantitativeValue", maxValue: roomMaxGuests(r) },
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Private bathroom", value: true },
        { "@type": "LocationFeatureSpecification", name: "Electronic door lock", value: true },
      ],
      makesOffer: {
        "@type": "Offer",
        priceSpecification: { "@type": "UnitPriceSpecification", price: ROOM_PRICE[r.slug.it]?.two, priceCurrency: "EUR", unitText: "night" },
      },
    })),
    maximumAttendeeCapacity: contacts.beds,
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
