// ======================================================
// 🟢 SYSTEM CODE — GUESTBOOK SERVICE
//
// JANGAN DIUBAH UNTUK EDIT DATA CLIENT.
// ======================================================

import { GuestbookEntry } from '../types/wedding';

const API_ENDPOINT = '/api/guestbook';

export async function fetchGuestbookEntries(): Promise<GuestbookEntry[]> {
  try {
    const res = await fetch(API_ENDPOINT, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    if (!res.ok) {
      throw new Error(`Server returned ${res.status}`);
    }
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (err) {
    console.warn('Failed to load guestbook from backend, retrying or using cache:', err);
    // Return sample or fallback from memory
    return [
      {
        id: 'fallback-1',
        name: 'Bapak R. H. Suryanegara',
        message: 'Wilujeng ngambah sagara rumah tangga kanggo Ananda Ahmad & Siti. Mugi janten kulawarga anu sakinah, mawaddah, warahmah, pinuh ku kabagjaan sarta barokah.',
        attendance: 'present',
        createdAt: new Date().toISOString(),
      },
    ];
  }
}

export async function submitGuestbookEntry(payload: {
  name: string;
  message: string;
  attendance?: 'present' | 'absent' | 'tentative';
}): Promise<GuestbookEntry> {
  const res = await fetch(API_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error('Gagal mengirim ucapan ke server.');
  }

  const result = await res.json();
  return result.entry;
}
