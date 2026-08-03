"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { FaBars, FaXmark } from "react-icons/fa6";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import styles from "./Navbar.module.css";

/* Liens de navigation — PLACEHOLDER, à remplacer par les vraies
   pages une fois le contenu réel disponible (Features/*.md). */
const NAV_LINKS = [
  { label: "Excursions", href: "/excursions" },
  { label: "Tours", href: "/tours" },
  { label: "Galerie", href: "/galerie" },
  { label: "Avis", href: "/avis" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
];

/* Doit correspondre au breakpoint utilisé dans Navbar.module.css
   (768px) — en attendant Responsive.md. */
const DESKTOP_BREAKPOINT = 768;

export function Navbar() {
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
    <nav className={styles.navbar} aria-label="Navigation principale">
      {/* Logo — chemin "/logo.svg" à ajuster selon le nom réel
          de ton fichier une fois déposé dans public/ */}
      <Link href="/" className={styles.logo}>
        <Image src="/logo.svg" alt="MadaTours" width={140} height={40} priority />
      </Link>

      <ul className={styles.linksDesktop}>
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className={styles.link}>
              {link.label}
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
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isOpen ? <FaXmark size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {isOpen && (
        <ul id="navbar-mobile-menu" className={styles.linksMobile}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={styles.link} onClick={() => setIsOpen(false)}>
                {link.label}
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
