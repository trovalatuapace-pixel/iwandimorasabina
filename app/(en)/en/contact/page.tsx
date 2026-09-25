import type { Metadata } from "next";
import ContactPage from "@/components/pages/ContactPage";
import { content } from "@/lib/content";
import { pageMeta } from "@/lib/site";

const t = content.en.contact;
export const metadata: Metadata = pageMeta("en", "contact", t.metaTitle, t.metaDescription);

export default function Page() {
  return <ContactPage lang="en" />;
}
