# 🖼️ Logo — MadaTours

Version : 0.2 — **Statut : version SVG disponible, PNG conservé en secours**

---

## Sommaire

1. [Statut actuel](#1-statut-actuel)
2. [Fichiers source](#2-fichiers-source)
3. [Couleurs](#3-couleurs)
4. [Règles d'usage](#4-règles-dusage)
5. [Interdictions](#5-interdictions)
6. [Variantes manquantes](#6-variantes-manquantes)
7. [Documents associés](#7-documents-associés)

---

## 1. Statut actuel

Une version **SVG** du logo est maintenant disponible (`public/logo.svg`), utilisée dans `Navbar.tsx`. Elle résout la limite technique identifiée dans la v0.1 de ce document (le PNG ne permettait pas un rendu net à toute taille). Le logo reste néanmoins une version de travail : toujours une seule variante (couleur, horizontale) — voir §6 pour ce qui manque encore.

## 2. Fichiers source

| Propriété | Valeur |
| --- | --- |
| Format principal | SVG (`public/logo.svg`) — utilisé dans le code |
| Format de secours | PNG (version précédente, conservée en référence) |
| Variante disponible | Couleur, horizontale (texte + symbole) |

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

La version SVG couvre désormais un cas d'usage central (Navbar). Les variantes suivantes n'existent toujours pas :

| Variante | Statut | Usage prévu |
| --- | --- | --- |
| Version monochrome / noir et blanc | ❌ Manquante | Fonds où la couleur ne passe pas, documents imprimés en N&B |
| Icône seule (sans texte) | ❌ Manquante | Favicon, app mobile future, espaces restreints (nav mobile) |
| Version verticale | ❌ Manquante | Formats carrés/verticaux (réseaux sociaux, stories) |

## 7. Documents associés

* [Brand.md](./Brand.md)
* [Colors.md](../Design-System/Colors.md)
* [Components.md](../Design-System/Components.md)
* [Guides/Accessibility.md](../Guides/Accessibility.md)
