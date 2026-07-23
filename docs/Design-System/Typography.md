# ✍️ Typography

## MadaTours Design System

Version : 1.0

---

## 1. Objectif

Ce document définit les règles typographiques officielles de MadaTours.

Une typographie cohérente améliore :

* la lisibilité ;
* l'accessibilité ;
* l'expérience utilisateur ;
* l'identité visuelle.

Toutes les interfaces doivent respecter les règles définies ici.

---

## 2. Philosophie

La typographie de MadaTours doit transmettre :

* modernité ;
* élégance ;
* confiance ;
* simplicité.

Elle doit mettre en valeur les magnifiques photographies de Madagascar sans leur voler la vedette.

---

## 3. Familles de polices

### Police principale : Inter

Utilisée pour :

* paragraphes
* menus
* formulaires
* boutons
* tableaux
* cartes

---

## Police des titres

### Poppins

Utilisée pour :

* H1
* H2
* H3
* Hero
* sections

---

## Police d'accent

### Playfair Display

Utilisée uniquement pour :

* citations
* slogans
* titres marketing
* Hero

Elle ne doit jamais être utilisée pour les paragraphes.

---

## 4. Hiérarchie des titres

| Élément    | Taille | Poids | Hauteur de ligne |
| ---------- | -----: | ----: | ---------------: |
| Display XL |   64px |   700 |             72px |
| Display    |   56px |   700 |             64px |
| H1         |   48px |   700 |             56px |
| H2         |   40px |   700 |             48px |
| H3         |   32px |   600 |             40px |
| H4         |   24px |   600 |             32px |
| H5         |   20px |   600 |             28px |
| H6         |   18px |   600 |             26px |

---

## 5. Corps de texte

| Élément | Taille | Poids |
| ------- | -----: | ----: |
| Large   |   20px |   400 |
| Normal  |   16px |   400 |
| Small   |   14px |   400 |
| Caption |   12px |   400 |

---

## 6. Boutons

Les boutons utilisent :

* Police : Inter
* Taille : 16px
* Poids : 600
* Letter-spacing : 0.2px

---

## 7. Navigation

La barre de navigation utilise :

* Police : Inter
* Taille : 16px
* Poids : 500

---

## 8. Responsive

## Mobile

Les tailles sont réduites progressivement.

Exemple :

| Desktop   | Mobile |
| --------- | ------ |
| H1 48px   | 36px   |
| H2 40px   | 30px   |
| H3 32px   | 26px   |
| Body 16px | 16px   |

Le texte courant reste à **16px** afin de garantir une bonne lisibilité.

---

## 9. Variables CSS

```css
:root{

--font-body:"Inter",sans-serif;

--font-heading:"Poppins",sans-serif;

--font-accent:"Playfair Display",serif;

--text-xs:12px;

--text-sm:14px;

--text-base:16px;

--text-lg:20px;

--text-xl:24px;

--text-2xl:32px;

--text-3xl:40px;

--text-4xl:48px;

--text-display:64px;

}
```

---

## 10. Règles

Toujours utiliser les variables CSS.

Ne jamais écrire :

```css
font-size:37px;
```

Préférer :

```css
font-size:var(--text-base);
```

---

## 11. Accessibilité

Le contraste doit respecter WCAG AA.

Éviter :

* les textes trop petits ;
* les polices décoratives dans les paragraphes ;
* les paragraphes trop longs.

---

## 12. Bonnes pratiques

✔ Maximum 2 à 3 polices dans tout le projet.

✔ Respecter la hiérarchie des titres.

✔ Utiliser les variables CSS.

✔ Garder un rythme vertical cohérent.

✔ Préserver une excellente lisibilité.

---

## Documents associés

* Colors.md
* Spacing.md
* Responsive.md
* Buttons.md
* Foundations.md
