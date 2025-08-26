import styles from './mainNavBar.module.css';
import Image from 'next/image';
import SectionsBar from "@/components/navBars/mainNavBar/sectionsBar";

export default function MainNavBar() {
    return (
      <main className={styles.main}>
        {/* Video de fondo - Mobile */}
        <video 
            className={`${styles.backgroundVideo} ${styles.mobileVideo}`}
            autoPlay 
            muted 
            loop 
            playsInline
            preload="auto"
        >
            <source src="/videos/agapanthus_vertical.mp4" type="video/mp4" />
            {/* Fallback para navegadores que no soporten el video por las dudas*/}
            <img src="/testImages/navBarBackground.jpg" alt="Agapanthus Background" />
        </video>

        {/* Video de fondo - Desktop variant*/}
        <video 
            className={`${styles.backgroundVideo} ${styles.desktopVideo}`}
            autoPlay 
            muted 
            loop 
            playsInline
            preload="auto"
        >
            <source src="/videos/agapanthus_horizontal.mp4" type="video/mp4" />
            {/* Fallback para navegadores que no soporten el video */}
            <img src="/testImages/navBarBackground.jpg" alt="Agapanthus Background" />
        </video>

        {/* Overlay opcional para mejor legibilidad del texto */}
        <div className={styles.videoOverlay}></div>

        {/* NAV BAR CON LOGO */}
        <nav className={styles.nav}>
          <Image
            src={"/logos/white.png"}
            alt={"logo rectangular de Agapanthus - Cabañas Las Marias"}
            width={418}
            height={100}
            className={styles.desktopImage}
          />

            <Image
                src={"/logos/white.png"}
                alt={"logo rectangular de Agapanthus - Cabañas Las Marias"}
                width={334}
                height={80}
                className={styles.mobileImage}
            />
        </nav>

        {/* SECTIONS BAR */}
        <SectionsBar/>
      </main>
    );
}