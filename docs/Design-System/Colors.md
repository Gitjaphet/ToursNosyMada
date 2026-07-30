# 🎨 Colors

## MadaTours Design System

Version : 1.0

---

## Sommaire

1. [Objectif](#1-objectif)
2. [Identité visuelle](#2-identité-visuelle)
3. [Palette principale](#3-palette-principale)
4. [Couleur secondaire](#4-couleur-secondaire)
5. [Accent](#5-accent)
6. [Couleurs neutres](#6-couleurs-neutres)
7. [Texte](#7-texte)
8. [États](#8-états)
9. [Variables CSS](#9-variables-css)
10. [Règles d'utilisation](#10-règles-dutilisation)
11. [Contraste](#11-contraste)
12. [Interdictions](#12-interdictions)
13. [Évolution](#13-évolution)
14. [Documents associés](#14-documents-associés)

---

## 1. Objectif

Ce document définit la palette officielle de MadaTours.

Toutes les couleurs utilisées dans le projet doivent provenir exclusivement de cette palette.

L'utilisation de couleurs codées directement dans les composants est interdite.

Toutes les couleurs seront accessibles via des variables CSS.

---

## 2. Identité visuelle

La palette de MadaTours est inspirée de Madagascar :

- 🌿 la végétation tropicale ;
- 🌊 l'océan Indien ;
- ☀️ les couchers de soleil ;
- 🏖️ les plages ;
- 🌍 la découverte et l'aventure.

L'objectif est de transmettre :

- confiance ;
- évasion ;
- nature ;
- modernité ;
- élégance.

---

## 3. Palette principale

### 3.1 Primary

Couleur principale de la marque.

Utilisation :

- boutons principaux
- liens importants
- éléments interactifs
- accents

| Nom | HEX |
| --- | --- |
| Primary 50 | #ECFDF5 |
| Primary 100 | #D1FAE5 |
| Primary 200 | #A7F3D0 |
| Primary 300 | #6EE7B7 |
| Primary 400 | #34D399 |
| Primary 500 | **#10B981** |
| Primary 600 | **#059669** |
| Primary 700 | #047857 |
| Primary 800 | #065F46 |
| Primary 900 | #064E3B |

---

## 4. Couleur secondaire

Inspirée des couchers de soleil malgaches.

| Nom | HEX |
| --- | --- |
| Secondary 50 | #FFF7ED |
| Secondary 100 | #FFEDD5 |
| Secondary 200 | #FED7AA |
| Secondary 300 | #FDBA74 |
| Secondary 400 | #FB923C |
| Secondary 500 | **#F97316** |
| Secondary 600 | **#EA580C** |
| Secondary 700 | #C2410C |
| Secondary 800 | #9A3412 |
| Secondary 900 | #7C2D12 |

---

## 5. Accent

Inspiré de l'océan.

| Nom | HEX |
| --- | --- |
| Accent 500 | **#0EA5E9** |
| Accent 600 | **#0284C7** |
| Accent 700 | **#0369A1** |

Utilisation :

- badges
- liens secondaires
- illustrations
- éléments décoratifs

---

## 6. Couleurs neutres

| Nom | HEX | Usage |
| --- | --- | --- |
| Background | #FFFFFF | Fond principal |
| Surface | #F8FAFC | Fond des cartes/sections |
| Border | #E2E8F0 | Bordures |
| Divider | #CBD5E1 | Séparateurs |

---

## 7. Texte

| Nom | HEX | Usage |
| --- | --- | --- |
| Titre | #0F172A | Titres |
| Texte principal | #334155 | Corps de texte |
| Texte secondaire | #64748B | Texte atténué |
| Texte désactivé | #94A3B8 | Éléments désactivés |

---

## 8. États

| Nom | HEX |
| --- | --- |
| Success | #22C55E |
| Warning | #F59E0B |
| Error | #EF4444 |
| Info | #3B82F6 |

---

## 9. Variables CSS

Toutes les couleurs sont exposées sous forme de variables CSS.

```css
:root {
  --color-primary: #059669;
  --color-primary-light: #10B981;
  --color-primary-dark: #047857;

  --color-secondary: #EA580C;

  --color-accent: #0284C7;

  --color-background: #F1F5F9;
  --color-surface: #F8FAFC;

  --color-text: #334155;
  --color-heading: #0F172A;
  --color-muted: #64748B;

  --color-border: #E2E8F0;

  --color-success: #22C55E;
  --color-warning: #F59E0B;
  --color-error: #EF4444;
  --color-info: #3B82F6;
}
```

> **Changement par rapport à la v1.0** : `--color-background` est passé de `#FFFFFF` à `#F1F5F9` lors de l'implémentation — décision prise au moment de voir le rendu réel à l'écran. `#FFFFFF` reste la valeur de `--color-surface`, ce qui crée un léger contraste entre le fond de page et les cartes/sections.

### 9.1 Dark mode

Déclenché **manuellement** via la classe `.dark` posée sur `<html>` (ex. `next-themes`) — pas automatique via `prefers-color-scheme`. Seules les couleurs et les ombres changent ; typographie, espacements, rayons, durées, z-index, opacités et tailles d'icônes restent identiques dans les deux thèmes.

```css
.dark {
  --color-primary: #34D399;      /* Primary 400 */
  --color-secondary: #FB923C;    /* Secondary 400 */
  --color-accent: #0EA5E9;       /* Accent 500 */

  --color-background: #0F172A;
  --color-surface: #1E293B;      /* nouvelle valeur, propre au dark mode */

  --color-text: #CBD5E1;
  --color-heading: #F8FAFC;
  --color-muted: #94A3B8;

  --color-border: #334155;
}
```

Chaque teinte du dark mode réutilise une nuance déjà cataloguée dans les échelles Primary/Secondary/Accent (section 3-5) ou dans les neutres, à l'exception de `--color-surface: #1E293B`, propre au dark mode.

### 9.2 Footer — tokens dédiés

Le footer utilise des tokens séparés plutôt que `--color-background`/`--color-surface`, pour rester une bande visuellement sombre dans les **deux** thèmes (jamais un fond blanc en clair) :

```css
--footer-bg: #0F172A;      /* #020617 en dark mode, encore plus sombre */
--footer-heading: #F8FAFC;
--footer-text: #CBD5E1;
--footer-muted: #94A3B8;
--footer-divider: #334155;
```

---

## 10. Règles d'utilisation

Le vert (Primary) représente l'action principale.

L'orange (Secondary) attire l'attention sur les promotions, les offres ou les appels à l'action secondaires.

Le bleu (Accent) met en valeur les informations complémentaires.

Les couleurs d'état ne doivent jamais remplacer les couleurs de la marque.

---

## 11. Contraste

Toutes les combinaisons de couleurs doivent respecter les recommandations WCAG AA au minimum.

Les textes doivent rester parfaitement lisibles sur tous les arrière-plans.

---

## 12. Interdictions

- ❌ Utiliser des couleurs non définies dans ce document.
- ❌ Mélanger plusieurs nuances sans justification.
- ❌ Modifier les couleurs directement dans les composants.
- ❌ Utiliser une couleur d'état (succès, erreur...) comme couleur principale de l'application.

---

## 13. Évolution

Toute nouvelle couleur devra être :

- justifiée ;
- documentée ;
- validée par l'équipe avant son intégration.

---

## 14. Documents associés

- [Foundations.md](./Foundations.md)
- [Typography.md](./Typography.md)
- [Spacing.md](./Spacing.md)
- [Responsive.md](./Responsive.md)
- [Buttons.md](./Buttons.md)
- [Forms.md](./Forms.md)
