/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// ======================================================
// 🟢 SYSTEM CODE — SUNDA HERITAGE TEMPLATE 08
//
// JANGAN DIUBAH UNTUK EDIT DATA CLIENT.
// UNTUK UBAH DATA CLIENT, EDIT src/data/weddingData.ts
// ======================================================

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { weddingData } from './data/weddingData';
import { isSectionEnabled } from './utils/sectionToggle';
import { SundaneseGate } from './components/opening/SundaneseGate';
import { SundaneseCouple } from './components/couple/SundaneseCouple';
import { PasundanTouch } from './components/heritage/PasundanTouch';
import { CeremonySection } from './components/event/CeremonySection';
import { HeritageCountdown } from './components/countdown/HeritageCountdown';
import { BotanicalStory } from './components/story/BotanicalStory';
import { HeritageGallery } from './components/gallery/HeritageGallery';
import { VenueDetails } from './components/location/VenueDetails';
import { GuestbookSection } from './components/guestbook/GuestbookSection';
import { WeddingGift } from './components/gift/WeddingGift';
import { LastPage } from './components/closing/LastPage';
import { Closing } from './components/closing/Closing';
import { MusicController } from './components/music/MusicController';
import { PhotoViewer } from './components/media/PhotoViewer';
import { SectionNavigator, navItems } from './components/navigation/SectionNavigator';
import { FramedNavSection } from './components/navigation/FramedNavSection';
import { NextSectionButton } from './components/navigation/NextSectionButton';
import { audioService } from './services/audioService';

