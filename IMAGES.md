# Guide d'intégration des images

## Emplacements des images à remplacer

### 1. Image Hero (Page d'accueil)
- **Emplacement** : Section hero en arrière-plan
- **Dimensions recommandées** : 1920x1080px
- **Format** : JPG ou WebP
- **Nom de fichier** : `hero-bg.jpg`
- **Dossier** : `/public/images/`
- **Sujet** : Installation climatisation, pompe à chaleur ou technicien au travail

### 2. Galerie de réalisations (3 photos)

#### Photo 1 - Installation PAC
- **Dimensions** : 800x600px
- **Nom** : `realisation-pac.jpg`
- **Sujet** : Installation de pompe à chaleur

#### Photo 2 - Climatisation
- **Dimensions** : 800x600px
- **Nom** : `realisation-clim.jpg`
- **Sujet** : Installation de climatisation

#### Photo 3 - Adoucisseur
- **Dimensions** : 800x600px
- **Nom** : `realisation-adoucisseur.jpg`
- **Sujet** : Installation d'adoucisseur d'eau

### 3. Recommandations

**Format d'image :**
- Privilégier le format WebP pour une meilleure performance
- Fallback en JPG pour compatibilité
- Compression : qualité 80-85%

**Optimisation :**
- Utiliser `next/image` pour l'optimisation automatique
- Images responsives (plusieurs tailles)
- Lazy loading activé par défaut

**Nommage :**
- Utiliser des noms descriptifs
- Format : `type-description.extension`
- Exemple : `hero-climatisation.jpg`, `realisation-pac-001.jpg`

## Remplacement des placeholders

### Étape 1 : Ajouter les images
```bash
# Copier vos images dans le dossier
public/images/hero-bg.jpg
public/images/realisation-pac.jpg
public/images/realisation-clim.jpg
public/images/realisation-adoucisseur.jpg
```

### Étape 2 : Modifier le code
Dans `src/app/page.tsx`, remplacer :
```tsx
{/* Placeholder actuel */}
<div className="absolute inset-0 opacity-20">
  ...
</div>

{/* Par l'image réelle */}
<div className="absolute inset-0 opacity-20">
  <Image 
    src="/images/hero-bg.jpg"
    alt="Installation climatisation"
    fill
    className="object-cover"
    priority
  />
</div>
```

### Étape 3 : Images de galerie
```tsx
<Image 
  src="/images/realisation-pac.jpg"
  alt="Installation pompe à chaleur"
  width={800}
  height={600}
  className="object-cover rounded-xl"
/>
```

## Checklist avant mise en ligne

- [ ] Toutes les images sont optimisées (< 200KB)
- [ ] Format WebP avec fallback JPG
- [ ] Attributs `alt` descriptifs pour SEO
- [ ] Images testées sur mobile et desktop
- [ ] Temps de chargement < 3 secondes
