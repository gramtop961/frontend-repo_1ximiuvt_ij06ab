import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Team from './components/Team'
import Quality from './components/Quality'
import Careers from './components/Careers'
import Contact from './components/Contact'

function App() {
  const [lang, setLang] = useState('en') // 'en' | 'cs'
  const toggleLang = () => setLang((l) => (l === 'en' ? 'cs' : 'en'))

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar onLangToggle={toggleLang} lang={lang} />
      <main>
        <Hero lang={lang} />
        <Services lang={lang} />
        <Portfolio lang={lang} />
        <About lang={lang} />
        <Team lang={lang} />
        <Quality lang={lang} />
        <Careers lang={lang} />
        <Contact lang={lang} />
      </main>
      <footer className="border-t border-white/10 py-8 text-center text-slate-400">
        © {new Date().getFullYear()} STRNADEL engineering, s.r.o.
      </footer>
    </div>
  )
}

export default App
