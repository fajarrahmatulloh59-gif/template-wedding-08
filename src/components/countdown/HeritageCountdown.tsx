// ======================================================
// 🟢 SYSTEM CODE — COUNTING THE DAYS
//
// BACKGROUND: FOREST GREEN #30483A
// SLIM & ELEGANT TYPOGRAPHIC COUNTDOWN
// JANGAN DIUBAH UNTUK EDIT DATA CLIENT.
// ======================================================

import React, { useEffect, useState } from 'react';
import { WeddingData } from '../../types/wedding';
import { CalendarPlus } from 'lucide-react';

interface HeritageCountdownProps {
  data: WeddingData;
}

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

export const HeritageCountdown: React.FC<HeritageCountdownProps> = ({ data }) => {
  const [timeLeft, setTimeLeft] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPast: false,
  });

  useEffect(() => {
    const target = new Date(data.countdown.targetDate).getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isPast: false });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [data.countdown.targetDate]);

  const handleAddToCalendar = () => {
    const title = encodeURIComponent(`The Wedding of ${data.groom.name} & ${data.bride.name}`);
    const details = encodeURIComponent(
      `Pernikahan ${data.groom.fullName} & ${data.bride.fullName}\nLokasi: ${data.venue.name}, ${data.venue.address}`
    );
    const location = encodeURIComponent(`${data.venue.name}, ${data.venue.address}`);
    // Format YYYYMMDDTHHmmssZ
    const startDate = '20261012T010000Z'; // 08:00 WIB
    const endDate = '20261012T070000Z'; // 14:00 WIB
    const gCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&details=${details}&location=${location}`;
    window.open(gCalUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="countdown"
      aria-label="Hitung Mundur Menuju Hari Bahagia"
      className="relative py-24 sm:py-32 px-4 sm:px-8 bg-[#30483A] text-[#FAF7F0] overflow-hidden"
    >
      {/* Background Botanical Overlay */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(#B69A62 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      {/* Subtle Siger Crest in Center */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-28 h-28 opacity-10 pointer-events-none filter invert">
        <img
          src="/ornaments/sundanese-siger.svg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Header */}
        <span className="text-xs uppercase tracking-[0.35em] text-[#B69A62] font-sans font-medium">
          Counting Down To Forever
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FAF7F0] tracking-wide font-normal mt-2">
          Ngetang Wanci
        </h2>
        <p className="mt-3 text-sm sm:text-base font-serif italic text-[#FAF7F0]/80 max-w-md mx-auto leading-relaxed">
          Unggal detik mangrupakeun léngkah nuju babak anyar kahirupan kami duaan.
        </p>

        {/* Big Numbers Non-Bulky Countdown Grid */}
        <div className="mt-12 sm:mt-16 flex items-center justify-center gap-4 sm:gap-8 max-w-2xl mx-auto">
          {[
            { label: 'Dinten (Hari)', value: timeLeft.days },
            { label: 'Jam', value: timeLeft.hours },
            { label: 'Menit', value: timeLeft.minutes },
            { label: 'Detik', value: timeLeft.seconds },
          ].map((item, index) => (
            <React.Fragment key={item.label}>
              <div className="flex-1 flex flex-col items-center">
                {/* Big Number with Tabular Figures */}
                <span className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#FAF7F0] font-light tracking-tight tabular-nums">
                  {item.value < 10 ? `0${item.value}` : item.value}
                </span>
                {/* Gold Underline Accent */}
                <div className="w-8 sm:w-12 h-[1px] bg-[#B69A62] my-2 sm:my-3" />
                {/* Unit Label */}
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#FAF7F0]/70 font-sans">
                  {item.label}
                </span>
              </div>

              {index < 3 && (
                <span className="font-serif text-2xl sm:text-4xl text-[#B69A62]/60 select-none -translate-y-3">
                  :
                </span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Add to Calendar Action */}
        <div className="mt-12 sm:mt-14">
          <button
            onClick={handleAddToCalendar}
            aria-label="Simpan tanggal di Google Calendar"
            className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-sm bg-[#B69A62] text-[#29211C] hover:bg-[#c9af75] text-xs uppercase tracking-[0.2em] font-serif font-semibold shadow-lg transition-all duration-300 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FAF7F0]"
          >
            <CalendarPlus size={16} />
            <span>SIMPAN DI GOOGLE CALENDAR</span>
          </button>
        </div>
      </div>
    </section>
  );
};
