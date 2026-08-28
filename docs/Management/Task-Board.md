# Task Board

Suivi complet de l'avancement du projet, du début à la fin. Mis à jour au fil de l'eau — après chaque tâche terminée, pas accumulé pour plus tard (règle *Documentation → Code → Documentation* du [README racine](../../README.md)).

Statuts : `À faire` · `En cours` · `Fait` · `Bloqué`.

---

## Vue d'ensemble

- [x] Phase 0 — Fondations CSS
- [x] Phase 1 — Composants `ui/`
- [x] Phase 2 — Composants `layout/`
- [x] Phase 3 — Excursions
- [x] Phase 4 — Tours
- [x] Accueil (page réelle, hors Roadmap initiale — voir section dédiée)
- [ ] Phase 5 — Contact (+ demandes de réservation) / Galerie / Avis *(décisions du mentor reçues le 10/08 — reste à coder, voir section dédiée)*
- [ ] Dashboard *(toujours bloqué — sujet non abordé dans la décision du mentor)*
- [x] Infrastructure (GitFlow + Vercel) — connecté et fonctionnel
- [ ] Documentation à compléter *(en parallèle, non bloquant — 4 documents rédigés depuis, voir section dédiée)*

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

## Accueil

Pas de phase dédiée dans la Roadmap initiale — la page était restée une vitrine de test des composants `ui/` jusqu'ici. Construite en s'appuyant sur `Brand.md` (valeurs, ton) faute de `Features/Home.md`.

| # | Tâche | Statut | Notes |
| --- | --- | --- | --- |
| 1 | Système d'images par convention (`src/lib/images.ts`) | Fait | Chemin basé sur le `slug`, documenté dans `Guides/Naming.md`. Placeholders générés pour les 8 excursions + 7 tours en attendant les vraies photos. |
| 2 | Page d'accueil réelle | Fait | Hero, valeurs, excursions/tours en avant, "comment ça marche", CTA final. |
| 3 | Navbar/Footer traduits | Fait | N'appelaient jamais `useTranslations()` avant — tout le texte visible était en dur en français. |
| 4 | Animations d'apparition (`Reveal`) | Fait | Implémenté d'abord en CSS, réécrit avec Framer Motion pour respecter `Animations.md §3` — écart trouvé côté développeur. |
| 5 | Corrections de conformité Design System | Fait | Radius/ombres de `Card` (`Foundations.md §2-3`), tailles de police codées en dur, `font-weight` manquant sur les titres, containers incohérents (1100/1200px → 1280px), tokens `--ease-*` absents de `tokens.css`. |
| 6 | Refonte design Excursions/Tours (listing + détail) | Fait | Container 1280px, grille à `--space-lg`, H1/H2 conformes à `Typography.md`, photo de couverture ajoutée sur les pages détail (absente jusque-là). |

## Phase 5 — Contact, Galerie, Avis (construits) / Dashboard (bloqué, backend du mentor)

> ✅ **Décisions reçues du mentor (Japhet Valeureux, échange WhatsApp du 10/08/2026)** — voir `Features/Booking.md`, `Features/Contact.md`, `Features/Reviews.md`, `Features/Gallery.md` pour le détail. **Confirmé aussi** : le mentor s'occupe de tout le backend (traitement du formulaire Contact, vrais avis, vraie galerie, Dashboard) — le travail front-end restant consiste à construire des interfaces statiques faciles à brancher plus tard, pas à attendre.

