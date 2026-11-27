import React from 'react';
import { AlertCircle, ArrowDown, Heart, ShieldCheck, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToDonation = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('spenden');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToArguments = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('argumente');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 sm:pt-14 sm:pb-24 border-b border-stone-200/60 bg-gradient-to-b from-[#FAF8F5] via-[#F7F4EE] to-[#FAF8F5]">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[680px] h-[340px] sm:h-[400px] bg-amber-200/35 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 -right-20 w-72 h-72 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Status-Pill */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-amber-100/80 border border-amber-300 text-amber-900 text-xs sm:text-sm font-semibold tracking-wide shadow-xs mb-6 sm:mb-8 hover:bg-amber-100 transition-colors">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-600"></span>
          </span>
          <span className="flex items-center gap-1.5">
            <AlertCircle className="w-3.5 h-3.5 text-amber-700 hidden sm:inline" />
            <span>Aktuell: Adventssamstag im Tierheim Heilbronn fällt aus</span>
          </span>
        </div>

        {/* H1 Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-stone-900 tracking-tight leading-[1.15] mb-5 sm:mb-6">
          Kein Adventsfest im Tierheim –{' '}
          <span className="text-amber-700 underline decoration-amber-400 decoration-wavy decoration-2 underline-offset-6">
            aber die Näpfe müssen trotzdem voll werden.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-xl text-stone-600 leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10 font-normal">
          Wegen einer behördlichen Sperrzone fällt der Adventssamstag am <strong>28. November 2026</strong> aus.
          Damit brechen wichtige Spenden für Futter, Pflege und Tierarztkosten weg.
          <span className="block mt-1 sm:inline sm:ml-1 text-stone-800 font-medium">
            Hilf mit, die Lücke zu schließen.
          </span>
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 mb-8 sm:mb-10">
          <a
            href="#spenden"
            onClick={scrollToDonation}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:px-8 sm:py-4 text-base sm:text-lg font-bold text-white bg-amber-600 hover:bg-amber-700 active:scale-98 rounded-full shadow-lg shadow-amber-600/25 transition-all cursor-pointer group"
          >
            <Heart className="w-5 h-5 fill-white text-white transition-transform group-hover:scale-110" />
            <span>Direkt für das Tierheim spenden</span>
          </a>

          <a
            href="#argumente"
            onClick={scrollToArguments}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-stone-700 hover:text-stone-900 bg-white/80 hover:bg-white border border-stone-300/80 rounded-full transition-all shadow-xs cursor-pointer"
          >
            <span>Warum deine Hilfe zählt</span>
            <ArrowDown className="w-4 h-4 text-stone-500 animate-bounce" />
          </a>
        </div>

        {/* Trust Badges & Notice */}
        <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 py-2.5 px-4 rounded-2xl bg-white/70 border border-stone-200/70 text-xs sm:text-sm text-stone-600 shadow-xs max-w-xl mx-auto">
          <div className="flex items-center gap-1.5 text-emerald-800 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>100 % transparent & ehrenamtlich</span>
          </div>
          <span className="hidden sm:inline text-stone-300">•</span>
          <span>
            Direkte Weiterleitung an den{' '}
            <strong className="text-stone-800 font-semibold">Tierschutzverein Heilbronn und Umgebung e.V.</strong>
          </span>
        </div>

        {/* Quick highlight cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mt-8 pt-8 border-t border-stone-200/60 max-w-2xl mx-auto text-left">
          <div className="p-3 sm:p-4 rounded-xl bg-white/60 border border-stone-200/60">
            <span className="text-[11px] sm:text-xs font-semibold text-amber-700 uppercase tracking-wider block mb-0.5">
              Standort
            </span>
            <span className="font-bold text-stone-900 text-sm sm:text-base">
              Böllinger Höfe
            </span>
            <p className="text-[11px] sm:text-xs text-stone-500 mt-0.5">
              Franz-Reichle-Str. 20
            </p>
          </div>

          <div className="p-3 sm:p-4 rounded-xl bg-white/60 border border-stone-200/60">
            <span className="text-[11px] sm:text-xs font-semibold text-rose-700 uppercase tracking-wider block mb-0.5">
              Anlass
            </span>
            <span className="font-bold text-stone-900 text-sm sm:text-base">
              28. Nov. 2026
            </span>
            <p className="text-[11px] sm:text-xs text-stone-500 mt-0.5">
              Adventsfest fällt aus
            </p>
          </div>

          <div className="col-span-2 sm:col-span-1 p-3 sm:p-4 rounded-xl bg-white/60 border border-stone-200/60 flex flex-col justify-center">
            <span className="text-[11px] sm:text-xs font-semibold text-emerald-700 uppercase tracking-wider block mb-0.5 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-emerald-600" />
              Solidarität
            </span>
            <span className="font-bold text-stone-900 text-sm sm:text-base">
              Über 375 Tiere
            </span>
            <p className="text-[11px] sm:text-xs text-stone-500 mt-0.5">
              Warten auf deine Hilfe
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
