import type { Localized } from "@/lib/i18n/translations";
import { rooms, ROOM_PRICE, roomMaxGuests } from "@/lib/data/rooms";
import { WHOLE_HOUSE_ID, wholeHouse } from "@/lib/data/stay";
import { contacts } from "@/lib/site";

/** Unità prenotabile: una delle cinque camere oppure la casa intera. Serializzabile (passa da server a client). */
export type BookingUnit = {
  id: string;
  name: Localized;
  isHouse: boolean;
  minGuests: number;
  maxGuests: number;
  /** Prezzo a notte (EUR). Assente = su richiesta. */
  priceTwo?: number;
  priceThree?: number;
  /** Link alla scheda sulla piattaforma: vuoto = pulsante nascosto. */
  bookingUrl: string;
  airbnbUrl: string;
};

/**
 * Link per camera, da impostare su Vercel come NEXT_PUBLIC_BOOKING_URL_<SLUG> e
 * NEXT_PUBLIC_AIRBNB_URL_<SLUG> (SLUG = EUROPA, ASIA, AFRICA, AMERICHE, OCEANIA).
 * Finché mancano, per la camera resta solo il pulsante WhatsApp (prenotazione diretta).
 */
const perRoomLinks: Record<string, { booking: string; airbnb: string }> = {
  europa: { booking: process.env.NEXT_PUBLIC_BOOKING_URL_EUROPA || "", airbnb: process.env.NEXT_PUBLIC_AIRBNB_URL_EUROPA || "" },
  asia: { booking: process.env.NEXT_PUBLIC_BOOKING_URL_ASIA || "", airbnb: process.env.NEXT_PUBLIC_AIRBNB_URL_ASIA || "" },
  africa: { booking: process.env.NEXT_PUBLIC_BOOKING_URL_AFRICA || "", airbnb: process.env.NEXT_PUBLIC_AIRBNB_URL_AFRICA || "" },
  americhe: { booking: process.env.NEXT_PUBLIC_BOOKING_URL_AMERICHE || "", airbnb: process.env.NEXT_PUBLIC_AIRBNB_URL_AMERICHE || "" },
  oceania: { booking: process.env.NEXT_PUBLIC_BOOKING_URL_OCEANIA || "", airbnb: process.env.NEXT_PUBLIC_AIRBNB_URL_OCEANIA || "" },
};

export const ROOM_SLUGS = rooms.map((r) => r.slug.it);

export function getBookingUnits(): BookingUnit[] {
  const roomUnits: BookingUnit[] = rooms.map((r) => ({
    id: r.slug.it,
    name: r.name,
    isHouse: false,
    minGuests: 1,
    maxGuests: roomMaxGuests(r),
    priceTwo: ROOM_PRICE[r.slug.it]?.two,
    priceThree: ROOM_PRICE[r.slug.it]?.three,
    bookingUrl: perRoomLinks[r.slug.it]?.booking ?? "",
    airbnbUrl: perRoomLinks[r.slug.it]?.airbnb ?? "",
  }));
  const house: BookingUnit = {
    id: WHOLE_HOUSE_ID,
    name: wholeHouse.name,
    isHouse: true,
    minGuests: 2,
    maxGuests: contacts.beds,
    bookingUrl: contacts.bookingUrl,
    airbnbUrl: contacts.airbnbUrl,
  };
  return [...roomUnits, house];
}
