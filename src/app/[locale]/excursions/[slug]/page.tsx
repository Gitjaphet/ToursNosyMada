import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "@/i18n/navigation";
import { excursions } from "@/data/excursions";
import styles from "./page.module.css";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return excursions.map((excursion) => ({ slug: excursion.slug }));
}

export default async function ExcursionDetailPage({ params }: Props) {
  const { slug } = await params;
  const excursion = excursions.find((item) => item.slug === slug);

  if (!excursion) {
    notFound();
  }

  const t = await getTranslations("Excursions");
  const tFilters = await getTranslations("Excursions.filters");

  const title = t(`items.${slug}.title`);
  const description = t(`items.${slug}.description`);
  const duration = t(`items.${slug}.duration`);
  const highlights = t.raw(`items.${slug}.highlights`) as string[];

  return (
    <>
      <Header />
      <main className={styles.main}>
        <Link href="/excursions" className={styles.back}>
          ← {t("backToList")}
        </Link>
        <span className={styles.badge}>{tFilters(excursion.type)}</span>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.meta}>
          {duration} · {excursion.location}
        </p>
        <p className={styles.description}>{description}</p>
        <h2 className={styles.highlightsTitle}>{t("highlightsTitle")}</h2>
        <ul className={styles.highlights}>
          {highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}
