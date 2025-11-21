import { useLayoutEffect, useState } from 'react'
import CanvasScene from './components/CanvasScene'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import AboutSection from './sections/About'
import SkillsSection from './sections/Skills'
import ProjectsSection from './sections/Projects'
import CertificatesSection from './sections/Certificates'
import ContactSection from './sections/Contact'
import { gsap } from './lib/gsapConfig'
import useScrollReveal from './hooks/useScrollReveal'

export default function App() {
  const [simpleMode] = useState(false)
  useScrollReveal()

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.project-card').forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, x: -50, scale: 0.92 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
            },
            delay: index * 0.04,
          }
        )
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100" data-simple={simpleMode}>
      <CanvasScene simpleMode={simpleMode} />
      <Navbar />
      <main id="scroll-sections" className="relative z-10 space-y-28 pb-32">
        <Hero simpleMode={simpleMode} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificatesSection />
        <ContactSection />
      </main>
      <footer className="relative z-10 border-t border-slate-800/50 py-8">
        <div className="mx-auto max-w-6xl px-6 text-center text-sm text-slate-400">
          <p>© 2025 JAI PRAKASH .M.D — Built with care • Webistzu</p>
        </div>
      </footer>
    </div>
  )
}
