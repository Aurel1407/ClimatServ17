import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { magicLinkSchema } from '@/lib/validations'
import { generateSecureToken } from '@/lib/utils'

/**
 * POST /api/auth/magic-link
 * Génère et envoie un magic link par email
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validation
    const validation = magicLinkSchema.safeParse(body)
    if (!validation.success) {
      return NextResponse.json(
        { error: 'Email invalide', details: validation.error.issues },
        { status: 400 }
      )
    }
    
    const { email } = validation.data
    
    // Vérifier ou créer l'utilisateur
    let user = await prisma.user.findUnique({
      where: { email }
    })
    
    if (!user) {
      user = await prisma.user.create({
        data: { email }
      })
    }
    
    // Générer un token unique
    const token = generateSecureToken(32)
    const expiresAt = new Date(Date.now() + 15 * 60 * 1000) // 15 minutes
    
    // Créer le magic link
    await prisma.magicLink.create({
      data: {
        token,
        userId: user.id,
        expiresAt,
      }
    })
    
    // TODO: Envoyer l'email avec nodemailer
    const magicLinkUrl = `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/verify?token=${token}`
    
    console.log('Magic Link généré:', magicLinkUrl)
    
    // En production, envoyer l'email ici
    // await sendMagicLinkEmail(email, magicLinkUrl)
    
    return NextResponse.json({
      message: 'Un lien de connexion a été envoyé à votre adresse email',
      success: true,
      // En dev uniquement
      ...(process.env.NODE_ENV === 'development' && { devLink: magicLinkUrl })
    })
    
  } catch (error) {
    console.error('Erreur génération magic link:', error)
    return NextResponse.json(
      { error: 'Erreur lors de la génération du lien de connexion' },
      { status: 500 }
    )
  }
}
