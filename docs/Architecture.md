# 🏗️ Architecture du Projet

## MadaTours

Version : 1.0

---

## 1. Objectif

Ce document définit l'architecture officielle du projet **MadaTours**.

Il sert de référence pour tous les développeurs afin de garantir :

* une structure claire ;
* un code maintenable ;
* une organisation cohérente ;
* une évolution simple du projet.

Aucun développement ne doit être réalisé sans respecter les conventions décrites dans ce document.

---

## 2. Stack technique

| Domaine              | Technologie                 |
| -------------------- | --------------------------- |
| Framework            | Next.js 16                  |
| Langage              | TypeScript                  |
| UI                   | React 19                    |
| Internationalisation | next-intl                   |
| Animations           | Framer Motion               |
| Icônes               | React Icons                 |
| Requêtes HTTP        | Axios                       |
| Validation           | Zod                         |
| Style                | CSS Modules + Variables CSS |
| Gestion de version   | Git                         |
| Hébergement          | À définir                   |

---

## 3. Structure du projet

''''
src/
│
├── app/
├── assets/
├── components/
├── context/
├── data/
├── hooks/
├── i18n/
├── lib/
├── messages/
├── services/
├── styles/
├── types/
└── utils/
''''

---

## 4. Description des dossiers

## app/

Contient le système de routage de Next.js.

Aucune logique métier importante ne doit être placée directement dans les pages.

Les pages doivent uniquement assembler des composants.

---

## assets/

Contient :

* images
* icônes locales
* vidéos
* illustrations
* polices locales

---

## components/

Tous les composants réutilisables.

Organisation :

''''

components/

layout/

ui/

sections/

forms/

cards/

navigation/

''''

Chaque composant possède son propre dossier.

Exemple :

''''
Button/

Button.tsx

Button.module.css

index.ts

''''

---

## context/

Tous les Context React.

Exemple :

* ThemeContext
* AuthContext
* BookingContext

---

## data/

Contenu statique local, en attendant un vrai backend/API (voir `services/`).

Ajouté pendant la Phase 3 — dossier non prévu dans la version initiale de ce document.

Exemple :

''''

excursions.ts

tours.ts

''''

---

## hooks/

Hooks personnalisés.

Exemple :

* useScroll
* useModal
* useBooking

---

## i18n/

Configuration de next-intl.

Contient :

* routing
* navigation
* request

---

## lib/

Bibliothèques internes.

Exemple :

* axios
* helpers
* constantes

---

## messages/

Tous les fichiers de traduction.

Exemple :

''''

fr.json

en.json

mg.json

''''

---

## services/

Communication avec les APIs.

Exemple :

''''
booking.service.ts

tour.service.ts

auth.service.ts
''''

---

## styles/

Styles globaux.

Exemple :

* globals.css
* variables.css
* reset.css

---

## types/

Interfaces TypeScript.

---

## utils/

Fonctions utilitaires.

Exemple :

* formatDate()
* formatPrice()
* slugify()

---

## 5. Conventions de nommage

## Composants

PascalCase

Exemple

''''
HeroSection.tsx

BookingCard.tsx

Navbar.tsx
''''

---

## Hooks

Toujours préfixés par "use"

''''
useScroll.ts

useBooking.ts
''''

---

## Services

Toujours suffixés par ".service"

''''
booking.service.ts

tour.service.ts
''''

---

## Types

Toujours suffixés par ".types"

''''
booking.types.ts
''''

---

## CSS Modules

Même nom que le composant.

''''
Button.module.css

Navbar.module.css
''''

---

## 6. Alias

Le projet utilisera des alias afin d'éviter les imports relatifs trop longs.

Exemple :

''''
@/components

@/services

@/hooks

@/utils

@/styles
''''

---

## 7. Organisation des composants

Chaque composant doit respecter cette structure.

''''
Component/

Component.tsx

Component.module.css

index.ts
''''

Le composant ne doit contenir qu'une seule responsabilité.

---

## 8. Internationalisation

Toutes les chaînes de caractères affichées à l'utilisateur doivent provenir des fichiers de traduction.

Aucun texte ne doit être écrit directement dans les composants.

Exemple :

❌ Incorrect

''''
&lt;h1&gt;Bienvenue&lt;/h1&gt;

''''

✅ Correct

''''
t("home.title")
''''

---

## 9. Responsive

Le site doit être développé en Mobile First.

Breakpoints officiels :

* Mobile
* Tablet
* Desktop
* Large Desktop

Les valeurs exactes sont définies dans le Design System.

---

## 10. Bonnes pratiques

* privilégier les composants réutilisables ;
* éviter la duplication de code ;
* documenter les parties complexes ;
* utiliser TypeScript strictement ;
* garder les composants petits et lisibles ;
* séparer la logique métier de l'affichage.

---

## 11. Interdictions

Il est interdit de :

* dupliquer un composant existant ;
* coder des couleurs en dur dans les composants ;
* écrire des styles globaux inutiles ;
* écrire du texte sans passer par le système de traduction ;
* utiliser des chemins d'import relatifs lorsqu'un alias existe.

---

## 12. Évolution de l'architecture

Toute modification importante de cette architecture devra être validée par l'équipe avant son intégration dans le projet.
