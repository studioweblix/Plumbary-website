"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const PRODUCT_GROUPS = [
  {
    id: "strahlenschutz",
    eyebrow: "Medizin",
    title: "Strahlenschutz",
    description: "Bleikomponenten für Radiologie, Therapie und diagnostische Räume.",
    accent: "DIN 6844",
    products: [
      {
        title: "Strahlenschutzwand",
        desc: "Bleiverkleidete Trennwände und Einbauplatten für Röntgen- und Therapieräume.",
        spec: "Wand / Decke",
      },
      {
        title: "Strahlenschutztür",
        desc: "Türen mit Bleieinlagen für strahlenbelastete Bereiche in Klinik und Praxis.",
        spec: "Türsysteme",
      },
      {
        title: "Abschirm-Verbundplatte",
        desc: "Mehrschichtige Platten mit Bleieinlage für Wand- und Deckenmontage.",
        spec: "Verbund",
      },
    ],
  },
  {
    id: "schutzkleidung",
    eyebrow: "Medizin",
    title: "Schutzkleidung",
    description: "Flexible Schutzlösungen für Personal in strahlungsnahen Arbeitsbereichen.",
    accent: "Radiologie",
    products: [
      {
        title: "Bleischürze",
        desc: "Individuelle Strahlenschutzkleidung nach Maß oder in Standardausführung.",
        spec: "Personenschutz",
      },
      {
        title: "Schilddrüsenschutz",
        desc: "Ergänzende Schutzkomponenten für sensible Körperbereiche.",
        spec: "Zubehör",
      },
      {
        title: "Mobile Abschirmung",
        desc: "Verfahrbare Schutzwände für flexible Untersuchungs- und Arbeitsbereiche.",
        spec: "Mobil",
      },
    ],
  },
  {
    id: "gussteile",
    eyebrow: "Industrie",
    title: "Guss & Formteile",
    description: "Präzise Bleigussteile und Sonderformen für technische Anwendungen.",
    accent: "Sonderteile",
    products: [
      {
        title: "Bleigussteile",
        desc: "Präzisionsgussteile aus Rein- oder Legierungsblei für technische Anwendungen.",
        spec: "Guss",
      },
      {
        title: "Gegengewichte",
        desc: "Kompakte Masseteile für Maschinenbau, Vorrichtungen und Sonderkonstruktionen.",
        spec: "Masse",
      },
      {
        title: "Sonderprofile",
        desc: "Anwendungsspezifische Geometrien nach Zeichnung oder technischer Vorgabe.",
        spec: "Nach Zeichnung",
      },
    ],
  },
  {
    id: "halbzeuge",
    eyebrow: "Industrie",
    title: "Halbzeuge",
    description: "Bleibleche, Rohre und Profile für Fertigung, Anlagenbau und Abschirmung.",
    accent: "Material",
    products: [
      {
        title: "Bleiblech",
        desc: "Gewalzte Bleibleche in verschiedenen Stärken für Schallschutz und Abschirmung.",
        spec: "Blech",
      },
      {
        title: "Bleirohre",
        desc: "Nahtlose Bleirohre für chemische Anlagen und technische Rohrleitungsbereiche.",
        spec: "Rohr",
      },
      {
        title: "Schallschutzmatte",
        desc: "Bleibeschwertes Material für Körper- und Luftschalldämmung.",
        spec: "Akustik",
      },
    ],
  },
];

type ProductGroup = (typeof PRODUCT_GROUPS)[number];
type Product = ProductGroup["products"][number];

function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 26, clipPath: "inset(0 0 100% 0)" }}
      animate={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
      exit={{ opacity: 0, y: -16, clipPath: "inset(100% 0 0 0)" }}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden border border-white/[0.07] bg-[var(--color-dark-card)]/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-secondary)]/35"
      style={{ willChange: "opacity, transform, clip-path" }}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-secondary)]/45 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, transparent 0, transparent 11px, #8fafc4 12px), linear-gradient(0deg, transparent 0, transparent 11px, #8fafc4 12px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 mb-7 flex items-start justify-between gap-5">
        <span className="text-[10px] font-bold uppercase tracking-[0.26em] text-[var(--color-secondary)]/70">
          {product.spec}
        </span>
        <span className="font-heading text-5xl font-black leading-none text-white/[0.035]">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="relative z-10">
        <h3 className="mb-3 font-heading text-2xl font-bold uppercase leading-tight tracking-tight text-white">
          {product.title}
        </h3>
        <p className="mb-8 min-h-[4.5rem] text-sm font-light leading-relaxed text-white/45">
          {product.desc}
        </p>
        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--color-secondary)]/75">
          <span className="h-px w-8 bg-[var(--color-secondary)]/35" />
          Produktdetails folgen
        </div>
      </div>
    </motion.article>
  );
}

