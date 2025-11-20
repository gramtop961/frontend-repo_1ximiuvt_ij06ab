export default function About({ lang }) {
  const t = {
    en: {
      heading: 'About STRNADEL engineering',
      body: 'We are a Czech precision engineering company delivering high-accuracy parts and tooling using modern 4- and 5-axis CNC machining. Our team combines decades of expertise with a pragmatic, quality-first approach.'
    },
    cs: {
      heading: 'O společnosti STRNADEL engineering',
      body: 'Jsme česká strojírenská společnost dodávající vysoce přesné díly a nástroje pomocí moderního 4- a 5-osého CNC obrábění. Tým spojuje desítky let zkušeností a pragmatický přístup orientovaný na kvalitu.'
    }
  }[lang]

  return (
    <section id="about" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        <div className="rounded-xl overflow-hidden border border-white/10">
          <img src="https://images.unsplash.com/photo-1726219835852-5d2dcf6c216f?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDTkMlMjB3b3Jrc2hvcHxlbnwwfDB8fHwxNzYzNjczNTY2fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="CNC workshop" className="w-full h-full object-cover" />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.heading}</h2>
          <p className="text-slate-300 leading-relaxed">{t.body}</p>
        </div>
      </div>
    </section>
  )
}
