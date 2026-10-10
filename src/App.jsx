import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import StatsStrip from './components/StatsStrip';
import HiringPartners from './components/HiringPartners';
import Curriculum from './components/Curriculum';
import CareerRoles from './components/CareerRoles';
import ProjectsSection from './components/ProjectsSection';
import CaseStudies from './components/CaseStudies';
import Certifications from './components/Certifications';
import LifeAtInstitute from './components/LifeAtInstitute';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import StickyMobileBar from './components/StickyMobileBar';
import LeadModal from './components/LeadModal';
import Toast from './components/Toast';

export default function App() {
  const [modalConfig, setModalConfig] = useState({ isOpen: false, title: '' });
  const [toastMessage, setToastMessage] = useState(null);

  const openModal = (title) => {
    setModalConfig({ isOpen: true, title });
  };

  const closeModal = () => {
    setModalConfig({ isOpen: false, title: '' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#070b14] dark:text-slate-100 transition-colors duration-200 antialiased selection:bg-blue-600 selection:text-white">
      {/* Top Navigation */}
      <Header onOpenModal={openModal} />

      {/* Main Content */}
      <main>
        <Hero
          onOpenModal={openModal}
          onSuccess={(msg) => setToastMessage(msg)}
        />
        <StatsStrip />
        <HiringPartners onOpenModal={openModal} />
        <Curriculum onOpenModal={openModal} />
        <CareerRoles onOpenModal={openModal} />
        <ProjectsSection onOpenModal={openModal} />
        <CaseStudies onOpenModal={openModal} />
        <Certifications />
        <LifeAtInstitute />
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Bar */}
      <StickyMobileBar onOpenModal={openModal} />

      {/* Popup Form Modal */}
      <LeadModal
        isOpen={modalConfig.isOpen}
        title={modalConfig.title}
        onClose={closeModal}
        onSuccess={(msg) => setToastMessage(msg)}
      />

      {/* Toast Alert */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}
