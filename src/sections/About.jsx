import useSoundFx from '../hooks/useSoundFx'

const stats = [
  { value: 'MD', label: 'Medical Degree Candidate' },
  { value: '3+', label: 'Diploma Credentials' },
  { value: '4+', label: 'Projects Delivered' },
]

export default function AboutSection() {
  const { playHover } = useSoundFx()

  return (
    <section
      id="about"
      className="floating-section section-panel relative mx-auto max-w-6xl px-8 py-24 sm:px-14"
    >
      <div className="molecule-structure" aria-hidden />
      <div className="space-y-6">
        <p className="text-sm uppercase tracking-[0.5em] text-cyan-200/70">About Me</p>
        <h2 className="font-techno text-3xl text-white sm:text-4xl">
          Jai Prakash <span className="text-cyan-400">.M.D</span>
        </h2>
        <p className="max-w-3xl text-lg text-slate-300 mb-6">
          MD (MBBS) Candidate at SEU | Web Developer | Server Engineer
        </p>
        <p className="max-w-3xl text-lg text-slate-300 mb-8">
          I bring a unique perspective to web development, combining analytical thinking from medical training 
          with technical expertise in building robust digital solutions.
        </p>
        
        <div className="mt-8 space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-cyan-300 mb-4">Profile Highlights</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>MD (MBBS) Candidate at Georgian National University (SEU)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Full-stack web developer with focus on modern technologies</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Founder of Zara Datacenter & Webistzu</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Experience in both technical and analytical domains</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Strong problem-solving and critical thinking skills</span>
              </li>
            </ul>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-cyan-300 mb-4">Education</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-3">
                <span className="text-fuchsia-400 mt-1">→</span>
                <span><strong className="text-white">MD (MBBS)</strong> - Georgian National University (SEU)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-fuchsia-400 mt-1">→</span>
                <span><strong className="text-white">Web Development</strong> - Self-taught with focus on modern frameworks</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-fuchsia-400 mt-1">→</span>
                <span><strong className="text-white">Server Engineering</strong> - Practical experience with Linux systems</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {stats.map((stat) => (
          <button
            key={stat.label}
            onMouseEnter={playHover}
            className="rounded-2xl border border-slate-700/60 bg-slate-900/60 p-6 text-left shadow-[0_20px_45px_rgba(2,6,23,0.65)] transition hover:border-cyan-300/60 hover:-translate-y-1"
          >
            <p className="text-3xl font-semibold text-white">{stat.value}</p>
            <p className="mt-2 text-sm uppercase tracking-[0.3em] text-slate-300">{stat.label}</p>
          </button>
        ))}
      </div>
    </section>
  )
}
