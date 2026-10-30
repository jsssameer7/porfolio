import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Code2, Terminal, Copy, Check, ChevronRight, Layers } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('python');
  const [copied, setCopied] = useState<boolean>(false);

  // Extract snippet items
  const languageSkills = SKILL_CATEGORIES[0].skills.filter((s) => s.snippet);
  const currentSkill = languageSkills.find((s) => s.snippet?.language === selectedLanguage) || languageSkills[0];

  const handleCopyCode = () => {
    if (currentSkill?.snippet?.code) {
      navigator.clipboard.writeText(currentSkill.snippet.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="skills" className="py-24 border-b border-slate-800/80 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-blue-400 mb-3 tracking-wide uppercase">
            <span>Engineering Capabilities</span>
            <span aria-hidden="true">·</span>
            <span>Technical Foundations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Technical Skills &amp; Languages
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            A solid grounding in computer science principles, structured programming, modern web
            frameworks, and practical software development workflows.
          </p>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {SKILL_CATEGORIES.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: catIdx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl flex flex-col justify-between hover:border-slate-700 transition-colors"
            >
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-blue-400 mb-3">
                  <span>Category 0{catIdx + 1}</span>
                  <span aria-hidden="true">·</span>
                  <span>{category.skills.length} Capabilities</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-6 tracking-tight">
                  {category.category}
                </h3>

                <div className="space-y-4">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3.5 bg-slate-950/60 border border-slate-800/80 rounded-xl"
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm font-semibold text-white">{skill.name}</span>
                        {/* Unboxed text status (Zero-Pill rule §1.A) */}
                        <span className="text-xs font-mono text-blue-400">
                          {skill.yearsOrProjects}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Code Snippet Showcase Console */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between px-6 py-4 bg-slate-950 border-b border-slate-800 gap-4">
            <div className="flex items-center gap-3">
              <Terminal className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-mono text-slate-200 font-semibold uppercase tracking-wider">
                Interactive Code Inspector
              </span>
              <span className="text-slate-600 hidden sm:inline" aria-hidden="true">
                |
              </span>
              <span className="text-xs text-slate-400 hidden sm:inline">
                Real code implementation samples
              </span>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 p-0.5 bg-slate-900 border border-slate-800 rounded-lg">
                {languageSkills.map((s) => {
                  const lang = s.snippet?.language || '';
                  const isActive = selectedLanguage === lang;
                  return (
                    <button
                      key={lang}
                      onClick={() => setSelectedLanguage(lang)}
                      className={`px-3 py-1 text-xs font-mono rounded-md transition-colors cursor-pointer ${
                        isActive
                          ? 'bg-blue-600 text-white font-semibold'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {s.name}
                    </button>
                  );
                })}
              </div>

              <button
                onClick={handleCopyCode}
                className="p-2 text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
                title="Copy Code to Clipboard"
                aria-label="Copy Code to Clipboard"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Code Body */}
          <div className="p-6 bg-[#080d1a] overflow-x-auto">
            <pre className="font-mono text-xs sm:text-sm text-slate-200 leading-relaxed">
              <code>{currentSkill?.snippet?.code}</code>
            </pre>
          </div>

          <div className="px-6 py-3 bg-slate-950/90 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
            <span>Language: {currentSkill?.name}</span>
            <span className="text-blue-400">Validated Syntax &amp; Design Pattern</span>
          </div>
        </div>
      </div>
    </section>
  );
};
