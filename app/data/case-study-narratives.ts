import { PORTFOLIO_NARRATIVES } from './remaining-case-narratives';
import { CASE_PRESENTATIONS } from './case-study-presentation';
import { isExplanatoryChapter } from './case-study-disclosure';

type Section = { id: string; type: string; title?: string; reference?: boolean; chapterLabel?: string; [key: string]: unknown };
type Narrative = { sections: Section[]; toc: { id: string; label: string }[]; highlightId?: string };
type Chapter = { id: string; label: string; title: string; type?: string; bridge?: string; supportingIds?: string[] };
const NARRATIVES: Record<string, Chapter[]> = {
  slshub: [
    { id: 'case-context', label: '01 · Product & challenge', title: 'A member portal with rules behind every task.' },
    { id: 'key-decisions', label: '02 · Application journey', title: 'From eligibility to a reviewable application.' },
    { id: 'rules-governance', label: '03 · Rules & control', title: 'Make permissions and consequences explicit.', bridge: 'The application is only one example. Across the portal, roles, awards and request states also determine what a member or administrator can do. The next patterns make those constraints visible.' },
    { id: 'selected-screens', label: '04 · Interface outcomes', title: 'See the patterns across the portal.', supportingIds: ['interactive-prototype'], bridge: 'The focused decisions above extend into account access, memberships and operational workflows. These supplied screens and the clickable prototype show the wider design.' },
    { id: 'responsive-dark', label: '05 · Across devices', title: 'Carry the same tasks onto smaller screens.', bridge: 'Those rules and actions also need to hold on a phone. Responsive layouts and dark mode adapt the presentation while preserving the task structure.' },
    { id: 'design-system', supportingIds: ['guides-enablement'], label: '06 · Delivery', title: 'Turn the patterns into a shared implementation.', bridge: 'With the workflows and responsive behaviour defined, the shared component library, field requirements and interaction specifications became the basis for engineering handoff.' },
    { id: 'quality-readiness', label: '07 · Validation', title: 'Check the built experience against the design.', bridge: 'Handoff was followed by implementation reviews: checking rule-driven visibility, status changes and device behaviour with developers and QA.' },
  ],
  surfguard: [
    { id: 'member-search-comparison', type: 'surfguard-comparison', label: 'Member Search', title: 'Member Search' },
    { id: 'member-details-comparison', type: 'surfguard-comparison', label: 'Member Details', title: 'Member Details' },
    { id: 'case-context', label: '01 · Product & challenge', title: 'Modernise the interface without losing the operation.' },
    { id: 'key-decisions', label: '02 · Forms & exceptions', title: 'Guide member entry and make exceptions actionable.' },
    { id: 'responsive', label: '03 · Across devices', title: 'Keep the record context on tablet and phone.', bridge: 'Once the record has a clear hierarchy, the next question is what must remain visible on a smaller screen. The same membership task provides a direct comparison.' },
    { id: 'design-system', label: '04 · Delivery', title: 'Make the redesign repeatable across modules.', bridge: 'The record patterns need to extend beyond a single screen. Shared components, documented states and developer-ready specifications support delivery across the rebuild.' },
    { id: 'qa-support', label: '05 · Validation', title: 'Refine the design during implementation.', bridge: 'During development, module-user reviews and ticket-level UI checks feed back into the design. The focus is whether the agreed workflows and states survive implementation.' },
  ],
};

export function buildCaseStudyNarrative(projectId: string, original: Section[]) {
  const narrative = buildFullNarrative(projectId, original);
  const presentation = CASE_PRESENTATIONS[projectId];
  if (!narrative || !presentation) return narrative;
  const rank = new Map(presentation.order.map((id, index) => [id, index]));
  const labels = new Map(presentation.navigation.map(item => [item.id, item.label]));
  const sections = narrative.sections.map((section, index) => ({
    ...section,
    disclosure: !section.reference && isExplanatoryChapter(projectId, section.id),
    ...(!section.reference ? { chapterLabel: labels.get(section.id) } : {}),
    ...(presentation.bridges?.[section.id] ? { presentationBridge: presentation.bridges[section.id] } : {}),
    presentationRank: section.reference ? 1000 + index : (rank.get(section.id) ?? 100 + index),
  })).sort((a, b) => a.presentationRank - b.presentationRank);
  return {
    ...narrative,
    highlightId: presentation.navigation[0].id,
    sections,
    toc: [
      { id: 'case-overview', label: 'At a glance' },
      ...presentation.navigation.filter(item => sections.some(section => section.id === item.id)),
      ...(sections.some(section => section.reference) ? [{ id: 'reference-materials', label: 'Complete research & supporting material' }] : []),
    ],
  };
}

