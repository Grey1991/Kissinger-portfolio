'use client';

import { GlassCard } from '../ui/GlassCard';

interface SkillsSectionProps {
  skills: string[];
  tools: string[];
}

export const SkillsSection = ({ skills, tools }: SkillsSectionProps) => {
  return (
    <section id="skills" className="py-24 md:py-32 bg-slate-950 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-500 mb-5">Capabilities</p>
          <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
            From product definition to implementation QA.
          </h3>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-[0.18em] text-slate-500 font-semibold mb-6">Product design</h4>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <div key={skill} className="border border-white/10 text-slate-300 px-4 py-3 rounded-lg">
                  {skill}
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-[0.18em] text-slate-500 font-semibold mb-6">Tools &amp; delivery</h4>
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool) => (
                <GlassCard key={tool} className="p-4 flex items-center gap-3 !bg-transparent !shadow-none hover:!border-white/20">
                  <div className="w-1.5 h-1.5 bg-slate-500 rounded-full"></div>
                  <span className="font-medium text-slate-200">{tool}</span>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
