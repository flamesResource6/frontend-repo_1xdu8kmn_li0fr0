import HeroSection from './components/HeroSection';
import TopDestinations from './components/TopDestinations';
import ExclusiveTours from './components/ExclusiveTours';
import TestimonialsMap from './components/TestimonialsMap';
import NewsletterPopup from './components/NewsletterPopup';
import { Globe } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#061226] text-white">
      {/* Mocked browser chrome */}
      <div className="sticky top-0 z-40 w-full bg-[#0b1f3a] shadow-lg">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3">
          <div className="flex items-center gap-2 rounded-full bg-black/20 px-3 py-1 text-xs text-white/70 ring-1 ring-white/10">
            <span className="h-3 w-3 rounded-full bg-red-500" />
            <span className="h-3 w-3 rounded-full bg-yellow-500" />
            <span className="h-3 w-3 rounded-full bg-green-500" />
          </div>
          <div className="flex flex-1 items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm ring-1 ring-white/20">
            <Globe className="h-4 w-4 text-white/70" />
            <span className="truncate text-white/80">https://hooto.org</span>
          </div>
          <div className="hidden items-center gap-2 md:flex">
            <div className="h-8 w-8 rounded-full bg-white/10" />
            <div className="h-8 w-8 rounded-full bg-white/10" />
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="mx-auto max-w-[88rem] px-4 pb-16">
        <HeroSection />
        <TopDestinations />
        <ExclusiveTours />
        <TestimonialsMap />
      </main>

      <footer className="border-t border-white/10 bg-[#0b1f3a] py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-center md:flex-row">
          <div className="text-white/70">© {new Date().getFullYear()} Wanderlust Adventures • Crafted for dreamers</div>
          <div className="flex gap-4 text-white/70">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>

      <NewsletterPopup />
    </div>
  );
}
