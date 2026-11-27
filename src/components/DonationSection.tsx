import React, { useState } from 'react';
import { 
  Heart, 
  ExternalLink, 
  Gift, 
  Building2, 
  Copy, 
  Check, 
  Sparkles, 
  ShieldCheck, 
  ArrowUpRight,
  HelpCircle,
  FileText
} from 'lucide-react';
import { DONATION_LINKS, BANK_DETAILS, IMAGES } from '../config/campaign';

interface DonationSectionProps {
  selectedAmount?: number | null;
}

export const DonationSection: React.FC<DonationSectionProps> = ({ selectedAmount }) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2500);
  };

  return (
    <section id="spenden" className="py-16 sm:py-24 bg-white scroll-mt-10 border-b border-stone-200/70">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200 px-3.5 py-1.5 rounded-full inline-block mb-3.5">
            Jetzt aktiv werden
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 tracking-tight leading-snug">
            Wähle deinen Weg, um das Tierheim zu unterstützen
          </h2>
          <p className="mt-3.5 text-stone-600 text-sm sm:text-base leading-relaxed">
            Ob direkte Online-Spende, eine Patenschaft als sinnvolles Weihnachtsgeschenk oder eine unkomplizierte Überweisung: 
            Jede Geste sichert das Wohl der Tiere an den Böllinger Höfen.
          </p>

          {selectedAmount && (
            <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs sm:text-sm font-semibold animate-fade-in">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Vorgemerkter Wunschbetrag: <strong>{selectedAmount} €</strong></span>
            </div>
          )}
        </div>

        {/* 3 Main Donation Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          
          {/* OPTION A: DIRECT DONATION (Primary CTA) */}
          <div className="relative flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-gradient-to-br from-amber-50/60 via-white to-amber-50/30 border-2 border-amber-500 shadow-md hover:shadow-xl transition-all group">
            <div className="absolute -top-3.5 right-6 bg-amber-600 text-white text-[11px] sm:text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Empfohlen • Sofortige Hilfe</span>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center shadow-sm shrink-0">
                  <Heart className="w-6 h-6 fill-white" />
                </div>
                <div>
                  <span className="text-xs font-bold text-amber-800 uppercase tracking-wider block">
                    Option A (Haupt-Weg)
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                    Direkt spenden (Betterplace / Vereinsseite)
                  </h3>
                </div>
              </div>

              <div className="relative h-28 w-full rounded-2xl overflow-hidden mb-4 border border-amber-200/80 shadow-2xs">
                <img
                  src={IMAGES.foodBowl}
                  alt="Glücklicher Hund mit vollem Napf"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-stone-900/60 to-transparent flex items-center px-4">
                  <span className="text-white text-xs sm:text-sm font-semibold drop-shadow-sm">
                    Füllt die Näpfe im Tierheim Heilbronn
                  </span>
                </div>
              </div>

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6">
                Spende mit wenigen Klicks sicher und direkt über das offizielle Spendenformular (Betterplace) des Tierheims Heilbronn. Wähle flexibel aus PayPal, Lastschrift, Kreditkarte oder giropay.
              </p>

              <div className="space-y-2 mb-6 text-xs sm:text-sm text-stone-700 bg-white/80 p-4 rounded-2xl border border-stone-200/80">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Automatische Spendenquittung ab 300 € möglich</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>100 % transparent über den offiziellen Träger</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Einmalig oder als monatliche Unterstützung</span>
                </div>
              </div>
            </div>

            <a
              href={DONATION_LINKS.directDonation}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 w-full py-4 px-6 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-base sm:text-lg shadow-md shadow-amber-600/30 transition-all active:scale-98 cursor-pointer"
            >
              <span>Jetzt direkt auf heilbronner-tierschutz.de spenden</span>
              <ExternalLink className="w-5 h-5 shrink-0" />
            </a>
          </div>

          {/* OPTION B: SPONSORSHIP (Weihnachtsgeschenk) */}
          <div className="relative flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-white border border-stone-300 shadow-sm hover:shadow-xl hover:border-amber-400 transition-all group">
            <div className="absolute -top-3.5 right-6 bg-stone-900 text-white text-[11px] sm:text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1.5">
              <Gift className="w-3.5 h-3.5 text-amber-300" />
              <span>Weihnachtsidee mit Herz</span>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-stone-100 border border-stone-200 text-stone-800 flex items-center justify-center shadow-2xs shrink-0">
                  <Gift className="w-6 h-6 text-amber-700" />
                </div>
                <div>
                  <span className="text-xs font-bold text-stone-500 uppercase tracking-wider block">
                    Option B (Nachhaltig)
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                    Tierpatenschaft verschenken
                  </h3>
                </div>
              </div>

              <div className="relative h-28 w-full rounded-2xl overflow-hidden mb-4 border border-stone-200 shadow-2xs">
                <img
                  src={IMAGES.patenschaft}
                  alt="Patenschaft als sinnvolles Weihnachtsgeschenk"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-stone-900/60 to-transparent flex items-center px-4">
                  <span className="text-white text-xs sm:text-sm font-semibold drop-shadow-sm">
                    Inkl. Urkunde zum Ausdrucken & Verschenken
                  </span>
                </div>
              </div>

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6">
                Das perfekte Geschenk für tierliebe Freunde und Familie: Übernimm oder verschenke eine Patenschaft für einen Hund, eine Katze, ein Kleintier oder ein Sorgenkind im Tierheim Heilbronn.
              </p>

              <div className="space-y-2 mb-6 text-xs sm:text-sm text-stone-700 bg-stone-50 p-4 rounded-2xl border border-stone-200/80">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Persönliche Patenschaftsurkunde zum Ausdrucken</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Dauerhafte Entlastung der monatlichen Futterkosten</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Wunderschöne Geste statt belanglosem Konsum</span>
                </div>
              </div>
            </div>

            <a
              href={DONATION_LINKS.sponsorship}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 w-full py-4 px-6 rounded-2xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-base sm:text-lg shadow-sm transition-all active:scale-98 cursor-pointer"
            >
              <span>Tierpatenschaft abschließen / verschenken</span>
              <ArrowUpRight className="w-5 h-5 shrink-0" />
            </a>
          </div>

        </div>

        {/* OPTION C: BANK TRANSFER & PAYPAL (Box mit Copy-to-Clipboard) */}
        <div className="p-7 sm:p-9 rounded-3xl bg-[#FAF8F5] border border-stone-300/80 shadow-xs">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-stone-200">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-white border border-stone-200 text-emerald-700 flex items-center justify-center shrink-0">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-stone-500 uppercase tracking-wider block">
                  Option C (Klassisch & Direkt)
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
                  Direktüberweisung aufs Vereinskonto & PayPal
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-stone-600 bg-white px-3 py-1.5 rounded-full border border-stone-200">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Offizielle Kontodaten des Vereins</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Banküberweisung Data Block */}
            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-stone-200/90 shadow-2xs">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block mb-4">
                Banküberweisung (Kreissparkasse Heilbronn)
              </span>

              <div className="space-y-4">
                {/* Empfänger */}
                <div>
                  <label className="text-[11px] font-semibold text-stone-500 uppercase block mb-1">
                    Kontoinhaber / Empfänger
                  </label>
                  <div className="flex items-center justify-between bg-stone-50 px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs sm:text-sm font-medium text-stone-900">
                    <span className="truncate mr-2">{BANK_DETAILS.recipient}</span>
                    <button
                      type="button"
                      onClick={() => copyToClipboard(BANK_DETAILS.recipient, 'recipient')}
                      className="p-1 text-stone-500 hover:text-stone-900 transition-colors shrink-0 cursor-pointer"
                      title="Empfänger kopieren"
                    >
                      {copiedKey === 'recipient' ? (
                        <span className="text-emerald-600 flex items-center gap-1 text-xs font-bold">
                          <Check className="w-4 h-4" /> Kopiert!
                        </span>
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* IBAN */}
                <div>
                  <label className="text-[11px] font-semibold text-stone-500 uppercase block mb-1">
                    IBAN
                  </label>
                  <div className="flex items-center justify-between bg-stone-50 px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs sm:text-sm font-mono font-bold text-stone-900">
                    <span>{BANK_DETAILS.ibanFormatted}</span>
                    <button
                      type="button"
                      onClick={() => copyToClipboard(BANK_DETAILS.iban.replace(/\s+/g, ''), 'iban')}
                      className="p-1 text-stone-500 hover:text-stone-900 transition-colors shrink-0 cursor-pointer"
                      title="IBAN kopieren"
                    >
                      {copiedKey === 'iban' ? (
                        <span className="text-emerald-600 flex items-center gap-1 text-xs font-bold font-sans">
                          <Check className="w-4 h-4" /> Kopiert!
                        </span>
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* BIC & Bank */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-semibold text-stone-500 uppercase block mb-1">
                      BIC
                    </label>
                    <div className="bg-stone-50 px-3 py-2 rounded-xl border border-stone-200 text-xs sm:text-sm font-mono text-stone-800">
                      {BANK_DETAILS.bic}
                    </div>
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-stone-500 uppercase block mb-1">
                      Bankinstitut
                    </label>
                    <div className="bg-stone-50 px-3 py-2 rounded-xl border border-stone-200 text-xs sm:text-sm text-stone-800 truncate">
                      {BANK_DETAILS.bankName}
                    </div>
                  </div>
                </div>

                {/* Verwendungszweck */}
                <div>
                  <label className="text-[11px] font-semibold text-stone-500 uppercase block mb-1">
                    Empfohlener Verwendungszweck
                  </label>
                  <div className="flex items-center justify-between bg-stone-50 px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs sm:text-sm font-medium text-stone-900">
                    <span className="truncate mr-2">{BANK_DETAILS.defaultPurpose}</span>
                    <button
                      type="button"
                      onClick={() => copyToClipboard(BANK_DETAILS.defaultPurpose, 'purpose')}
                      className="p-1 text-stone-500 hover:text-stone-900 transition-colors shrink-0 cursor-pointer"
                      title="Verwendungszweck kopieren"
                    >
                      {copiedKey === 'purpose' ? (
                        <span className="text-emerald-600 flex items-center gap-1 text-xs font-bold">
                          <Check className="w-4 h-4" /> Kopiert!
                        </span>
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

              </div>
            </div>

            {/* PayPal Block */}
            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-stone-200/90 shadow-2xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block mb-4">
                  PayPal (Schnell & Mobil)
                </span>

                <p className="text-stone-600 text-sm leading-relaxed mb-4">
                  Sende deinen Wunschbetrag direkt über PayPal an die offizielle E-Mail-Adresse des Tierheims:
                </p>

                {/* PayPal Adresse Copy */}
                <div className="mb-4">
                  <label className="text-[11px] font-semibold text-stone-500 uppercase block mb-1">
                    Offizielle PayPal-Adresse
                  </label>
                  <div className="flex items-center justify-between bg-sky-50/60 px-3.5 py-3 rounded-xl border border-sky-200 text-xs sm:text-sm font-semibold text-sky-950">
                    <span className="truncate mr-2">{DONATION_LINKS.paypalEmail}</span>
                    <button
                      type="button"
                      onClick={() => copyToClipboard(DONATION_LINKS.paypalEmail, 'paypal')}
                      className="p-1 text-sky-700 hover:text-sky-950 transition-colors shrink-0 cursor-pointer"
                      title="PayPal-Adresse kopieren"
                    >
                      {copiedKey === 'paypal' ? (
                        <span className="text-emerald-600 flex items-center gap-1 text-xs font-bold">
                          <Check className="w-4 h-4" /> Kopiert!
                        </span>
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-200 text-xs text-amber-900 flex items-start gap-2 mb-4">
                  <HelpCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <span>
                    Wichtig bei PayPal: Bitte nutze gerne die Option „Geld senden“ und gib als Notiz <strong className="font-semibold">Adventsaktion</strong> an.
                  </span>
                </div>
              </div>

              {/* Direct Link button */}
              <a
                href={DONATION_LINKS.directDonation}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm transition-all shadow-xs cursor-pointer"
              >
                <span>Offizielle Spendenseite im Browser öffnen</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Steuernachweis-Hinweis */}
          <div className="mt-6 pt-5 border-t border-stone-200 flex items-start gap-2.5 text-xs text-stone-500 leading-relaxed">
            <FileText className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
            <p>{BANK_DETAILS.taxDeductibleNote}</p>
          </div>

        </div>

      </div>
    </section>
  );
};
