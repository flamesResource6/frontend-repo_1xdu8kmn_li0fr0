import { useEffect, useState } from 'react';
import { Mail } from 'lucide-react';

export default function NewsletterPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 1800);
    return () => clearTimeout(t);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
      <div className="relative w-full max-w-md rounded-2xl bg-white/10 p-6 text-white backdrop-blur-2xl ring-1 ring-white/20">
        <button
          onClick={() => setOpen(false)}
          className="absolute right-3 top-3 rounded-full bg-white/10 px-2 py-1 text-xs text-white/80 hover:bg-white/20"
        >
          Close
        </button>
        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#D4AF37]/10 px-3 py-1 text-xs font-medium text-[#D4AF37] ring-1 ring-[#D4AF37]/30">
          <Mail className="h-4 w-4" /> Insider deals
        </div>
        <h3 className="text-xl font-semibold">Get luxury offers in your inbox</h3>
        <p className="mt-1 text-sm text-white/80">Join our newsletter for exclusive itineraries and early access pricing.</p>
        <form className="mt-4 flex gap-2">
          <input
            type="email"
            required
            placeholder="you@example.com"
            className="w-full rounded-xl bg-white/10 px-4 py-3 text-white placeholder-white/60 outline-none ring-1 ring-white/20"
          />
          <button type="submit" className="shrink-0 rounded-xl bg-[#D4AF37] px-5 font-medium text-[#0b1f3a]">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