function buildFullNarrative(projectId: string, original: Section[]): Narrative | null {
  const chapters = NARRATIVES[projectId];
  if (!chapters) return buildPortfolioNarrative(projectId, original);
  const existing = new Map(original.map(section => [section.id, section]));
  const main = chapters.flatMap((chapter, index) => [{
    ...(existing.get(chapter.id) ?? { id: chapter.id, type: chapter.type ?? (chapter.id === 'case-context' ? 'case-context' : 'case-evidence') }),
    title: chapter.title, bridge: chapter.bridge, chapterLabel: chapter.label, chapterNumber: index + 1,
  }, ...(chapter.supportingIds ?? []).map(id => {
    const section = existing.get(id);
    if (!section) throw new Error(`Missing narrative section ${projectId}/${id}`);
    return section;
  })]);
  const mainIds = new Set(main.map(section => section.id));
  const reference = original.filter(section => !mainIds.has(section.id) && section.id !== 'wrap-up').map((section, index) => ({
    ...section, reference: true, firstReference: index === 0,
    referenceLabel: section.id === 'summary' ? 'Full project scope & contribution' : section.title || section.id,
  }));
  const conclusion = { ...existing.get('wrap-up'), id: 'wrap-up', type: 'wrapup-section', title: 'Project status & reflection',
    chapterLabel: `${String(chapters.length + 1).padStart(2, '0')} · Status & reflection`,
    chapterNumber: chapters.length + 1,
    content: projectId === 'slshub'
      ? 'SLS Hub is live. I brought member tasks, eligibility rules and administrative approvals into one portal, then carried the design through responsive layouts, engineering handoff and implementation QA.'
      : 'SurfGuard is partially live, with selected redesigned modules released through a phased modernisation. I designed clearer record structures, responsive layouts and shared patterns, and supported engineering through implementation reviews.',
  };
  return {
    sections: [...main, conclusion, ...reference],
    toc: [...chapters.map(({ id, label }) => ({ id, label })), { id: 'wrap-up', label: conclusion.chapterLabel }, ...(reference.length ? [{ id: 'reference-materials', label: 'Reference materials' }] : [])],
  };
}

function buildPortfolioNarrative(projectId: string, original: Section[]): Narrative | null {
  const story = PORTFOLIO_NARRATIVES[projectId];
  if (!story) return null;
  const existing = new Map(original.map(section => [section.id, section]));
  const main: Section[] = [{ id: 'case-context', type: 'portfolio-context', chapterLabel: '01 · Product & challenge' }];
  const toc = [{ id: 'case-context', label: '01 · Product & challenge' }];
  story.groups.forEach((group, index) => {
    const label = `${String(index + 2).padStart(2, '0')} · ${group.label}`;
    toc.push({ id: group.ids[0], label });
    group.ids.forEach((id, sectionIndex) => {
      const section = existing.get(id) ?? (id === 'joining-journey' ? { id, type: 'joining-journey' } : null);
      if (!section) throw new Error(`Missing narrative section ${projectId}/${id}`);
      main.push({ ...section, ...(story.sectionCopy?.[id] ? { content: story.sectionCopy[id] } : {}), ...(sectionIndex === 0 ? {
        title: group.title ?? section.title, chapterLabel: label, bridge: group.bridge,
        ...(index === story.groups.length - 1 ? { chapterStatus: story.status } : {}),
      } : {}) });
    });
  });
  const used = new Set(main.map(section => section.id));
  const reference = original.filter(section => !used.has(section.id)).map((section, index) => ({
    ...section, reference: true, firstReference: index === 0,
    referenceLabel: section.title || ({ overview: 'Original project overview', 'prototypes-gallery': 'Complete original interface gallery', 'final-gallery': 'Complete interface gallery', 'courtcanva2-cta': 'Prototype invitation', ecosystem: 'Trading roles & platform relationship', goals: 'Original design goals', 'empathy-map': 'Empathy map', 'personas-journey': 'Personas & journey map', 'nda-note': 'Portfolio sharing note', 'research-personas': 'Research personas', 'logo-img': 'Logo explorations', 'lowfi-carousel': 'Complete wireframe sequence', 'final-polish-gallery': 'Complete high-fidelity journey', 'hifi-section': 'Wireframes & delivery context' }[section.id] ?? section.id.replaceAll('-', ' ')),
  }));
  return { highlightId: story.groups[1].ids[0], sections: [...main, ...reference], toc: [...toc, ...(reference.length ? [{ id: 'reference-materials', label: 'Reference materials' }] : [])] };
}
