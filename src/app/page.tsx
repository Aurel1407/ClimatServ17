
import Link from 'next/link'
import Image from 'next/image'
import { Phone, Calendar, CheckCircle, MapPin } from 'lucide-react'
import ZoneInterventionMap from "@/components/ui/MapWrapper"
import { ProtectedPhone } from '@/components/ui/ProtectedContact'


export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-500 to-primary-700 text-white overflow-hidden">
        {/* Image de fond hero */}
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/images/hero-banner.webp" 
            alt="ClimatServ17 - Climatisation et pompe à chaleur" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-transparent"></div>
        </div>
        
        <div className="container-custom section relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-white mb-6 animate-fade-in">
              ClimatServ17 - Votre expert Confort & Énergie
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-50 animate-slide-up">
              Installation, entretien et dépannage de pompes à chaleur, climatisations, ballons thermodynamiques et adoucisseurs à La Rochelle et dans un rayon de 60km
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-200">
              <Link href="/maintenance-sav" className="btn btn-primary">
                <Calendar className="w-5 h-5" />
                Prendre RDV
              </Link>
              <ProtectedPhone 
                encoded="MDU0NjUyNTMzMA=="
                className="btn btn-outline border-white text-white hover:bg-white hover:text-primary-500"
              >
                <Phone className="w-5 h-5" />
              </ProtectedPhone>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-center mb-12">Nos Services</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon="🔥"
              title="Pompes à Chaleur"
              description="Chauffage performant et économique, écologique et silencieux"
              href="/services/pompes-a-chaleur"
            />
            <ServiceCard
              icon="❄️"
              title="Climatisations"
              description="Confort optimal été comme hiver avec nos systèmes réversibles"
              href="/services/climatisations"
            />
            <ServiceCard
              icon="💧"
              title="Ballons Thermodynamiques"
              description="Eau chaude sanitaire économique et écologique"
              href="/services/ballons-thermodynamiques"
            />
            <ServiceCard
              icon="✨"
              title="Adoucisseurs d'Eau"
              description="Protégez vos équipements et profitez d'une eau plus douce"
              href="/services/adoucisseurs"
            />
          </div>
          
          <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ServiceCard
              icon="⚙️"
              title="Entretien"
              description="Maintenance préventive et attestations d'entretien annuel"
              href="/services/entretien"
            />
            <ServiceCard
              icon="🚨"
              title="Dépannage"
              description="Intervention rapide en cas de panne ou dysfonctionnement"
              href="/services/depannage"
            />
          </div>
        </div>
      </section>

      {/* Zone de Service */}
      <section className="section bg-neutral-100">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <MapPin className="w-12 h-12 text-accent-500 mx-auto mb-6" />
            <h2 className="mb-6">Zone d'Intervention</h2>
            <p className="text-lg text-neutral-700 mb-16">
              Nous intervenons à La Rochelle et dans un rayon de 60km (Charente-Maritime et départements limitrophes)
            </p>
            <div className="-mb-20 relative z-0">
              <ZoneInterventionMap/>
              </div>
          </div>
        </div>
      </section>

      {/* Section Galerie - Nos Réalisations */}
      <section className="section bg-neutral-100">
        <div className="container-custom">
          <h2 className="text-center mb-12">Nos Réalisations</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Placeholder 1 */}
            <div className="relative aspect-video bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
              <div className="absolute inset-0 flex items-center justify-center text-primary-500">
                <div className="text-center">
                  <div className="text-6xl mb-2">🔧</div>
                  <p className="text-sm font-semibold">Installation PAC</p>
                  <p className="text-xs">800x600px</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-primary-500 opacity-0 group-hover:opacity-10 transition-opacity"></div>
            </div>
            
            {/* Placeholder 2 */}
            <div className="relative aspect-video bg-gradient-to-br from-accent-100 to-accent-200 rounded-xl overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
              <div className="absolute inset-0 flex items-center justify-center text-accent-600">
                <div className="text-center">
                  <div className="text-6xl mb-2">❄️</div>
                  <p className="text-sm font-semibold">Climatisation</p>
                  <p className="text-xs">800x600px</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-accent-500 opacity-0 group-hover:opacity-10 transition-opacity"></div>
            </div>
            
            {/* Placeholder 3 */}
            <div className="relative aspect-video bg-gradient-to-br from-neutral-200 to-neutral-300 rounded-xl overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
              <div className="absolute inset-0 flex items-center justify-center text-neutral-600">
                <div className="text-center">
                  <div className="text-6xl mb-2">💧</div>
                  <p className="text-sm font-semibold">Adoucisseur</p>
                  <p className="text-xs">800x600px</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-neutral-500 opacity-0 group-hover:opacity-10 transition-opacity"></div>
            </div>
          </div>
          
          <p className="text-center text-neutral-500 text-sm mt-6">
            📸 Placeholders - Remplacer par vos photos de réalisations
          </p>
        </div>
      </section>

      {/* Pourquoi nous choisir */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-center mb-12">Pourquoi ClimatServ17 ?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={<CheckCircle className="w-8 h-8 text-accent-500" />}
              title="Expertise"
              description="Plus de 15 ans d'expérience"
            />
            <FeatureCard
              icon={<CheckCircle className="w-8 h-8 text-accent-500" />}
              title="Réactivité"
              description="Intervention sous 48h"
            />
            <FeatureCard
              icon={<CheckCircle className="w-8 h-8 text-accent-500" />}
              title="Qualité"
              description="Certifications professionnelles"
            />
            <FeatureCard
              icon={<CheckCircle className="w-8 h-8 text-accent-500" />}
              title="Garantie"
              description="Garantie sur tous nos travaux"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-white mb-6">Besoin d'un professionnel ?</h2>
          <p className="text-xl mb-8 text-accent-50">
            Prenez rendez-vous en ligne en quelques clics
          </p>
          <Link href="/maintenance-sav" className="btn bg-white text-accent-500 hover:bg-neutral-100">
            <Calendar className="w-5 h-5" />
            Réserver un créneau
          </Link>
        </div>
      </section>

      {/* Sticky Footer Mobile */}
      <div className="sticky-footer-mobile fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white ">
        <div className="flex gap-3">
          <ProtectedPhone 
            encoded="MDU0NjUyNTMzMA=="
            className="btn btn-secondary flex-1 flex items-center justify-center gap-2 text-sm"
          />
          <Link href="/maintenance-sav" className="btn btn-primary flex-1 flex items-center justify-center gap-2">
            <Calendar className="w-5 h-5 flex-shrink-0" />
            <span className="whitespace-nowrap">Prendre RDV</span>
          </Link>
        </div>
      </div>
    </>
  )
}

function ServiceCard({ icon, title, description, href }: { icon: string; title: string; description: string; href: string }) {
  return (
    <Link href={href} className="card text-center hover:scale-105 flex flex-col items-center transition-all hover:shadow-lg group">
      <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">{icon}</div>
      <h3 className="mb-3 text-lg md:text-xl lg:text-2xl break-words hyphens-auto text-primary-500 group-hover:text-primary-600" lang="fr">{title}</h3>
      <p className="text-neutral-600 text-sm group-hover:text-neutral-700">{description}</p>
      <span className="text-primary-500 text-sm mt-4 font-semibold group-hover:underline">En savoir plus →</span>
    </Link>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="card text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h4 className="mb-2">{title}</h4>
      <p className="text-sm text-neutral-600">{description}</p>
    </div>
  )
}
