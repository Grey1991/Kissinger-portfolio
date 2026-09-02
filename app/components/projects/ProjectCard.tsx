'use client';

import { ArrowUpRight } from 'lucide-react';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

export const ProjectCard = ({ project, onClick }: ProjectCardProps) => (
  <button
    type="button"
    onClick={() => onClick(project)}
    className="flex flex-col h-full w-full text-left group overflow-hidden rounded-xl border border-white/10 bg-slate-900/40 hover:border-white/25 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
  >
    <div className={`h-52 w-full bg-gradient-to-br ${project.gradient} relative overflow-hidden p-5`}>
      <div className="absolute inset-0 bg-slate-950/10" />

      {project.backgroundImage && (
        <img
          src={project.backgroundImage}
          alt={`${project.title} background`}
          className="absolute inset-0 w-full h-full object-cover brightness-[0.35]"
        />
      )}

      {project.image ? (
        <>
          <img
            src={project.image}
            alt={project.title}
            className={`absolute inset-0 w-full h-full opacity-95 ${
              project.id === 'slshub'
                ? 'object-cover object-[120%_220%] scale-[1.3]'
                : project.id === 'surfguard'
                  ? 'object-cover object-[80%_center]'
                  : 'object-cover object-top'
            }`}
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

    <div className="p-6 flex flex-col flex-grow">
      <h4 className="text-xl font-semibold text-white mb-1">
        {project.title}
      </h4>
      <p className="text-slate-500 text-sm font-medium mb-4 line-clamp-1">{project.subtitle}</p>
      <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-4">
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
          View <ArrowUpRight size={14} />
        </span>
      </div>
    </div>
  </button>
);
