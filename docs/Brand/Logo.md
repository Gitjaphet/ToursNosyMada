# 🖼️ Logo — MadaTours

Version : 0.1 — **Statut : provisoire**

---

## Sommaire

1. [Statut actuel](#1-statut-actuel)
2. [Fichier source](#2-fichier-source)
3. [Couleurs](#3-couleurs)
4. [Règles d'usage](#4-règles-dusage)
5. [Interdictions](#5-interdictions)
6. [Variantes manquantes](#6-variantes-manquantes)
7. [Documents associés](#7-documents-associés)

---

## 1. Statut actuel

Le logo actuel de MadaTours est une **version provisoire**, en attente d'une identité visuelle définitive.

Il peut être utilisé dans le développement en cours (header, favicon temporaire, documentation), mais ne doit **pas** être considéré comme figé : toute intégration dans le code doit rester facile à remplacer (composant `Logo` dédié, jamais d'usage direct du fichier image dispersé dans plusieurs endroits — voir [Components.md](../Design-System/Components.md)).

## 2. Fichier source

| Propriété | Valeur |
| --- | --- |
| Format | PNG |
| Variante disponible | Couleur, horizontale (texte + symbole) |
| Emplacement | `public/` *(à confirmer/déplacer vers un sous-dossier dédié, ex. `public/brand/`)* |

> ⚠️ **Limite technique connue** : le PNG est un format matriciel — il perd en netteté à l'agrandissement et ne permet pas une adaptation dynamique de couleur en CSS. Une version **SVG** sera nécessaire dès que le logo définitif sera validé, pour un rendu net à toute taille (notamment sur écrans Retina) et une intégration propre en composant React.

## 3. Couleurs

Le logo utilise exactement les couleurs officielles définies dans **[Colors.md](../Design-System/Colors.md)**. Aucune couleur en dehors de cette palette n'a été utilisée pour cette version provisoire.

## 4. Règles d'usage

En attendant la validation d'un espace de protection et d'une taille minimale mesurés précisément sur le fichier définitif, les règles suivantes s'appliquent par prudence :

* Ne jamais afficher le logo en dessous d'une taille où le texte devient illisible.
* Toujours conserver un espace de respiration autour du logo au moins équivalent à la hauteur du symbole/texte le plus proche du bord (méthode standard : mesurer sur le fichier lui-même, pas une valeur arbitraire en pixels).
* Toujours afficher le logo sur un fond qui garantit un contraste suffisant avec ses couleurs (voir les règles de contraste dans [Colors.md](../Design-System/Colors.md) et [Guides/Accessibility.md](../Guides/Accessibility.md)).

> ⚠️ **À compléter dès que possible** : taille minimale exacte (en px) et espace de protection exact, mesurés directement sur le fichier source par la personne qui l'a créé.

## 5. Interdictions

* Ne pas déformer, étirer ou faire pivoter le logo.
* Ne pas recolorer le logo en dehors de la palette officielle.
* Ne pas ajouter d'effets (ombre portée, contour, dégradé) non prévus dans le fichier source.
* Ne pas recréer le logo à la main dans le code (CSS/SVG inline) sans partir du fichier officiel.

## 6. Variantes manquantes

Cette version provisoire ne couvre qu'un seul cas d'usage. Les variantes suivantes n'existent pas encore et devront être produites avec le logo définitif :

| Variante | Statut | Usage prévu |
| --- | --- | --- |
| Version SVG | ❌ Manquante | Intégration web nette à toute résolution |
| Version monochrome / noir et blanc | ❌ Manquante | Fonds où la couleur ne passe pas, documents imprimés en N&B |
| Icône seule (sans texte) | ❌ Manquante | Favicon, app mobile future, espaces restreints (nav mobile) |
| Version verticale | ❌ Manquante | Formats carrés/verticaux (réseaux sociaux, stories) |

## 7. Documents associés

* [Brand.md](./Brand.md)
* [Colors.md](../Design-System/Colors.md)
* [Components.md](../Design-System/Components.md)
* [Guides/Accessibility.md](../Guides/Accessibility.md)
