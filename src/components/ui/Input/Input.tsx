import { InputHTMLAttributes, useId } from "react";
import { FaCircleExclamation } from "react-icons/fa6";
import styles from "./Input.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export default function Input({
  label,
  error,
  required,
  disabled,
  id,
  className,
  ...rest
}: InputProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const errorId = `${inputId}-error`;

  return (
    <div className={styles.field}>
      <label htmlFor={inputId} className={styles.label}>
        {label}
        {required && <span className={styles.required}> *</span>}
      </label>

      <div className={styles.inputWrapper}>
        <input
          id={inputId}
          disabled={disabled}
          required={required}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          className={[
            styles.input,
            error ? styles.error : "",
            className ?? "",
          ]
            .filter(Boolean)
            .join(" ")}
          {...rest}
        />
        {error && (
          <FaCircleExclamation className={styles.errorIcon} aria-hidden="true" />
        )}
      </div>

      {error && (
        <p id={errorId} className={styles.errorText}>
          {error}
        </p>
      )}
    </div>
  );
}
