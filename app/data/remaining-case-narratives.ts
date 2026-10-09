export type NarrativeGroup = { label: string; ids: string[]; title?: string; bridge?: string };
export type PortfolioNarrative = {
  title: string; purpose: string; question: string;
  screen: { src: string; alt: string; caption: string; phone?: boolean };
  groups: NarrativeGroup[]; status: string; sectionCopy?: Record<string, string>;
};
export const PORTFOLIO_NARRATIVES: Record<string, PortfolioNarrative> = {
  memberjoin: {
    title: 'One joining journey across three systems.',
    purpose: 'Member Join connects public membership guidance with account creation, family details, declarations and payment in SLS Hub, then downstream administration in SurfGuard.',
    question: 'How can a family understand eligibility and fees before committing to an account and completing the transaction?',
    screen: { src: '/member join slsa/Logic Flow Step 4. Review fees and costs and redirect to SLS Hub.png', alt: 'Membership fee review before continuing to SLS Hub account creation', caption: 'The fee review establishes membership type and club before the handover to SLS Hub. Values shown are prototype examples.' },
    groups: [
      { label: 'Fragmented entry points', ids: ['problem-goal'], title: 'Connect guidance and transactions.', bridge: 'The fee review is one handover in a larger journey. The original problem was fragmentation across public guidance, member transactions and administration.' },
      { label: 'Journey decisions', ids: ['joining-journey', 'ui-walkthrough', 'website-flow', 'hub-journey'], bridge: 'With the systems separated by responsibility, the design follows a family from choosing membership to reviewing and paying for it.' },
      { label: 'Delivery & validation', ids: ['scope', 'demo-video'], title: 'Define the boundaries, then walk through the flow.', bridge: 'The journey needs consistent data at each handover. The delivery scope and device walkthroughs show how the proposed flow is defined across the three systems.' },
      { label: 'Status & reflection', ids: ['status'], title: 'Design complete; implementation pending.' },
    ],
    status: 'I completed V1 design and prototyping for the joining and renewal journey. Implementation was pending at the recorded stage.',
  },
  hubx: {
    title: 'Bring fragmented trading tools into one workspace.',
    purpose: 'HubX is a web platform for fund managers and clients to manage portfolios, trading accounts and risk across services connected to MetaTrader 4 and 5.',
    question: 'How can dense trading data remain readable while familiar operations move into a unified web platform?',
    screen: { src: '/hubx/MetaTrader 4 After.png', alt: 'Redesigned web trading interface with order states, column filters and an orders table', caption: 'The redesigned orders view brings navigation, order states and table filtering into one working context.' },
    groups: [
      { label: 'Constraints', ids: ['context'], title: 'Keep precision while consolidating the workspace.', bridge: 'The orders view illustrates the central constraint: the interface must support dense information and familiar operations without sacrificing precision.' },
      { label: 'Platform evolution', ids: ['before-after'], title: 'Compare the legacy and redesigned workspaces.', bridge: 'Those constraints informed the migration. Compare the supplied interfaces to see what changed in navigation, data hierarchy and presentation.' },
      { label: 'Shared patterns', ids: ['decisions'], title: 'Make recurring operations consistent.', bridge: 'The visual changes need a repeatable foundation. These decisions connect reusable components, task progression and implementation reviews.' },
      { label: 'Delivery & validation', ids: ['requirements', 'design-outcome-video'], title: 'Specify the behaviour behind the screens.', bridge: 'Shared patterns are only useful when their rules are explicit. Field requirements give engineering and QA concrete criteria; the walkthrough shows the assembled platform.' },
      { label: 'Status & reflection', ids: ['outcome', 'reflection'], title: 'Design outcomes and lessons for the next build.' },
    ],
    status: 'My HubX work covered desktop interface design, implementation-ready requirements and QA support for complex financial trading and portfolio workflows.',
  },
  surfcom: {
    title: 'Keep the incident and its latest state together.',
    purpose: 'SurfCom ICEMS supports operators, supervisors and responders with incident logging, messaging, location information and coordination during emergency operations.',
    question: 'How can an operator capture an incident and act on updates without confusing an unconfirmed message with the latest confirmed state?',
    screen: { src: '/surfcom icems/View Incident Details.png', alt: 'ICEMS incident details with service, location, priority and an attached message log', caption: 'Structured incident details and the message log share the working view. The design is shown at the prototype stage.' },
    groups: [
      { label: 'Operational journey', ids: ['incident-scenario', 'journey'], bridge: 'The interface serves an unfolding incident, not an isolated form. The scenario and service journey establish what operators need from logging through coordination and closure.' },
      { label: 'Interaction decisions', ids: ['design-highlights'], bridge: 'That journey determines which information must stay visible and which actions need to be easy to reach. The following patterns address those moments.' },
      { label: 'Risk & uncertainty', ids: ['safety-rails'], bridge: 'Speed alone is insufficient when messages arrive late or an incident changes hands. These examples pair specific risks with explicit states, confirmations and traceable context.' },
      { label: 'Prototype walkthrough', ids: ['demo-video'], bridge: 'The walkthrough brings those interaction patterns together in the post-testing prototype.' },
      { label: 'Status & reflection', ids: ['wrapup'], title: 'Post-testing prototype; implementation incomplete.' },
    ],
    status: 'I delivered the tested design and subsequent iterations for SurfCom ICEMS. Implementation was still in progress at the documented stage.',
  },
  courtcanva: {
    title: 'Connect court configuration to a quote.',
    purpose: 'CourtCanva lets court owners and facility managers configure sports courts, preview their designs and move into supplier quoting and ordering.',
    question: 'How can users find the right design tools and understand what their configuration means for preview, pricing and ordering?',
    screen: { src: '/courtcanva/ProTennis Court.png', alt: 'CourtCanva court editor with sport selection, dimensions, surface colours, quotation and cart action', caption: 'The original editor connects court dimensions and surface choices to a quotation and an Add to Cart action.' },
    groups: [
      { label: 'Product journey', ids: ['requirements', 'product-structure', 'prototypes', 'prototypes-gallery'], title: 'From configuration to order placement.', bridge: 'The editor is one part of the purchase journey. User requirements and product structure establish how configuration, saved designs and ordering fit together.' },
      { label: 'Testing & decisions', ids: ['testing', 'testing-improvements'], title: 'Use feedback to refine the working tools.', bridge: 'The first prototype exposed issues with locating tools, understanding preview access and separating the toolbar from the canvas. These findings explain the next design changes.' },
      { label: 'Revised direction', ids: ['courtcanva2-intro', 'courtcanva2-cta', 'courtcanva2'], title: 'Explore the revised configuration journey.', bridge: 'The revised direction follows those findings. The embedded demonstration lets you explore configuration and its connection to quoting; it illustrates the design direction.' },
      { label: 'Status & reflection', ids: ['reflection'], title: 'Handoff, project status and lessons.' },
    ],
    status: 'I delivered designs and developer handoff during the client engagement. The product was still progressing toward release when my contract ended.',
  },
  nootee: {
    title: 'Capture a note, then find and share it.',
    purpose: 'NooTee is a collaborative note-taking product designed around mixed-media capture, organisation and retrieval for study, work and personal notes.',
    question: 'How can a workspace support richer notes and collaboration while keeping writing, organisation and retrieval easy to understand?',
    screen: { src: '/nootee/nootee hi-fi/Lecture Notes.png', alt: 'NooTee lecture note editor with folders, note hierarchy and media tools around the writing canvas', caption: 'The lecture-note screen keeps the folder context beside the note while media tools sit above the writing area.' },
    groups: [
      { label: 'Research & priorities', ids: ['research', 'observations', 'user-needs'], title: 'Understand capture, organisation and retrieval.', bridge: 'The editor responds to recurring research themes. The survey, interviews and synthesised needs informed what to prioritise in the workspace.' },
      { label: 'Navigation & task flow', ids: ['flow'], title: 'Give notes a predictable place to live.', bridge: 'Those needs become a navigation and task structure: entering the workspace, creating a note, and managing content and settings.' },
      { label: 'Interface decisions', ids: ['features', 'final-ui', 'final-gallery', 'nda-note'], title: 'Keep tools available around the writing area.', bridge: 'Within that structure, the feature examples show how media, search, sharing and templates support the note rather than replace the primary writing task.' },
      { label: 'Status & next steps', ids: ['whats-next'], title: 'What the design shows, and what needs testing.' },
    ],
    sectionCopy: { 'final-ui': 'The supplied high-fidelity screens keep folder navigation beside the note canvas, with media and collaboration controls around the writing area. Folders, search and note actions provide routes into creating, organising and retrieving content.' },
    status: 'I completed research and high-fidelity product design for NooTee. Further usability testing, collaboration refinement and mobile exploration remain next steps.',
  },
  jrfood: {
    title: 'Make a short lunch break easier to plan.',
    purpose: 'JR Food Court is an office canteen project connecting food pre-ordering, collection status and table booking in one mobile service journey.',
    question: 'How can staff know what to order, when to collect it and where to sit before their break time runs out?',
    screen: { src: '/jr food court/jr hi-fis/Home Page.png', alt: 'JR Food Court home screen with food search, categories, reorder cards and table navigation', caption: 'Food search and Order again support the ordering entry point; Tables stays available in the primary navigation.', phone: true },
    groups: [
      { label: 'Research & service priorities', ids: ['research', 'define', 'define-solutions'], title: 'Prioritise speed and certainty.', bridge: 'The home screen is only an entry point. Staff research identified uncertainty around collection and seating as part of the same lunch-break problem.' },
      { label: 'Ordering & seating flow', ids: ['flow'], title: 'Connect the order to the rest of the break.', bridge: 'The priorities become two connected task paths: selecting and paying for food, and arranging seating for dining in.' },
      { label: 'Design development', ids: ['iterations', 'lowfi-carousel', 'hifi-section', 'logo', 'logo-img'], title: 'Develop the journey from wireframes to visual detail.', bridge: 'With the ordering and seating paths defined, the original iterations show how screen hierarchy, interaction detail and visual identity developed.' },
      { label: 'Testing & refinement', ids: ['testing', 'final-polish', 'final-polish-gallery'], title: 'Refine the actions and collection cues.', bridge: 'Once the task paths were defined, testing feedback informed touch targets and queue-status presentation in the high-fidelity direction.' },
      { label: 'Prototype walkthrough', ids: ['outcomes-video'], bridge: 'The walkthrough shows how ordering and collection fit together in the proposed mobile experience.' },
      { label: 'Status & reflection', ids: ['final-ui'], title: 'Delivered high-fidelity service design.' },
    ],
    status: 'I delivered a high-fidelity prototype covering food ordering, collection status and seating, with the complete service journey and interaction design.',
  },
};
