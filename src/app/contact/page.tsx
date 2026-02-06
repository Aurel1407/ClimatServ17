"use client"

import { useEffect, useState } from 'react'
import { Phone, Mail, MapPin } from 'lucide-react'
import { ProtectedPhone, ProtectedEmail } from '@/components/ui/ProtectedContact'

export default function ContactPage() {
  const [form, setForm] = useState({ prenom: '', nom: '', email: '', telephone: '', sujet: '', message: '', website: '' }) // website = honeypot
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message?: string }>({ type: null })
  const [startedAt] = useState(() => Date.now())

  useEffect(() => {
    // clear status after a while
    if (status.type) {
      const t = setTimeout(() => setStatus({ type: null }), 5000)
      return () => clearTimeout(t)
    }
  }, [status])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setStatus({ type: null })

    // basic client-side validation (prénom, nom, email, message requis)
    if (!form.prenom || !form.nom || !form.email || !form.message) {
      setStatus({ type: 'error', message: 'Veuillez renseigner au minimum votre prénom, nom, email et message.' })
      setLoading(false)
      return
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, startedAt })
      })

      if (res.ok) {
        setStatus({ type: 'success', message: 'Message envoyé, merci !' })
        setForm({ prenom: '', nom: '', email: '', telephone: '', sujet: '', message: '', website: '' })
      } else {
        const data = await res.json().catch(() => ({}))
        setStatus({ type: 'error', message: data?.message || 'Erreur lors de l\'envoi.' })
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'Erreur réseau.' })
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="container-custom py-12">
        <h1 className="text-center mb-12">Nous Contacter</h1>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Formulaire */}
          <div className="card">
            <h2 className="text-2xl mb-6">Envoyez-nous un message</h2>
            
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="label">Prénom</label>
                  <input name="prenom" value={form.prenom} onChange={handleChange} type="text" className="input" placeholder="Jean" />
                </div>
                <div>
                  <label className="label">Nom</label>
                  <input name="nom" value={form.nom} onChange={handleChange} type="text" className="input" placeholder="Dupont" />
                </div>
              </div>
              
              <div>
                <label className="label">Email</label>
                <input name="email" value={form.email} onChange={handleChange} type="email" className="input" placeholder="jean.dupont@email.fr" />
              </div>
              
              <div>
                <label className="label">Téléphone (optionnel)</label>
                <input name="telephone" value={form.telephone} onChange={handleChange} type="tel" className="input" placeholder="06 12 34 56 78" />
              </div>
              
              <div>
                <label className="label">Sujet</label>
                <input name="sujet" value={form.sujet} onChange={handleChange} type="text" className="input" placeholder="Demande de devis" />
              </div>
              
              <div>
                <label className="label">Message</label>
                <textarea name="message" value={form.message} onChange={handleChange}
                  className="input min-h-[120px] resize-y" 
                  placeholder="Votre message..."
                ></textarea>
              </div>

              {/* Honeypot field - invisible for users */}
              <div style={{ position: 'absolute', left: '-9999px', top: 'auto' }} aria-hidden>
                <label>Ne pas remplir</label>
                <input name="website" value={form.website} onChange={handleChange} autoComplete="off" tabIndex={-1} />
              </div>

              <button type="submit" disabled={loading} className="btn btn-primary w-full">
                {loading ? 'Envoi...' : 'Envoyer'}
              </button>

              {status.type === 'error' && (
                <p className="text-sm text-red-600 mt-2">{status.message}</p>
              )}
              {status.type === 'success' && (
                <p className="text-sm text-green-600 mt-2">{status.message}</p>
              )}
            </form>
          </div>
          
          {/* Informations de contact */}
          <div className="space-y-6">
            <div className="card">
              <h3 className="text-xl mb-4">Coordonnées</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-accent-500 mt-1" />
                  <div>
                    <p className="font-semibold">Téléphone</p>
                    <ProtectedPhone 
                      encoded="MDU0NjUyNTMzMA=="
                      className="text-accent-500 hover:underline"
                    />
                    <p className="text-sm text-neutral-600 mt-1">
                      Dépannage/Entretien: <ProtectedPhone 
                        encoded="MDY4ODUwMzExMg=="
                        className="text-accent-500 hover:underline"
                      />
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-accent-500 mt-1" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <ProtectedEmail 
                      encoded="Y2xpbWF0c2VydjE3LmNvbnRhY3RAZ21haWwuY29t"
                      className="text-accent-500 hover:underline"
                    />
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent-500 mt-1" />
                  <div>
                    <p className="font-semibold">Adresse</p>
                    <p className="text-neutral-600">
                      La Rochelle<br />
                      Charente-Maritime (17)
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card bg-primary-500 text-white">
              <h3 className="text-xl mb-3 text-white">Horaires d'ouverture</h3>
              <div className="space-y-2 text-primary-50">
                <p>Lundi - Vendredi : 8h - 18h</p>
                <p>Samedi : 9h - 12h</p>
                <p>Dimanche : Fermé</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
