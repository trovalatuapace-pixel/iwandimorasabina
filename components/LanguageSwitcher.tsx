"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { LANGS, LANG_META } from "@/lib/i18n/translations";

type Props = {
  /** "down" per header, "up" per il footer (il menu si apre verso l'alto). */
  direction?: "down" | "up";
  align?: "left" | "right";
  compact?: boolean;
};

export default function LanguageSwitcher({
  direction = "down",
  align = "right",
  compact = false,
}: Props) {
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`${t.common.language}: ${LANG_META[lang].label}`}
        className={`flex items-center gap-1.5 rounded-full border border-sabina-300/50 font-sans text-xs uppercase tracking-widest text-sabina-100 transition duration-300 hover:border-sabina-100 hover:bg-sabina-50/10 ${
          compact ? "px-3 py-1" : "px-4 py-1.5"
        }`}
      >
        {lang}
        <svg
          viewBox="0 0 10 6"
          aria-hidden="true"
          className={`h-1.5 w-2.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        >
          <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label={t.common.language}
          className={`absolute z-50 min-w-[10rem] overflow-hidden rounded-2xl border border-sabina-800 bg-sabina-950/95 py-1.5 shadow-card backdrop-blur-md ${
            direction === "up" ? "bottom-full mb-2" : "top-full mt-2"
          } ${align === "right" ? "right-0" : "left-0"}`}
        >
          {LANGS.map((code) => {
            const active = code === lang;
            return (
              <li key={code} role="option" aria-selected={active}>
                <button
                  type="button"
                  lang={code}
                  onClick={() => {
                    setLang(code);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center gap-3 px-4 py-2 text-left font-sans text-sm transition-colors duration-200 hover:bg-sabina-50/10 ${
                    active ? "text-sabina-50" : "text-sabina-100/75"
                  }`}
                >
                  <span className="w-6 text-xs uppercase tracking-widest text-sabina-300">{code}</span>
                  {LANG_META[code].label}
                  {active && (
                    <span className="ml-auto h-1.5 w-1.5 rotate-45 border border-sabina-300" aria-hidden="true" />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
