// ======================================================
// 🟢 SYSTEM CODE — YOUR BLESSING: GUESTBOOK SECTION
//
// JANGAN DIUBAH UNTUK EDIT DATA CLIENT.
// ======================================================

import React, { useEffect, useState } from 'react';
import { GuestbookEntry } from '../../types/wedding';
import { fetchGuestbookEntries } from '../../services/guestbookService';
import { GuestbookForm } from './GuestbookForm';
import { GuestbookList } from './GuestbookList';

export const GuestbookSection: React.FC = () => {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    fetchGuestbookEntries().then((data) => {
      if (isMounted) {
        setEntries(data);
        setIsLoading(false);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  const handleEntryAdded = (newEntry: GuestbookEntry) => {
    setEntries((prev) => [newEntry, ...prev]);
  };

  return (
    <section id="guestbook" className="relative py-24 sm:py-32 px-4 sm:px-8 bg-[#F5EFE3] overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-10 right-8 w-32 h-32 opacity-10 pointer-events-none">
        <img
          src="/ornaments/sundanese-floral.svg"
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
              Prayers & Wishes
            </span>
            <span className="w-8 h-[1px] bg-[#B69A62]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#29211C] tracking-wide font-normal">
            Your Blessing
          </h2>

          <p className="mt-3 text-sm sm:text-base font-serif italic text-[#76563E] leading-relaxed">
            Leave a prayer for our journey.
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

        {/* 2-Column Responsive Layout: Form on Left, List on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <GuestbookForm onEntryAdded={handleEntryAdded} />
          <GuestbookList entries={entries} isLoading={isLoading} />
        </div>

      </div>
    </section>
  );
};
