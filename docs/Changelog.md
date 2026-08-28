# Changelog

Toutes les modifications notables de ce projet sont documentées ici.
Format inspiré de [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/).

## [Non publié]

### Ajouté (suite — accueil, images, i18n layout, design system)
- **Page d'accueil réelle** (`src/app/[locale]/page.tsx` + `page.module.css`) : hero plein écran, section valeurs (3 cartes, une couleur d'icône chacune), excursions en avant, section "comment ça marche", circuits en avant, bandeau CTA final. Remplace l'ancienne vitrine de test des composants `ui/` — aucune "Phase Accueil" n'existait dans la Roadmap initiale, contenu et structure construits à partir de `Brand.md` (valeurs, ton) faute de `Features/Home.md`.
- **Namespace `Home`** ajouté à `messages/fr.json`/`en.json`/`mg.json` (hero, values, featured, howItWorks, featuredTours, closing).
- **Système d'images par convention** (`src/lib/images.ts`) : chemin prévisible basé sur le `slug` (`public/images/<section>/<slug>/cover.jpg`, `gallery-N.jpg`), documenté dans `Guides/Naming.md`. Un cover.jpg placeholder généré pour chacune des 8 excursions et 7 tours, en attendant les vraies photos.
- **`src/components/ui/SafeImage/`** : wrapper autour de `next/image` qui bascule sur une image de secours si le fichier attendu n'existe pas encore sur le disque.
- **`src/components/ui/Reveal/`** : apparition en fondu au scroll, utilisée sur l'accueil et les pages Excursions/Tours. Implémenté d'abord en CSS + `IntersectionObserver`, puis **réécrit avec Framer Motion** pour respecter `Animations.md §3` (apparitions séquencées) — écart trouvé et signalé par le développeur.
- **`Button`** : nouveau prop `href`, rend un lien de navigation (`@/i18n/navigation`) au lieu d'un `<button>` quand il est fourni — nécessaire pour les CTA de l'accueil.
- **Navbar et Footer traduits** : `Navbar.tsx`/`Footer.tsx` n'appelaient jamais `useTranslations()`, tout le texte (hors "MadaTours", nom propre) était en dur en français. Namespaces `Navbar`/`Footer` ajoutés aux 3 langues. Liens **Accueil** (Navbar + Footer) et **Galerie** (Footer) ajoutés — pages `/galerie` et `/avis` toujours non documentées dans `Features/`, décision toujours en attente.
- **Refonte design des pages Excursions/Tours** (listing + détail) : container harmonisé à 1280px (`Responsive.md §5`), grille de cartes à `--space-lg` (`Spacing.md`), titres `<h1>`/`<h2>` avec taille/graisse/hauteur de ligne conformes à `Typography.md §4`. **Photo de couverture ajoutée sur les pages détail** (absente jusque-là). Liste des points forts avec icône plutôt que puce par défaut. `Reveal` appliqué aux 4 pages.
- **4 documents rédigés** : `Guides/Naming.md`, `Guides/CSS-Guidelines.md`, `Guides/Accessibility.md`, `Technical/Deployment.md` — voir Task-Board pour le détail.
- **`src/components/ui/Button/Button.module.css`** : `--ease-standard`/`--ease-out`/`--ease-in` ajoutés à `tokens.css` (absents alors qu'`Animations.md §4` les définit) et branchés sur toutes les transitions du projet (`Card`, `Reveal`, `LanguageSwitcher`, accueil) — trouvé et corrigé par le développeur.
- **`src/types/excursion.types.ts`**, **`src/types/tour.types.ts`** : renommés depuis `Excursion.ts`/`Tour.ts` pour respecter le suffixe `.types.ts` exigé par `Architecture.md §5` — trouvé et corrigé par le développeur.
- **`tsconfig.json`** : exclusion du dossier `ToursNosyMada` de la vérification TypeScript, pour éviter un conflit avec les fichiers dupliqués du miroir — corrigé par le développeur.

### Corrigé (suite — bugs trouvés en cours de développement)
- **`layout.tsx`** : `<Script strategy="beforeInteractive">` placé dans un `<head>` écrit à la main — React tentait de rendre un `<script>` natif comme enfant normal (erreur "Encountered a script tag..."). Un `<Script>` s'injecte lui-même dans le vrai `<head>` du document quel que soit l'endroit où il est placé dans l'arbre (confirmé dans la doc officielle Next 16, `node_modules/next/dist/docs/`) — déplacé dans `<body>`.
- **Hero de l'accueil invisible en thème clair** : `.hero` (position:relative sans z-index) ne créait pas de contexte d'empilement propre, donc les z-index négatifs de l'image/du voile s'échappaient vers le contexte racine de la page et pouvaient passer sous le fond de page — visible en clair, invisible en sombre (fond déjà sombre) par coïncidence. Corrigé en donnant à `.hero` son propre contexte d'empilement (`z-index: 0`) et en repassant l'image/le voile en z-index positif normal, sans valeurs négatives.
- **`ExcursionCard`/`TourCard`** : `CardImage` pointait vers un placeholder global unique (`/placeholder-excursion.jpg`, `/placeholder-tour.jpg`) qui n'existait pas du tout sur le disque — toutes les cartes affichaient une image cassée, identique. Reliées au nouveau système d'images par slug.
- **`Card.module.css`** : `border-radius: var(--radius-md)` (8px, prévu pour les champs de formulaire) au lieu de `--radius-xl` (16px, prévu pour "cartes, modales" — `Foundations.md §2`). Ombres au repos/survol inversées par rapport à `Foundations.md §3` (`--shadow-sm`/`--shadow-md` au lieu de `--shadow-md`/`--shadow-lg`).
- **`ExcursionCard.module.css`/`TourCard.module.css`** : tailles de police codées en dur (`0.75rem`, `1.125rem`) remplacées par les tokens (`--text-xs`, `--text-lg`), `font-weight` explicite ajouté sur les titres (absent, donc hérité du gras par défaut du navigateur — 700 au lieu des 600 demandés par `Typography.md §4` pour ce niveau de titre).
- **Accueil (`page.module.css`)** : containers incohérents (1100px/1200px selon les sections) harmonisés à 1280px. `.valueTitle` utilisait le token `--text-xl` (24px) alors que le commentaire du code annonçait un H3 (32px, `--text-2xl`) — écart entre l'intention et la valeur réellement appliquée.
- **`Button.module.css`** : `letter-spacing: 0.2px` manquant (`Typography.md §6`).

### Corrigé (suite)
- **`src/data/excursions.ts`** : le champ `duration` avait été dupliqué dans le type alors qu'il existe déjà, traduit, dans `messages/*.json` — retiré du modèle de données pour éviter un texte figé en français quel que soit la langue affichée.

### Corrigé
- **`Footer.tsx`** : mismatch d'hydratation React sur le texte "À propos" (espace ambigu en JSX après `</strong>` suivi d'un texte multi-lignes) — corrigé en forçant l'espace avec `{" "}` et en supprimant le retour à la ligne ambigu. Trouvé lors du premier test réel avec `npm run dev`.
- **Footer** : remplacement de `Link` (`next/link`) par le wrapper i18n-aware (`@/i18n/navigation`), qui faisait perdre le préfixe de langue (`/fr`, `/en`, `/mg`) sur les liens du footer.

