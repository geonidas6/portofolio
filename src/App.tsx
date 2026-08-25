import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { InteractiveTerminal } from './components/InteractiveTerminal';
import { ProjectEstimator } from './components/ProjectEstimator';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { Language } from './types';

export default function App() {
  const [lang, setLang] = useState<Language>('fr');
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* Navigation Bar */}
      <Navbar
        lang={lang}
        setLang={setLang}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          lang={lang}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* 2. About Me & Architectural Values */}
        <AboutSection lang={lang} />

        {/* 3. Technical Skills & Tools Matrix */}
        <SkillsSection lang={lang} />

        {/* 4. Professional Projects & Open-Source Packages */}
        <ProjectsSection lang={lang} />

        {/* 5. Career Journey, Experience & Education */}
        <ExperienceSection lang={lang} />

        {/* 6. Interactive Developer CLI Terminal */}
        <InteractiveTerminal
          lang={lang}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* 7. Interactive Project Scope & Timeline Estimator */}
        <ProjectEstimator lang={lang} />

        {/* 8. Contact & Collaboration */}
        <ContactSection lang={lang} />
      </main>

      {/* Footer */}
      <Footer lang={lang} />

      {/* Printable / Downloadable CV Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        lang={lang}
      />
    </div>
  );
}
