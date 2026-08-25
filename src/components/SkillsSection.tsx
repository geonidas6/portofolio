import React, { useState, useMemo } from 'react';
import { 
  Server, 
  Layout, 
  Smartphone, 
  Database, 
  Cloud, 
  CreditCard, 
  Search, 
  Check, 
  Sparkles, 
  Flame, 
  Code2, 
  Layers 
} from 'lucide-react';
import { SKILLS_CATEGORIES } from '../data/portfolioData';
import { Language } from '../types';

interface SkillsSectionProps {
  lang: Language;
}

const iconMap: Record<string, React.ElementType> = {
  Server,
  Layout,
  Smartphone,
  Database,
  Cloud,
  CreditCard
};

export const SkillsSection: React.FC<SkillsSectionProps> = ({ lang }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredCategories = useMemo(() => {
    return SKILLS_CATEGORIES.map((cat) => {
      const filteredSkills = cat.skills.filter((skill) => {
        const matchesCategory = activeCategory === 'all' || cat.id === activeCategory;
        const matchesSearch =
          searchQuery.trim() === '' ||
          skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          skill.description[lang].toLowerCase().includes(searchQuery.toLowerCase()) ||
          (skill.popularUse && skill.popularUse.toLowerCase().includes(searchQuery.toLowerCase()));

        return matchesCategory && matchesSearch;
      });

      return {
        ...cat,
        skills: filteredSkills
      };
    }).filter((cat) => cat.skills.length > 0);
  }, [activeCategory, searchQuery, lang]);

  const totalSkillsCount = useMemo(() => {
    return SKILLS_CATEGORIES.reduce((acc, cat) => acc + cat.skills.length, 0);
  }, []);

  return (
    <section id="skills" className="py-24 bg-white border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono tracking-[0.25em] uppercase font-bold">
            <Code2 className="w-3.5 h-3.5" />
            <span>{lang === 'fr' ? 'ARSENAL TECHNIQUE' : 'TECHNICAL STACK'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-slate-950 tracking-tight">
            {lang === 'fr'
              ? 'Compétences Techniques & Maîtrise des Outils'
              : 'Technical Skills & Tool Mastery'}
          </h2>
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
            {lang === 'fr'
              ? 'Une panoplie complète de technologies modernes pour concevoir des architectures robustes du backend au frontend jusqu\'aux applications mobiles.'
              : 'A comprehensive modern stack to design robust architectures from backend to frontend and mobile platforms.'}
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-mono transition-all uppercase tracking-wider ${
                activeCategory === 'all'
                  ? 'bg-slate-900 text-white font-bold shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:text-slate-950 hover:bg-slate-200 border border-slate-200 font-medium'
              }`}
            >
              {lang === 'fr' ? 'Tous' : 'All'} ({totalSkillsCount})
            </button>
            {SKILLS_CATEGORIES.map((cat) => {
              const IconComponent = iconMap[cat.icon] || Layers;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-mono transition-all whitespace-nowrap uppercase tracking-wider ${
                    isActive
                      ? 'bg-slate-900 text-white font-bold shadow-sm'
                      : 'bg-slate-100 text-slate-700 hover:text-slate-950 hover:bg-slate-200 border border-slate-200 font-medium'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{cat.title[lang]}</span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={lang === 'fr' ? 'Rechercher une technologie...' : 'Search skill or stack...'}
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-slate-100 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 transition-colors font-medium"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-slate-400 hover:text-slate-700 font-bold"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Skills Grid by Category */}
        <div className="space-y-8">
          {filteredCategories.length === 0 ? (
            <div className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-200">
              <p className="text-slate-600 text-base font-medium">
                {lang === 'fr' ? 'Aucune compétence trouvée pour cette recherche.' : 'No skills found matching your search.'}
              </p>
            </div>
          ) : (
            filteredCategories.map((category) => {
              const CategoryIcon = iconMap[category.icon] || Server;
              return (
                <div key={category.id} className="space-y-4">
                  {activeCategory === 'all' && (
                    <div className="flex items-center gap-2 text-slate-900 font-serif font-bold text-xl border-b border-slate-200 pb-2">
                      <CategoryIcon className="w-5 h-5 text-blue-600" />
                      <span>{category.title[lang]}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                    {category.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className={`p-6 rounded-2xl border transition-all duration-200 relative group flex flex-col justify-between ${
                          skill.highlight
                            ? 'bg-blue-50/40 border-blue-200/90 shadow-sm'
                            : 'bg-white border-slate-200/90 hover:border-slate-300 hover:shadow-md'
                        }`}
                      >
                        {skill.highlight && (
                          <div className="absolute top-4 right-4 flex items-center gap-1.5 text-xs font-mono text-amber-900 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 uppercase tracking-wider font-bold">
                            <Flame className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
                            <span>Top Expertise</span>
                          </div>
                        )}

                        <div className="space-y-3">
                          <div className="flex items-center justify-between pr-28">
                            <h4 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                              {skill.name}
                            </h4>
                          </div>

                          {/* Level Progress Bar */}
                          <div className="space-y-1.5">
                            <div className="flex justify-between text-sm font-mono text-slate-600">
                              <span>{lang === 'fr' ? 'Expérience' : 'Experience'}: <strong className="text-slate-900 font-bold">{skill.experience}</strong></span>
                              <span className="text-blue-700 font-bold">{skill.level}%</span>
                            </div>
                            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full transition-all duration-500"
                                style={{ width: `${skill.level}%` }}
                              />
                            </div>
                          </div>

                          <p className="text-sm sm:text-base text-slate-700 leading-relaxed pt-1 font-normal">
                            {skill.description[lang]}
                          </p>
                        </div>

                        {skill.popularUse && (
                          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs sm:text-sm text-slate-600 font-mono">
                            <span className="text-blue-700 font-bold">Stack:</span>
                            <span className="truncate text-slate-800 font-semibold">{skill.popularUse}</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};
