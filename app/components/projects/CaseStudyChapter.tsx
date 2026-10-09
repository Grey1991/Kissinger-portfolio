import type { ReactNode } from 'react';
import { CaseStudyReferenceHeading } from './CaseStudyReferenceHeading';

type Props = {
  section: { id: string; title?: string; disclosure?: boolean; reference?: boolean; firstReference?: boolean; referenceLabel?: string; chapterLabel?: string; bridge?: string; presentationBridge?: string; chapterStatus?: string };
  children: ReactNode;
};

/** Main chapters and optional reference material share the same ordered source. */
export function CaseStudyChapter({ section, children }: Props) {
  if (section.reference) return <div className={section.firstReference ? "mt-20 first:mt-0" : "mt-3"}>
    {section.firstReference && <CaseStudyReferenceHeading />}
    <details id={section.id} className="case-reference-details group scroll-mt-10 rounded-lg border border-white/10">
      <summary className="cursor-pointer px-4 py-3 text-sm font-medium text-slate-300 marker:text-[#c6bbff] focus-visible:outline-2 focus-visible:outline-[#c6bbff]">{section.referenceLabel}</summary>
      <div className="border-t border-white/10 p-5 md:p-7">{children}</div>
    </details>
  </div>;

  const body = <>
    {section.chapterLabel && <p className="mb-4 text-xs font-medium uppercase tracking-widest text-[#c6bbff]">{section.chapterLabel}</p>}
    {(section.presentationBridge || section.bridge) && <p className="mb-6 max-w-3xl text-sm leading-relaxed text-slate-400">{section.presentationBridge || section.bridge}</p>}
    {section.chapterStatus && <p className="mb-7 max-w-3xl border-l-2 border-[#c6bbff]/60 pl-5 text-sm leading-relaxed text-slate-300">{section.chapterStatus}</p>}
    {children}
  </>;
  return <div id={section.id} tabIndex={-1} className={`project-detail-section ${section.disclosure ? 'case-story-note' : 'case-visual-chapter'} scroll-mt-10`}>
    {section.disclosure ? <details className="case-chapter-disclosure">
      <summary><span>{section.title || section.chapterLabel || 'Design notes'}</span><span className="case-disclosure-hint">Design notes</span></summary>
      <div className="case-chapter-body">{body}</div>
    </details> : body}
  </div>;
}
