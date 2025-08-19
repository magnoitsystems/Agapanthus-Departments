import styles from './bigCards.module.css';
import Image from 'next/Image';

type Props = {
    bathrooms: number;
    dorms: number;
}

export default function FeaturesCard({bathrooms, dorms}: Props) {
    return (
        <main className={styles.featuresCard}>
            <div className={styles.feature}>
                <Image
                    src={'/icons/wifi.png'}
                    alt={'icono de wifi'}
                    width={20}
                    height={20}
                />
                <h6>Wi-Fi</h6>
            </div>

            <div className={styles.feature}>
                <Image
                    src={'/icons/bathrooms.png'}
                    alt={'icono de baño'}
                    width={20}
                    height={20}
                />
                <h6>Baños</h6>
            </div>

            <div className={styles.feature}>
                <Image
                    src={'/icons/dorms.png'}
                    alt={'icono de dormitorio'}
                    width={20}
                    height={20}
                />
                <h6>Dormitorios</h6>
            </div>

            <div className={styles.feature}>
                <Image
                    src={'/icons/whiteClothes.png'}
                    alt={'icono de ropa blanca'}
                    width={20}
                    height={20}
                />
                <h6>Ropa blanca</h6>
            </div>
        </main>
    )
}