# 🧳 Feature — Booking

Version : 0.1 — **Statut : décisions structurantes en attente**

---

## Sommaire

1. [Statut actuel](#1-statut-actuel)
2. [Objectif de la fonctionnalité](#2-objectif-de-la-fonctionnalité)
3. [Décision à prendre : finalisation de la réservation](#3-décision-à-prendre--finalisation-de-la-réservation)
4. [Décision à prendre : gestion de la disponibilité](#4-décision-à-prendre--gestion-de-la-disponibilité)
5. [Décision à prendre : compte utilisateur](#5-décision-à-prendre--compte-utilisateur)
6. [Étapes du parcours (indépendantes des décisions ci-dessus)](#6-étapes-du-parcours-indépendantes-des-décisions-ci-dessus)
7. [Contraintes déjà connues](#7-contraintes-déjà-connues)
8. [Documents associés](#8-documents-associés)

---

## 1. Statut actuel

**Booking est la fonctionnalité centrale du site** — c'est la raison d'être de MadaTours. Pourtant, trois décisions structurantes ne sont pas encore prises. Tant qu'elles ne le sont pas, il est impossible de définir un modèle de données, une architecture d'API ou même le nombre d'écrans du parcours de réservation. Ce document liste ces décisions plutôt que d'en supposer une par défaut.

## 2. Objectif de la fonctionnalité

Permettre à un visiteur de réserver un circuit ou une excursion proposé par MadaTours, de la sélection du circuit jusqu'à la confirmation de sa réservation.

## 3. Décision à prendre : finalisation de la réservation

| Option | Implication technique | Implication métier |
| --- | --- | --- |
| Paiement en ligne intégré (Stripe, PayPal...) | Intégration d'un provider de paiement, gestion sécurisée des transactions, conformité (PCI-DSS déléguée au provider) | Encaissement immédiat, mais engagement plus lourd à mettre en place |
| Demande → confirmation manuelle par l'équipe | Formulaire de demande + notification interne (email/dashboard), pas de gestion de paiement en ligne | Plus simple à lancer, mais charge de suivi manuel pour l'équipe |

> ⚠️ **À trancher par l'équipe.** Ce choix conditionne directement l'architecture de **[Technical/API.md](../Technical/API.md)** et **[Technical/Authentication.md](../Technical/Authentication.md)** (un paiement en ligne implique généralement une session/identité plus robuste qu'une simple demande).

## 4. Décision à prendre : gestion de la disponibilité

| Option | Implication technique |
| --- | --- |
| Calendrier de disponibilité par circuit (places limitées, dates fixes) | Nécessite un modèle de données de type inventaire (dates, quotas restants), logique de blocage en cas de complet |
| Toujours disponible à la demande (pas de quota) | Modèle de données bien plus simple, pas de gestion de concurrence sur les places |

> ⚠️ **À trancher par l'équipe.** Ce choix impacte directement le design de la page circuit (afficher ou non un calendrier, un compteur de places restantes) et devra être coordonné avec **[Design-System/Components.md](../Design-System/Components.md)**.

## 5. Décision à prendre : compte utilisateur

| Option | Implication technique |
| --- | --- |
| Compte requis (création, historique de réservations) | Nécessite un système d'authentification complet — voir **[Technical/Authentication.md](../Technical/Authentication.md)** |
| Réservation sans compte (guest checkout) | Plus simple pour le visiteur, mais pas d'historique consultable sans un système de suivi par email/numéro de réservation |

> ⚠️ **À trancher par l'équipe.**

## 6. Étapes du parcours (indépendantes des décisions ci-dessus)

Quelle que soit l'issue des décisions ci-dessus, un parcours de réservation suit généralement cette structure :

1. Sélection du circuit/excursion et des options (dates, nombre de participants).
2. Récapitulatif de la demande.
3. Saisie des informations du voyageur.
4. Étape de finalisation (paiement ou envoi de la demande — dépend de la section 3).
5. Confirmation.

> Cette structure est une base de travail, pas une validation finale du nombre d'écrans réels — à affiner une fois les décisions ci-dessus prises.

## 7. Contraintes déjà connues

- Le formulaire de réservation doit respecter les règles de **[Design-System/Forms.md](../Design-System/Forms.md)**.
- Le parcours doit être disponible dans les trois langues du site (`fr`, `en`, `mg`).
- Sur mobile, les champs doivent respecter les règles tactiles de **[Design-System/Responsive.md](../Design-System/Responsive.md)** (hauteur minimale 48px, etc.).
- Les boutons du parcours (ex. "Confirmer ma réservation") doivent utiliser le composant `Button` officiel — voir **[Design-System/Buttons.md](../Design-System/Buttons.md)**.

## 8. Documents associés

- [Design-System/Forms.md](../Design-System/Forms.md)
- [Design-System/Buttons.md](../Design-System/Buttons.md)
- [Design-System/Responsive.md](../Design-System/Responsive.md)
- [Technical/API.md](../Technical/API.md)
- [Technical/Authentication.md](../Technical/Authentication.md)
- [Features/Tours.md](./Tours.md)
- [Features/Excursions.md](./Excursions.md)
