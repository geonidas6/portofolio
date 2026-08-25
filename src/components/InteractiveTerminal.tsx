import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Sparkles, Send, CornerDownLeft, Play } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS_DATA, SKILLS_CATEGORIES, TERMINAL_COMMANDS_HELP } from '../data/portfolioData';
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
        <div className="space-y-1 text-[#A3A3A3]">
          <p className="text-[#C5A059] font-medium">
            ⚡ Bienvenue sur le terminal interactif de {PERSONAL_INFO.shortName} (@{PERSONAL_INFO.username}).
          </p>
          <p className="text-[#8C8C8C]">
            Tapez <span className="text-[#E5C378] font-bold">help</span> pour afficher la liste des commandes disponibles.
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
            <p className="text-[#C5A059] font-bold">Commandes disponibles :</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-xs">
              {TERMINAL_COMMANDS_HELP.map((item, idx) => (
                <div key={idx} className="flex items-baseline gap-2">
                  <span className="text-[#E5C378] font-mono font-semibold w-24 shrink-0">
                    {item.cmd}
                  </span>
                  <span className="text-[#8C8C8C] font-sans">{item.desc}</span>
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
            <p className="text-[#E5E5E5] font-bold">{PERSONAL_INFO.fullName} (@{PERSONAL_INFO.username})</p>
            <p className="text-[#C5A059]">{PERSONAL_INFO.title[lang]}</p>
            <p className="text-[#A3A3A3] text-xs">{PERSONAL_INFO.location}</p>
            <p className="text-[#8C8C8C] text-xs">{PERSONAL_INFO.tagline[lang]}</p>
          </div>
        );
        break;

      case 'skills':
        response = (
          <div className="space-y-2 py-1 text-xs">
            <p className="text-[#C5A059] font-bold">Principales compétences :</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div>
                <span className="text-[#E5C378] font-semibold">Backend:</span> Laravel, Symfony, FastAPI, Django, Express
              </div>
              <div>
                <span className="text-[#C5A059] font-semibold">Frontend:</span> React, Next.js, TypeScript, Tailwind CSS
              </div>
              <div>
                <span className="text-[#D4AF37] font-semibold">Mobile:</span> Flutter (Dart), React Native
              </div>
              <div>
                <span className="text-[#E5E5E5] font-semibold">DevOps & FinTech:</span> Docker, AWS, PostgreSQL, MoneyFusion, Stripe
              </div>
            </div>
          </div>
        );
        break;

      case 'projects':
        response = (
          <div className="space-y-1.5 py-1 text-xs">
            <p className="text-[#C5A059] font-bold">Projets phares :</p>
            {PROJECTS_DATA.map((p) => (
              <div key={p.id} className="flex flex-col">
                <span className="text-[#E5C378] font-bold">▹ {p.title} ({p.year})</span>
                <span className="text-[#8C8C8C] pl-4">{p.subtitle}</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'package':
      case 'moneyfusion':
        response = (
          <div className="space-y-1.5 py-1 text-xs bg-[#1A1A1A] p-2.5 rounded-lg border border-[#262626]">
            <p className="text-[#C5A059] font-bold">📦 Package Open-Source : geonidas6/moneyfusion-laravel</p>
            <p className="text-[#B3B3B3]">
              Package Laravel pour intégrer la passerelle de paiement MoneyFusion (paiements sécurisés, checkouts, webhooks).
            </p>
            <p className="text-[#E5C378] font-mono">composer require geonidas6/moneyfusion-laravel</p>
            <p className="text-[#8C8C8C]">
              GitHub: <a href="https://github.com/geonidas6/moneyfusion-laravel" target="_blank" rel="noreferrer" className="text-[#C5A059] underline">github.com/geonidas6/moneyfusion-laravel</a>
            </p>
          </div>
        );
        break;

      case 'contact':
      case 'email':
        response = (
          <div className="space-y-1 py-1 text-xs">
            <p className="text-[#C5A059] font-bold">Coordonnées :</p>
            <p className="text-[#B3B3B3]">Email: <span className="text-[#C5A059] font-mono">{PERSONAL_INFO.email}</span></p>
            <p className="text-[#B3B3B3]">GitHub: <span className="text-[#E5C378] font-mono">github.com/{PERSONAL_INFO.username}</span></p>
            <p className="text-[#B3B3B3]">Localisation: <span className="text-[#8C8C8C]">{PERSONAL_INFO.location}</span></p>
          </div>
        );
        break;

      case 'github':
        window.open(PERSONAL_INFO.githubUrl, '_blank');
        response = (
          <p className="text-[#C5A059] text-xs">
            Ouverture du profil GitHub de @{PERSONAL_INFO.username} : {PERSONAL_INFO.githubUrl}
          </p>
        );
        break;

      case 'status':
        response = (
          <div className="flex items-center gap-2 text-xs text-[#C5A059] py-1">
            <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse" />
            <span>{PERSONAL_INFO.availability[lang]}</span>
          </div>
        );
        break;

      case 'cv':
      case 'resume':
      case 'download-cv':
        onOpenResume();
        response = (
          <p className="text-[#C5A059] text-xs">
            Affichage du CV de {PERSONAL_INFO.fullName}...
          </p>
        );
        break;

      case 'clear':
      case 'cls':
        setHistory([]);
        setInput('');
        return;

      case 'sudo hire':
      case 'hire':
      case 'hire-me':
        response = (
          <div className="space-y-2 py-1 bg-[#1A1A1A] p-3 rounded-lg border border-[#262626] text-xs">
            <p className="text-[#C5A059] font-bold">🚀 Prêt à collaborer !</p>
            <p className="text-[#B3B3B3]">
              Envoyez directement votre proposition par email à <strong className="text-white">{PERSONAL_INFO.email}</strong> ou via le formulaire ci-dessous.
            </p>
          </div>
        );
        break;

      case 'secret':
      case 'cat secret.txt':
        response = (
          <p className="text-[#C5A059] font-mono text-xs">
            ✨ "Clean code always looks like it was written by someone who cares." — Robert C. Martin (Uncle Bob)
          </p>
        );
        break;

      default:
        response = (
          <p className="text-rose-400 text-xs">
            Commande inconnue: <span className="font-mono">{trimmed}</span>. Tapez <span className="text-[#C5A059] font-bold font-mono">help</span> pour voir la liste.
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
        <div className="rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden font-mono text-xs">
          {/* Header Bar */}
          <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-600 shadow-sm" title="Togo Red" />
              <div className="w-3 h-3 rounded-full bg-amber-400 shadow-sm" title="Togo Yellow" />
              <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-sm" title="Togo Green" />
              <span className="text-slate-300 text-xs ml-2 font-mono font-medium">
                akotse@portfolio: ~ (bash) 🇹🇬
              </span>
            </div>

            {/* Quick Command Pills */}
            <div className="hidden sm:flex items-center gap-1.5">
              {['help', 'about', 'skills', 'package', 'clear'].map((cmd) => (
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

          {/* Terminal Body */}
          <div className="p-4 sm:p-6 min-h-[300px] max-h-[420px] overflow-y-auto space-y-3 scrollbar-thin">
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center gap-2 text-slate-400">
                  <span className="text-emerald-400 font-bold">akotse@dev:~$</span>
                  <span className="text-white font-semibold">{item.command}</span>
                </div>
                <div className="pl-4">{item.output}</div>
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          {/* Terminal Input Bar */}
          <div className="p-3 bg-slate-900/90 border-t border-slate-800 flex items-center gap-2">
            <span className="text-emerald-400 font-bold shrink-0">akotse@dev:~$</span>
            <input
              id="terminal-cli-input"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Tapez une commande (ex: help, about, skills, package, clear)..."
              className="flex-1 bg-transparent text-slate-100 focus:outline-none text-xs placeholder-slate-500"
              autoComplete="off"
              spellCheck={false}
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
