import React from 'react';
import { AlertCircle, ArrowDown, Heart, ShieldCheck, Sparkles, Dog, MapPin } from 'lucide-react';
import { IMAGES, CAMPAIGN_INFO } from '../config/campaign';

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
    <section className="relative overflow-hidden pt-8 pb-16 sm:pt-14 sm:pb-24 border-b border-stone-200/60 bg-gradient-to-b from-[#FAF8F5] via-[#F5F1EA] to-[#FAF8F5]">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[720px] h-[340px] sm:h-[450px] bg-amber-200/35 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 -right-20 w-80 h-80 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            {/* Status-Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-amber-100/90 border border-amber-300 text-amber-900 text-xs sm:text-sm font-semibold tracking-wide shadow-xs mb-5 sm:mb-6 hover:bg-amber-100 transition-colors">
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
            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-extrabold text-stone-900 tracking-tight leading-[1.12] mb-5 sm:mb-6">
              Kein Adventsfest im Tierheim –{' '}
              <span className="text-amber-700 underline decoration-amber-400 decoration-wavy decoration-2 underline-offset-6">
                aber die Näpfe müssen trotzdem voll werden.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-7 sm:mb-9 font-normal">
              Wegen einer behördlichen Sperrzone (Bombenentschärfung Böllinger Höfe) fällt der Adventssamstag am <strong>28. November 2026</strong> aus.
              Damit brechen wichtige Spenden für Futter, Pflege und Tierarztkosten weg.
              <span className="block mt-1 text-stone-800 font-medium">
                Hilf mit, diese Lücke solidarisch zu schließen.
              </span>
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 sm:gap-4 mb-7 sm:mb-8">
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
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-stone-700 hover:text-stone-900 bg-white hover:bg-stone-50 border border-stone-300 rounded-full transition-all shadow-xs cursor-pointer"
              >
                <span>Warum deine Hilfe zählt</span>
                <ArrowDown className="w-4 h-4 text-stone-500 animate-bounce" />
              </a>
            </div>

            {/* Trust Badges */}
            <div className="inline-flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 sm:gap-3 py-2.5 px-4 rounded-2xl bg-white/80 border border-stone-200/80 text-xs sm:text-sm text-stone-600 shadow-xs">
              <div className="flex items-center gap-1.5 text-emerald-800 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100 % transparent & ehrenamtlich</span>
              </div>
              <span className="hidden sm:inline text-stone-300">•</span>
              <span>
                Direkte Weiterleitung an den{' '}
                <strong className="text-stone-800 font-semibold">Tierschutzverein Heilbronn</strong>
              </span>
            </div>

          </div>

          {/* Right Column: Emotional Hero Image Card */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
              <img
                src={IMAGES.heroDog}
                alt="Treuer Hund im Tierheim Heilbronn wartet auf Unterstützung"
                className="w-full h-80 sm:h-96 lg:h-[430px] object-cover object-center transition-transform duration-500 group-hover:scale-105"
                loading="eager"
              />

              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/10 to-transparent pointer-events-none" />

              {/* Floating Top Badge */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-stone-200/80 text-stone-900 text-xs font-bold flex items-center gap-1.5 shadow-sm">
                <MapPin className="w-3.5 h-3.5 text-amber-600" />
                <span>{CAMPAIGN_INFO.shelterLocation.split('(')[1]?.replace(')', '') || 'Böllinger Höfe'}</span>
              </div>

              {/* Floating Bottom Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-stone-200 shadow-md">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-amber-800 uppercase tracking-wider flex items-center gap-1">
                    <Dog className="w-3.5 h-3.5 text-amber-600" />
                    <span>375+ Tiere im Tierheim</span>
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>Winterhilfe 2026</span>
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-medium text-stone-800 leading-snug">
                  „Wir freuen uns über jede Schale Futter, jede Patenschaft und jeden geteilten Beitrag.“
                </p>
              </div>
            </div>

            {/* Decorative background glow behind image */}
            <div className="absolute -inset-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-3xl blur-xl -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
};
