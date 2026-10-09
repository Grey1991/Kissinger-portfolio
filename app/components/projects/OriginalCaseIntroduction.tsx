type Props = {
  project: {
    subtitle: string; category: string; summary: string;
    details: { year: string; role: string; platform: string; tools: string };
  };
};

/** Keep the original scope available without repeating the promotional cover. */
export function OriginalCaseIntroduction({ project }: Props) {
  return <details className="case-original-introduction">
    <summary>Project scope &amp; my contribution</summary>
    <div className="case-scope-body">
      <p className="text-sm leading-relaxed text-slate-400">{project.summary}</p>
      <dl className="case-scope-meta">
        {[
          ['Project', project.subtitle], ['Category', project.category], ['Period', project.details.year],
          ['Role', project.details.role], ['Platform', project.details.platform], ['Tools', project.details.tools],
        ].map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
      </dl>
    </div>
  </details>;
}
