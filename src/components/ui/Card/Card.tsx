import type { ReactNode } from "react";
import { SafeImage } from "@/components/ui/SafeImage/SafeImage";
import styles from "./Card.module.css";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div className={[styles.card, className].filter(Boolean).join(" ")}>
      {children}
    </div>
  );
}

interface CardImageProps {
  src: string;
  alt: string;
  /** Image affichée si `src` n'existe pas encore (voir src/lib/images.ts). */
  fallbackSrc: string;
}

export function CardImage({ src, alt, fallbackSrc }: CardImageProps) {
  return (
    <div className={styles.imageWrapper}>
      <SafeImage
        src={src}
        fallbackSrc={fallbackSrc}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className={styles.image}
      />
    </div>
  );
}

interface CardBodyProps {
  children: ReactNode;
}

export function CardBody({ children }: CardBodyProps) {
  return <div className={styles.body}>{children}</div>;
}
