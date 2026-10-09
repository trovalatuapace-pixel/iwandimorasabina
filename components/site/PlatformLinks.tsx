import type { Lang } from "@/lib/i18n/translations";
import { translations } from "@/lib/i18n/translations";
import { contacts } from "@/lib/site";

/**
 * Pulsanti "Prenota su Booking.com" e "Prenota su Airbnb".
 * I link arrivano dalle variabili NEXT_PUBLIC_BOOKING_URL / NEXT_PUBLIC_AIRBNB_URL su Vercel:
 * se una manca, il relativo pulsante non viene mostrato.
 */
export default function PlatformLinks({
  lang,
  className = "",
  size = "md",
}: {
  lang: Lang;
  className?: string;
  size?: "sm" | "md";
}) {
  const t = translations[lang].booking;
  const links = [
    { href: contacts.bookingUrl, label: t.bookOnBooking },
    { href: contacts.airbnbUrl, label: t.bookOnAirbnb },
  ].filter((l) => l.href);
  if (!links.length) return null;

  const btn =
    size === "sm"
      ? "inline-flex items-center gap-2 rounded-full border border-sabina-300/50 px-4 py-2 font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-sabina-100 transition hover:border-sabina-100 hover:bg-sabina-50/10"
      : "btn-outline gap-2";

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {links.map((l) => (
        <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className={btn}>
          {l.label}
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      ))}
    </div>
  );
}
