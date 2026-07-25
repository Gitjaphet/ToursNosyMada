import { ButtonHTMLAttributes, ReactNode } from "react";
import { FaSpinner } from "react-icons/fa6";
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
}

export default function Button({
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

  return (
    <button
      type={type}
      className={classes}
      disabled={isDisabled}
      aria-busy={loading}
      {...rest}
    >
      {loading ? (
        <FaSpinner className={styles.spinner} aria-hidden="true" />
      ) : (
        <>
          {iconLeft && <span className={styles.icon}>{iconLeft}</span>}
          <span>{children}</span>
          {iconRight && <span className={styles.icon}>{iconRight}</span>}
        </>
      )}
    </button>
  );
}
