# 🏛️ Timeline des Scandales Politiques

Une application React TypeScript moderne pour visualiser les scandales politiques à travers le temps avec une interface immersive et interactive.

![Timeline des Scandales Politiques](https://via.placeholder.com/800x400/1a1464/ffffff?text=Political+Scandals+Timeline)

## ✨ Fonctionnalités

### 🎨 Design Visuel
- **Design fidèle à l'image originale** : Gradient bleu/violet foncé, timeline serpentine
- **Timeline interactive** : Disposition alternée gauche/droite
- **Animations fluides** : Transitions et micro-interactions avec Framer Motion
- **Design responsive** : Adapté mobile, tablette et desktop
- **Pattern géométrique** : Overlay subtil pour l'ambiance

### 📊 Données Complètes
- **10 scandales politiques réels** diversifiés :
  - Affaire Fillon (France)
  - Affaire Ukraine-Trump (États-Unis)
  - Frais Parlementaires (Royaume-Uni)
  - Assaut du Capitole (États-Unis)
  - Annexion Crimée (Russie)
  - Empoisonnement Skripal (Russie)
  - Panama Papers (Mondial)
  - Loi Sécurité Hong Kong (Chine)
  - Affaire Petrobras (Brésil)
  - Partygate (Royaume-Uni)

### 🔍 Système de Filtrage
- **Filtres par pays** : France, États-Unis, Royaume-Uni, etc.
- **Types de scandales** : Corruption, financier, abus de pouvoir, etc.
- **Niveaux de gravité** : Échelle de 1 à 5
- **Partis politiques** : Filtrage par affiliation
- **Interface intuitive** : Panel coulissant avec animations

### 💰 Formatage Avancé
- **Montants multi-devises** : EUR, USD, GBP, etc.
- **Formatage intelligent** : Millions, milliards avec symboles
- **Calcul automatique** : Durées, totaux, statistiques
- **Localisation française** : Dates, nombres, textes

## 🚀 Installation

```bash
# Cloner le projet
git clone https://github.com/votre-repo/political-scandals-timeline.git
cd political-scandals-timeline

# Installer les dépendances
npm install

# Démarrer l'application
npm start
```

L'application sera accessible sur http://localhost:3000

## 🛠️ Technologies Utilisées

- **React 18** : Framework JavaScript moderne
- **TypeScript** : Type safety et meilleure expérience développeur
- **Tailwind CSS** : Framework CSS utilitaire avec classes personnalisées
- **Framer Motion** : Animations et transitions fluides
- **Lucide React** : Icônes SVG modernes et cohérentes
- **date-fns** : Gestion des dates avec localisation française

## 📁 Structure du Projet

```
src/
├── components/          # Composants React réutilisables
│   ├── ScandalTimeline.tsx    # Composant principal
│   ├── ScandalCard.tsx        # Carte détaillée d'un scandale
│   ├── FilterPanel.tsx        # Panel de filtres
│   ├── SeverityBadge.tsx      # Badge de gravité
│   ├── ConsequenceBadge.tsx   # Badge de conséquence
│   └── AmountFormatter.tsx    # Formatage des montants
├── data/                # Données des scandales
│   └── scandals.tsx     # Base de données des scandales
├── types/               # Définitions TypeScript
│   └── scandal.ts       # Interfaces et types
├── utils/               # Fonctions utilitaires
│   └── formatters.ts    # Formatage dates, montants, etc.
└── App.tsx             # Application principale
```

## 🎯 Utilisation

### Composant Principal

```tsx
import ScandalTimeline from './components/ScandalTimeline';
import { politicalScandals } from './data/scandals';

<ScandalTimeline
  title="SCANDALES POLITIQUES"
  subtitle="CHRONOLOGIE DES AFFAIRES"
  scandals={politicalScandals}
  showFilters={true}
  filters={{
    country: ["France", "États-Unis"],
    scandalType: ["corruption", "financial"],
    severity: [4, 5]
  }}
/>
```

### Ajouter un Nouveau Scandale

```tsx
const nouveauScandale: PoliticalScandal = {
  date: "2024-01-15",
  title: "Nouveau Scandale",
  description: "Description détaillée...",
  mainPerson: "Nom Principal",
  politicalParty: "Parti Politique",
  position: "Ministre",
  country: "France",
  scandalType: "corruption",
  severity: 4,
  amountInvolved: 1000000,
  currency: "EUR",
  consequences: ["Démission", "Enquête"],
  resolved: false,
  icon: <DollarSign className="w-8 h-8" />,
  color: "red"
};
```

## 🎨 Personnalisation

### Couleurs et Thème

```tsx
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        scandal: {
          red: '#ef4444',
          orange: '#f97316',
          yellow: '#eab308',
          purple: '#8b5cf6',
          blue: '#3b82f6',
          green: '#10b981',
        }
      }
    }
  }
}
```

### Animations Personnalisées

```tsx
// Exemple d'animation personnalisée
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5 }}
>
  Contenu animé
</motion.div>
```

## 📊 API des Composants

### ScandalTimeline

| Prop | Type | Description |
|------|------|-------------|
| `title` | `string` | Titre principal |
| `subtitle` | `string` | Sous-titre |
| `scandals` | `PoliticalScandal[]` | Liste des scandales |
| `filters` | `ScandalFilters` | Filtres actifs |
| `showFilters` | `boolean` | Afficher le panel de filtres |
| `className` | `string` | Classes CSS personnalisées |

### PoliticalScandal Interface

```tsx
interface PoliticalScandal {
  // Temporal info
  date: string;
  duration?: string;
  
  // Main info
  title: string;
  description: string;
  
  // People involved
  mainPerson: string;
  otherPersons?: string[];
  
  // Political info
  politicalParty: string;
  position: string;
  country: string;
  
  // Classification
  scandalType: ScandalType;
  severity: 1 | 2 | 3 | 4 | 5;
  
  // Financial
  amountInvolved?: number;
  currency?: string;
  
  // Consequences
  consequences: string[];
  resolved: boolean;
  
  // Metadata
  sources?: string[];
  tags?: string[];
  
  // Display
  icon: ReactNode;
  color: ScandalColor;
}
```

## 🔧 Scripts Disponibles

```bash
# Développement
npm start          # Démarre le serveur de développement
npm run build      # Build de production
npm test           # Lance les tests
npm run eject      # Ejection du setup (irreversible)

# Linting et formatage
npm run lint       # Vérification du code
npm run format     # Formatage automatique
```

## 🌍 Internationalisation

L'application est actuellement configurée en français mais peut être étendue :

```tsx
// utils/i18n.ts
export const translations = {
  fr: {
    title: "SCANDALES POLITIQUES",
    subtitle: "CHRONOLOGIE DES AFFAIRES"
  },
  en: {
    title: "POLITICAL SCANDALS",
    subtitle: "TIMELINE OF AFFAIRS"
  }
};
```

## 📱 Responsive Design

- **Mobile** : Timeline verticale centrée
- **Tablette** : Layout adaptatif avec optimisations
- **Desktop** : Design complet avec alternance gauche/droite

## 🔐 Sécurité

- Validation TypeScript stricte
- Sanitisation des données utilisateur
- Protection XSS intégrée
- Gestion sécurisée des sources externes

## 🚧 Roadmap

- [ ] Mode sombre/clair
- [ ] Export PDF/PNG
- [ ] Filtres par date
- [ ] Recherche textuelle
- [ ] API backend
- [ ] Base de données persistante
- [ ] Authentification utilisateur
- [ ] Contribution communautaire

## 📄 Licence

MIT License - voir le fichier LICENSE pour plus de détails.

## 🤝 Contribution

Les contributions sont les bienvenues ! Voir CONTRIBUTING.md pour les guidelines.

## 📞 Support

- 📧 Email: support@political-scandals.com
- 🐛 Issues: [GitHub Issues](https://github.com/votre-repo/issues)
- 💬 Discord: [Serveur communautaire](https://discord.gg/votre-invite)

---

Développé avec ❤️ pour la transparence politique
