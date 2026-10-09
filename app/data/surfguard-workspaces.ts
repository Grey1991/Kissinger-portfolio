import type { CaseScreen } from './case-study-presentation';

const guide = 'https://slsitjira.atlassian.net/wiki/spaces/ITSYSUG/pages/';

/** Original project artwork and public, non-identifying guide excerpts.
 * Guide images document the released interface, not unverified impact metrics
 * or a claim that every production detail matches the original design.
 */
export const SURFGUARD_SCREENS: CaseScreen[] = [
  {
    src: '/surfguard/SLS Hub Hero.png', label: 'Dashboard', frame: 'surfguard-dashboard',
    alt: 'SurfGuard dashboard design showing organisation navigation, registered-member data, request queues and award charts',
    caption: 'The operational dashboard from my original project artwork. Enlarge to view the complete presentation.',
  },
  {
    src: '/surfguard/Guide - Member search filters.png', label: 'Find members', frame: 'member-search',
    companions: [{ src: '/surfguard/Guide - Member search controls.png', alt: 'Released Find Members controls with an empty keyword field, filter toggle and result count; no individual member rows' }],
    alt: 'Released SurfGuard filters for membership status, season, competitor status, patrol teams, pending requests, date of birth and age',
    caption: 'Released search and filter controls. Guide excerpts omit individual member records; the original guide annotation is retained.',
    source: { label: 'Official SLSA user guide', url: `${guide}2256765119` },
  },
  {
    src: '/surfguard/Guide - Assessment actions.png', label: 'Queues & reporting', frame: 'dashboard-widgets',
    companions: [{ src: '/surfguard/Guide - Awards and proficiencies.png', alt: 'Released SurfGuard chart comparing award holders with current-season proficiency by award type' }],
    alt: 'Released SurfGuard Assessment Actions widget grouping outstanding work by submission, approval, award allocation and results processing',
    caption: 'Released dashboard modules: outstanding assessment work and award/proficiency reporting. Counts are interface examples, not design-impact metrics.',
    source: { label: 'Official SLSA user guide', url: `${guide}2256699494` },
  },
];

export const SURFGUARD_PROTOTYPE_URL = 'https://www.figma.com/proto/9LLFJrvwoOhqIXs0xgAJbs/SG-Clickable-Prototype--Copy-?page-id=0%3A1&node-id=35110-523921&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=36365%3A1519657';

export const SURFGUARD_GUIDE_ASSETS = [
  { file: 'Guide - Member search filters.png', page: `${guide}2256765119`, attachment: 'https://slsitjira.atlassian.net/wiki/rest/api/content/2256765119/child/attachment/att3076751617/download' },
  { file: 'Guide - Member search controls.png', page: `${guide}2259354066`, attachment: 'https://slsitjira.atlassian.net/wiki/rest/api/content/2259354066/child/attachment/att2908586006/download' },
  { file: 'Guide - Assessment actions.png', page: `${guide}2951053349`, attachment: 'https://slsitjira.atlassian.net/wiki/rest/api/content/2951053349/child/attachment/att2950430749/download' },
  { file: 'Guide - Awards and proficiencies.png', page: `${guide}2968485898`, attachment: 'https://slsitjira.atlassian.net/wiki/rest/api/content/2968485898/child/attachment/att2970943497/download' },
];
