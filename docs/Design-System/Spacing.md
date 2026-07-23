# 📐 Spacing

## MadaTours Design System

Version : 1.0

---

## 1. Objectif

Ce document définit le système officiel d'espacement de MadaTours.

Tous les espacements (marges, paddings, gaps, dimensions de composants) doivent respecter cette grille afin de garantir une interface harmonieuse et cohérente.

---

## 2. Principe

MadaTours utilise une **grille de base de 8 pixels**.

Toutes les valeurs d'espacement sont des multiples de 8.

Exemples :

✔ 8px

✔ 16px

✔ 24px

✔ 32px

✔ 40px

✔ 48px

✔ 64px

Éviter :

❌ 13px

❌ 19px

❌ 27px

❌ 51px

---

## 3. Échelle officielle

| Token | Valeur | Utilisation            |
| ----- | ------ | ---------------------- |
| xs    | 4px    | Ajustements très fins  |
| sm    | 8px    | Petit espacement       |
| md    | 16px   | Espacement standard    |
| lg    | 24px   | Entre composants       |
| xl    | 32px   | Entre sections proches |
| 2xl   | 48px   | Grandes sections       |
| 3xl   | 64px   | Blocs principaux       |
| 4xl   | 96px   | Espaces majeurs        |
| 5xl   | 128px  | Pages Hero             |

---

## 4. Variables CSS

Toutes les valeurs sont disponibles sous forme de variables.

```css
:root{

--space-xs:4px;

--space-sm:8px;

--space-md:16px;

--space-lg:24px;

--space-xl:32px;

--space-2xl:48px;

--space-3xl:64px;

--space-4xl:96px;

--space-5xl:128px;

}
```

---

## 5. Marges

Les marges entre les éléments doivent respecter cette hiérarchie.

Titre → Paragraphe

16px

---

Paragraphe → Bouton

24px

---

Section → Section

96px

---

Carte → Carte

24px

---

Icône → Texte

8px

---

## 6. Padding

## Bouton

Vertical : 12px

Horizontal : 24px

---

## Carte

24px

---

## Champ de formulaire

16px

---

## Section

96px en haut et en bas.

---

## Container

32px sur les côtés.

---

## 7. Gap

Utiliser la propriété `gap` plutôt que des marges lorsque cela est possible.

Exemple :

Petite liste

```css
gap:8px;
```

---

Liste classique

```css
gap:16px;
```

---

Cartes

```css
gap:24px;
```

---

Grandes sections

```css
gap:48px;
```

---

## 8. Largeur maximale

Le contenu principal est centré.

| Élément         | Largeur maximale |
| --------------- | ---------------: |
| Container       |           1280px |
| Texte d'article |            800px |
| Formulaire      |            600px |
| Carte modale    |            500px |

---

## 9. Responsive

Les espacements diminuent progressivement sur les petits écrans.

| Desktop | Mobile |
| ------- | -----: |
| 128px   |   64px |
| 96px    |   48px |
| 64px    |   32px |
| 48px    |   24px |
| 32px    |   16px |

Le rythme visuel reste identique, seule l'échelle est adaptée.

---

## 10. Règles

Toujours utiliser les variables CSS.

Incorrect :

```css
margin-top:27px;
```

Correct :

```css
margin-top:var(--space-lg);
```

---

## 11. Bonnes pratiques

✔ Utiliser `gap` avec Flexbox et Grid.

✔ Conserver des espacements réguliers.

✔ Éviter les valeurs arbitraires.

✔ Utiliser les tokens du Design System.

✔ Respecter le rythme vertical.

---

## 12. Interdictions

❌ Inventer une nouvelle valeur d'espacement.

❌ Mélanger plusieurs systèmes de mesure sans justification.

❌ Utiliser des marges pour remplacer un `gap` lorsque celui-ci est adapté.

---

## Documents associés

* Typography.md
* Colors.md
* Responsive.md
* Components.md
* Foundations.md
