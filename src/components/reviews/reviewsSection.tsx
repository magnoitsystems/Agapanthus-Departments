"use client";

import { useState, useRef, useCallback } from "react";
import styles from "./reviewsSection.module.css";
import { abyssinica } from "@/app/ui/fonts";
import { useOpiniones } from "@/hooks/useOpinions";
import { motion } from "framer-motion";

const ChevronLeft = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m15 18-6-6 6-6" />
  </svg>
);

const ChevronRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);

export default function ReviewsSection() {
  const [name, setName] = useState("");
  const [experience, setExperience] = useState("");
  const { opiniones, createOpinion } = useOpiniones();

  const [showAlert, setShowAlert] = useState(false);
  const [buttonText, setButtonText] = useState("Enviar reseña");
  const [buttonActive, setButtonActive] = useState(false);

  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = useCallback((direction: "left" | "right") => {
    if (carouselRef.current) {
      const reviewCard = carouselRef.current.querySelector(`.${styles.reviewCard}`) as HTMLElement;
      
      const cardWidth = reviewCard ? reviewCard.offsetWidth : carouselRef.current.clientWidth;
      const gap = 20; 
      
      const scrollAmount = direction === "right" 
        ? cardWidth + gap 
        : -(cardWidth + gap);

      carouselRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await createOpinion({
        autor: name || "Anónimo",
        contenido: experience,
      });

      setName("");
      setExperience("");

      setButtonText("Reseña enviada exitosamente");
      setButtonActive(true);

      setTimeout(() => {
        setButtonText("Enviar reseña");
        setButtonActive(false);
      }, 3000);

      setShowAlert(true);
    } catch (error) {
      console.error("Error al crear la opinión:", error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }} 
    >
      <main className={styles.reviewsSection}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={`${styles.title} ${abyssinica.className}`}>
              Si nos conocés dejanos un comentario sobre tu experiencia.
            </h1>
            <h1 className={`${styles.subtitle} ${abyssinica.className}`}>
              Y si no, ¡Te invitamos a conocernos!
            </h1>
          </div>

          <div className={styles.formSection}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  placeholder="Acá tu nombre"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`${styles.input} ${styles.nameInput}`}
                />
                <span className={styles.inputLabel}>
                  {" "}
                  Nombre y/o apellido (sino &quot;Anónimo&quot;){" "}
                </span>
              </div>

              <div className={styles.inputGroup}>
                <textarea
                  placeholder="Acá tu experiencia"
                  value={experience}
                  onChange={(e) => {
                    setExperience(e.target.value);
                    const target = e.target as HTMLTextAreaElement;
                    target.style.height = "auto";
                    target.style.height = target.scrollHeight + "px";
                  }}
                  className={`${styles.input} ${styles.experienceInput}`}
                  rows={2}
                  required
                />
                <span className={styles.inputLabel}>
                  Contá acá tu experiencia con &quot;Agapanthus - Cabañas Las
                  Marias&quot;
                </span>
              </div>

              <button
                type="submit"
                className={`${styles.submitButton} ${
                  abyssinica.className
                } ${buttonActive ? styles.activeButton : ""}`}
              >
                <h4>{buttonText}</h4>
              </button>
            </form>
          </div>
        </div>

        <div className={styles.reviewsCarousel}>
          {opiniones.length > 0 && (
            <button
              className={`${styles.navButton} ${styles.prevButton}`}
              onClick={() => scrollCarousel("left")}
              aria-label="Anterior reseña"
            >
              <ChevronLeft />
            </button>
          )}

          <div className={styles.scrollingWrapper} ref={carouselRef}>
            <div className={styles.scrollingContent}>
              {opiniones.map((review) => (
                <div key={review.id} className={styles.reviewCard}>
                  <h4
                    className={`${styles.reviewName} ${abyssinica.className}`}
                  >
                    {" "}
                    {review.autor}{" "}
                  </h4>{" "}
                  <p
                    className={`${styles.reviewText} ${abyssinica.className}`}
                  >
                    {" "}
                    {review.contenido}{" "}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {opiniones.length > 0 && (
            <button
              className={`${styles.navButton} ${styles.nextButton}`}
              onClick={() => scrollCarousel("right")}
              aria-label="Siguiente reseña"
            >
              <ChevronRight />
            </button>
          )}
        </div>
      </main>
    </motion.div>
  );
}