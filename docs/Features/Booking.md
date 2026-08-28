# 🧳 Feature — Booking

Version : 0.2 — **Statut : décisions structurantes tranchées (voir §1)**

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

**Booking est la fonctionnalité centrale du site** — c'est la raison d'être de MadaTours. Les trois décisions structurantes ont été tranchées par le mentor (Japhet Valeureux, échange WhatsApp du 10/08/2026) : **pas de parcours de réservation dédié**. Une demande de réservation est envoyée via le formulaire de **Contact**, traitée manuellement par l'équipe — voir détail section 3. Ce document reste comme trace de la décision et de ce qui a été écarté ; le vrai travail de conception se fait maintenant dans **[Features/Contact.md](./Contact.md)**.

## 2. Objectif de la fonctionnalité

Permettre à un visiteur de réserver un circuit ou une excursion proposé par MadaTours, de la sélection du circuit jusqu'à la confirmation de sa réservation.

## 3. Décision à prendre : finalisation de la réservation

> ✅ **Tranché par le mentor (Japhet Valeureux, échange WhatsApp du 10/08/2026)** : pas de parcours de réservation ni de paiement en ligne séparés. **Les réservations passent par le menu Contact** — le formulaire de contact fait office de demande de réservation, traitée manuellement par l'équipe. Correspond à l'option "Demande → confirmation manuelle" ci-dessous.

| Option | Implication technique | Implication métier |
| --- | --- | --- |
| Paiement en ligne intégré (Stripe, PayPal...) | Intégration d'un provider de paiement, gestion sécurisée des transactions, conformité (PCI-DSS déléguée au provider) | Encaissement immédiat, mais engagement plus lourd à mettre en place |
| ✅ Demande → confirmation manuelle par l'équipe, via le formulaire Contact | Formulaire de demande + notification interne (email/dashboard), pas de gestion de paiement en ligne | Plus simple à lancer, mais charge de suivi manuel pour l'équipe |

## 4. Décision à prendre : gestion de la disponibilité

> ✅ **Sans objet suite à la décision de la section 3** : sans parcours de réservation dédié (juste une demande via le formulaire Contact), il n'y a pas de calendrier de disponibilité ni de quota à gérer pour l'instant. À rouvrir uniquement si l'équipe décide plus tard d'ajouter un vrai système de réservation en ligne.

| Option | Implication technique |
| --- | --- |
| Calendrier de disponibilité par circuit (places limitées, dates fixes) | Nécessite un modèle de données de type inventaire (dates, quotas restants), logique de blocage en cas de complet |
| ✅ Toujours disponible à la demande (pas de quota) | Modèle de données bien plus simple, pas de gestion de concurrence sur les places |

## 5. Décision à prendre : compte utilisateur

> ✅ **Sans objet suite à la décision de la section 3** : une demande envoyée via le formulaire Contact ne nécessite pas de compte. Pas d'authentification à prévoir pour cette fonctionnalité.

| Option | Implication technique |
| --- | --- |
| Compte requis (création, historique de réservations) | Nécessite un système d'authentification complet — voir **[Technical/Authentication.md](../Technical/Authentication.md)** |
| ✅ Réservation sans compte (guest checkout) | Plus simple pour le visiteur, mais pas d'historique consultable sans un système de suivi par email/numéro de réservation |

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
