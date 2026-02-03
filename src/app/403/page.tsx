import { Metadata } from 'next';
import Link from 'next/link';
import { Home, ShieldAlert, Phone, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Accès interdit | ClimatServ17',
  description: 'Accès non autorisé à cette ressource.',
};

export default function ForbiddenPage() {
  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Illustration 403 */}
        <div className="mb-8">
          <div className="text-9xl font-bold text-accent-500 mb-4">403</div>
          <div className="text-6xl mb-6">🚫</div>
        </div>

        {/* Message */}
        <h1 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
          Accès interdit
        </h1>
        <p className="text-lg text-neutral-600 mb-8">
          Vous n'avez pas l'autorisation d'accéder à cette ressource.
        </p>

        {/* Informations */}
        <div className="bg-accent-50 border-l-4 border-accent-500 p-6 rounded mb-8 text-left">
          <div className="flex items-start gap-3">
            <ShieldAlert className="w-6 h-6 text-accent-600 flex-shrink-0 mt-1" />
            <div>
              <h2 className="font-semibold text-accent-800 mb-2">Pourquoi cette page ?</h2>
              <ul className="text-sm text-neutral-700 space-y-1">
                <li>• Vous n'êtes pas connecté à votre espace client</li>
                <li>• Votre session a expiré</li>
                <li>• Vous n'avez pas les droits d'accès nécessaires</li>
                <li>• Cette ressource est réservée aux administrateurs</li>
              </ul>
            </div>
          </div>
        </div>

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
            href="/espace-client"
            className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold border-2 border-primary-500 hover:bg-primary-50 transition-colors"
          >
            Se connecter
          </Link>
        </div>

        {/* Contact */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-primary-800 mb-4">
            Besoin d'aide ?
          </h2>
          
          <p className="text-neutral-600 mb-4 text-sm">
            Si vous pensez qu'il s'agit d'une erreur ou si vous avez besoin d'accéder à cette page,
            n'hésitez pas à nous contacter.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:0546525330"
              className="inline-flex items-center justify-center gap-2 text-primary-600 hover:text-primary-700 font-semibold"
            >
              <Phone className="w-5 h-5" />
              05 46 52 53 30
            </a>
            
            <a 
              href="mailto:climatserv17.contact@gmail.com"
              className="inline-flex items-center justify-center gap-2 text-primary-600 hover:text-primary-700 font-semibold"
            >
              <Mail className="w-5 h-5" />
              climatserv17.contact@gmail.com
            </a>
          </div>
        </div>

        {/* Note légale */}
        <p className="mt-8 text-xs text-neutral-500">
          Cette page est protégée pour garantir la sécurité et la confidentialité de vos données.
        </p>
      </div>
    </div>
  );
}
