'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

type ServiceType = 'installation' | 'entretien' | 'depannage' | null

export default function MaintenanceSAVPage() {
  const router = useRouter()
  const [selectedService, setSelectedService] = useState<ServiceType>(null)
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    adresse: '',
    codePostal: '',
    ville: '',
    datePreferee: '',
    heurePreferee: '',
    typeEquipement: '',
    marque: '',
    modele: '',
    anneeInstallation: '',
    description: '',
    urgence: false
  })

  const handleServiceClick = (service: ServiceType) => {
    // Rediriger vers la page dépannage si c'est le service sélectionné
    if (service === 'depannage') {
      router.push('/services/depannage')
      return
    }
    
    setSelectedService(service)
    // Réinitialiser le formulaire lors du changement de service
    setFormData({
      nom: '',
      prenom: '',
      email: '',
      telephone: '',
      adresse: '',
      codePostal: '',
      ville: '',
      datePreferee: '',
      heurePreferee: '',
      typeEquipement: '',
      marque: '',
      modele: '',
      anneeInstallation: '',
      description: '',
      urgence: false
    })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Données du formulaire:', { service: selectedService, ...formData })
    alert('Demande de rendez-vous envoyée ! Nous vous contacterons rapidement.')
  }

  const getServiceTitle = () => {
    if (selectedService === 'installation') {
      return 'Installation de nouveau matériel'
    }
    if (selectedService === 'entretien') {
      return 'Entretien et maintenance annuelle'
    }
    if (selectedService === 'depannage') {
      return 'Dépannage et intervention rapide'
    }
    return ''
  }

  const getServiceButtonClass = (service: ServiceType) => {
    const baseClasses = 'p-6 rounded-lg text-center transition-all'
    const isSelected = selectedService === service
    const selectedClasses = 'bg-primary-500 text-white shadow-lg scale-105'
    const defaultClasses = 'bg-primary-50 hover:bg-primary-100'
    
    return `${baseClasses} ${isSelected ? selectedClasses : defaultClasses}`
  }

  const getServiceTitleClass = (service: ServiceType) => {
    const baseClass = 'text-lg font-semibold mb-2'
    return selectedService === service ? `${baseClass} text-white` : baseClass
  }

  const getDescriptionSectionTitle = () => {
    if (selectedService === 'depannage') {
      return 'Description de la panne'
    }
    if (selectedService === 'installation') {
      return 'Détails de votre projet'
    }
    return 'Informations complémentaires'
  }

  const getDescriptionPlaceholder = () => {
    if (selectedService === 'depannage') {
      return "Décrivez les symptômes (bruit anormal, fuite, pas de chauffage/froid, etc.)"
    }
    if (selectedService === 'installation') {
      return "Décrivez votre projet, surface à traiter, nombre de pièces, etc."
    }
    return "Remarques ou questions particulières"
  }

  const getDateSectionTitle = () => {
    if (selectedService === 'depannage') {
      return 'Disponibilités'
    }
    return 'Date souhaitée'
  }

  const shouldShowEquipmentInfo = () => {
    return selectedService === 'entretien'
  }

  const shouldShowInstallationProject = () => {
    return selectedService === 'installation'
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="container-custom py-12">
        <h1 className="text-center mb-12">Prendre Rendez-vous</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="card">
            <p className="text-center text-lg text-neutral-600 mb-8">
              Sélectionnez le type d'intervention souhaitée
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <button
                onClick={() => handleServiceClick('installation')}
                className={getServiceButtonClass('installation')}
              >
                <div className="text-4xl mb-3">🔧</div>
                <h3 className={getServiceTitleClass('installation')}>
                  Installation
                </h3>
                <p className="text-sm opacity-90">Nouveau matériel</p>
              </button>
              
              <button
                onClick={() => handleServiceClick('entretien')}
                className={getServiceButtonClass('entretien')}
              >
                <div className="text-4xl mb-3">⚙️</div>
                <h3 className={getServiceTitleClass('entretien')}>
                  Entretien
                </h3>
                <p className="text-sm opacity-90">Maintenance annuelle</p>
              </button>
              
              <button
                onClick={() => handleServiceClick('depannage')}
                className={getServiceButtonClass('depannage')}
              >
                <div className="text-4xl mb-3">🚨</div>
                <h3 className={getServiceTitleClass('depannage')}>
                  Dépannage
                </h3>
                <p className="text-sm opacity-90">Intervention rapide</p>
              </button>
            </div>

            {selectedService && (
              <div className="mt-8 border-t pt-8">
                <h2 className="text-2xl font-semibold mb-6 text-primary-600">
                  {getServiceTitle()}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Informations personnelles */}
                  <div className="bg-neutral-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">Vos informations</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="nom" className="block text-sm font-medium mb-1">
                          Nom *
                        </label>
                        <input
                          id="nom"
                          type="text"
                          name="nom"
                          required
                          value={formData.nom}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="prenom" className="block text-sm font-medium mb-1">
                          Prénom *
                        </label>
                        <input
                          id="prenom"
                          type="text"
                          name="prenom"
                          required
                          value={formData.prenom}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">
                          Email *
                        </label>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="telephone" className="block text-sm font-medium mb-1">
                          Téléphone *
                        </label>
                        <input
                          id="telephone"
                          type="tel"
                          name="telephone"
                          required
                          value={formData.telephone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Adresse d'intervention */}
                  <div className="bg-neutral-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">Adresse d'intervention</h3>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="adresse" className="block text-sm font-medium mb-1">
                          Adresse *
                        </label>
                        <input
                          id="adresse"
                          type="text"
                          name="adresse"
                          required
                          value={formData.adresse}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="codePostal" className="block text-sm font-medium mb-1">
                            Code postal *
                          </label>
                          <input
                            id="codePostal"
                            type="text"
                            name="codePostal"
                            required
                            value={formData.codePostal}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label htmlFor="ville" className="block text-sm font-medium mb-1">
                            Ville *
                          </label>
                          <input
                            id="ville"
                            type="text"
                            name="ville"
                            required
                            value={formData.ville}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Date et heure */}
                  <div className="bg-neutral-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">
                      {getDateSectionTitle()}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="datePreferee" className="block text-sm font-medium mb-1">
                          Date préférée *
                        </label>
                        <input
                          id="datePreferee"
                          type="date"
                          name="datePreferee"
                          required
                          value={formData.datePreferee}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="heurePreferee" className="block text-sm font-medium mb-1">
                          Créneau horaire *
                        </label>
                        <select
                          id="heurePreferee"
                          name="heurePreferee"
                          required
                          value={formData.heurePreferee}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        >
                          <option value="">Sélectionner</option>
                          <option value="matin">Matin (8h-12h)</option>
                          <option value="apres-midi">Après-midi (14h-18h)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Informations sur l'équipement - visible pour entretien et dépannage */}
                  {shouldShowEquipmentInfo() && (
                    <div className="bg-neutral-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold mb-4">Votre équipement</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="typeEquipement" className="block text-sm font-medium mb-1">
                            Type d'équipement *
                          </label>
                          <select
                            id="typeEquipement"
                            name="typeEquipement"
                            required
                            value={formData.typeEquipement}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          >
                            <option value="">Sélectionner</option>
                            <option value="climatisation">Climatisation</option>
                            <option value="pac-air-air">Pompe à chaleur Air/Air</option>
                            <option value="pac-air-eau">Pompe à chaleur Air/Eau</option>
                            <option value="chauffage">Système de chauffage</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="marque" className="block text-sm font-medium mb-1">
                            Marque
                          </label>
                          <input
                            id="marque"
                            type="text"
                            name="marque"
                            value={formData.marque}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label htmlFor="modele" className="block text-sm font-medium mb-1">
                            Modèle
                          </label>
                          <input
                            id="modele"
                            type="text"
                            name="modele"
                            value={formData.modele}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label htmlFor="anneeInstallation" className="block text-sm font-medium mb-1">
                            Année d'installation
                          </label>
                          <input
                            id="anneeInstallation"
                            type="text"
                            name="anneeInstallation"
                            value={formData.anneeInstallation}
                            onChange={handleInputChange}
                            placeholder="Ex: 2020"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Projet d'installation */}
                  {shouldShowInstallationProject() && (
                    <div className="bg-neutral-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold mb-4">Votre projet</h3>
                      <div>
                        <label htmlFor="typeEquipementInstallation" className="block text-sm font-medium mb-1">
                          Type d'installation souhaitée *
                        </label>
                        <select
                          id="typeEquipementInstallation"
                          name="typeEquipement"
                          required
                          value={formData.typeEquipement}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        >
                          <option value="">Sélectionner</option>
                          <option value="climatisation">Climatisation</option>
                          <option value="pac-air-air">Pompe à chaleur Air/Air</option>
                          <option value="pac-air-eau">Pompe à chaleur Air/Eau</option>
                          <option value="chauffage">Système de chauffage</option>
                        </select>
                      </div>
                    </div>
                  )}

                  {/* Description */}
                  <div className="bg-neutral-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">
                      {getDescriptionSectionTitle()}
                    </h3>
                    <label htmlFor="description" className="sr-only">
                      {getDescriptionSectionTitle()}
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder={getDescriptionPlaceholder()}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>

                  {/* Bouton de soumission */}
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setSelectedService(null)}
                      className="px-6 py-3 border border-neutral-300 rounded-lg hover:bg-neutral-100 transition-colors"
                    >
                      Retour
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors font-semibold"
                    >
                      Envoyer la demande de rendez-vous
                    </button>
                  </div>
                </form>
              </div>
            )}
            
            <div className="bg-accent-50 border-l-4 border-accent-500 p-4 rounded mt-8">
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