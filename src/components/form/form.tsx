"use client";
import {FormEvent, useState} from "react";
import { motion } from "framer-motion";
import styles from "./form.module.css";
import SuccessAlert from "@/components/successAlert/successAlert";

export default function Form() {

    const [show, setShow] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        tel: '',
        cant: '',
        date1: '',
        date2: ''
    });

    const changeState = (e: React.FormEvent) =>{
        e.preventDefault();
        setShow(true);
    }

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmitForm = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setMessage('');

        try {
            const response = await fetch("/api/reserve", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (result.ok) {
                setMessage('¡Reserva enviada con éxito! Nos pondremos en contacto pronto.');
                setFormData({ name: '', tel: '', cant: '', date1: '', date2: '' });
            } else {
                setMessage(`Error al enviar: ${result.error || 'Inténtelo de nuevo más tarde.'}`);
            }
        } catch (Error) {
            setMessage('Ocurrió un error de red. Por favor, revise su conexión.');
        } finally {
            setIsSubmitting(false);
        }
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

        <form className={styles.formProperties} onSubmit={handleSubmitForm}>
          <div className={styles.formInputsProperties}>
              <label>
                  Nombre y apellido
                  <input
                      className={styles.inputProperties}
                      type="text"
                      name="name"
                      id="name"
                      placeholder={"Nombre y apellido"}
                      required
                      value={formData.name}
                      onChange={handleChange}
                  />
              </label>
              <label htmlFor={"tel"}>
                  Número de teléfono
                  <input
                      className={styles.inputProperties}
                      type="text"
                      id="tel"
                      name="tel"
                      placeholder={"Número de telefono"}
                      required
                      value={formData.tel}
                      onChange={handleChange}
                  />
              </label>
              <label htmlFor={"cant"}>
              Cantidad de huespedes
              <input
                className={styles.inputProperties}
                type="text"
                id="cant"
                name="cant"
                placeholder={"Cantidad de huespedes"}
                value={formData.cant}
                required
                onChange={handleChange}
              />
            </label>
            <div className={styles.lastFormRow}>
              <div className={styles.datesInputsProperties}>
                <label htmlFor={"date1"}>
                  Fecha de ingreso (estimada)
                  <input type="date" className={styles.inputProperties} name="date1" value={formData.date1} onChange={handleChange} />
                </label>
                <label htmlFor={"date2"}>
                  Fecha de salida (estimada)
                  <input type="date" className={styles.inputProperties} name="date2" value={formData.date2} onChange={handleChange} />
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
                  disabled={isSubmitting}
                >
                    {isSubmitting ? 'Enviando...' : 'Enviar consula'}
                </motion.button>
                  {!isSubmitting && (
                      <SuccessAlert
                          message1={message}
                      />
                  )}
              </div>
            </div>
          </div>
        </form>
      </div>
    );
}