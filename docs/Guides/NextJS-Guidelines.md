# ▲ Conventions Next.js

## MadaTours

Version : 1.0

---

## 1. Objectif

Ce document explique comment ce projet utilise Next.js concrètement — les choix déjà faits dans le code, pas un cours général sur le framework. Le projet tourne sur **Next.js 16 (App Router)**, une version dont certaines conventions diffèrent des versions plus anciennes.

⚠️ **Rappel important** (déjà présent dans `AGENTS.md` à la racine) : avant d'écrire du code Next.js, toujours vérifier la doc officielle de cette version précise dans `node_modules/next/dist/docs/` plutôt que de se fier à des habitudes prises sur une version plus ancienne. Plusieurs API ont changé.

---

## 2. Structure des routes

Toutes les pages vivent sous `src/app/[locale]/...` — le segment `[locale]` gère les 3 langues (`fr`, `en`, `mg`) via `next-intl`. Une page normale ressemble à :

```text
src/app/[locale]/excursions/page.tsx           → /fr/excursions
src/app/[locale]/excursions/[slug]/page.tsx    → /fr/excursions/nosy-iranja-antsoha
```

Chaque dossier de page a son `page.module.css` à côté, même nom que le dossier de route (pas de nom de composant ici, juste `page.tsx`/`page.module.css`).

---

## 3. Server Components par défaut

Une page ou un composant est un **Server Component** sauf s'il a explicitement besoin d'interactivité côté navigateur (état, événements, hooks React comme `useState`). Dans ce cas seulement, on ajoute `"use client"` en première ligne du fichier.

Sur ce projet, seuls ces fichiers sont des Client Components, et pour une raison précise à chaque fois :

| Fichier | Pourquoi `"use client"` |
| --- | --- |
| `contact/page.tsx` | Formulaire avec état local (`useState`) et validation en temps réel |
| `Navbar.tsx` | Menu mobile ouvert/fermé (`useState`) |
| `LanguageSwitcher.tsx` | Détecte la route actuelle pour changer de langue |
| `ThemeToggle.tsx` | Bascule le thème clair/sombre |
| `Reveal.tsx` | Utilise `useReducedMotion` de Framer Motion (hook client) |
| `SafeImage.tsx` | Gère un état de secours si l'image ne charge pas |

Toutes les autres pages (`page.tsx` de l'accueil, Excursions, Tours, À propos, Galerie, Avis) sont des Server Components — pas de `"use client"`, pas de hook React dedans.

**Un Client Component peut être utilisé à l'intérieur d'une page Server Component** sans que toute la page devienne cliente : c'est exactement le cas de `Reveal`, utilisé dans toutes les pages sans les rendre "use client" pour autant.

---

## 4. Pages dynamiques (`[slug]`)

Les pages détail (`excursions/[slug]`, `tours/[slug]`) suivent ce pattern exact :

```tsx
type Props = {
  params: Promise<{ slug: string }>; // params est une Promise dans cette version de Next
};

export function generateStaticParams() {
  return excursions.map((excursion) => ({ slug: excursion.slug }));
}

export default async function ExcursionDetailPage({ params }: Props) {
  const { slug } = await params; // il faut "await" avant de lire slug
  // ...
}
```

Deux points à ne jamais oublier :

- `params` est une **Promise**, pas un objet direct — oublier le `await` fait planter la page.
- `generateStaticParams` dit à Next.js quelles pages générer à l'avance (une par excursion/tour) — sans ça, les URLs ne seraient générées qu'à la demande.

---

## 5. Traductions (`next-intl`) : quel hook utiliser

Deux façons d'aller chercher une traduction, selon le type de composant :

| Contexte | À utiliser |
| --- | --- |
| Server Component (page normale, pas de `"use client"`) | `useTranslations("Namespace")` — fonctionne aussi côté serveur avec `next-intl` |
| Server Component **async** (qui fait déjà un `await`, comme les pages `[slug]`) | `await getTranslations("Namespace")` |
| Client Component (`"use client"`) | `useTranslations("Namespace")` |

Le signal pour savoir lequel utiliser : si la fonction du composant est déjà `async` (à cause d'un `await params` par exemple), utiliser `getTranslations` avec `await`. Sinon, `useTranslations` suffit.

---

## 6. Images

Toujours passer par `next/image` (jamais une balise `<img>` brute), avec `fill` + `sizes` pour les images qui remplissent leur conteneur. Sur ce projet, ne pas utiliser `next/image` directement : utiliser **`SafeImage`** (`@/components/ui/SafeImage`), qui bascule automatiquement sur une image de secours si le fichier attendu n'existe pas encore (voir `Guides/Naming.md` pour la convention de nommage des images).

---

## 7. Navigation interne (liens)

Toujours utiliser le `Link` de **`@/i18n/navigation`**, jamais celui de `next/link` directement. La différence : celui du projet ajoute automatiquement le préfixe de langue (`/fr`, `/en`, `/mg`) à l'URL — l'import de base ne le fait pas et casse la navigation multilingue (bug réel rencontré et corrigé sur le Footer, voir `Changelog.md`).

```tsx
// ✅ Correct
import { Link } from "@/i18n/navigation";

// ❌ Incorrect — perd le préfixe de langue
import Link from "next/link";
```

---

## 8. `next/script`

Un `<Script>` (utilisé pour l'initialisation du thème dans `layout.tsx`) doit toujours être un enfant de `<body>`, **jamais placé dans un `<head>` écrit à la main** — il s'injecte lui-même dans le vrai `<head>` du document quel que soit l'endroit où il est déclaré dans l'arbre. Le placer dans un `<head>` JSX manuel provoque une erreur de rendu (bug réel rencontré et corrigé, voir `Changelog.md`).

---

## 9. Métadonnées

`export const metadata` existe dans `layout.tsx` mais garde encore le texte par défaut de `create-next-app` ("Generated by create next app") — à remplacer par une vraie description suivant `Brand/Voice-and-Tone.md` avant publication. Voir `Task-Board.md`.
