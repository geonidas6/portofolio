import React from 'react';
import { 
  Code, 
  ShieldCheck, 
  Zap, 
  GitPullRequest, 
  Cpu, 
  Layers, 
  Sparkles, 
  Award,
  Globe2,
  CheckCircle2
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Language } from '../types';
import { CodeurWidget } from './CodeurWidget';

interface AboutSectionProps {
  lang: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang }) => {
  const pillars = [
    {
      icon: Code,
      title: lang === 'fr' ? 'Clean Architecture & Code Maintenable' : 'Clean Architecture & Maintainable Code',
      description: lang === 'fr' 
        ? 'Application stricte des principes SOLID, découplage des couches métiers, tests automatisés et modularité pérenne.'
        : 'Strict adherence to SOLID principles, business logic decoupling, automated tests, and sustainable modularity.',
      badge: 'Architecture'
    },
    {
      icon: ShieldCheck,
      title: lang === 'fr' ? 'Sécurité FinTech & Webhooks Robustes' : 'FinTech Security & Robust Webhooks',
      description: lang === 'fr'
        ? 'Expertise pointue dans les flux de paiement (MoneyFusion, Mobile Money, Stripe), signature HMAC et idempotence.'
        : 'Deep expertise in payment flows (MoneyFusion, Mobile Money, Stripe), HMAC cryptographic validation, and idempotency.',
      badge: 'FinTech & Security'
    },
    {
      icon: Zap,
      title: lang === 'fr' ? 'Performance & Scalabilité' : 'Performance & Scalability',
      description: lang === 'fr'
        ? 'Optimisation des temps de réponse (<100ms), mise en cache Redis, requêtes SQL indexées et Server-Side Rendering (Next.js).'
        : 'Sub-100ms response optimization, Redis multi-tier caching, indexed SQL schemas, and SSR (Next.js).',
      badge: 'High Speed'
    },
    {
      icon: GitPullRequest,
      title: lang === 'fr' ? 'Culture Open Source & DevOps' : 'Open Source Culture & DevOps',
      description: lang === 'fr'
        ? 'Auteur de packages communautaires, automatisation CI/CD avec GitHub Actions et conteneurisation Docker standardisée.'
        : 'Package author, CI/CD automation with GitHub Actions, and standardized Docker container workflows.',
      badge: 'DevOps'
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-50/60 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono tracking-[0.25em] uppercase font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'fr' ? 'À PROPOS DE MOI' : 'ABOUT ME'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-slate-950 tracking-tight">
            {lang === 'fr' 
              ? 'Concepteur d\'expériences digitales performantes & sécurisées' 
              : 'Architect of high-performance and secure digital experiences'}
          </h2>
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
            {lang === 'fr'
              ? 'Découvrez mon parcours, mes convictions techniques et la valeur que j\'apporte à vos projets web et mobiles.'
              : 'Discover my engineering background, technical values, and how I drive high-impact software solutions.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Bio Story (Left 6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 space-y-5 shadow-xl">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 flex items-center gap-2.5">
                <Globe2 className="w-6 h-6 text-blue-600" />
                <span>{lang === 'fr' ? 'Mon Parcours & Philosophie' : 'My Background & Philosophy'}</span>
              </h3>
              
              <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
                {PERSONAL_INFO.bio[lang].split('\n\n').map((para, index) => (
                  <p key={index}>{para}</p>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2.5 text-xs sm:text-sm font-mono">
                <span className="px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 font-semibold">
                  📍 {PERSONAL_INFO.location}
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-800 border border-blue-200 font-semibold">
                  ⚡ Full-Stack Web & Mobile
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold">
                  🛡️ FinTech Specialist
                </span>
              </div>
            </div>

            {/* Quick Metrics Banner */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              <div className="p-4 rounded-xl bg-white border border-slate-200 text-center shadow-sm">
                <div className="text-3xl font-serif font-bold text-blue-600">5+</div>
                <div className="text-xs uppercase tracking-wider text-slate-600 font-semibold mt-1">{lang === 'fr' ? 'Années Exp.' : 'Years Exp.'}</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200 text-center shadow-sm">
                <div className="text-3xl font-serif font-bold text-slate-900">35+</div>
                <div className="text-xs uppercase tracking-wider text-slate-600 font-semibold mt-1">{lang === 'fr' ? 'Projets Conçus' : 'Projects Done'}</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200 text-center shadow-sm">
                <div className="text-3xl font-serif font-bold text-emerald-600">1.2k+</div>
                <div className="text-xs uppercase tracking-wider text-slate-600 font-semibold mt-1">{lang === 'fr' ? 'Downloads Pkg' : 'Pkg Downloads'}</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200 text-center shadow-sm">
                <div className="text-3xl font-serif font-bold text-slate-900">100%</div>
                <div className="text-xs uppercase tracking-wider text-slate-600 font-semibold mt-1">{lang === 'fr' ? 'Satisfaction' : 'Satisfaction'}</div>
              </div>
            </div>
          </div>

          {/* Core Pillars (Right 6 cols) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-400 transition-all hover:shadow-md group space-y-3.5 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-slate-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors border border-slate-200">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-slate-600 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 font-bold">
                      {pillar.badge}
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {pillar.title}
                  </h4>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Integrated Codeur.com Profile Verification Widget - Full Width (12 cols) */}
          <div className="lg:col-span-12 w-full pt-2">
            <CodeurWidget lang={lang} />
          </div>
        </div>
      </div>
    </section>
  );
};
