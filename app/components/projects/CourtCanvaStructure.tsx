import { Maximize2 } from 'lucide-react';
import { COURTCANVA_STRUCTURE } from '../../data/courtcanva-structure';
import { PortfolioImage } from '../ui/PortfolioImage';

type Props = { title: string; onInspect: (src: string) => void };

export function CourtCanvaStructure({ title, onInspect }: Props) {
  return <section>
    <h3 className="case-study-heading mb-7 text-2xl font-semibold text-white">{title}</h3>
    <div className="grid items-start gap-7 sm:grid-cols-2">
      {COURTCANVA_STRUCTURE.map(screen => <figure key={screen.src}>
        <button type="button" className="case-structure-image" aria-label={`Enlarge CourtCanva ${screen.alt}`} onClick={() => onInspect(screen.src)}>
          <PortfolioImage src={screen.src} alt={`CourtCanva ${screen.alt}: ${screen.description}`} className="block h-auto w-full" />
          <span className="case-image-inspect" aria-hidden="true"><Maximize2 size={14} /> View full size</span>
        </button>
        <figcaption className="mt-4">
          <h4 className="mb-2 text-sm font-semibold text-white">{screen.title}</h4>
          <p className="text-sm leading-relaxed text-slate-400">{screen.description}</p>
        </figcaption>
      </figure>)}
    </div>
  </section>;
}
