"use client";

import type { Lang } from "@/lib/i18n/translations";
import { legalUi } from "@/lib/data/legalUi";
import { bannerText } from "@/lib/data/cookieBanner";
import { openCookieBanner, useConsent } from "@/lib/consent";

/** Nella cookie policy: stato attuale del consenso e pulsante per modificarlo. */
export default function ConsentControls({ lang }: { lang: Lang }) {
  const c = useConsent();
  const t = legalUi[lang];
  return (
    <div className="card-surface mt-6 flex flex-wrap items-center gap-5 rounded-2xl p-5">
      <p className="font-sans text-sm text-sabina-100/85">{c?.marketing ? t.consentOn : t.consentOff}</p>
      <button type="button" onClick={openCookieBanner} className="btn-primary">
        {bannerText[lang].settingsLink}
      </button>
    </div>
  );
}
