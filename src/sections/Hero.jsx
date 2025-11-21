import useSoundFx from '../hooks/useSoundFx'

export default function Hero({ simpleMode }) {
  const { playHover, playClick } = useSoundFx()

  const handleScrollToAbout = () => {
    playClick()
    const target = document.getElementById('about')
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center px-6 pt-32 sm:px-12"
    >
      <div className="floating-section relative z-10 max-w-6xl w-full">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Profile Picture */}
          <div className="flex-shrink-0 order-2 md:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-fuchsia-400/20 to-cyan-400/20 rounded-full blur-2xl animate-pulse" />
              <img
                src="/jp.png"
                alt="Jai Prakash M.D."
                className="relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-cyan-400/30 shadow-[0_0_40px_rgba(34,211,238,0.3)] ring-4 ring-fuchsia-400/20"
                onError={(e) => {
                  // Fallback if image doesn't exist
                  e.target.style.display = 'none'
                }}
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 space-y-8 text-center md:text-left order-1 md:order-2">
            <div className="flex flex-col gap-4 text-sm uppercase tracking-[0.7em] text-cyan-200/80 md:flex-row md:items-center">
              <span>MD (MBBS) Candidate at SEU | Web Developer | Server Engineer</span>
            </div>
            <h1 className="font-techno text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
              Hi, I'm <span className="text-cyan-400">Jai Prakash</span> <span className="text-fuchsia-400">.M.D</span>
            </h1>
            <p className="max-w-3xl text-lg text-slate-300">
              MD (MBBS) Candidate at SEU | Web Developer | Server Engineer
              <br />
              <span className="text-slate-400">Bridging analytical thinking with technical expertise.</span>
            </p>
            <div className="flex flex-col items-center gap-4 text-sm uppercase tracking-[0.5em] md:flex-row md:gap-6">
              <button
                onMouseEnter={playHover}
                onClick={() => {
                  playClick()
                  const target = document.getElementById('contact')
                  if (target) target.scrollIntoView({ behavior: 'smooth' })
                }}
                className="rounded-full border border-cyan-300/70 px-10 py-4 text-xs font-semibold tracking-[0.5em] text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,0.2)] transition hover:bg-cyan-500/20"
              >
                Let's Collaborate
              </button>
              <button
                onMouseEnter={playHover}
                onClick={handleScrollToAbout}
                className="rounded-full border border-fuchsia-300/70 px-10 py-4 text-xs font-semibold tracking-[0.5em] text-fuchsia-100 shadow-[0_0_30px_rgba(244,114,182,0.2)] transition hover:bg-fuchsia-500/20"
              >
                View Resume
              </button>
              <button
                onMouseEnter={playHover}
                onClick={() => {
                  playClick()
                  const target = document.getElementById('contact')
                  if (target) target.scrollIntoView({ behavior: 'smooth' })
                }}
                className="rounded-full border border-cyan-300/70 bg-cyan-500/20 px-10 py-4 text-xs font-semibold tracking-[0.5em] text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,0.3)] transition hover:bg-cyan-500/30"
              >
                Hire Me!
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
