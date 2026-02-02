export type ServiceType = 'INSTALLATION' | 'ENTRETIEN' | 'DEPANNAGE'

export type AppointmentStatus = 'PENDING' | 'CONFIRMED' | 'CANCELLED' | 'COMPLETED'

export type DocumentType = 'FACTURE' | 'DEVIS' | 'ATTESTATION_ENTRETIEN' | 'RAPPORT_INTERVENTION' | 'GARANTIE'

export interface User {
  id: string
  email: string
  firstName?: string
  lastName?: string
  phone?: string
  address?: string
  postalCode?: string
  city?: string
  createdAt: Date
  updatedAt: Date
}

export interface Appointment {
  id: string
  userId: string
  serviceType: ServiceType
  description?: string
  appointmentDate: Date
  duration: number
  status: AppointmentStatus
  postalCode: string
  address: string
  city: string
  notes?: string
  googleEventId?: string
  outlookEventId?: string
  reminderSentAt?: Date
  createdAt: Date
  updatedAt: Date
}

export interface Document {
  id: string
  userId: string
  type: DocumentType
  title: string
  description?: string
  fileName: string
  filePath: string
  fileSize: number
  mimeType: string
  year?: number
  uploadedBy: string
  createdAt: Date
  updatedAt: Date
}

export interface AvailabilitySlot {
  id: string
  dayOfWeek: number
  startTime: string
  endTime: string
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

export interface BlockedDate {
  id: string
  date: Date
  reason?: string
  createdAt: Date
}
