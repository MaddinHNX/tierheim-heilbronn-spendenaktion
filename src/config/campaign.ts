/**
 * Zentrale Konfiguration für die Online-Spendenkampagne
 * zugunsten des Tierschutzvereins Heilbronn und Umgebung e.V.
 * 
 * Alle Links, Kontoverbindungen und Texte können hier an einer
 * zentralen Stelle gepflegt und angepasst werden.
 */

export const IMAGES = {
  heroDog: './images/hero_dog.jpg',
  patenschaft: './images/card_patenschaft.jpg',
  cat: './images/card_cat.jpg',
  foodBowl: './images/card_food_bowl.jpg',
  bunny: './images/shelter_bunny.jpg',
};

export const DONATION_LINKS = {
  // Option A: Offizielle Spendenseite / Betterplace des Tierheims Heilbronn
  directDonation: 'https://www.heilbronner-tierschutz.de/unterstuetzung/spenden/',
  
  // Option B: Tierpatenschaft verschenken
  sponsorship: 'https://www.heilbronner-tierschutz.de/unterstuetzung/patenschaft/',
  
  // PayPal Spendenlink (öffnet PayPal mit der offiziellen Vereinsadresse)
  paypalUrl: 'https://www.paypal.com/donate/?hosted_button_id=7R9T68R77DF9N',
  paypalEmail: 'paypal@heilbronner-tierschutz.de',
  
  // Offizielle Vereinswebseite
  officialWebsite: 'https://www.heilbronner-tierschutz.de/',
  
  // Kampagnen-URL (zum Teilen)
  campaignShareUrl: 'https://maddinhnx.github.io/tierheim-heilbronn-spendenaktion/',
};

export const BANK_DETAILS = {
  recipient: 'Tierschutzverein Heilbronn und Umgebung e.V.',
  iban: 'DE19 6205 0000 0000 0288 86',
  ibanFormatted: 'DE19 6205 0000 0000 0288 86',
  bic: 'HEISDE66XXX',
  bankName: 'Kreissparkasse Heilbronn',
  defaultPurpose: 'Spende Adventsaktion Tierheim Heilbronn',
  taxDeductibleNote: 'Spenden an den Tierschutzverein Heilbronn und Umgebung e.V. sind steuerlich abzugsfähig (gemeinnütziger Verein). Für Beträge bis 300 € genügt der Kontoauszug als vereinfachter Zuwendungsnachweis beim Finanzamt.',
};

export const CAMPAIGN_INFO = {
  title: 'Solidarische Hilfsaktion für das Tierheim Heilbronn',
  organizationName: 'Tierschutzverein Heilbronn und Umgebung e.V.',
  shelterLocation: 'Franz-Reichle-Str. 20, 74078 Heilbronn (Böllinger Höfe)',
  eventDate: 'Samstag, 28. November 2026',
  incidentReason: 'Behördliche Sicherheitsmaßnahme / Sperrzone (Bombenentschärfung Böllinger Höfe)',
  stats: {
    dogs: 'bis zu 65',
    cats: 'bis zu 200',
    birds: 'rund 60',
    smallAnimals: 'rund 50',
    totalMonthlyFeedCost: 'mehrere tausend Euro',
  },
};

export const ARGUMENT_ITEMS = [
  {
    id: 'gta-check',
    category: 'Weihnachts-Check',
    title: 'Statt GTA VI lieber eine Patenschaft verschenken?',
    text: 'Der nächste Blockbuster läuft dir nicht weg – ein Tier im Tierheim Heilbronn wartet auf echte Unterstützung. Verschenke zu Weihnachten eine Tierpatenschaft, die wirklich etwas bewegt.',
    badge: 'Sinnvoll schenken',
    actionLabel: 'Patenschaft verschenken',
    actionType: 'sponsorship' as const,
    image: IMAGES.patenschaft,
    imageAlt: 'Niedlicher Tierheim-Welpe mit Patenschaftsurkunde',
  },
  {
    id: 'abo-check',
    category: 'Abo-Check',
    title: 'Netflix, Sky & Co. buchen ab – und es läuft doch nix?',
    text: 'Jeden Monat gehen Beträge für Streaming-Abos raus, ohne dass man am Ende mehr davon hat. Mit einem kleinen monatlichen Dauerauftrag für das Tierheim Heilbronn kommt deine Hilfe garantiert an.',
    badge: 'Monatlicher Beitrag',
    actionLabel: 'Dauerauftrag / Spende einrichten',
    actionType: 'direct' as const,
    image: IMAGES.cat,
    imageAlt: 'Tierheim-Katze entspannt auf warmer Decke',
  },
  {
    id: 'smashburger-check',
    category: 'Lieferdienst-Check',
    title: 'Smashburger mit Reue – oder ein voller Napf ohne?',
    text: 'Statt ’nen zehnten mittelmäßig essbaren Smashburger für viel Geld und noch mehr Reue zu bestellen: doch lieber mal einem Tier in Not Grundnahrungsmittel ermöglichen.',
    badge: 'Voller Napf garantiert',
    actionLabel: 'Jetzt 15 € oder mehr spenden',
    actionType: 'direct' as const,
    image: IMAGES.foodBowl,
    imageAlt: 'Glücklicher Hund mit vollem Futternapf',
  },
];

export const IMPACT_TIERS = [
  {
    amount: '15 €',
    value: 15,
    title: 'Grundnahrungsmittel & Futter',
    description: 'Sichert energiereiches Nass- und Trockenfutter für ein Tier für eine ganze Woche.',
    highlight: false,
    icon: 'Apple',
  },
  {
    amount: '30 €',
    value: 30,
    title: 'Spezialfutter & Pflege',
    description: 'Für chronisch kranke Tiere, Senioren und empfindliche Schützlinge mit speziellem Diätbedarf.',
    highlight: true,
    badge: 'Sehr beliebt',
    icon: 'HeartPulse',
  },
  {
    amount: '50 €',
    value: 50,
    title: 'Tierarzt- & OP-Kosten',
    description: 'Wichtiger Beitrag zu Impfungen, Entwurmungen, Medikamenten oder lebensrettenden Eingriffen.',
    highlight: false,
    icon: 'Stethoscope',
  },
];

export const LEGAL_NOTICE_DATA = {
  operatorName: 'Private Unterstützerinitiative / Freundeskreis Tierheim Heilbronn',
  contactEmail: 'kontakt@tierheim-heilbronn-unterstuetzer.de',
  contactCity: '74078 Heilbronn',
  disclaimer: 'Dies ist eine privat und unentgeltlich betriebene Unterstützungs-Website im Rahmen des ausgefallenen Adventssamstags 2026. Sie steht in keiner gewerblichen Verbindung zum Verein und sammelt selbst keine Gelder ein. Sämtliche Links leiten ohne Abzüge direkt auf die offiziellen Webseiten und Konten des Tierschutzvereins Heilbronn und Umgebung e.V. weiter.',
};
