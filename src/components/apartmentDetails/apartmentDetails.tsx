// components/ApartmentDetails.jsx

import React from 'react';
import styles from './ApartmentDetails.module.css';
import { apartmentFeatures } from './apartmentsData'; // Importa el arreglo de datos

const ApartmentDetails = () => {
  return (
    <div className={styles.container}>
      {/* Título y descripción */}
      <h1 className={styles.title}>Cabaña Aqua</h1>
      <p className={styles.description}>
        Ubicado entre las sierras y la ciudad, este departamento ofrece un entorno tranquilo con vistas abiertas. Dispone de espacios amplios y luminosos, equipados para una estadía confortable.
      </p>

      {/* Grid de características */}
      <div className={styles.grid}>
        {apartmentFeatures.map((feature, index) => (
          <div key={index} className={styles.gridItem}>
            <p>{feature}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApartmentDetails;