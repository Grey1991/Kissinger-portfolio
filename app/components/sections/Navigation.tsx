'use client';

import { Linkedin } from 'lucide-react';
import Image from 'next/image';

interface NavigationProps {
  email: string;
  linkedin: string;
}

export const Navigation = ({ linkedin }: NavigationProps) => {
  return (
    <nav className="portfolio-nav" aria-label="Main navigation">
      <div className="portfolio-shell flex justify-between items-center gap-4">
      <a href="#top" className="nav-identity" aria-label="Kissinger Hu, back to top">
        <span className="nav-avatar"><Image src="/KH icon.png" alt="" width={32} height={32} /></span>
        <span className="nav-identity-name">Kissinger Hu</span>
      </a>
      <div className="flex gap-5 md:gap-8 text-sm font-medium">
        {['Works', 'Skills', 'Contact'].map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`}
            className="portfolio-nav-link"
          >
            {item}
          </a>
        ))}
      </div>
      <a 
        href={linkedin} 
        target="_blank" 
        rel="noreferrer"
        className="hidden md:flex items-center gap-2 portfolio-nav-link text-sm"
      >
        <Linkedin size={14} /> Connect
      </a>
      </div>
    </nav>
  );
};
