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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-sabina-800 bg-sabina-950/90 shadow-card backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5 font-serif text-lg tracking-wide text-sabina-50 sm:text-xl">
          <span className="h-2 w-2 rotate-45 border border-sabina-400/70" aria-hidden="true" />
          Orbis in Sabina
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link font-sans text-sm uppercase tracking-widest text-sabina-100/90"
            >
              {t.nav[link.key]}
            </a>
          ))}
          <button
            onClick={toggleLang}
            aria-label="Switch language"
            className="rounded-full border border-sabina-300/50 px-4 py-1.5 font-sans text-xs uppercase tracking-widest text-sabina-100 transition duration-300 hover:border-sabina-100 hover:bg-sabina-50/10"
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
            aria-expanded={menuOpen}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-full border border-sabina-300/40"
          >
            <span
              className={`block h-px w-4 bg-sabina-50 transition-transform duration-300 ${
                menuOpen ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-4 bg-sabina-50 transition-transform duration-300 ${
                menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <nav
        className={`flex flex-col gap-1 overflow-hidden border-t border-sabina-800 bg-sabina-950/95 px-5 backdrop-blur-md transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-64 py-4 opacity-100" : "max-h-0 py-0 opacity-0"
        }`}
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="py-2 font-sans text-sm uppercase tracking-widest text-sabina-100 transition-colors duration-300 hover:text-sabina-300"
          >
            {t.nav[link.key]}
          </a>
        ))}
      </nav>
    </header>
  );
}
