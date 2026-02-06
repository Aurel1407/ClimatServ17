const fs = require('fs')
const nodemailer = require('nodemailer')

function loadEnv(path) {
  const raw = fs.readFileSync(path, 'utf8')
  const lines = raw.split(/\r?\n/)
  const env = {}
  for (const line of lines) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    const idx = trimmed.indexOf('=')
    if (idx === -1) continue
    const key = trimmed.slice(0, idx)
    let val = trimmed.slice(idx + 1)
    // remove surrounding quotes
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1)
    }
    env[key] = val
  }
  return env
}

;(async () => {
  try {
    const env = loadEnv('.env.local')
    console.log('Loaded .env.local:', { SMTP_HOST: env.SMTP_HOST, SMTP_PORT: env.SMTP_PORT, SMTP_USER: env.SMTP_USER, SMTP_FROM: env.SMTP_FROM ? 'present' : 'missing' })
    if (!env.SMTP_HOST || !env.SMTP_USER || !env.SMTP_PASSWORD) {
      console.error('SMTP configuration incomplete in .env.local')
      process.exit(1)
    }

    const port = Number(env.SMTP_PORT || 587)
    const transporter = nodemailer.createTransport({
      host: env.SMTP_HOST,
      port: port,
      secure: port === 465,
      auth: { user: env.SMTP_USER, pass: env.SMTP_PASSWORD },
    })

    const to = env.SMTP_TO || env.SMTP_USER
    const info = await transporter.sendMail({
      from: env.SMTP_FROM || env.SMTP_USER,
      to,
      subject: 'Test SMTP from local script',
      text: 'Ceci est un test d\'envoi SMTP depuis scripts/test-smtp-send.js',
    })
    console.log('Email sent:', info)
  } catch (e) {
    console.error('Send failed:', e && e.message ? e.message : e)
    if (e && e.response) console.error('SMTP response:', e.response)
    process.exit(1)
  }
})()
