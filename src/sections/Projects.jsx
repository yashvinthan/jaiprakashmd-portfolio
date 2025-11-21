import useSoundFx from '../hooks/useSoundFx'

const projects = [
  {
    title: 'MeCHAT',
    description:
      'A messaging application for secure and fast communication.',
    tags: ['Web App', 'Messaging'],
    status: 'Coming Soon',
    link: null,
    image: '/mechat.png',
  },
  {
    title: 'Fiverr Freelancer',
    description:
      'A platform showcasing freelance services and skills.',
    tags: ['Freelance', 'Portfolio'],
    status: 'View Project',
    link: 'https://www.fiverr.com',
    image: '/fiverr.png',
  },
  {
    title: 'Webistzu',
    description:
      'Web presence broker helping businesses establish their digital footprint.',
    tags: ['Web Development', 'Digital Presence', 'Brokerage'],
    status: 'Visit Project',
    link: 'https://webistzu.com',
    image: '/webistzu.png',
  },
]

export default function ProjectsSection() {
  const { playHover, playClick } = useSoundFx()

  return (
    <section id="projects" className="floating-section mx-auto max-w-6xl px-6 py-24 sm:px-12">
      <div className="mb-10 space-y-4">
        <p className="text-sm uppercase tracking-[0.5em] text-cyan-200/80">Projects</p>
        <h2 className="font-techno text-3xl text-white sm:text-4xl">
          Projects
        </h2>
        <p className="text-slate-300">
          A collection of projects showcasing web development, server management, and digital solutions 
          for businesses and professionals.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            tabIndex={0}
            className="project-card focus-visible:ring-2 focus-visible:ring-cyan-300 overflow-hidden"
          >
            {project.image && (
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            )}
            <div className="p-6 space-y-4">
              <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-cyan-400 via-sky-500 to-fuchsia-500 opacity-60" />
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="text-slate-300 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.3em] text-cyan-200">
                {project.tags.map((tag) => (
                  <span key={tag} className="bg-cyan-500/20 px-3 py-1 rounded-full">{tag}</span>
                ))}
              </div>
              {project.status && (
                <button
                  type="button"
                  onMouseEnter={playHover}
                  onClick={() => {
                    if (project.link && project.link !== '#') {
                      window.open(project.link, '_blank')
                    } else {
                      playClick()
                    }
                  }}
                  className="w-full rounded-full border border-cyan-300/60 px-6 py-2 text-xs tracking-[0.5em] text-cyan-100 hover:bg-cyan-400/10 transition-colors"
                >
                  {project.status}
                </button>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
