"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import type { Lang } from "@/lib/i18n/translations";
import type { BookingUnit } from "@/lib/units";
import { stayUi, wholeHouse } from "@/lib/data/stay";

type BusyRange = { start: string; end: string; source: "booking" | "airbnb" };
type ApiResponse = {
  configured: boolean;
  busyRanges: BusyRange[];
  errors: string[];
};

const WEEKDAYS: Record<Lang, string[]> = {
  it: ["L", "M", "M", "G", "V", "S", "D"],
  en: ["M", "T", "W", "T", "F", "S", "S"],
  de: ["M", "D", "M", "D", "F", "S", "S"],
  fr: ["L", "M", "M", "J", "V", "S", "D"],
};

const MAX_MONTH_OFFSET = 16;

/** Testi del modulo di prenotazione nelle 4 lingue. */
const TXT: Record<
  Lang,
  {
    pickCheckIn: string;
    pickCheckOut: string;
    arrival: string;
    departure: string;
    nights: (n: number) => string;
    guests: string;
    clear: string;
    whatsapp: string;
    directNote: string;
    blocked: string;
    prev: string;
    next: string;
    /** Frase che nomina ciò che si vuole prenotare (camera o casa intera). */
    target: (name: string, isHouse: boolean) => string;
    waMessage: (target: string, ci?: string, co?: string, n?: number, g?: number) => string;
  }
> = {
  it: {
    pickCheckIn: "Tocca il giorno di arrivo",
    pickCheckOut: "Ora tocca il giorno di partenza",
    arrival: "Arrivo",
    departure: "Partenza",
    nights: (n) => (n === 1 ? "1 notte" : `${n} notti`),
    guests: "Ospiti",
    clear: "Cancella date",
    whatsapp: "Prenota su WhatsApp",
    directNote: "Prenotando direttamente con il proprietario non paghi commissioni.",
    blocked: "In quel periodo c'è già una prenotazione: scegli altre date.",
    prev: "Mesi precedenti",
    next: "Mesi successivi",
    target: (name, isHouse) => (isHouse ? "l'intera Dimora Pangea" : `la camera ${name} di Dimora Pangea`),
    waMessage: (target, ci, co, n, g) =>
      ci && co
        ? `Buongiorno, vorrei prenotare ${target} dal ${ci} al ${co} (${n === 1 ? "1 notte" : `${n} notti`}) per ${g} ${g === 1 ? "ospite" : "ospiti"}. È disponibile?`
        : `Buongiorno, vorrei informazioni sulla disponibilità di ${target}.`,
  },
  en: {
    pickCheckIn: "Tap your arrival date",
    pickCheckOut: "Now tap your departure date",
    arrival: "Arrival",
    departure: "Departure",
    nights: (n) => (n === 1 ? "1 night" : `${n} nights`),
    guests: "Guests",
    clear: "Clear dates",
    whatsapp: "Book on WhatsApp",
    directNote: "Book directly with the owner and pay no booking fees.",
    blocked: "Those dates include an existing booking: please choose other dates.",
    prev: "Previous months",
    next: "Next months",
    target: (name, isHouse) => (isHouse ? "the whole of Dimora Pangea" : `the ${name} room at Dimora Pangea`),
    waMessage: (target, ci, co, n, g) =>
      ci && co
        ? `Hello, I would like to book ${target} from ${ci} to ${co} (${n === 1 ? "1 night" : `${n} nights`}) for ${g} ${g === 1 ? "guest" : "guests"}. Is it available?`
        : `Hello, I would like some information about availability of ${target}.`,
  },
  de: {
    pickCheckIn: "Tippen Sie auf Ihr Anreisedatum",
    pickCheckOut: "Tippen Sie jetzt auf Ihr Abreisedatum",
    arrival: "Anreise",
    departure: "Abreise",
    nights: (n) => (n === 1 ? "1 Nacht" : `${n} Nächte`),
    guests: "Gäste",
    clear: "Daten löschen",
    whatsapp: "Per WhatsApp buchen",
    directNote: "Direkt beim Eigentümer buchen – ohne Buchungsgebühren.",
    blocked: "In diesem Zeitraum gibt es bereits eine Buchung: bitte wählen Sie andere Daten.",
    prev: "Vorherige Monate",
    next: "Nächste Monate",
    target: (name, isHouse) => (isHouse ? "das ganze Haus Dimora Pangea" : `das Zimmer ${name} im Dimora Pangea`),
    waMessage: (target, ci, co, n, g) =>
      ci && co
        ? `Guten Tag, ich möchte ${target} vom ${ci} bis ${co} (${n === 1 ? "1 Nacht" : `${n} Nächte`}) für ${g} ${g === 1 ? "Gast" : "Gäste"} buchen. Ist es frei?`
        : `Guten Tag, ich hätte gerne Informationen zur Verfügbarkeit: ${target}.`,
  },
  fr: {
    pickCheckIn: "Touchez votre date d'arrivée",
    pickCheckOut: "Touchez maintenant votre date de départ",
    arrival: "Arrivée",
    departure: "Départ",
    nights: (n) => (n === 1 ? "1 nuit" : `${n} nuits`),
    guests: "Voyageurs",
    clear: "Effacer les dates",
    whatsapp: "Réserver sur WhatsApp",
    directNote: "En réservant directement auprès du propriétaire, vous ne payez aucun frais.",
    blocked: "Ces dates comprennent une réservation existante : choisissez d'autres dates.",
    prev: "Mois précédents",
    next: "Mois suivants",
    target: (name, isHouse) => (isHouse ? "toute la maison Dimora Pangea" : `la chambre ${name} de Dimora Pangea`),
    waMessage: (target, ci, co, n, g) =>
      ci && co
        ? `Bonjour, je souhaite réserver ${target} du ${ci} au ${co} (${n === 1 ? "1 nuit" : `${n} nuits`}) pour ${g} ${g === 1 ? "personne" : "personnes"}. Est-ce disponible ?`
        : `Bonjour, je souhaiterais des informations sur les disponibilités : ${target}.`,
  },
};

