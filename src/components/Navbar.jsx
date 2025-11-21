import useSoundFx from '../hooks/useSoundFx'

const links = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'contact', label: 'Collaboration' },
]

export default function Navbar() {
  const { playHover, playClick } = useSoundFx()

  const handleNav = (id) => {
    playClick()
    const target = document.getElementById(id)
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className="sticky top-0 z-20 px-4 pt-4 sm:px-8">
      <div className="glass-nav flex items-center justify-between rounded-3xl border border-cyan-500/20 bg-slate-900/50 px-6 py-3">
          <button
          onMouseEnter={playHover}
          onClick={() => handleNav('hero')}
          className="text-sm font-semibold uppercase tracking-[0.45em] text-cyan-100"
        >
          JAI PRAKASH<span className="text-fuchsia-400"> .M.D</span>
        </button>

        <nav className="hidden gap-4 text-xs uppercase tracking-[0.35em] text-slate-300 md:flex">
          {links.map((link) => (
            <button
              key={link.id}
              onMouseEnter={playHover}
              onClick={() => handleNav(link.id)}
              className="rounded-full border border-transparent px-3 py-1 transition hover:border-cyan-300/40 hover:text-cyan-100"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:block" />
      </div>
    </header>
  )
}
