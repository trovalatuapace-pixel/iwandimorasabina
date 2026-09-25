import type { Metadata } from "next";
import LegalPage from "@/components/pages/LegalPage";
import { legal } from "@/lib/data/legal";
import { pageMeta } from "@/lib/site";

const t = legal.privacy.en;
export const metadata: Metadata = pageMeta("en", "privacy", t.metaTitle, t.metaDescription);

export default function Page() {
  return <LegalPage lang="en" kind="privacy" />;
}
