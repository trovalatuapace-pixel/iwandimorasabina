import Link from "next/link";
import type { Lang } from "@/lib/i18n/translations";
import { stayUi, wholeHouse, WHOLE_HOUSE_ID } from "@/lib/data/stay";
import { bookingHref, href } from "@/lib/site";
import { Section, SectionHead } from "@/components/site/ui";

/** "Una camera, o tutta la casa": spiega i due modi di prenotare. */
export default function StayModes({ lang, tone = "dark" }: { lang: Lang; tone?: "light" | "dark" }) {
  const m = stayUi.modes;
  return (
    <Section tone={tone}>
      <SectionHead eyebrow={m.eyebrow[lang]} title={m.title[lang]} />
      <p className="mt-4 max-w-3xl font-sans leading-relaxed text-sabina-100/80">{m.lead[lang]}</p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="card-surface flex flex-col rounded-3xl p-8">
          <h3 className="font-serif text-2xl text-sabina-50">{m.roomTitle[lang]}</h3>
          <p className="mt-3 flex-1 font-sans text-sabina-100/80">{m.roomText[lang]}</p>
          <div className="mt-6">
            <Link href={href(lang, "rooms")} className="btn-primary">
              {m.roomButton[lang]}
            </Link>
          </div>
        </div>
        <div className="card-surface flex flex-col rounded-3xl p-8">
          <h3 className="font-serif text-2xl text-sabina-50">{m.houseTitle[lang]}</h3>
          <p className="mt-3 flex-1 font-sans text-sabina-100/80">{m.houseText[lang]}</p>
          <p className="mt-3 font-sans text-sm text-sabina-300">{wholeHouse.priceOnRequest[lang]}</p>
          <div className="mt-6">
            <Link href={bookingHref(lang, WHOLE_HOUSE_ID)} className="btn-outline">
              {wholeHouse.button[lang]}
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
