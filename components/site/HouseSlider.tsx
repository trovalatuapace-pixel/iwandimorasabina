"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export type Slide = { src: string; alt: string };

/**
 * Slider foto della casa (spazi comuni, non camere).
 * Swipe nativo con scroll-snap, frecce, pallini e scorrimento automatico
 * che si ferma quando l'utente interagisce.
 */
export default function HouseSlider({
  slides,
  className = "aspect-[5/4]",
  interval = 4500,
}: {
  slides: Slide[];
  className?: string;
  interval?: number;
}) {
  const track = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback(
    (i: number) => {
      const el = track.current;
      if (!el) return;
      const n = (i + slides.length) % slides.length;
      el.scrollTo({ left: n * el.clientWidth, behavior: "smooth" });
    },
    [slides.length],
  );

  // Aggiorna il pallino attivo mentre si scorre
  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const onScroll = () => setIndex(Math.round(el.scrollLeft / el.clientWidth));
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  // Scorrimento automatico (disattivato con "riduci movimento")
  useEffect(() => {
    if (paused || slides.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => goTo(index + 1), interval);
    return () => window.clearInterval(id);
  }, [paused, index, interval, goTo, slides.length]);

  const stop = () => setPaused(true);

  return (
    <div className={`group relative w-full overflow-hidden rounded-2xl ${className}`} aria-roledescription="carousel">
      <div
        ref={track}
        className="flex h-full w-full snap-x snap-mandatory overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        onTouchStart={stop}
        onMouseDown={stop}
        onWheel={stop}
      >
        {slides.map((s, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={s.src}
            src={s.src}
            alt={s.alt}
            className="h-full w-full flex-none snap-center object-cover"
            loading={i === 0 ? "eager" : "lazy"}
            draggable={false}
            aria-hidden={i !== index}
          />
        ))}
      </div>

      {/* Frecce */}
      <button
        type="button"
        aria-label="Foto precedente"
        onClick={() => {
          stop();
          goTo(index - 1);
        }}
        className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-sabina-300/40 bg-black/40 text-sabina-50 backdrop-blur transition hover:bg-black/60 sm:opacity-0 sm:group-hover:opacity-100"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M15 18l-6-6 6-6" /></svg>
      </button>
      <button
        type="button"
        aria-label="Foto successiva"
        onClick={() => {
          stop();
          goTo(index + 1);
        }}
        className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-sabina-300/40 bg-black/40 text-sabina-50 backdrop-blur transition hover:bg-black/60 sm:opacity-0 sm:group-hover:opacity-100"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M9 18l6-6-6-6" /></svg>
      </button>

      {/* Pallini */}
      <div className="absolute inset-x-0 bottom-3 flex justify-center gap-1.5">
        {slides.map((s, i) => (
          <button
            key={s.src}
            type="button"
            aria-label={`Foto ${i + 1} di ${slides.length}`}
            onClick={() => {
              stop();
              goTo(i);
            }}
            className={`h-1.5 rounded-full transition-all ${i === index ? "w-5 bg-sabina-50" : "w-1.5 bg-sabina-50/50"}`}
          />
        ))}
      </div>
    </div>
  );
}
