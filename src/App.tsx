/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProjectsSection } from './components/ProjectsSection';
import { InteractiveSandbox } from './components/InteractiveSandbox';
import { SkillsSection } from './components/SkillsSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const handleOpenSandbox = (projectId: string) => {
    const el = document.getElementById('interactive-sandbox');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Bar Navigation (Strict 3-Zone Contract) */}
      <Navbar />

      <main className="flex-1">
        {/* Hero Section with Split-Column Layout, Typing Animation & Metric Strip */}
        <HeroSection />

        {/* Featured Projects Bento Grid with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <ProjectsSection onOpenSandbox={handleOpenSandbox} />
        </motion.div>

        {/* Live Project Functional Sandbox with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <InteractiveSandbox />
        </motion.div>

        {/* Technical Skills Matrix & Real Code Inspector with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <SkillsSection />
        </motion.div>

        {/* Academic Journey, Philosophy & Project Registry Table with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <AboutSection />
        </motion.div>

        {/* Direct Reachout & Message Form with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <ContactSection />
        </motion.div>
      </main>

      {/* Quiet, Clean Footer */}
      <Footer />
    </div>
  );
}
