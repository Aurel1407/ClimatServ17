import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Utilitaire pour fusionner les classes Tailwind
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Formater un numéro de téléphone français
 */
export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, '')
  if (cleaned.length === 10) {
    return cleaned.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, '$1 $2 $3 $4 $5')
  }
  return phone
}

/**
 * Valider un code postal français
 */
export function isValidPostalCode(postalCode: string): boolean {
  return /^[0-9]{5}$/.test(postalCode)
}

/**
 * Calculer la distance entre deux codes postaux (approximatif)
 * Pour une version production, utiliser une API de géolocalisation
 */
export function isInServiceZone(postalCode: string, centerCode: string = '17000', radiusKm: number = 60): boolean {
  // Validation basique pour la zone La Rochelle (17xxx)
  if (!isValidPostalCode(postalCode)) return false
  
  const code = parseInt(postalCode.substring(0, 2))
  const center = parseInt(centerCode.substring(0, 2))
  
  // Départements limitrophes autorisés : 17, 16, 79, 85
  const allowedDepartments = [16, 17, 79, 85]
  
  return allowedDepartments.includes(code)
}

/**
 * Générer un token aléatoire sécurisé
 */
export function generateSecureToken(length: number = 32): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let token = ''
  
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length)
    token += characters[randomIndex]
  }
  
  return token
}

/**
 * Formater une date au format français
 */
export function formatDateFr(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date
  return new Intl.DateTimeFormat('fr-FR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  }).format(d)
}

/**
 * Formater une date et heure au format français
 */
export function formatDateTimeFr(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date
  return new Intl.DateTimeFormat('fr-FR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(d)
}
