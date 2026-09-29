// ======================================================
// 🟢 SYSTEM CODE — BANK GIFT COMPONENT
//
// JANGAN DIUBAH UNTUK EDIT DATA CLIENT.
// ======================================================

import React, { useState } from 'react';
import { BankAccount } from '../../types/wedding';
import { Copy, Check, CreditCard } from 'lucide-react';

interface BankGiftProps {
  accounts: BankAccount[];
}

export const BankGift: React.FC<BankGiftProps> = ({ accounts }) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (accountNumber: string, index: number) => {
    navigator.clipboard.writeText(accountNumber);
    setCopiedIndex(index);
    setTimeout(() => {
      setCopiedIndex(null);
    }, 3000);
  };

  return (
    <div className="space-y-6">
      {accounts.map((acc, index) => {
        const isCopied = copiedIndex === index;

        return (
          <div
            key={acc.accountNumber + index}
            className="relative p-6 sm:p-7 bg-[#F5EFE3] border border-[#B69A62]/40 rounded-sm shadow-md"
          >
            {/* Subtle Gold Corner Accents */}
            <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-[#B69A62]" />
            <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-[#B69A62]" />
            <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-[#B69A62]" />
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-[#B69A62]" />

            <div className="flex items-center justify-between gap-4 pb-3 border-b border-[#B69A62]/20">
              <div className="flex items-center gap-2">
                <CreditCard size={18} className="text-[#B69A62]" />
                <span className="font-serif text-lg font-bold text-[#29211C] tracking-wide">
                  {acc.bankName}
                </span>
              </div>
              <span className="text-[10px] uppercase tracking-wider text-[#71806A] font-sans font-semibold">
                Transfer Bank
              </span>
            </div>

            <div className="mt-4 text-center">
              <span className="text-[11px] uppercase tracking-wider text-[#76563E] block font-sans">
                Nomor Rekening
              </span>
              <span className="font-serif text-2xl sm:text-3xl text-[#29211C] tracking-wider font-semibold block my-1 tabular-nums">
                {acc.accountNumber}
              </span>
              <span className="text-xs text-[#5B4435] font-serif italic block">
                atas nama <span className="font-semibold text-[#29211C]">{acc.accountName}</span>
              </span>
            </div>

            {/* Copy Button with Feedback */}
            <div className="mt-6 text-center">
              <button
                type="button"
                onClick={() => handleCopy(acc.accountNumber, index)}
                aria-label={`Salin nomor rekening ${acc.bankName}`}
                className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-xs text-xs uppercase tracking-[0.18em] font-serif font-semibold border transition-all duration-300 ${
                  isCopied
                    ? 'bg-[#30483A] text-[#FAF7F0] border-[#30483A]'
                    : 'bg-[#76563E] text-[#FAF7F0] hover:bg-[#5B4435] border-[#B69A62]/50 shadow-sm'
                }`}
              >
                {isCopied ? (
                  <>
                    <Check size={14} />
                    <span>NOMOR REKENING DISALIN</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>SALIN NOMOR REKENING</span>
                  </>
                )}
              </button>
            </div>

            {/* Dynamic Status Toast feedback */}
            {isCopied && (
              <p className="text-[11px] text-center text-[#30483A] font-sans mt-2 animate-fadeIn">
                Nomor rekening berhasil disalin ke papan klip
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
};
