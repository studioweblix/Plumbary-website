import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  AnimatedSection,
  AnimatedItem,
  AnimatedStagger,
} from "@/components/ui/AnimatedSection";

function CaduceusIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-7 w-7"
    >
      <path d="M12 2v20" />
      <path d="M8 6c0-2.2 1.8-4 4-4s4 1.8 4 4" />
      <path d="M6 10c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2" />
      <path d="M8 14c-1.1 0-2-.9-2-2" />
      <path d="M16 14c1.1 0 2-.9 2-2" />
      <circle cx="12" cy="8" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function GearIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-7 w-7"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  );
}

const bereiche = [
  {
    id: "medizin",
    icon: <CaduceusIcon />,
    kicker: "Gesundheit & Schutz",
    title: "Medizinische Produkte",
    description:
      "Bleiprodukte für den medizinischen Strahlenschutz: von Strahlenschutzwänden und -türen über Bleischürzen bis hin zu maßgefertigten Abschirmkomponenten für Röntgen- und Strahlentherapieanlagen. Gefertigt nach DIN- und EN-Normen.",
    highlights: [
      "Strahlenschutzwände & -türen",
      "Bleischürzen & Schutzkleidung",
      "Röntgenabschirmungen",
      "Individuelle Sonderanfertigungen",
    ],
    href: "/produkte#medizin",
    code: "MED",
    note: "Separater Bereich für Kliniken, Radiologie und Strahlenschutzplanung.",
  },
  {
    id: "industrie",
    icon: <GearIcon />,
    kicker: "Technik & Fertigung",
    title: "Industrielle Produkte",
    description:
      "Hochwertige Bleigussteile, Bleibleche, Bleirohre und Sonderprofile für industrielle Anwendungen. Ob Akkutechnologie, chemische Industrie, Schallschutz oder Baudämmung — Plumbary liefert passgenau.",
    highlights: [
      "Bleigussteile & -formstücke",
      "Bleibleche & -streifen",
      "Bleirohre & Profile",
      "Schallschutz & Dämmung",
    ],
    href: "/produkte#industrie",
    code: "IND",
    note: "Separater Bereich für Fertigung, Anlagenbau und technische Anwendungen.",
  },
];

export function Bereiche() {
  return (
    <section className="relative bg-[var(--color-dark)] py-24 lg:py-32 overflow-hidden">
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #8fafc4 1px, transparent 1px),
            linear-gradient(to bottom, #8fafc4 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <AnimatedSection className="mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-[var(--color-secondary)]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[var(--color-secondary)]">
              Unsere Bereiche
            </span>
          </div>
          <h2 className="font-heading text-[clamp(2rem,5vw,3.8rem)] font-bold uppercase tracking-tight text-white leading-tight">
            Zwei Produktwelten.
          </h2>
        </AnimatedSection>

        {/* Cards */}
        <AnimatedStagger className="grid gap-5 lg:grid-cols-2">
          {bereiche.map((bereich) => (
            <AnimatedItem
              key={bereich.id}
              className="group relative overflow-hidden border border-white/[0.07] bg-[var(--color-dark-card)] transition-all duration-500 hover:border-[var(--color-secondary)]/30"
            >
              {/* Top line accent on hover */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-secondary)]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

              {/* Text content */}
              <div className="relative z-10 p-8 lg:p-10">
                <div
                  className="absolute inset-0 opacity-[0.035]"
                  style={{
                    backgroundImage: `
                      linear-gradient(to right, #8fafc4 1px, transparent 1px),
                      linear-gradient(to bottom, #8fafc4 1px, transparent 1px)
                    `,
                    backgroundSize: "34px 34px",
                  }}
                />
                <div className="relative mb-8 flex items-start justify-between gap-6">
                  <div className="flex h-12 w-12 items-center justify-center border border-[var(--color-secondary)]/30 text-[var(--color-secondary)]">
                    {bereich.icon}
                  </div>
                  <span className="font-heading text-7xl font-black leading-none text-white/[0.035]">
                    {bereich.code}
                  </span>
                </div>
                <span className="relative mb-4 inline-flex border border-[var(--color-secondary)]/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--color-secondary)]/75">
                  {bereich.kicker}
                </span>
                {/* Title */}
                <h3 className="relative font-heading text-3xl lg:text-[2.2rem] font-bold uppercase tracking-tight text-white mb-4 leading-tight">
                  {bereich.title}
                </h3>

                {/* Description */}
                <p className="relative text-sm text-white/50 leading-relaxed font-light mb-5">
                  {bereich.description}
                </p>
                <p className="relative mb-8 border-l border-[var(--color-secondary)]/30 pl-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/35">
                  {bereich.note}
                </p>

                {/* Highlights list */}
                <ul className="relative mb-9 space-y-2.5">
                  {bereich.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-3">
                      <span className="h-1 w-1 shrink-0 rounded-full bg-[var(--color-secondary)]/60" />
                      <span className="text-[12px] text-white/55 tracking-wide">
                        {h}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={bereich.href}
                  className="inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-secondary)] border-b border-[var(--color-secondary)]/30 pb-0.5 hover:border-[var(--color-secondary)] transition-colors duration-200"
                >
                  Mehr erfahren
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 duration-300" />
                </Link>
              </div>
            </AnimatedItem>
          ))}
        </AnimatedStagger>
      </div>
    </section>
  );
}
