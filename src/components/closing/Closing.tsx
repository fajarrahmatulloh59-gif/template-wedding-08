// ======================================================
// 🟢 SYSTEM CODE — CLOSING: T.M STUDIO
//
// JANGAN DIUBAH UNTUK EDIT DATA CLIENT.
// ======================================================

import React from 'react';

export const Closing: React.FC = () => {
  return (
    <footer className="py-12 bg-[#29211C] text-[#FAF7F0] border-t border-[#B69A62]/20 text-center select-none">
      <div className="max-w-md mx-auto px-4">
        {/* Minimal T.M STUDIO */}
        <h4 className="font-serif tracking-[0.3em] text-sm uppercase text-[#B69A62] font-semibold">
          T.M STUDIO
        </h4>
        <p className="text-[11px] tracking-[0.25em] uppercase text-[#FAF7F0]/60 font-sans mt-1">
          A Love Rooted in Heritage
        </p>

        <div className="w-12 h-[1px] bg-[#B69A62]/30 mx-auto my-4" />

        <p className="text-[10px] text-[#FAF7F0]/40 font-sans tracking-wider">
          Template 08 — Sunda Heritage · © {new Date().getFullYear()} All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
