/**
 * audit-assets.ts
 *
 * Cross-checks every file in public/ against two sources of truth:
 *   1. the codebase (src/ + scripts/ + config files)
 *   2. live Sanity content, drafts included
 *
 * An asset is only safe to delete when BOTH come back empty. Read-only —
 * it never writes or deletes anything; it just prints the verdict.
 *
 * How to run:
 *   pnpm audit:assets
 *   pnpm audit:assets --dataset=staging
 */

import * as dotenv from "dotenv";
// via next-sanity, not @sanity/client — the latter is only a transitive dep and
// resolves purely by pnpm hoisting luck.
import { createClient } from "next-sanity";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

dotenv.config({ path: ".env.local" });

const datasetArg = process.argv
  .find((a) => a.startsWith("--dataset="))
  ?.split("=")[1];

const dataset =
  datasetArg ?? process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

// Write token is reused purely for its read scope — drafts are invisible without one.
const token = process.env.SANITY_API_WRITE_TOKEN;

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset,
  apiVersion: "2026-05-17",
  token,
  useCdn: false,
  // "raw" returns drafts alongside published docs. A draft referencing an asset
  // is enough to keep it — it may be published at any time.
  perspective: "raw",
});

// Directories worth scanning for hardcoded asset paths. `docs` and the root
// markdown files count: an asset embedded in a doc is still in use.
const CODE_ROOTS = ["src", "scripts", "tests", "docs"];
const CODE_FILES = [
  "next.config.ts",
  "sanity.config.ts",
  "sanity.cli.ts",
  "package.json",
  "README.md",
  "CLAUDE.md",
  "PRODUCT.md",
];
const CODE_EXT = /\.(tsx?|jsx?|mjs|css|json|md)$/;

function walk(dir: string): string[] {
  let out: string[] = [];
  if (!existsSync(dir)) return out;
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) out = out.concat(walk(full));
    else out.push(full);
  }
  return out;
}

function humanSize(bytes: number): string {
  if (bytes >= 1024 * 1024) return `${(bytes / 1024 / 1024).toFixed(1)}M`;
  return `${Math.round(bytes / 1024)}K`;
}

async function main() {
  // ── 1. Enumerate public/ ───────────────────────────────────────────────────
  const publicFiles = walk("public").map((f) => {
    const rel = relative("public", f).split(sep).join("/");
    return {
      file: f.split(sep).join("/"),
      urlPath: `/${rel}`, // how Next serves it
      basename: rel.split("/").pop()!,
      size: statSync(f).size,
    };
  });

  console.log(`\n📦  ${publicFiles.length} files in public/`);
  console.log(`🗂   Sanity dataset: ${dataset}${token ? "" : "  (no token — drafts NOT checked)"}\n`);

  // ── 2. Slurp the codebase ──────────────────────────────────────────────────
  const codeBlobs = new Map<string, string>();
  for (const root of CODE_ROOTS) {
    for (const f of walk(root)) {
      if (CODE_EXT.test(f)) codeBlobs.set(f, readFileSync(f, "utf8"));
    }
  }
  for (const f of CODE_FILES) {
    try {
      codeBlobs.set(f, readFileSync(f, "utf8"));
    } catch {
      // optional file — skip
    }
  }

  // ── 3. Slurp Sanity ────────────────────────────────────────────────────────
  // One doc per line keeps the match reportable (we can name the offending _id).
  const docs: Array<Record<string, unknown>> = await client.fetch("*[]");
  const docBlobs = docs.map((d) => ({
    id: String(d._id ?? "?"),
    type: String(d._type ?? "?"),
    json: JSON.stringify(d),
  }));

  console.log(`🔎  Scanned ${codeBlobs.size} code files, ${docBlobs.length} Sanity documents\n`);

  // ── 4. Cross-check ─────────────────────────────────────────────────────────
  const orphans: typeof publicFiles = [];
  const cmsOnly: Array<{ asset: (typeof publicFiles)[number]; docs: string[] }> = [];

  for (const asset of publicFiles) {
    // Match on basename: catches "/images/x.jpg", "x.jpg" and absolute URLs alike.
    const needle = asset.basename;

    const codeHits = [...codeBlobs.entries()]
      .filter(([, blob]) => blob.includes(needle))
      .map(([f]) => f);

    const cmsHits = docBlobs
      .filter((d) => d.json.includes(needle))
      .map((d) => `${d.type}:${d.id}`);

    if (codeHits.length === 0 && cmsHits.length === 0) {
      orphans.push(asset);
    } else if (codeHits.length === 0) {
      cmsOnly.push({ asset, docs: cmsHits });
    }
  }

  // ── 5. Report ──────────────────────────────────────────────────────────────
  if (cmsOnly.length) {
    console.log("⚠️   REFERENCED IN SANITY ONLY — do NOT delete:\n");
    for (const { asset, docs } of cmsOnly) {
      console.log(`   ${asset.urlPath}`);
      console.log(`      └─ ${docs.join(", ")}`);
    }
    console.log("");
  }

  if (orphans.length) {
    const total = orphans.reduce((sum, a) => sum + a.size, 0);
    console.log(`🗑   UNREFERENCED in code and Sanity — ${orphans.length} files, ${humanSize(total)}:\n`);
    for (const a of orphans) {
      console.log(`   ${a.urlPath.padEnd(48)} ${humanSize(a.size).padStart(6)}`);
    }
    console.log("\n   Delete with:");
    console.log(`   rm ${orphans.map((a) => a.file).join(" ")}\n`);
  } else {
    console.log("✅  Every file in public/ is referenced somewhere.\n");
  }

  const used = publicFiles.length - orphans.length - cmsOnly.length;
  console.log(`Summary: ${used} used in code · ${cmsOnly.length} CMS-only · ${orphans.length} unreferenced\n`);

  // Positive control: this repo always ships assets that ARE referenced. Zero
  // hits means the scan silently broke (wrong cwd, empty dataset, bad glob) —
  // and a broken scan reports everything as safe to delete. Fail instead.
  if (publicFiles.length > 0 && used === 0) {
    console.error("❌  Sanity check failed: not one asset matched. The scan is broken —");
    console.error("    do NOT act on the list above.\n");
    process.exit(1);
  }
}

main().catch((err) => {
  console.error("\n❌  Audit failed:", err.message);
  console.error("    Check NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_API_WRITE_TOKEN in .env.local\n");
  process.exit(1);
});
