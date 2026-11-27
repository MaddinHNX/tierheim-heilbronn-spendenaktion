import React, { useEffect } from 'react';
import { X, ShieldAlert, FileText, Lock } from 'lucide-react';
import { LEGAL_NOTICE_DATA, CAMPAIGN_INFO } from '../config/campaign';

interface LegalModalProps {
  isOpen: boolean;
  type: 'impressum' | 'datenschutz' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, type, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-900/60 backdrop-blur-xs animate-fade-in">
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl max-h-[85vh] flex flex-col bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden z-10 animate-scale-up">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-[#FAF8F5]">
          <div className="flex items-center gap-2 text-stone-900 font-bold text-lg">
            {type === 'impressum' ? (
              <>
                <FileText className="w-5 h-5 text-amber-700" />
                <span>Impressum</span>
              </>
            ) : (
              <>
                <Lock className="w-5 h-5 text-emerald-700" />
                <span>Datenschutzerklärung</span>
              </>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-700 rounded-full hover:bg-stone-100 transition-colors cursor-pointer"
            title="Schließen"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto text-sm text-stone-600 space-y-5 leading-relaxed">
          {type === 'impressum' ? (
            <>
              <div>
                <h4 className="text-base font-bold text-stone-900 mb-1">
                  Angaben gemäß § 5 TMG
                </h4>
                <p>
                  <strong>Seitenbetreiber:</strong><br />
                  {LEGAL_NOTICE_DATA.operatorName}<br />
                  c/o [Vor- und Nachname des Betreibers]<br />
                  [Straße und Hausnummer]<br />
                  {LEGAL_NOTICE_DATA.contactCity}
                </p>
              </div>

              <div>
                <h4 className="text-base font-bold text-stone-900 mb-1">
                  Kontakt
                </h4>
                <p>
                  E-Mail: <span className="text-amber-800 underline">[kontakt@domain.de oder {LEGAL_NOTICE_DATA.contactEmail}]</span><br />
                  Telefon: [Optional deine Rufnummer eintragen]
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950">
                <div className="flex items-center gap-2 font-bold mb-1 text-amber-900">
                  <ShieldAlert className="w-4 h-4 text-amber-700" />
                  <span>Wichtiger Hinweis zum Träger & Spendenempfänger</span>
                </div>
                <p className="text-xs leading-relaxed text-amber-900/90">
                  Diese Website ist eine private, ehrenamtliche Unterstützer-Seite im Rahmen des ausgefallenen Adventssamstags am 28.11.2026. 
                  Wir sind nicht der offizielle Webauftritt des Vereins. Begünstigter aller verlinkten Spenden- und Patenschaftsaktionen ist ausschließlich der:
                  <br />
                  <strong className="block mt-1 font-semibold">
                    {CAMPAIGN_INFO.organizationName}<br />
                    {CAMPAIGN_INFO.shelterLocation}
                  </strong>
                </p>
              </div>

              <div>
                <h4 className="text-base font-bold text-stone-900 mb-1">
                  Haftung für Inhalte und Links
                </h4>
                <p>
                  Als Betreiber dieser privaten Seite sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte verantwortlich. Für die Inhalte externer Webseiten Dritter (insbesondere Betterplace und die offizielle Webpräsenz des Tierschutzvereins Heilbronn) haben wir keinen Einfluss und übernehmen keine Gewähr.
                </p>
              </div>
            </>
          ) : (
            <>
              <div>
                <h4 className="text-base font-bold text-stone-900 mb-1">
                  1. Datenschutz auf einen Blick & DSGVO-Konformität
                </h4>
                <p>
                  Diese Landingpage wird statisch gehostet (GitHub Pages). 
                  <strong>Wir verwenden keine Tracking-Cookies, keine Analyse-Tools (wie Google Analytics) und laden keine externen Schriften (Google Fonts) von Drittservern.</strong> Sämtliche Schriftarten werden direkt über das Betriebssystem deines Endgeräts gerendert (System-Font-Stack).
                </p>
              </div>

              <div>
                <h4 className="text-base font-bold text-stone-900 mb-1">
                  2. Erhebung von Spenden- und Zahlungsdaten
                </h4>
                <p>
                  Auf dieser Website selbst werden <strong>keine Zahlungsdaten erfasst oder zwischengespeichert</strong>. Sämtliche Spenden-Buttons leiten verschlüsselt (via HTTPS) direkt auf die offizielle Spendenseite des Tierschutzvereins Heilbronn und Umgebung e.V. (bzw. Betterplace oder PayPal) weiter. Die Verarbeitung deiner Spende erfolgt ausschließlich auf den Plattformen der jeweiligen Zahlungsdienstleister gemäß deren Datenschutzbestimmungen.
                </p>
              </div>

              <div>
                <h4 className="text-base font-bold text-stone-900 mb-1">
                  3. Server-Log-Dateien beim Hoster
                </h4>
                <p>
                  Beim Aufruf dieser Website erfasst der Webserver des Hosters (GitHub Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, USA) automatisch technische Informationen, die dein Browser übermittelt (Browsertyp, Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage, IP-Adresse). Dies ist technisch erforderlich, um die Website fehlerfrei und sicher bereitzustellen (Art. 6 Abs. 1 lit. f DSGVO).
                </p>
              </div>

              <div>
                <h4 className="text-base font-bold text-stone-900 mb-1">
                  4. Deine Rechte
                </h4>
                <p>
                  Du hast jederzeit das Recht auf unentgeltliche Auskunft über deine gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung oder Löschung dieser Daten.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-stone-50 border-t border-stone-200 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs sm:text-sm transition-all cursor-pointer"
          >
            Schließen
          </button>
        </div>
      </div>
    </div>
  );
};
