import Link from "next/link";
import type { Lang } from "@/lib/i18n/translations";
import { contacts, quoteHref } from "@/lib/site";
import { ui } from "@/lib/data/extras";
import Icon from "./Icons";

/** Barra fissa in basso su smartphone: Chiama · WhatsApp · Preventivo. */
export default function MobileActionBar({ lang }: { lang: Lang }) {
  const t = ui[lang].bar;
  const tel = contacts.phone ? (contacts.phone.startsWith("+") ? contacts.phone : `+${contacts.phone}`) : "";
  const item = "flex flex-1 items-center justify-center gap-1.5 py-3.5 font-sans text-[11px] font-medium uppercase tracking-[0.08em]";

  return (
    <nav
      aria-label="Azioni rapide"
      className="fixed inset-x-0 bottom-0 z-50 px-3 lg:hidden"
      style={{ paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 0.5rem)" }}
    >
      <div className="flex overflow-hidden rounded-full border border-sabina-400/40 bg-sabina-950/95 shadow-glow backdrop-blur-md">
        {tel && (
          <a href={`tel:${tel}`} className={`${item} text-sabina-100`}>
            <Icon name="phone" className="h-4 w-4 text-sabina-300" />
            {t.call}
          </a>
        )}
        {contacts.whatsapp && (
          <a
            href={`https://wa.me/${contacts.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`${item} border-l border-sabina-800 text-sabina-100`}
          >
            <Icon name="whatsapp" className="h-4 w-4 text-[#5fd07a]" />
            {t.whatsapp}
          </a>
        )}
        <Link href={quoteHref(lang)} className={`${item} bg-sabina-400 text-sabina-950`}>
          <Icon name="pen" className="h-4 w-4" />
          {t.quote}
        </Link>
      </div>
    </nav>
  );
}
