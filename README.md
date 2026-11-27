# 🐾 Solidarische Online-Spendenkampagne: Tierheim Heilbronn

> **Ausfall des Adventssamstags am 28. November 2026** im Tierheim Heilbronn (Böllinger Höfe) aufgrund einer behördlichen Sicherheitsmaßnahme (Bombenentschärfung / Sperrzone).  
> Diese Landingpage dient als mobile-first Solidaritätsplattform, um mit humorvollen und ehrlichen Vergleichen Besucher direkt auf die offiziellen Spendenwege des Vereins weiterzuleiten.

---

## 🌟 Features & Highlights

- **Mobile-First & High-Speed**: Gebaut mit Vite, React 19, TypeScript und Tailwind CSS v4.
- **Direkte Spendenwege**:
  - **Option A:** Direkte Online-Spende über die offizielle Vereinsseite (Betterplace / PayPal / Lastschrift).
  - **Option B:** Tierpatenschaften verschenken als nachhaltige Weihnachts-Idee.
  - **Option C:** Offizielles Vereinskonto (IBAN, BIC, Sparkasse) & PayPal mit 1-Klick **Copy-to-Clipboard** Feedback.
- **Ehrlicher Alltags-Check**: 3 humorvolle Vergleichskarten (GTA VI, Streaming-Abos, Smashburger).
- **Transparenz & Fakten**: Übersicht über die Schützlinge an den Böllinger Höfen (Hunde, Katzen, Vögel, Kleintiere) und 3 kompakte Wirkungs-Kacheln (15 €, 30 €, 50 €).
- **1-Klick Social Sharing**: Schnelle Verbreitung per WhatsApp, Telegram und Social Media.
- **DSGVO-konform**: Keine externen Tracker oder Drittanbieter-Fonts (System-Font-Stack).
- **Rechtssicherheit**: Modale Dialoge für Impressum & Datenschutzerklärung mit klar gekennzeichneten Platzhaltern.

---

## 🚀 Lokale Entwicklung

```bash
# 1. Repository klonen
git clone https://github.com/MaddinHNX/tierheim-heilbronn-spendenaktion.git
cd tierheim-heilbronn-spendenaktion

# 2. Abhängigkeiten installieren
npm install

# 3. Entwicklungsserver starten
npm run dev

# 4. Produktions-Build erstellen
npm run build
```

---

## ⚙️ Zentrale Konfiguration (`src/config/campaign.ts`)

Alle Links, Kontodaten, Texte und Platzhalter können an einer einzigen Stelle gepflegt werden:

- `DONATION_LINKS`: Links zur offiziellen Spendenseite, Patenschafts-Seite und PayPal.
- `BANK_DETAILS`: IBAN, BIC, Bankname, Inhaber und Verwendungszweck.
- `CAMPAIGN_INFO`: Hintergrundinfos, Standort und Tierbestands-Statistiken.
- `LEGAL_NOTICE_DATA`: Betreiberangaben für Impressum & Kontakt.

---

## 🌐 GitHub Pages Deployment

Das Projekt ist vorkonfiguriert mit `base: './'` in `vite.config.ts` und einer GitHub Actions CI/CD-Pipeline unter `.github/workflows/deploy.yml`.

### Aktivierung in GitHub:
1. Im GitHub-Repository auf **Settings** -> **Pages** gehen.
2. Unter **Build and deployment** > **Source** auswählen: **GitHub Actions**.
3. Bei jedem Push auf den `main`-Branch wird die Seite vollautomatisch gebaut und live geschaltet!

---

## ❤️ Transparenz-Hinweis

Dies ist eine private, ehrenamtliche Unterstützer-Aktion zugunsten des **Tierschutzvereins Heilbronn und Umgebung e.V.** (Franz-Reichle-Str. 20, 74078 Heilbronn). Alle Spendenlinks führen ohne Abzüge direkt auf die offiziellen Konten und Plattformen des Vereins.
