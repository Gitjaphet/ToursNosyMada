"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";

interface SafeImageProps extends Omit<ImageProps, "onError" | "src"> {
  src: string;
  /** Image affichée automatiquement si `src` ne charge pas (ex. gallery-3.jpg pas encore pris). */
  fallbackSrc: string;
}

/**
 * Wrapper autour de next/image qui bascule sur `fallbackSrc` si l'image
 * demandée n'existe pas encore sur le disque. Pratique pendant la période
 * où les vraies photos sont ajoutées progressivement : le site ne casse
 * jamais, il affiche juste le placeholder en attendant.
 */
export function SafeImage({ src, fallbackSrc, alt, ...rest }: SafeImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);

  return (
    <Image
      {...rest}
      src={currentSrc}
      alt={alt}
      onError={() => {
        if (currentSrc !== fallbackSrc) setCurrentSrc(fallbackSrc);
      }}
    />
  );
}
