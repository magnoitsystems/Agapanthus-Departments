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
                    <h4>Nuestro complejo</h4>
                </div>

                <div className={`${styles.section} ${styles.dropdown}`}>
                    <h4>Cabañas</h4>
                </div>

                <div className={`${styles.section} ${styles.classic}`}>
                    <h4>Reservas</h4>
                </div>
            </div>
        </main>
    )
}