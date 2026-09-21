"use client";

import { useEffect, useMemo, useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

type BusyRange = { start: string; end: string; source: "booking" | "airbnb" };
type ApiResponse = {
  configured: boolean;
  busyRanges: BusyRange[];
  errors: string[];
};

const WEEKDAYS_IT = ["L", "M", "M", "G", "V", "S", "D"];
const WEEKDAYS_EN = ["M", "T", "W", "T", "F", "S", "S"];

function toDateOnly(d: Date) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

function isBusy(day: Date, ranges: BusyRange[]) {
  const t = day.getTime();
  return ranges.some((r) => {
    const start = new Date(r.start).getTime();
    const end = new Date(r.end).getTime();
    return t >= start && t < end;
  });
}

function buildMonthGrid(year: number, month: number) {
  const first = new Date(year, month, 1);
  const startOffset = (first.getDay() + 6) % 7; // Monday = 0
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells: (Date | null)[] = Array(startOffset).fill(null);
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push(new Date(year, month, d));
  }
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}

function MonthGrid({
  year,
  month,
  busyRanges,
  weekdays,
  monthLabel,
}: {
  year: number;
  month: number;
  busyRanges: BusyRange[];
  weekdays: string[];
  monthLabel: string;
}) {
  const cells = useMemo(() => buildMonthGrid(year, month), [year, month]);
  const today = toDateOnly(new Date());

  return (
    <div className="card-surface rounded-2xl p-5 transition-colors duration-300 hover:border-sabina-400/40">
      <p className="mb-4 text-center font-serif text-lg capitalize text-sabina-50">
        {monthLabel}
      </p>
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
          return (
            <div
              key={i}
              className={`flex h-8 items-center justify-center rounded-full font-sans text-xs transition-colors duration-300 ${
                isPast
                  ? "text-sabina-300/30"
                  : busy
                  ? "bg-sabina-700/70 text-sabina-100/60 line-through"
                  : "bg-sabina-400/10 text-sabina-50"
              }`}
            >
              {day.getDate()}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function AvailabilityCalendar() {
  const { t, lang } = useLanguage();
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/availability")
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
  }, []);

  const weekdays = lang === "it" ? WEEKDAYS_IT : WEEKDAYS_EN;
  const now = new Date();
  const months = [0, 1].map((offset) => {
    const d = new Date(now.getFullYear(), now.getMonth() + offset, 1);
    return {
      year: d.getFullYear(),
      month: d.getMonth(),
      label: d.toLocaleDateString(lang === "it" ? "it-IT" : "en-US", {
        month: "long",
        year: "numeric",
      }),
    };
  });

  if (loadError) {
    return <p className="font-sans text-sabina-300/80">{t.booking.error}</p>;
  }

  if (!data) {
    return (
      <p className="font-sans text-sabina-300/80">{t.booking.loading}</p>
    );
  }

  if (!data.configured) {
    return (
      <p className="max-w-md font-sans text-sabina-300/80">
        {t.booking.notConfigured}
      </p>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {months.map((m) => (
          <MonthGrid
            key={`${m.year}-${m.month}`}
            year={m.year}
            month={m.month}
            busyRanges={data.busyRanges}
            weekdays={weekdays}
            monthLabel={m.label}
          />
        ))}
      </div>
      <div className="mt-5 flex flex-wrap gap-6 font-sans text-xs uppercase tracking-widest text-sabina-300/80">
        <span className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-sabina-400/10" />
          {t.booking.calendarLegendFree}
        </span>
        <span className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-sabina-700/70" />
          {t.booking.calendarLegendBusy}
        </span>
      </div>
    </div>
  );
}
