import Link from 'next/link'; // Importamos el componente Link de Next.js
import styles from './bigCards.module.css';
import {abyssinica} from "@/app/ui/fonts";

type Props = {
    personalizedClassName: string;
}

export default function SeeMoreButton({personalizedClassName}: Props) {
    return (
        <Link href="/detalles" className={`${abyssinica.className} ${styles.button} ${styles[personalizedClassName]}`}>
            <h4>Ver más</h4>
        </Link>
    )
}
