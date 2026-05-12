import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Über uns – Plumbary GmbH",
  description:
    "Lernen Sie Plumbary GmbH kennen: Spezialist für Bleiprodukte in Medizin und Industrie. Werkstoffkompetenz, Präzision und Zuverlässigkeit seit Jahrzehnten.",
};

const milestones = [
  { year: "XXXX", label: "Gründung", text: "Plumbary GmbH wird gegründet — der Grundstein für jahrzehntelange Werkstoffkompetenz." },
  { year: "XXXX", label: "Expansion", text: "Ausbau der Produktionskapazitäten und Erschließung neuer Märkte." },
  { year: "XXXX", label: "Zertifizierung", text: "Erlangung relevanter Qualitätszertifizierungen und Erweiterung des Produktportfolios." },
  { year: "Heute", label: "Marktposition", text: "Etablierter Lieferant für medizinische und industrielle Bleiprodukte — national und international." },
];

export default function UeberUnsPage() {
  return (
    <div className="bg-[var(--color-dark)] min-h-screen">
      {/* Page header */}
      <div className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#1a3a5a]/20 blur-[100px]" />
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
                Über uns
              </span>
            </div>
            <h1 className="font-heading text-[clamp(3rem,7vw,6rem)] font-bold uppercase tracking-tight text-white leading-none">
              Plumbary GmbH
            </h1>
            <p className="mt-6 max-w-2xl text-sm text-white/50 leading-relaxed font-light">
              Spezialist für Bleiprodukte in der Medizin- und Industriebranche.
              Gegründet auf dem Fundament tiefer Werkstoffkompetenz und dem
              Anspruch, die verlässlichste Adresse für Bleiverarbeitung zu sein.
            </p>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-secondary)]/15 to-transparent" />
      </div>

      {/* About content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-start mb-24">
          <AnimatedSection animation="slideRight">
            <h2 className="font-heading text-[clamp(1.8rem,4vw,3rem)] font-bold uppercase tracking-tight text-white leading-tight mb-6">
              Unser Unternehmen
            </h2>
            <div className="space-y-5 text-sm text-white/55 leading-relaxed font-light">
              <p>
                Plumbary GmbH ist ein spezialisiertes Unternehmen in der
                Bleiverarbeitung mit Fokus auf medizinische und industrielle
                Anwendungen. Mit unserem umfassenden Werkstoffwissen und
                modernen Fertigungsmethoden entwickeln wir Produkte, die
                höchsten Ansprüchen genügen.
              </p>
              <p>
                Ob Strahlenschutzprodukte für Krankenhäuser und
                Radiologiepraxen oder Bleikomponenten für die chemische
                Industrie, den Akkubau oder den Schallschutz — wir bringen
                die Expertise mit, um anspruchsvolle Anforderungen präzise
                umzusetzen.
              </p>
              <p>
                Als Hersteller und nicht nur als Händler können wir
                Sonderwünsche, Zeichnungsteile und individuelle Lösungen
                direkt in der Produktion realisieren — schnell, zuverlässig
                und mit dem Qualitätsniveau, das unsere Kunden erwarten.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slideLeft" delay={0.15}>
            <div className="border border-white/[0.07] bg-[var(--color-dark-card)] p-8 lg:p-10">
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[var(--color-secondary)]/30 to-transparent" />
              <h3 className="font-heading text-xl font-bold uppercase tracking-tight text-white mb-8">
                Auf einen Blick
              </h3>
              <div className="space-y-5">
                {[
                  { label: "Firmensitz", value: "Deutschland" },
                  { label: "Gründungsjahr", value: "XXXX" },
                  { label: "Mitarbeiter", value: "XX" },
                  { label: "Zertifizierungen", value: "DIN / EN / ISO" },
                  { label: "Märkte", value: "Deutschland & International" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex justify-between items-center py-3 border-b border-white/[0.05] last:border-0"
                  >
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                      {item.label}
                    </span>
                    <span className="text-sm text-white/80 font-light">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Timeline / Milestones */}
        <AnimatedSection className="mb-10">
          <div className="flex items-center gap-3 mb-10">
            <span className="h-px w-8 bg-[var(--color-secondary)]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[var(--color-secondary)]">
              Meilensteine
            </span>
          </div>
        </AnimatedSection>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[88px] top-0 bottom-0 w-px bg-[var(--color-secondary)]/10 hidden md:block" />

          <div className="space-y-8">
            {milestones.map((m, i) => (
              <AnimatedSection
                key={m.year + m.label}
                animation="slideRight"
                delay={i * 0.1}
                className="flex gap-8 items-start"
              >
                <div className="shrink-0 w-20 text-right hidden md:block">
                  <span className="font-heading text-[11px] font-bold uppercase tracking-widest text-[var(--color-secondary)]/60">
                    {m.year}
                  </span>
                </div>
                <div className="hidden md:flex shrink-0 items-center justify-center mt-0.5">
                  <div className="h-2 w-2 rounded-full border border-[var(--color-secondary)]/50 bg-[var(--color-dark)]" />
                </div>
                <div className="border border-white/[0.06] bg-[var(--color-dark-card)] px-6 py-5 flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--color-secondary)]">
                      {m.label}
                    </span>
                    <span className="md:hidden text-[10px] text-white/30">
                      {m.year}
                    </span>
                  </div>
                  <p className="text-sm text-white/50 font-light leading-relaxed">
                    {m.text}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* CTA */}
        <AnimatedSection className="mt-20 pt-16 border-t border-white/[0.06] text-center">
          <p className="text-sm text-white/40 font-light mb-6">
            Überzeugen Sie sich selbst — sprechen Sie uns an.
          </p>
          <Link
            href="/kontakt"
            className="group inline-flex items-center gap-3 bg-[var(--color-secondary)] px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#070c14] hover:bg-white transition-colors duration-300"
          >
            Kontakt aufnehmen
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 duration-300" />
          </Link>
        </AnimatedSection>
      </div>
    </div>
  );
}
