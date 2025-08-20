"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./carousel.module.css";

const images = [
  "/testImages/interactiveGallery/item1.jpeg",
  "/testImages/interactiveGallery/item2.jpeg",
  "/testImages/interactiveGallery/item3.jpeg",
  "/testImages/interactiveGallery/item4.webp",
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className={styles.carousel}>
      {/* Flecha izquierda */}
      <button onClick={prevImage} className={`${styles.arrow} ${styles.left}`}>
        ‹
      </button>

      {/* Imagen con animación */}
      <div className={styles.imageContainer}>
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={images[current]}
            alt={`Imagen ${current + 1}`}
            className={styles.image}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          />
        </AnimatePresence>
      </div>

      {/* Flecha derecha */}
      <button onClick={nextImage} className={`${styles.arrow} ${styles.right}`}>
        ›
      </button>

      {/* Indicadores */}
      <div className={styles.dots}>
        {images.map((_, index) => (
          <div
            key={index}
            className={`${styles.dot} ${
              index === current ? styles.active : ""
            }`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>

      {/* Botón Ver detalles */}
      <div className={styles.detailsBtn}>
        <button>Ver detalles ↓</button>
      </div>
    </div>
  );
}
