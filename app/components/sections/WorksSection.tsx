'use client';

import { useState, useMemo } from 'react';
import { Project } from '../../types';
import { ProjectCard } from '../projects/ProjectCard';

const FEATURED_PROJECT_ORDER = ['slshub', 'surfguard', 'memberjoin', 'hubx', 'courtcanva'];
const EARLIER_PROJECT_IDS = new Set(['nootee', 'jrfood']);
const FORM_PROJECT_IDS = new Set(['slshub', 'surfguard', 'memberjoin', 'hubx']);

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
    const filterTerm = activeFilter === 'Forms' ? 'form' : activeFilter.toLowerCase();
    return orderedProjects.filter(p =>
      (activeFilter === 'Forms' && FORM_PROJECT_IDS.has(p.id)) ||
      p.tags.some(tag => tag.toLowerCase().includes(filterTerm)) ||
      p.category.toLowerCase() === filterTerm
    );
  }, [activeFilter, orderedProjects]);

  const primaryProjects = filteredProjects.filter((project) => !EARLIER_PROJECT_IDS.has(project.id));
  const earlierProjects = filteredProjects.filter((project) => EARLIER_PROJECT_IDS.has(project.id));

  return (
    <section id="works" className="portfolio-section">
      <div className="portfolio-shell">
        {/* Index Header */}
        <div className="flex flex-col items-start mb-10 gap-5">
          <p className="section-label"><span>01 /</span> Selected work</p>
          <h2 className="section-title">The work behind the thinking.</h2>
          <p className="section-description max-w-2xl">
            Real products, complex requirements and the decisions that brought them together.
          </p>
          
          {/* Filter Bar */}
          <div className="flex flex-wrap gap-x-5 gap-y-2 mt-3 border-b border-white/10">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                aria-pressed={activeFilter === filter}
                className={`
                  -mb-px pb-3 text-sm font-medium transition-colors duration-200 border-b
                  ${activeFilter === filter 
                    ? 'text-[#c6bbff] border-[#c6bbff]'
                    : 'text-slate-400 hover:text-white border-transparent'}
                `}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {primaryProjects.map((project) => (
            <ProjectCard key={project.id} project={project} onClick={onProjectClick} />
          ))}
        </div>

        {earlierProjects.length > 0 && (
          <div className="mt-14">
            <div className="mb-7">
              <h3 className="text-2xl font-semibold tracking-tight text-white">Earlier client &amp; product work</h3>
              <p className="section-description mt-2 max-w-2xl">
                Earlier end-to-end client and product engagements spanning research, interaction design and delivery.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
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
