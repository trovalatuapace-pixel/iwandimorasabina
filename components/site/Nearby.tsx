import type { Lang } from "@/lib/i18n/translations";
import { nearbyCategories, nearbyMapsUrl, ui } from "@/lib/data/extras";
import Icon from "./Icons";
import { Section, SectionHead } from "./ui";

/** "Tutto attorno a te": servizi utili vicini, ciascuno apre la ricerca su Google Maps. */
export default function Nearby({ lang }: { lang: Lang }) {
  const t = ui[lang];
  return (
    <Section id="dintorni">
      <SectionHead eyebrow={t.nearbyEyebrow} title={t.nearbyTitle} />
      <p className="mt-5 max-w-2xl font-sans leading-relaxed text-sabina-100/80">{t.nearbyLead}</p>
      <ul className="mt-10 grid gap-3 sm:grid-cols-2">
        {nearbyCategories.map((n) => (
          <li key={n.query}>
            <a
              href={nearbyMapsUrl(n.query)}
              target="_blank"
              rel="noopener noreferrer"
              className="card-surface group flex items-center justify-between gap-4 rounded-2xl px-5 py-4 transition hover:border-sabina-400/50"
              aria-label={`${n.title[lang]} — ${t.openMap}`}
            >
              <span>
                <span className="block font-sans text-sm font-medium uppercase tracking-[0.12em] text-sabina-50">
                  {n.title[lang]}
                </span>
                <span className="mt-0.5 block font-sans text-sm text-sabina-100/70">{n.text[lang]}</span>
              </span>
              <Icon name="arrow" className="h-5 w-5 shrink-0 text-sabina-300 transition-transform group-hover:translate-x-1" />
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
