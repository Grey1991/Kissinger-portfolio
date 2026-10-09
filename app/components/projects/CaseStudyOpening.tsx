'use client';

import { ArrowDown, ExternalLink } from 'lucide-react';
import type { ReactNode } from 'react';
import { CASE_PRESENTATIONS } from '../../data/case-study-presentation';
import { PortfolioImage } from '../ui/PortfolioImage';
import { SurfGuardComparisons } from './SurfGuardComparisons';
import { CourtCanvaContext } from './CourtCanvaContext';

type Props = {
  project: { id: string; title: string; image?: string; backgroundImage?: string };
  onInspect: (src: string) => void;
  onNavigate: (id: string) => void;
  leadingMedia?: ReactNode;
};

/** A representative cover, not a second gallery of detailed UI screenshots. */
export function CaseStudyOpening({ project, onInspect, onNavigate, leadingMedia }: Props) {
  const presentation = CASE_PRESENTATIONS[project.id];
  if (!presentation) return null;
  return <section id="case-overview" tabIndex={-1} className="case-opening" aria-label={`${presentation.name} overview`}>
    <header className="case-opening-copy">
      <div><p className="case-opening-category">{presentation.category}</p><h2>{presentation.name}</h2></div>
      <p className="case-opening-headline">{presentation.purpose ?? presentation.headline}</p>
    </header>
    {leadingMedia ?? (project.id === 'courtcanva' ? <CourtCanvaContext /> : project.id === 'surfguard' ? <SurfGuardComparisons kind="dashboard-comparison" onInspect={onInspect} compact /> : project.image && <button type="button" className={`case-cover ${project.id === 'nootee' ? 'case-cover-nootee' : ''}`} onClick={() => onInspect(project.image!)} aria-label={`Enlarge ${presentation.name} project cover`}
      style={project.backgroundImage && project.id !== 'nootee' ? { backgroundImage: `url("${project.backgroundImage}")`, backgroundSize: 'cover', backgroundPosition: 'center' } : undefined}>
      <PortfolioImage src={project.image} alt={`${presentation.name}: ${presentation.purpose ?? presentation.headline}`} loading="eager" className="block h-auto w-full" sizes="(min-width: 1024px) 90vw, 100vw" />
    </button>)}
    <div className="case-cover-footer">
      <p className="case-opening-status"><span aria-hidden="true" />{presentation.status}</p>
      <div className="case-cover-actions">
        <button type="button" className="case-opening-link" onClick={() => onNavigate(presentation.navigation[0].id)}>Explore the design <ArrowDown size={15} aria-hidden="true" /></button>
        {presentation.prototypeUrl && <a className="case-opening-link" href={presentation.prototypeUrl} target="_blank" rel="noopener noreferrer">Open clickable prototype <ExternalLink size={14} aria-hidden="true" /></a>}
      </div>
    </div>
  </section>;
}
