import { useEffect, useRef, useState } from 'react';
import { Quote, MapPin } from 'lucide-react';

const testimonials = [
  {
    name: 'Amelia R.',
    text: 'The Maldives sunset cruise was surreal. Every detail was handled flawlessly.',
    location: 'Malé, Maldives',
  },
  {
    name: 'James T.',
    text: 'Our Paris itinerary was perfection — hidden gems and 5-star dining.',
    location: 'Paris, France',
  },
  {
    name: 'Sora K.',
    text: 'Tokyo by night with a private guide — unforgettable.',
    location: 'Tokyo, Japan',
  },
];

const pins = [
  { lat: 48.8566, lng: 2.3522 }, // Paris
  { lat: 35.6762, lng: 139.6503 }, // Tokyo
  { lat: -8.4095, lng: 115.1889 }, // Bali
  { lat: 4.1755, lng: 73.5093 }, // Maldives
  { lat: 40.7128, lng: -74.006 }, // New York
];

function TestimonialCard({ t }) {
  return (
    <div className="relative flex min-w-[22rem] max-w-md shrink-0 flex-col rounded-2xl bg-white/5 p-5 text-white backdrop-blur-xl ring-1 ring-white/10">
      <Quote className="mb-2 h-6 w-6 text-[#D4AF37]" />
      <p className="text-sm text-white/90">{t.text}</p>
      <div className="mt-3 text-sm text-white/70">{t.name} • {t.location}</div>
    </div>
  );
}

export default function TestimonialsMap() {
  const mapRef = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((a) => (a + 1) % testimonials.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mx-auto mt-16 max-w-7xl px-4">
      <div className="grid items-stretch gap-6 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-2xl font-semibold text-white">What travelers say</h2>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {testimonials.map((t, i) => (
              <div key={i} className={i === active ? 'opacity-100' : 'opacity-60 transition-opacity'}>
                <TestimonialCard t={t} />
              </div>
            ))}
          </div>
        </div>
        <div className="relative h-80 overflow-hidden rounded-2xl ring-1 ring-white/10">
          {/* Simple world map background image with pins */}
          <img
            ref={mapRef}
            src="https://images.unsplash.com/photo-1475669698648-2f144fcaaeb1?q=80&w=1600&auto=format&fit=crop"
            alt="world map"
            className="h-full w-full object-cover"
          />
          {pins.map((p, idx) => {
            // Quick projection: map image is pseudo-Mercator, we approximate
            const x = ((p.lng + 180) / 360) * 100; // 0..100%
            const y = ((90 - p.lat) / 180) * 100; // 0..100%
            return (
              <div
                key={idx}
                style={{ left: `${x}%`, top: `${y}%` }}
                className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2"
              >
                <MapPin className="h-6 w-6 text-[#D4AF37] drop-shadow" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
