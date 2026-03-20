import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

export default function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const sections = ['hero', 'projects', 'skills', 'contact']
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    )
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 min-h-screen transition-colors duration-300">
        <Navbar activeSection={activeSection} darkMode={darkMode} setDarkMode={setDarkMode} />
        <Hero />
        <Projects />
        <Skills />
        <Contact />
        <footer className="py-8 text-center text-sm text-slate-500 dark:text-slate-600 border-t border-slate-200 dark:border-slate-800">
          Built with React + Vite + Tailwind CSS
        </footer>
      </div>
    </div>
  )
}
