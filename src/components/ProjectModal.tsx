import React from 'react';
import { 
  X, 
  Github, 
  ExternalLink, 
  Package, 
  CheckCircle2, 
  Layers, 
  Calendar, 
  User, 
  Star, 
  Cpu, 
  ShieldCheck, 
  BarChart3 
} from 'lucide-react';
import { Project, Language } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  lang: Language;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, lang }) => {
  if (!project) return null;

  return (
    <div
      id="project-detail-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6 my-8 text-slate-900 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-project-modal-btn"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors border border-slate-200"
          aria-label="Fermer la modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase bg-emerald-50 text-emerald-800 border border-emerald-200 tracking-wider">
              {project.category.toUpperCase()}
            </span>
            {project.featured && (
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-amber-100 text-amber-950 font-bold flex items-center gap-1 uppercase tracking-wider border border-amber-300">
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-600" />
                <span>Featured</span>
              </span>
            )}
            <span className="text-xs sm:text-sm text-slate-600 font-mono font-semibold flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-emerald-700" />
              {project.year}
            </span>
          </div>

          <h3 className="text-2xl sm:text-4xl font-serif font-bold text-slate-950">
            {project.title}
          </h3>
          <p className="text-base font-semibold text-emerald-800">
            {project.subtitle}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-md text-xs sm:text-sm font-mono bg-slate-100 text-slate-800 border border-slate-200 font-semibold"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Full Description */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-emerald-800 font-bold">
            {lang === 'fr' ? 'Présentation & Contexte' : 'Overview & Context'}
          </h4>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed bg-slate-50 p-5 rounded-xl border border-slate-200/80 font-normal">
            {project.fullDescription}
          </p>
        </div>

        {/* Metrics Grid */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-emerald-800 font-bold flex items-center gap-1.5">
              <BarChart3 className="w-4 h-4 text-emerald-700" />
              <span>{lang === 'fr' ? 'Impact & Métriques Clés' : 'Impact & Key Metrics'}</span>
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-amber-50/50 border border-amber-200 text-center">
                  <div className="text-xl font-serif font-bold text-emerald-800">{metric.value}</div>
                  <div className="text-xs uppercase tracking-wider text-slate-600 font-semibold mt-0.5">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Highlights & Solved Challenges */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-emerald-800 font-bold flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>{lang === 'fr' ? 'Fonctionnalités & Réalisations Techniques' : 'Key Features & Engineering Highlights'}</span>
          </h4>
          <ul className="space-y-2.5 text-sm sm:text-base text-slate-800">
            {project.highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-lg border border-slate-200/80">
                <span className="w-2 h-2 rounded-full bg-emerald-600 mt-2 shrink-0" />
                <span className="leading-relaxed">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Architecture Details */}
        {project.architecture && project.architecture.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-emerald-800 font-bold flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-emerald-700" />
              <span>{lang === 'fr' ? 'Choix d\'Architecture & Conception' : 'Architecture & Design Choices'}</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
              {project.architecture.map((arch, idx) => (
                <li key={idx} className="flex items-center gap-2 font-mono bg-slate-50/60 p-2 rounded-md">
                  <span className="text-emerald-700 font-bold">▹</span>
                  <span>{arch}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Role and Actions */}
        <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-slate-600 font-mono">
            <span className="text-slate-500">Rôle : </span>
            <span className="text-slate-900 font-bold">{project.role}</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            {project.packageUrl && (
              <a
                href={project.packageUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full text-xs sm:text-sm font-mono font-bold bg-emerald-800 hover:bg-emerald-700 text-white transition-colors shadow-sm"
              >
                <Package className="w-4 h-4 text-amber-300" />
                <span>Packagist</span>
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-mono font-medium bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-200 transition-colors shadow-sm"
              >
                <Github className="w-4 h-4" />
                <span>Code Source</span>
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-mono font-bold bg-emerald-800 hover:bg-emerald-700 text-white transition-colors shadow-sm"
              >
                <ExternalLink className="w-4 h-4 text-amber-300" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
