import { ArrowRight, Maximize2 } from 'lucide-react';
import { PortfolioImage } from '../ui/PortfolioImage';
import { CASE_EVIDENCE, type EvidenceProject } from '../../data/case-study-evidence';

type Props = { projectId: string; onInspect: (src: string) => void };
type Screen = { src: string; alt: string; label: string; caption: string };
const base = '/slshub/Selected Screens /';
const applicationScreens: Screen[] = [
  { src: `${base}Submit a Form.png`, alt: 'Application setup: applicant, club, form type and eligibility guidance', label: '01 · Set the context', caption: 'Choose self or another member, establish the club, and see the rules for the selected form before continuing.' },
  { src: `${base}National Medal.png`, alt: 'National Medal form with membership seasons, patrol hours, supporting documents and declaration', label: '02 · Assemble the evidence', caption: 'Bring service history, patrol hours, supporting documentation and the declaration into the application.' },
  { src: `${base}Process Forms.png`, alt: 'Admin processing queue with approval filters and status rows', label: '03 · Route the review', caption: 'Use status and organisation filters to separate the queue; “Require my approval” identifies work for the current approver.' },
];

function ScreenFigure({ screen, onInspect, className = '', detail = false }: { screen: Screen; onInspect: Props['onInspect']; className?: string; detail?: boolean }) {
  return <figure className={`min-w-0 ${className}`}>
    <p className="mb-3 text-xs font-medium tracking-wide text-slate-300">{screen.label}</p>
    <button type="button" onClick={() => onInspect(screen.src)} aria-label={`Enlarge: ${screen.alt}`} className="group relative block w-full overflow-hidden rounded-lg border border-white/10 bg-[#111827] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c6bbff]">
      <div className={detail ? 'aspect-[16/7] overflow-hidden' : ''}>
        <PortfolioImage src={screen.src} alt={screen.alt} original={detail} className={detail ? 'h-auto w-[120%] max-w-none -mt-[8%] -ml-[2%]' : 'h-auto w-full'} sizes="(min-width: 1024px) 45vw, 100vw" />
      </div>
      <span aria-hidden="true" className="absolute right-3 bottom-3 rounded-md border border-white/15 bg-slate-950/85 p-2 text-white"><Maximize2 size={15} /></span>
    </button>
    <figcaption className="mt-3 text-xs leading-relaxed text-slate-500">{screen.caption}</figcaption>
  </figure>;
}

export function CaseStudyContext({ projectId, onInspect }: Props) {
  if (!Object.hasOwn(CASE_EVIDENCE, projectId)) return null;
  const id = projectId as EvidenceProject;
  const evidence = CASE_EVIDENCE[id];
  const screen: Screen = id === 'slshub'
    ? { src: '/slshub/Desktop Dashboard(Light).png', alt: 'SLS Hub dashboard showing member actions, memberships, awards and patrols', label: 'The member portal', caption: 'Product overview. The following chapters follow a specific application through eligibility, submission and review.' }
    : { src: '/surfguard/SG Tablet screenshot.png', alt: 'SurfGuard member record with warning, club memberships and grouped details', label: 'The operational member record', caption: 'Product overview. The next chapter examines the relationships and actions inside this record.' };
  return <div className="space-y-7">
    <h3 className="case-study-heading text-2xl font-semibold text-white md:text-3xl">{id === 'slshub' ? 'A member portal with rules behind every task.' : 'Modernise the interface without losing the operation.'}</h3>
    <p className="max-w-3xl text-sm leading-relaxed text-slate-400">{evidence.intro}</p>
    <div className="grid items-start gap-8 lg:grid-cols-[1.1fr_1fr]">
      <ScreenFigure detail={id === 'slshub'} screen={screen} onInspect={onInspect} />
      <div className="space-y-6">
        <div><h4 className="mb-2 text-base font-semibold text-white">The challenge</h4><p className="text-sm leading-relaxed text-slate-400">{evidence.comparison[0].text}</p></div>
        <div><h4 className="mb-2 text-base font-semibold text-white">My responsibility</h4><p className="text-sm leading-relaxed text-slate-400">I led UI/UX from workflow definition through interface design, prototyping, developer handoff and implementation QA, working with BAs, architecture, development, QA and senior stakeholders.</p></div>
        <div><h4 className="mb-2 text-base font-semibold text-white">The design question</h4><p className="text-sm leading-relaxed text-slate-400">{id === 'slshub' ? 'How can a member understand what to submit, while an administrator gets the context needed to review it?' : 'How can an administrator act on a member’s record without losing the organisation, compliance and permission context?'}</p></div>
      </div>
    </div>
  </div>;
}

export function SurfGuardResponsiveEvidence({ onInspect, notes, checkItems }: Pick<Props, 'onInspect'> & { notes?: string; checkItems?: string[] }) {
  return <div className="space-y-7">
    <h3 className="case-study-heading text-2xl font-semibold text-white md:text-3xl">Keep the record context on tablet and phone.</h3>
    <p className="max-w-3xl text-sm leading-relaxed text-slate-400">On tablet, category tabs sit above the club membership cards. On phone, categories become expandable sections and navigation moves into a menu. The warning, selected membership and section actions stay available in both layouts.</p>
    <div className="grid items-start gap-6 sm:grid-cols-[minmax(0,1fr)_minmax(0,.52fr)] [&>figure:last-child]:mx-auto [&>figure:last-child]:w-full [&>figure:last-child]:max-w-[22rem]">
      {CASE_EVIDENCE.surfguard.opening.map(screen => <ScreenFigure key={screen.src} screen={screen} onInspect={onInspect} />)}
    </div>
    <details className="rounded-lg border border-white/10 p-4 text-sm text-slate-400">
      <summary className="cursor-pointer font-medium text-slate-300">Responsive implementation scope</summary>
      <p className="mt-4 leading-relaxed">{notes}</p>
      <ul className="mt-4 list-disc space-y-2 pl-5">{checkItems?.map(item => <li key={item}>{item}</li>)}</ul>
    </details>
    <p className="max-w-3xl text-sm leading-relaxed text-slate-400">The layout changes to fit the screen; the relationship between the person, their memberships and the available actions stays intact. These responsive rules then become part of the implementation handoff in the next chapter.</p>
  </div>;
}

