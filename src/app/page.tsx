import styles from "./page.module.css";
import MainNavBar from "@/components/navBars/mainNavBar/mainNavBar";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.nav}>
          <MainNavBar/>
          <Footer />
      </div>
    </div>
  );
}
