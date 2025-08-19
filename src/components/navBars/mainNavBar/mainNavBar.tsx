import styles from './mainNavBar.module.css';
import Image from 'next/image';

export default function MainNavBar() {
    return (
        <main className={styles.main}>
            <nav className={styles.nav}>
                <Image
                    src={'/logos/rectangular.png'}
                    alt={'logo rectangular de Agapanthus - Cabañas Las Marias'}
                    width={444}
                    height={90}
                />
            </nav>
        </main>
    )
}