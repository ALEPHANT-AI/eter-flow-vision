
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ProblemSection from '../components/ProblemSection';
import DeliverableSection from '../components/DeliverableSection';
import CasesCarousel from '../components/CasesCarousel';
import MethodologySection from '../components/MethodologySection';
import ProfileSection from '../components/ProfileSection';
import ProcessoSeletivoSection from '../components/ProcessoSeletivoSection';
import Footer from '../components/Footer';
import ApplicationModal from '../components/ApplicationModal';
import { ApplicationModalProvider } from '../contexts/ApplicationModalContext';

const Index = () => {
  return (
    <ApplicationModalProvider>
      <div className="min-h-screen">
        <Header />
        <HeroSection />
        <ProblemSection />
        <DeliverableSection />
        <CasesCarousel />
        <MethodologySection />
        <ProfileSection />
        <ProcessoSeletivoSection />
        <Footer />
        <ApplicationModal />
      </div>
    </ApplicationModalProvider>
  );
};

export default Index;
