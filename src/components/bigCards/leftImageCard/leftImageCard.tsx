import styles from './leftImageCard.module.css';
import Image from 'next/Image';

type Props = {
    image: string;
    name: string;
    cantGuests: number;
    description: string;
    forbidden: string;
}

export default function LeftImageCard({image, name, cantGuests, description, forbidden} = Props) {
    return (
        <main className={styles.main}>
            <div className={styles.image}>
                <Image
                    src={image}
                    alt={'imagen principal del departamento'}
                    fill
                />
            </div>

            <div className={styles.info}>
                <h1>{name}</h1>
                <h2>{cantGuests}</h2>
                <h5>{description}</h5>
                <FeaturesCard/>
                <h5>{forbidden}</h5>

                <SeeMoreButton/>
            </div>
        </main>
    )
}