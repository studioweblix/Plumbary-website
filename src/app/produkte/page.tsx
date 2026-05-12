import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedSection, AnimatedStagger } from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Produkte – Plumbary GmbH",
  description:
    "Medizinische und industrielle Bleiprodukte von Plumbary GmbH: Strahlenschutz, Bleigussteile, Bleibleche und individuelle Sonderanfertigungen.",
};

const medizin = [
  {
    title: "Strahlenschutzwände",
    text: "Bleiverkleidete Trennwände und Einbauplatten für Röntgenräume und strahlentherapeutische Bereiche.",
  },
  {
    title: "Strahlenschutztüren",
    text: "Bleieinlagen in Türkonstruktionen nach DIN 6844 und individuellen Anforderungen.",
  },
  {
    title: "Röntgenschutzkleidung",
    text: "Bleischürzen, Schilddrüsenschutz und weitere persönliche Schutzausrüstung.",
  },
  {
    title: "Strahlentherapie-Abschirmung",
    text: "Maßgefertigte Komponenten für Linearbeschleuniger-Räume und nuklearmedizinische Einrichtungen.",
  },
  {
    title: "Bleiziegel & -platten",
    text: "Normierte und sonderformatige Bleiziegel und -platten zur Wandverkleidung.",
  },
  {
    title: "Sonderanfertigungen Medizin",
    text: "Konstruktive Lösungen nach Zeichnung oder Muster für besondere strahlenschutztechnische Aufgaben.",
  },
];

const industrie = [
  {
    title: "Bleigussteile",
    text: "Präzisionsgussteile aus Rein- oder Legierungsblei für technische Anwendungen aller Art.",
  },
  {
    title: "Bleibleche & -streifen",
    text: "Gewalzte Bleibleche in verschiedenen Stärken, Breiten und Längen nach Norm oder Maß.",
  },
  {
    title: "Bleirohre & Profile",
    text: "Nahtlose Bleirohre und Extrusionsprofile für chemische Anlagen und Rohrleitungsbau.",
  },
  {
    title: "Schallschutz",
    text: "Bleibeschwertes EPDM und Bleimatten zur Körperschall- und Luftschallreduzierung.",
  },
  {
    title: "Akkutechnik",
    text: "Legierungsbleiteile für Starterbatterien und stationäre Energiespeichersysteme.",
  },
  {
    title: "Sonderanfertigungen Industrie",
    text: "Zeichnungsteile und Prototypen für anspruchsvolle industrielle Applikationen.",
  },
];

function ProductCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="group border border-white/[0.06] bg-[var(--color-dark-card)] p-6 hover:border-[var(--color-secondary)]/25 transition-all duration-300">
      <div className="h-px w-6 bg-[var(--color-secondary)]/40 mb-4 group-hover:w-10 transition-all duration-300" />
      <h3 className="font-heading text-base font-bold uppercase tracking-tight text-white mb-2 leading-tight">
        {title}
      </h3>
      <p className="text-xs text-white/45 leading-relaxed font-light">{text}</p>
    </div>
  );
}

export default function ProdukteSeite() {
  return (
    <div className="bg-[var(--color-dark)] min-h-screen">
      {/* Page header */}
      <div className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-[#1a3a5a]/20 blur-[100px]" />
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: `
                linear-gradient(to right, #8fafc4 1px, transparent 1px),
                linear-gradient(to bottom, #8fafc4 1px, transparent 1px)
              `,
              backgroundSize: "72px 72px",
            }}
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-[var(--color-secondary)]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[var(--color-secondary)]">
                Produkte
              </span>
            </div>
            <h1 className="font-heading text-[clamp(3rem,7vw,6rem)] font-bold uppercase tracking-tight text-white leading-none">
              Unser Portfolio
            </h1>
            <p className="mt-6 max-w-2xl text-sm text-white/50 leading-relaxed font-light">
              Bleiprodukte für zwei Welten — medizinischer Strahlenschutz und
              industrielle Fertigung. Standardprodukte und maßgefertigte
              Lösungen aus einer Hand.
            </p>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-secondary)]/15 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-24">
        {/* Medizinische Produkte */}
        <div id="medizin" className="scroll-mt-24">
          <AnimatedSection className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-[var(--color-secondary)]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[var(--color-secondary)]">
                Gesundheit & Schutz
              </span>
            </div>
            <h2 className="font-heading text-[clamp(2rem,5vw,4rem)] font-bold uppercase tracking-tight text-white leading-tight">
              Medizinische Produkte
            </h2>
            <p className="mt-4 max-w-2xl text-sm text-white/45 font-light leading-relaxed">
              Strahlenschutzprodukte für Kliniken, Arztpraxen und
              radiologische Einrichtungen — normkonform, zuverlässig,
              individuell anpassbar.
            </p>
          </AnimatedSection>

          <AnimatedStagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {medizin.map((p, i) => (
              <AnimatedSection key={p.title} animation="slideUp" delay={i * 0.06}>
                <ProductCard title={p.title} text={p.text} />
              </AnimatedSection>
            ))}
          </AnimatedStagger>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

        {/* Industrielle Produkte */}
        <div id="industrie" className="scroll-mt-24">
          <AnimatedSection className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-[var(--color-secondary)]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[var(--color-secondary)]">
                Technik & Fertigung
              </span>
            </div>
            <h2 className="font-heading text-[clamp(2rem,5vw,4rem)] font-bold uppercase tracking-tight text-white leading-tight">
              Industrielle Produkte
            </h2>
            <p className="mt-4 max-w-2xl text-sm text-white/45 font-light leading-relaxed">
              Hochwertige Bleikomponenten für industrielle Anwendungen — von
              Serienteilen bis zur individuellen Sonderanfertigung nach
              Zeichnung.
            </p>
          </AnimatedSection>

          <AnimatedStagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industrie.map((p, i) => (
              <AnimatedSection key={p.title} animation="slideUp" delay={i * 0.06}>
                <ProductCard title={p.title} text={p.text} />
              </AnimatedSection>
            ))}
          </AnimatedStagger>
        </div>

        {/* CTA */}
        <AnimatedSection className="border border-white/[0.07] bg-[var(--color-dark-card)] p-10 lg:p-14">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.3em] text-[var(--color-secondary)] mb-3">
                Nicht das Richtige dabei?
              </div>
              <h3 className="font-heading text-2xl lg:text-3xl font-bold uppercase tracking-tight text-white leading-tight">
                Wir fertigen nach Ihren Vorgaben.
              </h3>
              <p className="mt-3 text-sm text-white/45 font-light max-w-lg">
                Sonderanfertigungen nach Zeichnung, Muster oder technischer
                Beschreibung — sprechen Sie uns an.
              </p>
            </div>
            <Link
              href="/kontakt"
              className="group shrink-0 flex items-center gap-3 bg-[var(--color-secondary)] px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#070c14] transition-all duration-300 hover:bg-white whitespace-nowrap"
            >
              Anfrage stellen
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 duration-300" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
