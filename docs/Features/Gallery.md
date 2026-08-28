# 🖼️ Feature — Galerie

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

> ✅ **Décision du mentor (Japhet Valeureux, échange WhatsApp du 10/08/2026)** : coder la galerie en statique pour l'instant, un backend pour gérer les images sera fourni plus tard (API du mentor).

Le lien "Galerie" existe déjà dans la Navbar et le Footer (`/galerie`), mais la page elle-même n'est pas encore construite.

## 2. Objectif de la fonctionnalité

Montrer une sélection de photos du site (excursions, tours, paysages) dans une page dédiée, au-delà des photos déjà utilisées sur les cartes.

## 3. Approche retenue

- Créer la page `/galerie` en réutilisant le système d'images existant (`src/lib/images.ts`, voir `Guides/Naming.md`) — pas de nouveau système de nommage à inventer.
- Tant que l'API n'existe pas, la liste des photos affichées est codée en dur dans la page (ou un petit fichier `src/data/gallery.ts` listant quelles images afficher).
- Quand le mentor fournira l'API, seule la source de la liste change — pas la façon dont chaque image est affichée (toujours `SafeImage`, avec repli automatique si un fichier manque).

## 4. Contraintes déjà connues

- Respecter `Brand/Photography.md` pour le style des photos.
- Images responsives, via `next/image` comme partout ailleurs sur le site (`Design-System/Responsive.md §8`).

## 5. Documents associés

- [Guides/Naming.md](../Guides/Naming.md)
- [Brand/Photography.md](../Brand/Photography.md)
- [Design-System/Responsive.md](../Design-System/Responsive.md)
