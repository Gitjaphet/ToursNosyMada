# 🎨 MadaTours Design System

Version : 1.0

---

## 1. Introduction

Le Design System de **MadaTours** est la référence officielle pour la conception et le développement de l'interface utilisateur.

Il garantit une expérience cohérente sur l'ensemble du site, quel que soit le développeur ou le designer qui intervient sur le projet.

Toutes les nouvelles interfaces doivent respecter les règles définies dans ce dossier.

---

## 2. Objectifs

Le Design System poursuit les objectifs suivants :

* assurer une identité visuelle cohérente ;
* améliorer l'expérience utilisateur ;
* accélérer le développement ;
* favoriser la réutilisation des composants ;
* simplifier la maintenance ;
* garantir l'accessibilité et le responsive design.

---

## 3. Principes

Chaque interface développée doit respecter les principes suivants.

## Simplicité

Les interfaces doivent être faciles à comprendre et à utiliser.

Éviter toute surcharge visuelle.

---

## Cohérence

Les mêmes composants doivent toujours avoir le même comportement et la même apparence.

Un bouton primaire doit rester identique dans toute l'application.

---

## Réutilisation

Avant de créer un nouveau composant, vérifier si un composant similaire existe déjà.

La duplication est interdite lorsqu'une solution réutilisable est disponible.

---

## Accessibilité

Les interfaces doivent être utilisables par le plus grand nombre.

Les contrastes, les tailles de texte, la navigation clavier et les attributs ARIA doivent être pris en compte dès la conception.

---

## Performance

Le Design System privilégie :

* des composants légers ;
* des animations fluides ;
* des images optimisées ;
* un chargement rapide.

---

## 4. Organisation du Design System

Le dossier est organisé comme suit :

```text
Design-System/

README.md

Colors.md

Typography.md

Spacing.md

Components.md

Buttons.md

Forms.md

Icons.md

Animations.md

Responsive.md
```

Chaque document décrit un aspect précis du système de design.

---

## 5. Technologies

Le Design System est implémenté avec :

* CSS Modules
* Variables CSS
* React
* TypeScript
* Framer Motion
* React Icons

---

## 6. Règles générales

## Couleurs

Toutes les couleurs proviennent exclusivement de `Colors.md`.

Les couleurs codées directement dans les composants sont interdites.

---

## Typographie

Toutes les tailles et polices sont définies dans `Typography.md`.

---

## Espacements

Tous les espacements suivent une grille cohérente décrite dans `Spacing.md`.

---

## Boutons

Tous les boutons utilisent le composant `Button`.

Aucun bouton personnalisé ne doit être créé sans validation.

---

## Formulaires

Les champs de saisie utilisent exclusivement les composants définis dans `Forms.md`.

---

## Animations

Toutes les animations utilisent Framer Motion.

Les animations doivent être discrètes et améliorer l'expérience utilisateur sans nuire aux performances.

---

## Responsive

Le développement suit une approche **Mobile First**.

Les breakpoints officiels sont définis dans `Responsive.md`.

---

## 7. Cycle de création d'un composant

Avant d'ajouter un nouveau composant :

```text
Besoin identifié

↓

Vérifier s'il existe déjà

↓

Créer le composant

↓

Créer son style

↓

Tester

↓

Documenter

↓

Valider

↓

Réutiliser
```

---

## 8. Documentation

Chaque composant documenté doit comporter :

* son objectif ;
* ses variantes ;
* ses propriétés (props) ;
* des exemples d'utilisation ;
* les règles d'accessibilité.

---

## 9. Évolution

Le Design System est un document vivant.

Toute modification importante (nouvelle couleur, nouveau composant, nouvelle règle) doit être discutée et validée par l'équipe avant d'être intégrée.

---

## 10. Philosophie graphique de MadaTours

L'identité visuelle de MadaTours repose sur les éléments suivants :

* inspiration de la nature malgache ;
* simplicité et élégance ;
* mise en valeur des paysages ;
* expérience immersive ;
* navigation intuitive ;
* interfaces modernes et épurées.

Le Design System doit toujours servir cette vision.

---

## Documents associés

* Colors.md
* Typography.md
* Spacing.md
* Components.md
* Buttons.md
* Forms.md
* Icons.md
* Animations.md
* Responsive.md
