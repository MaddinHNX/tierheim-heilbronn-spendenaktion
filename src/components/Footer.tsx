import React from 'react';
import { Heart, ShieldCheck, ExternalLink } from 'lucide-react';
import { DONATION_LINKS } from '../config/campaign';

interface FooterProps {
  onOpenLegal: (type: 'impressum' | 'datenschutz') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-14 pb-12 border-t border-stone-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Transparency Banner Card */}
        <div className="p-6 sm:p-7 rounded-2xl bg-stone-800/80 border border-stone-700/80 mb-10">
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="space-y-1.5 text-xs sm:text-sm leading-relaxed text-stone-300">
              <h4 className="font-bold text-white text-sm sm:text-base">
                Ehrenamtlicher Transparenz- & Solidaritätshinweis
              </h4>
              <p>
                Dies ist eine private, ehrenamtliche Unterstützer-Seite zugunsten des <strong>Tierschutzvereins Heilbronn und Umgebung e.V.</strong> (Franz-Reichle-Str. 20, 74078 Heilbronn). 
                Alle Spendenlinks und Kontodaten führen ohne Umwege und ohne Abzüge direkt auf die offiziellen Kanäle des Vereins.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Navigation & Credits */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6 border-t border-stone-800 text-xs sm:text-sm text-stone-400">
          
          <div className="flex items-center gap-1.5 text-center md:text-left">
            <span>Gemeinsam für die Tiere in Heilbronn</span>
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500 inline-block" />
            <span>Adventssamstag-Hilfsaktion 2026</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a
              href={DONATION_LINKS.officialWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors inline-flex items-center gap-1 cursor-pointer"
            >
              <span>Offizielle Vereins-Website</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              type="button"
              onClick={() => onOpenLegal('impressum')}
              className="hover:text-white transition-colors cursor-pointer underline-offset-4 hover:underline"
            >
              Impressum
            </button>

            <button
              type="button"
              onClick={() => onOpenLegal('datenschutz')}
              className="hover:text-white transition-colors cursor-pointer underline-offset-4 hover:underline"
            >
              Datenschutz
            </button>
          </div>

        </div>

        <div className="mt-8 text-center text-[11px] text-stone-500">
          Statisch generiert & DSGVO-konform (ohne Third-Party Tracking oder externe Google-Fonts).
        </div>

      </div>
    </footer>
  );
};
