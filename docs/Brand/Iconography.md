# 🎨 Iconography — MadaTours

Version : 1.0

---

## Sommaire

1. [Objectif](#1-objectif)
2. [Bibliothèque officielle](#2-bibliothèque-officielle)
3. [Choix du style : solid vs regular](#3-choix-du-style--solid-vs-regular)
4. [Tailles](#4-tailles)
5. [Couleurs](#5-couleurs)
6. [Accessibilité](#6-accessibilité)
7. [Convention d'usage dans le code](#7-convention-dusage-dans-le-code)
8. [Interdictions](#8-interdictions)
9. [Documents associés](#9-documents-associés)

---

## 1. Objectif

Ce document définit les règles d'utilisation des icônes dans MadaTours, afin de garantir une cohérence visuelle sur l'ensemble de l'interface, quel que soit le développeur qui intègre une icône.

## 2. Bibliothèque officielle

**`react-icons/fa6`** (Font Awesome 6) est la bibliothèque d'icônes officielle et exclusive du projet.

Aucune autre bibliothèque d'icônes (Material Icons, Ionicons, Feather, SVG faits main, etc.) ne doit être introduite sans passer par une mise à jour de ce document et validation de l'équipe — l'objectif est d'éviter un mélange de styles visuels incohérents entre les icônes d'un même écran.

```tsx
import { FaHouse, FaRegularHeart } from "react-icons/fa6";
```

> ⚠️ Vérifier le nom exact d'export de chaque icône sur la page officielle react-icons (`https://react-icons.github.io/react-icons/icons/fa6/`) avant intégration — les noms suivent la convention PascalCase du nom Font Awesome, mais peuvent varier légèrement.

## 3. Choix du style : solid vs regular

Font Awesome 6 propose deux styles gratuits : **solid** (plein) et **regular** (contour). Règle d'usage par défaut :

| Contexte | Style |
| --- | --- |
| Icône dans un bouton principal / action | Solid |
| Icône décorative dans du contenu (blog, cartes) | Solid |
| État "inactif" / "non sélectionné" (ex. favoris non ajoutés) | Regular |
| État "actif" / "sélectionné" (ex. favoris ajoutés) | Solid |

> ⚠️ **À valider avec le Design System visuel** : cette règle par défaut doit être confirmée une fois les premières maquettes/interfaces réelles disponibles. Elle sert de point de départ, pas de règle immuable.

## 4. Tailles

Les icônes doivent utiliser l'échelle de tailles définie dans **[Spacing.md](./Spacing.md)**, jamais une valeur arbitraire en pixels codée en dur dans un composant.

| Usage | Référence |
| --- | --- |
| Icône dans un bouton / élément de formulaire | Taille alignée sur le composant (voir [Buttons.md](./Buttons.md) / [Forms.md](./Forms.md)) |
| Icône seule (ex. réseaux sociaux, navigation) | Taille définie dans Spacing.md |

> ⚠️ **À compléter** : le tableau ci-dessus doit être rempli avec les tokens exacts de Spacing.md une fois ce document confronté à Iconography.md — actuellement je n'ai pas le contenu de Spacing.md sous les yeux pour citer les valeurs précises sans risquer d'inventer un chiffre faux.

## 5. Couleurs

Les icônes utilisent exclusivement les couleurs définies dans **[Colors.md](./Colors.md)**. Aucune couleur codée en dur (hexadécimal en ligne) ne doit être appliquée à une icône dans le code.

```tsx
// ✅ Correct
<FaHouse className={styles.iconPrimary} />

// ❌ Interdit
<FaHouse style={{ color: "#FF5733" }} />
```

## 6. Accessibilité

* Une icône **purement décorative** (accompagnée d'un texte visible à côté) doit être masquée aux lecteurs d'écran : `aria-hidden="true"`.
* Une icône **seule, porteuse de sens** (ex. bouton fermer représenté uniquement par une icône) doit avoir un label accessible via `aria-label` sur l'élément parent (bouton, lien).

```tsx
// Icône décorative à côté d'un texte
<FaHouse aria-hidden="true" />
<span>Accueil</span>

// Icône seule et porteuse de sens
<button aria-label="Fermer">
  <FaXmark aria-hidden="true" />
</button>
```

Voir aussi **[Guides/Accessibility.md](../Guides/Accessibility.md)** pour les règles générales d'accessibilité du projet.

## 7. Convention d'usage dans le code

* Toujours importer les icônes directement depuis `react-icons/fa6`, jamais via un ré-export global type `import * as Icons`.
* Ne pas envelopper systématiquement chaque icône dans un composant wrapper sauf si un besoin réel de style partagé apparaît (à documenter dans [Components.md](./Components.md) si c'est le cas).

## 8. Interdictions

* Ne pas mélanger plusieurs bibliothèques d'icônes dans une même interface.
* Ne pas utiliser une icône Font Awesome en dehors de son sens original (ex. utiliser une icône "corbeille" pour une action qui n'est pas une suppression).
* Ne pas coder en dur une couleur ou une taille en dehors des références Colors.md / Spacing.md.
* Ne pas laisser une icône seule sans alternative accessible (voir section 6).

## 9. Documents associés

* [Brand.md](../Brand/Brand.md)
* [Colors.md](./Colors.md)
* [Spacing.md](./Spacing.md)
* [Buttons.md](./Buttons.md)
* [Forms.md](./Forms.md)
* [Components.md](./Components.md)
* [Guides/Accessibility.md](../Guides/Accessibility.md)
