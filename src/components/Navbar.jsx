import { useState } from 'react'
import { Menu, X, Languages } from 'lucide-react'

export default function Navbar({ onLangToggle, lang }) {
  const [open, setOpen] = useState(false)

  const t = {
    en: { services: 'Services', portfolio: 'Portfolio', about: 'About', team: 'Team', quality: 'Quality', careers: 'Careers', contact: 'Contact' },
    cs: { services: 'Služby', portfolio: 'Portfolio', about: 'O nás', team: 'Tým', quality: 'Kvalita', careers: 'Kariéra', contact: 'Kontakt' }
  }[lang]

  const navItems = [
    { id: 'services', label: t.services },
    { id: 'portfolio', label: t.portfolio },
    { id: 'about', label: t.about },
    { id: 'team', label: t.team },
    { id: 'quality', label: t.quality },
    { id: 'careers', label: t.careers },
    { id: 'contact', label: t.contact },
  ]

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/70 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-md bg-gradient-to-br from-sky-400 to-blue-600 shadow-lg" />
            <div className="text-white font-semibold tracking-tight">STRNADEL engineering</div>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.id)} className="text-slate-200 hover:text-white transition-colors">
                {item.label}
              </button>
            ))}
            <button onClick={onLangToggle} className="flex items-center gap-2 text-slate-200 hover:text-white">
              <Languages size={18} /> {lang === 'en' ? 'CZ' : 'EN'}
            </button>
          </nav>
          <div className="md:hidden flex items-center gap-3">
            <button onClick={onLangToggle} className="p-2 text-slate-200">
              <Languages size={22} />
            </button>
            <button onClick={() => setOpen(!open)} className="p-2 text-slate-200">
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/90">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.id)} className="block w-full text-left py-2 text-slate-200 hover:text-white">
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
