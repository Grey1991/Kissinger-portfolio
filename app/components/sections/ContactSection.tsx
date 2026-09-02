'use client';

import { Mail, Download } from 'lucide-react';

interface ContactSectionProps {
  email: string;
  linkedin: string;
  website: string;
}

export const ContactSection = ({ email }: ContactSectionProps) => {
  return (
    <section id="contact" className="py-16 md:py-32 px-6 text-center relative border-t border-white/5">
      <div className="max-w-2xl mx-auto relative z-10 space-y-8">
        <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">
          Let&apos;s make complex products<br/>
          <span className="text-slate-400">easier to use.</span>
        </h2>
        <p className="text-slate-400 text-lg">
          Available for senior product and UI/UX design opportunities involving complex platforms, operational workflows and design systems.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <a 
            href={`mailto:${email}`}
            className="px-8 py-3.5 bg-white text-slate-950 font-semibold rounded-lg hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
          >
            <Mail size={18} /> Contact Me
          </a>
          <a 
            href="/cv/Kissinger Hu-Resume-2026.pdf" 
            download="Kissinger Hu-Resume-2026.pdf"
            className="px-8 py-3.5 bg-transparent border border-white/20 text-white font-semibold rounded-lg hover:bg-white/[0.06] transition-colors flex items-center justify-center gap-2"
          >
            <Download size={18} /> Download CV
          </a>
        </div>

      </div>
    </section>
  );
};
