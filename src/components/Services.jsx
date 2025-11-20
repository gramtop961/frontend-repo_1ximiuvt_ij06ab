import { Wrench, Ruler, Cpu, Box } from 'lucide-react'

export default function Services({ lang }) {
  const t = {
    en: {
      heading: 'Capabilities',
      items: [
        { icon: Wrench, title: 'CNC Milling (4- & 5-axis)', desc: 'Precision machining of complex geometries and small-series production.' },
        { icon: Cpu, title: '3D Programming & CAD/CAM', desc: 'Toolpaths, simulation, and optimization for efficient machining.' },
        { icon: Box, title: 'Prototype Tooling', desc: 'Injection-mold tooling, fixtures, gauges, and custom assemblies.' },
        { icon: Ruler, title: 'Metrology', desc: 'CNC measurement, quality reports, and accuracy assurance.' },
      ]
    },
    cs: {
      heading: 'Schopnosti',
      items: [
        { icon: Wrench, title: 'CNC frézování (4- & 5-osé)', desc: 'Precizní obrábění složitých geometrií a malosériová výroba.' },
        { icon: Cpu, title: '3D programování & CAD/CAM', desc: 'Dráhy nástroje, simulace a optimalizace pro efektivní obrábění.' },
        { icon: Box, title: 'Prototypové nástroje', desc: 'Vstřikovací formy, přípravky, měřidla a zakázkové sestavy.' },
        { icon: Ruler, title: 'Metrologie', desc: 'CNC měření, protokoly kvality a zajištění přesnosti.' },
      ]
    }
  }[lang]

  return (
    <section id="services" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">{t.heading}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.items.map((item, i) => (
            <div key={i} className="bg-slate-900 border border-white/10 rounded-xl p-6 hover:border-blue-500/40 transition-colors">
              <item.icon className="text-blue-400" />
              <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
