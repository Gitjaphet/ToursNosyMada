"use client";

import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";
import styles from "./ThemeToggle.module.css";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  /* Lu uniquement après le montage, côté client : évite tout
     décalage serveur/client (hydration mismatch). */
  useEffect(() => {
    const stored = localStorage.getItem("madatours-theme");
    const prefersDark = stored === "dark";
    setIsDark(prefersDark);
    document.documentElement.classList.toggle("dark", prefersDark);
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("madatours-theme", next ? "dark" : "light");
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className={styles.toggle}
      aria-label={isDark ? "Passer en mode clair" : "Passer en mode sombre"}
      aria-pressed={isDark}
    >
      {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
    </button>
  );
}
