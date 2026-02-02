import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Début du seeding de la base de données...')

  // Créer des créneaux de disponibilité par défaut
  const availabilitySlots = [
    // Lundi
    { dayOfWeek: 1, startTime: '08:00', endTime: '12:00', isActive: true },
    { dayOfWeek: 1, startTime: '14:00', endTime: '18:00', isActive: true },
    // Mardi
    { dayOfWeek: 2, startTime: '08:00', endTime: '12:00', isActive: true },
    { dayOfWeek: 2, startTime: '14:00', endTime: '18:00', isActive: true },
    // Mercredi
    { dayOfWeek: 3, startTime: '08:00', endTime: '12:00', isActive: true },
    { dayOfWeek: 3, startTime: '14:00', endTime: '18:00', isActive: true },
    // Jeudi
    { dayOfWeek: 4, startTime: '08:00', endTime: '12:00', isActive: true },
    { dayOfWeek: 4, startTime: '14:00', endTime: '18:00', isActive: true },
    // Vendredi
    { dayOfWeek: 5, startTime: '08:00', endTime: '12:00', isActive: true },
    { dayOfWeek: 5, startTime: '14:00', endTime: '18:00', isActive: true },
    // Samedi
    { dayOfWeek: 6, startTime: '09:00', endTime: '12:00', isActive: true },
  ]

  for (const slot of availabilitySlots) {
    await prisma.availabilitySlot.create({
      data: slot,
    })
  }

  console.log('✅ Créneaux de disponibilité créés')

  // Configuration du système
  const systemConfigs = [
    { key: 'service_zone_center', value: '17000' },
    { key: 'service_zone_radius', value: '60' },
    { key: 'appointment_duration_default', value: '120' },
    { key: 'reminder_hours_before', value: '24' },
  ]

  for (const config of systemConfigs) {
    await prisma.systemConfig.create({
      data: config,
    })
  }

  console.log('✅ Configuration système créée')
  console.log('🎉 Seeding terminé !')
}

main()
  .catch((e) => {
    console.error('❌ Erreur lors du seeding:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
