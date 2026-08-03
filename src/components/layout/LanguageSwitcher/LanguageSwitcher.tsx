"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import styles from "./LanguageSwitcher.module.css";

type Locale = "fr" | "en" | "mg";

const LOCALES: { code: Locale; label: string }[] = [
  { code: "fr", label: "FR" },
  { code: "en", label: "EN" },
  { code: "mg", label: "MG" },
];

export function LanguageSwitcher() {
  const currentLocale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();

  function handleChange(locale: Locale) {
    if (locale === currentLocale) return;
    router.replace(pathname, { locale });
  }

  return (
    <div className={styles.switcher} role="group" aria-label="Choix de la langue">
      {LOCALES.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          onClick={() => handleChange(code)}
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
