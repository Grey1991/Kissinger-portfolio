'use client';

import { Experience } from '../../types';
import { GlassCard } from '../ui/GlassCard';

interface ExperienceSectionProps {
  experience: Experience[];
}

export const ExperienceSection = ({ experience }: ExperienceSectionProps) => {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
      <h3 className="text-4xl font-bold text-white mb-16 text-center">Professional Journey</h3>
      
      <div className="space-y-8 relative">
        {/* Timeline Line */}
        <div className="absolute left-0 md:left-1/2 w-1 h-full bg-slate-800 -translate-x-1/2 hidden md:block"></div>

        {experience.map((job, index) => (
          <div key={index} className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
            <div className="w-full md:w-1/2">
              <GlassCard className="p-8 group">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-white group-hover:text-pink-400 transition-colors">
                      {job.company}
                    </h4>
                    <p className="text-pink-400 font-medium text-sm mt-1">{job.role}</p>
                  </div>
                  <span className="text-xs font-mono text-slate-500 border border-slate-700 px-2 py-1 rounded">
                    {job.period}
                  </span>
                </div>
                <p className="text-slate-300 mb-6 text-sm italic border-l-2 border-pink-500/30 pl-3">
                  {job.description}
                </p>
                <ul className="space-y-3">
                  {job.achievements.map((point, i) => (
                    <li key={i} className="flex gap-3 text-sm text-slate-400 group-hover:text-slate-200 transition-colors">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-pink-500 shrink-0 shadow-[0_0_8px_rgba(236,72,153,0.5)]"></span>
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </div>
            <div className="hidden md:flex w-8 h-8 rounded-full bg-slate-900 border-2 border-pink-500 items-center justify-center z-10 shadow-[0_0_15px_rgba(236,72,153,0.5)]">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <div className="hidden md:block w-1/2"></div>
          </div>
        ))}
      </div>
    </section>
  );
};