### Ajouté
- **`src/app/[locale]/tours/[slug]/page.tsx`** : page détail d'un circuit. Itinéraire jour par jour non modélisé (spec : "à structurer une fois le contenu rédigé"). Pas de bouton réservation — Phase 5 bloquée.
- **`src/app/[locale]/tours/page.tsx`** : page listing des circuits.
- **`src/components/cards/TourCard/`** : composant carte circuit, même structure qu'`ExcursionCard`. Durée affichée via un format ICU pluriel (`{days} jours / {nights} nuits`), testé avec `intl-messageformat`.
- **`src/types/Tour.ts`**, **`src/data/tours.ts`** : modèle de données des 7 circuits du catalogue (`Features/Tours.md` §4). Durées non confirmées encodées `null`.
- **Namespace `Tours`** ajouté à `messages/fr.json`/`en.json`/`mg.json` : textes d'interface traduits (titres de page, thèmes, labels), contenu éditorial des circuits volontairement laissé en `TODO` — voir note dans le Task-Board.
- **`src/app/[locale]/excursions/[slug]/page.tsx`** : page détail d'une excursion (description, highlights, retour à la liste). Pas de bouton de réservation — Phase 5 toujours bloquée.
- **`src/app/[locale]/excursions/page.tsx`** : page listing des excursions, grille de `ExcursionCard` reliés à la page détail.
- **Contenu réel des 8 excursions** (`messages/fr.json`, `en.json`, `mg.json`) : titres, descriptions, points forts. Contenu mg à faire relire par un locuteur natif avant publication.
- **`src/components/cards/ExcursionCard/`** : composant carte excursion (badge type, titre traduit, durée, lieu). Utilise une image de secours en attendant les vraies photos.
- **`src/types/Excursion.ts`** : l'interface `Excursion`, déplacée hors de `src/data/excursions.ts` pour respecter la convention `Architecture.md` (`types/` = interfaces TypeScript).
- **`docs/Architecture.md`** : documentation du nouveau dossier `data/` (contenu statique local, en attendant un vrai backend/API), absent de la version initiale du document.
- **`src/data/excursions.ts`** : modèle de données `Excursion` (slug, type, duration, location) + les 8 destinations. Le contenu traduit (title/description/highlights) reste dans `messages/*.json`, relié via `slug`.
- **Git-Workflow.md** : décision d'équipe — adoption d'un GitFlow allégé (`main` / `develop` / `feature/*`, sans `release/*` ni `hotfix/*`) et hébergement sur Vercel (`main` = production, autres branches/PR = preview deployments).

### Corrigé (suite)
- **`src/data/excursions.ts`** : le champ `duration` avait été dupliqué dans le type alors qu'il existe déjà, traduit, dans `messages/*.json` — retiré du modèle de données pour éviter un texte figé en français quel que soit la langue affichée.

### Corrigé
- **`Footer.tsx`** : mismatch d'hydratation React sur le texte "À propos" (espace ambigu en JSX après `</strong>` suivi d'un texte multi-lignes) — corrigé en forçant l'espace avec `{" "}` et en supprimant le retour à la ligne ambigu. Trouvé lors du premier test réel avec `npm run dev`.
- **Footer** : remplacement de `Link` (`next/link`) par le wrapper i18n-aware (`@/i18n/navigation`), qui faisait perdre le préfixe de langue (`/fr`, `/en`, `/mg`) sur les liens du footer.
