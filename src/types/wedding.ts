export interface ParentsInfo {
  father: string;
  mother: string;
}

export interface Person {
  name: string;
  fullName: string;
  photo: string;
  parents: ParentsInfo;
  instagram?: string;
}

export interface WeddingInfo {
  title: string;
  date: string;
  quote: string;
  subQuote?: string;
  invitationTo?: string;
}

export interface MusicConfig {
  src: string;
  volume: number;
  loop: boolean;
}

export interface WeddingEvent {
  id: string;
  title: string;
  sundaneseTitle?: string;
  date: string;
  day: string;
  time: string;
  venue: string;
  address: string;
  mapsUrl: string;
}

export interface SundaCeremony {
  id: string;
  title: string;
  sundaneseName: string;
  meaning: string;
  date: string;
  time: string;
  description: string;
  image?: string;
}

export interface StoryChapter {
  date: string;
  title: string;
  description: string;
  image: string;
}

export interface VenueInfo {
  name: string;
  address: string;
  mapsUrl: string;
  image: string;
  city?: string;
}

export interface BankAccount {
  bankName: string;
  accountNumber: string;
  accountName: string;
  qrCodeUrl?: string;
}

export interface PhysicalGiftConfig {
  enabled: boolean;
  recipient: string;
  address: string;
  mapsUrl: string;
  notes?: string;
}

export interface GiftConfig {
  enabled: boolean;
  bank: BankAccount[];
  physicalGift: PhysicalGiftConfig;
}

export interface SectionToggles {
  couple: boolean;
  pasundanTouch: boolean;
  events: boolean;
  ceremony: boolean;
  countdown: boolean;
  story: boolean;
  gallery: boolean;
  details: boolean;
  guestbook: boolean;
  gift: boolean;
  lastPage: boolean;
}

export interface GuestbookEntry {
  id: string;
  name: string;
  message: string;
  attendance?: 'present' | 'absent' | 'tentative';
  createdAt: string;
}

export interface WeddingData {
  groom: Person;
  bride: Person;
  couplePhoto: string;
  wedding: WeddingInfo;
  music: MusicConfig;
  events: WeddingEvent[];
  ceremony: SundaCeremony[];
  countdown: {
    targetDate: string;
  };
  story: StoryChapter[];
  gallery: string[];
  venue: VenueInfo;
  gift: GiftConfig;
  sections: SectionToggles;
}
