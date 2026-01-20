'use client';

import { MapPin, Mail, Layers, Users, Briefcase, Globe } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';

interface AboutSectionProps {
  summary: string;
  location: string;
  email: string;
}

export const AboutSection = ({ summary, location, email }: AboutSectionProps) => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h3 className="text-3xl font-bold text-white flex items-center gap-3">
            <span className="w-12 h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 inline-block"></span>
            About Me
          </h3>
          <p className="text-slate-300 leading-relaxed text-lg">
            {summary}
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <MapPin size={16} className="text-pink-400"/> {location}
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <Mail size={16} className="text-pink-400"/> {email}
            </div>
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 gap-4">
          <GlassCard className="p-6 flex flex-col items-center text-center hover:-translate-y-2">
            <Layers size={32} className="text-pink-400 mb-4" />
            <span className="text-3xl font-bold text-white">5+</span>
            <span className="text-sm text-slate-400 uppercase tracking-wider mt-1">Years Exp</span>
          </GlassCard>
          <GlassCard className="p-6 flex flex-col items-center text-center hover:-translate-y-2">
            <Users size={32} className="text-purple-400 mb-4" />
            <span className="text-3xl font-bold text-white">Sole</span>
            <span className="text-sm text-slate-400 uppercase tracking-wider mt-1">Designer for Multiple Companies</span>
          </GlassCard>
          <GlassCard className="p-6 flex flex-col items-center text-center hover:-translate-y-2">
            <Briefcase size={32} className="text-fuchsia-400 mb-4" />
            <span className="text-3xl font-bold text-white">B2B & B2C</span>
            <span className="text-sm text-slate-400 uppercase tracking-wider mt-1">Project Experience</span>
          </GlassCard>
          <GlassCard className="p-6 flex flex-col items-center text-center hover:-translate-y-2">
            <Globe size={32} className="text-rose-400 mb-4" />
            <span className="text-3xl font-bold text-white">Large Scale</span>
            <span className="text-sm text-slate-400 uppercase tracking-wider mt-1">Web Platforms</span>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};
