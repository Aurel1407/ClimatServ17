import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-primary-500 text-white" role="contentinfo">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <div className="bg-white p-3 rounded-lg inline-block mb-4">
              <Image 
                src="/images/logo.png" 
                alt="ClimatServ17" 
                width={150} 
                height={50}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-primary-100 text-sm">
              Expert en climatisation, pompes à chaleur et adoucisseurs d'eau à La Rochelle.
            </p>
          </div>
          
          {/* Navigation */}
          <div>
            <h4 className="font-bold text-white mb-4">Navigation</h4>
            <nav aria-label="Navigation du pied de page">
              <ul className="space-y-2 text-primary-100">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/maintenance-sav" className="hover:text-white transition-colors">
                  Prendre RDV
                </Link>
              </li>
              <li>
                <Link href="/espace-client" className="hover:text-white transition-colors">
                  Espace Client
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/accessibilite" className="hover:text-white transition-colors">
                  Accessibilité
                </Link>
              </li>
            </ul>
            </nav>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-4">Nos Services</h4>
            <ul className="space-y-2 text-primary-100">
              <li>Installation PAC</li>
              <li>Entretien Climatisation</li>
              <li>Dépannage</li>
              <li>Adoucisseur d'eau</li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-primary-100">
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:0546525330" className="hover:text-white transition-colors block">
                    05 46 52 53 30
                  </a>
                  <a href="tel:0688503112" className="text-xs hover:text-white transition-colors">
                    Dépannage: 06 88 50 31 12
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <a href="mailto:climatserv17.contact@gmail.com" className="hover:text-white transition-colors">
                  climatserv17.contact@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>La Rochelle, Charente-Maritime</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-primary-400 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
            <p className="text-primary-100 text-sm">
              © {currentYear} ClimatServ17. Tous droits réservés.
            </p>
            
            <div className="flex gap-4">
              <a href="#" className="text-primary-100 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-100 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm text-primary-100">
            <Link href="/mentions-legales" className="hover:text-white transition-colors">
              Mentions légales
            </Link>
            <span className="text-primary-300">•</span>
            <Link href="/politique-confidentialite" className="hover:text-white transition-colors">
              Politique de confidentialité
            </Link>
            <span className="text-primary-300">•</span>
            <Link href="/conditions-generales" className="hover:text-white transition-colors">
              Conditions générales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
