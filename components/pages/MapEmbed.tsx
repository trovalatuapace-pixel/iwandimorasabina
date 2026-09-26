"use client";

import Link from "next/link";
import type { Lang } from "@/lib/i18n/translations";
import { href } from "@/lib/site";
import { legalUi } from "@/lib/data/legalUi";
import { useMapsConsent } from "@/lib/consent";

const MAPS_QUERY = "Montopoli di Sabina, Provincia di Rieti, Italia";

/**
 * Mappa Google caricata SOLO dopo il clic dell'utente (consenso ai cookie di terze parti,
 * Linee guida Garante privacy 10/06/2021). Prima del clic non parte nessuna richiesta a Google.
 */
export default function MapEmbed({ lang, title }: { lang: Lang; title: string }) {
  const [ok, setOk] = useMapsConsent();
  const t = legalUi[lang];
  const src =
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_SRC ||
    `https://maps.google.com/maps?q=${encodeURIComponent(MAPS_QUERY)}&z=11&output=embed`;

  return (
    <div className="overflow-hidden rounded-2xl border border-sabina-800">
      {ok ? (
        <iframe
          title={`${title} — Dimora Pangea`}
          src={src}
          className="h-[380px] w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <div
          className="flex h-[380px] w-full flex-col items-center justify-center gap-5 px-6 text-center"
          style={{ background: "radial-gradient(ellipse at 50% 30%, #3a2a1a 0%, #1c130c 60%, #140f0a 100%)" }}
        >
          <p className="font-serif text-2xl text-sabina-50">{title}</p>
          <p className="max-w-md font-sans text-sm text-sabina-100/75">{t.mapNotice}</p>
          <button type="button" onClick={() => setOk(true)} className="btn-primary">
            {t.mapButton}
          </button>
          <Link
            href={href(lang, "cookies")}
            className="font-sans text-xs text-sabina-300 underline decoration-sabina-600 underline-offset-4 hover:text-sabina-100"
          >
            {t.mapMore}
          </Link>
        </div>
      )}
    </div>
  );
}
