import { SURFGUARD_PROTOTYPE_URL, SURFGUARD_SCREENS } from './surfguard-workspaces';

export type CaseScreen = {
  src: string; label: string; alt: string; caption: string;
  frame?: 'detail' | 'phone' | 'portal-dashboard' | 'surfguard-dashboard' | 'member-search' | 'dashboard-widgets';
  companions?: { src: string; alt: string }[];
  source?: { label: string; url: string };
};
export type CasePresentation = {
  name: string; category: string; headline: string; status: string;
  contribution: string; problem: string; decision: string; evidence: string;
  screens: CaseScreen[]; order: string[]; purpose?: string; prototypeUrl?: string;
  bridges?: Record<string, string>;
  navigation: { id: string; label: string }[];
};
const hub = '/slshub/Selected Screens /';
const join = '/member join slsa/';
const note = '/nootee/nootee hi-fi/';

/** Reading order changes presentation only: every original chapter remains available. */
export const CASE_PRESENTATIONS: Record<string, CasePresentation> = {
  slshub: {
    name: 'SLS Hub', category: 'National member portal', status: 'Live',
    purpose: 'One place for members to manage memberships, awards, forms and patrols.',
    headline: 'Make complex member tasks clear, from submission to approval.',
    contribution: 'Sole UI/UX designer · Member and admin workflows, responsive UI, shared components and implementation QA.',
    problem: 'Members need to know what they can submit. Administrators need the context to review it.',
    decision: 'Establish applicant and club context before eligibility, then make status and review responsibility explicit.',
    evidence: 'See the submission guidance, approval filters and pending-request states in the actual designs.',
    screens: [
      { src: '/slshub/Desktop Dashboard(Light).png', label: 'Member dashboard', frame: 'portal-dashboard', alt: 'SLS Hub member dashboard with action requests, memberships, education, awards, patrols and club resources', caption: 'The member dashboard brings everyday tasks and club information together. Enlarge to see the complete screen.' },
      { src: `${hub}Submit a Form.png`, label: 'Member submission', alt: 'SLS Hub form setup showing applicant, club selection and eligibility guidance', caption: 'Eligibility appears where the applicant and club choices are made.' },
      { src: `${hub}Process Forms.png`, label: 'Admin review', alt: 'SLS Hub processing queue with organisation, status and approval filters', caption: 'The same application becomes reviewable work with clear status and approval responsibility.' },
      { src: `${hub}Requests Log.png`, label: 'Request states', alt: 'SLS Hub request history showing status and processing information', caption: 'Request history distinguishes a submitted change from an approved change.' },
    ],
    order: ['key-decisions', 'selected-screens', 'interactive-prototype', 'responsive-dark', 'rules-governance', 'case-context', 'design-system', 'guides-enablement', 'quality-readiness', 'wrap-up'],
    navigation: [{ id: 'key-decisions', label: 'Design decisions' }, { id: 'selected-screens', label: 'Interface gallery' }, { id: 'responsive-dark', label: 'Mobile & dark mode' }, { id: 'rules-governance', label: 'Rules & permissions' }, { id: 'case-context', label: 'Product context' }, { id: 'design-system', label: 'Systems & delivery' }, { id: 'quality-readiness', label: 'Validation' }, { id: 'wrap-up', label: 'Status & reflection' }],
  },
  surfguard: {
    name: 'SurfGuard', category: 'Legacy enterprise modernisation', status: 'Partially live',
    purpose: 'An admin workspace for finding members, managing records and processing operational requests.',
    prototypeUrl: SURFGUARD_PROTOTYPE_URL,
    headline: 'Untangle the member record without losing operational detail.',
    contribution: 'Sole UI/UX designer · Dashboard, member search, record structure, table patterns, responsive design and phased implementation support.',
    problem: 'Dense records mix personal details, multiple memberships and compliance exceptions.',
    decision: 'Separate person-level categories from membership details, keeping warnings and scoped actions visible.',
    evidence: 'Inspect the record hierarchy and how the same membership task adapts to a phone.',
    screens: SURFGUARD_SCREENS,
    order: ['member-search-comparison', 'member-details-comparison', 'responsive', 'design-system', 'key-decisions', 'case-context', 'qa-support', 'wrap-up'],
    navigation: [{ id: 'member-search-comparison', label: 'Member Search · before & after' }, { id: 'member-details-comparison', label: 'Member Details · before & after' }, { id: 'responsive', label: 'Tablet & mobile' }, { id: 'design-system', label: 'Systems & delivery' }, { id: 'key-decisions', label: 'Forms & exceptions' }, { id: 'case-context', label: 'Legacy constraints' }, { id: 'qa-support', label: 'Implementation QA' }, { id: 'wrap-up', label: 'Status & reflection' }],
  },
  memberjoin: {
    name: 'Member Join', category: 'Rules-heavy registration journey', status: 'V1 design complete',
    purpose: 'A guided journey for individuals and families to join a club or renew membership.',
    headline: 'Explain the commitment before asking a family to sign up.',
    contribution: 'End-to-end UI/UX ownership · Joining and renewal across the public website, SLS Hub and SurfGuard.',
    problem: 'Fragmented entry points make families work out membership choices, fees and account steps themselves.',
    decision: 'Put membership guidance and fee review before account creation, then connect declarations and payment.',
    evidence: 'Follow the fee review, guardian declarations and final payment summary. Implementation was pending.',
    screens: [
      { src: `${join}Logic Flow Step 1. Choose the type of membership.png`, label: 'Choose membership', alt: 'Member Join first step with Individual, Family and Nipper membership options and step progress', caption: 'Start with the membership choice, then guide the applicant through club selection, fees and signup.' },
      { src: `${join}Logic Flow Step 4. Review fees and costs and redirect to SLS Hub.png`, label: 'Fees before signup', alt: 'Member Join fee review identifying membership type, club, fees and the handover to SLS Hub', caption: 'Fees and membership context are explained before account creation. Amounts are prototype examples.' },
      { src: `${join}Membership and Guardian (where req.) Declarations.png`, label: 'Guardian declarations', alt: 'Member Join declarations for members and guardians within the membership transaction', caption: 'Declarations sit within the joining transaction, after family and member details.' },
      { src: `${join}Payment Summary.png`, label: 'Payment review', alt: 'Member Join payment summary for reviewing membership charges before payment', caption: 'A final review point brings the membership charges together before payment.' },
    ],
    order: ['joining-journey', 'ui-walkthrough', 'website-flow', 'hub-journey', 'case-context', 'problem-goal', 'scope', 'demo-video', 'status'],
    navigation: [{ id: 'joining-journey', label: 'Journey decisions' }, { id: 'ui-walkthrough', label: 'Interface walkthrough' }, { id: 'case-context', label: 'Product context' }, { id: 'problem-goal', label: 'Problem & goal' }, { id: 'scope', label: 'Cross-system scope' }, { id: 'demo-video', label: 'Device walkthroughs' }, { id: 'status', label: 'Status & reflection' }],
  },
  hubx: {
    name: 'HubX', category: 'B2B financial web platform', status: 'Desktop product design',
    purpose: 'A financial workspace for fund managers to review trading data and manage operations.',
    headline: 'Bring trading data and everyday operations into one workspace.',
    contribution: 'Independent UI/UX ownership · Complex forms, trading data, dashboards, field requirements and implementation reviews.',
    problem: 'Fund managers need dense trading information and familiar operations without sacrificing precision.',
    decision: 'Consolidate navigation, order states and table controls, supported by reusable patterns and explicit field rules.',
    evidence: 'Compare the supplied legacy and redesigned workspaces, then inspect the specification behind the UI.',
    bridges: { 'before-after': 'The migration needed to preserve precision while improving navigation and data hierarchy. Compare the supplied legacy and redesigned interfaces to see what changed.' },
    screens: [
      { src: '/hubx/MetaTrader 4 After.png', label: 'Redesigned workspace', alt: 'HubX redesigned orders workspace with navigation, order states, filters and trading data', caption: 'The redesigned orders view brings navigation, state and filtering into one working context.' },
      { src: '/hubx/MetaTrader 4 before.png', label: 'Legacy workspace', alt: 'Legacy MetaTrader 4 workspace used for the HubX interface comparison', caption: 'The supplied legacy view provides the starting point for the interface comparison.' },
      { src: '/hubx/BA Document.png', label: 'Field specification', alt: 'HubX annotated field requirements supporting engineering and QA', caption: 'Field-level requirements make behaviour and validation explicit for implementation.', frame: 'detail' },
    ],
    order: ['before-after', 'decisions', 'case-context', 'context', 'requirements', 'design-outcome-video', 'outcome', 'reflection'],
    navigation: [{ id: 'before-after', label: 'Before & after' }, { id: 'decisions', label: 'Shared patterns' }, { id: 'case-context', label: 'Product context' }, { id: 'context', label: 'Constraints' }, { id: 'requirements', label: 'Field specifications' }, { id: 'design-outcome-video', label: 'Platform walkthrough' }, { id: 'outcome', label: 'Outcomes & reflection' }],
  },
  surfcom: {
    name: 'SurfCom ICEMS', category: 'Emergency operations', status: 'Post-testing prototype',
    purpose: 'An incident workspace for lifesaving teams to log, communicate and coordinate a response.',
    headline: 'Keep the incident and its latest confirmed state together.',
    contribution: 'UI/UX ownership · Incident logging, communication, coordination and post-testing design iterations.',
    problem: 'An incoming message is not necessarily the latest confirmed incident state.',
    decision: 'Keep incident details beside communication, with a confirmed-update banner and a separate key-event summary.',
    evidence: 'Inspect the split-view prototype and the confirmation patterns designed for changing incidents.',
    bridges: { 'design-highlights': 'During an unfolding incident, important information must stay visible and actions must be easy to reach. These patterns support the operator at those moments.' },
    screens: [
      { src: '/surfcom icems/Split view.png', label: 'Incident workspace', alt: 'SurfCom split-view prototype with incident details, message panel and confirmed-update banner', caption: 'Incident details and communication remain in the same working view. Shown at prototype stage.' },
      { src: '/surfcom icems/Key events + latest status.png', label: 'Events & latest state', alt: 'SurfCom key events and latest confirmed incident status', caption: 'Confirmed status and event timestamps give updates an explicit context.' },
    ],
    order: ['design-highlights', 'safety-rails', 'case-context', 'incident-scenario', 'journey', 'demo-video', 'wrapup'],
    navigation: [{ id: 'design-highlights', label: 'Interaction decisions' }, { id: 'safety-rails', label: 'Risk & uncertainty' }, { id: 'case-context', label: 'Product context' }, { id: 'incident-scenario', label: 'Operational journey' }, { id: 'demo-video', label: 'Prototype walkthrough' }, { id: 'wrapup', label: 'Status & reflection' }],
  },
  courtcanva: {
    name: 'CourtCanva', category: 'Client configuration product', status: 'Pre-release at contract end',
    purpose: 'Configure a sports court, review the quote and continue to ordering.',
    headline: 'Connect a court design to the quote and order behind it.',
    contribution: 'Independent UI/UX ownership · Court configuration, visual direction, purchase journey and developer handoff.',
    problem: 'Court owners need to understand how configuration choices affect preview, quotation and ordering.',
    decision: 'Connect dimensions and surface choices to quote review and ordering within the same journey.',
    evidence: 'See the original editor and purchase screens, then the testing-led revisions and interactive demonstration.',
    screens: [
      { src: '/courtcanva/ProTennis Court.png', label: 'Court editor', alt: 'CourtCanva editor connecting court dimensions and surface choices with quotation and cart action', caption: 'Configuration and its quotation share the same working context in the original design.' },
      { src: '/courtcanva/Shopping Cart.png', label: 'Purchase review', alt: 'CourtCanva shopping cart for reviewing configured courts before ordering', caption: 'The purchase journey continues from a configured court into order review.' },
    ],
    order: ['courtcanva2', 'courtcanva2-intro', 'prototypes', 'prototypes-gallery', 'testing', 'testing-improvements', 'courtcanva2-cta', 'case-context', 'requirements', 'product-structure', 'reflection'],
    navigation: [{ id: 'courtcanva2', label: 'CourtCanva 2.0 · interactive' }, { id: 'courtcanva2-intro', label: '2.0 design decisions' }, { id: 'prototypes', label: 'Earlier interface · 1.0' }, { id: 'testing', label: 'Testing & decisions' }, { id: 'case-context', label: 'Product context' }, { id: 'requirements', label: 'Requirements & scope' }, { id: 'reflection', label: 'Status & reflection' }],
  },
  nootee: {
    name: 'NooTee', category: 'Client note-taking product', status: 'High-fidelity design',
    purpose: 'A note-taking workspace for writing, organising and sharing rich-media notes.',
    headline: 'Keep rich notes easy to create, find and share.',
    contribution: 'Independent UI/UX ownership · User research, information architecture, mixed-media workflows and visual design.',
    problem: 'As notes accumulate, users need to retrieve and share content without losing their writing context.',
    decision: 'Keep folders beside the note canvas, with media, search and collaboration controls around the writing task.',
    evidence: 'Inspect the note editor, search and sharing screens before diving into the research that informed them.',
    bridges: { features: 'The feature examples show how media, search, sharing and templates support the note without replacing the primary writing task.' },
    screens: [
      { src: `${note}Lecture Notes.png`, label: 'Note workspace', alt: 'NooTee note editor with folders, note hierarchy and media tools around the writing canvas', caption: 'Folder context stays beside the note; tools support the primary writing task.' },
      { src: `${note}Search.png`, label: 'Find a note', alt: 'NooTee search interface for finding notes within the workspace', caption: 'Search provides another route into retrieving accumulated notes.' },
      { src: `${note}Lecture Notes--Invite User.png`, label: 'Invite collaborators', alt: 'NooTee invitation controls for sharing a note with collaborators', caption: 'Collaboration controls sit within the note workspace.' },
    ],
    order: ['features', 'final-ui', 'final-gallery', 'nda-note', 'case-context', 'research', 'observations', 'user-needs', 'flow', 'whats-next'],
    navigation: [{ id: 'features', label: 'Interface decisions' }, { id: 'final-ui', label: 'Complete UI gallery' }, { id: 'case-context', label: 'Product context' }, { id: 'research', label: 'Research & priorities' }, { id: 'flow', label: 'Information architecture' }, { id: 'whats-next', label: 'Next steps & learnings' }],
  },
  jrfood: {
    name: 'JR Food Court', category: 'Internal mobile service', status: 'High-fidelity prototype',
    purpose: 'A staff app for ordering lunch, tracking collection and finding a table.',
    headline: 'Make a short lunch break easier to plan.',
    contribution: 'Independent UI/UX ownership · Food ordering, collection status, seating and the complete mobile service journey.',
    problem: 'Staff have limited break time and need certainty about ordering, collecting food and finding a seat.',
    decision: 'Prioritise repeat ordering and keep seating available from the primary navigation.',
    evidence: 'See ordering and seating in the proposed mobile journey, with the complete research and iterations below.',
    bridges: { 'final-polish': 'Testing feedback informed touch targets and queue-status presentation in the high-fidelity direction. These screens show the proposed ordering and collection experience.' },
    screens: [
      { src: '/jr food court/jr hi-fis/Home Page.png', label: 'Ordering entry', alt: 'JR Food Court mobile home screen with food search, repeat orders and table navigation', caption: 'Food search and Order again support ordering; Tables stays in the primary navigation.', frame: 'phone' },
      { src: '/jr food court/jr hi-fis/My Orders.png', label: 'Order status', alt: 'JR Food Court mobile order history and collection status', caption: 'The proposed service connects an order to collection status.', frame: 'phone' },
    ],
    order: ['final-polish', 'final-polish-gallery', 'testing', 'flow', 'case-context', 'research', 'define', 'define-solutions', 'iterations', 'lowfi-carousel', 'hifi-section', 'logo', 'logo-img', 'outcomes-video', 'final-ui'],
    navigation: [{ id: 'final-polish', label: 'Mobile interface' }, { id: 'testing', label: 'Testing & refinement' }, { id: 'flow', label: 'Ordering & seating' }, { id: 'case-context', label: 'Product context' }, { id: 'research', label: 'Research & strategy' }, { id: 'iterations', label: 'Design development' }, { id: 'outcomes-video', label: 'Prototype walkthrough' }, { id: 'final-ui', label: 'Status & reflection' }],
  },
};
