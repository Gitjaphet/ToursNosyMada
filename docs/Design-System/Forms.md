# 📝 Forms

## MadaTours Design System

Version : 1.0

---

## Sommaire

1. [Objectif](#1-objectif)
2. [Principes](#2-principes)
3. [Structure d'un formulaire](#3-structure-dun-formulaire)
4. [Types de champs](#4-types-de-champs)
5. [Dimensions](#5-dimensions)
6. [Typographie](#6-typographie)
7. [Couleurs](#7-couleurs)
8. [États](#8-états)
9. [Validation](#9-validation)
10. [Placeholders](#10-placeholders)
11. [Accessibilité](#11-accessibilité)
12. [Responsive](#12-responsive)
13. [API des composants](#13-api-des-composants)
14. [Exemples](#14-exemples)
15. [Bonnes pratiques](#15-bonnes-pratiques)
16. [Interdictions](#16-interdictions)
17. [Documents associés](#17-documents-associés)

---

## 1. Objectif

Ce document définit les standards de tous les formulaires utilisés dans MadaTours.

Tous les champs de saisie doivent utiliser les composants officiels du Design System.

---

## 2. Principes

Les formulaires doivent être :

- simples ;
- rapides à compléter ;
- accessibles ;
- cohérents ;
- responsives.

Chaque formulaire doit guider l'utilisateur avec des libellés explicites et des messages d'erreur compréhensibles.

---

## 3. Structure d'un formulaire

Un formulaire est composé de :

- titre ;
- description (optionnelle) ;
- champs ;
- messages d'aide ;
- messages d'erreur ;
- bouton principal ;
- bouton secondaire (si nécessaire).

---

## 4. Types de champs

### 4.1 Input

Utilisé pour : nom, prénom, ville, pays, profession.

### 4.2 Email

Utilisé uniquement pour les adresses e-mail. Le clavier mobile doit proposer automatiquement le clavier adapté.

### 4.3 Password

Caractéristiques :

- texte masqué ;
- bouton afficher/masquer ;
- indicateur de robustesse (si nécessaire).

### 4.4 Phone

Utilisé pour les numéros de téléphone. Prévoir une sélection de l'indicatif international.

### 4.5 Number

Utilisé pour : nombre de voyageurs, quantité, âge.

### 4.6 Date

Utilisé pour : date de départ, date de retour, réservation.

### 4.7 Select

Utilisé lorsque le nombre d'options est limité. Exemple : langue, pays, type de circuit.

### 4.8 Checkbox

Utilisé pour : accepter les conditions, sélectionner plusieurs options.

### 4.9 Radio

Utilisé lorsqu'un seul choix est possible.

### 4.10 Switch

Utilisé pour activer ou désactiver une option.

### 4.11 Textarea

Utilisé pour : commentaires, demandes particulières, messages.

---

## 5. Dimensions

| Élément | Valeur |
| --- | --- |
| Hauteur Input | 48px |
| Border Radius | `var(--radius-lg)` (12px) |
| Padding horizontal | 16px |
| Padding vertical | 12px |

---

## 6. Typographie

| Propriété | Valeur |
| --- | --- |
| Police | Inter |
| Taille | 16px |
| Poids | 400 |

---

## 7. Couleurs

Les couleurs proviennent exclusivement de **[Colors.md](./Colors.md)**.

| État | Couleur |
| --- | --- |
| Normal | Surface, Border |
| Focus | Primary |
| Error | Error |
| Success | Success |

---

## 8. États

### 8.1 Default

Champ vide.

### 8.2 Focus

- bordure Primary ;
- outline visible.

### 8.3 Filled

Le champ contient une valeur.

### 8.4 Disabled

Le champ est grisé et non modifiable.

### 8.5 Readonly

Consultation uniquement.

### 8.6 Error

Afficher :

- bordure rouge ;
- icône d'erreur ;
- message explicite.

Exemple : « Veuillez saisir une adresse e-mail valide. »

### 8.7 Success

Afficher une validation visuelle discrète.

---

## 9. Validation

La validation doit être effectuée :

- en temps réel lorsque cela est pertinent ;
- avant la soumission du formulaire.

Les messages doivent expliquer clairement le problème.

Incorrect : « Erreur. »

Correct : « Le numéro de téléphone est obligatoire. »

---

## 10. Placeholders

Le placeholder ne remplace jamais le label.

Incorrect : placeholder seul « Nom » sans label.

Correct :

- Label : « Nom complet »
- Placeholder : « Ex. Jean Dupont »

---

## 11. Accessibilité

Chaque champ doit posséder :

- un label ;
- un identifiant unique ;
- une association `label` / `input` ;
- un message d'erreur lié au champ.

Tous les formulaires doivent être entièrement utilisables au clavier.

---

## 12. Responsive

Les champs occupent généralement :

- 100 % de largeur sur mobile ;
- plusieurs colonnes sur tablette et desktop lorsque cela améliore la lisibilité.

---

## 13. API des composants

### 13.1 Input

| Propriété | Type |
| --- | --- |
| label | string |
| placeholder | string |
| value | string |
| onChange | function |
| error | string |
| disabled | boolean |
| required | boolean |

### 13.2 Select

| Propriété | Type |
| --- | --- |
| options | array |
| value | string |
| onChange | function |

### 13.3 Checkbox

| Propriété | Type |
| --- | --- |
| checked | boolean |
| onChange | function |
| label | string |

### 13.4 Textarea

| Propriété | Type |
| --- | --- |
| rows | number |
| placeholder | string |
| value | string |

---

## 14. Exemples

### 14.1 Champ texte

```tsx
<Input
  label="Nom complet"
  placeholder="Ex. Jean Dupont"
/>
```

### 14.2 Sélecteur

```tsx
<Select
  label="Destination"
  options={destinations}
/>
```

### 14.3 Zone de texte

```tsx
<Textarea
  label="Votre message"
  rows={5}
/>
```

---

## 15. Bonnes pratiques

- ✔ Limiter le nombre de champs.
- ✔ Regrouper les informations similaires.
- ✔ Utiliser des messages d'erreur explicites.
- ✔ Afficher les champs obligatoires.
- ✔ Conserver une disposition régulière.
- ✔ Pré-remplir les valeurs lorsque cela est possible.

---

## 16. Interdictions

- ❌ Utiliser uniquement une couleur pour signaler une erreur.
- ❌ Supprimer les labels.
- ❌ Utiliser des placeholders comme seuls intitulés.
- ❌ Afficher plusieurs messages contradictoires.
- ❌ Modifier les composants sans passer par le Design System.

---

## 17. Documents associés

- [Foundations.md](./Foundations.md)
- [Buttons.md](./Buttons.md)
- [Colors.md](./Colors.md)
- [Typography.md](./Typography.md)
- [Spacing.md](./Spacing.md)
- [Responsive.md](./Responsive.md)
- [Components.md](./Components.md)
