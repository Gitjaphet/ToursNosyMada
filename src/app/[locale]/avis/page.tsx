import { useTranslations } from "next-intl";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/ui/Reveal";
import { ReviewCard } from "@/components/cards/ReviewCard";
import { reviews } from "@/data/reviews";
import styles from "./page.module.css";

export default function ReviewsPage() {
  const t = useTranslations("Reviews");

  return (
    <>
      <Header />
      <main className={styles.main}>
        <Reveal>
          <span className={styles.eyebrow}>{t("eyebrow")}</span>
          <h1 className={styles.title}>{t("pageTitle")}</h1>
          <p className={styles.intro}>{t("pageIntro")}</p>
          {/* Avis fictifs (mock) — voir Features/Reviews.md. Ce bandeau
              disparaîtra dès que le vrai système d'avis sera branché. */}
          <p className={styles.mockNotice}>{t("mockNotice")}</p>
        </Reveal>

        <div className={styles.grid}>
          {reviews.map((review, index) => (
            <Reveal key={review.id} delay={index * 80}>
              <ReviewCard review={review} />
            </Reveal>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
