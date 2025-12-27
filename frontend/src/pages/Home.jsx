import React from 'react';
import { HeroSection } from '../sections/HeroSection';
import { AboutSection } from '../sections/AboutSection';
import { ServicesSection } from '../sections/ServicesSection';
import { WhyChooseSection } from '../sections/WhyChooseSection';
import { DemoSection } from '../sections/DemoSection';
import { HowItWorksSection } from '../sections/HowItWorksSection';
import { PricingSection } from '../sections/PricingSection';
import { ContactSection } from '../sections/ContactSection';

export const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseSection />
      <DemoSection />
      <HowItWorksSection />
      <PricingSection />
      <ContactSection />
    </div>
  );
};
