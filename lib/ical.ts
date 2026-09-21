export type BusyRange = {
  start: string; // ISO date, inclusive
  end: string; // ISO date, exclusive (check-out day)
  source: "booking" | "airbnb";
};

/**
 * Minimal RFC 5545 parser: only what Booking.com / Airbnb export for a
 * reservations feed (VEVENT blocks with DTSTART/DTEND, whole-day or
 * date-time). No recurrence, no timezone conversion — booking blackout
 * dates don't need either.
 */
export function parseIcs(raw: string, source: "booking" | "airbnb"): BusyRange[] {
  const unfolded = raw.replace(/\r\n[ \t]/g, "").replace(/\n[ \t]/g, "");
  const lines = unfolded.split(/\r\n|\n/);

  const ranges: BusyRange[] = [];
  let inEvent = false;
  let start: string | null = null;
  let end: string | null = null;

  for (const line of lines) {
    if (line.startsWith("BEGIN:VEVENT")) {
      inEvent = true;
      start = null;
      end = null;
      continue;
    }
    if (line.startsWith("END:VEVENT")) {
      if (inEvent && start && end) {
        ranges.push({ start, end, source });
      }
      inEvent = false;
      continue;
    }
    if (!inEvent) continue;

    if (line.startsWith("DTSTART")) {
      start = toIsoDate(line);
    } else if (line.startsWith("DTEND")) {
      end = toIsoDate(line);
    }
  }

  return ranges;
}

function toIsoDate(line: string): string | null {
  const value = line.split(":").pop();
  if (!value) return null;
  const digits = value.trim();

  // Whole-day form: YYYYMMDD
  const dateMatch = digits.match(/^(\d{4})(\d{2})(\d{2})$/);
  if (dateMatch) {
    const [, y, m, d] = dateMatch;
    return `${y}-${m}-${d}`;
  }

  // Date-time form: YYYYMMDDTHHMMSSZ?
  const dateTimeMatch = digits.match(/^(\d{4})(\d{2})(\d{2})T\d{6}Z?$/);
  if (dateTimeMatch) {
    const [, y, m, d] = dateTimeMatch;
    return `${y}-${m}-${d}`;
  }

  return null;
}

export function mergeBusyRanges(ranges: BusyRange[]): BusyRange[] {
  return [...ranges].sort((a, b) => a.start.localeCompare(b.start));
}
