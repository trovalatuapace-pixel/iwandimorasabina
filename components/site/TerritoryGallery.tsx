import type { Lang, Localized } from "@/lib/i18n/translations";
import { Section, SectionHead } from "./ui";

/** Galleria fotografica del territorio (pagina Territorio). */
type Shot = { src: string; caption: Localized; tall?: boolean };

const shots: Shot[] = [
  {
    src: "/foto/territorio-borgo-dall-alto.webp",
    caption: { it: "Borghi sulle colline", en: "Hilltop villages", de: "Dörfer auf den Hügeln", fr: "Villages perchés" },
  },
  {
    src: "/foto/territorio-lago-turano-verticale.webp",
    caption: { it: "Lago del Turano, Castel di Tora", en: "Lake Turano, Castel di Tora", de: "Turano-See, Castel di Tora", fr: "Lac du Turano, Castel di Tora" },
    tall: true,
  },
  {
    src: "/foto/territorio-piana.webp",
    caption: { it: "Prati e cieli della Sabina", en: "Meadows and skies of Sabina", de: "Wiesen und Himmel der Sabina", fr: "Prés et ciels de la Sabine" },
  },
  {
    src: "/foto/territorio-bunker-soratte-galleria.webp",
    caption: { it: "Bunker del Monte Soratte", en: "Monte Soratte Bunker", de: "Bunker am Monte Soratte", fr: "Bunker du mont Soratte" },
  },
  {
    src: "/foto/territorio-porta-orologio.webp",
    caption: { it: "Porte e torri medievali", en: "Medieval gates and towers", de: "Mittelalterliche Tore und Türme", fr: "Portes et tours médiévales" },
    tall: true,
  },
  {
    src: "/foto/territorio-chiesa-campagna.webp",
    caption: { it: "Chiese di campagna", en: "Country churches", de: "Landkirchen", fr: "Églises de campagne" },
  },
  {
    src: "/foto/territorio-bosco.webp",
    caption: { it: "Boschi e sentieri", en: "Woods and trails", de: "Wälder und Wanderwege", fr: "Bois et sentiers" },
  },
  {
    src: "/foto/territorio-bunker-soratte-sala.webp",
    caption: { it: "La sala della Guerra Fredda nel Soratte", en: "The Cold War room inside Soratte", de: "Der Raum aus dem Kalten Krieg im Soratte", fr: "La salle de la guerre froide du Soratte" },
  },
  {
    src: "/foto/territorio-lago-turano.webp",
    caption: { it: "Castel di Tora sul lago", en: "Castel di Tora on the lake", de: "Castel di Tora am See", fr: "Castel di Tora au bord du lac" },
  },
];

const ui: Record<Lang, { eyebrow: string; title: string }> = {
  it: { eyebrow: "In immagini", title: "La Sabina attorno alla casa" },
  en: { eyebrow: "In pictures", title: "Sabina around the house" },
  de: { eyebrow: "In Bildern", title: "Die Sabina rund um das Haus" },
  fr: { eyebrow: "En images", title: "La Sabine autour de la maison" },
};

export default function TerritoryGallery({ lang }: { lang: Lang }) {
  const t = ui[lang];
  return (
    <Section tone="light">
      <SectionHead eyebrow={t.eyebrow} title={t.title} />
      <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {shots.map((s) => (
          <figure key={s.src} className="mb-4 break-inside-avoid">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={s.src}
              alt={s.caption[lang]}
              loading="lazy"
              className={`w-full rounded-2xl object-cover ${s.tall ? "aspect-[2/3]" : "aspect-[4/3]"}`}
            />
            <figcaption className="mt-2 font-sans text-xs uppercase tracking-[0.18em] text-sabina-300">
              {s.caption[lang]}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
