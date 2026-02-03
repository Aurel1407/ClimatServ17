import { Metadata } from 'next';
import { FileText, CheckCircle, AlertCircle, Euro, Calendar, Shield, Scale } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Conditions Générales de Vente | ClimatServ17',
  description: 'Conditions générales de vente et d\'utilisation des services ClimatServ17.',
};

export default function ConditionsGeneralesPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <FileText className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Conditions Générales de Vente
            </h1>
            <p className="text-lg md:text-xl text-primary-100">
              Conditions applicables à nos prestations de service
            </p>
          </div>
        </div>
      </section>

      {/* Contenu */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Préambule */}
            <div className="card">
              <div className="flex items-start gap-4 mb-6">
                <FileText className="w-8 h-8 text-primary-500 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-primary-800 mb-2">
                    Préambule
                  </h2>
                  <div className="h-1 w-20 bg-accent-500 rounded"></div>
                </div>
              </div>
              
              <div className="space-y-4 text-neutral-700 leading-relaxed">
                <p>
                  Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre :
                </p>
                
                <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-6">
                  <p><strong>ClimatServ17</strong></p>
                  <p>29 rue du Levant, 17220 Sainte-Soulle</p>
                  <p>SIRET : 988 737 029 00013</p>
                  <p>Ci-après dénommé « le Prestataire »</p>
                </div>

                <p>Et</p>

                <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-6">
                  <p>Tout client, particulier ou professionnel</p>
                  <p>Ci-après dénommé « le Client »</p>
                </div>
                
                <p>
                  Toute commande de prestations implique l'acceptation sans réserve par le Client des présentes 
                  CGV qui prévalent sur tout autre document du Client, notamment sur toutes conditions générales 
                  d'achat.
                </p>

                <div className="bg-primary-50 border-l-4 border-primary-500 p-4 rounded">
                  <p className="text-sm">
                    <strong>Date d'entrée en vigueur :</strong> 3 février 2026<br/>
                    <strong>Dernière mise à jour :</strong> 3 février 2026
                  </p>
                </div>
              </div>
            </div>

            {/* Article 1 - Objet */}
            <div className="card">
              <h2 className="text-2xl font-bold text-primary-800 mb-6">
                Article 1 - Objet et champ d'application
              </h2>
              
              <div className="space-y-4 text-neutral-700 leading-relaxed">
                <p>
                  Les présentes CGV s'appliquent à toutes les prestations de services proposées par ClimatServ17, 
                  notamment :
                </p>

                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Installation de pompes à chaleur (air/air, air/eau, géothermique)</li>
                  <li>Installation de systèmes de climatisation (mono-split, multi-split, gainable)</li>
                  <li>Installation de ballons thermodynamiques</li>
                  <li>Installation d'adoucisseurs d'eau</li>
                  <li>Entretien et maintenance des équipements</li>
                  <li>Dépannage et intervention d'urgence</li>
                  <li>Diagnostic et étude thermique</li>
                </ul>

                <p>
                  Ces CGV sont accessibles à tout moment sur notre site internet{' '}
                  <a href="https://climatserv17.fr" className="text-primary-600 hover:underline">
                    https://climatserv17.fr
                  </a>{' '}
                  et prévaudront sur toute autre version ou tout autre document contradictoire.
                </p>
              </div>
            </div>

            {/* Article 2 - Devis */}
            <div className="card">
              <div className="flex items-start gap-4 mb-6">
                <CheckCircle className="w-8 h-8 text-primary-500 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-primary-800 mb-2">
                    Article 2 - Devis et commande
                  </h2>
                  <div className="h-1 w-20 bg-accent-500 rounded"></div>
                </div>
              </div>
              
              <div className="space-y-4 text-neutral-700 leading-relaxed">
                <div>
                  <h3 className="text-xl font-semibold text-primary-700 mb-3">2.1 - Établissement du devis</h3>
                  <p>
                    Tout devis établi par ClimatServ17 est gratuit et valable pour une durée de <strong>3 mois</strong> 
                    à compter de sa date d'émission. Passé ce délai, les prix et disponibilités ne sont plus garantis.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-primary-700 mb-3">2.2 - Acceptation du devis</h3>
                  <p>
                    Le devis doit être retourné signé avec la mention « Bon pour accord » accompagné :
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                    <li>D'un acompte de 30% du montant total TTC</li>
                    <li>Des documents nécessaires à la constitution du dossier (pour les aides financières le cas échéant)</li>
                  </ul>
                  <p className="mt-2">
                    La signature du devis vaut acceptation sans réserve des présentes CGV et engagement ferme 
                    de commande.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-primary-700 mb-3">2.3 - Visite technique préalable</h3>
                  <p>
                    Une visite technique préalable gratuite est systématiquement réalisée pour :
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                    <li>Évaluer la faisabilité technique du projet</li>
                    <li>Dimensionner correctement les équipements</li>
                    <li>Identifier les éventuelles contraintes d'installation</li>
                    <li>Établir un devis précis et personnalisé</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Article 3 - Prix */}
            <div className="card">
              <div className="flex items-start gap-4 mb-6">
                <Euro className="w-8 h-8 text-primary-500 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-primary-800 mb-2">
                    Article 3 - Prix et modalités de paiement
                  </h2>
                  <div className="h-1 w-20 bg-accent-500 rounded"></div>
                </div>
              </div>
              
              <div className="space-y-4 text-neutral-700 leading-relaxed">
                <div>
                  <h3 className="text-xl font-semibold text-primary-700 mb-3">3.1 - Prix</h3>
                  <p>
                    Les prix de nos prestations sont indiqués en euros, toutes taxes comprises (TTC). 
                    Ils incluent la TVA au taux en vigueur au jour de l'établissement du devis (20% ou 5,5% 
                    pour les travaux de rénovation énergétique selon les conditions d'éligibilité).
                  </p>
                  <p className="mt-2">
                    Les prix sont fermes et non révisables pendant la durée de validité du devis, sauf 
                    modification significative des conditions d'exécution demandée par le Client.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-primary-700 mb-3">3.2 - Modalités de paiement</h3>
                  
                  <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-6">
                    <h4 className="font-semibold text-primary-800 mb-3">Échelonnement du paiement :</h4>
                    <ul className="space-y-2">
                      <li>✓ <strong>Acompte :</strong> 30% à la signature du devis</li>
                      <li>✓ <strong>2ème versement :</strong> 40% au début des travaux</li>
                      <li>✓ <strong>Solde :</strong> 30% à la fin des travaux et remise du certificat de conformité</li>
                    </ul>
                  </div>

                  <p className="mt-4">
                    <strong>Modes de paiement acceptés :</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                    <li>Virement bancaire</li>
                    <li>Chèque</li>
                    <li>Carte bancaire</li>
                    <li>Espèces (dans la limite de 1 000€)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-primary-700 mb-3">3.3 - Retard de paiement</h3>
                  <p>
                    En cas de retard de paiement, des pénalités de retard au taux de 3 fois le taux d'intérêt 
                    légal seront automatiquement appliquées, ainsi qu'une indemnité forfaitaire de 40€ pour 
                    frais de recouvrement (article L.441-6 du Code de commerce).
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-primary-700 mb-3">3.4 - Aides financières</h3>
                  <p>
                    ClimatServ17 vous accompagne dans la constitution de vos dossiers d'aides financières 
                    (MaPrimeRénov', Prime CEE, etc.). Les montants indiqués au devis peuvent être « net après 
                    déduction des aides » ou « brut avant aides » selon la configuration du dossier.
                  </p>
                  <p className="mt-2 text-sm text-neutral-600">
                    Note : L'obtention des aides reste conditionnée à l'acceptation de votre dossier par les 
                    organismes compétents. ClimatServ17 ne saurait être tenu responsable d'un refus d'attribution.
                  </p>
                </div>
              </div>
            </div>

            {/* Article 4 - Délais */}
            <div className="card">
              <div className="flex items-start gap-4 mb-6">
                <Calendar className="w-8 h-8 text-primary-500 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-primary-800 mb-2">
                    Article 4 - Délais d'exécution
                  </h2>
                  <div className="h-1 w-20 bg-accent-500 rounded"></div>
                </div>
              </div>
              
              <div className="space-y-4 text-neutral-700 leading-relaxed">
                <p>
                  Les délais d'intervention sont indiqués à titre indicatif lors de la commande. 
                  ClimatServ17 s'engage à respecter au mieux ces délais, sous réserve de :
                </p>

                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>La disponibilité des équipements commandés auprès des fournisseurs</li>
                  <li>L'obtention des autorisations administratives nécessaires</li>
                  <li>Les conditions météorologiques pour les installations extérieures</li>
                  <li>L'accessibilité du lieu d'intervention</li>
                </ul>

                <div className="bg-accent-50 border-l-4 border-accent-500 p-4 rounded">
                  <p className="text-sm">
                    <strong>Important :</strong> Un retard dans l'exécution des prestations ne peut donner lieu 
                    à des pénalités ou à l'annulation de la commande, sauf en cas de retard excédant 30 jours 
                    sans information préalable du Client.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-primary-700 mb-3">Délais indicatifs par prestation :</h3>
                  <ul className="space-y-2">
                    <li>• Installation PAC ou climatisation : <strong>2 à 4 semaines</strong> après validation du devis</li>
                    <li>• Installation ballon thermodynamique : <strong>1 à 2 semaines</strong></li>
                    <li>• Installation adoucisseur : <strong>1 semaine</strong></li>
                    <li>• Entretien annuel : <strong>sous 15 jours</strong></li>
                    <li>• Dépannage d'urgence : <strong>intervention sous 24h-48h</strong></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Article 5 - Obligations du Client */}
            <div className="card">
              <h2 className="text-2xl font-bold text-primary-800 mb-6">
                Article 5 - Obligations du Client
              </h2>
              
              <div className="space-y-4 text-neutral-700 leading-relaxed">
                <p>
                  Le Client s'engage à :
                </p>

                <div className="space-y-4">
                  <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
                    <h4 className="font-semibold text-primary-800 mb-2">5.1 - Accès au site</h4>
                    <p className="text-sm">
                      Assurer l'accessibilité du lieu d'intervention et fournir les moyens nécessaires 
                      (électricité, eau, stationnement à proximité).
                    </p>
                  </div>

                  <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
                    <h4 className="font-semibold text-primary-800 mb-2">5.2 - Informations exactes</h4>
                    <p className="text-sm">
                      Fournir des informations exactes et complètes concernant l'installation existante, 
                      les caractéristiques du logement et les contraintes techniques éventuelles.
                    </p>
                  </div>

                  <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
                    <h4 className="font-semibold text-primary-800 mb-2">5.3 - Autorisations</h4>
                    <p className="text-sm">
                      Obtenir toutes les autorisations nécessaires (copropriété, mairie, etc.) avant le 
                      début des travaux si applicable.
                    </p>
                  </div>

                  <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
                    <h4 className="font-semibold text-primary-800 mb-2">5.4 - Préparation du site</h4>
                    <p className="text-sm">
                      Dégager et protéger les zones d'intervention. Les travaux de gros œuvre (saignées, 
                      percements) et de finition (peinture, revêtements) ne sont pas inclus sauf mention 
                      contraire au devis.
                    </p>
                  </div>

                  <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
                    <h4 className="font-semibold text-primary-800 mb-2">5.5 - Présence ou représentant</h4>
                    <p className="text-sm">
                      Être présent ou représenté lors de l'intervention pour la réception des travaux et 
                      la signature des documents.
                    </p>
                  </div>
                </div>

                <div className="bg-accent-50 border-l-4 border-accent-500 p-4 rounded mt-4">
                  <p className="text-sm">
                    <strong>Attention :</strong> Le non-respect de ces obligations peut entraîner un report 
                    de l'intervention et des frais supplémentaires (déplacement à vide, immobilisation du 
                    matériel).
                  </p>
                </div>
              </div>
            </div>

            {/* Article 6 - Garanties */}
            <div className="card">
              <div className="flex items-start gap-4 mb-6">
                <Shield className="w-8 h-8 text-primary-500 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-primary-800 mb-2">
                    Article 6 - Garanties
                  </h2>
                  <div className="h-1 w-20 bg-accent-500 rounded"></div>
                </div>
              </div>
              
              <div className="space-y-4 text-neutral-700 leading-relaxed">
                <div>
                  <h3 className="text-xl font-semibold text-primary-700 mb-3">6.1 - Garantie légale de conformité</h3>
                  <p>
                    Le Client bénéficie de la garantie légale de conformité (articles L.217-4 et suivants du 
                    Code de la consommation) pour tout défaut de conformité existant au moment de la livraison 
                    et apparaissant dans un délai de 2 ans.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-primary-700 mb-3">6.2 - Garantie des vices cachés</h3>
                  <p>
                    Le Client bénéficie également de la garantie légale des vices cachés (articles 1641 et 
                    suivants du Code civil) permettant de rendre l'équipement ou d'en obtenir une réduction 
                    du prix en cas de découverte d'un vice caché.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-primary-700 mb-3">6.3 - Garantie commerciale</h3>
                  <p>
                    En complément des garanties légales, nos prestations bénéficient des garanties suivantes :
                  </p>
                  
                  <div className="mt-4 space-y-3">
                    <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4">
                      <p><strong>Équipements :</strong> Garantie constructeur de 2 à 5 ans selon les marques</p>
                    </div>
                    <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4">
                      <p><strong>Main d'œuvre :</strong> Garantie 2 ans sur nos interventions</p>
                    </div>
                    <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4">
                      <p><strong>Pièces détachées :</strong> Garantie 2 ans sur les pièces remplacées</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-primary-700 mb-3">6.4 - Exclusions de garantie</h3>
                  <p>
                    Les garanties ne couvrent pas :
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                    <li>Les dommages résultant d'une utilisation anormale ou non conforme</li>
                    <li>Le défaut d'entretien régulier (entretien annuel obligatoire)</li>
                    <li>Les interventions effectuées par un tiers non agréé</li>
                    <li>Les dommages dus à un cas de force majeure</li>
                    <li>L'usure normale des pièces</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-primary-700 mb-3">6.5 - Assurance décennale</h3>
                  <p>
                    ClimatServ17 dispose d'une assurance responsabilité civile professionnelle et décennale 
                    couvrant les dommages pouvant affecter la solidité de l'ouvrage ou le rendre impropre à 
                    sa destination (article 1792 du Code civil).
                  </p>
                </div>
              </div>
            </div>

            {/* Article 7 - Droit de rétractation */}
            <div className="card">
              <div className="flex items-start gap-4 mb-6">
                <AlertCircle className="w-8 h-8 text-primary-500 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-primary-800 mb-2">
                    Article 7 - Droit de rétractation
                  </h2>
                  <div className="h-1 w-20 bg-accent-500 rounded"></div>
                </div>
              </div>
              
              <div className="space-y-4 text-neutral-700 leading-relaxed">
                <p>
                  Conformément à l'article L.221-18 du Code de la consommation, le Client particulier dispose 
                  d'un délai de <strong>14 jours</strong> à compter de la signature du devis pour exercer son 
                  droit de rétractation, sans avoir à justifier de motifs ni à payer de pénalités.
                </p>

                <div className="bg-accent-50 border-l-4 border-accent-500 p-4 rounded">
                  <p className="text-sm">
                    <strong>Exception :</strong> Si le Client demande expressément l'exécution des prestations 
                    avant la fin du délai de rétractation, il ne pourra plus exercer ce droit une fois les 
                    travaux commencés (article L.221-28 du Code de la consommation).
                  </p>
                </div>

                <p>
                  Pour exercer ce droit, le Client doit notifier sa décision de rétractation par :
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Courrier recommandé avec accusé de réception</li>
                  <li>Email à : <a href="mailto:climatserv17.contact@gmail.com" className="text-primary-600 hover:underline">climatserv17.contact@gmail.com</a></li>
                </ul>

                <p className="text-sm text-neutral-600 mt-4">
                  Note : Ce droit de rétractation ne s'applique pas aux clients professionnels.
                </p>
              </div>
            </div>

            {/* Article 8 - Responsabilité */}
            <div className="card">
              <div className="flex items-start gap-4 mb-6">
                <Scale className="w-8 h-8 text-primary-500 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-primary-800 mb-2">
                    Article 8 - Responsabilité et force majeure
                  </h2>
                  <div className="h-1 w-20 bg-accent-500 rounded"></div>
                </div>
              </div>
              
              <div className="space-y-4 text-neutral-700 leading-relaxed">
                <div>
                  <h3 className="text-xl font-semibold text-primary-700 mb-3">8.1 - Responsabilité</h3>
                  <p>
                    ClimatServ17 est responsable de la bonne exécution des prestations conformément aux règles 
                    de l'art et aux normes en vigueur. Notre responsabilité est limitée au montant de la 
                    prestation facturée, sauf en cas de dommages corporels.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-primary-700 mb-3">8.2 - Force majeure</h3>
                  <p>
                    ClimatServ17 ne pourra être tenu responsable de l'inexécution de ses obligations en cas de 
                    force majeure telle que définie par la jurisprudence française (catastrophes naturelles, 
                    incendie, inondations, grève générale, pandémie, etc.).
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-primary-700 mb-3">8.3 - Assurances</h3>
                  <p>
                    Le Client doit souscrire et maintenir à jour une assurance habitation couvrant les dommages 
                    pouvant survenir lors des interventions. ClimatServ17 dispose d'une assurance responsabilité 
                    civile professionnelle et décennale.
                  </p>
                </div>
              </div>
            </div>

            {/* Article 9 - Résiliation */}
            <div className="card">
              <h2 className="text-2xl font-bold text-primary-800 mb-6">
                Article 9 - Résiliation et annulation
              </h2>
              
              <div className="space-y-4 text-neutral-700 leading-relaxed">
                <div>
                  <h3 className="text-xl font-semibold text-primary-700 mb-3">9.1 - Annulation par le Client</h3>
                  <p>
                    Toute annulation doit être notifiée par écrit (courrier recommandé ou email). 
                    Les modalités suivantes s'appliquent :
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                    <li>Annulation dans les 14 jours : remboursement intégral (droit de rétractation)</li>
                    <li>Annulation après 14 jours et avant livraison du matériel : retenue de 20% pour frais de dossier</li>
                    <li>Annulation après livraison du matériel : retenue de 50% (matériel commandé et immobilisé)</li>
                    <li>Annulation après début des travaux : facturation du temps passé et du matériel installé</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-primary-700 mb-3">9.2 - Annulation par le Prestataire</h3>
                  <p>
                    ClimatServ17 se réserve le droit d'annuler ou de suspendre une commande en cas de :
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                    <li>Non-paiement des acomptes dans les délais prévus</li>
                    <li>Impossibilité technique constatée après visite</li>
                    <li>Refus d'autorisation administrative</li>
                    <li>Fourniture d'informations inexactes par le Client</li>
                  </ul>
                  <p className="mt-2">
                    Dans ce cas, le Client sera remboursé des sommes déjà versées, déduction faite des frais 
                    réellement engagés.
                  </p>
                </div>
              </div>
            </div>

            {/* Article 10 - Propriété intellectuelle */}
            <div className="card">
              <h2 className="text-2xl font-bold text-primary-800 mb-6">
                Article 10 - Propriété intellectuelle
              </h2>
              
              <div className="space-y-4 text-neutral-700 leading-relaxed">
                <p>
                  Tous les documents fournis par ClimatServ17 (devis, études, plans, notices) restent la 
                  propriété intellectuelle de ClimatServ17 et ne peuvent être reproduits ou communiqués à 
                  des tiers sans autorisation expresse.
                </p>
              </div>
            </div>

            {/* Article 11 - Données personnelles */}
            <div className="card">
              <h2 className="text-2xl font-bold text-primary-800 mb-6">
                Article 11 - Protection des données personnelles
              </h2>
              
              <div className="space-y-4 text-neutral-700 leading-relaxed">
                <p>
                  Les données personnelles collectées dans le cadre de nos prestations font l'objet d'un 
                  traitement informatique conforme au RGPD. Pour plus d'informations, consultez notre{' '}
                  <Link href="/politique-confidentialite" className="text-primary-600 hover:underline font-semibold">
                    Politique de confidentialité
                  </Link>.
                </p>
              </div>
            </div>

            {/* Article 12 - Litiges */}
            <div className="card">
              <h2 className="text-2xl font-bold text-primary-800 mb-6">
                Article 12 - Litiges et médiation
              </h2>
              
              <div className="space-y-4 text-neutral-700 leading-relaxed">
                <div>
                  <h3 className="text-xl font-semibold text-primary-700 mb-3">12.1 - Règlement amiable</h3>
                  <p>
                    En cas de litige, le Client est invité à contacter en priorité notre service client pour 
                    trouver une solution amiable :
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                    <li>Email : <a href="mailto:climatserv17.contact@gmail.com" className="text-primary-600 hover:underline">climatserv17.contact@gmail.com</a></li>
                    <li>Téléphone : <a href="tel:0546525330" className="text-primary-600 hover:underline">05 46 52 53 30</a></li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-primary-700 mb-3">12.2 - Médiation</h3>
                  <p>
                    Conformément à l'article L.612-1 du Code de la consommation, le Client consommateur a le 
                    droit de recourir gratuitement à un médiateur de la consommation en cas de litige non résolu.
                  </p>
                  <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4 mt-2 text-sm">
                    <p className="font-semibold mb-2">Médiateur de la consommation :</p>
                    <p>[Nom du médiateur à renseigner]</p>
                    <p>[Adresse]</p>
                    <p>[Site web]</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-primary-700 mb-3">12.3 - Juridiction compétente</h3>
                  <p>
                    À défaut de règlement amiable, tout litige relève de la compétence exclusive des tribunaux 
                    français et sera soumis aux tribunaux du ressort du siège social de ClimatServ17, sauf 
                    disposition légale contraire.
                  </p>
                </div>
              </div>
            </div>

            {/* Article 13 - Dispositions générales */}
            <div className="card">
              <h2 className="text-2xl font-bold text-primary-800 mb-6">
                Article 13 - Dispositions générales
              </h2>
              
              <div className="space-y-4 text-neutral-700 leading-relaxed">
                <p>
                  Si une ou plusieurs stipulations des présentes CGV sont tenues pour non valides ou déclarées 
                  comme telles en application d'une loi, d'un règlement ou à la suite d'une décision définitive 
                  d'une juridiction compétente, les autres stipulations garderont toute leur force et leur portée.
                </p>

                <p>
                  Le fait pour ClimatServ17 de ne pas se prévaloir temporairement d'une ou plusieurs dispositions 
                  des présentes CGV ne saurait valoir renonciation à s'en prévaloir ultérieurement.
                </p>

                <p>
                  Les présentes CGV sont soumises au droit français.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="card bg-primary-600 text-white">
              <h2 className="text-2xl font-bold mb-4">
                Questions sur nos conditions générales ?
              </h2>
              
              <p className="mb-6 text-primary-100">
                Notre équipe est à votre disposition pour toute question concernant nos conditions générales 
                de vente.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="mailto:climatserv17.contact@gmail.com"
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition-colors"
                >
                  Nous contacter
                </a>
                
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-800 transition-colors border border-primary-500"
                >
                  Demander un devis
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
