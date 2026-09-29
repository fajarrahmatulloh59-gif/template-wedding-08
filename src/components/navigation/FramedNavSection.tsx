// ======================================================
// 🟢 SYSTEM CODE — FRAMED SECTION NAVIGATION (IN-PAGE SECTION)
//
// TERBINGKAI DALAM SATU SECTION KHUSUS & PERMANEN DI WEB
// TIDAK PERNAH HILANG / TERHIDDEN KETIKA DIKLIK
// JANGAN DIUBAH UNTUK EDIT DATA CLIENT.
// ======================================================

import React from 'react';
import {
  Heart,
  Sparkles,
  Calendar,
  Clock,
  BookOpen,
  Image as ImageIcon,
  MapPin,
  MessageSquareHeart,
  Gift,
  Infinity as InfinityIcon,
  ChevronRight,
} from 'lucide-react';
import { WeddingData } from '../../types/wedding';
import { isSectionEnabled } from '../../utils/sectionToggle';

interface FramedNavSectionProps {
  data: WeddingData;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

interface NavCard {
  id: string;
  num: string;
  title: string;
  sundanese: string;
  description: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  enabledKey?: keyof WeddingData['sections'];
}

const navCards: NavCard[] = [
  {
    id: 'the-couple',
    num: '01',
    title: 'Kedua Mempelai',
    sundanese: 'Panganten Pameget & Istri',
    description: 'Profil mempelai pria dan wanita serta silsilah keluarga',
    icon: Heart,
    enabledKey: 'couple',
  },
  {
    id: 'pasundan-heritage',
    num: '02',
    title: 'Filosofi Kasundaan',
    sundanese: 'Silih Asih, Asah, Asuh',
    description: 'Tiga pilar pusaka: Alam, Warisan Budaya, & Sauyunan',
    icon: Sparkles,
    enabledKey: 'pasundanTouch',
  },
  {
    id: 'our-day',
    num: '03',
    title: 'Rangkaian Acara',
    sundanese: 'Akad Nikah & Resepsi',
    description: 'Waktu pelaksanaan, tata cara adat, & tombol simpan kalender',
    icon: Calendar,
    enabledKey: 'events',
  },
  {
    id: 'countdown',
    num: '04',
    title: 'Hitung Mundur Waktu',
    sundanese: 'Ngetang Wanci Bahagia',
    description: 'Hitungan hari, jam, menit, & detik menuju hari bahagia',
    icon: Clock,
    enabledKey: 'countdown',
  },
  {
    id: 'our-story',
    num: '05',
    title: 'Kisah Kasih',
    sundanese: 'Lalakon Asih Dua Insan',
    description: 'Perjalanan cinta dari perjumpaan hingga ikrar suci',
    icon: BookOpen,
    enabledKey: 'story',
  },
  {
    id: 'our-moments',
    num: '06',
    title: 'Galeri Foto Momen',
    sundanese: 'Koleksi Poto Panganten',
    description: 'Potret kenangan prewedding berbalut busana adat Sunda',
    icon: ImageIcon,
    enabledKey: 'gallery',
  },
  {
    id: 'venue',
    num: '07',
    title: 'Lokasi & Peta Acara',
    sundanese: 'Panyicingan Tempat Resepsi',
    description: 'Alamat lengkap venue dan petunjuk arah Google Maps',
    icon: MapPin,
    enabledKey: 'details',
  },
  {
    id: 'guestbook',
    num: '08',
    title: 'Buku Tamu & Doa',
    sundanese: 'Untaian Doa & Pangestu',
    description: 'Kirimkan doa restu dan konfirmasi kehadiran Anda',
    icon: MessageSquareHeart,
    enabledKey: 'guestbook',
  },
  {
    id: 'wedding-gift',
    num: '09',
    title: 'Tanda Asih (Kado)',
    sundanese: 'Kado & Titipan Asih',
    description: 'Nomor rekening transfer dan alamat pengiriman kado fisik',
    icon: Gift,
    enabledKey: 'gift',
  },
  {
    id: 'until-forever',
    num: '10',
    title: 'Ungkapan Syukur',
    sundanese: 'Hatur Nuhun Salawasna',
    description: 'Ucapan terima kasih keluarga besar mempelai',
    icon: InfinityIcon,
    enabledKey: 'lastPage',
  },
];

export const FramedNavSection: React.FC<FramedNavSectionProps> = ({
  data,
  activeSection,
  onNavigate,
}) => {
  const visibleCards = navCards.filter((card) => {
    if (!card.enabledKey) return true;
    return isSectionEnabled(data.sections, card.enabledKey);
  });

  return (
    <section
      id="section-navigator"
      aria-label="Panduan Navigasi Seluruh Bagian Undangan"
      className="py-16 sm:py-20 px-4 sm:px-6 relative bg-[#FAF7F0] border-y border-[#B69A62]/30 select-none"
    >
      {/* Background Subtle Wood Inlay Texture */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#76563E 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* SECTION FRAME HEADER */}
        <div className="text-center mb-10 sm:mb-12">
          {/* Siger Heritage Crown Miniature */}
          <div className="w-10 h-10 mx-auto mb-3 opacity-90">
            <img
              src="/ornaments/sundanese-siger.svg"
              alt=""
              aria-hidden="true"
              className="w-full h-full object-contain"
            />
          </div>

          <span className="text-[11px] sm:text-xs tracking-[0.25em] sm:tracking-[0.35em] uppercase text-[#71806A] font-semibold block mb-1">
            PANUNTUN ACARA KASUNDAAN
          </span>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#29211C] font-normal tracking-wide">
            Navigasi Bagian Undangan
          </h2>

          <p className="text-xs sm:text-sm font-serif italic text-[#76563E] mt-1.5 max-w-lg mx-auto">
            “Pilih bagian yang ingin Anda tuju langsung. Bagian navigasi ini akan selalu standby dan tidak akan hilang.”
          </p>

          <div className="w-24 sm:w-32 h-[1px] bg-[#B69A62]/50 mx-auto mt-4" />
        </div>

        {/* ARCHITECTURAL HERITAGE FRAME CONTAINER */}
        <div className="relative p-3 sm:p-6 rounded-lg border-2 border-[#B69A62]/40 bg-[#F5EFE3]/60 shadow-lg">
          
          {/* 4 Antique Gold Corner Ornaments */}
          <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#B69A62] pointer-events-none" />
          <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#B69A62] pointer-events-none" />
          <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#B69A62] pointer-events-none" />
          <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#B69A62] pointer-events-none" />

          {/* GRID OF NAVIGATION CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 p-2">
            {visibleCards.map((card) => {
              const Icon = card.icon;
              const isActive = activeSection === card.id;

              return (
                <button
                  key={card.id}
                  type="button"
                  onClick={() => onNavigate(card.id)}
                  aria-label={`Buka bagian ${card.title}`}
                  className={`group relative flex items-start gap-3.5 p-3.5 sm:p-4 rounded-md border text-left transition-all duration-300 shadow-xs hover:shadow-md cursor-pointer ${
                    isActive
                      ? 'bg-[#76563E] text-[#FAF7F0] border-[#5B4435] scale-[1.01] ring-1 ring-[#B69A62]'
                      : 'bg-[#FAF7F0] text-[#29211C] border-[#B69A62]/30 hover:border-[#B69A62] hover:bg-[#FAF7F0]'
                  }`}
                >
                  {/* Left Icon Badge */}
                  <div
                    className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center border transition-all ${
                      isActive
                        ? 'bg-[#FAF7F0] text-[#76563E] border-[#B69A62]'
                        : 'bg-[#F5EFE3] text-[#76563E] border-[#B69A62]/40 group-hover:scale-105 group-hover:border-[#B69A62]'
                    }`}
                  >
                    <Icon size={18} />
                  </div>

                  {/* Card Text Information */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1 mb-0.5">
                      <span
                        className={`text-[10px] font-mono tracking-wider ${
                          isActive ? 'text-[#B69A62] font-semibold' : 'text-[#71806A]'
                        }`}
                      >
                        BAGIAN {card.num}
                      </span>
                      {isActive && (
                        <span className="text-[10px] uppercase tracking-widest px-1.5 py-0.2 rounded-xs bg-[#B69A62] text-[#29211C] font-bold font-sans">
                          Aktif
                        </span>
                      )}
                    </div>

                    <h3
                      className={`font-serif text-sm sm:text-base font-semibold tracking-wide leading-tight truncate ${
                        isActive ? 'text-[#FAF7F0]' : 'text-[#29211C]'
                      }`}
                    >
                      {card.title}
                    </h3>

                    <p
                      className={`text-[11px] font-serif italic truncate mt-0.5 ${
                        isActive ? 'text-[#FAF7F0]/80' : 'text-[#76563E]'
                      }`}
                    >
                      {card.sundanese}
                    </p>

                    <p
                      className={`text-[11px] font-sans line-clamp-1 mt-1 ${
                        isActive ? 'text-[#FAF7F0]/70' : 'text-[#76563E]/80'
                      }`}
                    >
                      {card.description}
                    </p>
                  </div>

                  {/* Right Arrow indicator */}
                  <div
                    className={`shrink-0 self-center transition-transform group-hover:translate-x-1 ${
                      isActive ? 'text-[#B69A62]' : 'text-[#B69A62]/60 group-hover:text-[#76563E]'
                    }`}
                  >
                    <ChevronRight size={16} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Bottom helper info */}
          <div className="mt-4 pt-3 border-t border-[#B69A62]/20 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#76563E] px-2 text-center sm:text-left gap-1">
            <span>✨ Seluruh navigasi ini tetap standby & dapat diklik kapan saja.</span>
            <span className="font-serif italic text-[#71806A]">Template 08 — Sunda Heritage</span>
          </div>
        </div>

      </div>
    </section>
  );
};
