import styles from './mainNavBar.module.css';
import Image from 'next/image';

export default function MainNavBar() {
    return (
        <main className={styles.main}>
            <nav className={styles.nav}>
                <Image
                    src={'/logos/blanco.png'}
                    alt={'logo rectangular de Agapanthus - Cabañas Las Marias'}
                    width={444}
                    height={90}
                />
            </nav>

            <div className={styles.sectionsBar}>
                <div className={`${styles.section} ${styles.classic}`}>
                    <h3>Nuestro complejo</h3>
                </div>

                <div className={`${styles.section} ${styles.dropdown}`}>
                    <h3>Cabañas</h3>
                </div>

                <div className={`${styles.section} ${styles.classic}`}>
                    <h3>Reservas</h3>
                </div>
            </div>
        </main>
    )
}