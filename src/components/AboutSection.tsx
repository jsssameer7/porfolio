import React from 'react';
import { PERSONAL_INFO, PROJECTS } from '../data/portfolioData';
import { GraduationCap, Target, Lightbulb, Compass, ExternalLink, ArrowRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 border-b border-slate-800/80 bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-blue-400 mb-3 tracking-wide uppercase">
            <span>Academic Background &amp; Philosophy</span>
            <span aria-hidden="true">·</span>
            <span>Developer Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            About Me &amp; Career Objective
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            I am currently pursuing my B.Tech in Artificial Intelligence &amp; Machine Learning (AIML) at
            REVA University, Bengaluru. My path is driven by a genuine passion for software engineering,
            intelligent algorithms, modern web development, and turning ambitious concepts into scalable applications.
          </p>
        </div>

        {/* 2-Column Split: Story & Objectives */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Left Column: Academic Credentials & Core Mission */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 bg-slate-900/60 border border-slate-800 rounded-2xl">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-blue-600/10 border border-blue-500/30 rounded-xl text-blue-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    B.Tech in Artificial Intelligence &amp; Machine Learning (AIML)
                  </h3>
                  <div className="text-xs font-mono text-slate-400">
                    REVA University, Bengaluru · Currently Pursuing
                  </div>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Through my academic program at REVA University, I am expanding my mastery in artificial intelligence,
                neural network foundations, algorithm complexity, and database systems, paired with active full-stack
                development in React.js, Python, Java, and modern JavaScript.
              </p>

              {/* Core Focus Areas */}
              <div className="p-4 bg-slate-950/70 border border-slate-800 rounded-xl">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3 font-mono">
                  Primary Academic &amp; Engineering Focus
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                    <span>AI &amp; Machine Learning Foundations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                    <span>Data Structures &amp; Algorithm Optimization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                    <span>Full Stack Development &amp; React.js</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                    <span>Object-Oriented Programming (Python/Java/C)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Philosophy Statement */}
            <div className="p-6 sm:p-8 bg-slate-900/60 border border-slate-800 rounded-2xl">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl text-amber-400">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Career Objective</h3>
                  <div className="text-xs font-mono text-slate-400">Professional Mission</div>
                </div>
              </div>

              <blockquote className="text-sm sm:text-base text-slate-200 italic leading-relaxed border-l-2 border-blue-500 pl-4 my-3">
                &ldquo;My goal is to become a professional software engineer by strengthening my
                programming fundamentals, developing real-world applications, and continuously learning
                modern technologies. I believe in learning by building, improving through practice, and
                using technology to solve meaningful problems.&rdquo;
              </blockquote>
            </div>
          </div>

          {/* Right Column: 3 Pillars of Development */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 bg-slate-900/60 border border-slate-800 rounded-2xl">
              <div className="flex items-center gap-2 text-xs font-mono text-blue-400 mb-2">
                <span>Pillar 01</span>
                <span aria-hidden="true">·</span>
                <span>Hands-on Practice</span>
              </div>
              <h4 className="text-base font-bold text-white mb-2">Learning by Building</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Rather than memorizing theory, I turn curriculum topics into living software. From building
                the Academic Management System to creating agriculture advisories, hands-on construction
                cements deep engineering comprehension.
              </p>
            </div>

            <div className="p-6 bg-slate-900/60 border border-slate-800 rounded-2xl">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2">
                <span>Pillar 02</span>
                <span aria-hidden="true">·</span>
                <span>User-Centric Design</span>
              </div>
              <h4 className="text-base font-bold text-white mb-2">Responsive &amp; Accessible Interfaces</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Code must serve the human on the other side of the glass. I focus on responsive grid
                systems, fluid typography, touch targets, and high contrast so applications perform
                effortlessly on phones and desktops alike.
              </p>
            </div>

            <div className="p-6 bg-slate-900/60 border border-slate-800 rounded-2xl">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-2">
                <span>Pillar 03</span>
                <span aria-hidden="true">·</span>
                <span>Social Utility</span>
              </div>
              <h4 className="text-base font-bold text-white mb-2">Real-World Problem Solving</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Software has the power to solve tangible challenges—helping college coordinators ensure
                syllabus deadlines are met, and empowering rural farmers with timely weather intelligence
                and seed market transparency.
              </p>
            </div>
          </div>
        </div>

        {/* Clean Portfolio Registry Table (From Sameer's README) */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-bold text-white">Project Portfolio Registry</h3>
              <p className="text-xs text-slate-400">Complete summary of key builds and deployments</p>
            </div>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-blue-400 hover:text-blue-300 flex items-center gap-1"
            >
              <span>Explore GitHub Repositories</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="border border-slate-800 rounded-2xl overflow-hidden bg-slate-950/80 shadow-md">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-900/90 border-b border-slate-800 text-slate-400 font-mono">
                    <th className="p-4 font-medium">Project</th>
                    <th className="p-4 font-medium">Core Scope &amp; Purpose</th>
                    <th className="p-4 font-medium">Technologies</th>
                    <th className="p-4 font-medium">Live Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-slate-300">
                  {PROJECTS.map((p) => (
                    <tr key={p.id} className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-4 font-semibold text-white whitespace-nowrap">
                        {p.title}
                      </td>
                      <td className="p-4 text-slate-300 max-w-xs">{p.subtitle}</td>
                      <td className="p-4 text-slate-400 font-mono text-xs">
                        {p.technologies.slice(0, 3).join(', ')}
                      </td>
                      <td className="p-4 whitespace-nowrap">
                        {p.liveDemoUrl ? (
                          <a
                            href={p.liveDemoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300"
                          >
                            <span>Live Demo</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        ) : (
                          <span className="text-xs font-mono text-amber-400">In Active Development</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
