'use client';

import { Linkedin } from 'lucide-react';

interface NavigationProps {
  email: string;
  linkedin: string;
}

export const Navigation = ({ email, linkedin }: NavigationProps) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center bg-gradient-to-b from-slate-950/80 to-transparent backdrop-blur-[2px]">
      <div className="text-xl font-bold tracking-tight text-white flex items-center gap-2 group cursor-none">
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-pink-500 to-purple-600 flex items-center justify-center font-bold shadow-lg shadow-pink-500/20 group-hover:shadow-pink-500/40 transition-shadow">K</div>
      </div>
      <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
        {['Experience', 'Skills', 'Works', 'Contact'].map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`}
            className="hover:text-pink-400 transition-colors duration-300 relative group cursor-none"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </div>
      <a 
        href={linkedin} 
        target="_blank" 
        rel="noreferrer"
        className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 hover:bg-white/10 hover:border-pink-500/40 hover:text-pink-300 transition-all duration-300 text-xs uppercase tracking-wider cursor-none"
      >
        <Linkedin size={14} /> Connect
      </a>
    </nav>
  );
};
