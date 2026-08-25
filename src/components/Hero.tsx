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
  Send 
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
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[400px] bg-gradient-to-tr from-blue-100/60 via-indigo-50/40 to-transparent blur-[140px] rounded-full" />
        <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-sky-50/50 blur-[120px] rounded-full" />
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(#1e293b 1px, transparent 1px)`,
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
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-900 shadow-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
                </span>
                <span className="font-bold text-emerald-800 tracking-wide text-xs uppercase font-mono">
                  {PERSONAL_INFO.availability[lang]}
                </span>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs sm:text-sm text-slate-700 font-medium">
                <MapPin className="w-3.5 h-3.5 text-blue-600" />
                <span>Lomé, Togo</span>
                <span className="text-slate-300">•</span>
                <span className="font-mono text-xs sm:text-sm text-blue-700 font-bold">{PERSONAL_INFO.githubRankTogo}</span>
              </div>
            </div>

            {/* Main Name & Title with Sophisticated Typography */}
            <div className="space-y-3.5">
              <div className="text-xs sm:text-sm uppercase tracking-[0.3em] text-blue-700 font-mono font-bold">
                {lang === 'fr' ? 'Portfolio & Ingénierie Logicielle' : 'Portfolio & Software Engineering'}
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif tracking-tight text-slate-950 leading-[1.1]">
                Akotse Kokou<br />
                <span className="text-blue-600 italic font-normal">Patrice Edem</span>
              </h1>

              <div className="text-lg sm:text-2xl font-medium text-slate-800 tracking-tight">
                {PERSONAL_INFO.title[lang]}
              </div>
            </div>

            {/* Tagline / Subtitle */}
            <p className="text-base sm:text-lg text-slate-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {PERSONAL_INFO.tagline[lang]}
            </p>

            {/* Quick Speciality Highlight Badges */}
            <div className="space-y-2">
              <div className="text-xs uppercase tracking-[0.25em] text-slate-600 font-mono font-bold text-center lg:text-left">
                {lang === 'fr' ? 'Stack & Spécialités Clés' : 'Core Expertise'}
              </div>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                {[
                  'Laravel & Symfony',
                  'React & Next.js',
                  'Python (FastAPI)',
                  'Flutter Mobile',
                  'MoneyFusion & FinTech',
                  'Docker & DevOps'
                ].map((badge, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-mono font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors"
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
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-white bg-slate-900 hover:bg-blue-600 shadow-md shadow-slate-900/10 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-xs sm:text-sm uppercase tracking-wider"
              >
                <span>{lang === 'fr' ? 'Explorer mes Projets' : 'Explore My Projects'}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                id="hero-contact-btn"
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-200 hover:border-slate-300 transition-all text-xs sm:text-sm uppercase tracking-wider"
              >
                <Send className="w-4 h-4 text-blue-600" />
                <span>{lang === 'fr' ? 'Discuter d\'un projet' : 'Start a Conversation'}</span>
              </a>

              <button
                id="hero-resume-modal-btn"
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-full font-bold text-slate-700 hover:text-slate-950 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm transition-colors text-xs sm:text-sm uppercase tracking-wider"
                title={lang === 'fr' ? 'Consulter le CV complet' : 'View Full Resume'}
              >
                <Download className="w-4 h-4 text-blue-600" />
                <span>CV</span>
              </button>
            </div>

            {/* Contact Quick Bar / Copy Email */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2 text-sm text-slate-700">
              <div className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full border border-slate-200">
                <Mail className="w-4 h-4 text-blue-600" />
                <span className="font-mono text-slate-900 font-semibold">{PERSONAL_INFO.email}</span>
                <button
                  id="hero-copy-email-btn"
                  onClick={handleCopyEmail}
                  className="p-1 hover:text-slate-950 text-slate-600 hover:bg-slate-200 rounded-full transition-colors"
                  title="Copier l'adresse email"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 hover:border-slate-300 text-slate-800 hover:text-slate-950 font-semibold transition-colors"
              >
                <Github className="w-4 h-4 text-slate-900" />
                <span className="font-mono text-xs sm:text-sm">github.com/{PERSONAL_INFO.username}</span>
              </a>
            </div>
          </div>

          {/* Right Interactive Developer Card (Right 5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-white border border-slate-200/90 shadow-2xl p-6 sm:p-7 backdrop-blur-xl">
              {/* Window Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  <span className="ml-2 font-mono text-xs sm:text-sm text-slate-600 font-medium">
                    akotse-developer-profile.ts
                  </span>
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs font-mono text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200 font-bold">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                  <span className="uppercase tracking-wider">Verified</span>
                </div>
              </div>

              {/* Code/Info Content */}
              <div className="font-mono text-xs sm:text-sm text-slate-800 space-y-2.5 leading-relaxed overflow-x-auto bg-slate-50/80 p-5 rounded-xl border border-slate-100">
                <div>
                  <span className="text-blue-600 font-semibold">const</span> <span className="text-slate-900 font-bold">engineer</span> = &#123;
                </div>
                <div className="pl-4 space-y-1.5">
                  <div>
                    <span className="text-slate-500">name:</span> <span className="text-emerald-700 font-bold">"{PERSONAL_INFO.fullName}"</span>,
                  </div>
                  <div>
                    <span className="text-slate-500">handle:</span> <span className="text-blue-700 font-bold">"@{PERSONAL_INFO.username}"</span>,
                  </div>
                  <div>
                    <span className="text-slate-500">experience:</span> <span className="text-amber-800 font-bold">{PERSONAL_INFO.yearsOfExperience}+ ans</span>,
                  </div>
                  <div>
                    <span className="text-slate-500">location:</span> <span className="text-slate-900 font-medium">"Lomé, Togo"</span>,
                  </div>
                  <div>
                    <span className="text-slate-500">coreStack:</span> [
                    <span className="text-indigo-700 font-medium">"Laravel"</span>, <span className="text-indigo-700 font-medium">"React"</span>, <span className="text-indigo-700 font-medium">"Flutter"</span>, <span className="text-indigo-700 font-medium">"Python"</span>
                    ],
                  </div>
                  <div>
                    <span className="text-slate-500">openSource:</span> &#123;
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-500">package:</span> <span className="text-blue-700 font-bold">"moneyfusion-laravel"</span>,
                    <br />
                    <span className="text-slate-500">status:</span> <span className="text-emerald-700 font-bold">"Active Maintainer"</span>
                  </div>
                  <div>&#125;,</div>
                  <div>
                    <span className="text-slate-500">availableForHire:</span> <span className="text-emerald-600 font-bold">true</span>,
                  </div>
                </div>
                <div>&#125;;</div>
              </div>

              {/* Quick Feature Metric Cards Inside Card */}
              <div className="grid grid-cols-3 gap-2.5 pt-5 mt-5 border-t border-slate-100 text-center">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="text-lg sm:text-xl font-serif font-bold text-slate-900">
                    {PERSONAL_INFO.yearsOfExperience}+
                  </div>
                  <div className="text-xs text-slate-600 uppercase tracking-wider font-bold mt-0.5">
                    {lang === 'fr' ? 'Années Exp.' : 'Years Exp.'}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-blue-50/60 border border-blue-100">
                  <div className="text-lg sm:text-xl font-serif font-bold text-blue-700">
                    {PERSONAL_INFO.projectsCount}
                  </div>
                  <div className="text-xs text-blue-700 uppercase tracking-wider font-bold mt-0.5">
                    {lang === 'fr' ? 'Projets Livrés' : 'Projects Done'}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-100">
                  <div className="text-lg sm:text-xl font-serif font-bold text-emerald-700">
                    100%
                  </div>
                  <div className="text-xs text-emerald-700 uppercase tracking-wider font-bold mt-0.5">
                    {lang === 'fr' ? 'Engagement' : 'Commitment'}
                  </div>
                </div>
              </div>

              {/* Highlight Package Badge */}
              <div className="mt-4 p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between hover:border-blue-300 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white border border-slate-200 text-blue-600 shadow-sm">
                    <Package className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">moneyfusion-laravel</div>
                    <div className="text-xs text-slate-500 font-mono">Open-Source Laravel Package</div>
                  </div>
                </div>
                <a
                  href="https://github.com/geonidas6/moneyfusion-laravel"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs sm:text-sm font-mono font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1"
                >
                  <span>GitHub</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
