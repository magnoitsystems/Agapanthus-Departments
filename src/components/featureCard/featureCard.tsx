import styles from './featureCard.module.css';
import Image from 'next/image';

type Props = {
    src : string;
    title: string;
    details: string[];
}

export default function FeatureCard({src, title, details}: Props) {
    return (
      <main className={styles.main}>
        <div className={styles.image}>
          <Image
            src={src}
            alt={"icono relacionado a la caracteristica mencionada"}
            width={150}
            height={150}
          />
        </div>

        <div className={styles.details}>
          <h2>{title}</h2>

          <ul className={styles.list}>
            {details.map((detail, index) => (
              <li key={index}><h3>{detail}</h3></li>
            ))}
          </ul>
        </div>
      </main>
    );
}