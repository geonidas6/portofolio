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
  CheckCircle2,
  Smartphone,
  ShoppingBag,
  Package
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
      title: lang === 'fr' ? 'Gestion de Projets de A à Z' : 'End-to-End Project Delivery',
      description: lang === 'fr' 
        ? 'De l\'analyse des besoins clients à la mise en production : cadrage, architecture front/back, tests et déploiement continu.'
        : 'From requirements gathering to production launch: scoping, front/back architecture, QA testing, and continuous deployment.',
      badge: 'Projet Complet'
    },
    {
      icon: Smartphone,
      title: lang === 'fr' ? 'Applications Mobiles & App Store' : 'Mobile Apps & App Store Publishing',
      description: lang === 'fr'
        ? 'Conception d\'applications mobiles iOS publiées sur l\'App Store (ex: PetitNid) avec achats in-app / StoreKit, et Flutter cross-platform.'
        : 'Design of native iOS apps published on the App Store (e.g. PetitNid) with In-App Purchases / StoreKit, and Flutter cross-platform.',
      badge: 'iOS & Flutter'
    },
    {
      icon: Package,
      title: lang === 'fr' ? 'Packages Open-Source & Paiements' : 'Open-Source Packages & Payments',
      description: lang === 'fr'
        ? 'Auteur du package officiel moneyfusion-laravel (1.2k+ dl). Expertise en validation cryptographique de webhooks et paiements sécurisés.'
        : 'Author of the official moneyfusion-laravel package (1.2k+ dl). Deep expertise in HMAC signatures and payment integrations.',
      badge: 'Package Author'
    },
    {
      icon: ShoppingBag,
      title: lang === 'fr' ? 'E-Commerce & CMS Spécialisé' : 'E-Commerce & Specialized CMS',
      description: lang === 'fr'
        ? 'Boutiques WordPress/WooCommerce sur-mesure et interventions d\'urgence / optimisation sur PrestaShop à fort trafic (Alepia, Aux Bonnes Senteurs).'
        : 'Bespoke WooCommerce stores and rapid troubleshooting/optimization for high-traffic PrestaShop deployments.',
      badge: 'WooCommerce & PrestaShop'
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-50/70 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono tracking-[0.25em] uppercase font-bold">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>{lang === 'fr' ? 'À PROPOS DE PATRICE ATCU' : 'ABOUT PATRICE ATCU'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-slate-950 tracking-tight">
            {lang === 'fr' 
              ? 'Développeur Full Stack & Créateur de Solutions Web / Mobile' 
              : 'Full Stack Developer & Web / Mobile Solutions Creator'}
          </h2>
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
            {lang === 'fr'
              ? 'Découvrez mon profil professionnel, mon parcours académique et la rigueur technique apportée à chaque projet.'
              : 'Discover my professional background, academic credentials, and the technical discipline behind each delivery.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Bio Story (Left 6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 space-y-5 shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 flex items-center gap-2.5">
                  <Globe2 className="w-6 h-6 text-emerald-700" />
                  <span>{lang === 'fr' ? 'Profil Professionnel' : 'Professional Profile'}</span>
                </h3>
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                  Lomé, Togo 🇹🇬
                </span>
              </div>
              
              <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
                {PERSONAL_INFO.bio[lang].split('\n\n').map((para, index) => (
                  <p key={index}>{para}</p>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2 text-xs sm:text-sm font-mono">
                <span className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 font-semibold">
                  🎓 BCA — CIFOP (2015-2017)
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold">
                  📱 iOS App Store (PetitNid)
                </span>
                <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200 font-semibold">
                  📦 moneyfusion-laravel
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-800 border border-slate-200 font-semibold">
                  🌐 IT Sefako (it-sefako.com)
                </span>
              </div>
            </div>

            {/* Quick Metrics Banner */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              <div className="p-4 rounded-xl bg-white border border-slate-200 text-center shadow-sm">
                <div className="text-3xl font-serif font-bold text-emerald-800">100%</div>
                <div className="text-xs uppercase tracking-wider text-slate-600 font-semibold mt-1">Satisfaction Codeur</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200 text-center shadow-sm">
                <div className="text-3xl font-serif font-bold text-slate-900">13+</div>
                <div className="text-xs uppercase tracking-wider text-slate-600 font-semibold mt-1">Réalisations Clés</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200 text-center shadow-sm">
                <div className="text-3xl font-serif font-bold text-amber-600">1.2k+</div>
                <div className="text-xs uppercase tracking-wider text-slate-600 font-semibold mt-1">Downloads Pkg</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200 text-center shadow-sm">
                <div className="text-3xl font-serif font-bold text-emerald-800">BCA</div>
                <div className="text-xs uppercase tracking-wider text-slate-600 font-semibold mt-1">CIFOP 2017</div>
              </div>
            </div>
          </div>

          {/* Pillars & Codeur Widget (Right 6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            {pillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-md hover:shadow-lg hover:border-emerald-300 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-emerald-50 text-emerald-800 group-hover:bg-emerald-800 group-hover:text-amber-300 transition-colors border border-emerald-200 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="font-serif font-bold text-slate-900 text-base sm:text-lg">
                          {item.title}
                        </h4>
                        <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 font-semibold shrink-0">
                          {item.badge}
                        </span>
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Codeur.com Official Verification Widget (Full Width) */}
        <div className="mt-14">
          <CodeurWidget lang={lang} />
        </div>
      </div>
    </section>
  );
};
