// ======================================================
// 🟢 SYSTEM CODE — SECTION TOGGLE
//
// JANGAN DIUBAH UNTUK EDIT DATA CLIENT.
// ======================================================

import { SectionToggles } from '../types/wedding';

export function isSectionEnabled(
  sections: SectionToggles | undefined,
  sectionName: keyof SectionToggles
): boolean {
  if (!sections) return true;
  return Boolean(sections[sectionName]);
}
