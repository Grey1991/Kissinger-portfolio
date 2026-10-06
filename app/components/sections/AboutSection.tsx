'use client';

interface AboutSectionProps {
  summary: string;
}

export const AboutSection = ({ summary }: AboutSectionProps) => {
  const metrics = [
    { value: '200K+', label: 'Member network' },
    { value: '316', label: 'Clubs nationwide' },
    { value: '~50', label: 'Figma components' },
    { value: '5', label: 'Years in product design' },
  ];

  return (
    <section id="about" className="portfolio-section">
      <div className="portfolio-shell grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-16 items-start">
        <div className="space-y-6">
          <p className="section-label"><span>02 /</span> A little about me</p>
          <h2 className="section-title">Comfortable with complexity.<br />Careful with the details.</h2>
          <p className="section-description max-w-3xl">
            {summary}
          </p>
        </div>

        <div className="about-metrics grid grid-cols-2 border-t border-l border-white/10 lg:mt-12">
          {metrics.map((metric) => (
            <div key={metric.label} className="min-h-36 p-6 border-r border-b border-white/10 flex flex-col justify-end">
              <span className="text-3xl md:text-4xl font-semibold text-[#c6bbff] tracking-tight">{metric.value}</span>
              <span className="text-sm text-slate-400 mt-2">{metric.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
