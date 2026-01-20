'use client';

import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export const GlassCard = ({ children, className = "", onClick }: GlassCardProps) => (
  <div onClick={onClick} className={`
    interactive-card relative overflow-hidden rounded-2xl
    bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl
    hover:border-pink-500/30 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(236,72,153,0.15)]
    transition-all duration-500 ease-out
    group ${className}
  `}>
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    {children}
  </div>
);
