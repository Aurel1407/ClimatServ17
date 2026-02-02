# ClimatServ17 - Plateforme de Gestion Client

## 🎯 Description

Plateforme web moderne pour ClimatServ17, spécialiste en climatisation, pompes à chaleur et adoucisseurs d'eau à La Rochelle.

### Fonctionnalités principales

- 🗓️ **Système de prise de RDV intelligent** avec validation géographique
- 🔐 **Espace client sécurisé** (Magic Link - authentification sans mot de passe)
- 📄 **Gestion documentaire** (factures, devis, attestations)
- 👨‍💼 **Back-office artisan** pour gestion des documents
- 🎨 **Design Industrial Clean** optimisé mobile-first
- 🚀 **SEO optimisé** pour la zone La Rochelle + 60km

## 🛠️ Technologies

- **Frontend:** Next.js 14 (App Router) + TypeScript + Tailwind CSS
- **Backend:** Next.js API Routes
- **Base de données:** PostgreSQL + Prisma ORM
- **Authentification:** Magic Link (email)
- **Validation:** Zod
- **Icônes:** Lucide React

## 📁 Structure du projet

```
ClimatServ17/
├── prisma/
│   └── schema.prisma          # Schéma de base de données
├── public/
│   ├── images/                # Images optimisées
│   └── icons/                 # Icônes SVG personnalisées
├── src/
│   ├── app/
│   │   ├── api/              # API Routes
│   │   │   ├── auth/         # Authentification Magic Link
│   │   │   ├── appointments/ # Gestion des RDV
│   │   │   └── documents/    # Upload/téléchargement docs
│   │   ├── maintenance-sav/  # Page prise de RDV
│   │   ├── espace-client/    # Portail client
│   │   ├── contact/          # Page contact
│   │   ├── layout.tsx        # Layout global
│   │   ├── page.tsx          # Page d'accueil
│   │   └── globals.css       # Styles globaux
│   ├── components/
│   │   ├── ui/               # Composants UI réutilisables
│   │   ├── layouts/          # Header, Footer, Navigation
│   │   └── forms/            # Formulaires
│   ├── lib/
│   │   ├── prisma.ts         # Client Prisma
│   │   ├── utils.ts          # Fonctions utilitaires
│   │   └── validations.ts    # Schémas Zod
│   └── types/
│       └── index.ts          # Types TypeScript
├── .env.example              # Variables d'environnement
├── .gitignore
├── next.config.js
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## 🚀 Installation

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

## 📜 Scripts disponibles

```bash
npm run dev          # Serveur de développement
npm run build        # Build de production
npm run start        # Démarrage production
npm run lint         # Lint du code
npm run prisma:generate  # Génération du client Prisma
npm run prisma:migrate   # Migration de la BDD
npm run prisma:studio    # Interface admin Prisma
```

## 🎨 Design System

### Palette de couleurs

- **Bleu Nuit** (#1A2B3C) : Couleur principale
- **Orange Corail** (#FF7F50) : Accent / CTA
- **Gris Technique** (#F4F4F4) : Backgrounds

### Typographie

- **Titres** : Montserrat (Bold)
- **Corps** : Inter (Regular)

## 🔒 Sécurité

- ✅ SSL/TLS obligatoire
- ✅ Authentification sans mot de passe (Magic Link)
- ✅ Validation côté serveur (Zod)
- ✅ Protection CSRF
- ✅ Headers de sécurité (CSP, X-Frame-Options, etc.)

## 📱 SEO & Performance

- ✅ Score PageSpeed > 90/100
- ✅ Images WebP optimisées
- ✅ Métadonnées structurées (Schema.org)
- ✅ Sitemap.xml automatique
- ✅ Mobile-First responsive

## 🗺️ Workflow Git

- **main** : Production
- **dev** : Développement
- **feature/*** : Nouvelles fonctionnalités
- **fix/*** : Corrections de bugs

## 📝 TODO

- [ ] Implémenter le système de prise de RDV
- [ ] Intégrer l'API Google Calendar
- [ ] Développer le back-office artisan
- [ ] Configurer les notifications SMS (Twilio)
- [ ] Ajouter les tests unitaires
- [ ] Optimiser les images et icônes
- [ ] Configurer le déploiement CI/CD

## 👤 Auteur

**ClimatServ17**

## 📄 Licence

Propriétaire - Tous droits réservés
