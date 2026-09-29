// ======================================================
// 🟢 SYSTEM CODE — CHAPTER NUMBER UTILITY
//
// JANGAN DIUBAH UNTUK EDIT DATA CLIENT.
// ======================================================

const ROMAN_NUMERALS = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];

export function formatChapter(index: number, format: 'roman' | 'numeric' | 'editorial' = 'editorial'): string {
  const num = index + 1;
  if (format === 'roman') {
    return ROMAN_NUMERALS[index] || String(num);
  }
  if (format === 'numeric') {
    return num < 10 ? `0${num}` : String(num);
  }
  return `Chapter ${ROMAN_NUMERALS[index] || num}`;
}
