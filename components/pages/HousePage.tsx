import type { Lang } from "@/lib/i18n/translations";
import { content } from "@/lib/content";
import { wellnessItems } from "@/lib/data/wellness";
import { houseGallery } from "@/lib/data/gallery";
import { bookingHref, href } from "@/lib/site";
import Shell from "./Shell";
import Services from "@/components/site/Services";
import { BookingCta, PageHero, Photo, Section, SectionHead } from "@/components/site/ui";

export default function HousePage({ lang }: { lang: Lang }) {
  const t = content[lang].house;
  const c = content[lang].common;

  return (
    <Shell lang={lang} current="house">
      <PageHero eyebrow={t.eyebrow} title={t.title} lead={t.lead} />

      <Section divider={false}>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="section-title">{t.conceptTitle}</h2>
            {t.conceptText.map((p) => (
              <p key={p} className="mt-5 font-sans leading-relaxed text-sabina-100/80">
                {p}
              </p>
            ))}
          </div>
          <Photo label={c.photoSoon} src="/foto/living-biliardo-2.webp" alt={t.conceptTitle} className="aspect-[5/4]" />
        </div>
      </Section>

      <Section>
        <SectionHead eyebrow={t.spacesEyebrow} title={t.spacesTitle} />
        <div className="mt-12 space-y-16">
          {wellnessItems.map((w, i) => (
            <article
              key={w.slug}
              id={w.slug}
              className="grid scroll-mt-28 items-center gap-8 md:grid-cols-2 md:gap-12"
            >
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <Photo label={w.name[lang]} gradient={w.gradient} src={w.photo} alt={w.name[lang]} className="aspect-[4/3]" />
              </div>
              <div>
                <h3 className="font-serif text-3xl text-sabina-50">{w.name[lang]}</h3>
                <p className="mt-2 font-serif text-lg italic text-sabina-300">{w.tagline[lang]}</p>
                <p className="mt-4 font-sans leading-relaxed text-sabina-100/80">{w.description[lang]}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Services lang={lang} />

      <Section>
        <SectionHead eyebrow={t.galleryEyebrow} title={t.galleryTitle} />
        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          {houseGallery.map((g) => (
            <Photo
              key={g.src}
              label={g.alt[lang]}
              src={g.src}
              alt={g.alt[lang]}
              className={g.wide ? "col-span-2 aspect-[16/10] md:col-span-2 md:row-span-2 md:aspect-auto md:h-full" : "aspect-square"}
            />
          ))}
        </div>
      </Section>

      <BookingCta {...t.cta} target={bookingHref(lang)} />
    </Shell>
  );
}
