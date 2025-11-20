import Spline from '@splinetool/react-spline'

export default function Hero({ lang }) {
  const t = {
    en: {
      title: 'Precision CNC Engineering & Tooling',
      subtitle: '4- and 5-axis machining, prototype tooling, 3D programming, and metrology',
      cta: 'Request a Quote'
    },
    cs: {
      title: 'Precizní CNC inženýring a nástrojařství',
      subtitle: '4- a 5-osé obrábění, prototypové nástroje, 3D programování a metrologie',
      cta: 'Nezávazná poptávka'
    }
  }[lang]

  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-900 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 py-28 md:py-40">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            {t.title}
          </h1>
          <p className="mt-4 text-lg md:text-xl text-slate-200">
            {t.subtitle}
          </p>
          <a href="#contact" className="inline-block mt-8 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow transition-colors">
            {t.cta}
          </a>
        </div>
      </div>
    </section>
  )
}
