import styles from './rightImageCard.module.css';
import Image from 'next/Image';
import SeeMoreButton from "@/components/bigCards/seeMoreButton";
import FeaturesCard from "@/components/bigCards/featuresCard";

type Props = {
    image: string;
    name: string;
    cantGuests: number;
    description: string;
    forbidden: string;
}

export default function RightImageCard({image, name, cantGuests, description, forbidden} : Props) {
    return (
        <main className={styles.main}>
            <div className={styles.topImage}>
                <Image
                    src={image}
                    alt={"imagen principal del departamento"}
                    fill
                    style={{objectFit: "cover"}}
                />
            </div>

            <div className={styles.info}>
                <div>
                    <h1>{name}</h1>
                    <h2>Departamento apto {cantGuests} personas</h2>
                </div>
                <h5>{description}</h5>
                <FeaturesCard bathrooms={5} dorms={3}/>
                <h5>{forbidden}</h5>

                <SeeMoreButton
                    personalizedClassName={'light'}
                />
            </div>

            <div className={styles.bottomImage}>
                <Image
                    src={image}
                    alt={"imagen principal del departamento"}
                    fill
                    style={{objectFit: "cover"}}
                />
            </div>
        </main>
    );
}