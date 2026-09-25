import type { Lang } from "@/lib/i18n/translations";
import { guideGroups, guideMapsUrl, guideUi } from "@/lib/data/guide";
import Icon from "./Icons";
import { Photo, Section, SectionHead } from "./ui";

/** "Dove andare": luoghi da visitare raggruppati per distanza, ciascuno apribile su Google Maps. */
export default function PlacesGuide({ lang }: { lang: Lang }) {
  const t = guideUi[lang];
  return (
    <Section id="dove-andare">
      <SectionHead eyebrow={t.eyebrow} title={t.title} />
      <p className="mt-5 max-w-2xl font-sans leading-relaxed text-sabina-100/80">{t.lead}</p>

      <div className="mt-14 space-y-16">
        {guideGroups.map((g) => (
          <div key={g.id} className="grid gap-8 lg:grid-cols-[1fr_2fr]">
            <div>
              <p className="flex items-center gap-2 font-sans text-xs uppercase tracking-[0.2em] text-sabina-300">
                <Icon name="pin" className="h-4 w-4" />
                {g.when[lang]}
              </p>
              <h3 className="mt-3 font-serif text-3xl leading-tight text-sabina-50">{g.title[lang]}</h3>
              {g.photo && (
                <Photo label={g.title[lang]} src={g.photo} alt={g.title[lang]} className="mt-6 aspect-[4/3]" />
              )}
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {g.items.map((p) => (
                <li key={p.name.it} className="card-surface flex flex-col rounded-2xl p-6">
                  <h4 className="font-serif text-xl text-sabina-50">{p.name[lang]}</h4>
                  <p className="mt-2 flex-1 font-sans text-sm leading-relaxed text-sabina-100/80">{p.text[lang]}</p>
                  {p.map && (
                    <a
                      href={guideMapsUrl(p.map)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group mt-5 inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.2em] text-sabina-300 transition hover:text-sabina-50"
                      aria-label={`${p.name[lang]} — ${t.map}`}
                    >
                      {t.map}
                      <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
