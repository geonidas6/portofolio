import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  Sparkles, 
  Send, 
  Check, 
  Clock, 
  Layers, 
  ShieldCheck, 
  CreditCard, 
  Copy, 
  MessageSquare, 
  ChevronRight 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Language } from '../types';

interface ProjectEstimatorProps {
  lang: Language;
}

interface PlatformOption {
  id: string;
  name: { fr: string; en: string };
  baseWeeks: number;
  icon: string;
}

interface FeatureOption {
  id: string;
  name: { fr: string; en: string };
  weeks: number;
  category: string;
}

export const ProjectEstimator: React.FC<ProjectEstimatorProps> = ({ lang }) => {
  const [selectedPlatform, setSelectedPlatform] = useState<string>('fullstack');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'auth',
    'payments',
    'dashboard'
  ]);
  const [projectDescription, setProjectDescription] = useState<string>('');
  const [copiedBrief, setCopiedBrief] = useState(false);

  const platforms: PlatformOption[] = [
    {
      id: 'web',
      name: { fr: 'Application Web & Dashboard (Laravel / React / Next.js)', en: 'Web App & Dashboard (Laravel / React / Next.js)' },
      baseWeeks: 3,
      icon: 'Globe'
    },
    {
      id: 'mobile',
      name: { fr: 'Application Mobile iOS & Android (Flutter)', en: 'Mobile App iOS & Android (Flutter)' },
      baseWeeks: 4,
      icon: 'Smartphone'
    },
    {
      id: 'fullstack',
      name: { fr: 'Plateforme Complète Web + Mobile + API', en: 'Full Platform Web + Mobile + API' },
      baseWeeks: 6,
      icon: 'Layers'
    },
    {
      id: 'fintech',
      name: { fr: 'Microservice API & Passerelle Paiement (MoneyFusion/Stripe)', en: 'API Microservice & Payment Gateway' },
      baseWeeks: 2,
      icon: 'CreditCard'
    }
  ];

  const featuresList: FeatureOption[] = [
    { id: 'auth', name: { fr: 'Authentification sécurisée, Rôles & Permissions (RBAC)', en: 'Secure Auth, Roles & Permissions (RBAC)' }, weeks: 1, category: 'Core' },
    { id: 'payments', name: { fr: 'Intégration Paiements (MoneyFusion, Mobile Money, Stripe)', en: 'Payment Gateways (MoneyFusion, Mobile Money, Stripe)' }, weeks: 1.5, category: 'FinTech' },
    { id: 'dashboard', name: { fr: 'Tableau de bord interactif & Graphiques statistiques', en: 'Interactive Analytics & Reporting Dashboard' }, weeks: 1, category: 'UI' },
    { id: 'realtime', name: { fr: 'Temps réel & Notifications (WebSockets / Push FCM)', en: 'Real-time & Notifications (WebSockets / Push FCM)' }, weeks: 1, category: 'Features' },
    { id: 'offline', name: { fr: 'Mode Hors-ligne & Synchronisation automatique', en: 'Offline-First Mode & Data Sync' }, weeks: 1.5, category: 'Mobile' },
    { id: 'docker_aws', name: { fr: 'Conteneurisation Docker & Déploiement Cloud AWS', en: 'Docker Containerization & AWS Cloud Deployment' }, weeks: 1, category: 'DevOps' },
  ];

  const toggleFeature = (id: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const calculation = useMemo(() => {
    const currentPlatform = platforms.find((p) => p.id === selectedPlatform) || platforms[0];
    const featuresWeeks = selectedFeatures.reduce((acc, featId) => {
      const feat = featuresList.find((f) => f.id === featId);
      return acc + (feat ? feat.weeks : 0);
    }, 0);

    const totalWeeks = Math.ceil(currentPlatform.baseWeeks + featuresWeeks);
    return {
      platformName: currentPlatform.name[lang],
      weeks: totalWeeks,
    };
  }, [selectedPlatform, selectedFeatures, lang]);

  const generatedBrief = useMemo(() => {
    const featNames = selectedFeatures
      .map((id) => featuresList.find((f) => f.id === id)?.name[lang])
      .filter(Boolean)
      .join('\n- ');

    return `Bonjour Patrice,\n\nJe souhaite développer un projet avec les spécifications suivantes :\n\n- Type : ${calculation.platformName}\n- Fonctionnalités sélectionnées :\n- ${featNames}\n- Estimation indicative : ~${calculation.weeks} semaines\n${projectDescription ? `- Note complémentaire : ${projectDescription}\n` : ''}\nRestant à votre disposition pour échanger sur le cadrage technique.`;
  }, [calculation, selectedFeatures, projectDescription, lang]);

  const handleCopyBrief = () => {
    navigator.clipboard.writeText(generatedBrief);
    setCopiedBrief(true);
    setTimeout(() => setCopiedBrief(false), 2500);
  };

  const handleSendEmail = () => {
    const subject = encodeURIComponent(`Nouveau Projet : ${calculation.platformName}`);
    const body = encodeURIComponent(generatedBrief);
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="estimator" className="py-24 bg-white border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono tracking-[0.25em] uppercase font-bold">
            <Calculator className="w-3.5 h-3.5 text-amber-600" />
            <span>PROJECT SCOPE & ESTIMATOR</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-slate-950 tracking-tight">
            {lang === 'fr' ? 'Estimez Votre Projet en Quelques Clics' : 'Estimate Your Project Scope'}
          </h2>
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
            {lang === 'fr'
              ? 'Configurez votre besoin (Web, Mobile, FinTech), choisissez vos modules clés et générez un brief technique prêt à l\'envoi.'
              : 'Select your platform, key modules, and instantly generate a structured technical brief.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form Options (Left 7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* 1. Platform Choice */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 space-y-4 shadow-sm">
              <h3 className="text-xs font-bold text-slate-900 uppercase font-mono tracking-wider flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 font-bold flex items-center justify-center text-xs">1</span>
                <span>{lang === 'fr' ? 'Plateforme / Nature du Projet' : 'Platform / Nature of Project'}</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {platforms.map((plat) => {
                  const isSelected = selectedPlatform === plat.id;
                  return (
                    <button
                      key={plat.id}
                      onClick={() => setSelectedPlatform(plat.id)}
                      className={`p-4 rounded-xl border text-left transition-all ${
                        isSelected
                          ? 'bg-emerald-50/80 border-emerald-600 text-slate-950 shadow-sm'
                          : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-950'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-bold text-slate-900">{plat.name[lang].split('(')[0]}</span>
                        {isSelected && <Check className="w-4 h-4 text-emerald-700" />}
                      </div>
                      <div className="text-[11px] text-slate-500 font-normal">
                        {plat.name[lang].includes('(') ? `(${plat.name[lang].split('(')[1]}` : ''}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Feature Modules */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 space-y-4 shadow-sm">
              <h3 className="text-xs font-bold text-slate-900 uppercase font-mono tracking-wider flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 font-bold flex items-center justify-center text-xs">2</span>
                <span>{lang === 'fr' ? 'Fonctionnalités & Modules Requis' : 'Required Features & Modules'}</span>
              </h3>

              <div className="space-y-2">
                {featuresList.map((feat) => {
                  const isChecked = selectedFeatures.includes(feat.id);
                  return (
                    <button
                      key={feat.id}
                      onClick={() => toggleFeature(feat.id)}
                      className={`w-full p-3 rounded-xl border flex items-center justify-between text-left transition-all text-xs ${
                        isChecked
                          ? 'bg-emerald-50/60 border-emerald-300 text-slate-900'
                          : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-4 h-4 rounded border flex items-center justify-center ${
                            isChecked
                              ? 'bg-emerald-700 border-emerald-700 text-white'
                              : 'border-slate-300 bg-white'
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className="font-semibold text-slate-800">{feat.name[lang]}</span>
                      </div>
                      <span className="font-mono text-[9px] text-slate-600 px-2 py-0.5 rounded-full bg-slate-100 border border-slate-200 font-medium">
                        {feat.category}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Additional Context */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 space-y-3 shadow-sm">
              <h3 className="text-xs font-bold text-slate-900 uppercase font-mono tracking-wider flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 font-bold flex items-center justify-center text-xs">3</span>
                <span>{lang === 'fr' ? 'Détails complémentaires (Optionnel)' : 'Additional Context (Optional)'}</span>
              </h3>
              <textarea
                value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
                placeholder={
                  lang === 'fr'
                    ? 'Décrivez brièvement vos objectifs, délai souhaité ou contraintes techniques particulières...'
                    : 'Describe your main goals, target deadline, or technical constraints...'
                }
                className="w-full h-24 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 font-normal"
              />
            </div>
          </div>

          {/* Estimation Summary & CTA (Right 5 cols) */}
          <div className="lg:col-span-5 sticky top-24 space-y-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="text-xs font-mono uppercase tracking-[0.2em] text-slate-500 font-semibold">
                  {lang === 'fr' ? 'RÉCAPITULATIF DU PROJET' : 'PROJECT SUMMARY'}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-emerald-800 font-mono font-bold">
                  <Clock className="w-3.5 h-3.5 text-amber-600" />
                  <span>Délai indicatif</span>
                </div>
              </div>

              {/* Estimation Metric Box */}
              <div className="p-5 rounded-xl bg-amber-50/50 border border-amber-200/80 text-center space-y-1">
                <div className="text-xs text-slate-600 font-normal">
                  {lang === 'fr' ? 'Temps estimé de réalisation' : 'Estimated Time to Delivery'}
                </div>
                <div className="text-3xl sm:text-4xl font-serif font-bold text-emerald-800">
                  ~ {calculation.weeks} {lang === 'fr' ? 'semaines' : 'weeks'}
                </div>
                <div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">
                  {lang === 'fr' ? 'Cycle agile avec livraisons continues' : 'Agile sprints with continuous staging delivery'}
                </div>
              </div>

              {/* Selected brief content */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>{lang === 'fr' ? 'Brief prêt à l\'envoi' : 'Generated Project Brief'}</span>
                  <button
                    onClick={handleCopyBrief}
                    className="flex items-center gap-1 text-emerald-700 hover:text-emerald-900 font-mono text-xs font-bold"
                  >
                    {copiedBrief ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedBrief ? 'Copié !' : 'Copier'}</span>
                  </button>
                </div>
                <pre className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700 whitespace-pre-wrap max-h-48 overflow-y-auto leading-relaxed">
                  {generatedBrief}
                </pre>
              </div>

              {/* CTAs */}
              <div className="space-y-2.5 pt-2">
                <button
                  id="estimator-send-email-btn"
                  onClick={handleSendEmail}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full font-bold text-white bg-emerald-800 hover:bg-emerald-700 shadow-md transition-all text-xs uppercase tracking-wider"
                >
                  <Send className="w-4 h-4 text-amber-300" />
                  <span>{lang === 'fr' ? 'Transmettre ce brief par Email' : 'Send Brief via Email'}</span>
                </button>

                <a
                  href={`https://wa.me/22890000000?text=${encodeURIComponent(generatedBrief)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors text-xs uppercase tracking-wider"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-700" />
                  <span>{lang === 'fr' ? 'Échanger directement sur WhatsApp' : 'Discuss on WhatsApp'}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
