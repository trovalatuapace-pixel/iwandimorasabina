import Link from "next/link";
import type { Lang } from "@/lib/i18n/translations";
import type { Room } from "@/lib/data/rooms";
import { rooms } from "@/lib/data/rooms";
import { href } from "@/lib/site";
import { content } from "@/lib/content";
import RoomBadges from "./RoomBadges";
import { RoomArc } from "./Logo";

export default function RoomCard({ room, lang }: { room: Room; lang: Lang }) {
  const index = rooms.indexOf(room);
  return (
    <Link href={href(lang, "room", room.slug.it)} className="card-interactive group block">
      <div
        className={`relative flex aspect-[4/3] items-end overflow-hidden rounded-t-2xl bg-gradient-to-br ${room.gradient}`}
      >
        {room.photo && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={room.photo}
            alt={room.name[lang]}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        )}
        {room.photo && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" aria-hidden="true" />
        )}
        <span className="absolute inset-x-0 top-0 z-10 h-1.5" style={{ backgroundColor: room.color }} aria-hidden="true" />
        <span className="absolute left-5 top-4 z-10 font-serif text-xs uppercase tracking-[0.3em] text-sabina-50/70">
          {String(index + 1).padStart(2, "0")} / {String(rooms.length).padStart(2, "0")}
        </span>
        <RoomBadges room={room} lang={lang} className="absolute bottom-4 right-4 z-10" />
        {!room.photo && (
          <span className="m-5 font-sans text-[10px] uppercase tracking-[0.3em] text-sabina-100/40">
            {content[lang].common.photoSoon}
          </span>
        )}
      </div>
      <div className="card-surface rounded-b-2xl border-t-0 p-6">
        <h3 className="flex items-center gap-2.5 font-serif text-2xl text-sabina-50">
          <RoomArc color={room.colorLight} size={18} />
          {room.name[lang]}
        </h3>
        <p className="mt-2 font-sans text-sm text-sabina-100/75">{room.tagline[lang]}</p>
      </div>
    </Link>
  );
}
