/** Only explanatory chapters collapse. Galleries, videos, prototypes and
 * interaction models remain directly visible; original chapter bodies stay intact.
 */
const TEXT_CHAPTERS: Record<string, string[]> = {
  slshub: ['case-context', 'guides-enablement', 'quality-readiness', 'wrap-up'],
  surfguard: ['case-context', 'key-decisions', 'qa-support', 'wrap-up'],
  memberjoin: ['case-context', 'problem-goal', 'status'],
  hubx: ['case-context', 'context', 'outcome', 'reflection'],
  surfcom: ['case-context', 'safety-rails', 'wrapup'],
  courtcanva: ['case-context', 'requirements', 'product-structure', 'testing', 'courtcanva2-intro', 'courtcanva2-cta', 'reflection'],
  nootee: ['case-context', 'observations', 'user-needs', 'nda-note', 'whats-next'],
  jrfood: ['case-context', 'define', 'define-solutions', 'iterations', 'logo', 'testing', 'final-ui'],
};

export function isExplanatoryChapter(projectId: string, sectionId: string) {
  return TEXT_CHAPTERS[projectId]?.includes(sectionId) ?? false;
}
