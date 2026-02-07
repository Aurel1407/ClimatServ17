import '@/app/globals.css'
import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import { cn } from '@/lib/utils'
import Header from '@/components/layouts/Header'
import Footer from '@/components/layouts/Footer'
import "leaflet/dist/leaflet.css"

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
  manifest: '/manifest.json',
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
  icons: {
    icon: [
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "ClimatServ17",
    "image": "https://climatserv17.fr/images/logo.png",
    "@id": "https://climatserv17.fr",
    "url": "https://climatserv17.fr",
    "telephone": "+33546525330",
    "priceRange": "€€",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "La Rochelle",
      "addressLocality": "La Rochelle",
      "postalCode": "17000",
      "addressRegion": "Nouvelle-Aquitaine",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 46.1591126,
      "longitude": -1.1520434
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "08:00",
        "closes": "18:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/climatserv17"
    ],
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 46.1591126,
        "longitude": -1.1520434
      },
      "geoRadius": "60000"
    },
    "description": "Installation, entretien et dépannage de climatisation, pompes à chaleur, ballons thermodynamiques et adoucisseurs d'eau à La Rochelle et dans un rayon de 60km."
  }

  return (
    <html lang="fr" className={cn(inter.variable, montserrat.variable)}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-neutral-50 text-primary-800">
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent-500 focus:text-white focus:rounded"
        >
          Aller au contenu principal
        </a>
        <Header />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
