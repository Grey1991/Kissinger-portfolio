import { COURTCANVA_CONTEXT as context } from '../../data/courtcanva-structure';
import { PortfolioImage } from '../ui/PortfolioImage';

/** The original project introduction, moved ahead of the detailed design work. */
export function CourtCanvaContext() {
  return <div className="courtcanva-opening-context relative overflow-hidden rounded-2xl border border-white/10 bg-slate-800/50 p-6 sm:p-10">
    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-500 to-blue-500" />
    <p className="mb-6 text-xs font-bold uppercase tracking-wider text-emerald-400">Project Context</p>
    <div className="mb-6 flex items-center gap-3 sm:gap-4">
      <PortfolioImage src={context.logo} alt="CourtCanva Logo" className="h-12 w-12 shrink-0 object-contain sm:h-16 sm:w-16" />
      <h3 className="text-2xl font-extrabold leading-tight text-white sm:text-5xl">{context.name}</h3>
    </div>
    <p className="max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
      {context.introduction} <strong className="text-white">{context.configuration}</strong>{context.options} <strong className="text-white">{context.quotation}</strong>.
    </p>
  </div>;
}
