# 🧱 Foundations

## MadaTours Design System

Version : 1.0

---

## Sommaire

1. [Objectif](#1-objectif)
2. [Border Radius](#2-border-radius)
3. [Ombres (Box Shadow)](#3-ombres-box-shadow)
4. [Durées de transition](#4-durées-de-transition)
5. [Z-index](#5-z-index)
6. [Opacités](#6-opacités)
7. [Tailles d'icônes](#7-tailles-dicônes)
8. [Variables CSS](#8-variables-css)
9. [Règles](#9-règles)
10. [Intégration Tailwind v4](#10-intégration-tailwind-v4)
11. [Documents associés](#11-documents-associés)

---

## 1. Objectif

Ce document regroupe les tokens techniques transverses utilisés par l'ensemble des composants du Design System — border-radius, ombres, durées de transition, z-index, opacités et tailles d'icônes — afin d'éviter que chaque composant (Buttons, Forms, Cards, Navbar...) ne redéfinisse ses propres valeurs de façon isolée.

Tout composant doit référencer ces tokens plutôt que coder une valeur en dur.

## 2. Border Radius

| Token | Valeur | Utilisation |
| --- | --- | --- |
| `radius-sm` | 6px | Petits éléments (badges, tags) |
| `radius-md` | 8px | Champs de formulaire compacts |
| `radius-lg` | 12px | Boutons, champs de formulaire — **valeur déjà utilisée dans Buttons.md et Forms.md** |
| `radius-xl` | 16px | Cartes, modales |
| `radius-full` | 9999px | Éléments circulaires (avatars, pastilles) |

> ⚠️ **À valider** : seule `radius-lg` (12px) est confirmée par l'usage réel dans Buttons.md/Forms.md. Les autres valeurs sont une proposition d'échelle cohérente à valider avec l'équipe avant utilisation dans Components.md.

## 3. Ombres (Box Shadow)

| Token | Valeur | Utilisation |
| --- | --- | --- |
| `shadow-sm` | `0 1px 2px rgba(15, 23, 42, 0.05)` | Éléments légèrement surélevés (inputs au focus) |
| `shadow-md` | `0 4px 6px rgba(15, 23, 42, 0.08)` | Cartes au repos |
| `shadow-lg` | `0 10px 15px rgba(15, 23, 42, 0.10)` | Cartes au survol, dropdowns |
| `shadow-xl` | `0 20px 25px rgba(15, 23, 42, 0.12)` | Modales |
| `shadow-2xl` | `0 25px 50px rgba(15, 23, 42, 0.18)` | Éléments au premier plan (toasts, popovers) |

> ⚠️ **À valider par l'équipe** : cette échelle complète est une proposition cohérente avec la palette de couleurs neutres de Colors.md (base `#0F172A`), mais aucune valeur n'existait avant ce document — à confirmer visuellement une fois appliquée à un vrai composant.

## 4. Durées de transition

| Token | Valeur | Utilisation |
| --- | --- | --- |
| `duration-fast` | 150ms | Micro-interactions (changement de couleur au survol) |
| `duration-base` | 200ms | Interactions standard — **valeur déjà utilisée dans Buttons.md** (hover, active) |
| `duration-slow` | 300ms | Transitions plus visibles (ouverture de modale, drawer) |

## 5. Z-index

| Token | Valeur | Utilisation |
| --- | --- | --- |
| `z-dropdown` | 1000 | Menus déroulants |
| `z-sticky` | 1100 | Header/navbar fixe au scroll |
| `z-overlay` | 1200 | Fond assombri derrière une modale |
| `z-modal` | 1300 | Modales |
| `z-tooltip` | 1400 | Tooltips |
| `z-toast` | 1500 | Notifications toast |

> ⚠️ **À valider par l'équipe** : aucune réflexion préalable n'existait sur ce point. Cette échelle est une proposition standard (chaque couche à +100 pour laisser de la marge), à confirmer une fois que les composants concernés (Navbar, Modal, Toast) seront réellement conçus dans Components.md.

## 6. Opacités

| Token | Valeur | Utilisation |
| --- | --- | --- |
| `opacity-disabled` | 0.5 | Éléments désactivés (boutons, champs) |
| `opacity-hover` | 0.9 | Légère atténuation au survol (images, overlays) |
| `opacity-overlay` | 0.6 | Fond assombri derrière une modale |

> ⚠️ **À valider par l'équipe**, aucune valeur n'était définie ailleurs.

## 7. Tailles d'icônes

| Token | Valeur | Utilisation |
| --- | --- | --- |
| `icon-sm` | 16px | Icônes inline dans du texte |
| `icon-md` | 20px | Icônes dans les champs de formulaire, boutons de taille Small |
| `icon-lg` | 24px | Icônes dans les boutons standards, navigation |
| `icon-xl` | 32px | Icônes décoratives, mises en avant |

Ceci complète la section 4 (Tailles) d'**[Iconography.md](./Iconography.md)**, qui renvoyait vers Spacing.md sans valeurs précises — ces tokens comblent ce manque.

> ⚠️ **À valider par l'équipe.**

## 8. Variables CSS

```css
:root {
  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-full: 9999px;

  --shadow-sm: 0 1px 2px rgba(15, 23, 42, 0.05);
  --shadow-md: 0 4px 6px rgba(15, 23, 42, 0.08);
  --shadow-lg: 0 10px 15px rgba(15, 23, 42, 0.10);
  --shadow-xl: 0 20px 25px rgba(15, 23, 42, 0.12);
  --shadow-2xl: 0 25px 50px rgba(15, 23, 42, 0.18);

  --duration-fast: 150ms;
  --duration-base: 200ms;
  --duration-slow: 300ms;

  --z-dropdown: 1000;
  --z-sticky: 1100;
  --z-overlay: 1200;
  --z-modal: 1300;
  --z-tooltip: 1400;
  --z-toast: 1500;

  --opacity-disabled: 0.5;
  --opacity-hover: 0.9;
  --opacity-overlay: 0.6;

  --icon-sm: 16px;
  --icon-md: 20px;
  --icon-lg: 24px;
  --icon-xl: 32px;
}
```

## 9. Règles

- Toujours utiliser ces variables plutôt que coder une valeur en dur dans un composant.
- Toute nouvelle valeur nécessaire (un nouveau niveau d'ombre, par exemple) doit être ajoutée ici, jamais définie localement dans un composant.

---

## 10. Intégration Tailwind v4

Ces tokens sont branchés sur Tailwind via `@theme inline` dans `globals.css`, ce qui permet aux classes utilitaires de suivre les redéfinitions de `.dark` au runtime (au lieu de figer la valeur au build, comme le ferait `@theme` seul).

**Mappés dans Tailwind (utilisables en classes)** : couleurs, typographie, spacing (`--space-*` renommé `--spacing-*` pour respecter la convention Tailwind), border-radius, shadows.

**Non mappés dans Tailwind (utilisables uniquement en `var(...)` CSS)** : `--duration-*`, `--z-*`, `--opacity-*`, `--icon-*`.

> ⚠️ **À confirmer** : ce choix de ne pas mapper durées/z-index/opacités/icônes sur des classes Tailwind (`duration-fast`, `z-modal`...) a été fait au moment de l'implémentation — à valider que c'est un choix définitif plutôt qu'un oubli, notamment pour les durées qui pourraient bénéficier d'utilitaires Tailwind (`transition-duration-*`).

---

## 11. Documents associés

- [Colors.md](./Colors.md)
- [Typography.md](./Typography.md)
- [Spacing.md](./Spacing.md)
- [Iconography.md](../Brand/Iconography.md)
- [Buttons.md](./Buttons.md)
- [Forms.md](./Forms.md)
- [Components.md](./Components.md)