export function ProductGroupsCatalog() {
  const [activeId, setActiveId] = useState(PRODUCT_GROUPS[0].id);
  const activeGroup = useMemo(
    () => PRODUCT_GROUPS.find((group) => group.id === activeId) ?? PRODUCT_GROUPS[0],
    [activeId],
  );

  useEffect(() => {
    if (window.location.hash === "#industrie") setActiveId("gussteile");
    if (window.location.hash === "#medizin") setActiveId("strahlenschutz");
  }, []);

  return (
    <section className="relative scroll-mt-24 overflow-hidden py-16 lg:py-24" id="produktkatalog">
      <span id="medizin" className="absolute -top-24" aria-hidden />
      <span id="industrie" className="absolute top-1/2" aria-hidden />
      <div className="pointer-events-none absolute right-[-12%] top-16 h-[420px] w-[420px] rounded-full bg-[var(--color-secondary)]/[0.035] blur-[90px]" />

      <div className="relative mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[340px_1fr] lg:px-8">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <div className="mb-8">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--color-secondary)]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[var(--color-secondary)]">
                Produktkatalog
              </span>
            </div>
            <h2 className="font-heading text-[clamp(2rem,4vw,3.4rem)] font-bold uppercase leading-tight tracking-tight text-white">
              Erst Markt wählen.
            </h2>
            <p className="mt-4 text-xs font-semibold uppercase leading-relaxed tracking-[0.18em] text-white/35">
              Medizin und Industrie sind getrennt, damit Beschaffer nur die
              relevanten Produktgruppen sehen.
            </p>
          </div>

          <div className="border border-white/[0.07] bg-[var(--color-dark-card)]/65 p-3">
            {PRODUCT_GROUPS.map((group, index) => {
              const active = group.id === activeId;
              return (
                <button
                  key={group.id}
                  type="button"
                  onClick={() => setActiveId(group.id)}
                  className={`group relative w-full overflow-hidden border px-5 py-5 text-left transition-all duration-300 ${
                    active
                      ? "border-[var(--color-secondary)]/35 bg-[var(--color-secondary)]/[0.055]"
                      : "border-transparent hover:border-white/[0.08] hover:bg-white/[0.025]"
                  }`}
                >
                  <span
                    className={`absolute left-0 top-0 h-full w-px transition-colors duration-300 ${
                      active ? "bg-[var(--color-secondary)]" : "bg-white/[0.06]"
                    }`}
                  />
                  <div className="mb-2 flex items-center justify-between gap-4">
                    <span className="text-[9px] font-bold uppercase tracking-[0.28em] text-[var(--color-secondary)]/65">
                      {group.eyebrow}
                    </span>
                    <span className="font-heading text-sm font-bold text-white/20">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-heading text-xl font-bold uppercase leading-none tracking-tight text-white">
                      {group.title}
                    </span>
                    <ArrowRight
                      className={`h-4 w-4 shrink-0 transition-all duration-300 ${
                        active
                          ? "translate-x-0 text-[var(--color-secondary)]"
                          : "-translate-x-1 text-white/20 group-hover:translate-x-0 group-hover:text-white/45"
                      }`}
                    />
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-white/35">
                    {group.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        <div className="relative min-h-[520px] overflow-hidden border border-white/[0.07] bg-[#07101b]/70 p-5 sm:p-7 lg:p-9">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #8fafc4 1px, transparent 1px), linear-gradient(to bottom, #8fafc4 1px, transparent 1px)",
              backgroundSize: "52px 52px",
            }}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeGroup.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="relative z-10"
            >
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="mb-8 flex flex-col gap-4 border-b border-white/[0.07] pb-8 sm:flex-row sm:items-end sm:justify-between"
              >
                <div>
                  <div className="mb-3 inline-flex items-center gap-2 border border-[var(--color-secondary)]/20 px-3 py-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-secondary)]/60" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--color-secondary)]/70">
                      {activeGroup.accent}
                    </span>
                  </div>
                  <h3 className="font-heading text-[clamp(2rem,5vw,4.3rem)] font-black uppercase leading-[0.9] tracking-tight text-white">
                    {activeGroup.title}
                  </h3>
                </div>
                <p className="max-w-sm text-sm font-light leading-relaxed text-white/42">
                  {activeGroup.description}
                </p>
              </motion.div>

              <div className="grid gap-4 md:grid-cols-3">
                {activeGroup.products.map((product, index) => (
                  <ProductCard key={product.title} product={product} index={index} />
                ))}
              </div>

              <motion.div
                aria-hidden
                initial={{ x: "-120%", opacity: 0 }}
                animate={{ x: "120%", opacity: [0, 0.5, 0] }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-[var(--color-secondary)]/10 to-transparent"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
