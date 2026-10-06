'use client';

import { PortfolioImage } from '../ui/PortfolioImage';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

export const ProjectCard = ({ project, onClick }: ProjectCardProps) => (
  <button
    type="button"
    onClick={(event) => { event.currentTarget.focus(); onClick(project); }}
    className="portfolio-project-card flex flex-col h-full w-full text-left group"
  >
    <div className="project-preview w-full relative overflow-hidden p-5">
      <div className="absolute inset-0 bg-slate-950/10" />

      {project.backgroundImage && (
        <PortfolioImage
          src={project.backgroundImage}
          sizes="(min-width: 768px) 50vw, 100vw"
          alt=""
          className="absolute inset-0 w-full h-full object-cover brightness-[0.35]"
        />
      )}

      {project.image ? (
        <>
          <PortfolioImage
            src={project.image}
            sizes="(min-width: 768px) 50vw, 100vw"
            alt={project.title}
            className="absolute inset-0 w-full h-full opacity-95 object-contain object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
        </>
      ) : !project.backgroundImage ? (
        <div className="absolute inset-0 bg-slate-800" />
      ) : null}

      <div className="relative z-10 flex justify-between items-start">
        <span className="px-3 py-1 bg-black/50 rounded-full text-xs font-medium text-white/90 border border-white/10">
          {project.category}
        </span>
        <div className="bg-black/40 p-2 rounded-full text-white/80 border border-white/10">
          {project.icon}
        </div>
      </div>
    </div>

    <div className="p-5 flex flex-col flex-grow">
      <h3 className="text-lg md:text-xl font-semibold text-white mb-2 tracking-tight">
        {project.title}
      </h3>
      <p className="text-[#c6bbff] text-xs font-medium mb-3">{project.subtitle}</p>
      <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-grow line-clamp-4">
        {project.shortSummary || project.summary}
      </p>

      <div className="mt-auto flex items-end justify-between gap-4 border-t border-white/[0.07] pt-4">
        <div className="flex flex-wrap gap-x-3 gap-y-1">
          {project.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="text-xs text-slate-500">
              {tag}
            </span>
          ))}
        </div>
        <span className="flex shrink-0 items-center gap-1 text-xs font-medium text-slate-300 transition-colors group-hover:text-white">
          View project <ArrowUpRight size={15} />
        </span>
      </div>
    </div>
  </button>
);
