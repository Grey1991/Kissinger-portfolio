interface StrategyRoadmapProps {
  title?: string;
  challenge?: string;
  steps: { title: string; description: string }[];
}

export const StrategyRoadmap = ({ title, challenge, steps }: StrategyRoadmapProps) => (
  <div className="case-roadmap">
    {title && <h3 className="case-study-heading">{title}</h3>}
    {challenge && (
      <div className="case-roadmap-challenge">
        <p className="section-label">The challenge</p>
        <p>{challenge}</p>
      </div>
    )}
    <ol className="case-roadmap-list">
      {steps.map((step, index) => (
        <li key={index} className="case-roadmap-step">
          <span className="case-roadmap-dot" aria-hidden="true" />
          <div className="case-roadmap-card">
            <h4>{step.title}</h4>
            <p>{step.description}</p>
          </div>
        </li>
      ))}
    </ol>
  </div>
);
