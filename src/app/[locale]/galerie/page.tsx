import { getTranslations } from "next-intl/server";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/ui/Reveal";
import { SafeImage } from "@/components/ui/SafeImage";
import { Link } from "@/i18n/navigation";
import { excursions } from "@/data/excursions";
import { tours } from "@/data/tours";
import { getCoverImage, getPlaceholderImage } from "@/lib/images";
import styles from "./page.module.css";

// Pas de fichier de données séparé : la galerie reflète directement
// excursions.ts/tours.ts, pour ne jamais se désynchroniser de la vraie
// liste des excursions et circuits (voir Features/Gallery.md §3).
export default async function GalleryPage() {
  const t = await getTranslations("Gallery");
  const tExcursions = await getTranslations("Excursions.items");
  const tTours = await getTranslations("Tours.items");
  const tNav = await getTranslations("Navbar.links");

  const items = [
    ...excursions.map((excursion) => ({
      section: "excursions" as const,
      slug: excursion.slug,
      title: tExcursions(`${excursion.slug}.title`),
      href: `/excursions/${excursion.slug}`,
      category: tNav("excursions"),
    })),
    ...tours.map((tour) => ({
      section: "tours" as const,
      slug: tour.slug,
      title: tTours(`${tour.slug}.title`),
      href: `/tours/${tour.slug}`,
      category: tNav("tours"),
    })),
  ];

  return (
    <>
      <Header />
      <main className={styles.main}>
        <Reveal>
          <span className={styles.eyebrow}>{t("eyebrow")}</span>
          <h1 className={styles.title}>{t("pageTitle")}</h1>
          <p className={styles.intro}>{t("pageIntro")}</p>
        </Reveal>

        <div className={styles.grid}>
          {items.map((item, index) => (
            <Reveal key={`${item.section}-${item.slug}`} delay={(index % 6) * 60}>
              <Link href={item.href} className={styles.tile}>
                <SafeImage
                  src={getCoverImage(item.section, item.slug)}
                  fallbackSrc={getPlaceholderImage(item.section)}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className={styles.tileImage}
                />
                <span className={styles.tileOverlay}>
                  <span className={styles.tileCategory}>{item.category}</span>
                  <span className={styles.tileTitle}>{item.title}</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
