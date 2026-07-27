"use client";

import styles from "./LanguageSwitcher.module.css";

type Locale = "fr" | "en" | "mg";

interface LanguageSwitcherProps {
  /** Langue active */
  currentLocale: Locale;
  /** Appelé avec la nouvelle langue choisie */
  onChange: (locale: Locale) => void;
}

const LOCALES: { code: Locale; label: string }[] = [
  { code: "fr", label: "FR" },
  { code: "en", label: "EN" },
  { code: "mg", label: "MG" },
];

export function LanguageSwitcher({ currentLocale, onChange }: LanguageSwitcherProps) {
  return (
    <div className={styles.switcher} role="group" aria-label="Choix de la langue">
      {LOCALES.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          onClick={() => onChange(code)}
          aria-current={currentLocale === code}
          className={[styles.option, currentLocale === code ? styles.active : ""]
            .filter(Boolean)
            .join(" ")}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
