import React from 'react';
import { HeroSection } from '../sections/HeroSection';
import { AboutSection } from '../sections/AboutSection';
import { FeaturesSection } from '../sections/FeaturesSection';
import { TestimonialsSection } from '../sections/TestimonialsSection';

export const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <TestimonialsSection />
    </>
  );
};