import React from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Award, 
  Star, 
  Quote, 
  Sparkles, 
  CheckCircle2 
} from 'lucide-react';
import { EXPERIENCE_DATA, EDUCATION_DATA, TESTIMONIALS_DATA } from '../data/portfolioData';
import { Language } from '../types';

interface ExperienceSectionProps {
  lang: Language;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ lang }) => {
  return (
    <section id="experience" className="py-24 bg-white border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-[10px] font-mono tracking-[0.25em] uppercase font-semibold">
            <Award className="w-3 h-3" />
            <span>{lang === 'fr' ? 'PARCOURS & EXPÉRIENCES' : 'CAREER & EXPERIENCE'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-slate-950 tracking-tight">
            {lang === 'fr'
              ? 'Expérience Professionnelle & Éducation'
              : 'Professional Experience & Education'}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
            {lang === 'fr'
              ? 'Un parcours guidé par la passion du code propre, l\'ingénierie logicielle rigoureuse et la résolution de défis concrets.'
              : 'A career driven by clean code craftsmanship, rigorous software engineering, and solving real-world challenges.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Work Experience Timeline (Left 7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-serif font-bold text-slate-900 flex items-center gap-2 mb-6">
              <Briefcase className="w-5 h-5 text-blue-600" />
              <span>{lang === 'fr' ? 'Expériences Professionnelles' : 'Work Experience'}</span>
            </h3>

            <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-px before:bg-slate-200">
              {EXPERIENCE_DATA.map((exp) => (
                <div key={exp.id} className="relative pl-9 group">
                  {/* Timeline Dot */}
                  <div className="absolute left-2 top-1.5 w-3.5 h-3.5 rounded-full bg-white border-2 border-blue-600 group-hover:bg-blue-600 transition-colors shadow-sm" />

                  <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-300 transition-all space-y-3 shadow-sm hover:shadow-md">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-blue-50 text-blue-700 border border-blue-200 tracking-wider">
                        {exp.period}
                      </span>
                      <span className="text-xs text-slate-500 font-mono">
                        {exp.type[lang]}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-base font-serif font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {exp.role[lang]}
                      </h4>
                      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mt-0.5 font-medium">
                        <span className="text-slate-800 font-semibold">{exp.company}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1 font-mono text-[11px] text-slate-500">
                          <MapPin className="w-3 h-3 text-slate-400" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                      {exp.description[lang]}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-1.5 pt-2">
                      {exp.achievements[lang].map((ach, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 mt-0.5 shrink-0" />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technologies Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-slate-100 text-slate-700 border border-slate-200 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Testimonials (Right 5 cols) */}
          <div className="lg:col-span-5 space-y-10">
            {/* Education */}
            <div className="space-y-4">
              <h3 className="text-xl font-serif font-bold text-slate-900 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-blue-600" />
                <span>{lang === 'fr' ? 'Formation & Certifications' : 'Education & Certifications'}</span>
              </h3>

              <div className="space-y-3">
                {EDUCATION_DATA.map((edu) => (
                  <div
                    key={edu.id}
                    className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-2 shadow-sm"
                  >
                    <div className="flex justify-between items-center text-xs font-mono text-blue-700 font-bold">
                      <span>{edu.institution}</span>
                      <span className="text-slate-500 font-normal">{edu.year}</span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900">
                      {edu.degree[lang]}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-light">
                      {edu.description[lang]}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials */}
            <div className="space-y-4">
              <h3 className="text-xl font-serif font-bold text-slate-900 flex items-center gap-2">
                <Quote className="w-5 h-5 text-blue-600" />
                <span>{lang === 'fr' ? 'Recommandations & Retours' : 'Recommendations'}</span>
              </h3>

              <div className="space-y-3">
                {TESTIMONIALS_DATA.map((t) => (
                  <div
                    key={t.id}
                    className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3 relative overflow-hidden shadow-sm"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center font-bold text-xs text-blue-700 font-mono">
                          {t.avatarInitial}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900">{t.author}</div>
                          <div className="text-[11px] text-slate-500">{t.company}</div>
                        </div>
                      </div>

                      <div className="flex text-amber-400">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 italic leading-relaxed font-light">
                      "{t.content[lang]}"
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
