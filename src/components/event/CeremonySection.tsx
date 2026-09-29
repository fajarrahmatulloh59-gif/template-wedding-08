// ======================================================
// 🟢 SYSTEM CODE — OUR DAY & SUNDA CEREMONY
//
// TRADITIONAL INVITATION PAPER STYLE
// JANGAN DIUBAH UNTUK EDIT DATA CLIENT.
// ======================================================

import React from 'react';
import { WeddingData, WeddingEvent, SundaCeremony } from '../../types/wedding';
import { Calendar, Clock, MapPin, ExternalLink } from 'lucide-react';
import { SmartPhoto } from '../media/SmartPhoto';

interface CeremonySectionProps {
  data: WeddingData;
  onPhotoClick?: (index: number) => void;
}

export const CeremonySection: React.FC<CeremonySectionProps> = ({ data, onPhotoClick }) => {
  return (
    <section id="our-day" className="relative py-24 sm:py-32 px-4 sm:px-8 bg-[#F5EFE3] overflow-hidden">
      {/* Background Subtle Floral Ornaments */}
      <div className="absolute top-20 right-6 w-36 h-36 opacity-10 pointer-events-none">
        <img
          src="/ornaments/sundanese-floral.svg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* ================= 1. OUR DAY — THE MAIN CEREMONIES ================= */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center justify-center gap-2 mb-2">
            <span className="w-8 h-[1px] bg-[#B69A62]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#76563E] font-sans font-medium">
              Save The Date
            </span>
            <span className="w-8 h-[1px] bg-[#B69A62]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#29211C] tracking-wide font-normal">
            Our Day
          </h2>
          <p className="mt-3 text-sm sm:text-base font-serif italic text-[#76563E] leading-relaxed">
            “Kersaning Gusti Nu Maha Suci, mugi lungsur langsar dina dinten anu pinuh ku kabagjaan.”
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

        {/* Traditional Invitation Paper Style Containers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {data.events.map((event: WeddingEvent) => (
            <div
              key={event.id}
              className="relative p-6 sm:p-8 bg-[#FAF7F0] border-2 border-[#B69A62]/40 rounded-sm shadow-xl flex flex-col justify-between"
            >
              {/* Antique Gold Corner Accents */}
              <div className="absolute top-2.5 left-2.5 w-3.5 h-3.5 border-t-2 border-l-2 border-[#B69A62]" />
              <div className="absolute top-2.5 right-2.5 w-3.5 h-3.5 border-t-2 border-r-2 border-[#B69A62]" />
              <div className="absolute bottom-2.5 left-2.5 w-3.5 h-3.5 border-b-2 border-l-2 border-[#B69A62]" />
              <div className="absolute bottom-2.5 right-2.5 w-3.5 h-3.5 border-b-2 border-r-2 border-[#B69A62]" />

              {/* Event Content */}
              <div className="text-center">
                {/* Event Title & Sundanese Subtitle */}
                <span className="text-[11px] uppercase tracking-[0.25em] text-[#71806A] font-sans font-semibold">
                  {event.sundaneseTitle || 'Adat Pasundan'}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#29211C] tracking-wide mt-1">
                  {event.title}
                </h3>

                <div className="w-12 h-[1px] bg-[#B69A62]/40 mx-auto my-4" />

                {/* Day & Date */}
                <div className="flex items-center justify-center gap-2 text-sm text-[#29211C] font-serif font-medium">
                  <Calendar size={16} className="text-[#B69A62]" />
                  <span>{event.day}, {event.date}</span>
                </div>

                {/* Time */}
                <div className="flex items-center justify-center gap-2 mt-2 text-xs sm:text-sm text-[#76563E] font-sans">
                  <Clock size={15} className="text-[#B69A62]" />
                  <span>{event.time}</span>
                </div>

                {/* Venue & Address */}
                <div className="mt-5 pt-4 border-t border-[#B69A62]/20">
                  <div className="flex items-start justify-center gap-1.5 text-[#29211C] font-serif font-semibold text-base sm:text-lg">
                    <MapPin size={18} className="text-[#B69A62] shrink-0 mt-1" />
                    <span>{event.venue}</span>
                  </div>
                  <p className="mt-1.5 text-xs text-[#5B4435] leading-relaxed font-light max-w-xs mx-auto">
                    {event.address}
                  </p>
                </div>
              </div>

              {/* Action Button: LIHAT LOKASI */}
              <div className="mt-8 text-center">
                <a
                  href={event.mapsUrl || data.venue.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded bg-[#76563E] text-[#FAF7F0] hover:bg-[#5B4435] text-xs uppercase tracking-[0.2em] font-medium font-serif border border-[#B69A62]/50 shadow-md transition-all duration-300 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B69A62]"
                >
                  <span>LIHAT LOKASI</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ================= 2. SUNDA CEREMONY (OPTIONAL) ================= */}
        {data.sections.ceremony && data.ceremony && data.ceremony.length > 0 && (
          <div className="mt-28 sm:mt-36 pt-16 border-t border-[#B69A62]/30">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs uppercase tracking-[0.3em] text-[#71806A] font-sans font-medium">
                Upacara Adat
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#29211C] tracking-wide font-normal mt-1">
                Sunda Ceremony
              </h2>
              <p className="mt-2 text-sm text-[#76563E] font-serif italic">
                Runtuyan prosési adat Sunda anu pinuh ku simbol karesikan diri jeung kawibawaan.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {data.ceremony.map((cer: SundaCeremony, idx: number) => (
                <div
                  key={cer.id}
                  className="p-5 bg-[#FAF7F0] border border-[#B69A62]/30 rounded-sm shadow-md flex flex-col justify-between hover:border-[#B69A62] transition-colors"
                >
                  <div>
                    {/* Optional ceremony illustration / photo */}
                    {cer.image && (
                      <div className="mb-4 rounded-xs overflow-hidden border border-[#B69A62]/20">
                        <SmartPhoto
                          src={cer.image}
                          alt={cer.title}
                          aspectRatioClass="aspect-[4/3]"
                          objectFit="cover"
                          onClick={() => onPhotoClick && onPhotoClick(idx)}
                        />
                      </div>
                    )}

                    <span className="text-[10px] uppercase tracking-wider text-[#B69A62] font-sans font-semibold">
                      {cer.sundaneseName}
                    </span>
                    <h4 className="font-serif text-xl text-[#29211C] tracking-wide mt-0.5">
                      {cer.title}
                    </h4>

                    <div className="flex items-center gap-3 text-xs text-[#76563E] mt-2 pb-2 border-b border-[#B69A62]/15 font-sans">
                      <span>{cer.date}</span>
                      <span>·</span>
                      <span>{cer.time}</span>
                    </div>

                    <p className="mt-3 text-xs sm:text-sm text-[#5B4435] leading-relaxed font-light">
                      {cer.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#B69A62]/15 text-[11px] font-serif italic text-[#71806A]">
                    “{cer.meaning}”
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
