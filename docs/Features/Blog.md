# 📝 Feature — Blog

Version : 0.1 — **Statut : décisions structurantes en attente**

---

## Sommaire

1. [Statut actuel](#1-statut-actuel)
2. [Objectif de la fonctionnalité](#2-objectif-de-la-fonctionnalité)
3. [Décision à prendre : type de contenu](#3-décision-à-prendre--type-de-contenu)
4. [Décision à prendre : source du contenu](#4-décision-à-prendre--source-du-contenu)
5. [Contraintes déjà connues](#5-contraintes-déjà-connues)
6. [Documents associés](#6-documents-associés)

---

## 1. Statut actuel

Aucune décision de fond n'a encore été prise sur cette fonctionnalité : ni le type de contenu à publier, ni la façon dont ce contenu sera géré techniquement. Ce document liste les options réelles à trancher plutôt que d'imposer un choix arbitraire.

## 2. Objectif de la fonctionnalité

Le Blog doit permettre à MadaTours de publier du contenu éditorial pour renforcer sa présence en ligne (SEO, inspiration voyage) et sa crédibilité auprès des visiteurs — la nature exacte de ce contenu reste à définir (voir section 3).

## 3. Décision à prendre : type de contenu

| Option | Description | Implication |
| --- | --- | --- |
| Articles éditoriaux | Guides pratiques, conseils de voyage, actualités Madagascar | Nécessite un rythme de publication régulier, rédigé par l'équipe |
| Témoignages clients | Carnets de voyage de vrais clients MadaTours | Dépend du volume réel de clients et de leur volonté de contribuer |
| Les deux | Mix des deux formats, éventuellement catégorisés | Structure de données plus complexe (types de contenu différents) |

> ⚠️ **À trancher par l'équipe** avant de pouvoir définir un modèle de données ou une structure de page.

## 4. Décision à prendre : source du contenu

| Option | Avantages | Inconvénients |
| --- | --- | --- |
| Fichiers Markdown/MDX dans le repo | Simple, gratuit, versionné avec le code, pas de dépendance externe | Publier un article nécessite un déploiement ; pas adapté si quelqu'un de non-technique doit rédiger seul |
| CMS headless (ex. Sanity, Contentful, Strapi) | Interface de rédaction dédiée, publication sans redéploiement, gestion multilingue facilitée | Coût potentiel, dépendance à un service tiers, complexité d'intégration supplémentaire |

> ⚠️ **À trancher par l'équipe**, en fonction de qui rédigera le contenu (développeur seul vs personne non-technique) et de la fréquence de publication visée.

## 5. Contraintes déjà connues

Quelle que soit l'option retenue, la fonctionnalité devra respecter ce qui est déjà figé dans le projet :

- Le contenu doit être disponible dans les trois langues du site (`fr`, `en`, `mg`) — voir **[Technical/Internationalization.md](../Technical/Internationalization.md)**.
- L'affichage des articles doit utiliser les composants du Design System (typographie, espacements, boutons) — pas de style ad hoc.
- Les images d'articles doivent respecter **[Brand/Photography.md](../Brand/Photography.md)**.
- Le rendu doit rester performant (SEO, temps de chargement) — voir **[Technical/Performance.md](../Technical/Performance.md)** et **[Technical/SEO.md](../Technical/SEO.md)**.

## 6. Documents associés

- [Brand/Photography.md](../Brand/Photography.md)
- [Brand/Voice-and-Tone.md](../Brand/Voice-and-Tone.md)
- [Technical/Internationalization.md](../Technical/Internationalization.md)
- [Technical/SEO.md](../Technical/SEO.md)
- [Technical/Performance.md](../Technical/Performance.md)
- [Design-System/Components.md](../Design-System/Components.md)
