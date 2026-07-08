"use client";

import { LazyMotion, domAnimation, MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/**
 * App-wide motion context.
 * - LazyMotion + domAnimation: ships the lightweight feature bundle (~5kb)
 *   instead of the full motion runtime. `strict` forbids the heavy `motion.*`
 *   component — use `m.*` (via the Reveal wrapper) everywhere downstream.
 * - MotionConfig reducedMotion="user": respects the OS "reduce motion"
 *   setting automatically, so no per-component prefers-reduced-motion guard.
 *
 * Server components passed as `children` stay server-rendered — only this
 * provider and the leaf motion components are client.
 */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
