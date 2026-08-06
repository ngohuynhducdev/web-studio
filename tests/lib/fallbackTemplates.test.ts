import { describe, expect, it } from "vitest";
import { FALLBACK_TEMPLATES } from "@/data/homepage";
import { TEMPLATE_MANIFEST } from "@/lib/templates";
// The data-only map, not TEMPLATE_COMPONENTS: the registry imports the template
// components, which call next/font at module scope and cannot load under Vitest.
// Both are keyed by componentKey, so this checks the same thing.
import { DEFAULT_SECTIONS_MAP } from "@/data/templates";

// The catalog (/templates and the homepage grid) reads Sanity and falls back to
// this list, so on an empty dataset it IS the catalog. Coverage is already
// pinned at compile time by `satisfies Record<TemplateSlug, ...>`; what a type
// cannot check is the derivation — the slug has to reach `slug`, `componentKey`
// and `_id`, and key order has to survive as display order.
describe("FALLBACK_TEMPLATES", () => {
  it("carries every template in the manifest", () => {
    expect(FALLBACK_TEMPLATES.map((t) => t.slug).sort()).toEqual(
      TEMPLATE_MANIFEST.map((t) => t.slug).slice().sort()
    );
  });

  it("derives a componentKey that resolves to a real template", () => {
    for (const t of FALLBACK_TEMPLATES) {
      expect(t.componentKey).toBe(t.slug);
      expect(DEFAULT_SECTIONS_MAP[t.componentKey!]?.length).toBeGreaterThan(0);
    }
  });

  it("gives each card a stable, unique React key", () => {
    const ids = FALLBACK_TEMPLATES.map((t) => t._id);
    expect(new Set(ids).size).toBe(ids.length);
    expect(ids).toEqual(FALLBACK_TEMPLATES.map((t) => t.slug));
  });

  it("leads with the featured template", () => {
    // Display order is the record's key order, which is easy to disturb without
    // noticing — the featured one is meant to open the catalog.
    expect(FALLBACK_TEMPLATES[0].isFeatured).toBe(true);
    expect(FALLBACK_TEMPLATES.filter((t) => t.isFeatured)).toHaveLength(1);
  });

  it("is renderable: every card has the copy and image the grid needs", () => {
    for (const t of FALLBACK_TEMPLATES) {
      expect(t.title).toBeTruthy();
      expect(t.description).toBeTruthy();
      expect(t.industry).toBeTruthy();
      expect(t.thumbnailUrl).toMatch(/^https:\/\//);
      expect(t.isActive).toBe(true);
    }
  });
});
