'use client';


interface SkillsSectionProps {
  skills: string[];
  tools: string[];
}

export const SkillsSection = ({ skills, tools }: SkillsSectionProps) => {
  return (
    <section id="skills" className="portfolio-section">
      <div className="portfolio-shell">
        <div className="mb-12 max-w-2xl">
          <p className="section-label mb-5"><span>03 /</span> How I work</p>
          <h2 className="section-title">From the first question<br />to the final detail.</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-[0.18em] text-slate-500 font-semibold mb-6">Product design</h4>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <div key={skill} className="capability-tag">
                  {skill}
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-[0.18em] text-slate-500 font-semibold mb-6">Tools &amp; delivery</h4>
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool) => (
                <div key={tool} className="tool-item">
                  <div className="w-1.5 h-1.5 bg-[#c6bbff] rounded-full"></div>
                  <span className="font-medium text-slate-200">{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
