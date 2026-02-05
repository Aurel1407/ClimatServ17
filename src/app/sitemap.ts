import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://climatserv17.fr'
  
  // Pages principales
  const routes = [
    '',
    '/services/pompes-a-chaleur',
    '/services/climatisations',
    '/services/ballons-thermodynamiques',
    '/services/adoucisseurs',
    '/services/entretien',
    '/services/depannage',
    '/maintenance-sav',
    '/espace-client',
    '/contact',
    '/mentions-legales',
    '/politique-confidentialite',
    '/conditions-generales',
    '/accessibilite',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' as const : 'weekly' as const,
    priority: route === '' ? 1 : route.includes('/services/') ? 0.9 : 0.7,
  }))
  
  return routes
}
