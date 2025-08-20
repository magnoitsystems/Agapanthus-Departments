import SecondNavBar from "@/components/navBars/secondNavBar/secondNavBar";
import ToggleButton from "@/components/seeMoreButton/toggleButton";
import styles from "./page.module.css";
import Carousel from "@/components/carrousel/carousel";
import ApartmentView from "@/components/apartmentView/apartmentView";
import { Suspense } from "react";

export default function Page() {
  return (
    <main className={styles.main}>
      <SecondNavBar />
       <Suspense fallback={<div>Cargando...</div>}>
        <ApartmentView />
      </Suspense>
    </main>
  );
}
