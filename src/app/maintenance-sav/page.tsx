export default function MaintenanceSAVPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="container-custom py-12">
        <h1 className="text-center mb-6">Prendre Rendez-vous</h1>
        
        <p className="text-center text-lg text-neutral-600 mb-8 max-w-3xl mx-auto">
          Remplissez le formulaire ci-dessous pour demander un devis, planifier un entretien ou une intervention.
        </p>
        
        {/* Intégration de l'application métier Inter-Fast */}
        <div className="w-full max-w-7xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <iframe
              src="https://app.inter-fast.fr/public/company/CFDE06/request/forms/0cd33418-e66f-4ce4-a813-93fafb87d02f"
              className="w-full border-0"
              style={{ minHeight: '1200px', height: '100vh' }}
              title="Formulaire de prise de rendez-vous"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  )
}