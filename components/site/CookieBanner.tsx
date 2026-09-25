"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Lang } from "@/lib/i18n/translations";
import { href } from "@/lib/site";
import { bannerText } from "@/lib/data/cookieBanner";
import { onOpenCookieBanner, readConsent, saveConsent, useConsent } from "@/lib/consent";

type Choice = { statistics: boolean; marketing: boolean };

/**
 * Banner cookie con tre schede (Consenso · Dettagli · Informazioni sui cookie) e tre pulsanti
 * di pari evidenza: Accetta tutti · Personalizza · Usa solo i necessari.
 * Compare alla prima visita e dopo 6 mesi; si riapre dal link "Preferenze cookie".
 */
export default function CookieBanner({ lang }: { lang: Lang }) {
  const t = bannerText[lang];
  const consent = useConsent();
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState(0);
  const [choice, setChoice] = useState<Choice>({ statistics: false, marketing: false });

  useEffect(() => {
    if (consent === null) setOpen(true);
  }, [consent]);

  useEffect(
    () =>
      onOpenCookieBanner(() => {
        const c = readConsent();
        setChoice({ statistics: c?.statistics ?? false, marketing: c?.marketing ?? false });
        setTab(1);
        setOpen(true);
      }),
    []
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && decide({ statistics: false, marketing: false });
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  function decide(c: Choice) {
    saveConsent(c);
    setOpen(false);
  }

  if (!open) return null;

  const btn =
    "flex min-h-[3.5rem] flex-1 items-center justify-center rounded-md border-2 border-sabina-300 px-3 py-2 text-center font-sans text-[15px] font-semibold leading-tight transition";

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center bg-black/55 p-3 sm:items-center sm:p-6" role="presentation">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-title"
        className="relative flex max-h-[88vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-white text-neutral-900 shadow-2xl"
      >
        <button
          type="button"
          onClick={() => decide({ statistics: false, marketing: false })}
          aria-label={t.close}
          title={t.close}
          className="absolute right-0 top-0 z-10 flex h-[57px] w-11 items-center justify-center bg-white text-2xl text-neutral-500 shadow-[-8px_0_8px_white] hover:text-neutral-900 sm:h-[61px]"
        >
          ×
        </button>

        <div role="tablist" className="flex shrink-0 overflow-x-auto border-b border-neutral-200 pr-11 font-sans">
          {t.tabs.map((label, i) => (
            <button
              key={label}
              role="tab"
              type="button"
              aria-selected={tab === i}
              onClick={() => setTab(i)}
              className={`whitespace-nowrap border-b-2 px-4 py-4 text-[15px] sm:px-5 font-semibold transition sm:text-lg ${
                tab === i ? "border-sabina-300 text-sabina-300" : "border-transparent text-neutral-900 hover:text-sabina-500"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto px-6 py-5 font-sans text-[15px] leading-relaxed sm:px-8">
          {tab === 0 && (
            <>
              <h2 id="cookie-title" className="mb-3 text-lg font-bold">{t.title}</h2>
              <p>{t.intro}</p>
            </>
          )}

          {tab === 1 && (
            <div className="space-y-5">
              <h2 id="cookie-title" className="sr-only">{t.title}</h2>
              {t.categories.map((cat) => {
                const fixed = cat.key === "necessary";
                const on = fixed || choice[cat.key as keyof Choice];
                return (
                  <section key={cat.key} className="rounded-xl border border-neutral-200 p-4">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-base font-bold">{cat.title}</h3>
                      {fixed ? (
                        <span className="text-xs font-semibold uppercase tracking-wide text-sabina-500">{t.alwaysOn}</span>
                      ) : (
                        <button
                          type="button"
                          role="switch"
                          aria-checked={on}
                          aria-label={cat.title}
                          onClick={() => setChoice((c) => ({ ...c, [cat.key]: !on }))}
                          className={`relative h-7 w-12 shrink-0 rounded-full transition ${on ? "bg-sabina-400" : "bg-neutral-300"}`}
                        >
                          <span className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition-all ${on ? "left-6" : "left-1"}`} />
                        </button>
                      )}
                    </div>
                    <p className="mt-2 text-sm text-neutral-700">{cat.text}</p>
                    {cat.cookies.length > 0 ? (
                      <div className="mt-3 overflow-x-auto">
                        <table className="w-full min-w-[420px] text-left text-xs">
                          <thead className="text-neutral-500">
                            <tr>{t.cookieHead.map((h) => <th key={h} className="pb-1 pr-3 font-semibold">{h}</th>)}</tr>
                          </thead>
                          <tbody>
                            {cat.cookies.map((r) => (
                              <tr key={r.name} className="border-t border-neutral-100 align-top">
                                <td className="py-1.5 pr-3 font-mono">{r.name}</td>
                                <td className="py-1.5 pr-3">{r.provider}</td>
                                <td className="py-1.5 pr-3">{r.purpose}</td>
                                <td className="py-1.5">{r.duration}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      cat.empty && <p className="mt-2 text-xs italic text-neutral-500">{cat.empty}</p>
                    )}
                  </section>
                );
              })}
            </div>
          )}

          {tab === 2 && (
            <>
              <h2 id="cookie-title" className="mb-3 text-lg font-bold">{t.aboutTitle}</h2>
              {t.about.map((p, i) => <p key={i} className="mb-3">{p}</p>)}
              <p className="flex flex-wrap gap-4 text-sm font-semibold">
                <Link href={href(lang, "cookies")} className="text-sabina-500 underline underline-offset-4">{t.policyLink}</Link>
                <Link href={href(lang, "privacy")} className="text-sabina-500 underline underline-offset-4">{t.privacyLink}</Link>
              </p>
            </>
          )}
        </div>

        <div className="flex shrink-0 gap-3 border-t border-neutral-200 p-4 sm:p-5">
          <button type="button" onClick={() => decide({ statistics: true, marketing: true })} className={`${btn} bg-sabina-200 hover:bg-sabina-300`}>
            {t.acceptAll}
          </button>
          {tab === 1 ? (
            <button type="button" onClick={() => decide(choice)} className={`${btn} bg-white hover:bg-sabina-50`}>
              {t.saveSelection}
            </button>
          ) : (
            <button type="button" onClick={() => setTab(1)} className={`${btn} bg-white hover:bg-sabina-50`}>
              {t.customize}&nbsp;›
            </button>
          )}
          <button type="button" onClick={() => decide({ statistics: false, marketing: false })} className={`${btn} bg-white hover:bg-sabina-50`}>
            {t.necessaryOnly}
          </button>
        </div>
      </div>
    </div>
  );
}
