# ClimatServ17 - Plateforme de Gestion Client

## Description

Plateforme web moderne pour ClimatServ17, spécialiste en climatisation, pompes à chaleur et adoucisseurs d'eau à La Rochelle.

### Fonctionnalités principales

- **Système de prise de RDV intelligent** avec validation géographique
- **Espace client sécurisé** (Magic Link - authentification sans mot de passe)
- **Gestion documentaire** (factures, devis, attestations)
- **Back-office artisan** pour gestion des documents
- **Design Industrial Clean** optimisé mobile-first
- **SEO optimisé** pour la zone La Rochelle + 60km

## Technologies

- **Frontend:** Next.js 14 (App Router) + TypeScript + Tailwind CSS
- **Backend:** Next.js API Routes
- **Base de données:** PostgreSQL + Prisma ORM
- **Authentification:** Magic Link (email)
- **Validation:** Zod
- **Icônes:** Lucide React

## Structure du projet

```
ClimatServ17/
├── prisma/
│   ├── schema.prisma          # Schéma de base de données
│   ├── seed.ts                # Données de test
│   └── tsconfig.json          # Config TypeScript pour Prisma
├── public/
│   └── images/                # Images optimisées (logo, hero)
├── src/
│   ├── app/
│   │   ├── api/               # API Routes
│   │   │   ├── auth/          # Authentification Magic Link
│   │   │   ├── appointments/  # Gestion des RDV
│   │   │   └── documents/     # Upload/téléchargement docs
│   │   ├── services/          # Pages de détail des services
│   │   │   ├── pompes-a-chaleur/
│   │   │   ├── climatisations/
│   │   │   ├── ballons-thermodynamiques/
│   │   │   ├── adoucisseurs/
│   │   │   ├── entretien/
│   │   │   └── depannage/
│   │   ├── maintenance-sav/   # Page prise de RDV
│   │   ├── espace-client/     # Portail client
│   │   ├── contact/           # Page contact
│   │   ├── accessibilite/     # Déclaration d'accessibilité
│   │   ├── layout.tsx         # Layout global
│   │   ├── page.tsx           # Page d'accueil
│   │   └── globals.css        # Styles globaux
│   ├── components/
│   │   ├── ui/                # Composants UI réutilisables
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Card.tsx
│   │   │   └── ImagePlaceholder.tsx
│   │   └── layouts/           # Header, Footer, Navigation
│   ├── lib/
│   │   ├── prisma.ts          # Client Prisma
│   │   ├── utils.ts           # Fonctions utilitaires
│   │   └── validations.ts     # Schémas Zod
│   └── types/
│       └── index.ts           # Types TypeScript
├── .env.example               # Variables d'environnement
├── .gitignore
├── IMAGES.md                  # Guide d'intégration des images
├── README.md                  # Documentation du projet
├── next.config.js
├── package.json
├── start.bat                  # Script démarrage Windows
├── stop.bat                   # Script arrêt Windows
├── tailwind.config.ts
└── tsconfig.json
```

## Installation

### Prérequis

- Node.js 18+
- PostgreSQL 14+
- npm ou yarn

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
```bash
cp .env.example .env
```

Modifier `.env` avec vos valeurs:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/climatserv17"
NEXTAUTH_SECRET="votre-secret"
SMTP_HOST="smtp.gmail.com"
SMTP_USER="votre-email@gmail.com"
# ... autres variables
```

4. **Initialiser la base de données**
```bash
npm run prisma:migrate
npm run prisma:generate
```

5. **Lancer le serveur de développement**
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
npm run prisma:generate  # Génération du client Prisma
npm run prisma:migrate   # Migration de la BDD
npm run prisma:studio    # Interface admin Prisma
```

## Design System

### Palette de couleurs

- **Bleu Corporate** (#0B4F8C) : Couleur principale
- **Orange Énergique** (#E84C0A) : Accent / CTA
- **Gris Neutre** (#F8F9FA) : Backgrounds

### Typographie

- **Titres** : Montserrat (Bold)
- **Corps** : Inter (Regular)

## Sécurité

- SSL/TLS obligatoire
- Authentification sans mot de passe (Magic Link)
- Validation côté serveur (Zod)
- Protection CSRF
- Headers de sécurité (CSP, X-Frame-Options, etc.)

## SEO & Performance

- Score PageSpeed > 90/100
- Images WebP optimisées
- Métadonnées structurées (Schema.org)
- Sitemap.xml automatique
- Mobile-First responsive

## Workflow Git

- **main** : Production
- **dev** : Développement
- **feature/*** : Nouvelles fonctionnalités
- **fix/*** : Corrections de bugs

## TODO

- [ ] Implémenter le système de prise de RDV
- [ ] Intégrer l'API Google Calendar
- [ ] Développer le back-office artisan
- [ ] Configurer les notifications SMS (Twilio)
- [ ] Ajouter les tests unitaires
- [ ] Optimiser les images et icônes
- [ ] Configurer le déploiement CI/CD

## Auteurs

- **Aurel1407** - Développement
- **tanosv** - Développement

## Client

**ClimatServ17** - La Rochelle

## Licence

Propriétaire - Tous droits réservés
