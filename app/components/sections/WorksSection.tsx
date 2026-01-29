'use client';

import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { Project } from '../../types';
import { GlassCard } from '../ui/GlassCard';

interface WorksSectionProps {
  projects: Project[];
}

export const WorksSection = ({ projects }: WorksSectionProps) => {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'Enterprise', 'Regulated', 'Forms', 'Design System', 'Mobile', 'Research'];

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter(p => 
      p.tags.some(tag => tag.includes(activeFilter)) || 
      p.category === activeFilter
    );
  }, [activeFilter, projects]);

  return (
    <section id="works" className="py-32 px-6 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Index Header */}
        <div className="flex flex-col items-start mb-16 gap-6">
          <h3 className="text-5xl font-bold text-white mb-2">Working Projects</h3>
          <p className="text-slate-400 max-w-2xl text-lg leading-relaxed">
            Selected product and UX work across enterprise platforms, regulated workflows, and modernisation projects.
          </p>
          
          {/* Filter Bar */}
          <div className="flex flex-wrap gap-2 mt-4">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`
                  px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                  ${activeFilter === filter 
                    ? 'bg-pink-600 text-white shadow-[0_0_15px_rgba(236,72,153,0.4)]' 
                    : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border border-white/5'}
                `}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <GlassCard 
              key={project.id} 
              onClick={() => router.push(`/projects/${project.id}`)}
              className="flex flex-col h-full group cursor-pointer hover:-translate-y-2 transition-transform duration-500 overflow-hidden"
            >
              {/* Card Header (Gradient + Icon) */}
              <div className={`h-48 w-full bg-gradient-to-br ${project.gradient} relative overflow-hidden p-6`}>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                
                {project.image ? (
                  <>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-100 transition-all duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                  </>
                ) : (
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                )}

                <div className="relative z-10 flex justify-between items-start">
                  <span className="px-3 py-1 bg-black/30 backdrop-blur-md rounded-full text-xs font-medium text-white/90 border border-white/10 shadow-sm">
                    {project.category}
                  </span>
                  <div className="bg-white/10 p-2 rounded-full backdrop-blur-sm text-white/80 group-hover:text-white transition-colors shadow-sm">
                    {project.icon}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow">
                <h4 className="text-xl font-bold text-white mb-1 group-hover:text-pink-400 transition-colors">
                  {project.title}
                </h4>
                <p className="text-pink-500/80 text-sm font-medium mb-3">{project.subtitle}</p>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.summary}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="text-xs font-mono text-slate-500 bg-slate-900/50 px-2 py-1 rounded border border-white/5">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-xs font-mono text-slate-500 bg-slate-900/50 px-2 py-1 rounded border border-white/5">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
