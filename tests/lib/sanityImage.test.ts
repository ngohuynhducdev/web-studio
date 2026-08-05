import { describe, expect, it } from "vitest";
import { sanityImageUrl } from "@/lib/sanityImage";

const URL_ = "https://cdn.sanity.io/images/p/production/abc-1920x2880.jpg";
const BOX = { width: 800, height: 600 };

/** Read the query string back as a plain object. */
function params(url: string | undefined) {
  return Object.fromEntries(new URLSearchParams(url!.split("?")[1]));
}

describe("sanityImageUrl", () => {
  it("returns undefined when there is no image to build from", () => {
    expect(sanityImageUrl(undefined, BOX)).toBeUndefined();
    expect(sanityImageUrl(null, BOX)).toBeUndefined();
    expect(sanityImageUrl({}, BOX)).toBeUndefined();
  });

  it("asks the CDN for the exact box, so CSS has nothing left to crop", () => {
    expect(params(sanityImageUrl({ url: URL_ }, BOX))).toMatchObject({
      w: "800",
      h: "600",
      fit: "crop",
    });
  });

  it("leaves the crop centred when the editor set no hotspot", () => {
    expect(params(sanityImageUrl({ url: URL_ }, BOX))).not.toHaveProperty("fp-x");
  });

  it("crops around the hotspot the editor set", () => {
    const p = params(
      sanityImageUrl({ url: URL_, hotspot: { x: 0.25, y: 0.8 } }, BOX)
    );
    expect(p).toMatchObject({ crop: "focalpoint", "fp-x": "0.25", "fp-y": "0.8" });
  });

  it("turns the crop tool's edge fractions into a rect", () => {
    const p = params(
      sanityImageUrl(
        {
          url: URL_,
          crop: { top: 0.25, bottom: 0.25, left: 0, right: 0 },
          dimensions: { width: 1920, height: 2880 },
        },
        BOX
      )
    );
    // Half the height, starting a quarter of the way down.
    expect(p.rect).toBe("0,720,1920,1440");
  });

  it("skips the rect when the projection carries no dimensions to measure against", () => {
    const p = params(
      sanityImageUrl(
        { url: URL_, crop: { top: 0.25, bottom: 0.25, left: 0, right: 0 } },
        BOX
      )
    );
    expect(p).not.toHaveProperty("rect");
  });

  // Sanity stores the hotspot against the whole image; the CDN reads it
  // against `rect`. Without rebasing, a hotspot inside a cropped band lands
  // somewhere else entirely.
  it("rebases the hotspot onto the rect when both are set", () => {
    const p = params(
      sanityImageUrl(
        {
          url: URL_,
          hotspot: { x: 0.5, y: 0.5 },
          crop: { top: 0.25, bottom: 0.25, left: 0, right: 0 },
          dimensions: { width: 1920, height: 2880 },
        },
        BOX
      )
    );
    // The image's midpoint is the midpoint of the middle band too.
    expect(p["fp-y"]).toBe("0.5");

    const low = params(
      sanityImageUrl(
        {
          url: URL_,
          hotspot: { x: 0.5, y: 0.625 },
          crop: { top: 0.25, bottom: 0.25, left: 0, right: 0 },
          dimensions: { width: 1920, height: 2880 },
        },
        BOX
      )
    );
    // 0.625 of the image is 0.75 of the band it now sits in.
    expect(low["fp-y"]).toBe("0.75");
  });

  it("clamps a hotspot that the crop cut away", () => {
    const p = params(
      sanityImageUrl(
        {
          url: URL_,
          hotspot: { x: 0.5, y: 0.05 },
          crop: { top: 0.25, bottom: 0.25, left: 0, right: 0 },
          dimensions: { width: 1920, height: 2880 },
        },
        BOX
      )
    );
    expect(p["fp-y"]).toBe("0");
  });
});
