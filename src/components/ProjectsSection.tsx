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
  Layers,
  Globe,
  Sparkles
};

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ lang }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterTabs = [
    { id: 'all', label: { fr: 'Tous les projets (13)', en: 'All Projects (13)' } },
    { id: 'package', label: { fr: 'Open-Source & Packages', en: 'Open Source & Packages' } },
    { id: 'mobile', label: { fr: 'Mobile & iOS App Store', en: 'Mobile & iOS App Store' } },
    { id: 'saas', label: { fr: 'Plateformes & SaaS', en: 'Platforms & SaaS' } },
    { id: 'ecommerce', label: { fr: 'E-Commerce & CMS', en: 'E-Commerce & CMS' } },
    { id: 'web', label: { fr: 'Sites Vitrines & Web', en: 'Showcase & Web' } },
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
            <span>{lang === 'fr' ? 'RÉALISATIONS ET PROJETS RÉCENTS' : 'RECENT PROJECTS & REALIZATIONS'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-slate-950 tracking-tight">
            {lang === 'fr'
              ? 'Applications Mobiles, Packages & Solutions Sur-Mesure'
              : 'Mobile Apps, Packages & Custom Web Platforms'}
          </h2>
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
            {lang === 'fr'
              ? 'Découvrez les projets conçus et déployés par Patrice Atcu : applications sur les stores, SaaS complets sous Laravel, package open-source MoneyFusion et boutiques e-commerce à forte audience.'
              : 'Explore software engineered and deployed by Patrice Atcu: App Store apps, Laravel SaaS platforms, the MoneyFusion open-source package, and high-traffic e-commerce solutions.'}
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
                    : 'bg-white text-slate-700 hover:text-emerald-950 hover:bg-slate-100 border border-slate-200 shadow-sm font-medium'
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
                <div className="h-36 w-full bg-slate-50 border-b border-slate-200/80 p-5 relative flex flex-col justify-between overflow-hidden">
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-white text-emerald-800 border border-slate-200 shadow-sm">
                      <IconComp className="w-5 h-5" />
                    </div>

                    <div className="flex items-center gap-2">
                      {project.featured && (
                        <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-amber-50 text-amber-900 flex items-center gap-1 border border-amber-300 uppercase tracking-wider">
                          <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                          <span>Pharesi</span>
                        </span>
                      )}
                      <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-white text-slate-700 border border-slate-200 font-semibold">
                        {project.year}
                      </span>
                    </div>
                  </div>

                  <div className="relative z-10">
                    <span className="text-[10px] font-mono text-emerald-800 uppercase tracking-[0.25em] font-bold">
                      {project.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-serif font-bold text-slate-900 leading-snug group-hover:text-emerald-800 transition-colors truncate">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="text-xs font-semibold text-emerald-900 font-mono">
                      {project.subtitle}
                    </div>

                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed line-clamp-3 font-normal">
                      {project.description}
                    </p>

                    {/* Metrics Banner if available */}
                    {project.metrics && project.metrics.length > 0 && (
                      <div className="grid grid-cols-3 gap-2 pt-1">
                        {project.metrics.map((m, idx) => (
                          <div key={idx} className="p-2 rounded-lg bg-slate-50 border border-slate-100 text-center">
                            <div className="text-xs font-serif font-bold text-emerald-800 truncate">{m.value}</div>
                            <div className="text-[10px] uppercase tracking-wider text-slate-500 truncate font-semibold">{m.label}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tags.slice(0, 4).map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-100 text-slate-800 border border-slate-200 font-semibold"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="px-2 py-1 rounded-md text-[11px] font-mono text-slate-500 font-medium">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-800 hover:text-emerald-950 group/btn transition-colors"
                    >
                      <Info className="w-3.5 h-3.5" />
                      <span>{lang === 'fr' ? 'Détails du projet' : 'Project details'}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>

                    <div className="flex items-center gap-1.5">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 transition-colors border border-emerald-200 shadow-sm"
                          title={`Visiter ${project.liveUrl}`}
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {project.packageUrl && (
                        <a
                          href={project.packageUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1.5 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-800 transition-colors border border-amber-200 shadow-sm"
                          title="Voir sur Packagist"
                        >
                          <Package className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 hover:text-slate-950 transition-colors border border-slate-200 shadow-sm"
                          title="Code source GitHub"
                        >
                          <Github className="w-3.5 h-3.5" />
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
              <span>{lang === 'fr' ? 'Contributions & Packages sur GitHub' : 'Contributions & Packages on GitHub'}</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 font-light">
              {lang === 'fr' 
                ? 'Consultez les commits, le package MoneyFusion et les dépôts open-source complets sur le profil officiel @geonidas6.'
                : 'Browse commits, the MoneyFusion package, and full open-source repositories on my official GitHub account @geonidas6.'}
            </p>
          </div>
          <a
            href="https://github.com/geonidas6"
            target="_blank"
            rel="noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-bold bg-slate-900 text-white hover:bg-emerald-800 transition-colors shadow-sm"
          >
            <Github className="w-4 h-4 text-emerald-400" />
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
