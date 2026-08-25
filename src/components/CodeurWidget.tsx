import React, { useEffect } from 'react';
import { ShieldCheck, Star, ExternalLink, Award, CheckCircle } from 'lucide-react';
import { Language } from '../types';

interface CodeurWidgetProps {
  lang: Language;
}

export const CodeurWidget: React.FC<CodeurWidgetProps> = ({ lang }) => {
  useEffect(() => {
    // Check if script is already present
    const existingScript = document.getElementById('codeur-widget-script');
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'codeur-widget-script';
      script.src = 'https://api.codeur.com/widgets/profile.js?k=D4ZZGH0CoTeU7O7A';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="w-full rounded-2xl bg-white border border-slate-200/90 shadow-md p-6 sm:p-7 space-y-4 hover:shadow-lg transition-all duration-300">
      {/* Widget Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-700 shadow-sm shrink-0">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">
              {lang === 'fr' ? 'Profil Freelance & Tiers de Confiance' : 'Freelance Platform & Trusted Partner'}
            </div>
            <h4 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span>Codeur.com</span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Profil Vérifié</span>
              </span>
            </h4>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://www.codeur.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-mono font-bold text-blue-700 hover:text-white bg-blue-50 hover:bg-blue-600 border border-blue-200 transition-all shadow-sm"
          >
            <span>{lang === 'fr' ? 'Consulter le profil Codeur.com' : 'View on Codeur.com'}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Codeur.com Official Dynamic Widget Container */}
      <div className="min-h-[90px] flex items-center justify-center p-4 rounded-xl bg-slate-50/80 border border-slate-100 w-full">
        <div
          data-width="100%"
          data-layout="activity-description-rating-tags"
          className="codeur-profile-widget w-full [&_iframe]:!w-full"
        >
          {/* Fallback info while widget loads or if external script is blocked */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-700 p-2 w-full">
            <div className="space-y-1.5 text-center md:text-left">
              <div className="font-bold text-slate-900 text-base sm:text-lg flex items-center justify-center md:justify-start gap-2">
                <span>AKOTSE Kokou Patrice Edem</span>
                <span className="text-xs font-mono text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-200">
                  Développeur Full-Stack Web & Mobile
                </span>
              </div>
              <div className="text-xs sm:text-sm text-slate-600 font-mono">
                Prestataire certifié disponible pour missions et projets d'ingénierie logicielle
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <div className="flex items-center gap-1.5 bg-white px-4 py-2 rounded-xl border border-slate-200 text-amber-600 font-mono font-bold text-xs sm:text-sm shadow-sm">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="text-slate-800">Prestataire Recommandé</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-xs sm:text-sm text-slate-600 flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-1 font-medium">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Garantie de livraison, facturation conforme & contractualisation sécurisée</span>
        </div>
        <span className="font-mono text-slate-500 text-xs">Identifiant Codeur : D4ZZGH0CoTeU7O7A</span>
      </div>
    </div>
  );
};
