import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowRight, Github, ExternalLink, Code2, GraduationCap, Terminal, Sparkles, Check, Copy } from 'lucide-react';

const TYPED_ROLES = [
  'B.Tech AIML Student',
  'REVA University, Bengaluru',
  'Aspiring Software Developer',
  'Web Development Enthusiast',
  'AI & Machine Learning Explorer',
  'React & Full Stack Builder',
];

export const HeroSection: React.FC = () => {
  // Animated text typing effect
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [copiedJson, setCopiedJson] = useState(false);
  const [activeTab, setActiveTab] = useState<'profile' | 'code' | 'terminal'>('profile');

  useEffect(() => {
    const currentRole = TYPED_ROLES[roleIndex];
    const typingSpeed = isDeleting ? 30 : 60;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        if (displayedText.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % TYPED_ROLES.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  const profileJsonString = JSON.stringify(
    {
      name: PERSONAL_INFO.name,
      degree: 'B.Tech in Artificial Intelligence & Machine Learning (AIML)',
      university: 'REVA University, Bengaluru',
      location: 'Bengaluru, India',
      focus: ['AI & Machine Learning', 'Full-Stack Web Development', 'React.js', 'Python', 'Java', 'Data Structures'],
      status: 'Open to Software Engineering & AIML Roles',
      builtProjects: [
        'Academic Management System (AMS)',
        'E-Commerce Shopping Website',
        'Farmer Support Agricultural Portal',
        'Electronic Product Comparison Matrix',
      ],
      mission: 'Learning by building practical real-world software.',
    },
    null,
    2
  );

  const handleCopyJson = () => {
    navigator.clipboard.writeText(profileJsonString);
    setCopiedJson(true);
    setTimeout(() => setCopiedJson(false), 2000);
  };

  return (
    <section className="relative pt-12 pb-20 border-b border-slate-800/80 overflow-hidden">
      {/* Background ambient subtle gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split-Screen Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Typographic Hierarchy with Entrance Animations */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            {/* Dynamic Typing Animated Text Badge */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 bg-blue-500 rounded-sm inline-block" />
              <div className="text-xs sm:text-sm font-mono text-blue-400 font-semibold tracking-wide flex items-center">
                <span>{displayedText}</span>
                <span className="inline-block w-1.5 h-4 ml-1 bg-blue-400 animate-pulse" />
              </div>
            </div>

            {/* Display Headline with gradient accent and text-wrap: balance */}
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 [text-wrap:balance] leading-[1.12]">
              Building purposeful web applications &amp;{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
                modern software solutions.
              </span>
            </h1>

            {/* Body Description */}
            <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed">
              Hello, I&apos;m <strong className="text-white font-semibold">{PERSONAL_INFO.name}</strong>.
              I am pursuing a B.Tech in Artificial Intelligence &amp; Machine Learning (AIML) at{' '}
              <strong className="text-white font-medium">REVA University, Bengaluru</strong>. Dedicated to
              software engineering, intelligent systems, responsive web architectures, and developing practical
              applications that solve authentic problems—from curriculum monitors to agricultural platforms.
            </p>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href="#projects"
                className="px-5 py-3 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors flex items-center gap-2 shadow-lg shadow-blue-600/20 group"
              >
                <span>Explore Selected Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href="#interactive-sandbox"
                className="px-5 py-3 text-sm font-semibold text-slate-200 bg-slate-900 border border-slate-700 rounded-lg hover:bg-slate-800 hover:text-white transition-colors flex items-center gap-2"
              >
                <Code2 className="w-4 h-4 text-blue-400" />
                <span>Try Live Sandbox</span>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-slate-400 hover:text-white hover:bg-slate-900 border border-slate-800 rounded-lg transition-colors"
                title="GitHub @jsssameer7"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>

            {/* Unboxed Quiet Metadata / Core Competencies */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400 font-mono">
              <span className="text-slate-300 font-semibold">Core Stack:</span>
              <span>React.js</span>
              <span aria-hidden="true">·</span>
              <span>JavaScript (ES6+)</span>
              <span aria-hidden="true">·</span>
              <span>Python</span>
              <span aria-hidden="true">·</span>
              <span>Java</span>
              <span aria-hidden="true">·</span>
              <span>HTML5 / CSS3</span>
            </div>
          </motion.div>

          {/* Right Column: Interactive Developer Showcase & Code Terminal Card */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col"
          >
            <div className="relative w-full h-[480px] sm:h-[510px] bg-slate-900/70 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col">
              {/* Terminal Window Header Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-950/90 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="text-slate-600 mx-1.5" aria-hidden="true">
                    |
                  </span>
                  <span className="text-xs font-mono text-slate-300 font-semibold">
                    shaik-sameer@dev-station
                  </span>
                </div>

                {/* Tab Switcher */}
                <div className="flex items-center gap-1 p-0.5 bg-slate-900 border border-slate-800 rounded-lg">
                  <button
                    onClick={() => setActiveTab('profile')}
                    className={`px-2.5 py-1 text-xs font-mono rounded-md transition-colors cursor-pointer ${
                      activeTab === 'profile'
                        ? 'bg-blue-600 text-white font-semibold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Profile
                  </button>
                  <button
                    onClick={() => setActiveTab('code')}
                    className={`px-2.5 py-1 text-xs font-mono rounded-md transition-colors cursor-pointer ${
                      activeTab === 'code'
                        ? 'bg-blue-600 text-white font-semibold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    About.json
                  </button>
                  <button
                    onClick={() => setActiveTab('terminal')}
                    className={`px-2.5 py-1 text-xs font-mono rounded-md transition-colors cursor-pointer ${
                      activeTab === 'terminal'
                        ? 'bg-blue-600 text-white font-semibold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Deployments
                  </button>
                </div>
              </div>

              {/* Viewport Content */}
              <div className="relative flex-1 w-full h-full p-6 overflow-y-auto bg-slate-950/50">
                {activeTab === 'profile' && (
                  <div className="h-full flex flex-col justify-between space-y-4">
                    <div className="flex items-center gap-5">
                      <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-sky-500 border border-blue-400/30 flex items-center justify-center font-extrabold text-2xl text-white shadow-lg shadow-blue-600/25 font-mono tracking-wider shrink-0 select-none">
                        SS
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h2 className="text-xl font-bold text-white">{PERSONAL_INFO.name}</h2>
                          <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 rounded-md">
                            Active
                          </span>
                        </div>
                        <p className="text-xs text-blue-400 font-mono mb-1">
                          B.Tech in AIML · REVA University, Bengaluru
                        </p>
                        <div className="flex items-center gap-2 text-xs text-slate-400">
                          <span>Bengaluru, India</span>
                          <span>·</span>
                          <span className="text-slate-300">Open to Roles &amp; Internships</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-slate-900/70 border border-slate-800/80 rounded-xl space-y-2.5 text-xs text-slate-300">
                      <div className="flex items-start gap-2.5">
                        <GraduationCap className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-white block font-medium">Undergraduate Engineering</strong>
                          <span>Pursuing B.Tech in AIML at REVA University with emphasis on AI models, data structures, and web systems.</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2.5 pt-2 border-t border-slate-800">
                        <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-white block font-medium">Development Philosophy</strong>
                          <span>&ldquo;Learning by building, improving through practice, and solving real problems.&rdquo;</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                      <div className="p-3 bg-slate-900/60 border border-slate-800 rounded-lg">
                        <div className="text-slate-400 text-[11px] mb-1">GitHub Activity</div>
                        <div className="text-white font-semibold">@jsssameer7</div>
                      </div>
                      <div className="p-3 bg-slate-900/60 border border-slate-800 rounded-lg">
                        <div className="text-slate-400 text-[11px] mb-1">Featured Works</div>
                        <div className="text-white font-semibold">4 Production Builds</div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'code' && (
                  <div className="h-full flex flex-col justify-between font-mono text-xs">
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-slate-400">
                      <span>profile.json</span>
                      <button
                        onClick={handleCopyJson}
                        className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
                      >
                        {copiedJson ? (
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                        <span>{copiedJson ? 'Copied' : 'Copy'}</span>
                      </button>
                    </div>
                    <pre className="text-slate-300 overflow-x-auto leading-relaxed text-[11px] sm:text-xs">
                      <code>{profileJsonString}</code>
                    </pre>
                  </div>
                )}

                {activeTab === 'terminal' && (
                  <div className="h-full flex flex-col justify-between font-mono text-xs text-slate-300">
                    <div className="space-y-3">
                      <div className="text-slate-400">$ git status --short</div>
                      <div className="p-3 bg-slate-900/60 border border-slate-800 rounded-lg space-y-1.5 text-[11px]">
                        <div className="text-emerald-400">
                          ✓ AMS (Academic Management System) - v1.0.0
                        </div>
                        <div className="text-blue-400">
                          ✓ E-Commerce Shopping Website - Live on GitHub Pages
                        </div>
                        <div className="text-blue-400">
                          ✓ Farmer Support Portal - Live on GitHub Pages
                        </div>
                        <div className="text-blue-400">
                          ✓ Electronics Product Comparison - Live on GitHub Pages
                        </div>
                      </div>

                      <div className="text-slate-400 mt-4">$ ping -c 1 jsssameer7.github.io</div>
                      <div className="text-slate-300 text-[11px]">
                        64 bytes from 185.199.108.153: icmp_seq=1 ttl=58 time=14.2 ms
                      </div>
                      <div className="text-emerald-400 text-[11px]">
                        Status: All systems operational. 3 live public web deployments.
                      </div>
                    </div>

                    <a
                      href={PERSONAL_INFO.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs text-blue-400 hover:text-blue-300 pt-3 border-t border-slate-800"
                    >
                      <span>Explore all repositories on GitHub</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full-width 4-Column Metric Strip (With scroll/entrance animation) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="p-4 bg-slate-900/40 border border-slate-800/60 rounded-xl hover:border-slate-700 transition-colors">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums mb-1">
              4+
            </div>
            <div className="text-xs font-medium text-slate-400">Featured Web Projects</div>
            <div className="text-[11px] text-slate-500 mt-0.5">AMS, Commerce &amp; Agri-Tech</div>
          </div>

          <div className="p-4 bg-slate-900/40 border border-slate-800/60 rounded-xl hover:border-slate-700 transition-colors">
            <div className="text-xl sm:text-2xl font-extrabold text-blue-400 font-mono tracking-tight mb-1">
              B.Tech AIML
            </div>
            <div className="text-xs font-medium text-slate-400">REVA University</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Bengaluru, India</div>
          </div>

          <div className="p-4 bg-slate-900/40 border border-slate-800/60 rounded-xl hover:border-slate-700 transition-colors">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono tabular-nums mb-1">
              3
            </div>
            <div className="text-xs font-medium text-slate-400">Live Public Deployments</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Hosted on GitHub Pages</div>
          </div>

          <div className="p-4 bg-slate-900/40 border border-slate-800/60 rounded-xl hover:border-slate-700 transition-colors">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono tabular-nums mb-1">
              100%
            </div>
            <div className="text-xs font-medium text-slate-400">Hands-on Implementation</div>
            <div className="text-[11px] text-slate-500 mt-0.5">React, Python, Java, C</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
