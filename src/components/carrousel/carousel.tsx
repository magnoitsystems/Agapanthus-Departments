// components/carousel.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./carousel.module.css";

// 👉 asegurate de tener estos arrays en apartmentsData
import {
  aquaImages,
  lavandaImages,
  DEFAULT_IMAGES,
} from "../apartmentDetails/apartmentsData";

type Props = {
  images?: string[];
  autoplayMs?: number;
  showControls?: boolean;
};

export default function Carousel({
  images,
  autoplayMs = 0,
  showControls = true,
}: Props) {
  const searchParams = useSearchParams();
  const cabinId = searchParams.get("id"); // "1" | "2" | null

  // 1) decides cuál set de imágenes usar
  const imgs = useMemo(() => {
    if (images && images.length) return images;           // override por prop
    if (cabinId === "2") return lavandaImages;
    if (cabinId === "1") return aquaImages;
    return DEFAULT_IMAGES;                                 // fallback
  }, [images, cabinId]);

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  // 2) si cambia el set de imágenes (o navegas a otra cabaña), resetea índice
  useEffect(() => {
    setIndex(0);
  }, [imgs]);

  const next = () => {
    setDirection(1);
    setIndex((i) => (i + 1) % imgs.length);
  };
  const prev = () => {
    setDirection(-1);
    setIndex((i) => (i - 1 + imgs.length) % imgs.length);
  };

  // 3) autoplay
  useEffect(() => {
    if (!autoplayMs) return;
    const id = setInterval(next, autoplayMs);
    return () => clearInterval(id);
  }, [autoplayMs, imgs.length]);

  // 4) teclas
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <div className={styles.bg}>
        <AnimatePresence mode="popLayout" custom={direction}>
          <motion.img
            key={index}
            src={imgs[index]}
            alt=""
            className={styles.bgImg}
            custom={direction}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
              opacity: { duration: 0.4 },
              scale: { duration: 0.6 },
            }}
          />
        </AnimatePresence>
      </div>

      {showControls && (
        <div className={styles.controls} role="group" aria-label="Controles del carrusel">
          <button className={styles.chev} onClick={prev} aria-label="Anterior">‹</button>
          <div className={styles.dots} role="tablist" aria-label="Paginación">
            {imgs.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === index ? styles.active : ""}`}
                onClick={() => {
                  setDirection(i > index ? 1 : -1);
                  setIndex(i);
                }}
                aria-label={`Ir a la imagen ${i + 1}`}
                aria-current={i === index ? "true" : undefined}
              />
            ))}
          </div>
          <button className={styles.chev} onClick={next} aria-label="Siguiente">›</button>
        </div>
      )}
    </>
  );
}
