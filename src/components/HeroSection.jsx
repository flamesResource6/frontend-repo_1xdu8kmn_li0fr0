import { useRef } from 'react';
import { Calendar, MapPin, Search, Users } from 'lucide-react';

const videoSources = [
  // Beach/sunset stock clips (public CDNs)
  'https://cdn.coverr.co/videos/coverr-sunny-beach-9719/1080p.mp4',
  'https://cdn.coverr.co/videos/coverr-waves-crashing-5624/1080p.mp4',
];

export default function HeroSection() {
  const formRef = useRef(null);

  return (
    <section className="relative h-[90vh] w-full overflow-hidden rounded-2xl bg-[#0b1f3a]">
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=2070&auto=format&fit=crop"
        >
          {videoSources.map((src) => (
            <source key={src} src={src} type="video/mp4" />
          ))}
        </video>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-[#0b1f3a]/70" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center text-white">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs uppercase tracking-widest backdrop-blur-md ring-1 ring-white/20">
          Luxury Travel • Tailor‑Made Journeys
        </span>
        <h1 className="font-geist text-5xl font-semibold leading-tight md:text-6xl">
          Wanderlust Adventures
        </h1>
        <p className="mt-3 max-w-2xl text-white/80">
          Discover the world’s most breathtaking destinations with curated, luxury itineraries.
        </p>

        {/* Glass search bar */}
        <div
          ref={formRef}
          className="mt-8 w-full max-w-5xl rounded-2xl bg-white/10 p-4 backdrop-blur-xl ring-1 ring-white/20 shadow-2xl"
        >
          <div className="flex flex-col gap-3 md:flex-row">
            <div className="flex flex-1 items-center gap-3 rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/15">
              <MapPin className="h-5 w-5 text-[#D4AF37]" />
              <input
                type="text"
                placeholder="Where do you want to go?"
                className="w-full bg-transparent placeholder-white/60 outline-none"
                aria-label="Destination"
              />
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/15 md:w-56">
              <Calendar className="h-5 w-5 text-[#D4AF37]" />
              <input type="date" className="w-full bg-transparent outline-none" aria-label="Check-in" />
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/15 md:w-56">
              <Calendar className="h-5 w-5 text-[#D4AF37]" />
              <input type="date" className="w-full bg-transparent outline-none" aria-label="Check-out" />
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/15 md:w-40">
              <Users className="h-5 w-5 text-[#D4AF37]" />
              <input
                type="number"
                min="1"
                defaultValue={2}
                className="w-full bg-transparent outline-none"
                aria-label="Travelers"
              />
            </div>
            <button className="flex items-center justify-center gap-2 rounded-xl bg-[#D4AF37] px-6 py-3 font-medium text-[#0b1f3a] hover:brightness-95">
              <Search className="h-5 w-5" />
              Search
            </button>
          </div>
          <div className="mt-3 text-left text-xs text-white/70">
            Popular: Maldives, Bali, Santorini, Paris
          </div>
        </div>

        {/* Top Destinations strip preview */}
        <div className="pointer-events-none mt-10 hidden w-full max-w-6xl justify-center gap-4 opacity-90 md:flex">
          {[
            'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1400&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1529257414772-1960b1a1a20f?q=80&w=1400&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=1400&auto=format&fit=crop',
          ].map((src) => (
            <img
              key={src}
              src={src}
              alt="destination preview"
              className="h-28 w-44 rounded-xl object-cover ring-1 ring-white/20"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
