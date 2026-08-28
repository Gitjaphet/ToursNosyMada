"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { FaInstagram, FaYoutube, FaWhatsapp, FaFacebookF, FaPhone } from "react-icons/fa6";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/ui/Reveal";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import styles from "./page.module.css";

// Mêmes réseaux que le Footer — PLACEHOLDER, vraies coordonnées à ajouter
// une fois fournies (voir Footer.tsx pour le même avertissement).
const SOCIAL_LINKS = [
  { key: "instagram", href: "#", icon: FaInstagram },
  { key: "whatsapp", href: "#", icon: FaWhatsapp },
  { key: "facebook", href: "#", icon: FaFacebookF },
  { key: "youtube", href: "#", icon: FaYoutube },
] as const;

const PHONE_NUMBER = "+261 00 00 000 00"; // PLACEHOLDER — même numéro que le Footer

interface FormValues {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactPage() {
  const t = useTranslations("Contact");
  const tFooter = useTranslations("Footer");

  const [values, setValues] = useState<FormValues>({
    name: "",
    email: "",
    phone: "",
    subject: "general",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange<K extends keyof FormValues>(key: K, value: string) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  function validate(): FormErrors {
    const next: FormErrors = {};
    if (!values.name.trim()) next.name = t("form.errors.nameRequired");
    if (!values.email.trim()) next.email = t("form.errors.emailRequired");
    else if (!EMAIL_PATTERN.test(values.email)) next.email = t("form.errors.emailInvalid");
    if (!values.message.trim()) next.message = t("form.errors.messageRequired");
    return next;
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    // Pas d'envoi réel pour l'instant : le backend (fourni par le mentor)
    // n'existe pas encore — voir Features/Contact.md §1. On se contente de
    // valider le formulaire et de confirmer visuellement à l'utilisateur.
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
    }
  }

  const subjectOptions = [
    { value: "general", label: t("form.subjectOptions.general") },
    { value: "booking", label: t("form.subjectOptions.booking") },
  ];

  return (
    <>
      <Header />
      <main className={styles.main}>
        <Reveal>
          <span className={styles.eyebrow}>{t("eyebrow")}</span>
          <h1 className={styles.title}>{t("pageTitle")}</h1>
          <p className={styles.intro}>{t("pageIntro")}</p>
        </Reveal>

        <div className={styles.layout}>
          <Reveal className={styles.formCard}>
            {submitted ? (
              <div className={styles.success}>
                <h2 className={styles.successTitle}>{t("form.successTitle")}</h2>
                <p className={styles.successMessage}>{t("form.successMessage")}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className={styles.form}>
                <Input
                  label={t("form.nameLabel")}
                  placeholder={t("form.namePlaceholder")}
                  value={values.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  error={errors.name}
                  required
                />
                <Input
                  type="email"
                  label={t("form.emailLabel")}
                  placeholder={t("form.emailPlaceholder")}
                  value={values.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  error={errors.email}
                  required
                />
                <Input
                  type="tel"
                  label={t("form.phoneLabel")}
                  placeholder={t("form.phonePlaceholder")}
                  value={values.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                />
                <Select
                  label={t("form.subjectLabel")}
                  options={subjectOptions}
                  value={values.subject}
                  onChange={(e) => handleChange("subject", e.target.value)}
                />
                <Textarea
                  label={t("form.messageLabel")}
                  placeholder={t("form.messagePlaceholder")}
                  value={values.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  error={errors.message}
                  required
                  rows={6}
                />
                <Button type="submit" fullWidth>
                  {t("form.submit")}
                </Button>
              </form>
            )}
          </Reveal>

          <Reveal delay={100} className={styles.sidebar}>
            <h2 className={styles.sidebarTitle}>{t("sidebar.title")}</h2>

            <a href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`} className={styles.phoneLink}>
              <FaPhone aria-hidden="true" />
              <span>
                <span className={styles.phoneLabel}>{t("sidebar.phoneLabel")}</span>
                <span className={styles.phoneNumber}>{PHONE_NUMBER}</span>
              </span>
            </a>

            <h3 className={styles.socialsTitle}>{t("sidebar.socialsTitle")}</h3>
            <div className={styles.socials}>
              {SOCIAL_LINKS.map(({ key, href, icon: Icon }) => (
                <a key={key} href={href} aria-label={tFooter(`socials.${key}`)} className={styles.socialLink}>
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </main>
      <Footer />
    </>
  );
}
