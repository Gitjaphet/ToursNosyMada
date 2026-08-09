import Image from "next/image";
import { Link } from "@/i18n/navigation";
import {
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaWhatsapp,
  FaFacebookF,
  FaLocationDot,
  FaPhone,
} from "react-icons/fa6";
import styles from "./Footer.module.css";

const NAV_LINKS = [
  { label: "Accueil", href: "/" },
  { label: "Excursions", href: "/excursions" },
  { label: "Tours", href: "/tours" },
  { label: "Avis", href: "/avis" },
  { label: "Contact", href: "/contact" },
];

const SOCIAL_LINKS = [
  { label: "Instagram", href: "#", icon: FaInstagram },
  { label: "YouTube", href: "#", icon: FaYoutube },
  { label: "Email", href: "mailto:contact@madatours.com", icon: FaEnvelope },
  { label: "WhatsApp", href: "#", icon: FaWhatsapp },
  { label: "Facebook", href: "#", icon: FaFacebookF },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.columns}>
        {/* Marque + slogan + réseaux — pas de titre, comme le portfolio */}
        <div className={styles.column}>
          <Link href="/" className={styles.brand} aria-label="Accueil">
            <Image src="/logo.svg" alt="MadaTours" width={140} height={40} priority />
          </Link>
          {/* Slogan — proposition, à valider */}
          <p className={styles.slogan}>Votre aventure malgache commence ici.</p>

          <div className={styles.socials} aria-label="Réseaux sociaux">
            {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} aria-label={label} className={styles.socialLink}>
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className={styles.column}>
          <h3 className={styles.heading}>Contact</h3>
          {/* PLACEHOLDER — vraies coordonnées à ajouter */}
          <p className={styles.text}>
            <FaLocationDot className={styles.icon} aria-hidden="true" /> Antananarivo, Madagascar
          </p>
          <p className={styles.text}>
            <FaPhone className={styles.icon} aria-hidden="true" /> +261 00 00 000 00
          </p>
          <p className={styles.text}>
            <FaEnvelope className={styles.icon} aria-hidden="true" />{" "}
            <a href="mailto:contact@madatours.com" className={styles.inlineLink}>
              contact@madatours.com
            </a>
          </p>
        </div>

        {/* Navigation */}
        <div className={styles.column}>
          <h3 className={styles.heading}>Navigation</h3>
          <ul className={styles.list}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={styles.link}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* À propos */}
        <div className={styles.column}>
          <h3 className={styles.heading}>À propos</h3>
          {/* PLACEHOLDER — texte réel à définir avec l'équipe */}
          <p className={styles.aboutText}>
            <strong>MadaTours</strong>{" "}
            vous fait découvrir les plus belles excursions et circuits de Madagascar — de la côte aux hauts plateaux, pensés pour l&apos;aventure et l&apos;évasion.
          </p>
          <p className={styles.textSmall}>
            Réservations en ligne, guides locaux, circuits sur mesure partout dans l&apos;île.
          </p>
        </div>
      </div>

      <div className={styles.copyright}>
        © {currentYear} MadaTours. Tous droits réservés.
      </div>
    </footer>
  );
}
