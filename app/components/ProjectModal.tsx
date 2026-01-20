'use client';

import { useEffect, useRef, useState } from 'react';
import { X, Mail, Shield, Menu, Maximize2 } from 'lucide-react';
import { Project } from '../types';
import { ScrollytellingBlock } from './ScrollytellingBlock';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState("");

  // Handle scroll spy for Table of Contents
  useEffect(() => {
    if (!project?.details.toc) return;

    const handleScroll = () => {
      if (!scrollContainerRef.current || !project.details.toc) return;
      
      const scrollPos = scrollContainerRef.current.scrollTop + 200;
      
      for (const item of project.details.toc) {
        const element = document.getElementById(item.id);
        if (element && element.offsetTop <= scrollPos) {
          setActiveSection(item.id);
        }
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [project]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/90 backdrop-blur-md animate-fade-in" 
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-6xl h-[90vh] bg-slate-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-slide-up">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 hover:bg-white/20 text-white transition-colors border border-white/10"
        >
          <X size={24} />
        </button>

        {/* Scrollable Area */}
        <div ref={scrollContainerRef} className="overflow-y-auto h-full scrollbar-thin scrollbar-thumb-pink-500/30 scrollbar-track-transparent">
          
          {/* Header Hero */}
          <div className={`relative h-80 w-full bg-gradient-to-br ${project.gradient} p-8 md:p-12 flex flex-col justify-end`}>
            {project.image ? (
              <>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
              </>
            ) : (
              <div className="absolute inset-0 bg-black/20" />
            )}
            
            <div className="relative z-10 space-y-4">
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-black/40 backdrop-blur rounded-full text-xs font-medium text-white/90 border border-white/10">
                  {project.category}
                </span>
                <span className="px-3 py-1 bg-black/40 backdrop-blur rounded-full text-xs font-medium text-white/90 border border-white/10">
                  {project.details.year}
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">{project.title}</h2>
              <p className="text-white/80 text-xl max-w-2xl font-light">{project.summary}</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row bg-slate-950 relative">
            
            {/* STICKY TABLE OF CONTENTS (Desktop Only) */}
            {project.details.toc && (
              <div className="hidden md:block w-64 bg-slate-900/50 border-r border-white/5 p-6 sticky top-0 h-full overflow-y-auto flex-shrink-0">
                <h5 className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-6 flex items-center gap-2">
                  <Menu size={14} /> Contents
                </h5>
                <ul className="space-y-4">
                  {project.details.toc.map((item) => (
                    <li key={item.id}>
                      <a 
                        href={`#${item.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          const el = document.getElementById(item.id);
                          el?.scrollIntoView({ behavior: 'smooth' });
                          setActiveSection(item.id);
                        }}
                        className={`text-sm transition-colors block border-l-2 pl-4 ${
                          activeSection === item.id 
                            ? 'border-pink-500 text-white font-medium' 
                            : 'border-transparent text-slate-500 hover:text-slate-300'
                        }`}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Main Content Body */}
            <div className="flex-grow p-8 md:p-12 space-y-16">
              
              {/* Meta Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-b border-white/10 pb-12">
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-slate-500 mb-2">Role</h4>
                  <p className="text-white font-medium">{project.details.role}</p>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-slate-500 mb-2">Platform</h4>
                  <p className="text-white font-medium">{project.details.platform}</p>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-slate-500 mb-2">Tools</h4>
                  <p className="text-white font-medium">{project.details.tools}</p>
                </div>
                <div className="flex items-end">
                  <button className="w-full py-2 bg-pink-600 hover:bg-pink-500 text-white rounded-lg font-medium text-sm transition-colors flex items-center justify-center gap-2 shadow-lg shadow-pink-900/20">
                    <Mail size={16} /> Contact for Demo
                  </button>
                </div>
              </div>

              {/* CONDITIONAL RENDERING: FULL CASE STUDY OR STANDARD LAYOUT */}
              {project.isCaseStudy && project.details.contentSections ? (
                <div className="space-y-20 max-w-4xl mx-auto">
                  {project.details.contentSections.map((section, index) => (
                    <div 
                      key={index} 
                      id={section.id} 
                      className="animate-fade-in-up scroll-mt-10" 
                      style={{animationDelay: `${index * 100}ms`}}
                    >
                      {/* Text Block */}
                      {section.type === 'text-block' && (
                        <div className="max-w-3xl">
                          <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="w-8 h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 inline-block"/> 
                            {section.title}
                          </h3>
                          {section.highlight && (
                            <div className="mb-8 p-6 bg-pink-500/5 border-l-4 border-pink-500 text-pink-200 text-lg font-medium italic rounded-r-lg">
                              &quot;{section.highlight}&quot;
                            </div>
                          )}
                          <p className="text-slate-300 leading-relaxed text-lg whitespace-pre-line">
                            {section.content}
                          </p>
                        </div>
                      )}

                      {/* Image Block */}
                      {section.type === 'image' && (
                        <div className="w-full my-8 group cursor-zoom-in">
                          <div className={`relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl ${section.wrapperClass || ''}`}>
                            <img 
                              src={section.src} 
                              alt={section.alt}
                              className={`w-full h-auto object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.01] transition-all duration-500 ${section.imageClass || ''}`}
                            />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                              <div className="bg-black/50 backdrop-blur px-4 py-2 rounded-full text-white text-sm flex items-center gap-2">
                                <Maximize2 size={16} /> View Fullscreen
                              </div>
                            </div>
                          </div>
                          {section.caption && (
                            <p className="text-center text-slate-500 text-sm mt-4 italic border-b border-white/5 pb-4 inline-block px-4">
                              {section.caption}
                            </p>
                          )}
                        </div>
                      )}

                      {/* Scrollytelling Block */}
                      {section.type === 'scrollytelling' && (
                        <ScrollytellingBlock section={section} />
                      )}

                      {/* Video Block */}
                      {section.type === 'video' && (
                        <div className="w-full my-12">
                          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl">
                            <video 
                              src={section.src}
                              controls
                              className="w-full h-auto"
                            >
                              Your browser does not support the video tag.
                            </video>
                          </div>
                          {section.caption && (
                            <p className="text-center text-slate-500 text-sm mt-4 italic">
                              {section.caption}
                            </p>
                          )}
                        </div>
                      )}

                      {/* Gallery Grid */}
                      {section.type === 'gallery' && section.images && (
                        <div className="my-12">
                          <div className={`grid gap-6 ${section.images.length === 2 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-2 md:grid-cols-4'}`}>
                            {section.images.map((imgSrc, imgIdx) => (
                              <div key={imgIdx} className="relative overflow-hidden rounded-xl border border-white/10 group cursor-zoom-in bg-slate-900 shadow-lg hover:shadow-pink-900/20 transition-all duration-300">
                                <img 
                                  src={imgSrc} 
                                  alt={`Gallery item ${imgIdx}`}
                                  className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                                />
                              </div>
                            ))}
                          </div>
                          {section.caption && (
                            <p className="text-center text-slate-500 text-sm mt-6 italic">
                              {section.caption}
                            </p>
                          )}
                        </div>
                      )}

                      {/* Stats Grid */}
                      {section.type === 'stats-grid' && section.stats && (
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                          {section.stats.map((stat, idx) => (
                            <div key={idx} className="p-6 bg-white/5 rounded-2xl border border-white/10 text-center hover:bg-white/10 transition-colors">
                              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                              <div className="text-pink-400 font-medium text-sm uppercase tracking-wider">{stat.label}</div>
                              {stat.sub && <div className="text-slate-500 text-xs mt-2">{stat.sub}</div>}
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Feature List */}
                      {section.type === 'feature-list' && section.features && (
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                            <span className="w-8 h-[2px] bg-purple-500 inline-block"/> {section.title}
                          </h3>
                          <p className="text-slate-400 mb-8 max-w-3xl text-lg">{section.intro}</p>
                          <div className="grid md:grid-cols-3 gap-6">
                            {section.features.map((feature, idx) => (
                              <div key={idx} className="p-6 bg-slate-900 border border-white/10 rounded-xl hover:border-pink-500/30 transition-colors group">
                                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-pink-400 mb-4 group-hover:scale-110 transition-transform">
                                  {feature.icon}
                                </div>
                                <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
                                <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Impact Section */}
                      {section.type === 'impact' && (
                        <div className="bg-gradient-to-r from-pink-900/20 to-purple-900/20 p-8 md:p-12 rounded-3xl border border-pink-500/20 text-center shadow-2xl shadow-pink-900/10">
                          <h3 className="text-3xl font-bold text-white mb-6">{section.title}</h3>
                          <p className="text-slate-200 text-xl leading-relaxed max-w-4xl mx-auto">
                            {section.content}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                // STANDARD LAYOUT FOR OTHER PROJECTS
                <div className="grid md:grid-cols-3 gap-12">
                  {/* Left Column (Context) */}
                  <div className="md:col-span-1 space-y-8">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <span className="w-1 h-6 bg-pink-500 rounded-full"/> Overview
                      </h3>
                      <p className="text-slate-400 leading-relaxed text-sm">
                        {project.details.overview}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <span className="w-1 h-6 bg-purple-500 rounded-full"/> My Role
                      </h3>
                      <p className="text-slate-400 leading-relaxed text-sm">
                        {project.details.myRole}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <span className="w-1 h-6 bg-blue-500 rounded-full"/> Constraints
                      </h3>
                      <p className="text-slate-400 leading-relaxed text-sm">
                        {project.details.constraints}
                      </p>
                    </div>
                  </div>

                  {/* Right Column (Process & Results) */}
                  <div className="md:col-span-2 space-y-10">
                    {/* Approach */}
                    <div className="bg-white/5 p-6 rounded-xl border border-white/5">
                      <h3 className="text-2xl font-bold text-white mb-4">Approach</h3>
                      <p className="text-slate-300 leading-relaxed">
                        {project.details.approach}
                      </p>
                    </div>

                    {/* Key Decisions */}
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-6">Key UX Decisions</h3>
                      <ul className="space-y-4">
                        {project.details.keyDecisions.map((decision, idx) => (
                          <li key={idx} className="flex gap-4 p-4 bg-slate-900 rounded-lg border border-white/5">
                            <span className="flex-shrink-0 w-8 h-8 bg-pink-500/20 text-pink-400 flex items-center justify-center rounded-full font-bold text-sm">
                              {idx + 1}
                            </span>
                            <p className="text-slate-300 text-sm mt-1">{decision}</p>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Outcome */}
                    <div className="bg-gradient-to-r from-pink-900/20 to-purple-900/20 p-8 rounded-2xl border border-pink-500/20">
                      <h3 className="text-2xl font-bold text-white mb-2">Outcome</h3>
                      <p className="text-slate-200 text-lg">
                        {project.details.outcome}
                      </p>
                    </div>

                    {/* NDA Note */}
                    <div className="flex items-center gap-3 p-4 bg-yellow-900/10 border border-yellow-500/20 rounded-lg text-yellow-500/80 text-sm">
                      <Shield size={16} />
                      <span>Some screens are redacted due to NDA. I can walk through details confidentially.</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
