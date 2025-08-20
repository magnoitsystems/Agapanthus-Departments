'use client'

import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

export default function footer(){

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return(
        <footer className={styles.footerProperties}>
            <div className={styles.logoProperties}>
                <Image
                    src="/logos/rectangular.png"
                    alt="Ejemplo"
                    fill
                    className="object-cover"
                />
            </div>
            <div className={styles.mainFooterProperties}>
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
                    <h4 onClick={() => scrollToSection('nav')}>Inicio</h4>
                    <h4 onClick={() => scrollToSection('nuestro-complejo')}>Complejo</h4>
                    <h4 onClick={() => scrollToSection('cabanas')}>Cabañas</h4>
                    <h4 onClick={() => scrollToSection('reservas')}>Reservas</h4>
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