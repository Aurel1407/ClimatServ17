// Contacts encodés en Base64 pour protection antispam
// Pour encoder : btoa("0546525330") en console navigateur

export const ENCODED_CONTACTS = {
  // Téléphone principal : 0546525330
  PHONE_MAIN: 'MDU0NjUyNTMzMA==',
  
  // Téléphone dépannage : 0688503112
  PHONE_URGENCY: 'MDY4ODUwMzExMg==',
  
  // Email : climatserv17.contact@gmail.com
  EMAIL_MAIN: 'Y2xpbWF0c2VydjE3LmNvbnRhY3RAZ21haWwuY29t',
} as const
