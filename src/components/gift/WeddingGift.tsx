// ======================================================
// 🟢 SYSTEM CODE — WEDDING GIFT: A TOKEN OF LOVE
//
// BACKGROUND: SOFT IVORY #FAF7F0
// NOT AN E-COMMERCE CHECKOUT · DIGNIFIED CULTURAL GIFT
// JANGAN DIUBAH UNTUK EDIT DATA CLIENT.
// ======================================================

import React, { useState } from 'react';
import { WeddingData } from '../../types/wedding';
import { BankGift } from './BankGift';
import { PhysicalGift } from './PhysicalGift';
import { Gift, CreditCard, Package } from 'lucide-react';

interface WeddingGiftProps {
  data: WeddingData;
}

export const WeddingGift: React.FC<WeddingGiftProps> = ({ data }) => {
  const [activeTab, setActiveTab] = useState<'bank' | 'physical'>('bank');

  if (!data.gift.enabled) return null;

  return (
    <section id="wedding-gift" className="relative py-24 sm:py-32 px-4 sm:px-8 bg-[#FAF7F0] overflow-hidden">
      {/* Background Subtle Floral Ornaments */}
      <div className="absolute top-10 left-6 w-36 h-36 opacity-10 pointer-events-none">
        <img
          src="/ornaments/sundanese-floral.svg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center justify-center gap-2 mb-2">
            <span className="w-8 h-[1px] bg-[#B69A62]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#71806A] font-sans font-medium">
              A Token of Love
            </span>
            <span className="w-8 h-[1px] bg-[#B69A62]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#29211C] tracking-wide font-normal">
            Wedding Gift
          </h2>

          <p className="mt-3 text-sm sm:text-base font-serif italic text-[#76563E] leading-relaxed">
            Doa restu Anda merupakan karunia terindah bagi kami. Namun bagi Bapak/Ibu/Saudara/i yang hendak memberikan tanda kasih, dapat melalui sarana di bawah ini:
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

        {/* Tab Selection: Transfer Bank vs Kado Fisik */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 bg-[#F5EFE3] rounded-xs border border-[#B69A62]/30">
            <button
              type="button"
              onClick={() => setActiveTab('bank')}
              className={`flex items-center gap-2 px-5 py-2 text-xs font-serif tracking-wider uppercase font-semibold rounded-xs transition-all ${
                activeTab === 'bank'
                  ? 'bg-[#76563E] text-[#FAF7F0] shadow-sm'
                  : 'text-[#5B4435] hover:text-[#29211C]'
              }`}
            >
              <CreditCard size={15} />
              <span>Transfer Bank</span>
            </button>

            {data.gift.physicalGift.enabled && (
              <button
                type="button"
                onClick={() => setActiveTab('physical')}
                className={`flex items-center gap-2 px-5 py-2 text-xs font-serif tracking-wider uppercase font-semibold rounded-xs transition-all ${
                  activeTab === 'physical'
                    ? 'bg-[#76563E] text-[#FAF7F0] shadow-sm'
                    : 'text-[#5B4435] hover:text-[#29211C]'
                }`}
              >
                <Package size={15} />
                <span>Kirim Kado Fisik</span>
              </button>
            )}
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="max-w-2xl mx-auto">
          {activeTab === 'bank' ? (
            <BankGift accounts={data.gift.bank} />
          ) : (
            <PhysicalGift gift={data.gift.physicalGift} />
          )}
        </div>

      </div>
    </section>
  );
};
