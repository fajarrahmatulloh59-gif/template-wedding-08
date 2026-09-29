// ======================================================
// 🟢 SYSTEM CODE — GUESTBOOK LIST
//
// JANGAN DIUBAH UNTUK EDIT DATA CLIENT.
// ======================================================

import React from 'react';
import { GuestbookEntry } from '../../types/wedding';
import { MessageSquareHeart } from 'lucide-react';

interface GuestbookListProps {
  entries: GuestbookEntry[];
  isLoading: boolean;
}

export const GuestbookList: React.FC<GuestbookListProps> = ({ entries, isLoading }) => {
  const formatTime = (dateStr: string) => {
    try {
      const date = new Date(dateStr);
      return date.toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      });
    } catch {
      return '';
    }
  };

  return (
    <div className="bg-[#FAF7F0] border-2 border-[#B69A62]/40 rounded-sm shadow-xl p-6 sm:p-8 relative flex flex-col h-[480px]">
      {/* Antique Gold Corner Accents */}
      <div className="absolute top-2.5 left-2.5 w-3.5 h-3.5 border-t-2 border-l-2 border-[#B69A62]" />
      <div className="absolute top-2.5 right-2.5 w-3.5 h-3.5 border-t-2 border-r-2 border-[#B69A62]" />
      <div className="absolute bottom-2.5 left-2.5 w-3.5 h-3.5 border-b-2 border-l-2 border-[#B69A62]" />
      <div className="absolute bottom-2.5 right-2.5 w-3.5 h-3.5 border-b-2 border-r-2 border-[#B69A62]" />

      <div className="flex items-center justify-between pb-4 border-b border-[#B69A62]/20">
        <h3 className="font-serif text-xl sm:text-2xl text-[#29211C] tracking-wide flex items-center gap-2">
          <MessageSquareHeart size={20} className="text-[#B69A62]" />
          <span>Untaian Doa ({entries.length})</span>
        </h3>
        <span className="text-[10px] uppercase tracking-wider text-[#71806A] font-sans font-semibold">
          Tamu Undangan
        </span>
      </div>

      {/* Scrollable list */}
      <div className="flex-1 overflow-y-auto mt-4 pr-1 space-y-4 divide-y divide-[#B69A62]/10 scrollbar-thin scrollbar-thumb-[#B69A62]/30">
        {isLoading && entries.length === 0 ? (
          <div className="py-16 text-center text-xs text-[#76563E] animate-pulse">
            Memuat untaian doa restu...
          </div>
        ) : entries.length === 0 ? (
          <div className="py-16 text-center text-xs text-[#76563E] font-serif italic">
            Belum ada ucapan doa. Jadilah yang pertama memberikan doa restu!
          </div>
        ) : (
          entries.map((entry) => (
            <div key={entry.id} className="pt-3 first:pt-0">
              <div className="flex items-start justify-between gap-2">
                <span className="font-serif text-base font-semibold text-[#29211C] tracking-wide">
                  {entry.name}
                </span>

                {/* Clean unboxed metadata separator */}
                <div className="flex items-center gap-1.5 text-[10px] text-[#71806A] font-sans">
                  <span>
                    {entry.attendance === 'present'
                      ? 'Akan Hadir'
                      : entry.attendance === 'absent'
                      ? 'Berhalangan'
                      : 'Ragu-ragu'}
                  </span>
                  <span>·</span>
                  <span>{formatTime(entry.createdAt)}</span>
                </div>
              </div>

              <p className="mt-1.5 text-xs sm:text-sm text-[#5B4435] leading-relaxed font-light">
                {entry.message}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
