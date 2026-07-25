import { InputHTMLAttributes, useId } from "react";
import { FaCheck } from "react-icons/fa6";
import styles from "./Checkbox.module.css";

interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

export default function Checkbox({
  label,
  checked,
  onChange,
  disabled,
  id,
  className,
  ...rest
}: CheckboxProps) {
  const generatedId = useId();
  const checkboxId = id ?? generatedId;

  return (
    <label
      htmlFor={checkboxId}
      className={[styles.wrapper, disabled ? styles.disabled : "", className ?? ""]
        .filter(Boolean)
        .join(" ")}
    >
      <span className={styles.box}>
        <input
          id={checkboxId}
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={(event) => onChange?.(event.target.checked)}
          className={styles.input}
          {...rest}
        />
        <span className={styles.customBox}>
          {checked && <FaCheck className={styles.checkIcon} aria-hidden="true" />}
        </span>
      </span>
      <span className={styles.label}>{label}</span>
    </label>
  );
}
