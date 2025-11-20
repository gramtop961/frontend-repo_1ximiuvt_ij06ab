import { useEffect, useState } from 'react'

export default function Portfolio({ lang }) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  const t = {
    en: { heading: 'Portfolio & Case Studies', empty: 'No case studies yet.' },
    cs: { heading: 'Portfolio & případové studie', empty: 'Zatím žádné případové studie.' }
  }[lang]

  useEffect(() => {
    const fetchData = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/case-studies`)
        const data = await res.json()
        setItems(data)
      } catch (e) {
        setItems([])
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <section id="portfolio" className="py-20 bg-slate-950/95">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">{t.heading}</h2>
        {loading ? (
          <p className="text-slate-300">Loading...</p>
        ) : items.length === 0 ? (
          <p className="text-slate-300">{t.empty}</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((cs) => (
              <div key={cs.id} className="bg-slate-900 border border-white/10 rounded-xl overflow-hidden">
                {cs.images && cs.images[0] && (
                  <img src={cs.images[0]} alt={cs.title} className="w-full h-40 object-cover" />
                )}
                <div className="p-5">
                  <h3 className="text-white font-semibold">{cs.title}</h3>
                  {cs.client && <p className="text-slate-400 text-sm mt-1">{cs.client}</p>}
                  {cs.services && cs.services.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {cs.services.map((s, idx) => (
                        <span key={idx} className="text-xs text-slate-200 bg-slate-800 px-2 py-1 rounded">{s}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
