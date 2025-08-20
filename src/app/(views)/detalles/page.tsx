import SecondNavBar from "@/components/navBars/secondNavBar/secondNavBar";
import styles from "./page.module.css";
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
