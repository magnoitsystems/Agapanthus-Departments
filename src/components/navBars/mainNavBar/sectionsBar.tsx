'use client';

import { useState } from 'react';
import styles from "@/components/navBars/mainNavBar/mainNavBar.module.css";

export default function SectionsBar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const scrollToSection = (id: string) => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    };


    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <main className={styles.sectionsBar}>
            <div className={`${styles.section} ${styles.classic}`} onClick={() => scrollToSection('nuestro-complejo')}>
                <h3>Nuestro complejo</h3>
            </div>

            <div className={styles.section}>
                {/*<div className={styles.mainInfo}>*/}
                    <h3 onClick={() => scrollToSection('cabanas')}>Cabañas</h3>
                    {/*</div>*/}
                {/*<div className={`${styles.deptos} ${isDropdownOpen ? styles.show : ''}`}>
                    <h3>AQUA - 3 personas</h3>
                    <h3>LAVANDA - 5 personas</h3>
                </div>*/}
            </div>

            <div className={`${styles.section} ${styles.classic}`} onClick={() => scrollToSection('reservas')}>
                <h3>Reservas</h3>
            </div>
        </main>
    );
}