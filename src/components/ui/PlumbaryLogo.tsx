"use client";

import { useId } from "react";

export type LogoVariant = "mark" | "stacked" | "horizontal";

interface PlumbaryLogoProps {
  variant?: LogoVariant;
  className?: string;
  /** Rendered height of the pb mark in px */
  markHeight?: number;
}

// ─────────────────────────────────────────────────────────────────────────────
// PbMark – SVG geometry based on the second reference:
// custom "pb" letterforms instead of font text. The bowls are deliberately
// D-shaped/oval, not circular, so the counters do not read like generic "o"s.
// ─────────────────────────────────────────────────────────────────────────────
function PbMark({
  size,
  className,
}: {
  size: number;
  className?: string;
}) {
  const raw = useId();
  const uid = raw.replace(/:/g, "_");
  const mId = `m_${uid}`;   // metallic gradient
  const sId = `s_${uid}`;   // specular overlay
  const fId = `f_${uid}`;   // drop-shadow filter

  const pStem = "M 4 22 H 18 V 82 L 4 91 Z";
  const bStem = "M 67 10 L 82 4 V 91 H 67 Z";
  const pBowl = [
    "M 17 22 H 43",
    "C 59 22 70 31.5 70 44",
    "C 70 56.5 59 66 43 66",
    "H 17 Z",
    "M 31 35 H 42",
    "C 50.5 35 56 38.6 56 44",
    "C 56 49.4 50.5 53 42 53",
    "H 31",
    "C 23 53 18.5 49.4 18.5 44",
    "C 18.5 38.6 23 35 31 35 Z",
  ].join(" ");
  const bBowl = [
    "M 81 46 H 105",
    "C 121 46 130 55.5 130 68",
    "C 130 80.5 121 91 105 91",
    "H 81 Z",
    "M 94 59 H 104",
    "C 112 59 117 62.7 117 68",
    "C 117 73.3 112 77 104 77",
    "H 94",
    "C 86.8 77 82.5 73.3 82.5 68",
    "C 82.5 62.7 86.8 59 94 59 Z",
  ].join(" ");

  return (
    <svg
      viewBox="0 0 130 100"
      height={size}
      width={(size * 130) / 100}
      aria-label="pb"
      className={`select-none block overflow-visible ${className ?? ""}`}
    >
      <defs>
        {/* ── Gunmetal metallic: close to the reference logo, less blue/chrome ── */}
        <linearGradient
          id={mId}
          x1="0" y1="0" x2="130" y2="100"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%"   stopColor="#151a20" />
          <stop offset="8%"   stopColor="#858d95" />   {/* soft brushed highlight */}
          <stop offset="18%"  stopColor="#3f464e" />
          <stop offset="31%"  stopColor="#20262d" />
          <stop offset="45%"  stopColor="#9ca3aa" />   {/* main metal sheen */}
          <stop offset="56%"  stopColor="#545b63" />
          <stop offset="70%"  stopColor="#242a31" />
          <stop offset="84%"  stopColor="#6c747c" />   {/* bevel catchlight */}
          <stop offset="100%" stopColor="#11161c" />
        </linearGradient>

        {/* ── Specular top-left highlight ─────────────────────────────────── */}
        <linearGradient
          id={sId}
          x1="0" y1="0" x2="130" y2="100"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%"  stopColor="#f4f6f8" stopOpacity="0.22" />
          <stop offset="30%" stopColor="#d5d9dd" stopOpacity="0.06" />
          <stop offset="55%" stopColor="#ffffff" stopOpacity="0"    />
        </linearGradient>

        {/* ── Drop shadow ─────────────────────────────────────────────────── */}
        <filter id={fId} x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="2" dy="3" stdDeviation="4" floodColor="#05070a" floodOpacity="0.82" />
        </filter>
      </defs>

      {/* ── Metallic base fill ─────────────────────────────────────────────── */}
      <g fill={`url(#${mId})`} filter={`url(#${fId})`}>
        <path d={pStem} />
        <path fillRule="evenodd" d={pBowl} />
        <path d={bStem} />
        <path fillRule="evenodd" d={bBowl} />
      </g>

      {/* ── Specular highlight overlay ─────────────────────────────────────── */}
      <g fill={`url(#${sId})`} aria-hidden>
        <path d={pStem} />
        <path fillRule="evenodd" d={pBowl} />
        <path d={bStem} />
        <path fillRule="evenodd" d={bBowl} />
      </g>
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Wordmark – PLUMBARY + GmbH rule
// ─────────────────────────────────────────────────────────────────────────────
function Wordmark({
  titleSize,
  subSize,
  align = "left",
}: {
  titleSize: number;
  subSize: number;
  align?: "left" | "center";
}) {
  const center = align === "center";
  return (
    <div className={`flex flex-col leading-none ${center ? "items-center" : ""}`}>
      <span
        className="font-heading font-bold uppercase text-white"
        style={{ fontSize: titleSize, letterSpacing: "0.2em" }}
      >
        PLUMBARY
      </span>
      <div className={`flex items-center gap-1.5 mt-1 ${center ? "justify-center" : ""}`}>
        <span
          className="block h-px bg-[var(--color-secondary)]/50"
          style={{ width: titleSize * 0.5 }}
        />
        <span
          className="font-body font-semibold uppercase text-[var(--color-secondary)]/65"
          style={{ fontSize: subSize, letterSpacing: "0.32em" }}
        >
          GmbH
        </span>
        <span
          className="block h-px bg-[var(--color-secondary)]/50"
          style={{ width: titleSize * 0.5 }}
        />
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Public component
// ─────────────────────────────────────────────────────────────────────────────
export function PlumbaryLogo({
  variant = "stacked",
  className = "",
  markHeight = 72,
}: PlumbaryLogoProps) {
  if (variant === "mark") {
    return (
      <div className={className}>
        <PbMark size={markHeight} />
      </div>
    );
  }

  if (variant === "horizontal") {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <PbMark size={markHeight} />
        <Wordmark
          titleSize={Math.round(markHeight * 0.38)}
          subSize={Math.round(markHeight * 0.16)}
        />
      </div>
    );
  }

  // stacked
  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      <PbMark size={markHeight} />
      <Wordmark
        titleSize={Math.round(markHeight * 0.32)}
        subSize={Math.round(markHeight * 0.14)}
        align="center"
      />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Sub-brand icon bar (footer)
// ─────────────────────────────────────────────────────────────────────────────
export function LogoSubBrands({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className="flex items-center gap-1.5">
        <svg
          viewBox="0 0 16 16" fill="none" stroke="currentColor"
          strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"
          className="h-3.5 w-3.5 text-white/50" aria-hidden
        >
          <path d="M8 1v14" />
          <path d="M5 4c0-1.7 1.3-3 3-3s3 1.3 3 3" />
          <path d="M4 7c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2" />
          <path d="M6 10c-.8 0-2-.6-2-2" />
          <path d="M10 10c.8 0 2-.6 2-2" />
        </svg>
        <span className="text-[8px] font-semibold uppercase tracking-[0.18em] text-white/40 leading-tight">
          Medizinische<br />Produkte
        </span>
      </div>
      <span className="h-6 w-px bg-white/15" />
      <div className="flex items-center gap-1.5">
        <svg
          viewBox="0 0 16 16" fill="none" stroke="currentColor"
          strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"
          className="h-3.5 w-3.5 text-white/50" aria-hidden
        >
          <circle cx="8" cy="8" r="2" />
          <path d="M8 1v1.5M8 13.5V15M1 8h1.5M13.5 8H15M3.05 3.05l1.06 1.06M11.89 11.89l1.06 1.06M3.05 12.95l1.06-1.06M11.89 4.11l1.06-1.06" />
        </svg>
        <span className="text-[8px] font-semibold uppercase tracking-[0.18em] text-white/40 leading-tight">
          Industrielle<br />Produkte
        </span>
      </div>
    </div>
  );
}
