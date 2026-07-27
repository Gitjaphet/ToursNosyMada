import { TextareaHTMLAttributes, useId } from "react";
import { FaCircleExclamation } from "react-icons/fa6";
import styles from "./Textarea.module.css";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  rows?: number;
}

export function Textarea({
  label,
  error,
  required,
  disabled,
  rows = 5,
  id,
  className,
  ...rest
}: TextareaProps) {
  const generatedId = useId();
  const textareaId = id ?? generatedId;
  const errorId = `${textareaId}-error`;

  return (
    <div className={styles.field}>
      <label htmlFor={textareaId} className={styles.label}>
        {label}
        {required && <span className={styles.required}> *</span>}
      </label>

      <div className={styles.textareaWrapper}>
        <textarea
          id={textareaId}
          rows={rows}
          disabled={disabled}
          required={required}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          className={[
            styles.textarea,
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