| Fonctionnalité | Statut | Notes |
| --- | --- | --- |
| **Booking** | Tranché — voir Contact | Plus de décision propre à Booking : absorbé par le formulaire Contact. |
| **Contact** | Fait (statique) | `src/app/[locale]/contact/page.tsx`. Formulaire complet (nom, e-mail, téléphone, objet, message) conforme à `Forms.md`, validation en temps réel. **Pas d'envoi réel** — affiche une confirmation visuelle en attendant l'API du mentor. Téléphone + réseaux sociaux en placeholder, à mettre à jour dès que fournis. |
| **Avis** | Fait (mock) | `src/data/reviews.ts`, 6 avis fictifs marqués `[FICTIF]`, `ReviewCard`, page `/avis`. Bandeau visible rappelant que c'est temporaire. |
| **Galerie** | Fait (statique) | `/galerie`, réutilise directement `excursions.ts`/`tours.ts` via `src/lib/images.ts` — pas de fichier de données séparé, jamais désynchronisée. |
| **À propos** | Fait | `/a-propos`, contenu tiré de `Brand.md` (Vision, Mission, les 5 valeurs, Promesse) — aucune page `Features/About.md` n'existe, pas de section équipe (aucune bio/photo fournie). |
| **Dashboard** | Toujours bloqué | Orientation actuelle : admin/interne uniquement (`Dashboard.md` §2). Non abordé dans l'échange du 10/08 — dépend entièrement du backend et de l'authentification que le mentor fournira. Rien à coder côté front tant que l'API n'existe pas. |

⚠️ Pour Contact : l'envoi réel (email/base de données) sera branché par le mentor. Le formulaire actuel est prêt à recevoir cette logique — voir le commentaire dans `handleSubmit` (`page.tsx`).

---

## Documentation

### Rédigés depuis la dernière mise à jour

| Fichier | Notes |
| --- | --- |
| `Guides/Naming.md` | Couvre ce qui n'était pas déjà dans `Architecture.md §5` : images (par slug), clés de traduction, classes CSS, slugs. |
| `Guides/CSS-Guidelines.md` | Règle d'or "toujours une variable, jamais une valeur en dur", table des erreurs réelles trouvées et corrigées sur ce projet. |
| `Guides/Accessibility.md` | Documente ce qui est déjà appliqué dans le code (alt text, aria-label, focus-visible, `prefers-reduced-motion`), pas des règles génériques. |
| `Technical/Deployment.md` | Workflow Vercel (branches → environnements), mise en route, vérification d'un déploiement. |
| `Guides/NextJS-Guidelines.md` | Server Components par défaut, quand utiliser `"use client"`, pattern `params: Promise<...>`, `useTranslations` vs `getTranslations`, `SafeImage`, `Link` i18n-aware, `next/script`. |
| `Guides/React-Guidelines.md` | Composants fonctionnels uniquement, structure dossier/`index.ts`, props typées, pas de librairie de state externe, composition (`Card`/`CardImage`/`CardBody`), CSS Modules sans style en ligne. |

### Fichiers vides restants, avec leur prérequis avant de pouvoir les rédiger utilement

#### Sans blocage — peuvent être rédigés dès que le besoin se présente

| Fichier | Prérequis / bon moment pour le remplir |
| --- | --- |
| `Guides/Testing.md` | **Décision d'équipe manquante** : est-ce qu'on teste ce projet ? Avec quel outil (Jest, Vitest, Playwright...) ? Rien à documenter tant que ce choix n'est pas fait. |
| `Management/Ideas.md` | Pas de prérequis technique — dépend juste de l'usage réel que l'équipe veut en faire. |
| `Management/Meeting-Notes.md` | Idem — à remplir dès la prochaine réunion d'équipe, si le format est adopté. |
| `Management/Risks.md` | Peut déjà être amorcé avec les risques connus (désynchro `ToursNosyMada`, décisions Phase 5 en attente, etc.). |
| `Management/Sprint-Planning.md` | Dépend de si l'équipe adopte un fonctionnement en sprints — décision à prendre d'abord. |
| `FAQ.md` | Pas de prérequis — se remplit naturellement au fil des questions récurrentes. Faible priorité pour l'instant. |

#### Bloqués — ne pas rédiger avant

