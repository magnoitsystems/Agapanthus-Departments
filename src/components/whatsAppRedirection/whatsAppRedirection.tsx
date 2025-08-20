import styles from './whatsAppRedirection.module.css'
import Image from "next/image";
import Link from "next/link";

export default function WhatsAppRedirection() {
    return (
        <div className={styles.wpButton}>
            <Link href="https://wa.me/2494543729">
            <Image
                src={'/logos/wpRedirection.png'}
                alt={'whatsapp redirection'}
                width={72}
                height={66}
                className={styles.desktopImage}
            />
            <Image
                src={'/logos/wpRedirection.png'}
                alt={'whatsapp redirection'}
                width={54}
                height={50}
                className={styles.mobileImage}
            />
            </Link>
        </div>
    )
}