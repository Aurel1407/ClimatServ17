import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

/**
 * GET /api/auth/verify?token=xxx
 * Vérifie et consomme un magic link
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const token = searchParams.get('token')
    
    if (!token) {
      return NextResponse.redirect(new URL('/espace-client?error=token_missing', request.url))
    }
    
    // Récupérer le magic link
    const magicLink = await prisma.magicLink.findUnique({
      where: { token },
      include: { user: true }
    })
    
    if (!magicLink) {
      return NextResponse.redirect(new URL('/espace-client?error=invalid_token', request.url))
    }
    
    // Vérifier si déjà utilisé
    if (magicLink.usedAt) {
      return NextResponse.redirect(new URL('/espace-client?error=token_used', request.url))
    }
    
    // Vérifier l'expiration
    if (new Date() > magicLink.expiresAt) {
      return NextResponse.redirect(new URL('/espace-client?error=token_expired', request.url))
    }
    
    // Marquer le token comme utilisé
    await prisma.magicLink.update({
      where: { id: magicLink.id },
      data: { usedAt: new Date() }
    })
    
    // TODO: Créer une session (cookie JWT ou NextAuth)
    // Pour l'instant, redirection simple avec l'userId
    
    const response = NextResponse.redirect(new URL('/espace-client/dashboard', request.url))
    
    // Créer un cookie de session simplifié (à sécuriser en production)
    response.cookies.set('user_id', magicLink.userId, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 jours
    })
    
    return response
    
  } catch (error) {
    console.error('Erreur vérification magic link:', error)
    return NextResponse.redirect(new URL('/espace-client?error=server_error', request.url))
  }
}
