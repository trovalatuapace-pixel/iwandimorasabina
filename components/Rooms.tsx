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
      <div className="mx-auto max-w-6xl">
        <p className="section-eyebrow mb-3">{t.rooms.eyebrow}</p>
        <h2 className="section-title">{t.rooms.title}</h2>
        <p className="mt-4 max-w-2xl font-sans text-sabina-100/80">
          {t.rooms.intro}
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room) => (
            <button
              key={room.slug}
              onClick={() => setActiveSlug(room.slug)}
              className="group text-left"
            >
              <div
                className={`flex h-40 items-center justify-center rounded-t-2xl bg-gradient-to-br ${room.gradient} text-6xl transition-transform duration-300 group-hover:scale-[1.03]`}
              >
                {room.icon}
              </div>
              <div className="card-surface rounded-b-2xl border border-sabina-800 p-5">
                <h3 className="font-serif text-2xl text-sabina-50">
                  {room.name[lang]}
                </h3>
                <p className="mt-2 font-sans text-sm text-sabina-100/80">
                  {room.tagline[lang]}
                </p>
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
