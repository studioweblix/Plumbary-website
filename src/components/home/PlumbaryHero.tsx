"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

// ── Animation variants ──────────────────────────────────────────
const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1, ease: "easeOut" as const } },
};

const expandLine: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  show: { scaleX: 1, opacity: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

// ── Component ───────────────────────────────────────────────────
export function PlumbaryHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#060d18]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_24%,rgba(143,175,196,0.10),transparent_32%),linear-gradient(135deg,#030912_0%,#08131f_48%,#030912_100%)]" />
        <div
          className="absolute inset-0 opacity-[0.055]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #8fafc4 1px, transparent 1px),
              linear-gradient(to bottom, #8fafc4 1px, transparent 1px)
            `,
            backgroundSize: "72px 72px",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            backgroundSize: "128px 128px",
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#060d18] to-transparent" />
      </div>

      {/* ── Ghost "82" – atomic number of lead, decorative ─────────── */}
      <div
        className="absolute right-[-3%] bottom-[-4%] pointer-events-none select-none"
        aria-hidden
      >
        <span
          className="font-heading font-black leading-none"
          style={{
            fontSize: "clamp(260px, 40vw, 600px)",
            color: "transparent",
            WebkitTextStroke: "1.2px rgba(143,175,196,0.05)",
          }}
        >
          82
        </span>
      </div>

      {/* ── Vertical accent label (far left, rotated) ─────────────── */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="show"
        className="absolute left-6 top-1/2 -translate-y-1/2 hidden xl:flex items-center gap-2"
        style={{ transformOrigin: "center" }}
        aria-hidden
      >
        <span
          className="font-body font-semibold uppercase text-[var(--color-secondary)]/25 tracking-[0.4em]"
          style={{
            fontSize: 9,
            writingMode: "vertical-rl",
            textOrientation: "mixed",
            transform: "rotate(180deg)",
            letterSpacing: "0.45em",
          }}
        >
          Blei · Pb · Element 82
        </span>
        <span className="block w-px bg-[var(--color-secondary)]/15" style={{ height: 80 }} />
      </motion.div>

      {/* ── Main content ──────────────────────────────────────────── */}
      <div className="relative z-10 w-full mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 pt-40 pb-36">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-[900px] text-center"
        >
          {/* Kicker */}
          <motion.div variants={fadeUp} className="mb-4">
            <span
              className="font-body font-semibold uppercase text-[var(--color-secondary)]/60"
              style={{ fontSize: "clamp(0.8rem, 1.4vw, 1.1rem)", letterSpacing: "0.32em" }}
            >
          Produktionsbetrieb · Bleigießerei
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={fadeUp} className="mb-0">
            {/* PLUMBARY – dominant */}
            <span
              className="block font-heading font-black uppercase leading-[0.9] text-white"
              style={{
                fontSize: "clamp(3.6rem, 9.5vw, 10rem)",
                letterSpacing: "-0.025em",
              }}
            >
              PLUMBARY GmbH
            </span>
          </motion.h1>

          {/* Gradient rule */}
          <motion.div variants={expandLine} className="my-5 origin-center">
            <div
              className="mx-auto h-px"
              style={{
                width: "clamp(180px, 36vw, 520px)",
                background:
                  "linear-gradient(to right, var(--color-secondary) 0%, rgba(143,175,196,0.25) 60%, transparent 100%)",
              }}
            />
          </motion.div>

          {/* GmbH sub-line */}
          <motion.div variants={fadeUp} className="mb-10 flex flex-wrap items-center justify-center gap-3">
            <span
              className="font-body font-medium uppercase text-white/22"
              style={{
                fontSize: "clamp(0.62rem, 1vw, 0.95rem)",
                letterSpacing: "0.28em",
              }}
            >
              Medizinische und industrielle Bleiprodukte
            </span>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mx-auto mb-10 max-w-2xl text-sm font-light leading-relaxed text-white/52 sm:text-base"
          >
            Strukturierte B2B-Produktion für Bleikomponenten: klare Trennung
            zwischen medizinischen Strahlenschutzprodukten und industriellen
            Anwendungen, mit Fokus auf Produktportfolio, Qualität und
            Zertifizierungen.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-3.5"
          >
            <Link
              href="/produkte#medizin"
              className="group inline-flex items-center gap-2.5 bg-[var(--color-secondary)] px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#040b14] transition-all duration-300 hover:bg-white"
            >
              Medizinische Produkte
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/produkte#industrie"
              className="inline-flex items-center gap-2.5 border border-white/18 px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/55 transition-all duration-300 hover:border-white/35 hover:text-white"
            >
              Industrielle Produkte
            </Link>
          </motion.div>
        </motion.div>

        {/* ── Stats strip ────────────────────────────────────────── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mx-auto mt-20 flex max-w-5xl flex-wrap justify-center gap-x-12 gap-y-4 border-t border-white/[0.06] pt-8"
        >
          {[
            { value: "B2B", label: "Produktionsbetrieb" },
            { value: "2", label: "Getrennte Märkte" },
            { value: "ISO", label: "Zertifikate vorbereitet" },
            { value: "Pb", label: "Werkstoff-Fokus" },
          ].map(({ value, label }) => (
            <div key={label} className="flex items-baseline gap-2">
              <span
                className="font-heading font-bold text-white"
                style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.6rem)", letterSpacing: "-0.01em" }}
              >
                {value}
              </span>
              <span
                className="font-body text-white/30 uppercase"
                style={{ fontSize: 10, letterSpacing: "0.22em" }}
              >
                {label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute right-8 bottom-10 hidden items-center gap-3 text-white/20 lg:flex">
        <ShieldCheck className="h-4 w-4 text-[var(--color-secondary)]/45" />
        <span className="text-[10px] font-bold uppercase tracking-[0.25em]">
          Produkte · Qualität · Zertifikate
        </span>
      </div>

      {/* ── Diagonal bottom edge ─────────────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ height: 80 }}>
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 w-full h-full"
          aria-hidden
        >
          <polygon points="0,80 1440,12 1440,80" fill="#0d1520" />
        </svg>
      </div>
    </section>
  );
}
