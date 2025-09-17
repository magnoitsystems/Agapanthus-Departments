import styles from './googleMaps.module.css';

export default function GoogleMaps() {
    return (
        <main className={styles.main}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3173.2499756862035!2d-59.083074200000006!3d-37.31290599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9590e1002dddacf3%3A0x7eda105e7e3f10ab!2sCaba%C3%B1as%20Agapanthus%20Las%20Marias!5e0!3m2!1ses!2sar!4v1757460737674!5m2!1ses!2sar"
                width="100%"
                height="400"
                style={{border: 0}}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </main>

    )
}