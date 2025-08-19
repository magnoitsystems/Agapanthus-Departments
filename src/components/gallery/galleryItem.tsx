import styles from "./gallery.module.css";

interface Props {
  img: {
    src: string;
    title?: string;
    description?: string;
    highlight: boolean;
  };
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
      className={`${styles.item} ${isDimmed ? styles.dimmed : ""}`}
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
