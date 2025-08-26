"use client";
import { useState } from "react";
import styles from "./gallery.module.css";
import GalleryItem, { GalleryImage } from "./galleryItem";

const images: GalleryImage[] = [
  {
    src: "testImages/interactiveGallery/item4.webp",
    title: "Ubicación privilegiada",
    description: "Zona tranquila y libre de ruidos molestos, ideal para descansar.",
    highlight: true,
    size: "large", 
  },
  {
    src: "testImages/interactiveGallery/item8.jpeg",
    highlight: false,
    size: "square",
  },
  {
    src: "testImages/interactiveGallery/item3.jpeg",
    highlight: false,
    size: "square", 
  },
  {
    src: "testImages/interactiveGallery/item11.webp",
    highlight: false,
    size: "horizontal", 
  },
  {
    src: "testImages/interactiveGallery/item7.jpg",
    title: "Parking",
    description: "Estacionamiento propio y sin costo adicional.",
    highlight: true,
    size: "horizontal", 
  },
  {
    src: "testImages/interactiveGallery/item5.jpg",
    title: "Estadía Pet-Friendly",
    description: "Estadía pet-friendly para que disfrutes de Tandil junto a tu mascota.",
    highlight: true,
    size: "large", 
  },
  {
    src: "testImages/interactiveGallery/item6.webp",
    highlight: false,
    size: "square", 
  },
  {
    src: "testImages/interactiveGallery/item9.jpeg",
    highlight: false,
    size: "square", 
  },
  {
    src: "testImages/interactiveGallery/item10.webp",
    highlight: false,
    size: "square", 
  },
  {
    src: "testImages/interactiveGallery/item12.jpg",
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
