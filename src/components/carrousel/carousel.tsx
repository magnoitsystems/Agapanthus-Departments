"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./carousel.module.css";

type Props = {
  images?: string[];
  autoplayMs?: number; // opcional
};

const DEFAULT_IMAGES = [
  "/testImages/interactiveGallery/item1.jpeg",
  "/testImages/interactiveGallery/item2.jpeg",
  "/testImages/interactiveGallery/item3.jpeg",
  "/testImages/interactiveGallery/item4.webp",
  "/testImages/interactiveGallery/item5.jpg",
  "/testImages/interactiveGallery/item6.webp",
  "/testImages/interactiveGallery/item7.jpg",
];

export default function Carousel({ images = DEFAULT_IMAGES, autoplayMs = 0 }: Props) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const next = () => { setDirection(1); setIndex((i) => (i + 1) % images.length); };
  const prev = () => { setDirection(-1); setIndex((i) => (i - 1 + images.length) % images.length); };

  useEffect(() => {
    if (!autoplayMs) return;
    const id = setInterval(next, autoplayMs);
    return () => clearInterval(id);
  }, [autoplayMs, images.length]);

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
      {/* Fondo a pantalla completa */}
      <div className={styles.bg}>
        <AnimatePresence mode="wait" custom={direction}>
          <motion.img
            key={index}
            src={images[index]}
            alt=""
            className={styles.bgImg}
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? 60 : -60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -60 : 60 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
        </AnimatePresence>
      </div>

      {/* Controles (pill con flechas + puntitos) */}
      <div className={styles.controls} role="group" aria-label="Controles del carrusel">
        <button className={styles.chev} onClick={prev} aria-label="Anterior">‹</button>

        <div className={styles.dots} role="tablist" aria-label="Paginación">
          {images.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === index ? styles.active : ""}`}
              onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
              aria-label={`Ir a la imagen ${i + 1}`}
              aria-current={i === index ? "true" : undefined}
            />
          ))}
        </div>

        <button className={styles.chev} onClick={next} aria-label="Siguiente">›</button>
      </div>
    </>
  );
}
