export interface Tour {
  slug: string;
  theme: string;
  /** null tant que la durée n'est pas confirmée par l'équipe (voir Features/Tours.md §4) */
  duration_days: number | null;
  duration_nights: number | null;
  region: string;
}
