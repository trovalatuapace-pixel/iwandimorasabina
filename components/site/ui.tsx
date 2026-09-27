import Link from "next/link";
import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  lead,
  tone = "#3a2a1a",
}: {
  eyebrow: string;
  title: string;
  lead: string;
  tone?: string;
}) {
  return (
    <section className="relative overflow-hidden px-5 pb-16 pt-36 sm:px-8 sm:pb-20 sm:pt-44">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: `radial-gradient(ellipse at 75% 0%, ${tone} 0%, #1c130c 50%, #140f0a 100%)`,
        }}
        aria-hidden="true"
      />
      <div className="mx-auto max-w-6xl">
        <p className="section-eyebrow mb-4 animate-fade-in-up">{eyebrow}</p>
        <h1 className="max-w-3xl animate-fade-in-up font-serif text-4xl leading-tight text-sabina-50 [animation-delay:100ms] sm:text-5xl md:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl animate-fade-in-up font-sans text-lg leading-relaxed text-sabina-100/85 [animation-delay:200ms]">
          {lead}
        </p>
      </div>
    </section>
  );
}

export function Section({
  children,
  id,
  divider,
  tone,
}: {
  children: ReactNode;
  id?: string;
  divider?: boolean;
  /** "light" = fondo crema con testo scuro, "dark" = fondo scuro caldo. Senza tone resta lo sfondo della pagina. */
  tone?: "light" | "dark";
}) {
  const showDivider = divider ?? !tone;
  const toneClass = tone === "light" ? "tone-light" : tone === "dark" ? "tone-dark tone-dark-warm" : "";
  return (
    <section id={id} className={`relative scroll-mt-24 px-5 sm:px-8 ${tone ? "py-24 sm:py-28" : "py-20"} ${toneClass}`}>
      {showDivider && (
        <div className="section-divider mb-16">
          <span className="section-divider__mark" aria-hidden="true" />
        </div>
      )}
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

export function SectionHead({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <>
      <p className="section-eyebrow mb-3">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
    </>
  );
}

/**
 * Segnaposto elegante per le foto, finché non arrivano le immagini reali.
 * Per sostituirlo: passare `src` (immagine in /public) e verrà mostrata la foto.
 */
export function Photo({
  label,
  gradient = "from-[#3a2a1a] to-[#140f0a]",
  src,
  alt = "",
  className = "aspect-[4/3]",
}: {
  label: string;
  gradient?: string;
  src?: string;
  alt?: string;
  className?: string;
}) {
  if (src) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} className={`w-full rounded-2xl object-cover ${className}`} loading="lazy" />;
  }
  return (
    <div
      className={`relative flex w-full items-end overflow-hidden rounded-2xl border border-sabina-800 bg-gradient-to-br ${gradient} ${className}`}
      role="img"
      aria-label={label}
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "repeating-linear-gradient(115deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 14px)",
        }}
        aria-hidden="true"
      />
      <span className="relative m-4 font-sans text-[10px] uppercase tracking-[0.3em] text-sabina-100/50">
        {label}
      </span>
    </div>
  );
}

export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-3 font-sans text-sm uppercase tracking-[0.2em] text-sabina-300 transition-colors hover:text-sabina-100"
    >
      {children}
      <span className="h-px w-8 bg-sabina-400/70 transition-all duration-300 group-hover:w-12" aria-hidden="true" />
    </Link>
  );
}

/** L'unica call to action di prenotazione della pagina. */
export function BookingCta({
  title,
  text,
  button,
  target,
}: {
  title: string;
  text: string;
  button: string;
  target: string;
}) {
  return (
    <section className="relative px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="card-surface rounded-3xl px-6 py-14 text-center sm:px-12">
          <h2 className="font-serif text-3xl text-sabina-50 sm:text-4xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-xl font-sans text-sabina-100/80">{text}</p>
          <Link href={target} className="btn-primary mt-8">
            {button}
          </Link>
        </div>
      </div>
    </section>
  );
}

/**
 * Fascia fotografica a tutta larghezza tra una sezione e l'altra.
 */
export function PhotoBand({
  src,
  eyebrow,
  title,
  position = "center",
}: {
  src: string;
  eyebrow: string;
  title: string;
  position?: string;
}) {
  return (
    <section className="tone-dark relative isolate flex min-h-[62vh] items-end overflow-hidden sm:min-h-[70vh]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={title}
        loading="lazy"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        style={{ objectPosition: position }}
      />
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "linear-gradient(to top, rgba(20,15,10,0.85) 0%, rgba(20,15,10,0.25) 45%, rgba(20,15,10,0.05) 100%)" }}
        aria-hidden="true"
      />
      <div className="mx-auto w-full max-w-6xl px-5 pb-14 sm:px-8 sm:pb-20">
        <p className="section-eyebrow mb-4">{eyebrow}</p>
        <p className="max-w-3xl font-serif text-3xl leading-tight text-sabina-50 sm:text-4xl md:text-5xl">{title}</p>
      </div>
    </section>
  );
}
