import type { Lang } from "@/lib/i18n/translations";
import { content } from "@/lib/content";
import { bookingHref, href } from "@/lib/site";
import Shell from "./Shell";
import MapEmbed from "./MapEmbed";
import Nearby from "@/components/site/Nearby";
import Icon from "@/components/site/Icons";
import { extraPlaces, placeDistances, ui } from "@/lib/data/extras";
import { BookingCta, PageHero, Photo, Section, SectionHead } from "@/components/site/ui";

export default function TerritoryPage({ lang }: { lang: Lang }) {
  const t = content[lang].territory;
  const x = ui[lang];
  const places: { name: string; text: string; photo?: string; distance: string }[] = [
    ...t.places.map((p, i) => ({
      name: p.name,
      text: p.text,
      photo: "photo" in p ? (p.photo as string) : undefined,
      distance: placeDistances[i] ?? "",
    })),
    ...extraPlaces.map((p) => ({ name: p.name, text: p.text[lang], distance: p.distance })),
  ];

  return (
    <Shell lang={lang} current="territory">
      <PageHero eyebrow={t.eyebrow} title={t.title} lead={t.lead} tone="#243a3a" />

      <Section divider={false}>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <h2 className="font-serif text-3xl text-sabina-50">{t.distancesTitle}</h2>
            <dl className="mt-6 divide-y divide-sabina-800 border-y border-sabina-800">
              {t.distances.map((d) => (
                <div key={d.place} className="flex flex-wrap justify-between gap-2 py-4 font-sans text-sm">
                  <dt className="text-sabina-50">{d.place}</dt>
                  <dd className="text-sabina-300">{d.time}</dd>
                </div>
              ))}
            </dl>
          </div>
          <MapEmbed title={t.mapTitle} />
        </div>
      </Section>

      <Section>
        <SectionHead eyebrow={t.placesEyebrow} title={t.placesTitle} />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {places.map((p) => (
            <article key={p.name} className="card-surface overflow-hidden rounded-2xl">
              <Photo label={p.name} gradient="from-[#2d3a2a] to-[#10160d]" src={p.photo} alt={p.name} className="aspect-[16/9] rounded-none border-0" />
              <div className="p-6">
                <h3 className="font-serif text-2xl text-sabina-50">{p.name}</h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-sabina-100/80">{p.text}</p>
                {p.distance && (
                  <p className="mt-4 flex items-center gap-2 font-sans text-xs uppercase tracking-[0.2em] text-sabina-300">
                    <Icon name="pin" className="h-4 w-4" />
                    {x.distance} {p.distance}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Nearby lang={lang} />

      <BookingCta {...t.cta} target={bookingHref(lang)} />
    </Shell>
  );
}
