import useSoundFx from '../hooks/useSoundFx'

const certificates = [
  {
    title: 'Aviation Management',
    institution: 'European Open University',
    description: 'Professional Certificate Program in Aviation Management awarded on 29/05/2021.',
    date: '29/05/2021',
    image: '/aviation.jpeg',
  },
  {
    title: 'DPT (Physiology)',
    institution: 'European Open University',
    description: 'Professional Diploma Program in Physiology awarded on 28/05/2021.',
    date: '28/05/2021',
    image: '/physio.jpeg',
  },
  {
    title: 'Dip. Emb. (Embryology)',
    institution: 'European Open University',
    description: 'Professional Diploma Program in Embryology awarded on 02/06/2021.',
    date: '02/06/2021',
    image: '/embryo.jpeg',
  },
]

export default function CertificatesSection() {
  const { playHover, playClick } = useSoundFx()

  return (
    <section id="certificates" className="floating-section mx-auto max-w-6xl px-6 py-24 sm:px-12">
      <div className="mb-10 space-y-4">
        <p className="text-sm uppercase tracking-[0.5em] text-cyan-200/80">Certificates</p>
        <h2 className="font-techno text-3xl text-white sm:text-4xl">Professional Certifications</h2>
        <p className="text-slate-300">
          Academic achievements and professional certifications that complement my medical and technical expertise.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert) => (
          <article
            key={cert.title}
            className="project-card focus-visible:ring-2 focus-visible:ring-cyan-300 overflow-hidden"
          >
            {cert.image && (
              <div className="h-48 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            )}
            <div className="p-6 space-y-4">
              <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-cyan-400 via-sky-500 to-fuchsia-500 opacity-60" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">{cert.title}</h3>
                <p className="text-sm text-cyan-300 mb-2">{cert.institution}</p>
                <p className="text-xs text-slate-400 mb-3">{cert.date}</p>
              </div>
              <p className="text-slate-300 text-sm">{cert.description}</p>
              <button
                type="button"
                onMouseEnter={playHover}
                onClick={() => {
                  playClick()
                  window.open(cert.image, '_blank')
                }}
                className="w-full rounded-full border border-cyan-300/60 px-6 py-2 text-xs tracking-[0.5em] text-cyan-100 hover:bg-cyan-400/10 transition-colors"
              >
                View Certificate
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

