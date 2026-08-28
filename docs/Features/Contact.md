# ✉️ Feature — Contact

Version : 0.2 — **Statut : rôle étendu, une décision tranchée**

---

## Sommaire

1. [Statut actuel](#1-statut-actuel)
2. [Objectif de la fonctionnalité](#2-objectif-de-la-fonctionnalité)
3. [Décision à prendre : canaux de contact](#3-décision-à-prendre--canaux-de-contact)
4. [Décision à prendre : traitement de la soumission](#4-décision-à-prendre--traitement-de-la-soumission)
5. [Contraintes déjà connues](#5-contraintes-déjà-connues)
6. [Documents associés](#6-documents-associés)

---

## 1. Statut actuel

> ✅ **Décision du mentor (Japhet Valeureux, échange WhatsApp du 10/08/2026)** : les réservations passent par ce formulaire de contact — voir **[Features/Booking.md](./Booking.md)**. Le formulaire doit donc, en plus d'une demande de contact classique, pouvoir servir de demande de réservation (viser une excursion/un tour précis).

Une décision reste ouverte : les canaux de contact proposés en plus du formulaire (section 3). Le traitement technique de la soumission (section 4) n'est pas non plus encore précisé dans le détail, mais le mentor a confirmé que **tout est codé en statique pour l'instant** — il fournira une API plus tard pour traiter réellement les données (voir aussi Features/Reviews et Features/Gallery, mêmes conditions).

## 2. Objectif de la fonctionnalité

Permettre à un visiteur d'entrer en contact avec MadaTours pour une question, une demande de réservation, ou un besoin non couvert ailleurs sur le site.

## 3. Décision à prendre : canaux de contact

| Option | Implication |
| --- | --- |
| Formulaire seul (nom, email, message) | Solution la plus simple, mais peut ralentir la conversion pour un visiteur pressé |
| Formulaire + canaux directs (WhatsApp, téléphone, email affiché) | Répond mieux à une clientèle qui préfère un contact immédiat/humain, mais demande une disponibilité réelle de l'équipe sur ces canaux |

> ⚠️ **À trancher par l'équipe**, en fonction de la capacité réelle de l'équipe à répondre rapidement sur des canaux directs.

## 4. Décision à prendre : traitement de la soumission

| Option | Implication technique |
| --- | --- |
| Envoi d'un email à la soumission | Nécessite un service d'envoi transactionnel (ex. Resend, SendGrid) côté API |
| Stockage en base + consultation via Dashboard | Nécessite un modèle de données "message de contact" et une vue dédiée dans **[Features/Dashboard.md](./Dashboard.md)** |
| Les deux | Combine les deux implications ci-dessus |

> ⚠️ **À trancher par l'équipe.** Ce choix impacte directement **[Technical/API.md](../Technical/API.md)**.

## 5. Contraintes déjà connues

- Le formulaire doit respecter les règles de **[Design-System/Forms.md](../Design-System/Forms.md)**.
- Le formulaire doit être disponible dans les trois langues du site (`fr`, `en`, `mg`).
- Le ton des messages de confirmation/erreur doit suivre **[Brand/Voice-and-Tone.md](../Brand/Voice-and-Tone.md)**.

## 6. Documents associés

- [Design-System/Forms.md](../Design-System/Forms.md)
- [Brand/Voice-and-Tone.md](../Brand/Voice-and-Tone.md)
- [Technical/API.md](../Technical/API.md)
- [Features/Dashboard.md](./Dashboard.md)
