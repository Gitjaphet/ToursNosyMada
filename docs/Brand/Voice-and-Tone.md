# 🗣️ Voice & Tone — MadaTours

Version : 1.0

---

## Sommaire

1. [Objectif](#1-objectif)
2. [Voix de la marque](#2-voix-de-la-marque)
3. [Ton selon le contexte](#3-ton-selon-le-contexte)
4. [Style rédactionnel](#4-style-rédactionnel)
5. [Exemples concrets](#5-exemples-concrets)
6. [Multilingue (fr / en / mg)](#6-multilingue-fr--en--mg)
7. [Interdictions](#7-interdictions)
8. [Documents associés](#8-documents-associés)

---

## 1. Objectif

Ce document détaille comment MadaTours s'exprime à l'écrit — au-delà du résumé donné dans **[Brand.md](./Brand.md)** — pour que tout texte produit (interface, emails, réseaux sociaux, support client) sonne comme une seule et même marque, quel que soit l'auteur.

## 2. Voix de la marque

La **voix** est ce que MadaTours est, de façon constante, quel que soit le contexte : accueillante, professionnelle, chaleureuse, passionnée par Madagascar (voir section 6 de Brand.md). La voix ne change jamais.

Le **ton**, lui, s'adapte au contexte (voir section 3) — la voix reste la même, l'intensité et le registre varient.

## 3. Ton selon le contexte

| Contexte | Ton |
| --- | --- |
| Page d'accueil / présentation des circuits | Inspirant, évocateur, tourné vers l'évasion |
| Processus de réservation (formulaires, paiement) | Clair, rassurant, direct — pas de superflu |
| Messages d'erreur | Calme, sans jargon technique, orienté solution |
| Confirmation de réservation | Chaleureux, enthousiaste, rassurant |
| Support client / FAQ | Serviable, patient, précis |
| Réseaux sociaux | Inspirant, vivant, peut être plus informel qu'ailleurs sur le site |

> ⚠️ **À valider avec l'équipe** : ce tableau est une proposition de départ cohérente avec Brand.md. Il devra être affiné avec de vrais exemples de textes une fois les premiers écrans réels rédigés.

## 4. Style rédactionnel

* Phrases courtes et directes plutôt que des constructions complexes.
* Vocabulaire concret et sensoriel pour tout ce qui touche à la destination (paysages, expériences) — éviter les superlatifs vides ("incroyable", "magique") au profit de détails qui font rêver de façon crédible.
* Vouvoiement par défaut dans toutes les langues, sauf décision contraire validée par l'équipe.
* Toujours orienté vers le voyageur : parler de ce que *lui* vit ou obtient, plutôt que de ce que *MadaTours fait*.

## 5. Exemples concrets

### Bouton d'appel à l'action

| ❌ À éviter | ✅ Préférer |
| --- | --- |
| "Cliquez ici" | "Découvrir ce circuit" |
| "Envoyer" | "Confirmer ma réservation" |

### Message d'erreur

| ❌ À éviter | ✅ Préférer |
| --- | --- |
| "Erreur 400 : requête invalide" | "Il manque une information pour continuer — vérifiez le champ en surbrillance." |
| "Champ obligatoire" | "Merci d'indiquer votre date de départ souhaitée." |

### Confirmation

| ❌ À éviter | ✅ Préférer |
| --- | --- |
| "Votre commande a été traitée." | "C'est confirmé ! Votre aventure à Madagascar vous attend." |

## 6. Multilingue (fr / en / mg)

Le site est disponible en français, anglais et malgache (voir `src/messages/`). Le ton défini dans ce document doit être **transposé**, pas traduit mot à mot :

* Une formule qui sonne chaleureuse en français peut sonner too much en anglais si traduite littéralement — adapter au naturel de chaque langue plutôt que de calquer la syntaxe.
* La version malgache mérite une attention particulière : éviter une traduction générique qui ignorerait les expressions et tournures naturelles de la langue, ce qui contredirait justement la valeur "Authenticité" de Brand.md.

> ⚠️ **À compléter** : ce document devra, à terme, être doublé d'un glossaire de termes clés (ex. "circuit", "excursion", "réservation") avec leur traduction validée dans les trois langues, pour garantir une cohérence terminologique sur tout le site.

## 7. Interdictions

* Ne jamais utiliser un ton commercial agressif (urgence artificielle type "Plus que 2 places !" sans que ce soit vrai).
* Ne jamais utiliser un jargon technique dans les messages destinés à l'utilisateur final (réserver ce registre à la documentation interne).
* Ne jamais traduire un texte littéralement d'une langue à l'autre sans vérifier qu'il garde le même ton une fois transposé.

## 8. Documents associés

* [Brand.md](./Brand.md)
* [Guides/Accessibility.md](../Guides/Accessibility.md)
* [Technical/Internationalization.md](../Technical/Internationalization.md)
