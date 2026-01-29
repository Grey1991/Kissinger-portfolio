'use client';

import { RESUME_DATA } from '@/app/data/resume-data';
import { ArrowLeft } from 'lucide-react';
import { use } from 'react';
import { ProjectModal } from '@/app/components/ProjectModal';
import Link from 'next/link';

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { id: projectId } = use(params);
  const project = RESUME_DATA.projects.find(p => p.id === projectId) || null;

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-white mb-4">Project not found</h1>
          <Link href="/" className="text-pink-400 hover:text-pink-300">
            Return to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      {/* Fixed Header with Back Button */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="hidden sm:inline">Back to Portfolio</span>
            <span className="sm:hidden">Back</span>
          </Link>
          
          <h1 className="text-lg sm:text-xl font-semibold text-white text-center flex-1 mx-4 truncate">
            {project.title}
          </h1>
          
          <div className="w-24 sm:w-32" /> {/* Spacer for centering */}
        </div>
      </div>

      {/* Main Content - Reuse ProjectModal content as a page */}
      <div className="pt-16">
        <ProjectModal 
          project={project} 
          onClose={() => {}}
          isPage={true}
        />
      </div>
    </div>
  );
}
