# 🎨 Colors

## MadaTours Design System

Version : 1.0

---

## 1. Objectif

Ce document définit la palette officielle de MadaTours.

Toutes les couleurs utilisées dans le projet doivent provenir exclusivement de cette palette.

L'utilisation de couleurs codées directement dans les composants est interdite.

Toutes les couleurs seront accessibles via des variables CSS.

---

## 2. Identité visuelle

La palette de MadaTours est inspirée de Madagascar :

* 🌿 la végétation tropicale ;
* 🌊 l'océan Indien ;
* ☀️ les couchers de soleil ;
* 🏖️ les plages ;
* 🌍 la découverte et l'aventure.

L'objectif est de transmettre :

* confiance ;
* évasion ;
* nature ;
* modernité ;
* élégance.

---

## 3. Palette principale

## Primary

Couleur principale de la marque.

Utilisation :

* boutons principaux
* liens importants
* éléments interactifs
* accents

| Nom         | HEX         |
| ----------- | ----------- |
| Primary 50  | #ECFDF5     |
| Primary 100 | #D1FAE5     |
| Primary 200 | #A7F3D0     |
| Primary 300 | #6EE7B7     |
| Primary 400 | #34D399     |
| Primary 500 | **#10B981** |
| Primary 600 | **#059669** |
| Primary 700 | #047857     |
| Primary 800 | #065F46     |
| Primary 900 | #064E3B     |

---

## 4. Couleur secondaire

Inspirée des couchers de soleil malgaches.

| Nom           | HEX         |
| ------------- | ----------- |
| Secondary 50  | #FFF7ED     |
| Secondary 100 | #FFEDD5     |
| Secondary 200 | #FED7AA     |
| Secondary 300 | #FDBA74     |
| Secondary 400 | #FB923C     |
| Secondary 500 | **#F97316** |
| Secondary 600 | **#EA580C** |
| Secondary 700 | #C2410C     |
| Secondary 800 | #9A3412     |
| Secondary 900 | #7C2D12     |

---

## 5. Accent

Inspiré de l'océan.

| Nom        | HEX         |
| ---------- | ----------- |
| Accent 500 | **#0EA5E9** |
| Accent 600 | **#0284C7** |
| Accent 700 | **#0369A1** |

Utilisation :

* badges
* liens secondaires
* illustrations
* éléments décoratifs

---

## 6. Couleurs neutres

## Background

```text
#FFFFFF
```

---

## Surface

```text
#F8FAFC
```

---

## Border

```text
#E2E8F0
```

---

## Divider

```text
#CBD5E1
```

---

## 7. Texte

## Titre

```text
#0F172A
```

---

## Texte principal

```text
#334155
```

---

## Texte secondaire

```text
#64748B
```

---

## Texte désactivé

```text
#94A3B8
```

---

## 8. États

## Success

```text
#22C55E
```

---

## Warning

```text
#F59E0B
```

---

## Error

```text
#EF4444
```

---

## Info

```text
#3B82F6
```

---

## 9. Variables CSS

Toutes les couleurs seront exposées sous forme de variables CSS.

Exemple :

```css
:root{
  --color-primary:#059669;
  --color-primary-light:#10B981;
  --color-primary-dark:#047857;

  --color-secondary:#EA580C;

  --color-accent:#0284C7;

  --color-background:#FFFFFF;
  --color-surface:#F8FAFC;

  --color-text:#334155;
  --color-heading:#0F172A;
  --color-muted:#64748B;

  --color-border:#E2E8F0;

  --color-success:#22C55E;
  --color-warning:#F59E0B;
  --color-error:#EF4444;
  --color-info:#3B82F6;
}
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

❌ Utiliser des couleurs non définies dans ce document.

❌ Mélanger plusieurs nuances sans justification.

❌ Modifier les couleurs directement dans les composants.

❌ Utiliser une couleur d'état (succès, erreur...) comme couleur principale de l'application.

---

## 13. Évolution

Toute nouvelle couleur devra être :

* justifiée ;
* documentée ;
* validée par l'équipe avant son intégration.
