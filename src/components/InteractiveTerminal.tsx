import React, { useState, useRef, useEffect } from 'react';
import { 
  Terminal as TerminalIcon, 
  CornerDownLeft, 
  ExternalLink,
  Github,
  Globe,
  Sparkles,
  Package,
  Smartphone
} from 'lucide-react';
import { PERSONAL_INFO, PROJECTS_DATA, TERMINAL_COMMANDS_HELP } from '../data/portfolioData';
import { Language } from '../types';

interface InteractiveTerminalProps {
  lang: Language;
  onOpenResume: () => void;
}

interface CommandHistoryItem {
  command: string;
  output: React.ReactNode;
}

export const InteractiveTerminal: React.FC<InteractiveTerminalProps> = ({ lang, onOpenResume }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandHistoryItem[]>([
    {
      command: 'welcome',
      output: (
        <div className="space-y-1 text-slate-300">
          <p className="text-emerald-400 font-bold">
            Console Développeur Patrice Atcu — Portfolio Shell v2.4 (Lomé, Togo 🇹🇬)
          </p>
          <p className="text-slate-400 text-xs">
            Tapez <span className="text-amber-300 font-bold font-mono">help</span> pour afficher la liste des commandes disponibles ou testez <span className="text-amber-300 font-bold font-mono">about</span>, <span className="text-amber-300 font-bold font-mono">projects</span>, <span className="text-amber-300 font-bold font-mono">package</span>, <span className="text-amber-300 font-bold font-mono">codeur</span>.
          </p>
        </div>
      )
    }
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const handleRunCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim();
    if (!trimmed) return;

    const lower = trimmed.toLowerCase();
    let response: React.ReactNode = null;

    switch (lower) {
      case 'help':
        response = (
          <div className="space-y-1.5 py-1">
            <p className="text-amber-300 font-bold">Commandes disponibles :</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-xs">
              {TERMINAL_COMMANDS_HELP.map((item, idx) => (
                <div key={idx} className="flex items-baseline gap-2">
                  <span className="text-emerald-400 font-mono font-semibold w-24 shrink-0">
                    {item.cmd}
                  </span>
                  <span className="text-slate-300 font-sans">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case 'about':
      case 'whoami':
        response = (
          <div className="space-y-2 py-1">
            <p className="text-white font-bold">{PERSONAL_INFO.fullName} (@{PERSONAL_INFO.username}) 🇹🇬</p>
            <p className="text-amber-300">{PERSONAL_INFO.title[lang]}</p>
            <p className="text-slate-400 text-xs">{PERSONAL_INFO.location}</p>
            <p className="text-slate-300 text-xs leading-relaxed">{PERSONAL_INFO.tagline[lang]}</p>
          </div>
        );
        break;

      case 'skills':
        response = (
          <div className="space-y-2 py-1 text-xs">
            <p className="text-amber-300 font-bold">Compétences Techniques & Frameworks :</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-300">
              <div>
                <span className="text-emerald-400 font-semibold block">Front-End JS :</span>
                React, Next.js, Angular, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Bootstrap, jQuery.
              </div>
              <div>
                <span className="text-emerald-400 font-semibold block">Back-End (PHP / Python / Java) :</span>
                Laravel, Symfony, FastAPI (Python), Django, Spring Boot, Node.js, PHP, APIs REST.
              </div>
              <div>
                <span className="text-amber-300 font-semibold block">Mobile & Cross-Platform :</span>
                Flutter (Dart), Ionic, iOS & Android (Swift / App Store & Google Play).
              </div>
              <div>
                <span className="text-amber-300 font-semibold block">E-Commerce & CMS :</span>
                WordPress / WooCommerce, PrestaShop (Boutiques fort trafic).
              </div>
              <div className="sm:col-span-2">
                <span className="text-slate-200 font-semibold block">DevOps & Outils :</span>
                Git, GitHub, Création de packages Laravel, Serveurs web Linux/Nginx/Apache, Déploiement continu.
              </div>
            </div>
          </div>
        );
        break;

      case 'projects':
        response = (
          <div className="space-y-1.5 py-1 text-xs">
            <p className="text-amber-300 font-bold">Réalisations & Projets Récents :</p>
            <div className="space-y-1 text-slate-300">
              {PROJECTS_DATA.map((p) => (
                <div key={p.id} className="flex flex-col">
                  <span className="text-emerald-400 font-bold">▹ {p.title} ({p.year})</span>
                  <span className="text-slate-400 pl-4 text-[11px]">{p.subtitle}</span>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case 'package':
      case 'moneyfusion':
        response = (
          <div className="space-y-1.5 py-1 text-xs bg-slate-900 p-3 rounded-lg border border-emerald-900/60">
            <p className="text-amber-300 font-bold">📦 Package Open-Source : geonidas6/moneyfusion-laravel</p>
            <p className="text-slate-300">
              Package Laravel pour intégrer la passerelle de paiement MoneyFusion (paiements sécurisés, checkouts, webhooks).
            </p>
            <p className="text-emerald-400 font-mono">composer require geonidas6/moneyfusion-laravel</p>
            <div className="flex gap-4 pt-1">
              <a href="https://packagist.org/packages/geonidas6/moneyfusion-laravel" target="_blank" rel="noreferrer" className="text-amber-300 underline font-mono">Packagist</a>
              <a href="https://github.com/geonidas6/moneyfusion-laravel" target="_blank" rel="noreferrer" className="text-emerald-400 underline font-mono">GitHub</a>
            </div>
          </div>
        );
        break;

      case 'ios':
      case 'android':
      case 'petitnid':
        response = (
          <div className="space-y-2 py-1 text-xs bg-slate-900 p-3.5 rounded-lg border border-blue-900/60">
            <p className="text-blue-400 font-bold">📱 PetitNid App — Gestion de Garde Alternée</p>
            <p className="text-slate-300 leading-relaxed">
              Application mobile développée avec soin pour simplifier le quotidien des familles en garde alternée : plannings partagés, gestion financière et abonnements in-app sécurisés.
            </p>
            <p className="text-slate-400 font-mono">Plateforme : iOS & Android • Stores : Apple App Store & Google Play</p>
            <div className="flex flex-wrap gap-3 pt-1">
              <a 
                href="https://apps.apple.com/us/app/petitnid-app/id6762980886" 
                target="_blank" 
                rel="noreferrer" 
                className="text-sky-300 underline font-mono flex items-center gap-1"
              >
                App Store (iOS) ↗
              </a>
              <a 
                href="https://play.google.com/store/apps/details?id=com.petitnid.petitnid" 
                target="_blank" 
                rel="noreferrer" 
                className="text-emerald-400 underline font-mono flex items-center gap-1"
              >
                Google Play (Android) ↗
              </a>
            </div>
          </div>
        );
        break;

      case 'codeur':
        response = (
          <div className="space-y-1 py-1 text-xs bg-slate-900 p-3 rounded-lg border border-amber-500/40">
            <p className="text-amber-300 font-bold">⭐ Profil Officiel Codeur.com :</p>
            <p className="text-slate-300">
              Prestataire certifié avec 100% de clients satisfaits, respect des délais garanti et interventions expertes.
            </p>
            <a href={PERSONAL_INFO.codeurUrl} target="_blank" rel="noreferrer" className="text-emerald-400 underline font-mono block mt-1">
              {PERSONAL_INFO.codeurUrl}
            </a>
          </div>
        );
        break;

      case 'sefako':
      case 'itsefako':
        response = (
          <div className="space-y-1 py-1 text-xs bg-slate-900 p-3 rounded-lg border border-emerald-500/40">
            <p className="text-emerald-400 font-bold">🌐 IT Sefako — Vitrine Technologique :</p>
            <p className="text-slate-300">
              Vitrine numérique présentant l'ensemble des services, projets et compétences informatiques.
            </p>
            <a href={PERSONAL_INFO.itSefakoUrl} target="_blank" rel="noreferrer" className="text-amber-300 underline font-mono block mt-1">
              {PERSONAL_INFO.itSefakoUrl}
            </a>
          </div>
        );
        break;

      case 'education':
      case 'formation':
        response = (
          <div className="space-y-1.5 py-1 text-xs">
            <p className="text-amber-300 font-bold">Formation & Diplômes :</p>
            <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
              <span className="text-white font-bold block">Bachelor of Computer Applications (BCA)</span>
              <span className="text-emerald-400">CIFOP — Lomé, Togo (2015 – 2017)</span>
              <p className="text-slate-400 text-[11px] mt-1">
                Informatique, programmation, modélisation de bases de données relationnelles et architectures logicielles.
              </p>
            </div>
          </div>
        );
        break;

      case 'contact':
      case 'email':
        response = (
          <div className="space-y-1 py-1 text-xs text-slate-300">
            <p className="text-amber-300 font-bold">Coordonnées Directes :</p>
            <p>Email : <a href={`mailto:${PERSONAL_INFO.email}`} className="text-emerald-400 font-mono hover:underline">{PERSONAL_INFO.email}</a></p>
            <p>GitHub : <a href={PERSONAL_INFO.githubUrl} target="_blank" rel="noreferrer" className="text-emerald-400 font-mono hover:underline">github.com/{PERSONAL_INFO.username}</a></p>
            <p>Codeur.com : <a href={PERSONAL_INFO.codeurUrl} target="_blank" rel="noreferrer" className="text-amber-300 font-mono hover:underline">codeur.com/-patriceakotse</a></p>
            <p>Localisation : <span className="text-slate-200">{PERSONAL_INFO.location}</span></p>
          </div>
        );
        break;

      case 'github':
        response = (
          <p className="text-xs text-slate-300">
            Profil GitHub : <a href={PERSONAL_INFO.githubUrl} target="_blank" rel="noreferrer" className="text-emerald-400 font-mono underline">{PERSONAL_INFO.githubUrl}</a>
          </p>
        );
        break;

      case 'cv':
      case 'resume':
        onOpenResume();
        response = (
          <p className="text-emerald-400 text-xs">
            Affichage du CV officiel de {PERSONAL_INFO.fullName}...
          </p>
        );
        break;

      case 'clear':
      case 'cls':
        setHistory([]);
        setInput('');
        return;

      default:
        response = (
          <p className="text-rose-400 text-xs">
            Commande non reconnue : <span className="font-mono">{trimmed}</span>. Tapez <span className="text-amber-300 font-bold font-mono">help</span> pour voir les commandes disponibles.
          </p>
        );
    }

    setHistory((prev) => [...prev, { command: trimmed, output: response }]);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleRunCommand(input);
    }
  };

  return (
    <section id="terminal" className="py-24 bg-slate-50/70 border-t border-slate-200/80 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono tracking-[0.25em] uppercase font-bold">
            <TerminalIcon className="w-3.5 h-3.5 text-amber-600" />
            <span>DEVELOPER CLI CONSOLE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-slate-950 tracking-tight">
            {lang === 'fr' ? 'Terminal CLI Interactif' : 'Interactive CLI Terminal'}
          </h2>
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
            {lang === 'fr'
              ? 'Testez les commandes directes pour explorer le profil, les packages et les stacks de Patrice en ligne de commande.'
              : 'Execute direct CLI commands to inspect Patrice\'s background, packages, and technical skills.'}
          </p>
        </div>

        {/* Terminal Window Box */}
        <div className="rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden font-mono text-sm">
          {/* Header Bar */}
          <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-600 shadow-sm" title="Togo Red" />
              <div className="w-3 h-3 rounded-full bg-amber-400 shadow-sm" title="Togo Yellow" />
              <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-sm" title="Togo Green" />
              <span className="text-slate-300 text-xs ml-2 font-mono font-medium">
                atcu@portfolio: ~ (bash) 🇹🇬
              </span>
            </div>

            <div className="flex items-center gap-2">
              {['help', 'about', 'skills', 'projects', 'package', 'codeur'].map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => handleRunCommand(cmd)}
                  className="px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 hover:text-amber-300 hover:bg-slate-700 transition-colors text-[10px] uppercase tracking-wider font-semibold"
                >
                  {cmd}
                </button>
              ))}
            </div>
          </div>

          {/* Terminal History Output */}
          <div className="p-4 sm:p-6 space-y-3 min-h-[280px] max-h-[460px] overflow-y-auto font-mono text-xs sm:text-sm">
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center gap-2 text-slate-400">
                  <span className="text-emerald-400 font-bold">atcu@dev:~$</span>
                  <span className="text-white font-semibold">{item.command}</span>
                </div>
                <div className="pl-4">{item.output}</div>
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          {/* Terminal Input Bar */}
          <div className="p-3 bg-slate-900/90 border-t border-slate-800 flex items-center gap-2">
            <span className="text-emerald-400 font-bold shrink-0">atcu@dev:~$</span>
            <input
              id="terminal-cli-input"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={lang === 'fr' ? 'Tapez une commande (ex: help, projects, package)...' : 'Type a command (e.g. help, projects, package)...'}
              className="flex-1 bg-transparent border-none text-white focus:outline-none text-xs sm:text-sm font-mono placeholder:text-slate-600"
            />
            <button
              onClick={() => handleRunCommand(input)}
              className="p-1.5 rounded-full bg-emerald-700 hover:bg-emerald-600 text-white transition-colors"
              title="Exécuter la commande"
            >
              <CornerDownLeft className="w-3.5 h-3.5 text-amber-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
