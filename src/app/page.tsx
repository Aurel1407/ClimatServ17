import Link from 'next/link'
import Image from 'next/image'
import { Phone, Calendar, CheckCircle, MapPin } from 'lucide-react'

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-500 to-primary-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/images/logo.png')] bg-center bg-no-repeat bg-contain"></div>
        </div>
        <div className="container-custom section">
          <div className="max-w-3xl">
            <h1 className="text-white mb-6 animate-fade-in">
              Expert en Climatisation & Pompes à Chaleur
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-50 animate-slide-up">
              Installation, entretien et dépannage à La Rochelle et dans un rayon de 60km
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-200">
              <Link href="/maintenance-sav" className="btn btn-primary">
                <Calendar className="w-5 h-5" />
                Prendre RDV
              </Link>
              <a href="tel:0546000000" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary-500">
                <Phone className="w-5 h-5" />
                05 46 00 00 00
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-center mb-12">Nos Services</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon="🔧"
              title="Installation"
              description="Installation professionnelle de climatisation, PAC et adoucisseurs d'eau"
            />
            <ServiceCard
              icon="⚙️"
              title="Entretien"
              description="Maintenance préventive et attestations d'entretien annuel"
            />
            <ServiceCard
              icon="🚨"
              title="Dépannage"
              description="Intervention rapide en cas de panne ou dysfonctionnement"
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
            <p className="text-lg text-neutral-700 mb-8">
              Nous intervenons à La Rochelle et dans un rayon de 60km (Charente-Maritime et départements limitrophes)
            </p>
            <Link href="/maintenance-sav" className="btn btn-primary">
              Vérifier mon éligibilité
            </Link>
          </div>
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
      <div className="sticky-footer-mobile">
        <div className="flex gap-3">
          <a href="tel:0546000000" className="btn btn-secondary flex-1">
            <Phone className="w-5 h-5" />
            Appeler
          </a>
          <Link href="/maintenance-sav" className="btn btn-primary flex-1">
            <Calendar className="w-5 h-5" />
            Prendre RDV
          </Link>
        </div>
      </div>
    </>
  )
}

function ServiceCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="card text-center hover:scale-105">
      <div className="text-6xl mb-4">{icon}</div>
      <h3 className="mb-3">{title}</h3>
      <p className="text-neutral-600">{description}</p>
    </div>
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
