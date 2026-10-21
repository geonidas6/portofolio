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
  ChevronRight,
  ShoppingBag,
  Smartphone,
  Globe,
  Package
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
      name: { fr: 'Application Mobile (iOS Swift / Flutter)', en: 'Mobile App (iOS Swift / Flutter)' },
      baseWeeks: 4,
      icon: 'Smartphone'
    },
    {
      id: 'ecommerce',
      name: { fr: 'Boutique E-Commerce / CMS (WordPress, WooCommerce, PrestaShop)', en: 'E-Commerce / CMS Store (WordPress, WooCommerce, PrestaShop)' },
      baseWeeks: 3,
      icon: 'ShoppingBag'
    },
    {
      id: 'fullstack',
      name: { fr: 'SaaS / Plateforme Complète Web + Mobile + API', en: 'Full SaaS Platform Web + Mobile + API' },
      baseWeeks: 6,
      icon: 'Layers'
    },
    {
      id: 'package',
      name: { fr: 'Package Open-Source Laravel / API Passerelle Paiement', en: 'Open-Source Laravel Package / Payment Gateway API' },
      baseWeeks: 2,
      icon: 'Package'
    }
  ];

  const featuresList: FeatureOption[] = [
    { id: 'auth', name: { fr: 'Authentification sécurisée, Rôles & Permissions (RBAC)', en: 'Secure Auth, Roles & Permissions (RBAC)' }, weeks: 1, category: 'Core' },
    { id: 'payments', name: { fr: 'Paiements Sécurisés (MoneyFusion, Mobile Money, Cartes)', en: 'Payment Gateways (MoneyFusion, Mobile Money, Cards)' }, weeks: 1.5, category: 'FinTech' },
    { id: 'app_store', name: { fr: 'Publication App Store & Achats In-App (StoreKit)', en: 'App Store Submission & In-App Purchases (StoreKit)' }, weeks: 1.5, category: 'Mobile' },
    { id: 'dashboard', name: { fr: 'Tableau de bord interactif & Graphiques statistiques', en: 'Interactive Analytics & Reporting Dashboard' }, weeks: 1, category: 'UI' },
    { id: 'realtime', name: { fr: 'Temps réel & Notifications (WebSockets / Push FCM)', en: 'Real-time & Notifications (WebSockets / Push FCM)' }, weeks: 1, category: 'Features' },
    { id: 'ecommerce_catalog', name: { fr: 'Catalogue produits, variations & gestion de stock', en: 'Product catalog, variations & inventory sync' }, weeks: 1, category: 'E-Commerce' },
    { id: 'devops_deploy', name: { fr: 'Hébergement, Nginx/SSL & Déploiement Continu', en: 'Hosting, Nginx/SSL & Continuous Deployment' }, weeks: 1, category: 'DevOps' },
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

    return `Bonjour Patrice,\n\nJe souhaite développer un projet avec les spécifications suivantes :\n\n- Type : ${calculation.platformName}\n- Fonctionnalités sélectionnées :\n- ${featNames}\n- Estimation indicative : ~${calculation.weeks} semaines\n${projectDescription ? `- Note complémentaire : ${projectDescription}\n` : ''}\nRestant à votre disposition pour échanger sur le cadrage technique et le devis.`;
  }, [calculation, selectedFeatures, projectDescription, lang]);

  const handleCopyBrief = () => {
    navigator.clipboard.writeText(generatedBrief);
    setCopiedBrief(true);
    setTimeout(() => setCopiedBrief(false), 2000);
  };

  const handleSendEmail = () => {
    const subject = encodeURIComponent(`Demande de projet - ${calculation.platformName}`);
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
            <span>CALCULATEUR DE PROJET & DEVIS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-slate-950 tracking-tight">
            {lang === 'fr' ? 'Estimez Votre Projet en Quelques Clics' : 'Estimate Your Project Scope'}
          </h2>
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
            {lang === 'fr'
              ? 'Sélectionnez votre type de projet (Web, Mobile iOS, E-Commerce, Package Laravel), vos modules requis et générez un brief technique structuré.'
              : 'Select your platform, key modules, and instantly generate a structured technical brief.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form Options (Left 7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* 1. Platform Choice */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 space-y-4 shadow-sm">
              <h3 className="text-xs font-bold text-slate-900 uppercase font-mono tracking-wider flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold flex items-center justify-center text-xs">1</span>
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
                          ? 'bg-emerald-50/60 border-emerald-700 text-slate-950 shadow-sm'
                          : 'bg-white border-slate-200 text-slate-600 hover:border-emerald-300 hover:text-slate-950'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-bold text-slate-900">{plat.name[lang].split('(')[0]}</span>
                        {isSelected && <Check className="w-4 h-4 text-emerald-700" />}
                      </div>
                      <div className="text-[11px] text-slate-500 font-light">
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
                <span className="w-6 h-6 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold flex items-center justify-center text-xs">2</span>
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
                          ? 'bg-emerald-50/50 border-emerald-300 text-slate-900 font-medium'
                          : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-4 h-4 rounded border flex items-center justify-center ${
                            isChecked
                              ? 'bg-emerald-800 border-emerald-800 text-white'
                              : 'border-slate-300 bg-white'
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3 stroke-[3] text-amber-300" />}
                        </div>
                        <span className="font-medium text-slate-800">{feat.name[lang]}</span>
                      </div>
                      <span className="font-mono text-[9px] text-slate-500 px-2 py-0.5 rounded-full bg-slate-100 border border-slate-200 font-medium">
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
                <span className="w-6 h-6 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold flex items-center justify-center text-xs">3</span>
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
                className="w-full h-24 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 font-medium leading-relaxed"
              />
            </div>
          </div>

          {/* Estimation Summary & CTA (Right 5 cols) */}
          <div className="lg:col-span-5 sticky top-24 space-y-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 font-semibold">
                  {lang === 'fr' ? 'RÉCAPITULATIF DU PROJET' : 'PROJECT SUMMARY'}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-emerald-800 font-mono font-bold">
                  <Clock className="w-3.5 h-3.5 text-amber-600" />
                  <span>Délai indicatif</span>
                </div>
              </div>

              {/* Estimation Metric Box */}
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-1">
                <div className="text-xs text-slate-600 font-light">
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
                    className="flex items-center gap-1 text-emerald-800 hover:text-emerald-950 font-mono text-[11px] font-bold"
                  >
                    {copiedBrief ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedBrief ? 'Copié !' : 'Copier'}</span>
                  </button>
                </div>
                <pre className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-[11px] font-mono text-slate-800 whitespace-pre-wrap max-h-48 overflow-y-auto leading-relaxed">
                  {generatedBrief}
                </pre>
              </div>

              {/* CTAs */}
              <div className="space-y-2.5 pt-2">
                <button
                  id="estimator-send-email-btn"
                  onClick={handleSendEmail}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-full font-bold text-white bg-emerald-800 hover:bg-emerald-700 shadow-md transition-all text-xs uppercase tracking-wider"
                >
                  <Send className="w-4 h-4 text-amber-300" />
                  <span>{lang === 'fr' ? 'Transmettre ce brief par Email' : 'Send Brief via Email'}</span>
                </button>

                <a
                  href={`https://wa.me/22890000000?text=${encodeURIComponent(generatedBrief)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-full font-bold text-slate-800 bg-slate-100 hover:bg-emerald-50 hover:text-emerald-950 border border-slate-200 transition-colors text-xs uppercase tracking-wider"
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
