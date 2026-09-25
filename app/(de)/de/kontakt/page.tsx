import type { Metadata } from "next";
import ContactPage from "@/components/pages/ContactPage";
import { content } from "@/lib/content";
import { pageMeta } from "@/lib/site";

const t = content.de.contact;
export const metadata: Metadata = pageMeta("de", "contact", t.metaTitle, t.metaDescription);

export default function Page() {
  return <ContactPage lang="de" />;
}
