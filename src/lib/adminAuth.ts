// Shared admin HTTP Basic Auth helpers — used by both proxy (edge) and
// API routes (node). Pure JS so it runs in either runtime.

// Constant-time string comparison to avoid leaking secrets via timing.
// (A length difference still short-circuits — acceptable for password checks.)
export function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let mismatch = 0;
  for (let i = 0; i < a.length; i++) {
    mismatch |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return mismatch === 0;
}

// Verify the password from an HTTP Basic `Authorization` header against
// ADMIN_PASSWORD. Returns false when the env var is unset (fail closed),
// the header is missing/malformed, or the password mismatches.
export function isAuthorizedAdmin(authHeader: string | null): boolean {
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminPassword) return false;
  if (!authHeader?.startsWith("Basic ")) return false;

  let decoded: string;
  try {
    decoded = atob(authHeader.slice(6));
  } catch {
    return false;
  }

  const password = decoded.split(":")[1] ?? "";
  return safeEqual(password, adminPassword);
}

export const UNAUTHORIZED_HEADERS = {
  "WWW-Authenticate": 'Basic realm="Admin", charset="UTF-8"',
};
