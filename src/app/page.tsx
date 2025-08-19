import Image from "next/image";
import styles from "./page.module.css";
import MainNavBar from "@/components/navBars/mainNavBar/mainNavBar";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.nav}>
          <MainNavBar/>
      </div>
    </div>
  );
}
