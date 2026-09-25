import type { Lang } from "@/lib/i18n/translations";
import type { Room } from "@/lib/data/rooms";
import { ui } from "@/lib/data/extras";
import Icon from "./Icons";

/** Badge capienza / metratura, come sul sito di riferimento. */
export default function RoomBadges({ room, lang, className = "" }: { room: Room; lang: Lang; className?: string }) {
  if (!room.guests && !room.size) return null;
  return (
    <div className={`flex gap-2 ${className}`}>
      {room.guests && (
        <span className="inline-flex items-center gap-1.5 rounded-full bg-sabina-400 px-3 py-1 font-sans text-xs font-medium text-sabina-950">
          <Icon name="user" className="h-3.5 w-3.5" />
          {ui[lang].guests(room.guests)}
        </span>
      )}
      {room.size && (
        <span className="inline-flex items-center rounded-full bg-sabina-400 px-3 py-1 font-sans text-xs font-medium text-sabina-950">
          {room.size} m²
        </span>
      )}
    </div>
  );
}
