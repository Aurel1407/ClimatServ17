import Link from 'next/link'
import { Phone, Calendar, CheckCircle, AlertCircle, Clock, Wrench } from 'lucide-react'

export default function DepannagePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-accent-500 to-accent-700 text-white section overflow-hidden">
        {/* Image de fond hero - Placeholder */}
        <div className="absolute inset-0 opacity-20">
          <div className="relative w-full h-full bg-gradient-to-r from-transparent to-accent-600">
            <div className="absolute inset-0 flex items-center justify-center text-accent-300">
              <div className="text-center">
                <div className="text-8xl mb-4">🚨</div>
                <p className="text-sm">Image dépannage urgence</p>
                <p className="text-xs">1920x1080px recommandé</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <div className="text-6xl mb-6">🚨</div>
            <h1 className="text-white mb-6">Dépannage Rapide</h1>
            <p className="text-xl text-accent-50 mb-8">
              Intervention rapide en cas de panne ou dysfonctionnement de votre installation
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:0688503112" className="btn btn-primary bg-white text-accent-500 hover:bg-accent-50">
                <Phone className="w-5 h-5" />
                Appeler maintenant : 06 88 50 31 12
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Urgence */}
      <section className="section bg-accent-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-md border-2 border-accent-500">
              <div className="flex items-start gap-4 mb-6">
                <AlertCircle className="w-12 h-12 text-accent-500 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl mb-3">Urgence 7j/7</h2>
                  <p className="text-lg text-neutral-700">
                    Une panne de chauffage en hiver ou de climatisation en été ? Nous intervenons rapidement pour vous dépanner.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-accent-50 rounded-lg">
                  <Phone className="w-8 h-8 text-accent-500 mx-auto mb-2" />
                  <p className="font-semibold">Appelez-nous</p>
                  <a href="tel:0688503112" className="text-accent-500 hover:underline">06 88 50 31 12</a>
                </div>

                <div className="text-center p-4 bg-accent-50 rounded-lg">
                  <Clock className="w-8 h-8 text-accent-500 mx-auto mb-2" />
                  <p className="font-semibold">Disponibilité</p>
                  <p className="text-sm text-neutral-600">7j/7 même le week-end</p>
                </div>

                <div className="text-center p-4 bg-accent-50 rounded-lg">
                  <Wrench className="w-8 h-8 text-accent-500 mx-auto mb-2" />
                  <p className="font-semibold">Intervention</p>
                  <p className="text-sm text-neutral-600">Sous 24h en urgence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pannes courantes */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-center mb-12">Pannes courantes que nous traitons</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="card">
              <h3 className="text-xl mb-4 text-primary-500">Pompes à Chaleur & Climatisations</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Appareil qui ne démarre pas ou s'arrête</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Pas de chaud ou pas de froid</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Fuite de fluide frigorigène</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Bruit anormal ou vibrations</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Givrage de l'unité extérieure</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Code erreur affiché</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Fuite d'eau (condensats)</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Télécommande qui ne répond pas</span>
                </li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl mb-4 text-primary-500">Ballons Thermodynamiques</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Plus d'eau chaude</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Eau tiède ou insuffisamment chaude</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Fuite au niveau du ballon ou du groupe de sécurité</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Bruit anormal du compresseur</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Code erreur sur l'afficheur</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Résistance d'appoint défaillante</span>
                </li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl mb-4 text-primary-500">Adoucisseurs d'Eau</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Eau dure (calcaire revient)</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Fuite d'eau</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Régénération qui ne se fait pas</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Consommation anormale de sel</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Eau colorée ou trouble</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Perte de pression</span>
                </li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl mb-4 text-primary-500">Chaudières Gaz</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Chaudière en sécurité ou en défaut</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Perte de pression du circuit</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Brûleur qui ne s'allume pas</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Fuite de gaz</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Bruit de surchauffe ou de combustion</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Fumées ou odeurs anormales</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Processus intervention */}
      <section className="section bg-neutral-100">
        <div className="container-custom">
          <h2 className="text-center mb-12">Notre processus d'intervention</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="bg-accent-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl mb-2">Diagnostic téléphonique</h3>
                  <p className="text-neutral-600">
                    Décrivez-nous le problème. Notre technicien vous pose les bonnes questions pour identifier la panne.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="bg-accent-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl mb-2">Rendez-vous rapide</h3>
                  <p className="text-neutral-600">
                    Prise de rendez-vous sous 24h pour les urgences (48-72h en période normale).
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="bg-accent-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl mb-2">Diagnostic sur place</h3>
                  <p className="text-neutral-600">
                    Analyse complète de votre installation avec outils de diagnostic professionnels.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="bg-accent-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl mb-2">Devis transparent</h3>
                  <p className="text-neutral-600">
                    Explication claire de la panne et proposition chiffrée avant toute intervention.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="bg-accent-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">
                  5
                </div>
                <div>
                  <h3 className="text-xl mb-2">Réparation et test</h3>
                  <p className="text-neutral-600">
                    Réparation dans les règles de l'art avec des pièces d'origine et test complet de fonctionnement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-center mb-12">Nos tarifs de dépannage</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-neutral-100 p-6 rounded-xl">
                <h3 className="text-lg mb-4 font-semibold">Forfait déplacement + diagnostic</h3>
                <div className="text-3xl font-bold text-primary-500 mb-2">80€</div>
                <p className="text-sm text-neutral-600">TTC (déduit si acceptation du devis)</p>
              </div>

              <div className="bg-neutral-100 p-6 rounded-xl">
                <h3 className="text-lg mb-4 font-semibold">Main d'œuvre dépannage</h3>
                <div className="text-3xl font-bold text-primary-500 mb-2">65€</div>
                <p className="text-sm text-neutral-600">TTC/heure + pièces</p>
              </div>
            </div>

            <div className="bg-primary-50 p-6 rounded-xl border-2 border-primary-500">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary-500" />
                Avec un contrat d'entretien Confort ou Sérénité
              </h3>
              <ul className="space-y-2 text-sm text-neutral-700">
                <li className="flex items-center gap-2">
                  <span className="text-primary-500">✓</span>
                  Déplacement offert
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary-500">✓</span>
                  Main d'œuvre incluse (Confort & Sérénité)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary-500">✓</span>
                  -10% à -20% sur les pièces détachées
                </li>
              </ul>
              <div className="mt-4">
                <Link href="/services/entretien" className="text-primary-500 hover:underline text-sm">
                  En savoir plus sur nos contrats d'entretien →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conseils avant l'appel */}
      <section className="section bg-accent-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-8">Avant de nous appeler</h2>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <p className="text-neutral-700 mb-4">Pour accélérer le diagnostic, ayez sous la main :</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">La marque et le modèle de votre appareil</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Le code erreur affiché (si présent)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">La date de la dernière maintenance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Une description précise du dysfonctionnement</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section bg-accent-500 text-white">
        <div className="container-custom text-center">
          <h2 className="text-white mb-6">Une panne ? Appelez-nous maintenant !</h2>
          <p className="text-xl text-accent-50 mb-8 max-w-2xl mx-auto">
            Nos techniciens sont disponibles 7j/7 pour intervenir rapidement
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0688503112" className="btn btn-primary bg-white text-accent-500 hover:bg-accent-50">
              <Phone className="w-5 h-5" />
              06 88 50 31 12
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

