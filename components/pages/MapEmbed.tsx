const MAPS_QUERY = "Montopoli in Sabina, Provincia di Rieti, Italia";

export default function MapEmbed({ title }: { title: string }) {
  const src =
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_SRC ||
    `https://maps.google.com/maps?q=${encodeURIComponent(MAPS_QUERY)}&z=11&output=embed`;
  return (
    <div className="overflow-hidden rounded-2xl border border-sabina-800">
      <iframe
        title={`${title} — Orbis in Sabina`}
        src={src}
        className="h-[380px] w-full"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
