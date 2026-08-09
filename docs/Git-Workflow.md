# 🌿 Git Workflow

## MadaTours

Version : 1.0

---

## 1. Objectif

Ce document définit les règles d'utilisation de Git et GitHub pour l'ensemble de l'équipe.

Le respect de ce workflow permet :

* d'éviter les conflits ;
* de conserver un historique propre ;
* de faciliter la collaboration ;
* de sécuriser le code du projet.

---

## 2. Structure actuelle

```text
madatours/
│
└── (Projet de développement)

ToursNosyMada/
│
└── (Projet connecté au dépôt GitHub)
```

Le développement est actuellement réalisé dans **madatours**.

Le dépôt officiel de l'équipe est **ToursNosyMada**.

Avant chaque envoi sur GitHub, le projet est synchronisé.

---

## 3. Stratégie de branches (GitFlow allégé)

Le projet suit une version allégée de GitFlow — adaptée à un petit projet en déploiement continu, sans cycles de release numérotés (pas de branches `release/*` ni `hotfix/*`).

```text
main       → toujours déployable, correspond à la production (Vercel)
develop    → branche d'intégration, toutes les features y sont fusionnées avant main
feature/*  → une branche par fonctionnalité, créée depuis develop
```

**Règles :**

* Toute nouvelle fonctionnalité part de `develop`, jamais directement de `main`.
* Une fois une fonctionnalité terminée et testée, Pull Request `feature/*` → `develop`.
* `main` ne reçoit que des merges depuis `develop`, une fois celui-ci stable — c'est ce qui déclenche un déploiement en production sur Vercel.
* Déploiements Vercel : chaque push sur `develop` (ou sur une PR) génère une Preview Deployment avec son URL propre ; seul `main` déploie en production.

---

## 4. Synchronisation du projet

Depuis le dossier **ToursNosyMada**

```powershell
# Copier les modifications depuis Madatours

robocopy ..\madatours . /MIR /XD .git node_modules .next

# Vérifier les changements

git status

# Ajouter les fichiers

git add .

# Créer un commit

git commit -m "Description des modifications"

# Envoyer sur GitHub

git push origin main
```

---

## 5. Workflow quotidien

Chaque début de journée

```powershell
git checkout develop
git pull origin develop
```

Développement dans **madatours**

Synchronisation

Commit

Push

---

## 6. Créer une nouvelle fonctionnalité

Se placer sur `develop` et la mettre à jour avant de partir

```powershell
git checkout develop
git pull origin develop
```

Créer une branche

```powershell
git checkout -b feature/nom-de-la-fonction
```

Exemple

```powershell
git checkout -b feature/homepage
```

---

## 7. Vérifier les modifications

```powershell
git status
```

---

## 8. Ajouter les modifications

Tous les fichiers

```powershell
git add .
```

Un seul fichier

```powershell
git add src/components/Navbar/Navbar.tsx
```

---

## 9. Créer un commit

Format des messages

""
feat: nouvelle fonctionnalité

fix: correction d'un bug

style: modification CSS

docs: documentation

refactor: refactorisation

perf: optimisation

test: ajout de tests

chore: maintenance

''''

Exemple

```powershell
git commit -m "feat: add booking page"
```

---

## 10. Envoyer les modifications

```powershell
git push origin nom-de-la-branche
```

Exemple

```powershell
git push origin feature/homepage
```

---

## 11. Récupérer les modifications

Toujours avant de commencer

```powershell
git pull origin main
```

---

## 12. Vérifier les branches

```powershell
git branch
```

---

## 13. Changer de branche

```powershell
git checkout main
```

---

## 14. Voir l'historique

```powershell
git log --oneline
```

---

## 15. Voir les différences

```powershell
git diff
```

---

## 16. Restaurer un fichier

```powershell
git restore nomDuFichier
```

---

## 17. Règles de commit

Chaque commit doit :

* avoir un objectif précis ;
* être fonctionnel ;
* compiler sans erreur ;
* respecter les conventions de nommage.

Éviter les commits du type :

''''
Update

Test

Modif

Divers

''''

Préférer

''''
feat: create destination cards

fix: booking validation

docs: update architecture

style: improve navbar
''''

---

## 18. Avant un Push

Toujours vérifier :

* le projet compile ;
* aucune erreur TypeScript ;
* aucune erreur ESLint ;
* le responsive ;
* les traductions ;
* les liens.

---

## 19. Gestion des conflits

En cas de conflit

''''
git pull

↓

Résoudre les conflits

↓

git add .

↓

git commit

↓

git push

''''

Ne jamais supprimer du code sans vérifier l'origine du conflit.

---

## 20. Fichiers à ne jamais versionner

Git ignore automatiquement :

* node_modules
* .next
* .env
* fichiers temporaires

Le fichier `.gitignore` doit toujours être respecté.

---

## 21. Règles de l'équipe

Toujours :

✔ Faire un commit clair.

✔ Tester avant un push.

✔ Garder une branche synchronisée.

✔ Respecter l'architecture.

✔ Respecter le Design System.

✔ Documenter les changements importants.

---

## 22. Workflow officiel

```text
Développer

↓

Tester

↓

Synchroniser

↓

git status

↓

git add

↓

git commit

↓

git push

↓

GitHub
```

---

## 23. Bonnes pratiques

* Faire des commits petits et fréquents.
* Éviter les commits contenant plusieurs fonctionnalités.
* Documenter les décisions importantes.
* Préférer une Pull Request lorsqu'une fonctionnalité est terminée.
* Toujours relire son code avant de le partager.
