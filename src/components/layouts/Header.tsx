'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, Menu, X } from 'lucide-react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50" role="banner">
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3" aria-label="Retour à l'accueil">
            <Image 
              src="/images/logo.png" 
              alt="ClimatServ17 - Votre expert Confort & Énergie" 
              width={180} 
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>
          <span className="text-primary-600 hover:text-accent-500 text-2xl font-semibold flex-auto transition-colors left-0 font-heading">ClimatServ17</span>
          
          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center gap-6" role="navigation" aria-label="Navigation principale">
            <Link href="/" className="text-primary-700 hover:text-accent-500 font-medium transition-colors" aria-current="page">
              Accueil
            </Link>
            <Link href="/maintenance-sav" className="text-primary-700 hover:text-accent-500 font-medium transition-colors">
              Prendre RDV
            </Link>
            <Link href="/espace-client" className="text-primary-700 hover:text-accent-500 font-medium transition-colors">
              Espace Client
            </Link>
            <Link href="/contact" className="text-primary-700 hover:text-accent-500 font-medium transition-colors">
              Contact
            </Link>
          </nav>
          
          {/* CTA Desktop */}
          <div className="hidden md:flex items-center pl-6 gap-3">
            <a 
              href="tel:0546525330" 
              className="flex items-center gap-2 text-primary-700 hover:text-accent-500 font-semibold transition-colors"
              aria-label="Appeler le 05 46 52 53 30"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              <span>05 46 52 53 30</span>
            </a>
            <Link href="/maintenance-sav" className="btn btn-primary">
              Prendre RDV
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-primary-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav 
            id="mobile-menu"
            className="md:hidden py-4 border-t border-neutral-200" 
            role="navigation" 
            aria-label="Navigation mobile"
          >
            <div className="flex flex-col gap-4">
              <Link 
                href="/" 
                className="text-primary-700 hover:text-accent-500 font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link 
                href="/maintenance-sav" 
                className="text-primary-700 hover:text-accent-500 font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Prendre RDV
              </Link>
              <Link 
                href="/espace-client" 
                className="text-primary-700 hover:text-accent-500 font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Espace Client
              </Link>
              <Link 
                href="/contact" 
                className="text-primary-700 hover:text-accent-500 font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <a 
                href="tel:0546525330" 
                className="flex items-center gap-2 text-primary-700 hover:text-accent-500 font-semibold transition-colors"
                aria-label="Appeler le 05 46 52 53 30"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                <span>05 46 52 53 30</span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
