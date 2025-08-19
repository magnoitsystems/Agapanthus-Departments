import styles from "./form.module.css";

export default function form(){
    return(
        <div className={styles.formSectionProperties}>
            <div className={styles.infoProperties}>
                <span>Consultar estadía</span>
                <p>Brindanos tus datos para la reserva y nos comunicaremos a la brevedad para informarte la mejor opción para la misma.</p>
            </div>
            <form className={styles.formProperties}>
                <div className={styles.formInputsProperties}>
                    <label> Nombre y apellido <input className={styles.inputProperties} type="text" name="nameAndLastname" placeholder={"Nombre y apellido"} required/> </label>
                    <label> Cantidad de huespedes <input className={styles.inputProperties} type="number" name="nameAndLastname" placeholder={"Cantidad de huespedes"} required/> </label>
                    <div className={styles.datesInputsProperties}>
                        <label> Fecha de ingreso (estimada) <input type="date" className={styles.inputProperties}/> </label>
                        <label> Fecha de salida (estimada) <input type="date" className={styles.inputProperties}/> </label>
                    </div>
                </div>
                <div className={styles.buttonProperties}>
                    <button>Enviar consulta</button>
                </div>
            </form>
        </div>
    );
}