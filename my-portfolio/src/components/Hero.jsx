import heroImg from '../assets/hero.png'

export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="hero" className="flex items-center justify-center pt-16">
        <div className="w-full px-12 py-12 flex flex-col items-center gap-6 text-center">
        <div className="flex-1 space-y-6">
          <p className="text-cyan-600 dark:text-cyan-400 font-medium tracking-wide">Hi, I'm</p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">Mason Kaasten</h1>
          <h2 className="text-2xl text-slate-600 dark:text-slate-400 font-medium">
            Software Developer
          </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-2xl">
            Software developer from NAIT with hands-on experience designing, building, and deploying full-stack web applications. 
            Proficient in C#, .NET, React, and TypeScript with a strong foundation in object-oriented programming, relational database design, REST API development and agile collaboration. 
            Adept at translating business requirements into scalable, maintainable solutions. Seeking to join a forward-thinking development team to create innovative solutions and support organizational growth. 
          </p>
          <div className="flex gap-4 pt-2 justify-center">
            <button
              onClick={() => scrollTo('projects')}
              className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-medium rounded-lg transition-colors"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="px-6 py-3 border border-slate-300 dark:border-slate-700 hover:border-cyan-600 dark:hover:border-cyan-400 text-slate-700 dark:text-slate-300 font-medium rounded-lg transition-colors"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
