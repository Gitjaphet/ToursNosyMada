import { useTranslations } from "next-intl";
import { FaLeaf, FaHandshake, FaAward, FaSeedling, FaLightbulb } from "react-icons/fa6";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import styles from "./page.module.css";

const VALUES = [
  { key: "authenticity", icon: <FaLeaf aria-hidden="true" />, iconClass: "iconPrimary" },
  { key: "trust", icon: <FaHandshake aria-hidden="true" />, iconClass: "iconAccent" },
  { key: "excellence", icon: <FaAward aria-hidden="true" />, iconClass: "iconSecondary" },
  { key: "respect", icon: <FaSeedling aria-hidden="true" />, iconClass: "iconPrimary" },
  { key: "innovation", icon: <FaLightbulb aria-hidden="true" />, iconClass: "iconAccent" },
] as const;

export default function AboutPage() {
  const t = useTranslations("About");

  return (
    <>
      <Header />
      <main className={styles.main}>
        <Reveal>
          <span className={styles.eyebrow}>{t("eyebrow")}</span>
          <h1 className={styles.title}>{t("pageTitle")}</h1>
          <p className={styles.intro}>{t("pageIntro")}</p>
        </Reveal>

        <div className={styles.pillars}>
          <Reveal className={styles.pillarCard}>
            <h2 className={styles.pillarTitle}>{t("vision.title")}</h2>
            <p className={styles.pillarText}>{t("vision.text")}</p>
          </Reveal>
          <Reveal delay={100} className={styles.pillarCard}>
            <h2 className={styles.pillarTitle}>{t("mission.title")}</h2>
            <p className={styles.pillarText}>{t("mission.text")}</p>
          </Reveal>
        </div>

        <Reveal>
          <h2 className={styles.sectionTitleCentered}>{t("values.title")}</h2>
        </Reveal>
        <div className={styles.valuesGrid}>
          {VALUES.map(({ key, icon, iconClass }, index) => (
            <Reveal key={key} delay={index * 80}>
              <div className={styles.valueCard}>
                <div className={`${styles.valueIcon} ${styles[iconClass]}`}>{icon}</div>
                <h3 className={styles.valueTitle}>{t(`values.items.${key}.title`)}</h3>
                <p className={styles.valueDescription}>{t(`values.items.${key}.description`)}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className={styles.promise}>
          <h2 className={styles.promiseTitle}>{t("promise.title")}</h2>
          <p className={styles.promiseText}>{t("promise.text")}</p>
        </Reveal>

        <Reveal className={styles.closing}>
          <h2 className={styles.closingTitle}>{t("closing.title")}</h2>
          <Button href="/excursions" size="large">
            {t("closing.cta")}
          </Button>
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
