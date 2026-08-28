"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { FaBars, FaXmark } from "react-icons/fa6";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import styles from "./Navbar.module.css";

/* Liens de navigation — les clés "gallery" et "reviews" pointent vers des
   pages non encore documentées dans Features/ (décision en attente, voir
   Task-Board). Le TEXTE est maintenant traduit dans les 3 langues même si
   la page elle-même reste à trancher. */
const NAV_LINKS = [
  { key: "home", href: "/" },
  { key: "excursions", href: "/excursions" },
  { key: "tours", href: "/tours" },
  { key: "gallery", href: "/galerie" },
  { key: "reviews", href: "/avis" },
  { key: "about", href: "/a-propos" },
  { key: "contact", href: "/contact" },
] as const;

/* Doit correspondre au breakpoint utilisé dans Navbar.module.css
   (768px) — en attendant Responsive.md. */
const DESKTOP_BREAKPOINT = 768;

export function Navbar() {
  const t = useTranslations("Navbar");
  const [isOpen, setIsOpen] = useState(false);

  /* Ferme automatiquement le menu mobile si la fenêtre est
     agrandie au-delà du breakpoint desktop, pour éviter que les
     deux affichages (menu mobile ouvert + barre desktop) se
     mélangent visuellement. */
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= DESKTOP_BREAKPOINT) {
        setIsOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className={styles.navbar} aria-label={t("ariaLabel")}>
      {/* Logo — chemin "/logo.svg" à ajuster selon le nom réel
          de ton fichier une fois déposé dans public/ */}
      <Link href="/" className={styles.logo}>
        {/* Deux logos superposés, un seul visible à la fois via CSS
            (classe .dark sur <html>) : le fond de la Navbar change
            selon le thème, contrairement au Footer qui reste toujours
            sombre (voir Footer.tsx, qui n'a besoin que du logo clair). */}
        <Image
          src="/logo.svg"
          alt="MadaTours"
          width={96}
          height={60}
          priority
          className={styles.logoLight}
        />
        <Image
          src="/logo-dark.svg"
          alt="MadaTours"
          width={96}
          height={60}
          priority
          className={styles.logoDarkVariant}
        />
      </Link>

      <ul className={styles.linksDesktop}>
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className={styles.link}>
              {t(`links.${link.key}`)}
            </Link>
          </li>
        ))}
      </ul>

      <div className={styles.desktopOnly}>
        <LanguageSwitcher />
        <ThemeToggle />
      </div>

      <div className={styles.mobileActions}>
        <ThemeToggle />
        <button
          type="button"
          className={styles.burger}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="navbar-mobile-menu"
          aria-label={isOpen ? t("closeMenu") : t("openMenu")}
        >
          {isOpen ? <FaXmark size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {isOpen && (
        <ul id="navbar-mobile-menu" className={styles.linksMobile}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={styles.link} onClick={() => setIsOpen(false)}>
                {t(`links.${link.key}`)}
              </Link>
            </li>
          ))}
          <li>
            <LanguageSwitcher />
          </li>
        </ul>
      )}
    </nav>
  );
}
