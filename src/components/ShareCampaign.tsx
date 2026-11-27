import React, { useState } from 'react';
import { Share2, Check, Copy, MessageCircle, Send } from 'lucide-react';
import { DONATION_LINKS } from '../config/campaign';

export const ShareCampaign: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const shareText = encodeURIComponent(
    'Wichtig für Heilbronn! Wegen einer behördlichen Sperrzone (Bombenentschärfung Böllinger Höfe) fällt der Adventssamstag im Tierheim Heilbronn am 28.11.2026 aus. Den Tieren fehlen dringend Spenden für Futter und Tierarzt. Bitte hilf mit oder teile den Link:\n'
  );

  const currentUrl = typeof window !== 'undefined' ? window.location.href : DONATION_LINKS.campaignShareUrl;
  const encodedUrl = encodeURIComponent(currentUrl);

  const handleCopy = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const shareWhatsApp = `https://api.whatsapp.com/send?text=${shareText}${encodedUrl}`;
  const shareTelegram = `https://t.me/share/url?url=${encodedUrl}&text=${shareText}`;
  const shareFacebook = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;

  return (
    <section className="py-12 sm:py-16 bg-[#F7F4EE] border-b border-stone-200/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/90 text-amber-900 text-xs font-bold tracking-wide uppercase mb-3">
          <Share2 className="w-3.5 h-3.5 text-amber-700" />
          <span>Gemeinsam mehr erreichen</span>
        </div>

        <h3 className="text-xl sm:text-3xl font-extrabold text-stone-900 tracking-tight mb-3">
          Kein Geld übrig? Weitersagen hilft genauso!
        </h3>
        <p className="text-stone-600 text-sm sm:text-base max-w-xl mx-auto mb-8">
          Jeder Klick und jeder geteilte Link auf WhatsApp oder Social Media bringt die Aktion zu Tierfreunden in und um Heilbronn.
        </p>

        {/* Share buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {/* WhatsApp Primary */}
          <a
            href={shareWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-sm transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Auf WhatsApp teilen</span>
          </a>

          {/* Telegram */}
          <a
            href={shareTelegram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#0088cc] hover:bg-[#0077b5] text-white font-semibold text-sm shadow-sm transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <Send className="w-4 h-4 fill-white" />
            <span>Telegram</span>
          </a>

          {/* Facebook */}
          <a
            href={shareFacebook}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#1877F2] hover:bg-[#166fe5] text-white font-semibold text-sm shadow-sm transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <Share2 className="w-4 h-4" />
            <span>Facebook</span>
          </a>

          {/* Copy Link */}
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white hover:bg-stone-50 border border-stone-300 text-stone-800 font-semibold text-sm shadow-2xs transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700 font-bold">Link kopiert!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-stone-500" />
                <span>Link kopieren</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};
