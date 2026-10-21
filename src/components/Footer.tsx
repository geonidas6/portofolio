import React from 'react';
import { ArrowUp, Github, Mail, Package, Heart, Code2, Globe } from 'lucide-react';
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
              <div className="w-10 h-10 rounded-xl bg-emerald-800 border border-amber-400/50 flex items-center justify-center font-bold text-amber-200 text-sm font-mono shadow-sm">
                PA
              </div>
              <div className="flex items-center gap-2">
                <span className="font-serif font-bold text-white text-lg tracking-tight">
                  {PERSONAL_INFO.fullName}
                </span>
                <span className="text-base">🇹🇬</span>
              </div>
            </div>
            <p className="text-slate-300 text-sm sm:text-base max-w-sm leading-relaxed font-normal">
              {lang === 'fr'
                ? 'Développeur Full Stack & Créateur de Solutions Web / Mobile. Gestion de projets de A à Z : analyse, web, mobile (iOS & Flutter), packages et e-commerce.'
                : 'Full Stack Developer & Web/Mobile Solutions Creator. End-to-end delivery: analysis, web, mobile (iOS & Flutter), packages, and e-commerce.'}
            </p>
            <div className="flex items-center gap-2 pt-1 flex-wrap">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs text-emerald-400 font-mono font-semibold">
                <Code2 className="w-3.5 h-3.5" />
                <span>@{PERSONAL_INFO.username}</span>
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs text-amber-300 font-mono font-semibold">
                <Package className="w-3.5 h-3.5" />
                <span>moneyfusion-laravel</span>
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs text-emerald-300 font-mono font-semibold">
                <Globe className="w-3.5 h-3.5" />
                <span>IT Sefako</span>
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-mono text-amber-300 text-xs uppercase tracking-[0.2em] font-bold">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-300 font-medium">
              <li><a href="#about" className="hover:text-emerald-400 transition-colors">À Propos</a></li>
              <li><a href="#skills" className="hover:text-emerald-400 transition-colors">Compétences & Stack</a></li>
              <li><a href="#projects" className="hover:text-emerald-400 transition-colors">Projets & Packages</a></li>
              <li><a href="#experience" className="hover:text-emerald-400 transition-colors">Parcours & Timeline</a></li>
              <li><a href="#estimator" className="hover:text-emerald-400 transition-colors">Calculateur de Devis</a></li>
              <li><a href="#contact" className="hover:text-emerald-400 transition-colors">Me Contacter</a></li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="space-y-3">
            <h4 className="font-mono text-amber-300 text-xs uppercase tracking-[0.2em] font-bold">
              Connect & Références
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-slate-200 hover:text-emerald-400 transition-colors font-mono text-xs sm:text-sm font-semibold"
                >
                  <Github className="w-4 h-4 text-emerald-400" />
                  <span>github.com/{PERSONAL_INFO.username}</span>
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.codeurUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-slate-200 hover:text-amber-300 transition-colors font-mono text-xs sm:text-sm font-semibold"
                >
                  <span className="text-amber-400">⭐</span>
                  <span>Profil Codeur.com (100%)</span>
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.itSefakoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-slate-200 hover:text-emerald-400 transition-colors font-mono text-xs sm:text-sm font-semibold"
                >
                  <Globe className="w-4 h-4 text-emerald-400" />
                  <span>it-sefako.com</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-2 text-slate-200 hover:text-amber-300 transition-colors font-mono text-xs sm:text-sm font-semibold"
                >
                  <Mail className="w-4 h-4 text-amber-300" />
                  <span>{PERSONAL_INFO.email}</span>
                </a>
              </li>
              <li className="text-slate-300 pt-1 text-xs sm:text-sm font-mono font-medium">
                📍 Lomé, Togo 🇹🇬
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-xs sm:text-sm font-mono">
          <div className="flex items-center gap-1 text-center sm:text-left font-medium">
            <span>© {new Date().getFullYear()} {PERSONAL_INFO.fullName}. Fièrement conçu avec l'esprit du Togo 🇹🇬.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-800 hover:border-emerald-500/50 transition-colors font-bold text-xs uppercase tracking-wider"
          >
            <span>Haut de page</span>
            <ArrowUp className="w-4 h-4 text-amber-300" />
          </button>
        </div>
      </div>
    </footer>
  );
};
