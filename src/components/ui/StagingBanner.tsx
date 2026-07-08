import { IS_PRODUCTION, DEPLOY_ENV } from "@/lib/env";

// Small non-interactive badge shown on every non-production deploy so reviewers
// never mistake staging/preview for the live site. Renders nothing in prod.
export default function StagingBanner() {
  if (IS_PRODUCTION) return null;
  return (
    <div
      aria-hidden="true"
      className="fixed bottom-2 left-2 z-[9999] pointer-events-none select-none rounded-md bg-yellow-400 px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-black shadow-lg"
    >
      ⚠ {DEPLOY_ENV}
    </div>
  );
}
