import { ArrowRight } from 'lucide-react';

const destinations = [
  {
    name: 'Bali',
    price: 1299,
    img: 'https://images.unsplash.com/photo-1518544801976-3e3b22318c6f?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Paris',
    price: 1899,
    img: 'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Tokyo',
    price: 1999,
    img: 'https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'New York',
    price: 1499,
    img: 'https://images.unsplash.com/photo-1464746133101-50f0d48a3c11?q=80&w=1600&auto=format&fit=crop',
  },
];

function Card({ d }) {
  return (
    <div className="group relative h-72 w-64 shrink-0 overflow-hidden rounded-2xl bg-[#0b1f3a] ring-1 ring-white/10">
      <img src={d.img} alt={d.name} className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-4 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">{d.name}</h3>
            <p className="text-sm text-white/80">From ${d.price}</p>
          </div>
          <button className="inline-flex items-center gap-2 rounded-full bg-[#D4AF37] px-3 py-2 text-sm font-medium text-[#0b1f3a] shadow-lg hover:brightness-95">
            Book Now <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function TopDestinations() {
  return (
    <section className="mx-auto mt-14 max-w-7xl px-4">
      <div className="mb-4 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-white">Top Destinations</h2>
          <p className="text-white/70">Handpicked escapes for your next getaway.</p>
        </div>
      </div>
      <div className="flex gap-4 overflow-x-auto pb-2">
        {destinations.map((d) => (
          <Card key={d.name} d={d} />
        ))}
      </div>
    </section>
  );
}
