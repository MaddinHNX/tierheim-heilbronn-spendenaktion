import React from 'react';
import { Gamepad2, Tv, UtensilsCrossed, ArrowRight, Gift, Repeat, Heart } from 'lucide-react';
import { ARGUMENT_ITEMS } from '../config/campaign';

export const ArgumentGrid: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'gta-check':
        return <Gamepad2 className="w-7 h-7 text-amber-700" />;
      case 'abo-check':
        return <Tv className="w-7 h-7 text-indigo-700" />;
      case 'smashburger-check':
        return <UtensilsCrossed className="w-7 h-7 text-rose-700" />;
      default:
        return <Heart className="w-7 h-7 text-amber-700" />;
    }
  };

  const getSubIcon = (id: string) => {
    switch (id) {
      case 'gta-check':
        return <Gift className="w-4 h-4 text-amber-600" />;
      case 'abo-check':
        return <Repeat className="w-4 h-4 text-indigo-600" />;
      case 'smashburger-check':
        return <Heart className="w-4 h-4 text-rose-600" />;
      default:
        return <Heart className="w-4 h-4" />;
    }
  };

  const getBgStyle = (id: string) => {
    switch (id) {
      case 'gta-check':
        return {
          iconBg: 'bg-amber-100 border-amber-200/80',
          badgeBg: 'bg-amber-50 text-amber-800 border-amber-200',
          hoverBorder: 'hover:border-amber-400 group-hover:shadow-amber-500/10',
          accentColor: 'text-amber-700',
        };
      case 'abo-check':
        return {
          iconBg: 'bg-indigo-100 border-indigo-200/80',
          badgeBg: 'bg-indigo-50 text-indigo-800 border-indigo-200',
          hoverBorder: 'hover:border-indigo-400 group-hover:shadow-indigo-500/10',
          accentColor: 'text-indigo-700',
        };
      case 'smashburger-check':
        return {
          iconBg: 'bg-rose-100 border-rose-200/80',
          badgeBg: 'bg-rose-50 text-rose-800 border-rose-200',
          hoverBorder: 'hover:border-rose-400 group-hover:shadow-rose-500/10',
          accentColor: 'text-rose-700',
        };
      default:
        return {
          iconBg: 'bg-stone-100 border-stone-200',
          badgeBg: 'bg-stone-50 text-stone-800 border-stone-200',
          hoverBorder: 'hover:border-stone-400',
          accentColor: 'text-amber-700',
        };
    }
  };

  const handleAction = (type: 'sponsorship' | 'direct', e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('spenden');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // If it's sponsorship, highlight or scroll
      if (type === 'sponsorship') {
        const sponsorLink = document.querySelector('a[href*="patenschaft"]');
        sponsorLink?.classList.add('ring-4', 'ring-amber-400');
        setTimeout(() => {
          sponsorLink?.classList.remove('ring-4', 'ring-amber-400');
        }, 2000);
      }
    }
  };

  return (
    <section id="argumente" className="py-16 sm:py-24 bg-white border-b border-stone-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200 px-3.5 py-1.5 rounded-full inline-block mb-3.5">
            Ehrlicher Realitäts-Check
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 tracking-tight leading-snug">
            Mal ehrlich – wo landet dein Geld sonst?
          </h2>
          <p className="mt-3.5 text-stone-600 text-sm sm:text-base leading-relaxed">
            Wir geben im Alltag so viel Geld für Dinge aus, die schnell verpuffen. 
            Hier sind drei einfache Vergleiche, wie deine Spende im Tierheim Heilbronn echten Unterschied macht.
          </p>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {ARGUMENT_ITEMS.map((item) => {
            const style = getBgStyle(item.id);
            return (
              <div
                key={item.id}
                className={`group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#FAF8F5] border border-stone-200/90 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${style.hoverBorder}`}
              >
                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-13 h-13 rounded-2xl border flex items-center justify-center transition-transform group-hover:scale-110 duration-200 ${style.iconBg}`}>
                      {getIcon(item.id)}
                    </div>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${style.badgeBg}`}>
                      {item.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 mb-3 tracking-tight leading-snug group-hover:text-stone-950">
                    {item.title}
                  </h3>

                  {/* Body Text */}
                  <p className="text-stone-600 text-sm sm:text-[15px] leading-relaxed mb-6 font-normal">
                    {item.text}
                  </p>
                </div>

                {/* Bottom CTA Button inside Card */}
                <div className="pt-4 border-t border-stone-200/70">
                  <button
                    type="button"
                    onClick={(e) => handleAction(item.actionType, e)}
                    className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-white hover:bg-stone-50 border border-stone-300/80 text-xs sm:text-sm font-semibold text-stone-800 transition-all group-hover:border-stone-400 cursor-pointer shadow-2xs"
                  >
                    <span className="flex items-center gap-2">
                      {getSubIcon(item.id)}
                      <span>{item.actionLabel}</span>
                    </span>
                    <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-stone-700 group-hover:translate-x-0.5 transition-all" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
