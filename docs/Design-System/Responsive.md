# 📱 Responsive

## MadaTours Design System

Version : 1.0

---

## 1. Objectif

Ce document définit les règles officielles du Responsive Design de MadaTours.

Toutes les interfaces du projet doivent respecter ces règles afin de garantir une expérience utilisateur optimale sur tous les appareils.

---

## 2. Philosophie

MadaTours adopte une approche **Mobile First**.

Le développement commence toujours par la version mobile avant d'être adapté aux écrans plus grands.

Ordre de développement :

```text
Mobile → Tablet → Laptop → Desktop → Large Desktop
```

---

## 3. Breakpoints officiels

| Appareil | Largeur |
| --- | --- |
| Mobile | 0px – 639px |
| Tablet | 640px – 767px |
| Laptop | 768px – 1023px |
| Desktop | 1024px – 1279px |
| Large Desktop | 1280px et plus |

---

## 4. Variables CSS

```css
:root {
  --bp-mobile: 640px;
  --bp-tablet: 768px;
  --bp-laptop: 1024px;
  --bp-desktop: 1280px;
}
```

---

## 5. Largeur du contenu

| Élément | Largeur maximale |
| --- | --- |
| Site | 1440px |
| Container principal | 1280px |
| Article | 800px |
| Formulaire | 600px |
| Modal | 500px |

Le contenu principal doit toujours être centré.

---

## 6. Grille

### 6.1 Desktop

```text
12 colonnes
```

### 6.2 Tablet

```text
8 colonnes
```

### 6.3 Mobile

```text
4 colonnes
```

Les espacements entre colonnes suivent les valeurs définies dans **[Spacing.md](./Spacing.md)**.

---

## 7. Navigation

### 7.1 Desktop

- Menu horizontal
- Tous les liens visibles
- Boutons visibles

### 7.2 Mobile

- Menu Hamburger
- Navigation plein écran ou Drawer
- Boutons adaptés au tactile

---

## 8. Images

Toutes les images doivent :

- être responsives ;
- conserver leurs proportions ;
- utiliser `next/image` ;
- être optimisées.

Éviter les tailles fixes.

---

## 9. Typographie

Les tailles de texte s'adaptent progressivement.

| Élément | Desktop | Mobile |
| --- | --- | --- |
| Display | 64px | 42px |
| H1 | 48px | 36px |
| H2 | 40px | 30px |
| H3 | 32px | 26px |
| Body | 16px | 16px |

---

## 10. Espacements

Les espacements diminuent sur les petits écrans.

| Desktop | Mobile |
| --- | --- |
| 128px | 64px |
| 96px | 48px |
| 64px | 32px |
| 48px | 24px |
| 32px | 16px |

Toujours utiliser les variables définies dans **[Spacing.md](./Spacing.md)**.

---

## 11. Comportement des composants

Les composants doivent être flexibles.

### 11.1 Desktop

```text
[ Carte ] [ Carte ] [ Carte ]
```

### 11.2 Tablet

```text
[ Carte ] [ Carte ]
[ Carte ]
```

### 11.3 Mobile

```text
[ Carte ]
[ Carte ]
[ Carte ]
```

---

## 12. Boutons

Sur mobile :

- largeur minimale : 44px ;
- hauteur minimale : 44px.

Respecter les recommandations tactiles.

---

## 13. Formulaires

Les champs doivent :

- occuper toute la largeur disponible sur mobile ;
- être facilement utilisables au doigt ;
- avoir une hauteur minimale de 48px.

---

## 14. Accessibilité

Le Responsive Design doit préserver :

- la lisibilité ;
- les contrastes ;
- la navigation clavier ;
- les zones tactiles.

---

## 15. Tests

Chaque nouvelle interface doit être testée au minimum sur :

- Smartphone
- Tablette
- Laptop
- Desktop

Navigateurs recommandés :

- Chrome
- Edge
- Firefox
- Safari

---

## 16. Bonnes pratiques

- ✔ Développer en Mobile First.
- ✔ Tester régulièrement pendant le développement.
- ✔ Éviter les dimensions fixes.
- ✔ Utiliser Flexbox et CSS Grid.
- ✔ Préférer les unités relatives (`rem`, `%`, `vw`, `vh`) lorsque c'est pertinent.

---

## 17. Interdictions

- ❌ Concevoir uniquement pour Desktop.
- ❌ Utiliser des largeurs fixes pour les composants principaux.
- ❌ Masquer des fonctionnalités importantes sur mobile sans justification.
- ❌ Ignorer les tests Responsive.

---

## Documents associés

- [Colors.md](./Colors.md)
- [Typography.md](./Typography.md)
- [Spacing.md](./Spacing.md)
- [Buttons.md](./Buttons.md)
- [Components.md](./Components.md)
