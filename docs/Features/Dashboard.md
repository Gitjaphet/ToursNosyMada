# 📊 Feature — Dashboard

Version : 0.2 — **Statut : orientation prise, à confirmer**

---

## Sommaire

1. [Statut actuel](#1-statut-actuel)
2. [Décision : public cible du Dashboard](#2-décision--public-cible-du-dashboard)
3. [Contenu envisageable selon l'option retenue](#3-contenu-envisageable-selon-loption-retenue)
4. [Contraintes déjà connues](#4-contraintes-déjà-connues)
5. [Documents associés](#5-documents-associés)

---

## 1. Statut actuel

Le projet reprend la structure et le contenu de **sakalavatours.com** comme base (design différent), directive validée par le mentor du projet. Premier constat sur ce site de référence : **pas de dashboard côté client**.

> ⚠️ Ce constat est un premier examen rapide, pas encore une revue exhaustive du site de référence — à confirmer une fois toutes les pages de sakalavatours.com passées en revue.

## 2. Décision : public cible du Dashboard

**Orientation retenue : Dashboard admin/interne uniquement**, en cohérence avec le site de référence.

| Option | Statut |
| --- | --- |
| Dashboard client (historique, profil) | ❌ Écarté — absent du site de référence |
| Dashboard admin/interne (réservations, messages, contenu) | ✅ Retenu |

Cette orientation simplifie aussi la décision en attente dans **[Features/Booking.md](./Booking.md)** (section 5) : un compte utilisateur n'est a priori pas nécessaire pour le visiteur côté réservation, puisqu'il n'y a pas d'espace client à alimenter. Reste à confirmer avec le mode de finalisation retenu (paiement en ligne vs demande manuelle).

## 3. Contenu envisageable selon l'option retenue

### 3.1 Si Dashboard client

- Historique des réservations passées et à venir.
- Statut de chaque réservation (en attente, confirmée, annulée).
- Informations de profil.

### 3.2 Si Dashboard admin/interne

- Liste des réservations reçues, avec possibilité de changer leur statut.
- Messages de contact reçus (si stockage en base retenu dans Contact.md).
- Gestion du contenu du Blog (si géré en interne plutôt que via CMS externe — voir **[Features/Blog.md](./Blog.md)**).

> Ces listes sont indicatives, à confirmer une fois la décision de la section 2 prise.

## 4. Contraintes déjà connues

- Toute route de Dashboard doit être protégée par authentification — voir **[Technical/Authentication.md](../Technical/Authentication.md)**.
- L'interface doit respecter le Design System (composants, typographie, espacements) comme le reste du site.

## 5. Documents associés

- [Features/Booking.md](./Booking.md)
- [Features/Contact.md](./Contact.md)
- [Features/Blog.md](./Blog.md)
- [Technical/Authentication.md](../Technical/Authentication.md)
- [Design-System/Components.md](../Design-System/Components.md)
