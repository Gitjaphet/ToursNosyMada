# 🌐 Internationalization

Version : 1.0

---

## Sommaire

1. [Objectif](#1-objectif)
2. [Langues supportées](#2-langues-supportées)
3. [Stratégie de routing](#3-stratégie-de-routing)
4. [Structure des fichiers](#4-structure-des-fichiers)
5. [Fichiers de configuration](#5-fichiers-de-configuration)
6. [Structure `app/[locale]/`](#6-structure-applocale)
7. [Sélecteur de langue](#7-sélecteur-de-langue)
8. [Utilisation des traductions dans un composant](#8-utilisation-des-traductions-dans-un-composant)
9. [Next.js 16 — `proxy.ts` et non `middleware.ts`](#9-nextjs-16--proxyts-et-non-middlewarets)
10. [Interdictions](#10-interdictions)
11. [Documents associés](#11-documents-associés)

---

## 1. Objectif

Ce document décrit l'implémentation réelle de l'internationalisation de MadaTours avec **next-intl**, et sert de référence pour tout développeur ajoutant du contenu localisé.

## 2. Langues supportées

| Code | Langue | Statut |
| --- | --- | --- |
| `fr` | Français | Langue par défaut |
| `en` | Anglais | Supportée |
| `mg` | Malgache | Supportée |

## 3. Stratégie de routing

`localePrefix: "always"` — chaque URL porte systématiquement son préfixe de langue (`/fr/...`, `/en/...`, `/mg/...`), y compris pour le français par défaut. Aucune URL sans préfixe (`/...` nu) n'est servie ; le `proxy.ts` (voir §9) redirige vers la langue détectée.

## 4. Structure des fichiers

```text
src/
├── i18n/
│   ├── routing.ts       → locales supportées, langue par défaut, stratégie de préfixe
│   ├── request.ts       → résolution de la locale + chargement des messages
│   └── navigation.ts    → Link/useRouter/usePathname conscients de la locale
├── messages/
│   ├── fr.json
│   ├── en.json
│   └── mg.json
├── app/
│   └── [locale]/
│       ├── layout.tsx   → root layout réel (html/body), NextIntlClientProvider
│       └── page.tsx
└── proxy.ts             → détection de langue, redirections (à la racine de src/)
```

## 5. Fichiers de configuration

**`routing.ts`** définit les locales (`fr`, `en`, `mg`), la langue par défaut (`fr`) et la stratégie de préfixe (`always`).

**`request.ts`** résout la locale de la requête (via `requestLocale`), retombe sur `fr` si la locale demandée n'est pas supportée, et charge le fichier de messages correspondant depuis `src/messages/`.

**`navigation.ts`** exporte des versions de `Link`, `useRouter`, `usePathname`, `redirect` conscientes de la locale — **à utiliser systématiquement à la place des équivalents `next/link`/`next/navigation`** dans tout composant qui a besoin de naviguer, pour que le préfixe de langue soit automatiquement préservé.

**`next.config.ts`** enveloppe la config Next.js avec `createNextIntlPlugin()`, requis pour que next-intl fonctionne au build.

## 6. Structure `app/[locale]/`

Toutes les pages vivent sous `src/app/[locale]/`. Il n'existe **pas** de layout racine séparé au niveau de `src/app/` : `app/[locale]/layout.tsx` est le véritable layout racine (il contient `<html>`/`<body>`), pour éviter la duplication de ces balises qui casserait l'hydratation React.

`app/[locale]/layout.tsx` :

- valide la locale reçue (`hasLocale`) et renvoie une 404 (`notFound()`) si elle n'est pas supportée ;
- génère les pages statiques pour chaque locale au build (`generateStaticParams`) ;
- englobe `{children}` dans `NextIntlClientProvider` pour que `useTranslations()` fonctionne côté client.

## 7. Sélecteur de langue

> ⚠️ **État actuel — non finalisé.** Le composant `LanguageSwitcher` (voir [Design-System/Components.md](../Design-System/Components.md) §8.4) est branché pour l'instant sur un état React local (`useState`) dans `Navbar`, qui ne change ni l'URL ni la langue réelle du site. Il doit être reconnecté sur `usePathname`/`useRouter` de `navigation.ts` (§5) pour naviguer réellement vers la version localisée de la page courante. **Ne pas considérer le changement de langue comme fonctionnel tant que ce point n'est pas corrigé.**

## 8. Utilisation des traductions dans un composant

```tsx
// Composant client
import { useTranslations } from "next-intl";

export function ExampleComponent() {
  const t = useTranslations("HomePage");
  return <h1>{t("title")}</h1>;
}
```

```tsx
// Composant serveur (async)
import { getTranslations } from "next-intl/server";

export default async function ExamplePage() {
  const t = await getTranslations("HomePage");
  return <h1>{t("title")}</h1>;
}
```

Les clés (`"HomePage"`, `"title"`...) correspondent à la structure des fichiers `src/messages/{locale}.json` — à organiser par section/page à mesure que le contenu réel est rédigé.

## 9. Next.js 16 — `proxy.ts` et non `middleware.ts`

MadaTours tourne sur **Next.js 16**, qui a renommé la convention `middleware.ts` en **`proxy.ts`** (même fonctionnement, fichier renommé). Toute documentation ou tutoriel externe mentionnant `middleware.ts` pour next-intl doit être adapté : le fichier vit à `src/proxy.ts`, avec un export par défaut identique à l'ancien `createMiddleware(routing)`.

```ts
// src/proxy.ts
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: "/((?!api|_next|_vercel|.*\\..*).*)",
};
```

## 10. Interdictions

- ❌ Écrire un texte visible par l'utilisateur en dur dans un composant — toujours passer par `useTranslations`/`getTranslations` et les fichiers `messages/`.
- ❌ Utiliser `next/link` ou `next/navigation` directement dans un composant qui doit naviguer — toujours passer par `src/i18n/navigation.ts`.
- ❌ Ajouter une locale sans l'ajouter à la fois dans `routing.ts` et dans un fichier `messages/{locale}.json` correspondant.

## 11. Documents associés

- [Design-System/Components.md](../Design-System/Components.md)
- [Features/Blog.md](../Features/Blog.md)
