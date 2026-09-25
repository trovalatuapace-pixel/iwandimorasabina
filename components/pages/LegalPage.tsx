import Link from "next/link";
import type { Lang } from "@/lib/i18n/translations";
import { LANG_META } from "@/lib/i18n/translations";
import { legal, LEGAL_UPDATED } from "@/lib/data/legal";
import { legalUi } from "@/lib/data/legalUi";
import { href } from "@/lib/site";
import { PageHero, Section } from "@/components/site/ui";
import ConsentControls from "@/components/site/ConsentControls";
import Shell from "./Shell";

export default function LegalPage({ lang, kind }: { lang: Lang; kind: "privacy" | "cookies" }) {
  const d = legal[kind][lang];
  const other = kind === "privacy" ? "cookies" : "privacy";
  const updated = new Date(LEGAL_UPDATED).toLocaleDateString(LANG_META[lang].locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <Shell lang={lang} current={kind}>
      <PageHero eyebrow={d.eyebrow} title={d.title} lead={d.lead} />
      <Section divider={false}>
        <div className="max-w-3xl space-y-10 font-sans text-sabina-100/85">
          {d.blocks.map((b, i) => (
            <section key={i}>
              <h2 className="font-serif text-2xl text-sabina-50">{b.h}</h2>
              {b.ul && (
                <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed marker:text-sabina-400">
                  {b.ul.map((x, n) => <li key={n}>{x}</li>)}
                </ul>
              )}
              {b.p?.map((x, n) => (
                <p key={n} className="mt-4 leading-relaxed">{x}</p>
              ))}
              {kind === "cookies" && i === d.blocks.length - 1 && <ConsentControls lang={lang} />}
            </section>
          ))}
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-sabina-900 pt-6 text-sm text-sabina-300/80">
            <p>{d.updated}: {updated}</p>
            <Link href={href(lang, other)} className="nav-link">
              {legalUi[lang][other]}
            </Link>
          </div>
        </div>
      </Section>
    </Shell>
  );
}
