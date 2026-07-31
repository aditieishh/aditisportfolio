import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutEducation } from './components/AboutEducation';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { AchievementsCertifications } from './components/AchievementsCertifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeViewerModal } from './components/ResumeViewerModal';
import { Subtle3DBackground } from './components/Subtle3DBackground';

export default function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FFF9FA] text-[#2D242B] relative selection:bg-pink-200 selection:text-pink-900">
      
      {/* Subtle Interactive 3D Canvas Background */}
      <Subtle3DBackground />

      {/* Sticky Header Navigation */}
      <Header onOpenResumeModal={() => setResumeModalOpen(true)} />

      {/* Main Content Layout */}
      <main className="relative z-10">
        <Hero onOpenResumeModal={() => setResumeModalOpen(true)} />
        <AboutEducation />
        <Skills />
        <Projects />
        <AchievementsCertifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Download & Interactive Printable Viewer Modal */}
      <ResumeViewerModal 
        isOpen={resumeModalOpen} 
        onClose={() => setResumeModalOpen(false)} 
      />

    </div>
  );
}
