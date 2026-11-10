import type { Lang } from "@/lib/i18n/translations";
import { ROOM_PRICE } from "@/lib/data/rooms";
import { stayUi } from "@/lib/data/stay";

/** "da 180 € a notte per 2 ospiti" (e, se la camera ospita 3 persone, il prezzo per 3). */
export default function PriceTag({ slug, lang, className = "" }: { slug: string; lang: Lang; className?: string }) {
  const p = ROOM_PRICE[slug];
  if (!p) return null;
  return (
    <p className={`font-sans text-sm text-sabina-100/85 ${className}`}>
      <span className="font-serif text-xl text-sabina-50">{p.two} €</span>{" "}
      {stayUi.perNight[lang]} · {stayUi.forTwo[lang]}
      {p.three && (
        <>
          {" "}
          <span className="text-sabina-300">
            · <span className="font-serif text-base text-sabina-50">{p.three} €</span> {stayUi.forThree[lang]}
          </span>
        </>
      )}
    </p>
  );
}
