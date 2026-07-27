import { Navbar } from "@/components/layout/Navbar";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      {/* Bandeau promo/annonce optionnel — Components.md §8.1 le
          mentionne "à confirmer selon le besoin réel" : non ajouté
          ici, à faire quand la décision sera prise. */}
      <Navbar />
    </header>
  );
}
