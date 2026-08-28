import { useTranslations } from "next-intl";
import { FaLeaf, FaHandshake, FaSeedling, FaMagnifyingGlass, FaPaperPlane, FaPlane, FaCompass, FaArrowRight } from "react-icons/fa6";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { ExcursionCard } from "@/components/cards/ExcursionCard";
import { TourCard } from "@/components/cards/TourCard";
import { Link } from "@/i18n/navigation";
import { excursions } from "@/data/excursions";
import { tours } from "@/data/tours";
import { getHomeImage, getPlaceholderImage } from "@/lib/images";
import { SafeImage } from "@/components/ui/SafeImage/SafeImage";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import styles from "./page.module.css";

const FEATURED_EXCURSION_SLUGS = ["nosy-iranja-antsoha", "requins-baleines", "reserve-lokobe"];
const FEATURED_TOUR_SLUGS = ["archipels-nosy-be", "region-sava", "randonnee-nosy-komba"];

export default function Home() {
  const t = useTranslations("Home");
  const featuredExcursions = excursions.filter((e) => FEATURED_EXCURSION_SLUGS.includes(e.slug));
  const featuredTours = tours.filter((tour) => FEATURED_TOUR_SLUGS.includes(tour.slug));

  const values = [
    { key: "authenticity", icon: <FaLeaf aria-hidden="true" />, iconClass: styles.iconPrimary },
    { key: "trust", icon: <FaHandshake aria-hidden="true" />, iconClass: styles.iconAccent },
    { key: "respect", icon: <FaSeedling aria-hidden="true" />, iconClass: styles.iconSecondary },
  ] as const;

  const steps = [
    { key: "choose", icon: <FaMagnifyingGlass aria-hidden="true" /> },
    { key: "request", icon: <FaPaperPlane aria-hidden="true" /> },
    { key: "travel", icon: <FaPlane aria-hidden="true" /> },
  ] as const;

  return (
    <>
      <Header />

      <main>
        {/* 1. Hero — promesse de marque + première action */}
        <section className={styles.hero}>
          <SafeImage
            src={getHomeImage("hero", "png")}
            fallbackSrc={getPlaceholderImage("excursions")}
            alt=""
            fill
            priority
            sizes="100vw"
            className={styles.heroImage}
          />
          <div className={styles.heroScrim} />
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>{t("hero.eyebrow")}</span>
            <h1 className={styles.heroTitle}>{t("hero.title")}</h1>
            <p className={styles.heroSubtitle}>{t("hero.subtitle")}</p>
            <div className={styles.heroActions}>
              <Button href="/excursions" size="large">
                {t("hero.ctaPrimary")}
              </Button>
              <Button
                href="/tours"
                size="large"
                variant="outline"
                style={{ borderColor: "var(--color-surface)", color: "var(--color-surface)" }}
              >
                {t("hero.ctaSecondary")}
              </Button>
            </div>
          </div>
        </section>

        {/* 2. Pourquoi nous — réassurance avant de demander un engagement */}
        <section className={styles.values}>
          <Reveal>
            <h2 className={styles.sectionTitleCentered}>{t("values.title")}</h2>
            <div className={styles.valuesGrid}>
              {values.map(({ key, icon, iconClass }, index) => (
                <Reveal key={key} delay={index * 100}>
                  <div className={styles.valueCard}>
                    <div className={`${styles.valueIcon} ${iconClass}`}>{icon}</div>
                    <h3 className={styles.valueTitle}>{t(`values.items.${key}.title`)}</h3>
                    <p className={styles.valueDescription}>{t(`values.items.${key}.description`)}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </section>

        {/* 3. Offre phare — excursions, l'entrée la plus accessible du catalogue */}
        <section className={styles.featured}>
          <Reveal>
            <div className={styles.featuredHeader}>
              <div>
                <span className={styles.eyebrowDark}>{t("featured.eyebrow")}</span>
                <h2 className={styles.sectionTitle}>{t("featured.title")}</h2>
                <p className={styles.sectionSubtitle}>{t("featured.subtitle")}</p>
              </div>
              <Button href="/excursions" variant="outline">
                {t("featured.cta")}
              </Button>
            </div>
          </Reveal>
          <div className={styles.grid}>
            {featuredExcursions.map((excursion, index) => (
              <Reveal key={excursion.slug} delay={index * 100}>
                <Link href={`/excursions/${excursion.slug}`} className={styles.cardLink}>
                  <ExcursionCard excursion={excursion} />
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        {/* 4. Comment ça marche — lève les freins avant de proposer l'offre suivante */}
        <section className={styles.howItWorks}>
          <Reveal>
            <h2 className={styles.sectionTitleCentered}>{t("howItWorks.title")}</h2>
            <div className={styles.stepsGrid}>
              {steps.map(({ key, icon }, index) => (
                <Reveal key={key} delay={index * 100}>
                  <div className={styles.stepCard}>
                    <div className={styles.stepNumber}>{index + 1}</div>
                    <div className={styles.stepIcon}>{icon}</div>
                    <h3 className={styles.valueTitle}>{t(`howItWorks.steps.${key}.title`)}</h3>
                    <p className={styles.valueDescription}>{t(`howItWorks.steps.${key}.description`)}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </section>

        {/* 5. Offre secondaire — circuits, engagement plus long une fois la confiance installée */}
        <section className={styles.featuredTours}>
          <Reveal>
            <div className={styles.featuredHeader}>
              <div>
                <span className={styles.eyebrowDark}>{t("featuredTours.eyebrow")}</span>
                <h2 className={styles.sectionTitle}>{t("featuredTours.title")}</h2>
                <p className={styles.sectionSubtitle}>{t("featuredTours.subtitle")}</p>
              </div>
              <Button href="/tours" variant="outline">
                {t("featuredTours.cta")}
              </Button>
            </div>
          </Reveal>
          <div className={styles.grid}>
            {featuredTours.map((tour, index) => (
              <Reveal key={tour.slug} delay={index * 100}>
                <Link href={`/tours/${tour.slug}`} className={styles.cardLink}>
                  <TourCard tour={tour} />
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        {/* 6. CTA final */}
        <section className={styles.closing}>
          <span className={styles.closingBlobPrimary} aria-hidden="true" />
          <span className={styles.closingBlobAccent} aria-hidden="true" />
          <FaCompass className={styles.closingIcon} aria-hidden="true" />
          <Reveal className={styles.closingInner}>
            <h2 className={styles.closingTitle}>{t("closing.title")}</h2>
            <p className={styles.closingSubtitle}>{t("closing.subtitle")}</p>
            <Button
              href="/tours"
              size="large"
              variant="secondary"
              className={styles.closingButton}
              iconRight={<FaArrowRight className={styles.closingButtonIcon} aria-hidden="true" />}
            >
              {t("closing.cta")}
            </Button>
          </Reveal>
        </section>
      </main>

      <Footer />
    </>
  );
}
