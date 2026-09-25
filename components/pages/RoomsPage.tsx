import type { Lang } from "@/lib/i18n/translations";
import { content } from "@/lib/content";
import { rooms } from "@/lib/data/rooms";
import { bookingHref, href } from "@/lib/site";
import Shell from "./Shell";
import RoomCard from "@/components/site/RoomCard";
import { BookingCta, PageHero, Section } from "@/components/site/ui";

export default function RoomsPage({ lang }: { lang: Lang }) {
  const t = content[lang].rooms;
  return (
    <Shell lang={lang} current="rooms">
      <PageHero eyebrow={t.eyebrow} title={t.title} lead={t.lead} />
      <Section divider={false}>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room) => (
            <RoomCard key={room.slug.it} room={room} lang={lang} />
          ))}
        </div>
      </Section>
      <BookingCta {...t.cta} target={bookingHref(lang)} />
    </Shell>
  );
}
