import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { appointmentSchema } from '@/lib/validations'
import { isInServiceZone } from '@/lib/utils'

/**
 * POST /api/appointments
 * Créer un nouveau rendez-vous
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validation
    const validation = appointmentSchema.safeParse(body)
    if (!validation.success) {
      return NextResponse.json(
        { error: 'Données invalides', details: validation.error.issues },
        { status: 400 }
      )
    }
    
    const data = validation.data
    
    // Vérifier la zone de service
    if (!isInServiceZone(data.postalCode)) {
      return NextResponse.json(
        { error: 'Code postal en dehors de notre zone d\'intervention' },
        { status: 400 }
      )
    }
    
    // Vérifier ou créer l'utilisateur
    let user = await prisma.user.findUnique({
      where: { email: data.email }
    })
    
    if (!user) {
      user = await prisma.user.create({
        data: {
          email: data.email,
          firstName: data.firstName,
          lastName: data.lastName,
          phone: data.phone,
          postalCode: data.postalCode,
          address: data.address,
          city: data.city,
        }
      })
    }
    
    // Créer le rendez-vous
    const appointment = await prisma.appointment.create({
      data: {
        userId: user.id,
        serviceType: data.serviceType as any,
        appointmentDate: new Date(data.appointmentDate),
        postalCode: data.postalCode,
        address: data.address,
        city: data.city,
        description: data.description,
        status: 'PENDING',
      }
    })
    
    // TODO: Envoyer email de confirmation
    // TODO: Créer événement dans Google Calendar
    
    return NextResponse.json({
      message: 'Rendez-vous créé avec succès',
      appointment: {
        id: appointment.id,
        date: appointment.appointmentDate,
        type: appointment.serviceType,
      }
    }, { status: 201 })
    
  } catch (error) {
    console.error('Erreur création rendez-vous:', error)
    return NextResponse.json(
      { error: 'Erreur lors de la création du rendez-vous' },
      { status: 500 }
    )
  }
}

/**
 * GET /api/appointments?userId=xxx
 * Récupérer les rendez-vous d'un utilisateur
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const userId = searchParams.get('userId')
    
    if (!userId) {
      return NextResponse.json(
        { error: 'userId requis' },
        { status: 400 }
      )
    }
    
    const appointments = await prisma.appointment.findMany({
      where: { userId },
      orderBy: { appointmentDate: 'desc' }
    })
    
    return NextResponse.json({ appointments })
    
  } catch (error) {
    console.error('Erreur récupération rendez-vous:', error)
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des rendez-vous' },
      { status: 500 }
    )
  }
}
