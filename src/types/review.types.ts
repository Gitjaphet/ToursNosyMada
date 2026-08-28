export interface ReviewRelatedTo {
  section: "excursions" | "tours";
  slug: string;
}

export interface Review {
  id: string;
  /** Note sur 5. */
  rating: number;
  /** Optionnel : l'excursion ou le tour concerné par l'avis. */
  relatedTo?: ReviewRelatedTo;
}
