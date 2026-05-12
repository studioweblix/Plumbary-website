import Image from "next/image";
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
    image: "/images/medizin-precision.png",
    imageAlt: "Präzisionsarbeit in der Medizintechnik",
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
    image: "/images/industrie-gauges.png",
    imageAlt: "Industrie-Manometer und Drucktechnik",
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
            Zwei Welten.
            <br />
            <span className="text-white/40">Ein Werkstoff.</span>
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

              {/* Image area */}
              <div className="relative h-56 lg:h-64 overflow-hidden">
                <Image
                  src={bereich.image}
                  alt={bereich.imageAlt}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Gradient overlay at bottom of image → transitions into card */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-[var(--color-dark-card)]" />

                {/* Kicker badge on image */}
                <div className="absolute bottom-4 left-6 flex items-center gap-2 z-10">
                  <div className="flex h-9 w-9 items-center justify-center border border-[var(--color-secondary)]/40 bg-[var(--color-dark)]/70 backdrop-blur-sm text-[var(--color-secondary)]">
                    {bereich.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--color-secondary)] bg-[var(--color-dark)]/70 backdrop-blur-sm px-2.5 py-1">
                    {bereich.kicker}
                  </span>
                </div>
              </div>

              {/* Text content */}
              <div className="relative z-10 p-8 lg:p-10">
                {/* Title */}
                <h3 className="font-heading text-3xl lg:text-[2.2rem] font-bold uppercase tracking-tight text-white mb-4 leading-tight">
                  {bereich.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-white/50 leading-relaxed font-light mb-7">
                  {bereich.description}
                </p>

                {/* Highlights list */}
                <ul className="mb-9 space-y-2.5">
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
