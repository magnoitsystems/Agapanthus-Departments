import styles from './successAlert.module.css';
import Image from "next/image";

type Props = {
    message1: string,
    message2: string,
    submessage: string,
    onClose: () => void;
}

export default function SuccessAlert({message1, message2, submessage, onClose}: Props) {
    return (
        <main className={styles.main}>
            <div className={styles.cross} onClick={onClose} style={{cursor: "pointer"}}>
                <Image
                    src={'/icons/X.png'}
                    alt={'cruz para cerrar cartel'}
                    width={24}
                    height={24}
                />
            </div>
            <div className={styles.info}>
                <div className={styles.title}>
                    <h2>{message1}</h2>
                    <h2>{message2}</h2>
                </div>
                <div className={styles.details}>
                    <div className={styles.submessage}>
                        <h4>{submessage}</h4>
                    </div>
                    <div className={styles.socialMedia}>
                        <Image
                            src={"/icons/instagram.png"}
                            alt={"instagram logo"}
                            width={44}
                            height={44}
                        />
                        <Image
                            src={"/icons/facebook.png"}
                            alt={"facebook logo"}
                            width={44}
                            height={44}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
