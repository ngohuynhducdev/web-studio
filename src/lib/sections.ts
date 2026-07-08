// Section lookup helpers shared by all template entry points.
// Pure data logic — safe to import from any template without breaking
// template CSS/style independence.
import type { PageSection } from "@/types";

/** Find a section by Sanity _type — for templates whose section types are unique. */
export function pickType<T extends PageSection>(
  sections: PageSection[],
  type: T["_type"]
): T | undefined {
  return sections.find((s) => s._type === type) as T | undefined;
}

/** Find a section by _key — for templates with duplicate _type (e.g. thai-spa has two aboutSection). */
export function pick<T extends PageSection>(
  sections: PageSection[],
  key: string
): T | undefined {
  return sections.find((s) => s._key === key) as T | undefined;
}

/** A section renders only when present and not explicitly disabled in the CMS. */
export function shown<T extends PageSection>(s: T | undefined): s is T {
  return !!s && s.enabled !== false;
}
