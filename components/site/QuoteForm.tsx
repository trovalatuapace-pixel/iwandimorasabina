"use client";

import { useState, type FormEvent } from "react";
import type { Lang } from "@/lib/i18n/translations";
import { rooms } from "@/lib/data/rooms";
import { ui } from "@/lib/data/extras";

type RoomReq = { room: string; adults: string; children: string };

const field =
  "w-full rounded-xl border border-sabina-800 bg-sabina-950/60 px-4 py-3 font-sans text-sm text-sabina-50 placeholder:text-sabina-100/40 focus:border-sabina-400 focus:outline-none";
const label = "mb-1.5 block font-sans text-xs uppercase tracking-[0.15em] text-sabina-300";

function today(offset = 0) {
  const d = new Date();
  d.setDate(d.getDate() + offset);
  return d.toISOString().slice(0, 10);
}

/**
 * Modulo "Chiedi un preventivo". Nessun backend: compone il messaggio e lo apre
 * su WhatsApp (se configurato) oppure nel programma email dell'ospite.
 */
export default function QuoteForm({ lang, whatsapp, email }: { lang: Lang; whatsapp: string; email: string }) {
  const t = ui[lang].quote;
  const [reqs, setReqs] = useState<RoomReq[]>([{ room: "", adults: "2", children: "0" }]);

  const update = (i: number, patch: Partial<RoomReq>) =>
    setReqs((r) => r.map((x, n) => (n === i ? { ...x, ...patch } : x)));

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const g = (k: string) => String(f.get(k) || "").trim();
    const lines = [
      t.intro,
      "",
      `${t.arrival}: ${g("arrival")}`,
      `${t.departure}: ${g("departure")}`,
      ...reqs.map(
        (r, i) =>
          `${t.roomLabel(i + 1)}: ${r.room ? rooms.find((x) => x.slug.it === r.room)?.name[lang] : t.anyRoom} — ${t.adults}: ${r.adults}, ${t.children}: ${r.children}`
      ),
      "",
      `${t.firstName} ${t.lastName}: ${g("firstName")} ${g("lastName")}`,
      `${t.phone}: ${g("phone")}`,
      `${t.email}: ${g("email")}`,
    ];
    if (g("message")) lines.push("", g("message"));
    const text = lines.join("\n");
    const url = whatsapp
      ? `https://wa.me/${whatsapp}?text=${encodeURIComponent(text)}`
      : `mailto:${email}?subject=${encodeURIComponent(t.subject)}&body=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener");
  }

  if (!whatsapp && !email) return null;

  return (
    <form onSubmit={onSubmit} className="card-surface grid gap-5 rounded-3xl p-6 sm:grid-cols-2 sm:p-10">
      <div>
        <label className={label} htmlFor="q-arrival">{t.arrival}</label>
        <input id="q-arrival" name="arrival" type="date" required min={today()} defaultValue={today(1)} className={field} />
      </div>
      <div>
        <label className={label} htmlFor="q-departure">{t.departure}</label>
        <input id="q-departure" name="departure" type="date" required min={today(1)} defaultValue={today(3)} className={field} />
      </div>
      <div>
        <label className={label} htmlFor="q-first">{t.firstName}</label>
        <input id="q-first" name="firstName" required autoComplete="given-name" className={field} />
      </div>
      <div>
        <label className={label} htmlFor="q-last">{t.lastName}</label>
        <input id="q-last" name="lastName" required autoComplete="family-name" className={field} />
      </div>
      <div>
        <label className={label} htmlFor="q-phone">{t.phone}</label>
        <input id="q-phone" name="phone" type="tel" required autoComplete="tel" className={field} />
      </div>
      <div>
        <label className={label} htmlFor="q-email">{t.email}</label>
        <input id="q-email" name="email" type="email" required autoComplete="email" className={field} />
      </div>

      {reqs.map((r, i) => (
        <fieldset key={i} className="grid gap-4 rounded-2xl border border-sabina-800 p-4 sm:col-span-2 sm:grid-cols-[2fr_1fr_1fr]">
          <legend className="flex items-center gap-4 px-2 font-serif text-lg text-sabina-50">
            {t.roomLabel(i + 1)}
            {i > 0 && (
              <button
                type="button"
                onClick={() => setReqs((x) => x.filter((_, n) => n !== i))}
                className="font-sans text-xs uppercase tracking-[0.15em] text-sabina-300 underline underline-offset-4"
              >
                {t.removeRoom}
              </button>
            )}
          </legend>
          <div>
            <label className={label} htmlFor={`q-room-${i}`}>{t.roomType}</label>
            <select id={`q-room-${i}`} value={r.room} onChange={(e) => update(i, { room: e.target.value })} className={field}>
              <option value="">{t.anyRoom}</option>
              {rooms.map((room) => (
                <option key={room.slug.it} value={room.slug.it}>{room.name[lang]}</option>
              ))}
            </select>
          </div>
          <div>
            <label className={label} htmlFor={`q-adults-${i}`}>{t.adults}</label>
            <select id={`q-adults-${i}`} value={r.adults} onChange={(e) => update(i, { adults: e.target.value })} className={field}>
              {["1", "2", "3", "4"].map((n) => <option key={n} value={n}>{n}</option>)}
            </select>
          </div>
          <div>
            <label className={label} htmlFor={`q-children-${i}`}>{t.children}</label>
            <select id={`q-children-${i}`} value={r.children} onChange={(e) => update(i, { children: e.target.value })} className={field}>
              <option value="0">{t.none}</option>
              {["1", "2", "3"].map((n) => <option key={n} value={n}>{n}</option>)}
            </select>
          </div>
        </fieldset>
      ))}
      {reqs.length < rooms.length && (
        <button
          type="button"
          onClick={() => setReqs((x) => [...x, { room: "", adults: "2", children: "0" }])}
          className="flex w-fit items-center gap-2 font-sans text-sm uppercase tracking-[0.15em] text-sabina-300 hover:text-sabina-100 sm:col-span-2"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sabina-400 text-sabina-950">+</span>
          {t.addRoom}
        </button>
      )}

      <div className="sm:col-span-2">
        <label className={label} htmlFor="q-message">{t.message}</label>
        <textarea id="q-message" name="message" rows={4} className={field} />
      </div>
      <label className="flex gap-3 font-sans text-sm text-sabina-100/80 sm:col-span-2">
        <input type="checkbox" required className="mt-0.5 h-5 w-5 shrink-0 accent-[#c0904f]" />
        {t.consent}
      </label>
      <div className="flex flex-wrap items-center gap-5 sm:col-span-2">
        <button type="submit" className="btn-primary">
          {whatsapp ? t.sendWhatsapp : t.sendEmail}
        </button>
        <span className="font-sans text-xs text-sabina-100/60">{t.note}</span>
      </div>
    </form>
  );
}
