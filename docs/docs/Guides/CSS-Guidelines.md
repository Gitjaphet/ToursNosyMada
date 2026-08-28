# 🎨 Règles CSS

## MadaTours

Version : 1.0

---

## 1. Objectif

Ce document explique comment écrire du CSS sur ce projet, pour que tout le monde produise un résultat cohérent — sans avoir à redécouvrir les mêmes erreurs à chaque page.

Il ne remplace pas le Design System (`docs/Design-System/`), il explique **comment l'utiliser correctement dans le code**.

---

## 2. La règle d'or

**Une valeur de style ne s'écrit jamais en dur. Elle vient toujours d'une variable CSS (un "token").**

```css
/* ❌ Incorrect — valeur inventée sur le moment */
.title {
  font-size: 1.125rem;
  border-radius: 8px;
}

/* ✅ Correct — vient d'un token défini dans tokens.css */
.title {
  font-size: var(--text-lg);
  border-radius: var(--radius-xl);
}
```

Pourquoi cette règle existe : si demain la charte change une couleur ou une taille, il suffit de modifier `tokens.css` une seule fois. Avec des valeurs en dur, il faudrait chercher dans tous les fichiers un par un — et on en oublie toujours.

**Cette règle s'applique aussi aux poids de police.** Ne jamais laisser un titre (`h1`, `h2`, `h3`...) sans `font-weight` explicite : sans ça, c'est le navigateur qui décide, et son choix ne correspond pas toujours à celui de `Typography.md` (par exemple, un `<h3>` sans `font-weight` s'affiche en gras ~700 par défaut, alors que la charte demande 600 pour ce niveau de titre).

---

## 3. Où trouver quelle variable

|Besoin|Document de référence|
|---|---|
|Couleur|`Design-System/Colors.md`|
|Taille et poids de police|`Design-System/Typography.md`|
|Espacement (marges, `gap`)|`Design-System/Spacing.md`|
|Rayon d'angle, ombre, durée d'animation, courbe d'accélération|`Design-System/Foundations.md`|
|Largeur de page, points de rupture (breakpoints)|`Design-System/Responsive.md`|

En cas de doute sur quel token utiliser, chercher dans le document concerné avant d'inventer une valeur.

---

## 4. Erreurs déjà rencontrées sur ce projet (pour ne pas les refaire)

Ces exemples sont réels, trouvés et corrigés pendant le développement — ils servent d'avertissement concret.

- **Mauvais token de rayon d'angle** : une carte utilisait `--radius-md` (8px, prévu pour les champs de formulaire) au lieu de `--radius-xl` (16px, prévu pour "cartes, modales" selon `Foundations.md`).
- **Ombres au repos et au survol inversées** : `Foundations.md` précise `--shadow-md` pour une carte "au repos" et `--shadow-lg` "au survol" — le code faisait l'inverse (`--shadow-sm` au repos, `--shadow-md` au survol).
- **Tailles codées en dur** : `font-size: 0.75rem` et `1.125rem` au lieu de `var(--text-xs)` et `var(--text-lg)`.
- **Poids de police manquant** : des titres `<h3>` sans `font-weight`, donc affichés plus gras que prévu par la charte.
- **Courbe d'accélération générique** : `transition: ... ease-out` (mot-clé CSS standard) au lieu de `var(--ease-out)`, la vraie courbe définie dans `Animations.md`.

---

## 5. Structure d'un fichier `.module.css`

Un fichier CSS Module par composant, même nom que le composant (déjà précisé dans `Architecture.md §5`). À l'intérieur :

1. Le style de base du composant (`.card`, `.button`...).
2. Ses variantes ou états (`.card:hover`, `.primary`, `.large`...).
3. Les media queries à la fin du fichier.

Quand une valeur vient d'une règle précise de la doc (pas juste "un token au hasard"), un commentaire au-dessus de la ligne aide beaucoup :

```css
.card {
  border-radius: var(--radius-xl); /* Foundations.md §2 : "Cartes, modales" */
}
```

---

## 6. Responsive

Les points de rupture officiels sont dans `Responsive.md` (768px, 1024px, 1280px...), mais ils n'existent **pas** comme variables CSS utilisables — une media query ne peut pas lire une variable `--bp-*` dans sa condition (limite du CSS, pas une erreur du projet). Il faut donc écrire la valeur en pixels directement dans le `@media`, en la faisant correspondre exactement aux chiffres de `Responsive.md` :

```css
@media (max-width: 767px) {
  /* styles mobile, sous le seuil "Laptop" de Responsive.md §3 */
}
```
