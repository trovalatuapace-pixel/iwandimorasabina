"use client";

import { openCookieBanner } from "@/lib/consent";

/** Link "Preferenze cookie": riapre il banner per cambiare o revocare il consenso. */
export default function CookieSettingsLink({ label, className }: { label: string; className?: string }) {
  return (
    <button type="button" onClick={openCookieBanner} className={className}>
      {label}
    </button>
  );
}
