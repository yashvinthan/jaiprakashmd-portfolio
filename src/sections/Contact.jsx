import useSoundFx from '../hooks/useSoundFx'

export default function ContactSection() {
  const { playHover, playClick } = useSoundFx()

  const handleSubmit = (event) => {
    event.preventDefault()
    playClick()
  }

  return (
    <section id="contact" className="floating-section mx-auto max-w-5xl px-6 pb-24 pt-12 sm:px-10">
      <div className="mb-10 space-y-4 text-center">
        <p className="text-sm uppercase tracking-[0.5em] text-cyan-200/80">Collaboration</p>
      </div>
      <div className="section-panel relative overflow-hidden px-6 py-16 sm:px-14">
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-fuchsia-500/10" />
        <div className="relative z-10 grid gap-12 lg:grid-cols-2">
          <div className="space-y-5">
            <h2 className="font-techno text-3xl text-white">
              Let's Collaborate
            </h2>
            <p className="text-slate-300">
              I'm always interested in new opportunities and collaborations. Whether you need a web application, 
              server infrastructure, or technical consultation, let's discuss how we can work together to bring 
              your ideas to life.
            </p>
            <div className="mt-6 space-y-3">
              <div>
                <p className="text-xs uppercase tracking-[0.5em] text-slate-300 mb-1">Email</p>
                <a 
                  href="mailto:jaiprakashmdofficial@gmail.com" 
                  className="text-cyan-300 hover:text-cyan-200 transition text-sm"
                  onMouseEnter={playHover}
                >
                  jaiprakashmdofficial@gmail.com
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.5em] text-slate-300 mb-1">Phone</p>
                <a 
                  href="tel:+916379570398" 
                  className="text-cyan-300 hover:text-cyan-200 transition text-sm"
                  onMouseEnter={playHover}
                >
                  +91 6379570398
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.5em] text-slate-300 mb-1">Locations</p>
                <p className="text-slate-300 text-sm">Chennai, India • Tbilisi, Georgia</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-cyan-300 mb-4">Collaboration Contact</h3>
            <form className="hologram-form relative space-y-5" onSubmit={handleSubmit}>
              <label className="block text-xs uppercase tracking-[0.5em] text-slate-300">
                Your name
                <input required className="mt-3 w-full" type="text" placeholder="Your Name" />
              </label>
              <label className="block text-xs uppercase tracking-[0.5em] text-slate-300">
                Your email
                <input required className="mt-3 w-full" type="email" placeholder="your@email.com" />
              </label>
              <label className="block text-xs uppercase tracking-[0.5em] text-slate-300">
                Project type
                <input required className="mt-3 w-full" type="text" placeholder="Web App, Server, Consultation, etc." />
              </label>
              <label className="block text-xs uppercase tracking-[0.5em] text-slate-300">
                Tell me about your project or collaboration idea
                <textarea
                  required
                  className="mt-3 w-full"
                  rows="4"
                  placeholder="Describe your project or collaboration idea..."
                />
              </label>
              <button
                type="submit"
                onMouseEnter={playHover}
                className="w-full rounded-full border border-cyan-300/70 px-6 py-3 text-xs uppercase tracking-[0.5em] text-cyan-100 hover:bg-cyan-400/10"
              >
                Send Collaboration Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
