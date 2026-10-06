import { ArrowRight, Maximize2 } from 'lucide-react';
import { PortfolioImage } from '../ui/PortfolioImage';
import { PORTFOLIO_NARRATIVES } from '../../data/remaining-case-narratives';

type Props = {
  project: { id: string; details: { myRole?: string; constraints?: string } };
  onInspect: (src: string) => void;
};
export function PortfolioCaseContext({ project, onInspect }: Props) {
  const story = PORTFOLIO_NARRATIVES[project.id];
  if (!story) return null;
  const { screen } = story;
  return <div className="space-y-7">
    <h3 className="case-study-heading text-2xl font-semibold text-white md:text-3xl">{story.title}</h3>
    <p className="max-w-3xl text-sm leading-relaxed text-slate-400">{story.purpose}</p>
    <div className={`grid items-start gap-8 ${screen.phone ? 'lg:grid-cols-[.65fr_1fr]' : 'lg:grid-cols-[1.1fr_1fr]'}`}>
      <figure className={screen.phone ? 'mx-auto w-full max-w-[18rem]' : 'min-w-0'}>
        <button type="button" onClick={() => onInspect(screen.src)} aria-label={`Enlarge: ${screen.alt}`} className="relative block w-full overflow-hidden rounded-lg border border-white/10 bg-slate-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c6bbff]">
          <PortfolioImage src={screen.src} alt={screen.alt} loading="eager" className="h-auto w-full" sizes={screen.phone ? '288px' : '(min-width: 1024px) 45vw, 100vw'} />
          <span aria-hidden="true" className="absolute bottom-3 right-3 rounded-md border border-white/15 bg-slate-950/85 p-2 text-white"><Maximize2 size={15} /></span>
        </button>
        <figcaption className="mt-3 text-xs leading-relaxed text-slate-500">{screen.caption}</figcaption>
      </figure>
      <div className="space-y-6">
        <div><h4 className="mb-2 text-base font-semibold text-white">The design question</h4><p className="text-sm leading-relaxed text-slate-400">{story.question}</p></div>
        <div><h4 className="mb-2 text-base font-semibold text-white">My responsibility</h4><p className="text-sm leading-relaxed text-slate-400">{project.details.myRole}</p></div>
        <div><h4 className="mb-2 text-base font-semibold text-white">The constraints</h4><p className="text-sm leading-relaxed text-slate-400">{project.details.constraints}</p></div>
      </div>
    </div>
  </div>;
}

const joiningStages = [
  { src: '/member join slsa/Logic Flow Step 1. Choose the type of membership.png', title: '01 · Membership context', text: 'Membership type begins the public guidance flow. Club selection and fee review establish the context before the account handover.' },
  { src: '/member join slsa/Membership and Guardian (where req.) Declarations.png', title: '02 · Declarations', text: 'Inside SLS Hub, member and guardian declarations sit within the join transaction, after family and member details.' },
  { src: '/member join slsa/Payment Summary.png', title: '03 · Payment review', text: 'The payment summary gives the family a final review point before completing payment. The full journey and device walkthroughs are preserved below.' },
];
export function JoiningJourney({ onInspect }: Pick<Props, 'onInspect'>) {
  return <div className="space-y-7">
    <h3 className="case-study-heading text-2xl font-semibold text-white md:text-3xl">Explain the commitment before asking for the transaction.</h3>
    <div className="flex flex-wrap items-center gap-3 border-l-2 border-[#c6bbff]/60 pl-5 text-sm text-slate-300"><span>Membership & club</span><ArrowRight size={15} aria-hidden="true" /><span>Fees & account handover</span><ArrowRight size={15} aria-hidden="true" /><span>Details & declarations</span><ArrowRight size={15} aria-hidden="true" /><span>Review & payment</span></div>
    <div className="grid items-start gap-6 lg:grid-cols-3">
      {joiningStages.map(stage => <figure key={stage.src} className="min-w-0">
        <p className="mb-3 text-xs font-medium text-slate-300">{stage.title}</p>
        <button type="button" onClick={() => onInspect(stage.src)} aria-label={`Enlarge: ${stage.title}`} className="relative block w-full overflow-hidden rounded-lg border border-white/10 bg-slate-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c6bbff]">
          <PortfolioImage src={stage.src} alt={stage.title} className="h-auto w-full" sizes="(min-width: 1024px) 28vw, 100vw" />
          <span aria-hidden="true" className="absolute bottom-3 right-3 rounded-md border border-white/15 bg-slate-950/85 p-2 text-white"><Maximize2 size={15} /></span>
        </button>
        <figcaption className="mt-3 text-xs leading-relaxed text-slate-500">{stage.text}</figcaption>
      </figure>)}
    </div>
  </div>;
}
