import { useTranslations } from "next-intl";
import { FaStar, FaRegStar } from "react-icons/fa6";
import { Link } from "@/i18n/navigation";
import { Card, CardBody } from "@/components/ui/Card";
import type { Review } from "@/types/review.types";
import styles from "./ReviewCard.module.css";

interface ReviewCardProps {
  review: Review;
}

export function ReviewCard({ review }: ReviewCardProps) {
  const t = useTranslations("Reviews");
  const tExcursions = useTranslations("Excursions.items");
  const tTours = useTranslations("Tours.items");

  const name = t(`items.${review.id}.name`);
  const text = t(`items.${review.id}.text`);

  const relatedTitle = review.relatedTo
    ? review.relatedTo.section === "excursions"
      ? tExcursions(`${review.relatedTo.slug}.title`)
      : tTours(`${review.relatedTo.slug}.title`)
    : null;

  const relatedHref = review.relatedTo
    ? `/${review.relatedTo.section}/${review.relatedTo.slug}`
    : null;

  return (
    <Card>
      <CardBody>
        <div className={styles.stars} aria-label={`${review.rating}/5`}>
          {Array.from({ length: 5 }, (_, i) =>
            i < review.rating ? (
              <FaStar key={i} className={styles.starFilled} aria-hidden="true" />
            ) : (
              <FaRegStar key={i} className={styles.starEmpty} aria-hidden="true" />
            )
          )}
        </div>
        <p className={styles.text}>{text}</p>
        <p className={styles.name}>{name}</p>
        {relatedTitle && relatedHref && (
          <Link href={relatedHref} className={styles.related}>
            {t("relatedToLabel")} {relatedTitle}
          </Link>
        )}
      </CardBody>
    </Card>
  );
}
