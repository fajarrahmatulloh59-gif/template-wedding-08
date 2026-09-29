import { WeddingData } from '../types/wedding';

// ======================================================
// 🔴 CUSTOMER DATA
// GANTI DATA CLIENT DI BAGIAN INI
// ======================================================

export const weddingData: WeddingData = {
  // ======================================================
  // 🔴 CUSTOMER DATA — GROOM
  // ======================================================
  groom: {
    name: "Ahmad",
    fullName: "Ahmad Fauzi Daniswara, S.T.",
    photo: "/image/groom.jpg",
    parents: {
      father: "Bpk. H. Rahmat Daniswara",
      mother: "Ibu Hj. Siti Nurhasanah",
    },
    instagram: "@ahmad.daniswara",
  },

  // ======================================================
  // 🔴 CUSTOMER DATA — BRIDE
  // ======================================================
  bride: {
    name: "Siti",
    fullName: "Siti Nurhaliza Parahyangan, S.Pd.",
    photo: "/image/bride.jpg",
    parents: {
      father: "Bpk. Drs. H. Dedi Kusnadi",
      mother: "Ibu Hj. Eni Maryani",
    },
    instagram: "@sitinurhaliza.p",
  },

  // ======================================================
  // 🟠 CUSTOMER ASSET — COUPLE PHOTO
  // ======================================================
  couplePhoto: "/image/couple.jpg",

  // ======================================================
  // 🔴 CUSTOMER DATA — WEDDING
  // ======================================================
  wedding: {
    title: "A Love Rooted in Heritage",
    date: "12 October 2026",
    quote: "Two souls, one journey. Mugi Gusti nangtayungan léngkah urang duaan dina ngambah sagara rumah tangga.",
    subQuote: "Kidung asih ngagalindeng marengan janji suci, nyulam katresna dina rangkulan budaya Sunda.",
    invitationTo: "Tamu Undangan Anu Dipihormat",
  },

  // ======================================================
  // 🎵 CUSTOMER MUSIC
  //
  // GANTI FILE:
  // public/music/backsound.mp3
  //
  // TIDAK PERLU MENGUBAH COMPONENT.
  // ======================================================
  music: {
    src: "/music/backsound.mp3",
    volume: 0.35,
    loop: true,
  },

  // ======================================================
  // 🔴 CUSTOMER DATA — EVENTS
  // ======================================================
  events: [
    {
      id: "akad",
      title: "Akad Nikah",
      sundaneseTitle: "Ijab Kabul & Walimatul Ursy",
      date: "12 Oktober 2026",
      day: "Senin",
      time: "08.00 - 10.00 WIB",
      venue: "Bale Heritage Parahyangan",
      address: "Jl. Dago Giri No. 88, Mekarwangi, Lembang, Bandung, Jawa Barat",
      mapsUrl: "https://maps.google.com/?q=Bandung+Jawa+Barat",
    },
    {
      id: "resepsi",
      title: "Resepsi Pernikahan",
      sundaneseTitle: "Hajat Panganten Sunda",
      date: "12 Oktober 2026",
      day: "Senin",
      time: "11.00 - 14.00 WIB",
      venue: "Taman Budaya Sunda Heritage",
      address: "Jl. Dago Giri No. 88, Mekarwangi, Lembang, Bandung, Jawa Barat",
      mapsUrl: "https://maps.google.com/?q=Bandung+Jawa+Barat",
    },
  ],

  // ======================================================
  // 🔴 CUSTOMER DATA — SUNDA CEREMONY (OPTIONAL)
  // ======================================================
  ceremony: [
    {
      id: "ngeuyeuk-seureuh",
      title: "Ngeuyeuk Seureuh",
      sundaneseName: "Upacara Adat Kasundaan",
      meaning: "Neneda ka Nu Maha Kawasa sangkan pinuh ku berkah sarta kawibawaan",
      date: "11 Oktober 2026",
      time: "19.30 WIB",
      description: "Ritual sakral di mana kadua calon panganten nyuhunkeun restu ka sepuh, diiringi wejangan suci pikeun bekel ngambah sagara rumahtangga.",
      image: "/image/ceremony-01.jpg",
    },
    {
      id: "mapag-panganten",
      title: "Mapag Panganten",
      sundaneseName: "Prosesi Ki Lengser & Merak Parahyangan",
      meaning: "Pangbagéa asih jeung kahormatan pikeun kadua mempelai",
      date: "12 Oktober 2026",
      time: "10.45 WIB",
      description: "Prosesi panyambutan panganten ku Ki Lengser, penari merak, sarta umbul-umbul kujang minangka perlambang karahayuan jeung kawibawaan kulawarga.",
      image: "/image/ceremony-01.jpg",
    },
    {
      id: "saweran-buka-pintu",
      title: "Saweran & Buka Pintu",
      sundaneseName: "Nincak Endog, Sawer & Buka Pintu",
      meaning: "Karesikan diri, babagi rezeki, jeung silih asih salawasna",
      date: "12 Oktober 2026",
      time: "11.30 WIB",
      description: "Panganten meupeuskeun endog minangka tanda kasatiaan, lajeng dipayungan bari disawer béas konéng, artos receh, permen, sarta tembang tembang Buka Pintu.",
      image: "/image/ceremony-01.jpg",
    },
  ],

  // ======================================================
  // 🔴 CUSTOMER DATA — COUNTDOWN
  // ======================================================
  countdown: {
    targetDate: "2026-10-12T08:00:00+07:00",
  },

  // ======================================================
  // 🔴 CUSTOMER DATA — OUR STORY
  // ======================================================
  story: [
    {
      date: "2019",
      title: "The First Meeting (Tepung Munggaran)",
      description: "Pertemuan sederhana di perpustakaan kampus Bandung saat rintik gerimis sore. Percakapan santun yang mengawali benang takdir dua hati.",
      image: "/image/story-01.jpg",
    },
    {
      date: "2021",
      title: "Growing Together (Sauyunan)",
      description: "Melangkah bersama menapaki suka dan duka kehidupan, saling melengkapi dan belajar memahami makna kesabaran serta ketulusan cinta.",
      image: "/image/story-02.jpg",
    },
    {
      date: "2025",
      title: "The Promise (Neda Restu)",
      description: "Di bawah keteduhan bukit Parahyangan, kami berikrar untuk mengikat tali pernikahan suci, memohon restu orang tua dan Sang Pencipta.",
      image: "/image/story-03.jpg",
    },
  ],

  // ======================================================
  // 🟠 CUSTOMER ASSET — GALLERY
  // ======================================================
  gallery: [
    "/image/gallery-01.jpg",
    "/image/gallery-02.jpg",
    "/image/gallery-03.jpg",
    "/image/gallery-04.jpg",
    "/image/gallery-05.jpg",
    "/image/gallery-06.jpg",
  ],

  // ======================================================
  // 🔴 CUSTOMER DATA — VENUE
  // ======================================================
  venue: {
    name: "Bale Heritage Sunda Parahyangan",
    address: "Jl. Dago Giri No. 88, Mekarwangi, Lembang, Bandung, Jawa Barat 40391",
    city: "Bandung, Jawa Barat",
    mapsUrl: "https://maps.google.com/?q=Dago+Giri+Lembang+Bandung",
    image: "/image/venue.jpg",
  },

  // ======================================================
  // 🔴 CUSTOMER DATA — WEDDING GIFT
  //
  // GANTI DATA REKENING DAN ALAMAT HADIAH CLIENT DI SINI.
  // TIDAK PERLU MENGUBAH COMPONENT GIFT.
  // ======================================================
  gift: {
    enabled: true,

    bank: [
      {
        bankName: "Bank Central Asia (BCA)",
        accountNumber: "8420198821",
        accountName: "Ahmad Fauzi Daniswara",
      },
      {
        bankName: "Bank Mandiri",
        accountNumber: "1310019283741",
        accountName: "Siti Nurhaliza Parahyangan",
      },
      {
        bankName: "Bank Syariah Indonesia (BSI)",
        accountNumber: "7192834012",
        accountName: "Ahmad Fauzi Daniswara",
      },
    ],

    physicalGift: {
      enabled: true,
      recipient: "Ahmad & Siti",
      address: "Bale Panganten, Jl. Dago Giri No. 88, Mekarwangi, Lembang, Kabupaten Bandung Barat, Jawa Barat 40391",
      mapsUrl: "https://maps.google.com/?q=Dago+Giri+Lembang+Bandung",
      notes: "Konfirmasi pengiriman kado fisik dapat menghubungi narahubung keluarga.",
    },
  },

  // ======================================================
  // 🔴 CUSTOMER DATA — SECTION TOGGLE
  // ======================================================
  sections: {
    couple: true,
    pasundanTouch: true,
    events: true,
    ceremony: true,
    countdown: true,
    story: true,
    gallery: true,
    details: true,
    guestbook: true,
    gift: true,
    lastPage: true,
  },
};
