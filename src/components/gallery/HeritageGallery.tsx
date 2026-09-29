// ======================================================
// 🟢 SYSTEM CODE — OUR MOMENTS: GALLERY
//
// PHOTOGRAPHY-FIRST · PRESERVE RATIOS · PHOTOVIEWER INTEGRATED
// JANGAN DIUBAH UNTUK EDIT DATA CLIENT.
// ======================================================

import React from 'react';
import { WeddingData } from '../../types/wedding';
import { SmartPhoto } from '../media/SmartPhoto';
import { Eye } from 'lucide-react';

interface HeritageGalleryProps {
  data: WeddingData;
  onOpenViewer: (index: number) => void;
}

export const HeritageGallery: React.FC<HeritageGalleryProps> = ({ data, onOpenViewer }) => {
  return (
    <section id="our-moments" className="relative py-24 sm:py-32 px-4 sm:px-8 bg-[#F5EFE3] overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-10 left-6 w-36 h-36 opacity-10 pointer-events-none">
        <img
          src="/ornaments/sundanese-floral.svg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center justify-center gap-2 mb-2">
            <span className="w-8 h-[1px] bg-[#B69A62]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#76563E] font-sans font-medium">
              Treasured Memories
            </span>
            <span className="w-8 h-[1px] bg-[#B69A62]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#29211C] tracking-wide font-normal">
            Our Moments
          </h2>

          <p className="mt-3 text-sm sm:text-base font-serif italic text-[#76563E] leading-relaxed">
            “Kumpulan rasa, seuri, sarta cipta rasa dina unggal juru kaméra.”
          </p>

          <div className="w-24 h-4 mx-auto mt-4 opacity-75">
            <img
              src="/ornaments/sundanese-divider.svg"
              alt=""
              aria-hidden="true"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Photography Grid with Thin Antique Gold & Wood Frames */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {data.gallery.map((photoSrc: string, index: number) => {
            // Varied aspect ratios (3:4 portrait, 4:3 landscape, 1:1) to show support without cropping
            const aspectClass = index % 3 === 0 ? 'aspect-[3/4]' : index % 3 === 1 ? 'aspect-[4/3]' : 'aspect-square';

            return (
              <div
                key={photoSrc + index}
                onClick={() => onOpenViewer(index)}
                className="group relative p-3 bg-[#FAF7F0] border border-[#B69A62]/40 rounded-sm shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 cursor-pointer"
              >
                {/* Thin Antique Gold Corner Accents */}
                <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-[#B69A62] z-10" />
                <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-[#B69A62] z-10" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-[#B69A62] z-10" />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-[#B69A62] z-10" />

                {/* Subtle Wood Accent Inner Frame */}
                <div className="relative p-1.5 bg-[#F5EFE3] border border-[#76563E]/20 rounded-xs">
                  <SmartPhoto
                    src={photoSrc}
                    alt={`Momen foto ke-${index + 1}`}
                    aspectRatioClass={aspectClass}
                    objectFit="contain"
                  />
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-[#29211C]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-sm">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FAF7F0] text-[#29211C] text-xs font-serif shadow-lg">
                    <Eye size={14} className="text-[#B69A62]" />
                    <span>Lihat Penuh</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Gallery Caption Footnote */}
        <div className="mt-8 text-center text-xs text-[#76563E]/80 tracking-wider font-light font-sans">
          Ketuk foto untuk membuka penampil layar penuh dan memperbesar
        </div>

      </div>
    </section>
  );
};
