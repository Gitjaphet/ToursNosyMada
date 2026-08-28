import { useTranslations } from "next-intl";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TourCard } from "@/components/cards/TourCard";
import { Reveal } from "@/components/ui/Reveal";
import { Link } from "@/i18n/navigation";
import { tours } from "@/data/tours";
import styles from "./page.module.css";

export default function ToursPage() {
  const t = useTranslations("Tours");

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
          {tours.map((tour, index) => (
            <Reveal key={tour.slug} delay={index * 80}>
              <Link href={`/tours/${tour.slug}`} className={styles.cardLink}>
                <TourCard tour={tour} />
              </Link>
            </Reveal>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
