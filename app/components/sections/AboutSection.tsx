'use client';

import { MapPin, Mail } from 'lucide-react';

interface AboutSectionProps {
  summary: string;
  location: string;
  email: string;
}

export const AboutSection = ({ summary, location, email }: AboutSectionProps) => {
  const metrics = [
    { value: '200K+', label: 'Member network' },
    { value: '316', label: 'Clubs nationwide' },
    { value: '50+', label: 'Figma components' },
    { value: '5+', label: 'Years experience' },
  ];

  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-16 lg:gap-24 items-start">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-500">About</p>
          <h3 className="text-3xl md:text-4xl font-semibold text-white leading-tight">
            Independent design ownership for complex digital products.
          </h3>
          <p className="text-slate-400 leading-relaxed text-lg max-w-3xl">
            {summary}
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <MapPin size={16} /> {location}
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <Mail size={16} /> {email}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 border-t border-l border-white/10">
          {metrics.map((metric) => (
            <div key={metric.label} className="min-h-36 p-6 border-r border-b border-white/10 flex flex-col justify-end">
              <span className="text-3xl md:text-4xl font-semibold text-white tracking-tight">{metric.value}</span>
              <span className="text-sm text-slate-500 mt-2">{metric.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
