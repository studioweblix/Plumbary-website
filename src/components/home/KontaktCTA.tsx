import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function KontaktCTA() {
  return (
    <section className="relative bg-[var(--color-dark)] py-24 lg:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[800px] rounded-full bg-[#0e2a45]/30 blur-[140px]" />
      </div>

      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-secondary)]/25 to-transparent" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <div className="flex items-center justify-center gap-3 mb-7">
            <span className="h-px w-8 bg-[var(--color-secondary)]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[var(--color-secondary)]">
              Kontakt
            </span>
            <span className="h-px w-8 bg-[var(--color-secondary)]" />
          </div>

          <h2 className="font-heading text-[clamp(2.5rem,6vw,5rem)] font-bold uppercase tracking-tight text-white leading-tight mb-6">
            Bereit für Ihr Projekt?
          </h2>

          <p className="mx-auto max-w-xl text-sm text-white/50 leading-relaxed font-light mb-12">
            Schildern Sie uns Ihre Anforderungen — wir beraten Sie kompetent
            und erstellen Ihnen ein individuelles Angebot. Medizin oder
            Industrie, Sonderteil oder Serienprodukt.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/kontakt"
              className="group flex items-center gap-3 bg-[var(--color-secondary)] px-9 py-4.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#070c14] transition-all duration-300 hover:bg-white"
            >
              <Mail className="h-4 w-4 shrink-0" />
              Anfrage stellen
              <ArrowRight className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <a
              href="mailto:info@plumbary.de"
              className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors duration-300"
            >
              info@plumbary.de
            </a>
          </div>
        </AnimatedSection>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-secondary)]/15 to-transparent" />
    </section>
  );
}
