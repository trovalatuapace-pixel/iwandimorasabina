import type { Metadata } from "next";
import LegalPage from "@/components/pages/LegalPage";
import { legal } from "@/lib/data/legal";
import { pageMeta } from "@/lib/site";

const t = legal.cookies.it;
export const metadata: Metadata = pageMeta("it", "cookies", t.metaTitle, t.metaDescription);

export default function Page() {
  return <LegalPage lang="it" kind="cookies" />;
}
