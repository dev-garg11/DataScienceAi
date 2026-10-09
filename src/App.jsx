import React, { useState, useEffect } from 'react';
import TopAnnouncementBar from './components/TopAnnouncementBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PlacementPartners from './components/PlacementPartners';
import ToolsMastered from './components/ToolsMastered';
import ProjectsShowcase from './components/ProjectsShowcase';
import Roadmap from './components/Roadmap';
import ComparisonTable from './components/ComparisonTable';
import EmiCalculator from './components/EmiCalculator';
import FaqAccordion from './components/FaqAccordion';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import StickyMobileBar from './components/StickyMobileBar';
import ProjectModal from './components/ProjectModal';
import DemoModal from './components/DemoModal';
import Toast from './components/Toast';

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    // Check saved theme or system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#080c14] dark:text-slate-100 transition-colors duration-200">
      <TopAnnouncementBar />
      
      <Navbar
        isDark={isDark}
        toggleTheme={toggleTheme}
        onOpenDemo={() => setIsDemoOpen(true)}
      />

      <main>
        <Hero onOpenDemo={() => setIsDemoOpen(true)} />
        <PlacementPartners />
        <ToolsMastered />
        <ProjectsShowcase
          onSelectProject={(proj) => setSelectedProject(proj)}
          onOpenDemo={() => setIsDemoOpen(true)}
        />
        <Roadmap />
        <ComparisonTable />
        <EmiCalculator onOpenDemo={() => setIsDemoOpen(true)} />
        <FaqAccordion />
        <CtaBanner onOpenDemo={() => setIsDemoOpen(true)} />
      </main>

      <Footer />

      <StickyMobileBar onOpenDemo={() => setIsDemoOpen(true)} />

      {/* Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenDemo={() => setIsDemoOpen(true)}
      />

      <DemoModal
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
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

