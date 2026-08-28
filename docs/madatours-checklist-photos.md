# 📸 Checklist photos — MadaTours

Convention rappelée (`Guides/Naming.md`) : dépose chaque photo **exactement** au chemin et sous le nom indiqués. Aucune modification de code nécessaire — le site va automatiquement remplacer le placeholder par ta vraie photo dès qu'elle est au bon endroit.

Format : `.jpg`, minuscules, pas d'espace ni d'accent dans le nom de fichier.

---

## 🟢 Excursions — contenu réel, priorité haute

Pour chacune, au minimum le `cover.jpg` (photo de la carte). Les `gallery-N.jpg` sont optionnelles (page détail), à ajouter quand tu en as.

- [ ] **Nosy Iranja & Nosy Antsoha** → `public/images/excursions/nosy-iranja-antsoha/cover.jpg`
- [ ] **Nosy Komba & village local** → `public/images/excursions/nosy-komba-village/cover.jpg`
- [ ] **Nosy Tanikely & Nosy Sakatia** → `public/images/excursions/nosy-tanikely-sakatia/cover.jpg`
- [ ] **Réserve de Lokobe** → `public/images/excursions/reserve-lokobe/cover.jpg`
- [ ] **Observation des requins-baleines** → `public/images/excursions/requins-baleines/cover.jpg`
- [ ] **Observation des baleines à bosse** → `public/images/excursions/baleines-a-bosse/cover.jpg`
- [ ] **Séjour à Sakatia** → `public/images/excursions/sejour-sakatia/cover.jpg`
- [ ] **Pêche artisanale & sortie en mer** → `public/images/excursions/peche-artisanale/cover.jpg`

---

## 🟡 Tours — contenu encore fictif, pas urgent

⚠️ Les 7 tours sont actuellement marqués `[FICTIF]` dans les données (`src/messages/*.json`) — le contenu lui-même n'est pas définitif. Pas la peine de shooter des photos pour ces circuits tant que le vrai contenu n'est pas écrit ; ce serait probablement à refaire.

- [ ] Échappée en terre SAVA → `public/images/tours/region-sava/cover.jpg`
- [ ] Immersion à la réserve de Lokobe → `public/images/tours/reserve-lokobe-circuit/cover.jpg`
- [ ] Racines du Nord → `public/images/tours/culture-authenticite/cover.jpg`
- [ ] Randonnée immersive à Nosy Komba → `public/images/tours/randonnee-nosy-komba/cover.jpg`
- [ ] Tour des archipels de Nosy Be → `public/images/tours/archipels-nosy-be/cover.jpg`
- [ ] Grand circuit du Nord → `public/images/tours/grand-circuit-nord/cover.jpg`
- [ ] Nature et traditions du Nord → `public/images/tours/nature-traditions-nord/cover.jpg`

---

## 🏠 Accueil

- [ ] Photo principale du hero → `public/images/home/hero.jpg` (format large, l'image occupe tout l'écran en haut de page — privilégier une photo horizontale, sujet pas trop centré car un texte sombre se superpose en bas de l'image)

---

## Rappel — galerie de photos par excursion (optionnel, plus tard)

Si tu veux enrichir une page détail avec plusieurs photos (pas juste la carte), ajoute `gallery-1.jpg`, `gallery-2.jpg`, etc. dans le même dossier que le `cover.jpg` (jusqu'à `gallery-6.jpg`). Rien à changer dans le code non plus pour ça.
