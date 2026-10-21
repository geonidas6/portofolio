import React, { useState } from 'react';
import { 
  ArrowRight, 
  Github, 
  Mail, 
  Copy, 
  Check, 
  Download, 
  Code2, 
  Smartphone, 
  Server, 
  Sparkles, 
  Package, 
  ShieldCheck, 
  MapPin, 
  Send,
  Globe,
  ExternalLink
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Language } from '../types';

interface HeroProps {
  lang: Language;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenResume }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-white"
    >
      {/* Background Decorative Gradients & Subtle Grid */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[400px] bg-gradient-to-tr from-emerald-100/60 via-amber-50/40 to-transparent blur-[140px] rounded-full" />
        <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-emerald-50/50 blur-[120px] rounded-full" />
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(#064e3b 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Content (Left 7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status & Availability Badge */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-950 shadow-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
                </span>
                <span className="font-bold text-emerald-800 tracking-wide text-xs uppercase font-mono">
                  {PERSONAL_INFO.availability[lang]}
                </span>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs sm:text-sm text-slate-700 font-medium">
                <MapPin className="w-3.5 h-3.5 text-emerald-700" />
                <span>Lomé, Togo</span>
                <span className="text-slate-300">•</span>
                <span className="font-mono text-xs sm:text-sm text-emerald-800 font-bold">{PERSONAL_INFO.githubRankTogo}</span>
              </div>
            </div>

            {/* Main Name & Title with Sophisticated Typography */}
            <div className="space-y-3.5">
              <div className="text-xs sm:text-sm uppercase tracking-[0.3em] text-emerald-800 font-mono font-bold flex items-center justify-center lg:justify-start gap-2">
                <span>PORTFOLIO PROFESSIONNEL</span>
                <span>🇹🇬</span>
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif tracking-tight text-slate-950 leading-[1.08]">
                PATRICE<br />
                <span className="text-emerald-800 italic font-medium">ATCU</span>
              </h1>

              <div className="text-lg sm:text-2xl font-bold text-slate-900 tracking-tight">
                {PERSONAL_INFO.title[lang]}
              </div>
            </div>

            {/* Tagline / Subtitle */}
            <p className="text-base sm:text-lg text-slate-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {lang === 'fr' 
                ? 'Conception et gestion de projet de A à Z : de l\'analyse des besoins client à la mise en production, applications web & mobiles (iOS App Store & Flutter), packages open-source Laravel et plateformes e-commerce à forte conversion.'
                : 'End-to-end software delivery from A to Z: client analysis to production release, web & mobile engineering (iOS App Store & Flutter), open-source Laravel packages, and high-conversion e-commerce platforms.'}
            </p>

            {/* Quick Speciality Highlight Badges */}
            <div className="space-y-2">
              <div className="text-xs uppercase tracking-[0.25em] text-slate-600 font-mono font-bold text-center lg:text-left">
                {lang === 'fr' ? 'Stack & Spécialités Clés' : 'Core Expertise'}
              </div>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                {[
                  'Laravel & Symfony',
                  'React & Next.js',
                  'iOS (Swift & App Store)',
                  'Flutter Mobile',
                  'WordPress & PrestaShop',
                  'FastAPI (Python)',
                  'MoneyFusion Package'
                ].map((badge, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold text-slate-800 bg-slate-100 hover:bg-emerald-50 hover:text-emerald-900 hover:border-emerald-200 border border-slate-200 transition-colors"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-3">
              <a
                id="hero-explore-projects-btn"
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-white bg-emerald-800 hover:bg-emerald-700 shadow-md shadow-emerald-900/10 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-xs sm:text-sm uppercase tracking-wider"
              >
                <span>{lang === 'fr' ? 'Explorer mes Projets' : 'Explore My Projects'}</span>
                <ArrowRight className="w-4 h-4 text-amber-300" />
              </a>

              <a
                id="hero-contact-btn"
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full font-bold text-slate-800 bg-slate-100 hover:bg-emerald-50 hover:text-emerald-950 border border-slate-200 hover:border-emerald-300 transition-all text-xs sm:text-sm uppercase tracking-wider"
              >
                <Send className="w-4 h-4 text-emerald-800" />
                <span>{lang === 'fr' ? 'Discuter d\'un projet' : 'Start a Conversation'}</span>
              </a>

              <button
                id="hero-resume-modal-btn"
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full font-bold text-slate-800 hover:text-emerald-950 bg-white hover:bg-amber-50/50 border border-slate-200 hover:border-amber-400/60 shadow-sm transition-colors text-xs sm:text-sm uppercase tracking-wider"
                title={lang === 'fr' ? 'Consulter le CV complet officiel' : 'View Full Official Resume'}
              >
                <Download className="w-4 h-4 text-amber-600" />
                <span>CV Officiel</span>
              </button>
            </div>

            {/* Direct Links Bar: GitHub, Codeur.com, IT Sefako */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-2 text-xs sm:text-sm text-slate-700 font-mono">
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 hover:border-emerald-300 hover:text-emerald-900 transition-colors font-semibold"
              >
                <Github className="w-3.5 h-3.5 text-slate-900" />
                <span>@{PERSONAL_INFO.username}</span>
              </a>

              <a
                href={PERSONAL_INFO.codeurUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-900 hover:bg-emerald-100 transition-colors font-bold"
              >
                <span>⭐ Codeur.com (100%)</span>
              </a>

              <a
                href={PERSONAL_INFO.itSefakoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 hover:bg-amber-100 transition-colors font-bold"
              >
                <Globe className="w-3.5 h-3.5 text-amber-700" />
                <span>IT Sefako</span>
              </a>

              {/* Copy Email */}
              <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200">
                <Mail className="w-3.5 h-3.5 text-emerald-700" />
                <span className="font-mono text-slate-900">{PERSONAL_INFO.email}</span>
                <button
                  id="hero-copy-email-btn"
                  onClick={handleCopyEmail}
                  className="p-0.5 hover:text-slate-950 text-slate-600 hover:bg-slate-200 rounded transition-colors"
                  title="Copier l'adresse email"
                >
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Right Interactive Developer Card (Right 5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-white border border-slate-200/90 shadow-2xl p-6 sm:p-7 backdrop-blur-xl">
              {/* Window Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-600 shadow-sm" title="Togo Red" />
                  <div className="w-3 h-3 rounded-full bg-amber-400 shadow-sm" title="Togo Yellow" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-sm" title="Togo Green" />
                  <span className="ml-2 font-mono text-xs sm:text-sm text-slate-600 font-medium">
                    patrice-atcu-profile.ts 🇹🇬
                  </span>
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 font-bold">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                  <span className="uppercase tracking-wider">Verified Pro</span>
                </div>
              </div>

              {/* Code/Info Content */}
              <div className="font-mono text-xs sm:text-sm text-slate-800 space-y-2 leading-relaxed overflow-x-auto bg-slate-50/80 p-4.5 rounded-xl border border-slate-100">
                <div>
                  <span className="text-emerald-800 font-bold">const</span> <span className="text-slate-900 font-bold">developer</span> = &#123;
                </div>
                <div className="pl-4 space-y-1">
                  <div>
                    <span className="text-slate-500">name:</span> <span className="text-emerald-800 font-bold">"{PERSONAL_INFO.fullName}"</span>,
                  </div>
                  <div>
                    <span className="text-slate-500">role:</span> <span className="text-slate-900 font-semibold">"Full Stack & Mobile Engineer"</span>,
                  </div>
                  <div>
                    <span className="text-slate-500">github:</span> <span className="text-emerald-700 font-bold">"@{PERSONAL_INFO.username}"</span>,
                  </div>
                  <div>
                    <span className="text-slate-500">education:</span> <span className="text-amber-700 font-bold">"BCA — CIFOP (2015-2017)"</span>,
                  </div>
                  <div>
                    <span className="text-slate-500">coreCapabilities:</span> [
                    <span className="text-emerald-700">"Laravel"</span>, <span className="text-emerald-700">"React"</span>, <span className="text-emerald-700">"iOS Swift"</span>, <span className="text-emerald-700">"Flutter"</span>
                    ],
                  </div>
                  <div>
                    <span className="text-slate-500">appStoreApp:</span> <span className="text-blue-700 font-bold">"PetitNid (iOS)"</span>,
                  </div>
                  <div>
                    <span className="text-slate-500">openSourcePackage:</span> <span className="text-amber-700 font-bold">"moneyfusion-laravel"</span>,
                  </div>
                  <div>
                    <span className="text-slate-500">eCommerce:</span> [
                    <span className="text-slate-700">"WordPress"</span>, <span className="text-slate-700">"PrestaShop"</span>
                    ],
                  </div>
                  <div>
                    <span className="text-slate-500">hiringStatus:</span> <span className="text-emerald-700 font-bold">"Available Immediately"</span>
                  </div>
                </div>
                <div>&#125;;</div>
              </div>

              {/* Quick Feature Metric Cards Inside Card */}
              <div className="grid grid-cols-3 gap-2.5 pt-5 mt-5 border-t border-slate-100 text-center">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="text-lg sm:text-xl font-serif font-bold text-slate-900">
                    BCA
                  </div>
                  <div className="text-xs text-slate-600 uppercase tracking-wider font-bold mt-0.5">
                    CIFOP 2017
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-200">
                  <div className="text-lg sm:text-xl font-serif font-bold text-emerald-800">
                    100%
                  </div>
                  <div className="text-xs text-emerald-800 uppercase tracking-wider font-bold mt-0.5">
                    Codeur.com
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-amber-50/60 border border-amber-200">
                  <div className="text-lg sm:text-xl font-serif font-bold text-amber-700">
                    1.2k+
                  </div>
                  <div className="text-xs text-amber-700 uppercase tracking-wider font-bold mt-0.5">
                    Package Pkg
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
