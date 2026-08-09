import { useTranslations } from "next-intl";
import { Card, CardImage, CardBody } from "@/components/ui/Card/Card";
import type { Tour } from "@/types/Tour";
import styles from "./TourCard.module.css";

interface TourCardProps {
  tour: Tour;
}

export function TourCard({ tour }: TourCardProps) {
  const t = useTranslations("Tours");
  const tThemes = useTranslations("Tours.themes");

  const title = t(`items.${tour.slug}.title`);
  const duration =
    tour.duration_days !== null && tour.duration_nights !== null
      ? t("duration", { days: tour.duration_days, nights: tour.duration_nights })
      : t("durationUnconfirmed");

  return (
    <Card>
      <CardImage src="/placeholder-tour.jpg" alt={title} />
      <CardBody>
        <span className={styles.badge}>{tThemes(tour.theme)}</span>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.meta}>
          {duration} · {tour.region}
        </p>
      </CardBody>
    </Card>
  );
}
