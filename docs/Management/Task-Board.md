# Task Board

Suivi complet de l'avancement du projet, du début à la fin. Mis à jour au fil de l'eau — après chaque tâche terminée, pas accumulé pour plus tard (règle *Documentation → Code → Documentation* du [README racine](../../README.md)).

Statuts : `À faire` · `En cours` · `Fait` · `Bloqué`.

---

## Vue d'ensemble

- [x] Phase 0 — Fondations CSS
- [x] Phase 1 — Composants `ui/`
- [x] Phase 2 — Composants `layout/`
- [ ] Phase 3 — Excursions *(en cours)*
- [ ] Phase 4 — Tours
- [ ] Phase 5 — Booking / Contact / Dashboard *(bloqué, décisions d'équipe requises)*
- [ ] Documentation à compléter *(en parallèle, non bloquant)*

---

## Phase 3 — Excursions

| # | Tâche | Statut | Notes |
| --- | --- | --- | --- |
| 1 | Modèle de données `Excursion` (type TS) + tableau des 8 destinations | Fait | `src/data/excursions.ts` + `src/types/Excursion.ts`. Le texte (title/description/highlights/duration) reste dans `messages/*.json`, indexé par `slug` — pas dupliqué dans le type. |
| 2 | Rédiger le contenu réel (titres, descriptions) de chaque excursion | Fait | fr/en rédigés et vérifiés (recherche web). **mg à faire relire par un locuteur natif avant publication** — voir dette technique. Photos non incluses (pas de vraies images disponibles). |
| 3 | Composant `ExcursionCard` | Fait | `src/components/cards/ExcursionCard/`. Réutilise `Card` / `CardImage` / `CardBody`. Image de secours (`/placeholder-excursion.jpg`) tant que les vraies photos ne sont pas là. |
| 4 | Page listing `/[locale]/excursions` | Fait | `src/app/[locale]/excursions/page.tsx`. Première vraie utilisation de `useTranslations()` dans le projet. |
| 5 | Filtre par type (excursion / séjour) | À faire | Optionnel — `Excursions.md` §4 dit "à confirmer selon le volume du catalogue". |
| 6 | Page détail `/[locale]/excursions/[slug]` | Fait | `src/app/[locale]/excursions/[slug]/page.tsx`. Description, highlights. **Pas de bouton de réservation** — Phase 5 toujours bloquée, rien à quoi le relier. |

## Phase 4 — Tours

| # | Tâche | Statut | Notes |
| --- | --- | --- | --- |
| 1 | Rédiger le contenu réel des tours | Fait (fictif) | Le chef de projet a autorisé des données fictives — contenu rédigé en fr/en/mg, clairement marqué `[FICTIF]`/`[FICTIONAL]`/`[NOFORONINA]` dans les titres/descriptions. **À remplacer par du vrai contenu avant publication** (voir `Features/Tours.md` §4). |
| 2 | Composant `TourCard` | Fait | `src/components/cards/TourCard/`. Réutilise `Card`/`CardImage`/`CardBody`, même structure qu'`ExcursionCard`. |
| 3 | Page listing `/[locale]/tours` | Fait | `src/app/[locale]/tours/page.tsx`. |
| 4 | Page détail `/[locale]/tours/[slug]` | Fait | `src/app/[locale]/tours/[slug]/page.tsx`. Itinéraire jour par jour non modélisé (spec dit "à structurer une fois le contenu rédigé"). Pas de bouton réservation — Phase 5 bloquée. |

## Phase 5 — Bloqué (décisions d'équipe à prendre avant de coder)

⚠️ Ne pas commencer à coder ces fonctionnalités avant d'avoir répondu aux questions — sinon risque de devoir défaire du travail.

| Fonctionnalité | Décisions en attente |
| --- | --- |
| **Booking** | Mode de finalisation : paiement en ligne ou demande manuelle ? (`Booking.md` §3) · Gestion de disponibilité/quotas ? (§4) · Compte utilisateur nécessaire ? (§5 — orientation actuelle : non) |
| **Contact** | Canaux : formulaire seul ou + WhatsApp/téléphone ? (`Contact.md` §3) · Traitement de la soumission : email, base de données, ou les deux ? (§4) |
| **Dashboard** | Orientation actuelle : admin/interne uniquement, pas de dashboard client (`Dashboard.md` §2) — à confirmer une fois Booking/Contact tranchés |

---

## Documentation à compléter

Fichiers vides recensés dans le dépôt, avec leur prérequis avant de pouvoir les rédiger utilement.

### Sans blocage — peuvent être rédigés dès que le besoin se présente

| Fichier | Prérequis / bon moment pour le remplir |
| --- | --- |
| `Guides/CSS-Guidelines.md` | Après la Phase 0-2 (déjà le cas) — capitaliser les conventions déjà appliquées dans les CSS Modules existants. |
| `Guides/Naming.md` | Une fois qu'il y a assez de composants/fichiers pour dégager un vrai pattern de nommage (déjà suffisant). |
| `Guides/NextJS-Guidelines.md` | Idem — conventions déjà observables (App Router, `[locale]`, `proxy.ts`). |
| `Guides/React-Guidelines.md` | Idem, à partir des composants `ui/` et `layout/` déjà écrits. |
| `Guides/Accessibility.md` | Peut capitaliser ce qui est déjà appliqué (aria-*, focus-visible) dans les composants existants. |
| `Guides/Testing.md` | **Décision d'équipe manquante** : est-ce qu'on teste ce projet ? Avec quel outil (Jest, Vitest, Playwright...) ? Rien à documenter tant que ce choix n'est pas fait. |
| `Management/Ideas.md` | Pas de prérequis technique — dépend juste de l'usage réel que l'équipe veut en faire. |
| `Management/Meeting-Notes.md` | Idem — à remplir dès la prochaine réunion d'équipe, si le format est adopté. |
| `Management/Risks.md` | Peut déjà être amorcé avec les risques connus (désynchro `ToursNosyMada`, décisions Phase 5 en attente, etc.). |
| `Management/Sprint-Planning.md` | Dépend de si l'équipe adopte un fonctionnement en sprints — décision à prendre d'abord. |
| `FAQ.md` | Pas de prérequis — se remplit naturellement au fil des questions récurrentes. Faible priorité pour l'instant. |

### Bloqués — ne pas rédiger avant

| Fichier | Bloqué par |
| --- | --- |
| `Technical/API.md` | Décisions Phase 5 (Booking/Contact/Dashboard) non tranchées — les endpoints dépendent directement de ces choix. |
| `Technical/Authentication.md` | Idem — dépend de si un compte utilisateur est finalement nécessaire (`Booking.md` §5). |
| `Technical/Deployment.md` | Décision d'équipe manquante : plateforme d'hébergement (Vercel ou autre), nom de domaine. |
| `Technical/Environment.md` | Pas encore de variables d'environnement réelles à documenter (pas de backend/API branché) — se remplit naturellement quand une clé/URL externe apparaît dans le code. |
| `Technical/Performance.md` | À rédiger une fois qu'il y a de vraies pages à auditer (Lighthouse etc.) — attendre au moins la Phase 3. |
| `Technical/SEO.md` | À rédiger une fois qu'il y a du contenu réel (titres, meta descriptions selon `Voice-and-Tone.md`) — attendre au moins la Phase 3. |

> ✅ `Technical/Internationalization.md` est déjà terminé.

---

## Infrastructure (GitFlow allégé + Vercel)

> Dépôt concerné : `github.com/Zephryr69/madatours` (dossier `madatours`). `ToursNosyMada` reste hors de ce workflow.

| # | Tâche | Statut | Notes |
| --- | --- | --- | --- |
| 1 | Documenter la stratégie de branches | Fait | `Git-Workflow.md` §3, mis à jour. |
| 2 | Créer la branche `develop` sur GitHub | À faire | Depuis le dossier `madatours` : `git checkout -b develop && git push -u origin develop`. |
| 3 | Connecter le dépôt à Vercel | À faire | Importer `Zephryr69/madatours` (pas `ToursNosyMada`). |
| 4 | Configurer `main` = production, `develop`/PR = preview | À faire | Réglage par défaut de Vercel, à vérifier après connexion. |
| 5 | Protéger la branche `main` sur GitHub | À faire | Réglage recommandé : interdire le push direct, exiger une PR depuis `develop`. |

## Corrections / dette technique

| # | Tâche | Statut | Notes |
| --- | --- | --- | --- |
| 1 | Fix Footer : `Link` non i18n-aware | Fait | Voir Changelog. |
| 2 | Resynchroniser le dossier miroir `ToursNosyMada` | À faire | Décalage constaté avec le dépôt principal. |
| 3 | Vérifier les fins de ligne des docs modifiées (CRLF/LF) | À faire | `Architecture.md`, `Contributing.md`, `Design-System/README.md`, `Git-Workflow.md`, `Roadmap.md`. |
| 4 | Faire relire `mg.json` (namespace `Excursions`) par un locuteur natif | À faire | Contenu rédigé par l'IA, confiance plus faible qu'en fr/en — à valider avant publication. |
| 5 | Remplacer les vraies photos d'excursions | À faire | `ExcursionCard`/page détail utilisent `/placeholder-excursion.jpg`, qui n'existe pas encore sur le disque — à ajouter dans `assets/` avec de vraies images, en suivant `Brand/Photography.md`. |
| 6 | Vérifier visuellement le rendu (`npm run dev`) | À faire | Le sandbox n'a pas pu lancer `next build` (binaires natifs manquants) — seul `tsc --noEmit` a été vérifié. À tester en local avant de merger. |
| 7 | Style visuel de `Card`/`ExcursionCard` jugé trop simpliste | À faire | Remarque de l'équipe — pas de spec `Cards.md` existante, à trancher une fois du vrai contenu affiché. |
| 8 | Fix hydratation Footer (`{" "}` après `</strong>`) | Fait | Trouvé lors du premier `npm run dev`. Voir Changelog. |
| 9 | Faux positif "script tag" console (`next/script` + `beforeInteractive`) | Info seulement | Bug connu Next.js 16.2 / React 19, touche aussi `next-themes`/`shadcn`. N'affecte pas le fonctionnement réel — le script s'exécute correctement. Pas d'action requise. |
| 10 | Turbopack instable en dev (crashs répétés) | Contournement en place | `next dev` (Turbopack) plantait en boucle sous Windows. Utiliser `next dev --webpack` en attendant que Turbopack stabilise. |
