# 🧾 Antisèche Git — MadaTours

Écrit en langage simple, pour éviter les erreurs comme celle qu'on vient d'avoir.

---

## 🔴 La règle la plus importante de tout ce document

**Tant que tu n'as pas fait `git commit`, ton travail n'est pas en sécurité.**

Tu peux le perdre d'un coup, sans prévenir, avec une seule commande tapée par erreur. Une fois que tu as fait `git commit`, par contre, git s'en souvient pour toujours — même si tu te trompes après, tu peux le retrouver.

**Donc : après chaque session de code, avant de fermer ton ordinateur, fais toujours ceci :**

```bash
git add .
git commit -m "ce que j'ai fait aujourd'hui"
git push
```

Le texte entre guillemets, c'est toi qui l'écris — décris en 5 mots ce que tu as fait (exemple : `"ajoute la page contact"`). Ce n'est jamais un mot à copier tel quel.

---

## 🟢 Les 3 commandes que tu utilises tout le temps

|Commande|Ce que ça fait, en simple|
|---|---|
|`git status`|Montre ce que tu as changé depuis la dernière fois|
|`git add .`|Prépare tous tes changements pour les sauvegarder|
|`git commit -m "..."`|Sauvegarde ces changements, avec une description|
|`git push`|Envoie la sauvegarde sur GitHub (sur internet)|

Tape `git status` souvent. C'est sans danger, ça ne change rien, ça te dit juste où tu en es.

---

## 🌿 Les branches, expliquées simplement

Une branche, c'est une copie de travail séparée du projet. Tu en as 3 sortes :

- **`main`** = le site que les visiteurs voient. On n'y touche presque jamais directement.
- **`develop`** = la version de travail de toute l'équipe. C'est là que tout se retrouve avant d'aller sur `main`.
- **`feature/quelque-chose`** = une branche juste pour toi, pour UNE seule tâche à la fois (exemple : `feature/page-contact`).

### Voir où tu es

```bash
git branch --show-current
```

### Commencer une nouvelle tâche

```bash
git checkout develop
git pull
git checkout -b feature/nom-de-ta-tache
```

### Rendre ta tâche terminée disponible à toute l'équipe

```bash
git checkout develop
git pull
git merge feature/nom-de-ta-tache
git push
```

### Mettre en ligne pour de vrai (rendre visible aux visiteurs du site)

```bash
git checkout main
git pull
git merge develop
git push
git checkout develop
```

La dernière ligne (`git checkout develop`) te ramène là où tu codes d'habitude, pour ne pas continuer par erreur sur `main`.

---

## 🚀 Ce que chaque branche déclenche sur Vercel

|Tu pousses sur...|Ce qui se passe sur Vercel|
|---|---|
|`feature/xxx`|Un lien de test, juste pour toi|
|`develop`|Un lien de test pour toute l'équipe|
|`main`|**Le vrai site public change**|

---

## 🔴 ZONE DANGEREUSE — lis avant de taper une de ces commandes

Ces commandes existent pour "nettoyer" ou "annuler". Le problème : elles effacent ton travail **pour de vrai, sans demander confirmation, sans possibilité de revenir en arrière** — sauf si tu avais déjà fait `git commit` avant.

**Avant de taper une commande de cette liste, demande-toi toujours : "est-ce que j'ai déjà sauvegardé (`git commit`) mon travail avant ?" Si tu n'es pas sûr → ne tape rien, fais d'abord `git status` et montre-moi le résultat.**

|Commande|Ce qu'elle efface|
|---|---|
|`git restore .`|Tout ce que tu as changé depuis ta dernière sauvegarde. Définitivement.|
|`git checkout -- .`|Pareil que ci-dessus.|
|`git reset --hard`|Pareil, en pire.|

C'est très probablement une de ces commandes qui a effacé ton travail sur l'accueil et les autres pages — pas une erreur de ta part, juste une commande dont l'effet n'était pas clair.

---

## 📋 Copier-coller rapide (les cas les plus fréquents)

**Sauvegarder mon travail du jour :**

```bash
git add .
git commit -m "decris ici ce que tu as fait"
git push
```

**Commencer une nouvelle tâche :**

```bash
git checkout develop
git pull
git checkout -b feature/nom-de-ta-tache
```

**Récupérer les derniers changements de l'équipe avant de coder :**

```bash
git checkout develop
git pull
```

---

## 👀 Envoyer une copie à ton mentor (dossier `ToursNosyMada`)

Ce dossier est une copie séparée, juste pour que ton mentor voie ton avancement. Ce n'est pas ton vrai code de travail.

```powershell
cd ToursNosyMada
git pull origin main
robocopy .. . /MIR /XD .git node_modules .next ToursNosyMada
git add .
git commit -m "decris ici ce que tu as fait"
git push
cd ..
```

`robocopy` copie tout ce qui a changé dans `madatours/` vers `ToursNosyMada/`. Après ça, les 4 lignes `git add` / `commit` / `push` sauvegardent cette copie sur le GitHub du mentor — même logique que la sauvegarde du dessus.

---

## 🧯 En cas de souci

### "Mon site sur Vercel ne change pas après un push"

1. Vérifie que tu as bien fait `git push` (pas juste `git commit`)
2. Vérifie que tu es sur la bonne branche : `git branch --show-current`
3. Vérifie sur le site de Vercel, section "Deployments", s'il y a une erreur

### "J'ai un conflit quand je fais `git merge`"

Git va te dire quels fichiers posent problème. Ouvre-les, montre-les moi, je t'aide à choisir la bonne version à garder.

### "Je ne sais pas ce que je risque avec une commande"

Ne la tape pas. Montre-la moi d'abord, je te dis ce qu'elle fait avant que tu l'exécutes.

---

## 📌 À retenir avant tout le reste

1. Sauvegarde souvent (`git add` / `commit` / `push`), pas juste à la fin.
2. Ne tape jamais une commande de la zone dangereuse sans être sûr d'avoir déjà sauvegardé.
3. Dans le doute, demande avant de taper.
