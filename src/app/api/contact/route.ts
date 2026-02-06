import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

type StoreEntry = { timestamps: number[] }

// Very small in-memory rate limiter: reset on server restart.
const RATE_LIMIT_WINDOW = 60 * 60 * 1000 // 1 hour
const MAX_PER_WINDOW = 10
const store = new Map<string, StoreEntry>()

const CONTACT_RECIPIENT = 'aurel140783@gmail.com'

function getIp(req: NextRequest) {
  const forwarded = req.headers.get('x-forwarded-for')
  if (forwarded) return forwarded.split(',')[0].trim()

  const realIp = req.headers.get('x-real-ip')
  if (realIp) return realIp

  return 'unknown'
}

// SendGrid removed — SMTP (nodemailer) is used exclusively. Fallback is logging.

async function trySendWithSmtp(payload: any) {
  const host = process.env.SMTP_HOST
  const port = Number(process.env.SMTP_PORT || 0)
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASSWORD || process.env.SMTP_PASS
  const from = process.env.SMTP_FROM || user
  if (!host || !user || !pass) return { sent: false, reason: 'smtp-not-configured' }

  const transporter = nodemailer.createTransport({
    host,
    port: port || 587,
    secure: port === 465, // true for 465, false for other ports
    auth: { user, pass },
  })

  const text = [
    `Prénom: ${payload.prenom || ''}`,
    `Nom: ${payload.nom || ''}`,
    `Email: ${payload.email || ''}`,
    `Téléphone: ${payload.telephone || ''}`,
    `Sujet: ${payload.sujet || ''}`,
    '',
    `${payload.message || ''}`,
  ].join('\n')

  try {
    await transporter.sendMail({
      from: from,
      to: CONTACT_RECIPIENT,
      subject: payload.sujet || 'Nouveau message via le site',
      text,
    })
    return { sent: true }
  } catch (e: any) {
    return { sent: false, reason: e?.message || String(e) }
  }
}

export async function POST(req: NextRequest) {
  const ip = getIp(req)
  let payload: any
  try {
    payload = await req.json()
  } catch (e) {
    return NextResponse.json({ message: 'Bad request' }, { status: 400 })
  }

  // Honeypot should be empty
  if (payload.website) {
    return NextResponse.json({ message: 'Spam detected' }, { status: 400 })
  }

  // Required fields validation
  if (!payload.prenom || !payload.nom || !payload.email || !payload.message) {
    return NextResponse.json({ message: 'Veuillez renseigner prénom, nom, email et message.' }, { status: 400 })
  }

  // Minimal timing check (prevent super-fast bots)
  const now = Date.now()
  const startedAt = Number(payload.startedAt || 0)
  if (startedAt && now - startedAt < 3000) {
    return NextResponse.json({ message: 'Form submitted too quickly' }, { status: 400 })
  }

  // Rate limit
  const entry = store.get(ip) || { timestamps: [] }
  // remove old
  entry.timestamps = entry.timestamps.filter(ts => now - ts < RATE_LIMIT_WINDOW)
  if (entry.timestamps.length >= MAX_PER_WINDOW) {
    return NextResponse.json({ message: 'Trop de soumissions. Réessayez plus tard.' }, { status: 429 })
  }
  entry.timestamps.push(now)
  store.set(ip, entry)

  // Minimal log of the submission
  // eslint-disable-next-line no-console
  console.log('Contact form:', { ip, prenom: payload.prenom, nom: payload.nom, email: payload.email, sujet: payload.sujet })

  // Send via SMTP if configured
  const sendResult = await trySendWithSmtp(payload)
  if (sendResult.sent) {
    return NextResponse.json({ message: 'OK' })
  }

  // If not sent, log reason and return accepted so user doesn't see internal errors.
  // eslint-disable-next-line no-console
  console.warn('Contact email not sent:', sendResult.reason)
  return NextResponse.json({ message: 'OK (logged; email not delivered)' }, { status: 202 })
}
