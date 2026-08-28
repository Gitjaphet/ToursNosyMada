"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Délai en ms avant le déclenchement, pour un effet en cascade entre plusieurs <Reveal>. */
  delay?: number;
}

/**
 * Fait apparaître son contenu (fondu + léger déplacement vers le haut) la
 * première fois qu'il entre dans le viewport.
 *
 * Implémenté avec Framer Motion, conformément à Animations.md §3 : une
 * apparition séquencée (plusieurs <Reveal> avec des `delay` différents,
 * ex. les cartes d'une grille) est une orchestration, pas une simple
 * micro-interaction — donc pas du CSS pur.
 *
 * Durée et courbe = tokens du projet (Animations.md §4) :
 * --duration-slow (300ms) et --ease-out (cubic-bezier(0, 0, 0.2, 1)),
 * la courbe prescrite pour "les éléments qui apparaissent".
 *
 * Respecte prefers-reduced-motion via useReducedMotion() : dans ce cas,
 * le contenu s'affiche directement, sans mouvement.
 */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.3, // --duration-slow (300ms)
        ease: [0, 0, 0.2, 1], // --ease-out
        delay: shouldReduceMotion ? 0 : delay / 1000,
      }}
    >
      {children}
    </motion.div>
  );
}
