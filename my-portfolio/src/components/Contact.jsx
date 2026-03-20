import { useState } from 'react'
import SectionHeader from './SectionHeader'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

const handleSubmit = async (e) => {
  e.preventDefault()
  const res = await fetch('https://formspree.io/f/xyknvojl', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify(form),
  })
  if (res.ok) {
    setSubmitted(true)
    setForm({ name: '', email: '', message: '' })
  }
}

  return (
    <section id="contact" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader title="Contact" subtitle="Let's work together" />
        <div className="max-w-lg mx-auto mt-10">
          {submitted ? (
            <div className="text-center p-8 bg-cyan-50 dark:bg-cyan-900/20 rounded-xl border border-cyan-200 dark:border-cyan-800">
              <p className="text-2xl font-semibold mb-2">Message sent!</p>
              <p className="text-slate-600 dark:text-slate-400">I'll get back to you soon.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 text-cyan-600 dark:text-cyan-400 text-sm hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <Field label="Name" name="name" type="text" value={form.name} onChange={handleChange} placeholder="Jane Doe" />
              <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="jane@example.com" />
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Your message..."
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-medium rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function Field({ label, name, type, value, onChange, placeholder }) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
      />
    </div>
  )
}
