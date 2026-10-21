import React, { useState, useEffect } from 'react';
import { Download, Globe, Menu, X, Mail, FileText, ChevronRight, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Language } from '../types';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang, onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Track active section on scroll
      const sections = ['about', 'skills', 'projects', 'experience', 'estimator', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prioritized navigation links including 'À propos'
  const navItems = [
    { href: '#about', id: 'about', label: lang === 'fr' ? 'À propos' : 'About' },
    { href: '#skills', id: 'skills', label: lang === 'fr' ? 'Compétences' : 'Skills' },
    { href: '#projects', id: 'projects', label: lang === 'fr' ? 'Projets' : 'Projects' },
    { href: '#experience', id: 'experience', label: lang === 'fr' ? 'Parcours' : 'Experience' },
    { href: '#estimator', id: 'estimator', label: lang === 'fr' ? 'Estimer' : 'Estimate' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs py-2.5'
          : 'bg-white/60 backdrop-blur-xs py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo - Clean & Uncluttered */}
        <a
          href="#"
          id="nav-logo"
          className="flex items-center gap-2.5 group focus:outline-hidden rounded-lg"
          aria-label="Patrice Atcu Portfolio"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-800 to-emerald-950 border border-emerald-700/60 flex items-center justify-center font-serif font-bold text-white shadow-xs group-hover:scale-105 transition-transform duration-200">
            <span className="text-xs font-semibold tracking-wider text-amber-200">PA</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-900 text-sm tracking-tight group-hover:text-emerald-800 transition-colors">
                {PERSONAL_INFO.shortName}
              </span>
              <span className="flex items-center gap-1 text-[10px] text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded-full font-medium border border-emerald-200/60 hidden sm:inline-flex">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>{lang === 'fr' ? 'Disponible' : 'Available'}</span>
              </span>
            </div>
            <span className="text-[11px] text-slate-500 font-normal hidden md:block">
              {lang === 'fr' ? 'Développeur Full Stack & Mobile' : 'Full Stack & Mobile Developer'}
            </span>
          </div>
        </a>

        {/* Central Nav Pill - Breathable, elegant, uncrowded */}
        <nav
          aria-label="Navigation principale"
          className="hidden md:flex items-center gap-1 bg-slate-100/80 hover:bg-slate-100 p-1 rounded-full border border-slate-200/80 backdrop-blur-md shadow-xs transition-colors"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-150 ${
                  isActive
                    ? 'bg-white text-emerald-900 font-semibold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right Actions - Streamlined to 3 clear elements */}
        <div className="hidden sm:flex items-center gap-2">
          {/* Language Toggle (Compact) */}
          <button
            id="lang-toggle-btn"
            onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors border border-transparent hover:border-slate-200"
            title={lang === 'fr' ? 'Switch to English' : 'Passer en Français'}
          >
            <Globe className="w-3.5 h-3.5 text-slate-500" />
            <span className="font-mono text-[11px] font-semibold">{lang.toUpperCase()}</span>
          </button>

          {/* CV Button */}
          <button
            id="resume-btn"
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-slate-700 bg-white hover:bg-amber-50 hover:text-amber-900 border border-slate-200 hover:border-amber-300 shadow-xs transition-all duration-150 cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-amber-600" />
            <span>CV</span>
          </button>

          {/* Contact Direct CTA Button */}
          <a
            id="nav-hire-btn"
            href="#contact"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-700 shadow-xs transition-all duration-150 cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5 text-amber-300" />
            <span>{lang === 'fr' ? 'Contact' : 'Contact'}</span>
          </a>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-1.5">
          <button
            onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
            className="px-2 py-1 rounded-md text-[11px] font-mono font-semibold text-slate-700 bg-slate-100 border border-slate-200"
            aria-label="Changer de langue"
          >
            {lang.toUpperCase()}
          </button>
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200/80 border border-slate-200 transition-colors"
            aria-label="Ouvrir le menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu - Clean & spacious */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden bg-white/95 border-b border-slate-200 px-4 pt-3 pb-5 space-y-3 shadow-xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-150"
        >
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3.5 py-2.5 text-sm font-medium text-slate-700 hover:text-emerald-900 hover:bg-emerald-50/60 rounded-xl transition-colors"
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}
            <a
              href="#terminal"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3.5 py-2.5 text-sm font-medium text-slate-700 hover:text-emerald-900 hover:bg-emerald-50/60 rounded-xl transition-colors"
            >
              <span>{lang === 'fr' ? 'Terminal Développeur' : 'Developer Terminal'}</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
          </div>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-slate-50 hover:bg-amber-50 text-slate-800 border border-slate-200 hover:border-amber-300 transition-colors"
            >
              <Download className="w-4 h-4 text-amber-600" />
              <span>{lang === 'fr' ? 'Consulter le CV (PDF)' : 'View Resume (PDF)'}</span>
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-emerald-800 hover:bg-emerald-700 text-white shadow-xs transition-colors"
            >
              <Mail className="w-4 h-4 text-amber-300" />
              <span>{lang === 'fr' ? 'Me Contacter' : 'Get in Touch'}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

