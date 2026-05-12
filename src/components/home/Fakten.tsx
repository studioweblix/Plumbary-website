import { AnimatedItem, AnimatedStagger } from "@/components/ui/AnimatedSection";

const stats = [
  {
    value: "B2B",
    label: "Produktionsbetrieb",
    description: "Auf industrielle Beschaffung, Qualitätssicherung und technische Anfragen ausgerichtet",
  },
  {
    value: "2",
    label: "Getrennte Portfolios",
    description: "Medizinische und industrielle Produkte werden klar getrennt dargestellt",
  },
  {
    value: "ISO",
    label: "Zertifikate",
    description: "Bereich für Normen, Nachweise und Qualitätsdokumente ist vorbereitet",
  },
  {
    value: "Pb",
    label: "Werkstoffkompetenz",
    description: "Fokus auf Blei als Werkstoff: Guss, Halbzeuge, Abschirmung und Sonderteile",
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
          {stats.map((stat) => (
            <AnimatedItem
              key={stat.label}
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
            </AnimatedItem>
          ))}
        </AnimatedStagger>
      </div>
    </section>
  );
}
