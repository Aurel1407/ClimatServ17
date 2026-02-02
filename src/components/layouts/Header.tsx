import Link from 'next/link'
import Image from 'next/image'
import { Phone, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image 
              src="/images/logo.png" 
              alt="ClimatServ17" 
              width={180} 
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>
          
          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-primary-700 hover:text-accent-500 font-medium transition-colors">
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
          <div className="hidden md:flex items-center gap-3">
            <a 
              href="tel:0546525330" 
              className="flex items-center gap-2 text-primary-700 hover:text-accent-500 font-semibold transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>05 46 52 53 30</span>
            </a>
            <Link href="/maintenance-sav" className="btn btn-primary">
              Prendre RDV
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden text-primary-700">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  )
}
