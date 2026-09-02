type OverviewItem = {
  challenge: string;
  contribution: string;
  status: string;
};

const PROJECT_OVERVIEWS: Record<string, OverviewItem> = {
  surfguard: {
    challenge: 'Modernise dense operational workflows without losing established permissions, rules or high-volume data handling.',
    contribution: 'Led workflow restructuring, responsive UI, the shared design system, developer handoff and implementation QA.',
    status: 'In development through an incremental rollout, with reusable patterns prepared for delivery across modules.',
  },
  slshub: {
    challenge: 'Unify member and admin services shaped by eligibility rules, approvals, payments and different organisational roles.',
    contribution: 'Led product design from discovery and workflow definition through prototyping, handoff and release QA.',
    status: 'Live national portal serving a network of 200,000+ members across 316 clubs.',
  },
  memberjoin: {
    challenge: 'Connect fragmented joining guidance, eligibility logic, payments and administration across three platforms.',
    contribution: 'Designed the cross-platform journey, rule-driven states, responsive forms and supporting operational flows.',
    status: 'Version-one design complete; implementation is pending.',
  },
  surfcom: {
    challenge: 'Help operators understand and act on changing incident information without losing context under time pressure.',
    contribution: 'Designed and tested structured logging, acknowledgement, messaging, handover and safety-critical confirmation patterns.',
    status: 'Post-testing design direction presented as a prototype; implementation status is disclosed in the case study.',
  },
  hubx: {
    challenge: 'Bring fragmented trading tools, dense financial data and multi-step portfolio workflows into one coherent platform.',
    contribution: 'Led research, UX/UI design, reusable Ant Design patterns, requirements documentation and implementation QA.',
    status: 'Launched and delivered; confidential commercial and adoption metrics are not published.',
  },
  courtcanva: {
    challenge: 'Make court configuration, visualisation, quoting and ordering understandable across desktop, tablet and mobile.',
    contribution: 'Led responsive product design, style guidance, stakeholder reviews, prototyping and design refinement.',
    status: 'Live client engagement that remained in active development when my employment ended.',
  },
  nootee: {
    challenge: 'Address collaboration, media and organisation gaps found in existing note-taking tools.',
    contribution: 'Worked from user research and product structure through interaction design and high-fidelity desktop UI.',
    status: 'Client product design case study focused on the validated design direction.',
  },
  jrfood: {
    challenge: 'Reduce queues and uncertainty around food collection and seating during a concentrated office lunch rush.',
    contribution: 'Mapped the service journey and designed mobile pre-ordering, collection and table-booking flows.',
    status: 'End-to-end mobile product concept demonstrating the proposed service experience.',
  },
};

interface ProjectOverviewProps {
  projectId: string;
}

export const ProjectOverview = ({ projectId }: ProjectOverviewProps) => {
  const overview = PROJECT_OVERVIEWS[projectId];

  if (!overview) return null;

  const items = [
    { label: 'Challenge', value: overview.challenge },
    { label: 'Contribution', value: overview.contribution },
    { label: 'Status', value: overview.status },
  ];

  return (
    <section aria-label="Case study overview" className="grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 md:grid-cols-3">
      {items.map((item) => (
        <div key={item.label} className="bg-[#0b111e] p-6 md:p-7">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
            {item.label}
          </p>
          <p className="text-sm leading-relaxed text-slate-300">{item.value}</p>
        </div>
      ))}
    </section>
  );
};
