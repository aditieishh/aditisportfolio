import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';
import { InteractiveDemoModal } from './InteractiveDemoModal';
import { Sparkles, Github, ExternalLink, Play, Layers, Code2, CheckCircle } from 'lucide-react';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedDemoProject, setSelectedDemoProject] = useState<Project | null>(null);

  const categories = ['All', 'Full Stack', 'Real-Time', 'AI Powered'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-16 md:py-24 bg-[#FFFBFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF0F0] border border-[#FFDEDE] text-[#E59A9A] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Project Gallery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#5C4B4B] tracking-tight">
            Featured Software Projects
          </h2>
          <p className="text-[#5C4B4B]/80 mt-2 text-sm sm:text-base font-medium">
            Production-grade real-time collaborative systems, AI tools, and full-stack REST API applications.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#5C4B4B] text-white shadow-[2px_2px_0px_0px_#D9C5B2]'
                  : 'bg-white text-[#5C4B4B] border border-[#F2E8DA] shadow-[2px_2px_0px_0px_#F2E8DA] hover:bg-[#FFF0F0]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-white rounded-2xl p-6 border border-[#F2E8DA] shadow-[4px_4px_0px_0px_#F2E8DA] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#EBD8C3] transition-all flex flex-col justify-between space-y-5 relative overflow-hidden group"
            >
              {/* Category Pill Tag */}
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-[#FFF0F0] text-[#E59A9A] text-xs font-extrabold border border-[#FFDEDE]">
                  {project.category}
                </span>

                <div className="flex items-center gap-2">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="p-2 rounded-full bg-[#FFF0F0] text-[#5C4B4B] hover:text-[#E59A9A] border border-[#F2E8DA] transition-colors"
                    title="GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="p-2 rounded-full bg-[#FFF0F0] text-[#E59A9A] hover:bg-[#FFDEDE] border border-[#F2E8DA] transition-colors"
                    title="Live Web Deployment"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Title & Description */}
              <div className="space-y-2">
                <h3 className="text-xl font-extrabold text-[#5C4B4B] group-hover:text-[#E59A9A] transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-bold text-[#E59A9A]">
                  {project.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-[#5C4B4B]/80 leading-relaxed font-medium line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Key Features Bullet list */}
              <div className="space-y-1.5 pt-2 border-t border-[#F2E8DA]">
                {project.keyHighlights.slice(0, 2).map((hl, idx) => (
                  <div key={idx} className="flex items-start gap-1.5 text-xs font-semibold text-[#5C4B4B]/90">
                    <CheckCircle className="w-3.5 h-3.5 text-[#E59A9A] shrink-0 mt-0.5" />
                    <span className="line-clamp-2">{hl}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.technologies.map((tech, idx) => (
                  <span 
                    key={idx}
                    className="px-2.5 py-1 rounded-full bg-[#FFF0F0] text-[#5C4B4B] text-[10px] font-bold border border-[#F2E8DA]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Interactive Demo Action Button */}
              <div className="pt-3 border-t border-[#F2E8DA]">
                <button
                  onClick={() => setSelectedDemoProject(project)}
                  className="w-full py-2.5 px-4 rounded-full bg-[#5C4B4B] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-[3px_3px_0px_0px_#D9C5B2] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Test Live Sandbox Demo</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Interactive Modal */}
      <InteractiveDemoModal 
        project={selectedDemoProject}
        onClose={() => setSelectedDemoProject(null)}
      />
    </section>
  );
};
