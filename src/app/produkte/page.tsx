import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProductGroupsCatalog } from "@/components/products/ProductGroupsCatalog";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Produkte – Plumbary GmbH",
  description:
    "Getrennte Produktbereiche für medizinische und industrielle Bleiprodukte von Plumbary GmbH: Strahlenschutz, Bleigussteile, Bleibleche, Halbzeuge und Sonderanfertigungen.",
};

export default function ProdukteSeite() {
  return (
    <div className="min-h-screen bg-[var(--color-dark)]">
      <div className="relative overflow-hidden pt-40 pb-20">
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
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--color-secondary)]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[var(--color-secondary)]">
                Produkte
              </span>
            </div>
            <h1 className="font-heading text-[clamp(3rem,7vw,6rem)] font-bold uppercase leading-none tracking-tight text-white">
              Unser Portfolio
            </h1>
            <p className="mt-6 max-w-2xl text-sm font-light leading-relaxed text-white/50">
              Medizinische und industrielle Produkte werden getrennt geführt,
              damit Beschaffung, Projektplanung und Qualitätssicherung direkt
              im passenden Produktbereich starten.
            </p>
          </AnimatedSection>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-secondary)]/15 to-transparent" />
      </div>

      <ProductGroupsCatalog />

      <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
        <AnimatedSection className="border border-white/[0.07] bg-[var(--color-dark-card)] p-10 lg:p-14">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.3em] text-[var(--color-secondary)]">
                Nicht das Richtige dabei?
              </div>
              <h3 className="font-heading text-2xl font-bold uppercase leading-tight tracking-tight text-white lg:text-3xl">
                Wir fertigen nach Ihren Vorgaben.
              </h3>
              <p className="mt-3 max-w-lg text-sm font-light text-white/45">
                Sonderanfertigungen nach Zeichnung, Muster oder technischer
                Beschreibung, sprechen Sie uns an.
              </p>
            </div>
            <Link
              href="/kontakt"
              className="group flex shrink-0 items-center gap-3 whitespace-nowrap bg-[var(--color-secondary)] px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#070c14] transition-all duration-300 hover:bg-white"
            >
              Anfrage stellen
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
