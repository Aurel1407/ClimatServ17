import Link from 'next/link';
import { Home, Search, Phone, ArrowLeft } from 'lucide-react';
import { ProtectedPhone } from '@/components/ui/ProtectedContact'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Illustration 404 */}
        <div className="mb-8">
          <div className="text-9xl font-bold text-primary-500 mb-4">404</div>
          <div className="text-6xl mb-6">🔍</div>
        </div>

        {/* Message */}
        <h1 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
          Page introuvable
        </h1>
        <p className="text-lg text-neutral-600 mb-2">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <p className="text-md text-primary-600 italic mb-8">
          Comme une pompe à chaleur sans fluide frigorigène... elle reste introuvable !
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link 
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-primary-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors"
          >
            <Home className="w-5 h-5" />
            Retour à l'accueil
          </Link>
          
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold border-2 border-primary-500 hover:bg-primary-50 transition-colors"
          >
            <Phone className="w-5 h-5" />
            Nous contacter
          </Link>
        </div>

        {/* Liens utiles */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-primary-800 mb-4 flex items-center justify-center gap-2">
            <Search className="w-5 h-5" />
            Pages populaires
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-3 text-left">
            <Link 
              href="/services/pompes-a-chaleur"
              className="flex items-center gap-2 text-primary-600 hover:text-primary-700 hover:underline p-2 rounded hover:bg-primary-50 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Pompes à chaleur
            </Link>
            
            <Link 
              href="/services/climatisations"
              className="flex items-center gap-2 text-primary-600 hover:text-primary-700 hover:underline p-2 rounded hover:bg-primary-50 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Climatisations
            </Link>
            
            <Link 
              href="/services/entretien"
              className="flex items-center gap-2 text-primary-600 hover:text-primary-700 hover:underline p-2 rounded hover:bg-primary-50 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Entretien
            </Link>
            
            <Link 
              href="/services/depannage"
              className="flex items-center gap-2 text-primary-600 hover:text-primary-700 hover:underline p-2 rounded hover:bg-primary-50 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Dépannage
            </Link>
            
            <Link 
              href="/maintenance-sav"
              className="flex items-center gap-2 text-primary-600 hover:text-primary-700 hover:underline p-2 rounded hover:bg-primary-50 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Prendre rendez-vous
            </Link>
            
            <Link 
              href="/espace-client"
              className="flex items-center gap-2 text-primary-600 hover:text-primary-700 hover:underline p-2 rounded hover:bg-primary-50 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Espace client
            </Link>
          </div>
        </div>

        {/* Contact urgence */}
        <div className="mt-8 p-4 bg-accent-50 border border-accent-200 rounded-lg">
          <p className="text-sm text-neutral-700">
            <strong>Besoin d'aide ?</strong> Appelez-nous au{' '}
            <ProtectedPhone 
              encoded="MDU0NjUyNTMzMA=="
              className="text-primary-600 hover:underline font-semibold"
            />
            {' '}ou pour une urgence :{' '}
            <ProtectedPhone 
              encoded="MDY4ODUwMzExMg=="
              className="text-accent-600 hover:underline font-semibold"
            />
          </p>
        </div>
      </div>
    </div>
  );
}
