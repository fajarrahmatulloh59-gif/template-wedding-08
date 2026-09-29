// ======================================================
// 🟢 SYSTEM CODE — THE COUPLE: TWO SOULS, ONE JOURNEY
//
// JANGAN DIUBAH UNTUK EDIT DATA CLIENT.
// ======================================================

import React from 'react';
import { WeddingData, Person } from '../../types/wedding';
import { SmartPhoto } from '../media/SmartPhoto';

interface SundaneseCoupleProps {
  data: WeddingData;
  onPhotoClick?: (index: number) => void;
}

interface PersonFrameProps {
  person: Person;
  role: 'Panganten Pameget (Mempelai Pria)' | 'Panganten Istri (Mempelai Wanita)';
  onPhotoClick?: () => void;
}

const PersonFrame: React.FC<PersonFrameProps> = ({ person, role, onPhotoClick }) => {
  return (
    <div className="flex-1 max-w-md w-full flex flex-col items-center">
      {/* Editorial Frame: PHOTO -> CREAM INNER SPACE -> WOOD ACCENT -> ANTIQUE GOLD LINE -> BOTANICAL CORNER */}
      <div className="relative w-full max-w-[340px] sm:max-w-[380px] p-4 sm:p-5 bg-[#FAF7F0] border border-[#B69A62]/40 shadow-xl rounded-sm">
        
        {/* Botanical Gold Corners */}
        <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#B69A62]" />
        <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#B69A62]" />
        <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#B69A62]" />
        <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#B69A62]" />

        {/* Wood Accent Inner Border */}
        <div className="relative p-2.5 sm:p-3 bg-[#F5EFE3] border border-[#76563E]/30 rounded-xs">
          
          {/* SmartPhoto with Fixed Frame & Contain Aspect Ratio */}
          <div className="relative rounded-xs overflow-hidden border border-[#B69A62]/20 shadow-inner">
            <SmartPhoto
              src={person.photo}
              alt={person.fullName}
              aspectRatioClass="aspect-[3/4]"
              objectFit="contain"
              onClick={onPhotoClick}
            />
          </div>

        </div>
      </div>

      {/* Mempelai Text & Lineage (Parents) */}
      <div className="mt-5 text-center px-4 max-w-sm">
        <span className="text-[11px] uppercase tracking-[0.25em] text-[#71806A] font-sans font-medium">
          {role}
        </span>

        {/* Short & Full Name */}
        <h3 className="font-serif text-2xl sm:text-3xl text-[#29211C] tracking-wide mt-1">
          {person.name}
        </h3>
        <p className="font-serif italic text-sm text-[#76563E] mt-0.5 tracking-wide">
          {person.fullName}
        </p>

        {/* Parents Information */}
        <div className="mt-3 pt-3 border-t border-[#B69A62]/20 text-xs text-[#5B4435] leading-relaxed">
          <p className="font-light">Putra/Putri tercinta dari:</p>
          <p className="font-medium text-[#29211C] mt-0.5">
            {person.parents.father} & {person.parents.mother}
          </p>
        </div>

        {/* Instagram Handle */}
        {person.instagram && (
          <a
            href={`https://instagram.com/${person.instagram.replace('@', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-3 text-xs tracking-wider text-[#76563E] hover:text-[#B69A62] transition-colors font-sans"
          >
            <span>{person.instagram}</span>
          </a>
        )}
      </div>
    </div>
  );
};

export const SundaneseCouple: React.FC<SundaneseCoupleProps> = ({ data, onPhotoClick }) => {
  return (
    <section
      id="the-couple"
      className="relative py-20 sm:py-28 px-4 sm:px-8 bg-[#F5EFE3] overflow-hidden"
    >
      {/* Background Decorative Floral Accents */}
      <div className="absolute top-10 left-4 w-32 h-32 opacity-15 pointer-events-none">
        <img
          src="/ornaments/sundanese-floral.svg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="absolute bottom-10 right-4 w-32 h-32 opacity-15 pointer-events-none">
        <img
          src="/ornaments/sundanese-floral.svg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-18">
          <div className="inline-flex items-center justify-center gap-2 mb-2">
            <span className="w-8 h-[1px] bg-[#B69A62]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#76563E] font-sans font-medium">
              Two Souls, One Journey
            </span>
            <span className="w-8 h-[1px] bg-[#B69A62]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#29211C] tracking-wide font-normal">
            Panganten Pasundan
          </h2>

          <p className="mt-3 max-w-xl mx-auto text-sm sm:text-base text-[#5B4435] font-serif italic leading-relaxed">
            {data.wedding.quote}
          </p>

          <div className="w-24 h-4 mx-auto mt-4 opacity-70">
            <img
              src="/ornaments/sundanese-divider.svg"
              alt=""
              aria-hidden="true"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Mempelai Side by Side on Desktop, Stacked on Mobile */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-12 lg:gap-16">
          {/* Groom Frame */}
          <PersonFrame
            person={data.groom}
            role="Panganten Pameget (Mempelai Pria)"
            onPhotoClick={() => onPhotoClick && onPhotoClick(1)}
          />

          {/* Central Siger & Ampersand Emblem */}
          <div className="hidden md:flex flex-col items-center justify-center py-12 shrink-0">
            <div className="w-12 h-12 opacity-80 mb-2">
              <img
                src="/ornaments/sundanese-siger.svg"
                alt=""
                aria-hidden="true"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-[1px] h-14 bg-[#B69A62]/30" />
            <span className="font-serif text-3xl italic text-[#B69A62] my-3 select-none">&</span>
            <div className="w-[1px] h-14 bg-[#B69A62]/30" />
          </div>

          {/* Bride Frame */}
          <PersonFrame
            person={data.bride}
            role="Panganten Istri (Mempelai Wanita)"
            onPhotoClick={() => onPhotoClick && onPhotoClick(2)}
          />
        </div>
      </div>
    </section>
  );
};
