"use client";

import { useEffect } from "react";

export default function DetailModal({
  open,
  onClose,
  gradient,
  icon,
  title,
  tagline,
  description,
  amenitiesTitle,
  amenities,
  closeLabel,
  photoNote,
}: {
  open: boolean;
  onClose: () => void;
  gradient: string;
  icon: string;
  title: string;
  tagline: string;
  description: string;
  amenitiesTitle?: string;
  amenities?: string[];
  closeLabel: string;
  photoNote: string;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-sabina-950 shadow-card"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={`flex h-48 items-center justify-center bg-gradient-to-br ${gradient} text-7xl`}
        >
          {icon}
        </div>
        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-serif text-3xl text-sabina-50">{title}</h3>
              <p className="mt-1 font-sans text-sabina-300">{tagline}</p>
            </div>
            <button
              onClick={onClose}
              className="shrink-0 rounded-full border border-sabina-300/50 px-3 py-1 font-sans text-xs uppercase tracking-widest text-sabina-100 hover:border-sabina-100"
            >
              {closeLabel}
            </button>
          </div>

          <p className="mt-6 font-sans leading-relaxed text-sabina-100/90">
            {description}
          </p>

          {amenities && amenities.length > 0 && (
            <div className="mt-6">
              <p className="section-eyebrow mb-3">{amenitiesTitle}</p>
              <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {amenities.map((a) => (
                  <li
                    key={a}
                    className="font-sans text-sm text-sabina-100/90 before:mr-2 before:text-sabina-400 before:content-['—']"
                  >
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <p className="mt-6 font-sans text-xs uppercase tracking-widest text-sabina-300/60">
            {photoNote}
          </p>
        </div>
      </div>
    </div>
  );
}
