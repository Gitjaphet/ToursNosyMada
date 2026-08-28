# ⭐ Feature — Avis (Reviews)

Version : 0.1 — **Statut : cadrage initial donné par le mentor**

---

## Sommaire

1. [Statut actuel](#1-statut-actuel)
2. [Objectif de la fonctionnalité](#2-objectif-de-la-fonctionnalité)
3. [Approche retenue](#3-approche-retenue)
4. [Contraintes déjà connues](#4-contraintes-déjà-connues)
5. [Documents associés](#5-documents-associés)

---

## 1. Statut actuel

> ✅ **Décision du mentor (Japhet Valeureux, échange WhatsApp du 10/08/2026)** : commencer avec des données factices ("mock"), un vrai backend sera mis en place plus tard pour traiter les avis réels des visiteurs.

Le lien "Avis" existe déjà dans la Navbar et le Footer (`/avis`), mais la page elle-même n'est pas encore construite.

## 2. Objectif de la fonctionnalité

Montrer aux visiteurs des avis d'autres voyageurs, pour rassurer avant une réservation.

## 3. Approche retenue

- Créer la page `/avis` avec un jeu de données statique (fichier `src/data/reviews.ts`, sur le même principe que `excursions.ts`/`tours.ts`).
- Les avis affichés sont donc **fictifs pour l'instant** — à marquer clairement comme tel dans les données, comme cela a été fait pour les tours (préfixe `[FICTIF]`), pour ne pas les confondre plus tard avec de vrais avis.
- Quand le mentor fournira l'API, seule la source des données change (fichier statique → appel API) — pas la présentation.

## 4. Contraintes déjà connues

- Contenu disponible dans les trois langues du site (`fr`, `en`, `mg`).
- Respecter la charte du Design System pour les cartes (mêmes règles que `ExcursionCard`/`TourCard` — voir `Design-System/Components.md` et `Guides/CSS-Guidelines.md`).

## 5. Documents associés

- [Features/Contact.md](./Contact.md)
- [Design-System/Components.md](../Design-System/Components.md)
- [Guides/CSS-Guidelines.md](../Guides/CSS-Guidelines.md)
