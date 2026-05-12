import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const capabilities = [
  "Bleiguss & Formteile",
  "Blech-, Rohr- und Profilhalbzeuge",
  "Strahlenschutz-Komponenten",
  "Sonderfertigung nach Zeichnung",
  "Dokumentierte Qualitätsprüfung",
  "Projektbezogene Beratung",
];

export function UeberUnsSnippet() {
  return (
    <section className="relative bg-[var(--color-dark)] py-24 lg:py-32 overflow-hidden">
      {/* Decorative Pb symbol */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 opacity-[0.02] pointer-events-none select-none">
        <span className="font-heading text-[28vw] font-bold text-white leading-none">
          Pb
        </span>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 items-center">
          {/* Left: Content */}
          <AnimatedSection animation="slideRight">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-[var(--color-secondary)]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[var(--color-secondary)]">
                Über uns
              </span>
            </div>

            <h2 className="font-heading text-[clamp(2rem,4.5vw,3.5rem)] font-bold uppercase tracking-tight text-white leading-tight mb-8">
              Blei als Werkstoff —
              <br />
              <span className="text-white/40">
                Präzision als Versprechen.
              </span>
            </h2>

            <div className="space-y-5 text-sm text-white/55 leading-relaxed font-light max-w-lg">
              <p>
                Plumbary GmbH wird als produktionsorientierte Bleigießerei
                aufgebaut: Produkte, Fertigungsmöglichkeiten und
                Zertifizierungen stehen im Mittelpunkt. Medizinische und
                industrielle Produktlinien werden bewusst getrennt geführt.
              </p>
              <p>
                Die Website ist so vorbereitet, dass später konkrete
                Produktdaten, Produktbilder, technische Datenblätter und
                Zertifikate ergänzt werden können, ohne die Grundstruktur neu
                aufzubauen.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/ueber-uns"
                className="group inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--color-secondary)] border border-[var(--color-secondary)]/25 px-7 py-3.5 transition-all duration-300 hover:bg-[var(--color-secondary)]/10 hover:border-[var(--color-secondary)]/50"
              >
                Mehr über uns
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </AnimatedSection>

          {/* Right: Capabilities matrix */}
          <AnimatedSection animation="slideLeft" delay={0.15}>
            <div className="relative border border-white/[0.07] bg-[var(--color-dark-card)] p-6 lg:p-8">
              <div
                className="absolute inset-0 opacity-[0.035]"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, #8fafc4 1px, transparent 1px),
                    linear-gradient(to bottom, #8fafc4 1px, transparent 1px)
                  `,
                  backgroundSize: "40px 40px",
                }}
              />
              <div className="relative mb-8 flex items-end justify-between gap-6 border-b border-white/[0.07] pb-6">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--color-secondary)]/70">
                    Produktionsmatrix
                  </div>
                  <h3 className="mt-2 font-heading text-3xl font-bold uppercase leading-none text-white">
                    Capabilities
                  </h3>
                </div>
                <span className="font-heading text-7xl font-black leading-none text-white/[0.04]">
                  Pb
                </span>
              </div>
              <div className="relative grid gap-px bg-white/[0.06] sm:grid-cols-2">
                {capabilities.map((item) => (
                  <div key={item} className="bg-[var(--color-dark-card)] p-5">
                    <div className="mb-3 h-px w-8 bg-[var(--color-secondary)]/45" />
                    <p className="text-sm font-semibold uppercase tracking-[0.08em] text-white/72">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
