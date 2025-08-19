'use client';

import { useState } from 'react';
import styles from "@/components/navBars/mainNavBar/mainNavBar.module.css";

export default function SectionsBar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <main className={styles.sectionsBar}>
            <div className={`${styles.section} ${styles.classic}`}>
                <h3>Nuestro complejo</h3>
            </div>

            <div
                className={`${styles.section} ${styles.dropdown} ${isDropdownOpen ? styles.open : ''}`}
                onClick={toggleDropdown}
            >
                <div className={styles.mainInfo}>
                    <h3>Cabañas {isDropdownOpen ? '▴' : '▾'}</h3>
                </div>

                <div className={`${styles.deptos} ${isDropdownOpen ? styles.show : ''}`}>
                    <h3>AQUA - 3 personas</h3>
                    <h3>LAVANDA - 5 personas</h3>
                </div>
            </div>

            <div className={`${styles.section} ${styles.classic}`}>
                <h3>Reservas</h3>
            </div>
        </main>
    );
}