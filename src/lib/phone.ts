// One phone rule, shared by the order form and /api/create-order.
//
// They used to disagree: the client demanded exactly 10 digits starting with 0,
// while the route accepted anything 8–20 characters long drawn from digits and
// punctuation. A visitor typing "+84 909 123 456" — the form most Vietnamese
// numbers are written in when they travel — was rejected in the browser by a
// rule the server would have been happy with.
//
// The server's rule is the standard now, with "+" made explicit. Both sides
// import from here so the two cannot drift apart again.

/** Formatting people actually type: spaces, dots, dashes, parentheses. */
export function normalizePhone(value: string): string {
  return value.replace(/[\s.\-()]/g, "");
}

/**
 * Accepts a national number ("0909123456") or an international one
 * ("+84909123456"), written with or without separators.
 *
 * Deliberately not a Vietnam-only check: a landline, a number that arrives with
 * a country code, or a customer calling from abroad are all real, and a lead
 * lost to an over-strict regex costs more than a malformed one in the inbox.
 * The server still caps the raw length before this runs.
 */
export function isValidPhone(value: string): boolean {
  return /^\+?[0-9]{8,15}$/.test(normalizePhone(value));
}

/** Shown under the field when isValidPhone fails. */
export const PHONE_ERROR =
  "Invalid number — 8 to 15 digits, with or without +84";
