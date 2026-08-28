import Image from "next/image";
import { useTranslations } from "next-intl";
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
  { key: "home", href: "/" },
  { key: "excursions", href: "/excursions" },
  { key: "tours", href: "/tours" },
  { key: "gallery", href: "/galerie" },
  { key: "reviews", href: "/avis" },
  { key: "contact", href: "/contact" },
] as const;

const SOCIAL_LINKS = [
  { key: "instagram", href: "#", icon: FaInstagram },
  { key: "youtube", href: "#", icon: FaYoutube },
  { key: "email", href: "mailto:contact@madatours.com", icon: FaEnvelope },
  { key: "whatsapp", href: "#", icon: FaWhatsapp },
  { key: "facebook", href: "#", icon: FaFacebookF },
] as const;

export function Footer() {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.columns}>
        {/* Marque + slogan + réseaux — pas de titre, comme le portfolio */}
        <div className={styles.column}>
          <Link href="/" className={styles.brand} aria-label={t("homeAriaLabel")}>
            {/* Le Footer a toujours un fond sombre (--footer-bg), quel que
                soit le thème du site : on utilise donc systématiquement la
                variante claire du logo, jamais la version standard. */}
            <Image src="/logo-dark.svg" alt="MadaTours" width={96} height={60} priority />
          </Link>
          <p className={styles.slogan}>{t("slogan")}</p>

          <div className={styles.socials} aria-label={t("socialsAriaLabel")}>
            {SOCIAL_LINKS.map(({ key, href, icon: Icon }) => (
              <a key={key} href={href} aria-label={t(`socials.${key}`)} className={styles.socialLink}>
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className={styles.column}>
          <h3 className={styles.heading}>{t("contactTitle")}</h3>
          {/* PLACEHOLDER — vraies coordonnées à ajouter (pas de texte à traduire, valeurs brutes) */}
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
          <h3 className={styles.heading}>{t("navigationTitle")}</h3>
          <ul className={styles.list}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={styles.link}>
                  {t(`links.${link.key}`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* À propos */}
        <div className={styles.column}>
          <h3 className={styles.heading}>{t("aboutTitle")}</h3>
          <p className={styles.aboutText}>
            <strong>MadaTours</strong>
            {t("aboutText")}
          </p>
          <p className={styles.textSmall}>{t("aboutTextSmall")}</p>
        </div>
      </div>

      <div className={styles.copyright}>{t("copyright", { year: currentYear })}</div>
    </footer>
  );
}
