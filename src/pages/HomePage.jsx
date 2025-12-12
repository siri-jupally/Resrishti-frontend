import React from 'react';
import Hero from '../components/Hero';
import ScrollNarrative from '../components/ScrollNarrative';
import AboutPreview from '../components/AboutPreview';
import Services from '../components/Services';
import ProcessSection from '../components/ProcessSection';
import CertificationsSection from '../components/CertificationsSection';
import USPSection from '../components/USPSection';
import ImpactDashboard from '../components/ImpactDashboard';
import TestimonialsSection from '../components/TestimonialsSection';
import IndustryPartnersSection from '../components/IndustryPartnersSection';
import CreditsSection from '../components/CreditsSection';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ScrollNarrative />
      <AboutPreview />
      <Services />
      <ProcessSection />
      <CertificationsSection />
      <USPSection />
      <ImpactDashboard />
      <TestimonialsSection />
      <IndustryPartnersSection />
      <CreditsSection />
      <Footer />
    </div>
  );
};

export default HomePage;