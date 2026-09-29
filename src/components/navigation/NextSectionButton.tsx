// ======================================================
// 🟢 SYSTEM CODE — NEXT SECTION BUTTON
//
// JANGAN DIUBAH UNTUK EDIT DATA CLIENT.
// ======================================================

import React from 'react';
import { ArrowDown } from 'lucide-react';

interface NextSectionButtonProps {
  targetId: string;
  label: string;
  sundaneseLabel?: string;
}

export const NextSectionButton: React.FC<NextSectionButtonProps> = ({
  targetId,
  label,
  sundaneseLabel,
}) => {
  const handleClick = () => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="mt-14 sm:mt-18 text-center flex flex-col items-center justify-center">
      <button
        type="button"
        onClick={handleClick}
        aria-label={`Lanjut ke bagian ${label}`}
        className="group inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-[#B69A62]/40 bg-[#FAF7F0]/80 text-[#76563E] hover:text-[#29211C] hover:border-[#B69A62] hover:bg-[#FAF7F0] text-xs font-serif tracking-wider uppercase transition-all duration-300 shadow-xs hover:shadow-md hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B69A62]"
      >
        <span>Lanjut ke {label}</span>
        {sundaneseLabel && (
          <span className="hidden sm:inline italic text-[#71806A] lowercase font-normal">
            ({sundaneseLabel})
          </span>
        )}
        <ArrowDown size={13} className="text-[#B69A62] group-hover:translate-y-0.5 transition-transform" />
      </button>
    </div>
  );
};
