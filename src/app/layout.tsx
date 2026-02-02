import '@/app/globals.css'
import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import { cn } from '@/lib/utils'
import Header from '@/components/layouts/Header'
import Footer from '@/components/layouts/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'ClimatServ17 - Expert en Climatisation, PAC et Adoucisseur | La Rochelle',
    template: '%s | ClimatServ17'
  },
  description: 'Installation, entretien et dépannage de climatisation, pompes à chaleur et adoucisseurs d\'eau à La Rochelle et dans un rayon de 60km. Service professionnel et rapide.',
  keywords: ['climatisation', 'pompe à chaleur', 'PAC', 'adoucisseur', 'La Rochelle', 'Charente-Maritime', 'installation', 'entretien', 'dépannage'],
  authors: [{ name: 'ClimatServ17' }],
  creator: 'ClimatServ17',
  publisher: 'ClimatServ17',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://climatserv17.fr',
    siteName: 'ClimatServ17',
    title: 'ClimatServ17 - Expert en Climatisation et PAC',
    description: 'Professionnel de la climatisation à La Rochelle',
  },
  verification: {
    google: 'votre-code-google-search-console',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={cn(inter.variable, montserrat.variable)}>
      <body className="font-sans antialiased bg-neutral-50 text-primary-800">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
