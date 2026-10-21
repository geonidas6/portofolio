import React from 'react';
import { 
  X, 
  Printer, 
  Mail, 
  Github, 
  MapPin, 
  Globe, 
  Briefcase, 
  GraduationCap, 
  Code, 
  Package, 
  ExternalLink,
  Smartphone,
  Layers,
  ShoppingBag,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Language } from '../types';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, lang }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="resume-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="resume-modal-content"
        className="relative w-full max-w-4xl bg-white border border-slate-200 text-slate-900 print:bg-white print:text-slate-900 rounded-2xl shadow-2xl p-6 sm:p-10 my-6 max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar (Hidden on print) */}
        <div className="flex items-center justify-between pb-5 mb-6 border-b border-slate-200 print:hidden no-print">
          <div className="flex items-center gap-2">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-mono tracking-widest uppercase bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold flex items-center gap-1.5">
              <span>Curriculum Vitae Officiel • {PERSONAL_INFO.fullName}</span>
              <span>🇹🇬</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold bg-emerald-800 text-white hover:bg-emerald-700 transition-colors shadow-sm uppercase tracking-wider"
              title="Imprimer ou enregistrer au format PDF"
            >
              <Printer className="w-4 h-4 text-amber-300" />
              <span>Imprimer / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document */}
        <div className="space-y-7 print:p-0">
          {/* Header */}
          <div className="border-b border-slate-200 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 tracking-tight">
                    {PERSONAL_INFO.fullName}
                  </h1>
                  <span className="text-xl">🇹🇬</span>
                </div>
                <p className="text-base sm:text-lg font-bold text-emerald-800 mt-1">
                  {PERSONAL_INFO.title[lang]}
                </p>
              </div>

              {/* Contact & Links Bar */}
              <div className="text-xs sm:text-sm text-slate-700 space-y-1.5 font-mono sm:text-right font-medium">
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Mail className="w-4 h-4 text-emerald-700" />
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-emerald-800 hover:underline">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Github className="w-4 h-4 text-slate-800" />
                  <a href={PERSONAL_INFO.githubUrl} target="_blank" rel="noreferrer" className="hover:text-emerald-800 hover:underline">
                    github.com/{PERSONAL_INFO.username}
                  </a>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Globe className="w-4 h-4 text-emerald-700" />
                  <a href={PERSONAL_INFO.itSefakoUrl} target="_blank" rel="noreferrer" className="hover:text-emerald-800 hover:underline">
                    it-sefako.com
                  </a>
                  <span className="text-slate-300">•</span>
                  <a href={PERSONAL_INFO.codeurUrl} target="_blank" rel="noreferrer" className="hover:text-emerald-800 hover:underline">
                    Codeur.com
                  </a>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <MapPin className="w-4 h-4 text-emerald-700" />
                  <span>Lomé, Togo (Disponible en Télétravail International)</span>
                </div>
              </div>
            </div>

            {/* Profil Professionnel */}
            <div className="mt-5 pt-4 border-t border-slate-100 space-y-1.5">
              <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-emerald-800 font-bold">
                PROFIL PROFESSIONNEL
              </h2>
              <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
                Développeur passionné et polyvalent avec une solide expérience dans la conception et le déploiement de solutions web, d'applications mobiles, de packages backend et de plateformes e-commerce. Capable de gérer un projet de A à Z : de l'analyse des besoins client à la mise en production, en passant par le développement front-end/back-end, la création d'outils/packages open-source, l'intégration de systèmes de paiement et la publication d'applications sur les stores (App Store).
              </p>
            </div>
          </div>

          {/* Compétences Techniques */}
          <div className="space-y-3">
            <h2 className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-slate-900 font-bold flex items-center gap-1.5 border-b border-slate-200 pb-1.5">
              <Code className="w-4 h-4 text-emerald-700" />
              <span>COMPÉTENCES TECHNIQUES</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <strong className="text-emerald-900 block font-bold mb-1 text-sm">Front-End & Frameworks JS :</strong>
                <span className="text-slate-700 leading-relaxed font-normal">
                  React, Next.js, Angular, JavaScript (ES6+), HTML5, CSS3, Bootstrap, Tailwind CSS, jQuery.
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <strong className="text-emerald-900 block font-bold mb-1 text-sm">Back-End & Frameworks PHP / Python / Java :</strong>
                <span className="text-slate-700 leading-relaxed font-normal">
                  Laravel, Symfony, FastAPI (Python), Django, Spring Boot, Node.js, PHP, APIs REST.
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <strong className="text-emerald-900 block font-bold mb-1 text-sm">Développement Mobile & Cross-Platform :</strong>
                <span className="text-slate-700 leading-relaxed font-normal">
                  Flutter, Ionic, iOS (Swift / App Store).
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <strong className="text-emerald-900 block font-bold mb-1 text-sm">E-Commerce & CMS :</strong>
                <span className="text-slate-700 leading-relaxed font-normal">
                  WordPress / WooCommerce, PrestaShop.
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 sm:col-span-2">
                <strong className="text-emerald-900 block font-bold mb-1 text-sm">DevOps & Outils :</strong>
                <span className="text-slate-700 leading-relaxed font-normal">
                  Git, GitHub, Création de packages Laravel, Gestion de serveurs web, Hébergement, Déploiement continu.
                </span>
              </div>
            </div>
          </div>

          {/* Réalisations et Projets Récents */}
          <div className="space-y-4">
            <h2 className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-slate-900 font-bold flex items-center gap-1.5 border-b border-slate-200 pb-1.5">
              <Package className="w-4 h-4 text-emerald-700" />
              <span>RÉALISATIONS ET PROJETS RÉCENTS</span>
            </h2>

            {/* Applications Mobiles, Packages & Plateformes Web Sur-Mesure */}
            <div className="space-y-2.5">
              <h3 className="text-xs font-mono uppercase tracking-wider text-amber-700 font-bold">
                ▸ Applications Mobiles, Packages & Plateformes Web Sur-Mesure
              </h3>

              <div className="space-y-2.5">
                <div className="p-3.5 rounded-xl bg-amber-50/40 border border-amber-200 text-sm space-y-1">
                  <div className="flex flex-wrap justify-between items-center gap-1">
                    <span className="font-bold text-slate-950">MoneyFusion Laravel Package — Package Open-Source Laravel</span>
                    <a href="https://packagist.org/packages/geonidas6/moneyfusion-laravel" target="_blank" rel="noreferrer" className="text-xs font-mono font-bold text-emerald-800 flex items-center gap-1 hover:underline">
                      <span>Packagist / GitHub</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <p className="text-slate-700 font-normal leading-relaxed text-xs sm:text-sm">
                    Conception et développement d'un package Laravel sur-mesure facilitant l'intégration et l'automatisation des paiements via l'API MoneyFusion pour les applications PHP/Laravel.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm space-y-1">
                  <div className="flex flex-wrap justify-between items-center gap-1">
                    <span className="font-bold text-slate-950">Miva — Plateforme Marketing Interactive & Chasses au Trésor</span>
                    <a href="https://miva.it-sefako.com" target="_blank" rel="noreferrer" className="text-xs font-mono font-bold text-emerald-800 flex items-center gap-1 hover:underline">
                      <span>miva.it-sefako.com</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <p className="text-slate-700 font-normal leading-relaxed text-xs sm:text-sm">
                    Développement d'une solution innovante de publicité géolocalisée et ludique permettant aux entreprises d'attirer des clients en boutique via des chasses au trésor, des indices interactifs, du scan de QR Codes et de la distribution de récompenses.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm space-y-1">
                  <div className="flex flex-wrap justify-between items-center gap-1">
                    <span className="font-bold text-slate-950">PetitNid App — Application iOS de Gestion de Garde Alternée</span>
                    <span className="text-xs font-mono font-bold text-blue-700 flex items-center gap-1">
                      <span>Sur l'App Store Apple</span>
                    </span>
                  </div>
                  <p className="text-slate-700 font-normal leading-relaxed text-xs sm:text-sm">
                    Conception et développement complet d'une application mobile publiée sur l'App Store destinée aux parents séparés/divorcés. Intégration d'outils d'organisation, de communication et de modules d'achats in-app / paiements sécurisés.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm space-y-1">
                  <div className="flex flex-wrap justify-between items-center gap-1">
                    <span className="font-bold text-slate-950">ZenAds — Plateforme de Publication d'Annonces</span>
                    <a href="https://zenads.fr" target="_blank" rel="noreferrer" className="text-xs font-mono font-bold text-emerald-800 flex items-center gap-1 hover:underline">
                      <span>zenads.fr</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <p className="text-slate-700 font-normal leading-relaxed text-xs sm:text-sm">
                    Conception et développement de A à Z avec Laravel d'un SaaS/application web complet de publication et de gestion d'annonces publicitaires.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm space-y-1">
                  <div className="flex flex-wrap justify-between items-center gap-1">
                    <span className="font-bold text-slate-950">Iramis & Delivery Iramis — Plateforme & Système de Gestion de Livraison</span>
                    <a href="https://iramis.com" target="_blank" rel="noreferrer" className="text-xs font-mono font-bold text-emerald-800 flex items-center gap-1 hover:underline">
                      <span>iramis.com | delivery.iramis.com</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <p className="text-slate-700 font-normal leading-relaxed text-xs sm:text-sm">
                    Développement d'un outil complet de gestion du pipeline de livraison pour une société logistique (suivi des colis, affectations, états des livraisons).
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm space-y-1">
                  <div className="flex flex-wrap justify-between items-center gap-1">
                    <span className="font-bold text-slate-950">IT Sefako — Site d'Entreprise & Portfolio</span>
                    <a href="https://it-sefako.com" target="_blank" rel="noreferrer" className="text-xs font-mono font-bold text-emerald-800 flex items-center gap-1 hover:underline">
                      <span>it-sefako.com</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <p className="text-slate-700 font-normal leading-relaxed text-xs sm:text-sm">
                    Conception et vitrine numérique présentant l'ensemble de mes services, projets et compétences informatiques.
                  </p>
                </div>
              </div>
            </div>

            {/* Sites Web & E-Commerce */}
            <div className="space-y-2.5 pt-2">
              <h3 className="text-xs font-mono uppercase tracking-wider text-amber-700 font-bold">
                ▸ Sites Web & E-Commerce
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="flex justify-between items-center">
                    <strong className="text-slate-950">JMO Transport</strong>
                    <a href="https://jmo-transport.com" target="_blank" rel="noreferrer" className="text-emerald-800 font-mono font-bold hover:underline">jmo-transport.com</a>
                  </div>
                  <p className="text-slate-600 mt-1">Création sur-mesure de A à Z d'un site WordPress complet pour entreprise de transport et logistique.</p>
                </div>

                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="flex justify-between items-center">
                    <strong className="text-slate-950">Transinbel</strong>
                    <a href="https://transinbel.eu" target="_blank" rel="noreferrer" className="text-emerald-800 font-mono font-bold hover:underline">transinbel.eu</a>
                  </div>
                  <p className="text-slate-600 mt-1">Création et mise en place du site vitrine d'entreprise de transport, logistique et livraison express.</p>
                </div>

                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="flex justify-between items-center">
                    <strong className="text-slate-950">Aux Bonnes Senteurs</strong>
                    <a href="https://aux-bonnes-senteurs.ch" target="_blank" rel="noreferrer" className="text-emerald-800 font-mono font-bold hover:underline">aux-bonnes-senteurs.ch</a>
                  </div>
                  <p className="text-slate-600 mt-1">Refonte globale et modernisation ergonomique d'une boutique e-commerce WordPress.</p>
                </div>

                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="flex justify-between items-center">
                    <strong className="text-slate-950">Éditions Tanibis</strong>
                    <a href="https://tanibis.net" target="_blank" rel="noreferrer" className="text-emerald-800 font-mono font-bold hover:underline">tanibis.net</a>
                  </div>
                  <p className="text-slate-600 mt-1">Refonte, optimisation de l'expérience utilisateur et améliorations fonctionnelles continues.</p>
                </div>

                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="flex justify-between items-center">
                    <strong className="text-slate-950">Alepia</strong>
                    <a href="https://alepia.com" target="_blank" rel="noreferrer" className="text-emerald-800 font-mono font-bold hover:underline">alepia.com</a>
                  </div>
                  <p className="text-slate-600 mt-1">Intervention technique sur boutique PrestaShop à fort trafic : diagnostic, bugs et optimisation.</p>
                </div>

                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="flex justify-between items-center">
                    <strong className="text-slate-950">Bad Sexy Girl</strong>
                    <a href="https://badsexygirl.fr" target="_blank" rel="noreferrer" className="text-emerald-800 font-mono font-bold hover:underline">badsexygirl.fr</a>
                  </div>
                  <p className="text-slate-600 mt-1">Diagnostic technique, correction de bugs, saisie de produits et optimisations e-commerce.</p>
                </div>

                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 sm:col-span-2">
                  <div className="flex justify-between items-center">
                    <strong className="text-slate-950">Transillan</strong>
                    <a href="https://transillan.com" target="_blank" rel="noreferrer" className="text-emerald-800 font-mono font-bold hover:underline">transillan.com</a>
                  </div>
                  <p className="text-slate-600 mt-1">Site vitrine d'entreprise et plateforme de services.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Expérience Professionnelle */}
          <div className="space-y-3">
            <h2 className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-slate-900 font-bold flex items-center gap-1.5 border-b border-slate-200 pb-1.5">
              <Briefcase className="w-4 h-4 text-emerald-700" />
              <span>EXPÉRIENCE PROFESSIONNELLE</span>
            </h2>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5">
              <div className="flex flex-wrap items-center justify-between text-sm">
                <div>
                  <span className="font-serif font-bold text-slate-950 text-base">Développeur Indépendant / Freelance</span>
                  <div className="text-xs sm:text-sm font-semibold text-emerald-800">
                    Codeur.com & Projets Clients Directs (Profil Codeur.com)
                  </div>
                </div>
                <span className="font-mono text-emerald-800 font-bold text-xs sm:text-sm">2017 – Présent</span>
              </div>

              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 pl-4 list-disc font-normal leading-relaxed">
                <li>Analyse des besoins des clients et rédaction de cahiers des charges.</li>
                <li>Développement sur-mesure de sites vitrines, boutiques e-commerce (WordPress, PrestaShop), applications web/mobiles (Laravel, iOS, Flutter) et packages d'intégration.</li>
                <li>Résolution de bugs complexes, refonte d'architectures existantes et optimisation des performances web.</li>
                <li>Maintenance corrective et évolutive des projets livrés.</li>
              </ul>
            </div>
          </div>

          {/* Formation & Open-Source */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Formation */}
            <div className="space-y-2">
              <h2 className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-slate-900 font-bold flex items-center gap-1.5 border-b border-slate-200 pb-1.5">
                <GraduationCap className="w-4 h-4 text-emerald-700" />
                <span>FORMATION</span>
              </h2>

              <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 text-sm space-y-1">
                <div className="font-bold text-slate-950">Bachelor of Computer Applications (BCA)</div>
                <div className="text-slate-600 font-medium">CIFOP — Lomé, Togo</div>
                <div className="font-mono text-emerald-800 font-bold text-xs">2015 – 2017</div>
              </div>
            </div>

            {/* Projets Personnels & Open Source */}
            <div className="space-y-2">
              <h2 className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-slate-900 font-bold flex items-center gap-1.5 border-b border-slate-200 pb-1.5">
                <Github className="w-4 h-4 text-emerald-700" />
                <span>PROJETS PERSONNELS & OPEN SOURCE</span>
              </h2>

              <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 text-sm space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-slate-950 font-mono">
                  <span>GitHub :</span>
                  <a href={PERSONAL_INFO.githubUrl} target="_blank" rel="noreferrer" className="text-emerald-800 hover:underline">
                    geonidas6
                  </a>
                </div>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Création de packages Laravel, contributions open-source et projets d'apprentissage continu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
