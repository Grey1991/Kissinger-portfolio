// Evidence is drawn from the portfolio's existing assets. Online case studies
// inform the presentation, never the product screenshots or outcome claims.
export const CASE_EVIDENCE = {
  slshub: {
    eyebrow: 'Member services → governed transactions',
    title: 'One application. Two sides of the service.',
    intro: 'SLS Hub is the national member portal for memberships, family groups, awards and patrols. Its complexity sits between the member completing a task and the administrator who must check and approve it.',
    opening: [
      { src: '/slshub/Selected Screens /Submit a Form.png', alt: 'SLS Hub submission screen with applicant, club, form selection and eligibility guidance', label: 'Member · start an application', caption: 'Establish who the application is for, then explain the selected form’s eligibility.' },
      { src: '/slshub/Selected Screens /Process Forms.png', alt: 'SLS Hub approval queue with status and organisation filters and require my approval option', label: 'Admin · process the submission', caption: 'Expose status, organisation and approval responsibility in the processing queue.' },
    ],
    comparison: [
      { label: 'Starting point', text: 'Replace the legacy Members Area while retaining the eligibility, payment and approval rules behind member services.' },
      { label: 'Design response', text: 'Carry applicant and organisation context through the form, expose requirements before submission, and give administrators a status-led queue.' },
    ],
  },
  surfguard: {
    eyebrow: 'Operational data → actionable records',
    title: 'Make a complex member record usable.',
    intro: 'SurfGuard is the operational system used by club and organisation administrators to manage members, memberships, awards, patrols and reporting. The rebuild needs to preserve those relationships and permissions while making everyday record work clearer.',
    opening: [
      { src: '/surfguard/SG Tablet screenshot.png', alt: 'SurfGuard tablet member record with compliance warning, membership tabs, club cards and grouped details', label: 'Tablet · review the member record', caption: 'Keep the warning, selected membership and editable details in one working context.' },
      { src: '/surfguard/SG Mobile screenshot.png', alt: 'SurfGuard mobile member record with persistent warning, expandable sections and membership details', label: 'Mobile · preserve the same task', caption: 'Reflow navigation and sections while retaining record context and visible actions.' },
    ],
    comparison: [
      { label: 'Legacy constraint', text: 'A dense operational platform with multi-club memberships, business rules and established access permissions. A visual refresh alone cannot remove that complexity.' },
      { label: 'Design response', text: 'Separate record categories from organisation-specific membership details. Keep compliance warnings above both, then adapt the same structure for tablet and phone.' },
    ],
  },
} as const;

export type EvidenceProject = keyof typeof CASE_EVIDENCE;
