"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const PRODUCTS = [
  {
    id: 1,
    category: "Medizin",
    title: "Strahlenschutzwand",
    desc: "Bleiverkleidete Trennwände und Einbauplatten für Röntgen- und Strahlentherapieräume nach DIN 6844.",
    image: null as string | null,
  },
  {
    id: 2,
    category: "Medizin",
    title: "Bleischürze",
    desc: "Individuelle Strahlenschutzkleidung für Radiologie und Therapie, nach Maß oder in Standardausführung.",
    image: null as string | null,
  },
  {
    id: 3,
    category: "Industrie",
    title: "Bleigussteile",
    desc: "Präzisionsgussteile aus Rein- oder Legierungsblei für technische Anwendungen aller Art.",
    image: null as string | null,
  },
  {
    id: 4,
    category: "Medizin",
    title: "Strahlenschutztür",
    desc: "Türen mit Bleieinlagen nach DIN 6844 für strahlenbelastete Bereiche in Klinik und Praxis.",
    image: null as string | null,
  },
  {
    id: 5,
    category: "Industrie",
    title: "Bleiblech",
    desc: "Gewalzte Bleibleche in verschiedenen Stärken für Schallschutz, Abschirmung und Sonderkonstruktionen.",
    image: null as string | null,
  },
  {
    id: 6,
    category: "Industrie",
    title: "Bleirohre & Profile",
    desc: "Nahtlose Bleirohre und Extrusionsprofile für chemische Anlagen und den Rohrleitungsbau.",
    image: null as string | null,
  },
  {
    id: 7,
    category: "Medizin",
    title: "Abschirm-Verbundplatte",
    desc: "Mehrschichtige Verbundplatten mit Bleieinlage für Wand- und Deckenmontage in strahlungsexponierten Räumen.",
    image: null as string | null,
  },
  {
    id: 8,
    category: "Industrie",
    title: "Schallschutzmatte",
    desc: "Bleibeschwertes EPDM für wirksame Körper- und Luftschalldämmung im Hoch- und Industriebau.",
    image: null as string | null,
  },
];

const CARD_W = 292;
const CARD_H_IMG = 200;

function ProductCard({ product }: { product: (typeof PRODUCTS)[number] }) {
  const isMedizin = product.category === "Medizin";

  return (
    <div
      className="group relative shrink-0 select-none overflow-hidden border border-white/[0.07] bg-[var(--color-dark-card)] transition-all duration-400 hover:border-[var(--color-secondary)]/30"
      style={{ width: CARD_W }}
    >
      <div className="absolute top-0 left-0 right-0 z-10 h-px bg-gradient-to-r from-transparent via-[var(--color-secondary)]/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div
        className="relative overflow-hidden bg-[var(--color-dark-surface)]"
        style={{ height: CARD_H_IMG }}
      >
        {product.image ? (
          <Image
            src={product.image}
            alt={product.title}
            fill
            draggable={false}
            className="pointer-events-none object-cover object-center transition-transform duration-600 group-hover:scale-105"
            sizes="292px"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: `
                  linear-gradient(to right, #8fafc4 1px, transparent 1px),
                  linear-gradient(to bottom, #8fafc4 1px, transparent 1px)
                `,
                backgroundSize: "28px 28px",
              }}
            />
            <span className="pointer-events-none select-none font-heading text-[64px] font-bold leading-none text-white/[0.05]">
              Pb
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/20">
              Produktbild folgt
            </span>
          </div>
        )}

        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[var(--color-dark-card)] to-transparent" />
      </div>

      <div className="p-6">
        <span
          className={`mb-4 inline-flex items-center gap-1.5 border px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.28em] ${
            isMedizin
              ? "border-[var(--color-secondary)]/25 text-[var(--color-secondary)]/80"
              : "border-white/15 text-white/40"
          }`}
        >
          {isMedizin ? (
            <svg viewBox="0 0 10 10" fill="currentColor" className="h-2 w-2 shrink-0">
              <circle cx="5" cy="5" r="2" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 10 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-2 w-2 shrink-0"
            >
              <rect x="1.5" y="1.5" width="7" height="7" />
            </svg>
          )}
          {product.category}
        </span>

        <h3 className="mb-3 font-heading text-xl font-bold uppercase leading-tight tracking-tight text-white">
          {product.title}
        </h3>

        <p className="mb-6 line-clamp-3 text-xs font-light leading-relaxed text-white/45">
          {product.desc}
        </p>

        <Link
          href={`/produkte#${isMedizin ? "medizin" : "industrie"}`}
          className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-secondary)]/70 transition-colors duration-200 hover:text-[var(--color-secondary)]"
          tabIndex={-1}
        >
          Details
          <ArrowRight className="h-3 w-3" />
        </Link>
      </div>
    </div>
  );
}

const GAP = 16;
const SPEED = 48;
const SINGLE_PASS = PRODUCTS.length * (CARD_W + GAP);

export function ProductKatalog() {
  const x = useMotionValue(0);
  const isDragging = useRef(false);
  const pointerStart = useRef({ clientX: 0, motionX: 0 });

  function handlePointerDown(e: React.PointerEvent<HTMLDivElement>) {
    isDragging.current = true;
    pointerStart.current = { clientX: e.clientX, motionX: x.get() };
    e.currentTarget.setPointerCapture(e.pointerId);
  }

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (!isDragging.current) return;
    const delta = e.clientX - pointerStart.current.clientX;
    let next = pointerStart.current.motionX + delta;
    if (next > 0) next -= SINGLE_PASS;
    if (next < -SINGLE_PASS) next += SINGLE_PASS;
    x.set(next);
  }

  function handlePointerUp() {
    isDragging.current = false;
  }

  useAnimationFrame((_, delta) => {
    if (isDragging.current) return;
    let next = x.get() - (SPEED * delta) / 1000;
    if (next < -SINGLE_PASS) next += SINGLE_PASS;
    x.set(next);
  });

  const doubled = [...PRODUCTS, ...PRODUCTS];

  return (
    <section className="relative overflow-hidden bg-[var(--color-dark)] py-20 lg:py-24">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="mx-auto mb-12 max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="flex items-end justify-between gap-4">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[var(--color-secondary)]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[var(--color-secondary)]">
                  Produktkatalog
                </span>
              </div>
              <h2 className="font-heading text-[clamp(1.8rem,4vw,3rem)] font-bold uppercase leading-tight tracking-tight text-white">
                Ausgewählte Produkte
              </h2>
            </div>
            <Link
              href="/produkte"
              className="mb-1 hidden shrink-0 items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white/40 transition-colors duration-200 hover:text-white sm:inline-flex"
            >
              Alle ansehen
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </AnimatedSection>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-20 bg-gradient-to-r from-[var(--color-dark)] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-20 bg-gradient-to-l from-[var(--color-dark)] to-transparent" />

        <motion.div
          style={{ x }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          className="flex cursor-grab active:cursor-grabbing"
        >
          <div className="flex" style={{ gap: GAP, paddingLeft: 32, paddingRight: 32 }}>
            {doubled.map((product, i) => (
              <ProductCard key={`${product.id}-${i}`} product={product} />
            ))}
          </div>
        </motion.div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-2 opacity-40">
        <svg viewBox="0 0 20 12" fill="none" className="h-3 w-5">
          <path
            d="M1 6h18M13 1l5 5-5 5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/50">
          Ziehen zum Blättern
        </span>
        <svg viewBox="0 0 20 12" fill="none" className="h-3 w-5 scale-x-[-1]">
          <path
            d="M1 6h18M13 1l5 5-5 5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
