# 🚀 Portfolio Full Stack Developer

Portfolio moderne, immersif et premium pour développeur Full Stack avec une identité visuelle forte et des animations fluides.

## ✨ Caractéristiques

- 🎨 **Design Futuriste** - Interface dark mode élégante avec dégradés violet/bleu/cyan
- 🌊 **Animations Fluides** - Framer Motion pour des transitions premium
- 📱 **Responsive** - Parfaitement adapté mobile, tablette et desktop
- ⚡ **Performance** - Next.js 14 avec optimisations avancées
- 🎯 **Glassmorphism** - Effets de verre et glow modernes
- 🔥 **Expérience Immersive** - Background animé et micro-interactions

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - Framework React avec App Router
- **TypeScript** - Typage statique
- **TailwindCSS** - Styling utility-first
- **Framer Motion** - Animations fluides
- **Lucide React** - Icônes modernes
- **shadcn/ui** - Composants UI premium

### Outils
- **ESLint** - Linting
- **Prettier** - Formatage de code

## 📦 Installation

```bash
# Cloner le projet
git clone [votre-repo]

# Installer les dépendances
cd portfolio-fullstack
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 🎯 Sections

1. **Hero Section** - Introduction impactante avec animations
2. **About Section** - Présentation et compétences clés
3. **Tech Stack** - Technologies maîtrisées avec badges animés
4. **Projects** - Cartes de projets avec hover effects premium
5. **Contact** - Moyens de contact avec design élégant

## 🎨 Personnalisation

### Modifier les informations personnelles

Éditez les fichiers suivants :

- `components/HeroSection.tsx` - Titre et description
- `components/AboutSection.tsx` - Présentation
- `components/ProjectsSection.tsx` - Vos projets
- `components/ContactSection.tsx` - Informations de contact

### Modifier les couleurs

Les couleurs principales sont dans `tailwind.config.ts` et utilisent :
- Violet : `violet-400`, `violet-500`, `violet-600`
- Bleu : `blue-500`, `blue-600`
- Cyan : `cyan-400`, `cyan-500`, `cyan-600`

### Ajouter des projets

Dans `components/ProjectsSection.tsx`, ajoutez un objet dans le tableau `projects` :

```typescript
{
  title: "Nom du Projet",
  type: "Type de projet",
  description: "Description...",
  features: ["Feature 1", "Feature 2"],
  technologies: ["Tech1", "Tech2"],
  gradient: "from-color-500 to-color-600",
  image: "🚀",
}
```

## 📱 Responsive Design

Le portfolio est entièrement responsive avec des breakpoints :
- Mobile : < 768px
- Tablette : 768px - 1024px
- Desktop : > 1024px

## 🚀 Déploiement

### Vercel (Recommandé)

```bash
npm install -g vercel
vercel
```

### Build Production

```bash
npm run build
npm start
```

## 🎭 Animations

Toutes les animations utilisent Framer Motion :
- Apparitions au scroll
- Hover effects
- Transitions de page
- Background animé avec canvas

## 📄 License

MIT License - Libre d'utilisation et de modification

## 🤝 Contact

- GitHub : [@votre-username](https://github.com)
- LinkedIn : [Votre Nom](https://linkedin.com)
- Email : votre.email@example.com

---

Développé avec ❤️ et Next.js
