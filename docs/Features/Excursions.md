# 🏝️ Feature — Excursions

Version : 1.0

---

## Sommaire

1. [Objectif](#1-objectif)
2. [Modèle de données d'une excursion](#2-modèle-de-données-dune-excursion)
3. [Catalogue de destinations retenu](#3-catalogue-de-destinations-retenu)
4. [Structure de la page listing](#4-structure-de-la-page-listing)
5. [Structure de la page détail](#5-structure-de-la-page-détail)
6. [Contraintes déjà connues](#6-contraintes-déjà-connues)
7. [Documents associés](#7-documents-associés)

---

## 1. Objectif

Présenter le catalogue d'excursions proposées par MadaTours autour de Nosy Be, et permettre à un visiteur d'accéder au détail de chacune avant de la réserver.

**Décision confirmée** : MadaTours reprend les mêmes destinations que le site de référence du secteur (mêmes lieux géographiques, car ce sont des sites touristiques réels et non une création protégée), mais avec des **titres, descriptions et photos entièrement originaux**, rédigés selon **[Brand/Voice-and-Tone.md](../Brand/Voice-and-Tone.md)**.

## 2. Modèle de données d'une excursion

| Champ | Type | Description |
| --- | --- | --- |
| `slug` | string | Identifiant unique pour l'URL |
| `title` | string (i18n) | Titre original, dans les 3 langues |
| `type` | `"excursion" \| "sejour"` | Excursion à la journée ou séjour multi-jours |
| `duration` | string | Ex. "1 jour", "3 jours", ou une plage ("1 à 3 jours") si l'offre est flexible |
| `location` | string | Zone géographique (ex. "Nosy Be") |
| `description` | string (i18n) | Texte original, rédigé selon Voice-and-Tone.md |
| `gallery` | image[] | Photos originales — voir **[Brand/Photography.md](../Brand/Photography.md)** |
| `highlights` | string[] | Points forts de l'excursion (ex. observation de tortues) |

## 3. Catalogue de destinations retenu

Les destinations suivantes sont confirmées comme base du catalogue (lieux réels autour de Nosy Be). Les titres ci-dessous sont des **noms de travail provisoires** à des fins de documentation interne — les titres définitifs, les descriptions et les photos devront être rédigés/produits en interne avant publication.

| Destination(s) | Type | Durée indicative |
| --- | --- | --- |
| Nosy Iranja & Nosy Antsoha | Excursion à la journée | 1 jour |
| Nosy Komba & village local | Excursion à la journée | 1 jour |
| Nosy Tanikely & Nosy Sakatia | Excursion à la journée | 1 jour |
| Réserve de Lokobe | Excursion à la journée | 1 jour |
| Observation des requins-baleines | Excursion à la journée | 1 jour |
| Observation des baleines à bosse | Excursion à la journée | 1 jour |
| Séjour à Sakatia (tortues, artisanat local) | Séjour | 3 jours |
| Pêche artisanale & sortie en mer | Excursion flexible | 1 à 3 jours |

> ⚠️ **À faire avant publication** : chaque ligne de ce tableau doit être développée en une fiche complète (titre définitif, description, photos, points forts) rédigée par l'équipe — aucun contenu de ce tableau ne doit être publié tel quel, il ne sert qu'à cadrer le travail de rédaction.

## 4. Structure de la page listing

- Liste de cartes, chacune affichant : image, titre, type, durée, localisation.
- Filtrage envisageable par type (excursion / séjour) et par durée — à confirmer avec l'équipe selon le volume final du catalogue.

## 5. Structure de la page détail

- Titre et galerie photo en tête de page.
- Description complète, points forts.
- Durée, localisation, et éventuellement un indicateur de disponibilité (dépend de la décision prise dans **[Features/Booking.md](./Booking.md)** section 4).
- Bouton d'action vers le parcours de réservation — voir **[Features/Booking.md](./Booking.md)**.

## 6. Contraintes déjà connues

- Contenu disponible dans les 3 langues (`fr`, `en`, `mg`).
- Photos conformes à **[Brand/Photography.md](../Brand/Photography.md)**.
- Composants (cartes, galerie, boutons) issus du Design System — voir **[Design-System/Components.md](../Design-System/Components.md)**.

## 7. Documents associés

- [Features/Tours.md](./Tours.md)
- [Features/Booking.md](./Booking.md)
- [Brand/Voice-and-Tone.md](../Brand/Voice-and-Tone.md)
- [Brand/Photography.md](../Brand/Photography.md)
- [Design-System/Components.md](../Design-System/Components.md)
