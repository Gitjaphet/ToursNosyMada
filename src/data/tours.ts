import type { Tour } from "@/types/Tour";

// Durées "À définir" dans Features/Tours.md §4 -> comblées avec des valeurs
// FICTIVES (autorisé par le chef de projet), à remplacer par les vraies
// durées avant publication. Voir Task-Board.
export const tours: Tour[] = [
  {
    slug: "region-sava",
    theme: "nature",
    duration_days: 6,
    duration_nights: 5,
    region: "SAVA",
  },
  {
    slug: "reserve-lokobe-circuit",
    theme: "nature",
    duration_days: 2,
    duration_nights: 1,
    region: "Nosy Be",
  },
  {
    slug: "culture-authenticite",
    theme: "culture",
    duration_days: 5,
    duration_nights: 4,
    region: "Nord Madagascar",
  },
  {
    slug: "randonnee-nosy-komba",
    theme: "randonnee",
    duration_days: 2,
    duration_nights: 1,
    region: "Nosy Komba",
  },
  {
    slug: "archipels-nosy-be",
    theme: "nature",
    duration_days: 4,
    duration_nights: 3,
    region: "Nosy Be",
  },
  {
    slug: "grand-circuit-nord",
    theme: "aventure",
    duration_days: 11,
    duration_nights: 10,
    region: "Nord Madagascar",
  },
  {
    slug: "nature-traditions-nord",
    theme: "culture",
    duration_days: 8,
    duration_nights: 7,
    region: "Nord Madagascar",
  },
];
