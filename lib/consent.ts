"use client";

import { useEffect, useState } from "react";

/**
 * Consenso cookie salvato nel local storage del browser.
 * - necessary: sempre attivi
 * - statistics: statistiche (oggi non usate, pronte per il futuro)
 * - marketing: marketing e contenuti esterni (oggi: mappa Google Maps)
 * La scelta dura 6 mesi, poi il banner viene riproposto (Linee guida Garante 10/06/2021).
 */
export const CONSENT_KEY = "orbis-cookie-consent";
const VERSION = 1;
const MAX_AGE_MS = 1000 * 60 * 60 * 24 * 180;
const CHANGE = "orbis-consent-change";
const OPEN = "orbis-open-cookie-banner";

export type Consent = { statistics: boolean; marketing: boolean; ts: number; v: number };

export function readConsent(): Consent | null {
  try {
    const raw = window.localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const c = JSON.parse(raw) as Consent;
    if (c.v !== VERSION || Date.now() - c.ts > MAX_AGE_MS) return null;
    return c;
  } catch {
    return null;
  }
}

export function saveConsent(choice: { statistics: boolean; marketing: boolean }) {
  const c: Consent = { ...choice, ts: Date.now(), v: VERSION };
  try {
    window.localStorage.setItem(CONSENT_KEY, JSON.stringify(c));
  } catch {
    /* storage bloccato: la scelta vale solo per questa visita */
  }
  window.dispatchEvent(new CustomEvent(CHANGE, { detail: c }));
}

/** Riapre il banner (link "Preferenze cookie" nel footer e nella cookie policy). */
export function openCookieBanner() {
  window.dispatchEvent(new Event(OPEN));
}

/** Stato del consenso sincronizzato tra componenti e schede. `null` = nessuna scelta ancora. */
export function useConsent(): Consent | null | undefined {
  const [c, setC] = useState<Consent | null | undefined>(undefined);
  useEffect(() => {
    setC(readConsent());
    const onChange = (e: Event) => setC((e as CustomEvent<Consent>).detail);
    const onStorage = (e: StorageEvent) => e.key === CONSENT_KEY && setC(readConsent());
    window.addEventListener(CHANGE, onChange);
    window.addEventListener("storage", onStorage);
    return () => {
      window.removeEventListener(CHANGE, onChange);
      window.removeEventListener("storage", onStorage);
    };
  }, []);
  return c;
}

export function onOpenCookieBanner(fn: () => void) {
  window.addEventListener(OPEN, fn);
  return () => window.removeEventListener(OPEN, fn);
}

/** Consenso alla mappa Google = categoria marketing / contenuti esterni. */
export function useMapsConsent(): [boolean, (v: boolean) => void] {
  const c = useConsent();
  return [
    Boolean(c?.marketing),
    (v: boolean) => saveConsent({ statistics: c?.statistics ?? false, marketing: v }),
  ];
}
