"use client";

import { useServerInsertedHTML } from "next/navigation";

const THEME_INIT_SCRIPT = `
  (function() {
    try {
      var theme = localStorage.getItem('madatours-theme');
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      }
    } catch (e) {}
  })();
`;

/**
 * Injecte le script d'initialisation du thème (avant le premier rendu,
 * pour éviter un flash du mauvais thème) EN DEHORS de l'arbre React
 * normal, via useServerInsertedHTML — plutôt que via next/script.
 *
 * Pourquoi : depuis Next.js 16.2 / React 19, un <script> rendu par un
 * composant React (y compris via next/script en beforeInteractive)
 * déclenche l'avertissement "Encountered a script tag while rendering
 * React component." C'est un faux positif documenté et reconnu comme
 * tel par l'équipe de shadcn/ui elle-même (issue #10104) — le script
 * s'exécute correctement, seul le message est trompeur. Le même
 * problème touche next-themes (issues #385, #387) et d'autres
 * librairies (HeroUI, MUI Base UI). useServerInsertedHTML insère le
 * HTML directement dans le flux de rendu serveur, sans jamais passer
 * par la réconciliation React côté client — ce qui évite l'avertissement
 * à la racine plutôt que de le masquer.
 */
export function ThemeInit() {
  useServerInsertedHTML(() => (
    <script id="theme-init" dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
  ));
  return null;
}
