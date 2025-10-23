"use client";
import { useState } from "react";
import styles from "./gallery.module.css";
import GalleryItem, { GalleryImage } from "./galleryItem";

const images: GalleryImage[] = [
  {
    src: "complejo/IMG_0718.JPG",
    title: "Ubicación privilegiada",
    description: "Zona tranquila y libre de ruidos molestos, ideal para descansar.",
    highlight: true,
    size: "large", 
  },
  {
    src: "complejo/IMG_0706.JPG",
    highlight: false,
    size: "square",
  },
  {
    src: "complejo/IMG_0710.JPG",
    highlight: false,
    size: "square", 
  },
  {
    src: "dptos/aqua/IMG_0654.JPG",
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
    src: "complejo/IMG_0720.JPG",
    title: "Estadía Pet-Friendly",
    description: "Estadía pet-friendly para que disfrutes de Tandil junto a tu mascota.",
    highlight: true,
    size: "large", 
  },
  {
    src: "images/sunset.jpg",
    highlight: false,
    size: "square", 
  },
  {
    src: "complejo/IMG_0711.JPG",
    highlight: false,
    size: "square", 
  },
  {
    src: "dptos/aqua/IMG_0691.JPG",
    highlight: false,
    size: "square", 
  },
  {
    src: "dptos/lavanda/IMG_0641.JPG",
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
