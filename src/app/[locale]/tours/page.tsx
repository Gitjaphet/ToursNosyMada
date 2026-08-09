import { useTranslations } from "next-intl";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TourCard } from "@/components/cards/TourCard";
import { Link } from "@/i18n/navigation";
import { tours } from "@/data/tours";
import styles from "./page.module.css";

export default function ToursPage() {
  const t = useTranslations("Tours");

  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>{t("pageTitle")}</h1>
        <p className={styles.intro}>{t("pageIntro")}</p>
        <div className={styles.grid}>
          {tours.map((tour) => (
            <Link key={tour.slug} href={`/tours/${tour.slug}`} className={styles.cardLink}>
              <TourCard tour={tour} />
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
