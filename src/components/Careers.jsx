import { useEffect, useState } from 'react'

export default function Careers({ lang }) {
  const [jobs, setJobs] = useState([])

  const t = {
    en: {
      heading: 'Careers',
      intro: 'We are always interested in talented CNC programmers, machinists, and engineers.',
      empty: 'No open roles right now.'
    },
    cs: {
      heading: 'Kariéra',
      intro: 'Stále hledáme talentované CNC programátory, obráběče a inženýry.',
      empty: 'Momentálně nejsou otevřené pozice.'
    }
  }[lang]

  useEffect(() => {
    const fetchData = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/jobs`)
        const data = await res.json()
        setJobs(data)
      } catch (e) {
        setJobs([])
      }
    }
    fetchData()
  }, [])

  return (
    <section id="careers" className="py-20 bg-slate-950/95">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{t.heading}</h2>
        <p className="text-slate-300 mb-8">{t.intro}</p>
        {jobs.length === 0 ? (
          <p className="text-slate-400">{t.empty}</p>
        ) : (
          <div className="space-y-4">
            {jobs.map((job) => (
              <div key={job.id} className="bg-slate-900 border border-white/10 rounded-xl p-6">
                <h3 className="text-white font-semibold text-lg">{job.title}</h3>
                <p className="text-slate-400 text-sm">{job.location} • {job.type}</p>
                {job.description && <p className="text-slate-300 mt-2">{job.description}</p>}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
