import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

// Wrappers autour des API de navigation Next.js (Link, useRouter,
// usePathname, redirect) qui connaissent la configuration de langues
// définie dans routing.ts. À utiliser PARTOUT dans les composants
// à la place des versions "next/link" et "next/navigation" classiques,
// pour que les liens/redirections gardent automatiquement le bon
// préfixe de langue (/fr/excursions, /en/excursions, /mg/excursions...).
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
