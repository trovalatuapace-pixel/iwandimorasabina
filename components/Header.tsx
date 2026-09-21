"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const links = [
  { href: "#camere", key: "rooms" as const },
  { href: "#wellness", key: "wellness" as const },
  { href: "#disponibilita", key: "booking" as const },
  { href: "#location", key: "location" as const },
];

export default function Header() {
  const { t, lang, toggleLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-sabina-950/90 shadow-card" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="font-serif text-lg tracking-wide text-sabina-50 sm:text-xl">
          Orbis in Sabina
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-sm uppercase tracking-widest text-sabina-100/90 transition hover:text-sabina-300"
            >
              {t.nav[link.key]}
            </a>
          ))}
          <button
            onClick={toggleLang}
            aria-label="Switch language"
            className="rounded-full border border-sabina-300/50 px-4 py-1.5 font-sans text-xs uppercase tracking-widest text-sabina-100 transition hover:border-sabina-100"
          >
            {lang === "it" ? "IT / EN" : "EN / IT"}
          </button>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleLang}
            aria-label="Switch language"
            className="rounded-full border border-sabina-300/50 px-3 py-1 font-sans text-xs uppercase tracking-widest text-sabina-100"
          >
            {t.common.langSwitch}
          </button>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Menu"
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-full border border-sabina-300/40"
          >
            <span className="block h-px w-4 bg-sabina-50" />
            <span className="block h-px w-4 bg-sabina-50" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-1 border-t border-sabina-800 bg-sabina-950/95 px-5 py-4 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="py-2 font-sans text-sm uppercase tracking-widest text-sabina-100"
            >
              {t.nav[link.key]}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
