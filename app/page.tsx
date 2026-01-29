'use client';

import { RESUME_DATA } from './data/resume-data';

// UI Components
import { ParticleDonut } from './components/ui/ParticleDonut';

// Section Components
import { Navigation } from './components/sections/Navigation';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { WorksSection } from './components/sections/WorksSection';
import { ContactSection } from './components/sections/ContactSection';

// Styles
import './styles/animations.css';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-pink-500/30">
      
      <ParticleDonut />

      {/* Navigation */}
      <Navigation 
        email={RESUME_DATA.contact.email}
        linkedin={RESUME_DATA.contact.linkedin}
      />

      {/* Hero Section */}
      <HeroSection name={RESUME_DATA.name} />

      {/* Main Content */}
      <main className="relative z-10 bg-gradient-to-b from-transparent via-slate-950/90 to-slate-950 backdrop-blur-[2px]">
        
        {/* About Section */}
        <AboutSection 
          summary={RESUME_DATA.summary}
          location={RESUME_DATA.location}
          email={RESUME_DATA.contact.email}
        />

        {/* Works Section */}
        <WorksSection 
          projects={RESUME_DATA.projects}
        />

        {/* Skills Section */}
        <SkillsSection 
          skills={RESUME_DATA.skills}
          tools={RESUME_DATA.tools}
          education={RESUME_DATA.education}
        />

        {/* Experience Section */}
        <ExperienceSection experience={RESUME_DATA.experience} />

        {/* Contact Section */}
        <ContactSection 
          email={RESUME_DATA.contact.email}
          linkedin={RESUME_DATA.contact.linkedin}
          website={RESUME_DATA.contact.website}
        />

      </main>
    </div>
  );
}


