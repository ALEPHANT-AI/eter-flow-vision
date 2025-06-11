
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ProblemSection from '../components/ProblemSection';
import DeliverableSection from '../components/DeliverableSection';
import CasesCarousel from '../components/CasesCarousel';
import MethodologySection from '../components/MethodologySection';
import ProfileSection from '../components/ProfileSection';
import ApplicationForm from '../components/ApplicationForm';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ProblemSection />
      <DeliverableSection />
      <CasesCarousel />
      <MethodologySection />
      <ProfileSection />
      <ApplicationForm />
      <Footer />
    </div>
  );
};

export default Index;
