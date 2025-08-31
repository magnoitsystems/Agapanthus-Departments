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
    const checkMobile = () => window.innerWidth < 1025;
    const handleResize = () => setIsMobile(checkMobile());
    setIsMobile(checkMobile());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isActive = activeIndex === index;
  const isDimmed = !isMobile && activeIndex !== null && !isActive;

  const handleClick = () => {
    if (isMobile) {
      setActiveIndex(isActive ? null : index); 
    }
  };

  return (
    <div
      className={`${styles.item} ${styles[img.size || "square"]} ${isDimmed ? styles.dimmed : ""}`}
      onMouseEnter={!isMobile ? () => setActiveIndex(index) : undefined}
      onMouseLeave={!isMobile ? () => setActiveIndex(null) : undefined}
      onClick={isMobile ? handleClick : undefined}
      role="button"
      tabIndex={0}
    >
      <img src={img.src} alt={img.title || "gallery"} />
      {img.highlight && (
        <div className={`${styles.overlay} ${isActive ? styles.active : ""}`}>
          <h1 className={`${abyssinica.className} ${styles.title}`}>
            {img.title}
          </h1>
          
          {img.description && isActive && (
            <p className={styles.description}>{img.description}</p>
          )}
        </div>
      )}
    </div>
  );
}
