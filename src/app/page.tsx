import styles from "./page.module.css";
import MainNavBar from "@/components/navBars/mainNavBar/mainNavBar";
import Welcome from "@/components/welcome/welcome";

export default function Home() {
  return (
    <div className={styles.page}>
        <MainNavBar/>

        <Welcome/>
    </div>
  );
}
