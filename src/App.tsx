/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { Differentials } from './components/Differentials';
import { HowWeWork } from './components/HowWeWork';
import { Audiences } from './components/Audiences';
import { QuoteSimulator } from './components/QuoteSimulator';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050B1F] text-slate-100 flex flex-col selection:bg-amber-400 selection:text-slate-950">
      {/* Fixed Header */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero */}
        <Hero />

        {/* 2. Services */}
        <ServicesSection />

        {/* 3. Differentials */}
        <Differentials />

        {/* 4. How We Work */}
        <HowWeWork />

        {/* 5. Target Audiences */}
        <Audiences />

        {/* 6. Interactive Quote Simulator */}
        <QuoteSimulator />

        {/* 7. Final Call to Action */}
        <CtaSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
