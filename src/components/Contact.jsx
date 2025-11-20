import { useState } from 'react'

export default function Contact({ lang }) {
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', subject: '', message: '' })

  const t = {
    en: {
      heading: 'Contact & Inquiries',
      name: 'Name', company: 'Company', email: 'Email', phone: 'Phone', subject: 'Subject', message: 'Message',
      submit: 'Send Inquiry', success: 'Thank you! We will get back to you shortly.', fail: 'Something went wrong. Please try again.'
    },
    cs: {
      heading: 'Kontakt a poptávky',
      name: 'Jméno', company: 'Společnost', email: 'E-mail', phone: 'Telefon', subject: 'Předmět', message: 'Zpráva',
      submit: 'Odeslat poptávku', success: 'Děkujeme! Ozveme se co nejdříve.', fail: 'Došlo k chybě. Zkuste to prosím znovu.'
    }
  }[lang]

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus({ ok: true, msg: t.success })
      setForm({ name: '', company: '', email: '', phone: '', subject: '', message: '' })
    } catch (e) {
      setStatus({ ok: false, msg: t.fail })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t.heading}</h2>
          <div className="bg-slate-900 border border-white/10 rounded-xl p-6">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="name" value={form.name} onChange={handleChange} placeholder={t.name} className="bg-slate-800 text-white rounded px-3 py-2" required />
              <input name="company" value={form.company} onChange={handleChange} placeholder={t.company} className="bg-slate-800 text-white rounded px-3 py-2" />
              <input type="email" name="email" value={form.email} onChange={handleChange} placeholder={t.email} className="bg-slate-800 text-white rounded px-3 py-2" required />
              <input name="phone" value={form.phone} onChange={handleChange} placeholder={t.phone} className="bg-slate-800 text-white rounded px-3 py-2" />
              <input name="subject" value={form.subject} onChange={handleChange} placeholder={t.subject} className="md:col-span-2 bg-slate-800 text-white rounded px-3 py-2" />
              <textarea name="message" rows="5" value={form.message} onChange={handleChange} placeholder={t.message} className="md:col-span-2 bg-slate-800 text-white rounded px-3 py-2" required />
              <button disabled={loading} className="md:col-span-2 bg-blue-600 hover:bg-blue-500 disabled:opacity-60 text-white font-semibold px-6 py-3 rounded-lg">
                {loading ? 'Sending…' : t.submit}
              </button>
              {status && (
                <p className={`md:col-span-2 text-sm ${status.ok ? 'text-green-400' : 'text-red-400'}`}>{status.msg}</p>
              )}
            </form>
          </div>
          <div className="mt-6 text-slate-300 space-y-1">
            <p>Phone: +420 603 474 549</p>
            <p>Email: <a className="text-blue-400" href="mailto:radim@strnadel.cz">radim@strnadel.cz</a></p>
            <p>Hours: Mon–Fri, 06:00–17:00</p>
            <p>Location: Horka nad Moravou, Czech Republic</p>
          </div>
        </div>
        <div className="bg-slate-900 border border-white/10 rounded-xl overflow-hidden min-h-[320px]">
          <iframe title="Map" src="https://www.openstreetmap.org/export/embed.html?bbox=17.178%2C49.651%2C17.241%2C49.694&layer=mapnik" className="w-full h-full min-h-[320px]"></iframe>
        </div>
      </div>
    </section>
  )
}
