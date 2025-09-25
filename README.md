# Portfolio Mohamed LO

Un portfolio moderne et responsive développé avec Next.js, TypeScript et Tailwind CSS.

## 🚀 Fonctionnalités

- **Design moderne** : Interface élégante avec des animations fluides
- **Responsive** : Optimisé pour tous les appareils (mobile, tablette, desktop)
- **Animations** : Utilisation de Framer Motion pour des transitions fluides
- **Section Projets** : Avec support pour les démonstrations vidéo
- **Formulaire de contact** : Formulaire fonctionnel pour recevoir des messages
- **Navigation fluide** : Menu de navigation avec scroll smooth

## 🛠️ Technologies utilisées

- **Next.js 14** : Framework React avec App Router
- **TypeScript** : Typage statique pour une meilleure qualité de code
- **Tailwind CSS** : Framework CSS utilitaire
- **Framer Motion** : Bibliothèque d'animations
- **Lucide React** : Icônes modernes

## 📦 Installation

1. Clonez le repository :
```bash
git clone <votre-repo>
cd portfolio
```

2. Installez les dépendances :
```bash
npm install
```

3. Lancez le serveur de développement :
```bash
npm run dev
```

4. Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 🎥 Ajout de vidéos de démonstration

Pour ajouter vos vidéos de démonstration :

1. Placez vos fichiers vidéo dans le dossier `public/videos/`
2. Modifiez le fichier `src/components/Projects.tsx`
3. Remplacez les URLs d'exemple par vos vraies URLs de vidéos :

```typescript
videoUrl: "/videos/votre-video.mp4", // URL locale
// ou
videoUrl: "https://votre-domaine.com/video.mp4", // URL externe
```

4. Décommentez la section vidéo dans le modal :

```typescript
<video controls className="w-full h-full rounded-lg">
  <source src={project.videoUrl} type="video/mp4" />
  Votre navigateur ne supporte pas la lecture vidéo.
</video>
```

## 🎨 Personnalisation

### Couleurs
Les couleurs peuvent être modifiées dans le fichier `tailwind.config.ts` ou directement dans les composants.

### Contenu
Modifiez les composants dans `src/components/` pour personnaliser :
- Informations personnelles
- Expériences professionnelles
- Compétences
- Projets
- Informations de contact

### Images
Placez vos images dans le dossier `public/` et mettez à jour les références dans les composants.

## 📱 Responsive Design

Le portfolio est entièrement responsive et s'adapte à :
- **Mobile** : < 768px
- **Tablette** : 768px - 1024px
- **Desktop** : > 1024px

## 🚀 Déploiement

### Vercel (Recommandé)
1. Connectez votre repository GitHub à Vercel
2. Vercel détectera automatiquement Next.js
3. Déployez en un clic

### Netlify
1. Build le projet : `npm run build`
2. Déployez le dossier `out/` sur Netlify

### Autres plateformes
Le projet peut être déployé sur n'importe quelle plateforme supportant Node.js.

## 📞 Contact

- **Email** : mohamedlo@esp.sn
- **Téléphone** : +221 77 412 64 05
- **LinkedIn** : [mohamed-lo-aa5358288](https://linkedin.com/in/mohamed-lo-aa5358288)
- **GitHub** : [Mohamedlo10](https://github.com/Mohamedlo10)

## 📄 Licence

Ce projet est sous licence MIT. Vous êtes libre de l'utiliser et de le modifier selon vos besoins.
# porfolio-mohamed-lo
