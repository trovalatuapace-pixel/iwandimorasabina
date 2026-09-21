"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { wellnessItems } from "@/lib/data/wellness";
import DetailModal from "./DetailModal";

export default function Wellness() {
  const { t, lang } = useLanguage();
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const active = wellnessItems.find((w) => w.slug === activeSlug) ?? null;

  return (
    <section id="wellness" className="relative px-5 py-24 sm:px-8">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 15% 20%, rgba(60, 111, 106, 0.12) 0%, transparent 55%)",
        }}
      />
      <div className="section-divider mb-16">
        <span className="section-divider__mark" aria-hidden="true" />
      </div>
      <div className="mx-auto max-w-6xl">
        <p className="section-eyebrow mb-3">{t.wellness.eyebrow}</p>
        <h2 className="section-title">{t.wellness.title}</h2>
        <p className="mt-4 max-w-2xl font-sans text-sabina-100/80">
          {t.wellness.intro}
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {wellnessItems.map((item) => (
            <button
              key={item.slug}
              onClick={() => setActiveSlug(item.slug)}
              className="card-interactive group text-left"
            >
              <div
                className={`flex h-36 items-center justify-center rounded-t-2xl bg-gradient-to-br ${item.gradient} text-5xl transition-transform duration-300 group-hover:scale-[1.03]`}
              >
                {item.icon}
              </div>
              <div className="card-surface rounded-b-2xl p-5">
                <h3 className="font-serif text-xl text-sabina-50">
                  {item.name[lang]}
                </h3>
                <p className="mt-2 font-sans text-sm text-sabina-100/80">
                  {item.tagline[lang]}
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
          closeLabel={t.rooms.close}
          photoNote={t.wellness.photoNote}
        />
      )}
    </section>
  );
}
