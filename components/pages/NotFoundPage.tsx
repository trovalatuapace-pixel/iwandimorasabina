import Link from "next/link";
import type { Lang } from "@/lib/i18n/translations";
import { LANGS } from "@/lib/i18n/translations";
import { href } from "@/lib/site";
import Shell from "./Shell";

const text: Record<Lang, { eyebrow: string; title: string; lead: string; home: string; rooms: string; contact: string }> = {
  it: {
    eyebrow: "Errore 404",
    title: "Questa pagina non esiste",
    lead: "Forse il link è cambiato o c'è un errore di battitura. Ripartite dalla home o scoprite le camere.",
    home: "Torna alla home",
    rooms: "Le camere",
    contact: "Contatti",
  },
  en: {
    eyebrow: "Error 404",
    title: "This page doesn't exist",
    lead: "The link may have changed or contain a typo. Start again from the home page or discover the rooms.",
    home: "Back to home",
    rooms: "The rooms",
    contact: "Contact",
  },
  de: {
    eyebrow: "Fehler 404",
    title: "Diese Seite gibt es nicht",
    lead: "Vielleicht hat sich der Link geändert oder enthält einen Tippfehler. Starten Sie auf der Startseite oder entdecken Sie die Zimmer.",
    home: "Zur Startseite",
    rooms: "Die Zimmer",
    contact: "Kontakt",
  },
  fr: {
    eyebrow: "Erreur 404",
    title: "Cette page n'existe pas",
    lead: "Le lien a peut-être changé ou contient une faute de frappe. Repartez de l'accueil ou découvrez les chambres.",
    home: "Retour à l'accueil",
    rooms: "Les chambres",
    contact: "Contact",
  },
};

const LANG_NAME: Record<Lang, string> = { it: "Italiano", en: "English", de: "Deutsch", fr: "Français" };

/** Pagina 404 nello stile del sito, con link alle home nelle altre lingue. */
export default function NotFoundPage({ lang }: { lang: Lang }) {
  const t = text[lang];
  return (
    <Shell lang={lang} current="home">
      <section className="relative flex min-h-[80svh] items-center overflow-hidden px-5 pb-20 pt-36 sm:px-8">
        <div
          className="absolute inset-0 -z-10"
          style={{ background: "radial-gradient(ellipse at 75% 0%, #3a2a1a 0%, #1c130c 50%, #140f0a 100%)" }}
          aria-hidden="true"
        />
        <div className="mx-auto w-full max-w-6xl">
          <p className="section-eyebrow mb-4">{t.eyebrow}</p>
          <h1 className="max-w-3xl font-serif text-4xl leading-tight text-sabina-50 sm:text-5xl md:text-6xl">{t.title}</h1>
          <p className="mt-6 max-w-2xl font-sans text-lg leading-relaxed text-sabina-100/85">{t.lead}</p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link href={href(lang, "home")} className="btn-primary">
              {t.home}
            </Link>
            <Link href={href(lang, "rooms")} className="nav-link font-sans text-sm uppercase tracking-[0.2em] text-sabina-300">
              {t.rooms}
            </Link>
            <Link href={href(lang, "contact")} className="nav-link font-sans text-sm uppercase tracking-[0.2em] text-sabina-300">
              {t.contact}
            </Link>
          </div>
          <nav aria-label="Lingua" className="mt-14 flex flex-wrap gap-4 font-sans text-xs uppercase tracking-[0.2em] text-sabina-300/70">
            {LANGS.filter((l) => l !== lang).map((l) => (
              <Link key={l} href={href(l, "home")} hrefLang={l} lang={l} className="nav-link">
                {LANG_NAME[l]}
              </Link>
            ))}
          </nav>
        </div>
      </section>
    </Shell>
  );
}
