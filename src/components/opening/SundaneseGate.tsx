// ======================================================
// 🟢 SYSTEM CODE — OPENING: THE GATE OF HERITAGE
//
// SIGNATURE: "WAYANG OPENS THE GATE"
// INTERACTION: Gate stays closed initially until user clicks "BUKA UNDANGAN"
// Upon clicking: Wayang animates, Gate swings open wide, reveals couple & gold glow,
// then transitions smoothly into the main invitation website.
// MANDATORY: FIT TO VIEWPORT → BUTTON ALWAYS ACCESSIBLE
// JANGAN DIUBAH UNTUK EDIT DATA CLIENT.
// ======================================================

import React, { useState } from 'react';
import { WeddingData } from '../../types/wedding';
import { audioService } from '../../services/audioService';

interface SundaneseGateProps {
  data: WeddingData;
  onOpen: () => void;
  guestName?: string;
}

export const SundaneseGate: React.FC<SundaneseGateProps> = ({
  data,
  onOpen,
  guestName,
}) => {
  // Gate is CLOSED initially. Only opens when user clicks "BUKA UNDANGAN"
  const [isOpenClicked, setIsOpenClicked] = useState(false);
  const [animStage, setAnimStage] = useState<'closed' | 'wayang-action' | 'gate-opening' | 'revealed'>('closed');
  const [isExiting, setIsExiting] = useState(false);

  const handleOpenInvitation = () => {
    if (isOpenClicked) return; // prevent multiple clicks
    setIsOpenClicked(true);

    // 1. Play music immediately on user gesture
    audioService.play();

    // 2. Step 1: Wayang Golek figures make subtle bowing/gesture towards the gate
    setAnimStage('wayang-action');

    // 3. Step 2: The wooden heritage gate doors swing open with 3D perspective
    setTimeout(() => {
      setAnimStage('gate-opening');
    }, 250);

    // 4. Step 3: Golden glow and couple photo revealed behind the open gate
    setTimeout(() => {
      setAnimStage('revealed');
    }, 700);

    // 5. Step 4: Smooth transition out into the full wedding website
    setTimeout(() => {
      setIsExiting(true);
    }, 1400);

    setTimeout(() => {
      onOpen();
    }, 1900);
  };

  const isGateOpen = animStage === 'gate-opening' || animStage === 'revealed';

  return (
    <section
      aria-label="Gerbang Pembuka Undangan Budaya Sunda"
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#F5EFE3] overflow-hidden select-none transition-all duration-700 ${
        isExiting ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100'
      }`}
      style={{ minHeight: '100dvh', height: '100dvh' }}
    >
      {/* Background Subtle Wood & Botanical Texture */}
      <div className="absolute inset-0 bg-[#F5EFE3] opacity-95">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#76563E 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />
        {/* Soft Golden Glow in center when gate opens */}
        <div
          className={`absolute inset-0 bg-radial from-[#B69A62]/30 via-[#F5EFE3]/10 to-transparent transition-opacity duration-1000 ${
            isGateOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>

      {/* Heritage Frame & Arch Header */}
      <div className="absolute top-2 sm:top-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none px-4 text-center">
        <span className="text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.35em] uppercase text-[#76563E] font-medium font-sans">
          The Wedding Celebration of
        </span>
        <div className="w-16 sm:w-24 h-[1px] bg-[#B69A62]/40 mt-1" />
      </div>

      {/* Main Responsive Viewport Container (Fit in 100dvh, absolutely no page scroll) */}
      <div className="relative w-full max-w-4xl h-full flex flex-col justify-between items-center py-6 sm:py-8 px-4 sm:px-8 z-10">
        
        {/* TOP SPACER for balance */}
        <div className="h-6 sm:h-8 shrink-0" />

        {/* CENTER STAGE: Gate Architecture + Wayang Golek + Inner Revealed Couple */}
        <div className="relative w-full max-w-[680px] flex-1 flex items-center justify-center min-h-0 my-auto">
          
          {/* PERSPECTIVE GATE SCENE */}
          <div className="relative w-full h-[54vh] max-h-[460px] min-h-[290px] flex items-center justify-center [perspective:1200px]">
            
            {/* ================= 1. REVEALED INNER CONTENT (Revealed when gate opens) ================= */}
            <div
              className={`absolute inset-0 z-10 flex flex-col items-center justify-center p-3 sm:p-5 transition-all duration-1000 text-center ${
                isGateOpen
                  ? 'opacity-100 scale-100 blur-0'
                  : 'opacity-0 scale-95 blur-sm pointer-events-none'
              }`}
            >
              {/* Couple Photo with Botanical Antique Gold Frame */}
              <div className="relative mb-2 sm:mb-3 shrink-0">
                <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-[#B69A62] shadow-xl p-1 bg-[#FAF7F0]">
                  <img
                    src={data.couplePhoto}
                    alt={`${data.groom.name} & ${data.bride.name}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                {/* Botanical Siger Top Crown Accent */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 pointer-events-none drop-shadow-sm">
                  <img
                    src="/ornaments/sundanese-siger.svg"
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Mempelai Names */}
              <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#29211C] tracking-wide font-normal leading-tight">
                <span>{data.groom.name}</span>
                <span className="text-[#B69A62] font-serif italic mx-2 font-light">&</span>
                <span>{data.bride.name}</span>
              </h1>

              {/* Tagline & Date */}
              <p className="text-xs sm:text-sm font-serif italic text-[#76563E] mt-1 tracking-wider">
                “A Love Rooted in Heritage”
              </p>

              <div className="flex items-center gap-2 mt-1.5 text-[11px] sm:text-xs tracking-widest text-[#5B4435] uppercase font-sans">
                <span>{data.wedding.date}</span>
                <span className="text-[#B69A62]">·</span>
                <span>{data.venue.city || 'Bandung, Jawa Barat'}</span>
              </div>

              <div className="mt-2 text-xs font-serif text-[#30483A] animate-pulse">
                Membuka Gerbang Kasundaan...
              </div>
            </div>

            {/* ================= 2. GATE PANELS (Sundanese Heritage Wooden Doors - CLOSED INITIALLY) ================= */}
            {/* Left Gate Panel */}
            <div
              className={`absolute top-0 left-0 w-1/2 h-full z-20 origin-left transition-transform duration-1000 ease-[cubic-bezier(0.25,0.1,0.25,1)] shadow-2xl rounded-l-md border-r border-[#5B4435]/60 bg-gradient-to-r from-[#5B4435] via-[#76563E] to-[#453227] ${
                isGateOpen
                  ? '-rotate-y-95 opacity-20 pointer-events-none'
                  : 'rotate-y-0 opacity-100'
              }`}
              style={{
                boxShadow: isGateOpen ? 'none' : 'inset -5px 0 15px rgba(0,0,0,0.5)',
              }}
            >
              {/* Left Carved Wood Paneling & Botanical Inlay */}
              <div className="relative w-full h-full p-3 sm:p-4 flex flex-col justify-between border-2 border-[#B69A62]/30 m-1 rounded-l">
                <div className="flex justify-between items-start opacity-70">
                  <div className="w-5 h-5 border-t-2 border-l-2 border-[#B69A62]" />
                  <div className="w-5 h-5 border-t-2 border-r-2 border-[#B69A62]" />
                </div>
                
                {/* Traditional Sundanese Carving Motif */}
                <div className="flex flex-col items-center justify-center my-auto px-2">
                  <div className="w-12 h-16 sm:w-16 sm:h-24 opacity-60">
                    <img
                      src="/ornaments/sundanese-sulur.svg"
                      alt=""
                      aria-hidden="true"
                      className="w-full h-full object-contain -rotate-90 filter invert-[0.8] sepia-[0.4]"
                    />
                  </div>
                  <div className="text-[10px] tracking-widest text-[#FAF7F0]/70 uppercase font-serif mt-2">
                    PARAHYANGAN
                  </div>
                </div>

                {/* Left Brass Door Handle */}
                <div className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-12 rounded-full border border-[#B69A62] bg-[#B69A62]/40 shadow-md flex items-center justify-center">
                  <div className="w-1.5 h-6 rounded bg-[#FAF7F0]/80" />
                </div>

                <div className="flex justify-between items-end opacity-70">
                  <div className="w-5 h-5 border-b-2 border-l-2 border-[#B69A62]" />
                  <div className="w-5 h-5 border-b-2 border-r-2 border-[#B69A62]" />
                </div>
              </div>
            </div>

            {/* Right Gate Panel */}
            <div
              className={`absolute top-0 right-0 w-1/2 h-full z-20 origin-right transition-transform duration-1000 ease-[cubic-bezier(0.25,0.1,0.25,1)] shadow-2xl rounded-r-md border-l border-[#5B4435]/60 bg-gradient-to-l from-[#5B4435] via-[#76563E] to-[#453227] ${
                isGateOpen
                  ? 'rotate-y-95 opacity-20 pointer-events-none'
                  : 'rotate-y-0 opacity-100'
              }`}
              style={{
                boxShadow: isGateOpen ? 'none' : 'inset 5px 0 15px rgba(0,0,0,0.5)',
              }}
            >
              {/* Right Carved Wood Paneling & Botanical Inlay */}
              <div className="relative w-full h-full p-3 sm:p-4 flex flex-col justify-between border-2 border-[#B69A62]/30 m-1 rounded-r">
                <div className="flex justify-between items-start opacity-70">
                  <div className="w-5 h-5 border-t-2 border-l-2 border-[#B69A62]" />
                  <div className="w-5 h-5 border-t-2 border-r-2 border-[#B69A62]" />
                </div>

                {/* Traditional Sundanese Carving Motif */}
                <div className="flex flex-col items-center justify-center my-auto px-2">
                  <div className="w-12 h-16 sm:w-16 sm:h-24 opacity-60">
                    <img
                      src="/ornaments/sundanese-sulur.svg"
                      alt=""
                      aria-hidden="true"
                      className="w-full h-full object-contain rotate-90 filter invert-[0.8] sepia-[0.4]"
                    />
                  </div>
                  <div className="text-[10px] tracking-widest text-[#FAF7F0]/70 uppercase font-serif mt-2">
                    KASUNDAAN
                  </div>
                </div>

                {/* Right Brass Door Handle */}
                <div className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-12 rounded-full border border-[#B69A62] bg-[#B69A62]/40 shadow-md flex items-center justify-center">
                  <div className="w-1.5 h-6 rounded bg-[#FAF7F0]/80" />
                </div>

                <div className="flex justify-between items-end opacity-70">
                  <div className="w-5 h-5 border-b-2 border-l-2 border-[#B69A62]" />
                  <div className="w-5 h-5 border-b-2 border-r-2 border-[#B69A62]" />
                </div>
              </div>
            </div>

            {/* Central Closed Gate Seal Ornament (Displayed while gate is closed) */}
            <div
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-25 pointer-events-none transition-all duration-700 flex flex-col items-center justify-center ${
                isGateOpen ? 'opacity-0 scale-75' : 'opacity-100 scale-100'
              }`}
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#FAF7F0] border-2 border-[#B69A62] shadow-2xl flex items-center justify-center p-2.5">
                <img
                  src="/ornaments/sundanese-siger.svg"
                  alt=""
                  aria-hidden="true"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="mt-2 px-3 py-1 rounded bg-[#29211C]/80 border border-[#B69A62]/40 backdrop-blur-xs text-center">
                <span className="font-serif text-xs text-[#FAF7F0] tracking-widest">
                  {data.groom.name} & {data.bride.name}
                </span>
              </div>
            </div>

            {/* ================= 3. WAYANG GOLEK FIGURES (LEFT & RIGHT) ================= */}
            {/* Left Wayang Golek: Graceful wooden rod puppet bowing and gesturing toward gate */}
            <div
              className={`absolute -left-6 sm:-left-16 md:-left-24 bottom-0 z-30 pointer-events-none transition-all duration-700 ${
                animStage === 'closed'
                  ? 'translate-x-0 opacity-85'
                  : animStage === 'wayang-action'
                  ? 'translate-x-2 -rotate-2 opacity-100 scale-105'
                  : 'translate-x-0 rotate-1 opacity-90'
              }`}
              style={{
                width: 'clamp(80px, 18vw, 150px)',
                height: 'clamp(140px, 35vh, 260px)',
              }}
            >
              <svg viewBox="0 0 100 180" className="w-full h-full drop-shadow-md">
                {/* Wooden Control Rod (Cempurit) */}
                <line x1="50" y1="90" x2="35" y2="180" stroke="#76563E" strokeWidth="2.5" />
                <line x1="28" y1="110" x2="15" y2="170" stroke="#B69A62" strokeWidth="1.5" />
                
                {/* Wayang Head & Crown (Kuluk / Sumping) */}
                <path d="M42 25 Q50 10 58 25 Q56 42 50 44 Q44 42 42 25 Z" fill="#FAF7F0" stroke="#76563E" strokeWidth="1.2" />
                {/* Headdress gold crown */}
                <path d="M40 22 C48 14 52 14 60 22 L62 16 L50 6 L38 16 Z" fill="#B69A62" />
                <circle cx="50" cy="5" r="2.5" fill="#B69A62" />
                {/* Delicate facial profile & ear ornaments (sumping) */}
                <path d="M38 28 Q34 26 38 34" stroke="#B69A62" strokeWidth="1.5" fill="none" />
                <circle cx="47" cy="27" r="1.2" fill="#29211C" />
                
                {/* Wooden Torso & Badhong */}
                <path d="M40 44 L60 44 L64 78 L36 78 Z" fill="#30483A" stroke="#76563E" strokeWidth="1.5" />
                {/* Golden chest necklace (Kalung Praba) */}
                <path d="M43 45 Q50 56 57 45" stroke="#B69A62" strokeWidth="2" fill="none" />
                <circle cx="50" cy="58" r="2.5" fill="#B69A62" />

                {/* Left Articulated Hand pointing to gate */}
                <path
                  d="M62 50 Q75 60 72 75 Q68 85 58 84"
                  stroke="#76563E"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                />
                <circle cx="72" cy="76" r="3" fill="#B69A62" />

                {/* Flowing Batik Sarong Skirt (Kain Dodot Parahyangan) */}
                <path d="M36 78 Q50 82 64 78 L70 145 Q50 152 30 145 Z" fill="#76563E" stroke="#5B4435" strokeWidth="1.5" />
                <path d="M40 85 L60 140 M46 85 L66 135" stroke="#B69A62" strokeWidth="1" strokeDasharray="3 3" />
                {/* Golden belt sash (Sampur) */}
                <path d="M48 80 Q62 100 68 135" stroke="#B69A62" strokeWidth="2" fill="none" />
              </svg>
            </div>

            {/* Right Wayang Golek: Elegant female/partner figure gesturing and holding sash */}
            <div
              className={`absolute -right-6 sm:-right-16 md:-right-24 bottom-0 z-30 pointer-events-none transition-all duration-700 ${
                animStage === 'closed'
                  ? 'translate-x-0 opacity-85'
                  : animStage === 'wayang-action'
                  ? '-translate-x-2 rotate-2 opacity-100 scale-105'
                  : 'translate-x-0 -rotate-1 opacity-90'
              }`}
              style={{
                width: 'clamp(80px, 18vw, 150px)',
                height: 'clamp(140px, 35vh, 260px)',
              }}
            >
              <svg viewBox="0 0 100 180" className="w-full h-full drop-shadow-md">
                {/* Control Rods */}
                <line x1="50" y1="90" x2="65" y2="180" stroke="#76563E" strokeWidth="2.5" />
                <line x1="72" y1="110" x2="85" y2="170" stroke="#B69A62" strokeWidth="1.5" />
                
                {/* Female Wayang Golek Siger & Coiffure */}
                <path d="M42 26 Q50 12 58 26 Q56 42 50 44 Q44 42 42 26 Z" fill="#FAF7F0" stroke="#76563E" strokeWidth="1.2" />
                {/* Golden Bridal Siger Miniature */}
                <path d="M40 22 L45 10 L50 18 L55 10 L60 22 Z" fill="#B69A62" />
                <circle cx="45" cy="9" r="1.8" fill="#B69A62" />
                <circle cx="55" cy="9" r="1.8" fill="#B69A62" />
                <circle cx="53" cy="27" r="1.2" fill="#29211C" />

                {/* Kebaya Bodice */}
                <path d="M40 44 L60 44 L62 78 L38 78 Z" fill="#71806A" stroke="#76563E" strokeWidth="1.5" />
                <path d="M42 45 Q50 56 58 45" stroke="#B69A62" strokeWidth="1.8" fill="none" />

                {/* Right Arm welcoming towards center gate */}
                <path
                  d="M38 50 Q25 60 28 75 Q32 85 42 84"
                  stroke="#76563E"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                />
                <circle cx="28" cy="76" r="3" fill="#B69A62" />

                {/* Batik Skirt */}
                <path d="M38 78 Q50 82 62 78 L68 145 Q50 152 32 145 Z" fill="#5B4435" stroke="#76563E" strokeWidth="1.5" />
                <path d="M44 85 L64 140 M50 85 L70 135" stroke="#B69A62" strokeWidth="1" strokeDasharray="3 3" />
                {/* Golden Sampur */}
                <path d="M52 80 Q38 100 32 135" stroke="#B69A62" strokeWidth="2" fill="none" />
              </svg>
            </div>

          </div>
        </div>

        {/* ================= GUEST RECIPIENT BOX (Always visible in initial state) ================= */}
        <div className="w-full shrink-0 flex flex-col items-center justify-center pt-2 pb-1 z-30">
          
          {/* Guest Recipient Card */}
          <div className="mb-2 px-5 py-2 rounded bg-[#FAF7F0]/90 border border-[#B69A62]/40 shadow-sm max-w-sm text-center backdrop-blur-xs">
            <span className="block text-[10px] text-[#71806A] uppercase tracking-wider font-sans">
              Kepada Yth. Bapak/Ibu/Saudara/i:
            </span>
            <span className="block text-sm sm:text-base font-serif font-semibold text-[#29211C] tracking-wide truncate">
              {guestName || data.wedding.invitationTo || 'Tamu Undangan Istimewa'}
            </span>
          </div>

          {/* Subtle Botanical Divider */}
          <div className="w-40 sm:w-56 h-4 opacity-75 mb-2 pointer-events-none">
            <img
              src="/ornaments/sundanese-divider.svg"
              alt=""
              aria-hidden="true"
              className="w-full h-full object-contain"
            />
          </div>

          {/* PRIMARY ACCESSIBLE CTA: BUKA UNDANGAN (User clicks here to open the gate) */}
          <button
            type="button"
            onClick={handleOpenInvitation}
            disabled={isOpenClicked}
            aria-label="Buka Undangan Pernikahan"
            className="group relative inline-flex items-center justify-center px-8 sm:px-10 py-3 sm:py-3.5 rounded bg-[#76563E] text-[#FAF7F0] font-serif text-sm sm:text-base tracking-[0.2em] uppercase font-semibold shadow-xl hover:bg-[#5B4435] transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] border border-[#B69A62] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B69A62] focus-visible:ring-offset-2 disabled:opacity-85 cursor-pointer"
          >
            {/* Subtle antique gold glow line on button */}
            <span className="relative z-10 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B69A62]" />
              {isOpenClicked ? 'GERBANG DIBUKA...' : 'BUKA UNDANGAN'}
              <span className="w-1.5 h-1.5 rounded-full bg-[#B69A62]" />
            </span>
            <div className="absolute inset-0 rounded bg-gradient-to-r from-transparent via-[#B69A62]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>

          {/* Subtext info */}
          <span className="text-[10px] sm:text-[11px] text-[#76563E]/80 tracking-wider font-light mt-2 font-sans">
            Ketuk untuk membuka gerbang & mendengarkan alunan musik Degung
          </span>
        </div>

      </div>
    </section>
  );
};
