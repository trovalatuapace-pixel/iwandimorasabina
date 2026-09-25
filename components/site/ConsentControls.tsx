"use client";

import type { Lang } from "@/lib/i18n/translations";
import { legalUi } from "@/lib/data/legalUi";
import { useMapsConsent } from "@/lib/consent";

/** Pulsante nella cookie policy per dare o revocare il consenso alla mappa Google. */
export default function ConsentControls({ lang }: { lang: Lang }) {
  const [ok, setOk] = useMapsConsent();
  const t = legalUi[lang];
  return (
    <div className="card-surface mt-6 flex flex-wrap items-center gap-5 rounded-2xl p-5">
      <p className="font-sans text-sm text-sabina-100/85">{ok ? t.consentOn : t.consentOff}</p>
      <button type="button" onClick={() => setOk(!ok)} className="btn-primary">
        {ok ? t.revoke : t.grant}
      </button>
    </div>
  );
}
