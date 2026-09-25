import type { Localized } from "@/lib/i18n/translations";

export type WellnessItem = {
  slug: string;
  gradient: string;
  /** Foto in /public (facoltativa) */
  photo?: string;
  icon: string;
  name: Localized;
  tagline: Localized;
  description: Localized;
};

export const wellnessItems: WellnessItem[] = [
  {
    slug: "sauna",
    photo: "/foto/sauna.webp",
    gradient: "from-[#3f2a1f] to-[#170f0a]",
    icon: "🧖",
    name: { it: "Sauna", en: "Sauna", de: "Sauna", fr: "Sauna" },
    tagline: {
      it: "Calore avvolgente per rigenerare corpo e mente",
      en: "Enveloping heat to restore body and mind",
      de: "Wohlige Wärme für Körper und Geist",
      fr: "Une chaleur enveloppante pour régénérer le corps et l'esprit",
    },
    description: {
      it: "Una sauna privata pensata per il relax più profondo, disponibile agli ospiti in totale riservatezza.",
      en: "A private sauna designed for deep relaxation, available to guests in complete privacy.",
      de: "Eine private Sauna für tiefste Entspannung, die den Gästen in völliger Privatsphäre zur Verfügung steht.",
      fr: "Un sauna privé conçu pour une détente profonde, à la disposition des hôtes en toute intimité.",
    },
  },
  {
    slug: "palestra",
    gradient: "from-[#2a2f3a] to-[#0d1016]",
    icon: "🏋️",
    name: { it: "Palestra", en: "Gym", de: "Fitnessraum", fr: "Salle de sport" },
    tagline: {
      it: "Allenarsi senza rinunciare alla vacanza",
      en: "Train without giving up on your holiday",
      de: "Trainieren, ohne auf Urlaub zu verzichten",
      fr: "S'entraîner sans renoncer aux vacances",
    },
    description: {
      it: "Uno spazio attrezzato per mantenere la propria routine di allenamento anche durante il soggiorno.",
      en: "A fully equipped space to keep up your training routine even while on holiday.",
      de: "Ein voll ausgestatteter Raum, um Ihre Trainingsroutine auch im Urlaub beizubehalten.",
      fr: "Un espace entièrement équipé pour garder votre routine d'entraînement, même en vacances.",
    },
  },
  {
    slug: "terrazzo",
    photo: "/foto/terrazzo-binocolo.webp",
    gradient: "from-[#243a3a] to-[#0a1616]",
    icon: "🔭",
    name: { it: "Terrazzo panoramico", en: "Panoramic terrace", de: "Panoramaterrasse", fr: "Terrasse panoramique" },
    tagline: {
      it: "Un binocolo puntato sulla Cupola di Roma",
      en: "Binoculars pointed at Rome's Dome",
      de: "Ein Fernglas mit Blick auf die Kuppel Roms",
      fr: "Des jumelles tournées vers la coupole de Rome",
    },
    description: {
      it: "Dal terrazzo, nelle giornate limpide, un binocolo permette di ammirare la Cupola di San Pietro all'orizzonte: un momento sospeso tra la Sabina e Roma.",
      en: "From the terrace, on clear days, a pair of binoculars lets you admire St. Peter's Dome on the horizon: a moment suspended between Sabina and Rome.",
      de: "An klaren Tagen können Sie von der Terrasse aus mit dem Fernglas die Kuppel des Petersdoms am Horizont bewundern – ein Moment zwischen Sabina und Rom.",
      fr: "Depuis la terrasse, par temps clair, des jumelles permettent d'admirer la coupole de Saint-Pierre à l'horizon : un moment suspendu entre la Sabine et Rome.",
    },
  },
  {
    slug: "vasca-idromassaggio",
    photo: "/foto/idromassaggio-sera.webp",
    gradient: "from-[#1f2f3a] to-[#0a1218]",
    icon: "🛁",
    name: { it: "Vasca idromassaggio", en: "Hot tub", de: "Whirlpool", fr: "Jacuzzi" },
    tagline: {
      it: "Relax assoluto sotto il cielo della Sabina",
      en: "Absolute relaxation under the Sabina sky",
      de: "Pure Entspannung unter dem Himmel der Sabina",
      fr: "Détente absolue sous le ciel de la Sabine",
    },
    description: {
      it: "La vasca idromassaggio è il cuore della zona wellness: un invito a rallentare, di giorno come di sera.",
      en: "The hot tub is the heart of the wellness area: an invitation to slow down, day and night.",
      de: "Der Whirlpool ist das Herzstück des Wellnessbereichs: eine Einladung zum Entschleunigen, bei Tag wie bei Nacht.",
      fr: "Le jacuzzi est le cœur de l'espace bien-être : une invitation à ralentir, de jour comme de nuit.",
    },
  },
];
