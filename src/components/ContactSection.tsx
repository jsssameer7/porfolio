import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Github, Copy, Check, Send, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 border-b border-slate-800/80 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-blue-400 mb-3 tracking-wide uppercase">
            <span>Direct Communication</span>
            <span aria-hidden="true">·</span>
            <span>Open to Opportunities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Let&apos;s Connect &amp; Collaborate!
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            I am always eager to learn, collaborate on innovative projects, discuss software
            engineering opportunities, and connect with developers, mentors, and teams.
          </p>
        </div>

        {/* 2-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Reachout Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 bg-slate-900/60 border border-slate-800 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-6">Contact Channels</h3>

              <div className="space-y-4">
                {/* Email Direct */}
                <div className="p-4 bg-slate-950/70 border border-slate-800/80 rounded-xl flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-blue-600/10 border border-blue-500/20 rounded-lg text-blue-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-400 uppercase">Email Address</div>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-xs sm:text-sm font-mono text-white hover:text-blue-400 transition-colors font-semibold"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 text-slate-400 hover:text-white bg-slate-900 border border-slate-700/60 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
                    title="Copy Email"
                    aria-label="Copy Email"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* GitHub Direct */}
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-slate-950/70 border border-slate-800/80 rounded-xl flex items-center justify-between gap-3 group hover:border-slate-700 transition-colors block"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-slate-800 rounded-lg text-white">
                      <Github className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-400 uppercase">GitHub Profile</div>
                      <div className="text-xs sm:text-sm font-mono text-white group-hover:text-blue-400 transition-colors font-semibold">
                        @{PERSONAL_INFO.githubUsername}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-blue-400">Visit →</span>
                </a>

                {/* Location & Status */}
                <div className="p-4 bg-slate-950/70 border border-slate-800/80 rounded-xl flex items-center gap-3">
                  <div className="p-2.5 bg-slate-800 rounded-lg text-slate-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400 uppercase">Location &amp; Availability</div>
                    <div className="text-xs sm:text-sm text-slate-200">
                      Bengaluru, India · Open to Remote &amp; On-Site Software Developer &amp; AIML Roles
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Inspiration Card */}
            <div className="p-6 bg-gradient-to-br from-blue-950/40 via-slate-900/60 to-slate-900/60 border border-blue-900/40 rounded-2xl text-xs text-slate-300 space-y-2">
              <span className="font-semibold text-blue-300 block font-mono text-xs">
                &ldquo;Keep Learning. Keep Building. Keep Growing! 🚀&rdquo;
              </span>
              <p className="text-slate-400 leading-relaxed">
                Thank you for visiting my portfolio. Feel free to explore my repositories, test the
                interactive sandbox, or drop a message below.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Message Dispatcher */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 bg-slate-900/60 border border-slate-800 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill out the form below to initiate a conversation or inquire about project collaborations.
              </p>

              {submitted ? (
                <div className="p-8 bg-slate-950/80 border border-emerald-900/40 rounded-xl text-center space-y-4">
                  <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Message Dispatched!</h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Your message
                    has been recorded. I will get back to you at{' '}
                    <span className="text-blue-400 font-mono">{formData.email}</span> as soon as possible.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-700 rounded-lg transition-colors cursor-pointer"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Johnson"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5">
                        Your Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@example.com"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      Subject / Topic
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Collaboration / Job Opportunity / Project Discussion"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Sameer, I checked out your Academic Management System and would love to connect..."
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-blue-600/20"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
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
