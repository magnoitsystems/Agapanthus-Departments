import SecondNavBar from "@/components/navBars/secondNavBar/secondNavBar";
import ToggleButton from "@/components/seeMoreButton/toggleButton";
import styles from "./page.module.css";
import Carousel from "@/components/carrousel/carousel";

export default function Page() {
  return (
    <main className={styles.main}>
      <SecondNavBar />
      <Carousel />
      <div className={styles.toggleButtonContainer}>
        <ToggleButton />
      </div>
    </main>
  );
}
