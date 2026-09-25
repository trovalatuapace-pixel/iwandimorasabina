import type { Lang } from "@/lib/i18n/translations";
import { servicesIncluded, servicesOnRequest, ui, type ServiceItem } from "@/lib/data/extras";
import Icon from "./Icons";
import { Section, SectionHead } from "./ui";

function List({ items, lang }: { items: ServiceItem[]; lang: Lang }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {items.map((s) => (
        <li key={s.icon} className="card-surface flex gap-4 rounded-2xl p-5">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-sabina-400/40 text-sabina-300">
            <Icon name={s.icon} />
          </span>
          <div>
            <h4 className="font-sans text-sm font-medium uppercase tracking-[0.15em] text-sabina-50">{s.title[lang]}</h4>
            <p className="mt-1 font-sans text-sm leading-relaxed text-sabina-100/75">{s.text[lang]}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

/** Servizi inclusi e su richiesta, con icone (ispirato alla sezione "I servizi" del sito di riferimento). */
export default function Services({ lang, id = "servizi" }: { lang: Lang; id?: string }) {
  const t = ui[lang];
  return (
    <Section id={id}>
      <SectionHead eyebrow={t.servicesEyebrow} title={t.servicesTitle} />
      <h3 className="mb-5 mt-12 font-sans text-xs uppercase tracking-[0.3em] text-sabina-300">{t.included}</h3>
      <List items={servicesIncluded} lang={lang} />
      <h3 className="mb-5 mt-12 font-sans text-xs uppercase tracking-[0.3em] text-sabina-300">{t.onRequest}</h3>
      <List items={servicesOnRequest} lang={lang} />
    </Section>
  );
}
