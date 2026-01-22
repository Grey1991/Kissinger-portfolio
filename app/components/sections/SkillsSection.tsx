'use client';

import { GraduationCap } from 'lucide-react';
import { Education } from '../../types';
import { GlassCard } from '../ui/GlassCard';

interface SkillsSectionProps {
  skills: string[];
  tools: string[];
  education: Education[];
}

export const SkillsSection = ({ skills, tools, education }: SkillsSectionProps) => {
  return (
    <section id="skills" className="py-24 bg-slate-900/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
          <span className="text-pink-500">#</span> Expertise
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h4 className="text-lg uppercase tracking-widest text-slate-500 font-semibold mb-6">Core Competencies</h4>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <div key={skill} className="bg-slate-800/50 border border-slate-700 hover:border-pink-500/50 text-slate-200 px-4 py-3 rounded-xl transition-all hover:scale-105">
                  {skill}
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="text-lg uppercase tracking-widest text-slate-500 font-semibold mb-6">Design Arsenal</h4>
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool) => (
                <GlassCard key={tool} className="p-4 flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="font-medium text-slate-200">{tool}</span>
                </GlassCard>
              ))}
            </div>
            <div className="mt-12 pt-8 border-t border-slate-800">
              <h4 className="text-lg uppercase tracking-widest text-slate-500 font-semibold mb-6 flex items-center gap-2">
                <GraduationCap size={20} /> Education
              </h4>
              <div className="space-y-4">
                {education.map((edu, idx) => (
                  <div key={idx} className="flex justify-between items-center text-sm">
                    <div>
                      <div className="text-white font-medium">{edu.degree}</div>
                      <div className="text-slate-500">{edu.school}</div>
                    </div>
                    <div className="text-slate-600 font-mono">{edu.year}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