| Fichier | Bloqué par |
| --- | --- |
| `Technical/API.md` | Décisions Phase 5 (Booking/Contact/Dashboard) non tranchées — les endpoints dépendent directement de ces choix. |
| `Technical/Authentication.md` | Idem — dépend de si un compte utilisateur est finalement nécessaire (`Booking.md` §5). |
| `Technical/Environment.md` | Pas encore de variables d'environnement réelles à documenter (pas de backend/API branché) — se remplit naturellement quand une clé/URL externe apparaît dans le code. |
| `Technical/Performance.md` | À rédiger une fois qu'il y a de vraies pages à auditer (Lighthouse etc.). |
| `Technical/SEO.md` | À rédiger une fois qu'il y a du contenu réel (titres, meta descriptions selon `Voice-and-Tone.md`). |

> ✅ `Technical/Internationalization.md` est déjà terminé.

---

## Infrastructure (GitFlow allégé + Vercel)

> Dépôt concerné : `github.com/Zephryr69/madatours` (dossier `madatours`). `ToursNosyMada` reste hors de ce workflow.

| # | Tâche | Statut | Notes |
| --- | --- | --- | --- |
| 1 | Documenter la stratégie de branches | Fait | `Git-Workflow.md` §3, mis à jour. |
| 2 | Créer la branche `develop` sur GitHub | Fait | Existe et est utilisée activement (commits réguliers dessus). |
| 3 | Connecter le dépôt à Vercel | Fait | `Zephryr69/madatours` connecté (pas `ToursNosyMada`). Voir `Technical/Deployment.md`. |
| 4 | Configurer `main` = production, `develop`/PR = preview | Fait | Vérifié — un push sur une branche `feature/*` ou `develop` ne met à jour que son lien de preview, `main` seul déclenche la production. |
| 5 | Protéger la branche `main` sur GitHub | À faire | Réglage recommandé : interdire le push direct, exiger une PR depuis `develop`. |

## Corrections / dette technique

| # | Tâche | Statut | Notes |
| --- | --- | --- | --- |
| 1 | Fix Footer : `Link` non i18n-aware | Fait | Voir Changelog. |
| 2 | Resynchroniser le dossier miroir `ToursNosyMada` | À faire | Décalage constaté avec le dépôt principal. |
| 3 | Vérifier les fins de ligne des docs modifiées (CRLF/LF) | À faire | `Architecture.md`, `Contributing.md`, `Design-System/README.md`, `Git-Workflow.md`, `Roadmap.md`. |
| 4 | Faire relire les traductions `mg.json` par un locuteur natif | À faire | Périmètre étendu depuis : `Home`, `Navbar`, `Footer`, `Excursions`, `Tours` — tout le contenu malgache a été rédigé sans locuteur natif, à valider avant publication. |
| 5 | Remplacer les images placeholder par les vraies photos | À faire | Système remplacé depuis : convention par `slug` (`Guides/Naming.md`), un `cover.jpg` placeholder généré pour chacune des 8 excursions + 7 tours. Il suffit de déposer les vraies photos au même chemin, même nom — aucune modification de code nécessaire. |
| 6 | Vérifier visuellement le rendu (`npm run dev`) | Fait | Testé et confirmé en conditions réelles (bugs remontés et corrigés : hero invisible en thème clair, `<Script>` mal placé). |
| 7 | Style visuel de `Card`/`ExcursionCard` jugé trop simpliste | Fait | Audit complet contre `Typography.md`/`Foundations.md`/`Spacing.md` (radius, ombres, tailles/graisses de police), plus animations `Reveal`. Voir Changelog. |
| 8 | Fix hydratation Footer (`{" "}` après `</strong>`) | Fait | Trouvé lors du premier `npm run dev`. Voir Changelog. |
| 9 | `<Script>` (`beforeInteractive`) mal placé dans un `<head>` écrit à la main | Fait | **Correction du diagnostic précédent** : ce n'était pas un faux positif ni un bug connu de Next.js — `layout.tsx` plaçait `<Script>` dans un `<head>` JSX manuel, ce que la doc officielle Next 16 interdit explicitement. Corrigé en déplaçant le script dans `<body>`. Voir Changelog. |
| 10 | Turbopack instable en dev (crashs répétés) | Contournement en place | `next dev` (Turbopack) plantait en boucle sous Windows. Utiliser `next dev --webpack` en attendant que Turbopack stabilise. |
