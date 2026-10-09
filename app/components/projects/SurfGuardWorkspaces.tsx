import { ExternalLink } from 'lucide-react';
import { PortfolioImage } from '../ui/PortfolioImage';
import { SURFGUARD_GUIDE_ASSETS, SURFGUARD_PROTOTYPE_URL, SURFGUARD_SCREENS } from '../../data/surfguard-workspaces';

type Props = { onInspect: (src: string) => void };

export function SurfGuardWorkspaces({ onInspect }: Props) {
  return <div className="case-workspace-coverage">
    <div className="case-workspace-heading">
      <div><h3 className="case-study-heading">More than a member record.</h3><p>Search and filters, operational queues, and organisation-level reporting are part of the same admin product.</p></div>
      <a href={SURFGUARD_PROTOTYPE_URL} target="_blank" rel="noopener noreferrer">Open clickable prototype <ExternalLink size={14} aria-hidden="true" /></a>
    </div>
    <div className="case-workspace-gallery">
      <figure className="case-workspace-search">
        <h4>Find members</h4>
        <button type="button" className="case-workspace-image case-workspace-search-controls" onClick={() => onInspect(SURFGUARD_SCREENS[1].companions![0].src)} aria-label="Enlarge the released Find Members search controls">
          <PortfolioImage original src={SURFGUARD_SCREENS[1].companions![0].src} alt={SURFGUARD_SCREENS[1].companions![0].alt} />
        </button>
        <div className="case-workspace-filter-row">
          <button type="button" className="case-workspace-image" onClick={() => onInspect(SURFGUARD_SCREENS[1].src)} aria-label="Enlarge the released member search filter panel"><PortfolioImage original src={SURFGUARD_SCREENS[1].src} alt={SURFGUARD_SCREENS[1].alt} /></button>
          <div><h4>Narrow the working set.</h4><p>Membership status, season, patrol team, pending requests and age each give the administrator a different route into the member list.</p><a href={SURFGUARD_GUIDE_ASSETS[0].page} target="_blank" rel="noopener noreferrer">View the official search guide <ExternalLink size={13} aria-hidden="true" /></a></div>
        </div>
      </figure>
      <div className="case-workspace-modules">
        {SURFGUARD_GUIDE_ASSETS.slice(2).map((asset, index) => {
          const screen = index === 0 ? SURFGUARD_SCREENS[2] : SURFGUARD_SCREENS[2].companions![0];
          const src = `/surfguard/${asset.file}`;
          return <figure key={src}><h4>{index === 0 ? 'Assessment work queues' : 'Awards & proficiencies'}</h4>
            <button type="button" className="case-workspace-image" onClick={() => onInspect(src)} aria-label={`Enlarge: ${screen.alt}`}><PortfolioImage original src={src} alt={screen.alt} /></button>
            <figcaption>{index === 0 ? 'Separate work awaiting submission, approval, award allocation and results processing.' : 'Compare award holders with current-season proficiency, without opening individual records.'} <a href={asset.page} target="_blank" rel="noopener noreferrer">Official guide ↗</a></figcaption>
          </figure>;
        })}
      </div>
    </div>
    <p className="case-workspace-source-note">Released-interface excerpts from SLSA’s public user guide, alongside my original prototype. Member rows and contact information are not reproduced; displayed counts are screenshot examples.</p>
  </div>;
}
