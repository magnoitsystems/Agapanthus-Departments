import styles from './mainNavBar.module.css';
import Image from 'next/image';
import SectionsBar from "@/components/navBars/mainNavBar/sectionsBar";

export default function MainNavBar() {
    return (
      <main className={styles.main}>
        <nav className={styles.nav}>
          <Image
            src={"/logos/blanco.png"}
            alt={"logo rectangular de Agapanthus - Cabañas Las Marias"}
            width={444}
            height={85}
          />
        </nav>

        <SectionsBar/>
      </main>
    );
}