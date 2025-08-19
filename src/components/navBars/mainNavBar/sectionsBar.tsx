import styles from "@/components/navBars/mainNavBar/mainNavBar.module.css";

export default function SectionsBar() {
    return (
        <main className={styles.sectionsBar}>
            <div className={`${styles.section} ${styles.classic}`}>
                <h3>Nuestro complejo</h3>
            </div>

            <div className={`${styles.section} ${styles.dropdown}`}>
                <div className={styles.mainInfo}>
                    <h3>Cabañas</h3>
                    {/*<Image
                src={"/icons/downSemiArrow.png"}
                alt={"semi flecha apuntando hacia abajo"}
                width={24}
                height={24}
              />*/}
                </div>

                <div className={styles.deptos}>
                    <h3>AQUA - 3 personas</h3>
                    <h3>LAVANDA - 5 personas</h3>
                </div>
            </div>

            <div className={`${styles.section} ${styles.classic}`}>
                <h3>Reservas</h3>
            </div>
        </main>
    )
}