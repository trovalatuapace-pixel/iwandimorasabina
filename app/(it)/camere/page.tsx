import type { Metadata } from "next";
import RoomsPage from "@/components/pages/RoomsPage";
import { content } from "@/lib/content";
import { pageMeta } from "@/lib/site";

const t = content.it.rooms;
export const metadata: Metadata = pageMeta("it", "rooms", t.metaTitle, t.metaDescription);

export default function Page() {
  return <RoomsPage lang="it" />;
}
