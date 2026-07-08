// Deployment environment helpers.
// Vercel sets VERCEL_ENV to "production" | "preview" | "development".
// It is unset locally (`next dev`) — treated as non-production, so staging,
// preview deploys, and local builds all stay out of the search index.
export const IS_PRODUCTION = process.env.VERCEL_ENV === "production";

// Human-readable label for the current deploy ("local" when not on Vercel).
export const DEPLOY_ENV = process.env.VERCEL_ENV ?? "local";
