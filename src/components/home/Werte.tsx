import { AnimatedSection, AnimatedItem, AnimatedStagger } from "@/components/ui/AnimatedSection";

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function AtomIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
      <path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9C11.18 3.76 5.85 1.73 3.82 3.77c-2.04 2.03-.02 7.36 4.5 11.9 4.52 4.54 9.85 6.57 11.88 4.53z" />
      <path d="M20.2 3.8c2.03 2.03.05 7.36-4.5 11.9-4.54 4.54-9.87 6.57-11.9 4.54" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      <path d="M2 12h20" />
    </svg>
  );
}

const werte = [
  {
    icon: <ShieldIcon />,
    title: "Präzision & Qualität",
    text: "Engste Toleranzen, reproduzierbare Ergebnisse und lückenlose Qualitätskontrolle sind die Basis jedes Produkts.",
    number: "01",
  },
  {
    icon: <TargetIcon />,
    title: "Zuverlässigkeit",
    text: "Termingerechte Lieferung und verlässliche Kommunikation — wir halten, was wir versprechen.",
    number: "02",
  },
  {
    icon: <AtomIcon />,
    title: "Werkstoffkompetenz",
    text: "Jahrzehntelange Spezialisierung auf Blei als Werkstoff: Legierungskunde, Verarbeitungsverfahren und Anwendungswissen.",
    number: "03",
  },
  {
    icon: <GlobeIcon />,
    title: "International orientiert",
    text: "Kunden in ganz Europa und weltweit vertrauen auf Plumbary als kompetenten Lieferanten.",
    number: "04",
  },
];

export function Werte() {
  return (
    <section className="relative bg-[var(--color-dark-surface)] py-24 lg:py-32 overflow-hidden">
      {/* Background line pattern */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 40px,
            #8fafc4 40px,
            #8fafc4 41px
          )`,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-[var(--color-secondary)]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[var(--color-secondary)]">
              Unsere Werte
            </span>
          </div>
          <h2 className="font-heading text-[clamp(2rem,5vw,3.8rem)] font-bold uppercase tracking-tight text-white leading-tight">
            Was uns antreibt.
          </h2>
        </AnimatedSection>

        {/* Cards */}
        <AnimatedStagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {werte.map((wert) => (
            <AnimatedItem
              key={wert.title}
              className="relative group border border-white/[0.06] bg-[var(--color-dark-card)]/60 p-7 hover:border-[var(--color-secondary)]/25 transition-all duration-400"
            >
              {/* Number watermark */}
              <div className="absolute top-4 right-5 font-heading text-6xl font-bold text-white/[0.04] leading-none select-none">
                {wert.number}
              </div>

              {/* Icon */}
              <div className="mb-6 flex h-12 w-12 items-center justify-center border border-[var(--color-secondary)]/20 text-[var(--color-secondary)]/70 group-hover:border-[var(--color-secondary)]/50 group-hover:text-[var(--color-secondary)] transition-all duration-300">
                {wert.icon}
              </div>

              {/* Content */}
              <h3 className="font-heading text-[17px] font-bold uppercase tracking-tight text-white mb-3 leading-tight">
                {wert.title}
              </h3>
              <p className="text-xs text-white/45 leading-relaxed font-light">
                {wert.text}
              </p>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-secondary)]/0 to-transparent group-hover:via-[var(--color-secondary)]/30 transition-all duration-500" />
            </AnimatedItem>
          ))}
        </AnimatedStagger>
      </div>
    </section>
  );
}
