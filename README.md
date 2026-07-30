# 📚 MadaTours — Documentation

## Sommaire

- [À propos du projet](#à-propos-du-projet)
- [Stack technique](#stack-technique)
- [Structure du dépôt](#structure-du-dépôt)
- [Dossier ToursNosyMada](#dossier-toursnosymada)
- [Structure de la documentation](#structure-de-la-documentation)
- [Philosophie du projet](#philosophie-du-projet)
- [Objectifs de cette documentation](#objectifs-de-cette-documentation)
- [Statut](#statut)

---

## À propos du projet

**MadaTours** est un site web professionnel de réservation de voyages à Madagascar. Le projet est développé en équipe, avec pour ambition de produire une base de code et une documentation de niveau professionnel, réutilisable comme référence de portfolio.

## Stack technique

| Domaine | Choix |
| --- | --- |
| Framework | Next.js 16 (App Router) |
| Langage | TypeScript |
| UI | React 19 |
| Internationalisation | next-intl (`fr`, `en`, `mg`) |
| Styles | CSS Modules + variables CSS + Tailwind CSS (branché sur les tokens via `@theme inline`) |
| Animations | Framer Motion |
| Icônes | react-icons/fa6 |

## Structure du dépôt

```text
madatours/
├── docs/                  → toute la documentation du projet (voir ci-dessous)
├── public/                → assets statiques (logo.svg, icônes par défaut)
├── src/
│   ├── app/
│   │   └── [locale]/        → toutes les routes, sous le segment de langue (layout.tsx = root layout réel)
│   ├── assets/
│   ├── components/
│   │   ├── home/             → composants spécifiques à la page d'accueil (à construire)
│   │   ├── layout/            → Header/, Footer/, Navbar/, LanguageSwitcher/ (dossier par composant)
│   │   └── ui/                → Button/, Card/, Checkbox/, Input/, Select/, Textarea/, ThemeToggle/
│   ├── context/
│   ├── hooks/
│   ├── i18n/                → navigation.ts, request.ts, routing.ts
│   ├── lib/                 → constants, helpers
│   ├── messages/             → fr.json, en.json, mg.json
│   ├── proxy.ts              → détection de langue (remplace middleware.ts en Next.js 16)
│   ├── services/
│   ├── styles/                → tokens.css (variables CSS issues du Design System)
│   ├── types/
│   └── utils/
├── ToursNosyMada/          → voir section dédiée ci-dessous
├── AGENTS.md
├── CLAUDE.md
├── next.config.ts           → enveloppé avec createNextIntlPlugin()
├── package.json
└── tsconfig.json
```

> ⚠️ Cette section doit être mise à jour à chaque changement structurel important. Elle reflète l'état réel du dépôt, pas un plan théorique.

## Dossier ToursNosyMada

`ToursNosyMada` est un **dossier miroir**, situé à l'intérieur de `madatours`. Il contient une copie du contenu du dossier de développement, mise à jour via Git et Robocopy, pour permettre au mentor du projet de suivre l'avancement.

**Ce n'est pas un second projet actif** : tout le développement réel se fait exclusivement dans `madatours`. Ne jamais modifier de code directement dans `ToursNosyMada`.

> ⚠️ Penser à vérifier régulièrement que la synchronisation est à jour — un décalage a déjà été constaté entre les deux dossiers.

## Structure de la documentation

### Documentation générale

- [Architecture](./Architecture.md)
- [Git-Workflow](./Git-Workflow.md)
- [Contributing](./Contributing.md)
- [Roadmap](./Roadmap.md)
- [Roadmap-Developpement](./Roadmap-Developpement.md)

### Brand

- [Brand](./Brand/Brand.md)
- [Logo](./Brand/Logo.md)
- [Iconography](./Brand/Iconography.md)
- [Photography](./Brand/Photography.md)
- [Voice-and-Tone](./Brand/Voice-and-Tone.md)

### Design System

- [README](./Design-System/README.md)
- [Foundations](./Design-System/Foundations.md)
- [Colors](./Design-System/Colors.md)
- [Typography](./Design-System/Typography.md)
- [Spacing](./Design-System/Spacing.md)
- [Responsive](./Design-System/Responsive.md)
- [Buttons](./Design-System/Buttons.md)
- [Forms](./Design-System/Forms.md)
- [Components](./Design-System/Components.md)
- [Icons](./Design-System/Icons.md)
- [Animations](./Design-System/Animations.md)

### Technical

- [Internationalization](./Technical/Internationalization.md) — ✅ terminé
- [API](./Technical/API.md)
- [Authentication](./Technical/Authentication.md)
- [Deployment](./Technical/Deployment.md)
- [Environment](./Technical/Environment.md)
- [Performance](./Technical/Performance.md)
- [SEO](./Technical/SEO.md)

### Features

- [Blog](./Features/Blog.md)
- [Booking](./Features/Booking.md)
- [Contact](./Features/Contact.md)
- [Dashboard](./Features/Dashboard.md)
- [Excursions](./Features/Excursions.md)
- [Tours](./Features/Tours.md)

### Guides

- [Accessibility](./Guides/Accessibility.md)
- [CSS-Guidelines](./Guides/CSS-Guidelines.md)
- [Naming](./Guides/Naming.md)
- [NextJS-Guidelines](./Guides/NextJS-Guidelines.md)
- [React-Guidelines](./Guides/React-Guidelines.md)
- [Testing](./Guides/Testing.md)

### Management

- [Ideas](./Management/Ideas.md)
- [Meeting-Notes](./Management/Meeting-Notes.md)
- [Risks](./Management/Risks.md)
- [Sprint-Planning](./Management/Sprint-Planning.md)
- [Task-Board](./Management/Task-Board.md)

> ⚠️ Le contenu des documents Guides/ et Management/ est encore en attente d'audit. API.md et Authentication.md dépendent de décisions Features non tranchées (Booking, Contact, Dashboard) — à ne pas rédiger avant.

## Philosophie du projet

MadaTours est construit comme un vrai projet d'entreprise : architecture propre, documentation complète, Design System professionnel, base évolutive, code maintenable. Chaque décision technique doit être argumentée et suivre les standards industriels, en privilégiant simplicité, cohérence, réutilisabilité, accessibilité, performance et maintenabilité.

**Règle en vigueur : Documentation → Code → Documentation.** La documentation du Design System et des Features est rédigée en amont, mais chaque décision technique réelle prise en codant (choix d'implémentation, ajustement de valeur, nouvelle librairie) est reportée dans la documentation immédiatement après, avant de passer à la tâche suivante — jamais accumulée pour "plus tard". Ce projet n'impose plus de finaliser toute la documentation avant de commencer à coder : documentation et code avancent en alternance.

## Objectifs de cette documentation

- Faciliter l'intégration d'un nouveau développeur sans qu'il ait besoin de poser de questions.
- Standardiser le développement sur l'ensemble du projet.
- Documenter et justifier chaque décision technique.
- Garantir une cohérence entre le code et le Design System.
- Simplifier la maintenance sur le long terme.

## Statut

| Champ | Valeur |
| --- | --- |
| Version de la documentation | 1.2 |
| Dernière révision | À compléter |
| Documents en cours d'audit | Guides/, Management/, Technical/ (hors Internationalization.md, terminé) |
