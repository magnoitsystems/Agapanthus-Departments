"use client";
import { useState } from "react";
import styles from "./reviewsSection.module.css";
import { abyssinica } from "@/app/ui/fonts";

interface Review {
  id: number;
  name: string;
  text: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Agostina Bidegain",
    text: "Hermosa estadía. Fui con mis familia y nos quedamos enamorados de Tandil!"
  },
  {
    id: 2,
    name: "Martín González",
    text: "Excelente ubicación y comodidad. Los departamentos están muy bien equipados."
  },
  {
    id: 3,
    name: "Laura Fernández",
    text: "Perfecto para descansar en familia. El trato fue excepcional y volveremos pronto."
  },
  {
    id: 4,
    name: "Carlos Rodríguez",
    text: "Muy cómodo y limpio. La atención al cliente es de primera calidad."
  },
  {
    id: 5,
    name: "Ana María López",
    text: "Una experiencia increíble. Tandil es hermoso y el lugar perfecto para hospedarse."
  },
  {
    id: 6,
    name: "Diego Morales",
    text: "Recomendado 100%. Las instalaciones son excelentes y la ubicación privilegiada."
  }
];

export default function ReviewsSection() {
  const [name, setName] = useState("");
  const [experience, setExperience] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Nueva reseña:", { name, experience });
    setName("");
    setExperience("");
  };

  return (
    <section className={styles.reviewsSection}>
      {/* El contenido del header y el formulario permanece dentro del contenedor para centrarlo */}
      <div className={styles.container}>
        {/* Título principal */}
        <div className={styles.header}>
          <h2 className={`${styles.title} ${abyssinica.className}`}>
            Si nos conocés dejanos un comentario sobre tu experiencia.
          </h2>
          <h3 className={`${styles.subtitle} ${abyssinica.className}`}>
            Y si no, ¡Te invitamos a conocernos!
          </h3>
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
                required
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
                  target.style.height = 'auto';
                  target.style.height = target.scrollHeight + 'px';
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
              Enviar Reseña
            </button>
          </form>
        </div>
      </div>
      
      {/* El carrusel se mueve fuera del contenedor para que ocupe el 100% del ancho */}
      <div className={styles.reviewsCarousel}>
        <div className={styles.scrollingWrapper}>
          <div className={styles.scrollingContent}>
            {[...reviews, ...reviews].map((review, index) => (
              <div key={`${review.id}-${index}`} className={styles.reviewCard}>
                <h4 className={`${styles.reviewName} ${abyssinica.className}`}>
                  {review.name}
                </h4>
                <p className={`${styles.reviewText} ${abyssinica.className}`}>
                  {review.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
