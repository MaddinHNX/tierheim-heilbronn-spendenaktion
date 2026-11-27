import React from 'react';
import { Heart, PawPrint } from 'lucide-react';

export const Header: React.FC = () => {
  const scrollToDonation = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('spenden');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#FAF8F5]/90 border-b border-stone-200/80 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-4">
        {/* Logo / Badge */}
        <a 
          href="#top" 
          className="flex items-center gap-2.5 sm:gap-3 group text-stone-900 transition-opacity hover:opacity-90"
        >
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-amber-500/15 border border-amber-600/30 flex items-center justify-center text-amber-700 shadow-sm transition-transform group-hover:scale-105">
            <PawPrint className="w-5 h-5 sm:w-6 sm:h-6 fill-amber-600/20" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm sm:text-base tracking-tight leading-tight flex items-center gap-1.5">
              <span>Hilfsaktion Tierheim Heilbronn</span>
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline-block animate-pulse" />
            </span>
            <span className="text-[11px] sm:text-xs text-stone-500 font-medium">
              Böllinger Höfe • Solidaritätskampagne
            </span>
          </div>
        </a>

        {/* CTA Button */}
        <div className="flex items-center gap-3">
          <a
            href="#spenden"
            onClick={scrollToDonation}
            className="inline-flex items-center justify-center px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 active:scale-95 transition-all rounded-full shadow-sm shadow-amber-600/20 hover:shadow-md hover:shadow-amber-600/30 whitespace-nowrap cursor-pointer"
          >
            <span>Jetzt direkt spenden</span>
            <span className="ml-1.5 text-amber-200 hidden sm:inline">→</span>
          </a>
        </div>
      </div>
    </header>
  );
};
