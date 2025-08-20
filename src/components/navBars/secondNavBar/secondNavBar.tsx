'use client'

import styles from "./secondNavBar.module.css";
import Image from "next/image";
import Link from "next/link";

export default function secondNavBar(){
    return(
        <nav className={styles.navBarProperties}>
            <div className={styles.imageLogoProperties}>
                <Image src={"/logos/white.png"} alt={"Logo complejo"} fill
                       className="object-cover"/>
            </div>
            <div className={styles.navSectionsProperties}>
                <Link href="/#nuestro-complejo"><h4>Nuestro complejo</h4></Link>
                <Link href="/#cabanas"><h4>Cabañas</h4></Link>
                <Link href="/#reservas"><h4>Reservas</h4></Link>
            </div>
        </nav>
    );
}