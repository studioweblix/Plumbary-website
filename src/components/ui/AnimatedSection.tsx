"use client";

import { type ReactNode } from "react";
import { motion, type Variants } from "framer-motion";

// ── Static motion-component map ─────────────────────────────────────────────
// IMPORTANT: must live outside any render function so React never sees a
// "new" component type between renders (avoids unmount/remount lag).
const M = {
  div:     motion.div,
  section: motion.section,
  article: motion.article,
  li:      motion.li,
  span:    motion.span,
  ul:      motion.ul,
  ol:      motion.ol,
} as const;

// ── Viewport config shared by all instances ──────────────────────────────────
// margin: start animation 80 px before element enters viewport → no visible
// "snap into place" lag. once: true so the observer disconnects after firing.
const VIEWPORT = { once: true, margin: "-80px 0px" } as const;

// ── Variants ──────────────────────────────────────────────────────────────────
const variants: Record<string, Variants> = {
  fadeIn: {
    hidden:  { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideUp: {
    hidden:  { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0 },
  },
  slideLeft: {
    hidden:  { opacity: 0, x: 48 },
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden:  { opacity: 0, x: -48 },
    visible: { opacity: 1, x: 0 },
  },
};

// ── AnimatedSection ───────────────────────────────────────────────────────────
interface AnimatedSectionProps {
  children: ReactNode;
  animation?: keyof typeof variants;
  duration?:  number;
  delay?:     number;
  className?: string;
  as?: keyof typeof M;
}

export function AnimatedSection({
  children,
  animation = "slideUp",
  duration  = 0.55,
  delay     = 0,
  className,
  as        = "div",
}: AnimatedSectionProps) {
  const Component = M[as];

  return (
    <Component
      variants={variants[animation]}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      // GPU-composite hint so the browser doesn't repaint during the animation
      style={{ willChange: "opacity, transform" }}
      className={className}
    >
      {children}
    </Component>
  );
}

// ── AnimatedItem ─────────────────────────────────────────────────────────────
// Use INSIDE an AnimatedStagger. Has no own whileInView observer — it inherits
// the parent stagger's trigger. This avoids N+1 observer explosion.
interface AnimatedItemProps {
  children:   ReactNode;
  className?: string;
  as?: keyof typeof M;
}

export function AnimatedItem({
  children,
  className,
  as = "div",
}: AnimatedItemProps) {
  const Component = M[as];
  return (
    <Component
      variants={variants.slideUp}
      style={{ willChange: "opacity, transform" }}
      className={className}
    >
      {children}
    </Component>
  );
}

// ── AnimatedStagger ───────────────────────────────────────────────────────────
const staggerVariants: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08 } },
};

interface AnimatedStaggerProps {
  children:   ReactNode;
  className?: string;
  as?: "div" | "section" | "ul" | "ol";
}

export function AnimatedStagger({
  children,
  className,
  as = "div",
}: AnimatedStaggerProps) {
  const Component = M[as];

  return (
    <Component
      variants={staggerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      className={className}
    >
      {children}
    </Component>
  );
}
