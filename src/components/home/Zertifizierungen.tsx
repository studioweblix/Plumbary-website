import Link from "next/link";
import { ArrowRight, FileCheck } from "lucide-react";
import { AnimatedItem, AnimatedSection, AnimatedStagger } from "@/components/ui/AnimatedSection";

const certificates = [
  {
    title: "ISO 9001",
    status: "Platzhalter",
    text: "Qualitätsmanagement und dokumentierte Prozesse für industrielle Lieferketten.",
  },
  {
    title: "Medizinische Normen",
    status: "Platzhalter",
    text: "Nachweise für Strahlenschutz, Materialanforderungen und projektbezogene Dokumentation.",
  },
  {
    title: "Werkstoffnachweise",
    status: "Platzhalter",
    text: "Materialzeugnisse, Prüfberichte und chargenbezogene Unterlagen für Bleiprodukte.",
  },
  {
    title: "Sonderfreigaben",
    status: "Platzhalter",
    text: "Kundenspezifische Audits, Prüfpläne und technische Freigaben können ergänzt werden.",
  },
];

export function Zertifizierungen() {
  return (
    <section id="zertifikate" className="relative scroll-mt-24 overflow-hidden bg-[var(--color-dark-surface)] py-24 lg:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-secondary)]/20 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <AnimatedSection>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--color-secondary)]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[var(--color-secondary)]">
                Qualität & Zertifikate
              </span>
            </div>
            <h2 className="font-heading text-[clamp(2rem,5vw,3.8rem)] font-bold uppercase leading-tight tracking-tight text-white">
              Nachweise sichtbar.
              <br />
              <span className="text-white/40">Vertrauen prüfbar.</span>
            </h2>
            <p className="mt-6 max-w-md text-sm font-light leading-relaxed text-white/48">
              Für einen Produktionsbetrieb sind Zertifikate, Normen und
              Werkstoffnachweise verkaufsrelevant. Dieser Bereich ist bewusst
              als Platzhalter-System vorbereitet: später können echte PDFs,
              Zertifikatsnummern und Gültigkeiten ergänzt werden.
            </p>
            <Link
              href="/kontakt"
              className="mt-9 inline-flex items-center gap-2.5 border border-[var(--color-secondary)]/25 px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-secondary)] transition-all duration-300 hover:border-[var(--color-secondary)]/50 hover:bg-[var(--color-secondary)]/10"
            >
              Zertifikate anfragen
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </AnimatedSection>

          <AnimatedStagger className="grid gap-px bg-white/[0.06] sm:grid-cols-2">
            {certificates.map((certificate) => (
              <AnimatedItem
                key={certificate.title}
                className="group relative min-h-56 bg-[var(--color-dark-card)] p-7 transition-colors duration-300 hover:bg-[#0b1724]"
              >
                <div className="mb-8 flex items-start justify-between gap-4">
                  <FileCheck className="h-7 w-7 text-[var(--color-secondary)]/70" />
                  <span className="border border-white/[0.08] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.22em] text-white/30">
                    {certificate.status}
                  </span>
                </div>
                <h3 className="mb-3 font-heading text-2xl font-bold uppercase leading-tight text-white">
                  {certificate.title}
                </h3>
                <p className="text-sm font-light leading-relaxed text-white/42">
                  {certificate.text}
                </p>
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--color-secondary)]/0 to-transparent transition-all duration-500 group-hover:via-[var(--color-secondary)]/35" />
              </AnimatedItem>
            ))}
          </AnimatedStagger>
        </div>
      </div>
    </section>
  );
}
