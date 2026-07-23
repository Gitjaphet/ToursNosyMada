# 🤝 Guide de Contribution

## MadaTours

Version : 1.0

---

## 1. Introduction

Bienvenue sur le projet **MadaTours**.

Ce document décrit les règles de contribution afin de garantir un développement cohérent, maintenable et collaboratif.

Chaque membre de l'équipe est invité à respecter ces conventions.

---

## 2. Avant de commencer

Avant toute modification :

* récupérer les dernières modifications ;
* vérifier que le projet fonctionne ;
* installer les dépendances si nécessaire.

```powershell
git pull origin main

npm install

npm run dev
```

---

## 3. Respect de l'architecture

Avant de créer un fichier, vérifier le document :

''''
docs/Architecture.md
''''

Aucun fichier ne doit être placé dans un dossier inadapté.

---

## 4. Respect du Design System

Toutes les interfaces doivent respecter :

''''
docs/Design-System/
''''

Il est interdit de :

* inventer une nouvelle couleur ;
* créer un nouveau bouton alors qu'un composant existe ;
* modifier les espacements sans justification.

---

## 5. Création d'une fonctionnalité

Chaque fonctionnalité suit ce cycle.

```text
Créer une branche

↓

Développer

↓

Tester

↓

Documenter

↓

Commit

↓

Push

↓

Pull Request
```

---

## 6. Conventions de nommage

## Composants

PascalCase

```text
HeroSection

Navbar

BookingCard
```

---

## Hooks

Toujours commencer par :

```text
use
```

Exemple :

```text
useBooking

useScroll
```

---

## Services

Toujours terminer par :

```text
.service.ts
```

---

## Types

Toujours terminer par :

```text
.types.ts
```

---

## 7. Convention des commits

Utiliser les préfixes suivants.

```text
feat:

fix:

docs:

style:

refactor:

perf:

test:

chore:
```

Exemple

```text
feat: create booking form

fix: correct responsive navbar

docs: update architecture
```

---

## 8. Qualité du code

Chaque contribution doit :

* compiler sans erreur ;
* respecter TypeScript ;
* respecter ESLint ;
* respecter le Design System ;
* respecter l'architecture.

---

## 9. Responsive

Chaque nouvelle interface doit être testée sur :

* Mobile
* Tablet
* Desktop

Le développement suit une approche **Mobile First**.

---

## 10. Internationalisation

Aucun texte ne doit être écrit directement dans les composants.

Incorrect

```tsx
<h1>Bienvenue</h1>
```

Correct

```tsx
t("home.title")
```

Toutes les traductions doivent être ajoutées dans :

''''
messages/fr.json

messages/en.json

messages/mg.json
''''

---

## 11. Documentation

Toute nouvelle fonctionnalité importante doit être documentée.

Mettre à jour si nécessaire :

* Roadmap
* Changelog
* Documentation technique
* Documentation fonctionnelle

---

## 12. Pull Request

Une Pull Request doit :

* concerner une seule fonctionnalité ;
* avoir un titre clair ;
* être testée ;
* être relue avant fusion.

---

## 13. Revue de code

Pendant une revue :

* privilégier les remarques constructives ;
* expliquer les changements demandés ;
* éviter les modifications inutiles.

L'objectif est d'améliorer la qualité du projet, pas de critiquer les développeurs.

---

## 14. Ce qu'il faut éviter

Ne jamais :

* pousser du code qui ne compile pas ;
* laisser des `console.log()` inutiles ;
* dupliquer du code existant ;
* modifier plusieurs fonctionnalités dans un seul commit ;
* contourner les règles du Design System.

---

## 15. Bonnes pratiques

✔ Écrire un code simple.

✔ Nommer clairement les variables.

✔ Créer des composants réutilisables.

✔ Documenter les choix importants.

✔ Tester avant chaque Push.

✔ Respecter les conventions de l'équipe.

---

## 16. Philosophie du projet

Nous privilégions :

* la lisibilité ;
* la simplicité ;
* la réutilisabilité ;
* la performance ;
* l'accessibilité ;
* la maintenabilité.

Chaque décision technique doit être prise dans l'intérêt du projet sur le long terme.

---

## 17. Évolution

Ce document pourra évoluer avec le projet.

Toute modification importante devra être validée collectivement par l'équipe.
