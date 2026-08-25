import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  Github, 
  MapPin, 
  Phone, 
  MessageSquare, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  ExternalLink 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Language } from '../types';

interface ContactSectionProps {
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    projectType: 'web'
  });
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const emailSubject = encodeURIComponent(`[Contact Portfolio] ${formData.subject || formData.projectType} - ${formData.name}`);
    const emailBody = encodeURIComponent(
      `Nom: ${formData.name}\nEmail: ${formData.email}\nType de projet: ${formData.projectType}\n\nMessage:\n${formData.message}`
    );

    // Open mailto link
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${emailSubject}&body=${emailBody}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50/70 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono tracking-[0.25em] uppercase font-bold">
            <Mail className="w-3.5 h-3.5 text-amber-600" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-slate-950 tracking-tight">
            {lang === 'fr' ? 'Démarrons Votre Prochain Projet' : 'Let\'s Start Your Next Project'}
          </h2>
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
            {lang === 'fr'
              ? 'Une question, une mission freelance, une opportunité ou un besoin d\'architecture ? N\'hésitez pas à me contacter directement.'
              : 'Have a question, freelance mission, architecture challenge, or technical opportunity? Feel free to reach out.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Info Details (Left 5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 space-y-6 shadow-sm">
              <h3 className="text-2xl font-serif font-bold text-slate-900">
                {lang === 'fr' ? 'Coordonnées Directes' : 'Direct Channels'}
              </h3>

              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="p-3 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-slate-500 font-mono font-semibold">Email Personnel</div>
                    <div className="text-sm sm:text-base font-bold text-slate-900 font-mono truncate">{PERSONAL_INFO.email}</div>
                    <button
                      onClick={handleCopyEmail}
                      className="mt-1 flex items-center gap-1 text-xs sm:text-sm text-emerald-800 hover:text-emerald-950 transition-colors font-mono font-bold"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? 'Adresse copiée !' : 'Copier l\'adresse'}</span>
                    </button>
                  </div>
                </div>

                {/* GitHub */}
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-emerald-300 transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-white text-slate-800 border border-slate-200 group-hover:text-emerald-800 transition-colors">
                    <Github className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-slate-500 font-mono font-semibold">GitHub Profile</div>
                    <div className="text-sm sm:text-base font-bold text-slate-900 font-mono flex items-center gap-1.5">
                      <span>@{PERSONAL_INFO.username}</span>
                      <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-emerald-800" />
                    </div>
                    <div className="text-xs text-emerald-800 font-bold mt-0.5">{PERSONAL_INFO.githubRankTogo}</div>
                  </div>
                </a>

                {/* Location & Timezone */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="p-3 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-slate-500 font-mono font-semibold">Localisation</div>
                    <div className="text-sm sm:text-base font-bold text-slate-900">Lomé, Togo 🇹🇬</div>
                    <div className="text-xs text-slate-600 flex items-center gap-1.5 mt-0.5 font-medium">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>Fuseau horaire : GMT / UTC+0</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response SLA Note */}
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse shrink-0" />
                <span className="text-xs sm:text-sm text-emerald-950 font-semibold leading-normal">
                  {lang === 'fr' ? 'Disponibilité immédiate & Réponse garantie en moins de 24h.' : 'Immediate availability & guaranteed response within 24h.'}
                </span>
              </div>
            </div>
          </div>

          {/* Interactive Contact Form (Right 7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 space-y-6 shadow-sm">
              <h3 className="text-2xl font-serif font-bold text-slate-900">
                {lang === 'fr' ? 'Envoyer un Message' : 'Send a Message'}
              </h3>

              {submitted ? (
                <div className="p-6 rounded-xl bg-slate-50 border border-emerald-200 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-700 mx-auto" />
                  <h4 className="text-lg font-serif font-bold text-slate-900">
                    {lang === 'fr' ? 'Votre client de messagerie a été ouvert !' : 'Your email client has been opened!'}
                  </h4>
                  <p className="text-sm text-slate-700 max-w-md mx-auto">
                    {lang === 'fr'
                      ? 'Si votre application email ne s\'est pas lancée, vous pouvez directement m\'écrire à :'
                      : 'If your email app didn\'t launch automatically, please email me directly at:'}
                    <br />
                    <strong className="text-emerald-800 font-mono font-bold">{PERSONAL_INFO.email}</strong>
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-sm text-slate-600 hover:text-emerald-800 underline font-semibold"
                  >
                    {lang === 'fr' ? 'Renvoyer un autre message' : 'Send another message'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs sm:text-sm font-mono text-slate-700 font-bold">
                        {lang === 'fr' ? 'Votre Nom *' : 'Your Name *'}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ex: Jean Dupont"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 font-medium"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs sm:text-sm font-mono text-slate-700 font-bold">
                        {lang === 'fr' ? 'Votre Email *' : 'Your Email *'}
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jean.dupont@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs sm:text-sm font-mono text-slate-700 font-bold">
                        {lang === 'fr' ? 'Type de projet' : 'Project Type'}
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-emerald-600 font-medium"
                      >
                        <option value="Application Web (Laravel / React / Next.js)">Application Web Full-Stack</option>
                        <option value="Application Mobile (Flutter / Dart)">Application Mobile (Flutter)</option>
                        <option value="Intégration Paiement / FinTech">Intégration Paiement & FinTech</option>
                        <option value="Architecture Backend & API FastAPI">Backend & API / Microservices</option>
                        <option value="Autre Collaboration">Autre Opportunité</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs sm:text-sm font-mono text-slate-700 font-bold">
                        {lang === 'fr' ? 'Objet du message' : 'Subject'}
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder={lang === 'fr' ? 'Ex: Nouveau projet e-commerce' : 'Ex: New project inquiry'}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 font-medium"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs sm:text-sm font-mono text-slate-700 font-bold">
                      {lang === 'fr' ? 'Votre Message *' : 'Your Message *'}
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={
                        lang === 'fr'
                          ? 'Détaillez vos besoins, vos délais ou toute information utile pour amorcer notre collaboration...'
                          : 'Describe your goals, timeline, or any technical questions you have...'
                      }
                      className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 font-medium leading-relaxed"
                    />
                  </div>

                  <button
                    type="submit"
                    id="contact-form-submit-btn"
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-full font-bold text-white bg-emerald-800 hover:bg-emerald-700 shadow-md transition-all text-xs sm:text-sm uppercase tracking-wider"
                  >
                    <Send className="w-4 h-4 text-amber-300" />
                    <span>{lang === 'fr' ? 'Envoyer mon Message' : 'Send Message'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
