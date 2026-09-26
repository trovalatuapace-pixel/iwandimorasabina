/**
 * Identità visiva di Dimora Pangea.
 * Il logo è un anello diviso in 5 archi — uno per camera-continente — attorno alla Pangea.
 * Ordine degli archi in senso orario partendo dall'alto.
 */
export const BRAND_NAME = "Dimora Pangea";

export const ARC_COLORS = {
  /** Colori pieni, per fondi chiari */
  light: ["#A94F2B", "#C99A3E", "#4F5A3A", "#2E4A5C", "#8C6A55"],
  /** Colori schiariti, per i fondi scuri del sito */
  dark: ["#A94F2B", "#C99A3E", "#8A976A", "#6F93AB", "#B08D74"],
} as const;

/** Sagoma stilizzata della Pangea (viewBox 0 0 200 200) */
export const PANGEA_PATH =
  "M60,30 C90,15 130,20 150,40 C165,55 160,70 145,75 C130,80 120,72 110,80 C100,88 115,100 130,105 C150,112 165,125 160,145 C155,165 130,175 105,170 C80,165 70,180 55,172 C35,162 40,140 35,120 C30,100 22,85 30,65 C36,48 45,38 60,30 Z";
