'use client';

import { useState } from 'react';
import { motion } from "framer-motion";
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

    // Variants para los textos
    const textVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <main className={styles.sectionsBar}>
            <div className={`${styles.section} ${styles.classic}`} onClick={() => scrollToSection('nuestro-complejo')}>
                <motion.h3
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Nuestro complejo
                </motion.h3>
            </div>

            <div className={styles.section}>
                <motion.h3
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.6, delay: 0.4 }}
                    onClick={() => scrollToSection('cabanas')}
                >
                    Cabañas
                </motion.h3>
            </div>

            <div className={`${styles.section} ${styles.classic}`} onClick={() => scrollToSection('reservas')}>
                <motion.h3
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    Reservas
                </motion.h3>
            </div>
        </main>
    );
}
