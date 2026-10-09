import { Maximize2 } from 'lucide-react';
import { PortfolioImage } from '../ui/PortfolioImage';
import { SURFGUARD_COMPARISONS } from '../../data/surfguard-comparisons';

type Props = { kind: string; onInspect: (src: string) => void; compact?: boolean };

/** Full source images, with explicit before/after labels and no device shell. */
export function SurfGuardComparisons({ kind, onInspect, compact = false }: Props) {
  const comparison = SURFGUARD_COMPARISONS[kind];
  if (!comparison) return null;
  return <section className="case-comparison" aria-label={`${comparison.title} before and after`}>
    {!compact && <header>
      <h3 className="case-study-heading text-2xl font-semibold text-white md:text-3xl">{comparison.title}</h3>
      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-400">{comparison.summary}</p>
    </header>}
    <div className="case-comparison-grid">
      {[comparison.before, comparison.after].map(screen => <figure key={screen.src}>
        <figcaption>{screen.label}</figcaption>
        <button type="button" onClick={() => onInspect(screen.src)} aria-label={`Enlarge ${screen.label}: ${comparison.title}`}>
          <PortfolioImage src={screen.src} alt={screen.alt} className="block h-auto w-full" sizes="(min-width: 1024px) 40vw, 100vw" />
          <span className="case-image-inspect" aria-hidden="true"><Maximize2 size={14} /> View full size</span>
        </button>
      </figure>)}
    </div>
    {kind === 'dashboard-comparison' && <p className="case-comparison-caption">Desktop overview · prototype values shown for illustration.</p>}
  </section>;
}
