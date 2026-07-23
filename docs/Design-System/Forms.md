# 📝 Forms

## MadaTours Design System

Version : 1.0

---

## Forms

## Objectif

Ce document définit les standards de tous les formulaires utilisés dans MadaTours.

Tous les champs de saisie doivent utiliser les composants officiels du Design System.

---

## Principes

Les formulaires doivent être :

* simples ;
* rapides à compléter ;
* accessibles ;
* cohérents ;
* responsives.

Chaque formulaire doit guider l'utilisateur avec des libellés explicites et des messages d'erreur compréhensibles.

---

## Structure d'un formulaire

Un formulaire est composé de :

* titre ;
* description (optionnelle) ;
* champs ;
* messages d'aide ;
* messages d'erreur ;
* bouton principal ;
* bouton secondaire (si nécessaire).

---

## Types de champs

### Input

Utilisé pour :

* nom ;
* prénom ;
* ville ;
* pays ;
* profession.

---

### Email

Utilisé uniquement pour les adresses e-mail.

Le clavier mobile doit proposer automatiquement le clavier adapté.

---

### Password

Caractéristiques :

* texte masqué ;
* bouton afficher/masquer ;
* indicateur de robustesse (si nécessaire).

---

### Phone

Utilisé pour les numéros de téléphone.

Prévoir une sélection de l'indicatif international.

---

### Number

Utilisé pour :

* nombre de voyageurs ;
* quantité ;
* âge.

---

### Date

Utilisé pour :

* date de départ ;
* date de retour ;
* réservation.

---

### Select

Utilisé lorsque le nombre d'options est limité.

Exemple :

* langue ;
* pays ;
* type de circuit.

---

### Checkbox

Utilisé pour :

* accepter les conditions ;
* sélectionner plusieurs options.

---

### Radio

Utilisé lorsqu'un seul choix est possible.

---

### Switch

Utilisé pour activer ou désactiver une option.

---

### Textarea

Utilisé pour :

* commentaires ;
* demandes particulières ;
* messages.

---

## Dimensions

| Élément            | Valeur |
| ------------------ | -----: |
| Hauteur Input      |   48px |
| Border Radius      |   12px |
| Padding horizontal |   16px |
| Padding vertical   |   12px |

---

## Typographie

Police :

Inter

Taille :

16px

Poids :

400

---

## Couleurs

Les couleurs proviennent exclusivement de `Colors.md`.

État normal :

* Surface
* Border

État Focus :

* Primary

État Error :

* Error

État Success :

* Success

---

## États

### Default

Champ vide.

---

### Focus

* bordure Primary ;
* outline visible.

---

### Filled

Le champ contient une valeur.

---

### Disabled

Le champ est grisé et non modifiable.

---

### Readonly

Consultation uniquement.

---

### Error

Afficher :

* bordure rouge ;
* icône d'erreur ;
* message explicite.

Exemple :

```text id="4drg5e"
Veuillez saisir une adresse e-mail valide.
```

---

### Success

Afficher une validation visuelle discrète.

---

## Validation

La validation doit être effectuée :

* en temps réel lorsque cela est pertinent ;
* avant la soumission du formulaire.

Les messages doivent expliquer clairement le problème.

Incorrect :

```text id="rzv4f8"
Erreur.
```

Correct :

```text id="zv8n3a"
Le numéro de téléphone est obligatoire.
```

---

## Placeholders

Le placeholder ne remplace jamais le label.

Incorrect :

```text id="ek6wra"
Nom
```

Correct :

Label :

```text id="j8v3tq"
Nom complet
```

Placeholder :

```text id="qqb7sw"
Ex. Jean Dupont
```

---

## Accessibilité

Chaque champ doit posséder :

* un label ;
* un identifiant unique ;
* une association `label` / `input` ;
* un message d'erreur lié au champ.

Tous les formulaires doivent être entièrement utilisables au clavier.

---

## Responsive

Les champs occupent généralement :

* 100 % de largeur sur mobile ;
* plusieurs colonnes sur tablette et desktop lorsque cela améliore la lisibilité.

---

## API des composants

### -Input

| Propriété   | Type     |
| ----------- | -------- |
| label       | string   |
| placeholder | string   |
| value       | string   |
| onChange    | function |
| error       | string   |
| disabled    | boolean  |
| required    | boolean  |

---

### -Select

| Propriété | Type     |
| --------- | -------- |
| options   | array    |
| value     | string   |
| onChange  | function |

---

### -Checkbox

| Propriété | Type     |
| --------- | -------- |
| checked   | boolean  |
| onChange  | function |
| label     | string   |

---

### -Textarea

| Propriété   | Type   |
| ----------- | ------ |
| rows        | number |
| placeholder | string |
| value       | string |

---

## Exemples

### Champ texte

```tsx id="v0i82r"
<Input
    label="Nom complet"
    placeholder="Ex. Jean Dupont"
/>
```

### Sélecteur

```tsx id="4xz4gx"
<Select
    label="Destination"
    options={destinations}
/>
```

### Zone de texte

```tsx id="z4cl6r"
<Textarea
    label="Votre message"
    rows={5}
/>
```

---

## Bonnes pratiques

✔ Limiter le nombre de champs.

✔ Regrouper les informations similaires.

✔ Utiliser des messages d'erreur explicites.

✔ Afficher les champs obligatoires.

✔ Conserver une disposition régulière.

✔ Pré-remplir les valeurs lorsque cela est possible.

---

## Interdictions

❌ Utiliser uniquement une couleur pour signaler une erreur.

❌ Supprimer les labels.

❌ Utiliser des placeholders comme seuls intitulés.

❌ Afficher plusieurs messages contradictoires.

❌ Modifier les composants sans passer par le Design System.

---

## Documents associés

* Buttons.md
* Colors.md
* Typography.md
* Spacing.md
* Responsive.md
* Components.md
* Foundations.md
