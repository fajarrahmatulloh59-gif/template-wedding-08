// ======================================================
// 🟢 SYSTEM CODE — ANIMATION UTILITIES
//
// JANGAN DIUBAH UNTUK EDIT DATA CLIENT.
// ======================================================

export const transitions = {
  smooth: {
    duration: 0.8,
    ease: [0.16, 1, 0.3, 1] as const,
  },
  quick: {
    duration: 0.3,
    ease: [0.16, 1, 0.3, 1] as const,
  },
  gate: {
    duration: 1.4,
    ease: [0.25, 0.1, 0.25, 1] as const,
  },
};

export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};
