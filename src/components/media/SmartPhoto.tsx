// ======================================================
// 🟢 SYSTEM CODE — SMART PHOTO COMPONENT
//
// FRAME FIXED → PHOTO FIT INSIDE → ASPECT RATIO PRESERVED
// JANGAN DIUBAH UNTUK EDIT DATA CLIENT.
// ======================================================

import React, { useState } from 'react';

interface SmartPhotoProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  aspectRatioClass?: string; // e.g. "aspect-[3/4]", "aspect-[4/3]", "aspect-[16/9]"
  objectFit?: 'contain' | 'cover';
  objectPosition?: string;
  onClick?: () => void;
  priority?: boolean;
}

export const SmartPhoto: React.FC<SmartPhotoProps> = ({
  src,
  alt,
  className = '',
  containerClassName = '',
  aspectRatioClass = 'aspect-[3/4]',
  objectFit = 'contain',
  objectPosition = 'center',
  onClick,
  priority = false,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <div
      onClick={onClick}
      className={`relative overflow-hidden flex items-center justify-center bg-[#FAF7F0] ${aspectRatioClass} ${
        onClick ? 'cursor-pointer group' : ''
      } ${containerClassName}`}
    >
      {/* Loading Skeleton */}
      {isLoading && !hasError && (
        <div className="absolute inset-0 bg-stone-200/50 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-[#B69A62]/30 border-t-[#B69A62] animate-spin" />
        </div>
      )}

      {/* Fallback Container if Error */}
      {hasError ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center bg-[#FAF7F0] border border-[#B69A62]/20">
          <svg
            className="w-10 h-10 text-[#B69A62]/40 mb-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="text-xs font-serif text-[#76563E] tracking-wide">
            {alt || 'Potret Pernikahan'}
          </span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          referrerPolicy="no-referrer"
          decoding="async"
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
          style={{ objectFit, objectPosition }}
          className={`w-full h-full transition-all duration-700 ${
            isLoading ? 'opacity-0 scale-[0.98]' : 'opacity-100 scale-100'
          } ${onClick ? 'group-hover:scale-[1.02]' : ''} ${className}`}
        />
      )}
    </div>
  );
};
