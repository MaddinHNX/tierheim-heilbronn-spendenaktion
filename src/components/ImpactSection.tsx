import React from 'react';
import { Apple, HeartPulse, Stethoscope, Dog, Cat, Bird, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { CAMPAIGN_INFO, IMPACT_TIERS } from '../config/campaign';

interface ImpactSectionProps {
  onSelectAmount?: (amount: number) => void;
}

export const ImpactSection: React.FC<ImpactSectionProps> = ({ onSelectAmount }) => {
  const getImpactIcon = (iconName: string) => {
    switch (iconName) {
      case 'Apple':
        return <Apple className="w-6 h-6 text-amber-700" />;
      case 'HeartPulse':
        return <HeartPulse className="w-6 h-6 text-emerald-700" />;
      case 'Stethoscope':
        return <Stethoscope className="w-6 h-6 text-rose-700" />;
      default:
        return <Sparkles className="w-6 h-6 text-amber-700" />;
    }
  };

  const handleTierClick = (val: number) => {
    if (onSelectAmount) {
      onSelectAmount(val);
    }
    const element = document.getElementById('spenden');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="wirkung" className="py-16 sm:py-24 bg-[#FAF8F5] border-b border-stone-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 rounded-full inline-block mb-3.5">
            Transparenz & Wirkung
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 tracking-tight leading-snug">
            Wofür das Tierheim Heilbronn deine Hilfe braucht
          </h2>
          <p className="mt-3.5 text-stone-600 text-sm sm:text-base leading-relaxed">
            Hinter den Mauern an den Böllinger Höfen schlagen Hunderte kleine Herzen.
            Jeder Euro fließt zu 100 % in die Versorgung, tierärztliche Betreuung und ein sicheres Dach über dem Kopf.
          </p>
        </div>

        {/* Infoblock: Schützlinge im Überblick */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm mb-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="max-w-xl text-center lg:text-left">
              <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                Laufende Betreuung & Zufluchtsort
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1 mb-2">
                Verlässliche Heimat für Tiere im gesamten Landkreis Heilbronn
              </h3>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                Das Tierheim Heilbronn ({CAMPAIGN_INFO.shelterLocation}) ist 365 Tage im Jahr im Einsatz. 
                Ohne die Einnahmen des traditionellen Adventssamstags fehlen lebenswichtige Mittel für die Wintermonate.
              </p>
            </div>

            {/* Animal Statistics Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full lg:w-auto shrink-0">
              <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-3.5 sm:p-4 text-center">
                <Dog className="w-5 h-5 text-amber-700 mx-auto mb-1.5" />
                <span className="block text-xl sm:text-2xl font-extrabold text-stone-900">
                  {CAMPAIGN_INFO.stats.dogs}
                </span>
                <span className="text-xs font-medium text-stone-600">Hunde</span>
              </div>

              <div className="bg-orange-50/70 border border-orange-200/80 rounded-2xl p-3.5 sm:p-4 text-center">
                <Cat className="w-5 h-5 text-orange-700 mx-auto mb-1.5" />
                <span className="block text-xl sm:text-2xl font-extrabold text-stone-900">
                  {CAMPAIGN_INFO.stats.cats}
                </span>
                <span className="text-xs font-medium text-stone-600">Katzen</span>
              </div>

              <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-3.5 sm:p-4 text-center">
                <Bird className="w-5 h-5 text-emerald-700 mx-auto mb-1.5" />
                <span className="block text-xl sm:text-2xl font-extrabold text-stone-900">
                  {CAMPAIGN_INFO.stats.birds}
                </span>
                <span className="text-xs font-medium text-stone-600">Vögel</span>
              </div>

              <div className="bg-sky-50/70 border border-sky-200/80 rounded-2xl p-3.5 sm:p-4 text-center">
                <Sparkles className="w-5 h-5 text-sky-700 mx-auto mb-1.5" />
                <span className="block text-xl sm:text-2xl font-extrabold text-stone-900">
                  {CAMPAIGN_INFO.stats.smallAnimals}
                </span>
                <span className="text-xs font-medium text-stone-600">Kleintiere/Exoten</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Compact Impact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {IMPACT_TIERS.map((tier) => (
            <div
              key={tier.amount}
              className={`relative flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-white border transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${
                tier.highlight
                  ? 'border-emerald-500 ring-2 ring-emerald-500/20 shadow-md'
                  : 'border-stone-200/90 shadow-sm hover:border-stone-300'
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-[11px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                  {tier.badge || 'Besonders wirksam'}
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-stone-100/90 border border-stone-200/70 flex items-center justify-center">
                    {getImpactIcon(tier.icon)}
                  </div>
                  <span className="text-2xl sm:text-3xl font-black text-stone-900">
                    {tier.amount}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-stone-900 mb-2 leading-snug">
                  {tier.title}
                </h4>

                <p className="text-stone-600 text-sm leading-relaxed mb-6">
                  {tier.description}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100">
                <button
                  type="button"
                  onClick={() => handleTierClick(tier.value)}
                  className={`w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    tier.highlight
                      ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm'
                      : 'bg-stone-100 hover:bg-stone-200 text-stone-800'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Diesen Beitrag ermöglichen</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
