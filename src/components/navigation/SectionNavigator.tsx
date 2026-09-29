// ======================================================
// 🟢 SYSTEM CODE — STANDBY FRAMED NAVIGATION BAR
//
// TERBINGKAI, STANDBY PERMANEN, TIDAK PERNAH TERHIDDEN SAAT DIKLIK
// JANGAN DIUBAH UNTUK EDIT DATA CLIENT.
// ======================================================

import React, { useRef, useEffect } from 'react';
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
  Compass,
  ArrowUp,
} from 'lucide-react';
import { WeddingData } from '../../types/wedding';
import { isSectionEnabled } from '../../utils/sectionToggle';

interface SectionNavigatorProps {
  data: WeddingData;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export interface NavItem {
  id: string;
  label: string;
  sundaneseLabel: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  enabledKey?: keyof WeddingData['sections'];
}

export const navItems: NavItem[] = [
  {
    id: 'section-navigator',
    label: 'Daftar',
    sundaneseLabel: 'Panuntun',
    icon: Compass,
  },
  {
    id: 'the-couple',
    label: 'Mempelai',
    sundaneseLabel: 'Panganten',
    icon: Heart,
    enabledKey: 'couple',
  },
  {
    id: 'pasundan-heritage',
    label: 'Budaya',
    sundaneseLabel: 'Kasundaan',
    icon: Sparkles,
    enabledKey: 'pasundanTouch',
  },
  {
    id: 'our-day',
    label: 'Acara',
    sundaneseLabel: 'Runtuyan',
    icon: Calendar,
    enabledKey: 'events',
  },
  {
    id: 'countdown',
    label: 'Waktu',
    sundaneseLabel: 'Ngetang',
    icon: Clock,
    enabledKey: 'countdown',
  },
  {
    id: 'our-story',
    label: 'Cerita',
    sundaneseLabel: 'Lalakon',
    icon: BookOpen,
    enabledKey: 'story',
  },
  {
    id: 'our-moments',
    label: 'Galeri',
    sundaneseLabel: 'Momen',
    icon: ImageIcon,
    enabledKey: 'gallery',
  },
  {
    id: 'venue',
    label: 'Lokasi',
    sundaneseLabel: 'Tempat',
    icon: MapPin,
    enabledKey: 'details',
  },
  {
    id: 'guestbook',
    label: 'Ucapan',
    sundaneseLabel: 'Doa Restu',
    icon: MessageSquareHeart,
    enabledKey: 'guestbook',
  },
  {
    id: 'wedding-gift',
    label: 'Kado',
    sundaneseLabel: 'Tanda Asih',
    icon: Gift,
    enabledKey: 'gift',
  },
  {
    id: 'until-forever',
    label: 'Penutup',
    sundaneseLabel: 'Hatur Nuhun',
    icon: InfinityIcon,
    enabledKey: 'lastPage',
  },
];

export const SectionNavigator: React.FC<SectionNavigatorProps> = ({
  data,
  activeSection,
  onNavigate,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const activeBtnRef = useRef<HTMLButtonElement>(null);

  // Filter sections that are enabled in weddingData.sections
  const enabledNavItems = navItems.filter((item) => {
    if (!item.enabledKey) return true;
    return isSectionEnabled(data.sections, item.enabledKey);
  });

  // Smoothly center the active nav item in horizontal scroll without jitter
  useEffect(() => {
    if (activeBtnRef.current && scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const btn = activeBtnRef.current;
      const containerWidth = container.clientWidth;
      const btnLeft = btn.offsetLeft;
      const btnWidth = btn.clientWidth;
      const targetScroll = btnLeft - containerWidth / 2 + btnWidth / 2;
      container.scrollTo({
        left: targetScroll,
        behavior: 'smooth',
      });
    }
  }, [activeSection]);

  const handleNavClick = (id: string) => {
    // Navigate smoothly - NEVER hide or dismiss the bar
    onNavigate(id);
  };

  return (
    <nav
      aria-label="Bilah Navigasi Standby Terbingkai"
      className="fixed bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 z-40 w-[96vw] max-w-4xl select-none pointer-events-auto"
      style={{ paddingBottom: 'max(env(safe-area-inset-bottom, 0px), 0px)' }}
    >
      {/* TERBINGKAI: Architectural Heritage Frame with Antique Gold Border & Shadow */}
      <div className="relative p-1.5 sm:p-2 rounded-xl sm:rounded-2xl bg-[#FAF7F0]/95 backdrop-blur-md border-2 border-[#B69A62] shadow-[0_8px_30px_rgba(0,0,0,0.15)] flex items-center justify-between gap-1 sm:gap-2">
        
        {/* Subtle decorative gold corner notches */}
        <div className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-[#B69A62] pointer-events-none" />
        <div className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-[#B69A62] pointer-events-none" />
        <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-[#B69A62] pointer-events-none" />
        <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-[#B69A62] pointer-events-none" />

        {/* Horizontal Scrollable Bar of ALL section buttons */}
        <div
          ref={scrollContainerRef}
          className="flex-1 flex items-center justify-start sm:justify-center gap-1 sm:gap-1.5 overflow-x-auto scrollbar-none py-1 px-1 scroll-smooth"
        >
          {enabledNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <button
                key={item.id}
                ref={isActive ? activeBtnRef : null}
                type="button"
                onClick={() => handleNavClick(item.id)}
                aria-label={`Buka bagian ${item.label}`}
                aria-current={isActive ? 'true' : undefined}
                className={`group relative flex flex-col items-center justify-center shrink-0 px-2.5 sm:px-3 py-1 rounded-lg transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-[#76563E] text-[#FAF7F0] shadow-sm'
                    : 'text-[#5B4435] hover:text-[#29211C] hover:bg-[#F5EFE3]'
                }`}
              >
                {/* Active Indicator Bar */}
                {isActive && (
                  <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-4 h-[2px] rounded-full bg-[#B69A62]" />
                )}

                {/* Section Icon */}
                <div
                  className={`flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full transition-transform ${
                    isActive
                      ? 'text-[#B69A62]'
                      : 'text-[#76563E] group-hover:scale-110'
                  }`}
                >
                  <Icon size={16} />
                </div>

                {/* Section Label */}
                <span
                  className={`text-[9.5px] sm:text-[10.5px] font-serif tracking-wider uppercase mt-0.5 leading-tight ${
                    isActive ? 'font-bold text-[#FAF7F0]' : 'font-medium'
                  }`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Back To Top Quick Button */}
        <div className="shrink-0 pl-1 sm:pl-2 border-l border-[#B69A62]/30">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            title="Kembali ke paling atas"
            aria-label="Kembali ke awal undangan"
            className="flex flex-col items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#F5EFE3] hover:bg-[#76563E] text-[#76563E] hover:text-[#FAF7F0] border border-[#B69A62]/40 shadow-xs transition-colors cursor-pointer"
          >
            <ArrowUp size={14} className="group-hover:text-[#B69A62]" />
            <span className="text-[8px] font-serif uppercase tracking-tighter">Atas</span>
          </button>
        </div>

      </div>
    </nav>
  );
};
