# 🧩 Components

## MadaTours Design System

Version : 1.0

---

## Sommaire

1. [Objectif](#1-objectif)
2. [Principes](#2-principes)
3. [Organisation des dossiers](#3-organisation-des-dossiers)
4. [Convention de nommage](#4-convention-de-nommage)
5. [Anatomie d'un composant](#5-anatomie-dun-composant)
6. [Conventions TypeScript](#6-conventions-typescript)
7. [Composants UI génériques](#7-composants-ui-génériques)
8. [Composants Layout](#8-composants-layout)
9. [Composants de fonctionnalité (Features)](#9-composants-de-fonctionnalité-features)
10. [Composition et réutilisabilité](#10-composition-et-réutilisabilité)
11. [Accessibilité](#11-accessibilité)
12. [Interdictions](#12-interdictions)
13. [Documents associés](#13-documents-associés)

---

## 1. Objectif

Ce document définit comment les composants React de MadaTours sont organisés, nommés et construits, afin que tout développeur de l'équipe structure son code de la même façon.

Aucun composant ne doit exister sans respecter le Design System (Colors, Typography, Spacing, Foundations) et les documents de composants déjà spécifiés (Buttons.md, Forms.md).

## 2. Principes

- Un composant a une seule responsabilité claire.
- Un composant générique (`ui/`) ne connaît rien du métier (pas de logique de réservation, pas de texte lié à une fonctionnalité précise codé en dur).
- Toute valeur visuelle (couleur, espacement, rayon, ombre) vient des tokens du Design System — jamais une valeur en dur.
- La duplication de composants visuellement similaires est interdite (voir section 12).

## 3. Organisation des dossiers

MadaTours organise ses composants **par rôle**, pas par Atomic Design. Cette convention est déjà en place dans le code existant et devient ici la règle officielle.

```text
src/components/
├── ui/            → composants génériques réutilisables partout (Button, Input, Card, Badge...)
├── layout/         → composants de structure de page (Header, Footer, Navbar, LanguageSwitcher)
├── home/           → composants spécifiques à la page d'accueil
└── <feature>/      → composants spécifiques à une fonctionnalité (ex. booking/, excursions/, tours/)
                       créé au fur et à mesure des besoins réels, pas à l'avance
```

> Un composant ne migre de `<feature>/` vers `ui/` que lorsqu'un second contexte a un besoin réel de le réutiliser — ne pas généraliser par anticipation.

## 4. Convention de nommage

- Nom de fichier et de composant en **PascalCase** : `Button.tsx`, `ExcursionCard.tsx`.
- Un composant = un fichier. Pas plusieurs composants exportés depuis un même fichier, sauf sous-composants très étroitement liés (ex. `Card` + `CardHeader` dans le même fichier `Card.tsx`).
- Le fichier de styles associé porte le même nom : `Button.module.css`.

## 5. Anatomie d'un composant

```text
ui/Button/
├── Button.tsx
├── Button.module.css
└── index.ts        (ré-export : export { Button } from "./Button")
```

Le fichier `index.ts` est optionnel pour les composants simples à fichier unique ; recommandé dès qu'un composant a plusieurs fichiers associés (sous-composants, hooks locaux).

## 6. Conventions TypeScript

- Les props sont typées via `interface`, suffixée `Props` : `interface ButtonProps { ... }`.
- Chaque prop non triviale est commentée en JSDoc si son rôle n'est pas évident du nom seul.
- Les props avec un nombre limité de valeurs valides utilisent une union de littéraux, jamais `string` générique.

```tsx
interface ButtonProps {
  /** Variante visuelle du bouton */
  variant: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  loading?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  fullWidth?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
}
```

> Ceci corrige au passage un manque identifié dans Buttons.md : la prop `variant` y était typée `string` sans lister les valeurs valides.

## 7. Composants UI génériques

Composants déjà spécifiés dans leurs documents dédiés — Components.md ne fait que les référencer, pas les redéfinir :

| Composant | Spécifié dans |
| --- | --- |
| `Button` | [Buttons.md](./Buttons.md) |
| `Input`, `Select`, `Checkbox`, `Radio`, `Switch`, `Textarea` | [Forms.md](./Forms.md) |

## 8. Composants Layout

Ces composants existent déjà comme fichiers vides dans le code (`src/components/layout/`). Voici leur cahier des charges, à implémenter :

### 8.1 Header

Conteneur englobant `Navbar` (et un bandeau d'information optionnel type promo/annonce, à confirmer selon le besoin réel).

### 8.2 Navbar

| Élément | Détail |
| --- | --- |
| Logo | Voir [Brand/Logo.md](../Brand/Logo.md) |
| Liens de navigation | Desktop : menu horizontal — voir [Responsive.md](./Responsive.md) §7 |
| Sélecteur de langue | Composant `LanguageSwitcher` |
| Comportement mobile | Menu hamburger — voir [Responsive.md](./Responsive.md) §7 |

### 8.3 Footer

| Élément | Détail |
| --- | --- |
| Liens rapides | Vers les pages principales (Excursions, Tours, Contact...) |
| Coordonnées | Téléphone, email |
| Réseaux sociaux | Icônes — voir [Brand/Iconography.md](../Brand/Iconography.md) |
| Newsletter | À confirmer si retenue (voir statut dans [Features/Blog.md](../Features/Blog.md) pour la logique éditoriale associée) |

### 8.4 LanguageSwitcher

| Prop | Type | Description |
| --- | --- | --- |
| `currentLocale` | `"fr" \| "en" \| "mg"` | Langue active |
| `onChange` | `(locale: string) => void` | Changement de langue |

> ⚠️ **À valider par l'équipe** : ce cahier des charges est une proposition basée sur ce qu'on sait déjà du projet (i18n en 3 langues, structure Header/Footer/Navbar existante) — pas une spec figée. À ajuster une fois que le contenu réel (repris de la structure du site de référence, avec vos propres textes) sera disponible.

## 9. Composants de fonctionnalité (Features)

Basés sur les modèles de données déjà définis dans les documents Features :

| Composant | Basé sur | Champs principaux |
| --- | --- | --- |
| `ExcursionCard` | [Features/Excursions.md](../Features/Excursions.md) §2 | image, titre, type, durée, localisation |
| `TourCard` | [Features/Tours.md](../Features/Tours.md) §3 | image, titre, thème, durée (jours/nuits), région |

Ces cartes doivent réutiliser une base commune (ex. un composant `Card` générique dans `ui/`) plutôt que dupliquer la structure visuelle — voir section 10.

## 10. Composition et réutilisabilité

- Si deux composants de fonctionnalités différentes partagent plus de 70% de leur structure visuelle (ex. `ExcursionCard` et `TourCard`), extraire une base commune dans `ui/` (ex. `Card`) et composer par-dessus plutôt que dupliquer.
- Ne jamais copier-coller un composant existant pour en faire une variante légère — ajouter une prop ou composer.

## 11. Accessibilité

- Tout composant interactif (bouton, lien, champ) doit être utilisable au clavier.
- Les composants purement décoratifs (icônes à côté d'un texte, images de fond) suivent les règles de [Brand/Iconography.md](../Brand/Iconography.md) §6.
- Les composants Layout (Navbar, Footer) doivent utiliser des balises sémantiques HTML5 (`<nav>`, `<header>`, `<footer>`).

## 12. Interdictions

- ❌ Créer un nouveau composant visuellement identique à un composant existant.
- ❌ Coder une couleur, un espacement, un rayon ou une ombre en dur au lieu d'utiliser les tokens.
- ❌ Mélanger logique métier (ex. appel API de réservation) dans un composant `ui/`.
- ❌ Créer un composant dans `ui/` pour un besoin utilisé une seule fois — le laisser dans le dossier de sa fonctionnalité jusqu'à preuve de réutilisation.

## 13. Documents associés

- [Foundations.md](./Foundations.md)
- [Colors.md](./Colors.md)
- [Typography.md](./Typography.md)
- [Spacing.md](./Spacing.md)
- [Responsive.md](./Responsive.md)
- [Buttons.md](./Buttons.md)
- [Forms.md](./Forms.md)
- [Brand/Logo.md](../Brand/Logo.md)
- [Brand/Iconography.md](../Brand/Iconography.md)
- [Features/Excursions.md](../Features/Excursions.md)
- [Features/Tours.md](../Features/Tours.md)
