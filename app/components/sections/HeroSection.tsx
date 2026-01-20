'use client';

import { ChevronDown } from 'lucide-react';
import { Typewriter } from '../ui/Typewriter';

interface HeroSectionProps {
  name: string;
}

export const HeroSection = ({ name }: HeroSectionProps) => {
  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center px-6 z-10">
      <div className="max-w-4xl w-full text-center space-y-8 mix-blend-screen">
        <h2 className="text-pink-400 tracking-[0.2em] text-sm md:text-base uppercase font-semibold animate-fade-in-up">
          Portfolio 2026
        </h2>
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.1)] leading-tight">
          PORTFOLIO FOR<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400 animate-pulse-slow">
            {name.toUpperCase()}
          </span>
        </h1>
        <div className="text-xl md:text-2xl text-slate-400 font-light h-12 flex items-center justify-center gap-2">
          <span>I am a</span>
          <span className="text-white font-normal border-b border-pink-500">
            <Typewriter 
              texts={['Senior UI/UX Designer', 'Complex System Architect', 'Experience Crafter', 'Problem Solver']} 
            />
          </span>
        </div>
      </div>

      <div className="absolute bottom-12 animate-bounce opacity-50 text-pink-400">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};
