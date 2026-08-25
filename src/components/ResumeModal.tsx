import React from 'react';
import { 
  X, 
  Printer, 
  Download, 
  Mail, 
  Github, 
  MapPin, 
  Globe, 
  Briefcase, 
  GraduationCap, 
  Code, 
  Package, 
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { PERSONAL_INFO, PROJECTS_DATA, SKILLS_CATEGORIES, EXPERIENCE_DATA, EDUCATION_DATA } from '../data/portfolioData';
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white border border-slate-200 text-slate-900 print:bg-white print:text-slate-900 rounded-2xl shadow-2xl p-6 sm:p-10 my-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar (Hidden on print) */}
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-200 print:hidden no-print">
          <div className="flex items-center gap-2">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-mono tracking-widest uppercase bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold">
              Curriculum Vitae • {PERSONAL_INFO.shortName} 🇹🇬
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
        <div className="space-y-8 print:p-0">
          {/* Header */}
          <div className="border-b border-slate-200 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 tracking-tight">
                  {PERSONAL_INFO.fullName}
                </h1>
                <p className="text-base sm:text-lg font-bold text-emerald-800 mt-1">
                  {PERSONAL_INFO.title[lang]}
                </p>
              </div>

              <div className="text-xs sm:text-sm text-slate-700 space-y-1.5 font-mono sm:text-right font-medium">
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Mail className="w-4 h-4 text-emerald-700" />
                  <span>{PERSONAL_INFO.email}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Github className="w-4 h-4 text-slate-800" />
                  <span>github.com/{PERSONAL_INFO.username}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <MapPin className="w-4 h-4 text-emerald-700" />
                  <span>Lomé, Togo 🇹🇬 (Remote Worldwide)</span>
                </div>
              </div>
            </div>

            {/* Profile Summary */}
            <p className="text-sm sm:text-base text-slate-800 leading-relaxed mt-4 pt-4 border-t border-slate-100 font-normal">
              {PERSONAL_INFO.bio[lang].split('\n\n')[0]}
            </p>
          </div>

          {/* Key Competencies Matrix */}
          <div className="space-y-3">
            <h2 className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-slate-800 font-bold flex items-center gap-1.5 border-b border-slate-200 pb-1.5">
              <Code className="w-4 h-4 text-emerald-700" />
              <span>Compétences Techniques & Technologies</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-800">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <strong className="text-slate-950 block mb-1 text-base">Backend & APIs:</strong>
                <span className="font-normal text-slate-700">PHP (Laravel, Symfony), Python (FastAPI, Django), Node.js/Express, RESTful APIs, Webhooks HMAC, Microservices.</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <strong className="text-slate-950 block mb-1 text-base">Frontend & Mobile:</strong>
                <span className="font-normal text-slate-700">React, Next.js, TypeScript, Flutter (Dart), React Native, Tailwind CSS, Responsive & Accessible UI.</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <strong className="text-slate-950 block mb-1 text-base">Bases de Données & Cache:</strong>
                <span className="font-normal text-slate-700">PostgreSQL, MySQL, MariaDB, Redis, Eloquent ORM, Doctrine, Requêtes SQL optimisées.</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <strong className="text-slate-950 block mb-1 text-base">DevOps, FinTech & Outils:</strong>
                <span className="font-normal text-slate-700">Docker, AWS, Git/GitHub Actions CI/CD, MoneyFusion API (Auteur Package Laravel), Mobile Money, Stripe.</span>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-4">
            <h2 className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-slate-800 font-bold flex items-center gap-1.5 border-b border-slate-200 pb-1.5">
              <Briefcase className="w-4 h-4 text-emerald-700" />
              <span>Expériences Professionnelles</span>
            </h2>

            <div className="space-y-4">
              {EXPERIENCE_DATA.map((exp) => (
                <div key={exp.id} className="space-y-2 p-4 rounded-xl bg-slate-50 border border-slate-200 print:bg-transparent print:border-none print:p-0">
                  <div className="flex flex-wrap items-center justify-between text-sm">
                    <span className="font-serif font-bold text-slate-950 text-base">{exp.role[lang]}</span>
                    <span className="font-mono text-emerald-800 font-bold">{exp.period}</span>
                  </div>
                  <div className="text-sm font-semibold text-slate-600">
                    {exp.company} — {exp.location} ({exp.type[lang]})
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed font-normal">
                    {exp.description[lang]}
                  </p>
                  <ul className="space-y-1.5 text-sm text-slate-700 pl-4 list-disc font-normal">
                    {exp.achievements[lang].map((ach, idx) => (
                      <li key={idx}>{ach}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Open Source Highlight */}
          <div className="space-y-3">
            <h2 className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-slate-800 font-bold flex items-center gap-1.5 border-b border-slate-200 pb-1.5">
              <Package className="w-4 h-4 text-emerald-700" />
              <span>Contributions Open Source & Packages</span>
            </h2>

            <div className="p-4 rounded-xl bg-amber-50/50 border border-amber-200 text-sm space-y-1.5">
              <div className="flex justify-between items-center">
                <span className="font-bold text-slate-950 text-base">geonidas6/moneyfusion-laravel</span>
                <span className="font-mono text-emerald-800 font-bold text-xs sm:text-sm">1.2k+ Downloads • PHP / Laravel</span>
              </div>
              <p className="text-slate-700 font-normal leading-relaxed">
                Package Laravel pour automatiser l'intégration de la passerelle de paiement MoneyFusion, validation sécurisée des signatures et gestion des webhooks transactionnels.
              </p>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-slate-800 font-bold flex items-center gap-1.5 border-b border-slate-200 pb-1.5">
              <GraduationCap className="w-4 h-4 text-emerald-700" />
              <span>Formation & Diplômes</span>
            </h2>

            <div className="space-y-2 text-sm">
              {EDUCATION_DATA.map((edu) => (
                <div key={edu.id} className="flex justify-between items-start p-3.5 rounded-lg bg-slate-50 border border-slate-200 print:bg-transparent print:border-none print:p-0">
                  <div>
                    <div className="font-bold text-slate-950 text-base">{edu.degree[lang]}</div>
                    <div className="text-slate-600 font-medium">{edu.institution} — {edu.location}</div>
                  </div>
                  <span className="font-mono text-emerald-800 font-bold">{edu.year}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
