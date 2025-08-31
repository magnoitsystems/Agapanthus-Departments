import styles from "./gallery.module.css";
import { abyssinica } from "@/app/ui/fonts";
import { useEffect, useState } from "react";

export type ImageSize = "square" | "horizontal" | "vertical" | "large";

export interface GalleryImage {
  src: string;
  title?: string;
  description?: string;
  highlight: boolean;
  size?: ImageSize;
}

interface Props {
  img: GalleryImage;
  index: number;
  activeIndex: number | null;
  setActiveIndex: (index: number | null) => void;
}

export default function GalleryItem({
  img,
  index,
  activeIndex,
  setActiveIndex,
}: Props) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // detecta mobile una sola vez al montar
    const checkMobile = () => window.innerWidth < 1025;
    setIsMobile(checkMobile());
    window.addEventListener("resize", () => setIsMobile(checkMobile()));
    return () =>
      window.removeEventListener("resize", () => setIsMobile(checkMobile()));
  }, []);

  const isActive = activeIndex === index;

  const handleClick = () => {
    if (isMobile) {
      setActiveIndex(isActive ? null : index); // toggle en mobile
    }
  };

  return (
    <div
      className={`${styles.item} ${styles[img.size || "square"]}`}
      onMouseEnter={!isMobile ? () => setActiveIndex(index) : undefined}
      onMouseLeave={!isMobile ? () => setActiveIndex(null) : undefined}
      onClick={isMobile ? handleClick : undefined}
    >
      <img src={img.src} alt={img.title || "gallery"} />
      {img.highlight && (
        <div className={`${styles.overlay} ${isActive ? styles.active : ""}`}>
          <h1 className={`${abyssinica.className} ${styles.title}`}>
            {img.title}
          </h1>
          {isActive && img.description && (
            <p className={styles.description}>{img.description}</p>
          )}
        </div>
      )}
    </div>
  );
}
