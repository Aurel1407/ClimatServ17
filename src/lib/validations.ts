import { z } from 'zod'

/**
 * Validation du formulaire de prise de RDV
 */
export const appointmentSchema = z.object({
  serviceType: z.enum(['INSTALLATION', 'ENTRETIEN', 'DEPANNAGE'], {
    required_error: 'Veuillez sélectionner un type de service',
  }),
  firstName: z.string().min(2, 'Le prénom doit contenir au moins 2 caractères'),
  lastName: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Adresse email invalide'),
  phone: z.string().regex(/^[0-9]{10}$/, 'Numéro de téléphone invalide (10 chiffres)'),
  postalCode: z.string().regex(/^[0-9]{5}$/, 'Code postal invalide'),
  address: z.string().min(5, 'Adresse trop courte'),
  city: z.string().min(2, 'Ville invalide'),
  appointmentDate: z.string().min(1, 'Veuillez sélectionner une date'),
  description: z.string().optional(),
})

export type AppointmentFormData = z.infer<typeof appointmentSchema>

/**
 * Validation du formulaire de contact
 */
export const contactSchema = z.object({
  firstName: z.string().min(2, 'Le prénom doit contenir au moins 2 caractères'),
  lastName: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Adresse email invalide'),
  phone: z.string().regex(/^[0-9]{10}$/, 'Numéro de téléphone invalide (10 chiffres)').optional().or(z.literal('')),
  subject: z.string().min(3, 'Le sujet doit contenir au moins 3 caractères'),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
})

export type ContactFormData = z.infer<typeof contactSchema>

/**
 * Validation de l'authentification par email
 */
export const magicLinkSchema = z.object({
  email: z.string().email('Adresse email invalide'),
})

export type MagicLinkFormData = z.infer<typeof magicLinkSchema>

/**
 * Validation du code postal pour la zone de service
 */
export const postalCodeSchema = z.object({
  postalCode: z.string().regex(/^[0-9]{5}$/, 'Code postal invalide'),
})

export type PostalCodeFormData = z.infer<typeof postalCodeSchema>
