export default function Quality({ lang }) {
  const t = {
    en: {
      heading: 'Certifications & Quality Assurance',
      bullets: [
        'In-process inspection and CNC metrology',
        'Material traceability and documentation',
        'First article inspection reports (FAIR)',
        'Tight tolerance capability for demanding industries'
      ]
    },
    cs: {
      heading: 'Certifikace a zajištění kvality',
      bullets: [
        'Kontrola v procesu a CNC metrologie',
        'Sledovatelnost materiálu a dokumentace',
        'Protokoly FAI (First Article Inspection)',
        'Schopnost úzkých tolerancí pro náročné obory'
      ]
    }
  }[lang]

  return (
    <section id="quality" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t.heading}</h2>
        <ul className="grid sm:grid-cols-2 gap-3 text-slate-300">
          {t.bullets.map((b, i) => (
            <li key={i} className="bg-slate-900 border border-white/10 rounded-lg p-4">{b}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
