'use client';

import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { ParticleDonut } from '../ui/ParticleDonut';

interface HeroSectionProps {
  name: string;
  role: string;
}

export const HeroSection = ({ name, role }: HeroSectionProps) => {
  return (
    <section id="top" className="portfolio-hero">
      <div className="portfolio-shell relative z-10">
        <div className="hero-topline"><p className="section-label">{role}</p><span>Sydney, Australia</span></div>
        <div className="hero-composition">
          <div className="hero-copy">
            <h1 className="hero-name">{name}</h1>
            <p className="hero-statement">Complex systems.<br /><span>Clear experiences.</span></p>
            <p className="hero-description">I design products that make complicated tasks feel straightforward. Enterprise platforms, fintech and the details that make them work.</p>
            <div className="flex flex-wrap gap-3 mt-7">
              <a href="#works" className="portfolio-button primary">Explore my work <ArrowDown size={16} /></a>
              <a href="/cv/Kissinger%20Hu-Resume-2026.pdf" download="Kissinger-Hu-Resume.pdf" className="portfolio-button">Download CV <ArrowUpRight size={16} /></a>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true"><ParticleDonut /></div>
        </div>
      </div>
    </section>
  );
};
