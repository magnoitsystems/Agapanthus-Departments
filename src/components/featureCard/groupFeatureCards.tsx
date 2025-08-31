'use client'

import styles from './featureCard.module.css';
import FeatureCard from "@/components/featureCard/featureCard";
import { motion } from "framer-motion";

export default function GroupFeatureCards() {
    return (
        <motion.main
            className={styles.container}
            initial={{y: 100, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.8, ease: "easeOut"}}
            viewport={{once: true, amount: 0.3}}
        >
            <div className={styles.card}>
                <FeatureCard
                    src={'/icons/sun.png'}
                    title={'Amplio parque'}
                    details={[
                        'Piscina de 1,40mts de profundidad',
                        'Playa húmeda',
                        'Jacuzzi',
                        'Agua climatizada + conectores solares',
                        'Canchas de voley y futbol'
                    ]}
                />
            </div>

            <div className={styles.card}>
                <FeatureCard
                    src={'/icons/security.png'}
                    title={'Seguridad 24hs al día'}
                    details={[
                        'Cerradura electrónica',
                        'Portón eléctrico',
                        'Matafuegos',
                        'Luz de emergencia',
                        'Detector de monóxido de carbono'
                    ]}
                />
            </div>

            <div className={styles.card}>
                <FeatureCard
                    src={'/icons/puzzle.png'}
                    title={'Salón de encuentro'}
                    details={[
                        'Contamos con un Playroom de uso común para aquellos que opten ' +
                        'por alquilar ambas cabañas en simultáneo'
                    ]}
                />
            </div>
        </motion.main>
    )
}