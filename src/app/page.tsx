  'use client';
 import Navigation from '@/components/landing/Navigation';
import Hero from '@/components/landing/Hero';
import Stats from '@/components/landing/Stats';
import Features from '@/components/landing/Features';
import HowItWorks from '@/components/landing/HowitWorks';
import Testimonials from '@/components/landing/Testimonials';
import Footer from '@/components/landing/Footer';

const LandingPage: React.FC = () => {
  const colors = {
    blue: "#00A0D6",
    yellow: "#FED100",
    green: "#00A84F",
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation colors={colors} />
      <Hero colors={colors} />
      <Stats colors={colors} />
      <Features colors={colors} />
      <HowItWorks colors={colors} />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default LandingPage;