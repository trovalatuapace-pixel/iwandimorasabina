import type { Metadata } from "next";
import LegalPage from "@/components/pages/LegalPage";
import { legal } from "@/lib/data/legal";
import { pageMeta } from "@/lib/site";

const t = legal.cookies.de;
export const metadata: Metadata = pageMeta("de", "cookies", t.metaTitle, t.metaDescription);

export default function Page() {
  return <LegalPage lang="de" kind="cookies" />;
}
