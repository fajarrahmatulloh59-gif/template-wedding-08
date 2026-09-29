// ======================================================
// 🟢 SYSTEM CODE — PHYSICAL GIFT COMPONENT
//
// JANGAN DIUBAH UNTUK EDIT DATA CLIENT.
// ======================================================

import React, { useState } from 'react';
import { PhysicalGiftConfig } from '../../types/wedding';
import { Package, Copy, Check, ExternalLink } from 'lucide-react';

interface PhysicalGiftProps {
  gift: PhysicalGiftConfig;
}

export const PhysicalGift: React.FC<PhysicalGiftProps> = ({ gift }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyAddress = () => {
    const fullText = `Penerima: ${gift.recipient}\nAlamat: ${gift.address}`;
    navigator.clipboard.writeText(fullText);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };

  return (
    <div className="relative p-6 sm:p-7 bg-[#F5EFE3] border border-[#B69A62]/40 rounded-sm shadow-md">
      {/* Subtle Gold Corner Accents */}
      <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-[#B69A62]" />
      <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-[#B69A62]" />
      <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-[#B69A62]" />
      <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-[#B69A62]" />

      <div className="flex items-center justify-between gap-4 pb-3 border-b border-[#B69A62]/20">
        <div className="flex items-center gap-2">
          <Package size={18} className="text-[#B69A62]" />
          <span className="font-serif text-lg font-bold text-[#29211C] tracking-wide">
            Kirim Kado Fisik
          </span>
        </div>
        <span className="text-[10px] uppercase tracking-wider text-[#71806A] font-sans font-semibold">
          Paket / Kado
        </span>
      </div>

      <div className="mt-4 text-center">
        <span className="text-[11px] uppercase tracking-wider text-[#76563E] block font-sans">
          Penerima
        </span>
        <span className="font-serif text-xl sm:text-2xl text-[#29211C] tracking-wide font-semibold block my-1">
          {gift.recipient}
        </span>

        <span className="text-[11px] uppercase tracking-wider text-[#76563E] block font-sans mt-3">
          Alamat Pengiriman
        </span>
        <p className="mt-1 text-xs sm:text-sm text-[#5B4435] leading-relaxed max-w-md mx-auto font-light">
          {gift.address}
        </p>

        {gift.notes && (
          <p className="mt-2 text-[11px] text-[#76563E] font-serif italic">
            *{gift.notes}
          </p>
        )}
      </div>

      {/* Buttons */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={handleCopyAddress}
          aria-label="Salin alamat kado fisik"
          className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-xs text-xs uppercase tracking-[0.18em] font-serif font-semibold border transition-all duration-300 ${
            isCopied
              ? 'bg-[#30483A] text-[#FAF7F0] border-[#30483A]'
              : 'bg-[#76563E] text-[#FAF7F0] hover:bg-[#5B4435] border-[#B69A62]/50 shadow-sm'
          }`}
        >
          {isCopied ? (
            <>
              <Check size={14} />
              <span>ALAMAT DISALIN</span>
            </>
          ) : (
            <>
              <Copy size={14} />
              <span>SALIN ALAMAT</span>
            </>
          )}
        </button>

        {gift.mapsUrl && (
          <a
            href={gift.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xs text-xs uppercase tracking-[0.18em] font-serif font-semibold border border-[#B69A62]/40 text-[#76563E] hover:text-[#29211C] hover:border-[#76563E] bg-[#FAF7F0] transition-colors"
          >
            <span>BUKA GOOGLE MAPS</span>
            <ExternalLink size={12} />
          </a>
        )}
      </div>

      {/* Dynamic Status Toast feedback */}
      {isCopied && (
        <p className="text-[11px] text-center text-[#30483A] font-sans mt-2 animate-fadeIn">
          Alamat berhasil disalin ke papan klip
        </p>
      )}
    </div>
  );
};
