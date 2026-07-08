# Video-Neutre

**Plateforme de neutralisation d'empreintes digitales vidéo/image**

> Augmentez votre visibilité en contournant intelligemment les systèmes de détection de contenu dupliqué (pHash, fingerprinting audio, métadonnées) tout en préservant la qualité maximale.

## 🎯 Objectifs

- ✅ Upload vidéo/image locale ou par lien (YouTube, TikTok)
- ✅ Neutraliser les signatures digitales (pHash, audio fingerprinting, métadonnées)
- ✅ Optimisation IA pour maximiser la détection positive
- ✅ Préservation optimale de la qualité
- ✅ Téléchargement du contenu transformé
- ✅ Dashboard analytique (vue/détection)

## 🏗️ Architecture

```
Video-Neutre/
├── backend/              # API FastAPI/Express
│   ├── src/
│   │   ├── api/          # Routes
│   │   ├── services/     # Transformation de contenu
│   │   ├── processors/   # Neutralisation d'empreintes
│   │   ├── ml/           # Modèles IA
│   │   └── utils/        # Utilitaires
│   ├── requirements.txt   # Dépendances Python
│   └── .env.example       # Configuration
├── frontend/             # React + Tailwind
│   ├── src/
│   │   ├── components/   # UI réutilisables
│   │   ├── pages/        # Pages principales
│   │   ├── hooks/        # Logique métier
│   │   └── services/     # Appels API
│   └── package.json
├── docs/                 # Documentation technique
└── docker-compose.yml    # Stack Docker
```

## 🚀 Démarrage rapide

### Prérequis
- Docker & Docker Compose
- Node.js 18+
- Python 3.9+
- FFMPEG

### Installation

```bash
# Cloner et entrer dans le projet
git clone https://github.com/fayecheikhsow07/Video-Neutre.git
cd Video-Neutre

# Démarrer le stack complet
docker-compose up -d

# Frontend: http://localhost:3000
# API: http://localhost:5000
# API Docs: http://localhost:5000/docs
```

## 🔧 Technologies

### Backend
- **Framework**: FastAPI/Express.js
- **Traitement vidéo**: FFmpeg, OpenCV, Pillow
- **IA/ML**: TensorFlow, PyTorch, YOLO
- **Fingerprinting**: pHash, librosa (audio)
- **Base de données**: PostgreSQL + Redis
- **File storage**: MinIO/S3

### Frontend
- **Framework**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **State**: Redux Toolkit
- **Video player**: HLS.js, Plyr
- **Upload**: Dropzone.js, Resumable.js

## 📋 Fonctionnalités principales

### 1. **Neutralisation d'empreintes**
- **pHash**: Modification subtile des pixels (variation chromatique imperceptible)
- **Audio Fingerprinting**: Compression audio légère, décalage temporel minimal
- **Métadonnées**: Suppression/modification des EXIF, timestamps
- **Analyse de séquence**: Interpolation de frames, speed variation (98-102%)

### 2. **Optimisation de qualité**
- Upscaling IA (ESRGAN, Real-ESRGAN)
- Débruitage adaptatif
- Amélioration du contraste/saturation

### 3. **IA pour détection positive**
- Analyse de contenu pour maximiser les vues
- Suggestions de tags/hashtags
- Timing optimal de publication
- Prédiction de viralité

### 4. **Dashboard**
- Suivi des uploads
- Statistiques de détection IA
- Historique des transformations
- Comparaison avant/après

## 📄 API Endpoints

```
POST   /api/upload              # Upload vidéo/image
POST   /api/process             # Lancer transformation
GET    /api/status/:jobId       # Statut du job
GET    /api/download/:jobId     # Télécharger résultat
GET    /api/history             # Historique utilisateur
GET    /api/analytics/:jobId    # Stats détection
```

## 🛡️ Éthique & Légalité

⚠️ **Disclaimer**: Cette plateforme est destinée à :
- Protéger vos propres contenus
- Tester la robustesse des systèmes de détection
- Recherche académique

❌ **Interdit** :
- Contourner les droits d'auteur d'autrui
- Distribuer du contenu protégé
- Contourner les conditions d'utilisation des plateformes

## 📚 Documentation

- [Guide API](docs/API.md)
- [Architecture technique](docs/ARCHITECTURE.md)
- [Guide déploiement](docs/DEPLOYMENT.md)
- [Contribution](CONTRIBUTING.md)

## 📝 License

MIT License - Voir [LICENSE](LICENSE)

## 🤝 Support

Issues & discussions: [GitHub Issues](https://github.com/fayecheikhsow07/Video-Neutre/issues)
