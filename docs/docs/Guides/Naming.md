# 📛 Conventions de nommage

## MadaTours

Version : 1.0

---

## 1. Objectif

Ce document dit comment nommer les choses dans le projet : fichiers, dossiers, clés de traduction, images, branches Git.

Le but est simple : que n'importe quel développeur, même débutant, puisse deviner où trouver un fichier ou une donnée sans avoir à demander.

**Ce document ne répète pas ce qui existe déjà.** Pour les composants, hooks, services, types et fichiers CSS Modules, la règle est déjà écrite dans [Architecture.md §5](../Architecture.md). Ici, on couvre ce qui manquait : images, traductions, classes CSS, variables, slugs et branches.

---

## 2. Images

Chaque image suit un chemin prévisible, basé sur le `slug` de l'excursion ou du tour (le même identifiant que dans l'URL). Pas besoin de modifier le code pour ajouter une photo : il suffit de la nommer exactement comme indiqué et de la déposer au bon endroit.

```text
public/images/
  excursions/<slug>/cover.jpg        → photo de la carte (listing)
  excursions/<slug>/gallery-1.jpg    → photos de la page détail
  excursions/<slug>/gallery-2.jpg      (gallery-1 à gallery-6, au besoin)
  tours/<slug>/cover.jpg
  tours/<slug>/gallery-1.jpg
  home/hero.jpg                      → grande image de l'accueil
  home/<nom-libre>.jpg               → autres visuels de l'accueil
  placeholders/excursion-placeholder.jpg
  placeholders/tour-placeholder.jpg  → utilisées si un cover.jpg manque encore
```

Règle : toujours en minuscules, toujours `.jpg`, jamais d'espace ni d'accent dans un nom de fichier.

La logique complète (comment le code construit ces chemins) est dans `src/lib/images.ts`.

---

## 3. Clés de traduction (`src/messages/*.json`)

Chaque fichier de langue (`fr.json`, `en.json`, `mg.json`) doit avoir **exactement les mêmes clés**, dans le même ordre. Seul le texte change.

- Le premier niveau = le nom de la page ou du composant, en `PascalCase` : `Home`, `Navbar`, `Footer`, `Excursions`, `Tours`.
- À l'intérieur, tout est en `camelCase` : `hero.title`, `values.items.trust.description`.
- Le contenu propre à une excursion ou un tour est toujours rangé sous `items.<slug>` — le même `slug` que dans les données et les images. C'est ce qui permet de tout relier sans dupliquer d'identifiant.

```json
{
  "Excursions": {
    "pageTitle": "Nos excursions",
    "items": {
      "nosy-iranja-antsoha": {
        "title": "Nosy Iranja & Nosy Antsoha"
      }
    }
  }
}
```

---

## 4. Classes CSS (dans un fichier `.module.css`)

Toujours en `camelCase`, jamais de tiret ni de majuscule au début.

```css
/* ✅ Correct */
.cardLink { }
.heroTitle { }

/* ❌ Incorrect */
.card-link { }
.HeroTitle { }
```

---

## 5. Variables et props TypeScript

- Variables et fonctions : `camelCase` (`getCoverImage`, `currentYear`).
- Types et interfaces de props : `PascalCase`, suffixés `Props` (`ButtonProps`, `CardImageProps`).
- Composants React : `PascalCase`, comme indiqué dans Architecture.md §5.

---

## 6. Slugs (excursions, tours)

Le `slug` est l'identifiant unique d'une excursion ou d'un tour. Il est utilisé à trois endroits en même temps : l'URL (`/excursions/nosy-iranja-antsoha`), le nom de dossier des images, et la clé de traduction. **Toujours en kebab-case** (minuscules, mots séparés par des tirets), et une fois choisi, un slug ne doit plus changer — le modifier casserait le lien avec les images et les traductions déjà en place.

---

## 7. Branches Git

Déjà couvert en détail dans [Git-Workflow.md](../Git-Workflow.md) : `feature/nom-de-la-fonction`, en kebab-case, créée depuis `develop`.
