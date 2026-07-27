import { CSSProperties, ReactNode } from "react";
import styles from "./Card.module.css";

interface CardProps {
  children: ReactNode;
  /** Active l'élévation au survol (passe de shadow-md à shadow-lg) */
  hoverable?: boolean;
  className?: string;
  /** Ajustements ponctuels (ex. maxWidth) — éviter d'y mettre des valeurs de tokens */
  style?: CSSProperties;
  onClick?: () => void;
}

export function Card({ children, hoverable = false, className, style, onClick }: CardProps) {
  const classes = [styles.card, hoverable ? styles.hoverable : "", className ?? ""]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} style={style} onClick={onClick}>
      {children}
    </div>
  );
}
