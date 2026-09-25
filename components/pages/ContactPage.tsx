import type { Lang } from "@/lib/i18n/translations";
import { content } from "@/lib/content";
import { contacts, href } from "@/lib/site";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import AvailabilityCalendar from "@/components/AvailabilityCalendar";
import Shell from "./Shell";
import MapEmbed from "./MapEmbed";
import QuoteForm from "@/components/site/QuoteForm";
import { ui } from "@/lib/data/extras";
import { PageHero, Section, SectionHead } from "@/components/site/ui";

export default function ContactPage({ lang }: { lang: Lang }) {
  const t = content[lang].contact;
  const c = content[lang].common;

  // Unica CTA di prenotazione: Booking.com se configurato, altrimenti Airbnb,
  // altrimenti richiesta via WhatsApp.
  const primary = contacts.bookingUrl
    ? { url: contacts.bookingUrl, label: t.bookButton }
    : contacts.airbnbUrl
    ? { url: contacts.airbnbUrl, label: t.bookButton }
    : contacts.whatsapp
    ? { url: `https://wa.me/${contacts.whatsapp}`, label: t.bookFallback }
    : null;
  const showAirbnbNote = Boolean(contacts.bookingUrl && contacts.airbnbUrl);

  return (
    <Shell lang={lang} current="contact">
      <PageHero eyebrow={t.eyebrow} title={t.title} lead={t.lead} />

      <Section id="prenota" divider={false}>
        <SectionHead eyebrow={t.bookingEyebrow} title={t.bookingTitle} />
        <p className="mt-4 max-w-2xl font-sans text-sabina-100/80">{t.bookingText}</p>
        <div className="mt-10">
          <LanguageProvider initialLang={lang}>
            <AvailabilityCalendar />
          </LanguageProvider>
        </div>
        {primary && (
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a href={primary.url} target="_blank" rel="noopener noreferrer" className="btn-primary">
              {primary.label}
            </a>
            {showAirbnbNote && (
              <a
                href={contacts.airbnbUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm text-sabina-300 underline decoration-sabina-600 underline-offset-4 hover:text-sabina-100"
              >
                {t.alsoAirbnb}
              </a>
            )}
          </div>
        )}
      </Section>

      {(contacts.whatsapp || contacts.email) && (
        <Section id="preventivo">
          <SectionHead eyebrow={ui[lang].quote.eyebrow} title={ui[lang].quote.title} />
          <p className="mb-10 mt-4 max-w-2xl font-sans text-sabina-100/80">{ui[lang].quote.lead}</p>
          <QuoteForm lang={lang} whatsapp={contacts.whatsapp} email={contacts.email} />
        </Section>
      )}

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <h2 className="font-serif text-3xl text-sabina-50">{t.infoTitle}</h2>
            <dl className="mt-6 space-y-5 font-sans text-sm">
              <div>
                <dt className="section-eyebrow mb-1 text-[11px]">{t.addressLabel}</dt>
                <dd className="text-sabina-100/90">{c.address}</dd>
              </div>
              {contacts.email && (
                <div>
                  <dt className="section-eyebrow mb-1 text-[11px]">{t.emailLabel}</dt>
                  <dd>
                    <a href={`mailto:${contacts.email}`} className="nav-link text-sabina-100/90">
                      {contacts.email}
                    </a>
                  </dd>
                </div>
              )}
              {contacts.whatsapp && (
                <div>
                  <dt className="section-eyebrow mb-1 text-[11px]">{t.whatsappLabel}</dt>
                  <dd>
                    <a
                      href={`https://wa.me/${contacts.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nav-link text-sabina-100/90"
                    >
                      {t.whatsappText}
                    </a>
                  </dd>
                </div>
              )}
              {(contacts.instagram || contacts.facebook) && (
                <div>
                  <dt className="section-eyebrow mb-1 text-[11px]">{t.socialLabel}</dt>
                  <dd className="flex gap-5">
                    {contacts.instagram && (
                      <a href={contacts.instagram} target="_blank" rel="noopener noreferrer" className="nav-link text-sabina-100/90">
                        Instagram
                      </a>
                    )}
                    {contacts.facebook && (
                      <a href={contacts.facebook} target="_blank" rel="noopener noreferrer" className="nav-link text-sabina-100/90">
                        Facebook
                      </a>
                    )}
                  </dd>
                </div>
              )}
            </dl>
          </div>
          <div>
            <h2 className="mb-6 font-serif text-3xl text-sabina-50">{t.mapTitle}</h2>
            <MapEmbed title={t.mapTitle} />
          </div>
        </div>
      </Section>
    </Shell>
  );
}