export function CaseStudyDecisions({ projectId, onInspect }: Props) {
  if (!Object.hasOwn(CASE_EVIDENCE, projectId)) return null;
  const id = projectId as EvidenceProject;
  return <div className="space-y-10">
    {id === 'slshub' ? <>
      <div className="max-w-3xl">
        <p className="mb-3 text-xs uppercase tracking-widest text-slate-500">Application structure</p>
        <h3 className="case-study-heading mb-4 text-2xl font-semibold text-white md:text-3xl">From eligibility to a reviewable application.</h3>
        <p className="text-sm leading-relaxed text-slate-400">The form changes with the applicant, club and award. Separating setup from the evidence stage keeps eligibility guidance close to the choice that triggers it. The admin view then gives the same submission an organisation, status and review responsibility.</p>
      </div>
      <div className="grid items-start gap-6 lg:grid-cols-3">
        {applicationScreens.map(screen => <ScreenFigure key={screen.src} screen={screen} onInspect={onInspect} />)}
      </div>
      <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_1fr]">
        <ScreenFigure detail onInspect={onInspect} screen={{ src: '/slshub/Desktop Form (Light).png', alt: 'My Details page with pending approval notice and grouped profile information', label: 'Detail · pending approval', caption: 'The notice links to the pending request and explains why approved details have not yet changed.' }} />
        <div>
          <p className="mb-3 text-xs uppercase tracking-widest text-slate-500">State visibility</p>
          <h4 className="mb-4 text-xl font-semibold text-white">Submitted is not the same as approved.</h4>
          <p className="mb-5 text-sm leading-relaxed text-slate-400">Some profile changes must be approved by the club. The notice explains the delay and points to the pending request, rather than letting the member interpret unchanged details as a failed save. Request history keeps the status, processing information and available actions together.</p>
          <button type="button" onClick={() => onInspect(`${base}Requests Log.png`)} className="inline-flex items-center gap-2 text-sm text-[#c6bbff] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Inspect the request history <ArrowRight size={16} /></button>
        </div>
      </div>
    </> : <>
      <div className="max-w-3xl">
        <p className="mb-3 text-xs uppercase tracking-widest text-slate-500">Information hierarchy</p>
        <h3 className="case-study-heading mb-4 text-2xl font-semibold text-white md:text-3xl">Separate the person from their memberships.</h3>
        <p className="text-sm leading-relaxed text-slate-400">A member can belong to several organisations. The record needs both person-level information and membership-specific status, season and rights. Tabs divide record categories; club cards establish the membership being reviewed; grouped details keep related fields and edit actions together.</p>
      </div>
      <div className="grid items-start gap-8 lg:grid-cols-2">
        <div className="overflow-hidden rounded-lg border border-white/10 bg-slate-900">
          <button type="button" onClick={() => onInspect('/surfguard/SG Tablet screenshot.png')} aria-label="Inspect SurfGuard membership context in the full record" className="block w-full overflow-hidden focus-visible:outline-2 focus-visible:outline-white">
            <div className="relative aspect-[4/3] overflow-hidden">
              <PortfolioImage original src="/surfguard/SG Tablet screenshot.png" alt="Detail of SurfGuard compliance warning, record tabs, membership cards and editable membership fields" className="w-full" />
              {['28%', '48%', '66%'].map((top, index) => <span key={top} aria-hidden="true" style={{ top }} className="absolute right-2 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-[#5c438b] text-[11px] font-bold text-white">{index + 1}</span>)}
            </div>
            <span className="flex items-center gap-2 p-3 text-xs text-slate-300"><Maximize2 size={14} /> Inspect the full record</span>
          </button>
        </div>
        <ol className="space-y-6">
          {[
            ['Keep the exception visible', 'The working-with-children check warning sits above the record sections, with a direct Edit action. It remains visible in both supplied layouts.'],
            ['Establish the active organisation', 'Club cards identify the membership being viewed. Membership status, category and season are then shown together in the detail panel.'],
            ['Place actions at the right scope', 'Edit controls belong to the relevant detail section; family-group view and add actions stay with family-group information.'],
          ].map(([title, text], i) => <li key={title} className="border-b border-white/10 pb-5"><p className="mb-2 text-sm font-semibold text-white"><span className="mr-3 text-[#c6bbff]">0{i + 1}</span>{title}</p><p className="text-sm leading-relaxed text-slate-400">{text}</p></li>)}
        </ol>
      </div>
      <div className="flex flex-wrap items-center gap-3 border-l-2 border-[#c6bbff]/60 pl-5 text-sm text-slate-300">
        <span>Review warning</span><ArrowRight size={15} aria-hidden="true" /><span>Select membership</span><ArrowRight size={15} aria-hidden="true" /><span>Inspect details</span><ArrowRight size={15} aria-hidden="true" /><span>Use the section action</span>
      </div>
    </>}
  </div>;
}
