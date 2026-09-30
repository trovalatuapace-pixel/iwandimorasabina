import type { Lang, Localized } from "@/lib/i18n/translations";

export type Room = {
  /** Slug usato negli URL: /camere/<it>, /en/rooms/<en>, /de/zimmer/<de>, /fr/chambres/<fr> */
  slug: Localized;
  gradient: string;
  icon: string;
  /** Colore della camera nel logo Dimora Pangea (arco dell'anello) */
  color: string;
  /** Versione più chiara dello stesso colore, leggibile sui fondi scuri del sito */
  colorLight: string;
  name: Localized;
  tagline: Localized;
  description: Localized;
  amenities: Localized<string[]>;
  /** Foto principale in /public (facoltativa: senza, resta il segnaposto) */
  photo?: string;
  /** Foto della galleria in /public */
  gallery?: string[];
  /** Ospiti massimi, es. "2" o "2/3" (facoltativo: mostrato come badge) */
  guests?: string;
  /** Metratura in mq (facoltativa: mostrata come badge) */
  size?: number;
  /** Immagine di anteprima 1200x630 per WhatsApp/Facebook (facoltativa: senza, si usa quella generale) */
  ogImage?: string;
};

export const rooms: Room[] = [
  {
    slug: { it: "europa", en: "europe", de: "europa", fr: "europe" },
    gradient: "from-[#4F5A3A] to-[#10160d]",
    color: "#4F5A3A",
    colorLight: "#8A976A",
    icon: "🏛️",
    name: { it: "Europa", en: "Europe", de: "Europa", fr: "Europe" },
    tagline: {
      it: "Eleganza classica tra pietra e velluto",
      en: "Classic elegance in stone and velvet",
      de: "Klassische Eleganz aus Stein und Samt",
      fr: "Élégance classique entre pierre et velours",
    },
    description: {
      it: "Linee sobrie, tessuti pregiati e richiami all'architettura europea per una camera che unisce storia e comfort contemporaneo.",
      en: "Sober lines, fine fabrics and nods to European architecture, in a room that blends history with contemporary comfort.",
      de: "Schlichte Linien, edle Stoffe und Anklänge an die europäische Architektur – ein Zimmer, das Geschichte mit modernem Komfort verbindet.",
      fr: "Lignes sobres, tissus raffinés et clins d'œil à l'architecture européenne pour une chambre qui allie histoire et confort contemporain.",
    },
    amenities: {
      it: ["Letto matrimoniale king size", "Bagno privato con doccia", "Aria condizionata", "Scrivania e area lettura"],
      en: ["King size bed", "Private bathroom with shower", "Air conditioning", "Desk and reading area"],
      de: ["Kingsize-Doppelbett", "Eigenes Bad mit Dusche", "Klimaanlage", "Schreibtisch und Leseecke"],
      fr: ["Lit king size", "Salle de bain privée avec douche", "Climatisation", "Bureau et coin lecture"],
    },
  },
  {
    slug: { it: "asia", en: "asia", de: "asien", fr: "asie" },
    gradient: "from-[#C99A3E] to-[#1c140a]",
    color: "#C99A3E",
    colorLight: "#D9B366",
    icon: "🏮",
    name: { it: "Asia", en: "Asia", de: "Asien", fr: "Asie" },
    tagline: {
      it: "Quiete zen e dettagli orientali",
      en: "Zen calm and eastern details",
      de: "Zen-Ruhe und fernöstliche Details",
      fr: "Sérénité zen et touches orientales",
    },
    description: {
      it: "Materiali naturali, tonalità profonde e un'atmosfera raccolta ispirata all'estetica orientale, per un soggiorno all'insegna della quiete.",
      en: "Natural materials, deep tones and an intimate atmosphere inspired by eastern aesthetics, for a stay devoted to calm.",
      de: "Natürliche Materialien, tiefe Farbtöne und eine geborgene Atmosphäre nach fernöstlicher Ästhetik – für einen Aufenthalt ganz im Zeichen der Ruhe.",
      fr: "Matériaux naturels, tons profonds et atmosphère intime inspirée de l'esthétique orientale, pour un séjour placé sous le signe du calme.",
    },
    amenities: {
      it: ["Letto matrimoniale", "Bagno privato", "Set da tè in camera", "Illuminazione soffusa regolabile"],
      en: ["Double bed", "Private bathroom", "In-room tea set", "Dimmable ambient lighting"],
      de: ["Doppelbett", "Eigenes Bad", "Teeset im Zimmer", "Dimmbares Ambientelicht"],
      fr: ["Lit double", "Salle de bain privée", "Service à thé en chambre", "Éclairage d'ambiance réglable"],
    },
  },
  {
    slug: { it: "africa", en: "africa", de: "afrika", fr: "afrique" },
    gradient: "from-[#A94F2B] to-[#1c0f0a]",
    color: "#A94F2B",
    colorLight: "#D07A55",
    icon: "🌍",
    name: { it: "Africa", en: "Africa", de: "Afrika", fr: "Afrique" },
    tagline: {
      it: "Colori caldi e materiali autentici",
      en: "Warm colors and authentic materials",
      de: "Warme Farben und authentische Materialien",
      fr: "Couleurs chaudes et matières authentiques",
    },
    description: {
      it: "Terre cotte, legni grezzi e tessuti dai colori intensi ricreano l'energia calda del continente africano in una camera avvolgente.",
      en: "Terracotta, raw woods and richly colored fabrics recreate the warm energy of the African continent in an enveloping room.",
      de: "Terrakotta, rohe Hölzer und farbintensive Stoffe lassen die warme Energie des afrikanischen Kontinents in einem behaglichen Zimmer aufleben.",
      fr: "Terres cuites, bois bruts et tissus aux couleurs intenses recréent l'énergie chaleureuse du continent africain dans une chambre enveloppante.",
    },
    amenities: {
      it: ["Letto matrimoniale", "Bagno privato con vasca", "Zona relax con poltrona", "Vista giardino"],
      en: ["Double bed", "Private bathroom with tub", "Relax area with armchair", "Garden view"],
      de: ["Doppelbett", "Eigenes Bad mit Badewanne", "Ruheecke mit Sessel", "Gartenblick"],
      fr: ["Lit double", "Salle de bain privée avec baignoire", "Coin détente avec fauteuil", "Vue sur le jardin"],
    },
  },
  {
    slug: { it: "americhe", en: "americas", de: "amerika", fr: "ameriques" },
    photo: "/foto/camera-americhe.webp",
    ogImage: "/og/camera-americhe.jpg",
    gallery: [
      "/foto/camera-americhe-letto.webp",
      "/foto/camera-americhe-poltrone.webp",
      "/foto/camera-americhe-tv.webp",
      "/foto/camera-americhe-bagno.webp",
      "/foto/camera-americhe-bagno-2.webp",
      "/foto/camera-americhe-salottino-klimt.webp",
      "/foto/camera-americhe-divano.webp",
      "/foto/camera-americhe-salottino.webp",
      "/foto/camera-americhe-dettaglio.webp",
    ],
    gradient: "from-[#8C6A55] to-[#1a120d]",
    color: "#8C6A55",
    colorLight: "#B08D74",
    icon: "🗽",
    name: { it: "Americhe", en: "Americas", de: "Amerika", fr: "Amériques" },
    tagline: {
      it: "Street art, velluto e un tocco di New York",
      en: "Street art, velvet and a touch of New York",
      de: "Street Art, Samt und ein Hauch New York",
      fr: "Street art, velours et une touche de New York",
    },
    description: {
      it: "Una parete intera di street art dai colori accesi, letto matrimoniale in velluto azzurro con testiera-libreria illuminata e un angolo relax con due poltrone. Accanto, un salottino con divano letto sotto un grande murale del Bacio di Klimt e un bagno privato con vasca, doccia e TV.",
      en: "A full wall of vivid street art, a double bed in light-blue velvet with a lit headboard unit and a relax corner with two armchairs. Next door, a small lounge with a sofa bed beneath a large mural of Klimt's Kiss, and a private bathroom with bathtub, shower and TV.",
      de: "Eine ganze Wand voller farbenfroher Street Art, ein Doppelbett aus hellblauem Samt mit beleuchtetem Kopfteil-Regal und eine Ruheecke mit zwei Sesseln. Daneben ein kleiner Salon mit Schlafsofa unter einem großen Wandbild von Klimts Kuss sowie ein eigenes Bad mit Badewanne, Dusche und TV.",
      fr: "Un mur entier de street art aux couleurs vives, un lit double en velours bleu clair avec tête de lit-étagère éclairée et un coin détente avec deux fauteuils. À côté, un petit salon avec canapé-lit sous une grande fresque du Baiser de Klimt, et une salle de bain privée avec baignoire, douche et TV.",
    },
    amenities: {
      it: ["Letto matrimoniale", "Salottino con divano letto", "Bagno privato con vasca e doccia", "Smart TV", "Angolo relax con due poltrone", "Aria condizionata"],
      en: ["Double bed", "Small lounge with sofa bed", "Private bathroom with bathtub and shower", "Smart TV", "Relax corner with two armchairs", "Air conditioning"],
      de: ["Doppelbett", "Kleiner Salon mit Schlafsofa", "Eigenes Bad mit Badewanne und Dusche", "Smart-TV", "Ruheecke mit zwei Sesseln", "Klimaanlage"],
      fr: ["Lit double", "Petit salon avec canapé-lit", "Salle de bain privée avec baignoire et douche", "Smart TV", "Coin détente avec deux fauteuils", "Climatisation"],
    },
  },
  {
    slug: { it: "oceania", en: "oceania", de: "ozeanien", fr: "oceanie" },
    photo: "/foto/camera-oceania.webp",
    ogImage: "/og/camera-oceania.jpg",
    guests: "2",
    gallery: ["/foto/camera-oceania-dettaglio.webp"],
    gradient: "from-[#2E4A5C] to-[#0a1419]",
    color: "#2E4A5C",
    colorLight: "#6F93AB",
    icon: "🌊",
    name: { it: "Oceania", en: "Oceania", de: "Ozeanien", fr: "Océanie" },
    tagline: {
      it: "Comfort e luce per due",
      en: "Comfort and light for two",
      de: "Komfort und Licht für zwei",
      fr: "Confort et lumière pour deux",
    },
    description: {
      it: "Camera matrimoniale luminosa, con testiera in legno illuminata, scrivania e un bagno privato con doccia per due.",
      en: "A bright double room with a lit wooden headboard, a desk and a private bathroom with a shower for two.",
      de: "Ein helles Doppelzimmer mit beleuchtetem Kopfteil aus Holz, Schreibtisch und eigenem Bad mit Dusche für zwei.",
      fr: "Une chambre double lumineuse, avec tête de lit en bois éclairée, bureau et salle de bain privée avec douche pour deux.",
    },
    amenities: {
      it: ["Letto matrimoniale", "Bagno privato con doccia per due", "Scrivania", "TV"],
      en: ["Double bed", "Private bathroom with shower for two", "Desk", "TV"],
      de: ["Doppelbett", "Eigenes Bad mit Dusche für zwei", "Schreibtisch", "TV"],
      fr: ["Lit double", "Salle de bain privée avec douche pour deux", "Bureau", "TV"],
    },
  },
];

export function findRoom(lang: Lang, slug: string) {
  return rooms.find((r) => r.slug[lang] === slug) ?? null;
}
