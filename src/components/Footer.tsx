import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Github, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          <div>
            <a
              href="#"
              className="text-lg font-bold text-white hover:text-blue-400 transition-colors flex items-center gap-2 mb-1"
            >
              <span className="w-2.5 h-2.5 bg-blue-500 rounded-sm inline-block" />
              <span>{PERSONAL_INFO.name}</span>
            </a>
            <p className="text-xs text-slate-500 font-mono">
              B.Tech AIML Student at REVA University, Bengaluru · Aspiring Software Developer
            </p>
          </div>

          <div className="flex items-center gap-6 text-xs text-slate-400 font-medium">
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a href="#interactive-sandbox" className="hover:text-white transition-colors">
              Live Sandbox
            </a>
            <a href="#skills" className="hover:text-white transition-colors">
              Skills
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-900 rounded-lg transition-colors border border-slate-800"
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-900 rounded-lg transition-colors border border-slate-800"
              title="Email Sameer"
              aria-label="Email Sameer"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-900 rounded-lg transition-colors border border-slate-800 cursor-pointer"
              title="Scroll to Top"
              aria-label="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Shaik Sameer. Engineered with React.js &amp; Modern Motion.
          </div>
          <div className="font-mono text-[11px]">
            Hosted with GitHub Pages &amp; Modern Web Standards
          </div>
        </div>
      </div>
    </footer>
  );
};
