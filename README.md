# ClimatServ17 - Site Vitrine

## Description

Site vitrine moderne pour ClimatServ17, spécialiste en climatisation, pompes à chaleur et adoucisseurs d'eau à La Rochelle.

### Fonctionnalités principales

- **Site vitrine complet** avec présentation des services
- **Formulaire de contact sécurisé** avec protections anti-spam
- **Envoi d'emails automatique** via SMTP
- **Intégration carte interactive** pour localisation
- **Intégration application métier** pour prise de RDV
- **Design responsive** optimisé mobile-first
- **SEO optimisé** pour la zone La Rochelle

## Technologies

- **Framework:** Next.js 16 (App Router) + TypeScript
- **Styling:** Tailwind CSS
- **Backend:** Next.js API Routes (formulaire de contact)
- **Email:** Nodemailer (SMTP)
- **Carte:** Leaflet + React-Leaflet
- **Icônes:** Lucide React

## Structure du projet

```
ClimatServ17/
├── public/
│   ├── icons/                 # Icônes et favicons
│   └── images/                # Images optimisées (logo, hero)
├── scripts/
│   └── test-smtp-send.js      # Script de test SMTP
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/       # API formulaire de contact
│   │   │       └── route.ts   # Envoi emails + protections anti-spam
│   │   ├── services/          # Pages de détail des services
│   │   │   ├── pompes-a-chaleur/
│   │   │   ├── climatisations/
│   │   │   ├── ballons-thermodynamiques/
│   │   │   ├── adoucisseurs/
│   │   │   ├── entretien/
│   │   │   └── depannage/
│   │   ├── maintenance-sav/   # Intégration iframe application métier
│   │   ├── contact/           # Page formulaire de contact
│   │   ├── accessibilite/     # Déclaration d'accessibilité
│   │   ├── mentions-legales/
│   │   ├── politique-confidentialite/
│   │   ├── conditions-generales/
│   │   ├── layout.tsx         # Layout global
│   │   ├── page.tsx           # Page d'accueil
│   │   ├── not-found.tsx      # Page 404
│   │   └── globals.css        # Styles globaux
│   ├── components/
│   │   ├── ui/                # Composants UI réutilisables
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── ImagePlaceholder.tsx
│   │   │   ├── InteractiveMap.tsx
│   │   │   ├── MapWrapper.tsx
│   │   │   └── ProtectedContact.tsx
│   │   ├── layouts/           # Header, Footer
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   └── forms/             # Composants formulaires
│   ├── lib/
│   │   ├── encoded-contacts.ts # Protection emails/téléphones (Base64)
│   │   └── utils.ts           # Fonctions utilitaires
│   └── types/
│       └── index.ts           # Types TypeScript
├── .env.example               # Template variables d'environnement
├── .env.local                 # Variables locales (non commité)
├── .gitignore
├── IMAGES.md                  # Guide d'intégration des images
├── README.md                  # Documentation du projet
├── next.config.js
├── netlify.toml               # Configuration Netlify
├── package.json
├── start.bat                  # Script démarrage Windows
├── stop.bat                   # Script arrêt Windows
├── tailwind.config.ts
└── tsconfig.json
```

## Installation

### Prérequis

- Node.js 18+
- npm ou yarn
- Compte Gmail avec mot de passe d'application (pour envoi emails)

### Étapes

1. **Cloner le repository**
```bash
git clone https://github.com/Aurel1407/ClimatServ17.git
cd ClimatServ17
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Configuration de l'environnement**

Créer `.env.local` à la racine :
```env
# SMTP Configuration (Gmail)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=votre-email@gmail.com
SMTP_PASSWORD=votre_mot_de_passe_app
SMTP_FROM=votre-email@gmail.com

# Application
NODE_ENV=development
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Google Maps (optionnel)
NEXT_PUBLIC_GOOGLE_MAPS_KEY=votre_cle_google
```

**Note :** Pour Gmail, activez la validation en deux étapes puis créez un mot de passe d'application dans les paramètres de sécurité.

4. **Lancer le serveur de développement**
```bash
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000)

## Scripts disponibles

```bash
npm run dev          # Serveur de développement
npm run build        # Build de production
npm run start        # Démarrage production
npm run lint         # Lint du code
```

## Fonctionnalités de sécurité du formulaire de contact

- **Honeypot** : champ caché invisible pour piéger les bots
- **Timing check** : rejet des soumissions trop rapides (<3s)
- **Rate limiting** : 10 soumissions max par IP / heure
- **Validation côté client et serveur** : champs requis (prénom, nom, email, message)
- **Protection des coordonnées** : emails/téléphones encodés en Base64 sur le site

## Design System

### Palette de couleurs

- **Bleu Corporate** (#0B4F8C) : Couleur principale
- **Orange Énergique** (#E84C0A) : Accent / CTA
- **Gris Neutre** (#F8F9FA) : Backgrounds

### Typographie

- **Titres** : Montserrat (Bold)
- **Corps** : Inter (Regular)

## SEO & Performance

- Images WebP optimisées
- Métadonnées structurées pour toutes les pages
- Mobile-First responsive
- Hébergement Netlify avec CDN global

## Workflow Git

- **main** : Production
- **dev** : Développement
- **feature/*** : Nouvelles fonctionnalités
- **fix/*** : Corrections de bugs

## Déploiement

Le site est configuré pour Netlify avec `netlify.toml`. Push sur `main` déclenche un déploiement automatique.

Variables d'environnement à configurer sur Netlify :
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASSWORD`
- `SMTP_FROM`
- `NEXT_PUBLIC_APP_URL`
- `NEXT_PUBLIC_GOOGLE_MAPS_KEY` (optionnel)

## Auteurs

- **Aurel1407** - Développement
- **tanosv** - Développement

## Client

**ClimatServ17** - La Rochelle

## Licence

Propriétaire - Tous droits réservés
