# 🧾 Cheatsheet Git/GitHub — MadaTours

Basé sur ton workflow d'équipe : `main` (production, déployé sur Vercel) / `develop` (intégration) / `feature/*` (une fonctionnalité à la fois).

---

## ⚡ Copier-coller rapide

Remplace juste `<message>` (et `<nom>` si présent) avant d'exécuter.

### 💾 Sauvegarder mon travail sur la branche où je suis (feature ou develop)

```bash
git add .
git commit -m "<message>"
git push
```

### 🌱 Créer une nouvelle fonctionnalité

```bash
git checkout develop
git pull
git checkout -b feature/<nom>
```

### 🔗 Intégrer ma fonctionnalité terminée dans develop

```bash
git checkout develop
git pull
git merge feature/<nom>
git push
# Optionnel : supprimer la branche feature une fois intégrée
# git branch -d feature/<nom>
```

### 🚀 Publier en production sur Vercel (develop → main)

```bash
git checkout main
git pull
git merge develop
git push
git checkout develop
```

*(le dernier `checkout develop` te replace là où tu codes habituellement, pour ne pas continuer par erreur sur `main`)*

### 👀 Mettre à jour le dossier miroir pour le mentor

```powershell
cd ToursNosyMada
git pull origin main
robocopy .. . /MIR /XD .git node_modules .next ToursNosyMada
git add .
git commit -m "<message>"
git push
cd ..
```

### 🔄 Tout récupérer avant de commencer à coder (début de session)

```bash
git checkout develop
git pull
```

---

## 🔁 Le cycle du quotidien (à faire presque à chaque session de code)

```bash
git status                  # Qu'est-ce qui a changé depuis mon dernier commit ?
git add .                   # Prépare TOUS les fichiers modifiés
git commit -m "<message>"   # Enregistre un instantané avec une description
git push                    # Envoie tes commits sur GitHub
```

> ⚠️ Le piège le plus fréquent : coder, sauvegarder, tester en local... et oublier `git push`. Tant que tu n'as pas pushé, Vercel ne voit rien et ton mentor ne voit rien non plus.

**Astuce** : avant de fermer ton ordi, réflexe systématique : `git status` → s'il y a des changements non commités, fais le cycle complet.

---

## 🌿 Travailler avec les branches

```bash
git branch --show-current           # Sur quelle branche je suis actuellement ?
git checkout develop                 # Changer de branche
git checkout -b feature/nom-du-truc  # Créer ET basculer sur une nouvelle branche
git branch -a                        # Lister toutes les branches (locales + distantes)
```

### Créer une nouvelle fonctionnalité (le cas le plus courant)

```bash
git checkout develop
git pull                              # Récupère les derniers changements de l'équipe
git checkout -b feature/booking-form  # Nom clair, en anglais, avec des tirets
# ... tu codes, tu commits plusieurs fois ...
git push -u origin feature/booking-form   # -u seulement la première fois sur cette branche
```

### Intégrer ta fonctionnalité terminée dans `develop`

```bash
git checkout develop
git pull
git merge feature/booking-form
git push
# Optionnel : supprimer la branche feature une fois intégrée
# git branch -d feature/booking-form
```

### Passer une version de `develop` en production (`main`)

```bash
git checkout main
git pull
git merge develop
git push        # → déclenche le déploiement production sur Vercel
git checkout develop
```

---

## 🚀 Effet sur Vercel selon la branche

| Tu pushes sur... | Résultat sur Vercel |
| ---------------- | ------------------- |
| `feature/xxx`     | URL de preview dédiée à cette branche |
| `develop`         | URL de preview "develop" |
| `main`            | **Déploiement en production** — le vrai site public change |

Donc : si tu veux juste tester, reste sur `feature/*` ou `develop`. Si tu veux que le monde voie le changement, il faut que ça arrive sur `main`.

---

## 👀 Publier une copie pour ton mentor (dossier miroir `ToursNosyMada`)

Ce dossier a son **propre dépôt GitHub**, séparé de `madatours/`. Ce n'est pas ton vrai code de travail — c'est juste une photo à jour que tu envoies pour que ton mentor voie ton avancement.

```powershell
cd ToursNosyMada
git pull origin main                                          # récupère l'état distant du miroir avant d'écraser
robocopy .. . /MIR /XD .git node_modules .next ToursNosyMada   # copie EXACTE : ajoute, met à jour ET supprime ce qui n'existe plus dans madatours/
git add .
git commit -m "<message>"
git push
cd ..
```

**Pourquoi `/MIR` et pas `/E`** : `/E` copie seulement les fichiers nouveaux ou modifiés — les fichiers supprimés côté `madatours/` resteraient comme des fantômes dans `ToursNosyMada/`. `/MIR` (mirror) fait exactement ce que le nom indique : le dossier de destination devient une copie identique de la source, y compris les suppressions. Avec `/MIR`, plus besoin de supprimer le dossier à la main avant de recopier.

`/XD ToursNosyMada` reste indispensable : sans ça, robocopy essaierait de copier le dossier miroir à l'intérieur de lui-même (puisqu'il est un sous-dossier de `madatours/`, le dossier source).

Le `git add . / commit / push` final est le même principe que ton cycle quotidien, mais appliqué à **ce dépôt-ci** : il enregistre la copie fraîchement collée et l'envoie vers le GitHub du miroir, pour que ton mentor la voie.

> 💡 Si `git commit` échoue avec « nothing to commit », c’est normal : le miroir était déjà à jour.

---

## 🔍 Vérifier avant d'agir

```bash
git log --oneline -5     # Les 5 derniers commits, en résumé
git diff                 # Qu'est-ce qui a changé exactement, ligne par ligne ?
git status               # Fichiers modifiés / non suivis / prêts à commit
```

---

## 🧯 Situations de secours

### J'ai fait `git add .` par erreur, je veux annuler avant de commit

```bash
git restore --staged .
```

### Je veux annuler des modifications non commitées et tout remettre comme avant

```bash
git restore .
```

⚠️ Ça supprime définitivement le travail non commité. À utiliser seulement si tu es sûr de vouloir tout perdre.

### Je me suis trompé de branche pour coder

```bash
git stash              # Met tes changements de côté temporairement
git checkout bonne-branche
git stash pop           # Récupère tes changements ici
```

### J'ai un conflit de merge

Git affichera les fichiers en conflit. Ouvre-les, cherche les marqueurs `<<<<<<<`, `=======`, `>>>>>>>`, choisis quelle version garder (ou combine les deux), supprime les marqueurs, puis :

```bash
git add .
git commit
```

---

## 📌 Règle d'or

Un commit = une idée. Mieux vaut 5 petits commits clairs (`ajoute formulaire`, `corrige validation email`, `style bouton`) qu'un seul gros commit `"modifs"`. Ça te sauvera la vie le jour où tu dois revenir en arrière.
