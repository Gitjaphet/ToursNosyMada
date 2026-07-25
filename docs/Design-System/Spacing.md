# 📐 Spacing

## MadaTours Design System

Version : 1.0

---

## Sommaire

1. [Objectif](#1-objectif)
2. [Principe](#2-principe)
3. [Échelle officielle](#3-échelle-officielle)
4. [Variables CSS](#4-variables-css)
5. [Marges](#5-marges)
6. [Padding](#6-padding)
7. [Gap](#7-gap)
8. [Largeur maximale](#8-largeur-maximale)
9. [Responsive](#9-responsive)
10. [Règles](#10-règles)
11. [Bonnes pratiques](#11-bonnes-pratiques)
12. [Interdictions](#12-interdictions)
13. [Documents associés](#13-documents-associés)

---

## 1. Objectif

Ce document définit le système officiel d'espacement de MadaTours.

Tous les espacements (marges, paddings, gaps, dimensions de composants) doivent respecter cette grille afin de garantir une interface harmonieuse et cohérente.

---

## 2. Principe

MadaTours utilise une **grille de base de 8 pixels**.

Toutes les valeurs d'espacement sont des multiples de 8.

Exemples valides : 8px, 16px, 24px, 32px, 40px, 48px, 64px.

Exemples à éviter : 13px, 19px, 27px, 51px.

---

## 3. Échelle officielle

| Token | Valeur | Utilisation |
| --- | --- | --- |
| xs | 4px | Ajustements très fins |
| sm | 8px | Petit espacement |
| md | 16px | Espacement standard |
| lg | 24px | Entre composants |
| xl | 32px | Entre sections proches |
| 2xl | 48px | Grandes sections |
| 3xl | 64px | Blocs principaux |
| 4xl | 96px | Espaces majeurs |
| 5xl | 128px | Pages Hero |

---

## 4. Variables CSS

```css
:root {
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 64px;
  --space-4xl: 96px;
  --space-5xl: 128px;
}
```

---

## 5. Marges

Les marges entre les éléments doivent respecter cette hiérarchie.

| Relation | Espacement |
| --- | --- |
| Titre → Paragraphe | 16px (`--space-md`) |
| Paragraphe → Bouton | 24px (`--space-lg`) |
| Section → Section | 96px (`--space-4xl`) |
| Carte → Carte | 24px (`--space-lg`) |
| Icône → Texte | 8px (`--space-sm`) |

---

## 6. Padding

### 6.1 Bouton

| Direction | Valeur |
| --- | --- |
| Vertical | 12px |
| Horizontal | 24px |

### 6.2 Carte

24px sur tous les côtés.

### 6.3 Champ de formulaire

16px sur tous les côtés.

### 6.4 Section

96px en haut et en bas.

### 6.5 Container

32px sur les côtés.

---

## 7. Gap

Utiliser la propriété `gap` plutôt que des marges lorsque cela est possible.

| Contexte | Valeur |
| --- | --- |
| Petite liste | `gap: var(--space-sm);` (8px) |
| Liste classique | `gap: var(--space-md);` (16px) |
| Cartes | `gap: var(--space-lg);` (24px) |
| Grandes sections | `gap: var(--space-2xl);` (48px) |

---

## 8. Largeur maximale

Le contenu principal est centré.

| Élément | Largeur maximale |
| --- | --- |
| Container | 1280px |
| Texte d'article | 800px |
| Formulaire | 600px |
| Carte modale | 500px |

---

## 9. Responsive

Les espacements diminuent progressivement sur les petits écrans.

| Desktop | Mobile |
| --- | --- |
| 128px | 64px |
| 96px | 48px |
| 64px | 32px |
| 48px | 24px |
| 32px | 16px |

Le rythme visuel reste identique, seule l'échelle est adaptée.

---

## 10. Règles

Toujours utiliser les variables CSS.

Incorrect :

```css
margin-top: 27px;
```

Correct :

```css
margin-top: var(--space-lg);
```

---

## 11. Bonnes pratiques

- ✔ Utiliser `gap` avec Flexbox et Grid.
- ✔ Conserver des espacements réguliers.
- ✔ Éviter les valeurs arbitraires.
- ✔ Utiliser les tokens du Design System.
- ✔ Respecter le rythme vertical.

---

## 12. Interdictions

- ❌ Inventer une nouvelle valeur d'espacement.
- ❌ Mélanger plusieurs systèmes de mesure sans justification.
- ❌ Utiliser des marges pour remplacer un `gap` lorsque celui-ci est adapté.

---

## 13. Documents associés

- [Foundations.md](./Foundations.md)
- [Typography.md](./Typography.md)
- [Colors.md](./Colors.md)
- [Responsive.md](./Responsive.md)
- [Components.md](./Components.md)
