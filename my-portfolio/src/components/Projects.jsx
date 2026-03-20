import { useState, useEffect } from 'react'
import SectionHeader from './SectionHeader'

const GITHUB_USERNAME = 'mason-kaasten'

export default function Projects() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch repos')
        return res.json()
      })
      .then((data) => {
        setRepos(data.filter((r) => !r.fork))
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return (
    <section id="projects" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader title="Projects" subtitle="Live from GitHub" />
        {loading && (
          <div className="flex justify-center py-16">
            <div className="w-8 h-8 border-4 border-cyan-600 border-t-transparent rounded-full animate-spin" />
          </div>
        )}
        {error && <p className="text-center text-red-500 py-16">{error}</p>}
        {!loading && !error && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {repos.map((repo) => (
              <RepoCard key={repo.id} repo={repo} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

function RepoCard({ repo }) {
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-6 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-cyan-600 dark:hover:border-cyan-400 transition-all hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="flex items-start justify-between gap-2 mb-3">
        <h3 className="font-semibold text-slate-900 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
          {repo.name}
        </h3>
        <svg className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
          <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
        </svg>
      </div>
      <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2 min-h-[2.5rem]">
        {repo.description || 'No description provided.'}
      </p>
      <div className="flex items-center gap-4 text-xs text-slate-500">
        {repo.language && (
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-500" />
            {repo.language}
          </span>
        )}
        <span>★ {repo.stargazers_count}</span>
        <span>⑂ {repo.forks_count}</span>
      </div>
    </a>
  )
}
