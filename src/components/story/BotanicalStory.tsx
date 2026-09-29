// ======================================================
// 🟢 SYSTEM CODE — OUR STORY: A JOURNEY THROUGH TIME
//
// BOTANICAL TIMELINE (ALTERNATING DESKTOP / VERTICAL MOBILE)
// JANGAN DIUBAH UNTUK EDIT DATA CLIENT.
// ======================================================

import React from 'react';
import { WeddingData, StoryChapter } from '../../types/wedding';
import { SmartPhoto } from '../media/SmartPhoto';
import { formatChapter } from '../../utils/chapterNumber';

interface BotanicalStoryProps {
  data: WeddingData;
  onPhotoClick?: (index: number) => void;
}

export const BotanicalStory: React.FC<BotanicalStoryProps> = ({ data, onPhotoClick }) => {
  return (
    <section id="our-story" className="relative py-24 sm:py-32 px-4 sm:px-8 bg-[#FAF7F0] overflow-hidden">
      {/* Background Decorative Vine */}
      <div className="absolute top-10 right-0 w-48 h-48 opacity-10 pointer-events-none">
        <img
          src="/ornaments/sundanese-sulur.svg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center justify-center gap-2 mb-2">
            <span className="w-8 h-[1px] bg-[#B69A62]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#71806A] font-sans font-medium">
              A Journey Through Time
            </span>
            <span className="w-8 h-[1px] bg-[#B69A62]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#29211C] tracking-wide font-normal">
            Lalakon Asih
          </h2>

          <p className="mt-3 text-sm sm:text-base font-serif italic text-[#76563E] leading-relaxed">
            “Runtuyan carita ti mimiti papanggih, nepika nyangcang jangji dina ikatan suci.”
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

        {/* Botanical Spine Timeline Container */}
        <div className="relative">
          {/* Central Botanical Vine Spine (Desktop) / Left Spine (Mobile) */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-8 w-[2px] bg-gradient-to-b from-[#B69A62] via-[#71806A] to-[#B69A62] -translate-x-1/2" />

          <div className="space-y-16 md:space-y-24">
            {data.story.map((chapter: StoryChapter, idx: number) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={chapter.date + idx}
                  className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Botanical Leaf Node Marker on the timeline */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#FAF7F0] border-2 border-[#B69A62] flex items-center justify-center z-20 shadow-md">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#30483A]" />
                  </div>

                  {/* 1. Chapter Photo Frame */}
                  <div className="w-full md:w-1/2 pl-14 md:pl-0 flex justify-center">
                    <div className="relative p-3 bg-[#F5EFE3] border border-[#B69A62]/40 rounded-sm shadow-lg max-w-sm w-full">
                      {/* Gold Corner lines */}
                      <div className="absolute top-1.5 left-1.5 w-3 h-3 border-t border-l border-[#B69A62]" />
                      <div className="absolute top-1.5 right-1.5 w-3 h-3 border-t border-r border-[#B69A62]" />
                      <div className="absolute bottom-1.5 left-1.5 w-3 h-3 border-b border-l border-[#B69A62]" />
                      <div className="absolute bottom-1.5 right-1.5 w-3 h-3 border-b border-r border-[#B69A62]" />

                      <div className="rounded-xs overflow-hidden border border-[#76563E]/20">
                        <SmartPhoto
                          src={chapter.image}
                          alt={chapter.title}
                          aspectRatioClass="aspect-[4/3]"
                          objectFit="cover"
                          onClick={() => onPhotoClick && onPhotoClick(idx)}
                        />
                      </div>
                    </div>
                  </div>

                  {/* 2. Chapter Editorial Narrative */}
                  <div
                    className={`w-full md:w-1/2 pl-14 md:pl-0 text-left ${
                      isEven ? 'md:text-right' : 'md:text-left'
                    }`}
                  >
                    {/* Chapter Number & Year */}
                    <div className="flex items-center gap-3 mb-1 text-xs text-[#71806A] font-sans font-semibold tracking-widest uppercase justify-start md:justify-start">
                      <span className={isEven ? 'md:ml-auto' : ''}>
                        {formatChapter(idx, 'editorial')}
                      </span>
                      <span>·</span>
                      <span className="text-[#B69A62] font-serif text-sm font-bold">
                        {chapter.date}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl text-[#29211C] tracking-wide mt-1">
                      {chapter.title}
                    </h3>

                    <p className="mt-3 text-sm sm:text-base text-[#5B4435] leading-relaxed font-light">
                      {chapter.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
