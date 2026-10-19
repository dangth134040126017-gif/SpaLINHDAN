/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutMission } from './components/AboutMission';
import { TreatmentCatalog } from './components/TreatmentCatalog';
import { Testimonials } from './components/Testimonials';
import { BookingSection } from './components/BookingSection';
import { Footer } from './components/Footer';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ConsultationModal } from './components/ConsultationModal';
import { SoundscapePlayer } from './components/SoundscapePlayer';
import { TreatmentService } from './data/spaData';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<TreatmentService | null>(null);
  const [prefilledService, setPrefilledService] = useState<TreatmentService | null>(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const scrollToBooking = (service?: TreatmentService) => {
    if (service) {
      setPrefilledService(service);
    }
    const el = document.getElementById('booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategoryFromHero = (cat: string) => {
    setActiveCategory(cat);
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF8F6] text-[#211A17] font-sans antialiased selection:bg-[#27443B]/15 selection:text-[#27443B]">
      {/* Top Bar Navigation */}
      <Header
        onOpenBooking={() => scrollToBooking()}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenBooking={() => scrollToBooking()}
          onOpenConsultation={() => setIsConsultationOpen(true)}
          onSelectCategory={handleSelectCategoryFromHero}
        />

        {/* Story & Mission Section */}
        <AboutMission />

        {/* Treatment Catalog & Services */}
        <TreatmentCatalog
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          onSelectService={service => setSelectedService(service)}
          onBookService={service => scrollToBooking(service)}
        />

        {/* Customer Testimonials */}
        <Testimonials />

        {/* VIP Booking & Branch Info Section */}
        <BookingSection
          prefilledService={prefilledService}
          onClearPrefill={() => setPrefilledService(null)}
        />
      </main>

      {/* Footer */}
      <Footer
        onSelectCategory={setActiveCategory}
        onOpenBooking={() => scrollToBooking()}
      />

      {/* Detailed Service Ritual Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBook={service => scrollToBooking(service)}
      />

      {/* Quick Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        onBookDirectly={() => scrollToBooking()}
      />

      {/* Ambient Spa Singing Bowl Soundscape Toggle */}
      <SoundscapePlayer />
    </div>
  );
}
