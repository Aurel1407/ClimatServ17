import { Metadata } from 'next';
import { Shield, Lock, Eye, Database, UserCheck, FileText, AlertCircle, Mail } from 'lucide-react';
import Link from 'next/link';
import { ProtectedPhone, ProtectedEmail } from '@/components/ui/ProtectedContact'
import { ENCODED_CONTACTS } from '@/lib/encoded-contacts'

export const metadata: Metadata = {
  title: 'Politique de Confidentialité | ClimatServ17',
  description: 'Politique de confidentialité et protection des données personnelles de ClimatServ17, conforme au RGPD.',
};

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Lock className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Politique de Confidentialité
            </h1>
            <p className="text-lg md:text-xl text-primary-100">
              Protection de vos données personnelles - RGPD
            </p>
          </div>
        </div>
      </section>

      {/* Contenu */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Introduction */}
            <div className="card">
              <div className="flex items-start gap-4 mb-6">
                <Shield className="w-8 h-8 text-primary-500 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-primary-800 mb-2">
                    Notre engagement
                  </h2>
                  <div className="h-1 w-20 bg-accent-500 rounded"></div>
                </div>
              </div>
              
              <div className="space-y-4 text-neutral-700 leading-relaxed">
                <p>
                  ClimatServ17 accorde une importance particulière à la protection de vos données personnelles 
                  et au respect de votre vie privée. Cette politique de confidentialité vous informe sur la 
                  manière dont nous collectons, utilisons, conservons et protégeons vos données personnelles.
                </p>
                
                <p>
                  Cette politique est conforme au Règlement Général sur la Protection des Données (RGPD) 
                  n°2016/679 du 27 avril 2016 et à la loi Informatique et Libertés n°78-17 du 6 janvier 1978 
                  modifiée.
                </p>
                
                <div className="bg-primary-50 border-l-4 border-primary-500 p-4 rounded">
                  <p className="text-sm">
                    <strong>Dernière mise à jour :</strong> 3 février 2026
                  </p>
                </div>
              </div>
            </div>

            {/* Responsable du traitement */}
            <div className="card">
              <div className="flex items-start gap-4 mb-6">
                <UserCheck className="w-8 h-8 text-primary-500 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-primary-800 mb-2">
                    Responsable du traitement
                  </h2>
                  <div className="h-1 w-20 bg-accent-500 rounded"></div>
                </div>
              </div>
              
              <div className="space-y-4 text-neutral-700">
                <p>
                  Le responsable du traitement de vos données personnelles est :
                </p>
                
                <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-6 space-y-2">
                  <p><strong>ClimatServ17</strong></p>
                  <p>29 rue du Levant</p>
                  <p>17220 Sainte-Soulle, France</p>
                  <p>SIRET : 988 737 029 00013</p>
                  <p className="mt-4">
                    <strong>Contact :</strong> <ProtectedEmail encoded={ENCODED_CONTACTS.EMAIL_MAIN} className="text-primary-600 hover:underline" />
                  </p>
                  <p>
                    <strong>Téléphone :</strong> <ProtectedPhone encoded={ENCODED_CONTACTS.PHONE_MAIN} className="text-primary-600 hover:underline" />
                  </p>
                </div>
              </div>
            </div>

            {/* Données collectées */}
            <div className="card">
              <div className="flex items-start gap-4 mb-6">
                <Database className="w-8 h-8 text-primary-500 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-primary-800 mb-2">
                    Données personnelles collectées
                  </h2>
                  <div className="h-1 w-20 bg-accent-500 rounded"></div>
                </div>
              </div>
              
              <div className="space-y-6 text-neutral-700 leading-relaxed">
                <p>
                  Nous collectons uniquement les données strictement nécessaires à l'exécution de nos services 
                  et au bon fonctionnement de notre relation client.
                </p>

                <div>
                  <h3 className="text-xl font-semibold text-primary-700 mb-3">
                    1. Données d'identification
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Nom et prénom</li>
                    <li>Adresse postale</li>
                    <li>Adresse email</li>
                    <li>Numéro de téléphone</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-primary-700 mb-3">
                    2. Données de navigation
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Adresse IP</li>
                    <li>Type de navigateur</li>
                    <li>Pages visitées</li>
                    <li>Date et heure de connexion</li>
                    <li>Cookies (voir section dédiée)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-primary-700 mb-3">
                    3. Données techniques
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Informations sur vos équipements (type de chauffage, climatisation, etc.)</li>
                    <li>Historique des interventions</li>
                    <li>Contrats de maintenance</li>
                    <li>Documents techniques liés aux installations</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Finalités */}
            <div className="card">
              <div className="flex items-start gap-4 mb-6">
                <Eye className="w-8 h-8 text-primary-500 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-primary-800 mb-2">
                    Finalités du traitement
                  </h2>
                  <div className="h-1 w-20 bg-accent-500 rounded"></div>
                </div>
              </div>
              
              <div className="space-y-4 text-neutral-700 leading-relaxed">
                <p>
                  Vos données personnelles sont collectées et traitées pour les finalités suivantes :
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
                    <h4 className="font-semibold text-primary-800 mb-2">Gestion de la relation client</h4>
                    <p className="text-sm">Traitement de vos demandes de devis, commandes, factures et suivi client.</p>
                    <p className="text-xs text-neutral-600 mt-2"><strong>Base légale :</strong> Exécution du contrat</p>
                  </div>

                  <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
                    <h4 className="font-semibold text-primary-800 mb-2">Prise de rendez-vous</h4>
                    <p className="text-sm">Planification et gestion des interventions techniques.</p>
                    <p className="text-xs text-neutral-600 mt-2"><strong>Base légale :</strong> Exécution du contrat</p>
                  </div>

                  <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
                    <h4 className="font-semibold text-primary-800 mb-2">Maintenance et SAV</h4>
                    <p className="text-sm">Suivi des contrats d'entretien et historique des interventions.</p>
                    <p className="text-xs text-neutral-600 mt-2"><strong>Base légale :</strong> Exécution du contrat</p>
                  </div>

                  <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
                    <h4 className="font-semibold text-primary-800 mb-2">Communication</h4>
                    <p className="text-sm">Envoi d'informations sur nos services, rappels d'entretien.</p>
                    <p className="text-xs text-neutral-600 mt-2"><strong>Base légale :</strong> Intérêt légitime</p>
                  </div>

                  <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
                    <h4 className="font-semibold text-primary-800 mb-2">Obligations légales</h4>
                    <p className="text-sm">Respect des obligations comptables, fiscales et réglementaires.</p>
                    <p className="text-xs text-neutral-600 mt-2"><strong>Base légale :</strong> Obligation légale</p>
                  </div>

                  <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
                    <h4 className="font-semibold text-primary-800 mb-2">Amélioration du site</h4>
                    <p className="text-sm">Analyse de l'utilisation du site pour améliorer l'expérience utilisateur.</p>
                    <p className="text-xs text-neutral-600 mt-2"><strong>Base légale :</strong> Intérêt légitime</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Durée de conservation */}
            <div className="card">
              <div className="flex items-start gap-4 mb-6">
                <FileText className="w-8 h-8 text-primary-500 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-primary-800 mb-2">
                    Durée de conservation
                  </h2>
                  <div className="h-1 w-20 bg-accent-500 rounded"></div>
                </div>
              </div>
              
              <div className="space-y-4 text-neutral-700">
                <p>
                  Vos données personnelles sont conservées pendant des durées différentes selon leur nature :
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-neutral-300">
                    <thead className="bg-primary-100">
                      <tr>
                        <th className="border border-neutral-300 p-3 text-left font-semibold text-primary-800">Type de données</th>
                        <th className="border border-neutral-300 p-3 text-left font-semibold text-primary-800">Durée de conservation</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-neutral-300 p-3">Données prospects (non clients)</td>
                        <td className="border border-neutral-300 p-3">3 ans à compter du dernier contact</td>
                      </tr>
                      <tr className="bg-neutral-50">
                        <td className="border border-neutral-300 p-3">Données clients</td>
                        <td className="border border-neutral-300 p-3">10 ans après la fin de la relation commerciale (obligations comptables)</td>
                      </tr>
                      <tr>
                        <td className="border border-neutral-300 p-3">Contrats et factures</td>
                        <td className="border border-neutral-300 p-3">10 ans (obligations fiscales)</td>
                      </tr>
                      <tr className="bg-neutral-50">
                        <td className="border border-neutral-300 p-3">Documents techniques</td>
                        <td className="border border-neutral-300 p-3">Durée de vie des installations + 10 ans</td>
                      </tr>
                      <tr>
                        <td className="border border-neutral-300 p-3">Cookies de navigation</td>
                        <td className="border border-neutral-300 p-3">13 mois maximum</td>
                      </tr>
                      <tr className="bg-neutral-50">
                        <td className="border border-neutral-300 p-3">Données de connexion (logs)</td>
                        <td className="border border-neutral-300 p-3">1 an</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-sm text-neutral-600">
                  À l'expiration de ces délais, vos données sont supprimées ou anonymisées de manière irréversible.
                </p>
              </div>
            </div>

            {/* Destinataires */}
            <div className="card">
              <h2 className="text-2xl font-bold text-primary-800 mb-6">
                Destinataires des données
              </h2>
              
              <div className="space-y-4 text-neutral-700 leading-relaxed">
                <p>
                  Vos données personnelles sont destinées aux catégories de destinataires suivants :
                </p>

                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Le personnel habilité de ClimatServ17 (gérant, techniciens, service administratif)</li>
                  <li>Nos sous-traitants techniques (hébergement du site web, gestion de la messagerie)</li>
                  <li>Les organismes publics, exclusivement pour répondre à nos obligations légales (URSSAF, administration fiscale, etc.)</li>
                </ul>

                <div className="bg-accent-50 border-l-4 border-accent-500 p-4 rounded">
                  <p className="text-sm">
                    <strong>Pas de vente de données :</strong> ClimatServ17 ne vend ni ne loue vos données personnelles 
                    à des tiers à des fins commerciales.
                  </p>
                </div>

                <p>
                  Tous nos sous-traitants sont soumis à des obligations contractuelles strictes de sécurité 
                  et de confidentialité conformes au RGPD.
                </p>
              </div>
            </div>

            {/* Sécurité */}
            <div className="card">
              <div className="flex items-start gap-4 mb-6">
                <Lock className="w-8 h-8 text-primary-500 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-primary-800 mb-2">
                    Sécurité des données
                  </h2>
                  <div className="h-1 w-20 bg-accent-500 rounded"></div>
                </div>
              </div>
              
              <div className="space-y-4 text-neutral-700 leading-relaxed">
                <p>
                  ClimatServ17 met en œuvre toutes les mesures techniques et organisationnelles appropriées 
                  pour protéger vos données personnelles contre :
                </p>

                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>La destruction accidentelle ou illicite</li>
                  <li>La perte accidentelle</li>
                  <li>L'altération</li>
                  <li>La divulgation ou l'accès non autorisé</li>
                  <li>Toute autre forme de traitement illicite</li>
                </ul>

                <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-6">
                  <h4 className="font-semibold text-primary-700 mb-3">Mesures de sécurité mises en place :</h4>
                  <ul className="space-y-2 text-sm">
                    <li>✓ Connexion HTTPS sécurisée (certificat SSL/TLS)</li>
                    <li>✓ Hébergement sécurisé avec sauvegardes régulières</li>
                    <li>✓ Accès aux données limité aux seuls personnels autorisés</li>
                    <li>✓ Authentification forte pour l'espace client</li>
                    <li>✓ Chiffrement des données sensibles</li>
                    <li>✓ Mise à jour régulière des systèmes de sécurité</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Vos droits */}
            <div className="card bg-gradient-to-br from-primary-50 to-accent-50">
              <div className="flex items-start gap-4 mb-6">
                <Shield className="w-8 h-8 text-primary-600 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-primary-800 mb-2">
                    Vos droits sur vos données
                  </h2>
                  <div className="h-1 w-20 bg-accent-500 rounded"></div>
                </div>
              </div>
              
              <div className="space-y-6 text-neutral-700">
                <p className="leading-relaxed">
                  Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits suivants :
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 border border-primary-200">
                    <h4 className="font-semibold text-primary-700 mb-2">📋 Droit d'accès</h4>
                    <p className="text-sm">Obtenir la confirmation que vos données sont traitées et accéder à vos données.</p>
                  </div>

                  <div className="bg-white rounded-lg p-4 border border-primary-200">
                    <h4 className="font-semibold text-primary-700 mb-2">✏️ Droit de rectification</h4>
                    <p className="text-sm">Faire corriger des données inexactes ou incomplètes.</p>
                  </div>

                  <div className="bg-white rounded-lg p-4 border border-primary-200">
                    <h4 className="font-semibold text-primary-700 mb-2">🗑️ Droit à l'effacement</h4>
                    <p className="text-sm">Demander la suppression de vos données (sous certaines conditions).</p>
                  </div>

                  <div className="bg-white rounded-lg p-4 border border-primary-200">
                    <h4 className="font-semibold text-primary-700 mb-2">⏸️ Droit à la limitation</h4>
                    <p className="text-sm">Limiter temporairement le traitement de vos données.</p>
                  </div>

                  <div className="bg-white rounded-lg p-4 border border-primary-200">
                    <h4 className="font-semibold text-primary-700 mb-2">🚫 Droit d'opposition</h4>
                    <p className="text-sm">Vous opposer au traitement de vos données pour des motifs légitimes.</p>
                  </div>

                  <div className="bg-white rounded-lg p-4 border border-primary-200">
                    <h4 className="font-semibold text-primary-700 mb-2">📦 Droit à la portabilité</h4>
                    <p className="text-sm">Récupérer vos données dans un format structuré et couramment utilisé.</p>
                  </div>

                  <div className="bg-white rounded-lg p-4 border border-primary-200">
                    <h4 className="font-semibold text-primary-700 mb-2">📝 Directives post-mortem</h4>
                    <p className="text-sm">Définir des directives sur le sort de vos données après votre décès.</p>
                  </div>

                  <div className="bg-white rounded-lg p-4 border border-primary-200">
                    <h4 className="font-semibold text-primary-700 mb-2">⚖️ Droit de réclamation</h4>
                    <p className="text-sm">Introduire une réclamation auprès de la CNIL.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Exercer vos droits */}
            <div className="card">
              <div className="flex items-start gap-4 mb-6">
                <Mail className="w-8 h-8 text-primary-500 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-primary-800 mb-2">
                    Comment exercer vos droits ?
                  </h2>
                  <div className="h-1 w-20 bg-accent-500 rounded"></div>
                </div>
              </div>
              
              <div className="space-y-4 text-neutral-700 leading-relaxed">
                <p>
                  Pour exercer vos droits, vous pouvez nous contacter :
                </p>

                <div className="bg-primary-50 border border-primary-200 rounded-lg p-6 space-y-4">
                  <div>
                    <p className="font-semibold text-primary-800 mb-2">📧 Par email :</p>
                    <ProtectedEmail encoded={ENCODED_CONTACTS.EMAIL_MAIN} className="text-primary-600 hover:underline text-lg" />
                  </div>

                  <div>
                    <p className="font-semibold text-primary-800 mb-2">📮 Par courrier :</p>
                    <p>ClimatServ17</p>
                    <p>À l'attention du Responsable des données</p>
                    <p>29 rue du Levant</p>
                    <p>17220 Sainte-Soulle</p>
                  </div>
                </div>

                <div className="bg-accent-50 border-l-4 border-accent-500 p-4 rounded">
                  <p className="text-sm">
                    <strong>Important :</strong> Pour des raisons de sécurité, nous vous demanderons de justifier 
                    de votre identité en fournissant une copie d'une pièce d'identité. Nous nous engageons à 
                    répondre à votre demande dans un délai maximum d'un mois.
                  </p>
                </div>

                <p>
                  Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation 
                  auprès de la CNIL :
                </p>

                <div className="text-sm bg-neutral-100 border border-neutral-200 rounded-lg p-4">
                  <p className="font-semibold mb-2">Commission Nationale de l'Informatique et des Libertés (CNIL)</p>
                  <p>3 Place de Fontenoy - TSA 80715</p>
                  <p>75334 PARIS CEDEX 07</p>
                  <p className="mt-2">
                    Site web : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">
                      www.cnil.fr
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Cookies */}
            <div className="card">
              <h2 className="text-2xl font-bold text-primary-800 mb-6">
                Cookies et technologies similaires
              </h2>
              
              <div className="space-y-4 text-neutral-700 leading-relaxed">
                <p>
                  Notre site utilise des cookies pour améliorer votre expérience de navigation et réaliser 
                  des statistiques de visite.
                </p>

                <div>
                  <h4 className="font-semibold text-primary-700 mb-2">Qu'est-ce qu'un cookie ?</h4>
                  <p>
                    Un cookie est un petit fichier texte déposé sur votre terminal lors de la visite de notre site. 
                    Il permet de conserver des informations relatives à votre navigation.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary-700 mb-2">Types de cookies utilisés :</h4>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Cookies essentiels :</strong> Nécessaires au fonctionnement du site (gestion de session, sécurité)</li>
                    <li><strong>Cookies de préférence :</strong> Mémorisent vos choix (langue, région, acceptation des cookies)</li>
                    <li><strong>Cookies analytiques :</strong> Mesurent l'audience et améliorent les performances du site</li>
                  </ul>
                </div>

                <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4">
                  <h4 className="font-semibold text-primary-700 mb-2">Gérer vos cookies</h4>
                  <p className="text-sm">
                    Vous pouvez à tout moment modifier vos préférences en matière de cookies via les paramètres 
                    de votre navigateur. Le refus de certains cookies peut entraîner une limitation des fonctionnalités 
                    du site.
                  </p>
                </div>

                <p className="text-sm">
                  Pour en savoir plus sur les cookies et leur gestion : 
                  <a 
                    href="https://www.cnil.fr/fr/cookies-les-outils-pour-les-maitriser" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:underline ml-1"
                  >
                    Guide de la CNIL
                  </a>
                </p>
              </div>
            </div>

            {/* Modifications */}
            <div className="card">
              <div className="flex items-start gap-4 mb-6">
                <AlertCircle className="w-8 h-8 text-primary-500 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-primary-800 mb-2">
                    Modifications de la politique
                  </h2>
                  <div className="h-1 w-20 bg-accent-500 rounded"></div>
                </div>
              </div>
              
              <div className="space-y-4 text-neutral-700 leading-relaxed">
                <p>
                  Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment, 
                  notamment pour l'adapter aux évolutions législatives, réglementaires ou de nos pratiques.
                </p>
                
                <p>
                  Toute modification importante vous sera notifiée par email ou via un avis visible sur notre site. 
                  Nous vous invitons à consulter régulièrement cette page pour prendre connaissance d'éventuelles modifications.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="card bg-primary-600 text-white">
              <h2 className="text-2xl font-bold mb-4">
                Des questions sur vos données ?
              </h2>
              
              <p className="mb-6 text-primary-100">
                Notre équipe est à votre disposition pour répondre à toutes vos questions concernant 
                la protection de vos données personnelles.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <ProtectedEmail 
                  encoded={ENCODED_CONTACTS.EMAIL_MAIN}
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>Nous contacter</span>
                </ProtectedEmail>
                <Link 
                  href="/mentions-legales"
                  className="inline-flex items-center justify-center gap-2 bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-800 transition-colors border border-primary-500"
                >
                  Voir les mentions légales
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
