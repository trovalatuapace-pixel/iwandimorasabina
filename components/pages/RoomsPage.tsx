import type { Lang } from "@/lib/i18n/translations";
import { content } from "@/lib/content";
import { rooms } from "@/lib/data/rooms";
import { bookingHref, href } from "@/lib/site";
import Shell from "./Shell";
import RoomCard from "@/components/site/RoomCard";
import StayModes from "@/components/site/StayModes";
import { stayUi } from "@/lib/data/stay";
import { BookingCta, PageHero, Section } from "@/components/site/ui";

export default function RoomsPage({ lang }: { lang: Lang }) {
  const t = content[lang].rooms;
  return (
    <Shell lang={lang} current="rooms">
      <PageHero eyebrow={t.eyebrow} title={t.title} lead={t.lead} />
      <Section tone="light">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room) => (
            <RoomCard key={room.slug.it} room={room} lang={lang} />
          ))}
        </div>
        <div className="card-surface mt-10 rounded-2xl p-6">
          <p className="font-serif text-xl text-sabina-50">{stayUi.shared.title[lang]}</p>
          <p className="mt-2 max-w-3xl font-sans text-sm leading-relaxed text-sabina-100/75">{stayUi.shared.text[lang]}</p>
        </div>
      </Section>
      <StayModes lang={lang} tone="dark" />
      <BookingCta {...t.cta} target={bookingHref(lang)} lang={lang} />
    </Shell>
  );
}
