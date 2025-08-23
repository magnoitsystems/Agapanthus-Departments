"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./form.module.css";
import SuccessAlert from "@/components/successAlert/successAlert";

export default function Form() {
    const [showAlert, setShowAlert] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setShowAlert(true);
    };

    return (
      <div className={styles.formSectionProperties}>
        <div className={styles.infoProperties}>
          <span>Consultar estadía</span>
          <p>
            Brindanos tus datos para la reserva y nos comunicaremos a la
            brevedad para informarte la mejor opción para la misma.
          </p>
        </div>

        <form className={styles.formProperties} onSubmit={handleSubmit}>
          <div className={styles.formInputsProperties}>
            <label>
              Nombre y apellido
              <input
                className={styles.inputProperties}
                type="text"
                name="nameAndLastname"
                placeholder={"Nombre y apellido"}
                required
              />
            </label>
            <label>
              Cantidad de huespedes
              <input
                className={styles.inputProperties}
                type="number"
                name="guests"
                placeholder={"Cantidad de huespedes"}
                required
              />
            </label>
            <div className={styles.lastFormRow}>
              <div className={styles.datesInputsProperties}>
                <label>
                  Fecha de ingreso (estimada)
                  <input type="date" className={styles.inputProperties} />
                </label>
                <label>
                  Fecha de salida (estimada)
                  <input type="date" className={styles.inputProperties} />
                </label>
              </div>

              <div className={styles.buttonProperties}>
                <motion.button
                  type="submit"
                  animate={{
                    y: [0, -12, 0],
                    backgroundColor: ["#60A68F", "#31594C", "#60A68F"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  Enviar consulta
                </motion.button>
              </div>
            </div>
          </div>
        </form>

        {showAlert && (
          <SuccessAlert
            message1="¡Gracias por contactarnos!"
            message2="Esperamos verte pronto en nuestro complejo :)"
            submessage="¡Mientras esperas una respuesta te invitamos a seguirnos en nuestras redes!"
            onClose={() => setShowAlert(false)}
          />
        )}
      </div>
    );
}