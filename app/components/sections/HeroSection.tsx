'use client';

import { ArrowDown } from 'lucide-react';

interface HeroSectionProps {
  name: string;
  role: string;
}

export const HeroSection = ({ name, role }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen w-full flex items-center px-6 md:px-12 z-10 border-b border-white/5">
      <div className="max-w-7xl mx-auto w-full pt-24 pb-20">
        <p className="text-sm uppercase tracking-[0.18em] text-slate-500 mb-8">
          {name} · {role}
        </p>
        <h1 className="max-w-4xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.04em] text-white leading-[1.02]">
          Designing clear experiences for{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400">
            complex enterprise systems.
          </span>
        </h1>
        <p className="mt-10 max-w-2xl text-lg md:text-xl text-slate-400 leading-relaxed">
          Senior UI/UX design across national platforms, regulated workflows and design systems — from discovery and workflow definition through delivery and implementation QA.
        </p>
        <a
          href="#works"
          className="inline-flex items-center gap-2 mt-12 text-sm font-medium text-white border-b border-slate-600 pb-1 hover:border-white transition-colors"
        >
          View selected work <ArrowDown size={15} />
        </a>
      </div>
    </section>
  );
};
