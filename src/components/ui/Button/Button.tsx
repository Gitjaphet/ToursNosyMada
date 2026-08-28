import { ButtonHTMLAttributes, ReactNode } from "react";
import { FaSpinner } from "react-icons/fa6";
import { Link } from "@/i18n/navigation";
import styles from "./Button.module.css";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger";
type ButtonSize = "small" | "medium" | "large";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset";
  children: ReactNode;
  /** Si fourni, le bouton s'affiche comme un lien de navigation (ex. CTA de hero) au lieu d'un <button>. */
  href?: string;
}

export function Button({
  variant = "primary",
  size = "medium",
  disabled = false,
  loading = false,
  iconLeft,
  iconRight,
  fullWidth = false,
  type = "button",
  children,
  className,
  href,
  ...rest
}: ButtonProps) {
  const isDisabled = disabled || loading;

  const classes = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth ? styles.fullWidth : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  const content = loading ? (
    <FaSpinner className={styles.spinner} aria-hidden="true" />
  ) : (
    <>
      {iconLeft && <span className={styles.icon}>{iconLeft}</span>}
      <span>{children}</span>
      {iconRight && <span className={styles.icon}>{iconRight}</span>}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={isDisabled}
      aria-busy={loading}
      {...rest}
    >
      {content}
    </button>
  );
}
