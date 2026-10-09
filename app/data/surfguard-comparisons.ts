type Comparison = {
  title: string; summary: string;
  before: { src: string; alt: string; label: string };
  after: { src: string; alt: string; label: string };
};

/** Original captures from Kissinger's interview presentation; no synthetic UI.
 * Member Details compares legacy desktop with the supplied redesigned tablet
 * record, not a claim that the captures use an identical viewport or member.
 * Review identifying record data before any future public publication.
 */
export const SURFGUARD_COMPARISONS: Record<string, Comparison> = {
  'dashboard-comparison': {
    title: 'Dashboard',
    summary: 'From a statistics-led dashboard to an operational overview with notices, request actions and reporting.',
    before: {
      src: '/surfguard/Legacy Dashboard.png', label: 'Before · legacy Dashboard',
      alt: 'Legacy SurfGuard Dashboard showing membership trends, current and financial memberships, retention, patrol contribution and gender reports.',
    },
    after: {
      src: '/surfguard/Dashboard Prototype.png', label: 'After · Dashboard prototype',
      alt: 'Redesigned SurfGuard Dashboard prototype with navigation, notices, member and family request actions, transfer actions and reporting widgets.',
    },
  },
  'member-search-comparison': {
    title: 'Member Search',
    summary: 'From a standalone search form to search, results and a member quick view in one workspace.',
    before: {
      src: '/surfguard/Legacy Member Search.png', label: 'Before · legacy search',
      alt: 'Legacy SurfGuard member search: organisation filters and separate member identity fields above an empty result area.',
    },
    after: {
      src: '/surfguard/Member Search and Quick View.png', label: 'After · search & quick-view prototype',
      alt: 'Redesigned SurfGuard member search with keyword search, organisation filters, result table and a member quick-view panel alongside the results.',
    },
  },
  'member-details-comparison': {
    title: 'Member Details',
    summary: 'From a long, dense record to grouped information, visible compliance warnings and membership-specific actions.',
    before: {
      src: '/surfguard/Legacy Member Details.png', label: 'Before · legacy desktop record',
      alt: 'Legacy SurfGuard desktop member record with general details, contact fields and memberships arranged in a long form.',
    },
    after: {
      src: '/surfguard/SG Tablet screenshot.png', label: 'After · redesigned tablet record',
      alt: 'Redesigned SurfGuard tablet member record with a compliance warning, category tabs, membership cards and grouped sections.',
    },
  },
};

export const SURFGUARD_CAPTURE_SOURCES = {
  presentation: 'Kissinger-Hu-ZENE-AI-30-Minute-Presentation.pptx',
  searchSlides: [11, 12],
  detailsSlide: 13,
  legacyDashboard: 'User-provided Desktop/old. dashboard.png; replaces the earlier public-guide capture.',
  dashboardPrototype: 'https://www.figma.com/proto/9LLFJrvwoOhqIXs0xgAJbs/SG-Clickable-Prototype--Copy-?page-id=0%3A1&node-id=35110-523921&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=36365%3A1519657',
  dashboardCapture: 'Original desktop first viewport captured directly from the Figma prototype at 1512 × 982; not a stitched full-scroll page. Interface values are examples, not impact metrics.',
};
