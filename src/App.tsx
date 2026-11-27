import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ArgumentGrid } from './components/ArgumentGrid';
import { ImpactSection } from './components/ImpactSection';
import { DonationSection } from './components/DonationSection';
import { ShareCampaign } from './components/ShareCampaign';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';

export const App: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [legalModalType, setLegalModalType] = useState<'impressum' | 'datenschutz' | null>(null);

  const handleSelectAmount = (amount: number) => {
    setSelectedAmount(amount);
  };

  const handleOpenLegal = (type: 'impressum' | 'datenschutz') => {
    setLegalModalType(type);
  };

  const handleCloseLegal = () => {
    setLegalModalType(null);
  };

  return (
    <div id="top" className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-900 selection:bg-amber-500/20 selection:text-amber-900">
      {/* Sticky Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. 3-Argument Grid ("Mal ehrlich – wo landet dein Geld sonst?") */}
        <ArgumentGrid />

        {/* 3. Fakten & Wirkung ("Wofür das Tierheim Heilbronn deine Hilfe braucht") */}
        <ImpactSection onSelectAmount={handleSelectAmount} />

        {/* 4. Spenden- & Patenschafts-Sektion (Conversion-Block) */}
        <DonationSection selectedAmount={selectedAmount} />

        {/* 5. Kampagne Weitersagen / WhatsApp Share */}
        <ShareCampaign />
      </main>

      {/* Footer & Transparenzhinweis */}
      <Footer onOpenLegal={handleOpenLegal} />

      {/* Impressum & Datenschutz Modal */}
      <LegalModal
        isOpen={legalModalType !== null}
        type={legalModalType}
        onClose={handleCloseLegal}
      />
    </div>
  );
};

export default App;
