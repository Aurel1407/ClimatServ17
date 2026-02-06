'use client'

import { useState, useEffect } from 'react'

interface ProtectedPhoneProps {
  encoded: string
  className?: string
  children?: React.ReactNode
}

interface ProtectedEmailProps {
  encoded: string
  className?: string
  children?: React.ReactNode
}

// Décodage Base64 côté client pour éviter le scraping par les bots
function decodeBase64(str: string): string {
  try {
    return atob(str)
  } catch {
    return ''
  }
}

export function ProtectedPhone({ encoded, className, children }: ProtectedPhoneProps) {
  const [phone, setPhone] = useState<string>('')
  
  useEffect(() => {
    // Décode le numéro encodé en Base64 côté client
    const decoded = decodeBase64(encoded)
    setPhone(decoded)
  }, [encoded])
  
  if (!phone) {
    return <span className={className}>{children || '...'}</span>
  }
  
  // Formate le numéro si c'est 10 chiffres
  const formatted = phone.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, '$1 $2 $3 $4 $5')
  
  return (
    <a href={`tel:${phone}`} className={className}>
      {children ? (
        <>
          {children}
          <span>{formatted}</span>
        </>
      ) : (
        formatted
      )}
    </a>
  )
}

export function ProtectedEmail({ encoded, className, children }: ProtectedEmailProps) {
  const [email, setEmail] = useState<string>('')
  
  useEffect(() => {
    // Décode l'email encodé en Base64 côté client
    const decoded = decodeBase64(encoded)
    setEmail(decoded)
  }, [encoded])
  
  if (!email) {
    return <span className={className}>{children || '...'}</span>
  }
  
  return (
    <a href={`mailto:${email}`} className={className}>
      {children ? (
        <>
          {children}
          <span>{email}</span>
        </>
      ) : (
        email
      )}
    </a>
  )
}
