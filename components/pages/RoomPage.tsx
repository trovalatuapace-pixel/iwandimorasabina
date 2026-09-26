import Link from "next/link";
import type { Lang } from "@/lib/i18n/translations";
import type { Room } from "@/lib/data/rooms";
import { rooms } from "@/lib/data/rooms";
import { content } from "@/lib/content";
import { bookingHref, href } from "@/lib/site";
import Shell from "./Shell";
import RoomBadges from "@/components/site/RoomBadges";
import { RoomArc } from "@/components/site/Logo";
import { BookingCta, Photo, Section, TextLink } from "@/components/site/ui";

export default function RoomPage({ lang, room }: { lang: Lang; room: Room }) {
  const t = content[lang].room;
  const c = content[lang].common;
  const index = rooms.indexOf(room);
  const others = rooms.filter((r) => r !== room);
  const name = room.name[lang];

  return (
    <Shell lang={lang} current="room" roomSlugIt={room.slug.it}>
      <section className="relative overflow-hidden px-5 pb-12 pt-36 sm:px-8 sm:pt-44">
        <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${room.gradient}`} aria-hidden="true" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#140f0a] via-transparent to-transparent" aria-hidden="true" />
        <div className="mx-auto max-w-6xl">
          <Link
            href={href(lang, "rooms")}
            className="font-sans text-xs uppercase tracking-[0.2em] text-sabina-300 hover:text-sabina-100"
          >
            ← {c.backToRooms}
          </Link>
          <p className="section-eyebrow mb-4 mt-8 flex items-center gap-2">
            <RoomArc color={room.colorLight} size={16} />
            {c.room} {String(index + 1).padStart(2, "0")} / {String(rooms.length).padStart(2, "0")}
          </p>
          <h1 className="font-serif text-5xl text-sabina-50 sm:text-6xl md:text-7xl">{name}</h1>
          <span className="mt-6 block h-1 w-24 rounded-full" style={{ backgroundColor: room.colorLight }} aria-hidden="true" />
          <p className="mt-5 max-w-2xl font-serif text-xl italic text-sabina-200">{room.tagline[lang]}</p>
          <RoomBadges room={room} lang={lang} className="mt-6" />
        </div>
      </section>

      <Section divider={false}>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <Photo label={c.photoSoon} gradient={room.gradient} src={room.photo} alt={name} className="aspect-[16/10]" />
            <p className="mt-8 font-sans text-lg leading-relaxed text-sabina-100/85">
              {room.description[lang]}
            </p>
          </div>
          <aside className="card-surface h-fit overflow-hidden rounded-2xl p-7" style={{ borderTopColor: room.color, borderTopWidth: 4 }}>
            <p className="section-eyebrow mb-5">{t.amenities}</p>
            <ul className="space-y-3">
              {room.amenities[lang].map((a) => (
                <li key={a} className="flex gap-3 font-sans text-sm text-sabina-100/90">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 border" style={{ borderColor: room.colorLight }} aria-hidden="true" />
                  {a}
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <p className="section-eyebrow mb-6 mt-16">{t.gallery}</p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {room.gallery && room.gallery.length > 0
            ? room.gallery.map((src, n) => (
                <Photo key={src} label={name} src={src} alt={`${name} — ${n + 1}`} className="aspect-square" />
              ))
            : [1, 2, 3].map((n) => (
                <Photo key={n} label={`${name} — ${n}`} gradient={room.gradient} className="aspect-square" />
              ))}
        </div>
      </Section>

      <BookingCta
        title={t.ctaTitle(name)}
        text={t.ctaText}
        button={t.ctaButton(name)}
        target={bookingHref(lang)}
      />

      <Section>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-serif text-3xl text-sabina-50">{c.otherRooms}</h2>
          <TextLink href={href(lang, "rooms")}>{c.allRooms}</TextLink>
        </div>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {others.map((r) => (
            <li key={r.slug.it}>
              <Link
                href={href(lang, "room", r.slug.it)}
                className="card-surface block rounded-2xl p-5 transition hover:border-sabina-400/50"
              >
                <span className="flex items-center gap-2 font-serif text-xl text-sabina-50">
                  <RoomArc color={r.colorLight} size={16} />
                  {r.name[lang]}
                </span>
                <span className="mt-1 block font-sans text-xs text-sabina-100/70">{r.tagline[lang]}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </Shell>
  );
}
