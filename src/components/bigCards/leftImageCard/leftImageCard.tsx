'use client';

import { motion } from "framer-motion";
import styles from './leftImageCard.module.css';
import Image from 'next/image';
import SeeMoreButton from "@/components/bigCards/seeMoreButton";
import FeaturesCard from "@/components/bigCards/featuresCard";

type Props = {
    image: string;
    name: string;
    cantGuests: number;
    description: string;
    forbidden: string;
}

export default function LeftImageCard({ image, name, cantGuests, description, forbidden }: Props) {
    return (
        <motion.main
            className={styles.main}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            {/* Imagen animada desde la izquierda */}
            <motion.div
                className={styles.image}
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <Image
                    src={image}
                    alt={"imagen principal del departamento"}
                    fill
                    style={{ objectFit: "cover" }}
                />
            </motion.div>

            {/* Info animada desde la derecha */}
            <motion.div
                className={styles.info}
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <h1>{name}</h1>
                    <h2>Departamento apto {cantGuests} personas</h2>
                </motion.div>

                <motion.h5
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    {description}
                </motion.h5>

                <FeaturesCard bathrooms={5} dorms={3} />

                <motion.h5
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    {forbidden}
                </motion.h5>

                <SeeMoreButton personalizedClassName={'dark'} />
            </motion.div>
        </motion.main>
    );
}
