import { ARC_COLORS, PANGEA_PATH } from "@/lib/brand";

type Props = {
  /** Lato in px del marchio */
  size?: number;
  /** "dark" = per fondi scuri (Pangea chiara), "light" = per fondi chiari */
  tone?: "dark" | "light";
  className?: string;
};

/** Marchio Dimora Pangea: 5 archi colorati (le camere) attorno alla Pangea. */
export default function LogoMark({ size = 32, tone = "dark", className = "" }: Props) {
  const colors = ARC_COLORS[tone];
  const small = size < 40;
  const r = small ? 78 : 80;
  const stroke = small ? 20 : 14;
  const circ = 2 * Math.PI * r;
  const seg = circ / 5;
  const gap = small ? 10 : 8;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <g fill="none" strokeWidth={stroke}>
        {colors.map((c, i) => (
          <circle
            key={c + i}
            cx="100"
            cy="100"
            r={r}
            stroke={c}
            strokeDasharray={`${seg - gap} ${circ - seg + gap}`}
            transform={`rotate(${-90 + i * 72} 100 100)`}
          />
        ))}
      </g>
      <g transform={small ? "translate(48 48) scale(0.52)" : "translate(55 55) scale(0.45)"}>
        <path d={PANGEA_PATH} fill={tone === "dark" ? "#F4EFE6" : "#2A2621"} />
      </g>
    </svg>
  );
}

/** Piccolo arco nel colore di una camera, da usare accanto al nome. */
export function RoomArc({ color, size = 14, className = "" }: { color: string; size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" aria-hidden="true" focusable="false" className={className}>
      <path d="M3 13 A8 8 0 0 1 17 13" fill="none" stroke={color} strokeWidth="3.2" strokeLinecap="round" />
    </svg>
  );
}
