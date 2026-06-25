import type { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import WhyChooseSection from '@/components/sections/WhyChooseSection';
import ExpertiseSection from '@/components/sections/ExpertiseSection';
import ProductsPreview from '@/components/sections/ProductsPreview';
import ProcessSection from '@/components/sections/ProcessSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import FaqSection from '@/components/sections/FaqSection';
import CtaSection from '@/components/sections/CtaSection';

export const metadata: Metadata = {
  title: 'Shiv Biotech — Empowering Agriculture through Bio-Innovation',
  description: 'Shiv Biotech provides premium plant biostimulants, bio fertilizers, and organic crop solutions. Trusted by thousands of farmers across Maharashtra.'
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WhyChooseSection />
      <ExpertiseSection />
      <ProductsPreview />
      <ProcessSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
