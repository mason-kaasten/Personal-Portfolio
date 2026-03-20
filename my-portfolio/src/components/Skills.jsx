import SectionHeader from './SectionHeader'

const SKILLS = [
  {
    category: 'Frontend',
    items: ['React', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'LINQPAD', 'SQLSERVER'],
  },
  {
    category: 'Tools & DevOps',
    items: ['Git', 'GitHub', 'Docker', 'Vite', 'VS Code'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader title="Skills" subtitle="Technologies I work with" />
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {SKILLS.map(({ category, items }) => (
            <div
              key={category}
              className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700"
            >
              <h3 className="font-semibold text-cyan-600 dark:text-cyan-400 mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
