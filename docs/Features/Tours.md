# 🗺️ Feature — Tours (Circuits)

Version : 1.0

---

## Sommaire

1. [Objectif](#1-objectif)
2. [Différence avec Excursions](#2-différence-avec-excursions)
3. [Modèle de données d'un circuit](#3-modèle-de-données-dun-circuit)
4. [Catalogue de circuits retenu](#4-catalogue-de-circuits-retenu)
5. [Structure de la page listing](#5-structure-de-la-page-listing)
6. [Structure de la page détail](#6-structure-de-la-page-détail)
7. [Contraintes déjà connues](#7-contraintes-déjà-connues)
8. [Documents associés](#8-documents-associés)

---

## 1. Objectif

Présenter le catalogue des circuits multi-jours proposés par MadaTours, incluant des thématiques (nature, culture, randonnée) et des durées variables, jusqu'à des circuits complets dans le nord de Madagascar.

**Décision confirmée** : mêmes zones géographiques et types de circuits que le site de référence du secteur, mais **titres, angles thématiques, descriptions et photos entièrement originaux**, rédigés selon **[Brand/Voice-and-Tone.md](../Brand/Voice-and-Tone.md)**.

## 2. Différence avec Excursions

| | Excursions | Tours (Circuits) |
| --- | --- | --- |
| Durée | 1 jour (majoritairement) | Plusieurs jours/nuits |
| Portée géographique | Une zone précise (ex. une île) | Plusieurs sites, parfois toute une région |
| Hébergement inclus | Généralement non | Généralement oui |

Voir **[Features/Excursions.md](./Excursions.md)** pour le pendant "journée" de cette fonctionnalité.

## 3. Modèle de données d'un circuit

| Champ | Type | Description |
| --- | --- | --- |
| `slug` | string | Identifiant unique pour l'URL |
| `title` | string (i18n) | Titre original |
| `theme` | string | Angle thématique (ex. nature, culture, randonnée) |
| `duration_days` | number | Nombre de jours |
| `duration_nights` | number | Nombre de nuits |
| `region` | string | Zone géographique couverte |
| `description` | string (i18n) | Texte original |
| `itinerary` | day[] | Détail jour par jour (à structurer une fois le contenu rédigé) |
| `gallery` | image[] | Photos originales |
| `highlights` | string[] | Points forts du circuit |

## 4. Catalogue de circuits retenu

Zones géographiques et durées confirmées comme base du catalogue. Comme pour Excursions.md, les intitulés ci-dessous sont des **repères de travail internes**, pas des titres à publier tels quels — certains combinent déjà un angle marketing qui doit être entièrement repensé avec votre propre ton.

| Zone / thème du circuit | Durée indicative |
| --- | --- |
| Région SAVA | À définir |
| Réserve de Lokobe | 2 jours |
| Circuit à thématique culturelle/authenticité | À définir |
| Randonnée immersive à Nosy Komba | À définir |
| Tour des archipels de Nosy Be | À définir |
| Grand circuit Nord Madagascar | 11 jours / 10 nuits |
| Circuit nature & traditions du Nord | 8 jours / 7 nuits |

> ⚠️ **À faire avant publication** : chaque ligne doit être développée en fiche complète par l'équipe — titre définitif, angle éditorial propre à MadaTours, itinéraire jour par jour, photos. Les durées manquantes ("À définir") doivent aussi être précisées à partir de votre propre offre, pas déduites du site de référence.

## 5. Structure de la page listing

- Grille de cartes : image, titre, durée (jours/nuits), région.
- Regroupement thématique envisageable (nature, culture, aventure) — à valider selon le volume final du catalogue.

## 6. Structure de la page détail

- Titre, galerie, résumé du circuit.
- Itinéraire jour par jour (structure à définir une fois le contenu rédigé).
- Durée, région, points forts.
- Bouton d'action vers le parcours de réservation — voir **[Features/Booking.md](./Booking.md)**.

## 7. Contraintes déjà connues

- Contenu disponible dans les 3 langues (`fr`, `en`, `mg`).
- Photos conformes à **[Brand/Photography.md](../Brand/Photography.md)**.
- Composants (cartes, galerie, itinéraire) issus du Design System — voir **[Design-System/Components.md](../Design-System/Components.md)**.

## 8. Documents associés

- [Features/Excursions.md](./Excursions.md)
- [Features/Booking.md](./Booking.md)
- [Brand/Voice-and-Tone.md](../Brand/Voice-and-Tone.md)
- [Brand/Photography.md](../Brand/Photography.md)
- [Design-System/Components.md](../Design-System/Components.md)
