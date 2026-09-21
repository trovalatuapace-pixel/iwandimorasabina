export type Room = {
  slug: string;
  gradient: string;
  icon: string;
  name: { it: string; en: string };
  tagline: { it: string; en: string };
  description: { it: string; en: string };
  amenities: { it: string[]; en: string[] };
};

export const rooms: Room[] = [
  {
    slug: "europa",
    gradient: "from-[#2b3a4a] to-[#0e141c]",
    icon: "🏛️",
    name: { it: "Europa", en: "Europe" },
    tagline: {
      it: "Eleganza classica tra pietra e velluto",
      en: "Classic elegance in stone and velvet",
    },
    description: {
      it: "Linee sobrie, tessuti pregiati e richiami all'architettura europea per una camera che unisce storia e comfort contemporaneo.",
      en: "Sober lines, fine fabrics and nods to European architecture, in a room that blends history with contemporary comfort.",
    },
    amenities: {
      it: ["Letto matrimoniale king size", "Bagno privato con doccia", "Aria condizionata", "Scrivania e area lettura"],
      en: ["King size bed", "Private bathroom with shower", "Air conditioning", "Desk and reading area"],
    },
  },
  {
    slug: "asia",
    gradient: "from-[#3a2a3f] to-[#150e18]",
    icon: "🏮",
    name: { it: "Asia", en: "Asia" },
    tagline: {
      it: "Quiete zen e dettagli orientali",
      en: "Zen calm and eastern details",
    },
    description: {
      it: "Materiali naturali, tonalità profonde e un'atmosfera raccolta ispirata all'estetica orientale, per un soggiorno all'insegna della quiete.",
      en: "Natural materials, deep tones and an intimate atmosphere inspired by eastern aesthetics, for a stay devoted to calm.",
    },
    amenities: {
      it: ["Letto matrimoniale", "Bagno privato", "Set da tè in camera", "Illuminazione soffusa regolabile"],
      en: ["Double bed", "Private bathroom", "In-room tea set", "Dimmable ambient lighting"],
    },
  },
  {
    slug: "africa",
    gradient: "from-[#4a3420] to-[#1c130a]",
    icon: "🌍",
    name: { it: "Africa", en: "Africa" },
    tagline: {
      it: "Colori caldi e materiali autentici",
      en: "Warm colors and authentic materials",
    },
    description: {
      it: "Terre cotte, legni grezzi e tessuti dai colori intensi ricreano l'energia calda del continente africano in una camera avvolgente.",
      en: "Terracotta, raw woods and richly colored fabrics recreate the warm energy of the African continent in an enveloping room.",
    },
    amenities: {
      it: ["Letto matrimoniale", "Bagno privato con vasca", "Zona relax con poltrona", "Vista giardino"],
      en: ["Double bed", "Private bathroom with tub", "Relax area with armchair", "Garden view"],
    },
  },
  {
    slug: "americhe",
    gradient: "from-[#2f3a2a] to-[#10160d]",
    icon: "🗽",
    name: { it: "Americhe", en: "Americas" },
    tagline: {
      it: "Spirito libero, dal nord al sud",
      en: "Free spirit, from north to south",
    },
    description: {
      it: "Un mix di stile metropolitano e calore latino, tra materiali industriali e tessuti vivaci, per chi ama i contrasti.",
      en: "A mix of metropolitan style and Latin warmth, between industrial materials and vibrant fabrics, for those who love contrast.",
    },
    amenities: {
      it: ["Letto matrimoniale king size", "Bagno privato con doccia", "Angolo bar attrezzato", "Smart TV"],
      en: ["King size bed", "Private bathroom with shower", "Equipped bar corner", "Smart TV"],
    },
  },
  {
    slug: "oceania",
    gradient: "from-[#1f3a3f] to-[#0a1618]",
    icon: "🌊",
    name: { it: "Oceania", en: "Oceania" },
    tagline: {
      it: "Toni marini e leggerezza australe",
      en: "Ocean tones and southern lightness",
    },
    description: {
      it: "Tonalità acquamarina, fibre naturali e un'atmosfera luminosa evocano le coste australiane e le isole del Pacifico.",
      en: "Aquamarine tones, natural fibers and a bright atmosphere evoke the Australian coastline and the islands of the Pacific.",
    },
    amenities: {
      it: ["Letto matrimoniale", "Bagno privato", "Balcone privato", "Set cortesia naturale"],
      en: ["Double bed", "Private bathroom", "Private balcony", "Natural courtesy set"],
    },
  },
];
