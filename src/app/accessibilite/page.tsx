import { Metadata } from 'next'
import { ProtectedPhone, ProtectedEmail } from '@/components/ui/ProtectedContact'
import { ENCODED_CONTACTS } from '@/lib/encoded-contacts'

export const metadata: Metadata = {
  title: 'Accessibilité',
  description: 'Déclaration d\'accessibilité du site ClimatServ17',
}

export default function AccessibilitePage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="container-custom py-12">
        <h1 className="mb-8">Déclaration d'Accessibilité</h1>
        
        <div className="max-w-4xl">
          <section className="card mb-8">
            <h2 className="text-2xl mb-4">Engagement d'accessibilité</h2>
            <p className="text-neutral-700 mb-4">
              ClimatServ17 s'engage à rendre son site web accessible conformément à l'article 47 de la loi n° 2005-102 du 11 février 2005.
            </p>
            <p className="text-neutral-700">
              Cette déclaration d'accessibilité s'applique au site <strong>climatserv17.fr</strong>.
            </p>
          </section>

          <section className="card mb-8">
            <h2 className="text-2xl mb-4">État de conformité</h2>
            <p className="text-neutral-700">
              Le site est en conformité partielle avec le RGAA (Référentiel Général d'Amélioration de l'Accessibilité). 
              Les non-conformités et les dérogations sont énumérées ci-dessous.
            </p>
          </section>

          <section className="card mb-8">
            <h2 className="text-2xl mb-4">Fonctionnalités d'accessibilité</h2>
            <ul className="list-disc list-inside space-y-2 text-neutral-700">
              <li>Navigation au clavier optimisée</li>
              <li>Labels ARIA pour les lecteurs d'écran</li>
              <li>Contraste des couleurs conforme aux normes WCAG 2.1</li>
              <li>Structure sémantique HTML5</li>
              <li>Textes alternatifs sur les images</li>
              <li>Focus visible sur tous les éléments interactifs</li>
              <li>Formulaires accessibles avec messages d'erreur explicites</li>
            </ul>
          </section>

          <section className="card mb-8">
            <h2 className="text-2xl mb-4">Retour d'information et contact</h2>
            <p className="text-neutral-700 mb-4">
              Si vous rencontrez un problème d'accessibilité sur ce site, nous vous invitons à nous le signaler :
            </p>
            <ul className="space-y-2 text-neutral-700">
              <li>
                <strong>Email :</strong>{' '}
                <ProtectedEmail encoded={ENCODED_CONTACTS.EMAIL_MAIN} className="text-accent-500 hover:underline" />
              </li>
              <li>
                <strong>Téléphone :</strong>{' '}
                <ProtectedPhone encoded={ENCODED_CONTACTS.PHONE_MAIN} className="text-accent-500 hover:underline" />
              </li>
            </ul>
          </section>

          <section className="card">
            <h2 className="text-2xl mb-4">Technologies utilisées</h2>
            <ul className="list-disc list-inside space-y-2 text-neutral-700">
              <li>HTML5</li>
              <li>CSS3 (Tailwind CSS)</li>
              <li>JavaScript (React/Next.js)</li>
              <li>ARIA (Accessible Rich Internet Applications)</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
