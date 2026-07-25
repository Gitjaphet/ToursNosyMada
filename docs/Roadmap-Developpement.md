# 🗺️ Roadmap de développement — MadaTours

Version : 1.0 — Document de référence autonome, à consulter sans avoir besoin de rouvrir la conversation qui l'a produit.

---

## Sommaire

1. [Comment utiliser ce document](#1-comment-utiliser-ce-document)
2. [Phase 0 — Fondations CSS](#2-phase-0--fondations-css)
3. [Phase 1 — Composants `ui/`](#3-phase-1--composants-ui)
4. [Phase 2 — Composants `layout/`](#4-phase-2--composants-layout)
5. [Phase 3 — Première fonctionnalité : Excursions](#5-phase-3--première-fonctionnalité--excursions)
6. [Phase 4 — Deuxième fonctionnalité : Tours](#6-phase-4--deuxième-fonctionnalité--tours)
7. [Phase 5 — Fonctionnalités bloquées (décisions à prendre avant de coder)](#7-phase-5--fonctionnalités-bloquées-décisions-à-prendre-avant-de-coder)
8. [Documentation encore à auditer (en parallèle, non bloquant)](#8-documentation-encore-à-auditer-en-parallèle-non-bloquant)
9. [Règle d'or à chaque étape](#9-règle-dor-à-chaque-étape)

---

## 1. Comment utiliser ce document

Suis les phases dans l'ordre. Chaque phase indique : quoi faire, quel(s) document(s) de `docs/` lire avant de coder, et ce qui la bloque s'il y a lieu. Ne saute pas une phase pour une fonctionnalité "plus intéressante" tant que les précédentes ne sont pas posées — les composants de base (Phase 0-2) sont réutilisés partout ensuite.

---

## 2. Phase 0 — Fondations CSS

**Objectif** : avoir toutes les variables CSS disponibles globalement avant d'écrire le moindre composant.

**À faire** :
- Créer `src/styles/tokens.css` (ou l'ajouter à `globals.css`).
- Copier tel quel le bloc `:root { ... }` de chacun de ces documents, dans cet ordre :
  1. `Design-System/Colors.md` (§9)
  2. `Design-System/Typography.md` (§9)
  3. `Design-System/Spacing.md` (§4)
  4. `Design-System/Foundations.md` (§8)

**Aucune décision à prendre** — travail mécanique de copie.

---

## 3. Phase 1 — Composants `ui/`

**Ordre recommandé** (du plus simple au plus complexe) :

| # | Composant | Document de référence |
| --- | --- | --- |
| 1 | `Button` | `Design-System/Buttons.md` |
| 2 | `Input` | `Design-System/Forms.md` §4.1, §13.1 |
| 3 | `Select` | `Design-System/Forms.md` §4.7, §13.2 |
| 4 | `Textarea` | `Design-System/Forms.md` §4.11, §13.4 |
| 5 | `Checkbox` | `Design-System/Forms.md` §4.8, §13.3 |
| 6 | `Card` (base générique) | `Design-System/Components.md` §10 |

Pour chaque composant : relire les états (hover/focus/disabled/error), utiliser uniquement les tokens CSS de la Phase 0, jamais de valeur en dur.

---

## 4. Phase 2 — Composants `layout/`

Les fichiers existent déjà (vides) dans `src/components/layout/`.

| Composant | Document de référence |
| --- | --- |
| `LanguageSwitcher` | `Design-System/Components.md` §8.4 |
| `Navbar` | `Design-System/Components.md` §8.2 + `Design-System/Responsive.md` §7 |
| `Header` | `Design-System/Components.md` §8.1 |
| `Footer` | `Design-System/Components.md` §8.3 |

> ⚠️ Ces spécifications sont marquées "à valider" dans Components.md — si un détail te semble bancal une fois en train de coder, ajuste et documente le changement, ne bloque pas dessus.

---

## 5. Phase 3 — Première fonctionnalité : Excursions

**Pourquoi celle-ci en premier** : aucune décision en attente, contrairement à Booking/Contact/Dashboard.

**À faire** :
1. Rédiger le contenu réel (titres, descriptions originales, photos) pour chaque excursion listée dans `Features/Excursions.md` §3 — ces titres sont provisoires, pas à publier tels quels.
2. Construire `ExcursionCard` (composant `Card` de la Phase 1 + les champs du modèle de données `Features/Excursions.md` §2).
3. Page listing (`Features/Excursions.md` §4).
4. Page détail (`Features/Excursions.md` §5) — le bouton de réservation peut pointer vers une page "à venir" tant que la Phase 5 n'est pas débloquée.

---

## 6. Phase 4 — Deuxième fonctionnalité : Tours

Même logique que la Phase 3, avec `Features/Tours.md`. `TourCard` doit réutiliser la même base `Card` qu'`ExcursionCard` (voir `Components.md` §10 — ne pas dupliquer).

---

## 7. Phase 5 — Fonctionnalités bloquées (décisions à prendre avant de coder)

Ces trois fonctionnalités ont des décisions d'équipe non tranchées. **Ne pas commencer à coder dessus avant d'avoir répondu aux questions listées** — sinon il faudra probablement défaire du travail.

### Booking
- Mode de finalisation : paiement en ligne ou demande manuelle ? (`Features/Booking.md` §3)
- Gestion de disponibilité/quotas ? (`Features/Booking.md` §4)
- Compte utilisateur nécessaire ? (`Features/Booking.md` §5 — orientation actuelle : non, voir Dashboard ci-dessous)

### Contact
- Canaux proposés : formulaire seul ou + WhatsApp/téléphone ? (`Features/Contact.md` §3)
- Traitement de la soumission : email, base de données, ou les deux ? (`Features/Contact.md` §4)

### Dashboard
- Orientation actuelle : admin/interne uniquement, pas de dashboard client (`Features/Dashboard.md` §2) — à confirmer définitivement une fois Booking/Contact tranchés.

---

## 8. Documentation encore à auditer (en parallèle, non bloquant)

Ces dossiers n'ont pas encore été revus mais ne bloquent pas le début du développement des Phases 0 à 4 :

- `Guides/` (Accessibility, CSS-Guidelines, Naming, NextJS-Guidelines, React-Guidelines, Testing)
- `Management/` (Ideas, Meeting-Notes, Risks, Sprint-Planning, Task-Board)
- `Technical/` (API, Authentication, Deployment, Environment, Internationalization, Performance, SEO)

> `Technical/API.md` et `Technical/Authentication.md` dépendent directement des décisions de la Phase 5 — ne pas les rédiger avant que Booking/Contact/Dashboard soient tranchés.

---

## 9. Règle d'or à chaque étape

Avant de coder un composant ou un écran : relire le document associé listé ci-dessus. S'il manque une information (une valeur, une règle), ne pas improviser — ouvrir une nouvelle discussion ciblée sur ce point précis plutôt que de deviner, pour garder la documentation et le code alignés.
