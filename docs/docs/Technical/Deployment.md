# 🚀 Déploiement

## MadaTours

Version : 1.0

---

## 1. Objectif

Ce document explique comment le site est mis en ligne, et ce qui se passe concrètement quand on envoie du code sur GitHub.

---

## 2. Hébergement

Le site est hébergé sur **Vercel**, connecté directement au dépôt GitHub `Zephryr69/madatours`.

Il ne faut connecter que ce dépôt à Vercel — pas `ToursNosyMada`, qui n'est qu'une copie séparée destinée au mentor (voir `Git-Workflow.md`). Connecter le mauvais dépôt déploierait une version désynchronisée du site.

---

## 3. Comment ça marche

Une fois le dépôt connecté, il n'y a **rien à faire manuellement** sur Vercel pour publier une mise à jour. Chaque `git push` déclenche automatiquement une construction (un "build") du site :

|Branche poussée|Résultat|
|---|---|
|`feature/xxx`|Une URL de preview, propre à cette branche, pour tester seul|
|`develop`|Une URL de preview partagée par toute l'équipe|
|`main`|**Le site public est mis à jour** — c'est la branche de production|

La branche de production (`main`) est configurée dans Vercel sous **Settings → Git → Production Branch**. Elle doit toujours pointer vers `main`, conformément à `Git-Workflow.md`.

---

## 4. Mise en route initiale (une seule fois)

1. Créer un compte sur vercel.com et se connecter avec GitHub.
2. "Add New Project" → choisir le dépôt `madatours`.
3. Vercel détecte Next.js automatiquement — garder les réglages par défaut.
4. Vérifier que la Production Branch est bien `main`.
5. "Deploy".

---

## 5. Workflow habituel

```bash
git add .
git commit -m "description du changement"
git push
```

Rien d'autre à faire : Vercel construit le site automatiquement dans les 1 à 2 minutes qui suivent le push.

---

## 6. Vérifier un déploiement

Sur le tableau de bord Vercel, onglet **Deployments** :

- **Building** : construction en cours.
- **Ready** : le déploiement a réussi, le site est à jour.
- **Error** : la construction a échoué — cliquer dessus pour voir les logs et trouver la ligne d'erreur exacte.

---

## 7. Variables d'environnement

Aucune variable d'environnement n'est utilisée pour l'instant (pas de clé d'API, pas de base de données connectée). Ce document sera complété dès que ce sera le cas.
