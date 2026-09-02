'use client';

import { Linkedin } from 'lucide-react';

interface NavigationProps {
  email: string;
  linkedin: string;
}

export const Navigation = ({ email, linkedin }: NavigationProps) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-5 flex justify-between items-center bg-slate-950/85 backdrop-blur-xl border-b border-white/5">
      <div className="text-xl font-bold tracking-tight text-white flex items-center gap-2 group">
        <div className="w-8 h-8 rounded-full overflow-hidden border border-white/10">
          <img src="/KH icon.png" alt="KH" className="w-full h-full object-cover" />
        </div>
        <span className="opacity-90 tracking-wide text-base">Kissinger Hu</span>
      </div>
      <div className="flex gap-4 md:gap-8 text-xs md:text-sm font-medium tracking-wide">
        {['Works', 'Skills', 'Contact'].map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`}
            className="text-slate-400 hover:text-white transition-colors duration-200"
          >
            {item}
          </a>
        ))}
      </div>
      <a 
        href={linkedin} 
        target="_blank" 
        rel="noreferrer"
        className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 hover:border-white/40 hover:text-white transition-colors duration-200 text-xs uppercase tracking-wider text-slate-300"
      >
        <Linkedin size={14} /> Connect
      </a>
    </nav>
  );
};
