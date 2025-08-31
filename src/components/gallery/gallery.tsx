"use client";
import { useState } from "react";
import styles from "./gallery.module.css";
import GalleryItem, { GalleryImage } from "./galleryItem";

const images: GalleryImage[] = [
  {
    src: "images/flowers.jpg",
    title: "Ubicación privilegiada",
    description: "Zona tranquila y libre de ruidos molestos, ideal para descansar.",
    highlight: true,
    size: "large", 
  },
  {
    src: "images/park.jpg",
    highlight: false,
    size: "square",
  },
  {
    src: "images/pool.jpg",
    highlight: false,
    size: "square", 
  },
  {
    src: "images/sunset.jpg",
    highlight: false,
    size: "horizontal", 
  },
  {
    src: "images/sunset2.jpg",
    title: "Parking",
    description: "Estacionamiento propio y sin costo adicional.",
    highlight: true,
    size: "horizontal", 
  },
  {
    src: "images/flowers.jpg",
    title: "Estadía Pet-Friendly",
    description: "Estadía pet-friendly para que disfrutes de Tandil junto a tu mascota.",
    highlight: true,
    size: "large", 
  },
  {
    src: "images/flowers.jpg",
    highlight: false,
    size: "square", 
  },
  {
    src: "images/pool.jpg",
    highlight: false,
    size: "square", 
  },
  {
    src: "images/sunset.jpg",
    highlight: false,
    size: "square", 
  },
  {
    src: "images/sunset2.jpg",
    highlight: false,
    size: "square", 
  },
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  return (
    <div className={styles.grid}>
      {images.map((img, i) => (
        <GalleryItem
          key={i}
          index={i}
          img={img}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      ))}
    </div>
  );
}
