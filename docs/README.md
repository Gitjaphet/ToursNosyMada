# 🎨 MadaTours Design System

Version : 1.1

---

## Sommaire

1. [Introduction](#1-introduction)
2. [Objectifs](#2-objectifs)
3. [Principes](#3-principes)
4. [Organisation du Design System](#4-organisation-du-design-system)
5. [Technologies](#5-technologies)
6. [Règles générales](#6-règles-générales)
7. [Cycle de création d'un composant](#7-cycle-de-création-dun-composant)
8. [Documentation](#8-documentation)
9. [Évolution](#9-évolution)
10. [Philosophie graphique de MadaTours](#10-philosophie-graphique-de-madatours)
11. [Documents associés](#11-documents-associés)

---

## 1. Introduction

Le Design System de **MadaTours** est la référence officielle pour la conception et le développement de l'interface utilisateur.

Il garantit une expérience cohérente sur l'ensemble du site, quel que soit le développeur ou le designer qui intervient sur le projet.

Toutes les nouvelles interfaces doivent respecter les règles définies dans ce dossier.

---

## 2. Objectifs

Le Design System poursuit les objectifs suivants :

- assurer une identité visuelle cohérente ;
- améliorer l'expérience utilisateur ;
- accélérer le développement ;
- favoriser la réutilisation des composants ;
- simplifier la maintenance ;
- garantir l'accessibilité et le responsive design.

---

## 3. Principes

Chaque interface développée doit respecter les principes suivants.

### 3.1 Simplicité

Les interfaces doivent être faciles à comprendre et à utiliser. Éviter toute surcharge visuelle.

### 3.2 Cohérence

Les mêmes composants doivent toujours avoir le même comportement et la même apparence. Un bouton primaire doit rester identique dans toute l'application.

### 3.3 Réutilisation

Avant de créer un nouveau composant, vérifier si un composant similaire existe déjà. La duplication est interdite lorsqu'une solution réutilisable est disponible.

### 3.4 Accessibilité

Les interfaces doivent être utilisables par le plus grand nombre. Les contrastes, les tailles de texte, la navigation clavier et les attributs ARIA doivent être pris en compte dès la conception.

### 3.5 Performance

Le Design System privilégie :

- des composants légers ;
- des animations fluides ;
- des images optimisées ;
- un chargement rapide.

---

## 4. Organisation du Design System

```text
Design-System/
├── README.md
├── Foundations.md
├── Colors.md
├── Typography.md
├── Spacing.md
├── Responsive.md
├── Buttons.md
├── Forms.md
├── Components.md
├── Icons.md
└── Animations.md
```

Chaque document décrit un aspect précis du système de design.

---

## 5. Technologies

Le Design System est implémenté avec :

- CSS Modules
- Variables CSS
- Tailwind CSS (branché sur les tokens CSS via `@theme inline` — voir [Foundations.md](./Foundations.md) §10)
- React
- TypeScript
- Framer Motion
- react-icons/fa6

---

## 6. Règles générales

### 6.1 Fondations

Border-radius, ombres, durées de transition, z-index, opacités et tailles d'icônes proviennent exclusivement de `Foundations.md`.

### 6.2 Couleurs

Toutes les couleurs proviennent exclusivement de `Colors.md`. Les couleurs codées directement dans les composants sont interdites.

### 6.3 Typographie

Toutes les tailles et polices sont définies dans `Typography.md`.

### 6.4 Espacements

Tous les espacements suivent une grille cohérente décrite dans `Spacing.md`.

### 6.5 Boutons

Tous les boutons utilisent le composant `Button`. Aucun bouton personnalisé ne doit être créé sans validation.

### 6.6 Formulaires

Les champs de saisie utilisent exclusivement les composants définis dans `Forms.md`.

### 6.7 Animations

Toutes les animations utilisent Framer Motion ou CSS Transition — voir `Animations.md`. Les animations doivent être discrètes et améliorer l'expérience utilisateur sans nuire aux performances.

### 6.8 Responsive

Le développement suit une approche **Mobile First**. Les breakpoints officiels sont définis dans `Responsive.md`.

---

## 7. Cycle de création d'un composant

Avant d'ajouter un nouveau composant :

```text
Besoin identifié → Vérifier s'il existe déjà → Créer le composant →
Créer son style → Tester → Documenter → Valider → Réutiliser
```

---

## 8. Documentation

Chaque composant documenté doit comporter :

- son objectif ;
- ses variantes ;
- ses propriétés (props) ;
- des exemples d'utilisation ;
- les règles d'accessibilité.

---

## 9. Évolution

Le Design System est un document vivant.

Toute modification importante (nouvelle couleur, nouveau composant, nouvelle règle) doit être discutée et validée par l'équipe avant d'être intégrée — et documentée dans le fichier concerné dès que la décision est prise (voir le cycle Documentation → Code → Documentation défini dans le [README racine](../README.md)).

---

## 10. Philosophie graphique de MadaTours

L'identité visuelle de MadaTours repose sur les éléments suivants :

- inspiration de la nature malgache ;
- simplicité et élégance ;
- mise en valeur des paysages ;
- expérience immersive ;
- navigation intuitive ;
- interfaces modernes et épurées.

Le Design System doit toujours servir cette vision.

---

## 11. Documents associés

- [Foundations](./Foundations.md)
- [Colors](./Colors.md)
- [Typography](./Typography.md)
- [Spacing](./Spacing.md)
- [Responsive](./Responsive.md)
- [Buttons](./Buttons.md)
- [Forms](./Forms.md)
- [Components](./Components.md)
- [Icons](./Icons.md)
- [Animations](./Animations.md)
