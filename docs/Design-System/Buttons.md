# 🔘 Buttons

## MadaTours Design System

Version : 1.0

---

## 1. Objectif

Ce document définit les spécifications officielles du composant **Button**.

Tous les boutons de l'application doivent utiliser ce composant.

La création de boutons personnalisés est interdite sans validation de l'équipe.

---

## 2. Philosophie

Les boutons représentent les principales actions de l'utilisateur.

Ils doivent être :

- facilement identifiables ;
- accessibles ;
- cohérents ;
- réutilisables ;
- responsives.

---

## 3. Variantes

### 3.1 Primary

Action principale.

Exemples :

- Réserver
- Commencer
- Envoyer

Couleurs :

- Background : Primary
- Texte : Blanc

### 3.2 Secondary

Actions secondaires.

Exemples :

- En savoir plus
- Découvrir

Couleurs :

- Background : Secondary
- Texte : Blanc

### 3.3 Outline

Action discrète.

Caractéristiques :

- fond transparent ;
- bordure Primary ;
- texte Primary.

### 3.4 Ghost

Action très discrète.

Utilisation :

- Navbar
- Menus
- Modales

### 3.5 Danger

Utilisé uniquement pour :

- suppression ;
- annulation irréversible.

Couleur : Error.

---

## 4. Tailles

| Taille | Hauteur | Padding |
| --- | --- | --- |
| Small | 36px | 12px 16px |
| Medium | 44px | 14px 24px |
| Large | 52px | 16px 32px |

---

## 5. Border Radius

Tous les boutons utilisent :

```text
12px
```

---

## 6. Typographie

| Propriété | Valeur |
| --- | --- |
| Police | Inter |
| Poids | 600 |
| Taille | 16px |

---

## 7. Icônes

Les icônes sont autorisées.

Espacement :

```text
8px
```

Position :

- gauche
- droite

Jamais :

- en haut
- en dessous

---

## 8. États

### 8.1 Default

État normal.

### 8.2 Hover

Effet léger :

- augmentation de luminosité ;
- légère élévation.

Durée : 200 ms.

### 8.3 Active

Légère réduction de l'échelle.

```text
scale(0.98)
```

### 8.4 Focus

Toujours afficher un indicateur visible.

Exemple :

```css
outline: 2px solid var(--color-accent);
outline-offset: 2px;
```

### 8.5 Disabled

Caractéristiques :

- opacité réduite ;
- curseur interdit ;
- aucune interaction.

### 8.6 Loading

Le texte est remplacé par :

- Spinner
- Loader

Le bouton reste désactivé.

---

## 9. Largeur

Par défaut :

```text
width: auto
```

Pour certaines actions :

```text
width: 100%
```

Exemple :

- formulaire de réservation ;
- connexion.

---

## 10. Animations

Toutes les animations utilisent Framer Motion ou CSS Transition.

Durée :

```text
200ms
```

Animations autorisées :

- Fade
- Scale
- Shadow

---

## 11. Accessibilité

Tous les boutons doivent :

- être accessibles au clavier ;
- afficher un état Focus ;
- avoir un texte explicite ;
- respecter le contraste WCAG AA.

Éviter :

```text
OK
Go
Ici
```

Préférer :

```text
Réserver maintenant
Découvrir le circuit
Envoyer la demande
```

---

## 12. Responsive

Sur mobile :

- hauteur conservée ;
- largeur adaptable ;
- texte jamais inférieur à 16px.

---

## 13. API du composant

Le composant `Button` accepte les propriétés suivantes :

| Propriété | Type | Description |
| --- | --- | --- |
| variant | string | Type du bouton |
| size | string | Taille |
| disabled | boolean | Désactive le bouton |
| loading | boolean | Affiche un loader |
| iconLeft | ReactNode | Icône à gauche |
| iconRight | ReactNode | Icône à droite |
| fullWidth | boolean | Largeur 100 % |
| onClick | function | Action au clic |
| type | `button` / `submit` / `reset` | Type HTML |

---

## 14. Exemples

### 14.1 Bouton principal

```tsx
<Button variant="primary">
  Réserver
</Button>
```

### 14.2 Bouton secondaire

```tsx
<Button variant="secondary">
  Découvrir
</Button>
```

### 14.3 Bouton avec icône

```tsx
<Button
  variant="primary"
  iconRight={<ArrowRight />}
>
  Réserver
</Button>
```

---

## 15. Bonnes pratiques

- ✔ Une seule action principale par écran.
- ✔ Utiliser les variantes officielles.
- ✔ Utiliser des libellés explicites.
- ✔ Respecter les tailles définies.
- ✔ Réutiliser le composant Button.

---

## 16. Interdictions

- ❌ Créer un bouton spécifique pour une seule page.
- ❌ Modifier les couleurs directement.
- ❌ Modifier le Border Radius.
- ❌ Utiliser plusieurs boutons Primary côte à côte sans justification.
- ❌ Utiliser des animations excessives.

---

## Documents associés

- [Colors.md](./Colors.md)
- [Typography.md](./Typography.md)
- [Spacing.md](./Spacing.md)
- [Responsive.md](./Responsive.md)
- [Components.md](./Components.md)
- [Forms.md](./Forms.md)
