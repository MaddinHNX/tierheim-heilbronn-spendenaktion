import React from 'react';
import { Apple, HeartPulse, Stethoscope, Dog, Cat, Bird, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { CAMPAIGN_INFO, IMPACT_TIERS, IMAGES } from '../config/campaign';

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
            Hinter den Toren an den Böllinger Höfen schlagen Hunderte kleine Herzen.
            Jeder Euro fließt zu 100 % in die Versorgung, tierärztliche Betreuung und ein sicheres Dach über dem Kopf.
          </p>
        </div>

        {/* Infoblock: Schützlinge im Überblick with Shelter Visual */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-stone-200/90 shadow-sm mb-12 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Text & Statistics (7 cols) */}
            <div className="lg:col-span-7">
              <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block mb-1">
                Laufende Betreuung & Zufluchtsort
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-3">
                Verlässliche Heimat für Tiere im gesamten Landkreis Heilbronn
              </h3>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6">
                Das Tierheim Heilbronn ({CAMPAIGN_INFO.shelterLocation}) ist an 365 Tagen im Jahr unermüdlich im Einsatz. 
                Ohne die fest eingeplanten Einnahmen des beliebten Adventssamstags fehlen lebenswichtige Mittel für die nasskalten Wintermonate.
              </p>

              {/* Animal Statistics Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-3 text-center">
                  <Dog className="w-5 h-5 text-amber-700 mx-auto mb-1" />
                  <span className="block text-xl font-extrabold text-stone-900">
                    {CAMPAIGN_INFO.stats.dogs}
                  </span>
                  <span className="text-xs font-medium text-stone-600">Hunde</span>
                </div>

                <div className="bg-orange-50/70 border border-orange-200/80 rounded-2xl p-3 text-center">
                  <Cat className="w-5 h-5 text-orange-700 mx-auto mb-1" />
                  <span className="block text-xl font-extrabold text-stone-900">
                    {CAMPAIGN_INFO.stats.cats}
                  </span>
                  <span className="text-xs font-medium text-stone-600">Katzen</span>
                </div>

                <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-3 text-center">
                  <Bird className="w-5 h-5 text-emerald-700 mx-auto mb-1" />
                  <span className="block text-xl font-extrabold text-stone-900">
                    {CAMPAIGN_INFO.stats.birds}
                  </span>
                  <span className="text-xs font-medium text-stone-600">Vögel</span>
                </div>

                <div className="bg-sky-50/70 border border-sky-200/80 rounded-2xl p-3 text-center">
                  <Sparkles className="w-5 h-5 text-sky-700 mx-auto mb-1" />
                  <span className="block text-xl font-extrabold text-stone-900">
                    {CAMPAIGN_INFO.stats.smallAnimals}
                  </span>
                  <span className="text-xs font-medium text-stone-600">Kleintiere/Exoten</span>
                </div>
              </div>
            </div>

            {/* Visual Photo Card (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border-2 border-stone-200 shadow-md group">
                <img
                  src={IMAGES.bunny}
                  alt="Kleintiere und Schützlinge im Tierheim Heilbronn"
                  className="w-full h-56 sm:h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/75 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300 block">
                    Schützlinge an den Böllinger Höfen
                  </span>
                  <p className="text-xs sm:text-sm font-medium">
                    Auch Kaninchen, Meerschweinchen & Exoten erhalten liebevolle Pflege.
                  </p>
                </div>
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
