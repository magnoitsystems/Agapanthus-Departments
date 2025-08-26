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

    const textVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className={styles.sectionsBar}>
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

            <div className={styles.section}
                 onClick={() => scrollToSection('cabanas')}>
                <motion.h3
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.6, delay: 0.4 }}
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
        </div>
    );
}