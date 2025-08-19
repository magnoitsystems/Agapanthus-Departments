import styles from "./page.module.css";
import MainNavBar from "@/components/navBars/mainNavBar/mainNavBar";
import Welcome from "@/components/welcome/welcome";
import Footer from "@/components/footer/footer"

export default function Home() {
  return (
    <div className={styles.page}>
        <MainNavBar/>
        <Welcome/>
        <Footer />
    </div>
  );
}
