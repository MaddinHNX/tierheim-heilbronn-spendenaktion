import React from 'react';
import { Gamepad2, Tv, UtensilsCrossed, ArrowRight, Gift, Repeat, Heart } from 'lucide-react';
import { ARGUMENT_ITEMS } from '../config/campaign';

export const ArgumentGrid: React.FC = () => {
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

  const getFloatingIcon = (id: string) => {
    switch (id) {
      case 'gta-check':
        return <Gamepad2 className="w-5 h-5 text-amber-600" />;
      case 'abo-check':
        return <Tv className="w-5 h-5 text-indigo-600" />;
      case 'smashburger-check':
        return <UtensilsCrossed className="w-5 h-5 text-rose-600" />;
      default:
        return <Heart className="w-5 h-5 text-amber-600" />;
    }
  };

  const getBgStyle = (id: string) => {
    switch (id) {
      case 'gta-check':
        return {
          badgeBg: 'bg-amber-100/90 text-amber-900 border-amber-300',
          hoverBorder: 'hover:border-amber-400 hover:shadow-amber-500/15',
          btnHover: 'hover:bg-amber-50 hover:border-amber-300',
        };
      case 'abo-check':
        return {
          badgeBg: 'bg-indigo-100/90 text-indigo-900 border-indigo-300',
          hoverBorder: 'hover:border-indigo-400 hover:shadow-indigo-500/15',
          btnHover: 'hover:bg-indigo-50 hover:border-indigo-300',
        };
      case 'smashburger-check':
        return {
          badgeBg: 'bg-rose-100/90 text-rose-900 border-rose-300',
          hoverBorder: 'hover:border-rose-400 hover:shadow-rose-500/15',
          btnHover: 'hover:bg-rose-50 hover:border-rose-300',
        };
      default:
        return {
          badgeBg: 'bg-stone-100 text-stone-800 border-stone-200',
          hoverBorder: 'hover:border-stone-400',
          btnHover: 'hover:bg-stone-50',
        };
    }
  };

  const handleAction = (type: 'sponsorship' | 'direct', e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('spenden');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
            Hier sind drei augenzwinkernde Vergleiche, wie deine Spende im Tierheim Heilbronn einen echten Unterschied macht.
          </p>
        </div>

        {/* 3-Card Grid with Rich Photos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {ARGUMENT_ITEMS.map((item) => {
            const style = getBgStyle(item.id);
            return (
              <div
                key={item.id}
                className={`group relative flex flex-col justify-between rounded-3xl bg-[#FAF8F5] border border-stone-200/90 overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${style.hoverBorder}`}
              >
                {/* Photo Header */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-stone-100">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-black/20" />

                  {/* Category Badge on top of image */}
                  <div className="absolute top-3.5 left-3.5">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full border shadow-xs backdrop-blur-md ${style.badgeBg}`}>
                      {item.category}
                    </span>
                  </div>

                  {/* Icon badge floating on bottom-right of image */}
                  <div className="absolute -bottom-4 right-5 w-10 h-10 rounded-2xl bg-white border border-stone-200 shadow-md flex items-center justify-center transition-transform group-hover:scale-110">
                    {getFloatingIcon(item.id)}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 pt-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-stone-900 mb-3 tracking-tight leading-snug group-hover:text-amber-900 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-stone-600 text-sm sm:text-[15px] leading-relaxed mb-6 font-normal">
                      {item.text}
                    </p>
                  </div>

                  {/* Bottom Action Button */}
                  <div className="pt-4 border-t border-stone-200/80">
                    <button
                      type="button"
                      onClick={(e) => handleAction(item.actionType, e)}
                      className={`w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-white border border-stone-300/90 text-xs sm:text-sm font-semibold text-stone-800 transition-all cursor-pointer shadow-2xs ${style.btnHover}`}
                    >
                      <span className="flex items-center gap-2">
                        {getSubIcon(item.id)}
                        <span>{item.actionLabel}</span>
                      </span>
                      <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-stone-800 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
