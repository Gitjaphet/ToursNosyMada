# ♿ Accessibilité

## MadaTours

Version : 1.0

---

## 1. Objectif

Ce document liste les règles d'accessibilité déjà appliquées dans le projet, pour que chaque nouvelle page ou composant les respecte aussi. L'accessibilité, c'est simplement s'assurer que le site reste utilisable par tout le monde : quelqu'un qui utilise un lecteur d'écran, qui navigue au clavier, ou qui a réglé son appareil pour réduire les animations.

---

## 2. Texte alternatif sur les images

Chaque image doit avoir un `alt` qui décrit ce qu'elle montre. Sur ce projet, le texte alternatif des photos d'excursions et de tours est toujours le **titre traduit** de l'élément — jamais un texte générique du style `"image"` ou vide.

```tsx
<SafeImage
  src={getCoverImage("excursions", slug)}
  alt={title} // le vrai titre traduit, pas "photo"
/>
```

Exception : une image purement décorative (qui n'apporte aucune information, comme le fond du hero de l'accueil) peut avoir `alt=""` — c'est volontaire, pas un oubli, car un lecteur d'écran doit alors l'ignorer plutôt que de lire une description inutile.

---

## 3. Icônes seules (sans texte à côté)

Un bouton ou un lien qui n'affiche qu'une icône (le menu hamburger, les réseaux sociaux du footer) doit toujours avoir un `aria-label` qui dit ce qu'il fait — sinon, un lecteur d'écran n'a rien à annoncer.

```tsx
<button aria-label={isOpen ? t("closeMenu") : t("openMenu")}>
  {isOpen ? <FaXmark /> : <FaBars />}
</button>
```

L'icône elle-même reçoit `aria-hidden="true"` quand un texte visible l'accompagne déjà (elle serait alors annoncée en double).

---

## 4. Navigation au clavier

Tous les éléments interactifs (boutons, liens) doivent rester utilisables sans souris, avec un contour visible quand on les atteint au clavier (touche Tab). C'est déjà en place sur le composant `Button` :

```css
.button:focus-visible {
  /* contour visible, uniquement au clavier (pas au clic à la souris) */
}
```

Tout nouveau composant cliquable doit avoir le même traitement.

---

## 5. Hiérarchie des titres

Chaque page a **un seul `<h1>`**, qui est son titre principal. Les sous-sections utilisent `<h2>`, puis `<h3>` à l'intérieur si besoin — jamais de niveau sauté (pas de `<h2>` qui saute directement à `<h4>`). Un lecteur d'écran s'appuie sur cet ordre pour permettre de naviguer de section en section.

---

## 6. Animations

Le composant `Reveal` (utilisé pour les apparitions au scroll) respecte automatiquement le réglage `prefers-reduced-motion` du système de l'utilisateur : si la personne a demandé moins d'animations, le contenu s'affiche directement, sans mouvement.

```tsx
const shouldReduceMotion = useReducedMotion();
```

Toute nouvelle animation ajoutée au projet doit suivre le même principe.

---

## 7. Contraste des couleurs

Toutes les combinaisons de couleurs doivent respecter au minimum le niveau **WCAG AA**, comme précisé dans `Design-System/Colors.md §11`. En cas de doute sur une combinaison texte/fond, se référer à ce document plutôt que de choisir une couleur au hasard.

---

## 8. Checklist rapide avant de livrer une page ou un composant

- [ ] Chaque image a un `alt` pertinent (ou `alt=""` si elle est vraiment décorative).
- [ ] Chaque icône seule a un `aria-label`.
- [ ] Chaque élément cliquable est atteignable et utilisable au clavier.
- [ ] Un seul `<h1>` par page, pas de niveau de titre sauté.
- [ ] Toute animation respecte `prefers-reduced-motion`.
- [ ] Le texte reste lisible sur son fond (contraste WCAG AA).
