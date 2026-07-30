import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // Les 3 langues du site — doivent correspondre aux fichiers
  // dans src/messages/ (fr.json, en.json, mg.json).
  locales: ["fr", "en", "mg"],

  // Langue utilisée si aucune ne correspond (ex. URL sans préfixe).
  defaultLocale: "fr",

  // "always" : chaque URL porte toujours son préfixe de langue,
  // y compris la langue par défaut (/fr, /en, /mg — jamais de "/" nu).
  // Choix volontaire pour rester explicite dans les 3 langues,
  // plutôt que "as-needed" qui masquerait le préfixe pour le
  // français par défaut.
  localePrefix: "always",
});