const BOOKING_LANG: Record<Lang, string> = { it: "it", en: "en-gb", de: "de", fr: "fr" };

function toDateOnly(d: Date) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

/** YYYY-MM-DD in ora locale (niente slittamenti di fuso orario). */
function ymd(d: Date) {
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${m}-${day}`;
}

function addDays(d: Date, n: number) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);
}

function nightsBetween(a: Date, b: Date) {
  return Math.round((toDateOnly(b).getTime() - toDateOnly(a).getTime()) / 86400000);
}

function isBusy(day: Date, ranges: BusyRange[]) {
  const t = day.getTime();
  return ranges.some((r) => {
    const start = new Date(r.start).getTime();
    const end = new Date(r.end).getTime();
    return t >= start && t < end;
  });
}

/** Tutte le notti tra arrivo e partenza (esclusa) devono essere libere. */
function rangeFree(checkIn: Date, checkOut: Date, ranges: BusyRange[]) {
  for (let d = checkIn; d < checkOut; d = addDays(d, 1)) {
    if (isBusy(d, ranges)) return false;
  }
  return true;
}

function buildMonthGrid(year: number, month: number) {
  const first = new Date(year, month, 1);
  const startOffset = (first.getDay() + 6) % 7; // lunedì = 0
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: (Date | null)[] = Array(startOffset).fill(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(year, month, d));
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}

function sameDay(a: Date | null, b: Date) {
  return Boolean(a && a.getTime() === b.getTime());
}

function MonthGrid({
  year,
  month,
  busyRanges,
  weekdays,
  monthLabel,
  checkIn,
  checkOut,
  onPick,
}: {
  year: number;
  month: number;
  busyRanges: BusyRange[];
  weekdays: string[];
  monthLabel: string;
  checkIn: Date | null;
  checkOut: Date | null;
  onPick: (day: Date) => void;
}) {
  const cells = useMemo(() => buildMonthGrid(year, month), [year, month]);
  const today = toDateOnly(new Date());

  return (
    <div className="card-surface rounded-2xl p-5 transition-colors duration-300 hover:border-sabina-400/40">
      <p className="mb-4 text-center font-serif text-lg capitalize text-sabina-50">{monthLabel}</p>
      <div className="grid grid-cols-7 gap-1 text-center">
        {weekdays.map((w, i) => (
          <div key={i} className="pb-2 font-sans text-xs text-sabina-300/70">
            {w}
          </div>
        ))}
        {cells.map((day, i) => {
          if (!day) return <div key={i} />;
          const busy = isBusy(day, busyRanges);
          const isPast = day < today;
          const isEdge = sameDay(checkIn, day) || sameDay(checkOut, day);
          const inRange = Boolean(checkIn && checkOut && day > checkIn && day < checkOut);

          let cls = "bg-sabina-400/10 text-sabina-50 hover:bg-sabina-400/30";
          if (isPast) cls = "text-sabina-300/30 cursor-default";
          else if (isEdge) cls = "bg-sabina-400 text-sabina-950 font-semibold";
          else if (inRange) cls = "bg-sabina-400/35 text-sabina-50";
          else if (busy) cls = "bg-sabina-700/70 text-sabina-100/60 line-through";

          return (
            <button
              type="button"
              key={i}
              disabled={isPast}
              onClick={() => onPick(day)}
              aria-pressed={isEdge}
              aria-label={day.toDateString()}
              className={`flex h-9 items-center justify-center rounded-full font-sans text-xs transition-colors duration-200 ${cls}`}
            >
              {day.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function AvailabilityCalendar({
  units,
  whatsapp = "",
  initialUnit,
}: {
  units: BookingUnit[];
  whatsapp?: string;
  initialUnit?: string;
}) {
  const { t, lang, locale } = useLanguage();
  const txt = TXT[lang];
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loadError, setLoadError] = useState(false);
  const [offset, setOffset] = useState(0);
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [unitId, setUnitId] = useState(
    units.some((u) => u.id === initialUnit) ? (initialUnit as string) : units[0].id
  );
  const unit = units.find((u) => u.id === unitId) ?? units[0];
  const [guests, setGuests] = useState(2);
  const [warning, setWarning] = useState(false);

  // Camera scelta da un link (es. dalla pagina di una camera): ?camera=asia
  useEffect(() => {
    const wanted = new URLSearchParams(window.location.search).get("camera");
    if (wanted && units.some((u) => u.id === wanted)) setUnitId(wanted);
  }, [units]);

  // Ogni camera ha il suo calendario (e la casa intera il suo): si ricarica a ogni cambio.
  useEffect(() => {
    let cancelled = false;
    setData(null);
    setLoadError(false);
    fetch(`/api/availability?unit=${encodeURIComponent(unitId)}`)
      .then((res) => res.json())
      .then((json: ApiResponse) => {
        if (!cancelled) setData(json);
      })
      .catch(() => {
        if (!cancelled) setLoadError(true);
      });
    return () => {
      cancelled = true;
    };
  }, [unitId]);

  function chooseUnit(id: string) {
    const next = units.find((u) => u.id === id);
    if (!next) return;
    setUnitId(id);
    setCheckIn(null);
    setCheckOut(null);
    setWarning(false);
    setGuests((g) => Math.min(Math.max(g, next.minGuests), next.maxGuests));
  }

  const busyRanges = data?.busyRanges ?? [];

  function pick(day: Date) {
    setWarning(false);
    const busy = isBusy(day, busyRanges);
    // Nuova selezione: serve un giorno libero come arrivo.
    if (!checkIn || checkOut) {
      if (busy) return setWarning(true);
      setCheckIn(day);
      setCheckOut(null);
      return;
    }
    // Sto scegliendo la partenza.
    if (day <= checkIn) {
      if (busy) return setWarning(true);
      setCheckIn(day);
      return;
    }
    if (rangeFree(checkIn, day, busyRanges)) {
      setCheckOut(day);
    } else if (!busy) {
      setCheckIn(day);
      setWarning(true);
    } else {
      setWarning(true);
    }
  }

  function clear() {
    setCheckIn(null);
    setCheckOut(null);
    setWarning(false);
  }

  const now = new Date();
  const months = [0, 1].map((i) => {
    const d = new Date(now.getFullYear(), now.getMonth() + offset + i, 1);
    return {
      year: d.getFullYear(),
      month: d.getMonth(),
      label: d.toLocaleDateString(locale, { month: "long", year: "numeric" }),
    };
  });

  const hasDates = Boolean(checkIn && checkOut);
  const nights = checkIn && checkOut ? nightsBetween(checkIn, checkOut) : 0;
  const fmt = (d: Date) => d.toLocaleDateString(locale, { day: "numeric", month: "long", year: "numeric" });

  // Link con date e ospiti già inseriti.
  const bookingUrl = unit.bookingUrl;
  const airbnbUrl = unit.airbnbUrl;
  let bookingHref = bookingUrl;
  if (bookingUrl) {
    try {
      const u = new URL(bookingUrl);
      if (checkIn && checkOut) {
        u.searchParams.set("checkin", ymd(checkIn));
        u.searchParams.set("checkout", ymd(checkOut));
      }
      u.searchParams.set("group_adults", String(guests));
      u.searchParams.set("group_children", "0");
      u.searchParams.set("no_rooms", "1");
      u.searchParams.set("lang", BOOKING_LANG[lang]);
      bookingHref = u.toString();
    } catch {}
  }

  let airbnbHref = airbnbUrl;
  if (airbnbUrl) {
    try {
      const u = new URL(airbnbUrl);
      if (checkIn && checkOut) {
        u.searchParams.set("check_in", ymd(checkIn));
        u.searchParams.set("check_out", ymd(checkOut));
      }
      u.searchParams.set("adults", String(guests));
      u.searchParams.set("locale", lang);
      airbnbHref = u.toString();
    } catch {}
  }

  const targetPhrase = txt.target(unit.name[lang], unit.isHouse);
  const waText =
    checkIn && checkOut
      ? txt.waMessage(targetPhrase, fmt(checkIn), fmt(checkOut), nights, guests)
      : txt.waMessage(targetPhrase);

  // Prezzo indicativo (solo per le camere: la casa intera è su richiesta).
  const nightly = unit.priceTwo ? (guests >= 3 && unit.priceThree ? unit.priceThree : unit.priceTwo) : null;
  const total = nightly && hasDates ? nightly * nights : null;
  const fmtEuro = (n: number) => `${n.toLocaleString(locale)} €`;
  const whatsappHref = whatsapp ? `https://wa.me/${whatsapp}?text=${encodeURIComponent(waText)}` : "";

  let calendar: ReactNode;
  if (loadError) {
    calendar = <p className="font-sans text-sabina-300/80">{t.booking.error}</p>;
  } else if (!data) {
    calendar = <p className="font-sans text-sabina-300/80">{t.booking.loading}</p>;
  } else if (!data.configured) {
    calendar = <p className="max-w-md font-sans text-sabina-300/80">{t.booking.notConfigured}</p>;
  } else {
    calendar = (
      <>
        <div className="mb-4 flex items-center justify-between">
          <button
            type="button"
            onClick={() => setOffset((o) => Math.max(0, o - 1))}
            disabled={offset === 0}
            aria-label={txt.prev}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-sabina-300/40 text-sabina-100 transition hover:bg-sabina-50/10 disabled:opacity-30"
          >
            ‹
          </button>
          <p className="font-sans text-xs uppercase tracking-widest text-sabina-300/90">
            {!checkIn || checkOut ? txt.pickCheckIn : txt.pickCheckOut}
          </p>
          <button
            type="button"
            onClick={() => setOffset((o) => Math.min(MAX_MONTH_OFFSET, o + 1))}
            disabled={offset === MAX_MONTH_OFFSET}
            aria-label={txt.next}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-sabina-300/40 text-sabina-100 transition hover:bg-sabina-50/10 disabled:opacity-30"
          >
            ›
          </button>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {months.map((m) => (
            <MonthGrid
              key={`${m.year}-${m.month}`}
              year={m.year}
              month={m.month}
              busyRanges={busyRanges}
              weekdays={WEEKDAYS[lang]}
              monthLabel={m.label}
              checkIn={checkIn}
              checkOut={checkOut}
              onPick={pick}
            />
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-6 font-sans text-xs uppercase tracking-widest text-sabina-300/80">
          <span className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-sabina-400/10 ring-1 ring-sabina-300/30" />
            {t.booking.calendarLegendFree}
          </span>
          <span className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-sabina-700/70" />
            {t.booking.calendarLegendBusy}
          </span>
        </div>
        {warning && (
          <p role="alert" className="mt-4 font-sans text-sm text-sabina-200">
            {txt.blocked}
          </p>
        )}
      </>
    );
  }

  return (
    <div>
      {/* Scelta: una camera oppure la casa intera */}
      <p className="section-eyebrow mb-3 text-[11px]">{stayUi.chooseStay[lang]}</p>
      <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label={stayUi.chooseStay[lang]}>
        {units.map((u) => (
          <button
            key={u.id}
            type="button"
            role="tab"
            aria-selected={u.id === unitId}
            onClick={() => chooseUnit(u.id)}
            className={`rounded-full border px-4 py-2 font-sans text-xs uppercase tracking-[0.16em] transition ${
              u.id === unitId
                ? "border-sabina-400 bg-sabina-400 font-semibold text-sabina-950"
                : "border-sabina-300/40 text-sabina-100 hover:border-sabina-100 hover:bg-sabina-50/10"
            }`}
          >
            {u.name[lang]}
          </button>
        ))}
      </div>

      {calendar}

      {/* Riepilogo soggiorno */}
      <div className="card-surface mt-8 rounded-2xl p-5">
        <div className="flex flex-wrap items-end gap-6 font-sans">
          <div>
            <p className="section-eyebrow mb-1 text-[11px]">{txt.arrival}</p>
            <p className="text-sabina-50">{checkIn ? fmt(checkIn) : "—"}</p>
          </div>
          <div>
            <p className="section-eyebrow mb-1 text-[11px]">{txt.departure}</p>
            <p className="text-sabina-50">{checkOut ? fmt(checkOut) : "—"}</p>
          </div>
          {hasDates && <p className="text-sm text-sabina-300">{txt.nights(nights)}</p>}
          {nightly && (
            <div>
              <p className="section-eyebrow mb-1 text-[11px]">{total ? stayUi.total[lang] : stayUi.perNight[lang]}</p>
              <p className="text-sabina-50">{fmtEuro(total ?? nightly)}</p>
            </div>
          )}
          {!nightly && unit.isHouse && (
            <p className="text-sm text-sabina-300">{wholeHouse.priceOnRequest[lang]}</p>
          )}
          <label className="flex flex-col">
            <span className="section-eyebrow mb-1 text-[11px]">{txt.guests}</span>
            <select
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className="rounded-full border border-sabina-300/40 bg-transparent px-4 py-2 text-sabina-50"
            >
              {Array.from({ length: unit.maxGuests - unit.minGuests + 1 }, (_, i) => unit.minGuests + i).map((n) => (
                <option key={n} value={n} className="bg-sabina-950">
                  {n}
                </option>
              ))}
            </select>
          </label>
          {checkIn && (
            <button
              type="button"
              onClick={clear}
              className="font-sans text-sm text-sabina-300 underline decoration-sabina-600 underline-offset-4 hover:text-sabina-100"
            >
              {txt.clear}
            </button>
          )}
        </div>
      </div>

      {/* Canali di prenotazione */}
      <div className="mt-8 flex flex-wrap items-center gap-4">
        {bookingHref && (
          <a href={bookingHref} target="_blank" rel="noopener noreferrer" className="btn-primary">
            {t.booking.bookOnBooking}
          </a>
        )}
        {airbnbHref && (
          <a href={airbnbHref} target="_blank" rel="noopener noreferrer" className="btn-primary">
            {t.booking.bookOnAirbnb}
          </a>
        )}
        {whatsappHref && (
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-outline">
            {txt.whatsapp}
          </a>
        )}
      </div>
      {whatsappHref && <p className="mt-3 font-sans text-sm text-sabina-300/90">{txt.directNote}</p>}
      {nightly && <p className="mt-1 font-sans text-xs text-sabina-300/70">{stayUi.totalNote[lang]}</p>}
    </div>
  );
}
