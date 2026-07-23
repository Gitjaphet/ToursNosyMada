# 📚 MadaTours — Documentation

## Sommaire

- [📚 MadaTours — Documentation](#-madatours--documentation)
  - [Sommaire](#sommaire)
  - [À propos du projet](#à-propos-du-projet)
  - [Stack technique](#stack-technique)
  - [Structure du dépôt](#structure-du-dépôt)
  - [Dossier ToursNosyMada](#dossier-toursnosymada)
  - [Structure de la documentation](#structure-de-la-documentation)
    - [Documentation générale](#documentation-générale)
    - [Brand](#brand)
    - [Design System](#design-system)
    - [Technical](#technical)
    - [Features](#features)
    - [Guides](#guides)
    - [Management](#management)
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
| Styles | CSS Modules + variables CSS |
| Animations | Framer Motion |
| Icônes | React Icons |

## Structure du dépôt

```text
madatours/
├── docs/                  → toute la documentation du projet (voir ci-dessous)
├── public/                → assets statiques
├── src/
│   ├── app/                → routes Next.js (App Router)
│   ├── assets/
│   ├── components/
│   │   ├── home/
│   │   ├── layout/          → Header, Footer, Navbar, LanguageSwitcher
│   │   └── ui/
│   ├── context/
│   ├── hooks/
│   ├── i18n/                → navigation, request, routing
│   ├── lib/                 → constants, helpers
│   ├── messages/             → fr.json, en.json, mg.json
│   ├── services/
│   ├── styles/
│   ├── types/
│   └── utils/
├── ToursNosyMada/          → voir section dédiée ci-dessous
├── AGENTS.md
├── CLAUDE.md
├── package.json
└── tsconfig.json
```

> ⚠️ Cette section doit être mise à jour à chaque changement structurel important. Elle reflète l'état réel du dépôt, pas un plan théorique.

## Dossier ToursNosyMada

`ToursNosyMada` est un **dossier miroir**, situé à l'intérieur de `madatours`. Il contient une copie du contenu du dossier de développement, mise à jour via Git et Robocopy, pour permettre au mentor du projet de suivre l'avancement.

**Ce n'est pas un second projet actif** : tout le développement réel se fait exclusivement dans `madatours`. Ne jamais modifier de code directement dans `ToursNosyMada`.

## Structure de la documentation

### Documentation générale

- [Architecture](./Architecture.md)
- [Git-Workflow](./Git-Workflow.md)
- [Contributing](./Contributing.md)
- [Roadmap](./Roadmap.md)

### Brand

- [Brand](./Brand/Brand.md)
- [Logo](./Brand/Logo.md)
- [Iconography](./Brand/Iconography.md)
- [Photography](./Brand/Photography.md)
- [Voice-and-Tone](./Brand/Voice-and-Tone.md)

### Design System

- [README](./Design-System/README.md)
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

- [API](./Technical/API.md)
- [Authentication](./Technical/Authentication.md)
- [Deployment](./Technical/Deployment.md)
- [Environment](./Technical/Environment.md)
- [Internationalization](./Technical/Internationalization.md)
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

> ⚠️ Le contenu de ces documents est en cours d'audit. Certains peuvent être incomplets, redondants, ou amenés à être fusionnés/supprimés.

## Philosophie du projet

MadaTours est construit comme un vrai projet d'entreprise : architecture propre, documentation complète, Design System professionnel, base évolutive, code maintenable. Chaque décision technique doit être argumentée et suivre les standards industriels, en privilégiant simplicité, cohérence, réutilisabilité, accessibilité, performance et maintenabilité.

**Règle en vigueur** : toute la documentation doit être finalisée avant le début du développement. Aucun nouveau document n'est ajouté tant que ceux prévus ne sont pas terminés.

## Objectifs de cette documentation

- Faciliter l'intégration d'un nouveau développeur sans qu'il ait besoin de poser de questions.
- Standardiser le développement sur l'ensemble du projet.
- Documenter et justifier chaque décision technique.
- Garantir une cohérence entre le code et le Design System.
- Simplifier la maintenance sur le long terme.

## Statut

| Champ | Valeur |
| --- | --- |
| Version de la documentation | 1.0 |
| Dernière révision | À compléter |
| Documents en cours d'audit | Oui |
