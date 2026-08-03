/**
 * Marker class on every reveal wrapper.
 *
 * Reveal's `initial` style is server-rendered, so the HTML ships with
 * `opacity: 0` baked in and the content only appears once motion hydrates. If
 * JS never runs the page renders blank — on /contact that hides the phone
 * number and Zalo link, which are exactly what someone falls back to.
 *
 * The <noscript> block in app/layout.tsx overrides this class back to visible.
 * It has to be a class rather than an attribute selector because the hidden
 * state is an inline style, and only `!important` on a real selector beats it.
 *
 * Kept in its own module (no "use client") so the server layout can import it
 * without pulling the motion components into its graph.
 */
export const REVEAL_CLASS = "reveal-root";

/** Prefixes the marker class onto a caller-supplied className. */
export function withReveal(className?: string) {
  return className ? `${REVEAL_CLASS} ${className}` : REVEAL_CLASS;
}
