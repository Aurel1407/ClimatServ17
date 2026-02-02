import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

/**
 * GET /api/documents?userId=xxx
 * Récupérer les documents d'un utilisateur
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
    
    const documents = await prisma.document.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' }
    })
    
    return NextResponse.json({ documents })
    
  } catch (error) {
    console.error('Erreur récupération documents:', error)
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des documents' },
      { status: 500 }
    )
  }
}

/**
 * POST /api/documents
 * Upload d'un document (back-office artisan)
 * TODO: Implémenter l'upload de fichiers
 */
export async function POST(request: NextRequest) {
  try {
    // TODO: Vérifier authentification admin
    // TODO: Gérer l'upload de fichier avec multipart/form-data
    
    return NextResponse.json(
      { message: 'Upload de documents à implémenter' },
      { status: 501 }
    )
    
  } catch (error) {
    console.error('Erreur upload document:', error)
    return NextResponse.json(
      { error: 'Erreur lors de l\'upload du document' },
      { status: 500 }
    )
  }
}
