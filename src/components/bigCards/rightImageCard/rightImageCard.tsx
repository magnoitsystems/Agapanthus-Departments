'use client'

import styles from './rightImageCard.module.css';
import Image from 'next/image';
import SeeMoreButton from "@/components/bigCards/seeMoreButton";
import FeaturesCard from "@/components/bigCards/featuresCard";
import { motion } from "framer-motion";

type Props = {
    image: string;
    name: string;
    cantGuests: number;
    description: string;
    forbidden: string;
}

export default function RightImageCard({image, name, cantGuests, description, forbidden} : Props) {
    return (
        <main className={styles.main}>
            {/* Imagen superior - entra desde la derecha */}
            <motion.div
                className={styles.topImage}
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <Image
                    src={image}
                    alt={"imagen principal del departamento"}
                    fill
                    style={{objectFit: "cover"}}
                />
            </motion.div>

            {/* Info - entra desde la izquierda */}
            <motion.div
                className={styles.info}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <div>
                    <h1>{name}</h1>
                    <h2>Departamento apto {cantGuests} personas</h2>
                </div>
                <h5>{description}</h5>
                <FeaturesCard bathrooms={5} dorms={3}/>
                <h5>{forbidden}</h5>

                <SeeMoreButton
                    personalizedClassName={'light'}
                    cardId={2}
                />
            </motion.div>

            {/* Imagen inferior - entra desde la derecha */}
            <motion.div
                className={styles.bottomImage}
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
            >
                <Image
                    src={image}
                    alt={"imagen principal del departamento"}
                    fill
                    style={{objectFit: "cover"}}
                />
            </motion.div>
        </main>
    );
}
