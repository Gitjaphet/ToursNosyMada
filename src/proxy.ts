import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Applique le proxy à toutes les routes, sauf : API, fichiers internes
  // Next.js, et fichiers statiques (ceux avec une extension, ex. .svg).
  matcher: "/((?!api|_next|_vercel|.*\\..*).*)",
};
