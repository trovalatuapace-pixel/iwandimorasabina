"use client";

import { useEffect, useState } from "react";

/** Chiave nel local storage con la scelta dell'utente sulla mappa Google. */
export const MAPS_CONSENT_KEY = "orbis-maps-consent";
const EVENT = "orbis-consent-change";

function read(): boolean {
  try {
    return window.localStorage.getItem(MAPS_CONSENT_KEY) === "yes";
  } catch {
    return false;
  }
}

export function setMapsConsent(value: boolean) {
  try {
    if (value) window.localStorage.setItem(MAPS_CONSENT_KEY, "yes");
    else window.localStorage.removeItem(MAPS_CONSENT_KEY);
  } catch {
    /* storage bloccato: la scelta vale solo per questa pagina */
  }
  window.dispatchEvent(new CustomEvent(EVENT, { detail: value }));
}

/** Stato del consenso alla mappa, sincronizzato tra componenti e schede. */
export function useMapsConsent(): [boolean, (v: boolean) => void] {
  const [ok, setOk] = useState(false);
  useEffect(() => {
    setOk(read());
    const onChange = (e: Event) => setOk(Boolean((e as CustomEvent).detail));
    const onStorage = (e: StorageEvent) => e.key === MAPS_CONSENT_KEY && setOk(read());
    window.addEventListener(EVENT, onChange);
    window.addEventListener("storage", onStorage);
    return () => {
      window.removeEventListener(EVENT, onChange);
      window.removeEventListener("storage", onStorage);
    };
  }, []);
  return [ok, setMapsConsent];
}
