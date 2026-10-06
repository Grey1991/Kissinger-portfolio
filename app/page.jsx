'use client';

import { useState } from 'react';
import { RESUME_DATA } from './data/resume-data';

// UI Components

// Section Components
import { Navigation } from './components/sections/Navigation';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { WorksSection } from './components/sections/WorksSection';
import { ContactSection } from './components/sections/ContactSection';

// Complex Components
import { ProjectModal } from './components/ProjectModal';

// Styles
import './styles/animations.css';
import './styles/case-studies.css';

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="portfolio-home min-h-screen font-sans">

      {/* Navigation */}
      <Navigation 
        email={RESUME_DATA.contact.email}
        linkedin={RESUME_DATA.contact.linkedin}
      />

      {/* Hero Section */}
      <HeroSection name={RESUME_DATA.name} role={RESUME_DATA.role} />

      {/* Main Content */}
      <main className="relative z-10">
        
        {/* Works Section */}
        <WorksSection 
          projects={RESUME_DATA.projects}
          onProjectClick={setSelectedProject}
        />

        <AboutSection summary={RESUME_DATA.summary} />

        {/* Skills Section */}
        <SkillsSection 
          skills={RESUME_DATA.skills}
          tools={RESUME_DATA.tools}
        />

        {/* Contact Section */}
        <ContactSection 
          email={RESUME_DATA.contact.email}
          linkedin={RESUME_DATA.contact.linkedin}
          website={RESUME_DATA.contact.website}
        />

      </main>
      
      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
}
