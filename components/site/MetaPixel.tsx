"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useConsent } from "@/lib/consent";

/**
 * Meta Pixel di Dimora Pangea (dataset «Pixel Dimora Pangea», portfolio business Meta «Dimora Pangea»).
 *
 * Si carica SOLO se il visitatore ha dato il consenso alla categoria «Marketing e contenuti esterni»
 * nel banner cookie (lib/consent.ts). Se il consenso viene revocato, il tracciamento si ferma
 * e il cookie _fbp viene cancellato.
 *
 * Eventi inviati (solo dopo il consenso):
 * - PageView: a ogni pagina (anche nella navigazione interna)
 * - Contact: clic su WhatsApp, telefono o email
 * - InitiateCheckout: clic verso Booking.com o Airbnb
 * - Lead: invio della richiesta di preventivo (vedi trackPixel in QuoteForm)
 */
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || "1089532997175807";

type Fbq = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  queue?: unknown[][];
  loaded?: boolean;
  version?: string;
  push?: Fbq;
};

declare global {
  interface Window {
    fbq?: Fbq;
    _fbq?: Fbq;
  }
}

/** Invia un evento al Pixel, se è stato caricato (cioè solo con il consenso). */
export function trackPixel(event: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined" || !window.fbq) return;
  if (params) window.fbq("track", event, params);
  else window.fbq("track", event);
}

function loadPixel() {
  if (window.fbq) return;
  const fbq: Fbq = function (...args: unknown[]) {
    if (fbq.callMethod) fbq.callMethod(...args);
    else (fbq.queue as unknown[][]).push(args);
  } as Fbq;
  fbq.push = fbq;
  fbq.loaded = true;
  fbq.version = "2.0";
  fbq.queue = [];
  window.fbq = fbq;
  if (!window._fbq) window._fbq = fbq;
  const s = document.createElement("script");
  s.async = true;
  s.src = "https://connect.facebook.net/en_US/fbevents.js";
  document.head.appendChild(s);
  fbq("init", META_PIXEL_ID);
}

function clearPixelCookies() {
  const host = window.location.hostname;
  const domains = ["", `; domain=${host}`, `; domain=.${host.replace(/^www\./, "")}`];
  for (const d of domains) {
    document.cookie = `_fbp=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${d}`;
    document.cookie = `_fbc=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${d}`;
  }
}

export default function MetaPixel() {
  const consent = useConsent();
  const pathname = usePathname();
  const allowed = Boolean(consent?.marketing);
  const started = useRef(false);
  const lastPath = useRef<string | null>(null);

  // Carica il Pixel solo con il consenso; lo ferma se il consenso viene tolto.
  useEffect(() => {
    if (consent === undefined) return; // consenso non ancora letto dal browser
    if (allowed) {
      loadPixel();
      window.fbq?.("consent", "grant");
      started.current = true;
    } else if (started.current) {
      window.fbq?.("consent", "revoke");
      clearPixelCookies();
      started.current = false;
      lastPath.current = null;
    }
  }, [allowed, consent]);

  // PageView alla prima pagina e a ogni cambio di pagina (navigazione interna di Next).
  useEffect(() => {
    if (!allowed || !started.current) return;
    if (lastPath.current === pathname) return;
    lastPath.current = pathname;
    trackPixel("PageView");
  }, [allowed, pathname]);

  // Clic sui pulsanti di contatto e prenotazione.
  useEffect(() => {
    if (!allowed) return;
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.("a");
      const link = a?.getAttribute("href");
      if (!link) return;
      if (/^(https?:)?\/\/(wa\.me|api\.whatsapp\.com)\//.test(link) || link.startsWith("tel:") || link.startsWith("mailto:")) {
        trackPixel("Contact");
      } else if (/booking\.com/i.test(link)) {
        trackPixel("InitiateCheckout", { content_name: "Booking.com" });
      } else if (/airbnb\./i.test(link)) {
        trackPixel("InitiateCheckout", { content_name: "Airbnb" });
      }
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [allowed]);

  return null;
}
