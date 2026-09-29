// ======================================================
// 🎵 CUSTOMER MUSIC
//
// GANTI FILE:
// public/music/backsound.mp3
//
// TIDAK PERLU MENGUBAH COMPONENT.
// ======================================================

type AudioListener = (isPlaying: boolean, isMuted: boolean) => void;

class AudioService {
  private static instance: AudioService;
  private audio: HTMLAudioElement | null = null;
  private isPlaying = false;
  private isMuted = false;
  private targetVolume = 0.35;
  private listeners: Set<AudioListener> = new Set();
  private hasInitialized = false;

  private constructor() {
    // Singleton pattern
  }

  public static getInstance(): AudioService {
    if (!AudioService.instance) {
      AudioService.instance = new AudioService();
    }
    return AudioService.instance;
  }

  public init(src?: string, volume = 0.35): void {
    if (this.hasInitialized && this.audio) return;

    const audioSource = src || `${import.meta.env.BASE_URL}music/backsound.mp3`;
    this.targetVolume = volume;

    if (typeof window !== 'undefined') {
      try {
        this.audio = new Audio(audioSource);
        this.audio.loop = true;
        this.audio.volume = this.targetVolume;
        this.audio.preload = 'auto';

        this.audio.addEventListener('play', () => {
          this.isPlaying = true;
          this.notify();
        });

        this.audio.addEventListener('pause', () => {
          this.isPlaying = false;
          this.notify();
        });

        this.audio.addEventListener('error', (e) => {
          console.warn('Audio playback notice:', e);
        });

        this.hasInitialized = true;
      } catch (err) {
        console.warn('Audio initialization deferred:', err);
      }
    }
  }

  public async play(): Promise<void> {
    if (!this.audio) {
      this.init();
    }
    if (!this.audio) return;

    try {
      this.audio.muted = this.isMuted;
      this.audio.volume = this.isMuted ? 0 : this.targetVolume;
      await this.audio.play();
      this.isPlaying = true;
      this.notify();
    } catch (err) {
      console.warn('Audio play restricted by browser policy until interaction:', err);
    }
  }

  public pause(): void {
    if (!this.audio) return;
    this.audio.pause();
    this.isPlaying = false;
    this.notify();
  }

  public toggle(): void {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  public toggleMute(): void {
    this.isMuted = !this.isMuted;
    if (this.audio) {
      this.audio.muted = this.isMuted;
      this.audio.volume = this.isMuted ? 0 : this.targetVolume;
    }
    this.notify();
  }

  public subscribe(listener: AudioListener): () => void {
    this.listeners.add(listener);
    listener(this.isPlaying, this.isMuted);
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notify(): void {
    this.listeners.forEach((listener) => listener(this.isPlaying, this.isMuted));
  }

  public getStatus(): { isPlaying: boolean; isMuted: boolean } {
    return { isPlaying: this.isPlaying, isMuted: this.isMuted };
  }
}

export const audioService = AudioService.getInstance();
