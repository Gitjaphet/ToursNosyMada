import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { FaCircleCheck, FaArrowLeft } from "react-icons/fa6";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/ui/Reveal";
import { SafeImage } from "@/components/ui/SafeImage";
import { Link } from "@/i18n/navigation";
import { tours } from "@/data/tours";
import { getCoverImage, getPlaceholderImage } from "@/lib/images";
import styles from "./page.module.css";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return tours.map((tour) => ({ slug: tour.slug }));
}

export default async function TourDetailPage({ params }: Props) {
  const { slug } = await params;
  const tour = tours.find((item) => item.slug === slug);

  if (!tour) {
    notFound();
  }

  const t = await getTranslations("Tours");
  const tThemes = await getTranslations("Tours.themes");

  const title = t(`items.${slug}.title`);
  const description = t(`items.${slug}.description`);
  const highlights = t.raw(`items.${slug}.highlights`) as string[];
  const duration =
    tour.duration_days !== null && tour.duration_nights !== null
      ? t("duration", { days: tour.duration_days, nights: tour.duration_nights })
      : t("durationUnconfirmed");

  return (
    <>
      <Header />
      <main className={styles.main}>
        <Link href="/tours" className={styles.back}>
          <FaArrowLeft aria-hidden="true" /> {t("backToList")}
        </Link>

        <Reveal>
          <div className={styles.cover}>
            <SafeImage
              src={getCoverImage("tours", slug)}
              fallbackSrc={getPlaceholderImage("tours")}
              alt={title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1280px"
              className={styles.coverImage}
            />
          </div>
        </Reveal>

        <div className={styles.content}>
          <Reveal>
            <span className={styles.badge}>{tThemes(tour.theme)}</span>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.meta}>
              {duration} · {tour.region}
            </p>
            <p className={styles.description}>{description}</p>
          </Reveal>

          <Reveal delay={100}>
            <h2 className={styles.highlightsTitle}>{t("highlightsTitle")}</h2>
            <ul className={styles.highlights}>
              {highlights.map((highlight) => (
                <li key={highlight} className={styles.highlightItem}>
                  <FaCircleCheck className={styles.highlightIcon} aria-hidden="true" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Bouton de réservation volontairement omis : Phase 5 (Booking) toujours bloquée */}
        </div>
      </main>
      <Footer />
    </>
  );
}
