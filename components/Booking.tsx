"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import AvailabilityCalendar from "./AvailabilityCalendar";

export default function Booking() {
  const { t } = useLanguage();
  const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL || "#";
  const airbnbUrl = process.env.NEXT_PUBLIC_AIRBNB_URL || "#";

  return (
    <section id="disponibilita" className="relative px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="section-eyebrow mb-3">{t.booking.eyebrow}</p>
        <h2 className="section-title">{t.booking.title}</h2>
        <p className="mt-4 max-w-2xl font-sans text-sabina-100/80">
          {t.booking.intro}
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            {t.booking.bookOnBooking}
          </a>
          <a
            href={airbnbUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            {t.booking.bookOnAirbnb}
          </a>
        </div>

        <div className="mt-12">
          <AvailabilityCalendar />
        </div>
      </div>
    </section>
  );
}
