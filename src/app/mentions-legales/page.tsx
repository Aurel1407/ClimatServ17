import { Metadata } from 'next';
import { Building2, Mail, Phone, Shield, Server, User } from 'lucide-react';
import { ProtectedPhone, ProtectedEmail } from '@/components/ui/ProtectedContact'
import { ENCODED_CONTACTS } from '@/lib/encoded-contacts'

export const metadata: Metadata = {
  title: 'Mentions Légales | ClimatServ17',
  description: 'Mentions légales de ClimatServ17, spécialiste en pompes à chaleur, climatisation et solutions thermiques à La Rochelle et en Charente-Maritime.',
};

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Shield className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Mentions Légales
            </h1>
            <p className="text-lg md:text-xl text-primary-100">
              Informations légales et réglementaires
            </p>
          </div>
        </div>
      </section>

      {/* Contenu */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Éditeur du site */}
            <div className="card">
              <div className="flex items-start gap-4 mb-6">
                <Building2 className="w-8 h-8 text-primary-500 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-primary-800 mb-2">
                    Éditeur du site
                  </h2>
                  <div className="h-1 w-20 bg-accent-500 rounded"></div>
                </div>
              </div>
              
              <div className="space-y-4 text-neutral-700">
                <div>
                  <p className="font-semibold text-primary-700">Raison sociale :</p>
                  <p>ClimatServ17</p>
                </div>
                
                <div>
                  <p className="font-semibold text-primary-700">Forme juridique :</p>
                  <p>Entreprise individuelle / Auto-entrepreneur</p>
                </div>
                
                <div>
                  <p className="font-semibold text-primary-700">Siège social :</p>
                  <p>29 rue du Levant</p>
                  <p>17220 Sainte-Soulle, France</p>
                </div>
                
                <div>
                  <p className="font-semibold text-primary-700">SIRET :</p>
                  <p>988 737 029 00013</p>
                </div>
                
                <div>
                  <p className="font-semibold text-primary-700">Code APE :</p>
                  <p>4322B - Travaux d'installation d'équipements thermiques et de climatisation</p>
                </div>
                
                <div>
                  <p className="font-semibold text-primary-700">N° TVA intracommunautaire :</p>
                  <p>FR XX XXX XXX XXX</p>
                </div>
                
                <div>
                  <p className="font-semibold text-primary-700">Assurance responsabilité civile professionnelle :</p>
                  <p>[Nom de la compagnie d'assurance]</p>
                  <p>Police n° [XXXXXXXX]</p>
                  <p className="text-sm text-neutral-500 mt-1">
                    Conforme à l'article L.241-1 du Code des assurances
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-primary-700">Qualifications :</p>
                  <p>RGE QualiPAC, QualiClim</p>
                  <p className="text-sm text-neutral-500 mt-1">
                    Certifications délivrées par Qualit'EnR
                  </p>
                </div>
              </div>
            </div>

            {/* Directeur de la publication */}
            <div className="card">
              <div className="flex items-start gap-4 mb-6">
                <User className="w-8 h-8 text-primary-500 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-primary-800 mb-2">
                    Directeur de la publication
                  </h2>
                  <div className="h-1 w-20 bg-accent-500 rounded"></div>
                </div>
              </div>
              
              <div className="space-y-4 text-neutral-700">
                <p>
                  <span className="font-semibold text-primary-700">Nom :</span> [Nom du dirigeant]
                </p>
                <p>
                  <span className="font-semibold text-primary-700">Fonction :</span> Gérant
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="card">
              <div className="flex items-start gap-4 mb-6">
                <Mail className="w-8 h-8 text-primary-500 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-primary-800 mb-2">
                    Nous contacter
                  </h2>
                  <div className="h-1 w-20 bg-accent-500 rounded"></div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-neutral-700">
                  <Phone className="w-5 h-5 text-accent-500" />
                  <div>
                    <p className="font-semibold text-primary-700">Téléphone :</p>
                    <ProtectedPhone encoded={ENCODED_CONTACTS.PHONE_MAIN} className="text-primary-600 hover:text-primary-700 hover:underline" />
                    <p className="text-sm text-neutral-600 mt-1">
                      Dépannage: <ProtectedPhone encoded={ENCODED_CONTACTS.PHONE_URGENCY} className="text-primary-600 hover:underline" />
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 text-neutral-700">
                  <Mail className="w-5 h-5 text-accent-500" />
                  <div>
                    <p className="font-semibold text-primary-700">Email :</p>
                    <ProtectedEmail encoded={ENCODED_CONTACTS.EMAIL_MAIN} className="text-primary-600 hover:text-primary-700 hover:underline" />
                  </div>
                </div>
              </div>
            </div>

            {/* Hébergement */}
            <div className="card">
              <div className="flex items-start gap-4 mb-6">
                <Server className="w-8 h-8 text-primary-500 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-primary-800 mb-2">
                    Hébergement du site
                  </h2>
                  <div className="h-1 w-20 bg-accent-500 rounded"></div>
                </div>
              </div>
              
              <div className="space-y-4 text-neutral-700">
                <div>
                  <p className="font-semibold text-primary-700">Hébergeur :</p>
                  <p>[À renseigner lors de la mise en production]</p>
                </div>
                
                <div>
                  <p className="font-semibold text-primary-700">Siège social :</p>
                  <p>[Adresse de l'hébergeur]</p>
                </div>
                
                <div>
                  <p className="font-semibold text-primary-700">Site web :</p>
                  <p className="text-neutral-500">[URL de l'hébergeur]</p>
                </div>
              </div>
            </div>

            {/* Propriété intellectuelle */}
            <div className="card">
              <h2 className="text-2xl font-bold text-primary-800 mb-6">
                Propriété intellectuelle
              </h2>
              
              <div className="space-y-4 text-neutral-700 leading-relaxed">
                <p>
                  L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur 
                  et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les 
                  documents téléchargeables et les représentations iconographiques et photographiques.
                </p>
                
                <p>
                  La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est 
                  formellement interdite sauf autorisation expresse du directeur de la publication.
                </p>
                
                <p>
                  Les marques et logos présents sur le site sont des marques déposées par ClimatServ17 ou des 
                  marques de tiers. Toute reproduction totale ou partielle de ces marques sans autorisation 
                  préalable et écrite est prohibée.
                </p>
              </div>
            </div>

            {/* Protection des données */}
            <div className="card">
              <h2 className="text-2xl font-bold text-primary-800 mb-6">
                Protection des données personnelles
              </h2>
              
              <div className="space-y-4 text-neutral-700 leading-relaxed">
                <p>
                  Conformément à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée et au Règlement 
                  Général sur la Protection des Données (RGPD) du 27 avril 2016, vous disposez d'un droit d'accès, 
                  de rectification, de suppression et d'opposition aux données personnelles vous concernant.
                </p>
                
                <p>
                  Pour exercer ces droits ou pour toute question sur le traitement de vos données, vous pouvez 
                  nous contacter :
                </p>
                
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Par email : <ProtectedEmail encoded={ENCODED_CONTACTS.EMAIL_MAIN} className="text-primary-600 hover:underline" /></li>
                  <li>Par courrier : ClimatServ17, 29 rue du Levant, 17220 Sainte-Soulle</li>
                </ul>
                
                <p>
                  Pour plus d'informations sur notre politique de confidentialité, consultez notre{' '}
                  <a href="/politique-confidentialite" className="text-primary-600 hover:underline font-semibold">
                    Politique de confidentialité
                  </a>.
                </p>
              </div>
            </div>

            {/* Cookies */}
            <div className="card">
              <h2 className="text-2xl font-bold text-primary-800 mb-6">
                Cookies
              </h2>
              
              <div className="space-y-4 text-neutral-700 leading-relaxed">
                <p>
                  Le site ClimatServ17 utilise des cookies pour améliorer l'expérience utilisateur et réaliser 
                  des statistiques de visite. Les cookies sont de petits fichiers texte stockés sur votre appareil 
                  lors de la consultation de notre site.
                </p>
                
                <p>
                  Vous pouvez à tout moment modifier vos préférences en matière de cookies via les paramètres 
                  de votre navigateur. Le refus de cookies peut entraîner une limitation de certaines fonctionnalités 
                  du site.
                </p>
                
                <p className="text-sm text-neutral-600">
                  Pour en savoir plus : <a href="https://www.cnil.fr/fr/cookies-les-outils-pour-les-maitriser" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-primary-600 hover:underline">
                    Site de la CNIL
                  </a>
                </p>
              </div>
            </div>

            {/* Responsabilité */}
            <div className="card">
              <h2 className="text-2xl font-bold text-primary-800 mb-6">
                Limitation de responsabilité
              </h2>
              
              <div className="space-y-4 text-neutral-700 leading-relaxed">
                <p>
                  Les informations contenues sur ce site sont aussi précises que possible et le site est 
                  périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des omissions 
                  ou des lacunes.
                </p>
                
                <p>
                  ClimatServ17 ne pourra être tenue responsable des dommages directs et indirects causés au 
                  matériel de l'utilisateur, lors de l'accès au site, et résultant soit de l'utilisation d'un 
                  matériel ne répondant pas aux spécifications indiquées, soit de l'apparition d'un bug ou 
                  d'une incompatibilité.
                </p>
                
                <p>
                  ClimatServ17 ne pourra également être tenue responsable des dommages indirects (tels que 
                  par exemple une perte de marché ou perte d'une chance) consécutifs à l'utilisation du site.
                </p>
              </div>
            </div>

            {/* Liens hypertextes */}
            <div className="card">
              <h2 className="text-2xl font-bold text-primary-800 mb-6">
                Liens hypertextes
              </h2>
              
              <div className="space-y-4 text-neutral-700 leading-relaxed">
                <p>
                  Le site ClimatServ17 peut contenir des liens hypertextes vers d'autres sites. Nous n'avons 
                  aucun contrôle sur ces sites et déclinons toute responsabilité quant à leur contenu.
                </p>
                
                <p>
                  La création de liens hypertextes vers le site ClimatServ17 nécessite une autorisation préalable. 
                  Pour toute demande, veuillez nous contacter à l'adresse{' '}
                  <ProtectedEmail encoded={ENCODED_CONTACTS.EMAIL_MAIN} className="text-primary-600 hover:underline" />.
                </p>
              </div>
            </div>

            {/* Droit applicable */}
            <div className="card">
              <h2 className="text-2xl font-bold text-primary-800 mb-6">
                Droit applicable et juridiction compétente
              </h2>
              
              <div className="space-y-4 text-neutral-700 leading-relaxed">
                <p>
                  Les présentes mentions légales sont régies par le droit français. En cas de litige et à défaut 
                  d'accord amiable, le litige sera porté devant les tribunaux français conformément aux règles 
                  de compétence en vigueur.
                </p>
              </div>
            </div>

            {/* Mise à jour */}
            <div className="bg-neutral-100 border border-neutral-200 rounded-lg p-6">
              <p className="text-sm text-neutral-600 text-center">
                <strong>Dernière mise à jour :</strong> 3 février 2026
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
