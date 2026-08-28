import type { Review } from "@/types/review.types";

// ⚠️ Données FICTIVES — décision du mentor (Japhet Valeureux, 10/08/2026,
// voir Features/Reviews.md) : mock en attendant un vrai backend d'avis.
// Chaque avis est marqué [FICTIF] dans son texte traduit (même convention
// que les tours dans data/tours.ts), pour ne jamais le confondre avec un
// vrai avis une fois le backend branché.
export const reviews: Review[] = [
  { id: "sophie-m", rating: 5, relatedTo: { section: "excursions", slug: "nosy-iranja-antsoha" } },
  { id: "james-c", rating: 5, relatedTo: { section: "excursions", slug: "baleines-a-bosse" } },
  { id: "rindra-a", rating: 5 },
  { id: "claire-d", rating: 4, relatedTo: { section: "tours", slug: "grand-circuit-nord" } },
  { id: "thomas-w", rating: 5, relatedTo: { section: "excursions", slug: "reserve-lokobe" } },
  { id: "amina-h", rating: 5 },
];
