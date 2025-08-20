// components/ApartmentView.jsx

"use client";

import React, { useState } from 'react';
import styles from './ApartmentView.module.css';
import Carousel from '../carrousel/carousel';
import ApartmentDetails from '../apartmentDetails/apartmentDetails';
import ToggleButton from '../seeMoreButton/toggleButton';

const ApartmentView = () => {
    // Estado para gestionar la vista: true = "Ver detalles", false = "Ver imágenes"
    const [isDetailsView, setIsDetailsView] = useState(true);

    const toggleView = () => {
        setIsDetailsView(!isDetailsView);
    };

    return (
        <div className={styles.mainContainer}>
            {/* El carrusel siempre se renderiza en el fondo */}
            <Carousel showControls={!isDetailsView} />

            {/* Renderizado condicional del contenido */}
            <div className={styles.contentOverlay}>
                {isDetailsView ? <ApartmentDetails /> : null}
            </div>

            {/* Botón de alternancia, fuera del carrusel para que no sea afectado por el z-index */}
            <div className={styles.buttonContainer}>
                <ToggleButton 
                    isDetailsView={isDetailsView} 
                    onClick={toggleView} 
                />
            </div>
        </div>
    );
};

export default ApartmentView;