import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Maintenance & SAV - Prenez RDV',
  description: 'Réservez votre intervention en ligne : installation, entretien ou dépannage de climatisation et pompe à chaleur.',
}

export default function MaintenanceSAVPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="container-custom py-12">
        <h1 className="text-center mb-12">Prendre Rendez-vous</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="card">
            <p className="text-center text-lg text-neutral-600 mb-8">
              Formulaire de prise de rendez-vous à venir...
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="p-6 bg-primary-50 rounded-lg text-center">
                <div className="text-4xl mb-3">🔧</div>
                <h3 className="text-lg font-semibold mb-2">Installation</h3>
                <p className="text-sm text-neutral-600">Nouveau matériel</p>
              </div>
              
              <div className="p-6 bg-primary-50 rounded-lg text-center">
                <div className="text-4xl mb-3">⚙️</div>
                <h3 className="text-lg font-semibold mb-2">Entretien</h3>
                <p className="text-sm text-neutral-600">Maintenance annuelle</p>
              </div>
              
              <div className="p-6 bg-primary-50 rounded-lg text-center">
                <div className="text-4xl mb-3">🚨</div>
                <h3 className="text-lg font-semibold mb-2">Dépannage</h3>
                <p className="text-sm text-neutral-600">Intervention rapide</p>
              </div>
            </div>
            
            <div className="bg-accent-50 border-l-4 border-accent-500 p-4 rounded">
              <p className="text-sm text-accent-800">
                <strong>Zone de service :</strong> La Rochelle et 60km autour (17, 16, 79, 85)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
