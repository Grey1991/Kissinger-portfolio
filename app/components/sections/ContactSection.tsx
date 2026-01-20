'use client';

import { Mail, Download, Linkedin, Globe } from 'lucide-react';

interface ContactSectionProps {
  email: string;
  linkedin: string;
  website: string;
}

export const ContactSection = ({ email, linkedin, website }: ContactSectionProps) => {
  return (
    <section id="contact" className="py-32 px-6 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent pointer-events-none"></div>
      
      <div className="max-w-2xl mx-auto relative z-10 space-y-8">
        <h2 className="text-5xl font-bold text-white tracking-tight">
          Let&apos;s build something <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">extraordinary.</span>
        </h2>
        <p className="text-slate-400 text-lg">
          Currently available for new opportunities. Specialized in turning complex problems into elegant, user-centric solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <a 
            href={`mailto:${email}`}
            className="px-8 py-4 bg-white text-slate-950 font-bold rounded-full hover:bg-pink-50 transition-colors flex items-center justify-center gap-2 cursor-none"
          >
            <Mail size={18} /> Contact Me
          </a>
          <a 
            href="/Kissinger_Hu_Resume.pdf" 
            download
            className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-all flex items-center justify-center gap-2 cursor-none"
          >
            <Download size={18} /> Download CV
          </a>
        </div>

        <div className="pt-16 flex justify-center gap-8 text-slate-500">
          <a href={linkedin} className="hover:text-pink-400 transition-colors cursor-none"><Linkedin size={24}/></a>
          <a href={website} className="hover:text-pink-400 transition-colors cursor-none"><Globe size={24}/></a>
        </div>
        
        <footer className="pt-12 text-xs text-slate-600">
          © 2026 Kissinger Hu. Hand-crafted with React & HTML5 Canvas.
        </footer>
      </div>
    </section>
  );
};
