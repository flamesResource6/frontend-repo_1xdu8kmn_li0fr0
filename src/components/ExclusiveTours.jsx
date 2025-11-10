import { Star } from 'lucide-react';

const tours = [
  {
    name: 'Santorini Escape',
    rating: 4.9,
    img: 'https://images.unsplash.com/photo-1506968430777-bf7784a87f22?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Machu Picchu Trek',
    rating: 4.8,
    img: 'https://images.unsplash.com/photo-1546530967-21531b891dd4?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'African Safari',
    rating: 4.9,
    img: 'https://images.unsplash.com/photo-1543248939-ff40856f065c?q=80&w=1600&auto=format&fit=crop',
  },
];

function TourCard({ t }) {
  return (
    <div className="group relative h-80 w-full overflow-hidden rounded-2xl bg-[#0b1f3a] ring-1 ring-white/10">
      <img
        src={t.img}
        alt={t.name}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5 text-white">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{t.name}</h3>
          <div className="flex items-center gap-1 text-[#D4AF37]">
            <Star className="h-4 w-4 fill-current" />
            <span className="text-sm text-white">{t.rating}</span>
          </div>
        </div>
        <p className="mt-1 text-sm text-white/80">Private guide • Boutique stays • Seamless transfers</p>
      </div>
    </div>
  );
}

export default function ExclusiveTours() {
  return (
    <section className="mx-auto mt-16 max-w-7xl px-4">
      <h2 className="mb-4 text-2xl font-semibold text-white">Exclusive Tours</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {tours.map((t) => (
          <TourCard key={t.name} t={t} />
        ))}
      </div>
    </section>
  );
}
