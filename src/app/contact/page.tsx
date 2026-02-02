import type { Metadata } from 'next'
import { Phone, Mail, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contactez ClimatServ17 pour toute demande d\'information ou de devis.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="container-custom py-12">
        <h1 className="text-center mb-12">Nous Contacter</h1>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Formulaire */}
          <div className="card">
            <h2 className="text-2xl mb-6">Envoyez-nous un message</h2>
            
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="label">Prénom</label>
                  <input type="text" className="input" placeholder="Jean" />
                </div>
                <div>
                  <label className="label">Nom</label>
                  <input type="text" className="input" placeholder="Dupont" />
                </div>
              </div>
              
              <div>
                <label className="label">Email</label>
                <input type="email" className="input" placeholder="jean.dupont@email.fr" />
              </div>
              
              <div>
                <label className="label">Téléphone (optionnel)</label>
                <input type="tel" className="input" placeholder="06 12 34 56 78" />
              </div>
              
              <div>
                <label className="label">Sujet</label>
                <input type="text" className="input" placeholder="Demande de devis" />
              </div>
              
              <div>
                <label className="label">Message</label>
                <textarea 
                  className="input min-h-[120px] resize-y" 
                  placeholder="Votre message..."
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary w-full">
                Envoyer
              </button>
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
                    <a href="tel:0546000000" className="text-accent-500 hover:underline">
                      05 46 00 00 00
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-accent-500 mt-1" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:contact@climatserv17.fr" className="text-accent-500 hover:underline">
                      contact@climatserv17.fr
                    </a>
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