export default function App() {
  const [hasOpened, setHasOpened] = useState(false);
  const [guestName, setGuestName] = useState<string>('');
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [viewerIndex, setViewerIndex] = useState(0);
  const [activeSection, setActiveSection] = useState<string>('the-couple');

  // Initialize audio service with wedding data music
  useEffect(() => {
    audioService.init(weddingData.music.src, weddingData.music.volume);
  }, []);

  // Parse guest name from URL query parameter (e.g. ?to=Bapak+Hendra or ?u=Ibu+Ratna)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const toParam = params.get('to') || params.get('u') || params.get('dear');
      if (toParam) {
        setGuestName(decodeURIComponent(toParam));
      }
    }
  }, []);

  // PRD Section 11: Body overflow hidden during Opening screen, restored after opening
  useEffect(() => {
    if (!hasOpened) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [hasOpened]);

  // Comprehensive image gallery list for the PhotoViewer
  const allImages = useMemo(() => {
    const list: string[] = [
      weddingData.couplePhoto,
      weddingData.groom.photo,
      weddingData.bride.photo,
      ...weddingData.gallery,
      weddingData.venue.image,
    ];
    return Array.from(new Set(list));
  }, []);

  const openViewerWithImage = (imageSrc: string) => {
    const index = allImages.indexOf(imageSrc);
    setViewerIndex(index >= 0 ? index : 0);
    setIsViewerOpen(true);
  };

  const openViewerWithIndex = (galleryIndex: number) => {
    const targetSrc = weddingData.gallery[galleryIndex] || allImages[0];
    const index = allImages.indexOf(targetSrc);
    setViewerIndex(index >= 0 ? index : 0);
    setIsViewerOpen(true);
  };

  const navigateToSection = useCallback((sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  // Scrollspy to detect currently active section
  useEffect(() => {
    if (!hasOpened) return;

    const sectionIds = navItems.map((item) => item.id);
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0.1,
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [hasOpened]);

  return (
    <div className="min-h-screen bg-[#F5EFE3] text-[#29211C] font-sans relative selection:bg-[#B69A62]/30 selection:text-[#29211C]">
      
      {/* 1. OPENING — THE GATE OF HERITAGE (Fit to viewport, Wayang opens the gate) */}
      {!hasOpened && (
        <SundaneseGate
          data={weddingData}
          onOpen={() => setHasOpened(true)}
          guestName={guestName}
        />
      )}

      {/* Floating Audio Controller */}
      <MusicController hasOpened={hasOpened} />

      {/* Floating Section Navigator (Bottom Dock & Drawer) */}
      {hasOpened && (
        <SectionNavigator
          data={weddingData}
          activeSection={activeSection}
          onNavigate={navigateToSection}
        />
      )}

      {/* Global Photo Lightbox Viewer */}
      <PhotoViewer
        images={allImages}
        initialIndex={viewerIndex}
        isOpen={isViewerOpen}
        onClose={() => setIsViewerOpen(false)}
      />

      {/* MAIN WEBSITE (Revealed after BUKA UNDANGAN is clicked) */}
      {hasOpened && (
        <main className="animate-fadeIn pb-24">
          
          {/* Top Sticky Header with Brand & Full Navigation Links */}
          <nav
            aria-label="Navigasi Utama Undangan"
            className="sticky top-0 z-40 bg-[#FAF7F0]/95 backdrop-blur-md border-b border-[#B69A62]/20 px-4 sm:px-6 py-3 flex items-center justify-between shadow-xs transition-all select-none"
          >
            {/* Zone 1: Single text element wordmark */}
            <button
              type="button"
              onClick={() => navigateToSection('the-couple')}
              className="text-left font-serif text-base sm:text-lg font-bold tracking-widest text-[#29211C] hover:text-[#B69A62] transition-colors"
            >
              {weddingData.groom.name} & {weddingData.bride.name}
            </button>

            {/* Zone 2: Desktop Navigation Links for EVERY major section */}
            <div className="hidden lg:flex items-center gap-5 text-xs uppercase tracking-widest text-[#76563E] font-sans">
              {navItems.map((item) => {
                if (item.enabledKey && !isSectionEnabled(weddingData.sections, item.enabledKey)) {
                  return null;
                }
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => navigateToSection(item.id)}
                    className={`transition-colors py-1 relative ${
                      isActive
                        ? 'text-[#29211C] font-semibold'
                        : 'text-[#76563E] hover:text-[#B69A62]'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#B69A62] rounded-full" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Zone 3: Actions (Quick Jump to Guestbook) */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => navigateToSection('our-day')}
                className="hidden sm:inline-flex px-3 py-1.5 rounded-xs border border-[#B69A62]/40 bg-[#F5EFE3] hover:bg-[#FAF7F0] text-[#76563E] hover:text-[#29211C] text-[11px] uppercase tracking-wider font-serif transition-colors whitespace-nowrap shadow-xs"
              >
                Jadwal Acara
              </button>
              <button
                type="button"
                onClick={() => navigateToSection('guestbook')}
                className="px-3.5 py-1.5 rounded-xs bg-[#76563E] text-[#FAF7F0] hover:bg-[#5B4435] text-[11px] uppercase tracking-wider font-serif transition-colors whitespace-nowrap shadow-xs"
              >
                Kirim Doa
              </button>
            </div>
          </nav>

          {/* 2. THE COUPLE — Two Souls, One Journey */}
          {isSectionEnabled(weddingData.sections, 'couple') && (
            <div>
              <SundaneseCouple
                data={weddingData}
                onPhotoClick={(idx) => {
                  if (idx === 1) openViewerWithImage(weddingData.groom.photo);
                  else if (idx === 2) openViewerWithImage(weddingData.bride.photo);
                  else openViewerWithImage(weddingData.couplePhoto);
                }}
              />
              <NextSectionButton
                targetId="section-navigator"
                label="Panduan Navigasi"
                sundaneseLabel="Panuntun Acara"
              />
            </div>
          )}

          {/* STANDBY FRAMED NAVIGATION SECTION (Permanent in-page section, never hidden) */}
          <FramedNavSection
            data={weddingData}
            activeSection={activeSection}
            onNavigate={navigateToSection}
          />

          {/* 3. THE PASUNDAN TOUCH — Rooted in Heritage */}
          {isSectionEnabled(weddingData.sections, 'pasundanTouch') && (
            <div>
              <PasundanTouch />
              <NextSectionButton
                targetId="our-day"
                label="Rangkaian Acara"
                sundaneseLabel="Our Day"
              />
            </div>
          )}

          {/* 4. OUR DAY — The Ceremony & 5. SUNDA CEREMONY */}
          {isSectionEnabled(weddingData.sections, 'events') && (
            <div>
              <CeremonySection
                data={weddingData}
                onPhotoClick={() => openViewerWithImage(weddingData.couplePhoto)}
              />
              <NextSectionButton
                targetId="countdown"
                label="Hitung Mundur Waktu"
                sundaneseLabel="Ngetang Wanci"
              />
            </div>
          )}

          {/* 6. COUNTING THE DAYS — Countdown */}
          {isSectionEnabled(weddingData.sections, 'countdown') && (
            <div>
              <HeritageCountdown data={weddingData} />
              <NextSectionButton
                targetId="our-story"
                label="Kisah Kasih Kami"
                sundaneseLabel="Lalakon Asih"
              />
            </div>
          )}

          {/* 7. OUR STORY — A Journey Through Time */}
          {isSectionEnabled(weddingData.sections, 'story') && (
            <div>
              <BotanicalStory
                data={weddingData}
                onPhotoClick={(idx) => {
                  const storyImg = weddingData.story[idx]?.image;
                  if (storyImg) openViewerWithImage(storyImg);
                }}
              />
              <NextSectionButton
                targetId="our-moments"
                label="Galeri Foto Momen"
                sundaneseLabel="Our Moments"
              />
            </div>
          )}

          {/* 8. OUR MOMENTS — Gallery */}
          {isSectionEnabled(weddingData.sections, 'gallery') && (
            <div>
              <HeritageGallery
                data={weddingData}
                onOpenViewer={openViewerWithIndex}
              />
              <NextSectionButton
                targetId="venue"
                label="Lokasi Acara"
                sundaneseLabel="Where We Begin"
              />
            </div>
          )}

          {/* 9. WHERE WE BEGIN — Venue */}
          {isSectionEnabled(weddingData.sections, 'details') && (
            <div>
              <VenueDetails
                data={weddingData}
                onPhotoClick={() => openViewerWithImage(weddingData.venue.image)}
              />
              <NextSectionButton
                targetId="guestbook"
                label="Doa & Restu Tamu"
                sundaneseLabel="Your Blessing"
              />
            </div>
          )}

          {/* 10. YOUR BLESSING — Guestbook */}
          {isSectionEnabled(weddingData.sections, 'guestbook') && (
            <div>
              <GuestbookSection />
              {weddingData.gift.enabled && (
                <NextSectionButton
                  targetId="wedding-gift"
                  label="Kado Kasih"
                  sundaneseLabel="Wedding Gift"
                />
              )}
            </div>
          )}

          {/* 11. WEDDING GIFT — A Token of Love */}
          {isSectionEnabled(weddingData.sections, 'gift') && (
            <div>
              <WeddingGift data={weddingData} />
              <NextSectionButton
                targetId="until-forever"
                label="Ungkapan Syukur"
                sundaneseLabel="Until Forever"
              />
            </div>
          )}

          {/* 12. UNTIL FOREVER — Last Page */}
          {isSectionEnabled(weddingData.sections, 'lastPage') && (
            <LastPage
              data={weddingData}
              onPhotoClick={() => openViewerWithImage(weddingData.couplePhoto)}
            />
          )}

          {/* 13. T.M STUDIO — Closing */}
          <Closing />

        </main>
      )}

    </div>
  );
}
