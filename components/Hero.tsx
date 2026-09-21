"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

/**
 * Placeholder hero: gradient + texture stand in for real photos of the
 * property. Swap the background layer for the Three.js scene (see
 * siti-3d skill) once Miriam has the reference video, or for real photos
 * in the meantime — keep the fixed canvas z-index:0 pattern if the 3D
 * scene is added later, so it can sit behind these same sections.
 */
export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 70% 20%, #3a2a1a 0%, #1c130c 45%, #0b0704 100%)",
        }}
      />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 10% 100%, rgba(60, 111, 106, 0.18) 0%, transparent 55%)",
        }}
      />
      <div
        className="absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage:
            "repeating-linear-gradient(115deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 14px)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          boxShadow: "inset 0 0 160px 40px rgba(11, 7, 4, 0.65)",
        }}
      />

      <div className="mx-auto w-full max-w-6xl px-5 pt-24 sm:px-8">
        <p className="section-eyebrow mb-4 animate-fade-in-up">{t.hero.eyebrow}</p>
        <h1 className="animate-fade-in-up font-serif text-5xl leading-tight text-sabina-50 [animation-delay:100ms] sm:text-6xl md:text-7xl">
          {t.hero.title}
        </h1>
        <p className="mt-6 max-w-xl animate-fade-in-up font-sans text-lg text-sabina-100/90 [animation-delay:200ms] sm:text-xl">
          {t.hero.claim}
        </p>

        <div className="mt-10 flex animate-fade-in-up flex-wrap gap-4 [animation-delay:300ms]">
          <a href="#camere" className="btn-primary">
            {t.hero.cta}
          </a>
          <a href="#disponibilita" className="btn-outline">
            {t.hero.ctaSecondary}
          </a>
        </div>

        <p className="mt-16 font-sans text-xs uppercase tracking-widest text-sabina-300/70">
          {t.hero.photoNote}
        </p>
      </div>

      <div className="absolute inset-x-0 bottom-8 hidden justify-center sm:flex">
        <div className="flex h-9 w-6 animate-drift items-start justify-center rounded-full border border-sabina-300/40 p-1.5">
          <span className="h-1.5 w-px bg-sabina-300/70" />
        </div>
      </div>
    </section>
  );
}
