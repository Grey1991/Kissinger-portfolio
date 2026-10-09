import type { CaseScreen } from './case-study-presentation';

const prototype = 'https://www.figma.com/proto/9LLFJrvwoOhqIXs0xgAJbs/SG-Clickable-Prototype?page-id=0%3A1&scaling=scale-down-width&content-scaling=fixed';
const memberFlow = `${prototype}&node-id=40748-64990&starting-point-node-id=36365%3A1519657`;

/** Captured from Kissinger's public prototype, not generated or recreated.
 * These are design examples, not a claim that every shown module is released.
 * The duplicate modal is an interactive state within the Add Member flow.
 */
export const SURFGUARD_FORM_EVIDENCE: {
  context: CaseScreen;
  entry: CaseScreen;
  exception: CaseScreen;
  guide: { label: string; url: string };
} = {
  context: {
    src: '/surfguard/Prototype - Operational Menu.png',
    label: 'Operational scope · menu prototype',
    alt: 'SurfGuard menu prototype grouping Members, Education, Patrols, Reports, Org Management including Officers, and System Administration',
    caption: 'The menu shows the wider operational scope: member tasks, education, patrols, reporting and organisation management, including Officers. This is the original prototype view.',
    source: { label: 'View the menu prototype', url: `${prototype}&node-id=36365-1519657&starting-point-node-id=36365%3A1519657` },
  },
  entry: {
    src: '/surfguard/Prototype - Add Member Form.png',
    label: 'Add Member · staged information capture',
    alt: 'SurfGuard Add Member prototype: step one of four with progress indicator, required first name, last name, date of birth and gender fields, and Continue action',
    caption: 'The opening step asks for identity information before progressing through the rest of the four-step task. Required fields and progress are visible within the form.',
    source: { label: 'Explore the Add Member prototype', url: memberFlow },
  },
  exception: {
    src: '/surfguard/Prototype - Duplicate Member Check.png',
    label: 'Exception handling · Member Already Exists',
    alt: 'SurfGuard duplicate member modal over the Add Member form, showing masked contact details, organisation associations, and actions to view the record, transfer the member or contact Helpdesk',
    caption: 'A possible existing member is not treated as a generic error. The prototype distinguishes viewing an existing record, transferring a member and contacting Helpdesk, with masked contact details to support identification.',
    source: { label: 'Open the flow and select Continue to inspect this state', url: memberFlow },
  },
  guide: {
    label: 'Official Add Member guide',
    url: 'https://slsitjira.atlassian.net/wiki/spaces/ITSYSUG/pages/2256797939/Add+Member',
  },
};
