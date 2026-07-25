# 🎬 Animations

## MadaTours Design System

Version : 1.0

---

## Sommaire

1. [Objectif](#1-objectif)
2. [Philosophie](#2-philosophie)
3. [Outils](#3-outils)
4. [Durées et easing](#4-durées-et-easing)
5. [Animations autorisées](#5-animations-autorisées)
6. [Cas d'usage courants](#6-cas-dusage-courants)
7. [Accessibilité — prefers-reduced-motion](#7-accessibilité--prefers-reduced-motion)
8. [Exemples de code](#8-exemples-de-code)
9. [Interdictions](#9-interdictions)
10. [Documents associés](#10-documents-associés)

---

## 1. Objectif

Ce document définit les règles officielles d'animation de l'interface MadaTours, afin que les mouvements à l'écran restent cohérents, fonctionnels et jamais gratuits.

## 2. Philosophie

L'animation doit **servir la compréhension**, jamais décorer pour décorer :

- confirmer qu'une action a été prise en compte (clic, soumission) ;
- guider l'attention vers ce qui change (apparition d'un message d'erreur, ouverture d'une modale) ;
- adoucir une transition d'état plutôt que de la rendre brutale.

Une animation qui n'aide pas la compréhension ne doit pas exister.

## 3. Outils

- **Framer Motion** : pour les animations complexes ou orchestrées (apparition séquencée, gestes, animations liées au scroll).
- **CSS Transition** : pour les micro-interactions simples (changement de couleur au survol, léger déplacement) — plus léger en performance qu'une librairie JS pour ces cas.

> Règle de choix : si l'animation ne dépend que d'un changement d'état simple (hover, focus, disabled), utiliser CSS. Si elle nécessite une orchestration (plusieurs éléments, séquence, geste utilisateur), utiliser Framer Motion.

## 4. Durées et easing

Toutes les durées viennent des tokens définis dans **[Foundations.md](./Foundations.md)** — jamais une valeur en dur.

| Token | Valeur | Usage |
| --- | --- | --- |
| `--duration-fast` | 150ms | Micro-interactions (survol) |
| `--duration-base` | 200ms | Interactions standard (déjà utilisé dans Buttons.md) |
| `--duration-slow` | 300ms | Transitions plus visibles (modale, drawer) |

| Courbe | Valeur CSS | Usage |
| --- | --- | --- |
| `ease-standard` | `cubic-bezier(0.4, 0, 0.2, 1)` | Usage par défaut, entrée et sortie |
| `ease-out` | `cubic-bezier(0, 0, 0.2, 1)` | Éléments qui apparaissent (accélère puis ralentit) |
| `ease-in` | `cubic-bezier(0.4, 0, 1, 1)` | Éléments qui disparaissent |

> ⚠️ **À valider par l'équipe** : les courbes d'easing n'étaient définies nulle part ailleurs — proposition standard basée sur les easings Material Design, à confirmer visuellement.

## 5. Animations autorisées

- **Fade** (opacité) — apparition/disparition d'éléments.
- **Scale** — retour tactile sur clic (ex. `scale(0.98)` déjà utilisé dans Buttons.md à l'état Active).
- **Slide** — ouverture de drawer, menu mobile.
- **Shadow** — élévation au survol (déjà utilisé dans Buttons.md à l'état Hover).

Aucune autre catégorie d'animation (rotation complexe, morphing, parallax prononcé) n'est autorisée sans validation de l'équipe.

## 6. Cas d'usage courants

| Élément | Animation | Durée |
| --- | --- | --- |
| Bouton — hover | Légère élévation (shadow) | `--duration-base` |
| Bouton — active | Scale 0.98 | `--duration-fast` |
| Modale — ouverture | Fade + scale léger | `--duration-slow` |
| Menu mobile — ouverture | Slide | `--duration-slow` |
| Message d'erreur de champ — apparition | Fade | `--duration-fast` |
| Carte (Excursion/Tour) — hover | Élévation (shadow) | `--duration-base` |

## 7. Accessibilité — prefers-reduced-motion

Toute animation non essentielle doit être désactivée ou réduite pour les utilisateurs ayant activé la préférence système "mouvement réduit".

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

Les animations purement décoratives ne doivent jamais être la seule source d'information (ex. ne pas compter uniquement sur une animation pour signaler une erreur — toujours l'accompagner d'un texte, comme déjà défini dans Forms.md).

## 8. Exemples de code

### Micro-interaction en CSS

```css
.button {
  transition: box-shadow var(--duration-base) ease-out;
}

.button:hover {
  box-shadow: var(--shadow-lg);
}

.button:active {
  transform: scale(0.98);
  transition-duration: var(--duration-fast);
}
```

### Apparition orchestrée avec Framer Motion

```tsx
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 8 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
>
  <ExcursionCard {...excursion} />
</motion.div>
```

## 9. Interdictions

- ❌ Utiliser une durée d'animation qui n'est pas un token de Foundations.md.
- ❌ Faire dépendre la compréhension d'une information uniquement d'une animation.
- ❌ Ignorer `prefers-reduced-motion`.
- ❌ Enchaîner plusieurs animations sur un même élément sans raison fonctionnelle claire.
- ❌ Utiliser une animation dont la durée dépasse `--duration-slow` (300ms) sans validation de l'équipe.

## 10. Documents associés

- [Foundations.md](./Foundations.md)
- [Buttons.md](./Buttons.md)
- [Components.md](./Components.md)
- [Forms.md](./Forms.md)
