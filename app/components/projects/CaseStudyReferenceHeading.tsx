'use client';

import { useRef, useState } from 'react';

export function CaseStudyReferenceHeading() {
  const [expanded, setExpanded] = useState(false);
  const heading = useRef<HTMLDivElement>(null);
  const toggle = () => {
    const references = heading.current?.closest('.project-detail-content')?.querySelectorAll<HTMLDetailsElement>('.case-reference-details');
    const next = !expanded;
    references?.forEach(details => { details.open = next; });
    setExpanded(next);
  };
  return <div ref={heading} id="reference-materials" tabIndex={-1} className="case-reference-heading mb-6 scroll-mt-10 border-t border-white/10 pt-8">
    <h3 className="case-study-heading mb-3 text-xl font-semibold text-white">Reference materials</h3>
    <p className="text-sm leading-relaxed text-slate-500">Original research, scope and supplementary project details are kept here for a closer look.</p>
    <button type="button" onClick={toggle} aria-pressed={expanded} className="mt-3 inline-flex min-h-11 items-center text-xs text-[#c6bbff] hover:text-white">
      {expanded ? 'Collapse all supporting material' : 'Expand all supporting material'}
    </button>
  </div>;
}
