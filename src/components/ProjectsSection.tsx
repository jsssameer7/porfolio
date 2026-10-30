import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';
import { ExternalLink, Github, ArrowUpRight, Check, Eye } from 'lucide-react';

interface ProjectsSectionProps {
  onOpenSandbox?: (projectId: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenSandbox }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section id="projects" className="py-24 border-b border-slate-800/80 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header & Interactive Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-blue-400 mb-3 tracking-wide uppercase">
              <span>Featured Engineering Works</span>
              <span aria-hidden="true">·</span>
              <span>Portfolio Case Studies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
              Practical Projects &amp; Web Applications
            </h2>
            <p className="text-base text-slate-400 max-w-2xl">
              Real-world systems engineered with modern frontend and full-stack development
              architectures, designed for academic institutions, online commerce, and agricultural intelligence.
            </p>
          </div>

          {/* Interactive Filter Tabs (Buttons with click handlers per §1.A) */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl overflow-x-auto shrink-0">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'system', label: 'Academic Systems' },
              { id: 'e-commerce', label: 'E-Commerce' },
              { id: 'agriculture', label: 'Agri-Tech' },
              { id: 'comparison', label: 'Comparison' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  activeCategory === tab.id
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {filteredProjects.map((project, index) => {
            // First project gets an expansive wide bento card on desktop
            const isFeatured = project.id === 'academic-management-system' && activeCategory === 'all';

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`group bg-slate-900/60 border border-slate-800 hover:border-slate-700/80 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col ${
                  isFeatured ? 'lg:col-span-12 xl:col-span-12' : 'lg:col-span-6'
                }`}
              >
                <div
                  className={`grid grid-cols-1 ${
                    isFeatured ? 'lg:grid-cols-12' : ''
                  } h-full`}
                >
                  {/* Project Image Container */}
                  <div
                    className={`relative bg-slate-950 overflow-hidden ${
                      isFeatured ? 'lg:col-span-7 h-72 sm:h-80 lg:h-full min-h-[300px]' : 'h-60 sm:h-64'
                    }`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                    {/* Quick action buttons on image hover */}
                    <div className="absolute top-4 right-4 flex items-center gap-2">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="p-2 bg-slate-950/80 hover:bg-slate-900 text-slate-300 hover:text-white rounded-lg border border-slate-700/70 transition-colors shadow-sm cursor-pointer"
                        title="View Detailed Architecture"
                        aria-label={`View details for ${project.title}`}
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Bottom overlay on mobile image */}
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-slate-300">
                      <span className="bg-slate-950/80 px-2 py-0.5 rounded border border-slate-800">
                        {project.category}
                      </span>
                      <span className="text-blue-400 font-semibold">{project.status}</span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div
                    className={`p-6 sm:p-8 flex flex-col justify-between ${
                      isFeatured ? 'lg:col-span-5' : 'flex-1'
                    }`}
                  >
                    <div>
                      {/* Unboxed Metadata (Zero-Pill Rule §1.A) */}
                      <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-2">
                        <span>{project.category}</span>
                        <span aria-hidden="true">·</span>
                        <span className="text-blue-400">{project.status}</span>
                      </div>

                      {/* Card Title */}
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2 group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>

                      {/* Subtitle / Focus */}
                      <p className="text-xs font-medium text-slate-400 mb-4">{project.subtitle}</p>

                      {/* Description */}
                      <p className="text-sm text-slate-300 leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Key Features Bullet List */}
                      <div className="space-y-2 mb-6 text-xs text-slate-300">
                        {project.keyFeatures.slice(0, isFeatured ? 4 : 3).map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      {/* Technologies unboxed list */}
                      <div className="pt-4 border-t border-slate-800/80 mb-6">
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono text-slate-400">
                          {project.technologies.map((tech, tIdx) => (
                            <React.Fragment key={tIdx}>
                              <span className="text-slate-300">{tech}</span>
                              {tIdx < project.technologies.length - 1 && (
                                <span className="text-slate-600" aria-hidden="true">
                                  /
                                </span>
                              )}
                            </React.Fragment>
                          ))}
                        </div>
                      </div>

                      {/* Card Bottom CTA Actions */}
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          {project.liveDemoUrl && (
                            <a
                              href={project.liveDemoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors flex items-center gap-1.5 shadow-sm"
                            >
                              <span>Live Demo</span>
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          )}

                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-700/60 rounded-lg transition-colors"
                            title="GitHub Source"
                            aria-label={`GitHub source code for ${project.title}`}
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        </div>

                        <button
                          onClick={() => setSelectedProject(project)}
                          className="text-xs font-semibold text-slate-300 hover:text-blue-400 transition-colors flex items-center gap-1 cursor-pointer"
                        >
                          <span>Case Details</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenSandbox={onOpenSandbox}
      />
    </section>
  );
};
