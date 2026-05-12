import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

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
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20 items-center">
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
                Plumbary GmbH ist ein spezialisierter Hersteller von
                Bleiprodukten für medizinische und industrielle Anwendungen.
                Mit tiefem Werkstoffwissen und modernen Fertigungsverfahren
                entwickeln und produzieren wir Lösungen, die höchsten
                Anforderungen an Präzision, Qualität und Normkonformität
                gerecht werden.
              </p>
              <p>
                Von der ersten Beratung über die konstruktive Auslegung bis zur
                termingerechten Lieferung — wir begleiten unsere Kunden durch
                den gesamten Prozess und stehen für zuverlässige Partnerschaft
                auf Augenhöhe.
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

          {/* Right: Photo */}
          <AnimatedSection animation="slideLeft" delay={0.15}>
            <div className="relative">
              {/* Main image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <Image
                  src="/images/factory-workers.png"
                  alt="Gießereifachleute beim Metallguss in der Plumbary Produktion"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Subtle vignette */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-black/30" />

                {/* Caption overlay – bottom left */}
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/70 to-transparent">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/60">
                    Produktion · Bleigießerei
                  </p>
                </div>
              </div>

              {/* Offset accent frame */}
              <div className="absolute -bottom-3 -right-3 inset-0 border border-[var(--color-secondary)]/15 -z-10 pointer-events-none" />

              {/* Stat badge – overlapping corner */}
              <div className="absolute -bottom-5 -left-5 border border-[var(--color-secondary)]/25 bg-[var(--color-dark-card)] px-5 py-4 hidden sm:block">
                <div className="font-heading text-3xl font-bold text-white leading-none">
                  100%
                </div>
                <div className="text-[9px] font-bold uppercase tracking-[0.25em] text-[var(--color-secondary)]/70 mt-1">
                  Made in Germany
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
