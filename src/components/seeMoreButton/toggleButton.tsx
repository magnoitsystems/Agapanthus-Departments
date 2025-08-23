// components/toggleButton.tsx

"use client";

import styles from './toggleButton.module.css';
import { abyssinica } from '@/app/ui/fonts'; 

const ArrowDown = () => (
    <svg className={styles.arrowIcon} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
        <path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z"/>
    </svg>
);

const ArrowUp = () => (
    <svg className={styles.arrowIcon} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
        <path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z"/>
    </svg>
);

type Props = {
    isDetailsView: boolean;
    onClick: () => void;
};

export default function ToggleButton({ isDetailsView, onClick }: Props) {
    return (
        <button className={`${styles.toggleButton} ${abyssinica.className}`} onClick={onClick}>
            <span className={styles.buttonText}>
                {isDetailsView ? "Ver imágenes" : "Ver detalles"}
            </span>
            {isDetailsView ? <ArrowUp /> : <ArrowDown />}
        </button>
    );
}