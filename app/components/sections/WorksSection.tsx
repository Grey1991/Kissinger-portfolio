'use client';

import { useState, useMemo } from 'react';
import { Project } from '../../types';
import { ProjectCard } from '../projects/ProjectCard';

const FEATURED_PROJECT_ORDER = ['slshub', 'surfguard', 'memberjoin', 'hubx', 'courtcanva'];
const EARLIER_PROJECT_IDS = new Set(['nootee', 'jrfood']);

interface WorksSectionProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

export const WorksSection = ({ projects, onProjectClick }: WorksSectionProps) => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'Enterprise', 'Regulated', 'Forms', 'Design System', 'Mobile', 'Research'];

  const orderedProjects = useMemo(() => {
    const originalOrder = new Map(projects.map((project, index) => [project.id, index]));

    return [...projects].sort((a, b) => {
      const aPriority = FEATURED_PROJECT_ORDER.indexOf(a.id);
      const bPriority = FEATURED_PROJECT_ORDER.indexOf(b.id);
      const aRank = aPriority === -1 ? FEATURED_PROJECT_ORDER.length + (originalOrder.get(a.id) ?? 0) : aPriority;
      const bRank = bPriority === -1 ? FEATURED_PROJECT_ORDER.length + (originalOrder.get(b.id) ?? 0) : bPriority;

      return aRank - bRank;
    });
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return orderedProjects;
    return orderedProjects.filter(p =>
      p.tags.some(tag => tag.includes(activeFilter)) || 
      p.category === activeFilter
    );
  }, [activeFilter, orderedProjects]);

  const primaryProjects = filteredProjects.filter((project) => !EARLIER_PROJECT_IDS.has(project.id));
  const earlierProjects = filteredProjects.filter((project) => EARLIER_PROJECT_IDS.has(project.id));

  return (
    <section id="works" className="py-16 md:py-32 px-6 bg-slate-950 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Index Header */}
        <div className="flex flex-col items-start mb-16 gap-6">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Selected work</p>
          <h3 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-2">Complex products, made clearer.</h3>
          <p className="text-slate-400 max-w-2xl text-lg leading-relaxed">
            Selected product and UX work across enterprise platforms, regulated workflows, and modernisation projects.
          </p>
          
          {/* Filter Bar */}
          <div className="flex flex-wrap gap-x-6 gap-y-3 mt-4 border-b border-white/10">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`
                  -mb-px pb-3 text-sm font-medium transition-colors duration-200 border-b
                  ${activeFilter === filter 
                    ? 'text-white border-white'
                    : 'text-slate-500 hover:text-slate-200 border-transparent'}
                `}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {primaryProjects.map((project) => (
            <ProjectCard key={project.id} project={project} onClick={onProjectClick} />
          ))}
        </div>

        {earlierProjects.length > 0 && (
          <div className="mt-20">
            <div className="mb-8">
              <h4 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Earlier client &amp; product work</h4>
              <p className="text-slate-400 mt-2 max-w-2xl">
                Earlier end-to-end client and product engagements spanning research, interaction design and delivery.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {earlierProjects.map((project) => (
                <ProjectCard key={project.id} project={project} onClick={onProjectClick} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
