import type { Metadata } from "next";
import HousePage from "@/components/pages/HousePage";
import { content } from "@/lib/content";
import { pageMeta } from "@/lib/site";

const t = content.it.house;
export const metadata: Metadata = pageMeta("it", "house", t.metaTitle, t.metaDescription);

export default function Page() {
  return <HousePage lang="it" />;
}
