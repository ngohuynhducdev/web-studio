"use client";

import { m } from "motion/react";
import type { Variants } from "motion/react";
import type { ReactNode } from "react";

// Gentle easeOut — slow finish, no abrupt stop. Shared by every reveal so the
// whole page moves with one consistent feel.
const EASE = [0.22, 1, 0.36, 1] as const;
const DURATION = 0.6;
const DISTANCE = 18; // px the content rises while fading in

/**
 * Single-element reveal: fades + lifts its children into view once.
 *
 * - Standalone blocks (a section head, the hero columns) → use this directly.
 * - For a grid/list that should reveal as one staggered wave, use
 *   <RevealStagger> + <RevealItem> instead — that fires ONE viewport trigger
 *   for the whole group, which feels far smoother than each card triggering
 *   its own observer at slightly different scroll positions.
 *
 * `immediate` plays on mount instead of on scroll — use it above the fold
 * (hero) so the entrance is reliable and never waits on an observer.
 *
 * Motion is rendered client-side; `children` stays server-rendered.
 * OS "reduce motion" is honoured globally via MotionProvider.
 */
export default function Reveal({
  children,
  delay = 0,
  className,
  immediate = false,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  immediate?: boolean;
}) {
  const target = {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION, delay, ease: EASE },
  };

  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y: DISTANCE }}
      {...(immediate
        ? { animate: target }
        : { whileInView: target, viewport: { once: true, amount: 0.3 } })}
    >
      {children}
    </m.div>
  );
}

// ── Staggered group ──────────────────────────────────────────────────────────

const groupVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: DISTANCE },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION, ease: EASE },
  },
};

/**
 * Container that reveals its <RevealItem> children as one coherent wave.
 * Render it AS the grid/list element (pass the grid className) so no extra
 * wrapper is introduced and the existing layout is untouched.
 */
export function RevealStagger({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <m.div
      className={className}
      variants={groupVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </m.div>
  );
}

/**
 * A single staggered child. Inherits timing from its <RevealStagger> parent.
 * Pass `className="grid"` when used as a grid cell so the card inside still
 * stretches to equal height.
 */
export function RevealItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <m.div className={className} variants={itemVariants}>
      {children}
    </m.div>
  );
}
