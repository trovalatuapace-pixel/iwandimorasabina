import type { Lang } from "@/lib/i18n/translations";
import { content } from "@/lib/content";
import { rooms } from "@/lib/data/rooms";
import { wellnessItems } from "@/lib/data/wellness";
import { bookingHref, href } from "@/lib/site";
import Shell from "./Shell";
import RoomCard from "@/components/site/RoomCard";
import Services from "@/components/site/Services";
import StructuredData from "@/components/site/StructuredData";
import { BookingCta, Photo, Section, SectionHead, TextLink } from "@/components/site/ui";

export default function HomePage({ lang }: { lang: Lang }) {
  const t = content[lang].home;
  const c = content[lang].common;

  return (
    <Shell lang={lang} current="home" overHero>
      <StructuredData lang={lang} />
      {/* HERO — punto di innesto della futura scena 3D (vedi README) */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/foto/vista-cupola-san-pietro.webp"
          alt=""
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          fetchPriority="high"
        />
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(to bottom, rgba(11,7,4,0.45) 0%, rgba(11,7,4,0.15) 45%, rgba(20,15,10,0.95) 100%)",
          }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{ boxShadow: "inset 0 0 160px 40px rgba(11,7,4,0.65)" }}
          aria-hidden="true"
        />
        <div className="mx-auto w-full max-w-6xl px-5 pt-24 sm:px-8">
          <p className="section-eyebrow mb-5 animate-fade-in-up">{t.eyebrow}</p>
          <h1 className="animate-fade-in-up font-serif text-5xl leading-tight text-sabina-50 [animation-delay:100ms] sm:text-6xl md:text-7xl">
            {t.title}
          </h1>
          <p className="mt-6 max-w-xl animate-fade-in-up font-sans text-lg leading-relaxed text-sabina-100/90 [animation-delay:200ms] sm:text-xl">
            {t.lead}
          </p>
        </div>
        <div className="absolute inset-x-0 bottom-8 hidden justify-center sm:flex" aria-hidden="true">
          <div className="flex h-9 w-6 animate-drift items-start justify-center rounded-full border border-sabina-300/40 p-1.5">
            <span className="h-1.5 w-px bg-sabina-300/70" />
          </div>
        </div>
      </section>

      <Section divider={false}>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHead eyebrow={t.introEyebrow} title={t.introTitle} />
            {t.introText.map((p) => (
              <p key={p} className="mt-5 font-sans leading-relaxed text-sabina-100/80">
                {p}
              </p>
            ))}
          </div>
          <Photo label={c.photoSoon} src="/foto/living-biliardo-1.webp" alt={t.introTitle} className="aspect-[5/4]" />
        </div>
      </Section>

      <Section>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionHead eyebrow={t.roomsEyebrow} title={t.roomsTitle} />
          </div>
          <TextLink href={href(lang, "rooms")}>{c.allRooms}</TextLink>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room) => (
            <RoomCard key={room.slug.it} room={room} lang={lang} />
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <SectionHead eyebrow={t.houseEyebrow} title={t.houseTitle} />
            <p className="mt-5 font-sans leading-relaxed text-sabina-100/80">{t.houseText}</p>
            <div className="mt-8">
              <TextLink href={href(lang, "house")}>{t.houseLink}</TextLink>
            </div>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {wellnessItems.map((w) => (
              <li key={w.slug} className="card-surface rounded-2xl p-6">
                <h3 className="font-serif text-xl text-sabina-50">{w.name[lang]}</h3>
                <p className="mt-2 font-sans text-sm text-sabina-100/75">{w.tagline[lang]}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Services lang={lang} />

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Photo label={c.photoSoon} src="/foto/borgo-vicolo.webp" alt={t.territoryTitle} className="aspect-[5/4]" />
          <div>
            <SectionHead eyebrow={t.territoryEyebrow} title={t.territoryTitle} />
            <p className="mt-5 font-sans leading-relaxed text-sabina-100/80">{t.territoryText}</p>
            <div className="mt-8">
              <TextLink href={href(lang, "territory")}>{t.territoryLink}</TextLink>
            </div>
          </div>
        </div>
      </Section>

      <BookingCta {...t.cta} target={bookingHref(lang)} />
    </Shell>
  );
}
