const skills = [
  {
    label: 'HTML5 & Accessibility',
    gradient: 'rgba(59,130,246,0.55)',
    glow: 'rgba(56,189,248,0.6)',
    detail: 'Semantic markup, ARIA, responsive layouts, and cross-browser compatibility.',
    tilt: 12,
  },
  {
    label: 'CSS3 & UI/UX',
    gradient: 'rgba(217,70,239,0.45)',
    glow: 'rgba(244,114,182,0.5)',
    detail: 'Modern CSS, animations, layout systems, and creating intuitive user interfaces.',
    tilt: -6,
  },
  {
    label: 'JavaScript',
    gradient: 'rgba(52,211,153,0.45)',
    glow: 'rgba(16,185,129,0.5)',
    detail: 'Interactive features, API integrations, and dynamic content implementation.',
    tilt: 8,
  },
  {
    label: 'Server Management',
    gradient: 'rgba(248,113,113,0.45)',
    glow: 'rgba(251,191,36,0.5)',
    detail: 'Linux servers, deployment automation, security configurations, and networking.',
    tilt: -10,
  },
  {
    label: 'Problem Solving',
    gradient: 'rgba(129,140,248,0.45)',
    glow: 'rgba(59,130,246,0.45)',
    detail: 'Analytical thinking, debugging complex issues, and systematic approach to challenges.',
    tilt: 16,
  },
  {
    label: 'Project Management',
    gradient: 'rgba(190,242,100,0.5)',
    glow: 'rgba(255,255,255,0.35)',
    detail: 'Planning, execution, and delivery of technical projects from concept to completion.',
    tilt: -14,
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24 sm:px-12">
      <div className="floating-section section-panel relative px-6 py-16 sm:px-14">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.5em] text-cyan-200/70">Skills</p>
          <h2 className="font-techno text-3xl text-white">
            Technical Skills
          </h2>
          <p className="text-slate-300">
            A comprehensive skill set combining front-end development, server management, and analytical 
            problem-solving to deliver robust digital solutions.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill.label}
              className="relative group"
              style={{ 
                '--skill-gradient': skill.gradient, 
                '--skill-glow': skill.glow,
                transform: `perspective(1000px) rotateY(${skill.tilt * 0.5}deg) rotateX(${skill.tilt * 0.3}deg)`
              }}
            >
              <div 
                className="skill-box rounded-2xl border border-cyan-400/20 bg-slate-900/60 backdrop-blur-sm p-6 text-center transition-all duration-300 hover:border-cyan-400/40 hover:bg-slate-900/80 hover:scale-105"
                style={{
                  boxShadow: `0 8px 32px rgba(2,6,23,0.6), inset 0 1px 0 rgba(148,163,184,0.1), 0 0 40px var(--skill-glow)`,
                  background: `linear-gradient(135deg, rgba(2,6,23,0.8), rgba(15,23,42,0.6)), radial-gradient(circle at 30% 30%, var(--skill-gradient), transparent 70%)`
                }}
              >
                <h3 className="text-lg font-semibold text-cyan-300 mb-3 uppercase tracking-[0.1em]">
                  {skill.label}
                </h3>
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-100/80 leading-relaxed">
                  {skill.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
