# 🔣 Icons

## MadaTours Design System

Version : 1.0

---

## Sommaire

1. [Objectif](#1-objectif)
2. [Relation avec Brand/Iconography.md](#2-relation-avec-brandiconographymd)
3. [Inventaire des icônes](#3-inventaire-des-icônes)
4. [Ajout d'une nouvelle icône](#4-ajout-dune-nouvelle-icône)
5. [Documents associés](#5-documents-associés)

---

## 1. Objectif

Ce document liste les icônes concrètement utilisées dans l'interface de MadaTours, avec leur import exact et leur contexte d'usage — pour éviter qu'un développeur choisisse une icône différente pour un même besoin déjà couvert ailleurs dans l'application.

## 2. Relation avec Brand/Iconography.md

**[Brand/Iconography.md](../Brand/Iconography.md)** définit les règles générales (bibliothèque officielle `react-icons/fa6`, choix solid/regular, tailles, accessibilité). **Ce document-ci liste les icônes réellement utilisées**, une par une, en application de ces règles.

## 3. Inventaire des icônes

Basé sur les besoins déjà identifiés dans les documents existants (Buttons.md, Forms.md, Features/Booking.md, Features/Contact.md).

| Usage | Icône | Import | Style |
| --- | --- | --- | --- |
| Menu mobile (hamburger) | Bars | `FaBars` | Solid |
| Fermer (modale, menu mobile) | Fermer | `FaXmark` | Solid |
| Flèche (bouton, navigation) | Flèche droite | `FaArrowRight` | Solid |
| Sélecteur de langue | Globe | `FaGlobe` | Solid |
| Téléphone (Contact, Footer) | Téléphone | `FaPhone` | Solid |
| Email (Contact, Footer) | Enveloppe | `FaEnvelope` | Solid |
| Réseau social — Facebook | Facebook | `FaFacebookF` | Brands |
| Réseau social — Instagram | Instagram | `FaInstagram` | Brands |
| Date (champ formulaire Date) | Calendrier | `FaRegularCalendar` | Regular |
| Nombre de voyageurs (Booking) | Utilisateurs | `FaUsers` | Solid |
| Afficher/masquer mot de passe | Œil / Œil barré | `FaEye` / `FaEyeSlash` | Solid |
| Localisation (carte Excursion/Tour) | Épingle | `FaLocationDot` | Solid |
| Durée (carte Excursion/Tour) | Horloge | `FaRegularClock` | Regular |
| Erreur de champ (Forms) | Cercle d'alerte | `FaCircleExclamation` | Solid |
| Succès de champ (Forms) | Cercle coché | `FaCircleCheck` | Solid |
| Bascule thème clair (ThemeToggle) | Soleil | `FaSun` | Solid |
| Bascule thème sombre (ThemeToggle) | Lune | `FaMoon` | Solid |

> ⚠️ **À valider** : ce tableau part des usages déjà documentés ailleurs dans le projet. De nouvelles icônes seront nécessaires au fur et à mesure de la conception réelle des écrans (Dashboard, Blog...) — à ajouter ici au moment où le besoin se confirme, jamais choisies au hasard dans le code.

## 4. Ajout d'une nouvelle icône

Avant d'importer une icône non listée ici :

1. Vérifier qu'aucune icône déjà listée ne couvre le même besoin.
2. Choisir le style (solid/regular) selon la règle de contexte définie dans [Brand/Iconography.md](../Brand/Iconography.md) §3.
3. Ajouter une ligne à ce tableau avec l'usage, l'import exact et le style retenu.

## 5. Documents associés

- [Brand/Iconography.md](../Brand/Iconography.md)
- [Foundations.md](./Foundations.md)
- [Buttons.md](./Buttons.md)
- [Forms.md](./Forms.md)
- [Components.md](./Components.md)
