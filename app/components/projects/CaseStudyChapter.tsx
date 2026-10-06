import type { ReactNode } from 'react';

type Props = {
  section: { id: string; reference?: boolean; firstReference?: boolean; referenceLabel?: string; chapterLabel?: string; bridge?: string; chapterStatus?: string };
  children: ReactNode;
};

/** Main chapters and optional reference material share the same ordered source. */
export function CaseStudyChapter({ section, children }: Props) {
  if (section.reference) return <div className={section.firstReference ? "mt-20 first:mt-0" : "mt-3"}>
    {section.firstReference && <div id="reference-materials" className="mb-6 scroll-mt-10 border-t border-white/10 pt-8">
      <h3 className="case-study-heading mb-3 text-xl font-semibold text-white">Reference materials</h3>
      <p className="text-sm leading-relaxed text-slate-500">Original research, scope and supplementary project details are kept here for a closer look.</p>
    </div>}
    <details id={section.id} className="group scroll-mt-10 rounded-lg border border-white/10">
      <summary className="cursor-pointer px-4 py-3 text-sm font-medium text-slate-300 marker:text-[#c6bbff] focus-visible:outline-2 focus-visible:outline-[#c6bbff]">{section.referenceLabel}</summary>
      <div className="border-t border-white/10 p-5 md:p-7">{children}</div>
    </details>
  </div>;

  return <div id={section.id} className="project-detail-section mt-20 first:mt-0 scroll-mt-10">
    {section.chapterLabel && <p className="mb-4 text-xs font-medium uppercase tracking-widest text-[#c6bbff]">{section.chapterLabel}</p>}
    {section.bridge && <p className="mb-6 max-w-3xl text-sm leading-relaxed text-slate-400">{section.bridge}</p>}
    {section.chapterStatus && <p className="mb-7 max-w-3xl border-l-2 border-[#c6bbff]/60 pl-5 text-sm leading-relaxed text-slate-300">{section.chapterStatus}</p>}
    {children}
  </div>;
}
