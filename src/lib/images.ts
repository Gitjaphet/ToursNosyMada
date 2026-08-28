/**
 * Convention de nommage des images — MadaTours
 * ================================================
 * Toutes les images du site suivent une structure prévisible basée sur
 * le `slug` de chaque élément (excursion, tour...), pour qu'aucune photo
 * n'ait besoin d'être déclarée à la main dans les données : il suffit de
 * déposer le bon fichier au bon endroit avec le bon nom.
 *
 * public/images/
 *   excursions/<slug>/cover.jpg        → image de la carte listing
 *   excursions/<slug>/gallery-1.jpg    → photos de la page détail
 *   excursions/<slug>/gallery-2.jpg      (gallery-1 à gallery-6, au besoin)
 *   ...
 *   tours/<slug>/cover.jpg
 *   tours/<slug>/gallery-1.jpg
 *   ...
 *   home/hero.jpg                      → grande image d'accueil
 *   home/<nom-libre>.jpg               → autres visuels de la page d'accueil
 *   placeholders/excursion-placeholder.jpg
 *   placeholders/tour-placeholder.jpg  → utilisées si un cover.jpg manque
 *
 * Prends une photo, nomme-la EXACTEMENT comme indiqué ci-dessus, dépose-la
 * au bon endroit : aucune modification de code n'est nécessaire.
 */

export type ImageSection = "excursions" | "tours";

const GALLERY_MAX = 6;

export function getCoverImage(section: ImageSection, slug: string): string {
  return `/images/${section}/${slug}/cover.jpg`;
}

export function getPlaceholderImage(section: ImageSection): string {
  const name = section === "excursions" ? "excursion-placeholder" : "tour-placeholder";
  return `/images/placeholders/${name}.jpg`;
}

/**
 * Retourne jusqu'à `count` chemins de galerie prévisibles (gallery-1.jpg,
 * gallery-2.jpg, ...) pour un slug donné. Ne vérifie PAS que les fichiers
 * existent réellement sur le disque — à utiliser avec le composant
 * <SafeImage> qui gère le repli automatique si un fichier est absent.
 */
export function getGalleryImages(
  section: ImageSection,
  slug: string,
  count: number = GALLERY_MAX
): string[] {
  const n = Math.min(count, GALLERY_MAX);
  return Array.from({ length: n }, (_, i) => `/images/${section}/${slug}/gallery-${i + 1}.jpg`);
}

export function getHomeImage(name: string, extension: string = "jpg"): string {
  return `/images/home/${name}.${extension}`;
}
