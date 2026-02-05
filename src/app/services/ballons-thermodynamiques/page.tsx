import Link from 'next/link'
import { Phone, Calendar, CheckCircle, Droplets, Zap, Leaf, TrendingDown } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ballon Thermodynamique - Installation à La Rochelle',
  description: 'Installation de ballons thermodynamiques à La Rochelle. Production d\'eau chaude sanitaire économique et écologique. Jusqu\'\u00e0 70% d\'\u00e9conomies. Devis gratuit.',
  keywords: ['ballon thermodynamique', 'chauffe-eau thermodynamique', 'eau chaude sanitaire', 'installation ballon', 'La Rochelle', 'économie énergie', 'Charente-Maritime'],
  openGraph: {
    title: 'Ballons Thermodynamiques à La Rochelle | ClimatServ17',
    description: 'Installation de ballons thermodynamiques économiques et écologiques',
    url: 'https://climatserv17.fr/services/ballons-thermodynamiques',
  }
}

export default function BallonsThermodynamiquesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-500 to-primary-700 text-white section overflow-hidden">
        {/* Image de fond hero - Placeholder */}
        <div className="absolute inset-0 opacity-20">
          <div className="relative w-full h-full bg-gradient-to-r from-transparent to-primary-600">
            <div className="absolute inset-0 flex items-center justify-center text-primary-300">
              <div className="text-center">
                <div className="text-8xl mb-4">💧</div>
                <p className="text-sm">Image ballon thermodynamique</p>
                <p className="text-xs">1920x1080px recommandé</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <div className="text-6xl mb-6">💧</div>
            <h1 className="text-white mb-6">Ballons Thermodynamiques</h1>
            <p className="text-xl text-primary-50 mb-8">
              Production d'eau chaude sanitaire économique et écologique grâce à l'aérothermie
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/maintenance-sav" className="btn btn-primary bg-white text-primary-500 hover:bg-primary-50">
                <Calendar className="w-5 h-5" />
                Demander un devis gratuit
              </Link>
              <a href="tel:0546525330" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary-500">
                <Phone className="w-5 h-5" />
                05 46 52 53 30
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-center mb-12">Pourquoi choisir un ballon thermodynamique ?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-success-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-700 border-2">
                <TrendingDown className="w-8 h-8 text-success-500" />
              </div>
              <h3 className="text-lg mb-3">Jusqu'à 75% d'économies</h3>
              <p className="text-neutral-600 text-sm">
                Divisez par 3 votre facture d'eau chaude par rapport à un chauffe-eau électrique
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="text-lg mb-3">Écologique</h3>
              <p className="text-neutral-600 text-sm">
                Utilise l'énergie gratuite de l'air ambiant pour chauffer l'eau
              </p>
            </div>

            <div className="text-center">
              <div className="bg-accent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-accent-500" />
              </div>
              <h3 className="text-lg mb-3">Éligible aux aides</h3>
              <p className="text-neutral-600 text-sm">
                Profitez de MaPrimeRénov' et de la prime CEE
              </p>
            </div>

            <div className="text-center">
              <div className="bg-neutral-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets className="w-8 h-8 text-neutral-600" />
              </div>
              <h3 className="text-lg mb-3">Eau chaude en continu</h3>
              <p className="text-neutral-600 text-sm">
                Réserve toujours disponible pour toute la famille
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fonctionnement */}
      <section className="section bg-neutral-100">
        <div className="container-custom">
          <h2 className="text-center mb-12">Comment ça fonctionne ?</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <p className="text-lg text-neutral-700 mb-6">
                Le ballon thermodynamique fonctionne selon le principe d'une pompe à chaleur dédiée à la production d'eau chaude sanitaire :
              </p>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="bg-primary-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    1
                  </div>
                  <p className="text-neutral-600">
                    Une pompe à chaleur intégrée capte les calories présentes dans l'air ambiant (garage, buanderie) ou extérieur
                  </p>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-primary-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    2
                  </div>
                  <p className="text-neutral-600">
                    Ces calories sont transformées et transférées pour chauffer l'eau du ballon
                  </p>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-primary-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    3
                  </div>
                  <p className="text-neutral-600">
                    En cas de besoin important, une résistance électrique d'appoint prend le relais
                  </p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-primary-50 rounded-lg">
                <p className="text-sm text-primary-700">
                  <strong>COP moyen de 3 à 4 :</strong> Pour 1 kWh d'électricité consommé, le ballon thermodynamique restitue 3 à 4 kWh de chaleur !
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capacités */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-center mb-12">Quelle capacité choisir ?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="mb-4">200 litres</h3>
              <div className="mb-4 text-4xl">👨‍👩‍👦</div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">2 à 3 personnes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Appartement ou petite maison</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Encombrement réduit</span>
                </li>
              </ul>
              <p className="text-sm text-neutral-500">À partir de 2 200€ TTC posé</p>
            </div>

            <div className="card border-2 border-primary-500">
              <div className="bg-primary-500 text-white text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4">
                Le plus vendu
              </div>
              <h3 className="mb-4">250 litres</h3>
              <div className="mb-4 text-4xl">👨‍👩‍👧‍👦</div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">3 à 4 personnes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Maison familiale</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Meilleur rapport capacité/prix</span>
                </li>
              </ul>
              <p className="text-sm text-neutral-500">À partir de 2 800€ TTC posé</p>
            </div>

            <div className="card">
              <h3 className="mb-4">300 litres</h3>
              <div className="mb-4 text-4xl">👨‍👩‍👧‍👦👶</div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">5 personnes et plus</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Grande maison</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Confort maximal</span>
                </li>
              </ul>
              <p className="text-sm text-neutral-500">À partir de 3 400€ TTC posé</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lieu d'installation */}
      <section className="section bg-neutral-100">
        <div className="container-custom">
          <h2 className="text-center mb-12">Où l'installer ?</h2>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl mb-4 text-primary-500">Installation sur air ambiant</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Dans un garage, buanderie ou cave</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Volume minimum de 20 m³</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Température entre 5°C et 35°C</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Installation la plus simple</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl mb-4 text-primary-500">Installation sur air extérieur</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Ballon en intérieur, PAC en extérieur</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Performances optimales</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Pas de contrainte de volume</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Recommandé si local &lt; 20 m³</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Aides financières */}
      <section className="section bg-accent-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Financez votre installation avec les aides</h2>
            <p className="text-lg text-neutral-700 mb-8">
              Le ballon thermodynamique est éligible aux aides à la rénovation énergétique
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-primary-500 mb-2">MaPrimeRénov'</div>
                <p className="text-sm text-neutral-600 mb-2">Jusqu'à 1 200€</p>
                <p className="text-xs text-neutral-500">Selon vos revenus</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-primary-500 mb-2">Prime CEE</div>
                <p className="text-sm text-neutral-600 mb-2">Jusqu'à 150€</p>
                <p className="text-xs text-neutral-500">Certificats d'économies d'énergie</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <p className="text-sm text-neutral-700">
                <strong>Exemple :</strong> Pour un ballon thermodynamique de 250L à 2 800€, vous pouvez bénéficier jusqu'à 1 350€ d'aides, 
                soit un reste à charge de <strong className="text-primary-500">1 450€ seulement</strong> !
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section bg-primary-500 text-white">
        <div className="container-custom text-center">
          <h2 className="text-white mb-6">Réduisez votre facture d'eau chaude dès maintenant</h2>
          <p className="text-xl text-primary-50 mb-8 max-w-2xl mx-auto">
            Demandez votre étude gratuite et découvrez vos économies potentielles
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/maintenance-sav" className="btn btn-primary bg-white text-primary-500 hover:bg-primary-50">
              <Calendar className="w-5 h-5" />
              Prendre rendez-vous
            </Link>
            <a href="tel:0546525330" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary-500">
              <Phone className="w-5 h-5" />
              05 46 52 53 30
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
