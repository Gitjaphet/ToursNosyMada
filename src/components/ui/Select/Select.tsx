import { SelectHTMLAttributes, useId } from "react";
import { FaChevronDown, FaCircleExclamation } from "react-icons/fa6";
import styles from "./Select.module.css";

interface SelectOption {
  label: string;
  value: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: SelectOption[];
  error?: string;
}

export function Select({
  label,
  options,
  error,
  required,
  disabled,
  id,
  className,
  ...rest
}: SelectProps) {
  const generatedId = useId();
  const selectId = id ?? generatedId;
  const errorId = `${selectId}-error`;

  return (
    <div className={styles.field}>
      <label htmlFor={selectId} className={styles.label}>
        {label}
        {required && <span className={styles.required}> *</span>}
      </label>

      <div className={styles.selectWrapper}>
        <select
          id={selectId}
          disabled={disabled}
          required={required}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          className={[
            styles.select,
            error ? styles.error : "",
            className ?? "",
          ]
            .filter(Boolean)
            .join(" ")}
          {...rest}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <FaChevronDown className={styles.chevron} aria-hidden="true" />

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
