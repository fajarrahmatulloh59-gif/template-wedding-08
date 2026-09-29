// ======================================================
// 🟢 SYSTEM CODE — GUESTBOOK FORM
//
// BACKEND-CONNECTED · NO MOCK LOCALSTORAGE
// JANGAN DIUBAH UNTUK EDIT DATA CLIENT.
// ======================================================

import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { submitGuestbookEntry } from '../../services/guestbookService';
import { GuestbookEntry } from '../../types/wedding';

interface GuestbookFormProps {
  onEntryAdded: (newEntry: GuestbookEntry) => void;
}

export const GuestbookForm: React.FC<GuestbookFormProps> = ({ onEntryAdded }) => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [attendance, setAttendance] = useState<'present' | 'absent' | 'tentative'>('present');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successNotice, setSuccessNotice] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      setErrorMessage('Mohon mengisi nama dan ucapan doa Anda.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const entry = await submitGuestbookEntry({
        name: name.trim(),
        message: message.trim(),
        attendance,
      });

      onEntryAdded(entry);
      setName('');
      setMessage('');
      setSuccessNotice('Hatur nuhun! Doa dan ucapan Anda telah berhasil terkirim.');
      setTimeout(() => setSuccessNotice(null), 5000);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Terjadi kendala saat mengirim ucapan. Silakan coba kembali.';
      setErrorMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#FAF7F0] border-2 border-[#B69A62]/40 rounded-sm shadow-xl p-6 sm:p-8 relative">
      {/* Antique Gold Corner Accents */}
      <div className="absolute top-2.5 left-2.5 w-3.5 h-3.5 border-t-2 border-l-2 border-[#B69A62]" />
      <div className="absolute top-2.5 right-2.5 w-3.5 h-3.5 border-t-2 border-r-2 border-[#B69A62]" />
      <div className="absolute bottom-2.5 left-2.5 w-3.5 h-3.5 border-b-2 border-l-2 border-[#B69A62]" />
      <div className="absolute bottom-2.5 right-2.5 w-3.5 h-3.5 border-b-2 border-r-2 border-[#B69A62]" />

      <h3 className="font-serif text-2xl text-[#29211C] tracking-wide text-center">
        Tuliskan Doa & Restu
      </h3>
      <p className="text-xs text-center text-[#76563E] mt-1 font-sans">
        Doa restu Anda merupakan karunia terindah bagi lembaran baru kami.
      </p>

      {successNotice && (
        <div className="mt-4 p-3 bg-[#30483A]/10 border border-[#30483A]/30 rounded text-xs text-[#30483A] flex items-center gap-2">
          <CheckCircle2 size={16} className="text-[#30483A] shrink-0" />
          <span>{successNotice}</span>
        </div>
      )}

      {errorMessage && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded text-xs text-red-700">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        {/* Name input */}
        <div>
          <label htmlFor="guest-name" className="block text-xs font-sans font-medium uppercase tracking-wider text-[#5B4435] mb-1">
            Nama Anda
          </label>
          <input
            id="guest-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Contoh: R. Dedi Kusnadi"
            className="w-full px-3.5 py-2.5 rounded-sm bg-[#F5EFE3] border border-[#B69A62]/40 text-[#29211C] placeholder:text-[#76563E]/40 text-sm focus:outline-none focus:border-[#76563E] focus:ring-1 focus:ring-[#76563E] transition-colors"
          />
        </div>

        {/* Attendance options */}
        <div>
          <label className="block text-xs font-sans font-medium uppercase tracking-wider text-[#5B4435] mb-1">
            Konfirmasi Kehadiran
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: 'present', label: 'Hadir' },
              { id: 'tentative', label: 'Ragu-ragu' },
              { id: 'absent', label: 'Maaf, Berhalangan' },
            ].map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => setAttendance(option.id as 'present' | 'absent' | 'tentative')}
                className={`py-2 px-2 text-xs font-serif rounded-xs border text-center transition-all ${
                  attendance === option.id
                    ? 'bg-[#76563E] text-[#FAF7F0] border-[#5B4435] shadow-xs'
                    : 'bg-[#F5EFE3] text-[#5B4435] border-[#B69A62]/30 hover:border-[#B69A62]'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Message / Prayer input */}
        <div>
          <label htmlFor="guest-message" className="block text-xs font-sans font-medium uppercase tracking-wider text-[#5B4435] mb-1">
            Pesan / Ucapan Doa
          </label>
          <textarea
            id="guest-message"
            required
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tuliskan doa kebaikan dan harapan untuk kedua mempelai..."
            className="w-full px-3.5 py-2.5 rounded-sm bg-[#F5EFE3] border border-[#B69A62]/40 text-[#29211C] placeholder:text-[#76563E]/40 text-sm focus:outline-none focus:border-[#76563E] focus:ring-1 focus:ring-[#76563E] transition-colors resize-none"
          />
        </div>

        {/* Submit button: [ KIRIM UCAPAN ] */}
        <div className="pt-2 text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-sm bg-[#76563E] text-[#FAF7F0] hover:bg-[#5B4435] disabled:opacity-50 text-xs uppercase tracking-[0.2em] font-serif font-semibold border border-[#B69A62]/50 shadow-md transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B69A62]"
          >
            {isSubmitting ? (
              <span>Mengirimkan Doa...</span>
            ) : (
              <>
                <Send size={14} />
                <span>KIRIM UCAPAN</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
