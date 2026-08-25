import React from 'react';
import { ArrowUp, Github, Mail, Package, Heart, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Language } from '../types';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-300 text-sm font-sans py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-800/80">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-3.5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-blue-600 border border-blue-500 flex items-center justify-center font-bold text-white text-sm font-mono">
                PA
              </div>
              <span className="font-serif font-bold text-white text-lg tracking-tight">
                {PERSONAL_INFO.fullName}
              </span>
            </div>
            <p className="text-slate-300 text-sm sm:text-base max-w-sm leading-relaxed font-normal">
              {lang === 'fr'
                ? 'Développeur Full-Stack Web & Mobile spécialisé dans les architectures pérennes (Laravel, React, Next.js, Python, Flutter) et les passerelles de paiement FinTech.'
                : 'Full-Stack Web & Mobile engineer specialized in resilient architectures (Laravel, React, Next.js, Python, Flutter) and FinTech payment integrations.'}
            </p>
            <div className="flex items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs text-blue-400 font-mono font-semibold">
                <Code2 className="w-3.5 h-3.5" />
                <span>@{PERSONAL_INFO.username}</span>
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs text-emerald-400 font-mono font-semibold">
                <Package className="w-3.5 h-3.5" />
                <span>moneyfusion-laravel</span>
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-mono text-white text-xs uppercase tracking-[0.2em] font-bold">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-300 font-medium">
              <li><a href="#about" className="hover:text-blue-400 transition-colors">À Propos</a></li>
              <li><a href="#skills" className="hover:text-blue-400 transition-colors">Compétences & Stack</a></li>
              <li><a href="#projects" className="hover:text-blue-400 transition-colors">Projets & Packages</a></li>
              <li><a href="#experience" className="hover:text-blue-400 transition-colors">Parcours & Timeline</a></li>
              <li><a href="#estimator" className="hover:text-blue-400 transition-colors">Calculateur de Devis</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Me Contacter</a></li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="space-y-3">
            <h4 className="font-mono text-white text-xs uppercase tracking-[0.2em] font-bold">
              Connect
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-slate-200 hover:text-blue-400 transition-colors font-mono text-xs sm:text-sm font-semibold"
                >
                  <Github className="w-4 h-4" />
                  <span>github.com/{PERSONAL_INFO.username}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-2 text-slate-200 hover:text-blue-400 transition-colors font-mono text-xs sm:text-sm font-semibold"
                >
                  <Mail className="w-4 h-4" />
                  <span>{PERSONAL_INFO.email}</span>
                </a>
              </li>
              <li className="text-slate-300 pt-1 text-xs sm:text-sm font-mono font-medium">
                📍 Lomé, Togo
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-xs sm:text-sm font-mono">
          <div className="flex items-center gap-1 text-center sm:text-left font-medium">
            <span>© {new Date().getFullYear()} {PERSONAL_INFO.fullName}. Tous droits réservés.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-800 transition-colors font-bold text-xs uppercase tracking-wider"
          >
            <span>Haut de page</span>
            <ArrowUp className="w-4 h-4 text-blue-400" />
          </button>
        </div>
      </div>
    </footer>
  );
};
