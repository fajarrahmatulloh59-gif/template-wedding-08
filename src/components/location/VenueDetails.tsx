// ======================================================
// 🟢 SYSTEM CODE — WHERE WE BEGIN: VENUE DETAILS
//
// ACCENT: IMAH PANGGUNG SILHOUETTE & BOTANICAL
// JANGAN DIUBAH UNTUK EDIT DATA CLIENT.
// ======================================================

import React from 'react';
import { WeddingData } from '../../types/wedding';
import { MapPin, Navigation, Calendar, Clock, ExternalLink } from 'lucide-react';
import { SmartPhoto } from '../media/SmartPhoto';

interface VenueDetailsProps {
  data: WeddingData;
  onPhotoClick?: () => void;
}

export const VenueDetails: React.FC<VenueDetailsProps> = ({ data, onPhotoClick }) => {
  return (
    <section id="venue" className="relative py-24 sm:py-32 px-4 sm:px-8 bg-[#F5EFE3] overflow-hidden">
      {/* Accent: Traditional Sundanese House (Imah Panggung) Silhouette */}
      <div className="absolute -bottom-6 right-4 sm:right-16 w-56 sm:w-72 h-36 opacity-15 pointer-events-none">
        <img
          src="/ornaments/sundanese-house.svg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center justify-center gap-2 mb-2">
            <span className="w-8 h-[1px] bg-[#B69A62]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#76563E] font-sans font-medium">
              Location & Direction
            </span>
            <span className="w-8 h-[1px] bg-[#B69A62]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#29211C] tracking-wide font-normal">
            Where We Begin
          </h2>

          <p className="mt-3 text-sm sm:text-base font-serif italic text-[#76563E] leading-relaxed">
            “Tempat di mana dua hati disatukan dalam rahmat dan berkah Illahi.”
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

        {/* Venue Showcase Card */}
        <div className="bg-[#FAF7F0] border-2 border-[#B69A62]/40 rounded-sm shadow-xl p-6 sm:p-10 max-w-4xl mx-auto relative">
          {/* Gold Corners */}
          <div className="absolute top-2.5 left-2.5 w-4 h-4 border-t-2 border-l-2 border-[#B69A62]" />
          <div className="absolute top-2.5 right-2.5 w-4 h-4 border-t-2 border-r-2 border-[#B69A62]" />
          <div className="absolute bottom-2.5 left-2.5 w-4 h-4 border-b-2 border-l-2 border-[#B69A62]" />
          <div className="absolute bottom-2.5 right-2.5 w-4 h-4 border-b-2 border-r-2 border-[#B69A62]" />

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            
            {/* Venue Photo with Frame */}
            <div className="w-full lg:w-1/2">
              <div className="relative p-2 bg-[#F5EFE3] border border-[#76563E]/20 rounded-xs shadow-md">
                <SmartPhoto
                  src={data.venue.image}
                  alt={data.venue.name}
                  aspectRatioClass="aspect-[16/9]"
                  objectFit="cover"
                  onClick={onPhotoClick}
                />
              </div>
            </div>

            {/* Venue Details */}
            <div className="w-full lg:w-1/2 flex flex-col justify-between text-center lg:text-left">
              <div>
                <span className="text-[11px] uppercase tracking-[0.25em] text-[#71806A] font-sans font-semibold">
                  Lokasi Acara
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#29211C] tracking-wide mt-1">
                  {data.venue.name}
                </h3>

                <div className="flex items-start gap-2 mt-3 text-xs sm:text-sm text-[#5B4435] leading-relaxed justify-center lg:justify-start">
                  <MapPin size={18} className="text-[#B69A62] shrink-0 mt-0.5" />
                  <span>{data.venue.address}</span>
                </div>

                {/* Date & Time Recap */}
                <div className="mt-4 pt-4 border-t border-[#B69A62]/20 flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center lg:justify-start text-xs text-[#76563E]">
                  <div className="flex items-center gap-1.5 justify-center lg:justify-start">
                    <Calendar size={15} className="text-[#B69A62]" />
                    <span>{data.wedding.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5 justify-center lg:justify-start">
                    <Clock size={15} className="text-[#B69A62]" />
                    <span>08.00 - 14.00 WIB</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons: LIHAT LOKASI & PETUNJUK ARAH */}
              <div className="mt-8 pt-6 border-t border-[#B69A62]/20 flex flex-wrap gap-3 justify-center lg:justify-start">
                <a
                  href={data.venue.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded bg-[#76563E] text-[#FAF7F0] hover:bg-[#5B4435] text-xs uppercase tracking-[0.2em] font-serif font-semibold border border-[#B69A62]/50 shadow-md transition-all duration-300 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B69A62]"
                >
                  <Navigation size={14} />
                  <span>LIHAT LOKASI</span>
                  <ExternalLink size={12} />
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
