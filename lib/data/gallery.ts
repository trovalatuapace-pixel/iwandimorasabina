import type { Localized } from "@/lib/i18n/translations";

/** Galleria "Uno sguardo alla casa" nella pagina La Casa. Foto in /public/foto, uguali in tutte le lingue. */
export type GalleryItem = { src: string; alt: Localized; wide?: boolean };

export const houseGallery: GalleryItem[] = [
  {
    src: "/foto/idromassaggio-bollicine.webp",
    wide: true,
    alt: {
      it: "Vasca idromassaggio sul terrazzo al tramonto, con vino e calici",
      en: "Terrace hot tub at sunset, with wine and glasses",
      de: "Whirlpool auf der Terrasse bei Sonnenuntergang, mit Wein und Gläsern",
      fr: "Jacuzzi sur la terrasse au coucher du soleil, avec vin et verres",
    },
  },
  {
    src: "/foto/living-biliardo-3.webp",
    alt: { it: "Tavolo da biliardo nel soggiorno", en: "Pool table in the living room", de: "Billardtisch im Wohnzimmer", fr: "Billard dans le salon" },
  },
  {
    src: "/foto/sala-pranzo.webp",
    alt: { it: "Sala da pranzo con tavolo in legno", en: "Dining room with wooden table", de: "Esszimmer mit Holztisch", fr: "Salle à manger avec table en bois" },
  },
  {
    src: "/foto/cucina.webp",
    alt: { it: "Cucina con isola centrale", en: "Kitchen with central island", de: "Küche mit Kochinsel", fr: "Cuisine avec îlot central" },
  },
  {
    src: "/foto/vasca-opera-arte.webp",
    alt: { it: "Vasca in muratura sotto un'opera d'arte", en: "Built-in bathtub beneath an artwork", de: "Gemauerte Badewanne unter einem Kunstwerk", fr: "Baignoire maçonnée sous une œuvre d'art" },
  },
  {
    src: "/foto/idromassaggio-dallalto.webp",
    alt: { it: "La vasca idromassaggio vista dall'alto", en: "The hot tub seen from above", de: "Der Whirlpool von oben", fr: "Le jacuzzi vu d'en haut" },
  },
  {
    src: "/foto/sauna-doccia.webp",
    alt: { it: "Sauna e doccia", en: "Sauna and shower", de: "Sauna und Dusche", fr: "Sauna et douche" },
  },
  {
    src: "/foto/bagno.webp",
    alt: { it: "Bagno", en: "Bathroom", de: "Badezimmer", fr: "Salle de bain" },
  },
  {
    src: "/foto/interni-scala-arco.webp",
    alt: { it: "Scala con arco e porta in ferro", en: "Arched staircase and iron door", de: "Treppe mit Bogen und Eisentür", fr: "Escalier voûté et porte en fer" },
  },
  {
    src: "/foto/idromassaggio-tramonto.webp",
    alt: {
      it: "Idromassaggio con il sole che tramonta sulle colline",
      en: "Hot tub as the sun sets over the hills",
      de: "Whirlpool, während die Sonne über den Hügeln untergeht",
      fr: "Jacuzzi au soleil couchant sur les collines",
    },
  },
  {
    src: "/foto/brindisi.webp",
    alt: { it: "Un brindisi a bordo vasca", en: "A toast by the hot tub", de: "Ein Toast am Whirlpool", fr: "Un toast au bord du jacuzzi" },
  },
  {
    src: "/foto/idromassaggio-vino.webp",
    alt: {
      it: "Calici e bottiglia sul bordo della vasca",
      en: "Glasses and a bottle on the edge of the hot tub",
      de: "Gläser und eine Flasche am Rand des Whirlpools",
      fr: "Verres et bouteille au bord du jacuzzi",
    },
  },
];
