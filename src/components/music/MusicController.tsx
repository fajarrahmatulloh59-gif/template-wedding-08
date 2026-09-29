// ======================================================
// 🟢 SYSTEM CODE — MUSIC CONTROLLER
//
// JANGAN DIUBAH UNTUK EDIT DATA CLIENT.
// ======================================================

import React, { useEffect, useState } from 'react';
import { Volume2, VolumeX, Disc3 } from 'lucide-react';
import { audioService } from '../../services/audioService';

interface MusicControllerProps {
  hasOpened: boolean;
}

export const MusicController: React.FC<MusicControllerProps> = ({ hasOpened }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const unsubscribe = audioService.subscribe((playing, muted) => {
      setIsPlaying(playing);
      setIsMuted(muted);
    });
    return unsubscribe;
  }, []);

  if (!hasOpened) return null;

  return (
    <aside
      aria-label="Kontrol musik latar"
      className="fixed bottom-16 sm:bottom-20 right-3 sm:right-6 z-50 flex items-center gap-2 select-none"
    >
      <button
        onClick={() => audioService.toggle()}
        aria-label={isPlaying ? 'Jeda alunan musik' : 'Putar alunan musik'}
        title={isPlaying ? 'Jeda alunan musik' : 'Putar alunan musik'}
        className={`group relative flex items-center justify-center w-12 h-12 rounded-full border border-[#B69A62]/40 bg-[#FAF7F0]/90 text-[#29211C] shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-[#B69A62] hover:bg-[#FAF7F0] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B69A62] ${
          isPlaying ? 'ring-1 ring-[#B69A62]/50' : 'opacity-80'
        }`}
      >
        {/* Animated revolving vinyl disk */}
        <Disc3
          className={`w-6 h-6 text-[#76563E] transition-transform ${
            isPlaying ? 'animate-spin' : ''
          }`}
          style={{ animationDuration: '4s' }}
        />

        {/* Small soundwave indicator badge */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          {isPlaying && (
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B69A62] opacity-60" />
          )}
          <span
            className={`relative inline-flex rounded-full h-4 w-4 text-[9px] items-center justify-center font-bold text-white ${
              isPlaying ? 'bg-[#30483A]' : 'bg-[#76563E]'
            }`}
          >
            {isMuted ? 'x' : '♪'}
          </span>
        </span>
      </button>

      {/* Quick Mute Toggle */}
      <button
        onClick={() => audioService.toggleMute()}
        aria-label={isMuted ? 'Bunyikan suara' : 'Bisukan suara'}
        title={isMuted ? 'Bunyikan suara' : 'Bisukan suara'}
        className="w-8 h-8 rounded-full border border-[#B69A62]/30 bg-[#FAF7F0]/80 text-[#76563E] hover:text-[#29211C] hover:border-[#B69A62] flex items-center justify-center shadow-md backdrop-blur-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B69A62]"
      >
        {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
      </button>
    </aside>
  );
};
