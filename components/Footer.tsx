"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Footer() {
  const { t, lang, toggleLang } = useLanguage();
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
  const whatsappHref = whatsappNumber
    ? `https://wa.me/${whatsappNumber.replace(/[^\d]/g, "")}`
    : "#";
  const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL || "#";
  const facebookUrl = process.env.NEXT_PUBLIC_FACEBOOK_URL || "#";
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "";

  return (
    <footer className="border-t border-sabina-800 px-5 py-14 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 sm:flex-row sm:justify-between">
        <div>
          <p className="font-serif text-2xl text-sabina-50">
            {t.footer.title}
          </p>
          <p className="mt-2 font-sans text-sm text-sabina-300/80">
            {t.footer.address}
          </p>
        </div>

        <div>
          <p className="section-eyebrow mb-3">{t.footer.contactsTitle}</p>
          <div className="flex flex-col gap-2 font-sans text-sm text-sabina-100/90">
            {contactEmail && <a href={`mailto:${contactEmail}`}>{contactEmail}</a>}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sabina-300 hover:text-sabina-100"
            >
              {t.footer.whatsapp}
            </a>
          </div>
        </div>

        <div>
          <p className="section-eyebrow mb-3">{t.footer.followUs}</p>
          <div className="flex gap-4 font-sans text-sm text-sabina-100/90">
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </div>
        </div>

        <div className="flex items-start">
          <button
            onClick={toggleLang}
            className="rounded-full border border-sabina-300/50 px-4 py-1.5 font-sans text-xs uppercase tracking-widest text-sabina-100 transition hover:border-sabina-100"
          >
            {lang === "it" ? "IT / EN" : "EN / IT"}
          </button>
        </div>
      </div>

      <p className="mx-auto mt-10 max-w-6xl font-sans text-xs text-sabina-300/60">
        © {new Date().getFullYear()} Orbis in Sabina. {t.footer.rights}
      </p>
    </footer>
  );
}
