import { NextResponse } from "next/server";
import { parseIcs, mergeBusyRanges, BusyRange } from "@/lib/ical";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

async function fetchFeed(
  url: string | undefined,
  source: "booking" | "airbnb"
): Promise<{ ranges: BusyRange[]; error: string | null }> {
  if (!url) return { ranges: [], error: null };
  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; DimoraPangeaCalendar/1.0)",
        Accept: "text/calendar, text/plain, */*",
      },
      next: { revalidate: 1800 },
    });
    if (!res.ok) {
      return { ranges: [], error: `${source}: HTTP ${res.status}` };
    }
    const text = await res.text();
    return { ranges: parseIcs(text, source), error: null };
  } catch {
    return { ranges: [], error: `${source}: fetch failed` };
  }
}

const ROOM_SLUGS = ["europa", "asia", "africa", "americhe", "oceania"] as const;

/** Feed iCal per ogni unità. Le variabili per camera sono ICAL_BOOKING_URL_<SLUG> e ICAL_AIRBNB_URL_<SLUG>. */
function roomFeeds(slug: string) {
  const key = slug.toUpperCase();
  return [
    { url: process.env[`ICAL_BOOKING_URL_${key}`], source: "booking" as const },
    { url: process.env[`ICAL_AIRBNB_URL_${key}`], source: "airbnb" as const },
  ];
}

function houseFeeds() {
  return [
    { url: process.env.ICAL_BOOKING_URL, source: "booking" as const },
    { url: process.env.ICAL_AIRBNB_URL, source: "airbnb" as const },
  ];
}

/**
 * ?unit=<slug camera> oppure ?unit=casa (default).
 * - Una camera è occupata se è occupata lei oppure la casa intera.
 * - La casa intera è occupata se lo è lei oppure una qualsiasi camera.
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const requested = (searchParams.get("unit") || "casa").toLowerCase();
  const isRoom = (ROOM_SLUGS as readonly string[]).includes(requested);

  const feeds = isRoom
    ? [...roomFeeds(requested), ...houseFeeds()]
    : [...houseFeeds(), ...ROOM_SLUGS.flatMap((s) => roomFeeds(s))];

  const active = feeds.filter((f) => f.url);
  if (!active.length) {
    return NextResponse.json({ configured: false, busyRanges: [], errors: [] });
  }

  const results = await Promise.all(active.map((f) => fetchFeed(f.url, f.source)));
  const busyRanges = mergeBusyRanges(results.flatMap((r) => r.ranges));
  const errors = results.map((r) => r.error).filter(Boolean);

  return NextResponse.json({ configured: true, busyRanges, errors });
}
