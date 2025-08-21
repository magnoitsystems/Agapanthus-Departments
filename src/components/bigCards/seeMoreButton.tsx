// SeeMoreButton.tsx
import Link from 'next/link'; 
import styles from './bigCards.module.css';
import {abyssinica} from "@/app/ui/fonts";

type Props = {
    personalizedClassName: string;
    cardId: number;
}

export default function SeeMoreButton({ personalizedClassName, cardId }: Props) {
    return (
        <Link 
            href={{ pathname: "/detalles", query: { id: cardId } }} 
            className={`${abyssinica.className} ${styles.button} ${styles[personalizedClassName]}`}
        >
            <h4>Ver más</h4>
        </Link>
    )
}
