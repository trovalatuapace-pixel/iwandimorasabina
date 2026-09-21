"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

const MAPS_QUERY = "Montopoli in Sabina, Provincia di Rieti, Italia";

export default function Location() {
  const { t } = useLanguage();
  const mapsEmbedSrc =
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_SRC ||
    `https://maps.google.com/maps?q=${encodeURIComponent(
      MAPS_QUERY
    )}&z=12&output=embed`;

  return (
    <section id="location" className="relative px-5 py-24 sm:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-2">
        <div>
          <p className="section-eyebrow mb-3">{t.location.eyebrow}</p>
          <h2 className="section-title">{t.location.title}</h2>
          <p className="mt-4 font-sans text-sabina-100/80">
            {t.location.intro}
          </p>

          <div className="mt-6 flex flex-col gap-2 font-sans text-sm text-sabina-200/90">
            <span>{t.location.distanceRome}</span>
            <span>{t.location.distanceAirport}</span>
          </div>

          <div className="mt-8">
            <p className="section-eyebrow mb-3">
              {t.location.pointsOfInterestTitle}
            </p>
            <ul className="space-y-2">
              {t.location.pointsOfInterest.map((poi) => (
                <li
                  key={poi}
                  className="font-sans text-sm text-sabina-100/90 before:mr-2 before:text-sabina-400 before:content-['—']"
                >
                  {poi}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-sabina-800 shadow-card">
          <iframe
            title="Orbis in Sabina — Montopoli in Sabina"
            src={mapsEmbedSrc}
            className="h-[420px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
