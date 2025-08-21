"use client";
import { useState } from "react";
import styles from "./reviewsSection.module.css";
import { abyssinica } from "@/app/ui/fonts";
import { useOpiniones } from "@/hooks/useOpinions";

export default function ReviewsSection() {
  const [name, setName] = useState("");
  const [experience, setExperience] = useState("");
  const { opiniones, createOpinion } = useOpiniones();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await createOpinion({
      autor: name || "Anónimo",
      contenido: experience,
    });

    setName("");
    setExperience("");
  };

  return (
    <section className={styles.reviewsSection}>
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
                Nombre y/o apellido (sino &quot;Anónimo&quot;)
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
                Contá acá tu experiencia con &quot;Agapanthus - Cabañas Las Marias&quot;
              </span>
            </div>

            <button type="submit" className={`${styles.submitButton} ${abyssinica.className}`}>
              <h4>Enviar reseña</h4>
            </button>
          </form>
        </div>
      </div>
      
      {/* Carrusel dinámico con opiniones de DB */}
      <div className={styles.reviewsCarousel}>
        <div className={styles.scrollingWrapper}>
          <div className={styles.scrollingContent}>
            {[...opiniones, ...opiniones].map((review, index) => (
              <div key={`${review.id}-${index}`} className={styles.reviewCard}>
                <h4 className={`${styles.reviewName} ${abyssinica.className}`}>
                  {review.autor}
                </h4>
                <p className={`${styles.reviewText} ${abyssinica.className}`}>
                  {review.contenido}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
