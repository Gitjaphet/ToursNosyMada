import { useTranslations } from "next-intl";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ExcursionCard } from "@/components/cards/ExcursionCard";
import { Link } from "@/i18n/navigation";
import { excursions } from "@/data/excursions";
import styles from "./page.module.css";

export default function ExcursionsPage() {
  const t = useTranslations("Excursions");

  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>{t("pageTitle")}</h1>
        <p className={styles.intro}>{t("pageIntro")}</p>
        <div className={styles.grid}>
          {excursions.map((excursion) => (
            <Link
              key={excursion.slug}
              href={`/excursions/${excursion.slug}`}
              className={styles.cardLink}
            >
              <ExcursionCard excursion={excursion} />
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
