'use client';

import { useId } from 'react';
import { ArrowUp } from 'lucide-react';

type Item = { id: string; label: string };
type Props = { items: Item[]; active: string; onNavigate: (id: string) => void };

export function CaseStudyNavigation({ items, active, onNavigate }: Props) {
  const selectId = useId();
  return <nav className="case-reading-nav" aria-label="Case study chapters">
    <div className="case-reading-mobile">
      <label htmlFor={selectId}>Jump to</label>
      <select id={selectId} value={items.some(item => item.id === active) ? active : 'case-overview'} onChange={event => onNavigate(event.target.value)}>
        {items.map(item => <option key={item.id} value={item.id}>{item.label}</option>)}
      </select>
    </div>
    <div className="case-reading-desktop">
      <p className="case-reading-label">Inside the project</p>
      <ul>
        {items.map(item => <li key={item.id}><a href={`#${item.id}`} aria-current={active === item.id ? 'location' : undefined} onClick={event => { event.preventDefault(); onNavigate(item.id); }}>
          {item.id === 'case-overview' && <ArrowUp size={13} aria-hidden="true" />}{item.label}
        </a></li>)}
      </ul>
    </div>
  </nav>;
}
