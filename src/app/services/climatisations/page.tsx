import Link from 'next/link'
import { Phone, Calendar, CheckCircle, Snowflake, Sun, Wind, Shield } from 'lucide-react'

export default function ClimatisationsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-500 to-primary-700 text-white section overflow-hidden">
        {/* Image de fond hero - Placeholder */}
        <div className="absolute inset-0 opacity-20">
          <div className="relative w-full h-full bg-gradient-to-r from-transparent to-primary-600">
            <div className="absolute inset-0 flex items-center justify-center text-primary-300">
              <div className="text-center">
                <div className="text-8xl mb-4">❄️</div>
                <p className="text-sm">Image climatisation</p>
                <p className="text-xs">1920x1080px recommandé</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <div className="text-6xl mb-6">❄️</div>
            <h1 className="text-white mb-6">Climatisations</h1>
            <p className="text-xl text-primary-50 mb-8">
              Confort optimal toute l'année avec nos systèmes de climatisation réversibles performants et silencieux
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
          <h2 className="text-center mb-12">Les avantages de la climatisation réversible</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Snowflake className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="text-lg mb-3">Été & Hiver</h3>
              <p className="text-neutral-600 text-sm">
                Une seule installation pour rafraîchir l'été et chauffer l'hiver
              </p>
            </div>

            <div className="text-center">
              <div className="bg-success-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-700 border-2">
                <Sun className="w-8 h-8 text-success-500" />
              </div>
              <h3 className="text-lg mb-3">Économique</h3>
              <p className="text-neutral-600 text-sm">
                Consommation réduite grâce à la technologie Inverter
              </p>
            </div>

            <div className="text-center">
              <div className="bg-accent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wind className="w-8 h-8 text-accent-500" />
              </div>
              <h3 className="text-lg mb-3">Air purifié</h3>
              <p className="text-neutral-600 text-sm">
                Filtration de l'air pour un environnement plus sain
              </p>
            </div>

            <div className="text-center">
              <div className="bg-neutral-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-neutral-600" />
              </div>
              <h3 className="text-lg mb-3">Installation certifiée</h3>
              <p className="text-neutral-600 text-sm">
                Techniciens qualifiés, respect des normes en vigueur
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types de climatisation */}
      <section className="section bg-neutral-100">
        <div className="container-custom">
          <h2 className="text-center mb-12">Nos solutions de climatisation</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="mb-4">Mono-split</h3>
              <div className="mb-4 text-4xl">🏠</div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Idéal pour une pièce</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Installation simple et rapide</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Gestion indépendante</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Budget maîtrisé</span>
                </li>
              </ul>
              <p className="text-sm text-neutral-500">À partir de 1 500€ TTC posé</p>
            </div>

            <div className="card border-2 border-primary-500">
              <div className="bg-primary-500 text-white text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4">
                Le plus demandé
              </div>
              <h3 className="mb-4">Multi-split</h3>
              <div className="mb-4 text-4xl">🏘️</div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Jusqu'à 5 unités intérieures</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Une seule unité extérieure</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Contrôle individuel par pièce</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Solution complète maison</span>
                </li>
              </ul>
              <p className="text-sm text-neutral-500">À partir de 4 500€ TTC posé</p>
            </div>

            <div className="card">
              <h3 className="mb-4">Gainable</h3>
              <div className="mb-4 text-4xl">🏢</div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Installation discrète (combles)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Grilles de soufflage design</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Climatisation centralisée</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Idéale pour grandes surfaces</span>
                </li>
              </ul>
              <p className="text-sm text-neutral-500">Sur devis personnalisé</p>
            </div>
          </div>
        </div>
      </section>

      {/* Marques */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-center mb-12">Nos marques partenaires</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-center text-neutral-700 mb-8">
              Nous travaillons exclusivement avec des marques reconnues pour leur fiabilité et leurs performances
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="card text-center">
                <p className="font-semibold text-primary-500">Daikin</p>
              </div>
              <div className="card text-center">
                <p className="font-semibold text-primary-500">Mitsubishi</p>
              </div>
              <div className="card text-center">
                <p className="font-semibold text-primary-500">Panasonic</p>
              </div>
              <div className="card text-center">
                <p className="font-semibold text-primary-500">Toshiba</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Processus installation */}
      <section className="section bg-neutral-100">
        <div className="container-custom">
          <h2 className="text-center mb-12">Installation en 4 étapes</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="bg-primary-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl mb-2">Visite technique</h3>
                  <p className="text-neutral-600">
                    Analyse de votre logement, calcul des besoins thermiques et choix de l'emplacement optimal
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="bg-primary-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl mb-2">Devis personnalisé</h3>
                  <p className="text-neutral-600">
                    Proposition détaillée avec le matériel adapté à votre budget et vos besoins
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
                    Pose en une journée par nos techniciens certifiés avec respect des normes
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="bg-primary-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl mb-2">Mise en service</h3>
                  <p className="text-neutral-600">
                    Test de fonctionnement, réglages et explication de votre télécommande
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Entretien */}
      <section className="section bg-accent-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Entretien obligatoire</h2>
            <p className="text-lg text-neutral-700 mb-8">
              Un contrôle annuel de votre climatisation est obligatoire pour les installations de plus de 2kg de fluide frigorigène (environ 4kW)
            </p>
            
            <div className="bg-white p-8 rounded-xl shadow-sm mb-6">
              <h3 className="text-xl mb-4">Notre contrat d'entretien</h3>
              <ul className="space-y-3 text-left max-w-md mx-auto">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Visite annuelle programmée</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Nettoyage des filtres et unités</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Contrôle de l'étanchéité</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Attestation d'entretien réglementaire</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link href="/services/entretien" className="text-primary-500 hover:underline">
                  En savoir plus sur l'entretien →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section bg-primary-500 text-white">
        <div className="container-custom text-center">
          <h2 className="text-white mb-6">Profitez d'un confort optimal toute l'année</h2>
          <p className="text-xl text-primary-50 mb-8 max-w-2xl mx-auto">
            Demandez votre devis gratuit et bénéficiez de notre expertise
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
