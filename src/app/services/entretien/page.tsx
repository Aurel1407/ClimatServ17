import Link from 'next/link'
import { Phone, Calendar, CheckCircle, ClipboardCheck, FileCheck, Shield, Clock } from 'lucide-react'
import { Metadata } from 'next'
import { ProtectedPhone } from '@/components/ui/ProtectedContact'

export const metadata: Metadata = {
  title: 'Entretien Climatisation & PAC - Maintenance à La Rochelle',
  description: 'Entretien et maintenance de climatisation, pompes à chaleur et ballons thermodynamiques à La Rochelle. Attestation d\'entretien obligatoire. Contrats de maintenance.',
  keywords: ['entretien climatisation', 'maintenance PAC', 'contrat entretien', 'attestation entretien', 'La Rochelle', 'maintenance préventive', 'Charente-Maritime'],
  openGraph: {
    title: 'Entretien & Maintenance à La Rochelle | ClimatServ17',
    description: 'Service d\'entretien professionnel pour tous vos équipements',
    url: 'https://climatserv17.fr/services/entretien',
  }
}

export default function EntretienPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-500 to-primary-700 text-white section overflow-hidden">
        {/* Image de fond hero - Placeholder */}
        <div className="absolute inset-0 opacity-20">
          <div className="relative w-full h-full bg-gradient-to-r from-transparent to-primary-600">
            <div className="absolute inset-0 flex items-center justify-center text-primary-300">
              <div className="text-center">
                <div className="text-8xl mb-4">🔧</div>
                <p className="text-sm">Image entretien/maintenance</p>
                <p className="text-xs">1920x1080px recommandé</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <div className="text-6xl mb-6">⚙️</div>
            <h1 className="text-white mb-6">Entretien & Maintenance</h1>
            <p className="text-xl text-primary-50 mb-8">
              Maintenance préventive pour garantir les performances et la longévité de vos équipements
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
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
        </div>
      </section>

      {/* Obligations légales */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-center mb-12">Entretien obligatoire : ce que dit la loi</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-accent-50 border-l-4 border-accent-500 p-6 rounded-r-xl mb-8">
              <p className="text-lg text-neutral-700 mb-4">
                <strong>Décret n°2020-912 du 28 juillet 2020</strong>
              </p>
              <p className="text-neutral-600">
                L'entretien annuel des pompes à chaleur et climatisations dont la puissance est supérieure à 4 kW 
                est obligatoire. Un professionnel qualifié doit vérifier l'étanchéité du circuit frigorifique et 
                délivrer une attestation d'entretien.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-neutral-100 rounded-xl">
                <FileCheck className="w-12 h-12 text-primary-500 mx-auto mb-4" />
                <h3 className="text-lg mb-2">Attestation légale</h3>
                <p className="text-sm text-neutral-600">Document obligatoire remis après chaque intervention</p>
              </div>

              <div className="text-center p-6 bg-neutral-100 rounded-xl">
                <Shield className="w-12 h-12 text-primary-500 mx-auto mb-4" />
                <h3 className="text-lg mb-2">Assurance</h3>
                <p className="text-sm text-neutral-600">Maintien de vos garanties constructeur</p>
              </div>

              <div className="text-center p-6 bg-neutral-100 rounded-xl">
                <Clock className="w-12 h-12 text-primary-500 mx-auto mb-4" />
                <h3 className="text-lg mb-2">Périodicité</h3>
                <p className="text-sm text-neutral-600">Contrôle annuel minimum obligatoire</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos prestations */}
      <section className="section bg-neutral-100">
        <div className="container-custom">
          <h2 className="text-center mb-12">Nos prestations d'entretien</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="card">
              <h3 className="text-xl mb-4 text-primary-500">Pompes à Chaleur & Climatisations</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Nettoyage des filtres à air et unités intérieures</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Nettoyage de l'unité extérieure (échangeur)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Contrôle de l'étanchéité du circuit frigorifique</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Vérification des pressions et températures</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Contrôle électrique et serrage des connexions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Vérification de l'évacuation des condensats</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Test de fonctionnement complet</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm"><strong>Attestation d'entretien réglementaire</strong></span>
                </li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl mb-4 text-primary-500">Ballons Thermodynamiques</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Nettoyage du filtre à air de la PAC</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Contrôle de l'étanchéité du circuit</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Vérification du groupe de sécurité</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Contrôle de l'anode (protection anti-corrosion)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Détartrage si nécessaire</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Test de la résistance électrique d'appoint</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Vérification des performances (COP)</span>
                </li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl mb-4 text-primary-500">Adoucisseurs d'Eau</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Contrôle du niveau de sel régénérant</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Nettoyage des filtres et injecteurs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Vérification de la dureté de l'eau (TH)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Contrôle de la programmation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Désinfection de la résine (tous les 3 ans)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Réglages optimaux selon votre consommation</span>
                </li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl mb-4 text-primary-500">Chaudières Gaz</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Nettoyage du corps de chauffe</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Contrôle du brûleur et de la combustion</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Vérification de l'étanchéité du circuit gaz</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Contrôle du vase d'expansion et de la pression</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Mesure du rendement et des émissions CO/CO₂</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm"><strong>Attestation d'entretien annuel obligatoire</strong></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contrats d'entretien */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-center mb-12">Nos contrats d'entretien</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="card">
              <h3 className="text-xl mb-4">Essentiel</h3>
              <div className="text-3xl font-bold text-primary-500 mb-2">120€</div>
              <p className="text-sm text-neutral-500 mb-6">TTC/an</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">1 visite annuelle programmée</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Entretien complet</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Attestation réglementaire</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Rappel automatique</span>
                </li>
              </ul>
              <Link href="/maintenance-sav" className="btn btn-outline w-full">
                Souscrire
              </Link>
            </div>

            <div className="card border-2 border-primary-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary-500 text-white text-xs font-semibold px-4 py-1 rounded-full">
                Le plus populaire
              </div>
              <h3 className="text-xl mb-4 mt-2">Confort</h3>
              <div className="text-3xl font-bold text-primary-500 mb-2">180€</div>
              <p className="text-sm text-neutral-500 mb-6">TTC/an</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm"><strong>Tout du contrat Essentiel</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Main d'œuvre dépannage incluse</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Déplacement dépannage offert</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">-10% sur les pièces détachées</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Priorité d'intervention</span>
                </li>
              </ul>
              <Link href="/maintenance-sav" className="btn btn-primary w-full">
                Souscrire
              </Link>
            </div>

            <div className="card">
              <h3 className="text-xl mb-4">Sérénité</h3>
              <div className="text-3xl font-bold text-primary-500 mb-2">280€</div>
              <p className="text-sm text-neutral-500 mb-6">TTC/an</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm"><strong>Tout du contrat Confort</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">2 visites annuelles</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Pièces d'usure incluses (filtres...)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">-20% sur les pièces détachées</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Intervention 7j/7 garantie</span>
                </li>
              </ul>
              <Link href="/maintenance-sav" className="btn btn-outline w-full">
                Souscrire
              </Link>
            </div>
          </div>

          <div className="mt-12 max-w-3xl mx-auto bg-neutral-100 p-6 rounded-xl">
            <h4 className="font-semibold mb-3">Offre multi-équipements</h4>
            <p className="text-sm text-neutral-600">
              Vous avez plusieurs équipements (PAC + Climatisation, Ballon thermodynamique + Adoucisseur...) ? 
              Bénéficiez de <strong className="text-primary-500">-15% sur le 2ème contrat</strong> et de <strong className="text-primary-500">-25% à partir du 3ème</strong> !
            </p>
          </div>
        </div>
      </section>

      {/* Avantages entretien */}
      <section className="section bg-accent-50">
        <div className="container-custom">
          <h2 className="text-center mb-12">Pourquoi entretenir régulièrement ?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-lg mb-3">Performances optimales</h3>
              <p className="text-neutral-600 text-sm">
                Jusqu'à 30% de rendement en plus avec un entretien régulier
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-lg mb-3">Économies d'énergie</h3>
              <p className="text-neutral-600 text-sm">
                Réduction de votre consommation électrique jusqu'à 25%
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-lg mb-3">Durée de vie prolongée</h3>
              <p className="text-neutral-600 text-sm">
                Un entretien régulier double la longévité de vos équipements
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🔧</div>
              <h3 className="text-lg mb-3">Moins de pannes</h3>
              <p className="text-neutral-600 text-sm">
                Détection précoce des problèmes avant qu'ils ne deviennent graves
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section bg-primary-500 text-white">
        <div className="container-custom text-center">
          <h2 className="text-white mb-6">Planifiez votre entretien annuel</h2>
          <p className="text-xl text-primary-50 mb-8 max-w-2xl mx-auto">
            Respectez vos obligations légales et optimisez les performances de vos équipements
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
