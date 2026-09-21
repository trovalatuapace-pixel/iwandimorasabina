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
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) {
      return { ranges: [], error: `${source}: HTTP ${res.status}` };
    }
    const text = await res.text();
    return { ranges: parseIcs(text, source), error: null };
  } catch {
    return { ranges: [], error: `${source}: fetch failed` };
  }
}

export async function GET() {
  const bookingUrl = process.env.ICAL_BOOKING_URL;
  const airbnbUrl = process.env.ICAL_AIRBNB_URL;

  const configured = Boolean(bookingUrl || airbnbUrl);

  if (!configured) {
    return NextResponse.json({
      configured: false,
      busyRanges: [],
      errors: [],
    });
  }

  const [booking, airbnb] = await Promise.all([
    fetchFeed(bookingUrl, "booking"),
    fetchFeed(airbnbUrl, "airbnb"),
  ]);

  const busyRanges = mergeBusyRanges([...booking.ranges, ...airbnb.ranges]);
  const errors = [booking.error, airbnb.error].filter(Boolean);

  return NextResponse.json({
    configured: true,
    busyRanges,
    errors,
  });
}
