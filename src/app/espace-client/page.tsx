import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Espace Client - Mes Documents',
  description: 'Accédez à vos factures, devis et attestations d\'entretien en ligne.',
}

export default function EspaceClientPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="container-custom py-12">
        <h1 className="text-center mb-12">Espace Client</h1>
        
        <div className="max-w-md mx-auto">
          <div className="card">
            <h2 className="text-2xl mb-6 text-center">Connexion</h2>
            
            <p className="text-center text-neutral-600 mb-6">
              Recevez un lien de connexion sécurisé par email
            </p>
            
            <div className="space-y-4">
              <div>
                <label className="label">Adresse email</label>
                <input 
                  type="email" 
                  className="input" 
                  placeholder="votre@email.fr"
                />
              </div>
              
              <button className="btn btn-primary w-full">
                Envoyer le lien de connexion
              </button>
            </div>
            
            <div className="mt-6 p-4 bg-primary-50 rounded-lg">
              <p className="text-sm text-primary-800">
                <strong>Magic Link :</strong> Pas de mot de passe à retenir ! Vous recevrez un lien sécurisé valable 15 minutes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
