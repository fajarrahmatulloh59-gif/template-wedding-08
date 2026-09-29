// ======================================================
// 🟢 SYSTEM CODE — PHOTO VIEWER (LIGHTBOX)
//
// JANGAN DIUBAH UNTUK EDIT DATA CLIENT.
// ======================================================

import React, { useEffect, useState, useCallback, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';

interface PhotoViewerProps {
  images: string[];
  initialIndex?: number;
  isOpen: boolean;
  onClose: () => void;
}

export const PhotoViewer: React.FC<PhotoViewerProps> = ({
  images,
  initialIndex = 0,
  isOpen,
  onClose,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isZoomed, setIsZoomed] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    setCurrentIndex(initialIndex);
    setIsZoomed(false);
  }, [initialIndex, isOpen]);

  const handleNext = useCallback(() => {
    setIsZoomed(false);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setIsZoomed(false);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleNext, handlePrev, onClose]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
    touchStartX.current = null;
  };

  if (!isOpen || images.length === 0) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Penampil Foto Layar Penuh"
      className="fixed inset-0 z-[9999] bg-[#1a1410]/95 backdrop-blur-md flex flex-col justify-between select-none animate-fadeIn"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top Header Bar */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-[#B69A62]/20 text-[#FAF7F0] z-10">
        <div className="font-serif tracking-widest text-sm text-[#B69A62]">
          {currentIndex + 1} / {images.length}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsZoomed((prev) => !prev)}
            aria-label={isZoomed ? "Perkecil foto" : "Perbesar foto"}
            className="p-2 text-[#FAF7F0]/80 hover:text-[#B69A62] transition-colors rounded-full hover:bg-white/5"
          >
            {isZoomed ? <ZoomOut size={20} /> : <ZoomIn size={20} />}
          </button>
          <button
            onClick={onClose}
            aria-label="Tutup penampil foto"
            className="p-2 text-[#FAF7F0]/80 hover:text-[#B69A62] transition-colors rounded-full hover:bg-white/5"
          >
            <X size={24} />
          </button>
        </div>
      </div>

      {/* Main Image Container */}
      <div className="relative flex-1 flex items-center justify-center p-4 overflow-hidden">
        {/* Previous Button */}
        {images.length > 1 && (
          <button
            onClick={handlePrev}
            aria-label="Foto sebelumnya"
            className="absolute left-4 z-20 p-3 rounded-full bg-black/40 text-white/90 hover:text-[#B69A62] hover:bg-black/70 backdrop-blur-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B69A62]"
          >
            <ChevronLeft size={28} />
          </button>
        )}

        {/* The uncropped image */}
        <div
          className={`relative max-w-full max-h-[80vh] flex items-center justify-center transition-transform duration-300 ease-out ${
            isZoomed ? 'scale-150 cursor-grab' : 'scale-100'
          }`}
          onClick={() => setIsZoomed((prev) => !prev)}
        >
          <img
            src={images[currentIndex]}
            alt={`Momen pernikahan ${currentIndex + 1}`}
            referrerPolicy="no-referrer"
            className="max-h-[80vh] max-w-[90vw] w-auto h-auto object-contain rounded shadow-2xl border border-[#B69A62]/30"
          />
        </div>

        {/* Next Button */}
        {images.length > 1 && (
          <button
            onClick={handleNext}
            aria-label="Foto selanjutnya"
            className="absolute right-4 z-20 p-3 rounded-full bg-black/40 text-white/90 hover:text-[#B69A62] hover:bg-black/70 backdrop-blur-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B69A62]"
          >
            <ChevronRight size={28} />
          </button>
        )}
      </div>

      {/* Bottom Hint */}
      <div className="py-3 text-center text-xs text-[#FAF7F0]/60 border-t border-[#B69A62]/10 tracking-wider font-light">
        Ketuk foto untuk perbesar · Geser atau gunakan panah kibor
      </div>
    </div>
  );
};
