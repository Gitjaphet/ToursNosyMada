# Changelog

Toutes les modifications notables de ce projet sont documentées ici.
Format inspiré de [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/).

## [Non publié]

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
