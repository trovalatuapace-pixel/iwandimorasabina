import type { Metadata } from "next";
import TerritoryPage from "@/components/pages/TerritoryPage";
import { content } from "@/lib/content";
import { pageMeta } from "@/lib/site";

const t = content.en.territory;
export const metadata: Metadata = pageMeta("en", "territory", t.metaTitle, t.metaDescription);

export default function Page() {
  return <TerritoryPage lang="en" />;
}
