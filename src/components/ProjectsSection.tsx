import React, { useState, useMemo } from 'react';
import { 
  Briefcase, 
  ExternalLink, 
  Github, 
  Package, 
  Sparkles, 
  Star, 
  ArrowUpRight, 
  Smartphone, 
  Layers, 
  Globe, 
  CreditCard, 
  GraduationCap, 
  ShoppingBag, 
  Server,
  Info
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project, Language } from '../types';
import { ProjectModal } from './ProjectModal';

interface ProjectsSectionProps {
  lang: Language;
}

const iconComponents: Record<string, React.ElementType> = {
  Package,
  ShoppingBag,
  Smartphone,
  GraduationCap,
  Server,
  Layers
};

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ lang }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterTabs = [
    { id: 'all', label: { fr: 'Tous les projets', en: 'All Projects' } },
    { id: 'package', label: { fr: 'Open-Source & Packages', en: 'Open Source & Packages' } },
    { id: 'web', label: { fr: 'Web Full-Stack', en: 'Web Full-Stack' } },
    { id: 'mobile', label: { fr: 'Mobile (Flutter)', en: 'Mobile (Flutter)' } },
    { id: 'fintech', label: { fr: 'FinTech & Paiements', en: 'FinTech & Payments' } },
    { id: 'saas', label: { fr: 'SaaS & ERP', en: 'SaaS & ERP' } },
  ];

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return PROJECTS_DATA;
    return PROJECTS_DATA.filter((proj) => proj.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="py-24 bg-slate-50/70 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono tracking-[0.25em] uppercase font-bold">
            <Briefcase className="w-3.5 h-3.5 text-amber-600" />
            <span>{lang === 'fr' ? 'PORTFOLIO & RÉALISATIONS' : 'PROJECTS & REALIZATIONS'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-slate-950 tracking-tight">
            {lang === 'fr'
              ? 'Projets Professionnels & Contributions Open Source'
              : 'Professional Projects & Open-Source Contributions'}
          </h2>
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
            {lang === 'fr'
              ? 'Une sélection de mes réalisations les plus marquantes en développement backend, applications mobiles, intégrations de paiements et solutions SaaS.'
              : 'A curated selection of my core accomplishments in backend architectures, mobile apps, payment gateways, and scalable SaaS solutions.'}
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-mono whitespace-nowrap transition-all duration-150 uppercase tracking-wider ${
                  isActive
                    ? 'bg-emerald-800 text-white font-bold shadow-sm'
                    : 'bg-white text-slate-700 hover:text-slate-950 hover:bg-slate-100 border border-slate-200 shadow-sm font-medium'
                }`}
              >
                {tab.label[lang]}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const IconComp = iconComponents[project.iconName] || Layers;
            return (
              <div
                key={project.id}
                className="group relative rounded-2xl bg-white border border-slate-200/90 hover:border-emerald-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm"
              >
                {/* Visual Header Banner */}
                <div className={`h-40 w-full bg-slate-100/80 border-b border-slate-200/80 p-5 relative flex flex-col justify-between overflow-hidden`}>
                  {/* Subtle Grid overlay in banner */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-100 via-transparent to-transparent opacity-80" />

                  <div className="relative z-10 flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-white text-emerald-700 border border-slate-200 shadow-sm">
                      <IconComp className="w-5 h-5" />
                    </div>

                    <div className="flex items-center gap-2">
                      {project.featured && (
                        <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-amber-100 text-amber-950 flex items-center gap-1 border border-amber-300 uppercase tracking-wider">
                          <Star className="w-3 h-3 fill-amber-500 text-amber-600" />
                          <span>Featured</span>
                        </span>
                      )}
                      <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-white text-slate-700 border border-slate-200 font-semibold">
                        {project.year}
                      </span>
                    </div>
                  </div>

                  <div className="relative z-10">
                    <span className="text-xs font-mono text-emerald-800 uppercase tracking-[0.25em] font-bold">
                      {project.category}
                    </span>
                    <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-900 leading-snug group-hover:text-emerald-800 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3.5">
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed line-clamp-3 font-normal">
                      {project.description}
                    </p>

                    {/* Key Metric or Highlight Badge */}
                    {project.metrics && project.metrics.length > 0 && (
                      <div className="grid grid-cols-2 gap-2.5 pt-1">
                        {project.metrics.slice(0, 2).map((m, idx) => (
                          <div key={idx} className="p-2.5 rounded-xl bg-amber-50/50 border border-amber-200/60 text-center">
                            <div className="text-sm font-serif font-bold text-emerald-800">{m.value}</div>
                            <div className="text-xs uppercase tracking-wider text-slate-600 truncate font-semibold">{m.label}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tags.slice(0, 4).map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-100 text-slate-800 border border-slate-200 font-semibold"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="px-2 py-1 rounded-md text-xs font-mono text-slate-500 font-medium">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono font-bold text-emerald-800 hover:text-emerald-950 group/btn transition-colors"
                    >
                      <Info className="w-4 h-4 text-emerald-700" />
                      <span>{lang === 'fr' ? 'Détails & Architecture' : 'Details & Architecture'}</span>
                      <ArrowUpRight className="w-4 h-4 text-amber-600 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>

                    <div className="flex items-center gap-2">
                      {project.packageUrl && (
                        <a
                          href={project.packageUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-lg bg-slate-100 hover:bg-emerald-50 text-emerald-700 hover:text-emerald-900 transition-colors border border-slate-200 shadow-sm"
                          title="Voir sur Packagist"
                        >
                          <Package className="w-4 h-4" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 hover:text-slate-950 transition-colors border border-slate-200 shadow-sm"
                          title="Code source GitHub"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* GitHub Open Source Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1.5 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-slate-900 font-serif font-bold text-lg">
              <Github className="w-5 h-5 text-emerald-700" />
              <span>{lang === 'fr' ? 'Contribuer & Explorer sur GitHub' : 'Contribute & Explore on GitHub'}</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 font-normal">
              {lang === 'fr' 
                ? 'Consultez les commits, packages et codes sources complets sur mon compte GitHub officiel @geonidas6.'
                : 'Browse commits, packages, and full repositories on my official GitHub account @geonidas6.'}
            </p>
          </div>
          <a
            href="https://github.com/geonidas6"
            target="_blank"
            rel="noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-bold bg-emerald-800 text-white hover:bg-emerald-700 transition-colors shadow-sm"
          >
            <Github className="w-4 h-4" />
            <span>github.com/geonidas6</span>
            <ExternalLink className="w-3.5 h-3.5 ml-1 text-amber-300" />
          </a>
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        lang={lang}
      />
    </section>
  );
};
