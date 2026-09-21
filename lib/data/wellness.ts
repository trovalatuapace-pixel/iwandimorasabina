export type WellnessItem = {
  slug: string;
  gradient: string;
  icon: string;
  name: { it: string; en: string };
  tagline: { it: string; en: string };
  description: { it: string; en: string };
};

export const wellnessItems: WellnessItem[] = [
  {
    slug: "sauna",
    gradient: "from-[#3f2a1f] to-[#170f0a]",
    icon: "🧖",
    name: { it: "Sauna", en: "Sauna" },
    tagline: {
      it: "Calore avvolgente per rigenerare corpo e mente",
      en: "Enveloping heat to restore body and mind",
    },
    description: {
      it: "Una sauna privata pensata per il relax più profondo, disponibile agli ospiti in totale riservatezza.",
      en: "A private sauna designed for deep relaxation, available to guests in complete privacy.",
    },
  },
  {
    slug: "palestra",
    gradient: "from-[#2a2f3a] to-[#0d1016]",
    icon: "🏋️",
    name: { it: "Palestra", en: "Gym" },
    tagline: {
      it: "Allenarsi senza rinunciare alla vacanza",
      en: "Train without giving up on your holiday",
    },
    description: {
      it: "Uno spazio attrezzato per mantenere la propria routine di allenamento anche durante il soggiorno.",
      en: "A fully equipped space to keep up your training routine even while on holiday.",
    },
  },
  {
    slug: "terrazzo",
    gradient: "from-[#243a3a] to-[#0a1616]",
    icon: "🔭",
    name: { it: "Terrazzo panoramico", en: "Panoramic terrace" },
    tagline: {
      it: "Un binocolo puntato sulla Cupola di Roma",
      en: "A telescope pointed at Rome's Dome",
    },
    description: {
      it: "Dal terrazzo, nelle giornate limpide, un binocolo permette di ammirare la Cupola di San Pietro all'orizzonte: un momento sospeso tra la Sabina e Roma.",
      en: "From the terrace, on clear days, a telescope lets you admire St. Peter's Dome on the horizon: a moment suspended between Sabina and Rome.",
    },
  },
  {
    slug: "vasca-idromassaggio",
    gradient: "from-[#1f2f3a] to-[#0a1218]",
    icon: "🛁",
    name: { it: "Vasca idromassaggio", en: "Hot tub" },
    tagline: {
      it: "Relax assoluto sotto il cielo della Sabina",
      en: "Absolute relaxation under the Sabina sky",
    },
    description: {
      it: "La vasca idromassaggio è il cuore della zona wellness: un invito a rallentare, di giorno come di sera.",
      en: "The hot tub is the heart of the wellness area: an invitation to slow down, day and night.",
    },
  },
];
