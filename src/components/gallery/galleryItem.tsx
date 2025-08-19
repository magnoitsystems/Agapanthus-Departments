import styles from "./gallery.module.css";

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
  const isActive = activeIndex === index;
  const isDimmed = activeIndex !== null && !isActive;

  return (
    <div
      className={`${styles.item} ${styles[img.size || "square"]} ${
        isDimmed ? styles.dimmed : ""
      }`}
      onMouseEnter={() => setActiveIndex(index)}
      onMouseLeave={() => setActiveIndex(null)}
    >
      <img src={img.src} alt={img.title || "gallery"} />
      {img.highlight && (
        <div className={`${styles.overlay} ${isActive ? styles.active : ""}`}>
          <h3>{img.title}</h3>
          {isActive && img.description && <p>{img.description}</p>}
        </div>
      )}
    </div>
  );
}
