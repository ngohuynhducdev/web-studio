import type { SanityImageRef } from "@/types";

interface Box {
  /** Delivered width in px — pick ~2× the CSS box so it stays sharp on retina. */
  width: number;
  height: number;
  quality?: number;
}

function clamp01(n: number) {
  return Math.min(1, Math.max(0, n));
}

/**
 * Builds a Sanity CDN URL that actually honours the crop an editor set in the
 * Studio.
 *
 * `thumbnail.asset->url` on its own carries none of it: the image fields are
 * declared `options: { hotspot: true }`, the editor positions the frame, and
 * the raw asset URL then arrives at the browser to be centre-cropped by CSS —
 * the Studio control was wired to nothing. Requesting an explicit `w`/`h` here
 * also means the card gets a card-sized image instead of the full-size
 * original.
 *
 * Returns undefined when there is no image, so callers can fall back.
 */
export function sanityImageUrl(
  img: SanityImageRef | null | undefined,
  { width, height, quality = 80 }: Box
): string | undefined {
  if (!img?.url) return undefined;

  const params = new URLSearchParams({
    w: String(width),
    h: String(height),
    fit: "crop",
    auto: "format",
    q: String(quality),
  });

  const { crop, hotspot, dimensions } = img;
  const cropped =
    crop && !!(crop.top || crop.bottom || crop.left || crop.right);

  // The crop tool stores fractions off each edge. Turning those into the
  // absolute rect the CDN wants needs the source size, so a projection that
  // omits dimensions simply skips this step rather than guessing.
  if (cropped && dimensions) {
    const left = Math.round(crop.left * dimensions.width);
    const top = Math.round(crop.top * dimensions.height);
    const w = Math.round((1 - crop.left - crop.right) * dimensions.width);
    const h = Math.round((1 - crop.top - crop.bottom) * dimensions.height);
    if (w > 0 && h > 0) params.set("rect", `${left},${top},${w},${h}`);
  }

  // The hotspot is the point the editor marked as "whatever you cut, keep
  // this". Sanity stores it against the whole image while the CDN reads it
  // against `rect`, so it has to be rebased when a rect went out.
  if (hotspot) {
    const usableRect = cropped && dimensions && params.has("rect");
    const x = usableRect
      ? (hotspot.x - crop!.left) / (1 - crop!.left - crop!.right)
      : hotspot.x;
    const y = usableRect
      ? (hotspot.y - crop!.top) / (1 - crop!.top - crop!.bottom)
      : hotspot.y;

    params.set("crop", "focalpoint");
    params.set("fp-x", String(clamp01(x)));
    params.set("fp-y", String(clamp01(y)));
  }

  const sep = img.url.includes("?") ? "&" : "?";
  return `${img.url}${sep}${params.toString()}`;
}
