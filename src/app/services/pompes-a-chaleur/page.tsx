import Link from 'next/link'
import { Phone, Calendar, CheckCircle, Thermometer, Zap, Leaf, Volume2 } from 'lucide-react'
import { Metadata } from 'next'
import { ProtectedPhone } from '@/components/ui/ProtectedContact'

export const metadata: Metadata = {
  title: 'Pompes à Chaleur - Installation & Entretien à La Rochelle',
  description: 'Installation, entretien et dépannage de pompes à chaleur air-air et air-eau à La Rochelle et dans un rayon de 60km. Solutions économiques et écologiques. Devis gratuit.',
  keywords: ['pompe à chaleur', 'PAC air-air', 'PAC air-eau', 'installation PAC', 'entretien pompe à chaleur', 'La Rochelle', 'Charente-Maritime', 'chauffage écologique'],
  openGraph: {
    title: 'Pompes à Chaleur à La Rochelle | ClimatServ17',
    description: 'Expert en installation de pompes à chaleur performantes et économiques',
    url: 'https://climatserv17.fr/services/pompes-a-chaleur',
  }
}

export default function PompesAChaleurPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-500 to-primary-700 text-white section overflow-hidden">
        {/* Image de fond hero */}
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/images/pac-hero.webp" 
            alt="Pompe à chaleur" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-transparent"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <div className="text-6xl mb-6">🔥</div>
            <h1 className="text-white mb-6">Pompes à Chaleur</h1>
            <p className="text-xl text-primary-50 mb-8">
              Solutions de chauffage performantes, économiques et écologiques pour votre maison ou entreprise
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/maintenance-sav" className="btn btn-primary bg-white text-primary-500 hover:bg-primary-50">
                <Calendar className="w-5 h-5" />
                Demander un devis gratuit
              </Link>
              <ProtectedPhone 
                encoded="MDU0NjUyNTMzMA=="
                className="btn btn-outline border-white text-white hover:bg-white hover:text-primary-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Avantages Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-center mb-12">Pourquoi choisir une pompe à chaleur ?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="text-lg mb-3">Économies d'énergie</h3>
              <p className="text-neutral-600 text-sm">
                Jusqu'à 70% d'économies sur votre facture de chauffage
              </p>
            </div>

            <div className="text-center">
              <div className="bg-success-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-700 border-2">
                <Leaf className="w-8 h-8 text-success-500" />
              </div>
              <h3 className="text-lg mb-3">Écologique</h3>
              <p className="text-neutral-600 text-sm">
                Utilise l'énergie renouvelable de l'air ou du sol
              </p>
            </div>

            <div className="text-center">
              <div className="bg-accent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Thermometer className="w-8 h-8 text-accent-500" />
              </div>
              <h3 className="text-lg mb-3">Confort optimal</h3>
              <p className="text-neutral-600 text-sm">
                Chaleur homogène et température constante
              </p>
            </div>

            <div className="text-center">
              <div className="bg-neutral-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Volume2 className="w-8 h-8 text-neutral-600" />
              </div>
              <h3 className="text-lg mb-3">Silencieux</h3>
              <p className="text-neutral-600 text-sm">
                Fonctionnement discret pour votre tranquillité
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types de PAC */}
      <section className="section bg-neutral-100">
        <div className="container-custom">
          <h2 className="text-center mb-12">Nos solutions de pompes à chaleur</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="mb-4">PAC Air/Air</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Installation simple et rapide</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Fonction réversible (chaud/froid)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Idéale pour les rénovations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Coût d'installation maîtrisé</span>
                </li>
              </ul>
            </div>

            <div className="card border-2 border-primary-500">
              <div className="bg-primary-500 text-white text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4">
                Le plus populaire
              </div>
              <h3 className="mb-4">PAC Air/Eau</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Compatible avec radiateurs existants</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Production d'eau chaude sanitaire</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Performances élevées (COP jusqu'à 4,5)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Éligible aux aides financières</span>
                </li>
              </ul>
            </div>

            <div className="card">
              <h3 className="mb-4">PAC Géothermique</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Performances maximales (COP jusqu'à 5)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Indépendante des températures extérieures</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Durée de vie supérieure (25 ans)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Solution la plus écologique</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Processus d'installation */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-center mb-12">Notre processus d'installation</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="bg-primary-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl mb-2">Étude personnalisée</h3>
                  <p className="text-neutral-600">
                    Visite technique gratuite pour analyser vos besoins, votre logement et dimensionner l'installation optimale
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="bg-primary-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl mb-2">Devis détaillé</h3>
                  <p className="text-neutral-600">
                    Proposition chiffrée avec les aides financières déductibles (MaPrimeRénov', CEE, etc.)
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="bg-primary-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl mb-2">Installation professionnelle</h3>
                  <p className="text-neutral-600">
                    Pose par nos techniciens certifiés QualiPAC en 1 à 2 jours selon la configuration
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="bg-primary-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl mb-2">Mise en service & formation</h3>
                  <p className="text-neutral-600">
                    Réglages optimaux, explication du fonctionnement et remise des documents de garantie
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aides financières */}
      <section className="section bg-accent-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Profitez des aides financières</h2>
            <p className="text-lg text-neutral-700 mb-8">
              L'installation d'une pompe à chaleur est éligible à plusieurs dispositifs d'aides qui peuvent réduire considérablement votre investissement
            </p>
            
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-primary-500 mb-2">MaPrimeRénov'</div>
                <p className="text-sm text-neutral-600">Jusqu'à 5 000€</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-primary-500 mb-2">Prime CEE</div>
                <p className="text-sm text-neutral-600">Jusqu'à 4 000€</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-primary-500 mb-2">TVA réduite</div>
                <p className="text-sm text-neutral-600">5,5% au lieu de 20%</p>
              </div>
            </div>

            <p className="text-sm text-neutral-600 mb-6">
              Nous vous accompagnons dans vos démarches administratives
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section bg-primary-500 text-white">
        <div className="container-custom text-center">
          <h2 className="text-white mb-6">Prêt à réduire votre facture énergétique ?</h2>
          <p className="text-xl text-primary-50 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour une étude gratuite et personnalisée de votre projet
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/maintenance-sav" className="btn btn-primary bg-white text-primary-500 hover:bg-primary-50">
              <Calendar className="w-5 h-5" />
              Prendre rendez-vous
            </Link>
            <ProtectedPhone 
              encoded="MDU0NjUyNTMzMA=="
              className="btn btn-outline border-white text-white hover:bg-white hover:text-primary-500"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
