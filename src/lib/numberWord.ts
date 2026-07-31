// Spells a small count so headings can read "three templates," instead of
// "3 templates,". Counts on this site are section/plan/step tallies, so they
// stay in single digits; anything larger falls back to the numeral rather
// than growing a word list nobody will read.
const WORDS = [
  "zero", "one", "two", "three", "four", "five",
  "six", "seven", "eight", "nine", "ten", "eleven", "twelve",
];

export function numberWord(n: number): string {
  return WORDS[n] ?? String(n);
}
