'use client';

import { Mail, Download, ArrowUpRight } from 'lucide-react';

interface ContactSectionProps {
  email: string;
  linkedin: string;
  website: string;
}

export const ContactSection = ({ email, linkedin }: ContactSectionProps) => {
  return (
    <section id="contact" className="portfolio-section">
      <div className="portfolio-shell space-y-7">
        <p className="section-label"><span>04 /</span> Next chapter</p>
        <h2 className="contact-title">Good work starts<br />with a conversation<span>.</span></h2>
        <p className="section-description max-w-xl">
          Looking for a designer who can take ownership, untangle complexity and care about the finish? Let&apos;s talk.
        </p>
        
        <div className="flex flex-wrap gap-3 pt-2">
          <a 
            href={`mailto:${email}`}
            className="portfolio-button primary"
          >
            <Mail size={18} /> Contact Me
          </a>
          <a 
            href="/cv/Kissinger Hu-Resume-2026.pdf" 
            download="Kissinger Hu-Resume-2026.pdf"
            className="portfolio-button"
          >
            <Download size={18} /> Download CV
          </a>
        </div>
        <footer className="portfolio-footer"><span>Kissinger Hu · Sydney, Australia</span><a href={linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14} /></a></footer>
      </div>
    </section>
  );
};
