# ⚛️ Conventions React

## MadaTours

Version : 1.0

---

## 1. Objectif

Ce document explique comment les composants React sont écrits sur ce projet. Il complète `Guides/NextJS-Guidelines.md` (qui couvre le framework) en se concentrant sur React lui-même : structure d'un composant, props, état.

---

## 2. Composants fonctionnels uniquement

Aucun composant classe (`extends React.Component`) sur ce projet — tous les composants sont des fonctions. C'est la norme React actuelle, à respecter pour tout nouveau composant.

```tsx
// ✅ Correct
export function Button({ children, variant = "primary" }: ButtonProps) {
  return <button className={styles[variant]}>{children}</button>;
}
```

---

## 3. Un composant, un dossier

Chaque composant vit dans son propre dossier, avec ce contenu (voir aussi `Architecture.md §5` et `Guides/Naming.md`) :

```text
src/components/ui/Button/
  Button.tsx           → le composant
  Button.module.css    → son style
  index.ts             → export public : export { Button } from "./Button";
```

Le fichier `index.ts` permet d'importer `from "@/components/ui/Button"` plutôt que `from "@/components/ui/Button/Button"` — plus court, et ça ne change rien si jamais le fichier interne est renommé.

---

## 4. Props toujours typées

Chaque composant a une interface de props nommée `<NomDuComposant>Props`, juste au-dessus du composant :

```tsx
interface CardImageProps {
  src: string;
  alt: string;
  fallbackSrc: string;
}

export function CardImage({ src, alt, fallbackSrc }: CardImageProps) {
  // ...
}
```

Ne jamais utiliser `any` pour des props. Si une prop est optionnelle, l'indiquer avec `?` plutôt que de lui donner une valeur par défaut artificielle qui cache un cas manquant.

---

## 5. État local : `useState` suffit

Ce projet n'utilise aucune librairie de gestion d'état externe (pas de Redux, Zustand, ni équivalent) — et ce n'est pas nécessaire vu sa taille actuelle. Chaque composant qui a besoin de mémoriser quelque chose utilise `useState` directement, sans le faire remonter plus haut que nécessaire :

- `Navbar` : `isOpen` (menu mobile) reste dans `Navbar`, personne d'autre n'en a besoin.
- `ContactPage` : les valeurs du formulaire (`values`, `errors`, `submitted`) restent dans la page, pas besoin de les partager ailleurs.

Si un jour plusieurs composants distants doivent partager un même état, en rediscuter avant d'ajouter une librairie — ne pas en installer une "au cas où".

---

## 6. Composition plutôt que des props qui font tout

Le composant `Card` illustre le pattern à suivre : plutôt qu'un seul composant avec 15 props pour couvrir tous les cas, plusieurs petits composants qui s'assemblent :

```tsx
<Card>
  <CardImage src={cover} alt={title} fallbackSrc={placeholder} />
  <CardBody>
    <h3>{title}</h3>
    <p>{description}</p>
  </CardBody>
</Card>
```

À réutiliser pour tout nouveau composant qui a plusieurs zones bien distinctes (une image, un corps de texte, une action) plutôt que d'empiler les props conditionnelles.

---

## 7. Icônes

Toujours `react-icons/fa6` (bibliothèque fixée dans `Brand/Iconography.md`) — jamais mélanger avec une autre bibliothèque d'icônes. Une icône à côté d'un texte visible reçoit `aria-hidden="true"` (le texte suffit pour un lecteur d'écran) ; une icône seule (bouton sans texte) reçoit un `aria-label` à la place — voir `Guides/Accessibility.md`.

---

## 8. Style : CSS Modules, pas de style en ligne

Le style d'un composant vit dans son `.module.css` (voir `Guides/CSS-Guidelines.md`), pas dans des styles en ligne (`style={{ ... }}`). La seule exception tolérée sur ce projet est un ajustement ponctuel et vraiment exceptionnel (un cas rencontré : une couleur de bouton inversée sur le hero de l'accueil, où créer une classe dédiée aurait posé un problème de spécificité CSS) — à éviter par défaut, jamais un réflexe.

---

## 9. Un composant, un fichier — pas de fichiers fourre-tout

Éviter un fichier unique qui exporte plusieurs composants sans rapport entre eux. Exception acceptée : des composants très courts et étroitement liés (comme `Card`/`CardImage`/`CardBody` dans un même `Card.tsx`), parce qu'ils n'ont pas de sens séparément.
