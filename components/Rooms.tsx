"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { rooms } from "@/lib/data/rooms";
import DetailModal from "./DetailModal";

export default function Rooms() {
  const { t, lang } = useLanguage();
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const active = rooms.find((r) => r.slug === activeSlug) ?? null;

  return (
    <section id="camere" className="relative px-5 py-24 sm:px-8">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 85% 0%, rgba(192, 144, 79, 0.07) 0%, transparent 50%)",
        }}
      />
      <div className="mx-auto max-w-6xl">
        <p className="section-eyebrow mb-3">{t.rooms.eyebrow}</p>
        <h2 className="section-title">{t.rooms.title}</h2>
        <p className="mt-4 max-w-2xl font-sans text-sabina-100/80">
          {t.rooms.intro}
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room, index) => (
            <button
              key={room.slug}
              onClick={() => setActiveSlug(room.slug)}
              className="card-interactive group text-left"
            >
              <div
                className={`relative flex h-40 items-center justify-center overflow-hidden rounded-t-2xl bg-gradient-to-br ${room.gradient} text-6xl transition-transform duration-300 group-hover:scale-[1.03]`}
              >
                <span className="absolute left-4 top-3 font-serif text-xs uppercase tracking-[0.3em] text-sabina-50/70">
                  {String(index + 1).padStart(2, "0")} / {String(rooms.length).padStart(2, "0")}
                </span>
                {room.icon}
              </div>
              <div className="card-surface rounded-b-2xl p-5">
                <h3 className="font-serif text-2xl text-sabina-50">
                  {room.name[lang]}
                </h3>
                <p className="mt-2 font-sans text-sm text-sabina-100/80">
                  {room.tagline[lang]}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-sabina-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {lang === "it" ? "Scopri di più" : "Discover more"}
                  <span aria-hidden="true">→</span>
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {active && (
        <DetailModal
          open={!!active}
          onClose={() => setActiveSlug(null)}
          gradient={active.gradient}
          icon={active.icon}
          title={active.name[lang]}
          tagline={active.tagline[lang]}
          description={active.description[lang]}
          amenitiesTitle={t.rooms.amenitiesTitle}
          amenities={active.amenities[lang]}
          closeLabel={t.rooms.close}
          photoNote={t.rooms.photoNote}
        />
      )}
    </section>
  );
}
