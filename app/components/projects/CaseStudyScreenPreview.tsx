import { Maximize2 } from 'lucide-react';
import { PortfolioImage } from '../ui/PortfolioImage';
import type { CaseScreen } from '../../data/case-study-presentation';

type Props = { screen: CaseScreen; onInspect: (src: string) => void; eager?: boolean };

/** Frame real product images without recolouring them or inventing UI. */
export function CaseStudyScreenPreview({ screen, onInspect, eager = false }: Props) {
  const loading = eager ? 'eager' : 'lazy';
  return <button type="button" className={`case-opening-screen ${screen.frame ? `case-screen-${screen.frame}` : ''}`} onClick={() => onInspect(screen.src)} aria-label={`Enlarge: ${screen.alt}`}>
    {screen.frame === 'member-search' ? <div className="case-search-excerpts">
      <PortfolioImage src={screen.companions![0].src} alt={screen.companions![0].alt} original loading={loading} className="case-search-controls" />
      <div className="case-search-filter-detail">
        <PortfolioImage src={screen.src} alt={screen.alt} original loading={loading} />
        <div className="case-search-scope">
          <span>Search & filter workspace</span>
          <strong>Find the right member in the right context.</strong>
          <p>Membership status · Season · Patrol team · Pending requests · Age</p>
          <small>Public guide excerpts. Individual member rows are not shown.</small>
        </div>
      </div>
    </div> : screen.frame === 'dashboard-widgets' ? <div className="case-widget-excerpts">
      <PortfolioImage src={screen.src} alt={screen.alt} original loading={loading} />
      {screen.companions?.map(item => <PortfolioImage key={item.src} src={item.src} alt={item.alt} original loading={loading} />)}
    </div> : <PortfolioImage src={screen.src} alt={screen.alt} loading={loading} fetchPriority={eager ? 'high' : 'auto'} sizes={screen.frame === 'surfguard-dashboard' ? '(min-width: 1280px) 3500px, (min-width: 768px) 2200px, 1100px' : '(min-width: 1280px) 1150px, 100vw'} />}
    <span className="case-screen-enlarge" aria-hidden="true"><Maximize2 size={15} /><span>Inspect screen</span></span>
  </button>;
}
