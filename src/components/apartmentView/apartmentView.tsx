"use client";

import React, { useState } from 'react';
import { useSearchParams } from "next/navigation";
import styles from './apartmentView.module.css';
import Carousel from '../carrousel/carousel';
import ApartmentDetails from '../apartmentDetails/apartmentDetails';
import ToggleButton from '../seeMoreButton/toggleButton';
import { aqua, lavanda, aquaImages, lavandaImages } from "../apartmentDetails/apartmentsData";

const ApartmentView = () => {
  const [isDetailsView, setIsDetailsView] = useState(true);
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const details = id === "2" ? lavanda : aqua;
  const images  = id === "2" ? lavandaImages : aquaImages;
  const title   = id === "2" ? "Cabaña Lavanda" : "Cabaña Aqua";

  const toggleView = () => setIsDetailsView(!isDetailsView);

  return (
    <div className={styles.mainContainer}>
      {/* ApartmentView */}
      <Carousel images={images} showControls={!isDetailsView} dimmed={isDetailsView} />

      <div className={styles.contentOverlay}>
        {isDetailsView && <ApartmentDetails title={title} details={details} />}
      </div>

      <div className={styles.buttonContainer}>
        <ToggleButton isDetailsView={isDetailsView} onClick={toggleView} />
      </div>
    </div>
  );
};

export default ApartmentView;
