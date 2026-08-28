import { useTranslations } from "next-intl";
import { Card, CardImage, CardBody } from "@/components/ui/Card/Card";
import { getCoverImage, getPlaceholderImage } from "@/lib/images";
import type { Excursion } from "@/types/excursion.types";
import styles from "./ExcursionCard.module.css";

interface ExcursionCardProps {
  excursion: Excursion;
}

export function ExcursionCard({ excursion }: ExcursionCardProps) {
  const t = useTranslations("Excursions");
  const tFilters = useTranslations("Excursions.filters");

  const title = t(`items.${excursion.slug}.title`);
  const duration = t(`items.${excursion.slug}.duration`);

  return (
    <Card>
      <CardImage
        src={getCoverImage("excursions", excursion.slug)}
        fallbackSrc={getPlaceholderImage("excursions")}
        alt={title}
      />
      <CardBody>
        <span className={styles.badge}>{tFilters(excursion.type)}</span>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.meta}>
          {duration} · {excursion.location}
        </p>
      </CardBody>
    </Card>
  );
}
