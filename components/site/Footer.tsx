import Link from "next/link";
import { LANG_META, LANGS, type Lang } from "@/lib/i18n/translations";
import { contacts, href, hrefAll, navItems, type PageKey } from "@/lib/site";
import { content } from "@/lib/content";
import { ui } from "@/lib/data/extras";

export default function Footer({
  lang,
  current = "home",
  roomSlugIt,
}: {
  lang: Lang;
  current?: PageKey;
  roomSlugIt?: string;
}) {
  const alt = hrefAll(current, roomSlugIt);
  const c = content[lang].common;
  const k = content[lang].contact;

  return (
    <footer className="relative px-5 pb-10 pt-16 sm:px-8">
      <div className="section-divider mb-14">
        <span className="section-divider__mark" aria-hidden="true" />
      </div>
      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-3">
        <div>
          <p className="flex items-center gap-2.5 font-serif text-2xl text-sabina-50">
            <span className="h-2 w-2 rotate-45 border border-sabina-400/70" aria-hidden="true" />
            Orbis in Sabina
          </p>
          <p className="mt-3 font-sans text-sm text-sabina-300/80">{c.address}</p>
          {(contacts.cin || contacts.vat) && (
            <p className="mt-3 font-sans text-xs leading-relaxed text-sabina-300/70">
              {contacts.cin && <span className="block">{ui[lang].legal.cin} {contacts.cin}</span>}
              {contacts.vat && <span className="block">{ui[lang].legal.vat} {contacts.vat}</span>}
            </p>
          )}
        </div>

        <nav aria-label="Footer" className="flex flex-col gap-2">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={href(lang, item.key)}
              className="nav-link w-fit font-sans text-sm text-sabina-100/85"
            >
              {item.label[lang]}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-2 font-sans text-sm text-sabina-100/85">
          {contacts.email && (
            <a href={`mailto:${contacts.email}`} className="nav-link w-fit">
              {contacts.email}
            </a>
          )}
          {contacts.whatsapp && (
            <a
              href={`https://wa.me/${contacts.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link w-fit"
            >
              {k.whatsappText}
            </a>
          )}
          {contacts.instagram && (
            <a href={contacts.instagram} target="_blank" rel="noopener noreferrer" className="nav-link w-fit">
              Instagram
            </a>
          )}
          {contacts.facebook && (
            <a href={contacts.facebook} target="_blank" rel="noopener noreferrer" className="nav-link w-fit">
              Facebook
            </a>
          )}
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-wrap items-center justify-between gap-4 border-t border-sabina-900 pt-6 font-sans text-xs text-sabina-300/60">
        <p>
          © {new Date().getFullYear()} Orbis in Sabina. {c.rights}
        </p>
        <nav aria-label={c.language} className="flex gap-4">
          {LANGS.map((l) =>
            l === lang ? (
              <span key={l} className="text-sabina-300" aria-current="true">
                {LANG_META[l].label}
              </span>
            ) : (
              <a key={l} href={alt[l]} hrefLang={l} lang={l} className="nav-link">
                {LANG_META[l].label}
              </a>
            )
          )}
        </nav>
      </div>
    </footer>
  );
}
