"use client";

import React, { useState } from 'react';
import styles from './ApartmentView.module.css';
import Carousel from '../carrousel/carousel';
import ApartmentDetails from '../apartmentDetails/apartmentDetails';
import ToggleButton from '../seeMoreButton/toggleButton';

const ApartmentView = () => {
    const [isDetailsView, setIsDetailsView] = useState(true);

    const toggleView = () => {
        setIsDetailsView(!isDetailsView);
    };

    return (
        <div className={styles.mainContainer}>
            <Carousel showControls={!isDetailsView} />

            <div className={styles.contentOverlay}>
                {isDetailsView ? <ApartmentDetails /> : null}
            </div>

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