import Link from 'next/link'
import { Phone, Calendar, CheckCircle, Droplets, Shield, Sparkles, Heart } from 'lucide-react'
import { Metadata } from 'next'
import { ProtectedPhone } from '@/components/ui/ProtectedContact'

export const metadata: Metadata = {
  title: 'Adoucisseur d\'Eau - Installation & Entretien à La Rochelle',
  description: 'Installation et entretien d\'adoucisseurs d\'eau à La Rochelle. Protégez vos équipements du calcaire et profitez d\'une eau plus douce. Devis gratuit.',
  keywords: ['adoucisseur eau', 'adoucisseur La Rochelle', 'installation adoucisseur', 'entretien adoucisseur', 'eau calcaire', 'traitement eau', 'Charente-Maritime'],
  openGraph: {
    title: 'Adoucisseurs d\'Eau à La Rochelle | ClimatServ17',
    description: 'Expert en installation d\'adoucisseurs d\'eau pour une eau plus douce',
    url: 'https://climatserv17.fr/services/adoucisseurs',
  }
}

export default function AdoucisseursPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-500 to-primary-700 text-white section overflow-hidden">
        {/* Image de fond hero - Placeholder */}
        <div className="absolute inset-0 opacity-20">
          <div className="relative w-full h-full bg-gradient-to-r from-transparent to-primary-600">
            <div className="absolute inset-0 flex items-center justify-center text-primary-300">
              <div className="text-center">
                <div className="text-8xl mb-4">💦</div>
                <p className="text-sm">Image adoucisseur d'eau</p>
                <p className="text-xs">1920x1080px recommandé</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <div className="text-6xl mb-6">✨</div>
            <h1 className="text-white mb-6">Adoucisseurs d'Eau</h1>
            <p className="text-xl text-primary-50 mb-8">
              Protégez vos équipements et profitez d'une eau plus douce au quotidien
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

      {/* Problèmes eau calcaire */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-center mb-12">Les problèmes de l'eau calcaire</h2>
          
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-neutral-700 text-center mb-8">
              L'eau de La Rochelle et sa région est particulièrement calcaire (TH entre 25 et 35°f). 
              Sans traitement, le calcaire s'accumule et cause de nombreux désagréments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">⚙️</div>
              <h3 className="text-lg mb-3">Équipements encrassés</h3>
              <p className="text-neutral-600 text-sm">
                Chauffe-eau, machine à laver, lave-vaisselle vieillissent prématurément
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-lg mb-3">Surconsommation</h3>
              <p className="text-neutral-600 text-sm">
                Jusqu'à 30% d'énergie en plus pour chauffer l'eau entartrée
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🚿</div>
              <h3 className="text-lg mb-3">Confort réduit</h3>
              <p className="text-neutral-600 text-sm">
                Peau sèche, cheveux ternes, résidus blancs sur la robinetterie
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🧼</div>
              <h3 className="text-lg mb-3">Plus de produits</h3>
              <p className="text-neutral-600 text-sm">
                Besoin de 2 fois plus de savon, shampoing et lessive
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages adoucisseur */}
      <section className="section bg-neutral-100">
        <div className="container-custom">
          <h2 className="text-center mb-12">Les avantages d'un adoucisseur d'eau</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="text-lg mb-3">Protection des équipements</h3>
              <p className="text-neutral-600 text-sm">
                Prolongez la durée de vie de tous vos appareils
              </p>
            </div>

            <div className="text-center">
              <div className="bg-success-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-700 border-2">
                <Droplets className="w-8 h-8 text-success-500" />
              </div>
              <h3 className="text-lg mb-3">Économies d'énergie</h3>
              <p className="text-neutral-600 text-sm">
                Réduction de 25% de votre consommation énergétique
              </p>
            </div>

            <div className="text-center">
              <div className="bg-accent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-accent-500" />
              </div>
              <h3 className="text-lg mb-3">Confort quotidien</h3>
              <p className="text-neutral-600 text-sm">
                Peau douce, cheveux brillants, linge plus doux
              </p>
            </div>

            <div className="text-center">
              <div className="bg-neutral-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-neutral-600" />
              </div>
              <h3 className="text-lg mb-3">Moins de produits</h3>
              <p className="text-neutral-600 text-sm">
                Divisez par 2 votre consommation de savons et lessives
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fonctionnement */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-center mb-12">Comment fonctionne un adoucisseur ?</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-neutral-100 p-8 rounded-xl">
              <p className="text-lg text-neutral-700 mb-6">
                L'adoucisseur utilise un procédé d'échange d'ions pour transformer le calcaire (calcium et magnésium) 
                en sodium, rendant ainsi l'eau douce.
              </p>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="bg-primary-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    1
                  </div>
                  <p className="text-neutral-600">
                    <strong>Résine échangeuse d'ions :</strong> L'eau traverse une résine spéciale qui capte le calcium et le magnésium
                  </p>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-primary-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    2
                  </div>
                  <p className="text-neutral-600">
                    <strong>Distribution :</strong> L'eau adoucie est distribuée dans toute votre maison
                  </p>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-primary-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    3
                  </div>
                  <p className="text-neutral-600">
                    <strong>Régénération automatique :</strong> La résine se nettoie automatiquement avec du sel régénérant
                  </p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white rounded-lg">
                <p className="text-sm text-neutral-700">
                  <strong>💡 Bon à savoir :</strong> Un adoucisseur bien dimensionné et entretenu dure plus de 15 ans et nécessite seulement 
                  un ajout de sel tous les 2 à 3 mois.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gamme produits */}
      <section className="section bg-neutral-100">
        <div className="container-custom">
          <h2 className="text-center mb-12">Notre gamme d'adoucisseurs</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="mb-4">Compact</h3>
              <div className="mb-4 text-4xl">🏠</div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">1 à 3 personnes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Capacité 10 litres</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Encombrement minimal</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Régénération automatique</span>
                </li>
              </ul>
              <p className="text-sm text-neutral-500">À partir de 1 200€ TTC posé</p>
            </div>

            <div className="card border-2 border-primary-500">
              <div className="bg-primary-500 text-white text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4">
                Recommandé
              </div>
              <h3 className="mb-4">Familial</h3>
              <div className="mb-4 text-4xl">👨‍👩‍👧‍👦</div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">4 à 6 personnes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Capacité 20 litres</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Compteur volumétrique</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Écran digital</span>
                </li>
              </ul>
              <p className="text-sm text-neutral-500">À partir de 1 800€ TTC posé</p>
            </div>

            <div className="card">
              <h3 className="mb-4">Premium</h3>
              <div className="mb-4 text-4xl">🏘️</div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">6 personnes et plus</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Capacité 30 litres</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Double corps (jamais sans eau douce)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Connectivité WiFi</span>
                </li>
              </ul>
              <p className="text-sm text-neutral-500">À partir de 2 800€ TTC posé</p>
            </div>
          </div>
        </div>
      </section>

      {/* Installation et entretien */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-center mb-12">Installation et entretien</h2>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-neutral-100 p-6 rounded-xl">
              <h3 className="text-xl mb-4">Installation</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Visite technique pour dimensionnement</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Pose en une demi-journée</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Raccordement sur l'arrivée d'eau générale</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Réglages personnalisés selon votre eau</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Formation à l'utilisation</span>
                </li>
              </ul>
            </div>

            <div className="bg-neutral-100 p-6 rounded-xl">
              <h3 className="text-xl mb-4">Entretien</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Ajout de sel tous les 2-3 mois</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Vérification annuelle recommandée</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Nettoyage des filtres</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Contrôle de la dureté de l'eau</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Désinfection tous les 3 ans</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/services/entretien" className="text-primary-500 hover:underline">
              Découvrir nos contrats d'entretien →
            </Link>
          </div>
        </div>
      </section>

      {/* Calcul rentabilité */}
      <section className="section bg-accent-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Un investissement vite rentabilisé</h2>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <p className="text-lg text-neutral-700 mb-6">
                Exemple pour une famille de 4 personnes :
              </p>
              
              <div className="space-y-4 text-left max-w-md mx-auto mb-8">
                <div className="flex justify-between">
                  <span className="text-neutral-600">Économie énergie (25%)</span>
                  <span className="font-semibold text-success-500">+200€/an</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Économie produits ménagers</span>
                  <span className="font-semibold text-success-500">+150€/an</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Durée de vie équipements</span>
                  <span className="font-semibold text-success-500">+300€/an</span>
                </div>
                <div className="pt-4 border-t-2 border-primary-500 flex justify-between">
                  <span className="font-bold">Économie totale annuelle</span>
                  <span className="font-bold text-xl text-primary-500">650€/an</span>
                </div>
              </div>

              <p className="text-sm text-neutral-600">
                Retour sur investissement en <strong className="text-primary-500">2 à 3 ans</strong> seulement !
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section bg-primary-500 text-white">
        <div className="container-custom text-center">
          <h2 className="text-white mb-6">Protégez votre maison du calcaire</h2>
          <p className="text-xl text-primary-50 mb-8 max-w-2xl mx-auto">
            Demandez votre étude gratuite et découvrez l'adoucisseur adapté à vos besoins
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
