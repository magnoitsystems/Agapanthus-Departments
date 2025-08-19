"use client";

import { motion } from "framer-motion";
import styles from "./welcome.module.css";

export default function Welcome() {
    return (
        <motion.main
            className={styles.main}
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
        >
            <h1>
                Hospédese en la ciudad de Tandil junto a nosotros
            </h1>
            <h5>
                Te invitamos a disfrutar de unas vacaciones inolvidables en nuestros cómodos departamentos, ubicados en el corazón de
                una ciudad que lo tiene todo. Nuestros departamentos están totalmente equipados para que te sientas como en casa, con una
                atención personalizada y la comodidad que merecés. Ideal para familias, parejas o grupos de amigos que buscan
                descanso y conexión con la naturaleza sin alejarse de la ciudad.
            </h5>
        </motion.main>
    );
}