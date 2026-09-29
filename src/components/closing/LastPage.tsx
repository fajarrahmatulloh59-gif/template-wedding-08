// ======================================================
// 🟢 SYSTEM CODE — LAST PAGE: UNTIL FOREVER
//
// BACKGROUND: DEEP FOREST GREEN #30483A
// JANGAN DIUBAH UNTUK EDIT DATA CLIENT.
// ======================================================

import React from 'react';
import { WeddingData } from '../../types/wedding';

interface LastPageProps {
  data: WeddingData;
  onPhotoClick?: () => void;
}

export const LastPage: React.FC<LastPageProps> = ({ data, onPhotoClick }) => {
  return (
    <section
      id="until-forever"
      className="relative py-28 sm:py-36 px-4 sm:px-8 bg-[#30483A] text-[#FAF7F0] overflow-hidden text-center"
    >
      {/* Background Subtle Star/Gold Fleck Pattern */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(#B69A62 1px, transparent 1px)`,
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      <div className="max-w-2xl mx-auto relative z-10 flex flex-col items-center">
        
        {/* Siger Crown Accent */}
        <div className="w-14 h-14 mb-6 opacity-85">
          <img
            src="/ornaments/sundanese-siger.svg"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-contain filter drop-shadow-md"
          />
        </div>

        {/* Circular Couple Photo with Antique Gold Border */}
        <div
          onClick={onPhotoClick}
          className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-2 border-[#B69A62] shadow-2xl p-1 bg-[#FAF7F0]/10 mb-8 cursor-pointer group"
        >
          <img
            src={data.couplePhoto}
            alt={`${data.groom.name} & ${data.bride.name}`}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Gratitude & Blessing in Sundanese & Indonesian */}
        <span className="text-xs uppercase tracking-[0.35em] text-[#B69A62] font-sans font-medium">
          Hatur Nuhun
        </span>

        <p className="mt-4 text-sm sm:text-base font-serif italic text-[#FAF7F0]/90 leading-relaxed max-w-lg">
          Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir serta memberikan doa restu bagi langkah suci kami.
        </p>

        {/* Mempelai Names in Grand Serif */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FAF7F0] tracking-wide font-normal mt-6 leading-tight">
          <span>{data.groom.name}</span>
          <span className="text-[#B69A62] font-serif italic mx-2.5 font-light">&</span>
          <span>{data.bride.name}</span>
        </h2>

        <p className="text-xs sm:text-sm font-serif italic text-[#B69A62] tracking-widest mt-2 uppercase">
          Our journey continues...
        </p>

        {/* Divider */}
        <div className="w-28 h-4 mx-auto mt-6 opacity-60 filter invert">
          <img
            src="/ornaments/sundanese-divider.svg"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-contain"
          />
        </div>

      </div>
    </section>
  );
};
