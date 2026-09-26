"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LANGS, LANG_META, type Lang } from "@/lib/i18n/translations";
import { bookingHref, href, hrefAll, navItems, type PageKey } from "@/lib/site";
import { content } from "@/lib/content";
import LogoMark from "./Logo";

type Props = {
  lang: Lang;
  current: PageKey;
  /** Slug IT della camera, solo per le pagine camera (serve per i link alle altre lingue) */
  roomSlugIt?: string;
  overHero?: boolean;
};

export default function Header({ lang, current, roomSlugIt, overHero = false }: Props) {
  const c = content[lang].common;
  const alt = hrefAll(current, roomSlugIt);
  const [scrolled, setScrolled] = useState(!overHero);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!overHero) return;
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [overHero]);

  const solid = scrolled || open;
  const activeKey = current === "room" ? "rooms" : current;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "border-b border-sabina-800 bg-sabina-950/95 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
      style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
    >
      <a
        href="#contenuto"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-full focus:bg-sabina-400 focus:px-4 focus:py-2 focus:text-sabina-950"
      >
        {c.skip}
      </a>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
        <Link
          href={href(lang, "home")}
          className="flex shrink-0 items-center gap-2.5 font-serif text-lg tracking-wide text-sabina-50 sm:text-xl"
        >
          <LogoMark size={30} />
          Dimora Pangea
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principale">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={href(lang, item.key)}
              aria-current={activeKey === item.key ? "page" : undefined}
              className={`nav-link font-sans text-xs uppercase tracking-[0.2em] ${
                activeKey === item.key ? "text-sabina-300" : "text-sabina-100/90"
              }`}
            >
              {item.label[lang]}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LangLinks lang={lang} alt={alt} label={c.language} className="hidden sm:flex" />
          <Link href={bookingHref(lang)} className="btn-book">
            {c.book}
          </Link>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label={c.menu}
            aria-expanded={open}
            aria-controls="menu-mobile"
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-full border border-sabina-300/40 lg:hidden"
          >
            <span className={`block h-px w-4 bg-sabina-50 transition-transform duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`block h-px w-4 bg-sabina-50 transition-transform duration-300 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      <nav
        id="menu-mobile"
        aria-label={c.menu}
        className={`overflow-hidden border-t border-sabina-800 px-5 transition-all duration-300 lg:hidden ${
          open ? "max-h-96 py-4 opacity-100" : "pointer-events-none max-h-0 py-0 opacity-0"
        }`}
      >
        {navItems.map((item) => (
          <Link
            key={item.key}
            href={href(lang, item.key)}
            onClick={() => setOpen(false)}
            aria-current={activeKey === item.key ? "page" : undefined}
            className={`block py-2.5 font-sans text-sm uppercase tracking-[0.2em] ${
              activeKey === item.key ? "text-sabina-300" : "text-sabina-100"
            }`}
          >
            {item.label[lang]}
          </Link>
        ))}
        <LangLinks lang={lang} alt={alt} label={c.language} className="mt-3 flex border-t border-sabina-800 pt-4 sm:hidden" />
      </nav>
    </header>
  );
}

/** Link alle stesse pagine nelle altre lingue: IT · EN · DE · FR */
function LangLinks({
  lang,
  alt,
  label,
  className = "",
}: {
  lang: Lang;
  alt: Record<Lang, string>;
  label: string;
  className?: string;
}) {
  return (
    <nav aria-label={label} className={`items-center gap-1 font-sans text-xs uppercase tracking-[0.2em] ${className}`}>
      {LANGS.map((l, i) => (
        <span key={l} className="flex items-center">
          {i > 0 && <span className="mx-1 text-sabina-600" aria-hidden="true">·</span>}
          {l === lang ? (
            <span className="text-sabina-300" aria-current="true" title={LANG_META[l].label}>
              {l}
            </span>
          ) : (
            <a
              href={alt[l]}
              hrefLang={l}
              lang={l}
              title={LANG_META[l].label}
              className="text-sabina-100/80 transition-colors hover:text-sabina-300"
            >
              {l}
            </a>
          )}
        </span>
      ))}
    </nav>
  );
}
