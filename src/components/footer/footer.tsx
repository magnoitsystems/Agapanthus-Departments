import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

export default function footer(){
    return(
        <footer className={styles.footerProperties}>
            <div className={styles.mainFooterProperties}>
                <div className={styles.logoProperties}>
                    <Image src={"/logos/rectangular.png"} alt={"Logo agapanthus"} width={500} height={100} />
                </div>
                <div className={styles.redirectionsProperties}>
                    <div className={styles.iconsProperties}>
                        <div className={styles.iconPhoneProperties}>
                            <Link href={""}>
                                <Image src={"/icons/phone.png"} alt={"Icono de telefono"} width={49} height={49}/>
                            </Link>
                        </div>
                        <Link href={""}>
                            <Image src={"/icons/instagram.png"} alt={"Icono de instagram"} width={75} height={75}/>
                        </Link>
                        <Link href={""}>
                            <Image src={"/icons/facebook.png"} alt={"Icono de facebook"} width={75} height={75}/>
                        </Link>
                    </div>
                    <div className={styles.redirectionSideProperties}>
                        <a href={"/"}>Inicio</a>
                        <a href={"/complejo"}>Complejo</a>
                        <a href={"/cabaña"}>Cabañas</a>
                        <a href={"/reserva"}>Reservas</a>
                    </div>
                </div>
            </div>
            <div className={styles.footerWithCopyright}>
                <div className={styles.copyrightProperties}>
                    <span>Copyright ©2025. Designed by Magno</span>
                </div>
                <div className={styles.logoMagnoProperties}>
                    <Image src={"/magno/logo.png"} alt={"Logo magno"} width={82} height={86}/>
                </div>
            </div>
        </footer>
    )
}