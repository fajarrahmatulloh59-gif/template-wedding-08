// ======================================================
// 🟢 SYSTEM CODE — THE PASUNDAN TOUCH: ROOTED IN HERITAGE
//
// EDITORIAL SECTION: NATURE · HERITAGE · TOGETHERNESS
// CONNECTED BY CONTINUOUS BOTANICAL SULUR
// JANGAN DIUBAH UNTUK EDIT DATA CLIENT.
// ======================================================

import React from 'react';

export const PasundanTouch: React.FC = () => {
  return (
    <section
      id="pasundan-heritage"
      className="relative py-24 sm:py-32 px-4 sm:px-8 bg-[#FAF7F0] text-[#29211C] overflow-hidden"
    >
      {/* Background Architectural Watermark Subtle Motif */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] opacity-[0.04] pointer-events-none">
        <img
          src="/ornaments/sundanese-house.svg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Editorial Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-[0.35em] text-[#71806A] font-sans font-medium">
            Filosofi Kasundaan
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#29211C] tracking-wide font-normal mt-2">
            The Pasundan Touch
          </h2>
          <p className="mt-3 text-sm sm:text-base font-serif italic text-[#76563E] leading-relaxed">
            “Kacapi suling marengan asih, melati nyambung rasa. Nyangcang tali katresna dina tatapakan budaya luhung Sunda.”
          </p>
          <div className="w-20 h-4 mx-auto mt-4 opacity-75">
            <img
              src="/ornaments/sundanese-divider.svg"
              alt=""
              aria-hidden="true"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Continuous Weaving Botanical Sulur Line (Desktop SVG Path) */}
        <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-48 bottom-32 w-16 pointer-events-none opacity-40">
          <svg className="w-full h-full" viewBox="0 0 60 800" fill="none">
            <path
              d="M30 0 Q50 200 30 400 T30 800"
              stroke="#B69A62"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
            {/* Small leaves along the spine */}
            <circle cx="30" cy="180" r="4" fill="#71806A" />
            <circle cx="30" cy="420" r="4" fill="#B69A62" />
            <circle cx="30" cy="660" r="4" fill="#76563E" />
          </svg>
        </div>

        {/* Editorial Triad: NATURE, HERITAGE, TOGETHERNESS */}
        <div className="space-y-16 lg:space-y-24">
          
          {/* 1. NATURE: Botanical & Pasundan Earth */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <div className="lg:w-1/2 text-center lg:text-right order-2 lg:order-1">
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#71806A] font-sans font-semibold">
                01 · Nature (Kaendahan Alam)
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#29211C] tracking-wide mt-1">
                Kesejukan Parahyangan
              </h3>
              <p className="mt-3 text-sm sm:text-base text-[#5B4435] leading-relaxed font-light">
                Tanah Sunda diciptakan saat Tuhan tersenyum. Rerumputan hijau, embun pagi Lembang,
                dan ronce melati suci menjadi nafas keharmonisan cinta yang senantiasa tumbuh segar dan mekar abadi.
              </p>
              <div className="mt-4 flex items-center justify-center lg:justify-end gap-2 text-xs text-[#76563E] font-serif italic">
                <span>Ronce Melati</span>
                <span>·</span>
                <span>Hawa Priangan</span>
                <span>·</span>
                <span>Gemericik Cai</span>
              </div>
            </div>

            <div className="lg:w-1/2 order-1 lg:order-2 flex justify-center">
              <div className="relative p-3 bg-[#F5EFE3] border border-[#B69A62]/40 rounded-sm shadow-md max-w-xs sm:max-w-sm">
                <div className="w-16 h-16 absolute -top-4 -right-4 opacity-50">
                  <img
                    src="/ornaments/sundanese-floral.svg"
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="aspect-[4/3] overflow-hidden rounded-xs border border-[#76563E]/20">
                  <img
                    src="/image/story-01.jpg"
                    alt="Keindahan Alam Priangan"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 2. HERITAGE: Wood, Siger & Ancestral Values */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative p-3 bg-[#F5EFE3] border border-[#B69A62]/40 rounded-sm shadow-md max-w-xs sm:max-w-sm">
                <div className="w-16 h-16 absolute -bottom-4 -left-4 opacity-50">
                  <img
                    src="/ornaments/sundanese-siger.svg"
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="aspect-[4/3] overflow-hidden rounded-xs border border-[#76563E]/20">
                  <img
                    src="/image/venue.jpg"
                    alt="Arsitektur Kayu Sunda"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 text-center lg:text-left">
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#B69A62] font-sans font-semibold">
                02 · Heritage (Adat & Luhung)
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#29211C] tracking-wide mt-1">
                Silih Asih, Silih Asah, Silih Asuh
              </h3>
              <p className="mt-3 text-sm sm:text-base text-[#5B4435] leading-relaxed font-light">
                Mahkota Siger Sunda melambangkan kehormatan, kearifan, dan keanggunan seorang istri.
                Dibalut kekokohan kayu jati dan ukiran sulur, kami merawat warisan para leluhur sebagai kompas berumah tangga.
              </p>
              <div className="mt-4 flex items-center justify-center lg:justify-start gap-2 text-xs text-[#76563E] font-serif italic">
                <span>Mahkota Siger</span>
                <span>·</span>
                <span>Kayu Teak Alami</span>
                <span>·</span>
                <span>Tata Krama</span>
              </div>
            </div>
          </div>

          {/* 3. TOGETHERNESS: Sacred Union */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <div className="lg:w-1/2 text-center lg:text-right order-2 lg:order-1">
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#76563E] font-sans font-semibold">
                03 · Togetherness (Sauyunan)
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#29211C] tracking-wide mt-1">
                Runtut Raut Sauyunan
              </h3>
              <p className="mt-3 text-sm sm:text-base text-[#5B4435] leading-relaxed font-light">
                Kidung doa menyatukan dua keluarga besar dalam satu ikatan suci.
                Bagaikan kacapi dan suling yang bersenandung harmoni, kami melangkah menyongsong masa depan dengan keikhlasan hati.
              </p>
              <div className="mt-4 flex items-center justify-center lg:justify-end gap-2 text-xs text-[#76563E] font-serif italic">
                <span>Janji Suci</span>
                <span>·</span>
                <span>Restu Sepuh</span>
                <span>·</span>
                <span>Langgeng Dugi Ka Sepuh</span>
              </div>
            </div>

            <div className="lg:w-1/2 order-1 lg:order-2 flex justify-center">
              <div className="relative p-3 bg-[#F5EFE3] border border-[#B69A62]/40 rounded-sm shadow-md max-w-xs sm:max-w-sm">
                <div className="aspect-[4/3] overflow-hidden rounded-xs border border-[#76563E]/20">
                  <img
                    src="/image/story-02.jpg"
                    alt="Sauyunan Pasangan"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
