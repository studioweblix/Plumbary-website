import { AnimatedSection, AnimatedStagger } from "@/components/ui/AnimatedSection";

const stats = [
  {
    value: "30+",
    label: "Jahre Erfahrung",
    description: "Gegründet auf jahrzehntelanger Expertise in der Bleiverarbeitung",
  },
  {
    value: "2",
    label: "Produktbereiche",
    description: "Medizinische und industrielle Lösungen aus einer Hand",
  },
  {
    value: "100%",
    label: "Made in Germany",
    description: "Produktion und Qualitätskontrolle am Standort Deutschland",
  },
  {
    value: "Int.",
    label: "Lieferfähigkeit",
    description: "Zuverlässige Belieferung nationaler und internationaler Kunden",
  },
];

export function Fakten() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-dark-card)] py-20 lg:py-24">
      {/* Decorative left line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--color-secondary)]/20 to-transparent" />

      {/* Decorative right line */}
      <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--color-secondary)]/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedStagger className="grid grid-cols-2 gap-px lg:grid-cols-4 bg-white/[0.05]">
          {stats.map((stat, i) => (
            <AnimatedSection
              key={stat.label}
              animation="slideUp"
              delay={i * 0.08}
              className="bg-[var(--color-dark-card)] px-6 py-10 lg:px-10"
            >
              <div className="font-heading text-[clamp(2.5rem,5vw,4rem)] font-bold text-white leading-none tracking-tight mb-2">
                {stat.value}
              </div>
              <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--color-secondary)] mb-3">
                {stat.label}
              </div>
              <p className="text-xs text-white/35 leading-relaxed font-light">
                {stat.description}
              </p>
            </AnimatedSection>
          ))}
        </AnimatedStagger>
      </div>
    </section>
  );
}
