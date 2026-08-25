import React, { useState, useEffect } from 'react';
import { Terminal, Download, Globe, Menu, X, Mail, Github, Sparkles } from 'lucide-react';
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#about', label: lang === 'fr' ? 'À propos' : 'About' },
    { href: '#skills', label: lang === 'fr' ? 'Compétences' : 'Skills' },
    { href: '#projects', label: lang === 'fr' ? 'Projets' : 'Projects' },
    { href: '#experience', label: lang === 'fr' ? 'Parcours' : 'Experience' },
    { href: '#terminal', label: lang === 'fr' ? 'Terminal CLI' : 'CLI Terminal' },
    { href: '#estimator', label: lang === 'fr' ? 'Estimer un projet' : 'Estimator' },
    { href: '#contact', label: lang === 'fr' ? 'Contact' : 'Contact' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/90 shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#"
          id="nav-logo"
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-600 rounded-lg p-1"
        >
          <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center font-serif font-bold text-white shadow-sm group-hover:bg-blue-600 group-hover:border-blue-600 transition-colors duration-200">
            <span className="text-sm tracking-wider">PA</span>
          </div>
          <div>
            <div className="font-bold text-slate-900 text-sm sm:text-base tracking-tight flex items-center gap-2">
              <span>{PERSONAL_INFO.shortName}</span>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono bg-slate-100 text-slate-700 border border-slate-200">
                @{PERSONAL_INFO.username}
              </span>
            </div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-mono hidden sm:block">
              Full-Stack & Mobile
            </p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-100/90 px-3.5 py-1.5 rounded-full border border-slate-200/90 backdrop-blur-sm shadow-inner">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-4 py-1.5 text-xs sm:text-sm uppercase tracking-wider font-semibold text-slate-700 hover:text-slate-950 hover:bg-white rounded-full transition-all duration-150 shadow-none hover:shadow-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right CTA / Language / Resume */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Language Switcher */}
          <button
            id="lang-toggle-btn"
            onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs sm:text-sm font-bold text-slate-800 hover:text-slate-950 bg-slate-100 hover:bg-slate-200/80 border border-slate-200 transition-colors"
            title={lang === 'fr' ? 'Switch to English' : 'Passer en Français'}
          >
            <Globe className="w-4 h-4 text-blue-600" />
            <span className="font-mono uppercase">{lang}</span>
          </button>

          {/* CV Button */}
          <button
            id="resume-btn"
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs sm:text-sm font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm hover:border-slate-300 transition-all"
          >
            <Download className="w-4 h-4 text-blue-600" />
            <span className="uppercase tracking-wider">CV</span>
          </button>

          {/* Contact Direct CTA */}
          <a
            id="nav-hire-btn"
            href="#contact"
            className="flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-bold text-white bg-slate-900 hover:bg-blue-600 shadow-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0 uppercase tracking-wider"
          >
            <Mail className="w-4 h-4" />
            <span>{lang === 'fr' ? 'Me Contacter' : 'Hire Me'}</span>
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
            className="p-2 rounded-lg text-slate-700 bg-slate-100 border border-slate-200 text-xs font-mono font-semibold"
          >
            {lang.toUpperCase()}
          </button>
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 hover:text-slate-950 bg-slate-100 border border-slate-200"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden bg-white/98 border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 mt-2 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-slate-100 border border-slate-200 text-slate-800"
            >
              <Download className="w-4 h-4 text-blue-600" />
              <span>{lang === 'fr' ? 'Consulter le CV' : 'View Resume'}</span>
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold bg-slate-900 hover:bg-blue-600 text-white shadow-md transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>{lang === 'fr' ? 'Discuter d\'un projet' : 'Start a Project'}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
