# Dossier Vidéos

Placez vos vidéos de démonstration de projets dans ce dossier.

## Formats supportés
- MP4 (recommandé)
- WebM
- OGG

## Structure recommandée
```
videos/
├── amkaa-demo.mp4
├── mafalia-demo.mp4
├── yabalma-demo.mp4
├── orkide-demo.mp4
└── wallet-demo.mp4
```

## Optimisation
Pour de meilleures performances :
- Compressez vos vidéos (max 10MB par vidéo)
- Utilisez des résolutions adaptées (720p pour les démos)
- Optimisez pour le web avec des outils comme HandBrake

## Mise à jour des URLs
Après avoir ajouté vos vidéos, mettez à jour les URLs dans `src/components/Projects.tsx` :

```typescript
videoUrl: "/videos/amkaa-demo.mp4"
```
