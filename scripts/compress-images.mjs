// One-time script: compress large JPEGs in /public/images in-place.
// Run: node scripts/compress-images.mjs
import sharp from "sharp";
import { readdir, stat } from "fs/promises";
import { join } from "path";

const DIR = new URL("../public/images", import.meta.url).pathname.replace(/^\/([A-Z]:)/, "$1");
const QUALITY = 80;
const MAX_WIDTH = 1920;

const files = (await readdir(DIR)).filter((f) => /\.(jpg|jpeg)$/i.test(f));

for (const file of files) {
  const path = join(DIR, file);
  const before = (await stat(path)).size;

  const img = sharp(path);
  const meta = await img.metadata();

  await img
    .resize(meta.width > MAX_WIDTH ? MAX_WIDTH : undefined)
    .jpeg({ quality: QUALITY, mozjpeg: true })
    .toFile(path + ".tmp");

  const { rename } = await import("fs/promises");
  await rename(path + ".tmp", path);

  const after = (await stat(path)).size;
  const saved = (((before - after) / before) * 100).toFixed(1);
  console.log(`${file}: ${kb(before)} → ${kb(after)} KB  (-${saved}%)`);
}

function kb(bytes) {
  return Math.round(bytes / 1024);
}
