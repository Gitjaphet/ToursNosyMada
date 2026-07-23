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

## 3. Synchronisation du projet

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

## 4. Workflow quotidien

Chaque début de journée

```powershell
git pull origin main
```

Développement dans **madatours**

Synchronisation

Commit

Push

---

## 5. Créer une nouvelle fonctionnalité

Créer une branche

```powershell
git checkout -b feature/nom-de-la-fonction
```

Exemple

```powershell
git checkout -b feature/homepage
```

---

## 6. Vérifier les modifications

```powershell
git status
```

---

## 7. Ajouter les modifications

Tous les fichiers

```powershell
git add .
```

Un seul fichier

```powershell
git add src/components/Navbar/Navbar.tsx
```

---

## 8. Créer un commit

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

## 9. Envoyer les modifications

```powershell
git push origin main
```

---

## 10. Récupérer les modifications

Toujours avant de commencer

```powershell
git pull origin main
```

---

## 11. Vérifier les branches

```powershell
git branch
```

---

## 12. Changer de branche

```powershell
git checkout main
```

---

## 13. Voir l'historique

```powershell
git log --oneline
```

---

## 14. Voir les différences

```powershell
git diff
```

---

## 15. Restaurer un fichier

```powershell
git restore nomDuFichier
```

---

## 16. Règles de commit

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

## 17. Avant un Push

Toujours vérifier :

* le projet compile ;
* aucune erreur TypeScript ;
* aucune erreur ESLint ;
* le responsive ;
* les traductions ;
* les liens.

---

## 18. Gestion des conflits

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

## 19. Fichiers à ne jamais versionner

Git ignore automatiquement :

* node_modules
* .next
* .env
* fichiers temporaires

Le fichier `.gitignore` doit toujours être respecté.

---

## 20. Règles de l'équipe

Toujours :

✔ Faire un commit clair.

✔ Tester avant un push.

✔ Garder une branche synchronisée.

✔ Respecter l'architecture.

✔ Respecter le Design System.

✔ Documenter les changements importants.

---

## 21. Workflow officiel

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

## 22. Bonnes pratiques

* Faire des commits petits et fréquents.
* Éviter les commits contenant plusieurs fonctionnalités.
* Documenter les décisions importantes.
* Préférer une Pull Request lorsqu'une fonctionnalité est terminée.
* Toujours relire son code avant de le partager.
