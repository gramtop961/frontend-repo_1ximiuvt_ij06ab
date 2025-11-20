import { useEffect, useState } from 'react'

export default function Team({ lang }) {
  const [team, setTeam] = useState([])

  const t = {
    en: { heading: 'Team', placeholder: 'Team details coming soon.' },
    cs: { heading: 'Tým', placeholder: 'Informace o týmu již brzy.' }
  }[lang]

  useEffect(() => {
    const fetchData = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/team`)
        const data = await res.json()
        setTeam(data)
      } catch (e) {
        setTeam([])
      }
    }
    fetchData()
  }, [])

  return (
    <section id="team" className="py-20 bg-slate-950/95">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">{t.heading}</h2>
        {team.length === 0 ? (
          <p className="text-slate-300">{t.placeholder}</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((m) => (
              <div key={m.id} className="bg-slate-900 border border-white/10 rounded-xl p-6">
                {m.photo && <img src={m.photo} alt={m.name} className="w-full h-40 object-cover rounded-lg" />}
                <h3 className="mt-3 text-white font-semibold">{m.name}</h3>
                <p className="text-slate-400 text-sm">{m.role}</p>
                {m.email && <a href={`mailto:${m.email}`} className="text-blue-400 text-sm mt-2 inline-block">{m.email}</a>}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
